import React from "react";

class Contact extends React.Component {
 
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="title is-size-3 has-text-centered has-text-weight-bold has-text-primary">
            Contact
          </div>
          <div className="subtitle is-5 has-text-centered has-text-primary">
            If you want to work with me, or just say hi :)
          </div>
          
            <div class="field">
              <p class="control buttons is-centered">
                <a href="mailto:tarekhassan410@gmail.com?Subject=Hello" class="button is-large is-primary is-radiusless">
                  Send message
                </a>
              </p>
            </div>
          </div>
      </section>
    );
  }
}

export default Contact;
