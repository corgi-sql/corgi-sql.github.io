"use client";

import NextLink from "next/link";
import { NavbarItem } from "@heroui/react";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  link: string;
  matchingLinks?: Set<string>;
}

function NavbarLink({ label, link, matchingLinks }: Props) {
  const pathname = usePathname();

  const isActive = pathname.includes(link) || matchingLinks?.has(pathname);

  return (
    <NavbarItem>
      <NextLink
        className={
          isActive
            ? "font-medium relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary after:absolute after:bottom-0"
            : ""
        }
        color="foreground"
        href={link}
      >
        {label}
      </NextLink>
    </NavbarItem>
  );
}

export default NavbarLink;
