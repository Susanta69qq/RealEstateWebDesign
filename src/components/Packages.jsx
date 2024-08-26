import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Packages() {
  const services1 = [
    "MLS Integration & Map Search",
    "Customizing MLS Listings",
    "Search Engine Optimization",
    "Email Automations",
    "Photo Library",
    "Website Analytics",
    "Website Audit & Consultation",
    "Live Chat",
  ];

  const services2 = [
    "Lead Generation",
    "Google Ads",
    "Email Newsletter Campaigns",
    "Text Message Campaigns",
    "Auto Email Follow Ups",
    "Auto Text Message Follow Ups",
    "Facebook & Instagram Ads",
    "Social Media Management",
  ];

  const service3 = [
    "Branding",
    "Graphic Design",
    "Listing Feature Sheets",
    "Brochures",
    "Flyers",
    "Signage",
    "Architectural Rendering",
    "3D Modelling",
  ];

  const service4 = [
    "Photography",
    "Videos",
    "Branded App",
    "Neighbourhood Guide",
    "Google Business Account",
    "Business Emails",
    "Business Phone Lines",
    "Customer Support",
  ];

  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const Box = ({ service }) => {
    return (
      <div className="text-[#FFFBE3]">
        <ul className="flex items-center text-[1vw] max-sm:text-[3.5vw] gap-4 mb-2">
          <span>
            <svg
              width="13px"
              height="13px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#C29671"
              transform="rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.5 2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V8.79294L5.05016 4.3431C4.8549 4.14784 4.53832 4.14784 4.34306 4.3431C4.14779 4.53836 4.14779 4.85495 4.34306 5.05021L8.79285 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H8.79294L4.34322 14.9497C4.14796 15.145 4.14796 15.4616 4.34322 15.6568C4.53849 15.8521 4.85507 15.8521 5.05033 15.6568L9.5 11.2072V17.5C9.5 17.7761 9.72386 18 10 18C10.2761 18 10.5 17.7761 10.5 17.5V11.2072L14.9497 15.6568C15.1449 15.8521 15.4615 15.8521 15.6568 15.6568C15.852 15.4615 15.852 15.145 15.6568 14.9497L11.2071 10.5H17.5C17.7761 10.5 18 10.2761 18 10C18 9.72386 17.7761 9.5 17.5 9.5H11.2072L15.6569 5.05022C15.8522 4.85496 15.8522 4.53838 15.6569 4.34311C15.4617 4.14785 15.1451 4.14785 14.9498 4.34311L10.5 8.79294V2.5Z"
                  fill="#212121"
                ></path>{" "}
              </g>
            </svg>
          </span>{" "}
          {service}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#151515] pt-[4vw] px-[3vw]">
      <div className="text-white w-[16.5vw] max-sm:w-[40vw] h-[3vw] max-sm:h-[8vw] border-2 border-[#C29671] rounded-3xl flex items-center justify-center gap-2 px-3 max-sm:mt-3">
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10.5 2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V8.79294L5.05016 4.3431C4.8549 4.14784 4.53832 4.14784 4.34306 4.3431C4.14779 4.53836 4.14779 4.85495 4.34306 5.05021L8.79285 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H8.79294L4.34322 14.9497C4.14796 15.145 4.14796 15.4616 4.34322 15.6568C4.53849 15.8521 4.85507 15.8521 5.05033 15.6568L9.5 11.2072V17.5C9.5 17.7761 9.72386 18 10 18C10.2761 18 10.5 17.7761 10.5 17.5V11.2072L14.9497 15.6568C15.1449 15.8521 15.4615 15.8521 15.6568 15.6568C15.852 15.4615 15.852 15.145 15.6568 14.9497L11.2071 10.5H17.5C17.7761 10.5 18 10.2761 18 10C18 9.72386 17.7761 9.5 17.5 9.5H11.2072L15.6569 5.05022C15.8522 4.85496 15.8522 4.53838 15.6569 4.34311C15.4617 4.14785 15.1451 4.14785 14.9498 4.34311L10.5 8.79294V2.5Z"
              fill="#212121"
            ></path>{" "}
          </g>
        </svg>
        <h3 className="font-semibold text-[18px] max-sm:text-[10px]">OUR LATEST WORK</h3>
      </div>

      <h1
        ref={textRef}
        className="animateText text-[#FFFBF9] text-[5.5vw] max-sm:text-[14vw] leading-[5.5vw] max-sm:leading-[14vw] tracking-tighter mt-4"
      >
        {"Curate the ".split("").map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
        <span className="text-[#C29671] italic">
          {"best ".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </span>
        <span>
          {"package".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </span>
      </h1>
      <p className="text-[#FFFBE3] mt-8 text-[1.1vw] max-sm:text-[3vw]">
        WE'RE ALL DIFFERENT - SO WHY ARE ALL PRICING PACKAGES THE SAME? TAILOR
        YOUR EXPERIENCE TO <br />
        FIT YOUR SPECIFIC NEEDS AND ACHIEVE MEANINGFUL RESULTS WITH OUR SERVICE
        ADD ONS.
      </p>

      <div className="w-full bg-[#232325] mt-8 p-[3vw] flex max-sm:flex-col justify-between rounded-[4vw] rounded-tr-none">
        <div>
          {services1.map((service, index) => (
            <Box key={index} service={service} />
          ))}
        </div>
        <div>
          {services2.map((service, index) => (
            <Box key={index} service={service} />
          ))}
        </div>
        <div>
          {service3.map((service, index) => (
            <Box key={index} service={service} />
          ))}
        </div>
        <div>
          {service4.map((service, index) => (
            <Box key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages;
