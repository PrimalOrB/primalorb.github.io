import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Background from './components/Background'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

    const [ allPages ] = useState( [
        'about', 'work', 'contact', 'resume'
    ] )

    const [ currentPage, setCurrentPage ] = useState( undefined )

    return (
        <div className="page">
            <Background />
            <Header currentPage={ currentPage } allPages={ allPages } setCurrentPage={ setCurrentPage }/>
            <section className="content-wrapper">
                <Switch>
                    <Route exact path="/"> 
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                </Switch>
            </section>
            <Footer />
        </div>
    )
}

export default App;
