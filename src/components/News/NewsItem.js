import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div>
      <center>
        <h1>News List</h1>
      </center>
      {news.map(n => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{n.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
            <p class="card-text">{n.url}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
