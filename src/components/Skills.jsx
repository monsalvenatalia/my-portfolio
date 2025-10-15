import Card from "./Card/Card.jsx";
import devops from "../assets/devops.jpg";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import complexity from "../assets/complexity.png";
import testing from "../assets/testing.png";
import databases from "../assets/databases.png";
import graphs from "../assets/graphs.png";

const skills = [
  {
    title: "CS concepts 🧮",
    image: complexity,
    description: "Designing algorithms, analyzing computational complexity, and studying automata and computability, with a strong foundation in object-oriented programming with Java."
  },
  {
    title: "Frontend ⚛️",
    image: frontend,
    description: "Building responsive UIs and interactive dashboards with HTML, CSS (Bootstrap), and JavaScript ES6+ using React, integrating real-time data from APIs."
  },
  {
    title: "Backend 🏗️",
    image: backend,
    description: "Developing Django backends with REST APIs, serializers, and custom admin interfaces. Involved in email delivery pipelines (MS Graph integration), and familiar with SAML-based authentication."
  },
  {
    title: "Databases 🗄️",
    image: databases,
    description: "Modeling and optimizing relational databases with PostgreSQL, designing efficient queries, and managing complex data relationships."
  },
  {
    title: "DevOps & CI/CD 🔁",
    image: devops,
    description: "Working with Git, Docker, Jenkins, Helm, and Kubernetes to automate testing, build pipelines, and ensure reliable deployments."
  },
  {
    title: "Testing frameworks 🔍",
    image: testing, 
    description: "Designing automated testing workflows with pytest and static code analysis (kiuwan) tools to maintain clean, reliable, and production-ready code."
  },
  {
    title: "Mathematics & Graphs 📐",
    image: graphs,
    description: "Exploring optimization and graph algorithms. My thesis applied game theory to design interaction indices for link prediction and community detection in networks."
  }
];

export default function Skills() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="cards-grid">
                {skills.map((s, i) => (
                    <Card key={i} {...s} />
                ))}
            </div>
        </section>
    );
}