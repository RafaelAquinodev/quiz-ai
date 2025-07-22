"use client";

import ResultsContent from "../_components/resultsContent";

export default function ResultsPage() {
  return (
    <main className="h-screen max-h-screen overflow-y-auto bg-gray-50 flex flex-col justify-center items-center px-4 py-8 md:py-0">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
        Resultado do Questionário
      </h1>
      <ResultsContent />
    </main>
  );
}
