import Link from "next/link"
import styles from "../../styles/signUp.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons"

export const metadata = {
    title:"SignUp",
    description:"Sign up as either recruiter or job seeker"
}
function SignUp() {
  return (
    <div className={styles.signUp__container}>
      <div className={styles.tabs}>
        <div className={styles.recruiter}><Link href={`/signUp/recruiter`}>Sign Up As A Recruiter</Link> <FontAwesomeIcon icon={faBuilding} height={25} width={25}/></div>
        <div className={styles.seeker}><Link href={`/signUp/seeker`}>Sign Up As A Job Seeker</Link> <FontAwesomeIcon icon={faUser} height={25} width={25}/></div>
      </div>
    </div>
  )
}

export default SignUp