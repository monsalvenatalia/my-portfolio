export const PROJECTS = {
    gametheory: {
        title: "Game-theoretic Interaction Indices for Link Prediction and Community Detection", 
        description: `
        Final year project.

        • Implemented graph similarity measures based on cooperative game theory, modeling networks as coalitional games.  
        • Applied supervised machine learning techniques to link prediction and clustering tasks on dynamic graphs.  
        • Evaluated model performance using adapted precision metrics and compared with classical heuristics.  
        • Designed reproducible pipelines with custom Python classes to automate experiments and comparisons.  

        This work explores how interaction indices from game theory can quantify similarity between nodes and communities, improving link prediction accuracy and uncovering hidden community structures in real-world social networks.
            `, 
        link: "https://github.com/monsalvenatalia/interaction-indices"
    }, 
    letterboxd : {
        title: "Letterboxd Alike — Film Review Web App (Django + React)", 
        description: `
        A personal project inspired by Letterboxd — a social platform for movie lovers to share reviews and discover films together.

        • Built with Django and PostgreSQL, containerized with Docker Compose for easy deployment.  
        • Developed RESTful APIs using Django REST Framework, leveraging serializers, class-based views (CBVs), and the Django ORM.  
        • Currently in progress: integrating a React frontend to provide responsive and interactive interfaces for rating, reviewing, and browsing movies.  
        • Combines backend robustness with a modern single-page experience inspired by community-driven platforms.  
            `, 
        link: "https://github.com/monsalvenatalia/letterboxd-alike"
    }, 
    portfolio: {
        title: "My React Portfolio", 
        description: `
        A single-page application (SPA) built entirely with React to showcase my projects, skills, and academic work.

        • Structured with React Router to simulate multiple pages and smooth navigation.  
        • Styled using plain CSS and responsive layouts for a clean, minimalist interface.  
        • Written in JSX with modular components, combining logic and design for better maintainability.  
        • Serves as a living project — continuously updated with new experiments, ideas, and design refinements.  
            `, 
        link: "https://github.com/monsalvenatalia/my-portfolio"
    }
}