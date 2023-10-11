import './styles.css'
const Carousel = () => {
  return (
    <div className=' hidden md:block'>
      <div className='carousel w-full' data-theme="dark">
        <div id='item1' className='carousel-item w-full'>
            <div className='carousel-1'>
                <div className='gradient'>
                    <div className="flex flex-col px-24 py-24 text-black">
                        <h3 className="font-bold text-white text-4xl mb-6">The Uber you know, reimagined for business</h3>
                        <span className='text-lg text-semibold mb-6'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</span>
                        <button className="!text-[#2b3d54] w-[20%] btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
                    </div>
                </div>
            </div>
         
          
        </div>
        <div id='item2' className='carousel-item w-full'>
            <div className='carousel-1'>
                <div className='gradient'>
                    <div className="flex flex-col px-24 py-24 text-black">
                        <h3 className="font-bold text-4xl mb-6 ">The Uber you know, reimagined for business</h3>
                        <span className='text-lg font-semibold mb-6'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</span>
                        <button className="!text-[#2b3d54] w-[20%] btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
                    </div>
                </div>
            </div>
         
          
        </div>
        <div id='item3' className='carousel-item w-full'>
            <div className='carousel-1'>
                <div className='gradient'>
                    <div className="flex flex-col px-24 py-24 text-black">
                        <h3 className="font-bold text-4xl mb-6">The Uber you know, reimagined for business</h3>
                        <span className='text-lg text-semibold mb-6'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</span>
                        <button className="!text-[#2b3d54] w-[20%] btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
                    </div>
                </div>
            </div>
         
          
        </div>
        <div id='item4' className='carousel-item w-full'>
            <div className='carousel-1'>
                <div className='gradient'>
                    <div className="flex flex-col px-24 py-24 text-black">
                        <h3 className="font-bold text-4xl mb-6">The Uber you know, reimagined for business</h3>
                        <span className='text-lg text-semibold mb-6'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</span>
                        <button className="!text-[#2b3d54] w-[20%] btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
                    </div>
                </div>
            </div>
         
          
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
         1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
