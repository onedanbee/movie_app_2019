import React from 'react';
import axios from "axios"
import Movie from "./Movie"


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.lt/api/v2/list_movies.json");
    this.setState({movies, isLoading:false})
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return(
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) :<div class="movies">{movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} poster={movie.poster} genres={movie.genres} />)}</div> }
      </section>
    )
  }
}

export default App;
