import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/chatapp.png';
import freshBurger from '../../assets/bitcoin.png';
import hipsster from '../../assets/Shopping.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Vikas-0109"
          h3="React Chat App"
          p="Chat Application"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Vikas-0109"
          h3="CryptoVerse"
          p="Crypto Currency Covertor"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Vikas-0109"
          h3="ShopEase Online Website"
          p="Shopping Website"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
