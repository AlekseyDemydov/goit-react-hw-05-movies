import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import AppBar from '../AppBar/AppBar';

// import Component from './Component/Component';
// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Review/Review';

// const Component = lazy(() => import('./Component/Component'));
const AppBar = lazy(() => import('./AppBar/AppBar'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* </Component> */}
    </Suspense>
  );
};
