
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
// 1. Disciplinas optativas
disciplina_optativa_acc: {
  patterns: [
    "Onde registro matéria optativa como ACC?",
    "Disciplina eletiva pode contar como ACC?",
    "Matéria não obrigatória vale para ACC?"
  ],
  responses: [
    "Disciplinas optativas podem ser validadas no **Grupo 1**. Você recebe 1h de ACC para cada 1h da disciplina (até 50% da carga total de ACC). Registre no SIGAA com o histórico escolar."
  ],
},

// 2. Cursos presenciais
cursos_presenciais_acc: {
  patterns: [
    "Curso presencial técnico conta como ACC?",
    "Workshop presencial pode ser ACC?",
    "Onde registro curso extracurricular presencial?"
  ],
  responses: [
    "Cursos presenciais valem **1h de ACC para cada 1h de atividade** (Grupo 1, até 20% do total). Comprove com certificado contendo carga horária."
  ],
},

// 3. Cursos online síncronos
cursos_online_sincronos_acc: {
  patterns: [
    "Curso online ao vivo vale como ACC?",
    "Webinar síncrono pode ser ACC?",
    "Onde registro curso online com horário fixo?"
  ],
  responses: [
    "Cursos online síncronos valem **1h de ACC para cada 1h de atividade** (Grupo 1, até 15% do total). Envie o certificado com carga horária no SIGAA."
  ],
},

// 4. Cursos EAD
cursos_ead_acc: {
  patterns: [
    "Curso a distância conta como ACC?",
    "EAD pode ser usado para ACC?",
    "Como comprovar curso online assíncrono?"
  ],
  responses: [
    "Cursos EAD valem **1h de ACC para cada 1h de atividade** (Grupo 1, até 10% do total). Certificados devem comprovar carga horária e conteúdo."
  ],
},

// 5. Monitoria
monitoria_acc: {
  patterns: [
    "Monitoria em disciplina vale ACC?",
    "Quantas horas de ACC ganho com monitoria?",
    "Onde registro minha monitoria como ACC?"
  ],
  responses: [
    "Monitoria vale **1h de ACC para cada 8h de atividade** (Grupo 1, até 60% do total). Comprove com declaração da coordenação do curso."
  ],
},

// 6. Tutoria
tutoria_acc: {
  patterns: [
    "Tutoria em projeto vale como ACC?",
    "Onde registro horas de tutoria?",
    "Ajuda a colegas pode contar como ACC?"
  ],
  responses: [
    "Tutoria em projetos educacionais vale **1h de ACC para cada 8h de atividade** (Grupo 1, até 60% do total)."
  ],
},

// 7. Semana de Integração
semana_integracao_acc: {
  patterns: [
    "Participação na Semana de Integração vale ACC?",
    "Onde registro presença em evento da UFOB?",
    "SIU conta como atividade complementar?"
  ],
  responses: [
    "Participação na Semana de Integração vale **1h de ACC para cada 2h de atividade** (Grupo 1, até 10% do total)."
  ],
},

// 8. Palestras
palestras_acc: {
  patterns: [
    "Palestra conta como ACC?",
    "Onde registro certificado de palestra?",
    "Participação em talk vale ACC?"
  ],
  responses: [
    "Palestras valem **1h de ACC para cada 1h de atividade** (Grupo 1, até 20% do total). Comprove com certificado."
  ],
},

// 9. Eventos como ouvinte
eventos_ouvinte_acc: {
  patterns: [
    "Participação em congresso como ouvinte vale ACC?",
    "Onde registro evento acadêmico que participei?",
    "Certificado de participação em seminário conta?"
  ],
  responses: [
    "Participação como ouvinte em eventos vale **1h de ACC para cada 1h de atividade** (Grupo 1, até 30% do total)."
  ],
},

// 10. Proficiência em idiomas
proficiencia_idiomas_acc: {
  patterns: [
    "TOEFL/IELTS vale como ACC?",
    "Onde registro certificado de inglês?",
    "Prova de proficiência conta para ACC?"
  ],
  responses: [
    "Certificados de proficiência (TOEFL, IELTS, etc.) valem **40h de ACC** (Grupo 1, até 50% do total)."
  ],
},
  // 1. Iniciação Científica
iniciacao_cientifica_acc: {
  patterns: [
    "Iniciação científica conta como ACC?",
    "Onde registro meu projeto de IC como ACC?",
    "PIBIC pode ser usado para atividades complementares?"
  ],
  responses: [
    "Iniciação Científica vale **5h de ACC para cada mês de atividade** (Grupo 2, até 60% do total). Comprove com declaração da coordenação."
  ],
},

// 2. Publicação de resumos
publicacao_resumos_acc: {
  patterns: [
    "Publicação de resumo em evento vale ACC?",
    "Onde registro meu resumo expandido?",
    "Anais de congresso contam como ACC?"
  ],
  responses: [
    "Resumos publicados em eventos valem **5h de ACC cada** (Grupo 2, até 40% do total). Anexe o comprovante de publicação."
  ],
},

// 3. Artigos científicos
artigos_cientificos_acc: {
  patterns: [
    "Publicação de artigo científico vale quantas horas?",
    "Onde registro meu paper como ACC?",
    "Artigo em periódico conta para ACC?"
  ],
  responses: [
    "Artigos em periódicos valem **30h de ACC cada** (Grupo 2, até 60% do total). Comprove com DOI ou link da publicação."
  ],
},

// 4. Publicação em mídia
publicacao_midia_acc: {
  patterns: [
    "Matéria publicada em jornal vale ACC?",
    "Onde registro publicação em revista?",
    "Reportagem científica conta como ACC?"
  ],
  responses: [
    "Publicações em mídia valem **10h de ACC cada** (Grupo 2, até 30% do total). Anexe cópia da publicação."
  ],
},

// 5. Livros e capítulos
livros_capitulos_acc: {
  patterns: [
    "Publicar livro conta como ACC?",
    "Onde registro capítulo de livro?",
    "Organização de obra científica vale ACC?"
  ],
  responses: [
    "Livros completos valem **30h de ACC**, capítulos valem **20h** (Grupo 2, até 50-60% do total). Comprove com ISBN."
  ],
},

// 6. Apresentação de trabalhos
apresentacao_trabalhos_acc: {
  patterns: [
    "Apresentar pôster em evento vale ACC?",
    "Onde registro apresentação oral?",
    "Participação em banca conta como ACC?"
  ],
  responses: [
    "Apresentações valem **5h (regional) ou 10h (nacional/internacional)** de ACC (Grupo 2, até 20-30% do total)."
  ],
},

// 7. Premiações científicas
premiacoes_cientificas_acc: {
  patterns: [
    "Prêmio em feira científica vale ACC?",
    "Onde registro medalha em congresso?",
    "Menção honrosa conta como ACC?"
  ],
  responses: [
    "Premiações científicas valem **10h de ACC cada** (Grupo 2, até 20% do total). Comprove com certificado."
  ],
},

// 8. Produtos tecnológicos
produtos_tecnologicos_acc: {
  patterns: [
    "Registro de software vale ACC?",
    "Onde registrar patente como ACC?",
    "Desenvolvimento de app conta para ACC?"
  ],
  responses: [
    "Produtos tecnológicos valem **30h de ACC cada** (Grupo 2, até 50% do total). Comprove com registro no INPI."
  ],
},

// 9. Grupos de pesquisa
grupos_pesquisa_acc: {
  patterns: [
    "Participação em grupo de pesquisa vale ACC?",
    "Onde registrar grupo do CNPq?",
    "Como comprovar grupo de estudo como ACC?"
  ],
  responses: [
    "Grupos de pesquisa valem **1h de ACC para cada 2h de atividade** (Grupo 2, até 20% do total). Comprove com declaração do líder."
  ],
},

// 10. Códigos fonte
codigos_fonte_acc: {
  patterns: [
    "Desenvolvi um código, conta como ACC?",
    "Onde registro software no GitHub como ACC?",
    "Programação científica vale para ACC?"
  ],
  responses: [
    "Códigos registrados valem **10h de ACC cada** (Grupo 2, até 30% do total). Comprove com link do repositório."
  ],
},

// 11. Pesquisa de campo
pesquisa_campo_acc: {
  patterns: [
    "Pesquisa de campo conta como ACC?",
    "Onde registrar coleta de dados?",
    "Trabalho etnográfico vale ACC?"
  ],
  responses: [
    "Pesquisas de campo valem **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com relatório."
  ],
},

// 12. Traduções científicas
traducoes_cientificas_acc: {
  patterns: [
    "Tradução de artigo científico vale ACC?",
    "Onde registrar versão traduzida?",
    "Tradução técnica conta como ACC?"
  ],
  responses: [
    "Traduções científicas valem **10h de ACC cada** (Grupo 2, até 30% do total). Comprove com publicação."
  ],
},

// 13. Revisão científica
revisao_cientifica_acc: {
  patterns: [
    "Revisão de artigo vale ACC?",
    "Onde registrar parecer científico?",
    "Ser revisor de periódico conta como ACC?"
  ],
  responses: [
    "Revisões científicas valem **5h de ACC cada** (Grupo 2, até 20% do total). Comprove com declaração do editor."
  ],
},

// 14. Bancas avaliadoras
bancas_avaliadoras_acc: {
  patterns: [
    "Participação em banca vale ACC?",
    "Onde registrar avaliação de TCC?",
    "Ser membro de comitê científico conta?"
  ],
  responses: [
    "Participação em bancas vale **5h de ACC cada** (Grupo 2, até 20% do total). Comprove com declaração."
  ],
},

// 15. Pesquisa interdisciplinar
pesquisa_interdisciplinar_acc: {
  patterns: [
    "Pesquisa entre áreas conta como ACC?",
    "Onde registrar projeto multidisciplinar?",
    "Trabalho com outras áreas vale ACC?"
  ],
  responses: [
    "Pesquisas interdisciplinares seguem as mesmas regras do Grupo 2. Comprove com relatório detalhado."
  ],
},

// 16. Dados abertos
dados_abertos_acc: {
  patterns: [
    "Publicação de dataset vale ACC?",
    "Onde registrar banco de dados?",
    "Dados de pesquisa contam como ACC?"
  ],
  responses: [
    "Datasets publicados valem **10h de ACC cada** (Grupo 2, até 30% do total). Comprove com DOI."
  ],
},

// 17. Pesquisa aplicada
pesquisa_aplicada_acc: {
  patterns: [
    "Pesquisa com indústria vale ACC?",
    "Onde registrar parceria tecnológica?",
    "Projeto aplicado conta como ACC?"
  ],
  responses: [
    "Pesquisas aplicadas valem **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com contrato."
  ],
},

// 18. Metodologias inovadoras
metodologias_inovadoras_acc: {
  patterns: [
    "Desenvolvi nova metodologia, vale ACC?",
    "Onde registrar técnica científica?",
    "Protocolo experimental conta como ACC?"
  ],
  responses: [
    "Metodologias valem **20h de ACC cada** (Grupo 2, até 50% do total). Comprove com publicação."
  ],
},

// 19. Pesquisa bibliográfica
pesquisa_bibliografica_acc: {
  patterns: [
    "Revisão bibliográfica vale ACC?",
    "Onde registrar estado da arte?",
    "Levantamento teórico conta como ACC?"
  ],
  responses: [
    "Pesquisas bibliográficas extensas valem **10h de ACC cada** (Grupo 2, até 30% do total). Comprove com relatório."
  ],
},

// 20. Divulgação científica
divulgacao_cientifica_acc: {
  patterns: [
    "Blog científico vale ACC?",
    "Onde registrar vídeos de divulgação?",
    "Podcast de ciência conta como ACC?"
  ],
  responses: [
    "Divulgação científica vale **5h de ACC para cada 10 publicações** (Grupo 2, até 20% do total). Comprove com links."
  ],
},

// 21. Pesquisa colaborativa
pesquisa_colaborativa_acc: {
  patterns: [
    "Pesquisa com outras instituições vale ACC?",
    "Onde registrar cooperação científica?",
    "Projeto internacional conta como ACC?"
  ],
  responses: [
    "Pesquisas colaborativas valem **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com acordo."
  ],
},

// 22. Pesquisa de inovação
pesquisa_inovacao_acc: {
  patterns: [
    "Pesquisa em inovação vale ACC?",
    "Onde registrar projeto inovador?",
    "Ideia disruptiva conta como ACC?"
  ],
  responses: [
    "Projetos de inovação valem **30h de ACC cada** (Grupo 2, até 50% do total). Comprove com protótipo."
  ],
},

// 23. Pesquisa qualitativa
pesquisa_qualitativa_acc: {
  patterns: [
    "Entrevistas em pesquisa vale ACC?",
    "Onde registrar estudo de caso?",
    "Pesquisa fenomenológica conta como ACC?"
  ],
  responses: [
    "Pesquisas qualitativas valem **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com dados."
  ],
},

// 24. Pesquisa quantitativa
pesquisa_quantitativa_acc: {
  patterns: [
    "Análise estatística vale ACC?",
    "Onde registrar survey científico?",
    "Dados quantitativos contam como ACC?"
  ],
  responses: [
    "Pesquisas quantitativas valem **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com dataset."
  ],
},

// 25. Pesquisa-ação
pesquisa_acao_acc: {
  patterns: [
    "Pesquisa-ação vale ACC?",
    "Onde registrar intervenção científica?",
    "Pesquisa participativa conta como ACC?"
  ],
  responses: [
    "Pesquisa-ação vale **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com relatório."
  ],
},

