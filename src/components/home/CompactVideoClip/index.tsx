import React from 'react';
import { Video } from 'src/model/youtube';
import * as Styles from './styles';

// import { useDispatch } from 'react-redux';
// import { youtubeActions } from 'src/features/youtube/youtubeSlice';

interface CompactVideoClipProps {
  video: Video;
  onClickVideo: (video: Video) => void;
}

const CompactVideoClip = ({ video, onClickVideo }: CompactVideoClipProps) => {
  const { snippet } = video;

  return (
    <Styles.Wrapper onClick={() => onClickVideo(video)}>
      <Styles.Img src={snippet.thumbnails.medium.url} alt="video thumbnail" />
      <Styles.Info>
        <Styles.Title>{snippet.title}</Styles.Title>
        <Styles.Channel>{snippet.channelTitle}</Styles.Channel>
      </Styles.Info>
    </Styles.Wrapper>
  );
};

export default CompactVideoClip;
