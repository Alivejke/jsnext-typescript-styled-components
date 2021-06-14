import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

interface Props {
  title: string;
};

const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  margin: 12px;
`;

const Main: React.FunctionComponent<Props> = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>

    <main>
      {children}
    </main>

    <Footer>
      Created by Dmytro Baltak as a test case for blu.com
    </Footer>
  </React.Fragment>
);

export default Main;