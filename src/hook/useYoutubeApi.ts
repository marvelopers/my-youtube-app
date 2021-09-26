import { useEffect, useCallback } from 'react';

declare let window: any;

export const useYoutubeApi = (videoIds: string[]) => {
  const onPlayerReady = useCallback(
    (event: any) => {
      console.log('onPlayerReady');
      event.target.loadPlaylist(videoIds, 0, 0, 'large');
    },
    [videoIds],
  );

  useEffect(() => {
    const youtubePlayer = new window.YT.Player('ytplayer', {
      height: '100%',
      width: '100%',
      events: {
        onReady: onPlayerReady,
        onStateChange: (event: any) => {
          console.log('onStateChange', event);

          if (event.data === 1) {
            console.log('onStateChange', event);
          }
        },
      },
    });

    return () => {
      youtubePlayer.destroy();
    };
  }, [onPlayerReady, videoIds]);
};
