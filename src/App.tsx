import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
       <main>
        <Navbar/>
        <Hero/>
        <Category/>
        <FeatureSectionFruits/>
        <FeatureSectionBreakfast/>
        <BannerSection/>
        <BlogSection/>
        <NewsLetter/>
       <FeatureSection />
       <Footer/>
       </main>
  );
  
};

export default App

