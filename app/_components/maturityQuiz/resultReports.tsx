interface ResultsReportProps {
  score: number;
  result: {
    level: string;
    diagnosis: string;
    advice: string;
  };
}

export default function ResultsReport({ score, result }: ResultsReportProps) {
  return (
    <div className="p-6 bg-white rounded shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Seu resultado</h2>
      <p className="text-lg font-semibold mb-2">{result.level}</p>
      <p className="mb-4">{result.diagnosis}</p>
      <p className="italic text-gray-700">{result.advice}</p>
      <p className="mt-4 font-bold">Pontuação total: {score}</p>
    </div>
  );
}
