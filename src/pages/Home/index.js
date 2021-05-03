import React from 'react';
import {NavLink} from "react-router-dom";
import heroImage from 'images/hero-image.jpg';
import './styles.scss';

const Home = () => {
    return (
        <section className="intro">
            <section className="hero">
                <img src={heroImage} alt="karan" />
            </section>
            <section className="text">
                <h1>Hi, I&apos;m Karan,</h1>
                <h1>Web developer who loves to explore new places.</h1>
                <p>Living vicarously through google maps and images.</p>
                <button><NavLink to="/contact">Contact Me</NavLink></button>
            </section>
        </section>
    );
};

export default Home;