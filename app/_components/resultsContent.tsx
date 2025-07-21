"use client";

import { useQuizContext } from "../context/quizContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { interpretLetterScore } from "@/app/utils/interpretLetterScore"; // Import corrigido
import ResultsReport from "./maturityQuiz/resultReports";

export default function ResultsContent() {
  const { answers, resetAnswers } = useQuizContext();
  const router = useRouter();

  const [result, setResult] = useState<{
    level: string;
    diagnosis: string;
    advice: string;
  } | null>(null);

  useEffect(() => {
    if (answers.length === 0) {
      router.replace("/");
      return;
    }

    setResult(interpretLetterScore(answers));
  }, [answers, router]);

  if (answers.length === 0 || !result) return null;

  const totalScore = answers.reduce((a, b) => a + b, 0);

  return (
    <>
      <ResultsReport score={totalScore} result={result} />

      <button
        className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
        onClick={() => {
          resetAnswers();
          router.push("/");
        }}
      >
        🔁 Refazer questionário
      </button>
    </>
  );
}
