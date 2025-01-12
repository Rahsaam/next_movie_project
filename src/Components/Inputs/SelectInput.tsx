import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { IConutryOptionsProps } from "@/Types/SearchOptions";

export default function SelectInput({items}: IConutryOptionsProps) {
  return (
    <div className="bg-[#242424] rounded-xl">
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Country"
            defaultValue="EUR"
            helperText="Please select your country"
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
