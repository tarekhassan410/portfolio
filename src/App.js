import React, { Component } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Slide from "react-reveal/Slide";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* hero class with Navbar */}
        <Hero />

        {/* About */}
        <Slide  bottom>
          <About />
        </Slide>

        {/* projects */}
        <Slide  bottom>
          <Projects />
        </Slide>

        {/* Blog */}
        <Slide  bottom>
          <Blog />
        </Slide>

        {/* contact */}
        <Slide  bottom>
          <Contact />
        </Slide>

        {/* Footer */}
        <Slide  bottom>
          <Footer />
        </Slide>

      </div>
    );
  }
}

export default App;
