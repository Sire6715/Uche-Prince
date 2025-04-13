import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormDate] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_p58l1nh";
  const TEMPLATE_ID = "template_a850w8l";
  const PUBLIC_KEY = "WSk9hS_pq4xJWfeaw";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="Contact" className=" flex items-center justify-center w-full ">
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-[#f2f2f2] border border-lime-500 rounded px-4 py-3 text-black transition focus:outline-none focus:border-lime-600 focus:bg-lime-500/2"
            placeholder="Name..."
            value={formData.name}
            onChange={(e) => setFormDate({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-[#f2f2f2] border border-lime-500 rounded px-4 py-3 text-black transition focus:outline-none focus:border-lime-600 focus:bg-lime-500/2"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormDate({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-[#f2f2f2] border border-lime-500 rounded px-4 py-3 text-black transition focus:outline-none focus:border-lime-600 focus:bg-lime-500/2"
            placeholder="Your message"
            value={formData.message}
            onChange={(e) =>
              setFormDate({ ...formData, message: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden hover:translate-y-0.5 hover:shadow-2xl"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};
