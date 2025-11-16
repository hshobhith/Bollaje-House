import { FaPhoneAlt, FaWhatsapp, FaSms } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Column 1 – Logo + Social Icons */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold tracking-wide">Arecanut Machine</h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              High-performance Arecanut Dehusking Machines designed for farmers.
            </p>

            <div className="flex space-x-5 text-2xl mt-4">
              <a href="tel:+918197124634" className="text-gray-400 hover:text-white">
                <FaPhoneAlt title="Call" />
              </a>
              <a
                href="https://wa.me/918197124634"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaWhatsapp title="WhatsApp" />
              </a>
              <a
                href="sms:+918197124634"
                className="text-gray-400 hover:text-white"
              >
                <FaSms title="SMS" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
        <h3 className="text-lg font-semibold">Location</h3>

        <div className="w-full h-48 lg:h-56 rounded-xl overflow-hidden border border-gray-700">
            <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.072570379675!2d75.47146334842354!3d12.822590446269382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4c3003875defb%3A0xc54c5107ab1f11fb!2sBollaje%20House!5e0!3m2!1sen!2sin!4v1763293651395!5m2!1sen!2sin"
            ></iframe>
        </div>
        </div>
          {/* Column 3 – Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                📍 Bollage House, Noojibalthila Post, Kadaba Taluk,  
                Dakshina Kannada, Karnataka – 574221
              </p>
              <p className="text-gray-300 text-sm">📞 +91 81971 24634</p>
              <p className="text-gray-300 text-sm">🕒 Mon – Sun: 7:00 AM – 7:00 PM</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          &copy; 
          <a
            href="https://shobhith.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 hover:underline transition ml-1"
          >
            Shobhi | {currentYear} All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
}