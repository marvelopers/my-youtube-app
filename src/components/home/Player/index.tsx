import React from 'react';
import { useGetLikeVideo } from 'src/hook/useGetLikeVideo';
import { Video } from 'src/model/youtube';
import HeartIcon from '../../icons/HeartIcon';
import * as Styles from './styles';

const YOUTUBE_EMBEB_URL = 'https://www.youtube.com/embed';

interface PlayerProps {
  video: Video;
  // onClickHeart?: () => void;
}

const Player = ({ video }: PlayerProps) => {
  const { onHeart, handleClickHeart } = useGetLikeVideo(video.id.videoId);

  return (
    <Styles.Wrapper>
      <Styles.Frame src={`${YOUTUBE_EMBEB_URL}/${video.id.videoId}`} frameBorder="0" allowFullScreen />
      <Styles.Info>
        <Styles.Title>{video.snippet.title}</Styles.Title>
        <Styles.Sub>
          <Styles.ChannelInfo>{video.snippet.channelTitle}</Styles.ChannelInfo>
          <Styles.ButtonWrapper onClick={handleClickHeart}>
            <HeartIcon selected={onHeart} />
          </Styles.ButtonWrapper>
        </Styles.Sub>
        <Styles.Desc>{video.snippet.description}</Styles.Desc>
      </Styles.Info>
    </Styles.Wrapper>
  );
};

export default Player;
