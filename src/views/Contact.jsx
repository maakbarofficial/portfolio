import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `mailto:aliakbar.mql@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=Hi, my name is ${form.name}. ${form.message} (${form.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <svg
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.35a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6.18 6.18l1.63-1.63a2 2 0 0 1 2.11-.45c.75.27 1.54.47 2.35.59a2 2 0 0 1 1.72 2z" />
            </svg>
            <p className="text-xl md:text-2xl">+92 314 3227662</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 4H2v16h20V4z" />
              <path d="M22 4l-10 7L2 4" />
            </svg>
            <p className="text-xl md:text-2xl">aliakbar.mql@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s8-6.5 8-11a8 8 0 1 0-16 0c0 4.5 8 11 8 11z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-xl md:text-2xl">Karachi, Pakistan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="contactInput"
            required
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
