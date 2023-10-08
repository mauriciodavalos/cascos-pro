'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({}) => {
  const [menuIcon, setIcon] = useState(false);
  const [desktopDropdowns, setDesktopDropdowns] = useState({});
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };

  const toggleDesktopDropdown = (key) => {
    setDesktopDropdowns({
      ...desktopDropdowns,
      [key]: !desktopDropdowns[key],
    });
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [key]: !mobileDropdowns[key],
    });
  };

  return (
    <header className="bg-[#f97316] text-black ease-in duration-300 fixed top-0 left-0 z-10 w-[100%]">
      <nav className="max-w-[1080] h-[100px] flex justify-between items-center p-4 w-[90%]">
        <div>
          <Link href="/">
            <span
              onClick={
                menuIcon === true ? handleSmallerScreensNavigation : null
              }
              className="font-extrabold text-3xl md:2xl: xl:text-3xl uppercase">
              Cascos Pro
            </span>
          </Link>
        </div>

        {/* larger screens navigation */}

        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/tipos">Tipos</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/marcas">Marcas</Link>
          </li>
          <li
            className="relative"
            onClick={() => toggleDesktopDropdown('firstDropdown')}>
            <button className="uppercase mr-4 lg:mr-8 hover:text-[#CEFF00]">
              Dropdown 1
            </button>
            {desktopDropdowns['firstDropdown'] && (
              <ul
                className="absolute z-10 mt-2 w-[200px] bg-white text-black rounded-lg shadow-lg"
                onMouseLeave={() => setDesktopDropdowns(false)}>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/option1">Option 1</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/option2">Option 2</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/option3">Option 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDesktopDropdown('secondDropdown')}
              className="uppercase mr-4 lg:mr-8 hover:text-[#CEFF00]">
              Dropdown
            </button>
            {desktopDropdowns['secondDropdown'] && (
              <ul
                className="absolute z-10 mt-2 w-[200px] bg-white text-black rounded-lg shadow-lg"
                onMouseLeave={() => setDesktopDropdowns(false)}>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/option1">Option 1</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/option2">Option 2</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/option3">Option 3</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* <div className="hidden md:flex">
          <div className="flex">
            <Link href="/login">
              <button className="mr-5 bg-[#CEFF00] text-slate-800 hover:bg-slate-800 hover:text-[#CEFF00] rounded-full uppercase font-bold px-8 py-2">
                Login
              </button>
              <button className="mr-5 bg-[#CEFF00] text-slate-800 hover:bg-slate-800 hover:text-[#CEFF00] rounded-full uppercase font-bold px-8 py-2">
                Sign Up
              </button>
            </Link>
          </div>
        </div> */}

        {/* smaller screens - navigation icons */}
        {/* onClick change the icons */}

        <div
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-black" />
          ) : (
            <AiOutlineMenu size={25} className="text-black" />
          )}
        </div>

        {/* Smaller screens - Navbar */}
        <div
          className={
            menuIcon
              ? 'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
              : 'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
          }>
          {/* Smaller screens - Navbar link */}
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl">
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/tipos">Tipos</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/marcas">Marcas</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/consejos">Consejos</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/reseñas">Reseñas</Link>
              </li>
              <li className="relative py-5 cursor-pointer">
                <button
                  onClick={() => toggleMobileDropdown('firstDropdown')}
                  className="hover:text-[#CEFF00] uppercase">
                  Dropdown 1
                </button>
                {mobileDropdowns['firstDropdown'] && (
                  <ul className="mt-2 bg-white text-black rounded-lg shadow-lg w-[80%] mx-auto">
                    <li
                      onClick={handleSmallerScreensNavigation}
                      className="hover:bg-gray-200 px-4 py-2">
                      <Link href="/mobileOption1">Mobile Option 1</Link>
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-2">
                      <Link href="/mobileOption2">Mobile Option 2</Link>
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-2">
                      <Link href="/mobileOption3">Mobile Option 3</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative py-5 cursor-pointer">
                <button
                  onClick={() => toggleMobileDropdown('secondDropdown')}
                  className="hover:text-[#CEFF00] uppercase">
                  Second Dropdown
                </button>
                {mobileDropdowns['secondDropdown'] && (
                  <ul className="mt-2 bg-white text-black rounded-lg shadow-lg w-[80%] mx-auto">
                    <li
                      onClick={handleSmallerScreensNavigation}
                      className="hover:bg-gray-200 px-4 py-2">
                      <Link href="/mobileOption1">Mobile Option 1</Link>
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-2">
                      <Link href="/mobileOption2">Mobile Option 2</Link>
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-2">
                      <Link href="/mobileOption3">Mobile Option 3</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* <div className="flex flex-col justify-center items-center mt-16">
              <Link href="/login">
                <button className="bg-[#CEFF00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5">
                  Login
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
