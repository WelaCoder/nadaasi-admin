import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "../../../config/toastConfig";

export const ContactForm = () => {
  // const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (payload) => {
    setIsLoading(true);
    axios
      .post("/feedback", payload)
      .then((res) => {
        toast.success(res.data.Message, toastConfig);
        setIsLoading(false);
        // reset();
      })
      .catch((err) => {
        toast.error("Unable To Send Message. Please Try Later.", toastConfig);
        setIsLoading(false);
      });
  };

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="font-Futura-light h-100 form-ipad"
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Name *"
          required
          name="name"
          // ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Subject *"
          required
          name="subject"
          // ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Email *"
          required
          name="email"
          // ref={register}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control shadow-contact border-0 input-contact"
          placeholder="Message"
          rows="4"
          required
          name="message"
          // ref={register}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn border-0 shadow-contact border-0 btn-outline-dark btn-block font-weight-bold"
        disabled={isLoading}
      >
        <span
          className={isLoading ? "mr-2 spinner-border spinner-border-sm" : ""}
          role="status"
          aria-hidden="true"
        ></span>
        {isLoading ? "SENDING..." : "SEND"}
      </button>
    </form>
  );
};
