import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import LinkComp from "./LinkComp";

const Contact = () => {
  const date = new Date();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Submit the form
      e.target.submit();
    }
  };

  return (
    <div
      name="contact"
      className="flex h-auto min-h-[100vh] w-full flex-col items-center justify-end bg-primary p-4 pt-[10vh]"
    >
      <form
        method="POST"
        action="https://getform.io/f/panvkqka"
        onSubmit={handleSubmit}
        className="flex w-full max-w-[600px] flex-col"
      >
        <div className="pb-8">
          <p className="inline border-b-4 border-accent text-4xl font-bold text-text">
            Contact
          </p>
          <p className="py-4 text-text-dark">
            Shoot me an email at{" "}
            <LinkComp href="mailto:Taher.Barakat12223@gmail.com">
              Taher.Barakat12223@gmail.com{" "}
            </LinkComp>{" "}
            or just call me at this number{" "}
            <LinkComp href="tel:+963938907414">+963 938 907 414</LinkComp>, also
            you can submit the form below
            <br />
          </p>
        </div>
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />
        {errors.name && (
          <p className="text-danger mb-1 text-sm">{errors.name}</p>
        )}
        <input
          className={`mb-4 bg-text p-2 text-primary placeholder-text-dark ${errors.name ? "border-danger border" : ""}`}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-danger mb-1 text-sm">{errors.email}</p>
        )}
        <input
          className={`mb-4 bg-text p-2 text-primary placeholder-text-dark ${errors.email ? "border-danger border" : ""}`}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-danger mb-1 text-sm">{errors.message}</p>
        )}
        <textarea
          className={`bg-text p-2 text-primary placeholder-text-dark ${errors.message ? "border-danger border" : ""}`}
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="mx-auto my-8 flex items-center border-2 border-text px-4 py-3 text-text hover:border-accent hover:bg-accent disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Let's Collaborate"}
        </button>
      </form>

      {/* ------------------------------------------------------------------------- */}
      <div className=" mx-0 mt-5  flex w-full max-w-[600px] flex-col justify-center align-bottom lg:hidden ">
        <p className="m-8: text-[#8892b0]">Get in touch</p>
        <ul className="mt-5 flex w-full flex-wrap items-center justify-center">
          <li className=" flex h-[60px] w-20 items-center justify-between    ">
            <a
              className="flex w-full flex-col items-center justify-between text-sm text-[#8892b0] "
              href="https://www.linkedin.com/in/Taher-Barakat"
              target="_blank"
            >
              <FaLinkedin size={25} /> Linkedin
            </a>
          </li>
          <li className=" flex h-[60px] w-20 items-center justify-between    ">
            <a
              className="flex w-full  flex-col items-center justify-between  text-sm text-[#8892b0]"
              href="https://github.com/TaherBarakat"
              target="_blank"
            >
              <FaGithub size={25} />
              Github
            </a>
          </li>

          <li className=" flex h-[60px] w-20 items-center justify-between    ">
            <a
              className="flex w-full  flex-col items-center  justify-between text-sm text-[#8892b0]"
              href="https://wa.me/+963938907414"
              target="_blank"
            >
              <FaWhatsapp size={25} />
              WhatsApp
            </a>
          </li>

          <li className=" flex h-[60px] w-20 items-center justify-between">
            <a
              className="flex w-full flex-col items-center justify-between text-sm text-[#8892b0]"
              href="https://cdn2.cvdesignr.com/u/cv/pdf/62e8113a68805_38f3f6ea9b9ec4d0d6df92b4b6b973fd28fffce4_e1eeb.pdf"
              target="_blank"
              download
            >
              <BsFillPersonLinesFill size={25} />
              Resume
            </a>
          </li>
        </ul>
      </div>
      <p className="p-10 text-sm text-text-dark">
        &copy; {date.getFullYear()} Taher Barakat
      </p>
    </div>
  );
};

export default Contact;
