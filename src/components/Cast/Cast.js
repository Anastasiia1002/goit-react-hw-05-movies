import { getMovieCastApi } from '../../api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import s from './Cast.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const { movieId } = useParams();
  // const movieId = getMovieCastApi(id);
  const [actors, setActors] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCastApi(movieId)
      .then(cast => {
        if (cast.length === 0) {
          setStatus(Status.IDLE);
          return;
        }
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && { error }}
      {status === Status.RESOLVED && (
        <div className={s.list}>
          <span className={s.cast}>Cast</span>
          <div>
            <ul className={s.cards}>
              {actors.map(actor => (
                <li key={actor.name} className={s.card}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : 'https://previews.123rf.com/images/studiostoks/studiostoks1602/studiostoks160200045/51904057-oops-%C3%BCberraschte-frau-pop-art-retro-stil-unerwartete-nachrichten-business-konzept.jpg?fj=1'
                    }
                    alt={actor.name}
                    className={s.image}
                  />
                  <ul className={s.text}>
                    <li>{actor.name}</li>
                    <li>Character: {actor.character}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Cast;
