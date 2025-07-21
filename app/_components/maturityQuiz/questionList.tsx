interface Props {
  questions: string[];
  answers: number[];
  onChange: (index: number, value: string) => void;
  onSubmit: () => void;
}

export default function QuestionList({
  questions,
  answers,
  onChange,
  onSubmit,
}: Props) {
  // Mapeamento das opções personalizadas por índice da pergunta
  const customOptionsMap: {
    [key: number]: { value: number; label: string }[];
  } = {
    0: [
      { value: 1, label: "A - Nunca usei" },
      { value: 2, label: "B - Só testei uma vez ou vi alguém usar" },
      { value: 3, label: "C - Uso eventualmente no meu dia a dia" },
      { value: 4, label: "D - Uso com frequência e oriento colegas sobre uso" },
      {
        value: 5,
        label: "E - Integro IA em aplicações e soluções que desenvolvo",
      },
    ],
    1: [
      { value: 1, label: "A - Nunca" },
      { value: 2, label: "B - Raramente" },
      { value: 3, label: "C - Às vezes, em tarefas específicas" },
      { value: 4, label: "D - Frequentemente, em muitas tarefas" },
      {
        value: 5,
        label: "E - Sempre que possível e com automações personalizadas",
      },
    ],
    2: [
      { value: 1, label: "A - Não" },
      { value: 2, label: "B - Apenas acompanhei ou vi como funciona" },
      { value: 3, label: "C - Simplesmente adaptei configurações básicas" },
      { value: 4, label: "D - Modelei fluxos complexos com IA e dados" },
      {
        value: 5,
        label: "E - Desenvolvi e implementei integrações técnicas profundas",
      },
    ],
    3: [
      { value: 1, label: "A - Nenhum" },
      { value: 2, label: "B - Superficial — só escuto sobre o tema" },
      { value: 3, label: "C - Intermediário — já fiz cursos rápidos" },
      {
        value: 4,
        label: "D - Bom — entendo como funcionam e aplico APIs e modelos",
      },
      {
        value: 5,
        label:
          "E - Avançado — trabalho no desenvolvimento de modelos e arquiteturas",
      },
    ],
    4: [
      { value: 1, label: "A - Nunca" },
      { value: 2, label: "B - Nem sei o que é API" },
      { value: 3, label: "C - Sei o que é, mas só acompanhei" },
      { value: 4, label: "D - Já integrei APIs de IA" },
      { value: 5, label: "E - Crio pipelines complexos e integro IA avançada" },
    ],
    5: [
      { value: 1, label: "A - Nunca ouvi falar" },
      { value: 2, label: "B - Só conheço de ouvir falar" },
      { value: 3, label: "C - Usei em pequenas automações" },
      {
        value: 4,
        label: "D - Estruturei soluções completas com essas ferramentas",
      },
      {
        value: 5,
        label:
          "E - Programo diretamente em linguagens e frameworks sem depender de plataformas prontas",
      },
    ],
    6: [
      { value: 1, label: "A - Nenhum envolvimento com IA" },
      { value: 2, label: "B - Observar o que os outros fazem com IA" },
      { value: 3, label: "C - Usar IA para meu trabalho pessoal" },
      { value: 4, label: "D - Configurar ou recomendar IA para processos" },
      { value: 5, label: "E - Criar aplicações ou desenvolver soluções de IA" },
    ],
    7: [
      { value: 1, label: "A - Nunca" },
      { value: 2, label: "B - Já ouvi falar em dados para IA" },
      { value: 3, label: "C - Faço análises básicas de dados no meu trabalho" },
      { value: 4, label: "D - Estruturo bases de dados para aplicações" },
      {
        value: 5,
        label:
          "E - Trabalho diretamente com engenharia de dados e machine learning",
      },
    ],
    8: [
      { value: 1, label: "A - Nunca" },
      { value: 2, label: "B - Não, mas sei que existem" },
      { value: 3, label: "C - Fiz experimentos simples em tutoriais" },
      { value: 4, label: "D - Treinei modelos pré-prontos em projetos reais" },
      { value: 5, label: "E - Crio e treino modelos complexos do zero" },
    ],
    9: [
      { value: 1, label: "A - Não falo" },
      { value: 2, label: "B - Só ouço" },
      { value: 3, label: "C - Falo de casos de uso" },
      { value: 4, label: "D - Dou orientações práticas" },
      {
        value: 5,
        label: "E - Participo de discussões técnicas e estratégicas profundas",
      },
    ],
    10: [
      { value: 1, label: "A - Não" },
      { value: 2, label: "B - Tenho uma ideia superficial" },
      {
        value: 3,
        label: "C - Consigo identificar oportunidades em áreas simples",
      },
      { value: 4, label: "D - Proponho estratégias de uso de IA no negócio" },
      {
        value: 5,
        label: "E - Integro visão técnica e estratégica em projetos avançados",
      },
    ],
    11: [
      { value: 1, label: "A - Nunca" },
      { value: 2, label: "B - Não, mas observo tendências" },
      { value: 3, label: "C - Participo de projetos básicos com IA" },
      {
        value: 4,
        label: "D - Lidero projetos que aplicam IA de forma inovadora",
      },
      {
        value: 5,
        label: "E - Pesquiso e desenvolvo novas soluções e tecnologias de IA",
      },
    ],
  };

  return (
    <div className="space-y-6">
      {questions.map((q, idx) => {
        const options = customOptionsMap[idx];

        return (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-2">
              {idx + 1}. {q}
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black"
              value={answers[idx]}
              onChange={(e) => onChange(idx, e.target.value)}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );
      })}

      <button
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto"
        onClick={onSubmit}
      >
        Enviar respostas
      </button>
    </div>
  );
}
