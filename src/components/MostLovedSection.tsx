import { useState, useEffect, useCallback } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import productRingModel from "@/assets/product-ring-model.png";
import productRingSolo from "@/assets/product-ring-solo.png";

const products = [
  {
    id: 1,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 2,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 3,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 4,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 5,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 6,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 7,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
  {
    id: 8,
    name: "Solitare Center Stone Ring",
    price: "₹36,000",
    sale: "Sale 11%",
    image: productRingSolo,
    hoverImage: productRingModel,
  },
];

const MostLovedSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setSlideCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="font-josefin text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-center text-black mb-6 sm:mb-8 md:mb-10">
          Most Loved on Elvera
        </h2>

        {/* Products Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col">
                  {/* Product Card */}
                  <div
                    className="relative bg-[#F5F0EB] overflow-hidden group cursor-pointer aspect-square"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Sale Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                      <span className="bg-elvera-brown text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {product.sale}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" strokeWidth={1.5} fill="none" />
                    </button>

                    {/* Product Image */}
                    <div className="flex items-center justify-center h-full">
                      <img
                        src={hoveredId === product.id ? product.hoverImage : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    </div>

                    {/* Add to Cart Button - Shows on Hover */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-elvera-brown text-white py-2 sm:py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                        hoveredId === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium">Add to Cart</span>
                      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-2 sm:mt-3">
                    <h3 className="font-josefin text-xs sm:text-sm md:text-base text-black line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="font-josefin text-xs sm:text-sm md:text-base font-medium text-black mt-1">
                      {product.price}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                currentSlide === index ? "w-5 sm:w-6 bg-elvera-brown" : "w-1.5 sm:w-2 bg-elvera-brown/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostLovedSection;
