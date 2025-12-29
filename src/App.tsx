import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroReveal } from "./components/HeroReveal";
import { AboutParallax } from "./components/AboutParallax";
import { ChallengesScroll } from "./components/ChallengesScroll";
import { SolutionsHorizontal } from "./components/SolutionsHorizontal";
import { TechnologiesShowcase } from "./components/TechnologiesShowcase";
import { DifferentiatorsSticky } from "./components/DifferentiatorsSticky";
import { CTAReveal } from "./components/CTAReveal";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroReveal />
      <AboutParallax />
      <ChallengesScroll />
      <SolutionsHorizontal />
      <TechnologiesShowcase />
      <DifferentiatorsSticky />
      <CTAReveal />
      <Footer />
    </div>
  );
}
