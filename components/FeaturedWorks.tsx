import FeaturedWorksBox from './FeaturedWorksBox';

const FeaturedWorks = () => {
  return (
    <div className='mx-6 sm:mx-20 md:mx-20 lg:mx-40 my-20 w-full'>
        <h2 className='font-heebo font-semibold lg:text-xl text-xl pb-8'>Featured Works</h2>
      <FeaturedWorksBox href="./images/img1.svg"/>
      <FeaturedWorksBox href="./images/img2.svg"/>
      <FeaturedWorksBox href="./images/img3.svg"/>
    </div>
  );
};

export default FeaturedWorks;
