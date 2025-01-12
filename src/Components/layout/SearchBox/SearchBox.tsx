
import * as React from "react";
import SearchImage from "./SearchImage";
import SearchFields from "./SearchFields";


export default function SearchBox() {
  return (
    <div className="global-w bg-[#242424] rounded-xl grid">
      <SearchImage />
      <SearchFields />
      
    </div>
  );
}
