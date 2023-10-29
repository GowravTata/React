import { useEffect, useState } from "react";
import Logo from "./Logo";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({})

  const { Title: title, Year: year, Poster: poster,
    Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors,
    Director: director, Genre: genre } = movie
  console.log(title, year);
  useEffect(function () {
    async function getMovieDetails() {
      const res = await fetch(`http://www.omdbapi.com/?i=${selectedId}&apikey=${Key}&`)
      const data = await res.json()
      setMovie(data)
    }
    getMovieDetails();
  }, [])
  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>&larr;
          <img src={poster} alt={`Poster of ${movie}`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>{released} &bull; {runtime}</p>
            <p><span>⭐</span>{imdbRating} IMDb Rating</p>
          </div>
        </button>
      </header>
      {selectedId}
    </div>
  )
}

function WatchSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

// function WatchBox() {
//   const [isOpen2, setIsOpen2] = useState(true);
//   const [watched, setWatched] = useState(tempWatchedData);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchSummary watched={watched} />
//           <WatchedMovieList watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

const Key = '29ecd1e6';
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  // useEffect(function () {
  //   console.log('After Initial Render')
  // }, [])
  // useEffect(function () {
  //   console.log('After every render')
  // })
  // useEffect(function () {
  //   console.log('D')
  // }, [query])

  // console.log('During render');

  /**
  This effect runs only the render is happening only once, when the component first mounts
  Side effect that makes something usefull , like fetching some data from the API
  Side effect should not be in render logic,
  side effect can be used in event handlers, 
  useeffect means write a code that runs in different moments of a instance lifecycle 
  side effect can also get a cleanup function
  we use the effect to keep the component in sync with the external world
  we use eventhandlers to react to a certain event that happens in UI
   */

  function handleSelectMovie(id) {
    setSelectedId(selectedId => (id === selectedId) ? null : id)
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${Key}&`)
        if (!res.ok)
          throw new Error('Something went wrong with fetching movies')

        const data = await res.json()
        if (data.Response === 'False') throw new Error('Movie not found ')

        setMovies(data.Search);
        // console.log(data);
      } catch (err) {
        // console.error(err.message);
        setError(err.message)
      } finally {
        setIsLoading(false)

      }
    }
    // Before calling the function  if there is no query , the below handles to reset the states that are present
    if (query.length < 3) {
      setMovies([])
      setError("")
      return;
    }
    fetchMovies();
  }, [query])



  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        {/* An alternative way to use the components */}
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {
            selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} /> :
              (<>
                <WatchSummary watched={watched} />
                <WatchedMovieList watched={watched} />
              </>)
          }
        </Box>
      </Main>
    </>
  );
}



function Loader() {
  return (
    <p className="loader">Loading</p>
  )
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  )
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
