type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div className="home">
      <h1 className="title">What&apos;s for dinner? {`${message}!`}</h1>
    </div>
  );
};

export default Home;
