import styles from '../styles/Skills.module.css';
import 'aos/dist/aos.css';

function Skills() {

  return (
    <section className={styles.section}>
          <a name='skills'>Skills</a>
            <div className={styles.skills}>
              <div data-aos='fade-up'>
                <h1>Data Structures</h1>
                <img src='https://www.educative.io/v2api/editorpage/5323562194829312/image/4539157721382912'/>
              </div>
              <div data-aos='fade-up'>
                <h1>Algorithms</h1>
                <img src='http://codeprogramming.org/wp-content/uploads/2020/06/algorithms-in-programming.jpg' />
              </div>
              <div data-aos='fade-up'>
                <h1>Git</h1>
                <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' />
              </div>
              <div data-aos='fade-up'>
                <h1>Agile</h1>
                <img src='https://cdn.sysaid.com/wp-content/uploads/2021/06/agile700x350.png' />
              </div >
              <div data-aos='fade-up'>
                <h1>Communicaton</h1>
                <img src='https://www.tutorialspoint.com/fundamentals_of_science_and_technology/images/communication_technology_information.jpg' />
              </div>
              <div data-aos='fade-up'>
                <h1>Leadership</h1>
                <img src='https://www.talentmgt.com/wp-content/uploads/2021/10/human-centered-leadership-teamwork-scaled-2.jpg' />
              </div>
            </div>
            
            
    </section>
  )
}

export default Skills