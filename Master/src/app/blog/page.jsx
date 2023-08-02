"use client"

import { FaCalendarDays, FaUserLarge } from "react-icons/fa6";
import Blog from "../../script/Blog.js";
import Link from "next/link.js";

const page = () => {
  return (
    <section className="home__component mt-[60px] ">
      {/* Blog Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Our Latest Blog<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Featured and popular products are the best-selling items for your
            product, product range, or company. However, a featured product
            could be a new product line or seasonal products instead.
          </p>
          {/* Search input */}

          <div className="grid grid-cols-12 md:gap-[30px]">
            <div className="col-span-12 md:col-span-6">
              <div className="mt-[30px]">
                <div
                  className="flex max-w-md items-center rounded-lg bg-white drop-shadow-md dark:shadow-none"
                  x-data="{ search: '' }"
                >
                  <div className="w-full">
                    <input
                      type="search"
                      class="w-full rounded-full  px-4 py-1 text-text focus:outline-none"
                      placeholder="search"
                      x-model="search"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex h-12 w-14 items-center justify-center rounded-r-lg bg-theme text-white"
                    >
                      <svg
                        className="h-5 w-5 text-btn"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              {Blog.map((item, index) => (
                <div className="col-span-12 md:col-span-6" key={index}>
                  <div className="group relative mb-[88px]">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={item.img}
                        alt=""
                        className=" transition-all duration-500 group-hover:scale-[108%]"
                      />
                    </div>
                    <div className="absolute bottom-[-30%] left-[50%] z-10 w-[calc(100%-2rem)] translate-x-[-50%] rounded-lg bg-btn  p-[25px] xl:p-[30px]">
                      <div className="flex  justify-center">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[12px]">
                              <FaUserLarge className="text-theme" />
                            </span>
                            <span className="text-[12px]">By Admin</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[12px]">
                              <FaCalendarDays className="text-theme" />
                            </span>
                            <span className="text-[12px]">{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-[15px]">
                        <Link href={"/blog-details"}>
                          <h2 className="text-center text-[24px] leading-[34px] transition-all duration-300 hover:text-theme">
                            {item.title}
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination */}
          <div className="pagination mt-6 flex justify-center md:mt-16">
            <nav aria-label="Page navigation">
              <ul className="inline-flex space-x-2">
                <li>
                  <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full  border-[#17b978] bg-theme text-btn transition-colors duration-150">
                    1
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    2
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    3
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
