import React from 'react'
import { Link } from 'react-router-dom'

// Import images
import Logo from "../assets/Actual-Logo.png";

const Downloads = () => {
    return (
        <>
            <div id="traffic">
                <div id="traffic-heading">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <h1>Downloads</h1>
                    <Link id="goback-btn" to="/">
                        Go Back
                    </Link>
                </div>
                <div id="traffic-content">
                    <div class="content-box">
                        <h1>Hello</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                    <div class="content-box">
                        <h1>Hello</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                    <div class="content-box">
                        <h1>Hello</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                    <div class="content-box">
                        <h1>Hello</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                    <div class="content-box">
                        <h1>Hello</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Downloads