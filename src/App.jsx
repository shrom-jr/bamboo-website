import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import BrandStory from './components/BrandStory';
import SignatureDishes from './components/SignatureDishes';
import Chefs from './components/Chefs';
import FlipbookMenu from './components/FlipbookMenu';
import Gallery from './components/Gallery';
import LocationHub from './components/LocationHub';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#06140D] text-white selection:bg-[#C5A059] selection:text-black">
      {/* SECTION 1: PRE-LOADER */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* MAIN WEBSITE CONTENT */}
      {!isLoading && (
        <main className="relative w-full overflow-hidden">
          <Navbar />
          <HeroCarousel />
          <BrandStory />
          <SignatureDishes />
          <Chefs />
          <FlipbookMenu />
          <Gallery />
          <LocationHub />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;