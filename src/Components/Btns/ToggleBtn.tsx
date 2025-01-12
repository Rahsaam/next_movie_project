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
    <div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="movie">movie</ToggleButton>
        <ToggleButton value="tv">tv</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
