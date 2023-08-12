import React from "react";
// import { useNavigate } from "react-router-dom";
import './Home.styles.css'
import videoBG from '../../assets/videoBG.mp4';

export const Home = () => {
    // let navigate = useNavigate();
    
return (
    <div className='home'>
        <div className="overlay"></div>
        <video src={videoBG} autoPlay loop muted />
        <div className="content">
            <h1>WELCOME</h1>
            <p>To Rye Zone</p>
        </div>
    </div>
    )
}
