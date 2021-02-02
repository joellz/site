import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export const Dropdown = ({ list, onItemSelect, activeSkill }) => {
  const [ panelActive, setPanelActive ] = useState(false)

  const onChange = (item) => {
    onItemSelect(item.target.value)
  }

  const CustomSelect = () => {
    return (
      <motion.select
        className={styles.panel}
        onChange={onChange}
        defaultValue={activeSkill}>
        {
          list.map((item, i) => {
            return ( <option key={i}>{item}</option> )
          })
        }
      </motion.select>
    )
  }

  const setActiveState = () => {
    setPanelActive(true)
  }

  return (
    <div className={styles.dropdown} onClick={setActiveState}>
      <CustomSelect />
      <img src='/images/dropdown.svg' />
    </div>
  )
}