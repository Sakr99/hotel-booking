import { useState } from "react";
import image from "../Assets/image.jpg";
import Instagram from "../Assets/Component 38.png";
import Twitter from "../Assets/Component 37.png";
import Facebook from "../Assets/Component 36.png";
import Cards from "./Cards";
const Inputs = ({ id, placeholder, label, type }) => {
  return (
    <label htmlFor={id} className="text-slate-400 text-xs">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="input bg-transparent p-0 text-base font-bold text-black w-full"
      />
    </label>
  );
};

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="fixed left-4 top-60 flex flex-col items-center gap-20 bg-white shadow-lg rounded-full h-80 w-12 py-4">
        <div className="flex flex-col items-center ">
          <a href="#instagram" className="hover:opacity-75">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#twitter" className="hover:opacity-75">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="#facebook" className="hover:opacity-75">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
        <button className="bg-slate-100 text-black font-bold text-sm px-3 py-1 rounded-lg -rotate-90 whitespace-nowrap">
          GET 20% OFF
        </button>
      </div>

      <header>
        <div
          className=" w-full h-screen flex flex-col justify-center text-center items-center px-10 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <span className="font-bold  md:text-3xl ">
            Stay in exceptional hotels, with premium travel planning and
            services included.
          </span>

          <div className="hidden md:grid bg-white grid-cols-4 text-start items-center gap-4 rounded-full px-8 py-2 m-10">
            <Inputs
              id="Search-destinations"
              placeholder="Search destinations"
              label="Where"
              type="text"
            />
            <Inputs
              id="Add-Dates"
              placeholder="Add Dates"
              label="Date"
              type="text"
            />
            <Inputs
              id="Add-guests"
              placeholder="Add guests"
              label="Who"
              type="text"
            />
            <button className="Find-button flex border-2 rounded-full font-semibold justify-center items-center px-4 py-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>{" "}
              Find hotels
            </button>
          </div>

          <button
            className="block md:hidden bg-white text-black font-bold px-8 py-4 rounded-full mt-4"
            onClick={() => setIsPopupOpen(true)}
          >
            Start your search
          </button>
        </div>
      </header>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold text-black mb-4">Search Hotels</h2>
            <Inputs
              id="popup-search"
              placeholder="Search destinations"
              label="Where"
              type="text"
            />
            <Inputs
              id="popup-date"
              placeholder="Add Dates"
              label="Date"
              type="text"
            />
            <Inputs
              id="popup-guests"
              placeholder="Add guests"
              label="Who"
              type="text"
            />
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
                Search
              </button>
              <button
                className=" bg-red-600 text-white px-4 py-2 rounded mt-2  w-full"
                onClick={() => setIsPopupOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="px-10">
        <Cards />
      </div>
    </>
  );
};

export default Header;
