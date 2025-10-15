export const PROJECTS = {
  gametheory: {
    title: "Game-theoretic Interaction Indices for Link Prediction and Community Detection",
    description: [
      "Implemented graph similarity measures based on cooperative game theory, modeling networks as coalitional games.",
      "Applied supervised machine learning techniques to link prediction and clustering tasks on dynamic graphs.",
      "Evaluated model performance using adapted precision metrics and compared with classical heuristics.",
      "Designed reproducible pipelines with custom Python classes to automate experiments and comparisons."
    ],
    extra: "This work explores how interaction indices from game theory can quantify similarity between nodes and communities, improving link prediction accuracy and uncovering hidden community structures in real-world social networks.",
    link: "https://github.com/monsalvenatalia/interaction-indices"
  },

  letterboxd: {
    title: "Letterboxd Alike — Film Review Web App (Django + React)",
    description: [
      "Built with Django and PostgreSQL, containerized with Docker Compose for easy deployment.",
      "Developed RESTful APIs using Django REST Framework, leveraging serializers, class-based views (CBVs), and the Django ORM.",
      "Integrating a React frontend with dynamic data fetching and persistence through Django REST APIs to enable responsive and interactive movie review features."
    ],
    extra: "A personal project inspired by Letterboxd — a social platform for movie lovers to share reviews and discover films together.",
    link: "https://github.com/monsalvenatalia/letterboxd-alike"
  },

  portfolio: {
    title: "React Portfolio",
    description: [
      "Developed with React and Vite for fast, modular deployment via GitHub Pages.",
      "Designed a fully responsive interface with CSS custom components and smooth routing using React Router.",
      "Includes dynamic sections (About, Projects, Skills) and reusable tab-based project displays."
    ],
    extra: "This portfolio serves as a playground to experiment with new front-end techniques while showcasing my projects.",
    link: "https://github.com/monsalvenatalia/my-portfolio"
  }
};
