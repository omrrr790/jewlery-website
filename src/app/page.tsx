import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturedCollections } from "./components/FeaturedCollections";
import { BestSellers } from "./components/BestSellers";
import { OurStory } from "./components/OurStory";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-background text-foreground dark:bg-[#080808] dark:text-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <Header />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <BestSellers />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}