import React from "react";
import styles from "@/styles/loginPass.module.css";

export const PrimeryButton = ({ name, onClick }) => {
  return (
    <div>
      <button className={styles.button_style} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
