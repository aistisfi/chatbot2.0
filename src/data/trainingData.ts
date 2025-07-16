
export type Value = {
  patterns: string[],
  responses: string[],
  confidence?: number,
}

export interface trainingDataProps {

  [key: string]: Value

}


export const trainingData: trainingDataProps = {
  saudacao: {
    patterns: [
      "olá",
      "oi",
      "e aí",
      "bom dia",
      "boa tarde",
      "boa noite",
    ],
    responses: [
      "Olá! Como posso ajudar com suas dúvidas sobre ACCs hoje?",
      "Oi! Pronto para falarmos sobre Automação e Controle?",
      "Bom te ver por aqui! No que posso ajudar relacionado a ACCs?",
    ],
  },
  oque_sao_accs: {
    patterns: [
      "o que são accs",
      "defina accs",
      "significado de accs",
      "o que significa accs",
    ],
    responses: [
      "ACCs são Atividades Curriculares Complementares, componentes obrigatórios em muitos cursos superiores que complementam a formação acadêmica.",
      "As ACCs (Atividades Curriculares Complementares) são atividades extracurriculares que enriquecem sua formação profissional.",
      "ACCs representam Atividades Curriculares Complementares, essenciais para o desenvolvimento de competências além da sala de aula.",
    ],
    confidence: 0.95,
  },
  como_obter_accs: {
    patterns: [
      "como obter accs",
      "como conseguir accs",
      "onde pegar accs",
      "formas de obter accs",
    ],
    responses: [
      "Você pode obter ACCs participando de: eventos acadêmicos, cursos extracurriculares, projetos de pesquisa, atividades de extensão ou estágios não obrigatórios.",
      "As ACCs podem ser conquistadas através de diversas atividades: palestras, workshops, publicações, participação em empresas júnior ou competições acadêmicas.",
      "Existem várias formas: participação em seminários, monitorias, atividades culturais, projetos sociais relacionados à sua área ou cursos de línguas.",
    ],
    confidence: 0.9,
  },

  exemplo_de_como_conseguir_acc: {
      patterns: [ 
            "Me de um exemplo de como conseguir horas de acc"
        ], 
      responses: [
          "Procure o seu/sua professor(a) orientador(a) para indicar e explicar melhor sobre ACC e atividades extracurriculares que oferecem horas de ACC como estágios e eventos que promovem horas de ACC"
        ], 
      confidence: 0.9,
  },
  
  validar_accs: {
    patterns: [
      "validar accs",
      "como validar accs",
      "onde validar minhas accs",
      "processo de validação accs",
    ],
    responses: [
      "A validação de ACCs geralmente é feita na secretaria do seu curso ou no setor específico da instituição. Você precisa apresentar os certificados ou comprovantes das atividades.",
      "Para validar ACCs, reúna todos os comprovantes de participação e submeta à coordenação do seu curso para análise e aprovação.",
      "Cada instituição tem seu processo, mas normalmente você deve preencher um formulário e anexar os documentos comprobatórios das atividades realizadas.",
    ],
    confidence: 0.85,
  },
  projetos_accs: {
    patterns: [
      "projetos que oferecem accs",
      "quais projetos dão accs",
      "atividades que valem accs",
      "opções para accs",
    ],
    responses: [
      "Muitos projetos oferecem ACCs: iniciação científica, extensão universitária, participação em semanas acadêmicas, organização de eventos e cursos de capacitação.",
      "Projetos como empresa júnior, grupos de estudo, competições de robótica ou programação, e voluntariado em áreas técnicas costumam valer ACCs.",
      "Atividades como monitoria, publicação de artigos, participação em olimpíadas do conhecimento e desenvolvimento de protótipos são ótimas opções para ACCs.",
    ],
    confidence: 0.88,
  },
  quantidade_accs: {
    patterns: [
      "quantas accs preciso",
      "quantidade necessária de accs",
      "total de accs obrigatórias",
      "carga horária accs",
    ],
    responses: [
      "A quantidade varia conforme a instituição e curso. Geralmente fica entre 100 e 200 horas ao longo da graduação. Consulte o regulamento do seu curso.",
      "O número exato de horas de ACCs necessárias você encontra no projeto pedagógico do seu curso, mas normalmente gira em torno de 10-15% da carga horária total.",
      "Cada curso define seus requisitos. Em média, são necessárias 120 horas de ACCs, mas pode chegar a 200 horas em alguns casos.",
    ],
    confidence: 0.8,
  },
  dificuldade_accs: {
    patterns: [
      "é difícil conseguir accs",
      "como cumprir todas accs",
      "dificuldade em completar accs",
      "não consigo completar minhas accs",
    ],
    responses: [
      "Não é difícil se você planejar desde o início. Participe regularmente de eventos e atividades que interessam a você e que também contam como ACCs.",
      "A dica é não deixar para a última hora. Distribua as ACCs ao longo do curso, participando de 2-3 atividades por semestre.",
      "Muitos alunos acham desafiador, mas organizando-se e aproveitando oportunidades como semanas acadêmicas e minicursos, fica mais fácil.",
    ],
    confidence: 0.75,
  },
  tipos_accs: {
    patterns: [
      "tipos de accs",
      "categorias de accs",
      "classificação das accs",
      "quais são os tipos de accs",
    ],
    responses: [
      "As ACCs geralmente se dividem em: acadêmicas (palestras, cursos), pesquisa (iniciação científica), extensão (projetos comunitários) e culturais (atividades artísticas).",
      "Podemos classificar as ACCs em: atividades de ensino, pesquisa, extensão, representação estudantil e desenvolvimento profissional.",
      "Existem várias categorias: atividades complementares obrigatórias, eletivas, de extensão, culturais e esportivas, dependendo da instituição.",
    ],
    confidence: 0.82,
  },
  documentacao_accs: {
    patterns: [
      "documentos para accs",
      "o que preciso para comprovar accs",
      "comprovantes de accs",
      "certificados para accs",
    ],
    responses: [
      "Geralmente são necessários certificados com: nome da atividade, carga horária, data, assinatura do responsável e carimbo da instituição organizadora.",
      "Para comprovar ACCs você precisa apresentar certificados válidos contendo no mínimo: seu nome completo, descrição da atividade, carga horária e dados da instituição.",
      "Os documentos aceitos variam, mas normalmente incluem: certificados de participação, declarações oficiais, publicações ou relatórios de atividades aprovados.",
    ],
    confidence: 0.78,
  },
  prazo_accs: {
    patterns: [
      "prazo para entregar accs",
      "quando preciso ter minhas accs",
      "até quando posso validar accs",
      "data limite para accs",
    ],
    responses: [
      "O prazo final costuma ser antes da colação de grau, mas algumas instituições exigem que uma parte seja completada a cada semestre.",
      "Normalmente você tem até o último semestre para cumprir as ACCs, mas verifique o regulamento do seu curso para prazos intermediários.",
      "Cada instituição define seus prazos. Algumas exigem um percentual a cada ano, outras permitem acumular até o final do curso.",
    ],
    confidence: 0.7,
  },
  fiz_um_curso: {
        patterns: [ 
              "Fiz um curso de inglês, conta como acc ?"
          ], 
        responses: [
          "Sim! Além de obter um conhecimento enorme, fazer um curso também conta horas de ACC, basta enviar o certificado para ser analisado pela coordenação do curso. Deseja alguma ajuda nesse processo :)"
          ],
  },
  materia_optativa_vale_acc: {
      patterns: [
        "Materia optativa pode conta como acc ?"
      ],
      responses: [
        "Sim! Caso já tenha cumprido sua carga horária do curso, matérias optativas podem ser convertidas para acc"
      ],
  },
ensino_acc: {
  patterns: [
    "Onde registro disciplina optativa como ACC?",
    "Matéria eletiva pode contar como ACC?",
    "Curso online vale como ACC?",
    "Monitoria conta para ACC?",
    "Como comprovar carga horária de curso extracurricular?",
    "Participação em Semana de Integração vale ACC?"
  ],
  responses: [
    "Disciplinas optativas podem ser validadas no **Grupo 1 (Atividades de Ensino)**, desde que não tenham sido usadas para integralizar seu curso. Cursos online têm percentuais específicos (verifique o Barema).",
    "Monitorias valem ACC no Grupo 1: 1h de ACC para cada 8h de atividade (até 60% da carga total).",
    "Eventos como a Semana de Integração valem ACC: 1h de ACC para cada 2h de participação (máximo 10% da carga horária total)."
  ],
},
  pesquisa_acc: {
  patterns: [
    "Publicação de artigo conta como ACC?",
    "Onde registro iniciação científica?",
    "Apresentação de pôster em evento vale ACC?",
    "Como comprovar participação em grupo de pesquisa?",
    "Premiação em trabalho acadêmico vale ACC?"
  ],
  responses: [
    "Artigos publicados valem **30h de ACC (Grupo 2)**. Resumos em eventos valem 5h. Iniciação científica: 5h/mês (até 60% da carga total).",
    "Apresentações em eventos: 5h (regional) ou 10h (nacional/internacional)."
  ],
},
extensao_acc: {
  patterns: [
    "Projeto de extensão pode ser ACC?",
    "Onde registro ação social como ACC?",
    "Publicação de trabalho extensionista vale?",
    "Participação em evento de extensão conta?"
  ],
  responses: [
    "Projetos de extensão valem **1h de ACC para cada 2h de atividade (Grupo 3, até 60%)**. Publicações relacionadas valem 5h (resumo) ou 20h (artigo)."
  ],
},
  representacao_acc: {
  patterns: [
    "Participação em Centro Acadêmico vale ACC?",
    "Onde registro minha atuação no DCE?",
    "Representação em conselho conta como ACC?"
  ],
  responses: [
    "Atividades de representação (DCE, Centros Acadêmicos) valem **5h/mês (Grupo 4)**, com limites de 20% a 40% da carga total."
  ],
},
  trabalho_acc: {
  patterns: [
    "Estágio não obrigatório pode ser ACC?",
    "Empresa júnior conta como ACC?",
    "Como comprovar atividades profissionais para ACC?"
  ],
  responses: [
    "Estágios não obrigatórios valem **10h/mês (Grupo 5, até 30%)**. Participação em empresa júnior: 5h/mês."
  ],
},
  integracao_acc: {
  patterns: [
    "PET pode ser ACC?",
    "Onde registro residência pedagógica?",
    "Participação em liga acadêmica vale ACC?"
  ],
  responses: [
    "Programas como PET ou residência pedagógica valem **7h/mês (Grupo 6, até 60%)**. Ligas acadêmicas: 1h/mês."
  ],
},
  cultura_acc: {
  patterns: [
    "Participação em evento esportivo vale ACC?",
    "Onde registro trabalho artístico como ACC?",
    "Ações voluntárias contam para ACC?",
    "Certificado de palestra cultural pode ser ACC?"
  ],
  responses: [
    "Eventos esportivos valem **1h de ACC para cada 5h de atividade (Grupo 7)**. Trabalhos artísticos: 2h por apresentação. Ações voluntárias: 5h por atividade (verifique o limite de 20%)."
  ],
},
  geral_acc: {
  patterns: [
    "Quantas horas de ACC preciso cumprir?",
    "Posso usar atividades antigas para ACC?",
    "Como registro minhas ACCs no SIGAA?",
    "Qual o prazo para enviar comprovantes?",
    "Posso usar a mesma atividade em mais de um grupo?"
  ],
  responses: [
    "São **60h obrigatórias** de ACC. Atividades devem ser realizadas durante o curso e registradas no SIGAA até o último semestre.",
    "Não é permitido usar a mesma atividade em múltiplos grupos. Consulte a coordenação para casos específicos."
  ],
},
  
  despedida: {
    patterns: [
      "tchau",
      "até logo",
      "obrigado",
      "valeu",
      "agradeço",
      "adeus",
    ],
    responses: [
      "Até logo! Se precisar de mais informações sobre ACCs, estou à disposição.",
      "Foi um prazer ajudar! Volte sempre que tiver dúvidas sobre Automação e Controle.",
      "Obrigado por conversar! Lembre-se de planejar suas ACCs com antecedência.",
    ],
  },
};


