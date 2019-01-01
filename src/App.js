import React, { Component } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

import Scrollspy from "react-scrollspy";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* hero class with Navbar */}
        <Hero />

        {/* About */}
        <About />

        {/* projects */}
        <Projects />

        {/* Blog */}
        <Blog />

        {/* contact */}
        <Contact />
        
        <Scrollspy
          items={["about", "projects"]}
          currentClassName="is-current"
        />
      </div>
    );
  }
}

export default App;
