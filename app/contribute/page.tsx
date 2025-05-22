"use client";

import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button, Textarea } from "@heroui/react";
import corgiLogo from "@/assets/corgi_logo.png";
import DatabaseSchemaContribution from "@/components/DatabaseSchemaContribution";

function ContributePage() {
  return (
    <div>
      <div className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
        <div id="corgi-logo">
          <Image src={corgiLogo} width={500} height={500} alt="Corgi logo" />
        </div>

        <div className="max-w-5xl mx-auto mt-12 mb-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            How can I contribute?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </Card>

            {/* Contribution Option 3 */}
            <Card className="h-full">
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
              <CardBody className="pt-0">
                <p className="text-base">
                  Our PyPI package is live and active! You can contribute by
                  making a PR, joining our public discussions, or giving us
                  feedback.
                </p>
              </CardBody>
            </Card>

            {/* Contribution Option 4 */}
            <Card className="h-full">
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
              <CardBody className="pt-0">
                <p className="text-base">
                  Do you have a database you want txt2sql-hacked? We can help
                  you! We can help incorporate a version of your database schema
                  to our next release iteration to reach a community of
                  researchers and developers.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-carnelian mt-16">
        <div className="container flex-grow mx-auto max-w-4xl py-20">
          <div className="flex mt-8 gap-8 justify-center">
            <Button
              as="a"
              href="https://github.com/genaasia/txt2sql"
              target="_blank"
              rel="noopener noreferrer"
              className="w-64"
            >
              {"Contribute Code"}
            </Button>
            <DatabaseSchemaContribution />
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
