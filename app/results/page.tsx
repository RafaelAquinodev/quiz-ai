"use client";

import ResultsContent from "../_components/resultsContent";

// ajuste o caminho conforme sua estrutura

export default function ResultsPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Resultado do Questionário
      </h1>
      <ResultsContent />
    </main>
  );
}
