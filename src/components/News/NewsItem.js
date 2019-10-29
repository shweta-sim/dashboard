import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div>
      <h1>News List</h1>
      {news.map(n => (
        <div className="card">
          <h5 className="card-title">{n.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
