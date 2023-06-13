"use client"
import { useState } from 'react'
import styles from '../../../styles/recruiter.module.css'
import { useFormik } from 'formik'
import { signUpValidation } from '@/lib/validation'
function Form() {
    const initialValues = {
        firstname:"",
        lastname:"",
        organization:"",
        email:"",
        password:"",
        industry:"",
    }
    const formik = useFormik({
        initialValues,
       
        validate:signUpValidation,
      })
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
      <label htmlFor='organization'>Organization</label>
      <input
        type='text'
        name='organization'
        id='organization'
        className={
            formik.errors.organization&&formik.touched.organization?styles.invalid:styles.input
        }
        {...formik.getFieldProps('organization')}
        required
      />
    
    </div>
    <div className={styles.email__phone}>
      <label htmlFor='phone'>Phone Number</label>
      <input
        type='text'
        name='phone'
        id='phone'
        className={
            formik.errors.phone&&formik.touched.phone?styles.invalid:styles.input
        }
        {...formik.getFieldProps('phone')}
      />
     
    </div>
    <div className={styles.email__phone}>
     <select name="industry"  id="industry" {...formik.getFieldProps('industry')} className={formik.errors.industry&&formik.touched.industry?styles.invalid:styles.input} required>
      <option value="Finance">Finance</option>
      <option value='agriculture'>Agriculture</option>
      <option value="engineering">Engineering</option>
      <option value="IT">Information & Technology</option>
      <option value="oil&gas">Oil & Gas</option>
      <option value="healthcare">Healthcare</option>
     </select>
     
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

export default Form