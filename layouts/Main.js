import Head from 'next/head';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  margin: 12px;
`;

export default ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>

    <main>
      {children}
    </main>

    <Footer>
      Created by Dmytro Baltak as a test assignment
    </Footer>
  </React.Fragment>
);