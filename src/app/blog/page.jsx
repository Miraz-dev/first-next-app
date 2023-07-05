import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>

        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>TestTitle</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        
      </Link>

      <Link href="/blog/testId" className={styles.container}>

        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>TestTitle</h1>
          <p className={styles.desc}>Desc</p>
        </div>

      </Link>
    </div>
  )
}

export default Blog