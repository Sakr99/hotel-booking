import { useRef } from "react";
import { catrgoryImage } from "./images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Category = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="category ml-12 py-14 px-4">
      <div className="flex justify-between items-center">
        <div className="text-black text-xs flex items-center gap-2 tracking-widest">
          <div className="bg-black w-10 h-0.5"></div> EXPLORE
        </div>
        <button className="text-slate-700 text-xs font-semibold hover:underline">
          See All
        </button>
      </div>

      <h1 className="cards-header md:text-3xl text-2xl my-2 font-bold">
        Explore by category
      </h1>

      <div className="relative block md:hidden w-full overflow-hidden">
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent text-gray-700 hover:text-black p-2"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={carouselRef}
          className="flex w-full space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4"
        >
          {catrgoryImage.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 snap-center"
            >
              <img
                src={image.image}
                alt={`slide-${index}`}
                className="w-full h-auto object-contain shadow-md"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent text-gray-700 hover:text-black p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-1">
        {catrgoryImage.map((image, index) => (
          <div
            key={index}
            className="shadow-sm text-black hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={image.image}
                alt={`image-${index}`}
                className=" w-full h-auto shadow-md object-contain"
              />
            </figure>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Category;
