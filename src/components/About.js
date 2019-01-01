import React from "react";
import Skills from './Skills'

const About = () => (
  <section class="section" id="about">
    {/* section heading */}
    <div class="section-heading">
      <h3 class="title is-3 has-text-centered has-text-weight-bold has-text-primary">
        About Me
      </h3>
      <h4 class="subtitle is-5 has-text-centered">
        Jack of all trades, master of "null"
      </h4>
      <div class="container">
        <p className="is-size-5">
          Web developer with more than <strong>4 years</strong> of well-rounded
          experience with a degree in the field of
          <strong> Computer Science</strong>, extensive knowledge of modern Web
          techniques and love for <strong>Coffee</strong>. Looking for an
          opportunity to work and upgrade, as well as being involved in an
          organization that believes in gaining a competitive edge and giving
          back to the community.
        </p>

        <div className="columns is-multiline">
        <Skills image_path={'./images/react.png'} />
        <Skills image_path={'./images/firebase.png'} />
        <Skills image_path={'./images/bulma.png'} />
        <Skills image_path={'./images/bootstrap.png'} />
        <Skills image_path={'./images/github.png'} />
        <Skills image_path={'./images/heroku.png'} />
        </div>
      </div>
    </div>
  </section>
);

export default About;
