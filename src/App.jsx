import { Fragment } from "react";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesCard from "./components/FeaturesCard";
import TestimonialCard from "./components/TestimonialCard";
import FrequentQuestions from "./components/FrequentQuestions";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Carousel />
      {/* <h2 className='text-2xl md:text-3xl text-start md:ml-14 text-center ml-5 font-normal mt-10'>Move your heavy loads of various sizes</h2> */}
      <FeaturesCard text='Move your heavy loads of various sizes'/>
      {/* <h2 className='text-xl md:text-3xl md:ml-12 text-start md:text-center ml-6 md:ml-0 font-normal mt-10'></h2> */}
      <FeaturesCard text='Move your heavy loads of various sizes'/>
      <div className="flex-grow border-t border-gray-300 mt-8"></div>
      <h2 className='text-xl md:text-3xl md:ml-12 text-center ml-0 font-normal mt-10 uppercase'>Features | Updates</h2>
      <TestimonialCard />
      <FrequentQuestions />
      <CTA />
      <Footer />
    </Fragment>
  );
}

export default App;
