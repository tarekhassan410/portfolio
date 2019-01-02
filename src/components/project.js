import React from "react";
import Slide from "react-reveal/Slide";

const Project = ({ title, image_path, description, url }) => (
  <Slide right>
    <div className="column">
    <div className="card is-3 box has-text-centered is-radiusless">
      <div className="card-header">
        <div className="card-header-title has-text-centered has-text-info has-text-weight-bold">
          {" "}
          <a href={url} target="_blank">
          {title}
          </a>
        </div>
      </div>
      <div className="card-image">
        <figure class="image">
          <a href={url} target="_blank"> <img src={image_path} /> </a>
        </figure>
      </div>
      <div class="content">
        {description}
        <br />
      </div>
      </div>
    </div>
  </Slide>
);

export default Project;
