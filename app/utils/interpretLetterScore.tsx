type IAProfileResult = {
  level: string;
  diagnosis: string;
  advice: string;
};

// Mapeia valores numéricos para letras A–E
const valueToLetter = (value: number): string => {
  return ["A", "B", "C", "D", "E"][value - 1] || "";
};

export function interpretLetterScore(answers: number[]): IAProfileResult {
  const letterAnswers = answers.map(valueToLetter);

  // Contagem das letras
  const count: Record<string, number> = {};
  for (const letter of letterAnswers) {
    count[letter] = (count[letter] || 0) + 1;
  }

  // Identifica a letra mais frequente
  const majority = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];

  // Perguntas técnicas: 4, 5, 9 e 12 → índices 3, 4, 8, 11
  const technicalQuestions = [3, 4, 8, 11];
  const technicalAreAdvanced = technicalQuestions.every(
    (i) => letterAnswers[i] === "E"
  );

  switch (majority) {
    case "A":
      return {
        level: "0️⃣ Observador de IA",
        diagnosis:
          "Você conhece o tema superficialmente e percebe que colegas e empresas já utilizam IA, mas ainda não começou a experimentar ferramentas ou compreender como ela pode ser útil no seu trabalho.",
        advice:
          "Dê o primeiro passo: explore ferramentas simples como ChatGPT ou copilotos no Word ou Excel. Faça experimentos práticos — mesmo informais — para entender o valor que a IA pode agregar à sua rotina.",
      };
    case "B":
      return {
        level: "1️⃣ Usuário de IA Operacional",
        diagnosis:
          "Você já utiliza ferramentas de IA para produtividade pessoal (ex.: chatbots, copilotos, editores com IA), mas ainda de forma pontual, sem ligação com os processos ou estratégias da empresa.",
        advice:
          "Aprofunde-se em como aplicar IA além da produtividade individual. Busque cases de uso no seu setor e descubra como parametrizar ferramentas para trazer ganhos reais para o negócio.",
      };
    case "C":
      return {
        level: "2️⃣ Integrador de IA de Negócios",
        diagnosis:
          "Você já vai além do uso individual: seleciona e parametriza soluções de IA para apoiar decisões e processos da sua área ou empresa, mesmo sem um envolvimento técnico profundo.",
        advice:
          "Aprofunde seus conhecimentos sobre integração de dados e APIs, e fortaleça sua capacidade de traduzir desafios de negócio em soluções práticas de IA. Ferramentas low-code podem ser um bom próximo passo.",
      };
    case "D":
      return {
        level: "3️⃣ Designer de Soluções com IA",
        diagnosis:
          "Você estrutura fluxos e automações que combinam IA com processos da empresa, criando soluções mais personalizadas e sofisticadas, mesmo sem ser um programador hardcore.",
        advice:
          "Invista em aprender conceitos técnicos básicos de machine learning e APIs de IA. Com esse conhecimento, você poderá trabalhar lado a lado com desenvolvedores e projetar soluções mais robustas.",
      };
    case "E":
      if (technicalAreAdvanced) {
        return {
          level: "5️⃣ Pesquisador/Construtor de IA Avançado",
          diagnosis:
            "Você desenvolve soluções de IA avançadas, treinando modelos, criando algoritmos e atuando na fronteira técnica da área. Está entre os profissionais mais avançados no tema.",
          advice:
            "Continue se atualizando com as pesquisas de ponta e considere ampliar suas contribuições para projetos open source, papers acadêmicos ou inovação aplicada. Fortaleça também sua capacidade de liderança técnica para ajudar times e empresas a se beneficiarem da IA.",
        };
      } else {
        return {
          level: "4️⃣ Desenvolvedor Especializado em IA",
          diagnosis:
            "Você programa aplicações com IA, domina bibliotecas, frameworks e integração de modelos pré-treinados. Seu trabalho já tem um nível técnico considerável.",
          advice:
            "Amplie seu domínio estudando boas práticas de engenharia de dados e arquiteturas escaláveis. Também é hora de aprofundar o conhecimento em LLMs e algoritmos mais avançados, além de boas práticas éticas no desenvolvimento.",
        };
      }
    default:
      return {
        level: "Resultado indefinido",
        diagnosis: "Não foi possível interpretar as respostas.",
        advice: "Revise o questionário e tente novamente.",
      };
  }
}
