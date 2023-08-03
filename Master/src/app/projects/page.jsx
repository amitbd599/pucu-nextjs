"use client";
import Link from "next/link";
const page = () => {
  return (
    <section className=" mt-[60px] ">
      {/* Project Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card md:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Featured Projects<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Featured and popular products are the best-selling items for your
            product, product range, or company. However, a featured product
            could be a new product line or seasonal products instead.
          </p>
          <div className="mt-[60px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-[346px] h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/show/image-5.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">Mobile App Design</p>
                    <Link href="/projects-details">
                      <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                        Mobile Application Landing Page Design
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                <div className="overflow-hidden rounded-lg w-[346px] h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/show/image-6.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">
                      Web Design & Development
                    </p>
                    <Link href="/projects-details">
                      <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                        Website Design for Marketing Agency Startup
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                <div className="overflow-hidden rounded-lg w-[346px] h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/show/image-7.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">
                      React Native Application
                    </p>
                    <Link href="/projects-details">
                      <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                        Travel App Design Creativity & React native Application
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                <div className="overflow-hidden rounded-lg w-[346px] h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/show/image-8.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">UX / UI Design </p>
                    <Link href="/projects-details">
                      <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                        Project Management System with Admin Panel
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                <div className="overflow-hidden rounded-lg w-[346px] h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/show/image-9.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">
                      UI / UX Design Mobile App{" "}
                    </p>
                    <Link href="/projects-details">
                      <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                        Native App Design Creativity with admin panel
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                <div className="overflow-hidden rounded-lg w-[346px] h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/show/image-10.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">UX / UI Design</p>
                    <Link href="/projects-details">
                      <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                        Restaurant Mobile Application Figma Design
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
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