// 26. Pesquisa experimental
pesquisa_experimental_acc: {
  patterns: [
    "Experimentos em laboratório valem ACC?",
    "Onde registrar protocolos experimentais?",
    "Testes científicos contam como ACC?"
  ],
  responses: [
    "Pesquisa experimental vale **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com caderno de laboratório."
  ],
},

// 27. Pesquisa documental
pesquisa_documental_acc: {
  patterns: [
    "Análise de documentos vale ACC?",
    "Onde registrar pesquisa em arquivo?",
    "Estudo de fontes primárias conta como ACC?"
  ],
  responses: [
    "Pesquisa documental vale **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com fichamento."
  ],
},

// 28. Pesquisa histórica
pesquisa_historica_acc: {
  patterns: [
    "Pesquisa em arquivo histórico vale ACC?",
    "Onde registrar estudo histórico?",
    "Trabalho com fontes antigas conta como ACC?"
  ],
  responses: [
    "Pesquisa histórica vale **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com relatório."
  ],
},

// 29. Pesquisa comparada
pesquisa_comparada_acc: {
  patterns: [
    "Estudo comparativo vale ACC?",
    "Onde registrar análise comparada?",
    "Pesquisa entre culturas conta como ACC?"
  ],
  responses: [
    "Pesquisa comparada vale **5h de ACC para cada mês** (Grupo 2, até 60% do total). Comprove com tabelas comparativas."
  ],
},

// 30. Ética em pesquisa
etica_pesquisa_acc: {
  patterns: [
    "Curso de ética em pesquisa vale ACC?",
    "Onde registrar certificado do CEP?",
    "Treinamento em ética científica conta como ACC?"
  ],
  responses: [
    "Cursos de ética valem **1h de ACC para cada 1h de atividade** (Grupo 2, até 20% do total). Comprove com certificado."
  ]
},
// 1. Projetos de extensão
projetos_extensao_acc: {
  patterns: [
    "Como registrar projeto de extensão como ACC?",
    "Participação em projeto comunitário vale ACC?",
    "Onde cadastrar horas de extensão universitária?"
  ],
  responses: [
    "Projetos de extensão valem **1h de ACC para cada 2h de atividade** (Grupo 3, até 60% do total). Comprove com declaração da coordenação de extensão."
  ],
},

// 2. Cursos de extensão
cursos_extensao_acc1: {
  patterns: [
    "Curso de extensão conta como ACC?",
    "Oficina para comunidade vale ACC?",
    "Como comprovar curso de capacitação social?"
  ],
  responses: [
    "Cursos de extensão valem **1h de ACC para cada 2h de atividade** (Grupo 3, até 60% do total). Anexe certificado com carga horária."
  ],
},

// 3. Eventos extensionistas
eventos_extensao_acc: {
  patterns: [
    "Organização de evento comunitário vale ACC?",
    "Onde registrar seminário de extensão?",
    "Feira para população conta como ACC?"
  ],
  responses: [
    "Eventos extensionistas valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com programa do evento."
  ],
},

// 4. Publicações extensionistas
publicacoes_extensao_acc: {
  patterns: [
    "Artigo sobre extensão vale ACC?",
    "Onde registrar publicação de projeto social?",
    "Material educativo conta como ACC?"
  ],
  responses: [
    "Publicações sobre extensão valem **20h (artigos) ou 5h (resumos)** de ACC (Grupo 3, até 30-60% do total)."
  ],
},

// 5. Atendimento à comunidade
atendimento_comunitario_acc: {
  patterns: [
    "Atendimento gratuito vale ACC?",
    "Onde registrar consultoria comunitária?",
    "Plantão social conta como ACC?"
  ],
  responses: [
    "Atendimentos valem **1h de ACC para cada 2h de atividade** (Grupo 3, até 60% do total). Comprove com relatório de atividades."
  ],
},

// 6. Produtos extensionistas
produtos_extensao_acc: {
  patterns: [
    "Cartilha educativa vale ACC?",
    "Onde registrar material de divulgação?",
    "Desenvolvimento de recurso para comunidade conta?"
  ],
  responses: [
    "Produtos extensionistas valem **30h de ACC cada** (Grupo 3, até 50% do total). Comprove com exemplar do material."
  ],
},

// 7. Premiações extensionistas
premiacoes_extensao_acc: {
  patterns: [
    "Prêmio por projeto social vale ACC?",
    "Onde registrar reconhecimento comunitário?",
    "Menção honrosa em extensão conta?"
  ],
  responses: [
    "Premiações valem **10h de ACC cada** (Grupo 3, até 20% do total). Comprove com certificado."
  ],
},

// 8. Grupos de extensão
grupos_extensao_acc: {
  patterns: [
    "Participação em grupo de extensão vale ACC?",
    "Onde registrar coletivo social?",
    "Núcleo de apoio comunitário conta como ACC?"
  ],
  responses: [
    "Grupos de extensão valem **1h de ACC para cada 2h de atividade** (Grupo 3, até 20% do total). Comprove com declaração do coordenador."
  ],
},

// 9. Voluntariado
voluntariado_acc: {
  patterns: [
    "Trabalho voluntário vale ACC?",
    "Onde registrar horas de voluntariado?",
    "Ação solidária conta como ACC?"
  ],
  responses: [
    "Voluntariado vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com declaração da instituição beneficiada."
  ],
},

// 10. Extensão internacional
extensao_internacional_acc: {
  patterns: [
    "Projeto de extensão no exterior vale ACC?",
    "Onde registrar cooperação internacional?",
    "Extensão em outros países conta?"
  ],
  responses: [
    "Extensão internacional vale **5h de ACC para cada 15h de atividade** (Grupo 3, até 60% do total). Comprove com relatório bilateral."
  ],
},

// 11. Rádios/TVs comunitárias
midias_comunitarias_acc: {
  patterns: [
    "Programa de rádio comunitária vale ACC?",
    "Onde registrar participação em TV popular?",
    "Produção de mídia alternativa conta como ACC?"
  ],
  responses: [
    "Mídias comunitárias valem **1h de ACC para cada 2h de atividade** (Grupo 3, até 20% do total). Comprove com gravação ou link."
  ],
},

// 12. Bancos de alimentos
bancos_alimentos_acc: {
  patterns: [
    "Trabalho em banco de alimentos vale ACC?",
    "Onde registrar ação contra fome?",
    "Distribuição de cestas conta como ACC?"
  ],
  responses: [
    "Ações contra fome valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com declaração da organização."
  ],
},

// 13. Educação popular
educacao_popular_acc: {
  patterns: [
    "Aula em comunidade vale ACC?",
    "Onde registrar alfabetização de adultos?",
    "Curso para população vulnerável conta?"
  ],
  responses: [
    "Educação popular vale **1h de ACC para cada 2h de atividade** (Grupo 3, até 60% do total). Comprove com lista de presença."
  ],
},

// 14. Saúde comunitária
saude_comunitaria_acc: {
  patterns: [
    "Mutirão de saúde vale ACC?",
    "Onde registrar ação preventiva?",
    "Campanha de vacinação conta como ACC?"
  ],
  responses: [
    "Ações de saúde valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com relatório de atendimentos."
  ],
},

// 15. Meio ambiente
meio_ambiente_acc: {
  patterns: [
    "Projeto ambiental vale ACC?",
    "Onde registrar mutirão de limpeza?",
    "Reciclagem comunitária conta como ACC?"
  ],
  responses: [
    "Atividades ambientais valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com fotos/relatório."
  ],
},

// 16. Direitos humanos
direitos_humanos_acc: {
  patterns: [
    "Projeto sobre direitos humanos vale ACC?",
    "Onde registrar ação contra violência?",
    "Campanha de conscientização conta?"
  ],
  responses: [
    "Ações em direitos humanos valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com materiais produzidos."
  ],
},

// 17. Tecnologia social
tecnologia_social_acc1: {
  patterns: [
    "Desenvolvimento de tecnologia social vale ACC?",
    "Onde registrar solução comunitária?",
    "Invenção para população conta como ACC?"
  ],
  responses: [
    "Tecnologias sociais valem **30h de ACC cada** (Grupo 3, até 50% do total). Comprove com protótipo ou registro."
  ],
},

// 18. Economia solidária
economia_solidaria_acc: {
  patterns: [
    "Projeto de cooperativismo vale ACC?",
    "Onde registrar feira de economia popular?",
    "Oficina de empreendedorismo conta?"
  ],
  responses: [
    "Economia solidária vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com registro da atividade."
  ],
},

// 19. Cultura popular
cultura_popular_acc: {
  patterns: [
    "Projeto com artistas locais vale ACC?",
    "Onde registrar manifestação cultural?",
    "Resgate de tradições conta como ACC?"
  ],
  responses: [
    "Cultura popular vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com registro fotográfico."
  ],
},

// 20. Esporte comunitário
esporte_comunitario_acc1: {
  patterns: [
    "Projeto esportivo social vale ACC?",
    "Onde registrar escolinha esportiva?",
    "Oficina de esporte conta como ACC?"
  ],
  responses: [
    "Esporte comunitário vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com lista de participantes."
  ],
},

// 21. Agricultura urbana
agricultura_urbana_acc: {
  patterns: [
    "Horta comunitária vale ACC?",
    "Onde registrar projeto de jardinagem?",
    "Oficina de cultivo conta como ACC?"
  ],
  responses: [
    "Agricultura urbana vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com registro da produção."
  ],
},

// 22. Moradia digna
moradia_digna_acc: {
  patterns: [
    "Projeto de construção civil vale ACC?",
    "Onde registrar mutirão habitacional?",
    "Reforma comunitária conta como ACC?"
  ],
  responses: [
    "Moradia digna vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com relatório da obra."
  ],
},

// 23. Inclusão digital
inclusao_digital_acc1: {
  patterns: [
    "Oficina de informática vale ACC?",
    "Onde registrar curso de computação?",
    "Aula para idosos conta como ACC?"
  ],
  responses: [
    "Inclusão digital vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com lista de participantes."
  ],
},

// 24. Justiça restaurativa
justica_restaurativa_acc: {
  patterns: [
    "Projeto em presídio vale ACC?",
    "Onde registrar mediação de conflitos?",
    "Atividade no sistema socioeducativo conta?"
  ],
  responses: [
    "Justiça restaurativa vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com declaração da instituição."
  ],
},

// 25. Gênero e diversidade
genero_diversidade_acc: {
  patterns: [
    "Projeto sobre igualdade de gênero vale ACC?",
    "Onde registrar campanha LGBTQIA+?",
    "Oficina sobre diversidade conta?"
  ],
  responses: [
    "Atividades sobre gênero valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com materiais produzidos."
  ],
},

// 26. População em situação de rua
pop_rua_acc: {
  patterns: [
    "Projeto para moradores de rua vale ACC?",
    "Onde registrar ação para população vulnerável?",
    "Distribuição de kits conta como ACC?"
  ],
  responses: [
    "Ações para população em situação de rua valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com relatório."
  ],
},

// 27. Povos tradicionais
povos_tradicionais_acc: {
  patterns: [
    "Projeto com indígenas vale ACC?",
    "Onde registrar ação com quilombolas?",
    "Trabalho com ciganos conta como ACC?"
  ],
  responses: [
    "Atividades com povos tradicionais valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com registro comunitário."
  ],
},

// 28. Acessibilidade
acessibilidade_acc1: {
  patterns: [
    "Projeto para PCDs vale ACC?",
    "Onde registrar ação inclusiva?",
    "Oficina de libras conta como ACC?"
  ],
  responses: [
    "Acessibilidade vale **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com fotos/relatório."
  ],
},

// 29. Idosos
idosos_acc: {
  patterns: [
    "Projeto para terceira idade vale ACC?",
    "Onde registrar atividade em asilo?",
    "Oficina para idosos conta como ACC?"
  ],
  responses: [
    "Atividades com idosos valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com lista de presença."
  ],
},

// 30. Crianças e adolescentes
criancas_adolescentes_acc: {
  patterns: [
    "Projeto em creche vale ACC?",
    "Onde registrar atividade com jovens?",
    "Oficina em escola conta como ACC?"
  ],
  responses: [
    "Atividades com crianças valem **5h de ACC por atividade** (Grupo 3, até 20% do total). Comprove com autorização da instituição."
  ],
},
// 1. Representação em Colegiados
representacao_colegiados_acc: {
  patterns: [
    "Ser representante de turma vale ACC?",
    "Participação em colegiado superior conta como ACC?",
    "Onde registrar minha atuação no conselho departamental?"
  ],
  responses: [
    "Representação em órgãos colegiados vale **5h de ACC por mês** (Grupo 4, até 40% do total). Comprove com ata de posse ou declaração da secretaria do colegiado."
  ],
},

// 2. Diretório Central dos Estudantes (DCE)
dce_acc: {
  patterns: [
    "Participação no DCE conta como ACC?",
    "Onde registrar minha atuação no diretório estudantil?",
    "Ser suplente no DCE vale ACC?"
  ],
  responses: [
    "Atuação no DCE vale **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com declaração da diretoria atual com CNPJ da entidade."
  ],
},

// 3. Centros Acadêmicos
centro_academico_acc: {
  patterns: [
    "Participação em CA vale ACC?",
    "Onde registrar minha função no centro acadêmico?",
    "Tesoureiro de CA conta como ACC?"
  ],
  responses: [
    "Atividades em Centros Acadêmicos valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com ata de eleição ou posse."
  ],
},

// 4. Atléticas
atleticas_acc: {
  patterns: [
    "Participação em atlética vale ACC?",
    "Onde registrar minha função na equipe esportiva?",
    "Diretor de comunicação de atlética conta?"
  ],
  responses: [
    "Atividades em atléticas valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com declaração da diretoria e estatuto registrado."
  ],
},

