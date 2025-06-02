"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import corgiLogo from "@/assets/corgi_logo.png";
import {
  Button,
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
}

interface QuestionData {
  question_id: number;
  question_db: string;
  question_text: string;
  answers: Answer[];
  token: string;
}

import Markdown from "react-markdown";

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

  async function handleApiError(response: Response) {
    let errorMessage = `${response.status}`;

    try {
      const errorData = await response.json();
      if (errorData.detail) {
        errorMessage = `${response.status} ${errorData.detail}`;
      }
    } catch (parseError) {
      // If we can't parse the response, fall back to status code
      console.error("Could not parse error response:", parseError);
    }

    throw new Error(errorMessage);
  }

  // Fetch a random question when the component mounts
  useEffect(() => {
    async function fetchRandomQuestion() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://txt2sql-backend.gena.co/random-question",
        );

        if (!response.ok) {
          await handleApiError(response);
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
        token: questionData.token,
      };

      const response = await fetch(
        "https://txt2sql-backend.gena.co/submit-result",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        await handleApiError(response);
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
                      <div className="flex justify-between items-start">
                        <span className="flex-1">
                          {questionData.question_text}
                        </span>
                        <span className="text-red-400 ml-4 flex-shrink-0">
                          ({questionData.question_db} database)
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="pt-4 sm:pt-8 pb-4 text-center">
              <h2>Which is the better response?</h2>
            </div>

            {/* Desktop view */}
            <div id="desktopBetterResponseTable" className="flex md:block">
              <Table removeWrapper layout="fixed">
                <TableHeader>
                  <TableColumn className="border text-center">
                    Option 1
                  </TableColumn>
                  <TableColumn className="border text-center">
                    Option 2
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      <div className="max-h-64 overflow-y-auto p-3">
                        <Markdown>
                          {questionData.answers[0].answer_text}
                        </Markdown>
                      </div>
                    </TableCell>
                    <TableCell className="border align-text-top">
                      <div className="max-h-64 overflow-y-auto p-3">
                        <Markdown>
                          {questionData.answers[1].answer_text}
                        </Markdown>
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
                    Option 1
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      <div className="p-3">
                        <Markdown>
                          {questionData.answers[0].answer_text}
                        </Markdown>
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
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mb-4" />
              <Table layout="fixed">
                <TableHeader>
                  <TableColumn className="border text-center">
                    Option 2
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border align-text-top">
                      <div className="p-3">
                        <Markdown>
                          {questionData.answers[1].answer_text}
                        </Markdown>
                      </div>
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
      <div className="bg-carnelian h-16 w-full"></div>
    </div>
  );
}

export default EvaluatePage;
