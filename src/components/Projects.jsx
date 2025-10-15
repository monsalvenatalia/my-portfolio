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
            <p>Please select a project.</p>
            ) : (
                <div id="tab-content">
                    <h3>{PROJECTS[selectedProject].title}</h3>
                    <p>{PROJECTS[selectedProject].description}</p>
                    <a 
                        href={PROJECTS[selectedProject].link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                    >
                        🔗 View project
                    </a>
                </div>
            )}
        </section>
    );
}