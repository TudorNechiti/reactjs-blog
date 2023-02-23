import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import MissingPage from './MissingPage';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
      <Header title="A cool blog"/>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/post" element={<NewPost/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<MissingPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
