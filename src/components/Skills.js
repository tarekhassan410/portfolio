import React from "react";
import Slide from "react-reveal/Slide";

const Skills = ({image_path, name}) => (
  <Slide left>
  <div className="column is-4">
    <div class="card is-radiusless">
    <div className='card_image'>

      <img src={image_path} />
    </div>
    <div className='card-content has-text-centered has-text-weight-bold has-text-info'>
      {name}
    </div>
    </div>
  </div>
  </Slide>
);

export default Skills;
