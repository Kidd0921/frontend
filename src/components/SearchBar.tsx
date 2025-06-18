'use client';

import { useRouter } from "next/navigation";
import { useSearchStore } from "@/store/searchStore";

const SearchBar = () => {
  const { query, setQuery } = useSearchStore();
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productName = formData.get("productName") as string;

    if (productName) {
      router.push(`/search?q=${encodeURIComponent(productName)}`);
    }
  };

  return (
    <form 
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input 
        type="text"
        value={query}
        name="productName"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="flex-1 bg-transparent outline-none" 
      />
      <button 
        className="cursor-pointer"
        type="submit"  
      >
        <svg 
          className="h-5 w-5 text-teal-800"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <path 
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  )
}

export default SearchBar
