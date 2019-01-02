import React from "react";

class Contact extends React.Component {
 
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="title is-size-3 has-text-centered has-text-weight-bold has-text-primary">
            Contact
          </div>
          <div className="subtitle is-size-6 has-text-centered has-text-weight-bold has-text-primary">
            If you want to work with me, or just say hi :)
          </div>
          
            <div class="field">
              <p class="control buttons is-centered">
                <a href="mailto:tarekhassan410@gmail.com?Subject=Hello" class="button is-medium is-success is-radiusless">
                  Message now
                </a>
              </p>
            </div>
          </div>
      </section>
    );
  }
}

export default Contact;
