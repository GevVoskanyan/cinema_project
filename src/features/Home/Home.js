import React from 'react';
import './Home.scss';
import Wrapper from '../Wrapper/Wrapper';
import SearchBar from '../SearchBar/SearchBar';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeFilms from '../HomeFilms/HomeFilms';
import Comments from '../Comments/Comments';
import { latest } from '../../data/data';

function Home() {
  return (
    <section className="home">
      <Wrapper>
        <SearchBar />
        <HomeBanner />
        <HomeFilms title="Latest" data={latest} />
        <HomeFilms title="Coming soon" data={latest} />
        <HomeFilms title="Featured movies" data={latest} />
        <button type="button" className="more">
          More
        </button>
        <Comments />
      </Wrapper>
    </section>
  );
}

export default Home;
