import "remixicon/fonts/remixicon.css";
function LandingPage() {
  return (
    <>
      <div className="w-full h-screen relative">
        <video
          src="./videos/bgVideo.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <h3 className="absolute top-[6%] left-[40%] text-5xl text-black font-[200] tracking-tighter">
        Studio<span className="italic">Lux</span>
        <span>*</span>
      </h3>
      <div className="absolute top-[28%] left-[20%] text-center text-black font-normal text-[6.2vw] leading-[6vw] opacity-80">
        <h1 className="tracking-tighter">Award Winning</h1>
        <h1 className="tracking-tighter">real estate web design</h1>
        <h1 className="tracking-tighter">& marketing</h1>
      </div>
      <div className="absolute top-[73%] left-[27%]">
        <p className="text-center text-black font-semibold">
          ELEVATE YOUR BUSINESS WITH STUDIOLUX’S UNPARALLELED LUXURY REAL ESTATE{" "}
          <br />
          WEBSITE DESIGNS AND EXPERT MARKETING SOLUTIONS.
        </p>
      </div>
      <div className="absolute top-[6%] left-[3%] border-l-[3px] border-gray-900 h-[94%]"></div>
      <div className="absolute top-[6%] right-[3%] border-r-[3px] border-gray-900 h-[94%]"></div>

      <div>
        <a
          className="email-link font-bold text-[1.3vw] absolute rotate-[-90deg] top-[50%] left-[-8%]"
          href=""
        >
          HELLO@STUDIOLUXRE.COM{" "}
          <span className="arrow-icon">
            <i class="ri-arrow-right-up-line"></i>
          </span>
        </a>
        <div className="social-icons absolute rotate-[180deg] top-[12%] left-[0.5%] font-medium text-2xl">
          <a href="">
            <i class="ri-instagram-line"></i>
          </a>
        </div>
        <div className="social-icons absolute rotate-[-90deg] top-[5%] left-[0.5%] font-medium text-2xl">
          <a href="">
            <i class="ri-facebook-circle-fill"></i>
          </a>
        </div>
      </div>

      <div>
        <a
          className="email-link font-bold text-[1.3vw] absolute rotate-[90deg] top-[50%] right-[-8%]"
          href=""
        >
          HELLO@STUDIOLUXRE.COM{" "}
          <span className="arrow-icon">
            <i class="ri-arrow-right-up-line"></i>
          </span>
        </a>
      </div>
    </>
  );
}

export default LandingPage;
