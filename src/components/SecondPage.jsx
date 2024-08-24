function SecondPage() {
  return (
    <div className="w-full min-h-screen bg-[#151515]">
      <div className="movingAnimation pt-[5vw] flex flex-nowrap gap-[4vw] overflow-hidden whitespace-nowrap">
        <div className="movingAnimation-wrapper flex gap-[4vw]">
          <img className="w-[10vw]" src="/images/image1.webp" alt="" />
          <img className="w-[10vw]" src="/images/image2.webp" alt="" />
          <img className="w-[10vw]" src="/images/image3.webp" alt="" />
          <img className="w-[10vw]" src="/images/image4.webp" alt="" />
          <img className="w-[10vw]" src="/images/image5.webp" alt="" />
          <img className="w-[10vw]" src="/images/image6.webp" alt="" />
          <img className="w-[10vw]" src="/images/image7.webp" alt="" />
          <img className="w-[10vw]" src="/images/image8.webp" alt="" />

          <img className="w-[10vw]" src="/images/image1.webp" alt="" />
          <img className="w-[10vw]" src="/images/image2.webp" alt="" />
          <img className="w-[10vw]" src="/images/image3.webp" alt="" />
          <img className="w-[10vw]" src="/images/image4.webp" alt="" />
          <img className="w-[10vw]" src="/images/image5.webp" alt="" />
          <img className="w-[10vw]" src="/images/image6.webp" alt="" />
          <img className="w-[10vw]" src="/images/image7.webp" alt="" />
          <img className="w-[10vw]" src="/images/image8.webp" alt="" />
        </div>
      </div>
      <div className="grids mt-[7vw] px-[3vw] flex gap-[1.5vw]">
        <div className="container w-[30vw] h-[26vw] border-2 border-white rounded-[5vw] rounded-tr-none relative">
          <div className="asterisk absolute top-[3vw] right-[3vw] transition-transform duration-500 ease-in-out">
            <img
              className="asteriskLogo w-[6vw]"
              src="/images/asterisk.svg"
              alt=""
            />
          </div>
          <div className="px-10 flex flex-col gap-2">
            <h2 className="text-[#C29671] text-[4vw] tracking-tighter mt-[7vw]">
              Agents
            </h2>
            <p className="text-[#FFFBF9] capitalize tracking-normal">
              We work with agents to create custom websites with MLS integration
              and marketing solutions that enhance their brand.
            </p>
            <a className="links" href="">
              <h2 className="linkHead text-[#FFFBF9]">
                GET STARTED{" "}
                <span className="linkArrow text-[#C29671]">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </h2>
            </a>
          </div>
        </div>
        <div className="container w-[30vw] border-2 border-white rounded-[4vw] rounded-tr-none relative">
          <div className="asterisk absolute top-[3vw] right-[3vw] transition-transform duration-500 ease-in-out">
            <img
              className="asteriskLogo w-[6vw]"
              src="/images/asterisk.svg"
              alt=""
            />
          </div>
          <div className="px-10 flex flex-col gap-2">
            <h2 className="text-[#C29671] text-[4vw] tracking-tighter mt-[7vw]">
              Offices
            </h2>
            <p className="text-[#FFFBF9] capitalize tracking-tight">
              StudioLux collaborates with real estate offices to develop digital
              strategies and branded platforms that drive office-wide success
              and engagement.
            </p>
            <a className="links" href="">
              <h2 className="linkHead text-[#FFFBF9]">
                GET STARTED{" "}
                <span className="linkArrow text-[#C29671]">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </h2>
            </a>
          </div>
        </div>
        <div className="container w-[30vw] border-2 border-white rounded-[4vw] rounded-tr-none relative">
          <div className="asterisk absolute top-[3vw] right-[3vw] transition-transform duration-500 ease-in-out">
            <img className="w-[6vw]" src="/images/asterisk.svg" alt="" />
          </div>
          <div className="px-10 flex flex-col gap-2">
            <h2 className="text-[#C29671] text-[4vw] tracking-tighter mt-[7vw]">
              Developers
            </h2>
            <p className="text-[#FFFBF9] capitalize tracking-tight">
              We work with developers to design websites and marketing tools
              that showcase their projects, attract buyers, and build a strong
              market presence.
            </p>
            <a className="links" href="">
              <h2 className="linkHead text-[#FFFBF9]">
                GET STARTED{" "}
                <span className="linkArrow text-[#C29671]">
                  <i class="ri-arrow-right-up-line"></i>
                </span>
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
