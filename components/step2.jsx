import React from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "./mainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { Checkbox, FormControlLabel } from "@mui/material";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useData } from "@/dataContext";
import Input from "./Input";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("email is empty"),
});

export default function Step2() {
  const { data, setValues } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber:data.phoneNumber
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const hasPhone = watch("hasPhone");
  
  
  const onSubmit = (data) => {
    router.push("/posts/result");
    setValues(data);
  };

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    }
    return phoneNumber.formatInternational();
  };
  return (
    <div>
      <MainContainer>
        <h2>Stap 2</h2>
        <form
          noValidate
          className="validation"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            register={{ ...register("email") }}
            id="email"
            type="email"
            label="Email"
            name="email"
          />
          <p>{errors?.email?.message}</p>

          <FormControlLabel
            control={
              <Checkbox
                name="hasPhone"
                {...register("hasPhone")}
                color="primary"
              />
            }
            label="Du you have a phone"
          />
          {hasPhone && (
          <Input
            register={{ ...register("phoneNumber",{ onChange:(e) => {
              e.target.value = normalizePhoneNumber(e.target.value);
            }}) }}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
           
          />
          )}
     

          <input type="submit" />
        </form>
      </MainContainer>
    </div>
  );
}
