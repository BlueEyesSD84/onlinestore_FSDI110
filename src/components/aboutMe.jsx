import "./aboutMe.css";
import { useState } from "react";

const AboutMe = () => {
    const [name, setName] = useState(' ');

    const showName = () => {
        setName('Jimmy')
    };

    return (
        <div className="about-me">
        <h1>Hi, My name is</h1>
        <h4>{name}</h4>

        <button onClick={showName}>See my Name</button>
        
        </div>
    );

  };

export default AboutMe;