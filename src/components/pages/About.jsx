import React from "react";
// ../../ ka matlab: pages se bahar -> components se bahar -> views folder mein
import AboutHero from "./../views/aboutViews/AboutHero";
import AboutStory from "./../views/aboutViews/AboutStory"; // Agar ye file views/aboutViews mein hai
import FounderMessage from "./../views/aboutViews/FounderMessage";

export default function About() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutStory />
      <FounderMessage />
    </main>
  );
}