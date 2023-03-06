import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "./mainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useData } from "@/dataContext";
import styles from "@/styles/loginPass.module.css";
import { PrimeryButton } from "./PrimeryButton";
import InputGroup from "./InputGroup";

const schema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name should not container number")
      .required("First name is empty"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not container number")
      .required("Last name is empty"),
  })
  .required();

export default function Step1() {
  const { data, setValues } = useData();
  const [focused, setFocused] = useState(false);
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
      <form className="validation" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          register={{ ...register("firstName") }}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
        />
        <p className={styles.error_text}>{errors?.firstName?.message}</p>

        <InputGroup
          register={{ ...register("lastName") }}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
        />

        <p className={styles.error_text}>{errors?.lastName?.message}</p>

        <PrimeryButton name="Next" />
      </form>
    </MainContainer>
  );
}
