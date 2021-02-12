import { motion } from 'framer-motion'
import { Header } from 'components/header'

import styles from 'styles/contact.module.scss'
import Head from 'next/head'

const Contact = () => {
  return (
    <div className={styles.contact}>

      <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Contact Joel Rivera for interesting job opportunities." />
        <meta property='og:title' content='Contact Me' />
        <meta property='og:image' content='/images/og-image.png' />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property='og:description' content="Contact Joel Rivera for interesting job opportunities." />
        <meta property="og:url" content="https://joelrivera.me/" />
        <meta property="og:type" content="website" />
      </Head>

      <Header
        type='dark'
        absolute={false}
      />

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

export default Contact