import React from "react";
import imageRating from "../Assets/Frame 1000003211AA.jpg";
import imageRating2 from "../Assets/Frame 1000003435ll.png";
import profileImage from "../Assets/image.png";

const OverView = () => {
  return (
    <div className="p-5 md:px-20 md:py-5 ">
      <div className="flex justify-center items-center">
        <img
          className="md:max-w-full w-72  h-auto"
          src={imageRating}
          alt="imagesRating"
        />
      </div>

      <p className="cards-header text-lg md:text-3xl font-bold text-center px-5 md:px-72 my-4">
        Don’t take our word for it, here’s what our customers think
      </p>

      <div className="w-full overflow-hidden">
        <div className="flex w-full md:mx-auto mx-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 snap-center border-2 border-slate-100 shadow-sm rounded-2xl p-4"
            >
              <img src={imageRating2} alt="rating" className="w-16 h-auto" />
              <p className="text-black text-sm md:text-xs font-semibold py-3">
                "Super easy booking process! I found the best hotel deals in
                minutes."
              </p>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src={profileImage}
                  alt=""
                />
                <div className="ml-3">
                  <p className="text-black text-sm md:text-xs">John Smith</p>
                  <p className="text-slate-400 text-sm md:text-xs">
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-6">
        <button
          className="btn Find-button rounded-full font-semibold px-6 py-3 flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          Find hotels
        </button>
      </div>
    </div>
  );
};

export default OverView;
