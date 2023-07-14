// This is the Home page. src/app/page.jsx
import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
        {/* <button className={styles.button}>See Our Works</button> */}
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.img} />
      </div>
    </div>
  )
}


// MONGO = mongodb+srv://mirazdev:mirazdev@cluster0.3r2hlmg.mongodb.net/test?retryWrites=true&w=majority

// GOOGLE_CLIENT_ID = 942664976926-f10tu7abq2pt8l9d3mkmhm9rbn8jjk10.apps.googleusercontent.com

// GOOGLE_CLIENT_SECRET = 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

// NEXTAUTH_SECRET="Thisisanexample"

// NEXTAUTH_URL = "http://localhost:3000"
