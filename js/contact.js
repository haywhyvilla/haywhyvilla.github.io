const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="con-page">
          <div className="con-container">
            <div className="con-content">
              <div className="con-HS">
                <span className="con-head">Contact Me</span>
                <span className="con-sub">
                  Hi there, contact me to ask me about anything you have in
                  mind.
                </span>
              </div>
              <div className="con-form">
                <div className="con-name">
                  <div className="con-first">
                    <label htmlFor="first_name">First name</label>
                    <input
                      type="text"
                      id="first_name"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="con-last">
                    <label htmlFor="last_name">Last name</label>
                    <input
                      type="text"
                      id="last_name"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="con-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="yourname@email.com"
                  />
                </div>
                <div className="con-message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="30"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                  ></textarea>
                </div>
                <div className="con-checkbox">
                  <input type="checkbox" id="form_check" />
                  <label htmlFor="form_check">
                    You agree to providing your data to Blac_Pearl who may
                    contact you
                  </label>
                </div>
                <div className="con-btn">
                  <button id="btn__submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="foot">
        <div id="foot-div">
          <img src="zuri.l.png" alt="" id="foot-img-1" />
          <span id="footer-span">HNG Internship 9 Frontend Task</span>
          <img src="ingress.i.png" alt="" id="foot-img-2" />
        </div>
      </div>
    </>
  );
};

export default Contact;
