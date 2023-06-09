"use client"
import React, { useEffect, useState } from 'react'
import HomeNav from "../../components/HomeNav"
import Footer from '@/components/Footer'
import styles from '../../styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
function GeneralLayout({children}) {
  const [height,setHeight] = useState(0)
  const switchPoint = 500
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setHeight(window.scrollY)
    })
    return ()=> window.removeEventListener("scroll",()=>{
      setHeight(window.scrollY)
    })
},[])
  return (
    <div className= {styles.layout_container}>
        <HomeNav/>
        {children}
        {height>switchPoint&&<Link href={`#intro`} scroll className={styles.navigate__up}>
        <FontAwesomeIcon icon={faArrowUp}/>
        </Link>}
        <Footer/>
    </div>
  )
}

export default GeneralLayout