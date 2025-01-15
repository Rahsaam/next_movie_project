"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleBtn() {
  const [alignment, setAlignment] = React.useState<string | null>("movie");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="h-14">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="movie"
          sx={{
            color: "white", // متن همیشه سفید
            border: "1px solid white", // border سفید
            "&.Mui-selected": {
              backgroundColor: "orange !important", // پس‌زمینه هنگام انتخاب
            },
            
          }}
        >
          movie
        </ToggleButton>
        <ToggleButton
          value="tv"
          sx={{
            color: "white", // متن همیشه سفید
            border: "1px solid white", // border سفید
            "&.Mui-selected": {
              backgroundColor: "orange !important", // پس‌زمینه هنگام انتخاب
            },
            
          }}
        >
          tv
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
