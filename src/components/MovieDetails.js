import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  Outlet,
  //   useRouteMatch,
  //   Switch,
  //   Route,
  //   useHistory,
  //   useLocation,
} from 'react-router-dom';
import { getMovieIdApi } from '../api/api';
import Loader from '../components/Loader';
import Moment from 'react-moment';
import s from './MovieDetails.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieIdApi(movieId)
      .then(data => {
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Oops');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && { error }}
      {status === Status.RESOLVED && (
        <div className={s.lists}>
          <span className={s.title}>Movie</span>
          <div className={s.poster}>
            <div>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://previews.123rf.com/images/studiostoks/studiostoks1602/studiostoks160200045/51904057-oops-%C3%BCberraschte-frau-pop-art-retro-stil-unerwartete-nachrichten-business-konzept.jpg?fj=1'
                }
                alt={movie.title}
                className={s.image}
              />
            </div>
            <div>
              <ul className={s.list}>
                <li>
                  {movie.original_title} (
                  <Moment format="YYYY">{movie.release_date}</Moment>)
                </li>

                <li>User Score: {Math.trunc(movie.vote_average * 10)}%</li>
                <li>
                  Overvier
                  <p>{movie.overview}</p>
                </li>

                <li>
                  Genres
                  <ul>
                    {movie.genres.map(gen => (
                      <li key={gen.name}>{gen.name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className={s.links}>
              <li className={s.link}>
                <Link to="cast" className={s.a}>
                  Cast
                </Link>
              </li>
              <li className={s.link}>
                <Link to="reviews" className={s.a}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
