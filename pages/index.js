import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juan Vazquez</title>
        <meta name="description" content="personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* sections */}
        {/* about (section name to left) */}
        <About />
        

        {/* skills */}
        <Skills />
        

        {/* projects (section name to right*/}
        <Projects />
        
       

      <footer className={styles.footer}>
       <p>&#169;  Juan Vazquez 2022</p> 
      </footer>
    </div>
  )
}
