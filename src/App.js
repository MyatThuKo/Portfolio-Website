import React from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer'
import resumeData from './components/resume/resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About />
      <Resume />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
