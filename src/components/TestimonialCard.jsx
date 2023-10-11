const TestimonialCard = () => {
  return (
    <div className='grid md:grid-cols-3 gap-2 mt-6 max-w-7xl ml-auto md:ml-8'>
        <div className="card p-0 rounded-none card-compact h-[430px] md:w-[380px] my-4 w-[350px] mx-auto  bg-base-100">
    <figure><img src="/images/load.jpg" alt="Shoes" /></figure>
    <div className="card-body !flex-none !p-0">
      <h2 className="card-title py-4">Shoes!</h2>
      <p className="grow-0 font-light mb-2 ">Afriland Properties lc is a property management, investment and development company, offering end-to-end services Afriland Properties</p>
      <div className="card-actions justify-start">
     <button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>
  <div className="card p-0 rounded-none card-compact h-[430px] md:w-[380px] w-[350px] mx-auto my-4 bg-base-100">
    <figure><img src="/images/img1.jpg" alt="Shoes" /></figure>
    <div className="card-body !p-0">
      <h2 className="card-title py-4">Shoes</h2>
      <p className="grow-0 font-light mb-2">Afriland Properties Plc is a property management, investment and development company, offering end-to-end services Afriland Properties</p>
      <div className="card-actions justify-start">
        <button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>
  <div className="card p-0 rounded-none card-compact h-[430px] md:w-[380px] w-[350px] my-4 mx-auto  bg-base-100">
    <figure><img src="/images/img1.jpg" alt="Shoes" /></figure>
    <div className="card-body !p-0">
      <h2 className="card-title py-4">Shoes!</h2>
      <p className="grow-0 font-light mb-2">Afriland Properties Plc is a property management, investment and development company, offering end-to-end services Afriland Properties</p>
      <div className="card-actions justify-start">
<button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white !border-[#061E45]">Read more</button>
      </div>
    </div>
  </div>

    </div>
  );
};

export default TestimonialCard;
