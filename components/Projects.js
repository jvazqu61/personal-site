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
            info={'A coding game with zombies theme. My college senior software project that aimed to help novice get into programming or help improve thier programming skills. The players got to answer trivia programming questions through different game modes such as multiple choice and filling in the blank.'}
            languages={[
              {
                name: 'Java',
                icon:<FaJava className={styles.icons}/>
              },
              {
                name: 'MySql',
                icon:<SiMysql className={styles.icons}/>
              }]} 
              link={'https://github.com/cs-440-at-uic/440-Group-20-Spring-2021/tree/master/Code'}
            />
            
          <ProjectCard 
            name={'JLyns Project Logs'} 
            info={'An app built for a small landscape company that allows the workers to enter detailed information for each landscape job. The job log is reviewed for billing the customer and then it gets stored for future refrences. '}
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
            link={'https://jlyns-calendar.herokuapp.com/'}
          />
          <ProjectCard 
            name={'Cpp Intreperter'}
            info={'A interpreter called SPL. The intrepreter contains two memories, one to store the instructions and another to store the identifiers declared in the program. The intrepreter understands a set of instruction such as conditional statements and loops.'}
            languages={[
              {
                name:'C++',
                icon:<SiCplusplus className={styles.icons}/>
              }
            ]} 
            link={'https://github.com/jvazqu61/CppInterpreter'}
          />
          <ProjectCard 
            name={'Ruby Intreperter'}
            info={'A interpreter called SPL. The intrepreter contains two memories, one to store the instructions and another to store the identifiers declared in the program. The intrepreter understands a set of instruction such as conditional statements and loops.'}
            languages={[
              {
                name:'Ruby',
                icon:<SiRuby className={styles.icons}/>
              }
            ]}
            link={'https://github.com/jvazqu61/Rubyinterpreter-'}
          />
        </div>
        

    </section>
  )
}

export default Projects