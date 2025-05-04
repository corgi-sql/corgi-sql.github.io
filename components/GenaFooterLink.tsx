"use client";

import { Link } from "@heroui/react";
import React from "react";

import Image from "next/image";

import genalLogo from "@/assets/gena_logo.png";
import cornellLogo from "@/assets/cornell_logo.png";

function GenaFooterLink() {
  return (
    <div className="flex gap-8">
      <Image
        alt="Gena logo"
        src={genalLogo}
        width={70}
      />
      <Image
        alt="Cornell logo"
        src={cornellLogo}
        width={140}
      />
    </div>
  );
}

export default GenaFooterLink;
