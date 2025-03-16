import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          className="hidden md:block"
          alt="Logo with name"
          width={120}
          height={32}
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          className="mr-2 md:hidden"
          alt="logo"
          width={32}
          height={32}
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
