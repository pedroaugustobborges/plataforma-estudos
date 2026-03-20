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
    {
      id: 'lp-topico-2',
      numero: 2,
      titulo: 'Domínio da ortografia oficial',
      conteudo: {
        resumo: `
## Resumo Rápido

O **domínio da ortografia oficial** é fundamental para concursos. A banca IADES cobra conhecimento do **Novo Acordo Ortográfico** (2009) e das regras de acentuação e uso de letras.

### Principais Mudanças do Acordo Ortográfico

| Mudança | Antes | Depois |
|---------|-------|--------|
| Trema | freqüente, lingüiça | frequente, linguiça |
| Hífen (prefixo + vogal diferente) | auto-escola, auto-estrada | autoescola, autoestrada |
| Hífen (prefixo + r/s) | anti-religioso, auto-retrato | antirreligioso, autorretrato |
| Acentos diferenciais | pára, pêlo, pólo | para, pelo, polo |
| Ditongos abertos (paroxítonas) | idéia, assembléia | ideia, assembleia |

**⚠️ MANTÉM hífen (vogais iguais):** anti-inflamatório, micro-ondas, auto-observação, contra-ataque

### Regras de Acentuação (Válidas!)

- **Oxítonas**: terminadas em A(S), E(S), O(S), EM, ENS
- **Paroxítonas**: NÃO terminadas em A(S), E(S), O(S), EM, ENS
- **Proparoxítonas**: TODAS acentuadas
- **Monossílabos tônicos**: terminados em A(S), E(S), O(S)
        `,

        explicacao: `
## Explicação Didática

### 1. O Novo Acordo Ortográfico

O Acordo Ortográfico de 1990 entrou em vigor no Brasil em 2009 e tornou-se obrigatório a partir de 2016. Principais mudanças:

#### 1.1 Fim do Trema

O **trema** foi abolido em palavras portuguesas e aportuguesadas.

| Antes | Agora |
|-------|-------|
| freqüente | frequente |
| lingüiça | linguiça |
| seqüência | sequência |
| tranqüilo | tranquilo |

⚠️ Permanece em palavras estrangeiras: Müller, mülleriano.

#### 1.2 Mudanças no Hífen

**Usa-se hífen quando:**
- Prefixo termina com a MESMA vogal que inicia a palavra: anti-inflamatório, micro-ondas
- Palavras iniciadas por H: anti-higiênico, super-homem
- Prefixos EX, SEM, ALÉM, AQUÉM, RECÉM, PÓS, PRÉ, PRÓ (quando tônicos): ex-marido, pré-história

**NÃO se usa hífen quando:**
- Prefixo termina em vogal DIFERENTE da que inicia: autoescola, infraestrutura
- Prefixo termina em vogal e palavra inicia por R ou S (dobra-se a consoante): antirrugas, autorretrato, microssistema

#### 1.3 Acentos Diferenciais Eliminados

| Antes | Agora | Significado |
|-------|-------|-------------|
| pára (verbo) | para | ambos iguais |
| péla (verbo) | pela | ambos iguais |
| pêlo (substantivo) | pelo | ambos iguais |
| pólo (substantivo) | polo | ambos iguais |
| pêra (fruta) | pera | ambos iguais |

⚠️ **Permaneceram:**
- pôr (verbo) ≠ por (preposição)
- pôde (pretérito) ≠ pode (presente)
- têm/vêm (plural) ≠ tem/vem (singular)

#### 1.4 Ditongos Abertos em Paroxítonas

**Perderam o acento** os ditongos EI e OI em palavras paroxítonas:

| Antes | Agora |
|-------|-------|
| idéia | ideia |
| assembléia | assembleia |
| jibóia | jiboia |
| heróico | heroico |

⚠️ **Mantêm o acento** em oxítonas e monossílabos: herói, dói, anéis, papéis.

### 2. Regras de Acentuação Gráfica

#### 2.1 Acentuação das Oxítonas

Acentuam-se as oxítonas terminadas em:
- **A(S)**: sofá, maracujá, sofás
- **E(S)**: café, bebê, vocês
- **O(S)**: avô, cipó, paletós
- **EM/ENS**: também, armazém, parabéns

#### 2.2 Acentuação das Paroxítonas

Acentuam-se as paroxítonas **NÃO** terminadas em:
- A(S), E(S), O(S), EM, ENS, AM

**Exemplos de paroxítonas acentuadas:**
- Terminadas em **I(S)**: júri, tênis, lápis
- Terminadas em **US**: vírus, bônus
- Terminadas em **L**: fácil, útil, amável
- Terminadas em **N**: hífen, pólen
- Terminadas em **R**: caráter, açúcar
- Terminadas em **X**: tórax, látex
- Terminadas em **ÃO(S)**: órgão, órfãos
- Terminadas em **Ã(S)**: ímã, órfã
- Terminadas em **UM/UNS**: álbum, médium
- Terminadas em **PS**: bíceps, fórceps
- **Ditongos**: história, série, área

#### 2.3 Acentuação das Proparoxítonas

**TODAS** as proparoxítonas são acentuadas:
- médico, lâmpada, música, público, cômputo

#### 2.4 Monossílabos Tônicos

Acentuam-se os monossílabos tônicos terminados em:
- **A(S)**: pá, gás, más
- **E(S)**: pé, mês, três
- **O(S)**: pó, só, nós

#### 2.5 Regras dos Hiatos

- **I e U tônicos** formando hiato: saída, saúde, país, baú
- ⚠️ NÃO se acentua quando seguidos de NH: rainha, moinho
- ⚠️ NÃO se acentua quando seguidos de outra vogal: feiura, Raul

### 3. Uso de Letras

#### 3.1 S, SS, Ç, C, SC, XC

| Grafia | Quando usar | Exemplos |
|--------|-------------|----------|
| **S** | Entre vogais com som de Z | casa, mesa |
| **SS** | Entre vogais com som de S | massa, passado |
| **Ç** | Antes de A, O, U | cabeça, almoço, açúcar |
| **C** | Antes de E, I | cedo, cima |
| **SC** | Palavras eruditas | nascer, crescer |

#### 3.2 X e CH

**Usa-se X:**
- Após ditongo: caixa, peixe, ameixa
- Após EN: enxame, enxoval (exceto: encher, enchente)
- Palavras de origem indígena/africana: xavante, xadrez

**Usa-se CH:**
- Palavras de origem estrangeira adaptadas: chave, chocolate
- Após ditongo AN: racha, mancha

#### 3.3 G e J

| Grafia | Regra | Exemplos |
|--------|-------|----------|
| **G** | Antes de E, I (som de J) | gente, girafa |
| **J** | Antes de A, O, U | janela, jogo, justo |
| **J** | Palavras de origem indígena/africana | pajé, jiboia |
| **J** | Verbos terminados em -JAR | viajar → viajei |

### 4. Palavras Frequentes em Provas

| Correta | Incorreta | Observação |
|---------|-----------|------------|
| **exceção** | excessão | Atenção ao C |
| **extensão** | extenssão | Um S apenas |
| **ecessário** | nessessário | C no início |
| **assessor** | acessor | SS duplo |
| **licença** | licensa | Ç, não S |
| **pretensão** | pretenção | S, não Ç |
| **privilégio** | previlégio | I, não E |
| **beneficente** | beneficiente | Sem I |
        `,

        pontosChave: [
          'Trema foi ABOLIDO em palavras portuguesas (frequente, linguiça)',
          'Hífen: prefixo + MESMA vogal = hífen (anti-inflamatório, micro-ondas)',
          'Hífen: prefixo + vogal DIFERENTE = junto (autoescola, infraestrutura)',
          'Hífen: prefixo + R/S = dobra a consoante (antirrugas, microssistema)',
          'Acentos diferenciais eliminados: para, pelo, polo, pera (permanece: pôr, pôde)',
          'Oxítonas: acentua se termina em A(S), E(S), O(S), EM, ENS',
          'Paroxítonas: acentua se NÃO termina em A(S), E(S), O(S), EM, ENS',
          'Proparoxítonas: TODAS acentuadas, sem exceção',
          'Ditongos EI, OI em paroxítonas: SEM acento (ideia, heroico)',
          'Ditongos EI, OI em oxítonas: COM acento (herói, anéis)',
        ],

        armadilhas: [
          {
            titulo: 'Confundir acento diferencial eliminado com mantido',
            descricao: 'Alguns acentos diferenciais foram eliminados (para, pelo), mas outros permanecem (pôr/por, pôde/pode).',
            dica: 'Lembre-se: pôr (verbo) e pôde (passado) MANTÊM o acento.',
          },
          {
            titulo: 'Errar o uso do hífen com prefixos',
            descricao: 'Muita confusão entre quando usar hífen e quando juntar ou duplicar consoantes.',
            dica: 'Vogais iguais = hífen. Vogais diferentes = junto. R/S após vogal = duplica.',
          },
          {
            titulo: 'Acentuar paroxítonas terminadas em A, E, O',
            descricao: 'Paroxítonas terminadas em A, E, O, EM não são acentuadas (casa, neve, lobo, jovem).',
            dica: 'Paroxítona em A, E, O, EM, ENS = regra geral do português, sem acento.',
          },
          {
            titulo: 'Confundir S com Ç',
            descricao: 'Trocar S por Ç ou vice-versa em palavras como exceção/extensão.',
            dica: 'Memorize: exceCção (C), extenSão (S). Não existe regra simples.',
          },
        ],

        mnemonicos: [
          {
            termo: 'AEROPORTO',
            significado: 'A, E, O (oxítonas) + R (paroxítonas) = acentua PORTO',
            frase: 'Oxítonas em A-E-O, paroxítonas em R: pense no AEROPORTO das regras',
          },
          {
            termo: 'PÔR-PÔDE',
            significado: 'Os dois acentos diferenciais que permaneceram',
            frase: 'PÔR (verbo) e PÔDE (passado) ainda usam acento!',
          },
          {
            termo: 'II-DD',
            significado: 'Igual-Igual = hífen, Diferente-Diferente = junto',
            frase: 'Vogais Iguais = Hífen (anti-inflamatório). Diferentes = Junto (autoescola)',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-2-1',
            frente: 'O trema ainda existe no português brasileiro?',
            verso: '**NÃO para palavras portuguesas.**\n\nO trema foi abolido pelo Novo Acordo Ortográfico.\n\nExemplos:\n- ~~freqüente~~ → frequente\n- ~~lingüiça~~ → linguiça\n\n⚠️ Permanece em nomes estrangeiros: Müller',
            tags: ['trema', 'acordo ortográfico'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-2',
            frente: 'Quando usar hífen com prefixos?',
            verso: '**USA hífen:**\n- Mesma vogal: anti-inflamatório, micro-ondas\n- Antes de H: anti-higiênico\n- Prefixos tônicos: ex-, pré-, pós-, pró-\n\n**NÃO usa hífen:**\n- Vogais diferentes: autoescola\n- R/S após vogal: antirrugas, microssistema (duplica)',
            tags: ['hífen', 'prefixos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-3',
            frente: 'Quais acentos diferenciais permaneceram?',
            verso: '**Permaneceram:**\n- pôr (verbo) ≠ por (preposição)\n- pôde (passado) ≠ pode (presente)\n- têm/vêm (plural) ≠ tem/vem (singular)\n\n**Foram abolidos:**\npara, pelo, polo, pera (sem acento)',
            tags: ['acento diferencial', 'acordo ortográfico'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-4',
            frente: 'Quando acentuar oxítonas?',
            verso: 'Acentuam-se oxítonas terminadas em:\n\n- **A(S)**: sofá, maracujás\n- **E(S)**: café, vocês\n- **O(S)**: avô, cipós\n- **EM/ENS**: também, parabéns\n\nExemplo: saúde é paroxítona (saÚde), não oxítona!',
            tags: ['acentuação', 'oxítonas'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-5',
            frente: 'Qual a regra das proparoxítonas?',
            verso: '**TODAS as proparoxítonas são acentuadas!**\n\nSem exceção.\n\nExemplos:\n- médico (MÉ-di-co)\n- lâmpada (LÂM-pa-da)\n- público (PÚ-bli-co)\n- vigilância (vi-gi-LÂN-cia) - NÃO é proparoxítona!',
            tags: ['acentuação', 'proparoxítonas'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-6',
            frente: 'Por que "ideia" não tem mais acento?',
            verso: 'O Novo Acordo aboliu o acento dos **ditongos abertos EI e OI em paroxítonas**.\n\nAntes → Agora:\n- idéia → ideia\n- assembléia → assembleia\n- heróico → heroico\n\n⚠️ Em OXÍTONAS permanece: herói, anéis, papéis',
            tags: ['ditongos', 'acordo ortográfico'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-7',
            frente: 'Como escrever corretamente: exceção ou excessão?',
            verso: '**EXCEÇÃO** (com C)\n\nAtenção a palavras parecidas:\n- exceCção (C)\n- extenSão (S)\n- asSessor (SS)\n- neceSSário (SS)\n- licenÇa (Ç)\n- pretenSão (S)\n\nNão há regra: memorize!',
            tags: ['ortografia', 'S/Ç'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-2-8',
            frente: 'Quando usar X e quando usar CH?',
            verso: '**USA-SE X:**\n- Após ditongo: caixa, peixe\n- Após EN: enxame, enxoval\n- Origem indígena: xavante\n\n**USA-SE CH:**\n- Origem estrangeira adaptada: chocolate, chave\n- Após AN: mancha, racha\n\n⚠️ Exceção: encher, enchente (CH após EN)',
            tags: ['ortografia', 'X/CH'],
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
            id: 'lp-q-2-1',
            enunciado: 'De acordo com o Novo Acordo Ortográfico, a palavra que teve sua grafia alterada é:',
            alternativas: [
              { letra: 'A', texto: 'Sequência, que agora se escreve "seqüência".' },
              { letra: 'B', texto: 'Ideia, que antes se escrevia "idéia".' },
              { letra: 'C', texto: 'Herói, que perdeu o acento.' },
              { letra: 'D', texto: 'Pôr, que agora se escreve "por".' },
              { letra: 'E', texto: 'Frequente, que agora usa trema.' },
            ],
            gabarito: 'B',
            justificativa: 'A palavra "ideia" antes era grafada com acento (idéia), pois ditongos abertos em paroxítonas eram acentuados. O Novo Acordo aboliu esse acento. As demais alternativas trazem informações incorretas.',
            dificuldade: 'Fácil',
            competencia: 'Acordo Ortográfico',
            banca: 'IADES',
            tags: ['acordo ortográfico', 'acentuação'],
          },
          {
            id: 'lp-q-2-2',
            enunciado: 'Assinale a alternativa em que o uso do hífen está CORRETO conforme o Novo Acordo Ortográfico:',
            alternativas: [
              { letra: 'A', texto: 'auto-escola' },
              { letra: 'B', texto: 'anti-religioso' },
              { letra: 'C', texto: 'micro-ondas' },
              { letra: 'D', texto: 'auto-retrato' },
              { letra: 'E', texto: 'infra-estrutura' },
            ],
            gabarito: 'C',
            justificativa: 'Micro-ondas mantém o hífen porque o prefixo termina com a mesma letra que inicia a palavra seguinte (O-O). As demais: autoescola (vogais diferentes), antirreligioso (R duplica), autorretrato (R duplica), infraestrutura (vogais diferentes).',
            dificuldade: 'Média',
            competencia: 'Uso do hífen',
            banca: 'IADES',
            tags: ['hífen', 'prefixos'],
          },
          {
            id: 'lp-q-2-3',
            enunciado: 'Quanto à acentuação gráfica, assinale a alternativa que apresenta TODAS as palavras corretamente acentuadas:',
            alternativas: [
              { letra: 'A', texto: 'Lápis, fácil, júri' },
              { letra: 'B', texto: 'Idéia, assembléia, jibóia' },
              { letra: 'C', texto: 'Pára, pélo, péra' },
              { letra: 'D', texto: 'Sequência, frequência, lingüiça' },
              { letra: 'E', texto: 'Vôo, enjôo, abençôo' },
            ],
            gabarito: 'A',
            justificativa: 'Lápis, fácil e júri são paroxítonas terminadas em IS, L e I, respectivamente, e devem ser acentuadas. As demais alternativas apresentam erros: B (ditongos em paroxítonas sem acento), C (acentos diferenciais abolidos), D (trema abolido), E (dupla vogal não tem mais acento).',
            dificuldade: 'Média',
            competencia: 'Acentuação gráfica',
            banca: 'IADES',
            tags: ['acentuação', 'paroxítonas'],
          },
          {
            id: 'lp-q-2-4',
            enunciado: 'Após o Novo Acordo Ortográfico, o trema foi abolido. A palavra que ainda MANTÉM o trema é:',
            alternativas: [
              { letra: 'A', texto: 'Frequente' },
              { letra: 'B', texto: 'Linguiça' },
              { letra: 'C', texto: 'Consequência' },
              { letra: 'D', texto: 'Mülleriano (derivada de Müller)' },
              { letra: 'E', texto: 'Tranquilo' },
            ],
            gabarito: 'D',
            justificativa: 'O trema permanece em palavras derivadas de nomes próprios estrangeiros que o utilizam, como "mülleriano" (de Müller). Nas palavras portuguesas ou aportuguesadas, o trema foi abolido.',
            dificuldade: 'Média',
            competencia: 'Trema',
            banca: 'IADES',
            tags: ['trema', 'acordo ortográfico'],
          },
          {
            id: 'lp-q-2-5',
            enunciado: 'As palavras "herói", "constrói" e "papéis" são acentuadas porque:',
            alternativas: [
              { letra: 'A', texto: 'São paroxítonas terminadas em ditongo aberto.' },
              { letra: 'B', texto: 'São oxítonas terminadas em ditongo aberto.' },
              { letra: 'C', texto: 'São proparoxítonas.' },
              { letra: 'D', texto: 'Possuem hiato na última sílaba.' },
              { letra: 'E', texto: 'Mantêm o acento por tradição, não por regra.' },
            ],
            gabarito: 'B',
            justificativa: 'Herói, constrói e papéis são oxítonas (a sílaba tônica é a última) terminadas em ditongo aberto (ói, éis). O Novo Acordo aboliu o acento apenas em PAROXÍTONAS com ditongos abertos, não em oxítonas.',
            dificuldade: 'Média',
            competencia: 'Ditongos abertos',
            banca: 'IADES',
            tags: ['ditongos', 'oxítonas'],
          },
          {
            id: 'lp-q-2-6',
            enunciado: 'Assinale a alternativa que apresenta a grafia CORRETA:',
            alternativas: [
              { letra: 'A', texto: 'Excessão, pretensão, extensão' },
              { letra: 'B', texto: 'Exceção, pretenção, extensão' },
              { letra: 'C', texto: 'Exceção, pretensão, extensão' },
              { letra: 'D', texto: 'Excessão, pretenção, extenção' },
              { letra: 'E', texto: 'Excesão, pretensão, estenção' },
            ],
            gabarito: 'C',
            justificativa: 'As grafias corretas são: exceção (com Ç), pretensão (com S) e extensão (com S). Essas palavras frequentemente aparecem em provas e devem ser memorizadas.',
            dificuldade: 'Fácil',
            competencia: 'Ortografia - S, SS, Ç',
            banca: 'IADES',
            tags: ['ortografia', 'S/Ç'],
          },
          {
            id: 'lp-q-2-7',
            enunciado: 'As palavras "pôde" e "pôr" mantêm o acento circunflexo porque:',
            alternativas: [
              { letra: 'A', texto: 'O Novo Acordo Ortográfico manteve esses acentos diferenciais.' },
              { letra: 'B', texto: 'São proparoxítonas e devem ser acentuadas.' },
              { letra: 'C', texto: 'São monossílabos tônicos terminados em E e R.' },
              { letra: 'D', texto: 'O acordo foi revogado e voltaram as regras antigas.' },
              { letra: 'E', texto: 'São oxítonas terminadas em vogal.' },
            ],
            gabarito: 'A',
            justificativa: 'Os acentos diferenciais de "pôde" (pretérito de poder) e "pôr" (verbo) foram mantidos pelo Novo Acordo para diferenciá-los de "pode" (presente) e "por" (preposição). Outros acentos diferenciais foram abolidos.',
            dificuldade: 'Fácil',
            competencia: 'Acento diferencial',
            banca: 'IADES',
            tags: ['acento diferencial', 'acordo ortográfico'],
          },
          {
            id: 'lp-q-2-8',
            enunciado: 'Considerando as regras de acentuação das proparoxítonas, assinale a alternativa CORRETA:',
            alternativas: [
              { letra: 'A', texto: 'Apenas algumas proparoxítonas recebem acento.' },
              { letra: 'B', texto: 'Todas as proparoxítonas são acentuadas, sem exceção.' },
              { letra: 'C', texto: 'Proparoxítonas terminadas em A não são acentuadas.' },
              { letra: 'D', texto: 'O Novo Acordo aboliu o acento das proparoxítonas.' },
              { letra: 'E', texto: 'Proparoxítonas com ditongo são exceção à regra.' },
            ],
            gabarito: 'B',
            justificativa: 'A regra é clara e sem exceções: TODAS as proparoxítonas são acentuadas. Exemplos: médico, lâmpada, público, trânsito, cômputo.',
            dificuldade: 'Fácil',
            competencia: 'Proparoxítonas',
            banca: 'IADES',
            tags: ['acentuação', 'proparoxítonas'],
          },
          {
            id: 'lp-q-2-9',
            enunciado: 'A palavra "saúde" recebe acento porque:',
            alternativas: [
              { letra: 'A', texto: 'É oxítona terminada em E.' },
              { letra: 'B', texto: 'É proparoxítona.' },
              { letra: 'C', texto: 'Possui I ou U tônico formando hiato com a vogal anterior.' },
              { letra: 'D', texto: 'É paroxítona terminada em ditongo.' },
              { letra: 'E', texto: 'É monossílabo tônico.' },
            ],
            gabarito: 'C',
            justificativa: 'A palavra "saúde" (sa-Ú-de) tem o U tônico formando hiato com a vogal anterior (A). Nesse caso, o I ou U tônicos recebem acento quando formam hiato e são a segunda vogal.',
            dificuldade: 'Média',
            competencia: 'Acentuação - hiatos',
            banca: 'IADES',
            tags: ['acentuação', 'hiato'],
          },
          {
            id: 'lp-q-2-10',
            enunciado: 'Em contexto de Vigilância Sanitária, um fiscal redigiu: "A licensa foi consedida após análise criteriosa." A frase apresenta erro ortográfico em:',
            alternativas: [
              { letra: 'A', texto: 'Licensa e consedida' },
              { letra: 'B', texto: 'Apenas em licensa' },
              { letra: 'C', texto: 'Apenas em consedida' },
              { letra: 'D', texto: 'Apenas em análise' },
              { letra: 'E', texto: 'A frase está corretamente escrita' },
            ],
            gabarito: 'A',
            justificativa: 'As grafias corretas são "licença" (com Ç) e "concedida" (com C). Portanto, há dois erros ortográficos na frase. "Análise" está correto.',
            dificuldade: 'Média',
            competencia: 'Ortografia aplicada',
            banca: 'IADES',
            tags: ['ortografia', 'vigilância sanitária'],
          },
        ],
      },
    },
    {
      id: 'lp-topico-3',
      numero: 3,
      titulo: 'Reconhecimento de tipos e gêneros textuais',
      conteudo: {
        resumo: `
## Resumo Rápido

### Tipos Textuais vs. Gêneros Textuais

| Conceito | Definição | Exemplos |
|----------|-----------|----------|
| **Tipo textual** | Estrutura linguística | Narrativo, descritivo, argumentativo, expositivo, injuntivo |
| **Gênero textual** | Forma concreta de texto | Crônica, editorial, lei, receita, notícia |

### Os 5 Tipos Textuais

| Tipo | Função | Características |
|------|--------|-----------------|
| **Narrativo** | Contar fatos | Tempo, espaço, personagens, enredo |
| **Descritivo** | Caracterizar | Adjetivos, detalhamento, imagem |
| **Argumentativo** | Convencer | Tese, argumentos, conclusão |
| **Expositivo** | Informar/explicar | Objetividade, clareza |
| **Injuntivo** | Instruir/ordenar | Verbos no imperativo, passos |

### Gêneros Textuais Importantes para Concursos

| Gênero | Tipo predominante | Contexto |
|--------|-------------------|----------|
| Editorial | Argumentativo | Jornalismo |
| Notícia | Narrativo/expositivo | Jornalismo |
| Lei/Norma | Injuntivo | Jurídico |
| Relatório | Expositivo | Técnico/administrativo |
| Crônica | Narrativo | Literatura |
        `,

        explicacao: `
## Explicação Didática

### 1. Diferença entre Tipo e Gênero Textual

#### 1.1 Tipo Textual

**Tipo textual** é uma classificação baseada na **estrutura linguística** e na **intenção comunicativa**. São apenas **cinco tipos**:

1. Narrativo
2. Descritivo
3. Argumentativo (ou dissertativo-argumentativo)
4. Expositivo (ou dissertativo-expositivo)
5. Injuntivo (ou instrucional)

#### 1.2 Gênero Textual

**Gênero textual** é a forma **concreta** como os textos se manifestam na sociedade. São **inúmeros** e surgem das práticas sociais.

**Exemplos:** carta, e-mail, notícia, editorial, lei, receita, romance, crônica, relatório, ata, memorando, edital.

#### 1.3 Quadro Comparativo

| Aspecto | Tipo Textual | Gênero Textual |
|---------|--------------|----------------|
| **Quantidade** | 5 tipos fixos | Inúmeros (infinitos) |
| **Base** | Estrutura linguística | Prática social |
| **Natureza** | Abstrata | Concreta |
| **Exemplo** | Narrativo | Romance, conto, fábula |

### 2. Os Cinco Tipos Textuais

#### 2.1 Tipo NARRATIVO

**Função:** Contar fatos, relatar acontecimentos.

**Elementos da narrativa:**
- **Narrador:** quem conta (1ª ou 3ª pessoa)
- **Personagens:** quem participa
- **Tempo:** quando ocorre (cronológico ou psicológico)
- **Espaço:** onde ocorre
- **Enredo:** sequência de fatos (início, conflito, clímax, desfecho)

**Marcas linguísticas:**
- Verbos de ação no passado (pretérito perfeito)
- Advérbios de tempo e lugar
- Sequência temporal

**Gêneros narrativos:** conto, crônica, romance, fábula, notícia, relato.

**Exemplo:**
> "O fiscal chegou ao estabelecimento às 9h. Verificou as condições de higiene e encontrou irregularidades no armazenamento de alimentos."

#### 2.2 Tipo DESCRITIVO

**Função:** Caracterizar seres, objetos, lugares, sensações.

**Características:**
- Abundância de **adjetivos**
- Verbos de **estado** (ser, estar, parecer)
- Linguagem sensorial (visão, audição, tato)
- Pode ser objetiva ou subjetiva

**Tipos de descrição:**
| Tipo | Característica |
|------|----------------|
| **Objetiva** | Imparcial, técnica |
| **Subjetiva** | Impressões pessoais |
| **Física** | Aparência externa |
| **Psicológica** | Personalidade, emoções |

**Gêneros descritivos:** laudo técnico, retrato, cardápio, anúncio classificado.

**Exemplo:**
> "O estabelecimento possui 50m², com paredes brancas, piso cerâmico e iluminação artificial. O ambiente apresenta-se limpo e organizado."

#### 2.3 Tipo ARGUMENTATIVO (Dissertativo-argumentativo)

**Função:** Defender um ponto de vista, convencer o leitor.

**Estrutura:**
1. **Tese:** opinião a ser defendida
2. **Argumentos:** justificativas, provas, exemplos
3. **Conclusão:** reafirmação ou proposta

**Marcas linguísticas:**
- Verbos no presente do indicativo
- Conectivos argumentativos (portanto, assim, logo)
- Linguagem impessoal (geralmente)
- Operadores de causa, consequência, oposição

**Gêneros argumentativos:** editorial, artigo de opinião, dissertação, resenha crítica, carta argumentativa.

**Exemplo:**
> "A fiscalização sanitária é essencial para a saúde pública. Sem ela, a população ficaria exposta a riscos evitáveis. Portanto, investir em vigilância sanitária é investir em qualidade de vida."

#### 2.4 Tipo EXPOSITIVO (Dissertativo-expositivo)

**Função:** Informar, explicar, esclarecer, sem defender posição.

**Características:**
- Linguagem **objetiva** e clara
- Apresentação de dados, conceitos, informações
- Não há defesa de tese
- Imparcialidade

**Gêneros expositivos:** verbete de dicionário, resumo, texto didático, notícia (parte informativa), relatório técnico.

**Exemplo:**
> "A vigilância sanitária é o conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde. Está prevista na Lei 8.080/1990 e integra o Sistema Único de Saúde."

#### 2.5 Tipo INJUNTIVO (Instrucional)

**Função:** Instruir, orientar, ordenar, dar comandos.

**Características:**
- Verbos no **imperativo** ou infinitivo
- Linguagem direta e objetiva
- Sequência de passos/instruções
- Pode haver proibições

**Gêneros injuntivos:** receita, manual de instruções, bula, regulamento, lei, edital.

**Exemplo:**
> "Lave as mãos antes de manipular alimentos. Armazene produtos perecíveis sob refrigeração. Não utilize produtos com prazo de validade vencido."

### 3. Gêneros Textuais Importantes para Concursos

#### 3.1 Gêneros Jornalísticos

| Gênero | Tipo predominante | Características |
|--------|-------------------|-----------------|
| **Notícia** | Expositivo/Narrativo | Fatos, imparcialidade, lide (quem, o quê, quando, onde, como, por quê) |
| **Reportagem** | Expositivo/Narrativo | Aprofundamento, múltiplas fontes |
| **Editorial** | Argumentativo | Opinião do jornal, sem assinatura |
| **Artigo de opinião** | Argumentativo | Opinião assinada |
| **Crônica** | Narrativo | Fato cotidiano, reflexão, tom pessoal |
| **Entrevista** | Expositivo | Perguntas e respostas |

#### 3.2 Gêneros Jurídico-Administrativos

| Gênero | Tipo predominante | Características |
|--------|-------------------|-----------------|
| **Lei** | Injuntivo | Normas obrigatórias, artigos, parágrafos |
| **Portaria** | Injuntivo | Ato administrativo interno |
| **Edital** | Injuntivo/Expositivo | Regras de concurso/licitação |
| **Relatório** | Expositivo | Descrição de atividades |
| **Parecer** | Argumentativo | Opinião técnica fundamentada |
| **Ata** | Narrativo/Expositivo | Registro de reunião |
| **Memorando** | Expositivo | Comunicação interna |
| **Ofício** | Expositivo | Comunicação externa |

#### 3.3 Gêneros Técnico-Científicos

| Gênero | Tipo predominante | Características |
|--------|-------------------|-----------------|
| **Artigo científico** | Expositivo/Argumentativo | Pesquisa, metodologia |
| **Resumo/Abstract** | Expositivo | Síntese de trabalho |
| **Resenha** | Argumentativo/Expositivo | Análise crítica |
| **Laudo técnico** | Descritivo/Expositivo | Análise especializada |

### 4. Reconhecendo Tipos e Gêneros nas Provas

#### 4.1 Estratégias para Identificação

**Para identificar o TIPO:**
1. Qual a **intenção** do autor? (contar, descrever, convencer, informar, instruir)
2. Quais as **marcas linguísticas**? (verbos, conectivos, adjetivos)
3. Qual a **estrutura**? (sequência, argumentação, descrição)

**Para identificar o GÊNERO:**
1. Onde o texto **circula**? (jornal, revista, documento oficial)
2. Qual a **forma/estrutura** concreta? (manchete, artigos numerados)
3. Quem é o **público-alvo**?

#### 4.2 Armadilhas Comuns em Provas

| Armadilha | Como evitar |
|-----------|-------------|
| Confundir tipo com gênero | Tipo = 5 estruturas; Gênero = formas concretas |
| Achar que um texto tem só um tipo | Textos combinam tipos (predominante + secundários) |
| Confundir expositivo com argumentativo | Expositivo informa; Argumentativo defende tese |
| Confundir descritivo com narrativo | Descritivo caracteriza; Narrativo conta fatos |

### 5. Aplicação na Vigilância Sanitária

| Gênero | Uso na VISA | Tipo predominante |
|--------|-------------|-------------------|
| **Auto de infração** | Registrar irregularidades | Descritivo/Narrativo |
| **Relatório de inspeção** | Documentar vistoria | Descritivo/Expositivo |
| **Termo de intimação** | Ordenar correções | Injuntivo |
| **Resolução da ANVISA** | Estabelecer normas | Injuntivo |
| **Parecer técnico** | Fundamentar decisões | Argumentativo |
        `,

        pontosChave: [
          'TIPO textual = 5 estruturas (narrativo, descritivo, argumentativo, expositivo, injuntivo)',
          'GÊNERO textual = formas concretas (crônica, lei, notícia, edital) - são inúmeros',
          'Narrativo: conta fatos, verbos no passado, enredo com início/conflito/clímax/desfecho',
          'Descritivo: caracteriza, abundância de adjetivos, verbos de estado',
          'Argumentativo: defende tese + argumentos + conclusão, objetivo é convencer',
          'Expositivo: informa/explica sem defender posição, linguagem objetiva',
          'Injuntivo: instrui/ordena, verbos no imperativo, sequência de passos',
          'Um texto pode combinar tipos, mas há sempre um PREDOMINANTE',
          'Editorial = opinião do jornal (argumentativo); Notícia = fatos (expositivo)',
          'Lei, edital, manual = injuntivo; Relatório = expositivo; Parecer = argumentativo',
        ],

        armadilhas: [
          {
            titulo: 'Confundir tipo com gênero textual',
            descricao: 'Tipo são as 5 estruturas básicas; gênero são as formas concretas como crônica, lei, e-mail.',
            dica: 'Tipos são CINCO e abstratos; Gêneros são MUITOS e concretos.',
          },
          {
            titulo: 'Achar que texto tem apenas um tipo',
            descricao: 'Um romance pode ter narração, descrição e diálogos. Um editorial pode ter exposição e argumentação.',
            dica: 'Identifique o tipo PREDOMINANTE, mas reconheça que há combinação.',
          },
          {
            titulo: 'Confundir expositivo com argumentativo',
            descricao: 'Expositivo apenas INFORMA; Argumentativo DEFENDE uma posição.',
            dica: 'Pergunte: há uma TESE sendo defendida? Sim = argumentativo. Não = expositivo.',
          },
          {
            titulo: 'Confundir notícia com editorial',
            descricao: 'Notícia é informativa (expositivo); Editorial é opinião do jornal (argumentativo).',
            dica: 'Notícia = fatos, imparcial. Editorial = opinião, parcial.',
          },
        ],

        mnemonicos: [
          {
            termo: 'NADEI',
            significado: 'Narrativo, Argumentativo, Descritivo, Expositivo, Injuntivo',
            frase: 'Os 5 tipos textuais: NADEI no texto',
          },
          {
            termo: 'CONTE-DESCREVA-CONVENÇA-INFORME-INSTRUA',
            significado: 'Funções dos 5 tipos textuais',
            frase: 'Narrativo conta, Descritivo descreve, Argumentativo convence, Expositivo informa, Injuntivo instrui',
          },
          {
            termo: 'TiGe',
            significado: 'Tipo = estrutura; Gênero = forma concreta',
            frase: 'TIpo é a estrutura, GÊnero é a forma real',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-3-1',
            frente: 'Qual a diferença entre TIPO textual e GÊNERO textual?',
            verso: '**TIPO TEXTUAL:**\n- Estrutura linguística\n- São apenas 5 (NADEI)\n- Abstrato\n\n**GÊNERO TEXTUAL:**\n- Forma concreta na sociedade\n- São inúmeros\n- Concreto\n\nExemplo: Romance (gênero) é predominantemente narrativo (tipo).',
            tags: ['tipo', 'gênero', 'diferença'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-2',
            frente: 'Quais são os 5 tipos textuais?',
            verso: '**NADEI:**\n\n1. **N**arrativo - conta fatos\n2. **A**rgumentativo - convence\n3. **D**escritivo - caracteriza\n4. **E**xpositivo - informa\n5. **I**njuntivo - instrui/ordena\n\nSão apenas esses 5!',
            tags: ['tipos textuais', 'NADEI'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-3',
            frente: 'Quais as características do texto NARRATIVO?',
            verso: '**Função:** Contar fatos\n\n**Elementos:**\n- Narrador, personagens\n- Tempo, espaço\n- Enredo (conflito, clímax)\n\n**Marcas:**\n- Verbos de ação no passado\n- Advérbios de tempo/lugar\n\n**Gêneros:** conto, crônica, notícia',
            tags: ['narrativo', 'características'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-4',
            frente: 'Quais as características do texto ARGUMENTATIVO?',
            verso: '**Função:** Convencer, defender tese\n\n**Estrutura:**\n1. Tese (opinião)\n2. Argumentos (provas)\n3. Conclusão\n\n**Marcas:**\n- Conectivos (portanto, logo)\n- Verbos no presente\n\n**Gêneros:** editorial, artigo de opinião',
            tags: ['argumentativo', 'características'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-5',
            frente: 'Qual a diferença entre EXPOSITIVO e ARGUMENTATIVO?',
            verso: '**EXPOSITIVO:**\n- INFORMA, explica\n- NÃO defende posição\n- Imparcial, objetivo\n- Ex: verbete, resumo\n\n**ARGUMENTATIVO:**\n- CONVENCE, defende tese\n- TEM posição clara\n- Parcial\n- Ex: editorial, artigo de opinião',
            tags: ['expositivo', 'argumentativo', 'diferença'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-6',
            frente: 'Quais as características do texto INJUNTIVO?',
            verso: '**Função:** Instruir, ordenar, orientar\n\n**Marcas:**\n- Verbos no IMPERATIVO\n- Verbos no infinitivo\n- Sequência de passos\n- Linguagem direta\n\n**Gêneros:** receita, manual, bula, lei, edital, regulamento',
            tags: ['injuntivo', 'características'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-7',
            frente: 'Qual a diferença entre NOTÍCIA e EDITORIAL?',
            verso: '**NOTÍCIA:**\n- Expositivo/Narrativo\n- Informa FATOS\n- Imparcial\n- Responde: quem, o quê, quando, onde, como, por quê\n\n**EDITORIAL:**\n- Argumentativo\n- OPINIÃO do jornal\n- Parcial\n- Não tem assinatura individual',
            tags: ['notícia', 'editorial', 'diferença'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-3-8',
            frente: 'Quais gêneros textuais são usados na Vigilância Sanitária?',
            verso: '**Auto de infração:**\nDescritivo/Narrativo\n\n**Relatório de inspeção:**\nDescritivo/Expositivo\n\n**Termo de intimação:**\nInjuntivo\n\n**Resolução ANVISA:**\nInjuntivo\n\n**Parecer técnico:**\nArgumentativo',
            tags: ['vigilância sanitária', 'gêneros'],
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
            id: 'lp-q-3-1',
            enunciado: 'Sobre tipos e gêneros textuais, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'Tipo textual e gênero textual são sinônimos.' },
              { letra: 'B', texto: 'Os tipos textuais são estruturas linguísticas, enquanto os gêneros são formas concretas de textos.' },
              { letra: 'C', texto: 'Existem centenas de tipos textuais diferentes.' },
              { letra: 'D', texto: 'Os gêneros textuais são apenas cinco: narrativo, descritivo, argumentativo, expositivo e injuntivo.' },
              { letra: 'E', texto: 'Um texto pertence a apenas um tipo e um gênero.' },
            ],
            gabarito: 'B',
            justificativa: 'Tipos textuais são estruturas linguísticas (apenas 5). Gêneros textuais são as formas concretas como os textos se manifestam na sociedade (inúmeros). A alternativa A confunde os conceitos, C e D invertem as quantidades.',
            dificuldade: 'Fácil',
            competencia: 'Tipo vs. Gênero',
            banca: 'IADES',
            tags: ['tipo', 'gênero'],
          },
          {
            id: 'lp-q-3-2',
            enunciado: 'Assinale a alternativa que apresenta os cinco tipos textuais:',
            alternativas: [
              { letra: 'A', texto: 'Crônica, conto, romance, fábula e novela.' },
              { letra: 'B', texto: 'Notícia, editorial, artigo, reportagem e entrevista.' },
              { letra: 'C', texto: 'Narrativo, descritivo, argumentativo, expositivo e injuntivo.' },
              { letra: 'D', texto: 'Jornalístico, literário, científico, jurídico e publicitário.' },
              { letra: 'E', texto: 'Formal, informal, coloquial, culto e técnico.' },
            ],
            gabarito: 'C',
            justificativa: 'Os cinco tipos textuais são: Narrativo, Descritivo, Argumentativo, Expositivo e Injuntivo. As demais alternativas apresentam gêneros textuais (A, B), domínios discursivos (D) ou variações linguísticas (E).',
            dificuldade: 'Fácil',
            competencia: 'Tipos textuais',
            banca: 'IADES',
            tags: ['tipos textuais'],
          },
          {
            id: 'lp-q-3-3',
            enunciado: 'O tipo textual que tem como função principal defender um ponto de vista por meio de argumentos é o:',
            alternativas: [
              { letra: 'A', texto: 'Narrativo.' },
              { letra: 'B', texto: 'Descritivo.' },
              { letra: 'C', texto: 'Expositivo.' },
              { letra: 'D', texto: 'Argumentativo.' },
              { letra: 'E', texto: 'Injuntivo.' },
            ],
            gabarito: 'D',
            justificativa: 'O texto ARGUMENTATIVO tem como função defender uma tese (ponto de vista) por meio de argumentos, com o objetivo de convencer o leitor. Sua estrutura é: tese + argumentos + conclusão.',
            dificuldade: 'Fácil',
            competencia: 'Texto argumentativo',
            banca: 'IADES',
            tags: ['argumentativo'],
          },
          {
            id: 'lp-q-3-4',
            enunciado: 'Considere o seguinte trecho: "Lave as mãos antes de manipular alimentos. Armazene produtos perecíveis em temperatura adequada. Descarte embalagens danificadas." O tipo textual predominante é:',
            alternativas: [
              { letra: 'A', texto: 'Narrativo.' },
              { letra: 'B', texto: 'Descritivo.' },
              { letra: 'C', texto: 'Argumentativo.' },
              { letra: 'D', texto: 'Expositivo.' },
              { letra: 'E', texto: 'Injuntivo.' },
            ],
            gabarito: 'E',
            justificativa: 'O texto apresenta instruções e comandos com verbos no imperativo (lave, armazene, descarte), característica do texto INJUNTIVO, que tem a função de instruir, orientar ou ordenar.',
            dificuldade: 'Fácil',
            competencia: 'Texto injuntivo',
            banca: 'IADES',
            tags: ['injuntivo'],
          },
          {
            id: 'lp-q-3-5',
            enunciado: 'O gênero textual que apresenta a opinião institucional de um veículo de comunicação, sem assinatura individual, é o(a):',
            alternativas: [
              { letra: 'A', texto: 'Notícia.' },
              { letra: 'B', texto: 'Reportagem.' },
              { letra: 'C', texto: 'Editorial.' },
              { letra: 'D', texto: 'Crônica.' },
              { letra: 'E', texto: 'Artigo de opinião.' },
            ],
            gabarito: 'C',
            justificativa: 'O EDITORIAL é o gênero que expressa a opinião institucional do veículo (jornal, revista), não de um indivíduo. Por isso, não é assinado. É predominantemente argumentativo.',
            dificuldade: 'Média',
            competencia: 'Gêneros jornalísticos',
            banca: 'IADES',
            tags: ['editorial', 'gêneros'],
          },
          {
            id: 'lp-q-3-6',
            enunciado: 'A diferença entre o texto expositivo e o argumentativo é que:',
            alternativas: [
              { letra: 'A', texto: 'O expositivo usa apenas verbos no passado.' },
              { letra: 'B', texto: 'O argumentativo é sempre imparcial.' },
              { letra: 'C', texto: 'O expositivo informa sem defender posição; o argumentativo defende uma tese.' },
              { letra: 'D', texto: 'O expositivo é literário; o argumentativo é jornalístico.' },
              { letra: 'E', texto: 'Não há diferença significativa entre eles.' },
            ],
            gabarito: 'C',
            justificativa: 'O texto EXPOSITIVO tem função informativa, explicando conceitos sem tomar partido. O texto ARGUMENTATIVO defende uma tese com argumentos, buscando convencer o leitor.',
            dificuldade: 'Média',
            competencia: 'Expositivo vs. Argumentativo',
            banca: 'IADES',
            tags: ['expositivo', 'argumentativo'],
          },
          {
            id: 'lp-q-3-7',
            enunciado: 'O texto descritivo caracteriza-se principalmente pela:',
            alternativas: [
              { letra: 'A', texto: 'Presença de verbos no imperativo.' },
              { letra: 'B', texto: 'Sequência de fatos com início, meio e fim.' },
              { letra: 'C', texto: 'Defesa de uma tese com argumentos.' },
              { letra: 'D', texto: 'Caracterização de seres, objetos ou ambientes com uso de adjetivos.' },
              { letra: 'E', texto: 'Apresentação de informações objetivas em ordem cronológica.' },
            ],
            gabarito: 'D',
            justificativa: 'O texto DESCRITIVO tem como função caracterizar seres, objetos, lugares. Suas marcas são: abundância de adjetivos, verbos de estado (ser, estar), linguagem sensorial.',
            dificuldade: 'Fácil',
            competencia: 'Texto descritivo',
            banca: 'IADES',
            tags: ['descritivo'],
          },
          {
            id: 'lp-q-3-8',
            enunciado: 'Uma Resolução da ANVISA que estabelece normas para o funcionamento de estabelecimentos de alimentação é predominantemente um texto:',
            alternativas: [
              { letra: 'A', texto: 'Narrativo, pois conta a história da regulamentação.' },
              { letra: 'B', texto: 'Descritivo, pois descreve os estabelecimentos.' },
              { letra: 'C', texto: 'Argumentativo, pois defende a importância das normas.' },
              { letra: 'D', texto: 'Injuntivo, pois estabelece obrigações e procedimentos.' },
              { letra: 'E', texto: 'Expositivo, pois apenas informa sobre o tema.' },
            ],
            gabarito: 'D',
            justificativa: 'Normas, leis, resoluções e regulamentos são textos INJUNTIVOS porque estabelecem obrigações, proibições e procedimentos a serem seguidos. Usam linguagem prescritiva.',
            dificuldade: 'Média',
            competencia: 'Texto injuntivo',
            banca: 'IADES',
            tags: ['injuntivo', 'vigilância sanitária'],
          },
          {
            id: 'lp-q-3-9',
            enunciado: 'O texto narrativo apresenta como elementos essenciais:',
            alternativas: [
              { letra: 'A', texto: 'Tese, argumentos e conclusão.' },
              { letra: 'B', texto: 'Narrador, personagens, tempo, espaço e enredo.' },
              { letra: 'C', texto: 'Apenas descrições detalhadas de objetos.' },
              { letra: 'D', texto: 'Instruções e comandos no imperativo.' },
              { letra: 'E', texto: 'Conceitos e definições técnicas.' },
            ],
            gabarito: 'B',
            justificativa: 'Os elementos da narrativa são: narrador (quem conta), personagens (quem participa), tempo (quando), espaço (onde) e enredo (sequência de fatos com conflito).',
            dificuldade: 'Fácil',
            competencia: 'Elementos da narrativa',
            banca: 'IADES',
            tags: ['narrativo', 'elementos'],
          },
          {
            id: 'lp-q-3-10',
            enunciado: 'Um fiscal de saúde pública elaborou um documento técnico analisando as condições de um estabelecimento e concluindo pela necessidade de interdição, fundamentando sua decisão. Esse documento é um exemplo de texto predominantemente:',
            alternativas: [
              { letra: 'A', texto: 'Narrativo, pois relata a inspeção.' },
              { letra: 'B', texto: 'Descritivo, pois caracteriza o estabelecimento.' },
              { letra: 'C', texto: 'Argumentativo, pois fundamenta e defende uma conclusão.' },
              { letra: 'D', texto: 'Injuntivo, pois ordena a interdição.' },
              { letra: 'E', texto: 'Expositivo, pois apenas informa a situação.' },
            ],
            gabarito: 'C',
            justificativa: 'Um parecer técnico que analisa, fundamenta e conclui defendendo uma posição é predominantemente ARGUMENTATIVO. Há uma tese (interdição necessária) sustentada por argumentos (condições encontradas).',
            dificuldade: 'Média',
            competencia: 'Aplicação na VISA',
            banca: 'IADES',
            tags: ['argumentativo', 'vigilância sanitária'],
          },
        ],
      },
    },
    {
      id: 'lp-topico-4',
      numero: 4,
      titulo: 'Domínio da estrutura morfossintática do período',
      conteudo: {
        resumo: `
## Resumo Rápido

O **domínio da estrutura morfossintática do período** é essencial para concursos. A banca IADES cobra análise de períodos, classes de palavras, concordância, regência e pontuação.

### Classes de Palavras (Morfologia)

| Classe | Função | Exemplos |
|--------|--------|----------|
| **Substantivo** | Nomear seres | casa, amor, Brasil |
| **Adjetivo** | Caracterizar substantivo | bonito, sanitária, federal |
| **Verbo** | Ação, estado, fenômeno | fiscalizar, ser, chover |
| **Advérbio** | Modificar verbo/adj./adv. | muito, bem, aqui |
| **Pronome** | Substituir/acompanhar nome | ele, seu, isso |
| **Preposição** | Ligar termos | de, para, com, em |
| **Conjunção** | Ligar orações | e, mas, porque, que |
| **Artigo** | Determinar substantivo | o, a, um, uma |
| **Numeral** | Quantidade/ordem | dois, segundo |
| **Interjeição** | Expressar emoção | Ah!, Eita! |

### Relações entre Orações

| Relação | Característica | Exemplo |
|---------|----------------|---------|
| **Coordenação** | Orações independentes | Estudei **e** passei |
| **Subordinação** | Oração depende da outra | Espero **que** você passe |

### Tópicos Essenciais para IADES:
- Concordância verbal e nominal
- Regência verbal e nominal
- Uso da crase
- Colocação pronominal (próclise, mesóclise, ênclise)
        `,

        explicacao: `
## Explicação Didática

### 1. Emprego das Classes de Palavras

#### 1.1 Classes Variáveis (flexionam em gênero, número, grau)

**Substantivo** - nomeia seres, objetos, sentimentos
- Concreto: mesa, fiscal, relatório
- Abstrato: saúde, fiscalização, qualidade

**Adjetivo** - caracteriza o substantivo
- Uniforme: simples, grande (não varia em gênero)
- Biforme: brasileiro/brasileira, bom/boa

**Verbo** - expressa ação, estado ou fenômeno
- Regulares: fiscalizar, verificar
- Irregulares: ser, ter, haver

**Pronome** - substitui ou acompanha substantivo
- Pessoais: eu, tu, ele, nós
- Demonstrativos: este, esse, aquele
- Relativos: que, o qual, cujo

**Artigo** - determina o substantivo
- Definido: o, a, os, as
- Indefinido: um, uma, uns, umas

**Numeral** - indica quantidade ou ordem
- Cardinal: um, dois, três
- Ordinal: primeiro, segundo

#### 1.2 Classes Invariáveis

**Advérbio** - modifica verbo, adjetivo ou outro advérbio
- Modo: bem, mal, rapidamente
- Tempo: hoje, amanhã, sempre
- Lugar: aqui, ali, longe
- Negação: não, nunca, jamais

**Preposição** - liga termos
- Essenciais: de, para, com, em, a, por
- Acidentais: conforme, segundo, durante

**Conjunção** - liga orações
- Coordenativas: e, mas, ou, logo, portanto
- Subordinativas: que, se, quando, embora, porque

### 2. Relações de Coordenação

Orações coordenadas são **sintaticamente independentes** (uma não depende da outra).

#### Tipos de Orações Coordenadas

| Tipo | Conjunções | Exemplo |
|------|------------|---------|
| **Aditiva** | e, nem, também | O fiscal verificou os documentos **e** aplicou a multa. |
| **Adversativa** | mas, porém, contudo, todavia, entretanto | O estabelecimento foi notificado, **mas** não corrigiu as irregularidades. |
| **Alternativa** | ou, ou...ou, ora...ora | **Ou** regulariza a situação, **ou** sofrerá sanções. |
| **Conclusiva** | logo, portanto, por isso, assim | Houve irregularidades; **portanto**, aplicou-se a multa. |
| **Explicativa** | pois, porque, que | Não compareceu à inspeção, **pois** estava ausente. |

### 3. Relações de Subordinação

Orações subordinadas são **sintaticamente dependentes** da oração principal.

#### 3.1 Subordinadas Substantivas

Exercem função de **substantivo** na principal:

| Tipo | Função | Exemplo |
|------|--------|---------|
| **Subjetiva** | Sujeito | É necessário **que o fiscal compareça**. |
| **Objetiva direta** | OD | O gestor decidiu **que haverá nova inspeção**. |
| **Objetiva indireta** | OI | Não duvido **de que serão cumpridas as normas**. |
| **Completiva nominal** | CN | Tenho certeza **de que a inspeção ocorrerá**. |
| **Predicativa** | Predicativo | O importante é **que cumpram as normas**. |
| **Apositiva** | Aposto | Só quero uma coisa: **que sejam regularizadas**. |

#### 3.2 Subordinadas Adjetivas

Exercem função de **adjetivo** (caracterizam substantivo):

| Tipo | Uso | Exemplo |
|------|-----|---------|
| **Restritiva** | Sem vírgula, restringe | Os fiscais **que concluíram o curso** já atuam. |
| **Explicativa** | Com vírgula, explica | Os fiscais, **que concluíram o curso**, já atuam. |

**⚠️ Importante**: A vírgula muda completamente o sentido!
- Restritiva: apenas alguns fiscais
- Explicativa: todos os fiscais

#### 3.3 Subordinadas Adverbiais

Exercem função de **advérbio** (circunstância):

| Tipo | Conjunções | Exemplo |
|------|------------|---------|
| **Causal** | porque, visto que, já que | A multa foi aplicada **porque houve irregularidade**. |
| **Concessiva** | embora, ainda que, mesmo que | **Embora tenha sido notificado**, não corrigiu. |
| **Condicional** | se, caso, desde que | **Se houver reincidência**, a multa será maior. |
| **Temporal** | quando, enquanto, assim que | **Quando o fiscal chegou**, o estabelecimento fechou. |
| **Final** | para que, a fim de que | Fiscalizamos **para que a população tenha segurança**. |
| **Comparativa** | como, tanto quanto | Agiu **como determina a lei**. |
| **Consecutiva** | (tão)...que, (tanto)...que | Era **tão** grave **que** exigiu interdição. |
| **Conformativa** | conforme, segundo, como | **Conforme previsto na lei**, foi aplicada a sanção. |
| **Proporcional** | à medida que, à proporção que | **À medida que** fiscalizamos, reduzimos riscos. |

### 4. Emprego dos Sinais de Pontuação

#### 4.1 Vírgula

**USA-SE VÍRGULA para:**
1. Separar termos de mesma função: O fiscal verificou **documentos, licenças e alvarás**.
2. Isolar aposto explicativo: **A ANVISA, agência reguladora,** publicou norma.
3. Isolar vocativo: **Senhor fiscal,** aguardo sua orientação.
4. Isolar adjuntos adverbiais deslocados: **Em 2024,** haverá nova inspeção.
5. Separar orações coordenadas: Fiscalizou **,** mas não multou.
6. Separar orações adverbiais antepostas: **Quando chegou,** já era tarde.

**NÃO SE USA VÍRGULA entre:**
- Sujeito e verbo: ~~O fiscal, verificou~~ → O fiscal verificou
- Verbo e complemento: ~~Verificou, os documentos~~ → Verificou os documentos

#### 4.2 Ponto e Vírgula

- Separar orações coordenadas longas
- Separar itens de enumeração complexa
- Antes de conjunções adversativas (porém, contudo) quando a oração anterior é longa

#### 4.3 Dois-Pontos

- Introduzir enumeração: Os documentos necessários são: alvará, licença e CNPJ.
- Introduzir citação ou fala: O fiscal declarou: "O estabelecimento será interditado".
- Introduzir explicação: Não havia outra opção: era necessário interditar.

### 5. Concordância Verbal e Nominal

#### 5.1 Concordância Verbal

O verbo concorda com o **sujeito** em número e pessoa.

**Casos especiais:**
| Caso | Regra | Exemplo |
|------|-------|---------|
| **Sujeito composto** | Verbo no plural | O fiscal e o gerente **chegaram**. |
| **Sujeito posposto** | Pode concordar com o mais próximo | **Chegou** o fiscal e o gerente. |
| **Expressões partitivas** | Verbo no singular ou plural | A maioria dos fiscais **aprovou/aprovaram**. |
| **Porcentagem** | Concorda com o especificador | 30% da equipe **concordou**. / 30% dos fiscais **concordaram**. |
| **Voz passiva sintética** | Verbo concorda com sujeito paciente | **Aplicaram-se** as multas. / **Aplicou-se** a multa. |

#### 5.2 Concordância Nominal

O adjetivo, artigo, pronome e numeral concordam com o **substantivo** em gênero e número.

**Casos especiais:**
| Caso | Regra | Exemplo |
|------|-------|---------|
| **Adjetivo posposto** | Concorda com o mais próximo ou vai para plural | Alvará e licença **atualizada/atualizados**. |
| **Adjetivo anteposto** | Concorda com o mais próximo | **Atualizados** alvará e licença. |
| **É proibido, é necessário** | Sem artigo = invariável | É proibido **entrada**. / É proibida **a entrada**. |
| **Anexo, incluso, junto** | Concordam com substantivo | Documentos **anexos**. / Certidão **anexa**. |
| **Mesmo, próprio** | Concordam com substantivo | Ela **mesma** fiscalizou. |
| **Meio, bastante** | Variáveis como adjetivo | **Meia** hora. / **Bastantes** problemas. |

### 6. Regência Verbal e Nominal

#### 6.1 Regência Verbal

**Verbos importantes para concursos:**

| Verbo | Regência | Exemplo correto |
|-------|----------|-----------------|
| **Assistir** (ver) | VTI (a) | Assistir **ao** julgamento. |
| **Assistir** (ajudar) | VTD | Assistir **o** doente. |
| **Aspirar** (desejar) | VTI (a) | Aspirar **ao** cargo. |
| **Aspirar** (respirar) | VTD | Aspirar **o** ar. |
| **Visar** (objetivar) | VTI (a) | Visar **à** aprovação. |
| **Visar** (mirar) | VTD | Visar **o** alvo. |
| **Obedecer/Desobedecer** | VTI (a) | Obedecer **às** normas. |
| **Preferir** | VTD + a | Prefiro estudar **a** descansar. |
| **Implicar** (acarretar) | VTD | Implica **responsabilidade**. |
| **Informar** | VTD + prep. ou VTI + OD | Informou-o **de** que... / Informou-lhe **que**... |

#### 6.2 Regência Nominal

| Nome | Regência | Exemplo |
|------|----------|---------|
| **Compatível/Incompatível** | com | Compatível **com** a norma. |
| **Acessível** | a | Acessível **a** todos. |
| **Passível** | de | Passível **de** recurso. |
| **Preferência** | por/a | Preferência **por** fiscalização. |
| **Aversão** | a/por | Aversão **à** irregularidade. |
| **Obediência** | a | Obediência **às** normas. |

### 7. Emprego do Sinal Indicativo de Crase

**Crase** = fusão da preposição **a** + artigo **a** ou pronome demonstrativo.

#### 7.1 Quando USAR Crase

| Caso | Exemplo |
|------|---------|
| **Locução feminina** | À noite, às vezes, à medida que |
| **Hora determinada** | Às 14h, à meia-noite |
| **Expressão "à moda de"** | Bife à milanesa, pão à francesa |
| **Pronomes demonstrativos** | Referiu-se àquela norma (a + aquela) |
| **Antes de palavra feminina com verbo que exige "a"** | Fui **à** secretaria. Refiro-me **à** norma. |

#### 7.2 Quando NÃO USAR Crase

| Caso | Exemplo |
|------|---------|
| **Antes de masculino** | Vou a pé. Cheguei a tempo. |
| **Antes de verbo** | Começou a trabalhar. |
| **Antes de palavra no plural (se "a" estiver no singular)** | Refiro-me a normas (e não "à normas"). |
| **Entre palavras repetidas** | Cara a cara. Dia a dia. |
| **Antes de pronomes pessoais, de tratamento, indefinidos** | Referiu-se a ela. Quanto a Vossa Excelência. |
| **Antes de cidade sem determinante** | Fui a Goiânia. (Mas: Fui **à** Goiânia das tradições.) |

#### 7.3 Crase Facultativa

| Caso | Exemplo |
|------|---------|
| **Antes de pronome possessivo feminino** | Referiu-se a/à sua decisão. |
| **Depois de "até"** | Fui até a/à secretaria. |
| **Antes de nomes próprios femininos** | Referiu-se a/à Maria. |

### 8. Colocação dos Pronomes Átonos

Pronomes átonos: **me, te, se, o(s), a(s), lhe(s), nos, vos**

#### 8.1 Próclise (pronome ANTES do verbo)

**Usa-se próclise quando há:**
| Atrator | Exemplo |
|---------|---------|
| **Palavra negativa** | **Não** me informaram. |
| **Advérbio** | **Sempre** se verifica. |
| **Conjunção subordinativa** | Espero **que** o notifiquem. |
| **Pronome relativo** | O documento **que** me enviaram. |
| **Pronome interrogativo** | **Quem** lhe disse isso? |
| **Pronome indefinido** | **Alguém** me avisou. |
| **Oração optativa** | Deus o abençoe! |
| **Gerúndio precedido de "em"** | **Em** se tratando de saúde... |

#### 8.2 Mesóclise (pronome NO MEIO do verbo)

Só com verbos no **futuro do presente** ou **futuro do pretérito**, quando não há atrator de próclise.

| Tempo | Exemplo |
|-------|---------|
| **Futuro do presente** | Informar-**me**-ão. / Dir-**lhe**-ei. |
| **Futuro do pretérito** | Informar-**me**-iam. / Dir-**lhe**-ia. |

⚠️ Se houver atrator, usa-se próclise: Não **me** informarão.

#### 8.3 Ênclise (pronome DEPOIS do verbo)

É a colocação padrão quando não há atrator.

| Caso | Exemplo |
|------|---------|
| **Início de frase** | **Informaram-me** sobre a inspeção. |
| **Imperativo afirmativo** | **Entregue-me** os documentos. |
| **Gerúndio** | Estava **fiscalizando-os**. |
| **Infinitivo impessoal** | É necessário **informá-lo**. |

**⚠️ Nunca inicie frase com pronome átono!**
- ~~Me disseram~~ → Disseram-me / Eles me disseram
        `,

        pontosChave: [
          'Classes de palavras: 6 variáveis (substantivo, adjetivo, verbo, pronome, artigo, numeral) e 4 invariáveis (advérbio, preposição, conjunção, interjeição)',
          'Coordenação: orações independentes (aditiva, adversativa, alternativa, conclusiva, explicativa)',
          'Subordinação: orações dependentes (substantivas, adjetivas, adverbiais)',
          'Adjetiva restritiva (sem vírgula) × Adjetiva explicativa (com vírgula) = sentidos diferentes',
          'Vírgula: NUNCA entre sujeito e verbo; NUNCA entre verbo e complemento',
          'Concordância verbal: verbo concorda com sujeito em número e pessoa',
          'Concordância nominal: adjetivo concorda com substantivo em gênero e número',
          'Crase: antes de palavra feminina quando verbo exige "a" + artigo "a"',
          'Regência: assistir (ver) = VTI (a); assistir (ajudar) = VTD',
          'Colocação pronominal: próclise (atraidores), mesóclise (futuro sem atrator), ênclise (padrão)',
        ],

        armadilhas: [
          {
            titulo: 'Vírgula entre sujeito e verbo',
            descricao: 'Mesmo com sujeito longo, não se coloca vírgula entre ele e o verbo.',
            dica: 'Identifique o sujeito (quem pratica a ação) e o verbo. NUNCA separe-os com vírgula.',
          },
          {
            titulo: 'Confundir regência de ASSISTIR',
            descricao: '"Assistir" no sentido de ver exige preposição A. No sentido de ajudar, é transitivo direto.',
            dica: 'Assistir ao filme (ver) × Assistir o doente (ajudar).',
          },
          {
            titulo: 'Crase antes de masculino',
            descricao: 'NUNCA ocorre crase antes de palavra masculina.',
            dica: 'Se puder substituir "a" por "ao", não há crase. Ex: Fui a pé (ao pé? Não faz sentido).',
          },
          {
            titulo: 'Iniciar frase com pronome átono',
            descricao: 'Em português formal escrito, não se inicia frase com pronome átono.',
            dica: 'Me disseram (errado) → Disseram-me ou Eles me disseram (correto).',
          },
          {
            titulo: 'Adjetiva restritiva × explicativa',
            descricao: 'A presença ou ausência de vírgula muda completamente o sentido.',
            dica: 'Com vírgula = todos (explicativa). Sem vírgula = apenas alguns (restritiva).',
          },
        ],

        mnemonicos: [
          {
            termo: 'NAAPS',
            significado: 'Não, Advérbio, Apenas, Pronomes, Subordinativa',
            frase: 'NAAPS: palavras que atraem pronome para próclise',
          },
          {
            termo: 'VÊ-A',
            significado: 'Verbo que exige A + palavra feminina com Artigo A = crase',
            frase: 'Crase: VÊ se o verbo exige A + vê se a palavra aceita Artigo A',
          },
          {
            termo: 'A-A-C-E-C',
            significado: 'Aditiva, Adversativa, Conclusiva, Explicativa, alternativa (Coordenadas)',
            frase: 'As 5 coordenadas: AACEC (lembre-se do ABC)',
          },
          {
            termo: 'SuCAN',
            significado: 'Substantivas, Adjetivas, Adverbiais (Subordinadas)',
            frase: 'Subordinadas: SuCAN - Substantivas, Adjetivas, Adverbiais',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-4-1',
            frente: 'Quais são as classes de palavras VARIÁVEIS e INVARIÁVEIS?',
            verso: '**VARIÁVEIS (6):**\nSubstantivo, Adjetivo, Verbo, Pronome, Artigo, Numeral\n\n**INVARIÁVEIS (4):**\nAdvérbio, Preposição, Conjunção, Interjeição\n\n(Flexão em gênero, número e/ou grau)',
            tags: ['classes de palavras', 'morfologia'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-2',
            frente: 'Qual a diferença entre COORDENAÇÃO e SUBORDINAÇÃO?',
            verso: '**COORDENAÇÃO:**\nOrações sintaticamente INDEPENDENTES\nEx: Estudei **e** passei.\n\n**SUBORDINAÇÃO:**\nUma oração DEPENDE da outra\nEx: Espero **que** você passe.\n\n(O "que" introduz oração subordinada substantiva objetiva direta)',
            tags: ['coordenação', 'subordinação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-3',
            frente: 'Quais são os tipos de orações coordenadas?',
            verso: '**5 tipos:**\n\n1. **Aditiva**: e, nem, também\n2. **Adversativa**: mas, porém, contudo\n3. **Alternativa**: ou, ora...ora\n4. **Conclusiva**: logo, portanto\n5. **Explicativa**: pois, porque\n\nMnemônico: AACEC',
            tags: ['coordenadas', 'tipos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-4',
            frente: 'Qual a diferença entre adjetiva RESTRITIVA e EXPLICATIVA?',
            verso: '**RESTRITIVA (sem vírgula):**\nRestringe o sentido\n"Os fiscais que concluíram o curso já atuam."\n(Apenas ALGUNS fiscais)\n\n**EXPLICATIVA (com vírgula):**\nAdiciona informação\n"Os fiscais, que concluíram o curso, já atuam."\n(TODOS os fiscais)',
            tags: ['adjetivas', 'vírgula'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-5',
            frente: 'Quando USAR e NÃO USAR vírgula?',
            verso: '**USA vírgula:**\n- Separar termos de mesma função\n- Isolar aposto, vocativo\n- Adjunto adverbial deslocado\n- Separar orações coordenadas\n\n**NÃO USA vírgula:**\n- Entre sujeito e verbo\n- Entre verbo e complemento',
            tags: ['pontuação', 'vírgula'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-6',
            frente: 'Qual a regência do verbo ASSISTIR?',
            verso: '**ASSISTIR (ver) = VTI (a)**\nAssistir AO filme, AO jogo\n(O pronome correto é LHE)\n\n**ASSISTIR (ajudar) = VTD**\nAssistir O doente\n(O pronome correto é O/A)\n\n**ASSISTIR (caber, pertencer) = VTI (a)**\nEsse direito assiste AO réu.',
            tags: ['regência', 'assistir'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-7',
            frente: 'Quando ocorre CRASE?',
            verso: '**Crase = preposição A + artigo A**\n\n**OCORRE:**\n- Verbo exige A + palavra feminina com artigo\n- Locuções femininas: à noite, às vezes\n- Horas: às 14h\n- "À moda de": bife à milanesa\n\n**NÃO OCORRE:**\n- Antes de masculino, verbo, cidade sem determinante',
            tags: ['crase', 'regra'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-8',
            frente: 'Quais palavras ATRAEM o pronome para PRÓCLISE?',
            verso: '**Atratores de próclise:**\n\n- Palavras NEGATIVAS: não, nunca\n- ADVÉRBIOS: sempre, já\n- Conjunções SUBORDINATIVAS: que, se\n- Pronomes RELATIVOS: que, o qual\n- Pronomes INTERROGATIVOS: quem\n- Pronomes INDEFINIDOS: alguém\n\nMnemônico: NAAPS',
            tags: ['colocação pronominal', 'próclise'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-9',
            frente: 'Quando usar MESÓCLISE?',
            verso: '**Mesóclise = pronome no MEIO do verbo**\n\nSó com:\n- Futuro do PRESENTE: Dir-lhe-ei\n- Futuro do PRETÉRITO: Dir-lhe-ia\n\n**Condição:** sem atrator de próclise\n\nSe houver atrator:\nNão **lhe** direi (próclise)',
            tags: ['colocação pronominal', 'mesóclise'],
            dificuldade: 'dificil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-4-10',
            frente: 'Como funciona a concordância com expressões partitivas?',
            verso: '**Expressões partitivas:**\nA maioria de, grande parte de, metade de...\n\n**Regra:** Verbo pode concordar com:\n- O núcleo (singular): A maioria **votou**.\n- O especificador (plural): A maioria dos fiscais **votaram**.\n\nAmbas as formas são aceitas!',
            tags: ['concordância', 'partitivas'],
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
            id: 'lp-q-4-1',
            enunciado: 'Assinale a alternativa em que a vírgula está empregada CORRETAMENTE:',
            alternativas: [
              { letra: 'A', texto: 'O fiscal de saúde pública, verificou todos os documentos.' },
              { letra: 'B', texto: 'A inspeção sanitária, foi realizada na última semana.' },
              { letra: 'C', texto: 'Os estabelecimentos que não cumprirem as normas, serão notificados.' },
              { letra: 'D', texto: 'A ANVISA, órgão regulador federal, publicou nova resolução.' },
              { letra: 'E', texto: 'Verificamos, que houve irregularidades no estabelecimento.' },
            ],
            gabarito: 'D',
            justificativa: 'A vírgula está correta em D porque isola o aposto explicativo "órgão regulador federal". Nas demais alternativas, há vírgula indevida entre sujeito e verbo (A, B) ou entre verbo e complemento (C, E).',
            dificuldade: 'Média',
            competencia: 'Pontuação - vírgula',
            banca: 'IADES',
            tags: ['vírgula', 'pontuação'],
          },
          {
            id: 'lp-q-4-2',
            enunciado: 'No período "O fiscal verificou os documentos e aplicou a multa", a relação entre as orações é de:',
            alternativas: [
              { letra: 'A', texto: 'Subordinação substantiva.' },
              { letra: 'B', texto: 'Subordinação adverbial.' },
              { letra: 'C', texto: 'Coordenação aditiva.' },
              { letra: 'D', texto: 'Coordenação adversativa.' },
              { letra: 'E', texto: 'Subordinação adjetiva.' },
            ],
            gabarito: 'C',
            justificativa: 'A conjunção "e" estabelece relação de COORDENAÇÃO ADITIVA, somando duas ações. As orações são sintaticamente independentes.',
            dificuldade: 'Fácil',
            competencia: 'Coordenação entre orações',
            banca: 'IADES',
            tags: ['coordenação', 'aditiva'],
          },
          {
            id: 'lp-q-4-3',
            enunciado: 'Assinale a alternativa em que o emprego da crase está CORRETO:',
            alternativas: [
              { letra: 'A', texto: 'O fiscal foi à pé até o estabelecimento.' },
              { letra: 'B', texto: 'Entregamos o relatório à Vossa Excelência.' },
              { letra: 'C', texto: 'Referimo-nos à normas sanitárias vigentes.' },
              { letra: 'D', texto: 'A inspeção será realizada às 14h.' },
              { letra: 'E', texto: 'O produto estava à venda à prazo.' },
            ],
            gabarito: 'D',
            justificativa: 'Usa-se crase antes de horas determinadas: "às 14h". Não há crase: antes de masculino (a pé, a prazo), pronome de tratamento (Vossa Excelência), palavra no plural precedida de "a" no singular (a normas).',
            dificuldade: 'Média',
            competencia: 'Emprego da crase',
            banca: 'IADES',
            tags: ['crase', 'regência'],
          },
          {
            id: 'lp-q-4-4',
            enunciado: 'Quanto à regência verbal, assinale a alternativa CORRETA:',
            alternativas: [
              { letra: 'A', texto: 'Assistimos o julgamento do processo administrativo.' },
              { letra: 'B', texto: 'O fiscal aspirava o cargo de supervisor.' },
              { letra: 'C', texto: 'O estabelecimento obedeceu as normas sanitárias.' },
              { letra: 'D', texto: 'A inspeção visa à proteção da saúde pública.' },
              { letra: 'E', texto: 'Prefiro fiscalizar do que aplicar multas.' },
            ],
            gabarito: 'D',
            justificativa: '"Visar" no sentido de "objetivar/pretender" é VTI e exige preposição A: "visa à proteção". Erros: assistir (ver) = a + o julgamento; aspirar (desejar) = a + o cargo; obedecer = a + as normas; preferir = X a Y (não "do que").',
            dificuldade: 'Média',
            competencia: 'Regência verbal',
            banca: 'IADES',
            tags: ['regência', 'visar'],
          },
          {
            id: 'lp-q-4-5',
            enunciado: 'A concordância verbal está CORRETA em:',
            alternativas: [
              { letra: 'A', texto: 'Fazem cinco anos que trabalho na vigilância sanitária.' },
              { letra: 'B', texto: 'Houveram muitas irregularidades no estabelecimento.' },
              { letra: 'C', texto: 'A maioria dos fiscais concluíram o treinamento.' },
              { letra: 'D', texto: 'Deve haver problemas com a documentação.' },
              { letra: 'E', texto: 'Os Estados Unidos são um país grande.' },
            ],
            gabarito: 'D',
            justificativa: '"Haver" no sentido de existir é impessoal (não tem sujeito), ficando na 3ª pessoa do singular. A alternativa D está correta: "Deve haver" (haver auxiliado = invariável). Erros: faz (tempo = invariável), houve (existir = invariável), a maioria concluiu ou concluíram (ambos aceitos, mas C tem outra estrutura).',
            dificuldade: 'Média',
            competencia: 'Concordância verbal',
            banca: 'IADES',
            tags: ['concordância', 'haver'],
          },
          {
            id: 'lp-q-4-6',
            enunciado: 'Assinale a alternativa em que a colocação pronominal está de acordo com a norma culta:',
            alternativas: [
              { letra: 'A', texto: 'Me informaram sobre a nova resolução.' },
              { letra: 'B', texto: 'Ninguém informou-me sobre a inspeção.' },
              { letra: 'C', texto: 'Sempre me preocupo com a saúde pública.' },
              { letra: 'D', texto: 'Em tratando-se de fiscalização, sou rigoroso.' },
              { letra: 'E', texto: 'Não comunicaram-nos a decisão.' },
            ],
            gabarito: 'C',
            justificativa: 'O advérbio "sempre" atrai o pronome para próclise: "Sempre me preocupo". Erros: não se inicia frase com pronome átono (A); negação atrai próclise (B, E); "em" + gerúndio exige próclise (D = "Em se tratando").',
            dificuldade: 'Média',
            competencia: 'Colocação pronominal',
            banca: 'IADES',
            tags: ['próclise', 'ênclise'],
          },
          {
            id: 'lp-q-4-7',
            enunciado: 'No período "É necessário que os fiscais verifiquem os documentos", a oração sublinhada classifica-se como subordinada:',
            alternativas: [
              { letra: 'A', texto: 'Adjetiva restritiva.' },
              { letra: 'B', texto: 'Adverbial final.' },
              { letra: 'C', texto: 'Substantiva subjetiva.' },
              { letra: 'D', texto: 'Substantiva objetiva direta.' },
              { letra: 'E', texto: 'Adjetiva explicativa.' },
            ],
            gabarito: 'C',
            justificativa: 'A oração "que os fiscais verifiquem os documentos" funciona como SUJEITO da oração principal "É necessário". Portanto, é subordinada substantiva SUBJETIVA. (Pergunta: O que é necessário? Resposta: que os fiscais verifiquem...)',
            dificuldade: 'Média',
            competencia: 'Classificação de orações',
            banca: 'IADES',
            tags: ['subordinada', 'subjetiva'],
          },
          {
            id: 'lp-q-4-8',
            enunciado: 'Quanto à concordância nominal, assinale a alternativa CORRETA:',
            alternativas: [
              { letra: 'A', texto: 'Seguem anexo os documentos solicitados.' },
              { letra: 'B', texto: 'É proibido a entrada de pessoas não autorizadas.' },
              { letra: 'C', texto: 'Elas mesmo conferiram os relatórios.' },
              { letra: 'D', texto: 'Havia bastante irregularidades no estabelecimento.' },
              { letra: 'E', texto: 'Seguem anexos os documentos solicitados.' },
            ],
            gabarito: 'E',
            justificativa: '"Anexo" é adjetivo e concorda com o substantivo: documentos ANEXOS. Erros: anexo (sem concordância), é proibido com artigo exige concordância (é proibida a entrada), elas mesmas (concordância), bastantes irregularidades (concordância).',
            dificuldade: 'Média',
            competencia: 'Concordância nominal',
            banca: 'IADES',
            tags: ['concordância nominal', 'anexo'],
          },
          {
            id: 'lp-q-4-9',
            enunciado: 'Na frase "O estabelecimento foi notificado, mas não corrigiu as irregularidades", a conjunção "mas" estabelece relação de:',
            alternativas: [
              { letra: 'A', texto: 'Adição.' },
              { letra: 'B', texto: 'Explicação.' },
              { letra: 'C', texto: 'Conclusão.' },
              { letra: 'D', texto: 'Oposição.' },
              { letra: 'E', texto: 'Alternância.' },
            ],
            gabarito: 'D',
            justificativa: '"Mas" é conjunção coordenativa ADVERSATIVA, que estabelece relação de OPOSIÇÃO ou contraste entre as orações. Esperava-se que, após ser notificado, corrigisse as irregularidades, mas isso não ocorreu.',
            dificuldade: 'Fácil',
            competencia: 'Conjunções coordenativas',
            banca: 'IADES',
            tags: ['adversativa', 'oposição'],
          },
          {
            id: 'lp-q-4-10',
            enunciado: 'Em relação aos sinais de pontuação, assinale a alternativa CORRETA:',
            alternativas: [
              { letra: 'A', texto: 'Os dois-pontos são usados exclusivamente para introduzir citações.' },
              { letra: 'B', texto: 'O ponto e vírgula separa orações coordenadas extensas ou itens de enumeração complexa.' },
              { letra: 'C', texto: 'A vírgula deve sempre separar o sujeito do predicado.' },
              { letra: 'D', texto: 'O ponto de exclamação indica apenas surpresa.' },
              { letra: 'E', texto: 'As aspas são usadas apenas para palavras estrangeiras.' },
            ],
            gabarito: 'B',
            justificativa: 'O ponto e vírgula é usado para separar orações coordenadas extensas e itens de enumeração complexa. Erros: dois-pontos também introduzem explicações e enumerações; vírgula NUNCA separa sujeito do predicado; exclamação expressa várias emoções; aspas têm múltiplos usos.',
            dificuldade: 'Média',
            competencia: 'Pontuação',
            banca: 'IADES',
            tags: ['pontuação', 'ponto e vírgula'],
          },
        ],
      },
    },
    {
      id: 'lp-topico-5',
      numero: 5,
      titulo: 'Mecanismos de coesão textual',
      conteudo: {
        resumo: `
## Resumo Rápido - Coesão Textual

### O que é Coesão?
Ligação entre os elementos do texto através de recursos linguísticos que garantem a **conexão** e **continuidade** entre palavras, orações e parágrafos.

### Tipos de Coesão

| Tipo | Mecanismo | Exemplo |
|------|-----------|---------|
| **Referencial** | Retoma ou antecipa elementos | "O fiscal chegou. **Ele** verificou..." |
| **Sequencial** | Conectores e progressão | "Primeiro... depois... finalmente..." |
| **Lexical** | Substituição por sinônimos | "medicamento" → "fármaco" → "remédio" |

### Elementos de Referenciação

**ANAFÓRICA (retoma):**
- Pronomes: ele, ela, isso, aquilo
- Advérbios: lá, ali, então
- Sinônimos e hiperônimos

**CATAFÓRICA (antecipa):**
- "Digo isto: que o estabelecimento será interditado"

### Conectores (Sequenciação)

| Relação | Conectores |
|---------|------------|
| Adição | e, além disso, também, bem como |
| Oposição | mas, porém, contudo, entretanto |
| Causa | porque, pois, visto que, já que |
| Consequência | logo, portanto, assim, por isso |
| Condição | se, caso, desde que, contanto que |
| Tempo | quando, enquanto, assim que, após |
| Finalidade | para que, a fim de que |
| Conformidade | conforme, segundo, de acordo com |

### Tempos e Modos Verbais na Coesão

**Correlação Temporal:**
- Presente + Presente: "Quando fiscalizo, verifico tudo"
- Pretérito + Pretérito: "Quando fiscalizei, verifiquei tudo"
- Futuro do subjuntivo: "Quando fiscalizar, verificará"

**Modos Verbais:**
- **Indicativo**: certeza, fato
- **Subjuntivo**: dúvida, possibilidade, desejo
- **Imperativo**: ordem, pedido
        `,

        explicacao: `
## Explicação Didática - Coesão Textual

### 1. Diferença entre Coesão e Coerência

| Coesão | Coerência |
|--------|-----------|
| Ligação **gramatical** | Ligação **lógica/semântica** |
| Recursos linguísticos | Sentido do texto |
| Pode haver coesão sem coerência | Pode haver coerência sem coesão |

**Exemplo sem coerência (mas com coesão):**
"O fiscal chegou cedo. **Ele** trouxe o relatório. **Este** estava azul. **Azul** é a cor do céu. **O céu** estava nublado."
→ Tem coesão (pronomes, repetição), mas não faz sentido como texto.

### 2. Coesão Referencial

#### 2.1 Referência Anafórica
Retoma elemento **já mencionado** (olha para trás).

\`\`\`
"A empresa foi notificada. ELA deverá regularizar a situação."
         ↑__________________|
\`\`\`

**Elementos anafóricos:**
- Pronomes pessoais: ele, ela, eles, elas
- Pronomes demonstrativos: este, esse, aquele, isso, isto
- Pronomes relativos: que, o qual, cujo
- Advérbios: lá, ali, então, assim
- Sinônimos e hiperônimos

#### 2.2 Referência Catafórica
Antecipa elemento **que será mencionado** (olha para frente).

\`\`\`
"ISTO é certo: o estabelecimento será interditado."
    |___________________________↑
\`\`\`

#### 2.3 Referência Exofórica (Dêitica)
Referência a elementos **fora do texto**.

"**Nesta** cidade, a fiscalização é rigorosa." → cidade do contexto real

### 3. Substituição e Repetição

#### 3.1 Substituição
Evita repetição usando:
- **Sinônimos**: medicamento → fármaco → remédio
- **Hiperônimos**: cachorro → animal → ser vivo
- **Expressões nominais**: ANVISA → a agência → o órgão regulador
- **Pronomes**: O fiscal → ele → este

#### 3.2 Repetição
Usada com função **enfática** ou **coesiva**.

"A lei **é** a lei." (ênfase)
"O fiscal verificou os **documentos**. Os **documentos** estavam incompletos." (coesão)

### 4. Conectores (Elementos de Sequenciação)

#### 4.1 Conectores Coordenativos

| Tipo | Conectores | Exemplo |
|------|------------|---------|
| **Aditivos** | e, nem, também, além disso, bem como | "Fiscalizou **e** autuou" |
| **Adversativos** | mas, porém, contudo, todavia, entretanto | "Notificou, **mas** não interditou" |
| **Alternativos** | ou, ou...ou, quer...quer | "**Ou** regulariza **ou** é interditado" |
| **Conclusivos** | logo, portanto, assim, por isso | "Não regularizou, **portanto** foi multado" |
| **Explicativos** | pois, porque, que, porquanto | "Foi multado, **pois** descumpriu a norma" |

#### 4.2 Conectores Subordinativos

| Tipo | Conectores |
|------|------------|
| **Causais** | porque, visto que, já que, uma vez que |
| **Consecutivos** | que (após tão/tanto), de modo que |
| **Condicionais** | se, caso, desde que, contanto que |
| **Concessivos** | embora, ainda que, mesmo que, conquanto |
| **Temporais** | quando, enquanto, assim que, logo que |
| **Finais** | para que, a fim de que |
| **Comparativos** | como, tal qual, assim como |
| **Conformativos** | conforme, segundo, consoante |
| **Proporcionais** | à medida que, à proporção que, quanto mais |

### 5. Tempos Verbais e Coesão

#### 5.1 Correlação de Tempos

**No Indicativo:**
| Oração Principal | Oração Subordinada |
|-----------------|-------------------|
| Presente | Presente ou Pretérito |
| Pretérito Perfeito | Pretérito (qualquer) |
| Futuro | Presente ou Futuro do Subjuntivo |

**Exemplos:**
- "Sei que ele **fiscaliza**" (presente + presente)
- "Soube que ele **fiscalizou**" (pretérito + pretérito)
- "Saberá que ele **fiscaliza**" (futuro + presente)

#### 5.2 Modo Subjuntivo

| Tempo | Uso | Exemplo |
|-------|-----|---------|
| Presente | Possibilidade atual | "É possível que **fiscalize**" |
| Pretérito Imperfeito | Hipótese | "Se **fiscalizasse**, encontraria" |
| Futuro | Eventualidade | "Quando **fiscalizar**, verificará" |

#### 5.3 Correlação Modal

**Indicativo + Indicativo:**
"Quando o fiscal **chega**, **verifica** tudo."

**Subjuntivo + Indicativo:**
"Se o fiscal **chegasse**, **verificaria** tudo."
"Quando o fiscal **chegar**, **verificará** tudo."

### 6. Outros Elementos de Sequenciação

#### 6.1 Operadores Argumentativos
- **Hierarquia**: primeiramente, em primeiro lugar, por fim
- **Ênfase**: sobretudo, principalmente, especialmente
- **Inclusão**: inclusive, também, até mesmo
- **Exclusão**: exceto, salvo, senão

#### 6.2 Articuladores Discursivos
- **Introdução**: inicialmente, a princípio
- **Continuação**: além disso, ademais, outrossim
- **Conclusão**: em suma, em síntese, portanto
- **Retificação**: aliás, ou melhor, isto é
        `,

        pontosChave: [
          'Coesão: ligação gramatical entre elementos do texto',
          'Coerência: ligação lógica e semântica (sentido)',
          'Anáfora: retoma elemento JÁ mencionado (olha para trás)',
          'Catáfora: antecipa elemento (olha para frente)',
          'Conectores adversativos: mas, porém, contudo, todavia, entretanto',
          'Conectores conclusivos: logo, portanto, assim, por isso',
          'Correlação verbal: tempos devem estar em harmonia',
          'Futuro do subjuntivo com "quando": quando fiscalizar, verificará',
          'Subjuntivo: dúvida, possibilidade, hipótese, desejo',
          'Indicativo: certeza, fato concreto',
        ],

        armadilhas: [
          {
            titulo: 'Confundir coesão com coerência',
            descricao: 'Coesão é gramatical (ligação de palavras). Coerência é lógica (sentido).',
            dica: 'Coesão = cola das palavras. Coerência = lógica do texto.',
          },
          {
            titulo: 'Usar "onde" para qualquer retomada',
            descricao: '"Onde" retoma apenas LUGAR. Para outros casos: em que, no qual.',
            dica: 'ONDE = lugar físico. "A lei onde..." está ERRADO.',
          },
          {
            titulo: 'Confundir anáfora com catáfora',
            descricao: 'Anáfora olha para TRÁS (retoma). Catáfora olha para FRENTE (antecipa).',
            dica: 'Ana-fora: ANA vai para trás. Cata-fora: CATA algo à frente.',
          },
          {
            titulo: 'Errar correlação com futuro do subjuntivo',
            descricao: 'Quando + futuro do subjuntivo exige futuro do indicativo na principal.',
            dica: 'Quando fiscalizar (subj.) → verificará (ind.)',
          },
        ],

        mnemonicos: [
          {
            termo: 'MOPE',
            significado: 'Mas, Ora, Porém, Entretanto',
            frase: 'Conectores adversativos: MOPE e variações',
          },
          {
            termo: 'LAPA',
            significado: 'Logo, Assim, Portanto, Assim sendo',
            frase: 'Conectores conclusivos: LAPA',
          },
          {
            termo: 'ANA-TRÁS',
            significado: 'Anáfora retoma elemento anterior',
            frase: 'ANA vai para TRÁS (olha para trás)',
          },
          {
            termo: 'CATA-FRENTE',
            significado: 'Catáfora antecipa elemento posterior',
            frase: 'CATA algo na FRENTE (olha para frente)',
          },
          {
            termo: 'SID',
            significado: 'Suposição, Incerteza, Desejo',
            frase: 'Subjuntivo = SID (dúvida, hipótese, desejo)',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-5-1',
            frente: 'Qual a diferença entre COESÃO e COERÊNCIA?',
            verso: '**COESÃO:**\nLigação gramatical (conectores, pronomes)\nMecanismos linguísticos\n\n**COERÊNCIA:**\nLigação lógica (sentido)\nRelação semântica\n\nPode haver um sem o outro!',
            tags: ['coesão', 'coerência'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-2',
            frente: 'O que é referência ANAFÓRICA?',
            verso: '**ANÁFORA:**\nRetoma elemento JÁ MENCIONADO\n(olha para TRÁS)\n\nExemplo:\n"O fiscal chegou. ELE verificou..."\n         ↑_________|',
            tags: ['anáfora', 'referenciação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-3',
            frente: 'O que é referência CATAFÓRICA?',
            verso: '**CATÁFORA:**\nANTECIPA elemento que SERÁ MENCIONADO\n(olha para FRENTE)\n\nExemplo:\n"ISTO é certo: será interditado."\n   |___________________↑',
            tags: ['catáfora', 'referenciação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-4',
            frente: 'Quais são os principais conectores ADVERSATIVOS?',
            verso: '**ADVERSATIVOS (oposição):**\n\n- Mas\n- Porém\n- Contudo\n- Todavia\n- Entretanto\n- No entanto\n\nMnemônico: MOPE',
            tags: ['conectores', 'adversativos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-5',
            frente: 'Quais são os principais conectores CONCLUSIVOS?',
            verso: '**CONCLUSIVOS (conclusão):**\n\n- Logo\n- Portanto\n- Assim\n- Por isso\n- Por conseguinte\n- Dessa forma\n\nMnemônico: LAPA',
            tags: ['conectores', 'conclusivos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-6',
            frente: 'Qual a diferença entre conectores CAUSAIS e EXPLICATIVOS?',
            verso: '**CAUSAIS:**\nIntroduzem a CAUSA do fato\n"Não foi aprovado PORQUE não estudou"\n(ordem: consequência → causa)\n\n**EXPLICATIVOS:**\nExplicam uma afirmação anterior\n"Estudou muito, POIS será aprovado"\n(ordem: causa → consequência/justificativa)',
            tags: ['causais', 'explicativos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-7',
            frente: 'Quando usar o FUTURO DO SUBJUNTIVO?',
            verso: '**Futuro do Subjuntivo:**\nEventualidade, possibilidade futura\n\n**Estrutura:**\n- QUANDO + fut. subj. → fut. indicativo\n- SE + fut. subj. → fut. indicativo\n\n**Exemplos:**\n- "Quando FISCALIZAR, verificará"\n- "Se CHEGAR cedo, começará"',
            tags: ['subjuntivo', 'futuro'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-8',
            frente: 'O que são HIPERÔNIMOS e HIPÔNIMOS?',
            verso: '**HIPERÔNIMO:**\nTermo mais AMPLO/GERAL\nExemplo: "animal", "veículo"\n\n**HIPÔNIMO:**\nTermo mais ESPECÍFICO\nExemplo: "cachorro", "carro"\n\n**Relação:**\nAnimal > Cachorro\nVeículo > Carro\n\nUsados para substituição e coesão.',
            tags: ['hiperônimo', 'hipônimo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-9',
            frente: 'Qual a correlação verbal correta com "SE" (condicional)?',
            verso: '**SE + Pretérito Imperfeito do Subjuntivo:**\n→ Futuro do Pretérito\n\n"Se FISCALIZASSE, ENCONTRARIA"\n\n**SE + Futuro do Subjuntivo:**\n→ Futuro do Presente\n\n"Se FISCALIZAR, ENCONTRARÁ"\n\n**SE + Presente do Subjuntivo:**\n→ Presente/Futuro\n\n"Se FISCALIZE, PODE/PODERÁ..."',
            tags: ['correlação', 'condicional'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-5-10',
            frente: 'Quais são os três MODOS VERBAIS e seus usos?',
            verso: '**INDICATIVO:**\nCerteza, fato concreto\n"O fiscal VERIFICA os documentos"\n\n**SUBJUNTIVO:**\nDúvida, possibilidade, desejo\n"É possível que ele VERIFIQUE"\n\n**IMPERATIVO:**\nOrdem, pedido, conselho\n"VERIFIQUE os documentos!"',
            tags: ['modos verbais'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'lp-q-5-1',
            enunciado: 'No trecho "O estabelecimento foi notificado. Ele deverá regularizar a situação", o pronome "Ele" estabelece uma referência:',
            alternativas: [
              { letra: 'A', texto: 'Catafórica, pois antecipa o termo seguinte.' },
              { letra: 'B', texto: 'Anafórica, pois retoma um termo anterior.' },
              { letra: 'C', texto: 'Exofórica, pois se refere a elemento externo ao texto.' },
              { letra: 'D', texto: 'Lexical, pois substitui por sinônimo.' },
              { letra: 'E', texto: 'Elíptica, pois omite o referente.' },
            ],
            gabarito: 'B',
            justificativa: 'O pronome "Ele" RETOMA "O estabelecimento", que foi mencionado anteriormente. Isso caracteriza referência ANAFÓRICA (olha para trás).',
            dificuldade: 'Fácil',
            competencia: 'Referenciação',
            banca: 'IADES',
            tags: ['anáfora', 'pronome'],
          },
          {
            id: 'lp-q-5-2',
            enunciado: 'A conjunção "entretanto" estabelece, entre as orações, uma relação de:',
            alternativas: [
              { letra: 'A', texto: 'Adição.' },
              { letra: 'B', texto: 'Conclusão.' },
              { letra: 'C', texto: 'Oposição.' },
              { letra: 'D', texto: 'Explicação.' },
              { letra: 'E', texto: 'Condição.' },
            ],
            gabarito: 'C',
            justificativa: '"Entretanto" é conjunção coordenativa ADVERSATIVA, que estabelece relação de OPOSIÇÃO ou contraste. Equivale a: mas, porém, contudo, todavia.',
            dificuldade: 'Fácil',
            competencia: 'Conectores',
            banca: 'IADES',
            tags: ['adversativa', 'conectores'],
          },
          {
            id: 'lp-q-5-3',
            enunciado: 'No período "Quando o fiscal chegar, verificará os documentos", a forma verbal "chegar" está no:',
            alternativas: [
              { letra: 'A', texto: 'Presente do indicativo.' },
              { letra: 'B', texto: 'Pretérito perfeito do indicativo.' },
              { letra: 'C', texto: 'Futuro do presente do indicativo.' },
              { letra: 'D', texto: 'Presente do subjuntivo.' },
              { letra: 'E', texto: 'Futuro do subjuntivo.' },
            ],
            gabarito: 'E',
            justificativa: '"Quando + verbo" em referência a evento futuro exige FUTURO DO SUBJUNTIVO. "Chegar" está flexionado nesse tempo, indicando eventualidade futura.',
            dificuldade: 'Média',
            competencia: 'Tempos verbais',
            banca: 'IADES',
            tags: ['subjuntivo', 'futuro'],
          },
          {
            id: 'lp-q-5-4',
            enunciado: 'A coesão textual por substituição ocorre quando:',
            alternativas: [
              { letra: 'A', texto: 'Há repetição excessiva de termos.' },
              { letra: 'B', texto: 'Um termo é substituído por pronome, sinônimo ou hiperônimo.' },
              { letra: 'C', texto: 'Conectores ligam orações coordenadas.' },
              { letra: 'D', texto: 'Há elipse de termos redundantes.' },
              { letra: 'E', texto: 'O texto apresenta contradições.' },
            ],
            gabarito: 'B',
            justificativa: 'A substituição é um mecanismo de coesão referencial em que um termo é substituído por pronome, sinônimo, hiperônimo ou expressão equivalente para evitar repetição.',
            dificuldade: 'Fácil',
            competencia: 'Coesão referencial',
            banca: 'IADES',
            tags: ['substituição', 'coesão'],
          },
          {
            id: 'lp-q-5-5',
            enunciado: 'Assinale a alternativa em que há ERRO de correlação verbal:',
            alternativas: [
              { letra: 'A', texto: 'Se ele fiscalizasse, encontraria irregularidades.' },
              { letra: 'B', texto: 'Quando ele fiscalizar, encontrará irregularidades.' },
              { letra: 'C', texto: 'Se ele fiscalizar, encontrará irregularidades.' },
              { letra: 'D', texto: 'Se ele fiscalizasse, encontrará irregularidades.' },
              { letra: 'E', texto: 'Caso ele fiscalize, encontrará irregularidades.' },
            ],
            gabarito: 'D',
            justificativa: 'A correlação correta é: SE + pretérito imperfeito do subjuntivo (fiscalizasse) → futuro do pretérito (encontraria), NÃO futuro do presente (encontrará).',
            dificuldade: 'Média',
            competencia: 'Correlação verbal',
            banca: 'IADES',
            tags: ['correlação', 'subjuntivo'],
          },
          {
            id: 'lp-q-5-6',
            enunciado: 'No período "O medicamento foi apreendido, pois estava vencido", a conjunção "pois" introduz uma oração:',
            alternativas: [
              { letra: 'A', texto: 'Coordenada explicativa.' },
              { letra: 'B', texto: 'Coordenada conclusiva.' },
              { letra: 'C', texto: 'Subordinada causal.' },
              { letra: 'D', texto: 'Subordinada condicional.' },
              { letra: 'E', texto: 'Coordenada adversativa.' },
            ],
            gabarito: 'A',
            justificativa: 'Neste contexto, "pois" introduz uma EXPLICAÇÃO para a afirmação anterior (por que foi apreendido). É coordenada explicativa. Se "pois" viesse antes do verbo ou introduzisse a CAUSA, seria subordinada causal.',
            dificuldade: 'Média',
            competencia: 'Conjunções',
            banca: 'IADES',
            tags: ['explicativa', 'pois'],
          },
          {
            id: 'lp-q-5-7',
            enunciado: 'A referência CATAFÓRICA ocorre no seguinte exemplo:',
            alternativas: [
              { letra: 'A', texto: 'O fiscal chegou. Ele verificou os documentos.' },
              { letra: 'B', texto: 'A empresa regularizou a situação. Isso evitou a multa.' },
              { letra: 'C', texto: 'Disse-lhe isto: que o estabelecimento seria interditado.' },
              { letra: 'D', texto: 'O medicamento venceu. Por isso, foi apreendido.' },
              { letra: 'E', texto: 'A ANVISA fiscalizou. A agência encontrou irregularidades.' },
            ],
            gabarito: 'C',
            justificativa: 'Em "Disse-lhe isto: que o estabelecimento seria interditado", o pronome "isto" ANTECIPA o conteúdo que será dito (catáfora = olha para frente).',
            dificuldade: 'Média',
            competencia: 'Catáfora',
            banca: 'IADES',
            tags: ['catáfora', 'referenciação'],
          },
          {
            id: 'lp-q-5-8',
            enunciado: 'Na frase "Embora tenha sido notificado, o estabelecimento não regularizou a situação", a conjunção "embora" estabelece relação de:',
            alternativas: [
              { letra: 'A', texto: 'Causa.' },
              { letra: 'B', texto: 'Condição.' },
              { letra: 'C', texto: 'Concessão.' },
              { letra: 'D', texto: 'Comparação.' },
              { letra: 'E', texto: 'Consequência.' },
            ],
            gabarito: 'C',
            justificativa: '"Embora" é conjunção subordinativa CONCESSIVA. Indica que, APESAR de ter sido notificado (concessão), não regularizou. Outras concessivas: ainda que, mesmo que, conquanto.',
            dificuldade: 'Fácil',
            competencia: 'Conjunções concessivas',
            banca: 'IADES',
            tags: ['concessiva', 'embora'],
          },
          {
            id: 'lp-q-5-9',
            enunciado: 'O modo SUBJUNTIVO expressa:',
            alternativas: [
              { letra: 'A', texto: 'Certeza e fato consumado.' },
              { letra: 'B', texto: 'Ordem direta ao interlocutor.' },
              { letra: 'C', texto: 'Dúvida, possibilidade, desejo ou hipótese.' },
              { letra: 'D', texto: 'Ação habitual no passado.' },
              { letra: 'E', texto: 'Narração de eventos históricos.' },
            ],
            gabarito: 'C',
            justificativa: 'O modo SUBJUNTIVO expressa dúvida, possibilidade, desejo, hipótese ou ação incerta. "É possível que ele VENHA" (dúvida). "Desejo que você PASSE" (desejo).',
            dificuldade: 'Fácil',
            competencia: 'Modo subjuntivo',
            banca: 'IADES',
            tags: ['subjuntivo', 'modos verbais'],
          },
          {
            id: 'lp-q-5-10',
            enunciado: 'Quanto ao emprego de "onde", assinale a alternativa CORRETA:',
            alternativas: [
              { letra: 'A', texto: '"A lei onde dispõe sobre vigilância sanitária foi alterada."' },
              { letra: 'B', texto: '"O momento onde a fiscalização ocorreu foi crítico."' },
              { letra: 'C', texto: '"O estabelecimento onde ocorreu a fiscalização foi interditado."' },
              { letra: 'D', texto: '"A situação onde o fiscal se encontrava era difícil."' },
              { letra: 'E', texto: '"O processo onde se discute a multa está em andamento."' },
            ],
            gabarito: 'C',
            justificativa: '"Onde" deve ser usado apenas para retomar LUGAR FÍSICO. Em "O estabelecimento onde ocorreu a fiscalização", "estabelecimento" é lugar físico, portanto correto. Nas demais, deveria ser "em que" ou "no qual".',
            dificuldade: 'Média',
            competencia: 'Uso de onde',
            banca: 'IADES',
            tags: ['onde', 'pronome relativo'],
          },
        ],
      },
    },
    {
      id: 'lp-topico-6',
      numero: 6,
      titulo: 'Reescrita de frases e parágrafos do texto',
      conteudo: {
        resumo: `
## Resumo Rápido

A **reescrita de frases e parágrafos** é uma das competências mais cobradas pela banca IADES. Exige domínio de:

### Habilidades Essenciais

| Habilidade | O que é | Exemplo |
|------------|---------|---------|
| **Significação** | Entender o sentido das palavras no contexto | "Fiscalizar" vs "Inspecionar" |
| **Substituição** | Trocar palavras mantendo o sentido | "Porém" por "Contudo" |
| **Reorganização** | Alterar a ordem sem mudar o significado | Inversão de orações |
| **Reescrita** | Adaptar o texto a outro gênero/registro | Formal para informal |

### Tipos de Questões IADES

1. **Manutenção de sentido**: "A substituição de X por Y mantém o sentido?"
2. **Correção gramatical**: "A reescrita está gramaticalmente correta?"
3. **Equivalência semântica**: "Qual alternativa equivale ao trecho?"
4. **Adequação de registro**: "Qual versão é mais formal/adequada?"

### Cuidados na Reescrita

- Verificar se o sentido foi mantido (não basta estar correto gramaticalmente)
- Observar a concordância após alterações
- Verificar regência após substituições
- Manter coerência com o contexto original
        `,

        explicacao: `
## Explicação Didática

### 1. Significação das Palavras (Semântica)

#### 1.1 Sinonímia e Paronímia

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| **Sinônimos** | Palavras com sentido semelhante | fiscalizar = inspecionar |
| **Parônimos** | Palavras parecidas, sentidos diferentes | ratificar ≠ retificar |
| **Homônimos** | Mesma grafia/som, sentidos diferentes | manga (fruta) vs manga (roupa) |
| **Antônimos** | Sentidos opostos | aprovar vs reprovar |

#### 1.2 Denotação vs Conotação

| Tipo | Significado | Exemplo |
|------|-------------|---------|
| **Denotação** | Sentido literal, dicionário | "O fiscal examinou os documentos" |
| **Conotação** | Sentido figurado, metafórico | "O relatório é uma bomba" |

⚠️ **Atenção IADES**: A banca frequentemente troca palavras parônimas para criar alternativas incorretas!

**Parônimos mais cobrados:**
- **Ratificar** (confirmar) vs **Retificar** (corrigir)
- **Descrição** (ato de descrever) vs **Discrição** (reserva, prudência)
- **Eminente** (ilustre) vs **Iminente** (prestes a acontecer)
- **Infligir** (aplicar pena) vs **Infringir** (violar norma)
- **Prescrever** (ordenar, caducar) vs **Proscrever** (banir)
- **Deferir** (conceder) vs **Diferir** (adiar, divergir)
- **Tráfego** (trânsito) vs **Tráfico** (comércio ilegal)
- **Comprimento** (extensão) vs **Cumprimento** (saudação, execução)

#### 1.3 Polissemia

Uma palavra com **vários sentidos** relacionados no mesmo contexto linguístico.

Exemplo: **"A fiscalização sanitária deve operar com transparência"**
- "Operar" pode significar: funcionar, realizar operação cirúrgica, atuar

A escolha depende do **contexto**!

### 2. Substituição de Palavras ou Trechos

#### 2.1 Regras para Substituição Válida

Para que uma substituição seja válida, deve:
1. **Manter o sentido** original
2. **Preservar a correção gramatical**
3. **Manter a coerência** com o restante do texto

#### 2.2 Conectivos Equivalentes

| Relação | Conectivos Equivalentes |
|---------|------------------------|
| **Oposição** | mas, porém, contudo, todavia, entretanto, no entanto |
| **Conclusão** | portanto, logo, assim, por conseguinte, então |
| **Explicação** | pois, porque, porquanto, já que, visto que |
| **Adição** | e, nem, também, além disso, ademais |
| **Condição** | se, caso, desde que, contanto que |
| **Concessão** | embora, conquanto, ainda que, mesmo que |
| **Finalidade** | para que, a fim de que, com o intuito de |
| **Proporção** | à medida que, à proporção que, quanto mais...mais |
| **Tempo** | quando, enquanto, assim que, logo que |

#### 2.3 Expressões de Referência

| Tipo | Exemplo | Substituto |
|------|---------|------------|
| **Pronome** | "O estabelecimento foi interditado. **Ele** não atendeu às normas" | O estabelecimento |
| **Sinônimo** | "O fiscal verificou... O **inspetor** constatou..." | fiscal = inspetor |
| **Hiperônimo** | "O restaurante foi fechado. O **estabelecimento**..." | restaurante → estabelecimento |
| **Expressão** | "A ANVISA determinou... **A agência reguladora**..." | ANVISA = agência reguladora |

### 3. Reorganização da Estrutura de Orações e Períodos

#### 3.1 Inversão de Orações

A ordem das orações pode ser alterada **desde que mantida a relação lógica**.

**Original**: "Embora estivesse irregular, o estabelecimento continuou funcionando."
**Reorganizado**: "O estabelecimento continuou funcionando, embora estivesse irregular."

⚠️ **Cuidado com a pontuação!** Orações subordinadas ANTES da principal = vírgula obrigatória.

#### 3.2 Voz Verbal

| Voz Ativa | Voz Passiva |
|-----------|-------------|
| "O fiscal **interditou** o restaurante" | "O restaurante **foi interditado** pelo fiscal" |
| "A ANVISA **aplica** multas" | "Multas **são aplicadas** pela ANVISA" |

**Regras da transformação:**
- Objeto direto da ativa → sujeito da passiva
- Sujeito da ativa → agente da passiva (com "por/pelo")
- Verbo: ser + particípio

**Voz Passiva Sintética:**
- "Interditou-se o restaurante" = "O restaurante foi interditado"
- "Aplicam-se multas" = "Multas são aplicadas"

#### 3.3 Mudança de Período (Simples ↔ Composto)

**Período Simples** (oração reduzida):
> "Ao verificar a irregularidade, o fiscal lavrou o auto."

**Período Composto** (oração desenvolvida):
> "Quando verificou a irregularidade, o fiscal lavrou o auto."

| Forma Reduzida | Forma Desenvolvida |
|----------------|-------------------|
| Ao + infinitivo | Quando + indicativo |
| Verificando | Enquanto verificava |
| Verificado | Depois que foi verificado |
| Para verificar | Para que verificasse |

### 4. Reescrita de Textos de Diferentes Gêneros e Níveis de Formalidade

#### 4.1 Níveis de Linguagem

| Nível | Características | Uso |
|-------|-----------------|-----|
| **Formal/Culto** | Norma padrão, vocabulário técnico | Documentos oficiais, relatórios |
| **Coloquial** | Descontração, gírias moderadas | Conversas cotidianas |
| **Regional** | Expressões locais, sotaque | Comunicação regional |
| **Técnico** | Jargões específicos | Textos especializados (VISA, jurídico) |

#### 4.2 Adaptação de Gêneros

**Texto Normativo → Texto Informativo:**

**Original (normativo/legal):**
> "Art. 8º Fica vedada a comercialização de produtos sem o devido registro no órgão competente."

**Reescrito (informativo):**
> "É proibido vender produtos que não tenham registro na agência responsável pela fiscalização."

#### 4.3 Formalidade em Textos Oficiais

**Características do texto formal:**
- Uso de 3ª pessoa ou 1ª pessoa do plural
- Evitar contrações (de + o = do → "de o" em casos formais específicos)
- Vocabulário técnico adequado
- Frases completas e bem estruturadas
- Evitar gírias e expressões coloquiais

**Expressões Formais vs Informais:**

| Informal | Formal |
|----------|--------|
| a gente vai | iremos / vamos |
| pra | para |
| tá | está |
| num | em um |
| né | não é |
| daí | então / em seguida |

### 5. Técnicas de Reescrita para Provas IADES

#### 5.1 Checklist de Verificação

Ao analisar uma reescrita, verifique:

1. ✅ **Sentido mantido?** (mais importante!)
2. ✅ **Concordância verbal correta?**
3. ✅ **Concordância nominal correta?**
4. ✅ **Regência verbal adequada?**
5. ✅ **Pontuação correta?**
6. ✅ **Coerência com o contexto?**

#### 5.2 Erros Comuns em Reescritas

| Erro | Exemplo Incorreto | Correção |
|------|-------------------|----------|
| **Concordância** | "Foram aplicado multas" | "Foram aplicadas multas" |
| **Regência** | "A lei que se refere" | "A lei a que se refere" |
| **Crase** | "Referente a inspeção" | "Referente à inspeção" |
| **Colocação pronominal** | "Interditou-se estabelecimentos" | "Interditaram-se estabelecimentos" |

### 6. Exemplos Práticos - Vigilância Sanitária

#### Exemplo 1: Substituição de Conectivos

**Original:**
> "O estabelecimento foi notificado, **mas** não regularizou a situação."

**Equivalentes corretos:**
- "...notificado, **porém** não regularizou..."
- "...notificado, **contudo** não regularizou..."
- "...notificado, **entretanto** não regularizou..."

**Incorreto:**
- "...notificado, **portanto** não regularizou..." (ERRADO - "portanto" é conclusivo, não adversativo)

#### Exemplo 2: Mudança de Voz

**Ativa:**
> "A vigilância sanitária interditou o restaurante."

**Passiva Analítica:**
> "O restaurante foi interditado pela vigilância sanitária."

**Passiva Sintética:**
> "Interditou-se o restaurante."

#### Exemplo 3: Reorganização de Período

**Original:**
> "Verificada a irregularidade, o fiscal lavrou o auto de infração."

**Reorganizações válidas:**
- "O fiscal lavrou o auto de infração após verificar a irregularidade."
- "Depois que verificou a irregularidade, o fiscal lavrou o auto de infração."
- "O fiscal, tendo verificado a irregularidade, lavrou o auto de infração."
        `,

        pontosChave: [
          'Sinônimos mantêm o sentido; parônimos são parecidos mas têm sentidos diferentes (ratificar ≠ retificar)',
          'Denotação = sentido literal; Conotação = sentido figurado',
          'Conectivos adversativos (mas, porém, contudo) são intercambiáveis entre si',
          'Conectivos adversativos NÃO equivalem a conclusivos (portanto, logo)',
          'Na mudança de voz: objeto da ativa → sujeito da passiva',
          'Oração subordinada ANTES da principal exige vírgula',
          'Voz passiva sintética: verbo + SE (interditou-se, aplicam-se)',
          'Na reescrita, o SENTIDO é mais importante que apenas a correção gramatical',
          'Formas reduzidas: ao + infinitivo, gerúndio, particípio',
          'Verificar sempre: sentido, concordância, regência, pontuação e coerência',
        ],

        armadilhas: [
          {
            titulo: 'Conectivo adversativo por conclusivo',
            descricao: 'A banca troca "mas" por "portanto", que muda completamente o sentido.',
            dica: 'Mas/porém/contudo = oposição. Portanto/logo/assim = conclusão. Não são equivalentes!',
          },
          {
            titulo: 'Parônimos como sinônimos',
            descricao: 'Trocar "ratificar" (confirmar) por "retificar" (corrigir) invalida a reescrita.',
            dica: 'Decorar os parônimos mais cobrados: ratificar/retificar, eminente/iminente, deferir/diferir.',
          },
          {
            titulo: 'Voz passiva com concordância errada',
            descricao: 'Esquecer de concordar o particípio: "Foi aplicado multas" (errado).',
            dica: 'Na voz passiva, o particípio concorda com o sujeito: "Foram aplicadas multas".',
          },
          {
            titulo: 'Perda de sentido em reorganização',
            descricao: 'Reorganizar a frase de forma que altere a relação lógica original.',
            dica: 'Após reorganizar, releia verificando se o sentido original foi mantido.',
          },
          {
            titulo: 'Vírgula na inversão de orações',
            descricao: 'Esquecer a vírgula quando a subordinada vem antes da principal.',
            dica: 'Subordinada + principal = vírgula obrigatória. Principal + subordinada = vírgula facultativa.',
          },
        ],

        mnemonicos: [
          {
            termo: 'RATI = CONFIRMA',
            significado: 'Ratificar = Confirmar (rati começa igual a "ratifico que é verdade")',
            frase: 'RATIfico que é verdade = CONFIRMO. RETIfico o erro = CORRIJO.',
          },
          {
            termo: 'MAPCT',
            significado: 'Mas, Ainda assim, Porém, Contudo, Todavia',
            frase: 'MAPCT = Todos são adversativos (oposição) e equivalentes entre si.',
          },
          {
            termo: 'PLAça',
            significado: 'Portanto, Logo, Assim',
            frase: 'Na PLAça da conclusão: portanto, logo, assim = todos conclusivos.',
          },
          {
            termo: 'VOZ: ODS→SUP',
            significado: 'Objeto Direto da Ativa → Sujeito da Passiva',
            frase: 'Para converter voz: ODS vira SUP (objeto vira sujeito).',
          },
          {
            termo: 'SRCPC',
            significado: 'Sentido, Regência, Concordância, Pontuação, Coerência',
            frase: 'Na reescrita, verifique SRCPC: Sentido primeiro, depois o resto.',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-6-1',
            frente: 'Qual a diferença entre RATIFICAR e RETIFICAR?',
            verso: '**RATIFICAR** = CONFIRMAR, validar\n"Ratifico minha decisão"\n\n**RETIFICAR** = CORRIGIR, emendar\n"Retifico o erro no documento"\n\nDica: RATIfico = confirmo que é veRdade. RETIfico = corrijo o erro.',
            tags: ['parônimos', 'significação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-2',
            frente: 'Quais conectivos são EQUIVALENTES a "mas"?',
            verso: '**Conectivos ADVERSATIVOS (oposição):**\n\n• Mas\n• Porém\n• Contudo\n• Todavia\n• Entretanto\n• No entanto\n\nTodos expressam OPOSIÇÃO e podem ser trocados entre si.\n\n⚠️ "Portanto" NÃO é equivalente (é conclusivo)!',
            tags: ['conectivos', 'substituição'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-3',
            frente: 'Como transformar voz ATIVA em voz PASSIVA?',
            verso: '**Regra da transformação:**\n\n1. Objeto direto da ativa → SUJEITO da passiva\n2. Sujeito da ativa → AGENTE da passiva (por/pelo)\n3. Verbo: SER + PARTICÍPIO\n\n**Exemplo:**\n• Ativa: "O fiscal interditou o restaurante"\n• Passiva: "O restaurante foi interditado pelo fiscal"\n\n⚠️ Concordar o particípio com o novo sujeito!',
            tags: ['voz verbal', 'reorganização'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-4',
            frente: 'O que é VOZ PASSIVA SINTÉTICA?',
            verso: '**Voz Passiva Sintética:**\nVerbo + SE (partícula apassivadora)\n\n**Exemplos:**\n• "Interditou-se o restaurante" = O restaurante foi interditado\n• "Aplicam-se multas" = Multas são aplicadas\n• "Vendem-se medicamentos" = Medicamentos são vendidos\n\n⚠️ O verbo concorda com o sujeito paciente!\n"Aplicam-se multas" (multas = plural)',
            tags: ['voz passiva', 'sintética'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-5',
            frente: 'Quando usar vírgula na inversão de orações?',
            verso: '**Regra da vírgula:**\n\n✅ **Subordinada ANTES da principal = VÍRGULA OBRIGATÓRIA**\n"Quando o fiscal chegou, verificou os documentos."\n\n❓ **Principal ANTES da subordinada = VÍRGULA FACULTATIVA**\n"Verificou os documentos quando o fiscal chegou."\n\n**Resumo:**\nSubordinada + principal → vírgula obrigatória\nPrincipal + subordinada → vírgula facultativa',
            tags: ['pontuação', 'vírgula'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-6',
            frente: 'Qual a diferença entre EMINENTE e IMINENTE?',
            verso: '**EMINENTE** = ilustre, notável, elevado\n"O eminente professor recebeu homenagem"\n\n**IMINENTE** = prestes a acontecer\n"O prazo está iminente" (vai vencer logo)\n\n**Dica:**\n• EmInente = Ilustre (pessoa importante)\n• ImInente = Imediato (vai acontecer)',
            tags: ['parônimos', 'significação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-7',
            frente: 'Como converter oração REDUZIDA em DESENVOLVIDA?',
            verso: '**Formas Reduzidas → Desenvolvidas:**\n\n| Reduzida | Desenvolvida |\n|----------|-------------|\n| Ao verificar | Quando verificou |\n| Verificando | Enquanto verificava |\n| Verificado | Depois que foi verificado |\n| Para verificar | Para que verificasse |\n\n**Exemplo:**\n• "Ao chegar, assinou" → "Quando chegou, assinou"',
            tags: ['orações', 'reorganização'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-8',
            frente: 'Qual a diferença entre DEFERIR e DIFERIR?',
            verso: '**DEFERIR** = CONCEDER, aprovar\n"O pedido foi deferido" (aprovado)\n\n**DIFERIR** = ADIAR ou DIVERGIR\n"A reunião foi diferida" (adiada)\n"Nossas opiniões diferem" (divergem)\n\n**Dica:**\n• DEferir = DEu certo (aprovou)\n• DIferir = DIverge / DIa marcado mudou',
            tags: ['parônimos', 'significação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-9',
            frente: 'O que verificar em uma questão de REESCRITA?',
            verso: '**Checklist SRCPC:**\n\n1. **S**entido - Foi mantido? (MAIS IMPORTANTE!)\n2. **R**egência - Correta após mudanças?\n3. **C**oncordância - Verbal e nominal OK?\n4. **P**ontuação - Vírgulas, pontos corretos?\n5. **C**oerência - Faz sentido no contexto?\n\n⚠️ Uma reescrita pode estar gramaticalmente correta, mas MUDAR o sentido = INCORRETA!',
            tags: ['reescrita', 'técnica'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-6-10',
            frente: 'Qual a diferença entre INFLIGIR e INFRINGIR?',
            verso: '**INFLIGIR** = aplicar pena, impor\n"O juiz infligiu a pena ao réu"\n\n**INFRINGIR** = violar, transgredir\n"O motorista infringiu a lei"\n\n**Dica:**\n• InfLIgir = LIxar (aplicar/impor algo em alguém)\n• InfRINgir = quebRINdo regras (violando)',
            tags: ['parônimos', 'significação'],
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
            id: 'lp-q-6-1',
            enunciado: 'No trecho "O estabelecimento foi RATIFICADO como irregular", a palavra destacada pode ser substituída, sem alteração de sentido, por:',
            alternativas: [
              { letra: 'A', texto: 'corrigido' },
              { letra: 'B', texto: 'confirmado' },
              { letra: 'C', texto: 'retificado' },
              { letra: 'D', texto: 'revisado' },
              { letra: 'E', texto: 'modificado' },
            ],
            gabarito: 'B',
            justificativa: 'RATIFICAR significa CONFIRMAR, validar. O sinônimo correto é "confirmado". As demais alternativas trazem parônimos ou palavras com sentido diferente. "Retificar" significa CORRIGIR, não confirmar.',
            dificuldade: 'Fácil',
            competencia: 'Significação de palavras',
            banca: 'IADES',
            tags: ['parônimos', 'ratificar'],
          },
          {
            id: 'lp-q-6-2',
            enunciado: 'A substituição do conectivo mantém o sentido original em:',
            alternativas: [
              { letra: 'A', texto: '"O produto estava vencido, MAS foi apreendido" → "O produto estava vencido, PORTANTO foi apreendido"' },
              { letra: 'B', texto: '"O estabelecimento foi notificado, PORÉM não se regularizou" → "O estabelecimento foi notificado, CONTUDO não se regularizou"' },
              { letra: 'C', texto: '"Fiscalizou-se a loja, PORQUE havia denúncia" → "Fiscalizou-se a loja, LOGO havia denúncia"' },
              { letra: 'D', texto: '"O prazo venceu, ASSIM a multa foi aplicada" → "O prazo venceu, EMBORA a multa foi aplicada"' },
              { letra: 'E', texto: '"Se houver irregularidade, a loja será interditada" → "Embora haja irregularidade, a loja será interditada"' },
            ],
            gabarito: 'B',
            justificativa: 'PORÉM e CONTUDO são conectivos adversativos equivalentes (ambos indicam oposição). As demais alternativas trocam conectivos de relações diferentes: A) adversativo por conclusivo; C) explicativo por conclusivo; D) conclusivo por concessivo; E) condicional por concessivo.',
            dificuldade: 'Média',
            competencia: 'Conectivos equivalentes',
            banca: 'IADES',
            tags: ['conectivos', 'substituição'],
          },
          {
            id: 'lp-q-6-3',
            enunciado: 'A transposição para a voz passiva da frase "A vigilância sanitária interditou o restaurante" está correta em:',
            alternativas: [
              { letra: 'A', texto: 'O restaurante foi interditado pela vigilância sanitária.' },
              { letra: 'B', texto: 'O restaurante interditou-se pela vigilância sanitária.' },
              { letra: 'C', texto: 'Interditou-se o restaurante pela vigilância sanitária.' },
              { letra: 'D', texto: 'O restaurante tinha sido interditado pela vigilância sanitária.' },
              { letra: 'E', texto: 'O restaurante foi interditando pela vigilância sanitária.' },
            ],
            gabarito: 'A',
            justificativa: 'A voz passiva analítica correta é: sujeito paciente (O restaurante) + verbo ser + particípio (foi interditado) + agente da passiva (pela vigilância sanitária). A alternativa E usa gerúndio em vez de particípio, o que é incorreto.',
            dificuldade: 'Fácil',
            competencia: 'Voz passiva',
            banca: 'IADES',
            tags: ['voz verbal', 'passiva'],
          },
          {
            id: 'lp-q-6-4',
            enunciado: 'Assinale a alternativa em que a reescrita mantém o sentido E a correção gramatical:',
            alternativas: [
              { letra: 'A', texto: 'Original: "Verificando a irregularidade, lavrou o auto." → "Ao verificar a irregularidade, lavrou o auto."' },
              { letra: 'B', texto: 'Original: "O fiscal chegou e verificou." → "O fiscal chegou, verificou portanto."' },
              { letra: 'C', texto: 'Original: "Foram aplicadas multas." → "Foi aplicado multas."' },
              { letra: 'D', texto: 'Original: "O estabelecimento que foi notificado." → "O estabelecimento o qual notificado."' },
              { letra: 'E', texto: 'Original: "Embora estivesse irregular, funcionava." → "Porque estivesse irregular, funcionava."' },
            ],
            gabarito: 'A',
            justificativa: 'A alternativa A está correta: "verificando" (gerúndio) equivale a "ao verificar" (infinitivo preposicionado), ambos indicando circunstância temporal. B) erro de conectivo; C) erro de concordância; D) estrutura incompleta; E) troca de concessivo por causal, alterando o sentido.',
            dificuldade: 'Média',
            competencia: 'Reorganização de períodos',
            banca: 'IADES',
            tags: ['orações reduzidas', 'equivalência'],
          },
          {
            id: 'lp-q-6-5',
            enunciado: 'No período "Quando o fiscal CHEGOU, verificou os documentos", a oração destacada pode ser reescrita, mantendo o sentido, como:',
            alternativas: [
              { letra: 'A', texto: 'Ao chegar o fiscal, verificou os documentos.' },
              { letra: 'B', texto: 'Chegado o fiscal verificou os documentos.' },
              { letra: 'C', texto: 'Porque chegou o fiscal, verificou os documentos.' },
              { letra: 'D', texto: 'Enquanto chegava o fiscal, verificou os documentos.' },
              { letra: 'E', texto: 'Se chegou o fiscal, verificou os documentos.' },
            ],
            gabarito: 'A',
            justificativa: '"Quando chegou" (tempo) equivale a "Ao chegar" (forma reduzida de infinitivo). Ambos expressam circunstância temporal. B) falta vírgula; C) relação causal diferente de temporal; D) "enquanto" indica simultaneidade, não sequência; E) relação condicional diferente de temporal.',
            dificuldade: 'Média',
            competencia: 'Orações reduzidas',
            banca: 'IADES',
            tags: ['infinitivo', 'temporal'],
          },
          {
            id: 'lp-q-6-6',
            enunciado: '"O prazo para regularização é IMINENTE." A palavra destacada significa:',
            alternativas: [
              { letra: 'A', texto: 'ilustre, famoso.' },
              { letra: 'B', texto: 'prestes a acontecer, próximo.' },
              { letra: 'C', texto: 'elevado, alto.' },
              { letra: 'D', texto: 'importante, nobre.' },
              { letra: 'E', texto: 'permanente, definitivo.' },
            ],
            gabarito: 'B',
            justificativa: 'IMINENTE significa "prestes a acontecer", algo próximo de ocorrer. O prazo iminente é aquele que está para vencer. EMINENTE (não IMINENTE) é que significa ilustre, notável, elevado.',
            dificuldade: 'Fácil',
            competencia: 'Parônimos',
            banca: 'IADES',
            tags: ['iminente', 'significação'],
          },
          {
            id: 'lp-q-6-7',
            enunciado: 'A vírgula é OBRIGATÓRIA em:',
            alternativas: [
              { letra: 'A', texto: 'O fiscal verificou os documentos quando chegou.' },
              { letra: 'B', texto: 'Quando chegou o fiscal verificou os documentos.' },
              { letra: 'C', texto: 'O fiscal que chegou verificou os documentos.' },
              { letra: 'D', texto: 'O estabelecimento funciona normalmente.' },
              { letra: 'E', texto: 'A ANVISA fiscaliza e o Estado multa.' },
            ],
            gabarito: 'B',
            justificativa: 'Quando a oração subordinada (Quando chegou) vem ANTES da oração principal (o fiscal verificou), a vírgula é OBRIGATÓRIA para separar as orações. A frase correta seria: "Quando chegou, o fiscal verificou os documentos."',
            dificuldade: 'Média',
            competencia: 'Pontuação',
            banca: 'IADES',
            tags: ['vírgula', 'subordinada'],
          },
          {
            id: 'lp-q-6-8',
            enunciado: 'Assinale a alternativa em que "DEFERIR" foi empregado corretamente:',
            alternativas: [
              { letra: 'A', texto: 'O juiz deferiu a audiência para a próxima semana.' },
              { letra: 'B', texto: 'A autoridade deferiu o pedido de licença sanitária.' },
              { letra: 'C', texto: 'As opiniões dos técnicos deferiram sobre o assunto.' },
              { letra: 'D', texto: 'O erro foi deferido no documento oficial.' },
              { letra: 'E', texto: 'O prazo foi deferido por mais trinta dias.' },
            ],
            gabarito: 'B',
            justificativa: 'DEFERIR significa CONCEDER, APROVAR. "Deferiu o pedido" = aprovou o pedido. A) seria "diferiu" (adiou); C) seria "diferiram" (divergiram); D) seria "corrigido/retificado"; E) seria "prorrogado" ou "diferido" (adiado).',
            dificuldade: 'Média',
            competencia: 'Parônimos',
            banca: 'IADES',
            tags: ['deferir', 'diferir'],
          },
          {
            id: 'lp-q-6-9',
            enunciado: '"Aplicam-se multas aos infratores." A forma verbal destacada está na voz:',
            alternativas: [
              { letra: 'A', texto: 'ativa.' },
              { letra: 'B', texto: 'passiva analítica.' },
              { letra: 'C', texto: 'passiva sintética.' },
              { letra: 'D', texto: 'reflexiva.' },
              { letra: 'E', texto: 'recíproca.' },
            ],
            gabarito: 'C',
            justificativa: '"Aplicam-se multas" é VOZ PASSIVA SINTÉTICA, formada por verbo + SE (partícula apassivadora). Equivale à passiva analítica "Multas são aplicadas". O sujeito "multas" é paciente (recebe a ação de ser aplicada).',
            dificuldade: 'Fácil',
            competencia: 'Voz passiva sintética',
            banca: 'IADES',
            tags: ['passiva sintética', 'se'],
          },
          {
            id: 'lp-q-6-10',
            enunciado: 'A reescrita que ALTERA o sentido original é:',
            alternativas: [
              { letra: 'A', texto: 'Original: "O fiscal interditou o local." → "O local foi interditado pelo fiscal."' },
              { letra: 'B', texto: 'Original: "Embora estivesse vencido, o produto foi vendido." → "O produto foi vendido, embora estivesse vencido."' },
              { letra: 'C', texto: 'Original: "O estabelecimento não regularizou, mas continuou funcionando." → "O estabelecimento não regularizou, portanto continuou funcionando."' },
              { letra: 'D', texto: 'Original: "Ao verificar a irregularidade, lavrou o auto." → "Quando verificou a irregularidade, lavrou o auto."' },
              { letra: 'E', texto: 'Original: "A multa foi aplicada porque houve infração." → "Houve infração, por isso a multa foi aplicada."' },
            ],
            gabarito: 'C',
            justificativa: 'A troca de "MAS" (adversativo/oposição) por "PORTANTO" (conclusivo) ALTERA completamente o sentido. Original: apesar de não regularizar, continuou (oposição). Reescrita: não regularizou, então continuou (consequência) - sentidos incompatíveis.',
            dificuldade: 'Média',
            competencia: 'Manutenção de sentido',
            banca: 'IADES',
            tags: ['conectivos', 'sentido'],
          },
        ],
      },
    },
    {
      id: 'lp-topico-7',
      numero: 7,
      titulo: 'Correspondência Oficial',
      conteudo: {
        resumo: `
## Resumo Rápido

A correspondência oficial segue normas padronizadas pelo **Manual de Redação da Presidência da República (MRPR)**, que estabelece critérios para comunicações dos órgãos públicos.

### As 5 Características Fundamentais da Redação Oficial

| Característica | Significado | Exemplo/Aplicação |
|----------------|-------------|-------------------|
| **Impessoalidade** | Ausência de impressões individuais | Texto reflete posição institucional, não opinião pessoal |
| **Clareza** | Fácil compreensão | Evitar ambiguidade e termos técnicos desnecessários |
| **Concisão** | Máximo de informação, mínimo de palavras | Ir direto ao ponto, sem redundâncias |
| **Formalidade** | Obediência às regras gramaticais | Tratamento adequado e cortesia |
| **Uniformidade** | Padronização visual e estrutural | Todos os documentos seguem mesmo padrão |

### Pronomes de Tratamento

| Pronome | Abreviatura | Autoridades |
|---------|-------------|-------------|
| **Vossa Excelência** | V.Exa. | Presidente, Ministros, Governadores, Deputados, Senadores, Desembargadores |
| **Vossa Senhoria** | V.Sa. | Demais autoridades e particulares |
| **Vossa Magnificência** | V.Mag. | Reitores de universidades |

### Fechos de Correspondência

| Fecho | Quando Usar |
|-------|-------------|
| **Respeitosamente** | Para autoridades SUPERIORES |
| **Atenciosamente** | Para mesma hierarquia ou INFERIOR |

### Principais Documentos Oficiais

| Documento | Finalidade |
|-----------|-----------|
| **Ofício** | Comunicação EXTERNA (com outros órgãos ou particulares) |
| **Memorando** | Comunicação INTERNA (dentro do mesmo órgão) |
| **Aviso** | Comunicação entre Ministros de Estado |
| **Exposição de Motivos** | Dirigida ao Presidente da República |
| **Mensagem** | Comunicação entre Poderes |

### Pontos-Chave para a Prova IADES:
- Verbo com pronome de tratamento: sempre na **3ª pessoa** ("Vossa Excelência SABE", não "sabeis")
- Adjetivo concorda com o **SEXO** do destinatário ("V.Exa. está cansadA" para mulher)
- Princípio da **publicidade**: comunicações oficiais são públicas (salvo sigilo legal)
- **Impessoalidade** ≠ frieza; é ausência de subjetividade do redator
        `,

        explicacao: `O Manual de Redação da Presidência da República (MRPR) é a "bíblia" da comunicação oficial brasileira. Ele padroniza todos os documentos produzidos pela administração pública federal e serve de modelo para estados e municípios.

**POR QUE A PADRONIZAÇÃO É IMPORTANTE?**
A administração pública fala em nome do Estado. A uniformidade garante que todos os órgãos comuniquem de forma profissional, clara e impessoal.

**AS 5 CARACTERÍSTICAS FUNDAMENTAIS (decorar!):**
1. **IMPESSOALIDADE**: O redator não pode expressar opiniões pessoais. O texto deve refletir posição institucional.
2. **CLAREZA**: O receptor deve entender na primeira leitura. Evitar termos técnicos desnecessários.
3. **CONCISÃO**: Ir direto ao ponto. Textos longos demais prejudicam a comunicação.
4. **FORMALIDADE**: Seguir as normas gramaticais e usar tratamento adequado.
5. **UNIFORMIDADE**: Todos os documentos devem seguir o mesmo padrão visual.

**PRONOMES DE TRATAMENTO - REGRAS:**
Vossa Excelência: altas autoridades (Presidente, Ministros, Governadores, Prefeitos, Deputados, Senadores, Magistrados de tribunal superior, Embaixadores)
Vossa Senhoria: demais casos

**ARMADILHA CLÁSSICA:** Pronome na 2ª pessoa (Vossa), mas verbo na 3ª pessoa!
- CERTO: "Vossa Excelência SABE..." (e não "sabeis")
- CERTO: "Comunico a Vossa Senhoria que..." (e não "vos comunico")

**FECHOS - REGRA SIMPLES:**
- RESPEITOSAMENTE = hierarquia SUPERIOR (R de Respeito ao superior)
- ATENCIOSAMENTE = mesma hierarquia ou INFERIOR

**PRINCIPAIS DOCUMENTOS OFICIAIS:**
1. **Ofício**: comunicação externa
2. **Memorando**: comunicação interna
3. **Nota**: comunicação pública (imprensa)
4. **Aviso**: comunicação entre Ministros
5. **Exposição de Motivos**: dirigida ao Presidente
6. **Mensagem**: comunicação entre Poderes`,

        pontosChave: [
          'Cinco características: impessoalidade, clareza, concisão, formalidade, uniformidade',
          'Vossa Excelência: Presidente, Ministros, Governadores, Deputados, Magistrados superiores',
          'Vossa Senhoria: demais autoridades e particulares',
          'Concordância com pronomes de tratamento: verbo na 3ª pessoa, adjetivo concorda com o sexo',
          'Fecho Respeitosamente: autoridade superior',
          'Fecho Atenciosamente: mesma hierarquia ou inferior',
          'Princípio da publicidade: comunicações oficiais são públicas (salvo sigilo)',
          'Impessoalidade: sem impressões individuais do redator',
          'Ofício é comunicação externa; memorando é interna',
        ],

        armadilhas: [
          {
            titulo: 'Concordância verbal',
            descricao: 'Erro: "Vossa Excelência sois convidado".',
            dica: 'Verbo deve ser 3ª pessoa: "Vossa Excelência É convidado".',
          },
          {
            titulo: 'Fecho incorreto',
            descricao: 'Usar "Respeitosamente" para subordinado.',
            dica: 'Para subordinado/igual = "Atenciosamente". Para superior = "Respeitosamente".',
          },
          {
            titulo: 'Vossa Excelência indevido',
            descricao: 'Usar V.Exa. para qualquer autoridade.',
            dica: 'V.Exa. só para altas autoridades (Presidente, Ministros, Governadores). Juiz de 1ª instância = V.Sa.',
          },
          {
            titulo: 'Concordância do adjetivo',
            descricao: 'Esquecer que adjetivos concordam com o sexo.',
            dica: '"V.Exa. está cansadA" (para mulher). Adjetivo concorda com o SEXO, não com "Vossa".',
          },
          {
            titulo: 'Conceito de concisão',
            descricao: 'Pensar que concisão = texto curto.',
            dica: 'Concisão = máximo de informação com mínimo de palavras. Não é apenas "ser breve".',
          },
          {
            titulo: 'Formalidade vs rebuscamento',
            descricao: 'Confundir linguagem formal com linguagem empolada.',
            dica: 'Formalidade exige clareza. Texto rebuscado dificulta compreensão.',
          },
        ],

        mnemonicos: [
          {
            termo: 'ImpaClaConForU',
            significado: 'Características da redação oficial',
            frase: 'Impessoalidade, Clareza, Concisão, Formalidade, Uniformidade.',
          },
          {
            termo: 'R-Sup, A-Inf',
            significado: 'Fechos de correspondência',
            frase: 'Respeitosamente = Superior. Atenciosamente = Igual/Inferior.',
          },
          {
            termo: 'VE=VIP, VS=resto',
            significado: 'Pronomes de tratamento',
            frase: 'Vossa Excelência para VIPs, Vossa Senhoria para os demais.',
          },
          {
            termo: 'Vossa+3ª pessoa',
            significado: 'Concordância verbal',
            frase: '"Vossa" na frente, mas verbo em "ele/ela" (3ª pessoa).',
          },
        ],

        flashcards: [
          {
            id: 'lp-fc-7-1',
            frente: 'Quais são as 5 características fundamentais da redação oficial?',
            verso: 'Impessoalidade, Clareza, Concisão, Formalidade e Uniformidade',
            tags: ['redação oficial', 'características'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-2',
            frente: 'Qual pronome de tratamento usar para Presidente, Ministros e Governadores?',
            verso: 'Vossa Excelência (V.Exa.)',
            tags: ['pronome', 'tratamento'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-3',
            frente: 'Qual fecho usar para autoridades SUPERIORES?',
            verso: 'Respeitosamente',
            tags: ['fecho', 'correspondência'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-4',
            frente: 'Como concordam verbos e adjetivos com pronomes de tratamento?',
            verso: 'Verbos na 3ª pessoa; adjetivos concordam com o SEXO do destinatário',
            tags: ['concordância', 'pronome'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-5',
            frente: 'Qual fecho usar para autoridades de mesma hierarquia ou inferiores?',
            verso: 'Atenciosamente',
            tags: ['fecho', 'correspondência'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-6',
            frente: 'O que significa IMPESSOALIDADE na redação oficial?',
            verso: 'Ausência de impressões individuais do redator; texto reflete posição institucional, não opinião pessoal',
            tags: ['impessoalidade', 'característica'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-7',
            frente: 'Qual a diferença entre Ofício e Memorando?',
            verso: 'Ofício: comunicação EXTERNA (com outros órgãos ou particulares). Memorando: comunicação INTERNA (dentro do mesmo órgão)',
            tags: ['documentos', 'comunicação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'lp-fc-7-8',
            frente: 'O que significa CONCISÃO na redação oficial?',
            verso: 'Máximo de informações com mínimo de palavras; ir direto ao ponto sem redundâncias',
            tags: ['concisão', 'característica'],
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
            id: 'lp-q-7-1',
            enunciado: 'São características fundamentais da redação oficial, segundo o Manual de Redação da Presidência:',
            alternativas: [
              { letra: 'A', texto: 'pessoalidade, clareza, prolixidade, informalidade e diversidade.' },
              { letra: 'B', texto: 'impessoalidade, clareza, concisão, formalidade e uniformidade.' },
              { letra: 'C', texto: 'subjetividade, objetividade, variedade, formalismo e padronização.' },
              { letra: 'D', texto: 'impessoalidade, obscuridade, brevidade, cordialidade e igualdade.' },
              { letra: 'E', texto: 'neutralidade, simplicidade, extensão, protocolo e singularidade.' },
            ],
            gabarito: 'B',
            justificativa: 'As 5 características fundamentais da redação oficial são: IMPESSOALIDADE, CLAREZA, CONCISÃO, FORMALIDADE e UNIFORMIDADE.',
            dificuldade: 'Fácil',
            competencia: 'Características da redação oficial',
            banca: 'IADES',
            tags: ['características', 'manual'],
          },
          {
            id: 'lp-q-7-2',
            enunciado: 'O fecho "Respeitosamente" deve ser empregado em comunicações dirigidas a:',
            alternativas: [
              { letra: 'A', texto: 'autoridades de mesma hierarquia.' },
              { letra: 'B', texto: 'subordinados.' },
              { letra: 'C', texto: 'autoridades de hierarquia superior.' },
              { letra: 'D', texto: 'qualquer destinatário.' },
              { letra: 'E', texto: 'cidadãos em geral.' },
            ],
            gabarito: 'C',
            justificativa: 'RESPEITOSAMENTE é usado para autoridades SUPERIORES. Para mesma hierarquia ou inferiores, usa-se ATENCIOSAMENTE.',
            dificuldade: 'Fácil',
            competencia: 'Fechos',
            banca: 'IADES',
            tags: ['fecho', 'respeitosamente'],
          },
          {
            id: 'lp-q-7-3',
            enunciado: 'A concordância correta com pronome de tratamento é:',
            alternativas: [
              { letra: 'A', texto: '"Vossa Excelência podeis comparecer à reunião."' },
              { letra: 'B', texto: '"Vossa Senhoria fostes convocada para a audiência."' },
              { letra: 'C', texto: '"Vossa Magnificência estais convidado para a solenidade."' },
              { letra: 'D', texto: '"Vossa Excelência está convidado para a cerimônia." (para destinatário do sexo masculino)' },
              { letra: 'E', texto: '"Vossa Senhoria deveis apresentar os documentos."' },
            ],
            gabarito: 'D',
            justificativa: 'Com pronomes de tratamento, o verbo fica na 3ª pessoa do singular ("está", não "estais" ou "podeis"), e o adjetivo concorda com o SEXO do destinatário ("convidado" para homem).',
            dificuldade: 'Média',
            competencia: 'Concordância',
            banca: 'IADES',
            tags: ['concordância', 'pronome tratamento'],
          },
          {
            id: 'lp-q-7-4',
            enunciado: 'O pronome de tratamento adequado para dirigir-se a um Deputado Federal é:',
            alternativas: [
              { letra: 'A', texto: 'Vossa Senhoria.' },
              { letra: 'B', texto: 'Vossa Magnificência.' },
              { letra: 'C', texto: 'Vossa Excelência.' },
              { letra: 'D', texto: 'Vossa Reverendíssima.' },
              { letra: 'E', texto: 'Vossa Santidade.' },
            ],
            gabarito: 'C',
            justificativa: 'Deputados Federais e Estaduais recebem tratamento de VOSSA EXCELÊNCIA, assim como Presidente, Ministros, Governadores, Senadores e Magistrados de tribunais superiores.',
            dificuldade: 'Fácil',
            competencia: 'Pronomes de tratamento',
            banca: 'IADES',
            tags: ['pronome', 'Vossa Excelência'],
          },
          {
            id: 'lp-q-7-5',
            enunciado: 'A IMPESSOALIDADE na redação oficial significa que:',
            alternativas: [
              { letra: 'A', texto: 'o texto pode conter opiniões pessoais do redator.' },
              { letra: 'B', texto: 'o redator deve usar primeira pessoa do singular.' },
              { letra: 'C', texto: 'impressões individuais devem ser evitadas, mantendo-se o caráter institucional.' },
              { letra: 'D', texto: 'o texto não precisa identificar o signatário.' },
              { letra: 'E', texto: 'qualquer servidor pode assinar em nome do órgão.' },
            ],
            gabarito: 'C',
            justificativa: 'IMPESSOALIDADE significa ausência de impressões individuais do redator. O texto deve refletir posição institucional, não opinião pessoal.',
            dificuldade: 'Média',
            competencia: 'Impessoalidade',
            banca: 'IADES',
            tags: ['impessoalidade', 'característica'],
          },
          {
            id: 'lp-q-7-6',
            enunciado: 'A comunicação interna entre unidades do mesmo órgão denomina-se:',
            alternativas: [
              { letra: 'A', texto: 'ofício.' },
              { letra: 'B', texto: 'aviso.' },
              { letra: 'C', texto: 'memorando.' },
              { letra: 'D', texto: 'nota.' },
              { letra: 'E', texto: 'exposição de motivos.' },
            ],
            gabarito: 'C',
            justificativa: 'MEMORANDO é a comunicação INTERNA (entre unidades do mesmo órgão). OFÍCIO é a comunicação externa.',
            dificuldade: 'Fácil',
            competencia: 'Tipos de documentos',
            banca: 'IADES',
            tags: ['memorando', 'comunicação interna'],
          },
          {
            id: 'lp-q-7-7',
            enunciado: 'Quanto ao princípio da publicidade nas comunicações oficiais, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'todos os documentos oficiais devem ser publicados no Diário Oficial.' },
              { letra: 'B', texto: 'as comunicações são públicas, salvo aquelas legalmente protegidas por sigilo.' },
              { letra: 'C', texto: 'nenhum documento oficial pode ser sigiloso.' },
              { letra: 'D', texto: 'a publicidade dispensa a clareza do texto.' },
              { letra: 'E', texto: 'documentos internos não se submetem à publicidade.' },
            ],
            gabarito: 'B',
            justificativa: 'As comunicações oficiais são públicas por princípio, SALVO aquelas legalmente protegidas por sigilo (como informações pessoais, segurança nacional, etc.).',
            dificuldade: 'Média',
            competencia: 'Princípio da publicidade',
            banca: 'IADES',
            tags: ['publicidade', 'sigilo'],
          },
          {
            id: 'lp-q-7-8',
            enunciado: 'A característica da CONCISÃO na redação oficial significa:',
            alternativas: [
              { letra: 'A', texto: 'usar o maior número de palavras possível para garantir clareza.' },
              { letra: 'B', texto: 'transmitir o máximo de informações com o mínimo de palavras.' },
              { letra: 'C', texto: 'escrever textos necessariamente curtos, com no máximo uma página.' },
              { letra: 'D', texto: 'utilizar linguagem técnica e rebuscada.' },
              { letra: 'E', texto: 'repetir informações importantes para enfatizá-las.' },
            ],
            gabarito: 'B',
            justificativa: 'CONCISÃO significa transmitir o máximo de informações com o mínimo de palavras, eliminando redundâncias e indo direto ao ponto.',
            dificuldade: 'Média',
            competencia: 'Concisão',
            banca: 'IADES',
            tags: ['concisão', 'característica'],
          },
          {
            id: 'lp-q-7-9',
            enunciado: 'Ao redigir ofício à Governadora de Goiás, o servidor deve usar o fecho:',
            alternativas: [
              { letra: 'A', texto: 'Atenciosamente, se for de hierarquia superior.' },
              { letra: 'B', texto: 'Respeitosamente, pois é autoridade de hierarquia superior.' },
              { letra: 'C', texto: 'Com elevada estima e distinta consideração.' },
              { letra: 'D', texto: 'Cordialmente.' },
              { letra: 'E', texto: 'Sem fecho, apenas a assinatura.' },
            ],
            gabarito: 'B',
            justificativa: 'Governadores são autoridades superiores para servidores públicos, portanto o fecho adequado é RESPEITOSAMENTE.',
            dificuldade: 'Fácil',
            competencia: 'Fecho',
            banca: 'IADES',
            tags: ['fecho', 'governador'],
          },
          {
            id: 'lp-q-7-10',
            enunciado: 'A UNIFORMIDADE na redação oficial refere-se a:',
            alternativas: [
              { letra: 'A', texto: 'usar sempre as mesmas palavras em todos os documentos.' },
              { letra: 'B', texto: 'padronização visual e estrutural dos documentos.' },
              { letra: 'C', texto: 'todos os servidores escreverem da mesma forma.' },
              { letra: 'D', texto: 'proibição de documentos personalizados.' },
              { letra: 'E', texto: 'uso obrigatório de modelos prontos sem alteração.' },
            ],
            gabarito: 'B',
            justificativa: 'UNIFORMIDADE significa padronização visual e estrutural: mesma formatação, margens, fontes, estrutura de cabeçalho, etc., garantindo identidade institucional.',
            dificuldade: 'Média',
            competencia: 'Uniformidade',
            banca: 'IADES',
            tags: ['uniformidade', 'padronização'],
          },
        ],
      },
    },
  ],
};
