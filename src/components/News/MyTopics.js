import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { articles_url, _api_key } from './NewsConfig';

let myTopics = [];
let userTopic;

class MyTopics extends Component {
  state = {
    news: []
  };
  handleClick = e => {
    var listWrapper = document.querySelector('.leftMenu');

    if (myTopics.includes(e.target.value)) {
      document.querySelector(
        '.error'
      ).innerHTML = `${e.target.value} is already added to your list`;
    } else {
      myTopics.push(e.target.value);
      listWrapper.innerHTML += `<a href="#">${e.target.value}</a>`;
    }

    console.log(myTopics);
    var menuItems = document
      .querySelector('.leftMenu')
      .getElementsByTagName('a');
    console.log(menuItems);

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', e => {
        userTopic = menuItems[i].textContent.toLowerCase();
        console.log(userTopic);

        fetch(`${articles_url}${userTopic}?token=${_api_key}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ news: data.articles });
          })
          .catch(console.log);
      });
    }
  };

  render() {
    return (
      <div id="topicsList">
        <NewsItem news={this.state.news} />
        <div className="error"></div>
        <h1>Topic List</h1>
        <button href="" value="World" onClick={e => this.handleClick(e)}>
          WORLD
        </button>

        <button href="" value="Health" onClick={e => this.handleClick(e)}>
          HEALTH
        </button>

        <button href="" value="Fashion" onClick={e => this.handleClick(e)}>
          FASHION
        </button>

        <button
          href=""
          value="Entertainment"
          onClick={e => this.handleClick(e)}>
          ENTERTAINMENT
        </button>
      </div>
    );
  }
}

export default MyTopics;
