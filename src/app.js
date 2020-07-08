import React from 'react';
import './app.css';
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import Container from "./components/container/container";
import Posts from "./components/posts/posts";
import SinglePost from "./components/single-post/single-post";
import NewPostForm from "./components/new-post-form/new-post-form";

const App = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Menu />
      <div id="page-content-wrapper">
        <Header />
        <Container />
        <hr />
        <NewPostForm />
        <hr />
        <Posts />
      </div>
    </div>
  )
}

export default App;
