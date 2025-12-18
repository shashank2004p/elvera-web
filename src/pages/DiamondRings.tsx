import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productRing from "@/assets/product-ring-solo.png";
import productRingModel from "@/assets/product-ring-model.png";
import promoRing from "@/assets/promo-ring.png";
import { Heart, ChevronDown, ShoppingBag } from "lucide-react";
import { useState } from "react";

const filters = [
  { label: "Ring Styles", hasDropdown: true },
  { label: "Select Metal", hasDropdown: true },
  { label: "Purity", hasDropdown: true },
  { label: "Diamond Shape", hasDropdown: true },
  { label: "Ready to ship", hasDropdown: false },
];

const products = Array(20)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    image: productRing,
    hoverImage: productRingModel,
    sale: "Sale 11%",
  }));

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  sale: string;
}

const ProductCard = ({
  product,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  product: Product;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => (
  <div className="group relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className="relative aspect-square overflow-hidden mb-2 sm:mb-3">
      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-elvera-brown text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 z-10">
        {product.sale}
      </span>

      <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow z-10">
        <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-elvera-brown" />
      </button>

      <img
        src={isHovered ? product.hoverImage : product.image}
        alt={product.name}
        className={`w-full h-full transition-all duration-300 ${isHovered ? "object-cover" : "object-contain p-2 sm:p-4"}`}
      />

      {isHovered && (
        <button className="absolute bottom-0 left-0 right-0 bg-elvera-brown text-white py-2 sm:py-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium animate-fade-in">
          Add to Cart
          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      )}
    </div>

    <h3 className="font-josefin text-xs sm:text-sm text-elvera-brown mb-1 line-clamp-2">{product.name}</h3>
    <p className="font-semibold text-xs sm:text-sm md:text-base text-elvera-brown">{product.price}</p>
  </div>
);

const DiamondRings = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 py-4 sm:py-5 md:py-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-elvera-brown/70 mb-4 sm:mb-5 md:mb-6 flex flex-wrap items-center gap-1 sm:gap-2">
            <span className="hover:text-elvera-brown cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-elvera-brown cursor-pointer">Gold</span>
            <span>/</span>
            <span className="hover:text-elvera-brown cursor-pointer">Diamond Jewelry</span>
            <span>/</span>
            <span className="text-elvera-brown font-semibold font-black">Diamond Rings</span>
          </nav>

          {/* Title & Description */}
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-elvera-brown mb-3 sm:mb-4">
            Diamond Rings
          </h1>
          <p className="text-xs sm:text-sm text-elvera-brown/70 max-w-3xl mb-6 sm:mb-7 md:mb-8 leading-relaxed">
            Shop our full collection of diamond rings for women, men and anyone with an eye for brilliance. With
            handcrafted diamond hoops, studs, drops, and dangles, you'll find the perfect pair in our collection of
            diamond rings for sale.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 font-semibold font-black">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-elvera-brown/30 rounded-full text-xs sm:text-sm text-elvera-brown hover:border-elvera-brown transition-colors"
              >
                {filter.label}
                {filter.hasDropdown && <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isHovered={hoveredProduct === product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              />
            ))}

            {/* Promo Banner */}
            <div className="col-span-2 relative overflow-hidden rounded-sm" style={{ aspectRatio: "1920/733" }}>
              <img src={promoRing} alt="Diamond Ring Promo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
                <p className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-1 sm:mb-2">
                  20% Off
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white/90">On the Diamond Rings</p>
              </div>
            </div>

            {products.slice(6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isHovered={hoveredProduct === product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiamondRings;
