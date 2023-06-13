"use client"
import { useState } from 'react'
import styles from '../../../styles/recruiter.module.css'
import { useFormik } from 'formik'
import { signUpValidation } from '@/lib/validation'

function SeekerForm() {
    const initialValues = {
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        password:"",
        DOB:"",
        COS:""
    }
    const formik = useFormik({
        initialValues,
        // need to add the onSubmit function here, waiting for API(backend) endpoints
        validate:signUpValidation,
      })
      console.log(formik.values.username);
  return (
    <form
    className={styles.form}
   >
    <div className={styles.email__phone}>
      <label htmlFor='firstname'>Firstname</label>
      <input
        type='text'
        name='firstname'
        id='firstname'
        className={
            formik.errors.firstname&&formik.touched.firstname?styles.invalid:styles.input
        }
       {...formik.getFieldProps('firstname')}
      />
     
    </div>
    <div className={styles.email__phone}>
      <label htmlFor='lastname'>Lastname</label>
      <input
        type='text'
        name='lastname'
        id='lastname'
        className={
            formik.errors.lastname&&formik.touched.lastname?styles.invalid:styles.input
        }
        {...formik.getFieldProps('lastname')}
      />
     
    </div>
    <div className={styles.email__phone}>
      <label>Email Address</label>
      <input
        type='email'
        name='email'
        className={
            formik.errors.email&&formik.touched.email?styles.invalid:styles.input
        }
        {...formik.getFieldProps('email')}
        required
      
      />
   
    </div>
    <div className={styles.email__phone}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        className={
            formik.errors?.username&&formik.touched?.username?styles.invalid:styles.input
        }
        {...formik.getFieldProps('username')}
        required
      />
    
    </div>
    <div className={styles.email__phone}>
      <label htmlFor='DOB'>Date of Birth</label>
      <input
        type='date'
        name='DOB'
        id='DOB'
        className={
            formik.errors?.DOB&&formik.touched?.DOB?styles.invalid:styles.input
        }
        {...formik.getFieldProps('DOB')}
      />
     
    </div>
    <div className={styles.email__phone}>
     <label htmlFor="COS">Course of Study</label>
        <input type="text" className={
            formik.errors?.COS&&formik.touched?.COS?styles.invalid:styles.input
          } name='COS' {...formik.getFieldProps('COS')}  />
    </div>
    <div className={styles.password}>
      <label>Password (6 or more characters)</label>
      <div>
        <input
          // type={showPassword ? 'text' : 'password'}
          name='password'
          className={
            formik.errors.password&&formik.touched.password?styles.invalid:styles.input
          }
          {...formik.getFieldProps('password')}
         
        />
        <span
          className={styles.show}
          >
          {/* {showPassword ?<FontAwesomeIcon icon={faEyeSlash}/>: <FontAwesomeIcon icon={faEye}/>} */}
        </span>
       
      </div>
      
     
    </div>
    <p className={styles.cookie}>
      By clicking Agree & Join, you agree to the LinkWork{' '}
      <span>User Agreement, Privacy Policy</span>, and{' '}
      <span>Cookie Policy</span>
    </p>
    <button
      type='submit'

      className={
      styles.signUpBtn
      }
    >
      Agree & Join
    </button>
  </form>
  )
}

export default SeekerForm