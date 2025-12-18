import categoryEarrings from "@/assets/category-earrings.png";
import categoryNecklace from "@/assets/category-necklace.png";
import categoryRings from "@/assets/category-rings.png";
import categoryBracelets from "@/assets/category-bracelets.png";
import categoryEarrings2 from "@/assets/category-earrings-2.png";

const CategorySection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-center text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-josefin tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0em] mb-0 sm:mb-0 md:mb--9 font-semibold">
          Category
        </h2>

        {/* Mobile & Tablet: Grid Layout */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <CategoryCard src={categoryRings} text="Eternal Rings" isMain />
            <CategoryCard src={categoryEarrings} text="Necklace" />
            <CategoryCard src={categoryBracelets} text="Bracelets" />
            <CategoryCard src={categoryNecklace} text="Earrings" />
            <CategoryCard src={categoryEarrings2} text="Earrings" className="sm:col-span-2 md:col-span-1" />
          </div>
        </div>

        {/* Desktop: Overlapping Layout */}
        <div className="hidden lg:block relative h-[500px] xl:h-[600px] 2xl:h-[700px]">
          {/* LEFT FAR */}
          <div className="absolute left-[2%] top-1/2 -translate-y-1/2 w-[250px] xl:w-[330px] 2xl:w-[393px] h-[310px] xl:h-[410px] 2xl:h-[486px] z-[1] overflow-hidden">
            <img src={categoryNecklace} className="w-full h-full object-cover" />
            <Label text="Earrings" big />
          </div>

          {/* LEFT MID */}
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[280px] xl:w-[370px] 2xl:w-[438px] h-[350px] xl:h-[460px] 2xl:h-[552px] z-[3] overflow-hidden">
            <img src={categoryEarrings} className="w-full h-full object-cover" />
            <Label text="Necklace" big />
          </div>

          {/* CENTER (MAIN) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] xl:w-[410px] 2xl:w-[495px] h-[380px] xl:h-[490px] 2xl:h-[591px] z-[10] overflow-hidden">
            <img src={categoryRings} className="w-full h-full object-cover" />
            <Label text="Eternal Rings" big />
          </div>

          {/* RIGHT MID */}
          <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[280px] xl:w-[370px] 2xl:w-[438px] h-[350px] xl:h-[460px] 2xl:h-[552px] z-[3] overflow-hidden">
            <img src={categoryBracelets} className="w-full h-full object-cover" />
            <Label text="Bracelets" big />
          </div>

          {/* RIGHT FAR */}
          <div className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[250px] xl:w-[330px] 2xl:w-[393px] h-[310px] xl:h-[410px] 2xl:h-[486px] z-[1] overflow-hidden">
            <img src={categoryEarrings2} className="w-full h-full object-cover" />
            <Label text="Earrings" big />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

/* ---------------------------------- */
/* Label Component (inline, same file) */
/* ---------------------------------- */

const CategoryCard = ({ 
  src, 
  text, 
  isMain = false,
  className = "" 
}: { 
  src: string; 
  text: string; 
  isMain?: boolean;
  className?: string;
}) => {
  return (
    <div className={`relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden ${className}`}>
      <img src={src} className="w-full h-full object-cover" />
      <Label text={text} big={isMain} />
    </div>
  );
};

const Label = ({ text, big }: { text: string; big?: boolean }) => {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t  to-transparent">
      <p
        className={`
          text-white text-center underline
          ${big ? "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] py-3 sm:py-4" : "text-[14px] sm:text-[16px] py-2 sm:py-3"}
        `}
      >
        {text}
      </p>
    </div>
  );
};
