import FeaturedWorksBox from './FeaturedWorksBox';

const FeaturedWorks = () => {
  return (
    <div className='relative w-[919px] h-[934.2px] top-[430px] left-[237px]'>
        <h2 className='leading-[32.31px] font-heebo font-[500] lg:text-[22px] text-black pb-8'>Featured Works</h2>
      <div className='mb-10'>
      <FeaturedWorksBox href="./images/img1.svg" property={1310}/>
      </div>
      <div className='mb-10'>
      <FeaturedWorksBox href="./images/img2.svg" property={1601}/>
      </div>
      <div className='mb-10'>
      <FeaturedWorksBox href="./images/img3.svg" property={1892}/>
      </div>
    </div>
  );
};

export default FeaturedWorks;
