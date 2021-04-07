import { useState } from 'react'
import { Dropdown } from 'components/dropdown'
import { categories, skills, jobs, } from 'data'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

import scroll from 'zenscroll'
import Head from 'next/head'
import styles from 'styles/home.module.scss'

const Home = () => {
  const [ activeSkill, setActiveSkill ] = useState(categories[0])

  const renderSkills = () => {
    return skills
    .filter(({ category }) => category === activeSkill)
    .map(({ name }, i) => ( <p key={i}>{name}</p>))
  }

  const renderExperience = () => {
    return jobs.map(({ employer, role, duration, description, begin, end }, i) => {

      const Job = (): JSX.Element => (
        <div className={styles.job}>
          <h3>{employer} - {role}</h3>
          <small>{begin} - {end} - {duration}</small>
          <p>{description}</p>
        </div>
      )

      if(i !== jobs.length - 1){
        return (
          <>
            <Job />
            <div className={styles.branch} />
          </>
        )
      }
      return (<Job /> )
    })
  }

  return (
    <div className={styles.home}>

      <Head>
        <title>joelrivera.me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
        <meta name="description" content="Joel Rivera - Senior full-stack JavaScript engineer." />
        <meta property='og:title' content='joelrivera.me' />
        <meta property='og:image' content='/images/og-image.png' />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property='og:description' content="Joel Rivera - Senior full-stack JavaScript engineer." />
      </Head>

      <Header />

      <section className={styles.hero}>

        <div className={styles.text}>
          <h1 className={styles.title}>
            I'm a full-stack JavaScript engineer with 7 years of real world experience<span className={styles.blue}>.</span>
          </h1>

          <p>
            I’m passionate about crafting modern, cutting-edge cloud native web apps,
            POC’s, and meaningful experiences for companies like IBM, Starbucks,
            Morgan Stanley, Geico, AAFES, The Associated Press, and the American Red Cross
            using the latest and greatest web technology and agile methodologies.
          </p>

          <img
            src='/images/down-arrow.svg'
            className={styles.down}
            alt='Arrow to scroll down'
            title='Arrow to scroll down'
            onClick={() => {
              const element = document.getElementById('skills')
              scroll.to(element)
            }}
          />
        </div>

      </section>

      <section className={styles.skills} id='skills'>
        <div className={styles.select}>
          <h3>Skills in</h3>

          <Dropdown
            list={categories}
            onItemSelect={setActiveSkill}
            activeSkill={activeSkill}
          />
        </div>

        <div className={styles.skillslist}>
          { renderSkills() }
        </div>
      </section>

      <section className={styles.experience}>
        <h3>Experience</h3>

        <div className={styles.jobs}>
          { renderExperience() }
        </div>
      </section>

      <Footer active={true} />
    </div>
  )
}

export default Home