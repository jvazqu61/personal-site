import styles from '../styles/ProjectCard.module.css';
import 'aos/dist/aos.css';
import Link from 'next/link';
function ProjectCard({name,info,link,languages}) {
  return (
    <Link href={link} target="_blank">
    <div  data-aos='fade-up' className={styles.card}>
        <h2>{name}</h2>
        <main  className={styles.main}>
            <p>{info}</p>    
        </main>
        <footer className={styles.languages}>
            <t>Developed Using</t>
            <div >
                
                {languages?.map((card, key) => {
                    return (
                        <div  key={key}>{card.icon}{card.name}</div>
                    )
                })}
                
            </div>
        </footer>
    </div>
    </Link>
   
  )
}

export default ProjectCard