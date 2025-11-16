import MediaSlider from "../components/MediaSlider";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6 bg-amber-50 hover:bgamber-60 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/backgruond1.mp4"
        autoPlay
        loop
        muted
        playsInline
    />
    <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Arecanut Dehusking Machine
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl mb-6">
        Automating the process of removing the outer husk from arecanuts, saving time and effort.
      </p>
      <MediaSlider
        items={[
            { type: "video", src: "/videos/video1.mp4" },
            { type: "video", src: "/videos/video2.mp4" },
            { type: "video", src: "/videos/video3.mp4" },
            { type: "video", src: "/videos/video4.mp4" },
            { type: "video", src: "/videos/video4.mp4" },
            { type: "video", src: "/videos/video6.mp4" },
            { type: "video", src: "/videos/video7.mp4" },
            // { type: "image", src: "/images/pic2.jpg" },
        ]}
        />
    </div>
    </section>
  );
}
