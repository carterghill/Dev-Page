import React from 'react';
import Navbar from "./Components/Navbar"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Resources from "./Pages/Resources"
import Contact from "./Pages/Contact"
import './App.css';

const PageNotFound = () => (
    <div>
        <h1>Error - 404</h1>
        <p>The page you've tried to acces does not seem to exist</p>
    </div>
)

function App() {
  return (
    <div className="App">
        <BrowserRouter>

            <Navbar />

            <div className='page'>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={333}
                            classNames='fade-route'
                        >
                        <Switch location={location}>
                            <Route id='route' path="/" component={Home} exact={true}/>
                            <Route id='route' path="/home" component={Home} exact={true}/>
                            <Route id='route' path="/projects" component={Projects} exact={true}/>
                            <Route id='route' path="/about" component={About} exact={true}/>
                            <Route id='route' path="/resources" component={Resources} exact={true}/>
                            <Route id='route' path="/contact" component={Contact} />
                            <Route id='route' component={PageNotFound} exact={true}/>
                        </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />

            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
