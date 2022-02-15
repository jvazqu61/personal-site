import styles from '../styles/ProjectCard.module.css';

function ProjectCard({name,info,link,languages}) {
  return (
    <div className={styles.card}>
        <h2>{name}</h2>
        <main>
            {info}
            <h4>languages used</h4>
            <div className={styles.languages}>
                
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