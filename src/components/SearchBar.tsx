import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GREY_2, GREY_4 } from 'src/styles/colors';
import SearchIcon from './icons/SearchIcon';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder = '검색어를 입력하세요' }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <Wrapper>
      <input type="text" placeholder={placeholder} />
      <SearchIconButton>
        <SearchIcon />
      </SearchIconButton>
    </Wrapper>
  );
};

export default SearchBar;

// https://www.youtube.com/results?search_query=react

const Wrapper = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  position: relative;
  max-width: 68vw;
  height: 37px;
  border: 0.8px solid ${GREY_2};
  border-radius: 8px;
  box-sizing: border-box;

  padding: 10px 47px 10px 20px;

  input {
    width: 100%;
    height: 100%;
    border: none;
  }
  input::placeholder {
    color: ${GREY_4};
  }
`;

const SearchIconButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 37px;
  right: 12px;
`;
