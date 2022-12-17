import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Gilberdi Sinaga</h2>
          <h3>Backend Engineer</h3>
          <p>Backend Engineer & Computer Science Student based in Medan</p>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <GatsbyImage image={image} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: AUTO)
    }
  }
}
`