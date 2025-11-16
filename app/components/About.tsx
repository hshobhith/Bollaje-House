"use client";
import { useState, useEffect, useRef } from "react";

export default function About() {
    const [lang, setLang] = useState("kannada");
    const autoPlayRef = useRef(true);

    useEffect(() => {
    if (!autoPlayRef.current) return;

    const interval = setInterval(() => {
      setLang((prev) => (prev === "kannada" ? "english" : "kannada"));
    }, 10000);

    return () => clearInterval(interval);
    }, [lang]);

    const handleUserClick = (lang: string) => {
        autoPlayRef.current = false; 
        setLang(lang);
    };

  return (
     <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About</h2>

      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => handleUserClick("kannada")}
          className={`pb-2 px-3 font-semibold ${
            lang === "kannada"
              ? "border-b-4 border-green-600 text-green-700"
              : "text-gray-500"
          }`}
        >
          ಕನ್ನಡ
        </button>
        <button
          onClick={() => handleUserClick("english")}
          className={`pb-2 px-3 font-semibold ${
            lang === "english"
              ? "border-b-4 border-green-600 text-green-700"
              : "text-gray-500"
          }`}
        >
          English
        </button>
      </div>

      {lang === "kannada" && (
        <p className="text-lg leading-8">
          ಅಡಿಕೆ ಸುಲಿಯುವ ಯಂತ್ರವು (arecanut dehusking machine) ಮನುಷ್ಯರಿಂದ ಕೈಯಿಂದ ಮಾಡುವ 
          ಶ್ರಮದಾಯಕ ಕೆಲಸವನ್ನು ಸುಲಭಗೊಳಿಸಲು, ಸಮಯವನ್ನು ಉಳಿಸಲು ಮತ್ತು ಕುಶಲ 
          ಕರ್ಮಿಕರ ಕೊರತೆಯನ್ನು ನೀಗಿಸಲು ಪರಿಚಯಿಸಲಾಗಿದೆ. ಇದು ಅಡಿಕೆಗಳ ಹೊರಗಿನ ಸೊಪ್ಪನ್ನು 
          ಯಾಂತ್ರಿಕವಾಗಿ ತೆಗೆದುಹಾಕುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುತ್ತದೆ. ಈ ಯಂತ್ರವು 
          ವೇಗವಾಗಿ, ಸುರಕ್ಷಿತವಾಗಿ ಮತ್ತು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ವಿಶೇಷವಾಗಿ 
          ವ್ಯಾಪಾರಿಕ ಬಳಕೆಗೆ ಉತ್ಪಾದಕತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.
        </p>
      )}

      {lang === "english" && (
        <p className="text-lg leading-8">
          An arecanut dehusking machine is a mechanical device that automates the
          process of removing the outer husk from arecanuts. It replaces the
          traditional labor-intensive method with a faster, safer, and more
          efficient process, increasing productivity especially for commercial use.
        </p>
      )}
    </section>
  );
}
