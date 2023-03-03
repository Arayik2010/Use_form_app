import React from 'react'
import styles from "@/styles/loginPass.module.css";

export const PrimeryButton = ({name}) => {
  return (
    <div>
  <button className={styles.button_style}>{name}</button>
      
    </div>
  )
}
