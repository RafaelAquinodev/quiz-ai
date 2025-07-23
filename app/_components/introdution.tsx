// import Image from "next/image";
import Image from "next/image";
import IAMaturityQuiz from "./maturityQuiz";
// import IAMaturityQuiz from "./maturityQuizIa";

export default function IntroAndUserForm() {
  return (
    <div className="w-full bg-gray-100 rounded-none shadow-none grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Coluna da esquerda: Introdução */}
      <div className="text-gray-800 space-y-4 p-5">
        <Image
          src="/images/quiz-ia.jpg"
          alt="Descrição da imagem"
          width={450}
          height={200}
          className="rounded-md shadow-md mb-4"
        />

        <h2 className="text-2xl font-semibold">
          Questionário de Autodiagnóstico: Qual o seu perfil profissional em
          relação à IA?
        </h2>
        <p>
          Instruções: Para cada pergunta, escolha a alternativa que mais
          representa sua realidade atual. Este questionário é um exercício de
          reflexão para ajudá-lo a identificar seu perfil em relação ao uso de
          inteligência artificial. Ao final, você receberá um breve relatório
          com um diagnóstico e sugestões para aprimorar sua jornada com IA.
        </p>
      </div>

      <div className="space-y-4 px-6 sm:px-4 md:px-8">
        <IAMaturityQuiz />
      </div>
    </div>
  );
}
