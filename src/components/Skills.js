import React from "react";
import Slide from "react-reveal/Slide";

const Skills = ({image_path, name}) => (
  <Slide left>
  <div className="column is-4">
    <div class="card  is-paddingless is-radiusless">
    <div className='is-paddingless is-radiusless card_image'>
      <img src={image_path} />
    </div>
    <div className='card-content is-radiusless is-borderless has-text-centered has-text-weight-bold has-text-info'>
      {name}
    </div>
    </div>
  </div>
  </Slide>
);

export default Skills;
