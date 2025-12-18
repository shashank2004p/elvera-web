import iconHallmark from "@/assets/icon-hallmark.png";
import iconCustomization from "@/assets/icon-customization.png";
import iconPricing from "@/assets/icon-pricing.png";
import iconDelivery from "@/assets/icon-delivery.png";
import iconSupport from "@/assets/icon-support.png";

const features = [
  {
    icon: iconHallmark,
    title: "BIS Hallmarked &",
    subtitle: "Certified Diamonds",
  },
  {
    icon: iconCustomization,
    title: "Customization with",
    subtitle: "flexible MOQ",
  },
  {
    icon: iconPricing,
    title: "Competitive &",
    subtitle: "Flexible B2B Pricing",
  },
  {
    icon: iconDelivery,
    title: "Timely Jewellery",
    subtitle: "Delivery Partners",
  },
  {
    icon: iconSupport,
    title: "Dedicated support",
    subtitle: "for smooth comm.",
  },
];

const IconInfoStrip = () => {
  return (
    <section
      className="w-full py-6 sm:py-8 md:py-10 lg:py-12"
      style={{
        background: "linear-gradient(183.81deg, #783A27 -83.48%, #3E281D 103.85%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-8 justify-items-center items-start">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full max-w-[140px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[180px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#4A3629] flex items-center justify-center mb-3 sm:mb-4">
                <img src={feature.icon} alt={feature.title} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain brightness-0 invert" />
              </div>
              <p className="font-josefin text-white text-[10px] sm:text-xs md:text-sm leading-tight">
                {feature.title}
                <br />
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconInfoStrip;
