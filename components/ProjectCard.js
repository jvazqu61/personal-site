import styles from '../styles/ProjectCard.module.css';
import 'aos/dist/aos.css';
function ProjectCard({name,info,link,languages}) {
  return (
    <div data-aos='fade-up' className={styles.card}>
        <h2>{name}</h2>
        <main  className={styles.languages}>
            <p>{info}</p>
            <t>Developed Using</t>
            <div >
                
                {languages?.map((card, key) => {
                    return (
                        <div key={key}>{card.icon}{card.name}</div>
                    )
                })}
                
            </div>
            
            
        </main>
        <footer>{link}</footer>
    </div>
  )
}

export default ProjectCard