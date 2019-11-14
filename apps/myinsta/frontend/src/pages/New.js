import React, { Component } from 'react';

import './New.css'
import api from '../services/api';

class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    //This because of Image
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);

    this.props.history.push('/');
  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />

        <input 
          type="text"
          name="author"
          placeholder="Author post"
          onChange={this.handleChange}
          value={this.state.author}
        />

        <input 
          type="text"
          name="place"
          placeholder="Local post"
          onChange={this.handleChange}
          value={this.state.local}
        />

        <input 
          type="text"
          name="description"
          placeholder="Description post"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input 
          type="text"
          name="hashtags"
          placeholder="Hashtags post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default New;