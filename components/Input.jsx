import React, { forwardRef } from "react";
import styles from "@/styles/loginPass.module.css";
 const Input = ({id, type, placeholder, name, label, register,...props}, ref) => {
  return (
    <div>
      <input 
      className = {styles.input_style}
       placeholder={placeholder}
       {...register}
       type={type}
       id={id}
       name={name}
       label={label}
       {...props}
      
       
      />
    </div>
  );
};

export default forwardRef(Input)