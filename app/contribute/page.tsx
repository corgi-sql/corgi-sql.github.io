"use client";

import { ReactNode, useActionState, useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button, Textarea } from "@heroui/react";
import corgiLogo from "@/assets/corgi_logo.png";
import genaLogo from "@/assets/gena_logo.png";
import cornellLogo from "@/assets/cornell_logo.png";

function ContributePage() {
  return (
    <div>
      <div className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
        <div id="corgi-logo">
          <Image src={corgiLogo} width={500} height={500} alt="Corgi logo" />
        </div>
        <div id="contribute" className="mt-20 text-2xl text-center">
          {"How can I contribute?"}
        </div>
      </div>
      <div className="bg-carnelian mt-16">
        <div className="container flex-grow mx-auto max-w-4xl py-20">
          <Textarea
            placeholder="Enter your code or database schema here"
            minRows={14}
          />
          <div className="flex mt-8 gap-8 justify-center">
            <Button className="w-64">{"Contribute Code"}</Button>
            <Button className="w-64">{"Contribute Database Schema"}</Button>
          </div>
          <div className="mt-20 text-white text-2xl text-center">
            {"Queries you want to add?"}
          </div>
          <div className="text-white text-lg text-center">
            {
              "We will review your query and add to the appropriate dev/test set"
            }
          </div>
          <Textarea placeholder="Enter your query here" />
          <div className="flex mt-8 gap-8 justify-center">
            <Button className="w-64">{"Contribute Query"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributePage;
