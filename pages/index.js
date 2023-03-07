const Home = ({ date }) => {
  return <>{date}</>;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      date: new Date().toString(),
    },
    revalidate: 1,
  };
}
