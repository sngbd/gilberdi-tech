import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

