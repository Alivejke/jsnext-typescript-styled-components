import Main from '../layouts/Main';

const HomePage = (props) => {
  console.log(props);

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
  return {};
}

export default HomePage;