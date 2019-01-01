import React from "react";

const Projects = () => (
  <section className="section" id="projects">

    <div className="container">

  <section className="section">

      <div className="title is-3 has-text-centered has-text-weight-bold has-text-primary">
        Projects
      </div>
</section>
<section className="section">

      <div className="columns">
        <div className="column card is-offset-1 is-5 has-text-centered is-radiusless">
          <div className="card-header">
            <div className="card-header-title"> Coders cheat sheets </div>
          </div>
          <div className="card-image">
            <figure class="image">
              <img src="./images/chcoder.png" />
            </figure>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>

        {/* 2nd project */}
        <div className="column card is-offset-1 is-5 has-text-centered is-radiusless">
          <div className="card-header">
            <div className="card-header-title"> News search engine </div>
          </div>
          <div className="card-image">
            <figure class="image">
              <img src="./images/newshub.png" />
            </figure>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>

      </div>
      </section>
    </div>
  </section>
);

export default Projects;
