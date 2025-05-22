"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/react";
import NextLink from "next/link";
import Image from "next/image";

import NavbarLink from "@/components/NavbarLink";
import whiteCornellLogo from "@/assets/cornell_seal_simple_web_white.svg";
import genaWhiteLogo from "@/assets/gena_green_white.svg";

function Navbar() {
  return (
    <NextUINavbar className="bg-carnelian" maxWidth="xl">
      <NavbarBrand className="hidden sm:block">
        <NextLink href="/">
          <div className="flex gap-8 text-nowrap">
            <Image alt="Gena logo" src={genaWhiteLogo} width="75" />
            <Image alt="Cornell logo" src={whiteCornellLogo} width="40" />
          </div>
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
