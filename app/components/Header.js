"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openSeoDropdown, setOpenSeoDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
      setOpenSubDropdown(null);
      setOpenSeoDropdown(null);
    }
  };

  const toggleSubDropdown = (index) => {
    if (openSubDropdown === index) {
      setOpenSubDropdown(null);
    } else {
      setOpenSubDropdown(index);
      setOpenSeoDropdown(null);
    }
  };

  const toggleSeoDropdown = () => {
    if (openSeoDropdown === 1) {
      setOpenSeoDropdown(null);
    } else {
      setOpenSeoDropdown(1);
      setOpenSubDropdown(null);
    }
  };

  return (
    <header className="sticky top-0 min-w-[367px] pl-3 max-xl:max-w-[1200px] xl:max-w-[1360px] 2xl:max-w-[1840px] bg-[var(--osnovnoy-cvet-2)] shadow-lg z-50 mx-auto rounded-[50px]">
      <div className=" flex justify-between items-center py-3 px-[10px] md:px-[20px] xl:px-[30px] 2xl:px-[55px]">
        <Link href="#" className="flex items-center">
          <Image
            className="w-[102px] h-[39px] 2xl:w-[193px] 2xl:h-[74px] xl:w-[178px] xl:h-[68px]"
            src="/logoheader.svg"
            alt="Brand Logo"
            width={193}
            height={74}
          />
        </Link>
        <button
          className="block xl:hidden focus:outline-none bg-[var(--osnovnoy-cvet)] p-2 rounded-[50%]"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-[2px] bg-[var(--osnovnoy-cvet-2)] mb-1.5 transition-transform ${
              isMenuOpen ? "rotate-[45deg] translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[var(--osnovnoy-cvet-2)] mb-1.5 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[var(--osnovnoy-cvet-2)] transition-transform ${
              isMenuOpen ? "-rotate-[45deg] -translate-y-2" : ""
            }`}
          ></span>
        </button>
        <div
          className={`absolute top-[60px] max-xl:rounded-b-[30px] max-md:min-w-[330px] md:min-w-[720px] max-xl:max-w-[1200px] max-xl:bg-[var(--osnovnoy-cvet-2)] transition-transform duration-200 ${
            isMenuOpen ? "block" : "hidden"
          } xl:relative xl:top-auto xl:left-auto xl:w-auto xl:flex xl:items-center`}
        >
          <nav>
            <ul className="max-xl:max-w-[1200px] flex flex-col xl:text-base max-xl:items-start max-xl:px-4 xl:items-center xl:mr-[23px] 2xl:mr-[40px] xl:flex-row xl:gap-[15px] 2xl:gap-[20px] text-[var(--cvet-teksta-2)]">
              <li className="relative py-2 xl:px-1 2xl:px-2 ">
                <Link
                  href="#"
                  className="uppercase font-normal hover:font-bold hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)] "
                >
                  Главная
                </Link>
              </li>
              <li
                className="relative py-2 xl:px-1 2xl:px-2 cursor-pointer"
                onClick={() => toggleDropdown(1)}
              >
                <span className="uppercase font-normal hover:font-bold flex items-center hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                  Услуги
                  <svg
                    className={`ml-2 w-[12px] h-[6px] transform transition-transform ${
                      openDropdown === 1
                        ? "max-md:rotate-180 max-xl:rotate-90 xl:rotate-180"
                        : "rotate-0"
                    }`}
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.002 1L6.00195 5L1.00195 1" stroke="white" />
                  </svg>
                </span>
                {openDropdown === 1 && (
                  <ul className="relative md:absolute md:left-[150px] md:-top-[40px] xl:left-auto xl:top-full mt-0 bg-[var(--osnovnoy-cvet-2)] py-2 rounded-2xl w-full md:w-[300px] md:max-w-[250px]">
                    <li className="px-4 py-2 ">
                      <Link
                        href="#"
                        className="text-white hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]"
                      >
                        Все услуги
                      </Link>
                    </li>
                    <li
                      className="px-4 py-2  relative cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubDropdown(2);
                      }}
                    >
                      <span className="flex items-center justify-between hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                        Разработка сайтов
                        <svg
                          className={`ml-2 w-[12px] h-[6px] transform transition-transform ${
                            openSubDropdown === 2 ? "-rotate-90" : "rotate-0"
                          }`}
                          width="12"
                          height="6"
                          viewBox="0 0 12 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.002 1L6.00195 5L1.00195 1"
                            stroke="white"
                          />
                        </svg>
                      </span>
                      {openSubDropdown === 2 && (
                        <ul className="relative md:absolute md:left-full md:top-0 bg-[var(--osnovnoy-cvet-2)] shadow-lg py-2 rounded-md w-[250px]">
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              Сайт на Payload
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              Интернет-магазин
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              Корпоративный сайт
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              Лендинг
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 ">
                      <Link
                        href="#"
                        className="text-white hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]"
                      >
                        Разработка дизайна
                      </Link>
                    </li>
                    <li
                      className="px-4 py-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSeoDropdown();
                      }}
                    >
                      <span className="flex items-center justify-between hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                        SEO
                        <svg
                          className={`ml-2 w-[12px] h-[6px] transform transition-transform ${
                            openSeoDropdown === 1 ? "-rotate-90" : "rotate-0"
                          }`}
                          width="12"
                          height="6"
                          viewBox="0 0 12 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.002 1L6.00195 5L1.00195 1"
                            stroke="white"
                          />
                        </svg>
                      </span>
                      {openSeoDropdown === 1 && (
                        <ul className="relative md:absolute md:left-full md:top-[100px] xl:top-[130px] bg-[var(--osnovnoy-cvet-2)] shadow-lg py-2 rounded-md w-[250px]">
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              SEO Оптимизация
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              Анализ Сайта
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                            <Link href="#" className="text-white">
                              Линкбилдинг
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 ">
                      <Link
                        href="#"
                        className="text-white hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]"
                      >
                        Другие услуги
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative py-2 xl:px-1 2xl:px-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                <Link
                  href="#"
                  className="uppercase font-normal hover:font-bold"
                >
                  Портфолио
                </Link>
              </li>
              <li className="relative py-2 xl:px-1 2xl:px-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                <Link
                  href="#"
                  className="uppercase font-normal hover:font-bold"
                >
                  О нас
                </Link>
              </li>
              <li className="relative py-2 xl:px-1 2xl:px-2 hover:underline hover:decoration-[3px] hover:underline-offset-4 max-xl:hover:decoration-[var(--osnovnoy-cvet)] hover:decoration-[var(--akcentnyy-cvet)]">
                <Link
                  href="#"
                  className="uppercase font-normal hover:font-bold"
                >
                  Контакты
                </Link>
              </li>
              <li className="relative max-xl:text-[var(--osnovnoy-cvet)] py-2 xl:px-1 2xl:px-2">
                <Link
                  href="#"
                  className="flex gap-2 justify-center items-center  text-base font-normal"
                >
                  <Image
                    className="hidden max-xl:block"
                    src="/phonebm.svg"
                    alt="Brand Logo"
                    width={17}
                    height={16}
                  />
                  +7 (991) 920-29-13
                </Link>
              </li>
              <li className="relative hidden xl:block ">
                <button className="bg-[var(--akcentnyy-cvet)] font-medium text-center text-xl text-[var(--cvet-teksta)] rounded-full xl:w-[260px] 2xl:w-[268px] h-[54px] 2xl:px-5 hover:bg-purple-600 transition">
                  Оставить заявку
                </button>
              </li>
            </ul>
          </nav>
          <div className="hidden xl:block text-[var(--cvet-teksta-2)] text-2xl font-bold cursor-pointer">
            RU | <span className="font-normal">EN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
