"use client";

import { ReactNode, useActionState, useState, useEffect } from "react";
import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import corgiLogo from "@/assets/corgi_logo.png";
import genaLogo from "@/assets/gena_logo.png";
import cornellLogo from "@/assets/cornell_logo.png";

function ContributePage() {
  return (
    <div>
      <div id="corgi-logo">
        <Image
          src={corgiLogo}
          width={500}
          height={500}
          alt="Corgi logo"
        />
      </div>
      <div id="contribute" className="mt-20 text-center">
      	{"Coming Soon"}
      </div>
    </div>
  );
}

export default ContributePage;
