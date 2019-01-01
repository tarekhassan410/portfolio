import React from "react";

const Project = ({title, image_path, description}) => (
    <div className="column card is-3 is-offset-1 has-text-centered is-radiusless">
    <div className="card-header">
      <div className="card-header-title has-text-centered has-text-info has-text-weight-bold"> {title} </div>
    </div>
    <div className="card-image">
      <figure class="image">
        <img src={image_path} />
      </figure>
    </div>
    <div class="content">
      {description}
      <br />
      
    </div>
  </div>
);

export default Project;
