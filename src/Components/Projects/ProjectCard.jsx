import './projectitem.css';

function ProjectCard({ item }) {
  return (
    <div id="project" className="Item-container">
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <a
        href={item.github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        🔗 View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
