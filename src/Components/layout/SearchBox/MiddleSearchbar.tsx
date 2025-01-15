import React from "react";
import ToggleBtn from "@/Components/Btns/ToggleBtn";
import SelectInput from "@/Components/Inputs/SelectInput";
import { countries } from "@/utils/SearchOptions";
import TextInput from "@/Components/Inputs/TextInput";

export default function MiddleSearchbar() {
  return (
    <div className="lg:w-7/12 w-full ">
      {/* ردیف اول: ToggleBtn و دو SelectInput */}
      <div className="flex flex-wrap justify-center mb-4">
        <div className="flex-1 min-w-[200px]">
          <ToggleBtn />
        </div>
        <div className="flex-1 min-w-[200px]">
          <TextInput textLabel="Director" />
        </div>
        <div className="flex-1 min-w-[200px]">
        <TextInput textLabel="Actors" />
        </div>
      </div>

      {/* ردیف دوم: سه SelectInput */}
      <div className="flex flex-wrap justify-center">
        <div className="flex-1 min-w-[200px]">
          <SelectInput labelText="Country" items={countries} />
        </div>
        <div className="flex-1 min-w-[200px]">
          <SelectInput labelText="Age" items={countries} />
        </div>
        <div className="flex-1 min-w-[200px]">
          <SelectInput labelText="test" items={countries} />
        </div>
      </div>
    </div>
  );
}