import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 container">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        {/* <Link
              href="/categories"
              className="hover:text-primary transition-colors"
            >
              Categories
            </Link> */}
        <Link href="/stories" className="hover:text-primary transition-colors">
          Stories
        </Link>
      </nav>
    </>
  );
}
