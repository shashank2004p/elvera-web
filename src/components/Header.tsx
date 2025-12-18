import { useState } from "react";
import { Search, Heart, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import logoImage from "@/assets/logo.png";
import usFlag from "@/assets/us-flag.png";
import bellIcon from "@/assets/icon-bell.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["Gold", "Silver", "Platinum", "Custom Jewellery", "About Us"];

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 h-[50px] sm:h-[55px] md:h-[60px] flex items-center justify-between relative">
        {/* Left Navigation - Desktop Only */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] xl:text-[13px] text-foreground hover:text-elvera-brown-light tracking-wide transition-colors font-semibold"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="p-2 text-foreground">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-6 mt-8">
              <a href="/" className="block mb-4">
                <img src={logoImage} alt="ELVERA Jewels" className="h-auto w-[160px]" />
              </a>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[16px] font-semibold text-foreground hover:text-elvera-brown-light tracking-wide transition-colors py-2 border-b border-border/50"
                  >
                    {link}
                  </a>
                ))}
              </nav>
              {/* Mobile Search */}
              <div className="flex items-center justify-between w-full border-b-2 border-black pb-2 mt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-[14px] bg-transparent outline-none placeholder:text-black"
                />
                <Search className="w-4 h-4 text-black shrink-0" />
              </div>
              {/* Mobile Currency Selector */}
              <button className="flex items-center gap-2 text-[14px] text-foreground mt-2">
                <img src={usFlag} alt="USD" className="w-5 h-5 rounded-full object-cover" />
                <span>(USD $)</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="block">
            <img 
              src={logoImage} 
              alt="ELVERA Jewels" 
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]" 
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {/* Search - Desktop Only */}
          <div className="hidden md:flex items-center justify-between w-[140px] lg:w-[160px] border-b-2 border-black pb-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-[12px] lg:text-[14px] bg-transparent outline-none placeholder:text-black"
            />
            <Search className="w-3 h-3 lg:w-4 lg:h-4 text-black shrink-0" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <button className="relative">
              <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-foreground" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-foreground text-primary-foreground text-[9px] sm:text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative">
              <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-foreground" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-foreground text-primary-foreground text-[9px] sm:text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button>
              <img src={bellIcon} alt="Service" className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
            </button>
          </div>

          {/* Currency Selector - Desktop Only */}
          <button className="hidden lg:flex items-center gap-2 text-[12px] xl:text-[13px] text-foreground">
            <img src={usFlag} alt="USD" className="w-4 h-4 xl:w-5 xl:h-5 rounded-full object-cover" />
            <span className="hidden xl:inline">(USD $)</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
