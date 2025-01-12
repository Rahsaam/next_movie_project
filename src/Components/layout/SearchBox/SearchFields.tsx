import React from "react";
import ToggleBtn from "@/Components/Btns/ToggleBtn";
import SelectInput from "@/Components/Inputs/SelectInput";
import { countries } from "@/utils/SearchOptions";
export default function SearchFields() {
  return (
    <>
      <ToggleBtn />
      <SelectInput items={countries} />
    </>
  );
}
