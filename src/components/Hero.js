import React from "react";
import Typed from "react-typed";

import "../App.css";

const Hero = () => (
  <section class="hero is-large is-large-with-navbar blured-background" id="home">
    <div class="hero-body has-text-centered">
      <div class="section container has-text-primary">
        Hello! I am
        <h1 class="title is-1 has-text-primary has-text-weight-bold">Tarek</h1>
        <h2 class="subtitle is-3 has-text-primary">
          <Typed strings={[ "React JS Developer", "Beside React I also work with Redux, Firebase, Bootstrap, Bulma and more"]} typeSpeed={20} backSpeed={10}  />
        </h2>
      </div>
    </div>
  </section>
);

export default Hero;
