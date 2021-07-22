import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="flex items-center px-12 h-20">
      <Image src="/images/logo.svg" alt="" width={80} height={80} />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="uppercase text-sm font-medium">Home</span>
        </a>
        <a className="header-link">
          <SearchIcon className="h-4" />
          <span className="uppercase text-sm font-medium">Search</span>
        </a>
        <a className="header-link">
          <PlusIcon className="h-4" />
          <span className="uppercase text-sm font-medium">Watchlist</span>
        </a>
        <a className="header-link">
          <StarIcon className="h-4" />
          <span className="uppercase text-sm font-medium">Originals</span>
        </a>
        <a className="header-link">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="uppercase text-sm font-medium">Movies</span>
        </a>
        <a className="header-link">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="uppercase text-sm font-medium">Series</span>
        </a>
      </div>
      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">
        Login
      </button>
    </header>
  );
}

export default Header;
