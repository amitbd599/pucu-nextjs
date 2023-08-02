"use client";

import { FaCaretRight } from "react-icons/fa6";
import Service from "../../script/Service";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const page = () => {
  return (
    <section className="home__component mt-[60px] ">
      {/* Service Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Our Best Service<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            The imperative for integrated, expansive, and seamless digital
            experiences is fueling software product design and development
            across organizations at an unprecedented scale. These demands
            require capabilities to imagine, build, and run digital products and
            services for new and existing.
          </p>
          <div className="mt-[60px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              {Service.map((item, index) => (
                <div
                  className="col-span-12 mb-[40px] md:col-span-6 md:mb-0"
                  key={index}
                >
                  <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                    <div>
                      <img src={item.img} alt="" className="w-[60px]" />
                    </div>
                    <div className="mt-[20px]">
                      <h2 className="text-[24px] text-btn dark:text-white">
                        {item.title}
                      </h2>
                      <ul className="mt-[20px] grid gap-[16px]">
                        {item.elements.map((element, item) => (
                          <li className="flex items-start text-text" key={item}>
                            <FaCaretRight className="mr-[8px] mt-[4px]" />{" "}
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="mt-[30px]">
        <button className=" rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium   text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme">
          Load More
        </button>
      </div>
      {/* Counter section */}
      <div className="mt-[60px] grid grid-cols-12 gap-[20px]">
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[80px]">
                      <CountUp delay={0} start={0} end={490} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Projects <br /> Completed
            </p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              {" "}
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[80px]">
                      <CountUp delay={0} start={0} end={870} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Satisfied <br /> Clients
            </p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              {" "}
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[80px]">
                      <CountUp delay={0} start={0} end={980} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Download <br /> Projects
            </p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              {" "}
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[80px]">
                      <CountUp delay={0} start={0} end={790} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Hour <br /> Work Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
