import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="absolute w-[1440px] h-[800px]  left-[-2.5px]">
      <div className="absolute w-[521px] h-[305px] top-[249px] left-[231px]">
        <h1 className="font-heebo font-[900] text-[48px] md:text-[48px] leading-[61px] text-customBlue pb-6">Hi, I am John, <br />
        Creative Technologist</h1>
        <p className="font-heebo font-normal text-[16px] leading-[23.5px] pb-5">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className="bg-customPink absolute w-[205px] h-[50px] text-white font-heebo font-[500px] text-lg rounded-sm hover:bg-customBlue transition-colors duration-300 ease-linear" style={{boxShadow: "0 4px 4px 0 #4141418a"}}>Download Resume</button>
      </div>
      <div className="absolute w-[298px] h-[308px] top-[246px] left-[963px]">
        <Image 
        src="./images/image.svg"
        alt="Hero Section Image"
        width={298}
        height={308}
        className=""
        />
      </div>
    </section>
  );
};

export default HeroSection;