import SearchInput from '@/components/Input/SearchInput';
import './home.scss';
import React, { useState, useEffect } from 'react';
import RandomRecipe from '@/pages/home/components/display/random_recipe';

const Home: React.FC = () => {
  return (
    <div className="home home_details">
      <h1 className="home_title">What&apos;s for dinner?</h1>
      <SearchInput />
      <br />
      <RandomRecipe />
    </div>
  );
};

export default Home;
