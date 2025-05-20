"use client";

import { ReactNode, useActionState, useState, useEffect } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
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

function RankingsPage() {
  const data = [
    {
      model: "GenaSQL",
      company: "Gena AI",
      dev: "90.15%",
      test: "90.24%",
    },
    {
      model: "Human Performance",
      company: "Data Engineers + DB Students",
      test: "88.97%",
    },
    {
      model: "AskData + GPT-4o",
      company: "AT&T CDO - DSAIR",
      dev: "75.36%",
      test: "77.14%",
    },
    {
      model: "CHASE-SQL + Gemini",
      company: "Google Cloud",
      dev: "74.90%",
      test: "76.02%",
    },
    {
      model: "Contextual-SQL",
      company: "Contextual AI",
      dev: "73.50%",
      test: "75.63%",
    },
    {
      model: "XiYan-SQL",
      company: "Alibaba Cloud",
      dev: "73.34%",
      test: "75.63%",
    },
    {
      model: "ExSL + granite-34b-code",
      company: "IBM Research AI",
      dev: "72.29%",
      test: "72.78%",
    },
    {
      model: "AskData + GPT-4o",
      company: "AT&T CDO - DSAIR",
      dev: "75.36%",
      test: "77.14%",
    },
    {
      model: "CHASE-SQL + Gemini",
      company: "Google Cloud",
      dev: "74.90%",
      test: "76.02%",
    },
    {
      model: "Contextual-SQL",
      company: "Contextual AI",
      dev: "73.50%",
      test: "75.63%",
    },
    {
      model: "XiYan-SQL",
      company: "Alibaba Cloud",
      dev: "73.34%",
      test: "75.63%",
    },
    {
      model: "ExSL + granite-34b-code",
      company: "IBM Research AI",
      dev: "72.29%",
      test: "72.78%",
    },
    {
      model: "AskData + GPT-4o",
      company: "AT&T CDO - DSAIR",
      dev: "75.36%",
      test: "77.14%",
    },
    {
      model: "CHASE-SQL + Gemini",
      company: "Google Cloud",
      dev: "74.90%",
      test: "76.02%",
    },
    {
      model: "Contextual-SQL",
      company: "Contextual AI",
      dev: "73.50%",
      test: "75.63%",
    },
    {
      model: "XiYan-SQL",
      company: "Alibaba Cloud",
      dev: "73.34%",
      test: "75.63%",
    },
    {
      model: "ExSL + granite-34b-code",
      company: "IBM Research AI",
      dev: "72.29%",
      test: "72.78%",
    },
    {
      model: "AskData + GPT-4o",
      company: "AT&T CDO - DSAIR",
      dev: "75.36%",
      test: "77.14%",
    },
    {
      model: "CHASE-SQL + Gemini",
      company: "Google Cloud",
      dev: "74.90%",
      test: "76.02%",
    },
    {
      model: "Contextual-SQL",
      company: "Contextual AI",
      dev: "73.50%",
      test: "75.63%",
    },
  ];

  return (
    <div>
      <div className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
        <div id="corgi-logo">
          <Image src={corgiLogo} width={500} height={500} alt="Corgi logo" />
        </div>
        <div id="rankingTables" className="flex flex-wrap">
          <div id="columnOne" className="flex-1 p-4 text-center">
            <h2 className="pb-4">{"Hard-Evals - Execution Match Scores"}</h2>
            <Table>
              <TableHeader>
                <TableColumn className="text-center">Model</TableColumn>
                <TableColumn className="text-center">Dev</TableColumn>
                <TableColumn className="text-center">Test</TableColumn>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={item + "-" + index}>
                    <TableCell>
                      <div className="text-center">{item.model}</div>
                      <div className="text-xs text-gray-400 text-center">
                        {item.company}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{item.dev}</TableCell>
                    <TableCell className="text-center">{item.test}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div id="columnTwo" className="flex-1 p-4 text-center">
            <h2 className="pb-4">{"Soft-Evals"}</h2>
            <Table>
              <TableHeader>
                <TableColumn className="text-center">Model</TableColumn>
                <TableColumn className="text-center">Dev</TableColumn>
                <TableColumn className="text-center">Test</TableColumn>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={item + "-" + index}>
                    <TableCell>
                      <div className="text-center">{item.model}</div>
                      <div className="text-xs text-gray-400 text-center">
                        {item.company}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{item.dev}</TableCell>
                    <TableCell className="text-center">{item.test}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="bg-carnelian mt-16">
        <div className="container flex-grow mx-auto max-w-4xl py-20">
          <Card>
            <CardBody>
              <div className="whitespace-pre-wrap p-8">
                {
                  'Hello! This is the CORGI SQL benchmark. The CORGI benchmark was made to push the boundaries of txt2sql in the generative AI era. There are a few noticeable differences between CORGI and previous txt2sql benchmarks:\n    1. x% of the questions are recommendation or prediction based natural language queries. These queries are "soft evaluated" with human input.\n    2. CORGIv1.0 has business domain databases and queries, designed to test domain-specific lingo.\n    3. There are many more tables and relations per database in CORGI than previous benchmarks.\n    4. There is no test split. Groups are free to experiment with zero-shot/template methods or generate train data themselves. \n    For more information, check out our paper! For citation, use: XXXXXXX. Happy CORGI-ing!'
                }
              </div>
            </CardBody>
          </Card>
          <div className="flex mt-8 gap-8 justify-center">
            <Button className="w-64">{"CORGI v1.0 Dev Split"}</Button>
            <Button className="w-64">{"CORGI Paper"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankingsPage;
