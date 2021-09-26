import { useEffect, useState } from 'react';

declare let window: any;

export const useLoadIFrameApi = () => {
  const [loadIFrame, setLoadIFrame] = useState<boolean>(false);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag: any = document.getElementsByTagName('script')[0] as any;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => {
      console.log('onYouTubeIframeAPIReady');
      setLoadIFrame(true);
      window.onYouTubeIframeAPIReady = null;
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);
  return { loadIFrame };
};
