import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

function ThirdPage() {
  useEffect(() => {
    
    gsap.utils.toArray(".text-animation h1").forEach((elem) => {
      const text = elem.textContent;
      elem.innerHTML = text
        .split("")
        .map(
          (letter) =>
            `<span class="letter">${letter === " " ? "&nbsp;" : letter}</span>`
        )
        .join("");

      
      gsap.fromTo(
        elem.querySelectorAll(".letter"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: elem,
            start: "top 75%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full bg-[#151515] pt-[2vw]">
      <div className="p-8 px-[3vw] relative">
        <img
          className="w-full h-full object-cover rounded-[5vw] max-sm:h-[120vw]"
          src="/images/9598.webp"
          alt=""
        />
        <div className="w-full h-full bg-[#151515] absolute top-0 left-0 opacity-[25%]"></div>
        <div className="text-animation absolute top-[9vw] max-sm:top-[17vw] left-[8vw] text-[#FFFBF9] text-[7vw] max-sm:text-[14vw] max-sm:leading-[14vw] leading-[7vw] tracking-tight">
          <h1>Perfect your</h1>
          <h1>property's</h1>
          <h1>presence with</h1>
          <h1>StudioLux</h1>
        </div>
        <div
          className="circlePattern w-[20vw] max-sm:w-[50vw] h-[20vw] max-sm:h-[50vw] rounded-full border-[2px] border-[#C29671] 
    absolute top-[30%] max-sm:top-[60%] right-[20%] max-sm:right-[10%] z-[20] flex justify-center items-center"
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
            className="smallCircle w-[8vw] max-sm:w-[20vw] h-[8vw] max-sm:h-[20vw] rounded-full border-[2px] border-[#C29671] 
    absolute top-0 left-[-5%] z-[10]"
          >
            <div className="w-full h-full bg-black absolute rounded-full opacity-[40%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
