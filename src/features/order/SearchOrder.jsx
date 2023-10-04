import { useState } from "react";

function SearchOrder() {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="Search order #"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-28  rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-500 sm:w-60 sm:focus:w-72"
    />
  );
}

export default SearchOrder;
