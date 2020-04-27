import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ea
          suscipit rem minima consequatur. Laboriosam accusantium hic
          doloremque, nemo aliquid tempore itaque natus velit provident.
        </p>
      </div>
    </Layout>
  )
}

export default blog
