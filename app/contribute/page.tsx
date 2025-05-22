"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/react";
import corgiLogo from "@/assets/corgi_logo.png";
import DatabaseSchemaContribution from "@/components/DatabaseSchemaContribution";
import QueryContribution from "@/components/QueryContribution";

function ContributePage() {
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
            <Card className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-carnelian text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-semibold">
                    Test your model against our benchmark!
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-base">
                  This is the easiest way to contribute to the txt2sql
                  community! Test your model performance against other models on
                  classic txt2sql questions as well as generative responses.
                </p>
              </CardBody>
              <CardFooter className="pt-4">
                <Button
                  as={NextLink}
                  href="/rankings"
                  className="w-full bg-carnelian text-white font-semibold"
                >
                  Submit Model
                </Button>
              </CardFooter>
            </Card>

            {/* Contribution Option 2 */}
            <Card className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-carnelian text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-semibold">
                    Evaluate soft-eval model responses
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
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
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-carnelian text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
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
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-carnelian text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
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
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-carnelian text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
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

export default ContributePage;
