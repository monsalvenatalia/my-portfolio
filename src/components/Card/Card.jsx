import { useState } from "react";
import "./Card.css";

export default function Card({ title, image, description }) {
    const [flipped, setFlipped] = useState(false);

    function handleFlip() {
        setFlipped((current) => {
            return !current;
        });
    }

    return (
        <div 
            className={`card-container ${flipped ? "flipped": ""}`}
            onClick= {handleFlip}
        >
            <div className="card-inner">
                <div
                    className="card-front"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <h3>{title}</h3>
                </div>
                <div className="card-back">
                    <div className="card-back-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}