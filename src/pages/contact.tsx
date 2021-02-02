import styles from 'styles/contact.module.scss'

export default () => {
  return (
    <div className={styles.contact}>
      <header>
        <img
          src='/images/logo-dark.svg'
          className={styles.logo}
        />
      </header>

      <div className={styles.body}>
        <h1>hello@joelrivera<span>.</span>me</h1>

        <p>
          Thank you for your interest in contacting me. If after reviewing my skillset,
          experience, and portfolio, you feel that I would be the right candidate for an
          interesting opportunity, please feel free to reach out to me, thanks!
        </p>

        <a href='mailto:hello@joelrivera.me'>
          <button className={styles.button}>
            <p>Get in touch</p>
          </button>
        </a>
      </div>
    </div>
  )
}