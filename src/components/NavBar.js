import React from "react";
import "../App.css";

class NavBar extends React.Component {


  constructor(){
    super()
    this.state = {
      currentNav: 'home'
    }
    this.onLinkClick = this.onLinkClick.bind(this)
  }

  onLinkClick(e){
    this.setState({
      currentNav: e._targetInst.key
    })
  }

  render() {
    return (
      <nav class="navbar is-primary is-radiusless is-fixed-top">
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
          <div class="navbar-end container">
            <a
              class={this.state.currentNav == 'home' ? 
              'navbar-item has-text-link has-text-weight-bold is-size-5 is-active is-tab' 
              : 'navbar-item has-text-link has-text-weight-bold is-size-5' }
              key='home'
              onClick={this.onLinkClick}
              href="#home"
            >
              Home
            </a>
            <a
              class={this.state.currentNav == 'about' ? 
              'navbar-item has-text-link has-text-weight-bold is-size-5 is-active is-tab' 
              : 'navbar-item has-text-link has-text-weight-bold is-size-5' }
              key='about'
              onClick={this.onLinkClick}
              href="#about"
            >
              About
            </a>
            <a
              class={this.state.currentNav == 'projects' ? 
              'navbar-item has-text-link has-text-weight-bold is-size-5 is-active is-tab' 
              : 'navbar-item has-text-link has-text-weight-bold is-size-5' }
              key='projects'
              onClick={this.onLinkClick}
              href="#projects"
            >
              Projects
            </a>
            <a
              class={this.state.currentNav == 'blog' ? 
              'navbar-item has-text-link has-text-weight-bold is-size-5 is-active is-tab' 
              : 'navbar-item has-text-link has-text-weight-bold is-size-5' }
              key='blog'
              onClick={this.onLinkClick}
              href="#blog"
            >
              Blog
            </a>
            <a
              class={this.state.currentNav == 'contact' ? 
              'navbar-item has-text-link has-text-weight-bold is-size-5 is-active is-tab' 
              : 'navbar-item has-text-link has-text-weight-bold is-size-5' }
              key='contact'
              onClick={this.onLinkClick}
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
