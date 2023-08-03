"use client";
import { FaCaretRight } from "react-icons/fa6";
const page = () => {
  return (
    <section className=" mt-[60px] ">
      {/* Project details Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Projects Details<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Featured and popular products are the best-selling items for your
            product, product range, or company. However, a featured product
            could be a new product line or seasonal products instead.
          </p>
          <div className="mt-[60px]">
            <div className="overflow-hidden w-full h-auto">
              <img
                src="assets/images/projects/project-1.png"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="mt-[40px]">
              <h2 className="text-[32px] text-btn dark:text-white">
                restaurant Next js template with admin panel
              </h2>
              <p className="mt-5 text-text">
                Materio MUI React Next.js Admin Template – is the most
                developer-friendly 🤘🏻 & highly customizable✨ React Admin
                Dashboard Template based on React. Even though it is not one of
                the Open Source React Projects, you can still use it for your
                professional react project. If you’re a developer looking for
                the Best React Admin Template that is enriched with features,
                and highly customizable look no further than the Materio 🤩.
                Besides, the highest industry standards are considered to bring
                you one of the best React Admin Templates. It is not just fast
                🚀 and easy to use, but highly scalable. Furthermore, it offers
                ultimate convenience and flexibility, you’ll be able to build
                whatever application you want with very little hassle.
              </p>
              <p className="mt-5 text-text">
                Materio also offers invaluable features that aim to help you
                create premium quality single-page apps exactly as you imagine
                them🤘🏻. Furthermore, it comes with unique and useful tools such
                as fuzzy search, Dark, Semi-Dark & Bordered layout options,
                Advanced cards, and Charts. In addition, it offers amazing
                features as follows.
              </p>
              <div className="w-100 mt-5 gap-[30px] lg:flex">
                <div className="overflow-hidden rounded-xl lg:w-6/12">
                  <img
                    src="/assets/images/show/image-7.png"
                    alt=""
                    className="rounded-xl"
                  />
                </div>
                <div className="mt-[30px] lg:mt-0 lg:w-6/12">
                  <p className="text-text">
                    Vuexy React The most developer-friendly & highly
                    customizable React Admin Template. It is based on Create
                    React App, Redux & Reactstrap BS4. Furthermore, this
                    template.
                  </p>
                  <ul className="mt-[20px] grid gap-2">
                    <li className="flex items-start text-text">
                      <FaCaretRight className="mr-[8px] mt-[4px]" /> User
                      account creation with email login options.
                    </li>
                    <li className="flex items-start text-text">
                      <FaCaretRight className="mr-[8px] mt-[4px]" /> Password
                      reset and account recovery options.
                    </li>
                    <li className="flex items-start text-text">
                      <FaCaretRight className="mr-[8px] mt-[4px]" /> Advanced
                      search functionality to find specific cuisines, dishes, or
                      restaurants
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-5 text-text">
                Besides, this template is also RTL-ready and comes with UI/UX
                tools alongside many more amazing invaluable features.
                Furthermore, it comes with many useful tools such as fuzzy
                search, bookmarks, floating nav bar, dark and semi-dark layout
                options, advance cards, data table, and charts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
        <h2 className="text-[24px] text-btn dark:text-white">Project Info</h2>
        <div className=" mt-[20px] grid gap-[30px] xl:flex xl:gap-[60px]">
          <div>
            <p className="text-[14px] text-text">Client:</p>
            <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
              Jonathon E. Nunley
            </p>
            <p className="text-[14px] text-text">Turnpike Drive Decatur</p>
          </div>
          <div>
            <p className="text-[14px] text-text">Category:</p>
            <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
              Business, Consultation
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Time frame:</p>
            <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
              Saturday, June 03, 2023{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
