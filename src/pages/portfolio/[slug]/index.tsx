import { useState, useRef } from 'react'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { VideoPlayer } from 'components/video'
import { GetServerSideProps } from 'next'
import { IProject } from 'data'
import { openInNewTab } from 'helpers'

import styles from './styles.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import scroll from 'zenscroll'
import Classnames from 'classnames'

const Project = ({ brand, title, description, logoURL, demoURL, skills }) => {

  const [ demoActive, setDemoActive ] = useState(false)
  const videoSectionRef = useRef(null)
  const isBrandSite : boolean = (brand === 'Joel Rivera')
  const isBrowser   : boolean = (typeof window !== 'undefined')

  const Skills = () => {

    const skillsList = skills.map((skill, i) => {
      return (
        <small key={i} className={styles.skill}>
          {skill}
        </small>
      )
    })

    return (
      <div className={styles.skills}>
        { skillsList }
      </div>
    )
  }

  const VideoSection = () => {

    const videoClasses = Classnames({
      [styles.video]: true,
      [styles.active]: demoActive
    })

    return (
      <section className={videoClasses} ref={videoSectionRef}>
        {
          demoActive ?
          <>
            <h3>Demo</h3>

            <div className={styles.wrapper}>
              <VideoPlayer src={demoURL} />
            </div>
          </> : null
        }
      </section>
    )
  }

  const onLaunchDemoClick = () => {

    if(isBrandSite && isBrowser){
      openInNewTab('https://github.com/joellz/site')
    }
    else {
      setDemoActive(true)

      if(videoSectionRef.current){
        scroll.to(videoSectionRef.current)
      }
    }
  }

  return (
    <div className={styles.project}>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={title} />
        <meta title='og:title' content="My Portfolio" />
        <meta title='og:image' content='/favicon.ico' />
        <meta title='og:description' content={title} />
      </Head>

      <Header
        type='dark'
        absolute={false}
      />

      <div className={styles.body}>
        {
          isBrandSite ? null : <img src={logoURL} />
        }

        <h1>{title}</h1>

        <Skills />

        <p className={styles.text}>
          {description}
        </p>

        <div className={styles.actions}>
          <button
            className={styles.launch}
            onClick={onLaunchDemoClick}>
            {
              isBrandSite ? 'View Code' : 'Launch Demo'
            }
          </button>

          <Link href='/portfolio'>
            <button className={styles.back}>
              Back
            </button>
          </Link>
        </div>
      </div>

      <VideoSection />
      <Footer active={demoActive} />
    </div>
  )
}

export default Project

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { params: { slug } } = ctx
  const isDev: boolean = (process.env.NODE_ENV === 'development')

  //absolute paths are needed in server env
  //because server has no context of browser location
  //to utilize relative paths

  const url = (
    isDev ?
    `http://localhost:3200/api/project?slug=${slug}` :
    `${process.env.BASE_URL}/api/project?slug=${slug}`
  )

  const response = await axios.get(url)
  const project: IProject = response.data.project[0]

  return {
    props: { ...project }
  }
}