import React from "react";
import Project from "./project";

const Projects = (props) => (
  <section className="section" id="projects" onScroll={() => props.scrollEvent('projects')}>
    <div className="container">
      <section className="section">
        <div className="title is-3 has-text-centered has-text-weight-bold has-text-primary">
          Projects
        </div>
        <div className="subtitle is-5 has-text-centered has-text-primary">
          Projects I made with React and other tools I use in development
        </div>
      </section>
      <section className="">
        <div className="columns">
          <Project
            title={"Cheating coder"}
            image_path={"./images/chcoder.png"}
            url={'http://cheatingcoder.herokuapp.com/'}
            description={
              "Cheating coder is your usual cheat sheets but with search feature to find what you look for faster"
            }
          />
          <Project
            title={"NewsHub"}
            image_path={"./images/newshub.png"}
            url={'https://3v6q84x161.codesandbox.io/'}
            description={"News search engine based on Newsapi.org"}
          />
          <Project
            title={"ToDo App"}
            image_path={"./images/todo.png"}
            url={'https://88v02o91ll.codesandbox.io/'}
            description={"Simple to do app to implement ES6 features"}
          />
        </div>
      </section>
    </div>
  </section>
);

export default Projects;
