import { FC, CSSProperties } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import styles from './styles.module.scss'

interface IProps {
  type?: 'light' | 'dark'
  href?: string
  absolute?: boolean
}

export const Header: FC<IProps> = props => {

  const { pathname } = useRouter()

  const {
    type = 'light',
    href = '/',
    absolute = true
  } = props

  const style: CSSProperties = {
    position: absolute ? 'absolute' : 'relative'
  }

  const Navigation = () => {

    const style: CSSProperties = {
      color: (type === 'light' ? 'white' : 'black')
    }

    const portfolioClass = pathname === '/portfolio' ? styles.active : null
    const contactClass   = pathname === '/contact'   ? styles.active : null

    return (
      <nav className={styles.nav}>
        <Link href='/portfolio'>
          <a style={style} className={portfolioClass}>
            Portfolio
          </a>
        </Link>

        <Link href='/contact'>
          <a style={style} className={contactClass}>
            Contact
          </a>
        </Link>
      </nav>
    )
  }

  return (
    <header className={styles.header} style={style}>
      <Link href={href}>
        <img
          src={`/images/logo-${type}.svg`}
          className={styles.logo}
          alt='Logo'
          title='Logo'
        />
      </Link>

      <Navigation />
    </header>
  )
}