import trendiestRings from "@/assets/trendiest-rings.png";
import { ArrowRight } from "lucide-react";

const TrendiestSection = () => {
  return (
    <section className="w-full relative min-h-[350px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${trendiestRings})`,
          backgroundColor: "#e8e4df",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 h-full flex items-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-full sm:max-w-md lg:max-w-lg">
          <h2 className="font-josefin text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[36px] leading-tight mb-4 sm:mb-5 md:mb-6 text-black font-semibold">
            Your shortcut to our
            <br />
            #TRENDIEST Discoveries
          </h2>
          <p className="font-josefin text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 text-black/90">
            Celebrate love, success, and memories with jewellery that lasts forever. From engagements to anniversaries,
            find the perfect piece that captures your emotions.
          </p>
          <button className="inline-flex items-center gap-2 bg-elvera-brown text-white font-josefin text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm hover:bg-elvera-brown/90 transition-colors">
            Shop Now
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendiestSection;
