import React, { Component } from 'react';

let myTopics = [];
class MyTopics extends Component {
  handleClick = e => {
    myTopics.includes(e.target.value)
      ? (document.querySelector('.error').innerHTML =
          'Topic already added to your list')
      : myTopics.push(e.target.value);

    console.log(myTopics);
  };

  render() {
    return (
      <div id="topicsList">
        <div className="error"></div>
        <h1>Topic List</h1>
        <button href="" value="World" onClick={e => this.handleClick(e)}>
          WORLD
        </button>

        <button href="" value="Health" onClick={e => this.handleClick(e)}>
          HEALTH
        </button>

        <button href="" value="fashion" onClick={e => this.handleClick(e)}>
          FASHION
        </button>

        <button
          href=""
          value="entertainment"
          onClick={e => this.handleClick(e)}>
          ENTERTAINMENT
        </button>
      </div>
    );
  }
}

export default MyTopics;
