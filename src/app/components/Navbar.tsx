import { FiSearch, FiShoppingCart } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[0.2em] text-primary"
          >
            LOUMATIX
          </Link>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search events"
                className="pl-10 pr-4 py-2 border rounded-lg bg-transparent"
              />
              <FiSearch className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <ThemeToggle />
            <FiShoppingCart className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
