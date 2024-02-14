import { Email, LocationOn, Message, WhatsApp } from "@mui/icons-material";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import "./contact.css";
import { IconButton } from "@mui/material";
const Contact = () => {
  const [state, handleSubmit] = useForm("mgegazod");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <div className="title">
          <IconButton sx={{ color: "var(--subtitle)" }}>
            <Email sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <h2>Contact Us</h2>
        </div>
        <p className="subtitle">
          Contact us for more information and Get notified when I publish
          something new.
        </p>
        <h3></h3>
      </div>
      <div className="contact-media">
        <div className="contact-media-content">
          <IconButton className="parent-icon">
            <LocationOn className="icon" />
          </IconButton>
          <div className="content">
            <h3>Location:</h3>
            <p>Gharbia, El Mahalla El Kubra</p>
          </div>
        </div>
        <div className="contact-media-content">
          <IconButton className="parent-icon">
            <Message className="icon" />
          </IconButton>
          <div className="content">
            <h3>Email:</h3>
            <p>oa1003000@gmail.com</p>
          </div>
        </div>
        <div className="contact-media-content">
          <IconButton className="parent-icon">
            <WhatsApp className="icon" />
          </IconButton>
          <div className="content">
            <h3>Call:</h3>
            <p>01027784288</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="email">Email Address: </label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Message: </label>
            <textarea
              required
              name="message"
              rows={10}
              placeholder="Message..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animate">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
