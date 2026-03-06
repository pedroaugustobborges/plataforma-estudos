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
| Hífen (prefixo + vogal igual) | auto-observação | autoobservação |
| Hífen (prefixo + r/s) | anti-religioso | antirreligioso |
| Acentos diferenciais | pára, pêlo, pólo | para, pelo, polo |
| Ditongos abertos (paroxítonas) | idéia, assembléia | ideia, assembleia |

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
  ],
};
