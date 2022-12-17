import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        id
      }
    }
  }
`
