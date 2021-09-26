/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Video } from 'src/model/youtube';
import HeartIcon from '../../icons/HeartIcon';
import * as Styles from './styles';

const YOUTUBE_EMBEB_URL = 'https://www.youtube.com/embed';

interface PlayerProps {
  video: Video;
  onClickHeart?: () => void;
}

const Player = ({ video, onClickHeart }: PlayerProps) => {
  console.log('**sss');
  // const hasLike = true;
  return (
    <Styles.Wrapper>
      <Styles.Frame src={`${YOUTUBE_EMBEB_URL}/${video.id.videoId}`} frameBorder="0" allowFullScreen />
      <Styles.Info>
        <Styles.Title>{video.snippet.title}</Styles.Title>
        <Styles.Sub>
          <Styles.ChannelInfo>{video.snippet.channelTitle}</Styles.ChannelInfo>
          <Styles.ButtonWrapper onClick={onClickHeart}>
            <HeartIcon selected />
          </Styles.ButtonWrapper>
        </Styles.Sub>
        <Styles.Desc>{video.snippet.description}</Styles.Desc>
      </Styles.Info>
    </Styles.Wrapper>
  );
};

export default Player;
