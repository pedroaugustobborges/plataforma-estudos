import type { Materia } from '../../types';

export const linguaPortuguesa: Materia = {
  id: 'lingua-portuguesa',
  nome: 'Língua Portuguesa',
  sigla: 'LP',
  descricao: 'Compreensão, interpretação e domínio da norma culta da língua portuguesa',
  cor: '#e91e63',
  icone: 'MenuBook',
  topicos: [
    {
      id: 'lp-topico-1',
      numero: 1,
      titulo: 'Compreensão e interpretação de textos de gêneros variados',
      conteudo: {
        resumo: `
## Resumo Rápido

A **compreensão e interpretação de textos** é a habilidade fundamental cobrada em qualquer concurso público. A banca IADES costuma trabalhar com textos de diferentes gêneros (artigos, editoriais, crônicas, textos técnicos de saúde/vigilância sanitária) e cobra:

1. **Compreensão**: Entender o que está EXPLÍCITO no texto (informações diretas)
2. **Interpretação**: Inferir o que está IMPLÍCITO (ideias subjacentes, intenções do autor)

### Tipos de questões mais comuns (IADES):
- Identificação da ideia central/tese do autor
- Inferências a partir do texto
- Significado de palavras/expressões no contexto
- Relações de causa e consequência
- Identificação do gênero textual e sua função social
        `,

        explicacao: `
## Explicação Didática

### O que é Compreensão vs. Interpretação?

| Compreensão | Interpretação |
|-------------|---------------|
| Informação explícita | Informação implícita |
| "O texto DIZ que..." | "O texto SUGERE que..." |
| Localização de dados | Inferência de ideias |
| Resposta está no texto | Resposta exige raciocínio |

### Gêneros Textuais Mais Cobrados

#### 1. **Textos Informativos/Expositivos**
- Objetivo: informar, explicar, esclarecer
- Linguagem: objetiva, denotativa
- Exemplos: notícias, artigos científicos, relatórios
- *Muito usado em provas de Vigilância Sanitária*

#### 2. **Textos Argumentativos**
- Objetivo: convencer, persuadir
- Estrutura: tese + argumentos + conclusão
- Exemplos: editoriais, artigos de opinião, dissertações

#### 3. **Textos Normativos/Legais**
- Objetivo: regulamentar, determinar
- Linguagem: técnica, formal
- Exemplos: leis, portarias, resoluções da ANVISA
- *Essencial para Fiscal de Saúde Pública*

#### 4. **Textos Narrativos**
- Objetivo: contar uma história
- Elementos: narrador, personagens, tempo, espaço, enredo
- Exemplos: crônicas, contos

### Técnicas de Leitura Eficiente

1. **Leitura Prévia (Skimming)**
   - Leia título, subtítulos, primeiro e último parágrafos
   - Identifique o tema geral

2. **Leitura Detalhada**
   - Leia o texto completo
   - Grife palavras-chave e conectivos importantes

3. **Análise das Questões**
   - Leia a questão ANTES de reler o texto
   - Identifique o que está sendo pedido

### Palavras-Chave em Questões IADES

| Termo na questão | O que significa |
|------------------|-----------------|
| "Depreende-se" | Interprete, infira |
| "Infere-se" | Conclua a partir do texto |
| "Segundo o texto" | Informação explícita |
| "O autor defende" | Tese/opinião do autor |
| "É correto afirmar" | Pode ser explícito ou implícito |

### Exemplo Prático (Contexto Vigilância Sanitária)

> *"A fiscalização sanitária constitui instrumento fundamental para garantir a qualidade dos produtos e serviços oferecidos à população. Sem uma atuação efetiva dos órgãos de vigilância, os riscos à saúde pública aumentam significativamente."*

**Compreensão**: O texto afirma que a fiscalização sanitária é importante para a qualidade de produtos e serviços.

**Interpretação**: O texto sugere que a negligência na fiscalização pode resultar em problemas de saúde pública.

### Coesão e Coerência

**Coerência**: Lógica interna do texto (sentido global)
**Coesão**: Ligação entre partes do texto (conectivos, pronomes, sinônimos)

Principais elementos coesivos:
- **Pronomes**: ele, ela, isso, aquilo (retomada)
- **Conectivos**: portanto, contudo, além disso (relações lógicas)
- **Sinônimos/Hipônimos**: substituição lexical
        `,

        pontosChave: [
          'Compreensão = EXPLÍCITO (o texto diz); Interpretação = IMPLÍCITO (o texto sugere)',
          'Sempre leia as alternativas com atenção: palavras como "somente", "sempre", "nunca" costumam indicar alternativas erradas',
          'A resposta correta deve estar fundamentada no texto, não em conhecimentos externos',
          'Identifique a tese do autor (geralmente no 1º ou último parágrafo)',
          'Conectivos são essenciais para entender relações: "mas" (oposição), "portanto" (conclusão), "além disso" (adição)',
          'Em textos de Vigilância Sanitária, atente para termos técnicos e seus significados no contexto',
          'Questões sobre "título adequado" pedem que você identifique o tema central',
          'Inferência válida deve ter base no texto, não ser mera opinião',
        ],

        armadilhas: [
          {
            titulo: 'Extrapolação',
            descricao: 'A alternativa vai além do que o texto permite inferir, adicionando informações não sustentadas.',
            dica: 'Se a alternativa traz dados/conclusões que o texto não menciona nem permite deduzir, está errada.',
          },
          {
            titulo: 'Generalização indevida',
            descricao: 'O texto fala de um caso específico, mas a alternativa generaliza ("todos", "sempre", "nunca").',
            dica: 'Desconfie de termos absolutos. O texto diz "alguns médicos" mas a alternativa diz "todos os médicos".',
          },
          {
            titulo: 'Inversão de causa e consequência',
            descricao: 'A alternativa inverte a relação causal apresentada no texto.',
            dica: 'Verifique: o texto diz que A causa B, mas a alternativa diz que B causa A.',
          },
          {
            titulo: 'Informação verdadeira, mas não presente no texto',
            descricao: 'A alternativa traz uma informação correta no mundo real, mas que não consta no texto.',
            dica: 'A questão pede o que está NO TEXTO, não seu conhecimento prévio sobre o assunto.',
          },
          {
            titulo: 'Troca de palavras semelhantes',
            descricao: 'A banca troca palavras por outras parecidas que mudam o sentido (ex: "ratificar" por "retificar").',
            dica: 'Leia com atenção cada palavra da alternativa e compare com o texto original.',
          },
        ],

        mnemonicos: [
          {
            termo: 'CIEL',
            significado: 'Compreensão, Interpretação, Explícito, Latente',
            frase: 'Compreendo o que está Escrito, Interpreto o que está Latente',
          },
          {
            termo: 'TTEC',
            significado: 'Tipologia Textual: Exposição e Convencimento',
            frase: 'Texto Expositivo informa, Texto argumentativo Convence',
          },
          {
            termo: 'PISTA',
            significado: 'Palavras Importantes São Termos de Atenção',
            frase: 'Conectivos, pronomes e palavras-chave são PISTAS para a interpretação',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-1-1',
            frente: 'Qual a diferença entre COMPREENSÃO e INTERPRETAÇÃO de texto?',
            verso: 'COMPREENSÃO: captar informações EXPLÍCITAS (o que o texto DIZ diretamente)\n\nINTERPRETAÇÃO: inferir informações IMPLÍCITAS (o que o texto SUGERE ou permite concluir)',
            tags: ['conceito', 'fundamental'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-2',
            frente: 'O que significa "depreende-se do texto" em uma questão?',
            verso: 'Significa INTERPRETAR/INFERIR. A questão pede uma conclusão que pode ser tirada do texto, mesmo que não esteja escrita explicitamente.',
            tags: ['vocabulário', 'questões'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-3',
            frente: 'Qual a função de um texto ARGUMENTATIVO?',
            verso: 'CONVENCER/PERSUADIR o leitor sobre determinado ponto de vista.\n\nEstrutura: TESE (opinião) + ARGUMENTOS (justificativas) + CONCLUSÃO',
            tags: ['gênero textual', 'argumentativo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-4',
            frente: 'O que é EXTRAPOLAÇÃO em interpretação de texto?',
            verso: 'É quando a alternativa vai ALÉM do que o texto permite concluir, adicionando informações que não estão presentes nem podem ser inferidas.\n\nÉ uma ARMADILHA comum em provas!',
            tags: ['armadilha', 'erro comum'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-5',
            frente: 'Qual a diferença entre COESÃO e COERÊNCIA?',
            verso: 'COESÃO: ligação FORMAL entre partes do texto (conectivos, pronomes, sinônimos)\n\nCOERÊNCIA: lógica INTERNA do texto (sentido global, não-contradição)',
            tags: ['coesão', 'coerência', 'fundamental'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-6',
            frente: 'Por que alternativas com "sempre", "nunca", "todos" costumam estar erradas?',
            verso: 'Porque representam GENERALIZAÇÕES ABSOLUTAS.\n\nTextos raramente fazem afirmações universais. Essas palavras geralmente indicam extrapolação ou generalização indevida.',
            tags: ['armadilha', 'dica'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-7',
            frente: 'Onde geralmente está a TESE (ideia principal) de um texto argumentativo?',
            verso: 'Geralmente no PRIMEIRO PARÁGRAFO (introdução) ou no ÚLTIMO PARÁGRAFO (conclusão).\n\nDica: Leia esses parágrafos com atenção extra!',
            tags: ['estratégia', 'argumentativo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-1-8',
            frente: 'O que é um texto EXPOSITIVO e onde ele é comum em Vigilância Sanitária?',
            verso: 'Texto que INFORMA/EXPLICA de forma objetiva.\n\nExemplos em VS: relatórios de inspeção, normas técnicas, manuais de procedimentos, publicações da ANVISA.',
            tags: ['gênero textual', 'vigilância sanitária'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'lp-q-1-1',
            enunciado: `Considere o texto a seguir para responder à questão.

"A vigilância sanitária brasileira tem avançado significativamente nas últimas décadas, consolidando-se como um dos pilares do Sistema Único de Saúde. Entretanto, desafios persistem, especialmente no que tange à fiscalização de produtos importados e à harmonização de normas com padrões internacionais. A capacitação contínua dos profissionais da área é fundamental para enfrentar essas questões."

Segundo o texto, é CORRETO afirmar que:`,
            alternativas: [
              { letra: 'A', texto: 'A vigilância sanitária brasileira está em declínio.' },
              { letra: 'B', texto: 'Não existem mais desafios para a vigilância sanitária no Brasil.' },
              { letra: 'C', texto: 'A capacitação dos profissionais é considerada importante para superar os desafios da área.' },
              { letra: 'D', texto: 'O texto critica exclusivamente a fiscalização de produtos nacionais.' },
              { letra: 'E', texto: 'O Sistema Único de Saúde não tem relação com a vigilância sanitária.' },
            ],
            gabarito: 'C',
            justificativa: 'O texto afirma explicitamente que "a capacitação contínua dos profissionais da área é fundamental para enfrentar essas questões", o que torna a alternativa C correta. As demais alternativas contradizem informações do texto.',
            dificuldade: 'Fácil',
            competencia: 'Compreensão (informação explícita)',
            banca: 'IADES',
            tags: ['compreensão', 'vigilância sanitária'],
          },
          {
            id: 'lp-q-1-2',
            enunciado: `Leia o texto abaixo.

"Embora os avanços tecnológicos tenham facilitado o controle de qualidade de alimentos, muitos estabelecimentos ainda resistem à implementação de boas práticas de fabricação. Essa resistência, não raro, decorre do desconhecimento sobre os benefícios que tais práticas trazem tanto para a saúde do consumidor quanto para a competitividade do próprio negócio."

Depreende-se do texto que:`,
            alternativas: [
              { letra: 'A', texto: 'A tecnologia é inútil para o controle de qualidade.' },
              { letra: 'B', texto: 'Todos os estabelecimentos já implementaram boas práticas de fabricação.' },
              { letra: 'C', texto: 'A resistência dos estabelecimentos pode estar relacionada à falta de informação.' },
              { letra: 'D', texto: 'Boas práticas de fabricação prejudicam a competitividade das empresas.' },
              { letra: 'E', texto: 'O texto não menciona benefícios das boas práticas de fabricação.' },
            ],
            gabarito: 'C',
            justificativa: 'O termo "depreende-se" pede interpretação. O texto afirma que a resistência "decorre do desconhecimento", o que permite inferir que a falta de informação está relacionada à resistência. Alternativa C correta.',
            dificuldade: 'Média',
            competencia: 'Interpretação (inferência)',
            banca: 'IADES',
            tags: ['interpretação', 'inferência'],
          },
          {
            id: 'lp-q-1-3',
            enunciado: `Considere o fragmento a seguir.

"O fiscal de saúde pública deve atuar com rigor técnico, mas também com sensibilidade para compreender as dificuldades enfrentadas pelos estabelecimentos. A aplicação cega da norma, sem considerar o contexto, pode gerar mais resistência do que adesão às boas práticas."

Com base no texto, o conectivo "mas" estabelece uma relação de:`,
            alternativas: [
              { letra: 'A', texto: 'Causa e consequência.' },
              { letra: 'B', texto: 'Adição de ideias semelhantes.' },
              { letra: 'C', texto: 'Oposição ou contraste.' },
              { letra: 'D', texto: 'Explicação ou esclarecimento.' },
              { letra: 'E', texto: 'Conclusão lógica.' },
            ],
            gabarito: 'C',
            justificativa: 'O conectivo "mas" é uma conjunção adversativa, que expressa oposição ou contraste entre duas ideias. No texto, contrasta "rigor técnico" com "sensibilidade".',
            dificuldade: 'Fácil',
            competencia: 'Coesão textual',
            banca: 'IADES',
            tags: ['conectivos', 'coesão'],
          },
          {
            id: 'lp-q-1-4',
            enunciado: `Leia o texto a seguir.

"A Agência Nacional de Vigilância Sanitária (ANVISA) publicou novas diretrizes para o transporte de medicamentos termolábeis. As normas visam garantir a integridade dos produtos durante toda a cadeia de distribuição, desde a saída do laboratório até a chegada ao consumidor final."

O gênero textual predominante no fragmento é:`,
            alternativas: [
              { letra: 'A', texto: 'Narrativo, pois conta uma história.' },
              { letra: 'B', texto: 'Argumentativo, pois defende uma tese.' },
              { letra: 'C', texto: 'Informativo/expositivo, pois apresenta informações objetivas.' },
              { letra: 'D', texto: 'Injuntivo, pois dá ordens diretas ao leitor.' },
              { letra: 'E', texto: 'Descritivo, pois descreve um objeto detalhadamente.' },
            ],
            gabarito: 'C',
            justificativa: 'O texto apresenta informações de forma objetiva sobre uma publicação da ANVISA, sem defender opinião (argumentativo) ou contar história (narrativo). É um texto informativo/expositivo.',
            dificuldade: 'Fácil',
            competencia: 'Gênero textual',
            banca: 'IADES',
            tags: ['gênero textual', 'ANVISA'],
          },
          {
            id: 'lp-q-1-5',
            enunciado: `Analise o trecho abaixo.

"A fiscalização sanitária não deve ser vista apenas como uma atividade punitiva. Ela constitui, antes de tudo, uma ação educativa que orienta os estabelecimentos sobre as normas vigentes. Quando o fiscal atua como parceiro na busca pela conformidade, os resultados tendem a ser mais duradouros."

O título mais adequado para esse texto seria:`,
            alternativas: [
              { letra: 'A', texto: 'As punições na vigilância sanitária.' },
              { letra: 'B', texto: 'O caráter educativo da fiscalização sanitária.' },
              { letra: 'C', texto: 'A história da ANVISA no Brasil.' },
              { letra: 'D', texto: 'Problemas dos estabelecimentos comerciais.' },
              { letra: 'E', texto: 'Normas internacionais de vigilância sanitária.' },
            ],
            gabarito: 'B',
            justificativa: 'O texto destaca que a fiscalização "constitui, antes de tudo, uma ação educativa", sendo essa a ideia central. O título deve refletir o tema principal.',
            dificuldade: 'Média',
            competencia: 'Identificação da ideia central',
            banca: 'IADES',
            tags: ['ideia central', 'título'],
          },
          {
            id: 'lp-q-1-6',
            enunciado: `Considere o texto.

"Alguns estudos indicam que a rotulagem nutricional adequada pode influenciar positivamente as escolhas alimentares da população. Contudo, pesquisadores alertam que apenas a informação não é suficiente; é necessário também promover a educação alimentar nas escolas."

A palavra "Contudo" pode ser substituída, sem alteração de sentido, por:`,
            alternativas: [
              { letra: 'A', texto: 'Portanto.' },
              { letra: 'B', texto: 'Além disso.' },
              { letra: 'C', texto: 'Todavia.' },
              { letra: 'D', texto: 'Por conseguinte.' },
              { letra: 'E', texto: 'Porque.' },
            ],
            gabarito: 'C',
            justificativa: '"Contudo" é uma conjunção adversativa, assim como "todavia", "entretanto", "porém", "no entanto". Ambas expressam oposição/contraste.',
            dificuldade: 'Fácil',
            competencia: 'Coesão - conectivos',
            banca: 'IADES',
            tags: ['conectivos', 'substituição'],
          },
          {
            id: 'lp-q-1-7',
            enunciado: `Leia atentamente.

"A qualidade da água distribuída à população depende de múltiplos fatores: desde o tratamento realizado nas estações até a conservação adequada dos reservatórios domiciliares. A negligência em qualquer etapa dessa cadeia pode comprometer a potabilidade do recurso."

Infere-se do texto que:`,
            alternativas: [
              { letra: 'A', texto: 'Apenas o tratamento nas estações garante a qualidade da água.' },
              { letra: 'B', texto: 'Os reservatórios domiciliares não influenciam na qualidade da água.' },
              { letra: 'C', texto: 'A responsabilidade pela qualidade da água é compartilhada entre poder público e cidadão.' },
              { letra: 'D', texto: 'A potabilidade da água independe de cuidados na distribuição.' },
              { letra: 'E', texto: 'O texto trata exclusivamente da poluição de rios.' },
            ],
            gabarito: 'C',
            justificativa: 'O texto menciona "desde o tratamento realizado nas estações" (poder público) "até a conservação adequada dos reservatórios domiciliares" (cidadão), permitindo inferir responsabilidade compartilhada.',
            dificuldade: 'Média',
            competencia: 'Inferência',
            banca: 'IADES',
            tags: ['inferência', 'vigilância sanitária'],
          },
          {
            id: 'lp-q-1-8',
            enunciado: `Analise o fragmento.

"É imperioso que os órgãos de vigilância sanitária mantenham cadastro atualizado de todos os estabelecimentos sob sua jurisdição. Tal medida possibilita o planejamento adequado das ações de fiscalização e o monitoramento sistemático dos riscos sanitários."

No contexto, a palavra "imperioso" pode ser substituída por:`,
            alternativas: [
              { letra: 'A', texto: 'Opcional.' },
              { letra: 'B', texto: 'Desnecessário.' },
              { letra: 'C', texto: 'Indispensável.' },
              { letra: 'D', texto: 'Improvável.' },
              { letra: 'E', texto: 'Superficial.' },
            ],
            gabarito: 'C',
            justificativa: '"Imperioso" significa imprescindível, obrigatório, indispensável. O contexto reforça essa ideia ao mostrar que a medida "possibilita" ações importantes.',
            dificuldade: 'Média',
            competencia: 'Vocabulário contextual',
            banca: 'IADES',
            tags: ['vocabulário', 'significado'],
          },
          {
            id: 'lp-q-1-9',
            enunciado: `Considere o texto abaixo.

"O conceito de risco sanitário engloba a probabilidade de ocorrência de eventos adversos à saúde, sejam eles causados por alimentos, medicamentos, cosméticos ou serviços de saúde. A gestão desse risco exige abordagem multidisciplinar e integração entre diferentes esferas de governo."

Assinale a alternativa que apresenta informação EXPLÍCITA no texto.`,
            alternativas: [
              { letra: 'A', texto: 'O risco sanitário está relacionado apenas a medicamentos.' },
              { letra: 'B', texto: 'A gestão do risco sanitário pode envolver diferentes áreas do conhecimento.' },
              { letra: 'C', texto: 'Os cosméticos são mais perigosos que os alimentos.' },
              { letra: 'D', texto: 'Cada esfera de governo deve atuar isoladamente.' },
              { letra: 'E', texto: 'O conceito de risco sanitário foi criado recentemente.' },
            ],
            gabarito: 'B',
            justificativa: 'O texto afirma explicitamente que a gestão "exige abordagem multidisciplinar", o que significa envolver diferentes áreas do conhecimento. As demais alternativas contradizem ou extrapolam o texto.',
            dificuldade: 'Média',
            competencia: 'Compreensão - informação explícita',
            banca: 'IADES',
            tags: ['explícito', 'compreensão'],
          },
          {
            id: 'lp-q-1-10',
            enunciado: `Leia o trecho a seguir.

"Não obstante os avanços regulatórios, a fiscalização de produtos comercializados pela internet ainda representa um desafio para as autoridades sanitárias. A velocidade das transações online e a pulverização dos vendedores dificultam o controle efetivo da conformidade sanitária."

A expressão "Não obstante" pode ser substituída, mantendo o sentido, por:`,
            alternativas: [
              { letra: 'A', texto: 'Por causa de.' },
              { letra: 'B', texto: 'Em virtude de.' },
              { letra: 'C', texto: 'Apesar de.' },
              { letra: 'D', texto: 'Em razão de.' },
              { letra: 'E', texto: 'Em decorrência de.' },
            ],
            gabarito: 'C',
            justificativa: '"Não obstante" é uma locução concessiva, equivalente a "apesar de", "embora", "ainda que". Indica que, mesmo com os avanços, ainda há desafios. As demais opções expressam causa.',
            dificuldade: 'Difícil',
            competencia: 'Conectivos - concessão',
            banca: 'IADES',
            tags: ['conectivos', 'concessão'],
          },
        ],
      },
    },
  ],
};
