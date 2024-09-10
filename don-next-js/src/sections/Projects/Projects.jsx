import styles from './ProjectsStyles.module.css';


import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          
          link="https://donsantos.netlify.app/"
          h3="Don Santos"
          p="My Official website"
        />
        <ProjectCard
         
          link="https://github.com/Don-Santos/minesweepergame"
          h3="Minesweeper Game"
          p="Minesweeper Game"
        />
        <ProjectCard
         
          link="https://github.com/Don-Santos/weather-app"
          h3="Weather App"
          p="Weather APP"
        />
       
      </div>
    </section>
  );
}

export default Projects;
