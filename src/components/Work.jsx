function Work() {
  const headings = [
    "AGENT WEBSITE",
    "AGENT WEBSITE TEMPLATE",
    "AGENT WEBSITE TEMPLATE",
  ];

  const largeHeadings = [
    "Coastal Vacation Estates",
    "Victor Park Realty",
    "Diamond Realty Group",
  ];

  const contexts = [
    "Coastal Vacation Estates wanted a Wix real estate website with MLS listings from the California Regional MLS (CRMLS).",
    "Victor Park Realty is a favoured template available in 3 versions. Features a map search, open houses and home valuation.",
    "A sophisticated real estate office template that features all agent MLS office listings, team profiles, and a neighbourhood guide.",
  ];

  const linkTags = ["VIEW WEBSITE", "REQUEST A DEMO", "REQUEST A DEMO"];

  const images = [
    "./images/image1st.webp",
    "./images/image2nd.webp",
    "./images/image3rd.webp",
  ];

  const arrows = (
    <span className="text-[1.1vw] font-thin">
      <i className="ri-arrow-right-up-line"></i>
    </span>
  );

  const newHeadings = ["OFFICE WEBSITE TEMPLATE", "DEVELOPER WEBSITE TEMPLATE"];
  const newLargeHeadings = ["Everly James", "The Astralis"];
  const newContexts = [
    "Our Everly James template has a soft and lighter aesthetic. Featuring MLS integration, a Home Valuation, and Email Alerts.",
    "This sleek and modern template utilizes 3D elements and interactive animations to captivate and engage potential buyers.",
  ];
  const newLinkTags = ["REQUEST A DEMO", "REQUEST A DEMO"];
  const newImages = ["./images/image4th.webp", "./images/image5th.webp"];

  const Box = ({ heading, largeHeading, context, linkTag, image, arrow }) => (
    <div className="w-[28vw] h-[43vw] bg-[#151515] rounded-[4vw] transform transition-all 0.25s hover:-translate-y-5">
      <h2 className="text-white text-[1vw] p-7 font-semibold tracking-wide">
        {heading}
      </h2>
      <h3 className="text-[#C29671] text-[2.8vw] leading-[2.8vw] italic px-8 font-semibold tracking-wide">
        {largeHeading}
      </h3>
      <p className="text-white text-[1vw] px-8 font-normal tracking-wide mt-6">
        {context}
      </p>
      <div className="links text-white text-[1vw] px-8 font-semibold tracking-wide mt-6">
        <a className="link">
          {linkTag} &nbsp;&nbsp;
          <span className="linkArrows text-[#B28A68]">{arrow}</span>{" "}
        </a>
      </div>
      <img
        className="w-full object-cover rounded-[4vw] mt-[4vw]"
        src={image}
        alt=""
      />
    </div>
  );

  const SecondBox = ({
    heading,
    largeHeading,
    context,
    linkTag,
    image,
    arrow,
  }) => (
    <div className="w-[43vw] bg-[#151515] rounded-[4vw] transform transition-all 0.25s hover:-translate-y-7">
      <h2 className="text-white text-[1vw] p-7 font-semibold tracking-wide">
        {heading}
      </h2>
      <h3 className="text-[#C29671] text-[2.8vw] leading-[2.8vw] italic px-8 font-semibold tracking-wide">
        {largeHeading}
      </h3>
      <p className="text-white text-[1vw] px-8 font-normal tracking-wide mt-6">
        {context}
      </p>
      <div className="links text-white text-[1vw] px-8 font-semibold tracking-wide mt-6">
        <a className="link">
          {linkTag} &nbsp;&nbsp;
          <span className="linkArrows text-[#B28A68]">{arrow}</span>{" "}
        </a>
      </div>
      <img
        className="w-full object-cover rounded-[4vw] mt-[4vw]"
        src={image}
        alt=""
      />
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#151515] pt-[7vw] px-[3vw]">
      <div className="wrapper w-full h-full relative">
        <img
          className="w-full h-full object-cover rounded-[4vw] rounded-tr-none"
          src="./images/AS.webp"
          alt=""
        />
        <div className="absolute top-[3%] left-[4%] w-[16.5vw] h-[3vw] border-2 border-black rounded-3xl flex items-center justify-center gap-2 px-3">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
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
          <h3 className="font-semibold text-[18px]">OUR LATEST WORK</h3>
        </div>

        <div className="absolute top-[7%] left-[4%]">
          <h1 className="animateText text-[5.5vw] leading-[5.5vw] tracking-tighter">
            Here is some stuff <br />
            we’re pretty proud of
          </h1>
        </div>

        <div className="absolute top-[19%] left-[4%] flex gap-4">
          {headings.map((heading, index) => (
            <Box
              key={index}
              heading={heading}
              largeHeading={largeHeadings[index]}
              context={contexts[index]}
              linkTag={linkTags[index]}
              arrow={arrows}
              image={images[index]}
            />
          ))}
        </div>

        <div className="absolute top-[56%] left-[4%] flex gap-4">
          {newHeadings.map((newHeading, index) => (
            <SecondBox
              key={index}
              heading={newHeading}
              largeHeading={newLargeHeadings[index]}
              context={newContexts[index]}
              linkTag={newLinkTags[index]}
              arrow={arrows}
              image={newImages[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
