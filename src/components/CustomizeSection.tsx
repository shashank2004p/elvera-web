import customizeBg from "@/assets/customize-bg.png";
import womanSilhouette from "@/assets/woman-silhouette.png";
import customizeRightBg from "@/assets/customize-right-bg.png";
import Group_1597884892 from "@/assets/Group_1597884892.png";
import { ArrowRight } from "lucide-react";

const CustomizeSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[600px] sm:min-h-[700px] lg:min-h-[700px]">
      {/* Left Side - Image with Form overlay */}
      <div className="relative w-full lg:w-[960px] lg:max-w-[50%] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${customizeBg})` }} />

        {/* Form Container - positioned at right bottom corner with transparency */}
        <div className="absolute bottom-0 left-0 right-0 lg:right-0 lg:left-auto p-4 sm:p-6 lg:p-0">
          <div className="bg-elvera-brown/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center w-full lg:max-w-[520px] mx-auto lg:mx-0 lg:ml-auto min-h-[450px] sm:min-h-[500px] lg:h-[500px]">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl text-center mb-4 sm:mb-5 md:mb-6 text-white italic">
              Request a Quote
            </h2>

            <form className="space-y-2.5 sm:space-y-3">
              {/* Name and Mobile Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:border-elvera-brown text-xs sm:text-sm bg-white"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:border-elvera-brown text-xs sm:text-sm bg-white"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:border-elvera-brown text-xs sm:text-sm bg-white"
              />

              {/* Business Type */}
              <input
                type="text"
                placeholder="Business Type"
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:border-elvera-brown text-xs sm:text-sm bg-white"
              />

              {/* Business Name */}
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:border-elvera-brown text-xs sm:text-sm bg-white"
              />

              {/* Message */}
              <textarea
                placeholder="Please describe your idea for this Custom Project and provide us with as many details as you can, so we can get back to you with a quote for your Custom Jewelry."
                rows={3}
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:border-elvera-brown text-xs resize-none bg-white"
              />

              {/* Submit Button */}
              <div className="pt-1 sm:pt-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-elvera-brown text-white px-5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 hover:bg-elvera-brown/90 transition-colors text-xs sm:text-sm font-medium"
                >
                  Submit
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="relative w-full lg:flex-1 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        {/* Background Image - subtle ring texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${customizeRightBg})` }}
        />
        {/* Light cream overlay */}
        <div className="absolute inset-0 bg-[#f5f3f0]/70" />

        <div className="relative z-10 flex flex-col justify-center h-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="max-w-full lg:max-w-[515px]">
            {/* Title - Josefin Sans, 600 weight, 45px, line-height 124% */}
            <h2 className="font-josefin font-semibold text-black mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[124%]">
              Customize your Jewellery
            </h2>

            <p className="text-black/80 mb-3 sm:mb-4 leading-relaxed text-justify text-xs sm:text-sm md:text-base">
              At <span className="font-semibold">Elvera,</span> Our customization service allows you to create
              one-of-a-kind designs that reflect your style, memories, and personality.
            </p>

            <p className="text-black/80 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-justify text-xs sm:text-sm md:text-base">
              Tell us what you're dreaming of! Fill out the form so we can bring your idea to life.
            </p>

            {/* Woman Silhouette - 179px x 260.62px */}
            <div className="my-4 sm:my-5 md:my-6">
              <div className="relative">
                <img
                  src={Group_1597884892}
                  alt="Woman silhouette with jewelry"
                  className="object-contain w-[120px] h-auto sm:w-[150px] md:w-[179px]"
                  style={{ height: "auto" }}
                />
              </div>
            </div>

            <p className="text-black/80 leading-relaxed text-justify text-xs sm:text-sm md:text-base">
              Kindly share your design with us. Our team will review it and get back to you within 3 to 4 hours with a
              quotation and the next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
