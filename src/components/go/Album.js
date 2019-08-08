import React, {Component} from 'react';
import axios from 'axios';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      year: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    axios.post("http://localhost:8000", {
      title: this.state.title,
      artist: this.state.artist,
      year: this.state.year
    }).then(response => {
      console.log("response", response)
    }).catch(error => {
      console.log("error", error)
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="title" name="title"
          placeholder="Title" value={this.state.title} onChange={this.handleChange} />

          <input type="artist" name="artist"
          placeholder="Artist" value={this.state.artist} onChange={this.handleChange} />

          <input type="year" name="year"
          placeholder="Year" value={this.state.year} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}