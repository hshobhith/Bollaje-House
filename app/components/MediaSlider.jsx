"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function MediaSlider({ items }) {
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
const videoRefs = useRef([]);

useEffect(() => {
  if (!emblaApi) return;

  const onSelect = async () => {
    const index = emblaApi.selectedScrollSnap();
    const currentItem = items[index];
    const video = videoRefs.current[index];

    videoRefs.current.forEach((v) => {
      if (v) {
        v.onended = null;  
        v.pause();
      }
    });

    if (currentItem.type === "video" && video) {
      video.currentTime = 0;
      setTimeout(() => {
        video
          .play()
          .then(() => {
            video.onended = () => emblaApi.scrollNext();
          })
          .catch(() => {
            // Prevent browser autoplay warnings
          });
      }, 50);
    } else {
      const timer = setTimeout(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearTimeout(timer);
    }
  };

  emblaApi.on("select", onSelect);
  onSelect();
}, [emblaApi, items]);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div className="min-w-full flex items-center justify-center" key={index}>
              {/* Image */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  className="w-full h-64 md:h-80 lg:h-[480px] object-cover lg:object-contain rounded-2xl bg-black"
                  alt=""
                />
              )}

              {/* Video */}
              {item.type === "video" && (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  className="w-full h-64 md:h-80 lg:h-[480px] object-cover lg:object-contain rounded-2xl bg-black"
                  playsInline
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
