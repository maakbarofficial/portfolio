import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mqeqvrww", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setToast({ type: "success", message: "Message sent successfully" });
        e.target.reset();

        setTimeout(() => setToast(null), 3000);
      }
    } catch (err) {
      setToast({ type: "error", message: "Network error" });
      setTimeout(() => setToast(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl text-center">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-yellow-500">Lets Talk.</span>
        </h4>
        <div className="space-y-1 md:space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <svg
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-widthh="2"
            >
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.35a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6.18 6.18l1.63-1.63a2 2 0 0 1 2.11-.45c.75.27 1.54.47 2.35.59a2 2 0 0 1 1.72 2z" />
            </svg>
            <p className="text-xl md:text-2xl">+923453117493</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-widthh="2"
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
              stroke-widthh="2"
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
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg hover:opacity-90 transition disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 cursor-progress border-black border-t-transparent rounded-full" />
                Submitting Message...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {toast && (
          <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg shadow-lg text-sm md:text-base transition-all duration-300 ease-out font-bold ${
              toast.type === "success"
                ? "bg-[#F7AB0A] text-black"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
