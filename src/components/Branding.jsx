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
    <div className="w-full bg-[#151515] pt-[7vw] px-[3vw] max-sm:pb-[7vw]">
      <div className="relative max-sm:h-[60vh]">
        <img
          className="w-full max-sm:w-full max-sm:h-full max-sm:object-cover object-cover rounded-[4vw]"
          src="./images/largehouse.webp"
          alt=""
        />
        <div className="absolute top-0 left-0 bg-black w-full h-full rounded-[4vw] opacity-25"></div>

        <div>
          <div
            className="circlePattern w-[20vw] max-sm:w-[40vw] h-[20vw] max-sm:h-[40vw] rounded-full border-[2px] border-[#C29671] 
    absolute top-[25%] max-sm:top-[75%] left-[17%] max-sm:left-[55%] z-[20] flex justify-center items-center"
          >
            <div className="w-full h-full bg-black absolute rounded-full opacity-[40%]"></div>
            <a className="text-center text-[#FFFBF9] z-[30]" href="">
              <h2>
                GET STARTED{" "}
                <span className="arrow text-[1.5vw] max-sm:text-[4vw] ml-2">
                  <i className="ri-arrow-right-up-line"></i>
                </span>
              </h2>
            </a>

            <div
              className="smallCircle w-[8vw] max-sm:w-[18vw] h-[8vw] max-sm:h-[18vw] rounded-full border-[2px] border-[#C29671] 
    absolute top-0 left-[-5%] z-[10]"
            >
              <div className="w-full h-full bg-black absolute rounded-full opacity-[40%]"></div>
            </div>
          </div>
          <div
            ref={headRef}
            className="absolute top-[20%] max-sm:top-[5%] right-[6%] max-sm:left-[5%] text-[#FFFBF9] text-[6vw] max-sm:text-[15vw] leading-[6vw] max-sm:leading-[15vw] tracking-tighter"
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
