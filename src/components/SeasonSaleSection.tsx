import { ArrowRight } from "lucide-react";
import saleModel from "@/assets/sale-model.png";
import saleLeavesBg from "@/assets/sale-leaves-bg.png";

const SeasonSaleSection = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[410px] shadow-lg">
        {/* Left Banner - Large */}
        <div className="relative flex-1 bg-[#F6F4F1] overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1]"
            style={{
              backgroundImage: `url(${saleLeavesBg})`,
            }}
          />
          <div className="absolute right-0 top-0 w-[55%] h-full hidden sm:block">
            <img
              src={saleLeavesBg}
              alt=""
              className="w-full h-full object-cover object-right-top opacity-80 scale-x-[-1]"
            />
          </div>

          {/* Model Image - positioned on left */}
          <div className="absolute left-0 top-0 bottom-0 w-[30%] sm:w-[35%] lg:w-[280px]">
            <img
              src={saleModel}
              alt="Model wearing jewelry"
              className="h-full w-full object-cover object-top scale-x-[-1]"
            />
          </div>

          {/* Content - positioned in center-right area */}
          <div className="relative z-10 ml-auto mr-4 sm:mr-6 md:mr-8 lg:mr-16 max-w-[90%] sm:max-w-[420px] h-full flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-0 pl-[35%] sm:pl-[40%] lg:pl-0">
            <p className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.22em] text-[#3D3027] mb-3 sm:mb-4 uppercase font-medium">
              END OF THE SEASON SALE
            </p>

            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold text-[#3D3027] leading-[0.9] mb-2">
              50% Off
            </h2>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#3D3027] font-light mb-4 sm:mb-5 md:mb-6">
              on Making Charges
            </p>

            <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#3D3027] mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-full sm:max-w-[380px]">
              At Elvera, we believe every piece tells a story. Stay Ahead of the curve with our Trendy Jewellery
              Collection.
            </p>

            <button className="bg-[#3D3027] text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 flex items-center gap-2 hover:bg-[#2D2017] transition-colors text-[11px] sm:text-[12px] md:text-[13px] font-medium w-fit">
              Shop Now
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Right Banner - Brown */}
        <div className="bg-[#4A3629] w-full lg:w-[360px] flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-8 text-center">
          <p className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.22em] text-white/90 mb-4 sm:mb-5 md:mb-6 uppercase font-medium border-b border-white/30 pb-2 sm:pb-3 px-2 sm:px-4">
            END OF THE SEASON SALE
          </p>

          <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold text-white leading-[0.9] mb-2">
            50% Off
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-white font-light mb-4 sm:mb-5 md:mb-6">
            on Making Charges
          </p>

          <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-white/80 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-full sm:max-w-[240px]">
            Stay Ahead of the curve with our Trendy Jewellery Collection
          </p>

          <button className="bg-white text-[#3D3027] px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 flex items-center gap-2 hover:bg-gray-100 transition-colors text-[11px] sm:text-[12px] md:text-[13px] font-medium">
            Shop Now
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeasonSaleSection;
