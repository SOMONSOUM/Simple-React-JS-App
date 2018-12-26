import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
