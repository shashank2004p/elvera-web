import footerBg from "@/assets/footer-bg.jpg";
import elveraLogoText from "@/assets/elvera-logo-text.png";
import elveraLogoFinal from "@/assets/ElveraLogoFinal.png";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${footerBg})` }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Section - Links */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* About Us */}
            <div>
              <h3 className="font-josefin font-semibold text-lg sm:text-xl md:text-2xl text-elvera-black mb-3 sm:mb-4">
                About Us
              </h3>
              <p className="text-xs sm:text-sm text-elvera-black/80 leading-relaxed">
                At Elvera Jewels, we believe jewellery is more than adornment. Founded in 2020, our passion for quality
                and artistry drives us to create unique pieces.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-josefin font-semibold text-lg sm:text-xl md:text-2xl text-elvera-black mb-3 sm:mb-4">
                Useful Links
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {["Home", "About", "Shop", "Blog", "Contact Us"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-elvera-black/80 hover:text-elvera-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-josefin font-semibold text-lg sm:text-xl md:text-2xl text-elvera-black mb-3 sm:mb-4">
                Services
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {["Refund", "Shipping", "Order Status", "FAQ", "Exchange"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-elvera-black/80 hover:text-elvera-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-josefin font-semibold text-lg sm:text-xl md:text-2xl text-elvera-black mb-3 sm:mb-4">
                Support
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {["Privcy Policy", "Terms of Use"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-elvera-black/80 hover:text-elvera-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Row */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-5 md:py-6 border-t border-elvera-black/20">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            {/* Availability */}
            <div className="text-xs sm:text-sm text-elvera-black">
              <p>We're Available by Text and Chat</p>
              <p>Everyday, 10:00A.M. - 6:00P.M. IST</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-elvera-black">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="break-all sm:break-normal">hello@elverajewels.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-elvera-black">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>+91 99999 99999</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="text-elvera-black hover:text-elvera-black/70 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-elvera-black hover:text-elvera-black/70 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-elvera-black hover:text-elvera-black/70 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Large ELVERA Image */}
        <div className="w-full flex justify-center items-center py-2 sm:py-3 px-4 overflow-hidden">
          <img 
            src={elveraLogoFinal} 
            alt="ELVERA" 
            className="max-w-full h-auto object-contain"
            style={{
              width: '100%',
              maxWidth: '1821px',
              height: 'auto',
              display: 'block',
              aspectRatio: '1821 / 339'
            }}
          />
        </div>

        {/* Copyright */}
        <div className="text-center pb-4 sm:pb-5 md:pb-6 px-4">
          <p className="text-xs sm:text-sm text-elvera-black/70 mb-1">
            Copyright© Elvera Jewels 2025 | All rights Reserved
          </p>
          <p className="text-xs sm:text-sm text-elvera-black/70">
            Designed and Developed by Orpol Infotech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
