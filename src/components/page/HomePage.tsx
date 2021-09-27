import React from 'react';
import { useSelector } from 'react-redux';
import { useLoadIFrameApi } from 'src/hook/useLoadIFrameApi';
import { selectYoutube } from 'src/selectors';
import { selectParams } from 'src/selectors/youtube';
import Layout from 'src/components/Layout';
import DefaultNoResult from 'src/components/common/DefaultNoResult';
import Loader from 'src/components/common/Loader';
import SearchResult from 'src/components/home/SearchResult';

const HomePage = () => {
  const { loadIFrame } = useLoadIFrameApi();
  const { isLoading, videoList } = useSelector(selectYoutube);
  const { q: searchTerm } = useSelector(selectParams);

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && searchTerm && videoList.playList.length === 0 && <DefaultNoResult searchTerms={searchTerm} />}
      {loadIFrame && searchTerm && <SearchResult />}
    </Layout>
  );
};

export default HomePage;
