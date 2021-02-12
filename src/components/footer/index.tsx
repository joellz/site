import { FC } from 'react'
import { useRouter } from 'next/router'
import { openInNewTab } from 'helpers'

import Link from 'next/link'
import styles from './styles.module.scss'

interface IProps {
  active: boolean
}

export const Footer: FC<IProps> = ({ active }) => {
  const { pathname } = useRouter()
  const resumeURL = 'https://jr-portfolio.s3.us-east.cloud-object-storage.appdomain.cloud/resume.pdf'

  if(!active){
    return null
  }

  return (
    <footer className={styles.footer}>

      <div className={styles.actions}>
       {
         pathname.includes('portfolio') ? null :
         <Link href='/portfolio'>
          <h1>View Portfolio</h1>
         </Link>
       }

        <h1 onClick={() => openInNewTab(resumeURL)}>
          View Resumé
        </h1>

        <Link href='/contact'>
          <h1>Contact Me</h1>
        </Link>
      </div>

      <img
        className={styles.darklogo}
        src='/images/logo-dark.svg'
        alt='Logo'
        title='Logo'
      />
    </footer>
  )
}