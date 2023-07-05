import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { notFound } from "next/navigation"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const BlogPost = async ({params}) => {

  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus dolor dolorum numquam tempore explicabo non, optio voluptatibus architecto aliquam vero. Voluptates tenetur temporibus hic quibusdam culpa, nemo laborum ullam vero.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Miraz Farid</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde odio veniam quisquam consequuntur quis blanditiis dolorem quia ullam? Odit dignissimos iure, delectus quos repellat labore ipsum iste illo illum.
        </p>
        <br />
        <br />
      </div>


    </div>
  )
}

export default BlogPost