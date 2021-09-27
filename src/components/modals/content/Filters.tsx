import React from 'react';
import { useGetFilter } from 'src/hook/useGetFilter';
import styled from '@emotion/styled';
import { IPHONE_MAX } from 'src/styles/layout';
import { FilterList, FilterType } from 'src/constants/filter';
import FilterButton from 'src/components/common/button/FilterButton';

const Filters = () => {
  const { order, handleClickFilter } = useGetFilter();

  return (
    <List>
      {Object.keys(FilterList).map((key) => (
        <FilterButton
          key={key}
          text={FilterList[key as FilterType]}
          selected={order === key}
          onClick={() => handleClickFilter(key as FilterType)}
        />
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
