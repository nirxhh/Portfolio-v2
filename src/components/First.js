import React, { useEffect } from 'react';
import projects from '../projectsData/projectsData';


const First = () => {
    useEffect(() => {
        const hoverDivs = document.querySelectorAll('.mm-works-container');

        if (hoverDivs.length > 0) {
            hoverDivs.forEach(hoverDiv => {
                const videoContainer = hoverDiv.querySelector('.mm-works-images');
                if (videoContainer) {
                    const video = videoContainer.querySelector('video');
                    let isPlaying = false;

                    const handleMouseEnter = () => {
                        if (video && !isPlaying) {
                            video.style.opacity = '1';
                            video.currentTime = 0;
                            video.play().then(() => {
                                isPlaying = true;
                            }).catch(error => {
                                console.error('Error playing video:', error);
                            });
                        }
                    };

                    const handleMouseLeave = () => {
                        if (video && isPlaying) {
                            video.pause();
                            video.style.opacity = '0';
                            isPlaying = false;
                        }
                    };

                    hoverDiv.addEventListener('mouseenter', handleMouseEnter);
                    hoverDiv.addEventListener('mouseleave', handleMouseLeave);

                    return () => {
                        hoverDiv.removeEventListener('mouseenter', handleMouseEnter);
                        hoverDiv.removeEventListener('mouseleave', handleMouseLeave);
                    };
                }
            });
        }
    }, []);

    return (
        <main>
            <section className="mm-intro">
                <div className="mm-container">
                    <div className="mm-intro-wrapper">
                        <small>That's what I do</small>
                    </div>
                </div>
            </section>
            <svg className="separator separator-white" viewBox="0 0 100 10">
                <path className="separator__path path-anim" d="M 0 0 C 40 10 60 10 100 0 L 0 0 Z"
                    data-path-to="M 0 0 C 40 0 60 0 100 0 L 0 0 Z" vectorEffect="non-scaling-stroke" />
            </svg>
            <section id="mm-works">
                <div className="mm-container">
                    <h2>WORKS</h2>
                    <div className="mm-works-wrapper">
                        {projects.map(project => (
                            <div className="mm-works-container" id={project.id} key={project.id}>
                                <a href={project.aLink}>
                                    <div className="mm-works-txt-container">
                                        <div className="mm-works-txt">
                                            <h3>{project.title}</h3>
                                            <div className="mm-works-label-container">
                                                {project.labels.map((label, index) => (
                                                    <span key={index}>{label}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <svg className="arrow-up" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 147.2 147.2">
                                            <path d="M6.01,141.19L141.19,6.01C88.86,58.34,38.53,38.53,9.89,9.89" />
                                            <path d="M6.01,141.19L141.19,6.01c-52.33,52.33-32.52,102.66-3.88,131.3" />
                                        </svg>
                                    </div>
                                    <div className="mm-works-images">
                                        <img src={project.imgSrc} alt={project.altText} loading="lazy" />
                                        {project.videoSrc && <video src={project.videoSrc} muted loop preload="none"></video>}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <svg className="separator separator-black" viewBox="0 0 100 10">
                <path className="separator__path path-anim" d="M 0 0 C 40 0 60 0 100 0 L 0 0 Z"
                    data-path-to="M 0 0 C 40 10 60 10 100 0 L 0 0 Z" vectorEffect="non-scaling-stroke" />
            </svg>
        </main>
    );
};

export default First;
