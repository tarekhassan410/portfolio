import React from "react";
import "../App.css";

class NavBar extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      currentNav: this.props.currentNav
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
      <nav class="navbar is-white is-radiusless is-fixed-top">
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
              'navbar-item has-text-primary has-text-weight-bold is-size-6 is-active ' 
              : 'navbar-item has-text-primary has-text-weight-bold is-size-6' }
              key='home'
              ref='elementToFire'
              onClick={this.onLinkClick}
              href="#home"
            >
              Home
            </a>
            <a
              class={this.state.currentNav == 'about' ? 
              'navbar-item has-text-primary has-text-weight-bold is-size-6 is-active ' 
              : 'navbar-item has-text-primary has-text-weight-bold is-size-6' }
              key='about'
              onClick={this.onLinkClick}
              href="#about"
            >
              About
            </a>
            <a
              class={this.state.currentNav == 'projects' ? 
              'navbar-item has-text-primary has-text-weight-bold is-size-6 is-active ' 
              : 'navbar-item has-text-primary has-text-weight-bold is-size-6' }
              key='projects'
              onClick={this.onLinkClick}
              href="#projects"
            >
              Projects
            </a>
            <a
              class={this.state.currentNav == 'blog' ? 
              'navbar-item has-text-primary has-text-weight-bold is-size-6 is-active ' 
              : 'navbar-item has-text-primary has-text-weight-bold is-size-6' }
              key='blog'
              onClick={this.onLinkClick}
              href="#blog"
            >
              Blog
            </a>
            <a
              class={this.state.currentNav == 'contact' ? 
              'navbar-item has-text-primary has-text-weight-bold is-size-6 is-active ' 
              : 'navbar-item has-text-primary has-text-weight-bold is-size-6' }
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
