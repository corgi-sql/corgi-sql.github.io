"use client";

import { Link } from "@heroui/react";
import React from "react";

import Image from "next/image";

import genalLogo from "@/assets/gena_logo.png";
import cornellLogo from "@/assets/cornell_logo.png";

function GenaFooterLink() {
  return (
    <div className="flex gap-8 text-nowrap items-center">
      <div className="flex-1">
        <Image
          alt="Gena logo"
          src={genalLogo}
          width={40 * 574/140}
          height={40}
        />
      </div>
      <div className="flex-1">
        <Image
          alt="Cornell logo"
          src={cornellLogo}
          width={50 * 2252/572}
          height={50}
        />
      </div>
    </div>
  );
}

export default GenaFooterLink;
