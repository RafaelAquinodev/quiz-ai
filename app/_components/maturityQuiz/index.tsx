"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { questions } from "@/app/data/quizData";
import QuestionList from "./questionList";
import { useQuizContext } from "@/app/context/quizContext";

export default function QuestionPage() {
  const [localAnswers, setLocalAnswers] = useState<number[]>(
    Array(questions.length).fill(1)
  );
  const { setAnswers } = useQuizContext();
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    const updated = [...localAnswers];
    updated[index] = parseInt(value);
    setLocalAnswers(updated);
  };

  const handleSubmit = () => {
    setAnswers(localAnswers);
    router.push("/results");
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Questionário de Maturidade em IA
        </h1>
        <div className="max-h-[70vh] overflow-y-auto pr-4">
          <QuestionList
            questions={questions}
            answers={localAnswers}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
