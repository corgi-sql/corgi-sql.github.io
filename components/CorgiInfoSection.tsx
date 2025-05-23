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
                  — designed to push the boundaries of text-to-SQL in the
                  generative AI era. CORGI represents a significant evolution in
                  how we evaluate and understand natural language database
                  querying capabilities.
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
                        A significant portion of questions focus on
                        recommendation and prediction queries, evaluated through
                        human-in-the-loop assessment for nuanced understanding.
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
                        CORGI v1.0 features real-world business databases and
                        queries, testing domain-specific terminology and
                        practical applications.
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
                        Enhanced complexity with significantly more tables and
                        relationships per database compared to previous
                        benchmarks.
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
                        No rigid test split — encouraging zero-shot methods,
                        templates, and creative training data generation
                        approaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-gray-200">
                <Button
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
                </Button>
                <Button
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
