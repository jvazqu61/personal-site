import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { BsGithub, BsFillFileEarmarkPersonFill} from 'react-icons/bs';

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
                    
                    <a href='https://github.com/jvazqu61'><BsGithub style={{fontSize:'35px'}}/></a>
                </li>
                <li>
                    {/* <FontAwesomeIcon size='xs' icon={faFile}/> */}
                    <a href=''><BsFillFileEarmarkPersonFill style={{fontSize:'35px'}}/></a>
                </li>
            </ul>
        </nav> 
      </header>
    
  )
}

export default NavBar