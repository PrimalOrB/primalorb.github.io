import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import Background from './components/Background'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {

    const [ allPages ] = useState( [
        'about', 'work', 'contact', 'resume'
    ] )

    const [ currentPage, setCurrentPage ] = useState( allPages[0] )

    useEffect( () => {
        document.title = `Andrew Ogilvie - ${ capitalizeFirstLetter( currentPage ) }`
    }, [ currentPage ] )

    return (
        <div className="page">
            <Background />
            <section className="container">
                <Header currentPage={ currentPage } allPages={ allPages } setCurrentPage={ setCurrentPage }/>
                <section className="content-wrapper">
                    <Switch>
                        <Route exact path="/"> 
                            <About />
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
            </section>
        </div>
    )
}

export default App;