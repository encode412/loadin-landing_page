const TestimonialCard = ({text}) => {
  return (
    <div className='mt-6 ml-auto md:ml-8' id="learn">
    {/* <h2 className='text-2xl md:text-3xl md:ml-14 text-center ml-5 font-normal mt-10'>{text}</h2> */}
    <div className='grid md:grid-cols-3 gap-2 '>
        <div className="card p-0 rounded-none card-compact h-[430px] md:w-[380px] my-4 w-[350px] mx-auto  bg-base-100">
    <figure><img src="/images/load.jpg" alt="Shoes" /></figure>
    <div className="card-body !flex-none !p-0">
      <h2 className="card-title py-4">Load!</h2>
      <p className="grow-0 font-light mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi rem debitis recusandae, necessitatibus unde harum, veritatis officiis et eligendi, dolor accusamus aspernatur commodi. Aut esse aperiam maxime possimus aliquid.</p>
      <div className="card-actions justify-start">
     <button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>
  <div className="card p-0 rounded-none card-compact h-[430px] md:w-[380px] w-[350px] mx-auto my-4 bg-base-100">
    <figure><img src="/images/img0.jpg" alt="Shoes" /></figure>
    <div className="card-body !p-0">
      <h2 className="card-title py-4">Load</h2>
      <p className="grow-0 font-light mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi rem debitis recusandae, necessitatibus unde harum, veritatis officiis et eligendi, dolor accusamus aspernatur commodi. Aut esse aperiam maxime possimus aliquid.</p>
      <div className="card-actions justify-start">
        <button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>
  <div className="card p-0 rounded-none card-compact h-[430px] md:w-[380px] w-[350px] my-4 mx-auto  bg-base-100">
    <figure><img src="/images/load4.jpg" alt="Shoes" /></figure>
    <div className="card-body !p-0">
      <h2 className="card-title py-4">Load!</h2>
      <p className="grow-0 font-light mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi rem debitis recusandae, necessitatibus unde harum, veritatis officiis et eligendi, dolor accusamus aspernatur commodi. Aut esse aperiam maxime possimus aliquid.</p>
      <div className="card-actions justify-start">
<button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>

    </div>
    </div>
  );
};

export default TestimonialCard;
