import { useEffect, useState } from 'react'
import { IProject } from 'data'
import { Header } from 'components/header'

import styles from './portfolio.module.scss'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const Portfolio = () => {
  const [ projects, setProjects ] = useState<IProject[]>(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axios.get('/api/projects')

    .then(({ data }) => {
      setProjects(data.projects)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])


  const ProjectGrid = () => {
    if(loading){
      const items = [1,2,3,4,5,6,7,8].map((item, i) => {
        return (
          <div className={styles.skeletonCard} key={i}>
            <Skeleton
              width='100%'
              height='100%'
              style={{ borderRadius: 0 }}
            />
          </div>
        )
      })
      return (
        <div className={styles.skeletonGrid}>
         {items}
        </div>
      )
    }
    else {

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
  }

  return (
    <div className={styles.portfolio}>

      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Some of my best work" />
        <meta property='og:title' content='My Portfolio' />
        <meta property='og:image' content='/images/og-image.png' />
        <meta property='og:description' content="Some of my best work" />
        <meta property="og:url" content="https://joelrivera.me/" />
        <meta property="og:type" content="website" />
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