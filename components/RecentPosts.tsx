import Link from "next/link";
import RecentPostBox from "./RecentPostBox";

const RecentPosts = () => {
  return (
    <div className="w-full h-auto md:h-[502px] bg-[#F4E2E2] pb-10 px-4 md:px-60">
      <div className="flex justify-between py-6">
        <h5 className="font-heebo font-semibold text-lg md:text-[22px]">
          Recent Posts
        </h5>
        <Link
          className="font-heebo font-semibold text-lg md:text-[22px] text-customPink"
          href={"/"}
        >
          View all
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <RecentPostBox />
        <RecentPostBox />
      </div>
    </div>
  );
};

export default RecentPosts;
