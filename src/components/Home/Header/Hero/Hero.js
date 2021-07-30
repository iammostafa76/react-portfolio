import React from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
const Hero = () => {
    return (
        <div className="hero-area bg-color1" id="hero">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 hero-content">
                        <div className="follow-links">
                            <ul>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://github.com/amirmostofaa"> <i class="fab fa-github"></i></a></li>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://www.linkedin.com/in/amirmostofaa/"> <i class="fab fa-linkedin-in"></i></a></li>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://medium.com/@amirmostofaa"><i className="fab fa-medium-m"></i> </a></li>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://twitter.com/amirmostofaa"> <i className="fab fa-twitter"></i></a></li>
                            </ul>
                            <p className="fw-bold text-color2 bg-color2 p-1 px-3">FOLLOW ME</p>
                        </div>
                        <div className="hero-text">
                            <h5>Hello! I am</h5>
                            <h1>Amir Mostofaa</h1>
                            <h4>Front end Developer</h4>

                            <div className="action pt-4">
                                <button className="me-3 resume button">Get Resume</button>
                                <a href="#about">
                                    <button className="button" >About Me</button>
                                </a>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;