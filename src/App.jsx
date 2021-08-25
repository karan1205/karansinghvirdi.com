import React, {Fragment, lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialBar from './components/Socialbar';
import './scss/styles.scss';
import {VideoPlayer} from "./components/VideoPlayer";

const Home = lazy(() => import(/* webpackChunkName: 'Home' */'./pages/Home'));
const Travel = lazy(() => import(/* webpackChunkName: 'Travel' */'./pages/Travel'));
const Tech = lazy(() => import(/* webpackChunkName: 'Tech' */'./pages/Tech'));
const Contact = lazy(() => import(/* webpackChunkName: 'Contact' */'./pages/Contact'));

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <SocialBar />
            <main className="main">
                <Suspense fallback="loading">
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route exact path="/travel" render={() => <Travel/>}/>
                        <Route exact path="/tech" render={() => <Tech/>}/>
                        <Route exact path="/contact" render={() => <Contact/>}/>
                        <Route path="*" render={() => "Not Found"}/>
                    </Switch>
                </Suspense>
            </main>
            <VideoPlayer id="knkdsnfndksfds"
                          srcUrl="https://media-gsam.akamaized.net/library/Delivery/45/0e/450e36ed-ca4c-4881-abe2-ad0d09f98a36/master.m3u8"
                         width="852"
                         height="526"
                         stretching="responsive"
            />
        </Fragment>
    )
};

export default App;