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
            <Image src="/bg-rem1.png" width={150} height={150} alt="thumb" />
          </div>

          <div className=" p-0 rounded-xl">
            <Image src="/bg-rem2.png" width={150} height={150} alt="thumb" />
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
        <div className="grid grid-cols-2 gap-40 items-center">
          <div className=" ">
            <img src="/growth.png" className="rounded-3xl" />


            <p className="text-gray-400 text-sm mt-4">
              Shagun Pro began with a simple mission — improve daily life — and
              today stands as a multi-category innovation brand.
            </p>
          </div>

          {/* RIGHT CONTENT */}

          <div>
            <h2 className="text-5xl font-semibold leading-tight mb-6 ">
              Our{" "}
              <span className="text-[#ff6a2f]">
                Growth & <br /> Success
              </span>{" "}
              Story
            </h2>

            <ul className="space-y-4 text-gray-300 ">
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
       <section className="grid grid-cols-3 items-center bg-white rounded-3xl p-12 m-10">

  {/* LEFT SIDE */}
  <div>
    <h1 className="text-[48px] font-[500] leading-tight text-black">
      India’s Smart Family E-Scooter
    </h1>

    <p className="text-[#818181] font-[300] text-[12px] mt-6 max-w-md">
      Designed for performance, safety, and smart connectivity.
      A powerful electric mobility solution built for Indian roads
      and global performance standards.
    </p>
  </div>


  {/* CENTER */}
  <div className="flex justify-center relative">

    <Image
      src="/scooty.png"
      width={500}
      height={300}
      alt="scooter"
      className="relative z-10"
    />

    <div className="absolute flex items-center justify-center">
      <Image
        src="/group.png"
        width={1200}
        height={800}
        alt="circle"
      />
    </div>

  </div>


  {/* RIGHT SIDE */}
  <div className="flex flex-col items-center gap-6">

    <div className=" p-3 rounded-xl">
      <Image
        src="/bg-rem.png"
        width={150}
        height={150}
        alt="thumb"
      />
    </div>

    <div className=" p-3 rounded-xl">
      <Image
        src="/bg-rem2.png"
        width={150}
        height={150}
        alt="thumb"
      />
    </div>

    <p className="text-[#676767] font-[400] text-[10px] text-center max-w-md">
      Find The Best Deals On Top <br />
      Conditions Care
    </p>

    <div>
      <Image
        src="/service.png"
        width={200}
        height={200}
        alt="thumb"
      />
    </div>

  </div>

</section>


{/* section 7 */}
<section className="bg-[#FFF1F1] rounded-2xl px-10 py-12 grid lg:grid-cols-2 gap-10 items-center m-10">

  {/* Left Content */}
  <div>
    <h2 className="text-[52px] font-[500] mb-4 text-black">
      Why Choose <span className="text-orange-500">Shagun Pro?</span>
    </h2>

    <p className="text-gray-600 mb-8">
      Choose Shagun Pro for reliable innovation, trusted performance, and
      dependable everyday solutions.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Item */}
      <div className="flex gap-4">
        <div className="text-orange-500 text-xl"><img src="/orange-icon.png" alt="" /></div>
        <div>
          <h4 className="font-semibold text-black">Quality Assured</h4>
          <p className="text-sm text-gray-900">
            Consistent standards you can trust
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="text-orange-500 text-xl"><img src="/orange-icon.png" alt="" /></div>
        <div>
          <h4 className="font-semibold text-black">Smart Technology Integration</h4>
          <p className="text-sm text-gray-900">
            Advanced features for smarter living
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="text-orange-500 text-xl"><img src="/orange-icon.png" alt="" /></div>
        <div>
          <h4 className="font-semibold text-black">Dedicated Customer Support</h4>
          <p className="text-sm text-gray-900">
            Always ready to help you
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="text-orange-500 text-2xl"><img src="/orange-icon.png" alt="" /></div>
        <div>
          <h4 className="font-semibold text-black">Innovation Driven Manufacturing</h4>
          <p className="text-sm text-gray-900">
            Built with future-focused technology
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="text-orange-500 text-2xl"><img src="/orange-icon.png" alt="" /></div>
        <div>
          <h4 className="font-semibold text-black">Nationwide Service Network</h4>
          <p className="text-sm text-gray-900">
            Support available across the country
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="text-orange-500 text-2xl"><img src="/orange-icon.png" alt="" /></div>
        <div>
          <h4 className="font-semibold text-black">Expanding International Reach</h4>
          <p className="text-sm text-gray-900">
            Growing presence across global markets
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center p-0">
    <div className="bg-orange-500 rounded-2xl p-0">
      <img
        src="/why-us.png"
        alt="why us"
        className="rounded-lg w-[520px] "
      />
    </div>
  </div>

</section>



{/* section 8 */}

