
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
          ]
  },
  materia_optativa_vale_acc: {
      patterns: [
        "Matéria optativa pode contar como acc ?"
      ],
      responses: [
        "Sim! Caso já tenha cumprido sua carga horária do curso, matérias optativas podem ser convertidas para horas de ACC", 
        "Depende. Se você já cumpriu a carga horária de optativas do curso, essas matérias podem sim ser convertidas em horas de ACC."
      ]
  },
  preciso_validar_accs: {
    patterns: [
      "Preciso validar minhas horas de acc ?"
    ], 
    responses: [
      "Sim! Muitas horas de ACC são computadas sem a necessidade de envio de documentos por parte do(a)s estudantes. No entanto, em outros casos é preciso o envio de de documentação que comprove a realização da atividade para que assim seja computada as horas."
    ]
  }, 
  que_documentos_enviar: {
    patterns: [
      "Quais documentos enviar para comprovar horas de acc?"
    ], 
    responses:[
      "Há uma série de documentos que podem ser usados para a comprovação o mais comum é o envio de certificados, no entanto também podem ser enviados fotos e vídeos que comprovem. "
    ]
  }, 
  dificuldade_em_conseguir_acc: {
    patterns: [
      "Estou tendo dificuldade em conseguir accs"
    ], 
    responses: [
      "Sinto muito que isso esteja acontecendo! Mas com um bom planejamento você vai se sair muito bem! Entre em contato com seu/sua professor(a) orientador(a) para lhe indicar atividades que forneçam horas complementares. Tudo vale! Faça cursos, participe de eventos da atlética do seu curso e de projetos de extensão."
    ]
  },
  acc_obrigatorio: {
    patterns: [
      "Horas de acc é obrigatório?"
    ], 
    responses: [
      "Sim!!!! Em cada curso há uma carga horária minima de ACCs que devem ser cumpridas, caso contrário o(a) estudante não poderá se formar."
    ]
  }, 
  prazo_para_validacao:{
    patterns: [
      "Qual o prazo máximo para validar horas de acc ?"
    ], 
    responses: [
      "O(A) estudante tem até o final do curso para cumprir ou pedir validação de horas de ACCs. Quanto ao tempo que leva para a coordenação analisar tais horas ? Bom... Leva o tempo que for preciso :) Brincadeiras a parte não se te informar sobre o tempo que demanda esse processo, sendo bem variavel. Lembre-se não deixe tudo para a ultima hora :) Planejamento é vida!"
    ]
  }, 
    e_difici_conseguir_horas:{
    patterns: [
      "É difícil conseguir horas de acc ?"
    ], 
    responses: [
      "Não!!!!! Há muitas formas de conseguir horas de ACC, a dificuldade que muitos estudantes encontram quanto a cumprir essa carga está mais no mal planejamento. Se começar a juntas horas desde cedo não terá muito problema quanto a conseguir as horas necessárias. Seja ativo :)"
    ]
  }, 
  quantas_horas_de_acc_preciso:{
    patterns: [
      "Quantas horas de acc preciso ?"
    ], 
    responses: [
      "Depende do curso, mas de forma geral a forma mais simples de saber é: Acesse o Sigaa com seu login e senha, logo na primeira página haverá um campo chamado 'Integralizações' contendo as principais cargas horárias do curso incluindo as horas de ACC e extensão necessárias. Precisa de mais alguma ajuda ? :)"
    ]
  }, 
      mudei_de_curso:{
    patterns: [
      "Mudei de curso posso reaproveitar horas de acc ?"
    ], 
    responses: [
      "Talvez possa. Isso vai depender muito da natureza das atividades realizadas e da analise que será feita pela coordenação e colegiado. Confesso não ser inteligente o suficiente para  poder analisar tal natureza e lhe gerar um feedback da possibilidade de reaproveitamento. O correto é encontrar em contato com a coordenação do curso para sanar possíveis dúvidas."
    ]
  },  
    em_que_grupo_devo_registrar_minhas_accs:{
    patterns: [
      "Em que grupo devo registrar minhas accs?"
    ], 
    responses: [
      "Boa pergunta, muitos estudantes tem dúvida quanto a isso, no total existem 7 grupos diferentes, cada um englobando atividades conforme sua natureza. Por exemplo o grupo 1 enquadra as atividades com o teor de ensino. Poderia me dizer que atividade realizou ? Assim eu poderia indicar o grupo :)"
    ]
  }, 
    atividades_do_grupo1:{
    patterns: [
      "Fiz um curso de japones, em que grupo se enquadra ?", 
      "Concluir uma matéria optativa já tendo concluido a carga horário do curso, onde registro?", 
      "Fui monitor monitora de uma disciplina ", 
      "Fui tutor tutora fiz tutoria de um projeto", 
      "Fui premiado premiada premiação em trabalho acadêmico", 
      "Intercambio acadêmico", 
      "Participei participação na semana de integração", 
      "Certificação de proefiencia em lingua estrangeira", 
      "Curso em escola de estudo temático",
      "participo participação em grupo de estudos", 
      "fui a uma visita tecnica, participei de visita tecnica", 
      "Elaborei material didático"
    ], 
    responses: [
      "De acordo com a descrição da sua atividade ela tem a natureza de ensino e deve ser enviada como pertencemte ao grupo 1!"
    ]
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


