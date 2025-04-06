import { useRef } from "react";
import { cards } from "./images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Card = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -250 : 250, // تحريك بمقدار 250px
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <div className="text-black text-xs flex items-center gap-2 tracking-widest">
          <div className="bg-black w-10 h-0.5"></div> EXPLORE
        </div>
        <button className="text-slate-700 text-xs font-semibold hover:underline">
          See All
        </button>
      </div>

      <h1 className="cards-header md:text-3xl text-2xl my-2 font-bold">
        Travellers’ Choice: Top hotels
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
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[80%] md:w-[45%] snap-center"
            >
              <div className="shadow-sm text-black hover:shadow-2xl transition-shadow duration-300 p-2">
                <figure>
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full rounded-lg shadow-md"
                  />
                </figure>
                <p className="mt-2 text-start text-xs font-semibold">
                  {card.title}
                </p>
                <div className="rating rating-xs">
                  <div className="mask mask-star-2" aria-label="1 star"></div>
                  <div className="mask mask-star-2" aria-label="2 star"></div>
                  <div
                    className="mask mask-star-2"
                    aria-label="3 star"
                    aria-current="true"
                  ></div>
                  <div className="mask mask-star-2" aria-label="4 star"></div>
                  <div className="mask mask-star-2" aria-label="5 star"></div>
                </div>
              </div>
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

      <div className="hidden md:grid grid-cols-2 md:grid-cols-6 gap-1">
        {cards.map((card) => (
          <div
            key={card.id}
            className="shadow-sm text-black hover:shadow-2xl transition-shadow duration-300 p-2"
          >
            <figure>
              <img
                src={card.image}
                alt={card.alt}
                className="w-full rounded-lg shadow-md"
              />
            </figure>
            <p className="mt-2 text-start text-xs font-semibold">
              {card.title}
            </p>
            <div className="rating rating-xs">
              <div className="mask mask-star-2" aria-label="1 star"></div>
              <div className="mask mask-star-2" aria-label="2 star"></div>
              <div
                className="mask mask-star-2"
                aria-label="3 star"
                aria-current="true"
              ></div>
              <div className="mask mask-star-2" aria-label="4 star"></div>
              <div className="mask mask-star-2" aria-label="5 star"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
