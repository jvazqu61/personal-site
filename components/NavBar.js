import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
      <header className={styles.header}>
        <a className={styles.title}>Juan Vazquez</a>
        <nav className={styles.navcenter}>
        <ul >
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
            </ul>
        </nav>
        <nav className={styles.navright}>
            
            <ul >
                <li>
                    {/* <FontAwesomeIcon className={styles.icons} icon={faGithub} /> */}
                    <a href='https://github.com/jvazqu61'>Git</a>
                </li>
                <li>
                    {/* <FontAwesomeIcon size='xs' icon={faFile}/> */}
                    <a href=''>Resume</a>
                </li>
            </ul>
        </nav> 
      </header>
    
  )
}

export default NavBar