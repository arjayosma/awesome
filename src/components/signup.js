import React from "react"

export default () => {
  return (
    <form
      action="https://app.convertkit.com/forms/1375523/subscriptions"
      className="seva-form formkit-form subscribe-formkit"
      method="post"
      data-sv-form="1375523"
      data-uid="b72baa8127"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
    >
      <div data-style="full">
        <div
          data-element="column"
          className="formkit-column"
          style={{ backgroundColor: rgb(53, 59, 72) }}
        >
          <div className="formkit-background" style={{ opacity: 0.3 }}></div>
          <div
            className="formkit-header"
            data-element="header"
            style={{
              color: rgb(241, 248, 248),
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            <h1>Learn more about Tech, Productivity and Startups</h1>
          </div>
          <div
            className="formkit-subheader"
            data-element="subheader"
            style={{ color: rgb(240, 240, 240), fontSize: "15px" }}
          >
            <p>We all hate e-mail noise.</p>
            <p>​</p>
            <p>
              Subscribe to get content highlights <em>at most</em>
              <strong> once a week </strong>in the category of your choice.
            </p>
          </div>
          <div
            className="formkit-image formkit-image relative focus:outline-none"
            role="button"
            tabindex="0"
          >
            <img
              className="cursor-pointer focus:outline-blue"
              src="https://embed.filekitcdn.com/e/4gs6cNdqetSY4qkPvqy9jL/3UvKEHHwJ4RzsdCjJMsNY2"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
        <div data-element="column" className="formkit-column">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div data-element="fields" className="seva-fields formkit-fields">
            <div className="formkit-field">
              <input
                className="formkit-input subscribe-formkit-input"
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
              />
            </div>
            <div className="formkit-field">
              <input
                className="formkit-input subscribe-formkit-input"
                name="email_address"
                placeholder="Your email address"
                required
                type="email"
              />
            </div>
            <div className="formkit-field">
              <div role="button" tabindex="0">
                <fieldset
                  data-group="checkboxes"
                  className="formkit-4451"
                  type="Custom"
                  order="2"
                  save_as="Tag"
                  group="field"
                >
                  <legend
                    style={{ color: rgb(183, 180, 175), fontWeight: 700 }}
                  >
                    Notify me when you post about...
                  </legend>
                  <div
                    className="formkit-checkboxes subscribe-formkit-check"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-3382221-1496773"
                      type="checkbox"
                      name="tags[]"
                      value="1496773"
                    />
                    <label for="tag-3382221-1496773">Technology</label>
                  </div>
                  <div
                    className="formkit-checkboxes subscribe-formkit-check"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-3382221-1496774"
                      type="checkbox"
                      name="tags[]"
                      value="1496774"
                    />
                    <label for="tag-3382221-1496774">Productivity</label>
                  </div>
                  <div
                    className="formkit-checkboxes subscribe-formkit-check"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-3382221-1496896"
                      type="checkbox"
                      name="tags[]"
                      value="1496896"
                    />
                    <label for="tag-3382221-1496896">Business / Startups</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit subscribe-formkit-submit"
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Subscribe</span>
            </button>
          </div>
          <div
            className="formkit-guarantee"
            data-element="guarantee"
            style={{
              color: rgb(51, 51, 51),
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            <p>
              <span style={{ color: "#dddddd" }}>I won't send you spam. </span>
            </p>
            <p>
              <span style={{ color: "#dddddd" }}>
                You can unsubscribe anytime.
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}
