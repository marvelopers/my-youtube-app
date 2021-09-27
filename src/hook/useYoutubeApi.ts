import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVideoList } from 'src/selectors/youtube';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';
import { Video } from 'src/model/youtube';

declare let window: any;

export const useYoutubeApi = (playlist: Video[]) => {
  const dispatch = useDispatch();
  const { playIndex } = useSelector(selectVideoList);
  const playListIds = playlist.map((prev) => prev.id.videoId);

  const onPlayerReady = useCallback(() => {
    // event.target.loadPlaylist(playListIds, playIndex, 0, 'large');
  }, []);

  const onPlayerStateChange = useCallback(
    (event: any) => {
      if (event.data === 0 && playlist.length > playIndex + 1) {
        dispatch(youtubeActions.setPlayIndex(playIndex + 1));
        dispatch(youtubeActions.playedVideo(event.target.playerInfo.videoData.video_id));
      }
    },
    [dispatch, playIndex, playlist.length],
  );

  useEffect(() => {
    const youtubePlayer = new window.YT.Player('ytplayer', {
      height: '100%',
      width: '100%',
      videoId: playListIds[playIndex],
      playerVars: {
        autoplay: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    return () => {
      youtubePlayer.destroy();
    };
  }, [onPlayerReady, onPlayerStateChange, playIndex, playListIds, playlist]);
};
