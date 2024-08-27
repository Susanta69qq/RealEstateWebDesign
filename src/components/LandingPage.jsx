import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";

function LandingPage() {
  const centerTextRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      centerTextRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 10,
        stagger: 0.5,
      }
    );
  }, []);

  const handleScroll = () => {
    navigate("/second");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1000);
  };

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
      <div ref={centerTextRef} className="centerText">
          <h3 onClick={handleScroll} className="absolute top-[6%] max-sm:top-2 left-[40%] max-sm:left-[27%] text-5xl text-[#FFFBF9] font-[200] tracking-tighter max-sm:font-[400] cursor-pointer">
            Studio<span className="italic">Lux</span>
            <span>*</span>
          </h3>
        <div className="absolute top-[28%] max-sm:top-[18%] left-[20%] max-sm:left-[3%] text-center text-[#FFFBF9] font-normal text-[6.2vw] leading-[6vw] opacity-80">
          <h1 className="tracking-tighter max-sm:text-[16.5vw] max-sm:leading-[16.5vw] max-sm:font-[400]">
            Award Winning
          </h1>
          <h1 className="tracking-tighter max-sm:text-[16.5vw] max-sm:leading-[16.5vw] max-sm:font-[400]">
            real estate web design
          </h1>
          <h1 className="tracking-tighter max-sm:text-[0]">& marketing</h1>
        </div>
        <div className="absolute top-[73%] left-[27%] max-sm:top-[60%] max-sm:left-[0%]">
          <p className="text-center text-[#FFFBF9] font-semibold max-sm:text-[3.85vw] max-sm:leading-[6vw]">
            ELEVATE YOUR BUSINESS WITH STUDIOLUX’S UNPARALLELED LUXURY REAL
            ESTATE <br />
            WEBSITE DESIGNS AND EXPERT MARKETING SOLUTIONS.
          </p>
        </div>
      </div>

      <div className="absolute top-[6%] max-sm:top-[3%] left-[3%] max-sm:left-[8%] border-l-[1px] border-[#FFFBF9] h-[94%]"></div>
      <div className="absolute top-[6%] max-sm:top-[3%] right-[3%] max-sm:right-[8%] border-r-[1px] border-[#FFFBF9] h-[94%]"></div>
      <div>
        <a
          className="email-link font-[500] text-[#FFFBF9] text-[1.3vw] max-sm:text-[4vw] absolute rotate-[-90deg] top-[50%] max-sm:top-[70%] left-[-8%] max-sm:left-[-23.5%]"
          href=""
        >
          HELLO@STUDIOLUXRE.COM{" "}
          <span className="arrow-icon">
            <i class="ri-arrow-right-up-line"></i>
          </span>
        </a>
        <div className="social-icons absolute text-[#FFFBF9] rotate-[180deg] top-[12%] max-sm:top-[6%] left-[0.5%] max-sm:left-[2%] font-medium text-2xl max-sm:text-lg">
          <a href="">
            <i class="ri-instagram-line"></i>
          </a>
        </div>
        <div className="social-icons absolute text-[#FFFBF9] rotate-[-90deg] top-[5%] max-sm:top-[2%] left-[0.5%] max-sm:left-[2%] font-medium text-2xl max-sm:text-lg">
          <a href="">
            <i class="ri-facebook-circle-fill"></i>
          </a>
        </div>
      </div>

      <div>
        <a
          className="email-link font-[500] text-[#FFFBF9] text-[1.3vw] max-sm:text-[4vw] absolute rotate-[90deg] top-[55%] max-sm:top-[50%] right-[-8%] max-sm:right-[-24.5%]"
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
