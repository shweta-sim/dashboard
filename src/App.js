import React from 'react';
import './App.css';
import FbLogin from './components/Fblogin/Fblogin';
import Clock from './components/DateTime/Clock';
import DateComponent from './components/DateTime/Date';
import News from './components/News/News';
import MyTopics from './components/News/MyTopics';
import SearchBox from './components/News/Search';

function App() {
  return (
    <div className="App">
      <Clock />
      <DateComponent />
      <SearchBox />
      <MyTopics />
      <div className="leftMenu"></div>
      <FbLogin />
      <div className="card-wrapper">
        <News />
      </div>
    </div>
  );
}
export default App;
