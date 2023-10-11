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
      <h2 className='text-2xl md:text-3xl text-start md:ml-14 text-center ml-5 font-bold mt-10'>Move your heavy loads of various sizes</h2>
      <FeaturesCard />
      <h2 className='text-xl md:text-3xl md:ml-12 text-center ml-0 font-bold mt-10'>Frequently Asked Questions</h2>
      <FeaturesCard />
      <div className="flex-grow border-t border-gray-300 mt-8"></div>
      <h2 className='text-xl md:text-3xl md:ml-12 text-center ml-0 font-bold mt-10'>Frequently Asked Questions</h2>
      <TestimonialCard />
      <FrequentQuestions />
      <CTA />
      <Footer />
    </Fragment>
  );
}

export default App;