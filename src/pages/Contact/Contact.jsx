import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_icb2xur",
        "template_rfh7g46",
        form.current,
        "NIgg2iX6SSgWLgfIF",
      )

      .then(() => {
        form.current.reset();

        showPopup("success", "Message sent successfully!");
      })

      .catch(() => {
        showPopup("error", "Failed to send message");
      });
  };

  const showPopup = (type, message) => {
    setPopup({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setPopup({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#04081A] px-4 pt-32 pb-20">
      {/* POPUP */}

      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`

fixed top-10 right-10 z-50

px-6 py-4 rounded-xl

shadow-2xl backdrop-blur-lg

flex items-center gap-3

${
  popup.type === "success"
    ? "bg-green-500/20 border border-green-400"
    : "bg-red-500/20 border border-red-400"
}

`}
          >
            {popup.type === "success" ? (
              <CheckCircle className="text-green-400" />
            ) : (
              <XCircle className="text-red-400" />
            )}

            <span className="text-white font-semibold">{popup.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-2xl">
        <div className="bg-[#0d081f]/60 backdrop-blur-md p-8 rounded-2xl border border-purple-700 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            🚀 Let's Connect
          </h2>

          <p className="text-gray-400 text-center mb-8">
            Have a question, idea, or opportunity? Don't hesitate to drop a
            message
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="email"
              name="user_email"
              placeholder="📧 Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="text"
              name="user_name"
              placeholder="👤 Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="📝 Subject"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="💬 Your Message"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