// 5. Comissões Permanentes
comissoes_permanentes_acc: {
  patterns: [
    "Participação em comissão permanente vale ACC?",
    "Onde registrar minha atuação em comissão da UFOB?",
    "Membro de CPA conta como ACC?"
  ],
  responses: [
    "Comissões permanentes valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com portaria de nomeação."
  ],
},

// 6. Comissões Eventuais
comissoes_eventuais_acc: {
  patterns: [
    "Participação em comissão temporária vale ACC?",
    "Onde registrar comissão de formatura?",
    "Comissão organizadora de evento conta?"
  ],
  responses: [
    "Comissões eventuais valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com documento de criação da comissão."
  ],
},

// 7. Políticas Institucionais
politicas_institucionais_acc: {
  patterns: [
    "Participação em elaboração de políticas vale ACC?",
    "Onde registrar contribuição em resolução?",
    "Grupo de trabalho para normas conta?"
  ],
  responses: [
    "Elaboração de políticas vale **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com relatório aprovado pelo órgão competente."
  ],
},

// 8. Entidades Civis
entidades_civis_acc: {
  patterns: [
    "Representação em entidade civil vale ACC?",
    "Onde registrar atuação em conselho municipal?",
    "Membro de ONG conta como ACC?"
  ],
  responses: [
    "Representação em entidades civis vale **5h de ACC por mês** (Grupo 4, até 30% do total). Comprove com CNPJ da entidade e declaração de função."
  ],
},

// 9. Grêmios Estudantis
gremios_estudantis_acc1: {
  patterns: [
    "Participação em grêmio vale ACC?",
    "Onde registrar minha função no grêmio?",
    "Secretário de grêmio conta como ACC?"
  ],
  responses: [
    "Atividades em grêmios estudantis valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com estatuto registrado e ata de posse."
  ],
},

// 10. Parlamento Estudantil
parlamento_estudantil_acc1: {
  patterns: [
    "Participação em parlamento estudantil vale ACC?",
    "Onde registrar meu mandato como parlamentar?",
    "Vereador estudantil conta como ACC?"
  ],
  responses: [
    "Parlamento estudantil vale **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com certificado da câmara legislativa."
  ],
},

// 11. Representação Discente
representacao_discente_acc: {
  patterns: [
    "Ser delegado estudantil vale ACC?",
    "Onde registrar minha representação discente?",
    "Participação em fórum de estudantes conta?"
  ],
  responses: [
    "Representação discente vale **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com credencial emitida pela instituição organizadora."
  ],
},

// 12. Conselhos Gestores
conselhos_gestores_acc: {
  patterns: [
    "Participação em conselho gestor vale ACC?",
    "Onde registrar minha atuação em conselho de unidade?",
    "Membro de conselho de biblioteca conta?"
  ],
  responses: [
    "Conselhos gestores valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com portaria de nomeação."
  ],
},

// 13. Comitês Éticos
comites_eticos_acc: {
  patterns: [
    "Participação em comitê de ética vale ACC?",
    "Onde registrar minha função no CEP?",
    "Membro de comissão de ética conta?"
  ],
  responses: [
    "Comitês éticos valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com termo de posse."
  ],
},

// 14. Representação em Editais
representacao_editais_acc: {
  patterns: [
    "Participação em comissão de editais vale ACC?",
    "Onde registrar minha avaliação de projetos?",
    "Membro de comitê de bolsas conta?"
  ],
  responses: [
    "Comissões de editais valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com portaria de designação."
  ],
},

// 15. Representação Internacional
representacao_internacional_acc: {
  patterns: [
    "Representação em evento internacional vale ACC?",
    "Onde registrar minha participação em fórum global?",
    "Delegado em modelo da ONU conta?"
  ],
  responses: [
    "Representação internacional vale **5h de ACC por mês** (Grupo 4, até 30% do total). Comprove com credencial do evento."
  ],
},

// 16. Movimentos Estudantis
movimentos_estudantis_acc: {
  patterns: [
    "Participação em movimento estudantil vale ACC?",
    "Onde registrar minha atuação em coletivo?",
    "Organização de protesto conta como ACC?"
  ],
  responses: [
    "Movimentos estudantis valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com registro em ata ou matéria jornalística."
  ],
},

// 17. Representação em Pesquisa
representacao_pesquisa_acc: {
  patterns: [
    "Participação em comitê científico vale ACC?",
    "Onde registrar minha avaliação de trabalhos?",
    "Membro de comissão científica conta?"
  ],
  responses: [
    "Comitês científicos valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com documento de designação."
  ],
},

// 18. Representação em Extensão
representacao_extensao_acc: {
  patterns: [
    "Participação em conselho de extensão vale ACC?",
    "Onde registrar minha avaliação de projetos sociais?",
    "Membro de comitê extensionista conta?"
  ],
  responses: [
    "Conselhos de extensão valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com portaria de nomeação."
  ],
},

// 19. Representação em Cultura
representacao_cultura_acc: {
  patterns: [
    "Participação em conselho cultural vale ACC?",
    "Onde registrar minha atuação em eventos artísticos?",
    "Membro de comissão de cultura conta?"
  ],
  responses: [
    "Conselhos culturais valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com declaração do órgão responsável."
  ],
},

// 20. Representação em Esportes
representacao_esportes_acc: {
  patterns: [
    "Participação em conselho esportivo vale ACC?",
    "Onde registrar minha organização de torneios?",
    "Membro de comissão de jogos conta?"
  ],
  responses: [
    "Conselhos esportivos valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com declaração da diretoria."
  ],
},

// 21. Representação em Moradia
representacao_moradia_acc: {
  patterns: [
    "Participação no conselho de moradia vale ACC?",
    "Onde registrar minha atuação na gestão de repúblicas?",
    "Membro de comissão de alojamento conta?"
  ],
  responses: [
    "Conselhos de moradia valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com ata de reunião."
  ],
},

// 22. Representação em Alimentação
representacao_alimentacao_acc: {
  patterns: [
    "Participação no conselho de RU vale ACC?",
    "Onde registrar minha atuação no restaurante universitário?",
    "Membro de comissão de alimentação conta?"
  ],
  responses: [
    "Conselhos de alimentação valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com portaria de nomeação."
  ],
},

// 23. Representação em Transporte
representacao_transporte_acc: {
  patterns: [
    "Participação no conselho de transporte vale ACC?",
    "Onde registrar minha atuação em mobilidade urbana?",
    "Membro de comissão de fretados conta?"
  ],
  responses: [
    "Conselhos de transporte valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com documento de designação."
  ],
},

// 24. Representação em Biblioteca
representacao_biblioteca_acc: {
  patterns: [
    "Participação no conselho de biblioteca vale ACC?",
    "Onde registrar minha atuação no acervo?",
    "Membro de comissão de livros conta?"
  ],
  responses: [
    "Conselhos de biblioteca valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com termo de posse."
  ],
},

// 25. Representação em Tecnologia
representacao_tecnologia_acc: {
  patterns: [
    "Participação em conselho de TI vale ACC?",
    "Onde registrar minha atuação em projetos digitais?",
    "Membro de comitê de inovação conta?"
  ],
  responses: [
    "Conselhos de tecnologia valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com declaração da coordenação."
  ],
},

// 26. Representação em Meio Ambiente
representacao_meio_ambiente_acc: {
  patterns: [
    "Participação em conselho ambiental vale ACC?",
    "Onde registrar minha atuação em sustentabilidade?",
    "Membro de comissão verde conta?"
  ],
  responses: [
    "Conselhos ambientais valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com registro de atividades."
  ],
},

// 27. Representação em Saúde
representacao_saude_acc: {
  patterns: [
    "Participação em conselho de saúde vale ACC?",
    "Onde registrar minha atuação em campanhas?",
    "Membro de comissão de saúde estudantil conta?"
  ],
  responses: [
    "Conselhos de saúde valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com documento de designação."
  ],
},

// 28. Representação em Segurança
representacao_seguranca_acc: {
  patterns: [
    "Participação em conselho de segurança vale ACC?",
    "Onde registrar minha atuação em comitê de prevenção?",
    "Membro de brigada conta?"
  ],
  responses: [
    "Conselhos de segurança valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com certificado de participação."
  ],
},

// 29. Representação em Direitos Humanos
representacao_direitos_humanos_acc: {
  patterns: [
    "Participação em conselho de direitos humanos vale ACC?",
    "Onde registrar minha atuação em comissão de diversidade?",
    "Membro de núcleo de inclusão conta?"
  ],
  responses: [
    "Conselhos de direitos humanos valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com portaria de nomeação."
  ],
},

// 30. Representação em Assuntos Estudantis
representacao_assuntos_estudantis_acc: {
  patterns: [
    "Participação em conselho de assuntos estudantis vale ACC?",
    "Onde registrar minha atuação na pró-reitoria?",
    "Membro de comissão de permanência conta?"
  ],
  responses: [
    "Conselhos de assuntos estudantis valem **5h de ACC por mês** (Grupo 4, até 20% do total). Comprove com documento oficial da instituição."
  ],
}, 

  // 1. Estágios não obrigatórios
estagios_nao_obrigatorios_acc: {
  patterns: [
    "Estágio não obrigatório vale ACC?",
    "Onde registrar estágio extracurricular?",
    "Como comprovar estágio fora da grade?"
  ],
  responses: [
    "Estágios não obrigatórios valem **10h de ACC por mês** (Grupo 5, até 30% do total). Comprove com: \n- Termo de estágio \n- Relatório de atividades \n- Declaração da empresa"
  ],
},

// 2. Empresas júnior
empresa_junior_acc: {
  patterns: [
    "Participação em empresa júnior conta como ACC?",
    "Onde registrar minha atuação na EJ?",
    "Diretor de empresa júnior vale ACC?"
  ],
  responses: [
    "Empresas júnior valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Declaração da EJ \n- CNPJ da empresa \n- Relatório semestral"
  ],
},

// 3. Trainee acadêmico
trainee_academico_acc: {
  patterns: [
    "Programa trainee universitário vale ACC?",
    "Onde registrar capacitação profissional?",
    "Participação em trainee conta como ACC?"
  ],
  responses: [
    "Programas trainee valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com certificado de conclusão e plano de atividades."
  ],
},

// 4. Consultoria estudantil
consultoria_estudantil_acc: {
  patterns: [
    "Consultoria universitária vale ACC?",
    "Onde registrar projetos de consultoria?",
    "Atendimento a clientes reais conta?"
  ],
  responses: [
    "Consultorias estudantis valem **5h de ACC por projeto** (Grupo 5, até 20% do total). Comprove com: \n- Termo de projeto \n- Relatório de entregas \n- Declaração do cliente"
  ],
},

// 5. Hackathons profissionais
hackathons_profissionais_acc: {
  patterns: [
    "Participação em hackathon vale ACC?",
    "Onde registrar competição tecnológica?",
    "Desafio empresarial conta como ACC?"
  ],
  responses: [
    "Hackathons valem **5h de ACC por evento** (Grupo 5, até 20% do total). Comprove com: \n- Certificado de participação \n- Projeto desenvolvido"
  ],
},

// 6. Atividades profissionais
atividades_profissionais_acc: {
  patterns: [
    "Trabalho formal pode contar como ACC?",
    "Onde registrar experiência profissional?",
    "CLT vale para atividades complementares?"
  ],
  responses: [
    "Atividades profissionais formais valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Carteira de trabalho \n- Declaração da empresa"
  ],
},

// 7. Freelancer
trabalho_freelancer_acc: {
  patterns: [
    "Trabalho freelancer vale ACC?",
    "Onde registrar projetos autônomos?",
    "Serviços pontuais contam como ACC?"
  ],
  responses: [
    "Freelas valem **5h de ACC por projeto** (Grupo 5, até 20% do total). Comprove com: \n- Contratos \n- Notas fiscais \n- Portfólio"
  ],
},

// 8. Empreendedorismo
empreendedorismo_acc: {
  patterns: [
    "Meu negócio próprio vale ACC?",
    "Onde registrar minha startup?",
    "MEI pode contar como ACC?"
  ],
  responses: [
    "Empreendedorismo vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- CNPJ \n- Faturamento \n- Plano de negócios"
  ],
},

// 9. Concursos profissionais
concursos_profissionais_acc: {
  patterns: [
    "Participação em concurso de profissão vale ACC?",
    "Onde registrar competição técnica?",
    "Desafio de mercado conta como ACC?"
  ],
  responses: [
    "Concursos profissionais valem **5h de ACC por competição** (Grupo 5, até 20% do total). Comprove com certificado e projeto apresentado."
  ],
},

// 10. Missões técnicas
missoes_tecnicas_acc: {
  patterns: [
    "Missão técnica internacional vale ACC?",
    "Onde registrar viagem profissional?",
    "Visita a empresas conta como ACC?"
  ],
  responses: [
    "Missões técnicas valem **5h de ACC por atividade** (Grupo 5, até 20% do total). Comprove com relatório técnico e comprovantes de viagem."
  ],
},

// 11. Feiras de negócios
feiras_negocios_acc: {
  patterns: [
    "Participação em feira profissional vale ACC?",
    "Onde registrar exposição comercial?",
    "Feira de empreendedorismo conta?"
  ],
  responses: [
    "Feiras de negócios valem **5h de ACC por evento** (Grupo 5, até 20% do total). Comprove com crachá de participação e relatório de visitas."
  ],
},

// 12. Simulações empresariais
simulacoes_empresariais_acc: {
  patterns: [
    "Simulação empresarial vale ACC?",
    "Onde registrar business game?",
    "Jogo de empresa conta como ACC?"
  ],
  responses: [
    "Simulações valem **5h de ACC por competição** (Grupo 5, até 20% do total). Comprove com certificado e relatório de estratégias."
  ],
},

