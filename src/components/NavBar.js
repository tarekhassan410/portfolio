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

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="#about">
          <span class="icon">
            <i class="fas fa-info" />
          </span>
          <span>About</span>
        </a>
        <a class="navbar-item" href="#projects">
          <span class="icon">
            <i class="fas fa-file-alt" />
          </span>
          <span>Projects</span>
        </a>
        <a class="navbar-item" href="#contact">
          <span class="icon">
            <i class="fas fa-envelope" />
          </span>
          <span>Contact</span>
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
