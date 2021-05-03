import React from 'react';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import stackoverflow from '../../images/stackoverflow.svg';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import './styles.scss';

const SocialBar = () => {
    return (
        <section className="social">
            <ul className="list">
                <li className="item">
                    <a href="https://www.instagram.com/trippyonroad" target="_blank">
                        <img src={instagram} alt="social-link: instagram"/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://www.linkedin.com/in/karan-singh/" target="_blank">
                        <img src={linkedin} alt="social-link: linkedin"/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://github.com/karan1205" target="_blank">
                        <img src={github} alt="social-link: github"/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://stackoverflow.com/users/6406198/karan-singh" target="_blank">
                        <img src={stackoverflow} alt="social-link: stackoverflow"/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://twitter.com/karan1205singh" target="_blank">
                        <img src={twitter} alt="social-link: twitter"/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://www.facebook.com/ksv1205" target="_blank">
                        <img src={facebook} alt="social-link: facebook"/>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default SocialBar;