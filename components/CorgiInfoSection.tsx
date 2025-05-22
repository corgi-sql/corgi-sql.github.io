import { Button, Card, CardBody } from "@heroui/react";

function CorgiInfoSection() {
  return (
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
  );
}

export default CorgiInfoSection;
