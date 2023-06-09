import styles from '../../styles/page.module.css'
import Image from 'next/image'
import overlayImg from '../../assets/jobs-new.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const metadata = {
  title: 'Home',
  description: 'Home Page of LinkWork',
}
export default function Home() {
  return (
    <div className={styles.home__container}>
      
      <main className={styles.main}>
        <section className={styles.intro} id='intro'>
          <div className={styles.overlay}>
            <Image src={overlayImg} alt='overlayImg'/>
          </div>
          <div className={styles.main_intro}>
            <div className={styles.fading_text}>Career</div>
            <div className={styles.main_org}>
            <h1>Let's Start Careers Here</h1>
            {/* <span className={styles.underline}></span> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus atque consequatur ducimus!</p>
            <Link href={`/about`}><FontAwesomeIcon icon={faArrowRight} height={20} width={20}/>Learn more</Link>
            </div>
          </div>
        </section>
        <section>
         
        </section>
     </main>
     
    </div>
  )
}
