import SearchInput from '@/components/Input/SearchInput';
import './home.scss';
import React, { useState, useEffect } from "react";
import RandomRecipe from '@/components/display/random_recipe';

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div>
      <br />
      <SearchInput />
      <br />
      <RandomRecipe />
    </div>
  );
};

export default Home;
