import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function with .then method
  // const fetchMoviesHandler = () => {
  //   // default method is GET
  //   fetch('https://swapi.dev/api/films')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const TransformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           releaseDate: movieData.release_date,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       setMovies(TransformedMovies);
  //     });
  // };

  // with Async-await

  const fetchMoviesHandler = useCallback(async () => {
    // we are using useCallback here because we have added fetchMoviesHandler as a dependency in the useEffect so that if fetchMoviesHandler changes the App rerender.

    // when fetchMoviesHandler changes? when the function contain any external state variable which can change with other events. However here we do not have any event hence no external state variable. but for the practice we have used the useCallback here.
    setIsLoading(true);
    setError(null);
    // default method is GET
    try {
      const response = await fetch(
        'https://react-movies-86cdc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      'https://react-movies-86cdc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
      {
        method: 'POST', // it will create the movie resource object
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  let content = <h4>Found No Movies...</h4>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <h3 style={{ color: 'red' }}>{error}</h3>;
  }
  if (isLoading) {
    content = <h4>Loading...</h4>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <h2>Found No Movies...</h2>
        )}
        {!isLoading && error && <h2>{error}</h2>}
        {isLoading && <h2>Loading...</h2>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
