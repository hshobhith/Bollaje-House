"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppQuery() {
  const [message, setMessage] = useState("");

  const phoneNumber = "918197124634"; 

  const handleSend = () => {
    if (!message.trim()) return;

    const encoded = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="query"
      className="py-5 px-6 max-w-3xl mx-auto bg-green-50 rounded-2xl shadow-lg border border-green-200"
      style = {{ marginTop: '25px' , marginBottom: '25px'}}
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        Have a Query?
      </h2>
      <p className="text-center text-gray-700 mb-6">
        Type your message below. We will reply instantly on WhatsApp.
      </p>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-32 p-4 border border-green-300 rounded-xl focus:outline-none 
                   focus:ring-2 focus:ring-green-600"
        placeholder="Type your question here..."
      />
      <button
        onClick={handleSend}
        className="mt-4 w-full flex items-center justify-center gap-2 
                   bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl 
                   font-semibold transition"
      >
        <FaWhatsapp className="text-xl" />
        Send on WhatsApp
      </button>
    </section>
  );
}
