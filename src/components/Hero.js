import React from "react";
import Typed from "react-typed";

import "../App.css";

const Hero = () => (
  <section class="hero is-large is-large-with-navbar blured-background" id="home">
    <div class="hero-body has-text-centered">
      <div class="section container has-text-primary">
        Hello! I am
        <h1 class="title is-size-1 has-text-primary has-text-weight-bold">Tarek</h1>
        <h2 class="subtitle is-size-3 has-text-primary">
          <Typed strings={[ "React JS Developer"]} typeSpeed={50} backSpeed={10}  />
        </h2>
        <p className='subtitle is-size-2'>
        <a href="https://dev.to/tarekhassan410" target="_blank">
            <span className='icon is-large has-text-primary'>
            <i class="fab fa-dev"></i>   
            </span>
            </a>
        <a href="https://github.com/tarekhassan410" target="_blank">
            <span className='icon is-large has-text-primary'>
            <i class="fab fa-github"></i>   
            </span>
            </a>
        </p>
        <a className="button is-large is-primary" href="#about"> Tell me more </a>
      </div>
    </div>
  </section>
);

export default Hero;
