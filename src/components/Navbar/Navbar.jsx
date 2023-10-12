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
      // Reset other keys
      ...Object.fromEntries(
        Object.keys(desktopDropdowns).map((k) => [k, k === key])
      ),
      // Toggle the clicked one
      [key]: !desktopDropdowns[key],
    });
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns({
      // Reset other keys
      ...Object.fromEntries(
        Object.keys(mobileDropdowns).map((k) => [k, k === key])
      ),
      // Toggle the clicked one
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
          <li
            className="relative"
            onClick={() => toggleDesktopDropdown('tipos')}>
            <button className="uppercase mr-4 lg:mr-8 hover:text-[#CEFF00]">
              Tipos
            </button>
            {desktopDropdowns['tipos'] && (
              <ul
                className="absolute z-10 mt-2 w-[400px] bg-white text-black rounded-lg shadow-lg"
                onMouseLeave={() => setDesktopDropdowns(false)}>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/tipos/Integrales">Integrales (Cerrados)</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/tipos/Abatibles">Abatibles (Modulares)</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/tipos/Motocross">Motocross (Off-Road)</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/tipos/Jet">Jet (Abiertos 3/4)</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/tipos/Chopper">Chooper</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onClick={() => toggleDesktopDropdown('marcas')}>
            <button className="uppercase mr-4 lg:mr-8 hover:text-[#CEFF00]">
              marcas
            </button>
            {desktopDropdowns['marcas'] && (
              <ul
                className="absolute z-10 mt-2 w-[200px] bg-white text-black rounded-lg shadow-lg"
                onMouseLeave={() => setDesktopDropdowns(false)}>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/AGV">AGV</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/Shoei">Shoei</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/Fox">Fox</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/kov">Kov</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/Nolan">Nolan</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/Shark">Shark</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/marcas/HJC">HJC</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onClick={() => toggleDesktopDropdown('firstDropdown')}>
            <button className="uppercase mr-4 lg:mr-8 hover:text-[#CEFF00]">
              Consejos
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
              <li className="relative py-5 cursor-pointer">
                <button
                  onClick={() => toggleMobileDropdown('marcas')}
                  className="hover:text-[#CEFF00] uppercase">
                  marcas
                </button>
                {mobileDropdowns['marcas'] && (
                  <ul className="mt-2 bg-white text-black rounded-lg shadow-lg w-[80%] mx-auto">
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/AGV">AGV</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/Shoei">Shoei</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/Fox">Fox</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/kov">Kov</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/Nolan">Nolan</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/Shark">Shark</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/marcas/HJC">HJC</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative py-5 cursor-pointer">
                <button
                  onClick={() => toggleMobileDropdown('tipos')}
                  className="hover:text-[#CEFF00] uppercase">
                  Tipos
                </button>
                {mobileDropdowns['tipos'] && (
                  <ul className="mt-2 bg-white text-black rounded-lg shadow-lg w-[80%] mx-auto">
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/tipos/Integrales">
                        Integrales (Cerrados)
                      </Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/tipos/Abatibles">Abatibles (Modulares)</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/tipos/Motocross">Motocross (Off-Road)</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/tipos/Jet">Jet (Abiertos 3/4)</Link>
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2"
                      onClick={
                        menuIcon === true
                          ? handleSmallerScreensNavigation
                          : null
                      }>
                      <Link href="/tipos/Chopper">Chooper</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/reseñas">Consejos</Link>
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
