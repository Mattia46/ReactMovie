import React from 'react';
import Movie from './Movie';

export class AddMovie extends React.Component {
  constructor(){
    super()
    this.state = {
      newMovie: {}
    }
    this.submit = this.submit.bind(this);
  }
  static defaultProps = {
    categories: ['movie', 'series']
  }

  submit(e) {
    this.setState({
        newMovie: {
          Title: this.refs.title.value,
          Type: this.refs.type.value,
          Year: this.refs.year.value
        }
    }, function (){
      this.props.adding(this.state.newMovie)
    })
    e.preventDefault();
  }

  render(){
    let categoryTypes = this.props.categories.map(category => {
      return <option key={category} value={ category }>{category}</option>
    });

    return(
      <form action="" onSubmit={this.submit}>
        <div>
          <label>Title</label>
          <input type='text' ref='title' />
        </div>
        <div>
          <label>Type</label>
          <select ref='type'>
            {categoryTypes}
          </select>
        </div>
        <div>
          <label>Year</label>
          <input type='text' ref='year' />
        </div>
        <input type='submit' value='submit' />
      </form>
    )
  }
}

