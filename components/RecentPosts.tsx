import Link from "next/link";
import RecentPostBox from "./RecentPostBox";

const RecentPosts = () => {
  return (
    <section className="bg-[#F4E2E2] absolute w-[1440px] h-[502px] top-[665px]">
      <div className="flex justify-between px-4 md:px-16 lg:px-28 py-6">
        <h1 className="absolute h-[32px] top-[26px] left-[237px] text-black font-[500] font-heebo lg:text-[22px] md:text-[22px] text-[16px]">
          Recent Post
        </h1>
        <Link
          href="/"
          className="absolute h-[32px] top-[26px] left-[1168px] text-customPink font-[500] font-heebo lg:text-[22px] md:text-[22px] text-[16px]"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row mx-4 md:mx-14 lg:mx-40 gap-12 h-auto">
        <div className="absolute left-[238px] top-[78px]">
        <RecentPostBox />
        </div>
        <div className="absolute left-[763px] top-[78px]">
        <RecentPostBox />
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
