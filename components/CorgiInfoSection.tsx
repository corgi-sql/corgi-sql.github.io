import { Button, Card, CardBody } from "@heroui/react";

function CorgiInfoSection() {
  return (
    <div className="bg-carnelian mt-16">
      <div className="container flex-grow mx-auto max-w-5xl py-12 px-4">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardBody className="p-0">
            <div className="p-6 lg:p-8">
              {/* Header Section */}
              <div className="text-center mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-carnelian mb-3">
                  About CORGI SQL
                </h2>
                <div className="w-20 h-1 bg-carnelian mx-auto rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="text-gray-700 text-base leading-relaxed mb-6">
                <p className="mb-4">
                  Welcome to the{" "}
                  <strong className="text-carnelian">
                    CORGI SQL benchmark
                  </strong>{" "}
                  . The CORGI benchmark was made to push the boundaries of
                  txt2sql in the generative AI era. There are a few noticeable
                  differences between CORGI and previous txt2sql benchmarks.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-carnelian">
                  <div className="flex items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Soft Evaluation System
                      </h3>
                      <p className="text-gray-600 text-sm">
                        A significant portion of the questions are
                        recommendation or prediction based natural language
                        queries. These queries are "soft evaluated" with human
                        input.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-carnelian">
                  <div className="flex items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Business Domain Focus
                      </h3>
                      <p className="text-gray-600 text-sm">
                        CORGIv1.0 has business domain databases and queries,
                        designed to test domain-specific lingo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-carnelian">
                  <div className="flex items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Complex Schema Design
                      </h3>
                      <p className="text-gray-600 text-sm">
                        There are many more tables and relations per database in
                        CORGI than previous benchmarks. Many schemas are based
                        on real industry schema designs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-carnelian">
                  <div className="flex items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Flexible Evaluation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        There is no test split. Groups are free to experiment
                        with zero-shot/template methods or generate train data
                        themselves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-gray-200">
                {/* <Button
                  className="w-full sm:w-auto bg-carnelian text-white font-semibold px-8 py-3 text-base hover:bg-carnelian/90 transition-colors"
                  size="lg"
                >
                  CORGI v1.0 Dev Split
                </Button>
                <Button
                  className="w-full sm:w-auto bg-white text-carnelian border-2 border-carnelian font-semibold px-8 py-3 text-base hover:bg-gray-50 transition-colors"
                  size="lg"
                  variant="bordered"
                >
                  Read the Paper
                </Button> */}
                <Button
                  as="a"
                  href="https://docs.google.com/document/d/1pVwOxEENK9XC9yCTN0Z5PAJC0s3U24rKwHVCg4MlwGU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gray-800 text-white font-semibold px-8 py-3 text-base hover:bg-gray-700 transition-colors"
                  size="lg"
                >
                  How to Submit
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CorgiInfoSection;
