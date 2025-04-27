'use client';
import AboutMe from './home/partials/about';
import ContactForm from './home/partials/contact-form';
import Experiences from './home/partials/experiences';
import FAQS from './home/partials/faqs';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import ProfesionalWork from './home/partials/profesional-work';
import SelectedWork from './home/partials/selected-work';
import Services from './home/partials/services';
import Skiils from './home/partials/skills';
import Testimonials from './home/partials/testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Skiils />
      <Experiences />
      <ProfesionalWork />
      <SelectedWork />
      <Testimonials />
      <FAQS />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
