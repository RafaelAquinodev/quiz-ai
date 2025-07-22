import { FaLightbulb, FaBrain, FaChartLine } from "react-icons/fa";

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
    <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-8 max-w-2xl w-full space-y-6 text-gray-900">
      <div className="flex items-center gap-3">
        <FaChartLine className="text-blue-600 text-2xl" />
        <h2 className="text-2xl font-extrabold">Resultado do Questionário</h2>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md shadow-sm">
        <h3 className="text-xl font-bold text-blue-800 mb-1">{result.level}</h3>
        <p className="text-gray-700">{result.diagnosis}</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md shadow-sm flex items-start gap-3">
        <FaLightbulb className="text-yellow-500 mt-1" />
        <div>
          <p className="font-semibold text-yellow-800 mb-1">Sugestão:</p>
          <p className="text-gray-700">{result.advice}</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-right">
        <span className="font-semibold text-gray-800">Pontuação total:</span>{" "}
        {score}
      </div>
    </div>
  );
}
