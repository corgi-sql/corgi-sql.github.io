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
  Input,
  Select,
  SelectItem,
} from "@heroui/react";

function QueryContribution() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");
  const [database, setDatabase] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [expectedSQL, setExpectedSQL] = useState("");

  const handleEmailContribution = () => {
    const subject = encodeURIComponent("Query Contribution - CORGI SQL");
    const body = encodeURIComponent(`Hi CORGI SQL Team,

I would like to contribute a query to the CORGI benchmark.

Query Details:
Natural Language Question: ${query || "[Please describe the question in natural language]"}

Target Database: ${database || "[Which database should this query target?]"}

Difficulty Level: ${difficulty || "[Easy/Medium/Hard]"}

Additional Description:
${description || "[Any additional context about this query - why it's interesting, what challenges it presents, etc.]"}

Expected SQL (if available):
${expectedSQL || "[Please include the expected SQL query if you have it]"}

Best regards`);

    window.location.href = `mailto:corgi@gena.co?subject=${subject}&body=${body}`;
  };

  const difficultyOptions = [
    { key: "easy", label: "Easy" },
    { key: "medium", label: "Medium" },
    { key: "hard", label: "Hard" },
  ];

  return (
    <>
      <Button
        onClick={onOpen}
        className="w-full bg-carnelian text-white font-semibold"
      >
        Contribute Query
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
                Contribute Query
              </ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      What makes a good query contribution:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>
                        Natural language questions that test specific SQL
                        concepts
                      </li>
                      <li>
                        Business domain questions (recommendation, prediction,
                        analytics)
                      </li>
                      <li>
                        Questions that require complex joins, aggregations, or
                        window functions
                      </li>
                      <li>Edge cases that challenge current txt2sql models</li>
                    </ul>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Natural Language Query:{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="e.g., 'What are the top 5 products by sales revenue in the last quarter?'"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      minRows={3}
                      isRequired
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Target Database:
                      </label>
                      <Input
                        placeholder="e.g., e-commerce, financial, schema"
                        value={database}
                        onChange={(e) => setDatabase(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Difficulty Level:
                      </label>
                      <Select
                        placeholder="Select difficulty"
                        selectedKeys={difficulty ? [difficulty] : []}
                        onSelectionChange={(keys) => {
                          const selectedKey = Array.from(keys)[0] as string;
                          setDifficulty(selectedKey || "");
                        }}
                      >
                        {difficultyOptions.map((option) => (
                          <SelectItem key={option.key}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Additional Context:
                    </label>
                    <Textarea
                      placeholder="Why is this query interesting? What SQL concepts does it test? Any specific challenges it presents..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      minRows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Expected SQL (Optional):
                    </label>
                    <Textarea
                      placeholder="SELECT ... FROM ... WHERE ..."
                      value={expectedSQL}
                      onChange={(e) => setExpectedSQL(e.target.value)}
                      minRows={4}
                      className="font-mono text-sm"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      If you have submitted a database schema and know the
                      expected SQL query that should answer your natural
                      language question, please include it here.
                    </p>
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
                  isDisabled={!query.trim()}
                >
                  Email Query Details
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default QueryContribution;
