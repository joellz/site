import { useState } from 'react'
import { Header } from 'components/header'
import { VideoPlayer } from 'components/video'

import styles from './styles.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const Project = ({ title, description, logoURL, demoURL, skills }) => {
  const [ demoActive, setDemoActive ] = useState(false)

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

  const renderVideoPlayer = () => {
    if(demoActive){
      return ( <VideoPlayer src={demoURL} /> )
    }
  }

  const onLaunchDemoClick = () => {
    setDemoActive(true)
  }

  return (
    <div className={styles.project}>
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

      <div className={styles.body}>
        <img src={logoURL} />
        <h1>{title}</h1>

        <Skills />

        <p className={styles.text}>
          {description}
        </p>

        <div className={styles.actions}>
          <button
            className={styles.launch}
            onClick={onLaunchDemoClick}>
            Launch Demo
          </button>

          <Link href='/portfolio'>
            <button className={styles.back}>
              Back
            </button>
          </Link>
        </div>

        <section className={styles.video}>
          { renderVideoPlayer() }
        </section>
      </div>
    </div>
  )
}

export default Project

export async function getServerSideProps(ctx) {
  const { params: { slug } } = ctx
  const isDev: boolean = (process.env.NODE_ENV === 'development')

  const url = (
    isDev ?
    `http://localhost:3200/api/project?slug=${slug}` :
    `https://joelrivera.me/api/project?slug=${slug}`
  )

  const response = await axios.get(url)

  return {
    props: {
      ...response.data.project[0]
    }
  }
}