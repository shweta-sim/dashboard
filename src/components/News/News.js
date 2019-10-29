import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { articles_url, _api_key } from './NewsConfig';
let userTopic = 'world'; //change this

class News extends Component {
  render() {
    return <NewsItem news={this.state.news} />;
  }

  state = {
    news: []
  };

  componentDidMount() {
    fetch(`${articles_url}${userTopic}?token=${_api_key}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(console.log);
  }
}

export default News;
