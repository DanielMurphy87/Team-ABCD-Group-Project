import './home.scss';
import { SearchBar } from '@/components/search_bar';

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div className="home">
      <h1 className="title">What&apos;s for dinner?</h1>
      <h2>{`${message}!`}</h2>
      <SearchBar searchData={[]} />
    </div>
  );
};

export default Home;
