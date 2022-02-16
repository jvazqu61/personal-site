import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import { FaJava } from 'react-icons/fa';
import { SiMysql,SiCplusplus,SiRuby,SiReact,SiMongodb,SiExpress,SiNodedotjs } from 'react-icons/si';

function Projects() {


  return (
    <section className={styles.section}>
        <a name='projects'>Projects</a> 
        <div className={styles.cards}>
          <ProjectCard 
            name={'Code Vs Zombies'}
            info={'A coding game that has a zombie theme to it. College senior project that was aimed to help beginners get into programming. '}
            languages={[
              {
                name: 'Java',
                icon:<FaJava className={styles.icons}/>
              },
              {
                name: 'MySql',
                icon:<SiMysql className={styles.icons}/>
              }]} 
            />
            
          <ProjectCard 
            name={'JLyns Project Logs'} 
            info={''}
            languages={[
              {
                name:'MongoDb',
                icon:<SiMongodb className={styles.icons} />
              },
              {
                name:'Express',
                icon:<SiExpress className={styles.icons} />
              },
              {
                name:'React',
                icon:<SiReact className={styles.icons} />
              },
              {
                name:'Node',
                icon:<SiNodedotjs className={styles.icons}/>
              },
            ]}
          />
          <ProjectCard 
            name={'Cpp Intreperter'}
            info={''}
            languages={[
              {
                name:'C++',
                icon:<SiCplusplus className={styles.icons}/>
              }
            ]} 
          />
          <ProjectCard 
            name={'Ruby Intreperter'}
            info={''}
            languages={[
              {
                name:'Ruby',
                icon:<SiRuby className={styles.icons}/>
              }
            ]}
          />
        </div>
        

    </section>
  )
}

export default Projects