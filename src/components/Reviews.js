import { getMovieReviewApi } from '../api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import s from './Reviews.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getMovieReviewApi(movieId)
      .then(rev => {
        // if (rev.length === 0) {
        //   setStatus(Status.IDLE);
        //   return;
        // }
        setReviews(rev);
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
        <div className={s.reviews}>
          <span className={s.title}>Reviews</span>
          {reviews.length !== 0 ? (
            <ul className={s.lists}>
              {reviews.map(rev => (
                <li key={rev.created_at} className={s.list}>
                  Author: {rev.author}
                  <p>{rev.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            'Sorry, there are currently no reviews!'
          )}
        </div>
      )}
    </>
  );
};
export default Reviews;
