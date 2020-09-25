import React from 'react';
import Navbar from "./Components/Navbar"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/about" component={About}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={PageNotFound} exact={true}/>
                </Switch>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
