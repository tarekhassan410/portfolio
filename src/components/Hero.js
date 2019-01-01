import React from "react";
import Navbar from "./NavBar";
import Typed from "react-typed";

import "../App.css";

const Hero = () => (
  <section class="hero is-large is-large-with-navbar is-bold blured-background" id="home">
    <div class="hero-head">
      <Navbar />
    </div>
    <div class="hero-body has-text-centered">
      <div class="container has-text-primary">
        Hello! I am
        <h1 class="title is-1 has-text-primary">Tarek</h1>
        <h2 class="subtitle is-3 has-text-info">
          <Typed strings={[ "React JS Developer", "Beside React I also work with Redux, Firebase, Bootstrap, Bulma and more"]} typeSpeed={20} backSpeed={40} loop />
        </h2>
      </div>
    </div>
  </section>
);

export default Hero;
