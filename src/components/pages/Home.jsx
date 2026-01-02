import HeroSection from "../views/homeViews/HeroSection";
import Featured from "../views/homeViews/Featured";
import Collection from "../views/homeViews/Collection";
import VideoSection from "../views/homeViews/VideoSection";
import ShopByType from "../views/homeViews/ShopByType"; 
import Footer from "../layouts/Footer"; // Path check karlein apne folder ke mutabiq

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <Collection />
      <VideoSection />
      <ShopByType />
      
    </main>
  );
}