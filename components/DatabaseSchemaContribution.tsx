"use client";

import React, { useState } from "react";
import {
  Button,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

function DatabaseSchemaContribution() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [description, setDescription] = useState("");

  const handleEmailContribution = () => {
    const subject = encodeURIComponent(
      "Database Schema Contribution - CORGI SQL",
    );
    const body = encodeURIComponent(`Hi CORGI SQL Team,

I would like to contribute a database schema to the CORGI benchmark.

Database Description:
${description || "[Please describe your database - domain, size, complexity, etc.]"}

Schema Details:
- Database type: [PostgreSQL/MySQL/SQLite/etc.]
- Number of tables: [X]
- Domain/Industry: [e.g., e-commerce, healthcare, finance]
- Data complexity: [simple/moderate/complex]

Please let me know the best way to share the schema files with you.

Best regards`);

    window.location.href = `mailto:corgi@gena.co?subject=${subject}&body=${body}`;
  };

  const handleFileUpload = () => {
    // This would integrate with your backend when ready
    alert(
      "File upload functionality coming soon! For now, please use the email option.",
    );
  };

  return (
    <>
      <Button
        onClick={onOpen}
        className="w-64 bg-white text-carnelian font-semibold"
      >
        Contribute Database Schema
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contribute Database Schema
              </ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      What we're looking for:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>
                        Business domain databases (e-commerce, healthcare,
                        finance, etc.)
                      </li>
                      <li>
                        Complex schemas with multiple tables and relationships
                      </li>
                      <li>
                        Real-world data structures (anonymized/synthetic data
                        preferred)
                      </li>
                      <li>
                        Schemas that would benefit the txt2sql research
                        community
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Supported formats:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>SQL schema files (.sql)</li>
                      <li>Database exports/dumps</li>
                      <li>ER diagrams or documentation</li>
                      <li>JSON schema descriptions</li>
                    </ul>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Describe your database schema:
                    </label>
                    <Textarea
                      placeholder="Tell us about your database - what domain it covers, how complex it is, what makes it interesting for txt2sql research..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      minRows={4}
                    />
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium mb-2">
                      Data Privacy & Licensing
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      By contributing, you confirm that:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                      <li>The schema contains no sensitive personal data</li>
                      <li>You have rights to share this schema</li>
                      <li>
                        The contribution can be used for research purposes
                      </li>
                    </ul>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-carnelian text-white"
                  onPress={() => {
                    handleEmailContribution();
                    onClose();
                  }}
                >
                  Email Schema Details
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DatabaseSchemaContribution;
