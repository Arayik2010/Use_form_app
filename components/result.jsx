import React from "react";
import { MainContainer } from "./mainContainer";
import Link from "next/link";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useData } from "@/dataContext";
import styles from "@/styles/loginPass.module.css";

export default function Result() {
  const { data } = useData();
  const entries = Object.entries(data);

  const onSubmit = async () => {
    const formData = new FormData();
  

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch("", {
      method: "POST",
      body: formData,
    });
    if (res.status === 200) {
      console.log("Great job", "success");
    }
}
    return (


        <MainContainer>

            <h2>Form Values</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Field
                            </TableCell>
                            <TableCell>
                                Values
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                                <TableCell>{entry[0]}</TableCell>
                                <TableCell align='right'>{entry[1]?.toString()}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

            </TableContainer>

      <button className={styles.button} onClick={onSubmit()}>
        Send
      </button>
      <Link className={styles.navlink} href="/">
        Start over
      </Link>
    </MainContainer>
  );
}
