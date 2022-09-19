import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import BlogCard from './components/BlogCard/BlogCard';
import useBlogs from './hooks/blogs';

function App() {
  return (
    <section className="main">
      <Header />
      
      <Footer />
    </section>
  );
}

export default App;
