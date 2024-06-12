import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const imagesRef = useRef([]);
    const coverRef = useRef({ frame: 0 });
    const frameCount = 199;

    const currentFrame = index => (
        `images/image-sequence/Cover_V3${(index + 100).toString().padStart(3, '0')}.webp`
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        contextRef.current = context;
        canvas.width = 1920;
        canvas.height = 1080;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            imagesRef.current.push(img);
        }

        gsap.to(coverRef.current, {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
                trigger: '.cs-container',
                start: 'top top',
                endTrigger: 'header',
                end: 'bottom bottom',
                scrub: 1,
            },
            onUpdate: render,
        });

        imagesRef.current[0].onload = render;

        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            const img = imagesRef.current[coverRef.current.frame];
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

        // Scale Animation Canvas
        gsap.to('.cs-wrapper', {
            scrollTrigger: {
                trigger: '.cs-wrapper',
                start: 'top top',
                endTrigger: 'header',
                end: 'bottom bottom',
                scrub: 0.5,
                pin: true,
                pinSpacing: false,
            },
            scale: 0.49,
            borderRadius: '40px',
        });

        // Pin animations
        gsap.to('.lottie-container #lottie-player', { 
            scrollTrigger: {
                trigger: '.lottie-container',
                start: 'top top',
                endTrigger: 'header',
                end: 'bottom bottom',
                scrub: 0.5,
                pin: true,
                pinSpacing: false,
            },
            width: '50%',
        });

        gsap.to('.h-txt-container', { 
            scrollTrigger: {
                trigger: '.h-txt-container',
                start: 'top top',
                endTrigger: 'header',
                end: 'bottom bottom',
                scrub: 0.5,
                pin: true,
                pinSpacing: false,
            },
        });

        // Lottie Animation
        const animationContainer = document.getElementById('lottie-player');
        const animation = lottie.loadAnimation({
            container: animationContainer, // the DOM element
            path: 'lottie/vlr.json', // the path to the animation json
            renderer: 'svg',
            loop: false,
            autoplay: true,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });

        animation.addEventListener('DOMLoaded', function() {
            console.log('Lottie animation loaded successfully.');
        });

        animation.addEventListener('error', function(error) {
            console.error('Lottie animation failed to load:', error);
        });

        window.addEventListener('load', () => {
            render();
            gsap.delayedCall(0.1, ScrollTrigger.refresh);
        });
    }, []);

    return (
        <header>
            <div className="cs-container">
                <div className="cs-wrapper">
                    <canvas id="is-canv" ref={canvasRef}></canvas>
                </div>
            </div>
            <div className="lottie-container">
                <div id="lottie-player"></div>
            </div>
            <div className="h-txt-container">
                <div className="h-txt-wrapper">
                    <div className="h-txt-grp1">
                        <span>graphic</span>
                        <span>motion</span>
                        <span>3D and web</span>
                    </div>
                    <div className="h-txt-grp2">
                        <span>designer</span>
                        <span>designer</span>
                        <span>designer</span>
                    </div>
                </div>
                <div className="h-txt-wrapper">
                    <div className="h-txt-grp1">
                        <span>made with</span>
                        <span>made with</span>
                        <span>made with</span>
                    </div>
                    <div className="h-txt-grp2">
                        <span>passion</span>
                        <span>heart</span>
                        <span>vision</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
