import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import styled from '@emotion/styled';
// import { ModalHandler } from 'src/utils/ModalHandler';
// import { ModalType } from 'src/constants/modal';
import Layout from 'src/components/Layout';
import { DEFAULT_LIMIT } from 'src/constants/search';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';
import { Video } from 'src/model/youtube';
import { selectParams, selectVideoList } from 'src/selectors/youtube';
import Player from '../Player';
import Playlist from '../Playlist';

const HomePage = () => {
  const [watch, setWatch] = useState<Video>();
  const dispatch = useDispatch();
  const videoList = useSelector(selectVideoList);
  const { q: searchTerm } = useSelector(selectParams);

  const handleClickVideo = useCallback(
    (video: Video) => {
      setWatch(video);
      dispatch(youtubeActions.playedVideo(video?.id.videoId));
    },
    [dispatch],
  );

  useEffect(() => {
    if (searchTerm && videoList.playList.length <= DEFAULT_LIMIT) {
      handleClickVideo(videoList.playList[0]);
    }
  }, [handleClickVideo, searchTerm, videoList.playList]);

  return (
    <Layout>
      {searchTerm && watch && (
        <Wrapper>
          <Player video={watch} />
          <Playlist playList={videoList.playList} onClickVideo={handleClickVideo} />
        </Wrapper>
      )}
    </Layout>
  );
};

export default HomePage;

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
`;
