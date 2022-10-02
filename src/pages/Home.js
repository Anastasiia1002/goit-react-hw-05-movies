import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPopularApi } from '../api/api';
import Loader from '../components/Loader';
import s from './pages.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation();

  //   const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setStatus(Status.PENDING);
    getPopularApi()
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Please try again.');
        setStatus(Status.REJECTED);
      });
  }, []);

  //   const page = new URLSearchParams(location.search).get('page') ?? 1;
  //   useEffect(() => {
  //     setStatus(Status.PENDING);
  //     getTrendingApi(page)
  //       .then(data => {
  //         setMovies(data.articles);
  //         setStatus(Status.RESOLVED);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         setError('Oops');
  //         setStatus(Status.REJECTED);
  //       });
  //   }, [page]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && { error }}
      {status === Status.RESOLVED && (
        <div>
          <span className={s.title}>TRENDING</span>
          <ul className={s.list}>
            {movies.map(movie => (
              <li key={movie.id} className={s.ImageGalleryItem}>
                <Link
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : 'https://previews.123rf.com/images/studiostoks/studiostoks1602/studiostoks160200045/51904057-oops-%C3%BCberraschte-frau-pop-art-retro-stil-unerwartete-nachrichten-business-konzept.jpg?fj=1'
                    }
                    alt={movie.title}
                    className={s.image}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
