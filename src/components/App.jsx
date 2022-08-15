import { Route, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Component from './Component/Component';
import Home from './Home/Home';
import Movies from './Movies/Movies';

import MovieDet from './MovieDet/MovieDet';
import Cast from './Cast/Cast';
import Reviews from './Review/Review';

export const App = () => {
  return (
    <Component>
      <AppBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exect path="movies" element={<Movies />} />
        <Route exect path="movies/:movieId" element={<MovieDet />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Component>
  );
};
