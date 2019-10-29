import React from 'react';

const SearchBox = ({ news }) => {
  return (
    <div className="searchForm">
      <form>
        <input id="search" placeholder="Search keyword" />
        <button id="searchButton">SEARCH</button>
      </form>
      <div className="searchWrapper">
        {news.map(n => (
          <div className="card">
            <h5 className="card-title">{n.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
