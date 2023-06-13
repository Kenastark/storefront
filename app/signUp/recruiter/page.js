
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from '../../../styles/recruiter.module.css'
import Image from 'next/image'

import Form from './form'

function RecruiterPage() {
   
  return (
    <div className={styles.signUpScreen}>
    <header>
      <Link href='/'>
        LinkWork
      </Link>
    </header>
    <h1>Build Yor Dream Team</h1>
    {/* {verificationMessage&&<p className={styles.verification}>{verificationMessage}</p>}
    {errorMessage&&<p className={styles.errorMessage}>{error_holder}</p>} */}
   <Form/>
    <p className={styles.signIn}>
      Already on LinkWork? <Link href='/login'>Sign in</Link>
    </p>
  
  </div>
  )
}

export default RecruiterPage