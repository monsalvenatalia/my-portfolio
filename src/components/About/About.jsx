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
                I'm a mathematician turned full-stack developer, passionate about building reliable software and exploring the intersection between programming, data, and infrastructure. 
            </p>

           <section className="about-cards">
                <div className="info-card">
                    <h3>My interests</h3>
                    <p>Full Stack Web development, database design, machine learning models, and DevOps practices.</p>
                    <p>I'm looking forward to deepening my knowledge in cloud services and SaaS solutions.</p>
                </div>

                <div className="info-card">
                    <h3>Hobbies</h3>
                    <p>Outside of work, I love hiking, analog photography, and cinema.</p>
                    <p>I'm passionate about languages and often watch films in their original versions to discover new cultures through them.</p>
                </div>
           </section>
        </section>
    )
}