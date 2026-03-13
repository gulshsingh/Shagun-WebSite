import Image from "next/image";

export default function Hero() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="grid grid-cols-3 items-center px-12 py-20">
        {/* LEFT SIDE */}

        <div>
          <h1 className="text-[55px] font-[500] leading-tight">
            <span className="text-[#FF6B35] italic">Smart</span> Living.
            <br />
            Pure Innovation
          </h1>

          <p className="text-[#818181] font-[300] text-[12px] light mt-6 max-w-md">
            Transforming Everyday Life with Advanced Technology & <br></br>{" "}
            Wellness Solutions
          </p>

          <div className="flex items-center gap-4 mt-10">
            {/*  */}
            <div className="flex -space-x-3">
              <img
                src="/user1.png"
                alt="user"
                className="w-8 h-8 rounded-full"
              />

              <img
                src="/user2.png"
                alt="user"
                className="w-8 h-8 rounded-full "
              />

              <img
                src="/user3.png"
                alt="user"
                className="w-8 h-8 rounded-full "
              />

              <img
                src="/user4.png"
                alt="user"
                className="w-8 h-8 rounded-full "
              />
            </div>

            <p className="text-white -ml-2 ">
              15k+ <br></br>
              <span className="text-gray-400 font-light">
                Verified Buyers
              </span>{" "}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 mt-15">
            <button className="bg-gradient-to-r from-[#FF6B35] to-[#E31E24] px-12 py-2 rounded-full text-white">
              Explore Products
            </button>

            <button className="border border-white px-17 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        {/* CENTER */}

        <div className="flex justify-center relative bottom-10">
          <Image src="/scooty.png" width={400} height={400} alt="scooter" />

          <div className="absolute bottom-0 -mb-10 left-50 bg-gray-200 text-gray-600 w-24 h-24 rounded-full flex items-center justify-center text-center text-sm">
            2 years warranty
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-200 text-black w-24 h-24 text-center rounded-full flex items-center justify-center text-sm">
            10/12
            <br />
            Hours Fast Charging
          </div>

          <div className=" p-0 rounded-xl">
            <Image src="/Rectangle2.png" width={150} height={150} alt="thumb" />
          </div>

          <div className=" p-0 rounded-xl">
            <Image src="/Rectangle1.png" width={150} height={150} alt="thumb" />
          </div>
          <p className="text-[#676767] font-[400] text-[10px] max-w-md">
            Find The Best Deals On Top<br></br> Conditions Care
          </p>
        </div>
      </section>

      {/* section 2 */}

      <section className="bg-[#FFF1F1] rounded-3xl p-12 m-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Heading */}
          <div className="col-span-5">
            <h2 className="text-[30px] font-semibold text-gray-800 leading-tight">
              One Brand <br />
              Four Powerful
            </h2>

            <h1 className="text-[55px] font-bold text-[#ff6a2f] mt-4">
              Innovations
            </h1>
          </div>

          {/* Right text + image */}
          <div className="col-span-7 grid grid-cols-2 gap-6 items-start">
            <p className="text-[#5C5C5C] text-[18px] font-[400] mt-18 p-0">
              Shagun Pro is a diversified multi-product ecosystem focused on
              wellness, mobility, smart automation, and agricultural excellence.
            </p>

            <img
              src="/science.png"
              className="rounded-2xl w-full h-40 object-cover"
            />
          </div>

          {/* Middle row */}
          <div className="col-span-3"></div>
          <div className="col-span-3">
            <p className="text-[#5C5C5C] text-[18px] font-[400] mt-18 ">
              Shagun Pro is a diversified multi-product ecosystem focused on
              wellness, mobility, smart automation, and agricultural excellence.
            </p>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-6">
            <img
              src="/lab.png"
              className="rounded-2xl w-full h-48 object-cover"
            />

            <img
              src="/home.png"
              className="rounded-2xl w-full h-48 object-cover"
            />
          </div>

          {/* Bottom row */}
          <div className="col-span-4"></div>
          <div className="col-span-4 mt-5">
            <img
              src="/scooter.png"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </div>

          <div className="col-span-4 mt-5 bg-[#ff6a2f] text-white rounded-2xl flex items-center justify-center text-2xl text-center p-10">
            Serving urban homes, rural communities, and emerging global markets.
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-black text-white py-20 px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <h2 className="text-[55px] font-[500] mb-10">
              About <span className="text-[#ff6a2f]">Shagun Pro</span>
            </h2>

            <p className="text-gray-300 mb-6 text-[18px] font-[400]">
              We operate across multiple industries:
            </p>

            <div className="space-y-2">
              <div className=" text-white px-6 py-4 rounded-xl text-[18px] font-[400]  border border-[#2B2B2B]">
                HEALTHCARE & WATER PURIFICATION
              </div>

              <div className=" px-6 py-4 text-[18px] font-[400] rounded-xl  border border-[#2B2B2B] ">
                ELECTRIC MOBILITY
              </div>

              <div className=" px-6 py-4 rounded-xl  text-[18px] font-[400]  border border-[#2B2B2B]">
                AGRICULTURAL NUTRITION
              </div>

              <div className=" border border-[#2B2B2B] px-6 py-4 rounded-xl  text-[18px] font-[400]">
                SMART HOME AUTOMATION
              </div>
            </div>
          </div>

          {/* TOP RIGHT TEXT */}
          <div className="absolute right-16 max-w-xl text-gray-300 text-justify ">
            Shagun Pro is a forward-thinking innovation brand committed to
            improving everyday life through smart technology and wellness-
            driven solutions.
          </div>

          <div className="col-span-6 flex justify-center items-center relative">
            <div className="relative w-[420px] h-[300px]">
              <img
                src="/img3.png"
                className="absolute left-0 top-6 w-[260px] rounded-2xl opacity-30"
              />

              <img
                src="/img2.png"
                className="absolute left-16 top-3 w-[280px] rounded-2xl opacity-60"
              />

              <img
                src="/img3.png"
                className="absolute left-32 top-0 w-[300px] rounded-2xl "
              />
              <img
                src="/img3.png"
                className="absolute right-0 top-6 w-[260px] rounded-2xl opacity-30"
              />

              <img
                src="/img1.png"
                className="absolute right-16 top-3 w-[280px] rounded-2xl opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2  gap-10 mt-20">
          <div>
            <h3 className="text-3xl font-semibold flex items-center gap-3">
              <span className="text-[#ff6a2f] text-xl">
                <img src="/icon1.png" alt="icon" width={30} />
              </span>{" "}
              Vision
            </h3>

            <p className="text-gray-300 mt-4 border-l border-orange-500 pl-5">
              To become a globally respected brand delivering smart,<br></br>
              sustainable, and wellness-driven innovations for modern living.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold flex items-center gap-3">
              <span className="text-[#ff6a2f] text-xl">
                <img src="/icon1.png" alt="icon" width={30} />
              </span>{" "}
              Mission
            </h3>

            <p className="text-gray-300 mt-4 border-l border-orange-500 pl-5">
              To provide high-quality, affordable, and technologically<br></br>
              advanced solutions that empower families, farmers, and
              future-ready homes.
            </p>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="bg-[#0a0504] text-white py-20 px-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-semibold">
            <span className="text-[#ff6a2f]">Quality</span> Commitment
          </h2>

          <p className="text-gray-400 mt-3">
            At Shagun Pro, quality is not optional — it is foundational.
          </p>
        </div>


        <div className="grid grid-cols-4 gap-6 mb-24">
          <div className="bg-black border border-gray-800 rounded-xl item-center p-6 text-center">
            <div className="text-2xl mb-3 "><img src="/icon.png" alt="" className="mx-auto w-8 h-8" /></div>
            <p>Strict Quality Testing</p>
          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-2xl mb-3 "><img src="/icon.png" alt=""  className="mx-auto w-8 h-8" /></div>
            <p>Certified Manufacturing</p>
          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-2xl mb-3 "><img src="/icon.png" alt=""  className="mx-auto w-8 h-8" /></div>
            <p>Performance Validation</p>
          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-2xl mb-3 "><img src="/icon.png" alt=""  className="mx-auto w-8 h-8" /></div>
            <p>Continuous R&D</p>
          </div>
        </div>

        {/* section 5 */}
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className=" p-10">
            <img src="/growth.png" className="rounded-3xl" />


            <p className="text-gray-400 text-sm mt-4">
              Shagun Pro began with a simple mission — improve daily life — and
              today stands as a multi-category innovation brand.
            </p>
          </div>

          {/* RIGHT CONTENT */}

          <div>
            <h2 className="text-5xl font-semibold leading-tight mb-6">
              Our{" "}
              <span className="text-[#ff6a2f]">
                Growth & <br /> Success
              </span>{" "}
              Story
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>• Thousands of satisfied domestic customers</li>
              <li>• Rapid distributor expansion in regional markets</li>
              <li>• Growing demand in tier-2 & tier-3 cities</li>
              <li>• Strong dealer network development</li>
              <li>• Positive word-of-mouth growth</li>
            </ul>
          </div>
        </div>

      </section>



      {/* section 6 */}
      <section>

      </section>
    </main>
  );
}
