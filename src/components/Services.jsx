import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {

    const letters = headerRef.current.querySelectorAll('.letter');

    gsap.fromTo(letters, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#151515] px-[3vw] pt-[5vw]">
      <div className="w-full h-full bg-[#232325] rounded-[5vw] px-[4vw] py-[4.5vw]">
        <div className="head w-[13vw] h-[3vw] border-2 border-[#C29671] rounded-3xl flex items-center justify-center gap-2 px-3">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
                fill="#ffff"
              ></path>{" "}
            </g>
          </svg>
          <h2 className="text-[#FFFBF9] font-semibold">OUR SERVICES</h2>
        </div>
        <div className="headText">
        <h1 ref={headerRef} className="header text-[#FFFBF9] text-[5.5vw] tracking-tighter mt-4">
      {"Turning needs into ".split("").map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
      <span className="text-[#C29671] italic">
        {" results".split("").map((letter, index) => (
          <span key={`result-${index}`} className="letter">
            {letter}
          </span>
        ))}
      </span>
    </h1>
          <p className="text-[#FFFBF9] text-[1.1vw] mt-4 leading-6 tracking-normal">
            BREAK AWAY FROM THE OUTDATED, UNINSPIRED DESIGNS THAT PLAGUE THE
            REAL ESTATE MARKET <br />
            AND LEAVE A LASTING IMPRESSION WHILE SETTING YOURSELF APART FROM THE
            COMPETITION.
          </p>
        </div>
        <div className="grids flex justify-between gap-4 mt-[5vw]">
          <div className="grid w-[22vw] min-h-[25vw] bg-[#161515] rounded-[4vw] rounded-tr-none px-6 py-8">
            <svg
              className="rotate"
              width="55px"
              height="55px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  fill="#ffff"
                ></path>{" "}
              </g>
            </svg>
            <h5 className="text-[#C29671] mt-2 text-[1vw]">STEP 1</h5>
            <div className="mt-3">
              <h2 className="text-[#FFFBF9] text-[2.5vw] tracking-tighter leading-[2.5vw]">
                Templates & <br /> Custom Designs
              </h2>
            </div>
            <div className="mt-3">
              <p className="text-[#FFFBF9] text-[1.2vw] leading-[1.5vw] ">
                If you are looking for a more budget friendly option or a more
                timely integration, we have luxury real estate
                {showMore1 && (
                  <>
                    templates available. Our web design services are tailored to
                    reflect the elegance and sophistication of your luxury real
                    estate brand. We craft visually stunning, user-friendly
                    websites that seamlessly integrate with high-end aesthetics.
                    Our designs are not only captivating but also optimized for
                    performance, ensuring an intuitive user experience and
                    compelling presentations of your properties. From immersive
                    visual storytelling to seamless functionality, we create
                    digital experiences that elevate your brand and engage
                    discerning buyers, setting you apart in the competitive
                    luxury real estate market.
                  </>
                )}
              </p>
            </div>
            <div className="mt-3">
              <a
                onClick={() => {
                  setShowMore1(!showMore1);
                }}
                className="text-[#C29671] cursor-pointer"
              >
                {showMore1 ? "SHOW LESS" : "SHOW MORE"}
              </a>
            </div>
            <hr className="mt-4 opacity-10" />
            <div className="contact mt-4">
              <a className="contactLink text-[#FFFBF9]" href="">
                GET STARTED{" "}
                <span className="contactIcon ml-2 text-[#C29671] text-xl">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="grid w-[22vw] min-h-[25vw] bg-[#161515] rounded-[4vw] rounded-tr-none px-6 py-8">
            <svg
              className="rotate"
              width="55px"
              height="55px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  fill="#ffff"
                ></path>{" "}
              </g>
            </svg>
            <h5 className="text-[#C29671] mt-2 text-[1vw]">STEP 2</h5>
            <div className="mt-3">
              <h2 className="text-[#FFFBF9] text-[2.5vw] tracking-tighter leading-[2.5vw]">
                Add MLS to <br />
                Your Wix Site
              </h2>
            </div>
            <div className="mt-3">
              <p className="text-[#FFFBF9] text-[1.2vw] leading-[1.5vw] ">
                Transform your Wix website with expertly integrated MLS
                listings. Our service seamlessly incorporates MLS
                {showMore2 && (
                  <>
                    data into your site, ensuring that property listings are not
                    only functional but also harmoniously aligned with your
                    website's unique aesthetic. We customize the integration to
                    match your branding, providing a cohesive look that enhances
                    user experience while showcasing your luxury properties with
                    elegance. From the initial setup to ongoing updates,
                    StudioLux ensures your MLS listings are presented in a way
                    that complements your high-end real estate brand and
                    maximizes engagement with potential clients.
                  </>
                )}
              </p>
            </div>
            <div className="mt-3">
              <a
                onClick={() => {
                  setShowMore2(!showMore2);
                }}
                className="text-[#C29671] cursor-pointer"
              >
                {showMore2 ? "SHOW LESS" : "SHOW MORE"}
              </a>
            </div>
            <hr className="mt-4 opacity-10" />
            <div className="contact mt-4">
              <a className="contactLink text-[#FFFBF9]" href="">
                GET STARTED{" "}
                <span className="contactIcon ml-2 text-[#C29671] text-xl">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="grid w-[22vw] min-h-[25vw] bg-[#161515] rounded-[4vw] rounded-tr-none px-6 py-8">
            <svg
              className="rotate"
              width="55px"
              height="55px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  fill="#ffff"
                ></path>{" "}
              </g>
            </svg>
            <h5 className="text-[#C29671] mt-2 text-[1vw]">STEP 3</h5>
            <div className="mt-3">
              <h2 className="text-[#FFFBF9] text-[2.5vw] tracking-tighter leading-[2.5vw]">
                Branding & <br />
                Marketing
              </h2>
            </div>
            <div className="mt-3">
              <p className="text-[#FFFBF9] text-[1.2vw] leading-[1.5vw] ">
                Our marketing services are designed to amplify the reach and
                impact of your luxury real estate brand. We combine
                {showMore3 && (
                  <>
                    digital strategies with sophisticated design to create
                    compelling campaigns that captivate your target audience and
                    drive results. From tailored social media strategies to
                    strategic SEO, we ensure your properties are showcased in
                    their best light, attracting the attention and interest of
                    high-net-worth individuals. Let us help you elevate your
                    brand’s visibility and establish a commanding presence in
                    the luxury real estate market.
                  </>
                )}
              </p>
            </div>
            <div className="mt-3">
              <a
                onClick={() => {
                  setShowMore3(!showMore3);
                }}
                className="text-[#C29671] cursor-pointer"
              >
                {showMore3 ? "SHOW LESS" : "SHOW MORE"}
              </a>
            </div>
            <hr className="mt-4 opacity-10" />
            <div className="contact mt-4">
              <a className="contactLink text-[#FFFBF9]" href="">
                GET STARTED{" "}
                <span className="contactIcon ml-2 text-[#C29671] text-xl">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="grid w-[22vw] min-h-[25vw] bg-[#161515] rounded-[4vw] rounded-tr-none px-6 py-8">
            <svg
              className="rotate"
              width="55px"
              height="55px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  fill="#ffff"
                ></path>{" "}
              </g>
            </svg>
            <h5 className="text-[#C29671] mt-2 text-[1vw]">STEP 4</h5>
            <div className="mt-3">
              <h2 className="text-[#FFFBF9] text-[2.5vw] tracking-tighter leading-[2.5vw]">
                À La Carte <br />
                Services
              </h2>
            </div>
            <div className="mt-3">
              <p className="text-[#FFFBF9] text-[1.2vw] leading-[1.5vw] ">
                We offer the flexibility to tailor your luxury real estate
                marketing and web design needs to your exact
                {showMore4 && (
                  <>
                    specifications. Choose from a curated selection of
                    specialized offerings, including graphic design, targeted
                    social media campaigns, custom content creation, and
                    advanced SEO optimization. Each service is designed to
                    seamlessly integrate with your existing strategy or stand
                    alone to enhance your brand’s visibility and effectiveness.
                    With StudioLux, you have the freedom to customize your
                    approach, ensuring that every aspect of your digital
                    presence reflects the sophistication and exclusivity of your
                    luxury real estate portfolio.
                  </>
                )}
              </p>
            </div>
            <div className="mt-3">
              <a
                onClick={() => {
                  setShowMore4(!showMore4);
                }}
                className="text-[#C29671] cursor-pointer"
              >
                {showMore4 ? "SHOW LESS" : "SHOW MORE"}
              </a>
            </div>
            <hr className=" mt-4 opacity-10" />
            <div className="contact mt-4">
              <a className="contactLink text-[#FFFBF9]" href="">
                GET STARTED{" "}
                <span className="contactIcon ml-2 text-[#C29671] text-xl">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
