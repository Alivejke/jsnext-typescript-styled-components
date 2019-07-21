import { NextPage } from 'next';

import Main from '../layouts/Main';

const HomePage: NextPage<{ products: Array<Object> }> = ({ products }) => {
  console.log(products);

  return (
    <Main title="Case Frontend Engineer blu.com">
      <div>Welcome</div>
    </Main>
  );
};

HomePage.getInitialProps = async ({ req }) => {
  // const res = await getPosts();
  // const json = await res.json();
  // return { posts: json };
  return {
  	products: [],
  };
}

export default HomePage;