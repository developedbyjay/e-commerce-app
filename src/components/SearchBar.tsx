import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  return (
    <div className="hidden sm:flex items-center border ring-1 ring-gray-200 gap-2 border-gray-300 rounded-md py-1 px-2 shadow-md">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow outline-none"
      />
    </div>
  );
}
