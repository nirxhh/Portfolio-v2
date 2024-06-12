// src/App.js
import React from 'react';
import './assets/styles/main.css';
import './assets/styles/other-styles.css';
import Header from './components/Header';
import First from './components/First';
import Footer from './components/Footer';
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import '@14islands/r3f-scroll-rig/css'
import {DisplaceText} from './components/DisplaceText';


function App() {
    return (
        <div className="App">
            <GlobalCanvas />
            <SmoothScrollbar />
            <Header />
            <DisplaceText font=".assets/fonts/PPEditorialOld-Ultralight.woff2"><span>Hello</span></DisplaceText>
            <First />
            <Footer />
        </div>
    );
}

export default App;