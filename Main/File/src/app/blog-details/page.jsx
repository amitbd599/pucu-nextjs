"use client";
import Link from "next/link.js";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCaretRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
const page = () => {
  return (
    <section className="mt-[60px] ">
      {/* Blog Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        {/* Feature Image */}
        <div className="overflow-hidden rounded-lg w-full h-auto">
          <img
            src="/assets/images/blog/blog-7.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Details */}
        <div className="title mt-[40px]">
          <h2 className="text-[26px] leading-[36px] text-btn dark:text-white md:text-[32px] md:leading-[42px]">
            Open-source software href speed up quantum research
          </h2>
        </div>
        {/* Tag */}
        <div className="flex gap-4">
          <div className="mt-[16px] inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
            Friday, June 30, 2023
          </div>
          <div className="mt-[16px] inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
            2 Comments
          </div>
        </div>
        {/* Inner richtext */}
        <div className="mt-[30px]">
          <p className="text-text">
            Quantum technology is expected href fundamentally change many key
            areas of society. Researchers are convinced that there are many more
            useful quantum properties and applications href explore than those
            we know today. A team of researchers at Chalmers University of
            Technology in Sweden have now developed open-source, freely
            available software that will pave the way for new discoveries in the
            field and accelerate quantum research significantly.
          </p>
          <p className="mt-[30px] text-text">
            Within a few decades, quantum technology is expected href become a
            key technology in areas such as health, communication, defence and
            energy. The power and potential of the technology lie in the odd and
            very special properties of quantum particles. Of particular interest
            href researchers in the field are the superconducting properties of
            quantum particles that give components perfect conductivity with
            unique magnetic properties. These superconducting properties are
            considered conventional today and have already paved the way for
            entirely new technologies used in applications such as magnetic
            resonance imaging equipment, maglev trains and quantum computer
            components. However, years of research and development remain before
            a quantum computer can be expected href solve real computing
            problems in practice, for example. The research community is
            convinced that there are many more revolutionary discoveries href be
            made in quantum technology than those we know today.
          </p>
          <div className="mt-[30px] rounded-xl bg-btn p-[30px]">
            <div className="flex gap-[20px]">
              <div className="w-[120px]">
                <img
                  src="/assets/images/icon/vaadin_quote-left.svg"
                  alt=""
                  className="w-full"
                />
              </div>
              <p className="text-[18px] leading-[30px] text-white">
                Quantum technology is expected href fundamentally change many
                key areas of society. Researchers are convinced that there are
                many more useful quantum properties and applications href
                explore than those we know today.
              </p>
            </div>{" "}
          </div>
          <p className="mt-[30px] text-text">
            hese new superconductors continue href be highly enigmatic materials
            -- just as their conventional siblings once were when they were
            discovered in a laboratory more than a hundred years ago. After that
            discovery, it would be more than 40 years before researchers could
            describe them in theory.
          </p>
          <div className="w-100 mt-5 gap-[30px] md:flex">
            <div className="overflow-hidden md:w-6/12 ">
              <img
                src="/assets/images/show/image-8.png"
                alt=""
                className="w-full rounded-xl"
              />
            </div>
            <div className="mt-[30px] md:mt-0 md:w-6/12">
              <p className="text-text">
                Vuexy React The most developer-friendly & highly customizable
                React Admin Template. It is based on Create React App, Redux &
                Reactstrap BS4. Furthermore, this template.
              </p>
              <ul className="mt-[20px] grid gap-2">
                <li className="flex items-start text-text">
                  <FaCaretRight className="mr-[8px] mt-[5px]" /> User account
                  creation with email login options.
                </li>
                <li className="flex items-start text-text">
                  <FaCaretRight className="mr-[8px] mt-[5px]" /> Password reset
                  and account recovery options.
                </li>
                <li className="flex items-start text-text">
                  <FaCaretRight className="mr-[8px] mt-[5px]" /> Advanced search
                  functionality href find specific cuisines, dishes, or
                  restaurants
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-[30px] text-text">
            Hese new superconductors continue href be highly enigmatic materials
            -- just as their conventional siblings once were when they were
            discovered in a laboratory more than a hundred years ago. After that
            discovery, it would be more than 40 years before researchers could
            describe them in theory.
          </p>
          <div className="mt-[30px] grid gap-[30px] md:flex">
            <div>
              <img
                src="/assets/images/blog/blog-8.png"
                alt=""
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <img
                src="/assets/images/blog/blog-9.png"
                alt=""
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <p className="mt-[30px] text-text">
            To be able href explore revolutionary new discoveries, tools are
            needed that can study and utilise the extraordinary quantum
            properties at the minimal particle level, and can also be scaled up
            large enough href be used in practice. Researchers need href work at
            meso scopic scale.
          </p>
        </div>

        {/* share info */}
        <div className="mt-[30px]">
          <div className="grid items-center justify-between md:flex">
            <div>
              <p className="text-[18px] font-semibold text-btn dark:text-white">
                By Alex Johan
              </p>
            </div>
            <div className="mt-[20px] md:mt-0">
              <div className=" flex justify-center gap-3">
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                    <FaTwitter />
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                    <FaLinkedinIn />
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                    <FaInstagram />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[20px] border-t border-[#ddd] dark:border-btn"></div>
          <div className="mt-[30px] hidden md:block">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" className="group flex items-center gap-[20px]">
                  <div>
                    <span className="inline-block rounded-full bg-btn p-[14px] text-text transition-all duration-300 group-hover:bg-theme group-hover:text-btn">
                      <FaAngleLeft />
                    </span>
                  </div>
                  <div>
                    <p className="text-text">Prev</p>
                    <h3 className="text-[24px] text-btn transition-all duration-300 dark:text-white dark:group-hover:text-theme">
                      Quantum Properties
                    </h3>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/" className="group flex items-center gap-[20px]">
                  <div>
                    <p className="text-right text-text">Next</p>
                    <h3 className="text-right text-[24px] text-btn transition-all duration-300 dark:text-white dark:group-hover:text-theme">
                      Quantum Properties
                    </h3>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-btn p-[14px] text-text transition-all duration-300 group-hover:bg-theme group-hover:text-btn">
                      <FaAngleRight />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Comment section */}
        <div className="mt-[60px]">
          <div>
            <h2 className="text-[24px] text-btn dark:text-white">
              03 Comments
            </h2>
          </div>
          <div className="my-[15px] border-t border-[#ddd] dark:border-btn"></div>
          {/* User Comment */}
          <div className="parent mt-[40px]">
            <div className="flex w-full gap-[30px]">
              <div className="w-[20%] md:w-auto">
                <img
                  src="/assets/images/user/user-1.png"
                  alt=""
                  className="w-[200px] rounded-lg"
                />
              </div>
              <div className="w-[80%] md:w-auto">
                <div className="flex w-full justify-between">
                  <div>
                    <h2 className="text-[24px] text-btn dark:text-white">
                      Jose K. King
                    </h2>
                  </div>
                  <div>
                    <button className="block rounded-lg bg-theme px-[16px] py-[4px] text-btn">
                      Reply
                    </button>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="text-text">
                    We want href find out about all the other exciting
                    properties of unconventional superconductors. Our software
                    is powerful, educational and user-friendly, and we hope that
                    it will help generate new understanding and suggest entirely
                    new applications for these unexplored superconductors
                  </p>
                </div>
              </div>
            </div>
            <div className="my-[30px] ml-[30px] border-t border-[#ddd] dark:border-btn md:ml-[80px]"></div>
            <div className="mt-[10px] flex w-full gap-[30px] pl-[30px] md:pl-[80px]">
              <div className="w-[20%] md:w-auto">
                <img
                  src="/assets/images/user/user-2.png"
                  alt=""
                  className="w-[200px] rounded-lg"
                />
              </div>
              <div className="w-[80%] md:w-auto">
                <div className="flex w-full justify-between">
                  <div>
                    <h2 className="text-[24px] text-btn dark:text-white">
                      Alex Johan
                    </h2>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="text-text">
                    These new superconductors continue href be highly enigmatic
                    materials -- just as their conventional siblings once were
                    when they were discovered in a laboratory more than a
                    hundred years ago. After that discovery, it would be more
                    than 40 years before researchers could describe them in
                    theory.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
            <div className="mt-[10px] flex w-full gap-[30px] ">
              <div className="w-[20%] md:w-auto">
                <img
                  src="/assets/images/user/user-3.png"
                  alt=""
                  className="w-[200px] rounded-lg"
                />
              </div>
              <div className="w-[80%] md:w-auto">
                <div className="flex w-full justify-between">
                  <div>
                    <h2 className="text-[24px] text-btn dark:text-white">
                      Rachel R. Collins
                    </h2>
                  </div>
                  <div>
                    <button className="block rounded-lg bg-theme px-[16px] py-[4px] text-btn">
                      Reply
                    </button>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="text-text">
                    To be able href explore revolutionary new discoveries, tools
                    are needed that can study and utilise the extraordinary
                    quantum properties at the minimal particle level, and can
                    also be scaled up large enough href be used in practice.
                    Researchers need href work at mesoscopic scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
          </div>

          {/* Leave a comment section */}
          <div className="mt-[40px]">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                Post a Comment
              </h2>
              <p className="mt-[2px] text-text">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="mt-[30px]">
                <div className="grid w-full gap-[20px] md:flex">
                  <div className="md:w-1/2">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                      type="text"
                      placeholder="Full Name:"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none  dark:border-none dark:bg-btn dark:text-white "
                      type="text"
                      placeholder="Your Email:"
                    />
                  </div>
                </div>
                <div className="mt-[20px]">
                  <textarea
                    placeholder="Write your Comment here:"
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                  ></textarea>
                </div>
                <div>
                  <div className="mb-6 mt-[20px] flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className=" h-4 w-4 rounded  bg-btn "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="font-medium text-text"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-[30px]">
                  <button className=" rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium   text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
