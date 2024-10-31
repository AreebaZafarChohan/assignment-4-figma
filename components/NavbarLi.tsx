import { NavbarLiProps } from '@/types/componentTypes';
import Link from 'next/link';

const NavbarLi: React.FC<NavbarLiProps> = ({name, href}) => {
  return (
    <div>
       <Link className='text-black text-sm md:text-xl hover:text-customPink transition-colors duration-200' href={href}>{name}</Link>
    </div>
  );
};

export default NavbarLi;
