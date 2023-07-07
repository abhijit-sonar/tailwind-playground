import { Search } from "react-feather";

export function SearchBar() {
  return (
    <div className="flex items-center">
      <Search className=" text-slate-300" />

      <input
        placeholder="Search something..."
        className="
          hidden lg:inline
          grow 
          text-lg text-slate-400 focus:text-slate-300
          bg-transparent
          py-1 px-4"
      />
    </div>
  );
}
