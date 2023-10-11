const FeaturesCard = ({text, image, imageTwo}) => {
  return (
    <div className='max-w-7xl' id="features">
      <h2 className='text-2xl md:text-3xl md:ml-14 text-center ml-0 px-8 font-normal mt-10'>{text}</h2>
    <div className='mx-auto mt-6'>
      
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 ml-0 md:ml-24 md:gap-0'>
    <div className="card p-0 rounded-none card-compact w-[350px] md:w-[600px] bg-base-100 mx-auto">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body flex-none !p-0">
    <h2 className="card-title py-4 uppercase text-[#2b3d54]">Load!</h2>
      <p className="text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi rem debitis recusandae, necessitatibus unde harum, veritatis officiis et eligendi, dolor accusamus aspernatur commodi. Aut esse aperiam maxime possimus aliquid.  </p>
      <div className="card-actions justify-start">
      <button className="btn !text-[#2b3d54] !font-semibold btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>

  <div className="card p-0 rounded-none card-compact w-[350px] md:w-[500px] bg-base-100 mx-auto">
  {/* <h2 className='text-2xl md:text-3xl text-start  font-bold mt-10'>{text}</h2> */}
    <figure><img src={imageTwo} alt="Shoes" /></figure>
    <div className="!p-0 card-body">
      <h2 className="card-title py-4 uppercase text-[#2b3d54]">Load!</h2>
      <p className="text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi rem debitis recusandae, necessitatibus unde harum, veritatis officiis et eligendi, dolor accusamus aspernatur commodi. Aut esse aperiam maxime possimus aliquid. </p>
      <div className="card-actions justify-start">
        <button className="btn !text-[#2b3d54] !font-semibold btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
};

export default FeaturesCard;
