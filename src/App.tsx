import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { HeroReveal } from "./components/HeroReveal";
import { AboutParallax } from "./components/AboutParallax";
import { ChallengesScroll } from "./components/ChallengesScroll";
import { SolutionsHorizontal } from "./components/SolutionsHorizontal";
import { TechnologiesShowcase } from "./components/TechnologiesShowcase";
import { DifferentiatorsSticky } from "./components/DifferentiatorsSticky";
import { CTAReveal } from "./components/CTAReveal";
import { EnrollPage } from "./components/EnrollPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [showEnrollPage, setShowEnrollPage] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleEnrollClick = () => {
    setShowEnrollPage(true);
    // Scroll to enroll section after a brief delay to ensure it's rendered
    setTimeout(() => {
      const enrollSection = document.getElementById("enroll");
      if (enrollSection) {
        enrollSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header onEnrollClick={handleEnrollClick} />
      <HeroReveal />
      <AboutParallax />
      <ChallengesScroll />
      <SolutionsHorizontal />
      <TechnologiesShowcase />
      <DifferentiatorsSticky />
      <CTAReveal onEnrollClick={handleEnrollClick} />
      {showEnrollPage && <EnrollPage />}
      <Footer />
    </div>
  );
}
