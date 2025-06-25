
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://web-images.credcdn.in/v2/_next/assets/images/garage_1/desktop/desktop-hero-fold-poster.png?tr=q-95"
        >
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/garage/desktop-hero-video.mp4?tr=q-95"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/garage/mobile-hero-video.mp4?tr=q-95"
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </video>
      </div>
   
      <div className="absolute top-6 left-6 z-20">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
          alt="CRED Logo"
          className="w-24 md:w-32"
        />
      </div>
   
    </section>
  );
}
