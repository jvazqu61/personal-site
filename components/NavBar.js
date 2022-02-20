import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { BsGithub, BsFillFileEarmarkPersonFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import Resume from '../public/resume.pdf';
import { useState } from 'react';

function NavBar() {

    const [isToggled, setIsToggled] = useState(false);

    const toggleMenu = () =>{
        setIsToggled(!isToggled);
    }

  return (

    <nav className={styles.navbar}>
        <div className={styles.title}>Juan Vazquez</div>
        {isToggled?<CgClose className={styles.menu_icon}
            onClick={toggleMenu}/>: <GiHamburgerMenu 
            className={styles.menu_icon}
            onClick={toggleMenu} />}
        <div className={isToggled?`${styles.nav_links} ${styles.links_active}`: styles.nav_links} >
            <ul >
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='https://github.com/jvazqu61'><BsGithub style={{fontSize:'30px'}}/></a></li>
                 <li><a href='../public/resume.pdf'download><BsFillFileEarmarkPersonFill style={{fontSize:'30px'}}/></a></li>
            </ul>
        </div>
    </nav>
    
  )
}

export default NavBar