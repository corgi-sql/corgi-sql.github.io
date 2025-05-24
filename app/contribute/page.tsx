"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import corgiLogo from "@/assets/corgi_logo.png";
import DatabaseSchemaContribution from "@/components/DatabaseSchemaContribution";
import CorgiInfoSection from "@/components/CorgiInfoSection";
import QueryContribution from "@/components/QueryContribution";

function NumberedCircle({ number }: { number: number }) {
  return (
    <div className="w-8 h-8 min-w-8 min-h-8 bg-carnelian text-white rounded-full flex items-center justify-center font-bold text-sm leading-none">
      {number}
    </div>
  );
}

function ContributePage() {
  const databaseData = [
    {
      name: "TBD",
      tableCount: "X",
      bestScore: "XX.X",
      averageScore: "XX.X",
    },
  ];

  return (
    <div>
      <div className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
        <div id="corgi-logo">
          <Image src={corgiLogo} width={500} height={500} alt="Corgi logo" />
        </div>

        <div className="max-w-6xl mx-auto mt-12 mb-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            How can I contribute?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contribution Option 1 */}
            <Card className="bg-gray-50 p-6 border-l-4 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <NumberedCircle number={1} />
                  <h2 className="text-xl font-semibold">
                    Test your model against our benchmark!
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0 flex-1">
                <p className="text-base">
                  This is the easiest way to contribute to the txt2sql
                  community! Test your model performance against other models on
                  classic txt2sql questions as well as generative responses.
                </p>
              </CardBody>
              <CardFooter className="pt-4">
                <Button
                  as="a"
                  href="https://docs.google.com/document/d/1pVwOxEENK9XC9yCTN0Z5PAJC0s3U24rKwHVCg4MlwGU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-carnelian text-white font-semibold"
                >
                  Submit Model
                </Button>
              </CardFooter>
            </Card>

            {/* Contribution Option 2 */}
            <Card className="bg-gray-50 p-6 border-l-4 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <NumberedCircle number={2} />
                  <h2 className="text-xl font-semibold">
                    Evaluate soft-eval model responses
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0 flex-1">
                <p className="text-base">
                  Every single binary evaluation is accounted for in our
                  soft-eval ranking. Help us evaluate the best models by
                  evaluating model-to-model responses on the Evaluate page.
                </p>
              </CardBody>
              <CardFooter className="pt-4">
                <Button
                  as={NextLink}
                  href="/evaluate"
                  className="w-full bg-carnelian text-white font-semibold"
                >
                  Evaluate Models
                </Button>
              </CardFooter>
            </Card>

            {/* Contribution Option 3 */}
            <Card className="bg-gray-50 p-6 border-l-4 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <NumberedCircle number={3} />
                  <h2 className="text-xl font-semibold">
                    Contribute to our open-source PyPI package
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0 flex-1">
                <p className="text-base">
                  Our PyPI package is live and active! You can contribute by
                  making a PR, joining our public discussions, or giving us
                  feedback.
                </p>
              </CardBody>
              <CardFooter className="pt-4">
                <Button
                  as="a"
                  href="https://github.com/genaasia/txt2sql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-carnelian text-white font-semibold"
                >
                  Contribute Code
                </Button>
              </CardFooter>
            </Card>

            {/* Contribution Option 4 */}
            <Card className="bg-gray-50 p-6 border-l-4 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <NumberedCircle number={4} />
                  <h2 className="text-xl font-semibold">
                    Send in a database schema
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0 flex-1">
                <p className="text-base">
                  Do you have a database you want txt2sql-hacked? We can help
                  you! We can help incorporate a version of your database schema
                  to our next release iteration to reach a community of
                  researchers and developers.
                </p>
              </CardBody>
              <CardFooter className="pt-4">
                <DatabaseSchemaContribution />
              </CardFooter>
            </Card>

            {/* Contribution Option 5 */}
            <Card className="bg-gray-50 p-6 border-l-4 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <NumberedCircle number={5} />
                  <h2 className="text-xl font-semibold">
                    Contribute natural language queries
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0 flex-1">
                <p className="text-base">
                  Have interesting business questions that challenge txt2sql
                  models? Share your natural language queries and help expand
                  our benchmark with diverse, real-world scenarios that push the
                  boundaries of AI.
                </p>
              </CardBody>
              <CardFooter className="pt-4">
                <QueryContribution />
              </CardFooter>
            </Card>
          </div>

          {/* Database Performance Table */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Database Schema Performance
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Your database could be the next challenge that pushes txt2sql
              research forward!
              <br />
              See how contributed database schemas perform across different
              models.
            </p>

            <div className="max-w-4xl mx-auto">
              <Table>
                <TableHeader>
                  <TableColumn className="text-center">
                    Database Name
                  </TableColumn>
                  <TableColumn className="text-center">
                    Number of Tables
                  </TableColumn>
                  <TableColumn className="text-center">
                    Best Performing Score
                  </TableColumn>
                  <TableColumn className="text-center">
                    Average Score
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {databaseData.map((item, index) => (
                    <TableRow key={`database-${index}`}>
                      <TableCell className="text-center font-medium">
                        {item.name}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.tableCount}
                      </TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">
                        {item.bestScore}%
                      </TableCell>
                      <TableCell className="text-center">
                        {item.averageScore}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Database performance measured across evaluated models in the
                benchmark
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-carnelian h-16 w-full"></div>
    </div>
  );
}

export default ContributePage;
