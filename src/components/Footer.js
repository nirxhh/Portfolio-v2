import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="mm-container">
                <div className="mm-footer-part1">
                    <h3>Let's sublimate the chaos together</h3>
                    <a href=""><span>Contact</span></a>
                </div>
                <canvas id="waves"></canvas>
            </div>
            <div className="mm-footer-part2">
                <svg id="valere-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.21 58.28">
                    {/* Ajoutez ici le contenu SVG */}
                </svg>
            </div>
        </footer>
    );
}

export default Footer;