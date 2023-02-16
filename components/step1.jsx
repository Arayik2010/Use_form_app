import React from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "./mainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useData } from "@/dataContext";
import { TextField } from "@mui/material";
import styles from "@/styles/loginPass.module.css";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not container number")
    .required("First name is empty"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not container number")
    .required("Last name is empty"),
});

export default function Step1() {
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data) => {
    router.push("/posts/step2");
    setValues(data);
  };
  return (
    <MainContainer>
      <h2>Stap1</h2>
      <form noValidate className="validation" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <TextField
            {...register("firstName")}
            helperText={errors?.firstName?.message}
            id="firstName"
            label="First Name"
            name="firstName"
          />
        </div>

        <div className={styles.input}>
          <TextField
            {...register("lastName")}
            helperText={errors?.lastName?.message}
            id="lastName"
            label="Last Name"
            name="lastName"
          />
        </div>

        <button className={styles.button}>Next</button>
      </form>
    </MainContainer>
  );
}
