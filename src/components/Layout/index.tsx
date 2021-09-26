import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import SearchBar from 'src/components/common/SearchBar';
import { IPHONE_MAX } from 'src/styles/layout';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header>
      <SearchBar />
      <Space />
    </Header>
    {children}
  </Container>
);

export default Layout;

const Container = styled.main`
  max-width: 1024px;
  min-height: 100vh;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
`;

const Space = styled.div`
  flex: 1 1 38%;

  @media (max-width: ${IPHONE_MAX}px) {
    display: none;
  }
`;