<section className="relative py-24 bg-black text-white ">


  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-between items-start mb-16">
      <h2 className="text-5xl font-semibold">
        <span className="text-orange-500">Trusted</span> by Our Customers
      </h2>

      <p className="text-gray-300 max-w-sm italic">
        Honest feedback from customers who trust and use Shagun Pro
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10 items-center">

      {/* card 1 */}
      <div className="relative">

        <div className="absolute inset-0 bg-orange-500 rounded-[40px] "></div>

        <div className="relative bg-[#0c0c0c] p-10 rounded-[40px] text-center">

          <img
            src="/avtar.png"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />

          <h3 className="font-semibold text-lg">Hannah Schmitt</h3>
          <p className="text-sm text-gray-400 mb-6">
            Working Professional, Delhi
          </p>

          <p className="text-orange-500 text-2xl">“</p>

          <p className="text-gray-300 text-sm">
            Smooth acceleration and strong battery backup. Perfect for daily commuting.
          </p>

        </div>
      </div>


      {/* center card */}
      <div className="relative">

        <div className="absolute inset-0 bg-orange-500 rounded-[40px] "></div>

        <div className="relative bg-[#0c0c0c] p-12 rounded-[40px] text-center">

          <img
            src="/avtar.png"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />

          <h3 className="font-semibold text-xl">Hannah Schmitt</h3>

          <p className="text-gray-400 mb-6">
            Wellness Consultant, Mumbai
          </p>

          <p className="text-orange-500 text-3xl mb-2">“</p>

          <p className="text-gray-300">
            The alkaline ionizer completely upgraded our family’s health routine.
          </p>

        </div>
      </div>


      {/* card 3 */}
      <div className="relative ">

        <div className="absolute inset-0 bg-orange-500 rounded-[40px] "></div>

        <div className="relative bg-[#0c0c0c] p-10 rounded-[40px] text-center">

          <img
            src="/avtar.png"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />

          <h3 className="font-semibold text-lg">Hannah Schmitt</h3>

          <p className="text-sm text-gray-400 mb-6">
            Dairy Farmer, Gujarat
          </p>

          <p className="text-orange-500 text-2xl">“</p>

          <p className="text-gray-300 text-sm">
            Milk production increased noticeably after using Milkish feed.
          </p>

        </div>
      </div>

    </div>

  </div>
</section>



{/* section 9 */}
<section className="bg-black text-white py-5 ">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

    {/* Left Content */}
    <div className="mt-25">
      <h2 className="text-5xl font-semibold leading-tight mb-6">
        Frequently Asked <br /> Question
      </h2>

      <p className="text-gray-400 max-w-sm">
        Find quick answers to common questions about our products.
      </p>
    </div>

    <div className="bg-[#0c0c0c] rounded-2xl p-8">

      <details className="group border-b border-orange-900 py-6 open:text-orange-500">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          Are Shagun Pro products certified?
          <span className="group-open:rotate-180 transition">⌃</span>
        </summary>
        <p className="text-gray-400 mt-4 text-sm">
          Yes. Our products undergo strict quality and safety testing aligned with industry standards
        </p>
      </details>

      <details className="group border-b border-orange-900 py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          Do you provide nationwide service?
          <span className="group-open:rotate-180 transition">⌃</span>
        </summary>
      </details>

      <details className="group border-b border-orange-900 py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          Is dealership available?
          <span className="group-open:rotate-180 transition">⌃</span>
        </summary>
      </details>

      <details className="group border-b border-orange-900 py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          Do you provide installation support?
          <span className="group-open:rotate-180 transition">⌃</span>
        </summary>
      </details>

      <details className="group py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          How can I book a demo or test ride?
          <span className="group-open:rotate-180 transition">⌃</span>
        </summary>
      </details>

    </div>

  </div>
</section>


{/* section 10 Footer */}


<section className="text-white pt-16 pb-8  ">
  <div className="max-w-7xl mx-auto px-6 border-t border-white/30 py-5">

    <div className="grid md:grid-cols-4 gap-12">

      <div>
        <h2 className="text-3xl font-semibold mb-4">ShagunPro</h2>

        <p className="text-sm text-white/80 mb-6">
          Trusted solutions, innovative products, nationwide support, and reliable service for smarter, better everyday living.
        </p>

        <div className="flex gap-3">
          <div className="w-10 h-10 bg-[#444] rounded-full flex items-center justify-center">in</div>
          <div className="w-10 h-10 bg-[#ff3d00] rounded-full flex items-center justify-center">f</div>
          <div className="w-10 h-10 bg-[#444] rounded-full flex items-center justify-center">ig</div>
          <div className="w-10 h-10 bg-[#444] rounded-full flex items-center justify-center">▶</div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

        <ul className="space-y-3 text-white/80 text-sm">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Products</h3>

        <ul className="space-y-3 text-white/80 text-sm">
          <li>Alkaline Ionizer</li>
          <li>Family E-Scooter</li>
          <li>Milkish Animal Feed</li>
          <li>Smart Switch System</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Contact us</h3>

        <div className="flex overflow-hidden rounded-lg">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-3 w-full text-black bg-white  outline-none"
          />

          <button className="bg-[#ff3d00] px-6">
            send
          </button>
        </div>
      </div>

    </div>

    <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/80">

      <p>© Copyright 2026, All Rights Reserved by Shagun Pro</p>

      <div className="flex gap-6 mt-3 md:mt-0">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}
