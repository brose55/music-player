import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'
// import Landing from './components/Landing';
// import Library from './components/Library';
// import Album from './components/Album';


const App = () => {
  const [route, setRoute] = useState('landing');

  return (
    <div className="App">
      <Header route={route} setRoute={setRoute} />
      <main className="centered">
        <Outlet />
        {/* <Landing /> */}
        {/*
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/library" element={<Library setRoute={setRoute} {...props} />} />
          <Route path=":slug" element={<Album />} />
        </Routes>
        */}
      </main>
    </div>
  );

}

export default App;