// 13. Atividades rurais
atividades_rurais_acc: {
  patterns: [
    "Trabalho em propriedade rural vale ACC?",
    "Onde registrar experiência no campo?",
    "Atividade agrícola conta como ACC?"
  ],
  responses: [
    "Atividades rurais valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Notas fiscais \n- Declaração do sindicato rural"
  ],
},

// 14. Atendimento ao cliente
atendimento_cliente_acc: {
  patterns: [
    "Experiência em atendimento vale ACC?",
    "Onde registrar trabalho com público?",
    "Call center conta como ACC?"
  ],
  responses: [
    "Atendimento ao cliente vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com declaração da empresa e descrição de funções."
  ],
},

// 15. Assistência técnica
assistencia_tecnica_acc: {
  patterns: [
    "Trabalho em assistência técnica vale ACC?",
    "Onde registrar consertos e reparos?",
    "Manutenção de equipamentos conta?"
  ],
  responses: [
    "Assistência técnica vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Notas fiscais \n- Contratos de serviço"
  ],
},

// 16. Produção artesanal
producao_artesanal_acc: {
  patterns: [
    "Produção artesanal vale ACC?",
    "Onde registrar meu artesanato?",
    "Trabalho manual conta como ACC?"
  ],
  responses: [
    "Produção artesanal vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Notas de venda \n- Portfólio de produtos"
  ],
},

// 17. Atividades criativas
atividades_criativas_acc: {
  patterns: [
    "Trabalho criativo vale ACC?",
    "Onde registrar meu trabalho autoral?",
    "Design freelancer conta como ACC?"
  ],
  responses: [
    "Atividades criativas valem **5h de ACC por projeto** (Grupo 5, até 20% do total). Comprove com: \n- Portfólio \n- Contratos \n- Registros de direitos autorais"
  ],
},

// 18. Gestão de negócios
gestao_negocios_acc: {
  patterns: [
    "Gestão de negócios vale ACC?",
    "Onde registrar minha administração?",
    "Planejamento estratégico conta?"
  ],
  responses: [
    "Gestão de negócios vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Documentos contábeis \n- Relatórios gerenciais"
  ],
},

// 19. Marketing digital
marketing_digital_acc: {
  patterns: [
    "Trabalho com marketing digital vale ACC?",
    "Onde registrar campanhas online?",
    "Gestão de redes sociais conta?"
  ],
  responses: [
    "Marketing digital vale **5h de ACC por projeto** (Grupo 5, até 20% do total). Comprove com: \n- Relatórios de métricas \n- Portfólio de campanhas"
  ],
},

// 20. Desenvolvimento de produtos
desenvolvimento_produtos_acc: {
  patterns: [
    "Desenvolvimento de produto vale ACC?",
    "Onde registrar minha criação?",
    "Prototipagem conta como ACC?"
  ],
  responses: [
    "Desenvolvimento de produtos valem **10h de ACC por projeto** (Grupo 5, até 30% do total). Comprove com: \n- Projeto técnico \n- Registro no INPI (se aplicável)"
  ],
},

// 21. Consultoria financeira
consultoria_financeira_acc: {
  patterns: [
    "Consultoria financeira vale ACC?",
    "Onde registrar assessoria?",
    "Planejamento financeiro conta?"
  ],
  responses: [
    "Consultoria financeira vale **5h de ACC por projeto** (Grupo 5, até 20% do total). Comprove com contratos e relatórios de orientação."
  ],
},

// 22. Eventos corporativos
eventos_corporativos_acc: {
  patterns: [
    "Organização de evento corporativo vale ACC?",
    "Onde registrar feira profissional?",
    "Congresso empresarial conta?"
  ],
  responses: [
    "Eventos corporativos valem **5h de ACC por atividade** (Grupo 5, até 20% do total). Comprove com: \n- Programa do evento \n- Declaração da organização"
  ],
},

// 23. Pesquisa de mercado
pesquisa_mercado_acc: {
  patterns: [
    "Pesquisa de mercado vale ACC?",
    "Onde registrar levantamento de dados?",
    "Análise de concorrência conta?"
  ],
  responses: [
    "Pesquisas de mercado valem **5h de ACC por projeto** (Grupo 5, até 20% do total). Comprove com relatório completo e metodologia."
  ],
},

// 24. Logística
atividades_logistica_acc: {
  patterns: [
    "Trabalho em logística vale ACC?",
    "Onde registrar gestão de estoque?",
    "Transporte de mercadorias conta?"
  ],
  responses: [
    "Atividades logísticas valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- CT-e \n- Notas fiscais \n- Declaração da empresa"
  ],
},

// 25. Vendas
atividades_vendas_acc: {
  patterns: [
    "Trabalho em vendas vale ACC?",
    "Onde registrar minha performance comercial?",
    "Representante comercial conta?"
  ],
  responses: [
    "Atividades de vendas valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Relatório de vendas \n- Comprovantes de metas"
  ],
},

// 26. Recursos humanos
rh_acc: {
  patterns: [
    "Trabalho em RH vale ACC?",
    "Onde registrar seleção de pessoal?",
    "Recrutamento conta como ACC?"
  ],
  responses: [
    "Atividades de RH valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Declaração da empresa \n- Processos seletivos conduzidos"
  ],
},

// 27. Produção industrial
producao_industrial_acc: {
  patterns: [
    "Trabalho em indústria vale ACC?",
    "Onde registrar minha linha de produção?",
    "Operação de máquinas conta?"
  ],
  responses: [
    "Produção industrial vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Carteira de trabalho \n- Declaração da empresa"
  ],
},

// 28. Qualidade
controle_qualidade_acc: {
  patterns: [
    "Trabalho em qualidade vale ACC?",
    "Onde registrar controle de processos?",
    "Auditoria conta como ACC?"
  ],
  responses: [
    "Controle de qualidade vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Relatórios de inspeção \n- Certificações"
  ],
},

// 29. Segurança do trabalho
seguranca_trabalho_acc: {
  patterns: [
    "Trabalho em segurança vale ACC?",
    "Onde registrar minha atuação em SIPAT?",
    "CIPA conta como ACC?"
  ],
  responses: [
    "Segurança do trabalho vale **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Certificado de curso \n- Declaração da empresa"
  ],
},

// 30. Tecnologia da informação
ti_acc: {
  patterns: [
    "Trabalho em TI vale ACC?",
    "Onde registrar manutenção de computadores?",
    "Desenvolvimento de sistemas conta?"
  ],
  responses: [
    "Atividades de TI valem **5h de ACC por mês** (Grupo 5, até 20% do total). Comprove com: \n- Contratos \n- Portfólio técnico \n- Notas fiscais"
  ],
},

  // 1. Programas de Educação Tutorial (PET)
pet_acc: {
  patterns: [
    "Participação no PET vale ACC?",
    "Onde registrar minhas atividades no PET?",
    "Bolsista PET conta como ACC?"
  ],
  responses: [
    "PET vale **7h de ACC por mês** (Grupo 6, até 60% do total). Comprove com: \n- Termo de compromisso \n- Relatório semestral \n- Declaração do tutor"
  ],
},

// 2. Residência Pedagógica
residencia_pedagogica_acc: {
  patterns: [
    "Residência Pedagógica vale ACC?",
    "Onde registrar minha residência?",
    "Atividades em escola parceira contam?"
  ],
  responses: [
    "Residência Pedagógica vale **7h de ACC por mês** (Grupo 6, até 60% do total). Comprove com: \n- Termo de adesão \n- Relatório de atividades"
  ],
},

// 3. Educação pelo Trabalho (PET-Saúde, etc.)
educacao_trabalho_acc: {
  patterns: [
    "PET-Saúde vale ACC?",
    "Onde registrar PET-Engenharia?",
    "Programas de educação pelo trabalho contam?"
  ],
  responses: [
    "Programas de educação pelo trabalho valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com termo de participação."
  ],
},

// 4. Ligas Acadêmicas
ligas_academicas_acc: {
  patterns: [
    "Participação em liga acadêmica vale ACC?",
    "Onde registrar minha liga?",
    "Diretor de liga conta como ACC?"
  ],
  responses: [
    "Ligas acadêmicas valem **1h de ACC por mês** (Grupo 6, até 20% do total). Comprove com: \n- Estatuto registrado \n- Plano de atividades"
  ],
},

// 5. Projetos Integradores
projetos_integradores_acc: {
  patterns: [
    "Projeto integrador vale ACC?",
    "Onde registrar atividade multidisciplinar?",
    "Trabalho que une ensino, pesquisa e extensão conta?"
  ],
  responses: [
    "Projetos integradores valem **5h de ACC por semestre** (Grupo 6, até 20% do total). Comprove com relatório aprovado."
  ],
},

// 6. Núcleos de Estudos
nucleos_estudos_acc: {
  patterns: [
    "Núcleo de estudos vale ACC?",
    "Onde registrar grupo interdisciplinar?",
    "Participação em NEAC conta como ACC?"
  ],
  responses: [
    "Núcleos de estudos valem **1h de ACC para cada 2h de atividade** (Grupo 6, até 20% do total). Comprove com cronograma de reuniões."
  ],
},

// 7. Observatórios
observatorios_acc: {
  patterns: [
    "Participação em observatório vale ACC?",
    "Onde registrar pesquisa aplicada?",
    "Atividades em observatório social contam?"
  ],
  responses: [
    "Observatórios valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com termo de adesão."
  ],
},

// 8. Incubadoras Tecnológicas
incubadoras_acc: {
  patterns: [
    "Incubadora de empresas vale ACC?",
    "Onde registrar minha startup incubada?",
    "Participação em programa de incubação conta?"
  ],
  responses: [
    "Incubadoras valem **5h de ACC por mês** (Grupo 6, até 20% do total). Comprove com contrato de incubação."
  ],
},

// 9. Laboratórios Interdisciplinares
laboratorios_interdisciplinares_acc: {
  patterns: [
    "Laboratório multidisciplinar vale ACC?",
    "Onde registrar pesquisa integrada?",
    "Atividades em lab que une áreas contam?"
  ],
  responses: [
    "Laboratórios interdisciplinares valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com plano de trabalho."
  ],
},

// 10. Projetos de Inovação
inovacao_acc: {
  patterns: [
    "Projeto de inovação pedagógica vale ACC?",
    "Onde registrar minha invenção acadêmica?",
    "Atividade criativa que integra áreas conta?"
  ],
  responses: [
    "Projetos de inovação valem **5h de ACC por semestre** (Grupo 6, até 20% do total). Comprove com relatório de resultados."
  ],
},

// 11. Programas de Mentoria
mentoria_acc: {
  patterns: [
    "Ser mentor de calouros vale ACC?",
    "Onde registrar meu programa de tutoria?",
    "Acompanhamento de estudantes conta?"
  ],
  responses: [
    "Mentorias valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com lista de orientados."
  ],
},

// 12. Projetos Comunitários Integrados
projetos_comunitarios_acc: {
  patterns: [
    "Projeto social que integra ensino e pesquisa vale ACC?",
    "Onde registrar ação comunitária interdisciplinar?",
    "Atividade que une teoria e prática social conta?"
  ],
  responses: [
    "Projetos comunitários integrados valem **5h de ACC por atividade** (Grupo 6, até 20% do total). Comprove com relatório assinado."
  ],
},

// 13. Feiras Integradas
feiras_integradas_acc: {
  patterns: [
    "Feira que une ensino, pesquisa e extensão vale ACC?",
    "Onde registrar evento interdisciplinar?",
    "Mostra acadêmica integrada conta?"
  ],
  responses: [
    "Feiras integradas valem **5h de ACC por evento** (Grupo 6, até 20% do total). Comprove com programa do evento."
  ],
},

// 14. Seminários Integrados
seminarios_integrados_acc: {
  patterns: [
    "Seminário interdisciplinar vale ACC?",
    "Onde registrar mesa redonda integrada?",
    "Evento que une várias áreas do conhecimento conta?"
  ],
  responses: [
    "Seminários integrados valem **3h de ACC por atividade** (Grupo 6, até 20% do total). Comprove com lista de presença."
  ],
},

// 15. Publicações Integradas
publicacoes_integradas_acc: {
  patterns: [
    "Publicação que integra ensino, pesquisa e extensão vale ACC?",
    "Onde registrar artigo interdisciplinar?",
    "Trabalho que une teoria e prática conta?"
  ],
  responses: [
    "Publicações integradas valem **10h de ACC cada** (Grupo 6, até 20% do total). Comprove com DOI ou ISBN."
  ],
},

// 16. Olimpíadas Científicas
olimpiadas_cientificas_acc: {
  patterns: [
    "Organização de olimpíada científica vale ACC?",
    "Onde registrar competição acadêmica?",
    "Participação em olimpíada interdisciplinar conta?"
  ],
  responses: [
    "Olimpíadas científicas valem **5h de ACC por edição** (Grupo 6, até 20% do total). Comprove com portaria de organização."
  ],
},

// 17. Projetos de Internacionalização
internacionalizacao_acc: {
  patterns: [
    "Projeto internacional integrado vale ACC?",
    "Onde registrar parceria global?",
    "Atividade com universidade estrangeira conta?"
  ],
  responses: [
    "Projetos de internacionalização valem **5h de ACC por semestre** (Grupo 6, até 20% do total). Comprove com acordo de cooperação."
  ],
},

// 18. Programas de Indução
inducao_acc: {
  patterns: [
    "Programa de indução científica vale ACC?",
    "Onde registrar iniciação à docência?",
    "Atividade que prepara para pós-graduação conta?"
  ],
  responses: [
    "Programas de indução valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com declaração da coordenação."
  ],
},

