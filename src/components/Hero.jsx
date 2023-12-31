const Hero = () => {
  return (
    <div className="hero min-h-[500px]" style={{backgroundImage: 'url(/images/img1.jpg)'}} data-theme="dark">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div>
      <h1 className="md:mb-2 mb-5 md:px-5 text-4xl md:text-8xl font-bold"></h1>
      <p className="mb-5 text-xl md:text-4xl font-normal">A platform for moving heavy loads, and deliveries of bulky goods, for companies or individuals of any size.</p>
      <button className="btn btn-ghost !rounded-none hover:!bg-[#061E45] hover:!text-white hover:!border-none !border-[#ffffff]"><a href="#learn">Learn more</a></button>
    </div>
  </div>
</div>
  )
}

export default Hero