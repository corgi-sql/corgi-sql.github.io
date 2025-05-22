"use client";

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
import CorgiInfoSection from "@/components/CorgiInfoSection";

function RankingsPage() {
  const data = [
    {
      model: "TBD",
      company: "",
      dev: "TBD",
      test: "TBD",
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
      <CorgiInfoSection />
    </div>
  );
}

export default RankingsPage;