// 19. Projetos de Inclusão Digital
inclusao_digital_acc: {
  patterns: [
    "Projeto de inclusão digital vale ACC?",
    "Onde registrar alfabetização tecnológica?",
    "Oficina que integra tecnologia e educação conta?"
  ],
  responses: [
    "Inclusão digital vale **5h de ACC por projeto** (Grupo 6, até 20% do total). Comprove com relatório de impacto."
  ],
},

// 20. Atividades Museológicas
museologia_acc: {
  patterns: [
    "Trabalho em museu universitário vale ACC?",
    "Onde registrar curadoria acadêmica?",
    "Exposição interdisciplinar conta?"
  ],
  responses: [
    "Atividades museológicas valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com plano de exposição."
  ],
},

// 21. Projetos de Memória
memoria_acc: {
  patterns: [
    "Projeto de resgate histórico vale ACC?",
    "Onde registrar história oral?",
    "Documentação que integra pesquisa e extensão conta?"
  ],
  responses: [
    "Projetos de memória valem **5h de ACC por semestre** (Grupo 6, até 20% do total). Comprove com acervo produzido."
  ],
},

// 22. Bancos de Talentos
banco_talentos_acc: {
  patterns: [
    "Participação em banco de talentos vale ACC?",
    "Onde registrar habilidades integradas?",
    "Programa de desenvolvimento de competências conta?"
  ],
  responses: [
    "Bancos de talentos valem **3h de ACC por mês** (Grupo 6, até 20% do total). Comprove com certificado de participação."
  ],
},

// 23. Projetos de Sustentabilidade
sustentabilidade_acc: {
  patterns: [
    "Projeto sustentável integrado vale ACC?",
    "Onde registrar ação ecológica acadêmica?",
    "Atividade que une meio ambiente e pesquisa conta?"
  ],
  responses: [
    "Projetos de sustentabilidade valem **5h de ACC por atividade** (Grupo 6, até 20% do total). Comprove com relatório de impacto."
  ],
},

// 24. Programas de Artes Integradas
artes_integradas_acc: {
  patterns: [
    "Projeto artístico interdisciplinar vale ACC?",
    "Onde registrar performance acadêmica?",
    "Atividade que une arte e ciência conta?"
  ],
  responses: [
    "Artes integradas valem **5h de ACC por projeto** (Grupo 6, até 20% do total). Comprove com registro fotográfico."
  ],
},

// 25. Projetos de Saúde Integrada
saude_integrada_acc: {
  patterns: [
    "Atividade de saúde interdisciplinar vale ACC?",
    "Onde registrar ação preventiva integrada?",
    "Projeto que une saúde e educação conta?"
  ],
  responses: [
    "Saúde integrada vale **5h de ACC por atividade** (Grupo 6, até 20% do total). Comprove com relatório multiprofissional."
  ],
},

// 26. Projetos de Inclusão
inclusao_acc: {
  patterns: [
    "Projeto inclusivo integrado vale ACC?",
    "Onde registrar ação para PCDs?",
    "Atividade que une acessibilidade e pesquisa conta?"
  ],
  responses: [
    "Projetos de inclusão valem **5h de ACC por semestre** (Grupo 6, até 20% do total). Comprove com relatório de adaptações."
  ],
},

// 27. Programas de Empreendedorismo
empreendedorismo_integrado_acc: {
  patterns: [
    "Projeto de empreendedorismo acadêmico vale ACC?",
    "Onde registrar startup universitária?",
    "Atividade que une negócios e pesquisa conta?"
  ],
  responses: [
    "Empreendedorismo integrado vale **5h de ACC por projeto** (Grupo 6, até 20% do total). Comprove com plano de negócios."
  ],
},

// 28. Projetos de Direitos Humanos
direitos_humanos_integrado_acc: {
  patterns: [
    "Projeto interdisciplinar sobre direitos humanos vale ACC?",
    "Onde registrar ação integrada sobre diversidade?",
    "Atividade que une justiça social e ensino conta?"
  ],
  responses: [
    "Direitos humanos integrados valem **5h de ACC por atividade** (Grupo 6, até 20% do total). Comprove com materiais produzidos."
  ],
},

// 29. Projetos de Tecnologia Social
tecnologia_social_acc: {
  patterns: [
    "Tecnologia social interdisciplinar vale ACC?",
    "Onde registrar invenção para comunidade?",
    "Projeto que une técnica e transformação social conta?"
  ],
  responses: [
    "Tecnologias sociais valem **10h de ACC por projeto** (Grupo 6, até 20% do total). Comprove com protótipo e relatório."
  ],
},

// 30. Programas de Voluntariado Integrado
voluntariado_integrado_acc: {
  patterns: [
    "Voluntariado que une ensino e pesquisa vale ACC?",
    "Onde registrar ação solidária acadêmica?",
    "Atividade voluntária interdisciplinar conta?"
  ],
  responses: [
    "Voluntariado integrado vale **5h de ACC por projeto** (Grupo 6, até 20% do total). Comprove com relatório de impacto."
  ],
},

  // 1. Atletismo Universitário
atletismo_acc: {
  patterns: [
    "Participação em competição esportiva vale ACC?",
    "Onde registrar meu desempenho como atleta?",
    "Jogos universitários contam como ACC?"
  ],
  responses: [
    "Atletismo vale **1h de ACC para cada 5h de atividade** (Grupo 7, até 20% do total). Comprove com: \n- Crachá de participação \n- Resultados oficiais \n- Declaração da liga esportiva"
  ],
},

// 2. Apresentações Artísticas
apresentacoes_artisticas_acc: {
  patterns: [
    "Apresentação cultural vale ACC?",
    "Onde registrar minha performance artística?",
    "Show universitário conta como ACC?"
  ],
  responses: [
    "Apresentações artísticas valem **2h de ACC cada** (Grupo 7, até 10% do total). Comprove com: \n- Programa do evento \n- Registro em vídeo/foto \n- Declaração da organização"
  ],
},

// 3. Organização de Eventos Culturais
organizacao_eventos_acc: {
  patterns: [
    "Organizar evento cultural vale ACC?",
    "Onde registrar minha curadoria?",
    "Produção de mostra artística conta?"
  ],
  responses: [
    "Organização de eventos vale **2h de ACC para cada 5h de trabalho** (Grupo 7, até 20% do total). Comprove com: \n- Lista de atividades \n- Comprovante de organização"
  ],
},

// 4. Monitoria em Projetos Socioambientais
monitoria_socioambiental_acc: {
  patterns: [
    "Monitoria em projeto social vale ACC?",
    "Onde registrar minha atuação como educador ambiental?",
    "Oficinas comunitárias contam?"
  ],
  responses: [
    "Monitoria socioambiental vale **1h de ACC para cada 8h de atividade** (Grupo 7, até 60% do total). Comprove com: \n- Plano de aulas \n- Listas de presença"
  ],
},

// 5. Premiações Artísticas
premiacoes_artisticas_acc: {
  patterns: [
    "Prêmio em festival de arte vale ACC?",
    "Onde registrar minha premiação cultural?",
    "Reconhecimento artístico conta como ACC?"
  ],
  responses: [
    "Premiações artísticas valem **10h de ACC cada** (Grupo 7, até 20% do total). Comprove com certificado ou troféu."
  ],
},

// 6. Produção Cultural
producao_cultural_acc: {
  patterns: [
    "Produzir material artístico vale ACC?",
    "Onde registrar meu livro/curta/documentário?",
    "Criação cultural conta como ACC?"
  ],
  responses: [
    "Produções culturais valem **30h de ACC cada** (Grupo 7, até 50% do total). Comprove com: \n- Exemplar físico/digital \n- Registro de autoria"
  ],
},

// 7. Publicações sobre Esporte
publicacoes_esporte_acc: {
  patterns: [
    "Artigo sobre atividade esportiva vale ACC?",
    "Onde registrar minha pesquisa sobre esporte?",
    "Publicação em revista de educação física conta?"
  ],
  responses: [
    "Publicações esportivas valem **5h (resumos) ou 30h (artigos completos)** de ACC (Grupo 7, até 40-60% do total)."
  ],
},

// 8. Apresentações Esportivas
apresentacoes_esportivas_acc: {
  patterns: [
    "Demonstração esportiva vale ACC?",
    "Onde registrar minha exibição de ginástica?",
    "Performance atlética conta como ACC?"
  ],
  responses: [
    "Apresentações esportivas valem **2h de ACC cada** (Grupo 7, até 10% do total). Comprove com programa do evento."
  ],
},

// 9. Premiações Esportivas
premiacoes_esportivas_acc: {
  patterns: [
    "Medalha em competição vale ACC?",
    "Onde registrar meu pódio esportivo?",
    "Troféu universitário conta como ACC?"
  ],
  responses: [
    "Premiações esportivas valem **10h de ACC cada** (Grupo 7, até 40% do total). Comprove com foto com medalha/certificado."
  ],
},

// 10. Atividades Recreativas
atividades_recreativas_acc: {
  patterns: [
    "Organizar gincana vale ACC?",
    "Onde registrar dinâmicas de grupo?",
    "Atividade lúdica conta como ACC?"
  ],
  responses: [
    "Atividades recreativas valem **5h de ACC por evento** (Grupo 7, até 20% do total). Comprove com relatório de atividades."
  ],
},

// 11. Ações com Grupos Vulneráveis
grupos_vulneraveis_acc: {
  patterns: [
    "Trabalho com idosos vale ACC?",
    "Onde registrar ação com pessoas com deficiência?",
    "Atividade em abrigo conta como ACC?"
  ],
  responses: [
    "Ações com grupos vulneráveis valem **5h de ACC por atividade** (Grupo 7, até 20% do total). Comprove com declaração da instituição."
  ],
},

// 12. Campanhas Sociais
campanhas_sociais_acc: {
  patterns: [
    "Participar em campanha solidária vale ACC?",
    "Onde registrar minha ação humanitária?",
    "Arrecadação de alimentos conta?"
  ],
  responses: [
    "Campanhas sociais valem **5h de ACC cada** (Grupo 7, até 40% do total). Comprove com: \n- Relatório de arrecadação \n- Fotos da ação"
  ],
},

// 13. Grupos de Acolhimento
grupos_acolhimento_acc: {
  patterns: [
    "Participar de grupo de apoio vale ACC?",
    "Onde registrar meu voluntariado em acolhimento?",
    "Atividade de escuta conta como ACC?"
  ],
  responses: [
    "Grupos de acolhimento valem **5h de ACC por atividade** (Grupo 7, até 40% do total). Comprove com declaração da coordenação."
  ],
},

// 14. Coletivos Estudantis
coletivos_estudantis_acc: {
  patterns: [
    "Participar de coletivo negro vale ACC?",
    "Onde registrar meu ativismo estudantil?",
    "Grupo LGBTQIA+ conta como ACC?"
  ],
  responses: [
    "Coletivos estudantis valem **1h de ACC por mês de atividade** (Grupo 7, até 20% do total). Comprove com ata de reuniões."
  ],
},

// 15. Monitoria em Ações Afirmativas
monitoria_acoes_afirmativas_acc: {
  patterns: [
    "Ser tutor de cotista vale ACC?",
    "Onde registrar meu apoio a ações afirmativas?",
    "Mentoria para ingressantes contam?"
  ],
  responses: [
    "Monitoria em ações afirmativas vale **1h de ACC para cada 8h de atividade** (Grupo 7, até 60% do total). Comprove com plano de trabalho."
  ],
},

// 16. Eventos de Qualidade de Vida
qualidade_vida_acc: {
  patterns: [
    "Organizar semana de saúde mental vale ACC?",
    "Onde registrar palestra sobre bem-estar?",
    "Atividade de autocuidado conta?"
  ],
  responses: [
    "Eventos de qualidade de vida valem **5h de ACC por atividade** (Grupo 7, até 20% do total). Comprove com programa do evento."
  ],
},

// 17. Ações de Solidariedade
acoes_solidariedade_acc: {
  patterns: [
    "Participar de mutirão solidário vale ACC?",
    "Onde registrar minha ajuda humanitária?",
    "Trabalho voluntário pontual conta?"
  ],
  responses: [
    "Ações solidárias valem **5h de ACC cada** (Grupo 7, até 20% do total). Comprove com declaração da instituição beneficiada."
  ],
},

// 18. Atividades de Acessibilidade
acessibilidade_acc: {
  patterns: [
    "Projeto de inclusão para PCDs vale ACC?",
    "Onde registrar minha ação de acessibilidade?",
    "Oficina de libras conta como ACC?"
  ],
  responses: [
    "Atividades de acessibilidade valem **5h de ACC por projeto** (Grupo 7, até 20% do total). Comprove com relatório de adaptações."
  ],
},

// 19. Eventos sobre Diversidade
diversidade_acc: {
  patterns: [
    "Organizar debate sobre diversidade vale ACC?",
    "Onde registrar minha mesa sobre inclusão?",
    "Semana da consciência negra conta?"
  ],
  responses: [
    "Eventos sobre diversidade valem **5h de ACC por atividade** (Grupo 7, até 20% do total). Comprove com lista de presença."
  ],
},

// 20. Produções sobre Ações Afirmativas
producoes_acoes_afirmativas_acc: {
  patterns: [
    "Artigo sobre cotas vale ACC?",
    "Onde registrar minha pesquisa sobre diversidade?",
    "Publicação sobre ações afirmativas conta?"
  ],
  responses: [
    "Produções acadêmicas sobre o tema valem **5h (resumos) ou 30h (artigos)** de ACC (Grupo 7, até 30-60% do total)."
  ],
},

