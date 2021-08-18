import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.module.css'
import Button from "@material-ui/core/Button";

const Projects = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
          <Button variant="contained" color="primary">
              Hello World
          </Button>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  );
}

export default Projects
