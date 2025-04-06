import React, { useState } from "react";
import logo from "../Assets/9ee33fb1632f43484cc2b54bca270664.png";

function Dropdown() {
  return (
    <li>
      <details>
        <summary>Link Page</summary>
        <ul className="p-2">
          <li>
            <a href="svcav">Link 1</a>
          </li>
          <li>
            <a href="svcav">Link 2</a>
          </li>
        </ul>
      </details>
    </li>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center border border-slate-300 mb-4 text-black px-4 py-2 rounded-t-lg relative">
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-64 h-screen bg-white shadow-lg p-5 flex flex-col space-y-4 md:hidden z-50">
          <button className="self-end p-2" onClick={() => setIsOpen(false)}>
            ✖
          </button>
          <ul className="space-y-4">
            <li>
              <a href="svsav">Link</a>
            </li>
            <Dropdown />
            <Dropdown />
            <li>
              <a href="svsav">Link</a>
            </li>
          </ul>
        </div>
      )}

      <div className="flex items-center space-x-4">
        <img src={logo} className="w-20 h-20" alt="logo" />
        <ul className="hidden md:flex menu menu-horizontal px-1">
          <li>
            <a href="svsav">Link</a>
          </li>
          <Dropdown />
          <Dropdown />
          <li>
            <a href="svsav">Link</a>
          </li>
        </ul>
      </div>

      <div className="flex space-x-10 px-10 py-5">
        <button>
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
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
            />
          </svg>
        </button>
        <button className="flex">
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          login
        </button>
      </div>
    </div>
  );
}

export default Navbar;