// 21. Livros sobre Inclusão
livros_inclusao_acc: {
  patterns: [
    "Escrever livro sobre inclusão vale ACC?",
    "Onde registrar minha publicação sobre diversidade?",
    "Capítulo sobre ações afirmativas conta?"
  ],
  responses: [
    "Livros valem **30h de ACC**, capítulos **10h** (Grupo 7, até 50-40% do total). Comprove com ISBN."
  ],
},

// 22. Apresentações sobre Inclusão
apresentacoes_inclusao_acc: {
  patterns: [
    "Palestra sobre diversidade vale ACC?",
    "Onde registrar minha fala em evento inclusivo?",
    "Participação em debate sobre cotas conta?"
  ],
  responses: [
    "Apresentações valem **5h de ACC cada** (Grupo 7, até 20% do total). Comprove com programa do evento."
  ],
},

// 23. Premiações por Inclusão
premiacoes_inclusao_acc: {
  patterns: [
    "Prêmio por projeto inclusivo vale ACC?",
    "Onde registrar meu reconhecimento por diversidade?",
    "Menção honrosa por inclusão conta?"
  ],
  responses: [
    "Premiações valem **10h de ACC cada** (Grupo 7, até 20% do total). Comprove com certificado."
  ],
},

// 24. Atividades Artísticas Comunitárias
arte_comunitaria_acc: {
  patterns: [
    "Oficina de arte na comunidade vale ACC?",
    "Onde registrar meu projeto cultural social?",
    "Aula de música em ONG conta como ACC?"
  ],
  responses: [
    "Arte comunitária vale **5h de ACC por projeto** (Grupo 7, até 20% do total). Comprove com lista de participantes."
  ],
},

// 25. Eventos Esportivos Comunitários
esporte_comunitario_acc: {
  patterns: [
    "Organizar torneio esportivo social vale ACC?",
    "Onde registrar minha ação esportiva comunitária?",
    "Olimpíada em comunidade carente conta?"
  ],
  responses: [
    "Eventos esportivos comunitários valem **5h de ACC por atividade** (Grupo 7, até 20% do total). Comprove com fotos e relatório."
  ],
},

// 26. Cultura Popular
cultura_popular_acc1: {
  patterns: [
    "Resgatar cultura tradicional vale ACC?",
    "Onde registrar minha pesquisa sobre folclore?",
    "Documentário sobre manifestações culturais conta?"
  ],
  responses: [
    "Cultura popular vale **5h de ACC por projeto** (Grupo 7, até 20% do total). Comprove com material produzido."
  ],
},

// 27. Patrimônio Cultural
patrimonio_cultural_acc: {
  patterns: [
    "Projeto sobre patrimônio histórico vale ACC?",
    "Onde registrar minha ação de preservação?",
    "Restauro de bem cultural conta como ACC?"
  ],
  responses: [
    "Patrimônio cultural vale **5h de ACC por atividade** (Grupo 7, até 20% do total). Comprove com autorização do órgão responsável."
  ],
},

// 28. Artesanato Cultural
artesanato_cultural_acc: {
  patterns: [
    "Oficina de artesanato tradicional vale ACC?",
    "Onde registrar minha produção artesanal?",
    "Ensino de técnicas manuais conta?"
  ],
  responses: [
    "Artesanato cultural vale **5h de ACC por oficina** (Grupo 7, até 20% do total). Comprove com peças produzidas."
  ],
},

// 29. Contação de Histórias
contacao_historias_acc: {
  patterns: [
    "Contar histórias em abrigo vale ACC?",
    "Onde registrar minha atividade de narração?",
    "Projeto de leitura conta como ACC?"
  ],
  responses: [
    "Contação de histórias vale **5h de ACC por projeto** (Grupo 7, até 20% do total). Comprove com lista de sessões realizadas."
  ],
},

// 30. Intervenções Urbanas
intervencoes_urbanas_acc: {
  patterns: [
    "Intervenção artística urbana vale ACC?",
    "Onde registrar meu projeto de arte pública?",
    "Grafite comunitário conta como ACC?"
  ],
  responses: [
    "Intervenções urbanas valem **5h de ACC por ação** (Grupo 7, até 20% do total). Comprove com registro fotográfico e autorizações."
  ],
},

  // GRUPO 1 - ENSINO
grupo1_ensino_acc: {
  patterns: [
    "O que é o Grupo 1 de ACC?",
    "Para que serve o Grupo 1?",
    "Quais atividades são do Grupo 1?"
  ],
  responses: [
    "**Grupo 1 - Atividades de Ensino**: Inclui disciplinas optativas não utilizadas no curso, cursos extracurriculares (presenciais, EAD ou online), monitorias, participação em eventos acadêmicos como semanas de integração, e certificados de proficiência em idiomas. Exemplos: \n- Curso de inglês online \n- Monitoria em disciplina \n- Participação como ouvinte em congresso"
  ],
},

// GRUPO 2 - PESQUISA
grupo2_pesquisa_acc: {
  patterns: [
    "O que é o Grupo 2 de ACC?",
    "Para que serve o Grupo 2?",
    "Quais atividades são do Grupo 2?"
  ],
  responses: [
    "**Grupo 2 - Pesquisa e Inovação**: Abrange iniciação científica, publicações (artigos, resumos, livros), apresentações em eventos, desenvolvimento de produtos tecnológicos e participação em grupos de pesquisa. Exemplos: \n- Artigo publicado em revista \n- Participação em PIBIC \n- Apresentação de pôster em seminário"
  ],
},

// GRUPO 3 - EXTENSÃO
grupo3_extensao_acc: {
  patterns: [
    "O que é o Grupo 3 de ACC?",
    "Para que serve o Grupo 3?",
    "Quais atividades são do Grupo 3?"
  ],
  responses: [
    "**Grupo 3 - Extensão**: Contempla projetos sociais, cursos comunitários, ações de voluntariado, produção de materiais extensionistas e atividades que integram universidade-sociedade. Exemplos: \n- Projeto de alfabetização \n- Mutirão de saúde \n- Oficina para idosos"
  ],
},

// GRUPO 4 - REPRESENTAÇÃO
grupo4_representacao_acc: {
  patterns: [
    "O que é o Grupo 4 de ACC?",
    "Para que serve o Grupo 4?",
    "Quais atividades são do Grupo 4?"
  ],
  responses: [
    "**Grupo 4 - Representação Estudantil**: Inclui atuação em órgãos colegiados, DCE, Centros Acadêmicos, atléticas, comissões e representação em entidades civis. Exemplos: \n- Membro do CA \n- Representante no Conselho Universitário \n- Diretor de Atlética"
  ],
},

// GRUPO 5 - TRABALHO
grupo5_trabalho_acc: {
  patterns: [
    "O que é o Grupo 5 de ACC?",
    "Para que serve o Grupo 5?",
    "Quais atividades são do Grupo 5?"
  ],
  responses: [
    "**Grupo 5 - Iniciação ao Trabalho**: Engloba estágios não obrigatórios, empresas júnior, trabalho voluntário, empreendedorismo e experiências profissionais relacionadas à área de formação. Exemplos: \n- Estágio em empresa \n- Participação em EJ \n- Projeto freelancer na área"
  ],
},

// GRUPO 6 - INTEGRAÇÃO
grupo6_integracao_acc: {
  patterns: [
    "O que é o Grupo 6 de ACC?",
    "Para que serve o Grupo 6?",
    "Quais atividades são do Grupo 6?"
  ],
  responses: [
    "**Grupo 6 - Integração Ensino-Pesquisa-Extensão**: Inclui PET, residências pedagógicas, projetos interdisciplinares, incubadoras e atividades que combinam as três dimensões acadêmicas. Exemplos: \n- Projeto PET \n- Residência Pedagógica \n- Laboratório interdisciplinar"
  ],
},

// GRUPO 7 - CULTURA/ESPORTE
grupo7_cultura_esporte_acc: {
  patterns: [
    "O que é o Grupo 7 de ACC?",
    "Para que serve o Grupo 7?",
    "Quais atividades são do Grupo 7?"
  ],
  responses: [
    "**Grupo 7 - Cultura, Esporte e Solidariedade**: Abrange competições esportivas, produções artísticas, ações de inclusão, voluntariado e projetos que promovem diversidade. Exemplos: \n- Time universitário \n- Oficina de teatro \n- Projeto com refugiados"
  ],
}, 

  // 1. DOCUMENTAÇÃO GERAL
documentacao_geral_acc: {
  patterns: [
    "Como comprovar minhas ACCs?",
    "Quais documentos preciso para validar ACC?",
    "Onde vejo a lista de documentos aceitos?"
  ],
  responses: [
    "Você precisa de documentos oficiais com: \n- Nome completo \n- Carga horária \n- Assinatura do responsável \n- Período de realização \nExemplos: certificados, declarações, contratos ou publicações com ISSN/ISBN."
  ],
},

// 2. PRAZOS
prazos_acc: {
  patterns: [
    "Qual o prazo para enviar documentos?",
    "Até quando posso registrar ACC?",
    "Posso enviar comprovantes depois de formado?"
  ],
  responses: [
    "O registro deve ser feito **durante o curso**, preferencialmente até o 2º semestre do último ano. Documentos só são aceitos após a colação em casos excepcionais, mediante análise."
  ],
},

// 3. ENVIO DE DOCUMENTOS
envio_documentos_acc: {
  patterns: [
    "Como enviar meus comprovantes?",
    "Onde subir os documentos das ACCs?",
    "É pelo SIGAA o envio?"
  ],
  responses: [
    "Envie pelo **SIGAA > Menu Atividades Complementares**: \n1. Acesse 'Lançamento de ACC' \n2. Selecione o grupo correto \n3. Anexe os arquivos em PDF/JPEG (máx. 2MB cada) \n4. Preencha os metadados solicitados"
  ],
},

// 4. HOMOLOGAÇÃO
homologacao_acc: {
  patterns: [
    "Quem aprova minhas ACCs?",
    "Para quem enviar os documentos?",
    "Qual setor analisa as atividades?"
  ],
  responses: [
    "A análise é feita pela **Coordenação de Curso**. Em caso de dúvidas, contate: \n- coordenacao@seucurso.ufob.edu.br \n- Ou presencialmente na secretaria do seu departamento"
  ],
},

// 5. CARGA HORÁRIA
carga_horaria_acc: {
  patterns: [
    "Quantas horas de ACC preciso?",
    "Qual a carga horária obrigatória?",
    "Quantas horas faltam para completar minhas ACCs?"
  ],
  responses: [
    "São necessárias **60 horas totais**, distribuídas entre os 7 grupos. Verifique seu histórico no SIGAA para acompanhar as horas já validadas."
  ],
},

// 6. LIMITES POR GRUPO
limites_grupos_acc: {
  patterns: [
    "Posso usar só um grupo para todas minhas ACCs?",
    "Tem limite por categoria?",
    "Quantas horas posso colocar em cada grupo?"
  ],
  responses: [
    "Sim, há limites por grupo (ex: máximo 60% em pesquisa). Consulte o 'Barema de ACC' no site da UFOB ou no anexo da Resolução CCET 01/2023."
  ],
},

// 7. ATIVIDADES EXTERNAS
atividades_externas_acc: {
  patterns: [
    "Atividades de outras instituições valem?",
    "Cursos do SENAI contam como ACC?",
    "Eventos fora da UFOB são aceitos?"
  ],
  responses: [
    "Sim, desde que: \n- Sejam de instituições reconhecidas \n- Estejam relacionados à sua formação \n- Tenham documentação válida (com carga horária e conteúdo programático)"
  ],
},

// 8. ERROS NO ENVIO
erros_envio_acc: {
  patterns: [
    "Enviei o documento errado, e agora?",
    "Como corrigir um comprovante enviado?",
    "Fiz upload de arquivo incorreto"
  ],
  responses: [
    "Solicite a correção via: \n1. SIGAA > Abra o registro incorreto \n2. Clique em 'Solicitar Retificação' \n3. Aguarde a reprovação do documento \n4. Reenvie o arquivo correto"
  ],
},

// 9. PRAZO DE ANÁLISE
prazo_analise_acc: {
  patterns: [
    "Quanto tempo demora a análise?",
    "Quando saberei se foi aprovado?",
    "Demora muito para validarem?"
  ],
  responses: [
    "O prazo médio é de **20 dias úteis**. Acompanhe no SIGAA: \n'Consultar Atividades > Situação'. Em caso de atraso, contate a coordenação."
  ],
},

// 10. RECUSAS
documentos_recusados_acc: {
  patterns: [
    "Meu documento foi recusado, o que fazer?",
    "Por que rejeitaram meu certificado?",
    "Motivos para recusa de ACC?"
  ],
  responses: [
    "Os motivos comuns são: \n- Carga horária não declarada \n- Documento ilegível \n- Atividade fora do prazo \n- Grupo incorreto \nCorrija e reenvie pelo mesmo processo."
  ],
},

// 11. ATIVIDADES ANTERIORES
atividades_anteriores_acc: {
  patterns: [
    "Posso usar atividades do ensino médio?",
    "Cursos feitos antes da faculdade valem?",
    "Eventos antigos contam como ACC?"
  ],
  responses: [
    "Não. Só atividades realizadas **durante o curso superior** são válidas, exceto intercâmbios ou cursos de idiomas concluídos até 2 anos antes do ingresso."
  ],
},

// 12. DUPLICIDADE
duplicidade_acc: {
  patterns: [
    "Posso usar a mesma atividade em dois grupos?",
    "Publicação vale para pesquisa e extensão?",
    "Duplicar horas é permitido?"
  ],
  responses: [
    "Não. Cada atividade só pode ser contabilizada **em um grupo**. Escolha o mais adequado."
  ],
},

