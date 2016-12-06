import React from 'react';
import './Movie.css'

export class Movie extends React.Component {
  render(){
    return(
      <div className='movie'>
        <img src={ this.props.movie.Poster } role='presentation'/>
        <div className='detail'>
          { this.props.movie.Title }
          { this.props.movie.Type }
          { this.props.movie.Year }
        </div>
      </div>
    )
  }

}
