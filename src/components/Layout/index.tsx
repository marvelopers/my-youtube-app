import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import SearchBar from 'src/components/common/SearchBar';

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
  max-width: 1024px;
  min-height: 100vh;
  margin: auto;
`;
