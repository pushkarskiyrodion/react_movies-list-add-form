import { useCallback, useState } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';

import { Movie } from './types/Movie';

import moviesFromServer from './api/movies.json';

export const App = () => {
  const [movies, setMovies] = useState(moviesFromServer);

  const addMovie = useCallback((movie: Movie) => {
    setMovies(state => ([
      ...state,
      movie,
    ]));
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={(movie: Movie) => {
            addMovie(movie);
          }}
        />
      </div>
    </div>
  );
};
