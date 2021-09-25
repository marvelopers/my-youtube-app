import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import SearchBar from '../SearchBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <SearchBar />
    {children}
  </Container>
);

export default Layout;

const Container = styled.main`
  border: 1px solid purple;
  max-width: 1024px;
  min-height: 100vh;
  margin: auto;
`;
