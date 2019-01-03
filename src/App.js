import React, { Component } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

import Slide from "react-reveal/Slide";

import "./App.css";

class App extends Component {

  constructor(){
    super()
    this.state = {
      scrollTab : 'home'
    }
  }

  render() {
    return (
      <div>

        { /* Nav bar*/}
        <Navbar currentNav={this.state.scrollTab} />


        {/* hero class with Navbar */}
        <Hero />

        {/* About */}
        <Slide  bottom>
          <About />
        </Slide>

        {/* projects */}
        <Slide  bottom>
          <Projects scrollEvent={() => this.handleScroll('projects')} />
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
