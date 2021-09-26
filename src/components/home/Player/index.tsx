import React from 'react';
import { useSelector } from 'react-redux';
import { useGetLikeVideo } from 'src/hook/useGetLikeVideo';
import { useYoutubeApi } from 'src/hook/useYoutubeApi';
import { Video } from 'src/model/youtube';
import { selectVideoList } from 'src/selectors/youtube';
import HeartIcon from '../../icons/HeartIcon';
import * as Styles from './styles';

// const YOUTUBE_EMBEB_URL = 'https://www.youtube.com/embed';

interface PlayerProps {
  video: Video;
}

const Player = ({ video }: PlayerProps) => {
  const { playList } = useSelector(selectVideoList);
  const { onHeart, handleClickHeart } = useGetLikeVideo(video.id.videoId);

  const playListIds = playList.map((prev) => prev.id.videoId);

  useYoutubeApi(playListIds);

  return (
    <Styles.Wrapper>
      <Styles.Frame id="ytplayer" />
      {/* <Styles.Frame id="ytplayer" src={`${YOUTUBE_EMBEB_URL}/${video.id.videoId}`} frameBorder="0" allowFullScreen /> */}
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
