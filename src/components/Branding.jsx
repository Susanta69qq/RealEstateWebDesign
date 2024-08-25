import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Branding() {
  const headRef = useRef(null);

  useEffect(() => {
    const letters = headRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: { each: 0.5 },
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#151515] pt-[7vw] px-[3vw]">
      <div className="relative">
        <img
          className="w-full rounded-[4vw]"
          src="./images/largehouse.webp"
          alt=""
        />
        <div className="absolute top-0 left-0 bg-black w-full h-full rounded-[4vw] opacity-25"></div>

        <div>
          <div
            className="circlePattern w-[20vw] h-[20vw] rounded-full border-[2px] border-[#C29671] 
    absolute top-[25%] left-[17%] z-[20] flex justify-center items-center"
          >
            <div className="w-full h-full bg-black absolute rounded-full opacity-[40%]"></div>
            <a className="text-center text-[#FFFBF9] z-[30]" href="">
              <h2>
                GET STARTED{" "}
                <span className="arrow text-[1.5vw] ml-2">
                  <i className="ri-arrow-right-up-line"></i>
                </span>
              </h2>
            </a>

            <div
              className="smallCircle w-[8vw] h-[8vw] rounded-full border-[2px] border-[#C29671] 
    absolute top-0 left-[-5%] z-[10]"
            >
              <div className="w-full h-full bg-black absolute rounded-full opacity-[40%]"></div>
            </div>
          </div>
          <div
            ref={headRef}
            className="absolute top-[20%] right-[6%] text-[#FFFBF9] text-[6vw] leading-[6vw] tracking-tighter"
          >
            <h1 className="first">
              {"StudioLux is".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
            <h1 className="second">
              {"bringing a refined".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
            <h1 className="third">
              {"approach to".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
            <h1 className="fourth">
              {"luxury real estate".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
