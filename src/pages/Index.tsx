import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrendiestSection from "@/components/TrendiestSection";
import IconInfoStrip from "@/components/IconInfoStrip";
import MostLovedSection from "@/components/MostLovedSection";
import CustomizeSection from "@/components/CustomizeSection";
import SeasonSaleSection from "@/components/SeasonSaleSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <TrendiestSection />
        <IconInfoStrip />
        <MostLovedSection />
        <CustomizeSection />
        <MostLovedSection />
        <SeasonSaleSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
