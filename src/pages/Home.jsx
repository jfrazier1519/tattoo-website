import FinalCTASection from "../components/home/FinalCTASection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import SuccessPartnerSection from "../components/home/SuccessPartnerSection";
import StepsSection from "../components/home/StepsSection";
import TestimonialsSection from "../components/home/Testimonials";
import RequestQuoteSection from "../components/home/RequestQuoteSection";
import Button from "../components/shared/Button";
import heroImage from "../assets/home/hero.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection backgroundImage={heroImage} />

      {/* Our Services - Solid Black */}
      <div className="bg-black" id="services">
        <ServicesSection />
      </div>

      {/* What We Do / Partner for Success - Black to Teal fade */}
      <div className="bg-gradient-to-b from-black to-[#214045]">
        <SuccessPartnerSection />
      </div>

      {/* Steps, Testimonials, Quote - Long Teal to White Fade */}
      <div className="bg-gradient-to-b from-[#214045] to-white">
        <div id="how-it-works">
          <StepsSection />
        </div>
        <TestimonialsSection />
        {/* Blog CTA Section */}
        <div className="max-w-4xl mx-auto my-12 rounded-2xl bg-[#1a2a2e] px-8 py-10 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Launch Smarter?
          </h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Discover how we help founders go from first idea to successful
            launch—no matter your budget or experience. Get tips, stories, and
            startup wisdom in our blog.
          </p>
          <Button href="/blog" size="lg">
            Read Our Startup Insights Blog
          </Button>
        </div>
        <div id="quote">
          <RequestQuoteSection />
        </div>
      </div>

      {/* Final CTA - Solid White */}
      <div className="bg-white" id="contact">
        <FinalCTASection />
      </div>
    </>
  );
};

export default Home;
