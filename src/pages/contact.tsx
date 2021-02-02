import { motion } from 'framer-motion'

import Link from 'next/link'
import styles from 'styles/contact.module.scss'
import Head from 'next/head'

export default () => {
  return (
    <div className={styles.contact}>

      <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />

        <meta name="description" content="If after reviewing my skillset,
          experience, and portfolio, you feel that I would be the right candidate for an
          interesting opportunity, please feel free to reach out to me, thanks!"
        />
      </Head>

      <header>
        <Link href='/'>
          <img
            src='/images/logo-dark.svg'
            className={styles.logo}
          />
        </Link>
      </header>

      <div className={styles.body}>
        <h1>hello@joelrivera<span>.</span>me</h1>

        <p className={styles.text}>
          Thank you for your interest in contacting me. If after reviewing my skillset,
          experience, and portfolio, you feel that I would be the right candidate for an
          interesting opportunity, please feel free to reach out to me, thanks!
        </p>

        <a href='mailto:hello@joelrivera.me'>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}>
            <p>Get in touch</p>
          </motion.button>
        </a>
      </div>
    </div>
  )
}