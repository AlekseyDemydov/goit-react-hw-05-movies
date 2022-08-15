import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from '../AppBar/AppBar';

// import Component from './Component/Component';
// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Review/Review';

// const Component = lazy(() => import('./Component/Component'));
const Movies = lazy(() => import('./Movies/Movies'));
const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <Suspense>
      {/* <Component> */}
      <AppBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exect path="movies" element={<Movies />} />
        <Route exect path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>

      {/* </Component> */}
    </Suspense>
  );
};
