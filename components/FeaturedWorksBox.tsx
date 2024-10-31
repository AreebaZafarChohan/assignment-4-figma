import { FeaturedWorksProps } from "@/types/componentTypes";
import Image from "next/image";

const FeaturedWorksBox:React.FC<FeaturedWorksProps> = ({href}) => {
  return (
    <div className='flex flex-col md:flex-row justify-start gap-5 items-center'>
    <Image src={`/images/img${href}.svg`} alt={`Work Image ${href}`} width={200} height={200} className='w-full md:w-[246px] md:h-[180px] rounded-md' />
    <div className='flex flex-col justify-start gap-4'>
        <h3 className='font-heebo text-3xl font-bold'>Designing Dashboard</h3>
        <div>
            <span className='bg-customPink text-white px-3 rounded-full mr-2'>2020</span> <span className='text-xl text-[#0000009E] font-heebo'>Dashboard</span>
        </div>
        <p className='font-heebo md:text-lg font-light text-black'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

    </div>
</div>
  );
};

export default FeaturedWorksBox;
