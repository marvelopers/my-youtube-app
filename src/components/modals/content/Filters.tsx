import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { FilterList, FilterType } from 'src/constants/filter';
import { IPHONE_MAX } from 'src/styles/layout';
import FilterButton from '../../common/FilterButton';

const Filters = () => {
  const handleClickFilter = useCallback(() => {}, []);
  return (
    <List>
      {Object.keys(FilterList).map((key) => (
        <FilterButton key={key} text={FilterList[key as FilterType]} onClick={handleClickFilter} />
      ))}
    </List>
  );
};

export default Filters;

const List = styled.div`
  button {
    display: inline-block;
    margin: 5px;
  }

  @media (max-width: ${IPHONE_MAX}px) {
    button {
      display: inline-block;
      margin: 10px 0px 0px;
    }
  }
`;
