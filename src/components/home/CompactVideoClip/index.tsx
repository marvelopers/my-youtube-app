import React from 'react';
import HeartIcon from 'src/components/icons/HeartIcon';
import { useGetLikeVideo } from 'src/hook/useGetLikeVideo';
import { Video } from 'src/model/youtube';
import * as Styles from './styles';

interface CompactVideoClipProps {
  video: Video;
  onClickVideo: (video: Video) => void;
}

const CompactVideoClip = ({ video, onClickVideo }: CompactVideoClipProps) => {
  const { snippet } = video;
  const { onHeart } = useGetLikeVideo(video.id.videoId);

  return (
    <Styles.Wrapper onClick={() => onClickVideo(video)}>
      <Styles.ImgWrapper>
        {onHeart && (
          <Styles.IconWrapper>
            <HeartIcon selected={onHeart} />
          </Styles.IconWrapper>
        )}
        <Styles.Img src={snippet.thumbnails.medium.url} alt="video thumbnail" />
      </Styles.ImgWrapper>
      <Styles.Info>
        <Styles.Title>{snippet.title}</Styles.Title>
        <Styles.Channel>{snippet.channelTitle}</Styles.Channel>
      </Styles.Info>
    </Styles.Wrapper>
  );
};

export default CompactVideoClip;
