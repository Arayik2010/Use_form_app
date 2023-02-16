
import React from 'react'
import styles from '@/styles/loginPass.module.css'

export const MainContainer =({children}) => {
  return (
    <div className={styles.maincontainer}>
        {children}
    </div>
  )
}
