"use client"
import {  useState,useEffect } from "react";
import { Progress, Typography } from "@material-tailwind/react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const page = () => {
  const [dark, setDark] = useState();
  useEffect(() => {
    setDark(localStorage.getItem("theme"))
  }, []);

  return <section className="home__component mt-[60px] ">
  {/* About Intro */}
  <div className="rounded-xl bg-white p-[40px] dark:bg-card">
    <div className="grid grid-cols-12 md:gap-[50px]">
      <div className="col-span-12 md:col-span-4">
        <div className="flex justify-center">
          <div className="relative flex justify-center ">
            <img src="/assets/images/show/ProfileImage.png" alt="" />
            <img
              src="/assets/images/show/underline.svg"
              alt=""
              className="absolute bottom-[-30px]"
            />
            <img
              src={
                dark === "dark"
                  ? "/assets/images/icon/AlexJohan.svg"
                  : "/assets/images/icon/AlexJohan-dark.svg"
              }
              alt=""
              className="absolute bottom-[-10px]"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="mt-[60px] md:mt-0">
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            About Me<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Brought into the world in 1994, Stomach muscle type living in
            USA. We give on-screen plan to sites and applications, as well
            as front-end execution. We will keep on chasing after a large
            number of articulations and better code by seeking after our
            "likes".
          </p>
          <div className="mt-[25px] gap-[30px] md:flex">
            <div className="flex items-center gap-[20px]">
              <h2 className="text-[50px] text-theme">
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <div className="w-[80px]">
                        <CountUp delay={0} start={0} end={350} />+
                      </div>
                    )
                  }
                </TrackVisibility>
              </h2>
              <p className="text-[14px] leading-[24px] text-text">
                Projects <br /> Completed
              </p>
            </div>
            <div className="flex items-center gap-[20px]">
              <h2 className="text-[50px] text-theme">
                {" "}
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
                Satisfied <br /> Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* EXPERIENCE & EDUCATION */}
  <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
    <div className="col-span-12 md:col-span-6">
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h2 className="text-[24px] text-btn dark:text-white">
            EXPERIENCE
          </h2>
          <div>
            <div className="mt-[20px]">
              <p className="text-[14px] text-text">2010 - 2016</p>
              <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                Full Stack Developer
              </p>
              <p className="text-[12px] text-text">Loadash Soft co Ltd</p>
            </div>
            <div className="mt-[20px]">
              <p className="text-[14px] text-text">2016 - 2023</p>
              <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                Next-js With Prisma
              </p>
              <p className="text-[12px] text-text">Go-Lang co Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-span-12 md:col-span-6">
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h2 className="text-[24px] text-btn dark:text-white">
            EDUCATION
          </h2>
          <div>
            <div className="mt-[20px]">
              <p className="text-[14px] text-text">2002 - 2006</p>
              <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                BTech Software Engineering
              </p>
              <p className="text-[12px] text-text">
                Trinity Western University
              </p>
            </div>
            <div className="mt-[20px]">
              <p className="text-[14px] text-text">2006 - 2010</p>
              <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                PHD Software Engineering{" "}
              </p>
              <p className="text-[12px] text-text">
                Trinity Western University
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* My Advantages */}
  <div className="mt-[30px] ">
    <div className="rounded-xl bg-white p-[30px] dark:bg-card">
      <div>
        <h2 className="text-[24px] text-btn dark:text-white">EXPERIENCE</h2>
        <div>
          <div className="mt-[30px]">
            <div>
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    className="text-[16px] font-medium  text-btn dark:text-white"
                    variant="p"
                  >
                    React JS
                  </Typography>
                  <Typography
                    className="text-btn dark:text-white"
                    variant="h6"
                  >
                    90%
                  </Typography>
                </div>
                <Progress
                  value={90}
                  size="lg"
                  className="progress border border-theme/20 bg-theme/10 p-1"
                />
              </div>
              <div className="mt-[20px] w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    className="text-[16px] font-medium text-btn dark:text-white"
                    variant="p"
                  >
                    Next JS
                  </Typography>
                  <Typography
                    className="text-btn dark:text-white"
                    variant="h6"
                  >
                    80%
                  </Typography>
                </div>
                <Progress
                  value={80}
                  size="lg"
                  className="progress border border-theme/20 bg-theme/10 p-1"
                />
              </div>
              <div className="mt-[20px] w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    className="text-[16px] font-medium text-btn dark:text-white"
                    variant="p"
                  >
                    JavaScript
                  </Typography>
                  <Typography
                    className="text-btn dark:text-white"
                    variant="h6"
                  >
                    86%
                  </Typography>
                </div>
                <Progress
                  value={86}
                  size="lg"
                  className="progress border border-theme/20 bg-theme/10 p-1"
                />
              </div>
              <div className="mt-[20px] w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    className="text-[16px] font-medium text-btn dark:text-white"
                    variant="p"
                  >
                    TypeScript
                  </Typography>
                  <Typography
                    className="text-btn dark:text-white"
                    variant="h6"
                  >
                    60%
                  </Typography>
                </div>
                <Progress
                  value={60}
                  size="lg"
                  className="progress border border-theme/20 bg-theme/10 p-1"
                />
              </div>
              <div className="mt-[20px] w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    className="text-[16px] font-medium text-btn dark:text-white"
                    variant="p"
                  >
                    PHP
                  </Typography>
                  <Typography
                    className="text-btn dark:text-white"
                    variant="h6"
                  >
                    65%
                  </Typography>
                </div>
                <Progress
                  value={65}
                  size="lg"
                  className="progress border border-theme/20 bg-theme/10 p-1"
                />
              </div>
              <div className="mt-[20px] w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    className="text-[16px] font-medium text-btn dark:text-white"
                    variant="p"
                  >
                    Figma
                  </Typography>
                  <Typography
                    className="text-btn dark:text-white"
                    variant="h6"
                  >
                    85%
                  </Typography>
                </div>
                <Progress
                  value={85}
                  size="lg"
                  className="progress border border-theme/20 bg-theme/10 p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
};

export default page;
