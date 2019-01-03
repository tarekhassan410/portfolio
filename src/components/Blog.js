import React from "react";

const Blog = () => (
  <section className="section" id='blog'>
    <div className="container">
    <section className="section">

      <div className="title is-3 has-text-centered has-text-weight-bold has-text-primary">
        Blog
      </div>
      <div className="subtitle is-5 has-text-centered has-text-primary">
        I started writing in <a href="https://dev.to" target="_blank"> Dev.to </a> recently, in this section I will be sharing all new blogs.
      </div>
      </section>
      <div className="card box is-radiusless">
        <div className="card-header">
        <div className="card-header-title title is-size-3 has-text-weight-bold has-text-primary">
          <a href="https://dev.to/tarekhassan410/react-js-contentful-starting-32h3">
            {" "}
            React js Contentful starting{" "}
          </a>
        </div>
        </div>
        <div className="card-content has-text-link">
          A tutorial on implementing React JS with Contentful
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
