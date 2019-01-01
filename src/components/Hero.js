import React from "react";
import Navbar from "./NavBar";
import "../App.css";

const Hero = () => (
  <section class="hero is-link is-fullheight is-fullheight-with-navbar is-bold blured-background">
    <div class="hero-head">
      <Navbar />
    </div>
    <div class="hero-body">
      <div class="container has-text-primary">
        Hello! I am
        <h1 class="title is-1 has-text-primary">Tarek</h1>
        <h2 class="subtitle is-3 has-text-primary">React JS Developer</h2>
      </div>
    </div>
  </section>
);

export default Hero;
