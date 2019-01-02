import React from "react";

const Contact = () => (
  <section className="section" id="contact">
    <div className="container">
      <div className="title is-3 has-text-centered has-text-weight-bold has-text-primary">
        contact
      </div>
      <div className="section box column is-offset-3 is-6 is-centered is-radiusless">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input is-radiusless"
              type="email"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
            
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input is-radiusless"
              type="password"
              placeholder="Password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control buttons is-centered">
            <button class="button is-medium is-success is-radiusless">Send</button>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
