import SearchInput from '@/components/Input/SearchInput';
import './home.scss';
type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div className="home home_details">
      <h1 className="home_title">What&apos;s for dinner?</h1>
      <h2 className="home_subtitle">{`${message}!`}</h2>
      <SearchInput />
    </div>
  );
};

export default Home;
