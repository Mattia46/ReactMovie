import React from 'react';
import { Movie } from './Component/Movie';
import { AddMovie } from './Component/AddMovie';
import { Link } from 'react-router';

export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      movies: []
};
    }

  get() {
      return fetch('https://www.omdbapi.com/?s=everything&y=&plot=long&r=json')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.Search.forEach(movie => {
          this.state.movies.push(movie)
          this.setState({
              movies: this.state.movies
          })
        })
      })
      .catch((error) => {
        console.error(error);
      });
    }

  addMovie(movie){
    this.state.movies.push(movie)
    this.setState({
      movie: this.state.movie
    })
  }
    componentWillMount(){
      //this.get();
    }

  render(){
    console.log('this.state', this.state.movies)
    let movies = this.state.movies.map(test => {
        return <Movie movie={test} key={test.Title} />
    })
    return (
      <div>
        <AddMovie adding={this.addMovie.bind(this)}/>
        <button onClick={this.get.bind(this)}>
          get
        </button>
        {movies}
        <Link to="/add">Add</Link>
      </div>
    )
  }
}
