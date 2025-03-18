import React from 'react';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection />
      <h1 className='serviceh1' id='services'>------- Our Services -------</h1>
      <div className="service-cards">
        <ServiceCard 
          title="Web Development" 
          description="We provide one of the best website development" 
          icon="/src/assets/webd.jpg" 
        />
        <ServiceCard 
          title="App Development" 
          description="Most user friendly app creation for both Android and iOS" 
          icon="/src/assets/app.jpg" 
        />
        <ServiceCard 
          title="SEO Services" 
          description="Optimizing websites for search engines." 
          icon="src/assets/seo.jpg" 
        />
      </div>
      <h1 className='planh1' id='plans'>------- Our Plans -------</h1>
      <PricingTable />
      <SearchBar />
      <ContactForm />
    </div>
  );
};

export default App;

