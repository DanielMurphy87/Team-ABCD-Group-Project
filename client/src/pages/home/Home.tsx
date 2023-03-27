import SearchInput from '@/components/Input/SearchInput';
import './home.scss';
type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div className="home">
      <h1 className="title">What&apos;s for dinner?</h1>
      <h2>{`${message}!`}</h2>
      <SearchInput />
    </div>
  );
};

export default Home;
