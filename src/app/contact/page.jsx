import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>

      {/* Upper part */}
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      {/* Below Part */}
      <div className={styles.content}>

        {/* Right side */}
        <div className={styles.imgContainer}>
          <Image 
            src="/contact.png"
            fill={true}
            alt=""
            className={styles.image}
          />
        </div>

        {/* Left side */}
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} placeholder="Message" cols="30" rows="10"></textarea>
          <Button url="#" text="Send" />
        </form>


      </div>


    </div>
  )
}

export default Contact