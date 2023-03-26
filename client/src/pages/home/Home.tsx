import './home.scss';
import { SearchBar } from '@/components/search_bar';

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div className="home home_details">
      <h1 className="home__title">What&apos;s for dinner?</h1>
      <h2 className='home__subtitle'>{`${message}!`}</h2>
      <SearchBar searchData={[]} />
    </div>
  );
};

export default Home;
