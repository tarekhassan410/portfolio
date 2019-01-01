import React from "react";

const Skills = ({image_path, name}) => (
  <div className="column is-3 is-offset-1">
    <div class="card">
    <div className='card_image'>

      <img src={image_path} />
    </div>
    <div className='card-content has-text-centered has-text-weight-bold has-text-info'>
      {name}
    </div>
    </div>
  </div>
);

export default Skills;
