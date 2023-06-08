import HomeNav from '@/components/HomeNav'
import styles from '../styles/page.module.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Home',
  description: 'Home Page of LinkWork',
}
export default function Home() {
  return (
    <div className={styles.home__container}>
      <HomeNav/>
      <main className={styles.main}>
        <div>Home</div>
     </main>
     <Footer/>
    </div>
  )
}
