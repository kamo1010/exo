import './App.css';
import movies from './Data/movies.json';
import Film from './Data/Film';
import FilmContainer from './Card/FilmContainer';

function App() {
  const allMovies : Array<Film> = movies.map(m => new Film(m))

  return (
    <div className="App">
      <FilmContainer films={allMovies}/>
    </div>
  );
}

export default App;
