import React from "react";

const NavBar = () => (
  <nav class="navbar container is-transparent is-fixed-top">
    <div class="navbar-brand">
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="is-centered navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item has-text-primary is-size-5 is-active" href="#about">
          About
        </a>
        <a class="navbar-item has-text-primary is-size-5" href="#projects">
          <span>Projects</span>
        </a>
        <a class="navbar-item has-text-primary is-size-5" href="#contact">
          <span>Contact</span>
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
