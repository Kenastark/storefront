import Link from 'next/link'
import styles from '../../../styles/recruiter.module.css'
import SeekerForm from './SeekerForm'

function SeekerPage() {
   
 return (
    <div className={styles.signUpScreen}>
    <header>
      <Link href='/'>
        LinkWork
      </Link>
    </header>
    <h1>Join Thousands of Amazing Companies</h1>
    {/* {verificationMessage&&<p className={styles.verification}>{verificationMessage}</p>}
    {errorMessage&&<p className={styles.errorMessage}>{error_holder}</p>} */}
   <SeekerForm/>
    <p className={styles.signIn}>
      Already on LinkWork? <Link href='/login'>Sign in</Link>
    </p>
  
  </div>
  )
}

export default SeekerPage