// 13. CERTIFICADOS ONLINE
certificados_online_acc: {
  patterns: [
    "Cursos de plataformas online valem?",
    "Coursera/Udemy conta como ACC?",
    "Como comprovar curso EAD?"
  ],
  responses: [
    "Sim, desde que: \n- Tenham carga horária mínima de 10h \n- Emitam certificado com código de validação \n- Sejam de instituições reconhecidas"
  ],
},

// 14. ATIVIDADES REMUNERADAS
atividades_remuneradas_acc: {
  patterns: [
    "Trabalho remunerado pode ser ACC?",
    "Estágio remunerado conta?",
    "Atividade paga vale como complementar?"
  ],
  responses: [
    "Sim, não há distinção entre atividades remuneradas ou não. O importante é a relação com sua formação e a documentação comprobatória."
  ],
},

// 15. HORAS POR SEMESTRE
horas_semestre_acc: {
  patterns: [
    "Quantas horas posso fazer por semestre?",
    "Tem limite de ACC por período?",
    "Posso fazer todas as horas no último ano?"
  ],
  responses: [
    "Não há limite por semestre, mas recomenda-se distribuir as atividades ao longo do curso. No último ano, só são aceitas atividades com conclusão até 6 meses antes da colação."
  ],
},

// 16. VALIDAÇÃO PARCIAL
validacao_parcial_acc: {
  patterns: [
    "Pode validar só parte da carga horária?",
    "Se o curso tiver 100h, valem todas?",
    "A UFOB reduz horas de atividades externas?"
  ],
  responses: [
    "Sim, algumas atividades têm conversão parcial (ex: 1h ACC = 2h de extensão). Consulte a tabela de equivalência no regulamento."
  ],
},

// 17. ATIVIDADES INTERNACIONAIS
atividades_internacionais_acc: {
  patterns: [
    "Como validar atividades no exterior?",
    "Eventos internacionais contam?",
    "Documentos em inglês são aceitos?"
  ],
  responses: [
    "Sim, documentos internacionais são válidos. Se não estiverem em português, anexe: \n- Documento original \n- Tradução simples (não precisa ser juramentada)"
  ],
},

// 18. MUDANÇA DE CURSO
mudanca_curso_acc: {
  patterns: [
    "Se trocar de curso, perco as ACCs?",
    "Atividades do curso anterior valem?",
    "Como fica ACC na transferência?"
  ],
  responses: [
    "Atividades compatíveis com a nova matriz curricular podem ser validadas. Solicite análise à nova coordenação com os documentos originais."
  ],
},

// 19. ALUNOS ESPECIAIS
alunos_especiais_acc: {
  patterns: [
    "Aluno especial pode fazer ACC?",
    "Como fica ACC para quem trancou?",
    "Atividades no período trancado contam?"
  ],
  responses: [
    "Só atividades realizadas em períodos de matrícula ativa são válidas. Alunos especiais devem consultar a coordenação para casos excepcionais."
  ],
},

// 20. EMERGÊNCIAS
emergencias_acc: {
  patterns: [
    "Perdi meu certificado, e agora?",
    "Documento foi perdido, como proceder?",
    "Como recuperar comprovante de ACC?"
  ],
  responses: [
    "Solicite: \n- 2ª via à instituição emissora \n- Ou apresente declaração com firma reconhecida \n- Em último caso, apresente cópias ou registros digitais (como e-mails oficiais)"
  ],
},

// 21. ATIVIDADES NÃO LISTADAS
atividades_nao_listadas_acc: {
  patterns: [
    "Minha atividade não está no regulamento, vale?",
    "Como propor nova atividade para ACC?",
    "Atividade inovadora pode ser aceita?"
  ],
  responses: [
    "Atividades não listadas podem ser validadas mediante: \n- Relatório detalhado \n- Justificativa de relevância \n- Aprovação do colegiado do curso"
  ],
},

// 22. ESTÁGIO OBRIGATÓRIO
estagio_obrigatorio_acc: {
  patterns: [
    "Estágio obrigatório conta como ACC?",
    "Posso usar horas de estágio curricular?",
    "Atividade obrigatória vale como complementar?"
  ],
  responses: [
    "Não. Atividades obrigatórias da matriz curricular não podem ser usadas como ACC, apenas estágios/extras não obrigatórios."
  ],
},

// 23. ATIVIDADES RELIGIOSAS
atividades_religiosas_acc: {
  patterns: [
    "Atividade em igreja vale ACC?",
    "Trabalho voluntário religioso conta?",
    "Grupo de jovens pode ser ACC?"
  ],
  responses: [
    "Só se tiver **relação direta com sua formação** e comprovação de impacto social. Atividades meramente doutrinárias não são aceitas."
  ],
},

// 24. CURSOS DE EXTENSÃO
cursos_extensao_acc: {
  patterns: [
    "Curso de extensão da UFOB vale ACC?",
    "Como registrar curso da própria universidade?",
    "Atividade de extensão interna conta?"
  ],
  responses: [
    "Sim, cursos de extensão da UFOB são válidos. Eles são automaticamente registrados no seu histórico se concluídos corretamente."
  ],
},

// 25. ATIVIDADES POLÍTICAS
atividades_politicas_acc: {
  patterns: [
    "Participação em partido vale ACC?",
    "Ativismo político conta como complementar?",
    "Movimento estudantil não institucionalizado é ACC?"
  ],
  responses: [
    "Não. Atividades partidárias ou militância política não são consideradas ACC, mesmo que relacionadas a causas sociais."
  ],
},

  // 26. EQUIVALÊNCIA DE HORAS
equivalencia_horas_acc: {
  patterns: [
    "Como calculam as horas de ACC?",
    "1 hora de atividade vale 1 hora de ACC?",
    "Tem conversão de horas?"
  ],
  responses: [
    "A equivalência varia por grupo. Exemplos: \n- 8h de monitoria = 1h ACC \n- 1h de curso = 1h ACC \n- 1 mês de estágio = 10h ACC \nConsulte a tabela completa no Anexo C da Resolução CCET 01/2023."
  ],
},

// 27. ATIVIDADES EM EAD
ead_acc: {
  patterns: [
    "Cursos EAD têm menos valor para ACC?",
    "Como registrar curso online?",
    "A distância reduz as horas válidas?"
  ],
  responses: [
    "Cursos EAD têm peso menor: \n- Síncronos (ao vivo): 1h = 1h ACC (15% do total) \n- Assíncronos: 1h = 1h ACC (10% do total) \nDocumentos necessários: certificado com código de verificação."
  ],
},

// 28. PROJETOS DE ENSINO
projetos_ensino_acc: {
  patterns: [
    "Desenvolver material didático vale ACC?",
    "Criação de apostila conta como atividade?",
    "Elaborar exercícios para disciplina é ACC?"
  ],
  responses: [
    "Sim, produção de recursos didáticos vale **30h de ACC por projeto** (Grupo 1). Requer: \n- Relatório técnico \n- Aprovação do docente responsável \n- Comprovação de uso em disciplina."
  ],
},

// 29. VALIDAÇÃO DE PUBLICAÇÕES
validacao_publicacoes_acc: {
  patterns: [
    "Como comprovar artigo publicado?",
    "Precisa do DOI para publicações?",
    "Revista não indexada vale como ACC?"
  ],
  responses: [
    "Para publicações: \n- Artigos: envie PDF com página editorial (ISSN/DOI) \n- Livros: capa e página com ISBN \n- Anais: comprovante de aceite \nRevistas não indexadas podem valer se tiverem comitê editorial."
  ],
},

// 30. EVENTOS CIENTÍFICOS
eventos_cientificos_acc: {
  patterns: [
    "Participar como ouvinte em congresso vale?",
    "Seminário acadêmico conta como ACC?",
    "Workshop de pesquisa é atividade complementar?"
  ],
  responses: [
    "Sim, como ouvinte: \n- 1h de evento = 1h ACC (Grupo 1) \nMáximo 30% do total. Comprove com: \n- Certificado \n- Programa do evento \n- Comprovante de inscrição."
  ],
},

// 31. ATIVIDADES ARTÍSTICAS
atividades_artisticas_acc: {
  patterns: [
    "Exposição de arte vale ACC?",
    "Apresentação musical conta como atividade?",
    "Participar de coral universitário é ACC?"
  ],
  responses: [
    "Atividades artísticas valem: \n- Apresentação: 2h ACC \n- Organização: 2h/5h trabalhadas \nComprove com: \n- Programação do evento \n- Declaração do orientador \n- Registros fotográficos."
  ],
},

// 32. COMPETIÇÕES ACADÊMICAS
competicoes_academicas_acc: {
  patterns: [
    "Participar de olimpíada do conhecimento vale?",
    "Maratona de programação conta como ACC?",
    "Competição de robótica é atividade complementar?"
  ],
  responses: [
    "Sim, competições valem: \n- Participação: 5h ACC \n- Premiação: +10h ACC \nDocumentos: \n- Certificado \n- Resultado oficial \n- Relatório técnico (se for projeto)."
  ],
},

// 33. CURSOS TÉCNICOS
cursos_tecnicos_acc: {
  patterns: [
    "Curso técnico paralelo vale ACC?",
    "Senai/Senac conta como atividade complementar?",
    "Certificado de qualificação profissional é ACC?"
  ],
  responses: [
    "Cursos técnicos são válidos se: \n- Relacionados à sua área \n- Carga mínima de 20h \n- Realizados durante a graduação \nEnvie: certificado com ementa e CNPJ da instituição."
  ],
},

// 34. VOLUNTARIADO INTERNACIONAL
voluntariado_internacional_acc: {
  patterns: [
    "Trabalho voluntário no exterior vale ACC?",
    "Como comprovar atividade humanitária fora do país?",
    "Intercâmbio social conta como ACC?"
  ],
  responses: [
    "Sim, valem **5h de ACC por atividade** (Grupo 7). Documentos: \n- Certificado da organização \n- Relatório de atividades \n- Visto/Passagem (opcional). \nObs.: Atividades religiosas não são aceitas."
  ],
},

// 35. PALESTRAS E WORKSHOPS
palestras_workshops_acc: {
  patterns: [
    "Ministrar palestra vale ACC?",
    "Dar workshop conta como atividade?",
    "Ouvir palestra é ACC?"
  ],
  responses: [
    "Sim: \n- Ouvinte: 1h = 1h ACC (Grupo 1) \n- Palestrante: 5h ACC por atividade (Grupo 2) \nComprove com: \n- Programa do evento \n- Declaração da organização \n- Slide da apresentação (se palestrante)."
  ],
},

// 36. ATIVIDADES CORPORATIVAS
atividades_corporativas_acc: {
  patterns: [
    "Participar de RH Day vale ACC?",
    "Evento corporativo conta como complementar?",
    "Visita a empresa é atividade ACC?"
  ],
  responses: [
    "Atividades corporativas valem se: \n- Tiverem conteúdo educacional \n- Duração mínima de 4h \nComprove com: \n- Certificado \n- CNPJ da empresa \n- Relatório de aprendizados."
  ],
},

// 37. PROJETOS COMUNITÁRIOS
projetos_comunitarios_acc: {
  patterns: [
    "Projeto em comunidade carente vale ACC?",
    "Trabalho em ONG conta como atividade?",
    "Ação social esporádica é ACC?"
  ],
  responses: [
    "Sim, valem **5h de ACC por atividade** (Grupo 3 ou 7). Documentos: \n- Declaração da instituição \n- Relatório fotográfico \n- Lista de beneficiários (se aplicável)."
  ],
},

// 38. INICIAÇÃO PROFISSIONAL
iniciacao_profissional_acc: {
  patterns: [
    "Programa de trainee vale ACC?",
    "Como registrar startup school?",
    "Academia de jovens talentos conta?"
  ],
  responses: [
    "Programas de iniciação profissional valem **5h de ACC por mês** (Grupo 5). Comprove com: \n- Contrato/termo de adesão \n- Relatório mensal \n- Avaliação do orientador."
  ],
},

// 39. ATIVIDADES CULTURAIS
atividades_culturais_acc: {
  patterns: [
    "Visita a museu vale ACC?",
    "Participar de cineclube conta?",
    "Clube de leitura é atividade complementar?"
  ],
  responses: [
    "Atividades culturais sistemáticas valem: \n- 1h ACC por visita/evento (máx. 10%) \n- 5h ACC por organização \nComprove com: \n- Ingressos \n- Lista de presença \n- Relatório crítico (opcional)."
  ],
},

// 40. REPRESENTAÇÃO ACADÊMICA
representacao_academica_acc: {
  patterns: [
    "Representar curso em feira profissional vale ACC?",
    "Ser embaixador universitário conta?",
    "Participar de banca examinadora é ACC?"
  ],
  responses: [
    "Sim, representação institucional vale **5h de ACC por evento** (Grupo 4). Documentos: \n- Designação por portaria \n- Relatório de atividades \n- Comprovante de participação."
  ],
},

// 41. INTERCÂMBIO CULTURAL
intercambio_cultural_acc: {
  patterns: [
    "Intercâmbio vale como ACC?",
    "Como registrar mobilidade acadêmica?",
    "Programa de verão no exterior conta?"
  ],
  responses: [
    "Intercâmbios valem **5h de ACC para cada 15h de atividade** (Grupo 1). Comprove com: \n- Termo de mobilidade \n- Histórico parcial \n- Relatório de atividades."
  ],
},

