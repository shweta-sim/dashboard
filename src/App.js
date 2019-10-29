import React from 'react';
import './App.css';
import FbLogin from './components/Fblogin/Fblogin';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <FbLogin />
      <ul>
        <News />
      </ul>
    </div>
  );
}
export default App;
