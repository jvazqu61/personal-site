import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import { FaJava } from 'react-icons/fa';
import {SiMysql} from 'react-icons/si';

function Projects() {
  return (
    <section className={styles.section}>
         <a name='projects'>Projects</a> 
         <ProjectCard 
          name={'Code Vs Zombies'}
          info={'A coding game that has a zombie theme to it. College senior project that was aimed to help beginners get into programming. '}
          languages={[
            {
              name:'Java (fxml) front end',
              icon:<FaJava style={{marginRight:'15px',fontSize:'40px'}} />
            },
            {
              name: 'Java backend',
              icon:<FaJava />
            },
            {
              name: 'MySql backend',
              icon:<SiMysql />
            }]} />
          
         <ProjectCard name={'JLyns Project Logs'} />
         <ProjectCard name={'Cpp Intreperter'} />
         <ProjectCard name={'Ruby Intreperter'} />

    </section>
  )
}

export default Projects