import React, {Fragment, lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialBar from './components/Socialbar';
import './scss/styles.scss';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */'./pages/Home'));
const Travel = lazy(() => import(/* webpackChunkName: 'Travel' */'./pages/Travel'));
const Tech = lazy(() => import(/* webpackChunkName: 'Tech' */'./pages/Tech'));

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
                        <Route path="*" render={() => "Not Found"}/>
                    </Switch>
                </Suspense>
            </main>
        </Fragment>
    )
};

export default App;