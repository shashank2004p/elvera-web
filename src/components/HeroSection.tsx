import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Fine Jewellery" className="w-full h-full object-cover object-top" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-[200px] sm:pt-[280px] md:pt-[350px] lg:pt-[400px] xl:pt-[500px]">
        <h1 className="text-primary-foreground text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[64px] leading-[1.2] tracking-wide mb-3 sm:mb-4 font-semibold">
          Discover the
          <br />
          Essence of Fine Jewellery
        </h1>
        <p className="text-primary-foreground/90 text-[12px] sm:text-[13px] md:text-[14px] font-light tracking-wider max-w-[90%] sm:max-w-none">
          Perfectly Timeless Jewellery for Every Occasion
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
