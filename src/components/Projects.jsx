import { useState } from "react";
import { PROJECTS } from "./data.js";
import TabButton from "./TabButton/TabButton";

export default function Projects() {
    const [ selectedProject, setSelectedProject ] = useState();
    
    function selectHandler(selectedButton) {
        setSelectedProject(selectedButton);
    }

    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <menu>
                <TabButton
                    isSelected={selectedProject === 'gametheory'}
                    onSelect={() => selectHandler('gametheory')}
                >
                    Interaction Indices
                </TabButton>
                <TabButton
                    isSelected={selectedProject === 'letterboxd'}
                    onSelect={() => selectHandler('letterboxd')}
                >
                    Letterboxd-alike web app
                </TabButton>
                <TabButton
                    isSelected={selectedProject === 'portfolio'}
                    onSelect={() => selectHandler('portfolio')}
                >
                    React portfolio
                </TabButton>
            </menu>
            {!selectedProject ? (
            <p></p>
            ) : (
                <div id="tab-content">
                    <h3>{PROJECTS[selectedProject].title}</h3>

                    <p className="project-extra">{PROJECTS[selectedProject].extra}</p>

                     <ul className="project-list">
                        {PROJECTS[selectedProject].description.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                    
                    <a 
                        href={PROJECTS[selectedProject].link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                    >
                        🔗 GitHub source code
                    </a>
                </div>
            )}
        </section>
    );
}