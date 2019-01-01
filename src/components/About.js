import React from "react";
import Skills from './Skills'

const About = () => (
  <section class="section" id="about" >
    {/* section heading */}
    <div class="section-heading">
      <h3 class="title is-3 has-text-centered has-text-weight-bold has-text-primary" style={{marginTop: '1em' }}>
        About Me
      </h3>
      <h4 class="subtitle is-5 has-text-centered">
        React JS developer
      </h4>
      <div class="container">
        <p className="is-size-5">
          Web developer with background in PHP. 
        </p>

        <div className="section columns is-multiline">
        <Skills image_path={'./images/react.png'}  name={'React'} />
        <Skills image_path={'./images/firebase.png'} name={'Firebase'} />
        <Skills image_path={'./images/bulma.png'} name={'Bulma'} />
        <Skills image_path={'./images/bootstrap.png'} name={'Bootstrap'} />
        <Skills image_path={'./images/github.png'} name={'GitHub'} />
        <Skills image_path={'./images/heroku.png'}  name={'Heroku'} />
        </div>
      </div>
    </div>
  </section>
);

export default About;
