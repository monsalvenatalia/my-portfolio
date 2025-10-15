import { useState } from "react";
import avatar from "../../assets/avatar.png";
import './About.css';


export default function About() {
    // const [ showMore, setShowMore ] = useState(false);

    // function handleShowMore() {
    //     setShowMore((current) => {
    //         return !current;
    //     })
    // };

    return (
        <section className="about-container">
            <img src={avatar} alt="Avatar" className="avatar" />
            <h2 className="about-title">Hi, I'm Natalia</h2>
            <p className="about-text">
                I'm a mathematician passionate about computer science, software development and DevOps practices. 
            </p>

           <section className="about-cards">
                <div className="info-card">
                    <h3>My interests</h3>
                    <p>Full Stack Web development, Machine Learning concepts, DevOps practices and environments.</p>
                </div>

                <div className="info-card">
                    <h3>Hobbies</h3>
                    <p>Outside of work, I enjoy hiking, taking pictures and learning languages.</p>
                </div>
           </section>
        </section>
    )
}