// 42. MONITORIAS NÃO FORMAIS
monitorias_informais_acc: {
  patterns: [
    "Ajudar colegas sem ser monitor oficial vale ACC?",
    "Plantão de dúvidas não institucionalizado conta?",
    "Monitoria voluntária é ACC?"
  ],
  responses: [
    "Só monitorias formais (com designação da instituição) são válidas. Atividades informais não são aceitas como ACC."
  ],
},

// 43. ATIVIDADES ESPORTIVAS
atividades_esportivas_acc: {
  patterns: [
    "Participar de time universitário vale ACC?",
    "Maratona esportiva conta como atividade?",
    "Competir por atlética é ACC?"
  ],
  responses: [
    "Atividades esportivas organizadas valem: \n- Atleta: 1h ACC para cada 5h de treino \n- Organizador: 2h ACC para cada 5h trabalhadas \nMáximo 20% do total."
  ],
},

// 44. PRODUÇÃO TÉCNICA
producao_tecnica_acc: {
  patterns: [
    "Desenvolver software vale ACC?",
    "Criação de protótipo conta como atividade?",
    "Manual técnico é ACC?"
  ],
  responses: [
    "Produções técnicas valem **10h a 30h de ACC** (Grupo 2). Comprove com: \n- Código-fonte (GitHub) \n- Relatório técnico \n- Declaração de uso (se aplicável)."
  ],
},

// 45. FEIRAS PROFISSIONAIS
feiras_profissionais_acc: {
  patterns: [
    "Expor em feira de profissões vale ACC?",
    "Visitar feira de estágios conta?",
    "Participar de career day é atividade?"
  ],
  responses: [
    "Como expositor: **5h ACC por dia** (Grupo 5). Como visitante: não vale ACC. Comprove com crachá e declaração da organização."
  ],
},

// 46. ATIVIDADES DE INOVAÇÃO
inovacao_acc: {
  patterns: [
    "Participar de hackday vale ACC?",
    "Como registrar ideação de startup?",
    "Desafio de criatividade conta?"
  ],
  responses: [
    "Atividades de inovação valem **5h de ACC por evento** (Grupo 2 ou 5). Comprove com: \n- Certificado \n- Pitch deck \n- Protótipo (se houver)."
  ],
},

// 47. PARTICIPAÇÃO EM EDITAIS
editais_acc: {
  patterns: [
    "Escrever projeto para edital vale ACC?",
    "Submeter trabalho em chamada pública conta?",
    "Como registrar proposta não aprovada?"
  ],
  responses: [
    "Sim, elaboração de propostas vale **5h de ACC por edital** (Grupo 2). Comprove com: \n- Comprovante de submissão \n- Cópia da proposta \n- Feedback (se disponível)."
  ],
},

// 48. ATIVIDADES DE INCLUSÃO
inclusao_acc: {
  patterns: [
    "Trabalhar com educação especial vale ACC?",
    "Projeto para surdos conta como atividade?",
    "Oficina em braile é ACC?"
  ],
  responses: [
    "Atividades de inclusão valem **5h de ACC por ação** (Grupo 7). Documentos: \n- Relatório de impacto \n- Depoimentos (opcional) \n- Materiais adaptados."
  ],
},

// 49. PROJETOS INTERDISCIPLINARES
interdisciplinares_acc: {
  patterns: [
    "Projeto que une várias áreas vale ACC?",
    "Como registrar atividade multidisciplinar?",
    "Trabalho com alunos de outros cursos conta?"
  ],
  responses: [
    "Sim, projetos interdisciplinares valem **5h de ACC por semestre** (Grupo 6). Comprove com: \n- Relatório conjunto \n- Declaração dos orientadores \n- Resultados alcançados."
  ],
},

// 50. CERTIFICADOS
certificados_acc: {
  patterns: [
    "Certificado sem carga horária vale?",
    "O que fazer se o documento não tem horas?",
    "Declaração sem especificação é aceita?"
  ],
  responses: [
    "Certificados sem carga horária podem ser recusados. Soluções: \n1. Solicitar retificação ao emissor \n2. Anexar programa do evento com horas \n3. Apresentar cálculo justificado (aprovado pela coordenação)."
  ],
},

  // 51. ATIVIDADES DE EMPREENDEDORISMO
empreendedorismo_acc: {
  patterns: [
    "Participar de startup weekend vale ACC?",
    "Como registrar meu negócio como ACC?",
    "Competição de pitch conta como atividade?"
  ],
  responses: [
    "Atividades de empreendedorismo valem **5h de ACC por evento** (Grupo 5). Comprove com: \n- Certificado de participação \n- Business plan \n- Comprovante de CNPJ (se aplicável)"
  ],
},

// 52. ATIVIDADES AMBIENTAIS
atividades_ambientais_acc: {
  patterns: [
    "Projeto de reciclagem vale ACC?",
    "Como registrar mutirão ecológico?",
    "Plantio de árvores conta como ACC?"
  ],
  responses: [
    "Atividades ambientais valem **5h de ACC por ação** (Grupo 3 ou 7). Documentos: \n- Declaração da organização \n- Registro fotográfico \n- Relatório de impacto (ex: kg de resíduos coletados)"
  ],
},

// 53. ATIVIDADES DE SAÚDE
atividades_saude_acc: {
  patterns: [
    "Campanha de doação de sangue vale ACC?",
    "Participar de ação de saúde bucal conta?",
    "Como registrar palestra sobre prevenção?"
  ],
  responses: [
    "Ações de saúde valem **5h de ACC por atividade** (Grupo 3). Comprove com: \n- Declaração da unidade de saúde \n- Lista de atendimentos \n- Material educativo produzido"
  ],
},

// 54. MINICURSOS
minicursos_acc: {
  patterns: [
    "Ministrar minicurso vale ACC?",
    "Como registrar oficina que eu dei?",
    "Curso rápido conta como atividade?"
  ],
  responses: [
    "Minicursos valem: \n- Como participante: 1h = 1h ACC \n- Como ministrante: 5h ACC por atividade \nDocumentos: programa do curso e lista de presença."
  ],
},

// 55. ATIVIDADES DE DIREITO
atividades_direito_acc: {
  patterns: [
    "Participar de júri simulado vale ACC?",
    "Como registrar atendimento jurídico?",
    "Visita a tribunal conta como ACC?"
  ],
  responses: [
    "Atividades jurídicas valem **5h de ACC por ação** (Grupo 5). Comprove com: \n- Certificado da OAB (se aplicável) \n- Relatório de atividades \n- Termo de comparecimento"
  ],
},

// 56. ATIVIDADES DE ENGENHARIA
atividades_engenharia_acc: {
  patterns: [
    "Visita técnica a obra vale ACC?",
    "Como registrar protótipo de engenharia?",
    "Competição de ponte de espaguete conta?"
  ],
  responses: [
    "Atividades específicas de engenharia valem **5h a 30h de ACC** (Grupo 2 ou 5). Comprove com: \n- Relatório técnico \n- Fotos do projeto \n- Declaração do professor orientador"
  ],
},

// 57. ATIVIDADES DE COMPUTAÇÃO
atividades_computacao_acc: {
  patterns: [
    "Maratona de programação vale ACC?",
    "Como registrar desenvolvimento de app?",
    "Contribuir em open source conta?"
  ],
  responses: [
    "Atividades de TI valem: \n- Competições: 5h ACC \n- Projetos: 10h a 30h ACC \nComprove com: \n- Print de repositório GitHub \n- Certificado de participação \n- Demonstração do software"
  ],
},

// 58. ATIVIDADES DE AGRONOMIA
atividades_agronomia_acc: {
  patterns: [
    "Dia de campo vale ACC?",
    "Como registrar análise de solo?",
    "Projeto com produtores rurais conta?"
  ],
  responses: [
    "Atividades agropecuárias valem **5h de ACC por ação** (Grupo 5). Comprove com: \n- Relatório técnico \n- Termo de cooperação \n- Registros fotográficos"
  ],
},

// 59. ATIVIDADES DE PSICOLOGIA
atividades_psicologia_acc: {
  patterns: [
    "Grupo de apoio psicológico vale ACC?",
    "Como registrar plantão de escuta?",
    "Oficina sobre saúde mental conta?"
  ],
  responses: [
    "Atividades psicológicas valem **5h de ACC por projeto** (Grupo 3). Documentos: \n- Termo de confidencialidade \n- Relatório sem dados sensíveis \n- Declaração da instituição parceira"
  ],
},

// 60. ATIVIDADES DE ARQUITETURA
atividades_arquitetura_acc: {
  patterns: [
    "Projeto de reforma comunitária vale ACC?",
    "Como registrar maquete arquitetônica?",
    "Visita a canteiro de obras conta?"
  ],
  responses: [
    "Atividades de arquitetura valem: \n- Projetos: 30h ACC \n- Visitas: 5h ACC \nComprove com: \n- Plantas assinadas \n- ART (se aplicável) \n- Relatório de visita"
  ],
},

// 61. ATIVIDADES DE MEDICINA
atividades_medicina_acc: {
  patterns: [
    "Campanha de vacinação vale ACC?",
    "Como registrar liga acadêmica médica?",
    "Participar de simpósio médico conta?"
  ],
  responses: [
    "Atividades médicas valem **5h a 10h de ACC** (Grupo 2 ou 3). Documentos: \n- Declaração do coordenador \n- Certificado de participação \n- Relatório (sem dados de pacientes)"
  ],
},

// 62. ATIVIDADES DE EDUCAÇÃO FÍSICA
atividades_edfisica_acc: {
  patterns: [
    "Organizar torneio esportivo vale ACC?",
    "Como registrar aula para terceira idade?",
    "Projeto de inclusão esportiva conta?"
  ],
  responses: [
    "Atividades esportivas valem **5h de ACC por ação** (Grupo 7). Comprove com: \n- Planos de aula \n- Listas de presença \n- Avaliação física (se aplicável)"
  ],
},

// 63. ATIVIDADES DE NUTRIÇÃO
atividades_nutricao_acc: {
  patterns: [
    "Feira de alimentação saudável vale ACC?",
    "Como registrar avaliação nutricional?",
    "Oficina de culinária funcional conta?"
  ],
  responses: [
    "Atividades de nutrição valem **5h de ACC por projeto** (Grupo 3). Documentos: \n- Ficha nutricional (sem dados pessoais) \n- Receitas desenvolvidas \n- Relatório de impacto"
  ],
},

// 64. ATIVIDADES DE VETERINÁRIA
atividades_veterinaria_acc: {
  patterns: [
    "Campanha de castração vale ACC?",
    "Como registrar atendimento clínico?",
    "Participar de feira de adoção conta?"
  ],
  responses: [
    "Atividades veterinárias valem **5h de ACC por ação** (Grupo 3). Comprove com: \n- Termo de estágio (se aplicável) \n- Relatório de procedimentos \n- Declaração do CRMV"
  ],
},

// 65. ATIVIDADES DE JORNALISMO
atividades_jornalismo_acc: {
  patterns: [
    "Produzir jornal comunitário vale ACC?",
    "Como registrar reportagem universitária?",
    "Blog acadêmico conta como ACC?"
  ],
  responses: [
    "Produções jornalísticas valem: \n- Matérias: 10h ACC \n- Projetos editoriais: 30h ACC \nComprove com: \n- Links/publicações \n- Declaração do orientador \n- Portfólio digital"
  ],
},

// 66. ATIVIDADES DE MODA
atividades_moda_acc: {
  patterns: [
    "Desfile beneficente vale ACC?",
    "Como registrar coleção acadêmica?",
    "Oficina de upcycling conta?"
  ],
  responses: [
    "Atividades de moda valem **5h a 30h de ACC** (Grupo 7). Documentos: \n- Catálogo da coleção \n- Registros fotográficos \n- Declaração de participação"
  ],
},

// 67. ATIVIDADES DE GASTRONOMIA
atividades_gastronomia_acc: {
  patterns: [
    "Evento gastronômico solidário vale ACC?",
    "Como registrar desenvolvimento de receita?",
    "Degustação comentada conta?"
  ],
  responses: [
    "Atividades gastronômicas valem **5h de ACC por ação** (Grupo 7). Comprove com: \n- Ficha técnica \n- Fotos dos pratos \n- Relatório de avaliação sensorial"
  ],
},

// 68. ATIVIDADES DE FARMÁCIA
atividades_farmacia_acc: {
  patterns: [
    "Campanha de descarte de medicamentos vale ACC?",
    "Como registrar análise de fitoterápicos?",
    "Feira sobre automedicação conta?"
  ],
  responses: [
    "Atividades farmacêuticas valem **5h de ACC por projeto** (Grupo 3). Documentos: \n- Termo de coleta (se aplicável) \n- Relatório técnico \n- Material educativo produzido"
  ],
},

// 69. ATIVIDADES DE TURISMO
atividades_turismo_acc: {
  patterns: [
    "Roteiro turístico cultural vale ACC?",
    "Como registrar guia de patrimônio?",
    "Projeto de turismo comunitário conta?"
  ],
  responses: [
    "Atividades turísticas valem **5h a 20h de ACC** (Grupo 5 ou 7). Comprove com: \n- Roteiro detalhado \n- Depoimentos de participantes \n- Registros fotográficos"
  ],
},

// 70. ATIVIDADES INTERNACIONAIS VIRTUAIS
internacionais_virtuais_acc: {
  patterns: [
    "Evento online internacional vale ACC?",
    "Como registrar palestra com professor estrangeiro?",
    "Congresso virtual no exterior conta?"
  ],
  responses: [
    "Atividades internacionais remotas valem: \n- 1h = 1h ACC (como ouvinte) \n- 5h ACC (como apresentador) \nDocumentos: \n- Certificado digital \n- Programa em inglês/português \n- Comprovante de inscrição"
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


