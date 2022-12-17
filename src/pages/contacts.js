import React from 'react'
import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { 
  faGithub, 
  faGitlab, 
  faLinkedin, 
  faYoutube, 
} from '@fortawesome/free-brands-svg-icons'
import * as styles from '../styles/contact.module.css'

export default function contact() {
  return (
    <Layout>
      <div>
        <h1>Contacts</h1>
        <div className={styles.contacts}>
          <p>
            <a href="mailto:gilberdising012@gmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="1x" /> Email
            </a>
          </p>
          <p>
            <a href="https://github.com/sngbd" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="1x" /> GitHub
            </a>
          </p>
          <p>
            <a href="https://gitlab.com/sngbd" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGitlab} size="1x" /> GitLab
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/gilberdi" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn
            </a>
          </p>
          <p>
            <a href="https://youtube.com/@gilberdi" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="1x" /> YouTube
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
