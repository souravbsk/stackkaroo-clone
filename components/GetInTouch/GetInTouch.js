import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const GetInTouch = () => {
  const form = useRef();
  const handleGetInTouch = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("message successfully sent");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="py-60 px-60 bg-white shadow-card rounded-8">
        <h4 className="text-xl fw-600">Get in Touch</h4>
        <form
          ref={form}
          onSubmit={handleGetInTouch}
          className="contact-form row y-gap-40 pt-48"
        >
          <div className="col-12">
            <div className="form-group">
              <input type="text" required name="name" placeholder="Name" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input type="email" name="email" required placeholder="Email" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <button
                className="button -md -accent -uppercase text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default GetInTouch;
