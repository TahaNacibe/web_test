import LandingSection from "./pages/landing";
import WhatTheySaySection from "./pages/whatTheySay";
import ColorDisplaySection from "./pages/colors_tab";
import OptionsSections from "./pages/option_sections";
import MoreSection from "./pages/more_section";
import ReviewsSection from "./pages/review_section";
import Footer from "./pages/parts/footer";
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* the landing page */}
      <LandingSection />
      {/* Some information tab */}
      <WhatTheySaySection />
      {/* colors switching pallet */}
      <ColorDisplaySection />
      {/* available phones options */}
      <OptionsSections />
      {/* accessory tab banner */}
      <MoreSection />
      {/* users reviews section */}
      <ReviewsSection />
      <Footer/>
    </div>
  );
}
