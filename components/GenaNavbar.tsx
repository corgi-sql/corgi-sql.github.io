"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/react";
import NextLink from "next/link";

import NavbarLink from "@/components/NavbarLink";

function Navbar() {
  return (
    <NextUINavbar className="bg-carnelian" maxWidth="xl">
      <NavbarBrand className="hidden sm:block">
        <NextLink href="/">
          <div></div>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex text-white" justify="end">
        <NavbarLink label="Rankings" link="/rankings" />
        {/* <NavbarLink label="Compare" link="/compare" /> */}
        <NavbarLink label="Evaluate" link="/evaluate" />
        <NavbarLink label="Contribute" link="/contribute" />
      </NavbarContent>

      <NavbarContent className="sm:hidden text-white" justify="center">
        <NavbarLink label="Rankings" link="/rankings" />
        {/* <NavbarLink label="Compare" link="/compare" /> */}
        <NavbarLink label="Evaluate" link="/evaluate" />
        <NavbarLink label="Contribute" link="/contribute" />
      </NavbarContent>
    </NextUINavbar>
  );
}

export default Navbar;
