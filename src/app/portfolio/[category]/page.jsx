import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat];

  if(data){
    return data
  }

  return notFound()
}

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(params);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map(
        (items) => (
          <div className={styles.item} key={items.id}>

            <div className={styles.content}>
              <h1 className={styles.title}>{items.title}</h1>
              <p className={styles.desc}>{items.desc}</p>
              <Button text="See More" url="#" />
            </div>

            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={items.image}
                fill={true}
                alt=""
              />
            </div>

          </div>
        )
      )}

    </div>
  )
}

export default Category