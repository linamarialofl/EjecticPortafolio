import React,{useState} from 'react'
import "./SplashScreen.css"

import Intro from "./Images/INTRO.mp4"

import introMobile from "./Images/celularIntro.mp4";
function SplashScreen() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const showSplash= () => {
        setTimeout(function() {
            document.querySelector(".splash").classList.add("seen");
        }, 1500);
    }
    return (
        <div className="splash" onLoad={showSplash()} >
        <video  src={Intro} autoPlay loop muted ></video>
        </div>
    )
}

export default SplashScreen
