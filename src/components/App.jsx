import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from './MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';

// const Layout = createAsyncComponent('./Layout');
const Home = lazy(() => import('../pages/Home'));
// const Movies = createAsyncComponent('../pages/Movies');
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MoviesDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Loader = lazy(() => import('./Loader'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
