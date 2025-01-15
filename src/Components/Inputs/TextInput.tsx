import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ITextInput } from "@/Types/SearchOptions";

export default function TextInput({ textLabel }: ITextInput) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          width: "25ch",
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // border هنگام فوکوس سفید
            },
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={textLabel} variant="outlined" />
    </Box>
  );
}
