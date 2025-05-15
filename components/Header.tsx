import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          className="hidden md:block"
          alt="Logo with name"
          width={120}
          height={40}
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
