import React, { Component } from 'react';
import { search_url, _api_key } from './NewsConfig';
import SearchBox from './SearchBox';

class Search extends Component {
  render() {
    return <SearchBox news={this.state.news} />;
  }

  state = {
    news: []
  };

  componentDidMount() {
    const searchBtn = document.querySelector('#searchButton');
    const searchVal = document.querySelector('#search').value;
    searchBtn.addEventListener('click', () => {
      console.log(searchVal);

      //fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
      fetch(`${search_url}?q=dems&token=${_api_key}`)
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
        })
        .catch(console.log);
    });
  }
}

export default Search;
