import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { IInputOptionsProps } from "@/Types/SearchOptions";

export default function SelectInput({ items, labelText }: IInputOptionsProps) {
  return (
    <div className="bg-[#242424] rounded-xl">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "25ch" },
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
              borderColor: "white",
            },
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label={labelText}
            defaultValue="EUR"
          >
            {items.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </div>
  );
}
