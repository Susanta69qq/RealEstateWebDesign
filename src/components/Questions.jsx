import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Questions() {
  const textRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

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
          start: "top 80%",
          end: "start 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full min-h-screen bg-[#151515] px-[3vw] pt-[7vw]">
      <div className="questionContainer w-full h-full bg-[#232325] rounded-[4vw] rounded-tr-none px-[6.5vw] py-[5vw] flex flex-row gap-[15vw]">
        <div className="left">
          <div className="text-white w-[8vw] h-[3vw] border-2 border-[#C29671] rounded-3xl flex items-center justify-center gap-2 px-3">
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10.5 2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V8.79294L5.05016 4.3431C4.8549 4.14784 4.53832 4.14784 4.34306 4.3431C4.14779 4.53836 4.14779 4.85495 4.34306 5.05021L8.79285 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H8.79294L4.34322 14.9497C4.14796 15.145 4.14796 15.4616 4.34322 15.6568C4.53849 15.8521 4.85507 15.8521 5.05033 15.6568L9.5 11.2072V17.5C9.5 17.7761 9.72386 18 10 18C10.2761 18 10.5 17.7761 10.5 17.5V11.2072L14.9497 15.6568C15.1449 15.8521 15.4615 15.8521 15.6568 15.6568C15.852 15.4615 15.852 15.145 15.6568 14.9497L11.2071 10.5H17.5C17.7761 10.5 18 10.2761 18 10C18 9.72386 17.7761 9.5 17.5 9.5H11.2072L15.6569 5.05022C15.8522 4.85496 15.8522 4.53838 15.6569 4.34311C15.4617 4.14785 15.1451 4.14785 14.9498 4.34311L10.5 8.79294V2.5Z"
                  fill="#212121"
                ></path>
              </g>
            </svg>
            <h3 className="font-semibold text-[18px]">FAQS</h3>
          </div>
          <div
            ref={textRef}
            className="text-white text-[5.5vw] leading-[5.5vw] tracking-tight mt-4"
          >
            <h1>
              {"Still have".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
            <h1>
              {"questions?".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="right text-[#FFFBF9]">
          {[
            {
              question: "WHY CHOOSE STUDIOLUX?",
              answer:
                "Choose StudioLux for our exceptional design and user-friendly functionality that not only enhances your online presence but also significantly impacts your business. As a dynamic, forward-thinking team, we break away from cookie-cutter solutions to deliver unique, tailored designs. We partner with realtors and developers who are ready to elevate their business and level up in the industry.",
            },
            {
              question: "HOW DO I REQUEST A DESIGN?",
              answer:
                "To submit a design or marketing request, please fill out our Contact Form below, or you can send us an email at hello@studioluxre.com",
            },
            {
              question: "HOW SOON CAN YOU START MY PROJECT?",
              answer:
                "We are typically booked several days/weeks in advanced but as soon as payment is received we have our Design team reach out to you right away to start the branding and onboarding process in the meantime.",
            },
            {
              question: "HOW FAST WILL MY WEBSITE BE BUILT?",
              answer:
                "This is all very indicative on the type project this is. For our Template websites, they typically take around 1~2 weeks whereas a larger scale, more custom design is going to take anywhere from 4~16 weeks.",
            },
            {
              question: "IS THERE A MAX NUMBER OF REQUESTS?",
              answer:
                "Depends on your monthly plan! Standard plan clients don't get any included requests - however, Premium plan clients get 2 and Elite clients get 5. The word 'limit' does not exist in our world so that's why we have the 'À la Carte' services.",
            },
            {
              question: "WHAT PLATFORMS DO YOU USE?",
              answer:
                "We are proudly partnered with Wix for our website platform as well as iHomefinder for all of your MLS integration needs!",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-2 mb-6"
            >
              <div>
                <a
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <div className="question w-[40vw] flex items-center justify-between">
                    <h4 className="text-[1.1vw]">{faq.question}</h4>

                    <div className="text-[2vw] text-[#C29671]">
                      {openIndex === index ? (
                        <i className="ri-arrow-up-s-line"></i>
                      ) : (
                        <i className="ri-arrow-down-s-line"></i>
                      )}
                    </div>
                  </div>
                </a>
              </div>
              {openIndex === index && (
                <p className="text-[1.1vw] leading-[1.5vw]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
