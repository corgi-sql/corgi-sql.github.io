"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import corgiLogo from "@/assets/corgi_logo.png";
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

// Define types for our API responses
interface Answer {
  answer_id: number;
  answer_text: string;
  model: string;
}

interface QuestionData {
  question_id: number;
  question_text: string;
  answers: Answer[];
}

function EvaluatePage() {
  // State to store the fetched question data
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to track error status
  const [error, setError] = useState<string | null>(null);
  // State to track submission status
  const [submitting, setSubmitting] = useState(false);
  // State to track submission success
  const [submitted, setSubmitted] = useState(false);

  // Fetch a random question when the component mounts
  useEffect(() => {
    async function fetchRandomQuestion() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://txt2sql-backend.staging.gena.co/random-question",
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setQuestionData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch question",
        );
        console.error("Error fetching question:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRandomQuestion();
  }, []);

  // Function to submit the evaluation result
  async function submitResult(betterId: number) {
    if (!questionData) return;

    setSubmitting(true);

    try {
      const payload = {
        question_id: questionData.question_id,
        answer_id_1: questionData.answers[0].answer_id,
        answer_id_2: questionData.answers[1].answer_id,
        better_answer_id: betterId,
      };

      const response = await fetch(
        "https://txt2sql-backend.staging.gena.co/submit-result",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // Mark as submitted successfully
      setSubmitted(true);

      // Optionally fetch a new question after submission
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit result");
      console.error("Error submitting result:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
        <div id="corgi-logo" className="mb-4 sm:mb-8">
          <Image src={corgiLogo} width={500} height={500} alt="Corgi logo" />
        </div>

        {loading ? (
          <div className="text-center py-10">Loading question...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-600">
            Error: {error}
            <div className="mt-4">
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        ) : submitted ? (
          <div className="text-center py-10 text-green-600">
            Thank you for your evaluation! Loading next question...
          </div>
        ) : questionData ? (
          <>
            <div className="max-w-xl m-auto">
              <div className="pb-4 text-center">
                <h2>Prompt</h2>
              </div>
              <Table hideHeader removeWrapper layout="fixed">
                <TableHeader>
                  <TableColumn className="border text-center">{""}</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      {questionData.question_text}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="pt-4 sm:pt-8 pb-4 text-center">
              <h2>Which is the better response?</h2>
            </div>

            {/* Desktop view */}
            <div
              id="desktopBetterResponseTable"
              className="flex hidden md:block"
            >
              <Table removeWrapper layout="fixed">
                <TableHeader>
                  <TableColumn className="border text-center">
                    Option 1 ({questionData.answers[0].model})
                  </TableColumn>
                  <TableColumn className="border text-center">
                    Option 2 ({questionData.answers[1].model})
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      <div className="max-h-64 overflow-y-auto">
                        {questionData.answers[0].answer_text}
                      </div>
                    </TableCell>
                    <TableCell className="border align-text-top">
                      <div className="max-h-64 overflow-y-auto">
                        {questionData.answers[1].answer_text}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border text-center">
                      <Button
                        className="bg-carnelian text-white"
                        onClick={() =>
                          submitResult(questionData.answers[0].answer_id)
                        }
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Option 1 is better"}
                      </Button>
                    </TableCell>
                    <TableCell className="border text-center">
                      <Button
                        className="bg-carnelian text-white"
                        onClick={() =>
                          submitResult(questionData.answers[1].answer_id)
                        }
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Option 2 is better"}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile view */}
            <div id="mobileBetterResponseTable" className="md:hidden">
              <Table layout="fixed">
                <TableHeader>
                  <TableColumn className="border text-center">
                    Option 1 ({questionData.answers[0].model})
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      {questionData.answers[0].answer_text}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border text-center">
                      <Button
                        className="bg-carnelian text-white"
                        onClick={() =>
                          submitResult(questionData.answers[0].answer_id)
                        }
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Option 1 is better"}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mb-4" />
              <Table layout="fixed">
                <TableHeader>
                  <TableColumn className="border text-center">
                    Option 2 ({questionData.answers[1].model})
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      {questionData.answers[1].answer_text}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border text-center">
                      <Button
                        className="bg-carnelian text-white"
                        onClick={() =>
                          submitResult(questionData.answers[1].answer_id)
                        }
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Option 2 is better"}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <div className="text-center py-10">No question available</div>
        )}
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

export default EvaluatePage;
