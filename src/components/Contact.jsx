import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const headingRef = useRef(null);
  const hiRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const letters = hiRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: hiRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen max-sm:min-h-[200vh] bg-[#151515]  pt-[7vw] relative overflow-hidden">
      <div
        ref={headingRef}
        className="heading flex flex-col justify-center gap-6 text-center"
      >
        <h3 className="brand text-[#FFFBF9] text-[2.5vw] max-sm:text-[10vw] font-semibold">
          Sotheby's
        </h3>
        <div className="texts">
          <h1 className="text-[#FFFBF9] text-[3vw] max-sm:text-[9vw] leading-[3vw] max-sm:leading-[9vw] max-sm:px-[5vw]">
            "This has been a huge wake up call. StudioLux captures your leads,
            <br />
            the ones who are just sitting there"
          </h1>
          <div className="mt-10">
            <p className="text-[#C29671] text-[1vw] max-sm:text-[3.5vw]">WILLI BARONET</p>
            <p className="text-[#FFFBF9] text-[0.9vw] max-sm:text-[3.5vw]">REALTOR®</p>
          </div>
        </div>
      </div>
      <div className="px-[3vw] max-sm:mt-[12vw]">
        <div className="text-white w-[14vw] max-sm:w-[37vw] h-[3vw] max-sm:h-[9vw] border-2 border-[#C29671] rounded-3xl flex items-center justify-center gap-2 px-3">
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
          <h3 className="font-semibold text-[18px] max-sm:text-[3vw]">GET IN TOUCH</h3>
        </div>
        <div>
          <h1
            ref={hiRef}
            className="text-[#FFFBF9] text-[5.5vw] max-sm:text-[14.5vw] max-sm:leading-[14.5vw] max-sm:mt-[2vw] tracking-tighter mb-2"
          >
            {" Don't be shy, ".split("").map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
            {"say hi!".split("").map((letter, index) => (
              <span key={index} className="letter text-[#C29671] italic">
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-[#FFFBF9] text-[1.2vw] max-sm:text-[3vw] max-sm:mt-[7vw]">
            WE’D LOVE TO HEAR FROM YOU! SEND US YOUR REQUESTS OR GIVE US A CALL
            TO DISCUSS YOUR NEXT PROJECT.
          </p>
        </div>
      </div>
      <div className="mt-[7vw] px-[8vw] max-sm:px-[3vw] flex max-sm:flex-col justify-between items-center mb-[7vw]">
        <div className="left max-sm:mb-[7vw]">
          <div className="flex gap-6 items-center mb-6">
            <svg
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 12.665 120 74.67"
              height="100"
              width="120"
              aria-label="StudioLux Real Estate Web Design & Marketing Victoria, BC"
            >
              <defs>
                <style>{`#comp-lz361wmj3 svg [data-color="1"] {fill: #C29671;}`}</style>
              </defs>
              <g>
                <path
                  fill="#9A775A"
                  d="M66.586 87.335h-41.15L8.356 72.983C2.817 68.35 0 64.08 0 60.083c0-2.816 1.09-5.178 3.361-6.904s5.178-2.634 8.812-2.634c4.36 0 8.72 1.272 13.262 3.906v-1.18c0-4.815 1.454-9.085 4.27-12.628s6.722-5.995 11.537-7.176l32.793-8.448v-7.086l20.439-5.268v7.267c1.817-.454 3.633-.636 5.45-.636 5.36 0 9.993 2.09 14.081 6.177 3.997 4.088 5.995 8.902 5.995 14.353V73.8zm-6.45-2.27L34.974 64.17c-8.994-7.54-16.624-11.264-22.71-11.264-2.998 0-5.36.636-7.268 1.907-1.907 1.272-2.725 2.907-2.725 4.906 0 3.724 3.452 8.357 10.356 14.08l13.808 11.355h33.701zM26.616 68.53l-1.635 1.726h-6.904l-5.269-4.45 1.181-2 2.362 1.817h3.634l1.453-1.453zm35.246-23.98c-3.906-5.904-9.356-8.811-16.26-8.811-5.178 0-9.448 1.726-12.809 5.087s-5.087 7.721-5.087 12.9v2.089c3.543 2.27 6.54 4.45 9.084 6.722l1.817 1.544 7.176-15.443zm2.453 8.994c0-2.18-.454-4.451-1.363-6.904l-15.715 3.906-6.904 14.989 8.267 6.994 3.542-15.806zm53.505 18.44V39.826c0-4.906-1.817-9.266-5.451-12.99s-7.812-5.542-12.717-5.542c-1.454 0-3.18.273-5.178.727v9.357L81.393 35.01v27.525l-7.449 1.726v-36.79l-23.71 5.995c5.088 1.544 8.994 4.088 11.81 7.54s4.179 7.63 4.179 12.354v31.612zM64.133 76.89V56.177l-9.992 2.453-3.452 15.352 5.904 4.723zm0 8.175V79.07l-5.541 1.453z"
                />
              </g>
            </svg>
            <div className="flex flex-col gap-[0.1vw]">
              <h1 className="text-[3.5vw] max-sm:text-[12vw] text-[#FFFBF9] tracking-tighter">
                Email
              </h1>
              <p className="text-[1vw] max-sm:text-[3vw] text-[#FFFBF9] tracking-wider">
                SEND US AN EMAIL
              </p>
              <a className="socialLinks text-[1vw] max-sm:text-[3vw] text-[#FFFBF9] tracking-wider flex items-center max-sm:items-center">
                HELLO@STUDIOLUXRE.COM{" "}
                <span className="socialArrows text-[#C29671] text-[1.4vw] max-sm:text-[3.5vw] ml-2">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="flex gap-6 items-center mb-6">
            <svg
              width="120px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9453 1.25H13.055C14.4226 1.24998 15.5249 1.24996 16.3919 1.36652C17.292 1.48754 18.0499 1.74643 18.6518 2.34835C19.2537 2.95027 19.5126 3.70814 19.6336 4.60825C19.7502 5.47522 19.7502 6.57754 19.7502 7.94513V16.0549C19.7502 17.4225 19.7502 18.5248 19.6336 19.3918C19.5126 20.2919 19.2537 21.0497 18.6518 21.6517C18.0499 22.2536 17.292 22.5125 16.3919 22.6335C15.5249 22.75 14.4226 22.75 13.055 22.75H10.9453C9.5777 22.75 8.47538 22.75 7.60841 22.6335C6.70831 22.5125 5.95043 22.2536 5.34851 21.6517C4.7466 21.0497 4.4877 20.2919 4.36669 19.3918C4.25013 18.5248 4.25014 17.4225 4.25016 16.0549V7.94512C4.25014 6.57754 4.25013 5.47522 4.36669 4.60825C4.4877 3.70814 4.7466 2.95027 5.34851 2.34835C5.95043 1.74643 6.70831 1.48754 7.60841 1.36652C8.47538 1.24996 9.5777 1.24998 10.9453 1.25ZM7.80828 2.85315C7.07451 2.9518 6.68594 3.13225 6.40917 3.40901C6.13241 3.68577 5.95197 4.07435 5.85331 4.80812C5.75176 5.56347 5.75016 6.56459 5.75016 8V16C5.75016 17.4354 5.75176 18.4365 5.85331 19.1919C5.95197 19.9257 6.13241 20.3142 6.40917 20.591C6.68594 20.8678 7.07451 21.0482 7.80828 21.1469C8.56364 21.2484 9.56475 21.25 11.0002 21.25H13.0002C14.4356 21.25 15.4367 21.2484 16.192 21.1469C16.9258 21.0482 17.3144 20.8678 17.5912 20.591C17.8679 20.3142 18.0484 19.9257 18.147 19.1919C18.2486 18.4365 18.2502 17.4354 18.2502 16V8C18.2502 6.56458 18.2486 5.56347 18.147 4.80812C18.0484 4.07435 17.8679 3.68577 17.5912 3.40901C17.3144 3.13225 16.9258 2.9518 16.192 2.85315C15.4367 2.75159 14.4356 2.75 13.0002 2.75H11.0002C9.56475 2.75 8.56364 2.75159 7.80828 2.85315ZM1.66475 5.32918C2.03524 5.14394 2.48574 5.29411 2.67098 5.66459L3.44738 7.21738C3.69371 7.71005 3.69371 8.28995 3.44738 8.78262L2.89459 9.8882C2.8594 9.95858 2.8594 10.0414 2.89459 10.1118L3.44738 11.2174C3.69371 11.71 3.69371 12.29 3.44738 12.7826L2.89459 13.8882C2.8594 13.9586 2.8594 14.0414 2.89459 14.1118L3.44738 15.2174C3.69371 15.7101 3.69371 16.29 3.44738 16.7826L2.67098 18.3354C2.48574 18.7059 2.03524 18.8561 1.66475 18.6708C1.29427 18.4856 1.1441 18.0351 1.32934 17.6646L2.10574 16.1118C2.14093 16.0414 2.14093 15.9586 2.10574 15.8882L1.55295 14.7826C1.30661 14.29 1.30661 13.71 1.55295 13.2174L2.10574 12.1118C2.14093 12.0414 2.14093 11.9586 2.10574 11.8882L1.55295 10.7826C1.30661 10.29 1.30661 9.71005 1.55295 9.21738L2.10574 8.1118C2.14093 8.04142 2.14093 7.95858 2.10574 7.8882L1.32934 6.33541C1.1441 5.96493 1.29427 5.51442 1.66475 5.32918ZM22.3356 5.32918C22.7061 5.51442 22.8562 5.96493 22.671 6.33541L21.8946 7.8882C21.8594 7.95858 21.8594 8.04142 21.8946 8.1118L22.4474 9.21738C22.6937 9.71005 22.6937 10.29 22.4474 10.7826L21.8946 11.8882C21.8594 11.9586 21.8594 12.0414 21.8946 12.1118L22.4474 13.2174C22.6937 13.71 22.6937 14.29 22.4474 14.7826L21.8946 15.8882C21.8594 15.9586 21.8594 16.0414 21.8946 16.1118L22.671 17.6646C22.8562 18.0351 22.7061 18.4856 22.3356 18.6708C21.9651 18.8561 21.5146 18.7059 21.3293 18.3354L20.553 16.7826C20.3066 16.29 20.3066 15.7101 20.553 15.2174L21.1057 14.1118C21.1409 14.0414 21.1409 13.9586 21.1057 13.8882L20.553 12.7826C20.3066 12.29 20.3066 11.71 20.553 11.2174L21.1057 10.1118C21.1409 10.0414 21.1409 9.95858 21.1057 9.8882L20.553 8.78262C20.3066 8.28995 20.3066 7.71005 20.553 7.21738L21.3293 5.66459C21.5146 5.29411 21.9651 5.14394 22.3356 5.32918ZM8.75016 19C8.75016 18.5858 9.08595 18.25 9.50016 18.25H14.5002C14.9144 18.25 15.2502 18.5858 15.2502 19C15.2502 19.4142 14.9144 19.75 14.5002 19.75H9.50016C9.08595 19.75 8.75016 19.4142 8.75016 19Z"
                  fill="#7A5E47"
                ></path>{" "}
              </g>
            </svg>

            <div className="flex flex-col gap-[0.1vw]">
              <h1 className="text-[3.5vw] max-sm:text-[12vw] text-[#FFFBF9] tracking-tighter">
                Phone
              </h1>
              <p className="text-[1vw] max-sm:text-[3vw] text-[#FFFBF9] tracking-wider">
                GIVE US A CALL
              </p>
              <a className="socialLinks text-[1vw] max-sm:text-[3vw] text-[#FFFBF9] tracking-wider flex items-center max-sm:items-center">
                (778) 200-8220
                <span className="socialArrows text-[#C29671] text-[1.4vw] max-sm:text-[3.5vw] ml-2">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <svg
              width="120px"
              height="100px"
              viewBox="0 0 1024 1024"
              fill="#7A5E47"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#7A5E47"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                  fill=""
                ></path>
              </g>
            </svg>
            <div className="flex flex-col gap-[0.1vw]">
              <h1 className="text-[3.5vw] max-sm:text-[12vw] text-[#FFFBF9] tracking-tighter">
                Address
              </h1>
              <p className="text-[1vw] max-sm:text-[3vw] text-[#FFFBF9] tracking-wider">
                STUDIOLUX IS BASED IN
              </p>
              <a className="socialLinks text-[1vw] max-sm:text-[3vw] text-[#FFFBF9] tracking-wider flex items-center max-sm:items-center">
                VICTORIA, BC
                <span className="socialArrows text-[#C29671] text-[1.4vw] max-sm:text-[3.5vw] ml-2">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bg-[#FFFBF9] px-6 max-sm:px-4 py-6 rounded-[2vw] max-sm:rounded-[8vw] w-[36vw] max-sm:w-[90vw]">
            <div className="flex max-sm:flex-col gap-4">
              <div>
                <h5 className="text-[1vw] max-sm:text-[3vw] font-semibold mb-2">NAME</h5>
                <input
                  className="bg-[#232325] max-sm:w-full rounded-lg py-2 px-4 text-[#FFFBF9]"
                  placeholder=""
                  type="text"
                />
              </div>
              <div>
                <h5 className="text-[1vw] max-sm:text-[3vw] font-semibold mb-2">PHONE</h5>
                <input
                  className="bg-[#232325] max-sm:w-full rounded-lg py-2 mb-4 px-4 text-[#FFFBF9]"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
            <div>
              <h5 className="text-[1vw] max-sm:text-[3vw] font-semibold mb-2">EMAIL</h5>
              <input
                className="bg-[#232325] w-full rounded-lg py-2 mb-4 px-2 text-[#FFFBF9]"
                placeholder=""
                type="text"
              />
            </div>
            <div>
              <h5 className="text-[1vw] max-sm:text-[3vw] font-semibold mb-2">MESSAGE</h5>
              <input
                className="bg-[#232325] w-full h-[6vw] max-sm:h-[18vw] rounded-lg py-2 px-2 text-[#FFFBF9]"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex justify-end">
              <div className="sendButton border-[2px] border-black rounded-3xl flex justify-center px-4 py-[0.5vw] mt-6 w-[17vw] max-sm:w-[50vw]">
                <h2 className="font-semibold">
                  SEND MESSAGE{" "}
                  <span className="sendArrow ml-2">
                    <i class="ri-arrow-right-up-line"></i>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="movingTextContainer flex gap-[4vw] max-sm:gap-[10vw] overflow-hidden absolute left-[-13%] max-sm:top-[89%] top-[77%]">
          <div className="movingText flex">
            <h1 className="text-[#FEFAF8] text-[9vw] max-sm:text-[15vw] tracking-tighter">StudioLux </h1>
            <span className="mt-12 max-sm:mt-[2vw]">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FEFAF8"
                className="max-sm:w-[15px]"
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
            </span>
          </div>
          <div className="movingText flex">
            <h1 className="text-[#FEFAF8] text-[9vw] max-sm:text-[15vw] tracking-tighter">StudioLux </h1>
            <span className="mt-12 max-sm:mt-[2vw]">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FEFAF8"
                className="max-sm:w-[15px]"
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
            </span>
          </div>
          <div className="movingText flex">
            <h1 className="text-[#FEFAF8] text-[9vw] max-sm:text-[15vw] tracking-tighter">StudioLux </h1>
            <span className="mt-12 max-sm:mt-[2vw]">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FEFAF8"
                className="max-sm:w-[15px]"
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
            </span>
          </div>
          <div className="movingText flex">
            <h1 className="text-[#FEFAF8] text-[9vw] max-sm:text-[15vw] tracking-tighter">StudioLux </h1>
            <span className="mt-12 max-sm:mt-[2vw]">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FEFAF8"
                className="max-sm:w-[15px]"
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
            </span>
          </div>
          <div className="movingText flex">
            <h1 className="text-[#FEFAF8] text-[9vw] max-sm:text-[15vw] tracking-tighter">StudioLux </h1>
            <span className="mt-12 max-sm:mt-[2vw]">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FEFAF8"
                className="max-sm:w-[15px]"
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
            </span>
          </div>
        </div>
      </div>
      <div className="px-[3vw] mt-[17vw] max-sm:mt-[32vw]">
        <hr />
      </div>
      <div className="px-[3vw] text-[#FEFAF8] mt-[3vw] flex max-sm:flex-col gap-12 max-sm:gap-[2vw]">
            <p className="text-[1vw] max-sm:text-[3.5vw]">© 2024 - StudioLux by Rocket Web Labs. All rights reserved.</p>
            <p className="text-[1vw] max-sm:text-[3.5vw] mb-[4vw]">Privacy Policy</p>
      </div>
    </div>

    
  );
}

export default Contact;
