import styles from '../styles/Skills.module.css';


function Skills() {
  return (
    <section className={styles.section}>
          <a name='skills'>Skills</a>
      
            <ul className={styles.skills_sec}>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Programing Logic</li>
                <li>Git</li>
                <li>Agile</li>
                <li>Communicaton</li>
                <li>Leadership</li>
            </ul>
    </section>
  )
}

export default Skills