import FeaturedWorksBox from './FeaturedWorksBox';

const FeaturedWorks = () => {
  return (
    <div className='my-20 w-full px-4 md:px-60'>
    <h6 className='font-heebo font-semibold text-lg md:text-[22px]'>Featured Works</h6>
    <div className='flex flex-col gap-20 my-5'>
      <FeaturedWorksBox href={"1"} />
      <FeaturedWorksBox href={"2"} />
      <FeaturedWorksBox href={"3"} />
          </div>
  </div>
  );
};

export default FeaturedWorks;
