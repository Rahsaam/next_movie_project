"use client";

import * as React from "react";
import LeftSearchbar from "./LeftSearchbar";
import MiddleSearchbar from "./MiddleSearchbar";
import RightSearchbar from "./RightSearchbar";

export default function SearchBox() {
  return (
    <div className="global-w bg-[#242424] rounded-xl flex justify-between items-center" style={{ padding: '20px' }}>
      <LeftSearchbar />
      <MiddleSearchbar />
      <RightSearchbar />
    </div>
  );
}
