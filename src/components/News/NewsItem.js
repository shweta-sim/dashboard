import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div>
      <center>
        <h1>News List</h1>
      </center>
      {news.map(n => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{n.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
            <p className="card-text">{n.url}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
