"use client";

import Image from "next/image";
import Link from "next/link";

import ToggleDarkMode from "./ToggleDarkMode";

/**
 * Navigation component
 * @returns
 */
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Geo-sort Logo"
          width={30}
          height={30}
          className="0bject-contain"
        />
        <p className="logo_text">Geo Sort</p>
      </Link>

      <div className="flex">
        <ToggleDarkMode />
      </div>
    </nav>
  );
};

export default Nav;
