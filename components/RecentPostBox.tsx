const RecentPostBox = () => {
  return (
    <div className="bg-white w-[483px] h-[356px] border-2 border-transparent hover:border-pink-600 transition-colors duration-300 ease-in-out">
          <h2 className="absolute w-[383.56px] h-[107.53px] top-[38px] left-[35px] font-heebo font-bold text-[26px] leading-[38px]">
            Making a design system from scratch
          </h2>
          <div className="font-heebo leading-[38px] font-normal text-[18px] text-[#000000B2]">
            <p className="absolute h-[42.12px] top-[128px] left-[35.44px] " >12 Feb 2020 </p>
            <p className="absolute w-[109.44px] h-[42.12px] top-[128px] left-[164.5px] ">|</p>
            <p className="absolute h-[42.12px] top-[128px] left-[196.47px] ">Design , Pattern</p>
          </div>
          <p className="absolute w-[391px] h-[129.7px] top-[194.3px] left-[35px] font-heebo font-normal leading-[23.5px] text-customBlue">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
  );
};

export default RecentPostBox;
