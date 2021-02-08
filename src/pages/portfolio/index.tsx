import { IProject } from 'data'
import { Header } from 'components/header'
import { GetServerSideProps } from 'next'

import styles from './portfolio.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const Portfolio = ({ projects }) => {

  const ProjectGrid = () => {
    const Project = ({ logoURL, slug }) => {
      return (
        <Link href={`/portfolio/${slug}`}>
          <div className={styles.project}>
            <img
              className={styles.brand}
              src={logoURL}
            />

            <div className={styles.cta}>
              <p>View Demo</p>
              <img src={`/images/portfolio/arrow.svg`} />
            </div>
          </div>
        </Link>
      )
    }

    const Default = () => {
      return (
        <Link href='/contact'>
          <div className={styles.default}>
            <div className={styles.getstarted}>
              <p>Let's get started</p>
              <img src={`/images/portfolio/arrow-light.svg`} />
            </div>
          </div>
        </Link>
      )
    }

    const renderProjects = () => {
      if(projects !== null){
        return projects.map((project, i) => {
          return ( <Project key={i} { ...project } /> )
        })
      }
    }

    return (
      <div className={styles.grid}>
        { renderProjects() }
        <Default />
      </div>
    )
  }

  return (
    <div className={styles.portfolio}>

      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
        <meta name="description" content="Joel Rivera's Portfolio."
        />
      </Head>

      <Header
        type='dark'
        absolute={false}
      />

      <ProjectGrid />
    </div>
  )
}

export default Portfolio

export const getServerSideProps: GetServerSideProps = async () => {
  const isDev: boolean = (process.env.NODE_ENV === 'development')

  //absolute paths are needed in server env
  //because server has no context of browser location
  //to utilize relative paths

  const url = (
    isDev ?
    `http://localhost:3200/api/projects` :
    `/api/projects`
  )

  const response = await axios.get(url)
  const projects: IProject[] = response.data.projects

  return {
    props: { projects }
  }
}