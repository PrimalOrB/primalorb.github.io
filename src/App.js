import React from 'react'
import Background from './components/Background'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

// import './styles.css'



function App() {
  return (
    <div className="page">
        <Background />
        <Header />
        <section className="sub-wrapper">
        <About />
        </section>
        <Footer />
    </div>
  )
}

export default App;
