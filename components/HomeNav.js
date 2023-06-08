"use client"
import React, { useState } from 'react'
import styles from "../styles/homeNav.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
function HomeNav() {
    const [active,setActive] = useState(false)
    const handleToggle =  ()=>{
        setActive(!active)
      }
 
   
  return (
    <header className={styles.nav__header}>
       <div className={styles.nav__container}>
       <div className={styles.company__logo}>
            <h1>LinkWork</h1>
        </div>
        <div className={styles.toggle__btn} onClick={handleToggle}>
        <FontAwesomeIcon icon={active?faTimes:faBars}/>
        </div>
        <nav className={`${styles.nav__elements} ${active&&styles.active}`}>
                <ul>
                <li><Link href={`/link1`}>Link1</Link></li>
                <li><Link href={`/link2`}>Link2</Link></li>
                <li className={styles.acct__container}>
                  <div className={styles.account}>
                    <FontAwesomeIcon icon={faUser}/>
                    <p>Account</p>
                    <FontAwesomeIcon icon={faCaretDown}/>
                  </div>
                <div className={styles.dropdown}>
                    <Link href={`/login`}>Login</Link>
                    <Link href={`/signUp`}>SignUp</Link>
                  </div>
                </li>
               <li>
                <button>
                  Lorem
                </button>
               </li>
                </ul>
            </nav>
       </div>
    </header>
  )
}

export default HomeNav