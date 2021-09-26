/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Video } from 'src/model/youtube';
import HeartIcon from '../../icons/HeartIcon';
import * as Styles from './styles';

const YOUTUBE_EMBEB_URL = 'https://www.youtube.com/embed';

interface PlayerProps {
  video: Video;
}

const Player = ({ video }: PlayerProps) => {
  console.log('**sss');
  return (
    <Styles.Wrapper>
      <div>iframe</div>
      <iframe
        width="100%"
        height="374px"
        src={`${YOUTUBE_EMBEB_URL}/${video.id.videoId}`}
        frameBorder="0"
        allowFullScreen
      />
      <div>
        <h2>{video.snippet.title}</h2>
        <span>{video.snippet.channelTitle}</span>
        <HeartIcon />
        <p>{video.snippet.description}</p>
      </div>
    </Styles.Wrapper>
  );
};

export default Player;
