import HeroSection from "../views/homeViews/HeroSection";
import Featured from "../views/homeViews/Featured";
import Faqs from "../views/homeViews/Faqs";

export default function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      <HeroSection />
      <Featured />
      <Faqs />
    </section>
  );
}
