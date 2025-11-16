"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 bg-green-50 shadow-md">
      <div className="flex justify-between items-center">
        
        <div className="text-xl font-bold">
          <img
            src="/image/logo.jpeg"
            alt="Logo"
            className="h-10 w-auto border-[3px]"
            style={{ borderColor: "#8f454f" }}
          />
        </div>

        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
        </button>

        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#problem" className="hover:text-green-600">Problem</a>
          <a href="#farmer" className="hover:text-green-600">Farmer</a>
          <a href="#query" className="hover:text-green-600">Msg</a>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-green-100 p-4 rounded">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#problem" className="hover:text-green-600">Problem</a>
          <a href="#farmer" className="hover:text-green-600">Farmer</a>
          <a href="#query" className="hover:text-green-600">Msg</a>
        </nav>
      )}
    </header>
  );
}
