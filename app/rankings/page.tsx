"use client";

import { ReactNode, useActionState, useState, useEffect } from "react";
import Image from "next/image";
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
      <div id="corgi-logo">
        <Image
          src={corgiLogo}
          width={500}
          height={500}
          alt="Corgi logo"
        />
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
                    <div className="text-xs text-gray-400 text-center">{item.company}</div>
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
                  <div className="text-xs text-gray-400 text-center">{item.company}</div>
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
  );
}

export default RankingsPage;
