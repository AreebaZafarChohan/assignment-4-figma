import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-12 my-10 md:my-40 mx-auto w-full md:w-[1030px]'>

      <div className='flex flex-col justify-start gap-y-5 md:w-1/2 p-5 md:p-0'>
        <h1 className='font-heebo font-extrabold text-4xl md:text-5xl text-customBlue'>Hi, I am John, <br /> Creative Technologist</h1>
        <p className='font-heebo font-normal text-[16px] text-customBlue'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='w-52 h-12 bg-customPink text-white font-heebo font-[500px]  text-lg rounded-sm hover:bg-customBlue transition-colors duration-300 ease-linear' style={{boxShadow: "0 4px 4px 0 #4141418"}}>Download Resume</button>
      </div>

      <div>
        <Image src={"/images/image.svg"} alt={"Hero image"} height={300} width={300} className='rounded-full size-[200px] md:size-[300px]' />
      </div>
    </div>
  );
};

export default HeroSection;