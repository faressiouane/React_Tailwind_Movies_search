import  SearchMovies  from "./components/SearchMovies"
import MovieCard from "./components/MovieCard"
import {useState} from 'react'

function App() {

  const [movies, setMovies] = useState([]); //movies list
 
  //searching for movies with query, update movies list,
  const searchMovies = async (query) => {
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6aa9cb9848a4243f16ae50662ffe4343&query=${query}`
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        }catch(err){
            console.error(err);
        }
}
  
  return (
    <div className="container">
      <h1 className="text-5xl mt-10 text-center font-bold text-purple-800">React Movie Search</h1>

      <SearchMovies handleSubmit={searchMovies}/>

      <div className="bg-gray-200 mt-10 mb-20 p-10 rounded-2xl max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2  gap-4">
              {movies.filter(movie => movie.poster_path).map(movie => (
              <MovieCard movie={movie} key={movie.id}/>         
              ))}
      </div>
    </div>
  );
}

export default App;
