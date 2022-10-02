import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchApi } from '../api/api';
import s from './pages.module.css';
import { ImSearch } from 'react-icons/im';
import Loader from '../components/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const Movies = () => {
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  //   const location = useLocation();

  const changeQuery = e => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);
    getSearchApi(query)
      .then(data => {
        if (data.results.length === 0) {
          alert(`Відсутній фільм з назвою ${query}`);
          setStatus(Status.REJECTED);
          // return;
        }
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Oops');
        setStatus(Status.REJECTED);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Будь ласка, введіть дані для пошуку!');
      return;
    }
    setQuery(search);
  };

  return (
    <>
      <div>
        <span className={s.title}>Movies</span>
        <div className={s.form}>
          <form className={s.searchForm} onSubmit={handleSubmit}>
            <button type="submit" className={s.searchFormButton}>
              <ImSearch />
              <span className={s.searchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.searchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
              onChange={changeQuery}
            />
          </form>
        </div>
      </div>

      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && { error }}
      {status === Status.RESOLVED && (
        <div>
          <ul className={s.list}>
            {movies.map(movie => (
              <li key={movie.id} className={s.ImageGalleryItem}>
                <Link
                  to={{
                    pathname: `${movie.id}`,
                    // state: { from: location },
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
export default Movies;
