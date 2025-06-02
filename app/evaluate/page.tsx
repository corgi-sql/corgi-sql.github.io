"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import corgiLogo from "@/assets/corgi_logo.png";
import { Button } from "@heroui/react";
import Markdown from "react-markdown";

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
            {/* Question Section */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="pb-4 text-center">
                <h2 className="text-base font-semibold">Prompt</h2>
              </div>
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-start">
                  <span className="flex-1 text-base">
                    {questionData.question_text}
                  </span>
                  <span className="text-red-400 ml-4 flex-shrink-0">
                    ({questionData.question_db} database)
                  </span>
                </div>
              </div>
            </div>

            {/* Question Header */}
            <div className="text-center mb-6">
              <h2 className="text-base font-semibold">
                Which is the better response?
              </h2>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block max-w-6xl mx-auto">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Option 1 */}
                <div className="border rounded-lg">
                  <div className="bg-gray-100 px-4 py-2 border-b">
                    <h3 className="font-semibold text-center">Option 1</h3>
                  </div>
                  <div className="p-4 max-h-64 overflow-y-auto prose prose-sm max-w-none">
                    <Markdown>{questionData.answers[0].answer_text}</Markdown>
                  </div>
                </div>

                {/* Option 2 */}
                <div className="border rounded-lg">
                  <div className="bg-gray-100 px-4 py-2 border-b">
                    <h3 className="font-semibold text-center">Option 2</h3>
                  </div>
                  <div className="p-4 max-h-64 overflow-y-auto prose prose-sm max-w-none">
                    <Markdown>{questionData.answers[1].answer_text}</Markdown>
                  </div>
                </div>
              </div>

              {/* Desktop Buttons */}
              <div className="grid grid-cols-2 gap-6">
                <Button
                  className="bg-carnelian text-white w-full"
                  size="lg"
                  onClick={() =>
                    submitResult(questionData.answers[0].answer_id)
                  }
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Option 1 is better"}
                </Button>
                <Button
                  className="bg-carnelian text-white w-full"
                  size="lg"
                  onClick={() =>
                    submitResult(questionData.answers[1].answer_id)
                  }
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Option 2 is better"}
                </Button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden max-w-2xl mx-auto space-y-6">
              {/* Option 1 */}
              <div className="border rounded-lg">
                <div className="bg-gray-100 px-4 py-2 border-b">
                  <h3 className="font-semibold text-center">Option 1</h3>
                </div>
                <div className="p-4 prose prose-sm max-w-none">
                  <Markdown>{questionData.answers[0].answer_text}</Markdown>
                </div>
                <div className="p-4 border-t">
                  <Button
                    className="bg-carnelian text-white w-full"
                    onClick={() =>
                      submitResult(questionData.answers[0].answer_id)
                    }
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Option 1 is better"}
                  </Button>
                </div>
              </div>

              {/* Option 2 */}
              <div className="border rounded-lg">
                <div className="bg-gray-100 px-4 py-2 border-b">
                  <h3 className="font-semibold text-center">Option 2</h3>
                </div>
                <div className="p-4 prose prose-sm max-w-none">
                  <Markdown>{questionData.answers[1].answer_text}</Markdown>
                </div>
                <div className="p-4 border-t">
                  <Button
                    className="bg-carnelian text-white w-full"
                    onClick={() =>
                      submitResult(questionData.answers[1].answer_id)
                    }
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Option 2 is better"}
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-10">No question available</div>
        )}
      </div>
    </div>
  );
}

export default EvaluatePage;
