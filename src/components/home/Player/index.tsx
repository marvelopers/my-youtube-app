import React from 'react';
import { useGetLikeVideo } from 'src/hook/useGetLikeVideo';
import { useYoutubeApi } from 'src/hook/useYoutubeApi';
import { Video } from 'src/model/youtube';
import HeartIcon from 'src/components/icons/HeartIcon';
import * as Styles from './styles';

interface PlayerProps {
  playlist: Video[];
  video: Video;
}

const Player = ({ playlist, video }: PlayerProps) => {
  const { onHeart, handleClickHeart } = useGetLikeVideo(video.id.videoId);
  useYoutubeApi(playlist);

  return (
    <Styles.Wrapper>
      <Styles.Frame id="ytplayer" />
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
