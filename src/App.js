import React from 'react';
import './App.css';
import FbLogin from './components/Fblogin/Fblogin';

import Clock from './components/DateTime/Clock';
import DateComponent from './components/DateTime/Date';

import News from './components/News/News';
import MyTopics from './components/News/MyTopics';

function App() {
  return (
    <div className="App">
      <Clock />
      <DateComponent />

      <FbLogin />
      <MyTopics />
      <ul>
        <News />
      </ul>
    </div>
  );
}
export default App;
