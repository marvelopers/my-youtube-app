import { useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { selectVideoList } from 'src/selectors/youtube';
import { Video } from 'src/model/youtube';

declare let window: any;

export const useYoutubeApi = (playlist: Video[]) => {
  const { playIndex } = useSelector(selectVideoList);
  const playListIds = playlist.map((prev) => prev.id.videoId);

  const onPlayerReady = useCallback(
    (event: any) => {
      event.target.loadPlaylist(playListIds, playIndex, 0, 'large');
    },
    [playIndex, playListIds],
  );

  const onPlayerStateChange = useCallback((event: any) => {
    if (event.data === 1) {
      console.log('onStateChange');
    }
  }, []);

  useEffect(() => {
    const youtubePlayer = new window.YT.Player('ytplayer', {
      height: '100%',
      width: '100%',
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    return () => {
      youtubePlayer.destroy();
    };
  }, [onPlayerReady, onPlayerStateChange, playlist]);
};
