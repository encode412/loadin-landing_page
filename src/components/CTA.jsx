import { AiOutlineArrowRight } from "react-icons/ai";
const CTA = () => {
  return (
    <div className="mx-6 md:mx-16 mt-10 ">
    <div className='hidden md:block'>
      <div className='bg-base-200 p-6 mt-6 rounded '>
        <h2 className='text-3xl font-bold'>Start using Loadin today</h2>
        <div className='grid md:grid-cols-2 gap-10 hover:cursor-pointer'>
          <div className='flex align-center p-20 text-2xl font-medium'>
            <div className='hover:underline'>Download the Loadin app</div>
            <div className='mt-2 ml-24 hover:cursor-pointer'>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className='flex align-center p-20 text-2xl font-medium hover:underline '>
            Become a Loadin Driver
            <div className='mt-2 ml-24'>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='block md:hidden'>
      <h2 className='text-2xl font-bold'>Start using Loadin today</h2>
        <div className=' '>
          <div className='grid'>
            <div className='p-8 bg-base-200 p-2 mt-6 rounded flex justify-center align-center'>
            <div className='hover:underline text-2xl font-medium'>Download the Loadin app</div>
              <div className='mt-8 text-xl ml-12 hover:cursor-pointer'>
              <AiOutlineArrowRight />
            </div>
            </div>
            <div className='p-8 bg-base-200 p-2 mt-6 rounded flex justify-center align-center'>
            <div className='hover:underline text-2xl font-medium'>Download the Loadin app</div>
              <div className='mt-8 text-xl ml-12 hover:cursor-pointer'>
              <AiOutlineArrowRight />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
