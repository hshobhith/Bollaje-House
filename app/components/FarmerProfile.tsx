"use client";
import { useState, useEffect, useRef } from "react";

export default function FarmerProfile() {
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
    <section id="farmer" className="py-20 px-6 max-w-5xl mx-auto bg-green-50 hover:bg-green-60">
      <h2 className="text-3xl font-bold mb-6">Meet Harshith</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
        {/* Image Placeholder */}
        <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          Farmer Image
        </div>
        <div className="text-lg space-y-4">
            {lang === "english" && (
                <p className="text-lg leading-8">
                Harshith is a dedicated farmer with a strong technical background, having completed his degree in Mechanical Engineering. His engineering knowledge gives him an edge in modern farming—he understands machinery, optimizes equipment usage, and applies practical mechanical solutions to improve productivity.
                Despite choosing a life connected to the land, Harshith blends traditional agricultural experience with modern technical skills. He is hardworking, adaptable, and always eager to learn new methods to improve his farm’s efficiency. His unique combination of hands-on farming experience and engineering expertise makes him both a practical problem-solver and an innovative thinker.
                </p>
            )}
            {lang === "kannada" && (
                <p className="text-lg leading-8">
                ಹರ್ಷಿತ್ ಯಾಂತ್ರಿಕ ಇಂಜಿನಿಯರಿಂಗ್ ಪದವಿ ಪೂರ್ಣಗೊಳಿಸಿರುವ, ಘನ ತಾಂತ್ರಿಕ ಹಿನ್ನೆಲೆಯುಳ್ಳ ಸಮರ್ಪಿತ ರೈತ. ಅವನ ಇಂಜಿನಿಯರಿಂಗ್ ಜ್ಞಾನವು ಆಧುನಿಕ ಕೃಷಿಯಲ್ಲಿ ಅವನಿಗೆ ವಿಶೇಷವಾದ ಮುನ್ನಡೆಯನ್ನು ನೀಡುತ್ತದೆ — ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಬಳಕೆ, ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯ ಹೆಚ್ಚಳದಲ್ಲಿ ಅವನು ಪರಿಣತಿ ಹೊಂದಿದ್ದಾನೆ.
                ಭೂಮಿಯ ಜೊತೆಗೆ ಬದುಕನ್ನು ಆರಿಸಿಕೊಂಡಿದ್ದರೂ, ಹರ್ಷಿತ್ ಪಾರಂಪರಿಕ ಕೃಷಿ ಅನುಭವವನ್ನು ಆಧುನಿಕ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳೊಂದಿಗೆ ಸಮನ್ವಯಗೊಳಿಸುತ್ತಾನೆ. ಅವನು ಪರಿಶ್ರಮಿ, ಹೊಂದಿಕೊಳ್ಳುವ ಗುಣದವನು ಮತ್ತು ತನ್ನ ಕೃಷಿಯ ಪರಿಣಾಮಕಾರಿತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಹೊಸ ವಿಧಾನಗಳನ್ನು ಕಲಿಯಲು ಸದಾ ಮುಂದಿರುವವನು. ಕೈಯಲ್ಲಿ ಮಾಡುವ ಅನುಭವ ಮತ್ತು ಇಂಜಿನಿಯರಿಂಗ್ ಪರಿಣತಿಯ ಈ ಅನನ್ಯ ಸಂಯೋಜನೆ, ಅವನನ್ನು ಪ್ರಾಯೋಗಿಕ ಸಮಸ್ಯಾ ಪರಿಹಾರಕನಾಗಿಯೂ, ಹೊಸ ಆವಿಷ್ಕಾರಗಳ ಚಿಂತಕರಾಗಿಯೂ ರೂಪಿಸುತ್ತದೆ.
                </p>
            )}
            </div>
        </div>
    </section>
  );
}
