import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-[1440px] h-[67px] top-[-2px] ">
      <ul className="absolute w-[283px] h-[24px] top-[66px]">
        <Link
          href="/"
          className="absolute left-[1088px] text-black text-sm md:text-xl lg:text-[20px] sm:text-xl hover:text-customPink transition-colors duration-300 ease-in-out font-[500]"
        >
          Works
        </Link>

        <Link
          href="/"
          className="absolute left-[1201px] text-black text-sm md:text-xl lg:text-xl sm:text-xl hover:text-customPink transition-colors duration-300 ease-in-out "
        >
          Blog
        </Link>

        <Link
          href="/"
          className="absolute left-[1294px] text-black text-sm md:text-xl lg:text-xl sm:text-xl hover:text-customPink transition-colors duration-300 ease-in-out "
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
