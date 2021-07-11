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
                        <Route exact path="/" component={About}/> 
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/work" component={Work}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/resume" component={Resume}/>
                        <Route component={About} />
                    </Switch>
                </section>
                <Footer />
            </section>
        </div>
    )
}

export default App;
