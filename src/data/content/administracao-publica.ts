import type { Materia } from "../../types";

export const administracaoPublica: Materia = {
  id: "administracao-publica",
  nome: "Administração Pública",
  sigla: "AP",
  descricao:
    "Organização, princípios e gestão da Administração Pública brasileira",
  cor: "#009688",
  icone: "AccountBalance",
  topicos: [
    {
      id: "ap-topico-1",
      numero: 1,
      titulo:
        "Estado, governo e administração pública: conceitos, diferenças e finalidades",
      conteudo: {
        resumo: `
## Resumo Rápido

### Quadro Comparativo Essencial

| Conceito | O que é | Finalidade | Característica |
|----------|---------|------------|----------------|
| **ESTADO** | Nação politicamente organizada | Bem comum | Permanente |
| **GOVERNO** | Direção do Estado | Definir políticas | Transitório |
| **ADMINISTRAÇÃO** | Máquina estatal | Executar políticas | Instrumental |

### Finalidades Fundamentais
- **Estado**: realizar o **bem comum** e garantir direitos fundamentais
- **Governo**: estabelecer **diretrizes políticas** e metas
- **Administração**: **executar** as políticas públicas com eficiência

### Para IADES - Foco em:
- Diferença entre **função política** (Governo) e **função administrativa** (Administração)
- A Administração atua de forma **vinculada à lei** (legalidade)
- A Administração serve ao **interesse público** (não ao interesse do governante)
        `,

        explicacao: `
## Explicação Didática

### 1. O Estado na Perspectiva da Administração Pública

O **Estado** é a pessoa jurídica de direito público que detém o **poder soberano** sobre um território e sua população. Na perspectiva da Administração Pública, o Estado é o **titular** dos poderes e competências que serão exercidos pela Administração.

#### Finalidades do Estado
1. **Bem comum**: garantir condições para que todos possam viver dignamente
2. **Ordem social**: manter a paz e a segurança
3. **Justiça**: aplicar o direito de forma equitativa
4. **Desenvolvimento**: promover o progresso econômico e social

#### Estado de Direito
- O Estado se submete às leis que ele mesmo cria
- Princípio da **legalidade**: o Estado só pode fazer o que a lei autoriza
- **Separação de poderes**: sistema de freios e contrapesos

### 2. O Governo e suas Funções

O **Governo** representa a **cúpula diretiva** do Estado. É quem toma as decisões políticas fundamentais.

#### Características do Governo
- **Transitório**: muda conforme o processo eleitoral
- **Discricionário**: possui margem de escolha política
- **Responsável**: responde pelos atos perante a sociedade

#### Funções Governamentais
1. **Definição de políticas públicas**
2. **Alocação de recursos** (orçamento)
3. **Relações internacionais**
4. **Direção superior** da Administração

#### Atos de Governo vs. Atos Administrativos
| Atos de Governo | Atos Administrativos |
|-----------------|---------------------|
| Natureza política | Natureza técnica/jurídica |
| Alta discricionariedade | Vinculação ou discricionariedade limitada |
| Ex: declarar guerra, veto | Ex: licença, alvará, multa |

### 3. A Administração Pública e suas Finalidades

A **Administração Pública** é o conjunto de órgãos, agentes e entidades que executam as funções estatais.

#### Finalidade Principal: INTERESSE PÚBLICO
A Administração existe para servir ao povo, não aos governantes. Isso se manifesta em:

1. **Supremacia do interesse público**: prevalece sobre interesses particulares
2. **Indisponibilidade do interesse público**: não pode ser renunciado ou transacionado
3. **Continuidade dos serviços públicos**: não podem ser interrompidos
4. **Eficiência**: máximo de resultados com mínimo de recursos

### 4. Diferenças Práticas entre Governo e Administração

| Aspecto | Governo | Administração |
|---------|---------|---------------|
| **Atuação** | Decide o que fazer | Executa o que foi decidido |
| **Critério** | Oportunidade e conveniência política | Legalidade e eficiência |
| **Agentes** | Políticos eleitos | Servidores de carreira |
| **Responsabilidade** | Política (eleições) | Administrativa, civil, penal |
| **Estabilidade** | Mandatos temporários | Estabilidade (após estágio) |

### 5. A Administração Pública e a Vigilância Sanitária

A **Vigilância Sanitária** é um exemplo prático de Administração Pública em ação:

#### Quem é quem na Vigilância Sanitária?

| Nível | Órgão/Entidade | Natureza |
|-------|----------------|----------|
| Federal | ANVISA | Autarquia (Adm. Indireta) |
| Estadual | VISA-GO / SES-GO | Adm. Direta estadual |
| Municipal | VISA Municipal | Adm. Direta municipal |

#### Finalidades da VISA como Administração Pública
1. **Proteção da saúde** da população
2. **Regulação** de produtos e serviços
3. **Fiscalização** de estabelecimentos
4. **Educação sanitária**

O Fiscal de Saúde Pública é **agente público** que exerce **função administrativa** (não política), aplicando a lei de forma vinculada aos princípios da Administração.

### 6. Princípios que Regem a Distinção

#### Princípios Aplicáveis à Administração (art. 37, CF)
- **Legalidade**: só faz o que a lei permite
- **Impessoalidade**: sem favorecimentos
- **Moralidade**: ética e probidade
- **Publicidade**: transparência
- **Eficiência**: resultados otimizados

#### Mnemônico: **LIMPE**
- **L**egalidade
- **I**mpessoalidade
- **M**oralidade
- **P**ublicidade
- **E**ficiência

### 7. Modelos de Administração Pública

| Modelo | Características | Período no Brasil |
|--------|-----------------|-------------------|
| **Patrimonialista** | Confusão público/privado, nepotismo | Colônia/Império |
| **Burocrático** | Formalismo, hierarquia, mérito | 1930-1990 (predominante) |
| **Gerencial** | Resultados, eficiência, cidadão-cliente | 1990-atual |

A Administração Pública brasileira atual busca superar o modelo burocrático rígido, incorporando elementos do modelo gerencial (foco em resultados), sem abandonar garantias como concurso público e estabilidade.
        `,

        pontosChave: [
          "Estado = nação politicamente organizada; Governo = direção política; Administração = execução",
          "Estado é PERMANENTE; Governo é TRANSITÓRIO; Administração é INSTRUMENTAL",
          "Governo DECIDE (função política); Administração EXECUTA (função administrativa)",
          "Finalidade da Administração = INTERESSE PÚBLICO (não interesse do governante)",
          "Princípios da Administração: LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência)",
          "Atos de Governo = natureza política, alta discricionariedade",
          "Atos Administrativos = natureza jurídica, vinculação à lei",
          "ANVISA = Autarquia federal (Administração Indireta)",
          "Fiscal de Saúde Pública = agente público, função administrativa",
          "Modelos de Administração: Patrimonialista → Burocrático → Gerencial",
        ],

        armadilhas: [
          {
            titulo: "Confundir Governo com Administração",
            descricao:
              "Governo define políticas (função política); Administração executa (função administrativa).",
            dica: "Governantes decidem O QUÊ fazer; Administração decide COMO fazer.",
          },
          {
            titulo:
              "Achar que princípio da legalidade é igual para cidadão e Estado",
            descricao:
              "Para o cidadão: pode tudo que a lei não proíbe. Para a Administração: só pode o que a lei AUTORIZA.",
            dica: "Cidadão → legalidade negativa. Estado → legalidade positiva.",
          },
          {
            titulo: "Pensar que interesse público é interesse do governante",
            descricao:
              "Interesse público é o interesse da COLETIVIDADE, não de quem está no poder.",
            dica: "Governante que usa a máquina para interesse próprio comete IMPROBIDADE.",
          },
          {
            titulo: "Confundir eficiência com eficácia",
            descricao:
              "Eficiência = fazer bem (relação custo-benefício). Eficácia = atingir o objetivo.",
            dica: "Pode ser eficaz (atingir meta) sem ser eficiente (gastando muito).",
          },
        ],

        mnemonicos: [
          {
            termo: "LIMPE",
            significado:
              "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência",
            frase: "A Administração deve ter conduta LIMPE (art. 37, CF)",
          },
          {
            termo: "GEA",
            significado: "Governo Estabelece, Administração Executa",
            frase: "GEA: Governo Estabelece diretrizes, Administração Executa",
          },
          {
            termo: "PBG",
            significado: "Patrimonialista, Burocrático, Gerencial",
            frase: "Evolução dos modelos: PBG (do pior ao melhor)",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-1-1",
            frente: "Qual a FINALIDADE principal da Administração Pública?",
            verso:
              "A finalidade é o **INTERESSE PÚBLICO**.\n\nA Administração existe para servir à coletividade, não aos governantes.\n\nManifestações:\n- Supremacia do interesse público\n- Indisponibilidade do interesse público",
            tags: ["finalidade", "interesse público"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-2",
            frente:
              "Qual a diferença entre a atuação do GOVERNO e da ADMINISTRAÇÃO?",
            verso:
              "**GOVERNO**:\n- DECIDE o que fazer\n- Função POLÍTICA\n- Critério: oportunidade e conveniência\n\n**ADMINISTRAÇÃO**:\n- EXECUTA o que foi decidido\n- Função ADMINISTRATIVA\n- Critério: legalidade e eficiência",
            tags: ["governo", "administração", "diferença"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-3",
            frente:
              "Quais são os princípios EXPRESSOS da Administração Pública (art. 37, CF)?",
            verso:
              "**LIMPE**:\n\n- **L**egalidade\n- **I**mpessoalidade\n- **M**oralidade\n- **P**ublicidade\n- **E**ficiência\n\n(Eficiência foi incluída pela EC 19/98)",
            tags: ["princípios", "LIMPE", "art. 37"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-4",
            frente: "Quais são os três MODELOS de Administração Pública?",
            verso:
              "1. **PATRIMONIALISTA**\n   - Confusão público/privado, nepotismo\n   - Brasil: Colônia/Império\n\n2. **BUROCRÁTICO**\n   - Formalismo, hierarquia, mérito\n   - Brasil: 1930-1990\n\n3. **GERENCIAL**\n   - Resultados, eficiência, cidadão-cliente\n   - Brasil: 1990-atual",
            tags: ["modelos", "evolução"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-5",
            frente:
              "Como funciona o princípio da LEGALIDADE para a Administração?",
            verso:
              'A Administração Pública **só pode fazer o que a lei AUTORIZA**.\n\n(Diferente do cidadão, que pode fazer tudo que a lei não proíbe)\n\nÉ a chamada "legalidade positiva" ou "legalidade estrita".',
            tags: ["legalidade", "princípio"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-6",
            frente: "O que é o princípio da IMPESSOALIDADE?",
            verso:
              "Duas dimensões:\n\n1. **Finalidade**: atuação voltada ao interesse público (não pessoal)\n\n2. **Isonomia**: tratamento igualitário, sem favorecimentos\n\nProíbe: promoção pessoal, nepotismo, perseguições.",
            tags: ["impessoalidade", "princípio"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-7",
            frente: "Qual a diferença entre EFICIÊNCIA e EFICÁCIA?",
            verso:
              '**EFICIÊNCIA**:\n- Fazer bem, com menor custo\n- Relação custo-benefício\n- "Fazer certo"\n\n**EFICÁCIA**:\n- Atingir o objetivo\n- Alcançar a meta\n- "Fazer a coisa certa"\n\nPode ser eficaz sem ser eficiente (e vice-versa).',
            tags: ["eficiência", "eficácia", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-1-8",
            frente: "Qual a natureza jurídica da ANVISA?",
            verso:
              "**AUTARQUIA** federal.\n\n- Administração Indireta\n- Personalidade jurídica de direito público\n- Autonomia administrativa e financeira\n- Vinculada ao Ministério da Saúde\n\nExerce poder de polícia sanitária em âmbito federal.",
            tags: ["ANVISA", "autarquia", "natureza jurídica"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-1-1",
            enunciado:
              "Acerca da distinção entre Governo e Administração Pública, assinale a alternativa CORRETA:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "O Governo exerce função administrativa, enquanto a Administração exerce função política.",
              },
              {
                letra: "B",
                texto:
                  "O Governo é permanente, e a Administração é transitória.",
              },
              {
                letra: "C",
                texto:
                  "O Governo define as diretrizes políticas, e a Administração as executa.",
              },
              {
                letra: "D",
                texto:
                  "A Administração possui autonomia para criar políticas públicas independentemente do Governo.",
              },
              {
                letra: "E",
                texto:
                  "Não há distinção prática entre Governo e Administração.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O GOVERNO exerce função política (define diretrizes, metas, políticas), enquanto a ADMINISTRAÇÃO exerce função administrativa (executa as políticas definidas). As demais alternativas invertem ou confundem os conceitos.",
            dificuldade: "Fácil",
            competencia: "Distinção Governo/Administração",
            banca: "IADES",
            tags: ["governo", "administração"],
          },
          {
            id: "ap-q-1-2",
            enunciado:
              "Os princípios expressos da Administração Pública, previstos no artigo 37 da Constituição Federal, são:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Legalidade, moralidade, eficácia, publicidade e economicidade.",
              },
              {
                letra: "B",
                texto:
                  "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
              },
              {
                letra: "C",
                texto:
                  "Supremacia do interesse público, indisponibilidade, autotutela, razoabilidade e proporcionalidade.",
              },
              {
                letra: "D",
                texto:
                  "Hierarquia, disciplina, legalidade, finalidade e motivação.",
              },
              {
                letra: "E",
                texto:
                  "Transparência, responsabilidade, ética, probidade e continuidade.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O art. 37, caput, da CF estabelece os princípios LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Os demais são princípios implícitos ou previstos em outras normas.",
            dificuldade: "Fácil",
            competencia: "Princípios expressos",
            banca: "IADES",
            tags: ["princípios", "LIMPE", "art. 37"],
          },
          {
            id: "ap-q-1-3",
            enunciado:
              "O princípio da legalidade, aplicado à Administração Pública, significa que:",
            alternativas: [
              {
                letra: "A",
                texto: "A Administração pode fazer tudo que a lei não proíbe.",
              },
              {
                letra: "B",
                texto:
                  "A Administração só pode atuar quando houver autorização legal.",
              },
              {
                letra: "C",
                texto:
                  "A Administração deve obedecer apenas às leis de natureza penal.",
              },
              {
                letra: "D",
                texto:
                  "Os agentes públicos podem agir de acordo com sua convicção pessoal.",
              },
              {
                letra: "E",
                texto: "A legalidade se aplica apenas aos atos vinculados.",
              },
            ],
            gabarito: "B",
            justificativa:
              'Para a Administração, vigora a "legalidade estrita" ou "positiva": só pode fazer o que a lei AUTORIZA. Diferente do cidadão, que pode fazer tudo que a lei não proíbe (legalidade negativa).',
            dificuldade: "Média",
            competencia: "Princípio da legalidade",
            banca: "IADES",
            tags: ["legalidade", "princípio"],
          },
          {
            id: "ap-q-1-4",
            enunciado:
              "Sobre a finalidade da Administração Pública, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A Administração existe para atender aos interesses pessoais dos governantes.",
              },
              {
                letra: "B",
                texto:
                  "O interesse público pode ser livremente renunciado pelo administrador.",
              },
              {
                letra: "C",
                texto:
                  "A finalidade precípua é a satisfação do interesse público.",
              },
              {
                letra: "D",
                texto:
                  "O interesse particular sempre prevalece sobre o coletivo.",
              },
              {
                letra: "E",
                texto:
                  "A Administração não está vinculada a qualquer finalidade específica.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A finalidade da Administração Pública é a satisfação do INTERESSE PÚBLICO, que é indisponível (não pode ser renunciado). O interesse coletivo prevalece sobre o particular (supremacia do interesse público).",
            dificuldade: "Fácil",
            competencia: "Finalidade da Administração",
            banca: "IADES",
            tags: ["finalidade", "interesse público"],
          },
          {
            id: "ap-q-1-5",
            enunciado:
              "O modelo de Administração Pública caracterizado pelo formalismo, hierarquia rígida, impessoalidade e profissionalização é denominado:",
            alternativas: [
              { letra: "A", texto: "Patrimonialista." },
              { letra: "B", texto: "Gerencial." },
              { letra: "C", texto: "Burocrático." },
              { letra: "D", texto: "Participativo." },
              { letra: "E", texto: "Neoliberal." },
            ],
            gabarito: "C",
            justificativa:
              "O modelo BUROCRÁTICO (Weber) caracteriza-se por: formalismo, hierarquia, impessoalidade, profissionalização (mérito), procedimentos padronizados. Foi dominante no Brasil de 1930 a 1990.",
            dificuldade: "Média",
            competencia: "Modelos de Administração",
            banca: "IADES",
            tags: ["burocrático", "modelos"],
          },
          {
            id: "ap-q-1-6",
            enunciado:
              "O princípio da eficiência, incluído no art. 37 da Constituição Federal pela Emenda Constitucional nº 19/98, determina que a Administração Pública deve:",
            alternativas: [
              {
                letra: "A",
                texto: "Buscar apenas a legalidade formal de seus atos.",
              },
              {
                letra: "B",
                texto:
                  "Alcançar os melhores resultados com os recursos disponíveis.",
              },
              {
                letra: "C",
                texto: "Priorizar a economicidade em detrimento da qualidade.",
              },
              {
                letra: "D",
                texto:
                  "Agir de forma sigilosa para evitar interferências externas.",
              },
              {
                letra: "E",
                texto: "Subordinar o interesse público ao interesse privado.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O princípio da EFICIÊNCIA exige que a Administração alcance os melhores resultados com o menor custo possível, mantendo a qualidade. Não é apenas economizar, mas otimizar a relação custo-benefício.",
            dificuldade: "Média",
            competencia: "Princípio da eficiência",
            banca: "IADES",
            tags: ["eficiência", "princípio"],
          },
          {
            id: "ap-q-1-7",
            enunciado:
              "A ANVISA, no contexto da organização administrativa brasileira, caracteriza-se como:",
            alternativas: [
              { letra: "A", texto: "Órgão da Administração Direta federal." },
              { letra: "B", texto: "Empresa pública prestadora de serviços." },
              {
                letra: "C",
                texto: "Autarquia federal vinculada ao Ministério da Saúde.",
              },
              { letra: "D", texto: "Sociedade de economia mista." },
              { letra: "E", texto: "Fundação pública de direito privado." },
            ],
            gabarito: "C",
            justificativa:
              "A ANVISA é uma AUTARQUIA federal sob regime especial (agência reguladora), integrante da Administração Indireta, vinculada ao Ministério da Saúde. Possui personalidade jurídica de direito público.",
            dificuldade: "Fácil",
            competencia: "Organização administrativa",
            banca: "IADES",
            tags: ["ANVISA", "autarquia"],
          },
          {
            id: "ap-q-1-8",
            enunciado:
              "O princípio da impessoalidade impõe à Administração Pública:",
            alternativas: [
              {
                letra: "A",
                texto: "Tratamento privilegiado aos apoiadores do governo.",
              },
              {
                letra: "B",
                texto:
                  "A possibilidade de promoção pessoal de autoridades em obras públicas.",
              },
              {
                letra: "C",
                texto:
                  "Atuação voltada ao interesse público e tratamento isonômico.",
              },
              {
                letra: "D",
                texto:
                  "A dispensa de fundamentação em atos que prejudiquem particulares.",
              },
              {
                letra: "E",
                texto: "Sigilo absoluto sobre todos os atos administrativos.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O princípio da IMPESSOALIDADE possui duas dimensões: (1) finalidade voltada ao interesse público; (2) tratamento isonômico. Proíbe favorecimentos, perseguições e promoção pessoal (art. 37, §1º, CF).",
            dificuldade: "Média",
            competencia: "Princípio da impessoalidade",
            banca: "IADES",
            tags: ["impessoalidade", "princípio"],
          },
          {
            id: "ap-q-1-9",
            enunciado:
              "Sobre a relação entre Estado, Governo e Administração, é INCORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "O Estado é pessoa jurídica de caráter permanente.",
              },
              {
                letra: "B",
                texto: "O Governo exerce a condução política do Estado.",
              },
              {
                letra: "C",
                texto:
                  "A Administração executa as políticas definidas pelo Governo.",
              },
              {
                letra: "D",
                texto:
                  "O Governo possui personalidade jurídica própria, distinta do Estado.",
              },
              {
                letra: "E",
                texto:
                  "A Administração atua de forma instrumental, vinculada à legalidade.",
              },
            ],
            gabarito: "D",
            justificativa:
              "O GOVERNO não possui personalidade jurídica própria. Quem possui personalidade jurídica é o ESTADO. O Governo é apenas a cúpula diretiva que exerce o poder em nome do Estado.",
            dificuldade: "Média",
            competencia: "Conceitos fundamentais",
            banca: "IADES",
            tags: ["Estado", "Governo", "personalidade jurídica"],
          },
          {
            id: "ap-q-1-10",
            enunciado:
              "No contexto da evolução dos modelos de Administração Pública no Brasil, a Reforma Administrativa de 1995 (PDRAE) buscou implementar o modelo:",
            alternativas: [
              {
                letra: "A",
                texto: "Patrimonialista, com ênfase nos privilégios pessoais.",
              },
              {
                letra: "B",
                texto: "Burocrático weberiano, com foco no formalismo.",
              },
              {
                letra: "C",
                texto: "Gerencial, com foco em resultados e eficiência.",
              },
              {
                letra: "D",
                texto: "Socialista, com estatização completa dos serviços.",
              },
              {
                letra: "E",
                texto: "Absolutista, com concentração de poder no Executivo.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O PDRAE (Plano Diretor da Reforma do Aparelho do Estado, 1995) implementou o modelo GERENCIAL, buscando eficiência, foco em resultados, descentralização e o conceito de cidadão-cliente.",
            dificuldade: "Média",
            competencia: "Evolução histórica",
            banca: "IADES",
            tags: ["PDRAE", "gerencial", "reforma"],
          },
        ],
      },
    },
    {
      id: "ap-topico-2",
      numero: 2,
      titulo: "Administração Pública direta e indireta",
      conteudo: {
        resumo: `
## Resumo Rápido

A Administração Pública brasileira divide-se em **DIRETA** e **INDIRETA**.

### Quadro Comparativo

| Aspecto | Adm. DIRETA | Adm. INDIRETA |
|---------|-------------|---------------|
| **O que é** | Entes federativos e seus órgãos | Entidades com personalidade própria |
| **Personalidade** | União, Estados, DF, Municípios | Autarquias, Fundações, EP, SEM |
| **Criação** | Constituição | Lei específica |
| **Relação** | Centralizada | Descentralizada |
| **Controle** | Hierárquico | Finalístico (tutela) |

### Entidades da Administração Indireta

| Entidade | Personalidade | Exemplo |
|----------|---------------|---------|
| **Autarquia** | Direito PÚBLICO | ANVISA, INSS, IBAMA |
| **Fundação Pública** | Dir. Público ou Privado | FUNAI, IBGE |
| **Empresa Pública** | Direito PRIVADO | Correios, BNDES, Caixa |
| **Soc. Economia Mista** | Direito PRIVADO | Petrobras, BB, Eletrobras |

### Para IADES:
- ANVISA = **Autarquia** federal (direito público)
- Autarquias e Fundações = concurso público
- EP e SEM = CLT, mas com concurso
        `,

        explicacao: `
## Explicação Didática

### 1. Organização Administrativa

A Administração Pública pode organizar-se de duas formas:

| Forma | Descrição | Resultado |
|-------|-----------|-----------|
| **Centralização** | O Estado executa diretamente | Adm. DIRETA |
| **Descentralização** | O Estado cria entidades | Adm. INDIRETA |

### 2. Administração Direta

A **Administração Direta** é composta pelos **entes federativos** e seus **órgãos**.

#### 2.1 Entes Federativos

| Ente | Âmbito | Chefia |
|------|--------|--------|
| **União** | Federal | Presidente da República |
| **Estados** | Estadual | Governador |
| **Distrito Federal** | Distrital | Governador |
| **Municípios** | Municipal | Prefeito |

#### 2.2 Órgãos Públicos

**Conceito**: Centros de competência sem personalidade jurídica própria.

**Características:**
- NÃO têm personalidade jurídica
- Integram a estrutura de uma pessoa jurídica
- Criados por **desconcentração**
- Relação de **hierarquia** e subordinação

**Exemplos:**
- Ministérios (União)
- Secretarias (Estados/Municípios)
- Departamentos, Divisões, Seções

#### 2.3 Classificação dos Órgãos

**Quanto à posição estatal:**
| Tipo | Características | Exemplo |
|------|-----------------|---------|
| **Independentes** | Cúpula, sem subordinação | Presidência, Congresso |
| **Autônomos** | Direção, autonomia | Ministérios |
| **Superiores** | Direção, sem autonomia | Gabinetes, Coordenações |
| **Subalternos** | Execução | Seções, Portarias |

### 3. Administração Indireta

A **Administração Indireta** é composta por entidades com personalidade jurídica própria, criadas para exercer atividades específicas.

#### 3.1 Características Comuns

- Personalidade jurídica **própria**
- Patrimônio **próprio**
- Autonomia administrativa e financeira
- Criação e extinção por **lei**
- Sujeição a **controle finalístico** (tutela)
- **Vinculação** (não subordinação) ao ente criador

#### 3.2 As Quatro Entidades

### A) AUTARQUIAS

**Conceito**: Entidades de direito público criadas para exercer atividades típicas de Estado.

| Característica | Descrição |
|----------------|-----------|
| **Personalidade** | Direito PÚBLICO |
| **Criação** | Lei específica (cria diretamente) |
| **Regime de pessoal** | Estatutário (concurso) |
| **Patrimônio** | Bens PÚBLICOS (impenhoráveis) |
| **Privilégios** | Mesmos da Fazenda Pública |
| **Responsabilidade** | Objetiva (art. 37, §6º, CF) |

**Exemplos:**
- **ANVISA** - vigilância sanitária
- **INSS** - previdência
- **IBAMA** - meio ambiente
- **BACEN** - banco central (autarquia especial)
- **ANATEL, ANEEL** - agências reguladoras

**Autarquias de Regime Especial:**
- Maior autonomia
- Dirigentes com mandato fixo
- Exemplos: Agências Reguladoras, Universidades

### B) FUNDAÇÕES PÚBLICAS

**Conceito**: Entidades criadas para atividades de interesse social (educação, saúde, cultura, pesquisa).

| Característica | Direito PÚBLICO | Direito PRIVADO |
|----------------|-----------------|-----------------|
| **Criação** | Lei cria | Lei autoriza |
| **Regime de pessoal** | Estatutário | CLT ou estatutário |
| **Patrimônio** | Público | Privado (afetado) |
| **Exemplo** | FUNASA | IBGE (discussão) |

**Exemplos:**
- FUNAI - indígenas
- FIOCRUZ - saúde
- FUNASA - saúde

### C) EMPRESAS PÚBLICAS (EP)

**Conceito**: Entidades de direito privado com capital 100% público.

| Característica | Descrição |
|----------------|-----------|
| **Personalidade** | Direito PRIVADO |
| **Capital** | 100% PÚBLICO |
| **Criação** | Lei AUTORIZA (não cria) |
| **Regime de pessoal** | CLT (empregados públicos) |
| **Forma jurídica** | Qualquer forma admitida |
| **Foro** | Justiça FEDERAL (se federal) |

**Exemplos:**
- **Correios** (ECT)
- **Caixa Econômica Federal**
- **BNDES**
- **INFRAERO**

### D) SOCIEDADES DE ECONOMIA MISTA (SEM)

**Conceito**: Entidades de direito privado com capital misto (público + privado), com maioria pública.

| Característica | Descrição |
|----------------|-----------|
| **Personalidade** | Direito PRIVADO |
| **Capital** | MISTO (maioria pública) |
| **Criação** | Lei AUTORIZA |
| **Regime de pessoal** | CLT |
| **Forma jurídica** | Apenas S.A. |
| **Foro** | Justiça ESTADUAL (regra) |

**Exemplos:**
- **Petrobras**
- **Banco do Brasil**
- **Eletrobras**

### 4. Comparativo EP vs. SEM

| Aspecto | Empresa Pública | Soc. Economia Mista |
|---------|-----------------|---------------------|
| **Capital** | 100% público | Misto (maioria pública) |
| **Forma jurídica** | Qualquer | Apenas S.A. |
| **Foro (federais)** | Justiça Federal | Justiça Estadual |
| **Regime pessoal** | CLT | CLT |

### 5. Descentralização vs. Desconcentração

| Conceito | O que é | Resultado |
|----------|---------|-----------|
| **Descentralização** | Cria nova PESSOA jurídica | Adm. Indireta |
| **Desconcentração** | Cria novo ÓRGÃO | Adm. Direta |

**Macete:**
- Des**C**entralização = **C**ria entidade
- Des**C**oncentração = **C**ria órgão (mesma pessoa)

### 6. Controle sobre a Administração Indireta

| Tipo de Controle | Descrição |
|------------------|-----------|
| **Tutela/Supervisão** | Controle finalístico pelo Ministério supervisor |
| **Tribunal de Contas** | Controle externo |
| **Judiciário** | Controle de legalidade |
| **Legislativo** | CPI, controle político |

⚠️ **Não há hierarquia** entre Adm. Direta e Indireta!

### 7. Aplicação na Vigilância Sanitária

| Entidade | Natureza | Nível |
|----------|----------|-------|
| **ANVISA** | Autarquia especial | Federal |
| **SES-GO** | Órgão (Adm. Direta) | Estadual |
| **SMS** | Órgão (Adm. Direta) | Municipal |
        `,

        pontosChave: [
          "Adm. DIRETA = entes federativos + órgãos (sem personalidade própria)",
          "Adm. INDIRETA = autarquias, fundações, EP, SEM (com personalidade própria)",
          "Autarquias = direito PÚBLICO, criadas por lei, regime estatutário",
          "EP e SEM = direito PRIVADO, lei autoriza, regime CLT",
          "EP = capital 100% público, qualquer forma jurídica, foro federal",
          "SEM = capital misto, apenas S.A., foro estadual",
          "ANVISA = autarquia federal de regime especial (agência reguladora)",
          "Descentralização cria ENTIDADE; Desconcentração cria ÓRGÃO",
          "Não há hierarquia entre Adm. Direta e Indireta (apenas tutela)",
          "Todas entidades da Adm. Indireta: concurso público para ingresso",
        ],

        armadilhas: [
          {
            titulo: "Confundir descentralização com desconcentração",
            descricao:
              "Descentralização cria nova pessoa jurídica (entidade). Desconcentração cria órgão na mesma pessoa.",
            dica: "DesCentralização = Cria entidade. DesCOncentração = Cria Órgão.",
          },
          {
            titulo: "Achar que há hierarquia entre Ministério e autarquia",
            descricao:
              "A relação é de VINCULAÇÃO (tutela), não subordinação hierárquica.",
            dica: "Ministério exerce supervisão/tutela, não hierarquia.",
          },
          {
            titulo: "Confundir EP com SEM",
            descricao:
              "EP = capital 100% público. SEM = capital misto. EP pode ter qualquer forma; SEM só S.A.",
            dica: "SEM sempre é S.A. e admite capital privado.",
          },
          {
            titulo: "Errar o foro das entidades federais",
            descricao:
              "EP federal = Justiça Federal. SEM federal = Justiça Estadual (regra).",
            dica: "Empresa Pública Federal = Justiça Federal.",
          },
        ],

        mnemonicos: [
          {
            termo: "FASE",
            significado:
              "Fundação, Autarquia, Sociedade de economia mista, Empresa pública",
            frase: "Adm. Indireta: FASE (4 entidades)",
          },
          {
            termo: "100-MIS",
            significado: "EP = 100% público; SEM = MISto",
            frase: "Capital: EP = 100% público, SEM = MISto",
          },
          {
            termo: "DC-DE",
            significado: "DesCentralização = Entidade; DesConcentração = Órgão",
            frase:
              "DesCentralização cria Entidade, DesConcentração distribui internamente",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-2-1",
            frente: "O que compõe a Administração DIRETA?",
            verso:
              "**Entes federativos e seus órgãos:**\n\n- União\n- Estados\n- Distrito Federal\n- Municípios\n\n+ Órgãos (Ministérios, Secretarias, etc.)\n\nCaracterística: NÃO têm personalidade jurídica própria (órgãos).",
            tags: ["administração direta", "órgãos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-2",
            frente: "Quais são as entidades da Administração INDIRETA?",
            verso:
              "**FASE:**\n\n1. **F**undações Públicas\n2. **A**utarquias\n3. **S**ociedades de Economia Mista\n4. **E**mpresas Públicas\n\nTodas têm personalidade jurídica PRÓPRIA.",
            tags: ["administração indireta", "entidades"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-3",
            frente:
              "Qual a diferença entre DESCENTRALIZAÇÃO e DESCONCENTRAÇÃO?",
            verso:
              "**DESCENTRALIZAÇÃO:**\n- Cria nova PESSOA jurídica (entidade)\n- Resulta na Adm. Indireta\n\n**DESCONCENTRAÇÃO:**\n- Cria ÓRGÃO (mesma pessoa)\n- Distribuição interna de competências\n\nMacete: DesCEntralização = Entidade",
            tags: ["descentralização", "desconcentração"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-4",
            frente: "Quais as características das AUTARQUIAS?",
            verso:
              "**AUTARQUIAS:**\n- Personalidade de direito PÚBLICO\n- Criadas por LEI (diretamente)\n- Regime ESTATUTÁRIO (concurso)\n- Bens PÚBLICOS (impenhoráveis)\n- Privilégios da Fazenda Pública\n\nExemplos: ANVISA, INSS, IBAMA",
            tags: ["autarquias", "características"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-5",
            frente:
              "Qual a diferença entre Empresa Pública e Sociedade de Economia Mista?",
            verso:
              "**EMPRESA PÚBLICA:**\n- Capital 100% PÚBLICO\n- Qualquer forma jurídica\n- Foro: Justiça FEDERAL (se federal)\n\n**SEM:**\n- Capital MISTO (maioria pública)\n- Apenas S.A.\n- Foro: Justiça ESTADUAL\n\nAmbas: CLT, lei autoriza criação",
            tags: ["EP", "SEM", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-6",
            frente: "Qual a natureza jurídica da ANVISA?",
            verso:
              "**AUTARQUIA federal de regime especial** (agência reguladora).\n\n- Vinculada ao Ministério da Saúde\n- Personalidade de direito público\n- Autonomia reforçada\n- Dirigentes com mandato fixo\n- Criada pela Lei 9.782/1999",
            tags: ["ANVISA", "autarquia"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-7",
            frente: "O que é TUTELA ou SUPERVISÃO MINISTERIAL?",
            verso:
              "É o **controle finalístico** exercido pela Adm. Direta sobre a Indireta.\n\n- NÃO é hierarquia\n- NÃO é subordinação\n- Verifica se a entidade cumpre sua finalidade\n\nExemplo: MS supervisiona a ANVISA",
            tags: ["tutela", "controle"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-2-8",
            frente: "Qual o regime de pessoal nas entidades da Adm. Indireta?",
            verso:
              "**AUTARQUIAS e FUNDAÇÕES públicas:**\n→ Estatutário (servidores)\n\n**EP e SEM:**\n→ CLT (empregados públicos)\n\n⚠️ **Todas exigem CONCURSO PÚBLICO** para ingresso (art. 37, II, CF)",
            tags: ["regime pessoal", "concurso"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-2-1",
            enunciado: "A Administração Pública DIRETA é composta por:",
            alternativas: [
              { letra: "A", texto: "Autarquias e fundações públicas." },
              {
                letra: "B",
                texto: "Empresas públicas e sociedades de economia mista.",
              },
              {
                letra: "C",
                texto:
                  "União, Estados, Distrito Federal, Municípios e seus órgãos.",
              },
              { letra: "D", texto: "Apenas as autarquias de regime especial." },
              {
                letra: "E",
                texto: "Entidades com personalidade jurídica própria.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A Administração DIRETA é composta pelos entes federativos (União, Estados, DF e Municípios) e seus órgãos. As autarquias, fundações, EP e SEM compõem a Administração INDIRETA.",
            dificuldade: "Fácil",
            competencia: "Administração Direta",
            banca: "IADES",
            tags: ["administração direta", "composição"],
          },
          {
            id: "ap-q-2-2",
            enunciado: "São entidades da Administração Indireta, EXCETO:",
            alternativas: [
              { letra: "A", texto: "Autarquias." },
              { letra: "B", texto: "Fundações públicas." },
              { letra: "C", texto: "Ministérios." },
              { letra: "D", texto: "Empresas públicas." },
              { letra: "E", texto: "Sociedades de economia mista." },
            ],
            gabarito: "C",
            justificativa:
              "MINISTÉRIOS são ÓRGÃOS da Administração DIRETA, não entidades da Indireta. A Administração Indireta é composta por: Autarquias, Fundações, EP e SEM (FASE).",
            dificuldade: "Fácil",
            competencia: "Administração Indireta",
            banca: "IADES",
            tags: ["administração indireta", "órgãos"],
          },
          {
            id: "ap-q-2-3",
            enunciado: "A criação de uma autarquia federal ocorre mediante:",
            alternativas: [
              { letra: "A", texto: "Decreto do Presidente da República." },
              { letra: "B", texto: "Lei específica que a cria diretamente." },
              {
                letra: "C",
                texto: "Lei que autoriza sua criação, seguida de registro.",
              },
              { letra: "D", texto: "Portaria do Ministério competente." },
              { letra: "E", texto: "Resolução do Congresso Nacional." },
            ],
            gabarito: "B",
            justificativa:
              "As AUTARQUIAS são criadas diretamente por LEI ESPECÍFICA (art. 37, XIX, CF). Já as EP, SEM e fundações privadas são autorizadas por lei e criadas por registro.",
            dificuldade: "Fácil",
            competencia: "Criação de autarquias",
            banca: "IADES",
            tags: ["autarquias", "criação"],
          },
          {
            id: "ap-q-2-4",
            enunciado:
              "A diferença entre descentralização e desconcentração administrativa é que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A descentralização cria órgãos; a desconcentração cria entidades.",
              },
              {
                letra: "B",
                texto:
                  "A descentralização cria entidades com personalidade própria; a desconcentração cria órgãos.",
              },
              { letra: "C", texto: "Ambas significam a mesma coisa." },
              {
                letra: "D",
                texto:
                  "A desconcentração transfere competências para particulares.",
              },
              {
                letra: "E",
                texto: "A descentralização sempre ocorre por delegação.",
              },
            ],
            gabarito: "B",
            justificativa:
              "DESCENTRALIZAÇÃO = cria nova pessoa jurídica (entidade da Adm. Indireta). DESCONCENTRAÇÃO = cria órgão dentro da mesma pessoa jurídica, distribuindo competências internamente.",
            dificuldade: "Média",
            competencia: "Descentralização/Desconcentração",
            banca: "IADES",
            tags: ["descentralização", "desconcentração"],
          },
          {
            id: "ap-q-2-5",
            enunciado:
              "A ANVISA, Agência Nacional de Vigilância Sanitária, é uma:",
            alternativas: [
              { letra: "A", texto: "Empresa pública federal." },
              { letra: "B", texto: "Sociedade de economia mista." },
              { letra: "C", texto: "Autarquia federal de regime especial." },
              { letra: "D", texto: "Órgão do Ministério da Saúde." },
              { letra: "E", texto: "Fundação pública de direito privado." },
            ],
            gabarito: "C",
            justificativa:
              "A ANVISA é uma AUTARQUIA federal de regime especial (agência reguladora), criada pela Lei 9.782/1999, vinculada ao Ministério da Saúde, com personalidade jurídica de direito público.",
            dificuldade: "Fácil",
            competencia: "Natureza jurídica da ANVISA",
            banca: "IADES",
            tags: ["ANVISA", "autarquia"],
          },
          {
            id: "ap-q-2-6",
            enunciado:
              "Sobre as Empresas Públicas e Sociedades de Economia Mista, é CORRETO afirmar:",
            alternativas: [
              { letra: "A", texto: "Ambas têm capital 100% público." },
              {
                letra: "B",
                texto: "Ambas adotam regime estatutário para seus empregados.",
              },
              {
                letra: "C",
                texto:
                  "EP tem capital 100% público; SEM tem capital misto com maioria pública.",
              },
              {
                letra: "D",
                texto: "SEM pode ter qualquer forma jurídica; EP apenas S.A.",
              },
              {
                letra: "E",
                texto:
                  "Não precisam realizar concurso público para contratação.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A diferença principal é o CAPITAL: EP = 100% público; SEM = misto (maioria pública). Ambas adotam CLT e exigem concurso. EP pode ter qualquer forma jurídica; SEM apenas S.A.",
            dificuldade: "Média",
            competencia: "EP vs. SEM",
            banca: "IADES",
            tags: ["empresa pública", "SEM"],
          },
          {
            id: "ap-q-2-7",
            enunciado:
              "O controle exercido pelo Ministério da Saúde sobre a ANVISA denomina-se:",
            alternativas: [
              { letra: "A", texto: "Controle hierárquico." },
              { letra: "B", texto: "Subordinação administrativa." },
              { letra: "C", texto: "Tutela ou supervisão ministerial." },
              { letra: "D", texto: "Vinculação direta." },
              { letra: "E", texto: "Autotutela." },
            ],
            gabarito: "C",
            justificativa:
              "A relação entre Ministério e entidades da Adm. Indireta é de TUTELA ou SUPERVISÃO MINISTERIAL (controle finalístico), não hierarquia. A ANVISA é vinculada ao MS, não subordinada.",
            dificuldade: "Média",
            competencia: "Controle da Adm. Indireta",
            banca: "IADES",
            tags: ["tutela", "supervisão"],
          },
          {
            id: "ap-q-2-8",
            enunciado:
              "As ações judiciais contra a Caixa Econômica Federal (empresa pública federal) são julgadas pela:",
            alternativas: [
              { letra: "A", texto: "Justiça Estadual." },
              { letra: "B", texto: "Justiça do Trabalho." },
              { letra: "C", texto: "Justiça Federal." },
              { letra: "D", texto: "Justiça Militar." },
              { letra: "E", texto: "Tribunais de Contas." },
            ],
            gabarito: "C",
            justificativa:
              "As EMPRESAS PÚBLICAS federais têm foro na JUSTIÇA FEDERAL (art. 109, I, CF). Já as Sociedades de Economia Mista federais são julgadas na Justiça Estadual (regra).",
            dificuldade: "Média",
            competencia: "Foro das entidades",
            banca: "IADES",
            tags: ["empresa pública", "foro"],
          },
          {
            id: "ap-q-2-9",
            enunciado: "Sobre os órgãos públicos, é INCORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "Não possuem personalidade jurídica própria.",
              },
              {
                letra: "B",
                texto: "São criados por desconcentração administrativa.",
              },
              {
                letra: "C",
                texto: "Integram a estrutura de uma pessoa jurídica.",
              },
              {
                letra: "D",
                texto:
                  "Possuem capacidade processual plena para qualquer ação.",
              },
              {
                letra: "E",
                texto:
                  "São centros de competência para determinadas atribuições.",
              },
            ],
            gabarito: "D",
            justificativa:
              "Os órgãos NÃO possuem personalidade jurídica própria, portanto, em regra, não têm capacidade processual. Excepcionalmente, órgãos independentes podem impetrar MS para defender suas prerrogativas.",
            dificuldade: "Média",
            competencia: "Órgãos públicos",
            banca: "IADES",
            tags: ["órgãos", "características"],
          },
          {
            id: "ap-q-2-10",
            enunciado:
              "O regime de pessoal aplicável aos empregados das Empresas Públicas é o:",
            alternativas: [
              { letra: "A", texto: "Estatutário, regido pela Lei 8.112/90." },
              { letra: "B", texto: "Celetista, regido pela CLT." },
              { letra: "C", texto: "Misto, parte estatutário e parte CLT." },
              {
                letra: "D",
                texto: "Especial, sem necessidade de concurso público.",
              },
              {
                letra: "E",
                texto: "Temporário, com contratos por prazo determinado.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Os empregados de EMPRESAS PÚBLICAS e SEM são regidos pela CLT (celetistas). São empregados públicos, não servidores estatutários. Porém, a contratação exige CONCURSO PÚBLICO (art. 37, II, CF).",
            dificuldade: "Fácil",
            competencia: "Regime de pessoal",
            banca: "IADES",
            tags: ["CLT", "empresa pública"],
          },
        ],
      },
    },
    {
      id: "ap-topico-3",
      numero: 3,
      titulo: "Centralização, descentralização, desconcentração e delegação",
      conteudo: {
        resumo: `
## Resumo Rápido

### Quadro Comparativo Principal

| Conceito | O que cria | Vínculo | Hierarquia |
|----------|-----------|---------|------------|
| **Centralização** | - | Estado executa diretamente | - |
| **Descentralização** | Nova PESSOA jurídica | Vinculação (tutela) | NÃO há |
| **Desconcentração** | Novo ÓRGÃO | Subordinação | SIM |
| **Delegação** | Transferência de competência | Temporária | Depende |

### Descentralização vs. Desconcentração

| Aspecto | DesCENTRALIZAÇÃO | DesCONCENTRAÇÃO |
|---------|-----------------|-----------------|
| **Cria** | Entidade (pessoa) | Órgão |
| **Resultado** | Adm. INDIRETA | Dentro da Adm. DIRETA |
| **Relação** | Vinculação | Subordinação |
| **Controle** | Tutela (finalístico) | Hierárquico |

### Para IADES:
- Descentralização = nova PESSOA (entidade)
- Desconcentração = novo ÓRGÃO (mesma pessoa)
- Delegação = transferência de COMPETÊNCIA
- Avocação = superior toma para si competência do subordinado
        `,

        explicacao: `
## Explicação Didática

### 1. Centralização e Descentralização

#### 1.1 Centralização

**Conceito:** O Estado executa suas funções diretamente, por meio de seus próprios órgãos e agentes.

**Características:**
- Concentração de atividades no ente político (União, Estado, Município)
- Execução através de órgãos internos
- Administração Direta em ação
- Maior controle direto

**Exemplo:**
> A SES-GO fiscalizando diretamente estabelecimentos de saúde (órgão da Administração Direta estadual).

#### 1.2 Descentralização

**Conceito:** O Estado transfere a execução de atividades para outras pessoas jurídicas.

**Criação de NOVA PESSOA:**
- Entidades da Administração Indireta
- Ou entidades privadas (delegação)

**Formas de Descentralização:**

| Forma | Descrição | Resultado |
|-------|-----------|-----------|
| **Por outorga** | Lei cria entidade e transfere titularidade | Autarquias, fundações |
| **Por delegação** | Contrato/ato transfere apenas execução | Concessionárias, permissionárias |
| **Territorial** | Criação de territórios | Territórios federais |

#### 1.3 Descentralização por Outorga

**Características:**
- Criação por **lei**
- Transfere **titularidade** + execução
- Prazo **indeterminado**
- Resulta em Administração Indireta

**Entidades criadas:**
- Autarquias
- Fundações públicas
- Empresas públicas
- Sociedades de economia mista

#### 1.4 Descentralização por Delegação (Colaboração)

**Características:**
- Por **contrato ou ato**
- Transfere apenas **execução** (não titularidade)
- Prazo **determinado**
- Pessoa **privada**

**Modalidades:**
| Modalidade | Instrumento | Exemplo |
|------------|-------------|---------|
| **Concessão** | Contrato | Concessionária de rodovia |
| **Permissão** | Contrato (precário) | Transporte coletivo |
| **Autorização** | Ato unilateral | Serviço de táxi |

### 2. Desconcentração

#### 2.1 Conceito

**Desconcentração** é a distribuição interna de competências dentro da **mesma pessoa jurídica**, criando novos órgãos.

**Características:**
- Não cria nova pessoa jurídica
- Cria **ÓRGÃOS**
- Relação de **hierarquia e subordinação**
- Dentro da Administração Direta ou Indireta

#### 2.2 Formas de Desconcentração

| Critério | Descrição | Exemplo |
|----------|-----------|---------|
| **Territorial** | Por área geográfica | Superintendências regionais |
| **Material** | Por matéria/assunto | Ministérios por tema |
| **Hierárquico** | Por grau de autoridade | Secretarias, departamentos |

#### 2.3 Exemplos

**Na Administração Direta:**
- Ministério da Saúde → Secretarias → Departamentos
- Secretaria Estadual → Superintendências → Gerências

**Na Administração Indireta:**
- ANVISA (autarquia) → Gerências Regionais
- Banco do Brasil (SEM) → Agências

### 3. Comparativo Fundamental

#### 3.1 Descentralização vs. Desconcentração

| Aspecto | DESCENTRALIZAÇÃO | DESCONCENTRAÇÃO |
|---------|------------------|-----------------|
| **O que cria** | Nova PESSOA jurídica | Novo ÓRGÃO |
| **Resultado** | Administração Indireta | Mesma pessoa jurídica |
| **Relação** | Vinculação (tutela) | Subordinação (hierarquia) |
| **Controle** | Finalístico | Hierárquico |
| **Personalidade** | Entidade tem | Órgão não tem |

#### 3.2 Macete

> **Des-C-entralização** = **C**ria entidade (pessoa)
> **Des-C-oncentração** = **C**ria órgão (mesma pessoa)

Ou ainda:
> **Descentralização** = **E**ntidade (sai para fora)
> **Desconcentração** = **Ó**rgão (distribui dentro)

### 4. Delegação de Competência

#### 4.1 Conceito

**Delegação** é a transferência temporária de competência de um órgão/agente para outro, normalmente de hierarquia inferior.

**Base legal:** Lei 9.784/99, arts. 11-14

#### 4.2 Características

| Aspecto | Descrição |
|---------|-----------|
| **Natureza** | Transferência temporária |
| **Revogabilidade** | A qualquer tempo |
| **Responsabilidade** | Do delegado (quem recebe) |
| **Formalização** | Deve ser publicada |
| **Hierarquia** | Não precisa (pode ser horizontal) |

#### 4.3 Competências Indelegáveis (art. 13, Lei 9.784)

| Competência | Motivo |
|-------------|--------|
| **Edição de atos normativos** | Natureza legislativa |
| **Decisão de recursos administrativos** | Competência recursal |
| **Matérias de competência exclusiva** | Definição legal |

> **Mnemônico:** "NÃO delega: **NR-E**" (Normativos, Recursos, Exclusivos)

#### 4.4 Requisitos da Delegação

1. **Não ser competência exclusiva** do delegante
2. **Publicação** no meio oficial
3. **Especificação** das matérias e poderes
4. **Ressalva de avocação** pelo delegante

### 5. Avocação de Competência

#### 5.1 Conceito

**Avocação** é o movimento inverso da delegação: o superior **atrai para si** competência de órgão/agente hierarquicamente inferior.

**Base legal:** Lei 9.784/99, art. 15

#### 5.2 Características

| Aspecto | Descrição |
|---------|-----------|
| **Direção** | De baixo para cima |
| **Requisito** | Motivos relevantes e justificados |
| **Caráter** | Excepcional e temporário |
| **Pressuposto** | Relação de hierarquia |

#### 5.3 Requisitos

- **Motivos relevantes** (não é livre)
- Caráter **temporário**
- **Hierarquia** (só em relação de subordinação)
- **Publicidade**

### 6. Delegação vs. Avocação

| Aspecto | DELEGAÇÃO | AVOCAÇÃO |
|---------|-----------|----------|
| **Direção** | Superior → inferior | Inferior → superior |
| **Requisito** | Conveniência | Motivos relevantes |
| **Hierarquia** | Não exige | Exige |
| **Excepcionalidade** | Normal | Excepcional |
| **Competência** | Vai para baixo | Vem para cima |

### 7. Controle

#### 7.1 Controle Hierárquico

Exercido dentro da **mesma pessoa jurídica** (desconcentração).

**Características:**
- Automático e permanente
- Pleno (legalidade e mérito)
- Independe de lei específica

**Poderes do superior:**
- Ordenar, revisar, avocar, delegar
- Anular e revogar atos
- Aplicar sanções disciplinares

#### 7.2 Controle Finalístico (Tutela/Supervisão)

Exercido pela Administração Direta sobre a **Indireta** (descentralização).

**Características:**
- Não há hierarquia
- Depende de lei
- Limitado aos fins (não é pleno)
- Verifica cumprimento da finalidade

**Exemplo:**
> Ministério da Saúde supervisiona a ANVISA (autarquia).

### 8. Aplicação na Vigilância Sanitária

#### 8.1 Descentralização no SNVS

| Nível | Entidade/Órgão | Natureza |
|-------|----------------|----------|
| **Federal** | ANVISA | Autarquia (descentralização) |
| **Estadual** | VISA-GO (SES-GO) | Órgão (desconcentração) |
| **Municipal** | VISA Municipal | Órgão (desconcentração) |

#### 8.2 Delegação na VISA

- Fiscal pode receber delegação para praticar atos específicos
- Competências indelegáveis: interdição definitiva (em regra, autoridade superior)
- Avocação: coordenador pode avocar caso de fiscalização em situações especiais
        `,

        pontosChave: [
          "Centralização: Estado executa diretamente por seus órgãos",
          "Descentralização: cria nova PESSOA jurídica (entidade)",
          "Desconcentração: cria novo ÓRGÃO (mesma pessoa jurídica)",
          "Descentralização por outorga: lei cria, transfere titularidade (Adm. Indireta)",
          "Descentralização por delegação: contrato/ato, só execução (concessionárias)",
          "Descentralização → vinculação (tutela); Desconcentração → subordinação (hierarquia)",
          "Delegação: transferência temporária de competência, revogável",
          "NÃO se delega: atos normativos, recursos, competência exclusiva",
          "Avocação: superior atrai competência do inferior (excepcional, temporária)",
          "ANVISA = descentralização (autarquia); VISA estadual/municipal = desconcentração",
        ],

        armadilhas: [
          {
            titulo: "Confundir descentralização com desconcentração",
            descricao:
              "Descentralização CRIA pessoa jurídica. Desconcentração cria ÓRGÃO.",
            dica: "DesCENTRALIZAÇÃO = Entidade. DesCONCENTRAÇÃO = Órgão.",
          },
          {
            titulo: "Achar que há hierarquia na Administração Indireta",
            descricao:
              "Entre Ministério e Autarquia há VINCULAÇÃO (tutela), não hierarquia.",
            dica: "Hierarquia só dentro da mesma pessoa jurídica.",
          },
          {
            titulo: "Confundir delegação com avocação",
            descricao:
              "Delegação transfere para baixo/lado. Avocação puxa para cima.",
            dica: "Delega (dá). Avoca (toma).",
          },
          {
            titulo: "Tentar delegar competência exclusiva",
            descricao:
              "Competências exclusivas, atos normativos e decisões recursais NÃO podem ser delegadas.",
            dica: "Mnemônico: NRE - Normativos, Recursos, Exclusivos.",
          },
        ],

        mnemonicos: [
          {
            termo: "DC-DE",
            significado: "DesCentralização = Entidade; DesCOncentração = Órgão",
            frase: "DesCentralização cria Entidade, DesCOncentração cria Órgão",
          },
          {
            termo: "NRE",
            significado: "Não delega: Normativos, Recursos, Exclusivos",
            frase: "Competências NRE não podem ser delegadas",
          },
          {
            termo: "DAVA",
            significado: "Delegação=Dá, Avocação=Vem pra cima Atrai",
            frase: "Delega (dá pra baixo), Avoca (atrai pra cima)",
          },
          {
            termo: "VH",
            significado:
              "Vinculação (Adm. Indireta), Hierarquia (Desconcentração)",
            frase:
              "Descentralização = Vinculação; Desconcentração = Hierarquia",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-3-1",
            frente:
              "Qual a diferença entre DESCENTRALIZAÇÃO e DESCONCENTRAÇÃO?",
            verso:
              "**DESCENTRALIZAÇÃO:**\n- Cria nova PESSOA jurídica\n- Resulta em Adm. Indireta\n- Relação de VINCULAÇÃO\n\n**DESCONCENTRAÇÃO:**\n- Cria novo ÓRGÃO\n- Mesma pessoa jurídica\n- Relação de SUBORDINAÇÃO",
            tags: ["descentralização", "desconcentração"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-2",
            frente: "O que é DESCENTRALIZAÇÃO POR OUTORGA?",
            verso:
              "**Outorga:**\n\n- Criação por LEI\n- Transfere TITULARIDADE + execução\n- Prazo INDETERMINADO\n- Cria entidades da Adm. Indireta\n\nExemplos: ANVISA, INSS, Petrobras",
            tags: ["outorga", "descentralização"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-3",
            frente: "O que é DESCENTRALIZAÇÃO POR DELEGAÇÃO?",
            verso:
              "**Delegação/Colaboração:**\n\n- Por CONTRATO ou ato\n- Transfere apenas EXECUÇÃO (não titularidade)\n- Prazo DETERMINADO\n- Pessoa PRIVADA\n\nExemplos: Concessionárias, permissionárias",
            tags: ["delegação", "descentralização"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-4",
            frente: "Quais competências NÃO podem ser delegadas?",
            verso:
              "**Art. 13, Lei 9.784/99:**\n\n1. **N**ormativos - edição de atos normativos\n2. **R**ecursos - decisão de recursos\n3. **E**xclusivas - competência exclusiva\n\nMnemônico: **NRE**",
            tags: ["delegação", "indelegável"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-5",
            frente: "Qual a diferença entre DELEGAÇÃO e AVOCAÇÃO?",
            verso:
              "**DELEGAÇÃO:**\n- Competência vai PARA BAIXO/lado\n- Não exige hierarquia\n- Conveniência\n\n**AVOCAÇÃO:**\n- Competência vem PARA CIMA\n- EXIGE hierarquia\n- Motivos relevantes\n- Excepcional",
            tags: ["delegação", "avocação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-6",
            frente: "Qual a diferença entre TUTELA e HIERARQUIA?",
            verso:
              "**TUTELA (Supervisão):**\n- Adm. Direta sobre INDIRETA\n- NÃO há subordinação\n- Controle finalístico\n- Depende de lei\n\n**HIERARQUIA:**\n- Dentro da MESMA pessoa\n- Relação de subordinação\n- Controle pleno\n- Automático",
            tags: ["tutela", "hierarquia"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-7",
            frente: "O que é CENTRALIZAÇÃO administrativa?",
            verso:
              "**Centralização:**\n\nO Estado executa suas funções DIRETAMENTE, por meio de seus próprios órgãos e agentes.\n\n- Administração DIRETA\n- Maior controle\n- Órgãos internos executam",
            tags: ["centralização"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-3-8",
            frente:
              "A ANVISA é exemplo de centralização, descentralização ou desconcentração?",
            verso:
              "**DESCENTRALIZAÇÃO**\n\nA ANVISA é uma **AUTARQUIA** federal (pessoa jurídica própria).\n\n- Criada por lei (outorga)\n- Vinculada ao Ministério da Saúde\n- Administração INDIRETA\n\nNÃO há hierarquia entre MS e ANVISA.",
            tags: ["ANVISA", "descentralização"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-3-1",
            enunciado:
              "A criação de uma autarquia federal representa um exemplo de:",
            alternativas: [
              { letra: "A", texto: "Centralização administrativa." },
              { letra: "B", texto: "Desconcentração administrativa." },
              { letra: "C", texto: "Descentralização por outorga." },
              { letra: "D", texto: "Delegação de competência." },
              { letra: "E", texto: "Avocação de competência." },
            ],
            gabarito: "C",
            justificativa:
              "A criação de autarquia é DESCENTRALIZAÇÃO POR OUTORGA: a lei cria nova pessoa jurídica e transfere a titularidade e execução de serviço público.",
            dificuldade: "Fácil",
            competencia: "Descentralização",
            banca: "IADES",
            tags: ["descentralização", "outorga"],
          },
          {
            id: "ap-q-3-2",
            enunciado:
              "A diferença fundamental entre descentralização e desconcentração administrativa está em que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A descentralização cria órgãos e a desconcentração cria entidades.",
              },
              {
                letra: "B",
                texto:
                  "A descentralização cria nova pessoa jurídica e a desconcentração distribui competências dentro da mesma pessoa.",
              },
              { letra: "C", texto: "Ambas criam novas pessoas jurídicas." },
              { letra: "D", texto: "A desconcentração sempre é temporária." },
              {
                letra: "E",
                texto: "A descentralização não cria vínculos jurídicos.",
              },
            ],
            gabarito: "B",
            justificativa:
              "DESCENTRALIZAÇÃO cria nova PESSOA jurídica (entidade). DESCONCENTRAÇÃO cria ÓRGÃOS dentro da mesma pessoa jurídica, distribuindo competências internamente.",
            dificuldade: "Fácil",
            competencia: "Distinção conceitual",
            banca: "IADES",
            tags: ["descentralização", "desconcentração"],
          },
          {
            id: "ap-q-3-3",
            enunciado:
              "Conforme a Lei 9.784/99, NÃO podem ser objeto de delegação:",
            alternativas: [
              { letra: "A", texto: "Atos de expediente." },
              { letra: "B", texto: "Atos de instrução processual." },
              {
                letra: "C",
                texto:
                  "Edição de atos normativos e decisão de recursos administrativos.",
              },
              { letra: "D", texto: "Atos vinculados de qualquer natureza." },
              { letra: "E", texto: "Atos praticados em regime de urgência." },
            ],
            gabarito: "C",
            justificativa:
              "O art. 13 da Lei 9.784/99 veda a delegação de: edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva (NRE).",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["delegação", "indelegável"],
          },
          {
            id: "ap-q-3-4",
            enunciado: "A avocação de competência caracteriza-se por:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Ser transferência permanente de competência para órgão inferior.",
              },
              {
                letra: "B",
                texto:
                  "Ser atração temporária de competência de órgão inferior para o superior, em caráter excepcional.",
              },
              {
                letra: "C",
                texto: "Não depender de hierarquia entre os órgãos.",
              },
              { letra: "D", texto: "Criar nova pessoa jurídica." },
              { letra: "E", texto: "Ser obrigatória sempre que solicitada." },
            ],
            gabarito: "B",
            justificativa:
              "AVOCAÇÃO é a atração TEMPORÁRIA de competência de órgão INFERIOR para o SUPERIOR, em caráter EXCEPCIONAL e por motivos relevantes. Exige relação de hierarquia.",
            dificuldade: "Média",
            competencia: "Avocação",
            banca: "IADES",
            tags: ["avocação", "competência"],
          },
          {
            id: "ap-q-3-5",
            enunciado:
              "O controle exercido pelo Ministério da Saúde sobre a ANVISA denomina-se:",
            alternativas: [
              { letra: "A", texto: "Controle hierárquico." },
              { letra: "B", texto: "Tutela ou supervisão ministerial." },
              { letra: "C", texto: "Controle autárquico." },
              { letra: "D", texto: "Subordinação administrativa." },
              { letra: "E", texto: "Autotutela." },
            ],
            gabarito: "B",
            justificativa:
              "O controle da Adm. Direta sobre a Indireta é chamado de TUTELA ou SUPERVISÃO MINISTERIAL. Não há hierarquia entre eles, mas vinculação para verificar o cumprimento das finalidades.",
            dificuldade: "Fácil",
            competencia: "Tutela administrativa",
            banca: "IADES",
            tags: ["tutela", "supervisão"],
          },
          {
            id: "ap-q-3-6",
            enunciado:
              "A criação de departamentos e divisões dentro de um ministério é exemplo de:",
            alternativas: [
              { letra: "A", texto: "Descentralização por outorga." },
              { letra: "B", texto: "Descentralização por delegação." },
              { letra: "C", texto: "Desconcentração administrativa." },
              { letra: "D", texto: "Desestatização." },
              { letra: "E", texto: "Privatização." },
            ],
            gabarito: "C",
            justificativa:
              "A criação de departamentos e divisões dentro do mesmo ministério é DESCONCENTRAÇÃO: distribuição interna de competências, criando órgãos dentro da mesma pessoa jurídica.",
            dificuldade: "Fácil",
            competencia: "Desconcentração",
            banca: "IADES",
            tags: ["desconcentração", "órgãos"],
          },
          {
            id: "ap-q-3-7",
            enunciado:
              "A concessão de serviço público a uma empresa privada representa:",
            alternativas: [
              { letra: "A", texto: "Descentralização por outorga." },
              { letra: "B", texto: "Descentralização por delegação." },
              { letra: "C", texto: "Desconcentração administrativa." },
              { letra: "D", texto: "Centralização administrativa." },
              { letra: "E", texto: "Avocação de competência." },
            ],
            gabarito: "B",
            justificativa:
              "A CONCESSÃO de serviço público é DESCENTRALIZAÇÃO POR DELEGAÇÃO (ou colaboração): por contrato, transfere-se apenas a EXECUÇÃO (não a titularidade) para pessoa privada.",
            dificuldade: "Média",
            competencia: "Descentralização por delegação",
            banca: "IADES",
            tags: ["concessão", "delegação"],
          },
          {
            id: "ap-q-3-8",
            enunciado:
              "Sobre a delegação de competência, é CORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "É irrevogável após formalizada." },
              {
                letra: "B",
                texto: "Depende necessariamente de relação hierárquica.",
              },
              {
                letra: "C",
                texto: "Pode ser revogada a qualquer tempo pelo delegante.",
              },
              { letra: "D", texto: "Transfere definitivamente a competência." },
              { letra: "E", texto: "Não precisa ser publicada." },
            ],
            gabarito: "C",
            justificativa:
              "A delegação é REVOGÁVEL a qualquer tempo pelo delegante. É temporária, não transfere definitivamente e deve ser publicada. Não exige hierarquia necessariamente.",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["delegação", "revogação"],
          },
          {
            id: "ap-q-3-9",
            enunciado:
              "A relação entre a Secretaria Estadual de Saúde (SES-GO) e sua Superintendência de Vigilância Sanitária é de:",
            alternativas: [
              { letra: "A", texto: "Vinculação (tutela)." },
              { letra: "B", texto: "Hierarquia e subordinação." },
              { letra: "C", texto: "Independência total." },
              { letra: "D", texto: "Descentralização por outorga." },
              { letra: "E", texto: "Delegação de serviços." },
            ],
            gabarito: "B",
            justificativa:
              "A Superintendência é ÓRGÃO dentro da SES-GO (desconcentração), portanto há relação de HIERARQUIA e SUBORDINAÇÃO. Vinculação só existe entre pessoas jurídicas diferentes.",
            dificuldade: "Média",
            competencia: "Hierarquia",
            banca: "IADES",
            tags: ["hierarquia", "órgãos"],
          },
          {
            id: "ap-q-3-10",
            enunciado:
              "A descentralização por outorga diferencia-se da descentralização por delegação porque:",
            alternativas: [
              {
                letra: "A",
                texto: "A outorga transfere apenas a execução do serviço.",
              },
              {
                letra: "B",
                texto:
                  "A delegação cria nova pessoa jurídica de direito público.",
              },
              {
                letra: "C",
                texto:
                  "A outorga transfere a titularidade e a execução; a delegação transfere apenas a execução.",
              },
              {
                letra: "D",
                texto: "Ambas criam entidades da Administração Indireta.",
              },
              { letra: "E", texto: "A delegação tem prazo indeterminado." },
            ],
            gabarito: "C",
            justificativa:
              "OUTORGA: lei cria entidade e transfere TITULARIDADE + execução. DELEGAÇÃO: contrato/ato transfere apenas EXECUÇÃO para pessoa privada, mantendo a titularidade com o Estado.",
            dificuldade: "Média",
            competencia: "Outorga vs. delegação",
            banca: "IADES",
            tags: ["outorga", "delegação"],
          },
        ],
      },
    },
    {
      id: "ap-topico-4",
      numero: 4,
      titulo: "Princípios da Administração Pública previstos no art. 37 da Constituição Federal",
      conteudo: {
        resumo: `
## Resumo Rápido

O **art. 37, caput, da Constituição Federal** estabelece os princípios expressos da Administração Pública:

### Os 5 Princípios - LIMPE

| Princípio | Significado | Palavra-chave |
|-----------|-------------|---------------|
| **L**egalidade | Só fazer o que a lei autoriza | Lei |
| **I**mpessoalidade | Sem favorecimentos ou perseguições | Igualdade |
| **M**oralidade | Ética, probidade, boa-fé | Ética |
| **P**ublicidade | Transparência dos atos | Transparência |
| **E**ficiência | Melhores resultados com menos recursos | Resultados |

### Aplicação

- Aplicam-se a **TODOS os Poderes** (Executivo, Legislativo, Judiciário)
- Aplicam-se à **Administração Direta e Indireta**
- Aplicam-se a **União, Estados, DF e Municípios**

### Princípios Implícitos (mais cobrados)

| Princípio | Significado |
|-----------|-------------|
| Supremacia do interesse público | Coletivo > individual |
| Indisponibilidade do interesse público | Não pode renunciar |
| Razoabilidade/Proporcionalidade | Adequação, necessidade, proporcionalidade |
| Autotutela | Rever próprios atos (Súmula 473/STF) |
| Motivação | Fundamentar decisões |
| Continuidade | Serviços não podem parar |
        `,

        explicacao: `
## Explicação Didática

### 1. Fundamento Constitucional

> **Art. 37, caput, CF/88:**
> "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de **legalidade, impessoalidade, moralidade, publicidade e eficiência** [...]"

#### Características dos Princípios Constitucionais

- **Normas de observância obrigatória**
- **Aplicação imediata** (não dependem de regulamentação)
- **Servem como parâmetro de controle** dos atos administrativos
- **Interpretação sistemática** (devem ser aplicados em conjunto)

### 2. Princípio da LEGALIDADE

#### Conceito

A Administração Pública **só pode fazer o que a lei AUTORIZA** ou **DETERMINA**.

#### Diferença para o particular

| Sujeito | Legalidade |
|---------|------------|
| **Administração** | Só pode fazer o que a lei PERMITE (legalidade positiva/estrita) |
| **Particular** | Pode fazer tudo que a lei NÃO PROÍBE (legalidade negativa) |

#### Desdobramentos

1. **Reserva legal**: certas matérias exigem lei formal
2. **Primazia da lei**: atos administrativos não podem contrariar a lei
3. **Subordinação à lei**: a Administração age em cumprimento da lei

#### Exceções/Relativizações

- Medidas Provisórias (art. 62, CF)
- Estado de defesa e estado de sítio
- Decretos autônomos (art. 84, VI, CF)

#### Aplicação na Vigilância Sanitária

O fiscal **só pode exigir** o que está previsto em **lei ou regulamento**.
- Interdição: só nas hipóteses legais
- Multa: valor previsto em lei
- Prazo: fixado em norma

### 3. Princípio da IMPESSOALIDADE

#### Conceito

A atuação administrativa deve ser **imparcial**, sem favorecimentos ou perseguições, visando ao **interesse público**.

#### Duas dimensões

##### a) Finalidade (impessoalidade objetiva)
- Atos devem visar ao **interesse público**
- Vedado desvio de finalidade
- Exemplo: não usar fiscalização para prejudicar desafeto

##### b) Isonomia (impessoalidade subjetiva)
- **Tratamento igualitário** a todos
- Vedada discriminação sem fundamento legal
- Atos imputam-se ao **órgão**, não ao agente

#### Consequências práticas

1. **Concurso público**: seleção por mérito
2. **Licitação**: igualdade entre concorrentes
3. **Proibição de promoção pessoal** (art. 37, § 1º, CF)
4. **Súmula Vinculante 13**: proibição do nepotismo

#### Art. 37, § 1º, CF

> "A publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela **não podendo constar nomes, símbolos ou imagens** que caracterizem promoção pessoal de autoridades ou servidores públicos."

### 4. Princípio da MORALIDADE

#### Conceito

A Administração deve atuar com **ética**, **probidade**, **boa-fé**, **lealdade** e **honestidade**.

#### Moralidade administrativa ≠ Moralidade comum

| Moralidade comum | Moralidade administrativa |
|------------------|---------------------------|
| Valores sociais gerais | Regras de boa administração |
| Subjetiva | Objetiva, jurídica |
| Não vincula juridicamente | Vincula e gera invalidade |

#### Desdobramentos

1. **Probidade administrativa** (art. 37, § 4º, CF)
2. **Boa-fé** nas relações com administrados
3. **Lealdade** às instituições
4. **Vedação ao enriquecimento sem causa**

#### Lei de Improbidade (Lei 8.429/92)

Atos que violam a moralidade podem configurar **improbidade administrativa**:
- Enriquecimento ilícito (art. 9º)
- Lesão ao erário (art. 10)
- Atentado contra princípios (art. 11)

#### Controle da Moralidade

- **Ação Popular** (art. 5º, LXXIII, CF): cidadão pode anular ato lesivo à moralidade
- **Ação Civil Pública**: MP e outros legitimados
- **Controle interno**: corregedorias, ouvidorias

### 5. Princípio da PUBLICIDADE

#### Conceito

Os atos administrativos devem ser **transparentes**, dando conhecimento ao público e permitindo o **controle** pela sociedade.

#### Finalidades

1. **Dar conhecimento** dos atos aos interessados
2. **Permitir o controle** pela sociedade
3. **Conferir eficácia** a certos atos (ex: publicação em Diário Oficial)
4. **Garantir a democracia** e a participação

#### Instrumentos de publicidade

| Instrumento | Finalidade |
|-------------|------------|
| Diário Oficial | Publicação de atos |
| Internet | Portais de transparência |
| Certidões | Informação ao interessado |
| Audiências públicas | Participação social |

#### Exceções (sigilo)

A publicidade não é absoluta. Admite-se **sigilo** quando:
- **Segurança do Estado** (art. 5º, XXXIII)
- **Segurança da sociedade**
- **Intimidade** (art. 5º, X)
- **Sigilo da fonte** jornalística (art. 5º, XIV)

#### Lei de Acesso à Informação (Lei 12.527/2011)

- Regula o direito de acesso à informação pública
- **Publicidade é a regra; sigilo é exceção**
- Prazos de classificação: reservado (5 anos), secreto (15 anos), ultrassecreto (25 anos)

### 6. Princípio da EFICIÊNCIA

#### Conceito

A Administração deve atuar com **qualidade**, buscando os **melhores resultados** com o **menor custo** possível.

#### Histórico

- **Incluído pela EC 19/98** (Reforma Administrativa)
- Antes: implícito no ordenamento
- Objetivo: superar a burocracia ineficiente

#### Dimensões da eficiência

| Dimensão | Significado |
|----------|-------------|
| **Modo de atuação** | Agente deve ser produtivo, célere, competente |
| **Organização** | Estrutura deve ser racional, econômica |
| **Resultados** | Alcançar os objetivos com qualidade |

#### Eficiência ≠ Eficácia ≠ Efetividade

| Conceito | Significado | Exemplo |
|----------|-------------|---------|
| **Eficiência** | Fazer bem (custo-benefício) | Gastar menos |
| **Eficácia** | Atingir o objetivo | Cumprir a meta |
| **Efetividade** | Impacto real | Resolver o problema |

#### Instrumentos para eficiência

1. **Contratos de gestão** (art. 37, § 8º, CF)
2. **Avaliação de desempenho** (art. 41, § 1º, III, CF)
3. **Agências executivas**
4. **Parcerias Público-Privadas**
5. **Administração gerencial**

#### Aplicação na Vigilância Sanitária

- Planejamento das fiscalizações
- Priorização por risco
- Otimização de recursos
- Resultados mensuráveis

### 7. Princípios Implícitos (Mais Cobrados)

#### 7.1 Supremacia do Interesse Público

**Conceito:** O interesse **coletivo** prevalece sobre o interesse **individual**.

**Manifestações:**
- Desapropriação
- Requisição administrativa
- Poder de polícia
- Cláusulas exorbitantes nos contratos

⚠️ Não é absoluta: deve respeitar direitos fundamentais.

#### 7.2 Indisponibilidade do Interesse Público

**Conceito:** O administrador **não pode renunciar** ou **dispor** do interesse público.

**Consequências:**
- Obrigatoriedade de licitar
- Concurso público
- Vedação a atos de liberalidade
- Controle dos atos

#### 7.3 Razoabilidade e Proporcionalidade

**Conceito:** Os meios devem ser **adequados**, **necessários** e **proporcionais** aos fins.

**Tríplice teste (proporcionalidade):**
| Critério | Pergunta |
|----------|----------|
| **Adequação** | O meio é apto a alcançar o fim? |
| **Necessidade** | É o meio menos gravoso? |
| **Proporcionalidade em sentido estrito** | Os benefícios superam os custos? |

**Exemplo em Vigilância Sanitária:**
- Interdição de estabelecimento: proporcional ao risco?
- Multa: adequada à gravidade?

#### 7.4 Autotutela

**Conceito:** A Administração pode **rever seus próprios atos**.

**Súmula 473/STF:**
> "A administração pode **anular** seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou **revogá-los**, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos [...]"

| Ação | Fundamento | Efeitos |
|------|------------|---------|
| **Anulação** | Ilegalidade | Ex tunc (retroativos) |
| **Revogação** | Conveniência | Ex nunc (prospectivos) |

#### 7.5 Motivação

**Conceito:** Os atos devem ser **fundamentados**, indicando os pressupostos de fato e de direito.

**Exigências:**
- Explicitação dos motivos
- Congruência entre motivo e ato
- Motivação contemporânea (em regra)

**Teoria dos motivos determinantes:** Se a Administração declara o motivo, fica vinculada a ele.

#### 7.6 Continuidade do Serviço Público

**Conceito:** Os serviços públicos **não podem ser interrompidos**.

**Exceções permitidas (art. 6º, § 3º, Lei 8.987/95):**
- **Emergência**
- **Razões técnicas** (com aviso prévio)
- **Inadimplemento do usuário** (com aviso prévio)

**Aplicação:**
- Direito de greve: com limitações
- Substituição de servidores em férias
- Plantões

### 8. Quadro Resumo dos Princípios

| Princípio | Palavra-chave | Consequência |
|-----------|---------------|--------------|
| Legalidade | Lei | Só fazer o que a lei permite |
| Impessoalidade | Igualdade | Sem favorecimentos |
| Moralidade | Ética | Probidade, boa-fé |
| Publicidade | Transparência | Dar conhecimento |
| Eficiência | Resultados | Qualidade + economia |
| Supremacia | Coletivo | Prevalece sobre individual |
| Indisponibilidade | Proteção | Não pode renunciar |
| Razoabilidade | Equilíbrio | Meios adequados |
| Autotutela | Revisão | Anular/revogar atos |
| Motivação | Fundamentação | Explicitar razões |
| Continuidade | Ininterrupção | Serviços não param |
        `,

        pontosChave: [
          "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência (art. 37, CF)",
          "Legalidade: Administração só faz o que a lei AUTORIZA (diferente do particular)",
          "Impessoalidade: sem favorecimentos, atos imputam-se ao órgão, vedada promoção pessoal",
          "Moralidade: ética, probidade, boa-fé - violação gera improbidade administrativa",
          "Publicidade: transparência é regra, sigilo é exceção (LAI - Lei 12.527/2011)",
          "Eficiência: incluído pela EC 19/98, busca de melhores resultados com menor custo",
          "Supremacia do interesse público: coletivo prevalece sobre individual",
          "Indisponibilidade: administrador não pode renunciar ao interesse público",
          "Autotutela (Súmula 473/STF): anulação (ilegalidade) e revogação (conveniência)",
          "Princípios aplicam-se a todos os Poderes e a todas as esferas federativas",
        ],

        armadilhas: [
          {
            titulo: "Confundir legalidade para particular e Administração",
            descricao: "Para o particular: pode tudo que a lei não proíbe. Para a Administração: só pode o que a lei autoriza.",
            dica: "Particular = liberdade. Administração = vinculação à lei.",
          },
          {
            titulo: "Achar que publicidade é sempre obrigatória",
            descricao: "Existem exceções: segurança do Estado, segurança da sociedade, intimidade.",
            dica: "Publicidade é REGRA, sigilo é EXCEÇÃO justificada.",
          },
          {
            titulo: "Confundir anulação com revogação",
            descricao: "Anulação = ilegalidade (ex tunc). Revogação = conveniência (ex nunc).",
            dica: "Anula o ilegal, Revoga o inconveniente.",
          },
          {
            titulo: "Pensar que eficiência é apenas economia",
            descricao: "Eficiência inclui qualidade, celeridade, resultados - não apenas reduzir custos.",
            dica: "Eficiência = qualidade + economia + resultados.",
          },
          {
            titulo: "Esquecer que eficiência foi incluída pela EC 19/98",
            descricao: "A EC 19/98 (Reforma Administrativa) incluiu o princípio da eficiência no art. 37.",
            dica: "LIMPE só ficou completo em 1998.",
          },
        ],

        mnemonicos: [
          {
            termo: "LIMPE",
            significado: "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência",
            frase: "A Administração deve ter conduta LIMPE (art. 37, CF)",
          },
          {
            termo: "A-I-L-E-G",
            significado: "Anulação = Ilegalidade; Revogação = LEGítimo mas inconveniente",
            frase: "Anula o Ilegal, Revoga o Legítimo inconveniente",
          },
          {
            termo: "SUPER-SIM",
            significado: "Supremacia, Indisponibilidade, Motivação",
            frase: "Princípios implícitos mais cobrados: SUPER-SIM",
          },
          {
            termo: "EC 19/98 - E",
            significado: "EC 19/98 incluiu o E de Eficiência",
            frase: "O E de Eficiência veio com a EC 19 de 98",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-4-1",
            frente: "Quais são os 5 princípios EXPRESSOS da Administração Pública (art. 37, CF)?",
            verso: "**LIMPE:**\n\n- **L**egalidade\n- **I**mpessoalidade\n- **M**oralidade\n- **P**ublicidade\n- **E**ficiência\n\n(Eficiência foi incluída pela EC 19/98)",
            tags: ["princípios", "LIMPE", "art. 37"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-2",
            frente: "Qual a diferença entre LEGALIDADE para a Administração e para o particular?",
            verso: "**ADMINISTRAÇÃO:**\nSó pode fazer o que a lei **AUTORIZA**\n(Legalidade positiva/estrita)\n\n**PARTICULAR:**\nPode fazer tudo que a lei **NÃO PROÍBE**\n(Legalidade negativa)\n\nA Administração está mais restrita que o particular.",
            tags: ["legalidade", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-3",
            frente: "O que é o princípio da IMPESSOALIDADE e quais suas dimensões?",
            verso: "**IMPESSOALIDADE = atuação imparcial**\n\n**Duas dimensões:**\n\n1. **Finalidade**: visar ao interesse público\n2. **Isonomia**: tratamento igualitário\n\n**Consequências:**\n- Vedação ao nepotismo (SV 13)\n- Concurso público\n- Proibição de promoção pessoal (art. 37, § 1º)",
            tags: ["impessoalidade", "dimensões"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-4",
            frente: "O que é o princípio da MORALIDADE e qual sua consequência?",
            verso: "**MORALIDADE = ética, probidade, boa-fé**\n\nNão é apenas a moral comum, mas a MORALIDADE ADMINISTRATIVA (regras de boa administração).\n\n**Violação = IMPROBIDADE (Lei 8.429/92)**\n\n**Controle:**\n- Ação Popular\n- Ação Civil Pública",
            tags: ["moralidade", "improbidade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-5",
            frente: "Quais as exceções ao princípio da PUBLICIDADE?",
            verso: "**Exceções (sigilo permitido):**\n\n1. **Segurança do Estado**\n2. **Segurança da sociedade**\n3. **Intimidade** dos envolvidos\n4. **Sigilo da fonte** jornalística\n\n**LAI (Lei 12.527/2011):**\nClassificação: reservado (5a), secreto (15a), ultrassecreto (25a)\n\nPublicidade = REGRA; Sigilo = EXCEÇÃO",
            tags: ["publicidade", "exceções", "sigilo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-6",
            frente: "Quando foi incluído o princípio da EFICIÊNCIA?",
            verso: "**EC 19/98** (Reforma Administrativa)\n\n**EFICIÊNCIA = qualidade + resultados + economia**\n\n**Instrumentos:**\n- Contratos de gestão\n- Avaliação de desempenho\n- Agências executivas\n- Administração gerencial\n\nAntes de 1998, o LIMPE era apenas LIMP!",
            tags: ["eficiência", "EC 19/98"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-7",
            frente: "O que diz a Súmula 473 do STF (Autotutela)?",
            verso: "**Súmula 473/STF:**\n\n\"A Administração pode ANULAR seus atos ilegais [...] ou REVOGÁ-LOS por conveniência, respeitados os direitos adquiridos.\"\n\n| Ação | Fundamento | Efeitos |\n|------|------------|--------|\n| Anulação | Ilegalidade | Ex tunc |\n| Revogação | Conveniência | Ex nunc |",
            tags: ["autotutela", "Súmula 473"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-8",
            frente: "O que é o princípio da SUPREMACIA DO INTERESSE PÚBLICO?",
            verso: "**SUPREMACIA: interesse COLETIVO > interesse INDIVIDUAL**\n\n**Manifestações:**\n- Desapropriação\n- Requisição administrativa\n- Poder de polícia\n- Cláusulas exorbitantes\n\n⚠️ Não é absoluto: deve respeitar direitos fundamentais!",
            tags: ["supremacia", "interesse público"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-9",
            frente: "O que é o princípio da PROPORCIONALIDADE e seu tríplice teste?",
            verso: "**PROPORCIONALIDADE: meios adequados aos fins**\n\n**Tríplice teste:**\n\n1. **ADEQUAÇÃO**: meio apto ao fim?\n2. **NECESSIDADE**: meio menos gravoso?\n3. **PROPORCIONALIDADE em sentido estrito**: benefícios > custos?\n\nExemplo: interdição deve ser proporcional ao risco.",
            tags: ["proporcionalidade", "tríplice teste"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-4-10",
            frente: "Qual a diferença entre EFICIÊNCIA, EFICÁCIA e EFETIVIDADE?",
            verso: "**EFICIÊNCIA:**\n- Fazer bem (relação custo-benefício)\n- \"Fazer certo\"\n\n**EFICÁCIA:**\n- Atingir o objetivo\n- \"Fazer a coisa certa\"\n\n**EFETIVIDADE:**\n- Impacto real na sociedade\n- \"Fazer a diferença\"\n\nPode ser eficaz sem ser eficiente (e vice-versa)!",
            tags: ["eficiência", "eficácia", "efetividade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-4-1",
            enunciado: "Os princípios constitucionais expressos da Administração Pública, previstos no art. 37 da Constituição Federal, são:",
            alternativas: [
              { letra: "A", texto: "Legalidade, supremacia, moralidade, publicidade e eficiência." },
              { letra: "B", texto: "Legalidade, impessoalidade, moralidade, publicidade e eficiência." },
              { letra: "C", texto: "Legalidade, impessoalidade, motivação, publicidade e eficiência." },
              { letra: "D", texto: "Supremacia, indisponibilidade, razoabilidade, publicidade e eficiência." },
              { letra: "E", texto: "Legalidade, impessoalidade, moralidade, continuidade e eficiência." },
            ],
            gabarito: "B",
            justificativa: "O art. 37, caput, da CF estabelece expressamente os princípios LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Os demais são princípios implícitos.",
            dificuldade: "Fácil",
            competencia: "Princípios expressos",
            banca: "IADES",
            tags: ["LIMPE", "princípios"],
          },
          {
            id: "ap-q-4-2",
            enunciado: "O princípio da legalidade, aplicado à Administração Pública, significa que o administrador:",
            alternativas: [
              { letra: "A", texto: "Pode fazer tudo que a lei não proíbe, tal como o particular." },
              { letra: "B", texto: "Só pode atuar quando houver prévia autorização ou determinação legal." },
              { letra: "C", texto: "Deve obedecer apenas às leis em sentido estrito, não aos regulamentos." },
              { letra: "D", texto: "Pode descumprir a lei se isso resultar em maior eficiência." },
              { letra: "E", texto: "Tem liberdade para inovar no ordenamento jurídico." },
            ],
            gabarito: "B",
            justificativa: "Para a Administração, vigora a legalidade estrita: só pode fazer o que a lei AUTORIZA ou DETERMINA. Diferente do particular, que pode fazer tudo que a lei não proíbe.",
            dificuldade: "Fácil",
            competencia: "Princípio da legalidade",
            banca: "IADES",
            tags: ["legalidade", "vinculação"],
          },
          {
            id: "ap-q-4-3",
            enunciado: "O princípio da impessoalidade veda, entre outras situações:",
            alternativas: [
              { letra: "A", texto: "A publicação dos atos administrativos em Diário Oficial." },
              { letra: "B", texto: "A realização de concurso público para provimento de cargos." },
              { letra: "C", texto: "A promoção pessoal de autoridades em publicidade governamental." },
              { letra: "D", texto: "A transparência na execução orçamentária." },
              { letra: "E", texto: "A motivação dos atos administrativos." },
            ],
            gabarito: "C",
            justificativa: "O art. 37, § 1º, CF veda a promoção pessoal em publicidade governamental. A impessoalidade impede que autoridades usem a máquina pública para autopromoção.",
            dificuldade: "Fácil",
            competencia: "Princípio da impessoalidade",
            banca: "IADES",
            tags: ["impessoalidade", "promoção pessoal"],
          },
          {
            id: "ap-q-4-4",
            enunciado: "A violação ao princípio da moralidade administrativa pode configurar:",
            alternativas: [
              { letra: "A", texto: "Apenas infração disciplinar, sem outras consequências." },
              { letra: "B", texto: "Ato de improbidade administrativa, nos termos da Lei 8.429/92." },
              { letra: "C", texto: "Apenas responsabilidade civil, sem repercussão administrativa." },
              { letra: "D", texto: "Nenhuma sanção, pois a moralidade é apenas recomendação." },
              { letra: "E", texto: "Exclusivamente responsabilidade penal." },
            ],
            gabarito: "B",
            justificativa: "A violação ao princípio da moralidade pode configurar ato de IMPROBIDADE ADMINISTRATIVA (Lei 8.429/92), especialmente nos casos de atentado contra princípios (art. 11).",
            dificuldade: "Média",
            competencia: "Princípio da moralidade",
            banca: "IADES",
            tags: ["moralidade", "improbidade"],
          },
          {
            id: "ap-q-4-5",
            enunciado: "O princípio da publicidade admite exceções. É hipótese de sigilo constitucionalmente prevista:",
            alternativas: [
              { letra: "A", texto: "Decisões que beneficiem particular em licitação." },
              { letra: "B", texto: "Atos que causem prejuízo ao erário." },
              { letra: "C", texto: "Informações imprescindíveis à segurança do Estado." },
              { letra: "D", texto: "Atos que contrariem interesses de autoridades." },
              { letra: "E", texto: "Qualquer informação considerada inconveniente pelo administrador." },
            ],
            gabarito: "C",
            justificativa: "A CF permite sigilo em casos de segurança do Estado e da sociedade (art. 5º, XXXIII), além de proteção à intimidade. As demais alternativas não constituem exceções legítimas.",
            dificuldade: "Média",
            competencia: "Princípio da publicidade",
            banca: "IADES",
            tags: ["publicidade", "exceções"],
          },
          {
            id: "ap-q-4-6",
            enunciado: "O princípio da eficiência foi incluído expressamente na Constituição Federal pela:",
            alternativas: [
              { letra: "A", texto: "Constituição originária de 1988." },
              { letra: "B", texto: "Emenda Constitucional nº 19/1998." },
              { letra: "C", texto: "Emenda Constitucional nº 45/2004." },
              { letra: "D", texto: "Lei Complementar nº 101/2000." },
              { letra: "E", texto: "Emenda Constitucional nº 32/2001." },
            ],
            gabarito: "B",
            justificativa: "O princípio da EFICIÊNCIA foi incluído no art. 37 da CF pela EC 19/98 (Reforma Administrativa). Antes, o acrônimo era apenas LIMP.",
            dificuldade: "Fácil",
            competencia: "Princípio da eficiência",
            banca: "IADES",
            tags: ["eficiência", "EC 19/98"],
          },
          {
            id: "ap-q-4-7",
            enunciado: "A Súmula 473 do STF consagra o princípio da:",
            alternativas: [
              { letra: "A", texto: "Legalidade." },
              { letra: "B", texto: "Publicidade." },
              { letra: "C", texto: "Autotutela." },
              { letra: "D", texto: "Moralidade." },
              { letra: "E", texto: "Eficiência." },
            ],
            gabarito: "C",
            justificativa: "A Súmula 473/STF consagra a AUTOTUTELA: a Administração pode anular seus atos ilegais ou revogá-los por conveniência, respeitados os direitos adquiridos.",
            dificuldade: "Fácil",
            competencia: "Princípio da autotutela",
            banca: "IADES",
            tags: ["autotutela", "Súmula 473"],
          },
          {
            id: "ap-q-4-8",
            enunciado: "O princípio da supremacia do interesse público estabelece que:",
            alternativas: [
              { letra: "A", texto: "Os interesses particulares sempre prevalecem sobre os coletivos." },
              { letra: "B", texto: "O interesse coletivo prevalece sobre o interesse individual, observados os direitos fundamentais." },
              { letra: "C", texto: "A Administração pode violar direitos fundamentais em nome do interesse público." },
              { letra: "D", texto: "Não há limites ao poder estatal quando invocado o interesse público." },
              { letra: "E", texto: "O interesse público pode ser renunciado pelo administrador." },
            ],
            gabarito: "B",
            justificativa: "A supremacia do interesse público significa que o interesse coletivo prevalece sobre o individual, mas isso NÃO autoriza violação de direitos fundamentais. A supremacia tem limites.",
            dificuldade: "Média",
            competencia: "Supremacia do interesse público",
            banca: "IADES",
            tags: ["supremacia", "interesse público"],
          },
          {
            id: "ap-q-4-9",
            enunciado: "Quanto à anulação e revogação de atos administrativos, é CORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "A anulação produz efeitos ex nunc, enquanto a revogação produz efeitos ex tunc." },
              { letra: "B", texto: "A anulação decorre de ilegalidade e produz efeitos ex tunc." },
              { letra: "C", texto: "A revogação decorre de ilegalidade do ato." },
              { letra: "D", texto: "Apenas o Poder Judiciário pode anular atos administrativos." },
              { letra: "E", texto: "A anulação respeita os direitos adquiridos, mas a revogação não." },
            ],
            gabarito: "B",
            justificativa: "ANULAÇÃO: ilegalidade, efeitos ex tunc (retroativos). REVOGAÇÃO: conveniência/oportunidade, efeitos ex nunc (prospectivos). Ambas respeitam direitos adquiridos.",
            dificuldade: "Média",
            competencia: "Anulação e revogação",
            banca: "IADES",
            tags: ["anulação", "revogação"],
          },
          {
            id: "ap-q-4-10",
            enunciado: "A aplicação de multa desproporcional à gravidade da infração sanitária viola o princípio da:",
            alternativas: [
              { letra: "A", texto: "Publicidade." },
              { letra: "B", texto: "Continuidade." },
              { letra: "C", texto: "Razoabilidade e proporcionalidade." },
              { letra: "D", texto: "Autotutela." },
              { letra: "E", texto: "Presunção de legitimidade." },
            ],
            gabarito: "C",
            justificativa: "A proporcionalidade exige que os meios sejam adequados, necessários e proporcionais aos fins. Multa desproporcional à gravidade viola esse princípio, pois o meio não corresponde à finalidade.",
            dificuldade: "Média",
            competencia: "Proporcionalidade",
            banca: "IADES",
            tags: ["proporcionalidade", "vigilância sanitária"],
          },
        ],
      },
    },
    {
      id: 'ap-topico-5',
      numero: 5,
      titulo: 'Poderes administrativos: hierárquico, disciplinar, regulamentar e de polícia',
      conteudo: {
        resumo: `
## Resumo Rápido - Poderes Administrativos

### Visão Geral dos Poderes

| Poder | Função Principal | Destinatário |
|-------|-----------------|--------------|
| **Hierárquico** | Organização e comando | Estrutura interna |
| **Disciplinar** | Punir infrações | Servidores/contratados |
| **Regulamentar** | Normatizar | Execução das leis |
| **De Polícia** | Limitar direitos | Coletividade |

### Poder Hierárquico

**Faculdades:**
- **Ordenar**: dar comandos aos subordinados
- **Delegar**: transferir atribuições
- **Avocar**: chamar para si atribuições
- **Rever**: corrigir atos dos subordinados
- **Coordenar**: organizar atividades

**Indelegáveis (Lei 9.784/99):**
- Atos normativos
- Decisão de recursos
- Competência exclusiva

### Poder Disciplinar

**Características:**
- Vínculo especial com a Administração
- **Vinculado** quanto ao dever de punir
- **Discricionário** quanto à escolha da pena

**Penalidades (Lei 8.112/90):**
Advertência → Suspensão → Demissão

### Poder Regulamentar

**Tipos:**
- **Executivo**: complementa lei (regra)
- **Autônomo**: independe de lei (exceção - art. 84, VI, CF)

**Limites:**
- Não cria direitos/obrigações
- Não contraria a lei
- Controle: Congresso (art. 49, V)

### Poder de Polícia

**Conceito (CTN, art. 78):**
Limitar direitos em prol do interesse público.

**Atributos - DAC:**
- **D**iscricionariedade
- **A**utoexecutoriedade
- **C**oercibilidade

**Ciclo: OCFS**
Ordem → Consentimento → Fiscalização → Sanção

**Na Vigilância Sanitária:**
- Fiscalização de estabelecimentos
- Interdição
- Apreensão de produtos
- Aplicação de multas
        `,

        explicacao: `
## Explicação Didática - Poderes Administrativos

### 1. Natureza dos Poderes Administrativos

Os poderes administrativos são **instrumentais**: existem para que a Administração cumpra suas finalidades. São poderes-DEVERES, pois seu exercício é obrigatório quando necessário ao interesse público.

### 2. Poder Hierárquico

#### 2.1 Conceito
Poder conferido ao administrador para distribuir e escalonar funções, ordenar, controlar e corrigir atividades dos subordinados.

#### 2.2 Manifestações

**ORDENAR:**
Dar ordens de serviço, instruções, comandos aos subordinados.

**DELEGAR:**
Transferir parcela de competência para subordinado ou outro órgão.

**AVOCAR:**
Chamar para si competência de subordinado (excepcionalmente).

**REVER:**
Anular ou revogar atos praticados por subordinados.

**COORDENAR:**
Harmonizar atividades para alcançar objetivos.

#### 2.3 Delegação e Avocação

| Delegação | Avocação |
|-----------|----------|
| Transfere competência | Chama competência |
| Para subordinado | Do subordinado |
| Regra geral | Exceção justificada |

**Vedações à delegação (art. 13, Lei 9.784/99):**
- Atos de caráter NORMATIVO
- Decisão de RECURSOS
- Matérias de competência EXCLUSIVA

### 3. Poder Disciplinar

#### 3.1 Conceito
Faculdade de apurar infrações e aplicar penalidades aos servidores e demais pessoas sujeitas à disciplina administrativa.

#### 3.2 Alcance

**Atinge quem tem VÍNCULO:**
- Servidores públicos
- Empregados públicos
- Contratados (licitação)
- Particulares em regime especial

⚠️ **Diferença do poder de polícia**: este atinge a COLETIVIDADE em geral.

#### 3.3 Natureza

| Aspecto | Natureza |
|---------|----------|
| Apurar infração | VINCULADA |
| Instaurar processo | VINCULADA |
| Aplicar sanção | VINCULADA (se comprovada infração) |
| Escolher a pena | DISCRICIONÁRIA |
| Dosar a pena | DISCRICIONÁRIA |

#### 3.4 Garantias Processuais

- Contraditório e ampla defesa
- Devido processo legal
- Presunção de inocência
- Proporcionalidade

### 4. Poder Regulamentar

#### 4.1 Conceito
Competência do Chefe do Executivo para editar atos normativos que permitam a fiel execução das leis.

#### 4.2 Base Constitucional

**Art. 84, IV, CF (Regulamento Executivo):**
> "Compete privativamente ao Presidente da República (...) expedir decretos e regulamentos para fiel execução das leis."

**Art. 84, VI, CF (Regulamento Autônomo):**
> "dispor, mediante decreto, sobre organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos."

#### 4.3 Limites

- **NÃO INOVA**: apenas complementa a lei
- **NÃO CONTRARIA**: deve ser fiel à lei
- **NÃO ULTRAPASSA**: dentro dos limites legais

**Controle:**
O Congresso pode sustar atos normativos que exorbitem o poder regulamentar (art. 49, V, CF).

### 5. Poder de Polícia

#### 5.1 Conceito Legal

**CTN, art. 78:**
> "Considera-se poder de polícia atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público..."

#### 5.2 Fundamento
Supremacia do interesse público sobre o privado.

#### 5.3 Atributos

**DISCRICIONARIEDADE:**
- Margem de escolha quanto ao momento, modo, extensão
- Pode ser vinculado em alguns casos (licença)

**AUTOEXECUTORIEDADE:**
- Executar decisões sem ordem judicial
- Exceção: cobrança de multa (precisa de execução fiscal)

**COERCIBILIDADE:**
- Impor obrigatoriamente
- Uso de força se necessário

#### 5.4 Ciclo de Polícia

\`\`\`
    ORDEM          CONSENTIMENTO      FISCALIZAÇÃO        SANÇÃO
  (legislação)   (licenças/autorizações)  (verificação)   (penalidades)
      ↓                 ↓                    ↓               ↓
   Indelegável       Delegável           Delegável      Indelegável
\`\`\`

#### 5.5 Polícia Administrativa x Judiciária

| Polícia Administrativa | Polícia Judiciária |
|-----------------------|-------------------|
| Caráter PREVENTIVO | Caráter REPRESSIVO |
| Incide sobre BENS e ATIVIDADES | Incide sobre PESSOAS |
| Exercida por diversos órgãos | Exercida por órgãos de segurança |
| Exemplo: vigilância sanitária | Exemplo: polícia civil |

### 6. Poder de Polícia na Vigilância Sanitária

#### 6.1 Manifestações

| Ação | Exemplo |
|------|---------|
| Ordem | RDCs da ANVISA |
| Consentimento | Alvará sanitário |
| Fiscalização | Inspeção de estabelecimentos |
| Sanção | Multa, interdição, apreensão |

#### 6.2 Atributos Aplicados

- **Discricionariedade**: decidir momento da fiscalização
- **Autoexecutoriedade**: interditar estabelecimento imediatamente
- **Coercibilidade**: obrigar cumprimento das normas

#### 6.3 Penalidades (Lei 6.437/77)

1. Advertência
2. Multa (R$ 2.000 a R$ 1.500.000)
3. Apreensão de produto
4. Inutilização de produto
5. Interdição (parcial ou total)
6. Cancelamento de registro
7. Proibição de propaganda
        `,

        pontosChave: [
          "Poder Hierárquico: ordenar, delegar, avocar, rever, coordenar",
          "Indelegáveis: atos normativos, recursos, competência exclusiva",
          "Poder Disciplinar: alcança quem tem VÍNCULO com a Administração",
          "Disciplinar: vinculado para punir, discricionário para escolher a pena",
          "Poder Regulamentar: não inova, não contraria, não ultrapassa a lei",
          "Regulamento autônomo: exceção (art. 84, VI, CF)",
          "Poder de Polícia: limita direitos em prol do interesse público",
          "Atributos DAC: Discricionariedade, Autoexecutoriedade, Coercibilidade",
          "Ciclo OCFS: Ordem, Consentimento, Fiscalização, Sanção",
          "Cobrança de multa NÃO é autoexecutável",
        ],

        armadilhas: [
          {
            titulo: "Achar que avocação é regra",
            descricao: "Avocação é EXCEÇÃO e deve ser justificada. Delegação é mais comum.",
            dica: "Avocar = excepcional. Delegar = possível em regra.",
          },
          {
            titulo: "Confundir polícia administrativa e judiciária",
            descricao: "Administrativa: preventiva, sobre bens/atividades. Judiciária: repressiva, sobre pessoas.",
            dica: "VISA = administrativa. Polícia Civil = judiciária.",
          },
          {
            titulo: "Achar que regulamento pode criar obrigações",
            descricao: "Regulamento EXECUTIVO não pode inovar, apenas complementa a lei.",
            dica: "Só LEI cria direitos e obrigações.",
          },
          {
            titulo: "Pensar que toda multa é autoexecutável",
            descricao: "APLICAR multa: autoexecutável. COBRAR multa: precisa execução fiscal.",
            dica: "Aplicar ≠ Cobrar. Cobrar exige processo judicial.",
          },
        ],

        mnemonicos: [
          {
            termo: "HIDIPO",
            significado: "HIerárquico, DIsciplinar, POlícia + Regulamentar",
            frase: "Os 4 poderes administrativos: HIDIPO + Regulamentar",
          },
          {
            termo: "DAC",
            significado: "Discricionariedade, Autoexecutoriedade, Coercibilidade",
            frase: "Atributos do poder de polícia: DAC",
          },
          {
            termo: "OCFS",
            significado: "Ordem, Consentimento, Fiscalização, Sanção",
            frase: "Ciclo de polícia: OCFS",
          },
          {
            termo: "ARE (não delega)",
            significado: "Atos normativos, Recursos, Exclusiva competência",
            frase: "Não pode delegar: ARE",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-5-1",
            frente: "Quais são os 4 poderes administrativos?",
            verso: "**4 PODERES ADMINISTRATIVOS:**\n\n1. **Hierárquico**: organização interna\n2. **Disciplinar**: apurar e punir\n3. **Regulamentar**: editar normas\n4. **De Polícia**: limitar direitos\n\nMnemônico: HIDIPO + Regulamentar",
            tags: ["poderes", "classificação"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-2",
            frente: "Quais competências NÃO podem ser delegadas?",
            verso: "**INDELEGÁVEIS (Lei 9.784/99, art. 13):**\n\n1. Edição de atos **NORMATIVOS**\n2. Decisão de **RECURSOS**\n3. Matérias de competência **EXCLUSIVA**\n\nMnemônico: ARE",
            tags: ["delegação", "hierárquico"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-3",
            frente: "Qual a natureza do poder disciplinar (vinculado ou discricionário)?",
            verso: "**NATUREZA MISTA:**\n\n**VINCULADO:**\n- Dever de apurar\n- Dever de punir (se comprovado)\n\n**DISCRICIONÁRIO:**\n- Escolha da penalidade\n- Dosimetria da pena\n\nDEVE punir, mas ESCOLHE como.",
            tags: ["disciplinar", "natureza"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-4",
            frente: "Qual a diferença entre delegação e avocação?",
            verso: "**DELEGAÇÃO:**\n- Transfere competência para subordinado\n- REGRA GERAL\n- Pode ser revogada\n\n**AVOCAÇÃO:**\n- Chama para si competência do subordinado\n- EXCEÇÃO (deve ser justificada)\n- Temporária",
            tags: ["delegação", "avocação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-5",
            frente: "Quais os limites do poder regulamentar?",
            verso: "**LIMITES:**\n\n❌ NÃO pode INOVAR\n(não cria direitos/obrigações)\n\n❌ NÃO pode CONTRARIAR\n(fidelidade à lei)\n\n❌ NÃO pode EXTRAPOLAR\n(dentro dos limites legais)\n\n**Controle:**\nCongresso pode sustar (art. 49, V, CF)",
            tags: ["regulamentar", "limites"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-6",
            frente: "O que é o ciclo de polícia?",
            verso: "**CICLO OCFS:**\n\n1. **O**rdem: legislação\n2. **C**onsentimento: licenças, autorizações\n3. **F**iscalização: verificação\n4. **S**anção: penalidades\n\n**Delegáveis:** C e F\n**Indelegáveis:** O e S",
            tags: ["polícia", "ciclo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-7",
            frente: "Quais são os atributos do poder de polícia?",
            verso: "**DAC:**\n\n**D**iscricionariedade\n→ Margem de escolha\n\n**A**utoexecutoriedade\n→ Sem ordem judicial\n\n**C**oercibilidade\n→ Imposição obrigatória\n\n⚠️ Cobrar multa NÃO é autoexecutável!",
            tags: ["polícia", "atributos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-8",
            frente: "Qual a diferença entre polícia administrativa e polícia judiciária?",
            verso: "**ADMINISTRATIVA:**\n- Caráter PREVENTIVO\n- Incide sobre BENS e ATIVIDADES\n- Diversos órgãos\n- Ex: vigilância sanitária\n\n**JUDICIÁRIA:**\n- Caráter REPRESSIVO\n- Incide sobre PESSOAS\n- Órgãos de segurança\n- Ex: polícia civil",
            tags: ["polícia", "tipos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-9",
            frente: "Quem o poder disciplinar pode alcançar?",
            verso: "**ALCANCE DO PODER DISCIPLINAR:**\n\nPessoas com VÍNCULO especial:\n- Servidores públicos\n- Empregados públicos\n- Contratados (licitação)\n- Particulares em regime especial\n\n⚠️ NÃO confundir com poder de polícia (alcança a coletividade).",
            tags: ["disciplinar", "alcance"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-5-10",
            frente: "Como a vigilância sanitária exerce o poder de polícia?",
            verso: "**VISA E PODER DE POLÍCIA:**\n\n**Ordem:** RDCs da ANVISA\n**Consentimento:** Alvará sanitário\n**Fiscalização:** Inspeção de estabelecimentos\n**Sanção:** Multa, interdição, apreensão\n\n**Atributos:**\n- Interdição imediata (autoexecutoriedade)\n- Obrigação de cumprir (coercibilidade)",
            tags: ["VISA", "polícia"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-5-1",
            enunciado: "O poder pelo qual a Administração distribui e escalona funções de seus órgãos, ordena e revê a atuação de seus agentes, estabelecendo relação de subordinação, denomina-se poder:",
            alternativas: [
              { letra: "A", texto: "Disciplinar." },
              { letra: "B", texto: "Regulamentar." },
              { letra: "C", texto: "Hierárquico." },
              { letra: "D", texto: "De polícia." },
              { letra: "E", texto: "Vinculado." },
            ],
            gabarito: "C",
            justificativa: "O poder HIERÁRQUICO é o que permite organizar a estrutura administrativa, estabelecer subordinação, dar ordens, fiscalizar, delegar, avocar e rever atos dos subordinados.",
            dificuldade: "Fácil",
            competencia: "Poder hierárquico",
            banca: "IADES",
            tags: ["hierárquico", "conceito"],
          },
          {
            id: "ap-q-5-2",
            enunciado: "A apuração de infrações e a aplicação de penalidades aos servidores públicos e demais pessoas sujeitas à disciplina administrativa caracteriza o exercício do poder:",
            alternativas: [
              { letra: "A", texto: "Hierárquico." },
              { letra: "B", texto: "Disciplinar." },
              { letra: "C", texto: "De polícia." },
              { letra: "D", texto: "Regulamentar." },
              { letra: "E", texto: "Normativo." },
            ],
            gabarito: "B",
            justificativa: "O poder DISCIPLINAR é a faculdade de apurar infrações e aplicar penalidades a servidores e demais pessoas com vínculo especial com a Administração.",
            dificuldade: "Fácil",
            competencia: "Poder disciplinar",
            banca: "IADES",
            tags: ["disciplinar", "conceito"],
          },
          {
            id: "ap-q-5-3",
            enunciado: "A competência para expedição de decretos e regulamentos para fiel execução das leis, conferida ao Chefe do Poder Executivo, caracteriza o poder:",
            alternativas: [
              { letra: "A", texto: "Hierárquico." },
              { letra: "B", texto: "Disciplinar." },
              { letra: "C", texto: "De polícia." },
              { letra: "D", texto: "Regulamentar." },
              { letra: "E", texto: "Discricionário." },
            ],
            gabarito: "D",
            justificativa: "O poder REGULAMENTAR (art. 84, IV, CF) é a competência do Chefe do Executivo para editar decretos e regulamentos para a fiel execução das leis.",
            dificuldade: "Fácil",
            competencia: "Poder regulamentar",
            banca: "IADES",
            tags: ["regulamentar", "conceito"],
          },
          {
            id: "ap-q-5-4",
            enunciado: "Sobre os atributos do poder de polícia, é INCORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "A discricionariedade permite margem de escolha ao administrador." },
              { letra: "B", texto: "A autoexecutoriedade dispensa autorização judicial prévia." },
              { letra: "C", texto: "A coercibilidade permite a imposição obrigatória das medidas." },
              { letra: "D", texto: "A cobrança de multa é sempre autoexecutável." },
              { letra: "E", texto: "A interdição de estabelecimento é medida autoexecutável." },
            ],
            gabarito: "D",
            justificativa: "A APLICAÇÃO da multa é autoexecutável, mas a COBRANÇA não é. Para cobrar a multa (obter o pagamento forçado), é necessário ajuizar execução fiscal.",
            dificuldade: "Média",
            competencia: "Atributos",
            banca: "IADES",
            tags: ["multa", "autoexecutoriedade"],
          },
          {
            id: "ap-q-5-5",
            enunciado: "O ciclo de polícia compreende as fases de ordem, consentimento, fiscalização e sanção. São fases INDELEGÁVEIS a particulares:",
            alternativas: [
              { letra: "A", texto: "Ordem e consentimento." },
              { letra: "B", texto: "Consentimento e fiscalização." },
              { letra: "C", texto: "Fiscalização e sanção." },
              { letra: "D", texto: "Ordem e sanção." },
              { letra: "E", texto: "Todas as fases são indelegáveis." },
            ],
            gabarito: "D",
            justificativa: "As fases de ORDEM (legislação) e SANÇÃO (penalidades) são indelegáveis a particulares, pois envolvem exercício de autoridade típica do Estado. Consentimento e fiscalização podem ser delegados.",
            dificuldade: "Média",
            competencia: "Ciclo de polícia",
            banca: "IADES",
            tags: ["ciclo", "delegação"],
          },
          {
            id: "ap-q-5-6",
            enunciado: "De acordo com a Lei 9.784/99, NÃO pode ser objeto de delegação:",
            alternativas: [
              { letra: "A", texto: "Atos de expediente." },
              { letra: "B", texto: "Decisão de recursos administrativos." },
              { letra: "C", texto: "Atos de gestão." },
              { letra: "D", texto: "Atos discricionários." },
              { letra: "E", texto: "Atos vinculados." },
            ],
            gabarito: "B",
            justificativa: "O art. 13 da Lei 9.784/99 veda a delegação de: I - edição de atos normativos; II - decisão de recursos administrativos; III - matérias de competência exclusiva.",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["delegação", "vedações"],
          },
          {
            id: "ap-q-5-7",
            enunciado: "A vigilância sanitária, ao interditar estabelecimento que oferece risco à saúde pública, exerce o poder:",
            alternativas: [
              { letra: "A", texto: "Hierárquico." },
              { letra: "B", texto: "Disciplinar." },
              { letra: "C", texto: "De polícia." },
              { letra: "D", texto: "Regulamentar." },
              { letra: "E", texto: "Moderador." },
            ],
            gabarito: "C",
            justificativa: "A interdição de estabelecimento é típico exercício do PODER DE POLÍCIA sanitária, limitando a atividade econômica em razão do interesse público (saúde coletiva).",
            dificuldade: "Fácil",
            competencia: "Poder de polícia",
            banca: "IADES",
            tags: ["VISA", "interdição"],
          },
          {
            id: "ap-q-5-8",
            enunciado: "A polícia administrativa distingue-se da polícia judiciária porque:",
            alternativas: [
              { letra: "A", texto: "A administrativa tem caráter repressivo; a judiciária, preventivo." },
              { letra: "B", texto: "A administrativa incide sobre pessoas; a judiciária, sobre bens." },
              { letra: "C", texto: "A administrativa tem caráter preventivo e incide sobre bens e atividades." },
              { letra: "D", texto: "Ambas são idênticas em natureza e finalidade." },
              { letra: "E", texto: "A judiciária é exercida pela vigilância sanitária." },
            ],
            gabarito: "C",
            justificativa: "A polícia ADMINISTRATIVA tem caráter PREVENTIVO e incide sobre BENS e ATIVIDADES. A polícia JUDICIÁRIA tem caráter REPRESSIVO e incide sobre PESSOAS.",
            dificuldade: "Média",
            competencia: "Tipos de polícia",
            banca: "IADES",
            tags: ["administrativa", "judiciária"],
          },
          {
            id: "ap-q-5-9",
            enunciado: "O regulamento executivo, previsto no art. 84, IV, da CF/88, caracteriza-se por:",
            alternativas: [
              { letra: "A", texto: "Criar direitos e obrigações novos." },
              { letra: "B", texto: "Independer de lei anterior." },
              { letra: "C", texto: "Ter força de lei ordinária." },
              { letra: "D", texto: "Complementar a lei sem inovar na ordem jurídica." },
              { letra: "E", texto: "Poder revogar leis incompatíveis." },
            ],
            gabarito: "D",
            justificativa: "O regulamento EXECUTIVO destina-se à fiel execução da lei, complementando-a sem INOVAR na ordem jurídica. Não pode criar direitos ou obrigações que a lei não previu.",
            dificuldade: "Média",
            competencia: "Regulamento executivo",
            banca: "IADES",
            tags: ["regulamentar", "executivo"],
          },
          {
            id: "ap-q-5-10",
            enunciado: "O poder disciplinar tem natureza:",
            alternativas: [
              { letra: "A", texto: "Inteiramente vinculada." },
              { letra: "B", texto: "Inteiramente discricionária." },
              { letra: "C", texto: "Vinculada quanto ao dever de punir e discricionária quanto à escolha da pena." },
              { letra: "D", texto: "Discricionária quanto ao dever de punir e vinculada quanto à escolha da pena." },
              { letra: "E", texto: "Facultativa em todos os aspectos." },
            ],
            gabarito: "C",
            justificativa: "O poder disciplinar é VINCULADO quanto ao dever de apurar e punir (se comprovada a infração), mas DISCRICIONÁRIO quanto à escolha e dosimetria da penalidade aplicável.",
            dificuldade: "Média",
            competencia: "Natureza do disciplinar",
            banca: "IADES",
            tags: ["disciplinar", "natureza"],
          },
        ],
      },
    },
    {
      id: "ap-topico-6",
      numero: 6,
      titulo: "Atos administrativos: conceito, requisitos, atributos, classificação e invalidação",
      conteudo: {
        resumo: `
## Resumo Rápido

O **ato administrativo** é toda manifestação unilateral de vontade da Administração Pública que, agindo sob regime de direito público, produz efeitos jurídicos imediatos.

### Estrutura Essencial

| Elemento | Pergunta-Chave | Exemplo |
|----------|----------------|---------|
| **COMPETÊNCIA** | QUEM pratica? | Fiscal, servidor, autoridade |
| **FINALIDADE** | PARA QUÊ? | Interesse público |
| **FORMA** | COMO se exterioriza? | Escrito, portaria, decreto |
| **MOTIVO** | POR QUÊ? | Fato + fundamento jurídico |
| **OBJETO** | O QUÊ determina? | Multa, licença, interdição |

### Atributos (Características Especiais)

| Atributo | Significado |
|----------|-------------|
| **Presunção de legitimidade** | Presume-se legal até prova em contrário |
| **Imperatividade** | Impõe obrigações independente de concordância |
| **Autoexecutoriedade** | Executa sem autorização judicial |
| **Tipicidade** | Ato previsto em lei (atos unilaterais) |

### Mnemônicos

- **Requisitos: CO-FI-FO-MO-OB** (Competência, Finalidade, Forma, Motivo, Objeto)
- **Atributos: PATI** (Presunção, Autoexecutoriedade, Tipicidade, Imperatividade)
        `,

        explicacao: `
## Explicação Didática

### 1. CONCEITO DE ATO ADMINISTRATIVO

**Ato administrativo** é toda **manifestação unilateral de vontade** da Administração Pública que, agindo nessa qualidade e sob **regime jurídico de direito público**, tem por fim adquirir, resguardar, transferir, modificar, extinguir ou declarar direitos, ou impor obrigações aos administrados ou a si própria.

#### 1.1 Elementos do Conceito

| Elemento | Descrição |
|----------|-----------|
| **Manifestação de vontade** | Declaração com conteúdo decisório |
| **Unilateral** | Independe da vontade do destinatário |
| **Administração Pública** | Em sentido amplo (qualquer poder) |
| **Regime de direito público** | Prerrogativas e sujeições especiais |
| **Efeitos jurídicos imediatos** | Cria, modifica, extingue direitos |

#### 1.2 Ato Administrativo vs. Outros Atos

| Tipo | Característica |
|------|----------------|
| **Ato administrativo** | Unilateral, regime público, efeitos concretos |
| **Ato da Administração** | Gênero (inclui atos privados) |
| **Fato administrativo** | Evento material, sem manifestação de vontade |
| **Contrato administrativo** | Bilateral, acordo de vontades |

### 2. REQUISITOS (ELEMENTOS) DO ATO ADMINISTRATIVO

Os requisitos são os **elementos essenciais** para a validade do ato. Um ato que viole qualquer requisito é **NULO**.

#### 2.1 COMPETÊNCIA (QUEM?)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Poder legal atribuído ao agente |
| **Fonte** | Lei ou Constituição |
| **Características** | Irrenunciável, improrrogável, imprescritível |
| **Vício** | Ato de agente incompetente é NULO |

**Delegação e Avocação:**
- **Delegação**: autoridade transfere parte da competência (Lei 9.784/99, art. 12)
- **Avocação**: superior chama competência do subordinado (excepcional)

**Não podem ser delegadas (art. 13, Lei 9.784/99):**
1. Edição de atos normativos
2. Decisão de recursos administrativos
3. Matérias de competência exclusiva

#### 2.2 FINALIDADE (PARA QUÊ?)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Resultado pretendido pela lei |
| **Finalidade geral** | Interesse público (sempre) |
| **Finalidade específica** | Definida pela lei para cada ato |
| **Vício** | Desvio de finalidade (poder) = NULIDADE |

⚠️ **Desvio de poder**: usar competência para fim diverso do legal.
- Exemplo: interditar restaurante para prejudicar desafeto pessoal.

#### 2.3 FORMA (COMO?)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Modo de exteriorização do ato |
| **Regra** | Forma ESCRITA (art. 22, Lei 9.784/99) |
| **Exceções** | Sinal de trânsito, apito, ordem verbal urgente |
| **Vício** | Forma viciada = nulidade (salvo se sanável) |

**Formalidades específicas:**
- Motivação
- Publicação
- Assinatura
- Número de protocolo

#### 2.4 MOTIVO (POR QUÊ?)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Situação de fato + fundamento jurídico |
| **Motivo de fato** | Circunstância real que enseja o ato |
| **Motivo de direito** | Previsão legal que autoriza |
| **Vício** | Motivo falso ou inexistente = NULIDADE |

**Teoria dos Motivos Determinantes:**
- Se o agente declara os motivos, fica VINCULADO a eles
- Motivos falsos = ato nulo

**Diferença: Motivo vs. Motivação:**
| Motivo | Motivação |
|--------|-----------|
| Razão de ser do ato | Exposição escrita dos motivos |
| Requisito/elemento | Formalidade |
| Sempre existe | Nem sempre obrigatória |

#### 2.5 OBJETO (O QUÊ?)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Conteúdo, efeito jurídico imediato |
| **Requisitos** | Lícito, possível, determinado/determinável |
| **Exemplos** | Multa, licença, interdição, nomeação |
| **Vício** | Objeto ilícito ou impossível = NULIDADE |

**Tipos de objeto:**
- **Vinculado**: definido em lei, sem margem
- **Discricionário**: escolha do administrador (mérito)

### 3. ATRIBUTOS DO ATO ADMINISTRATIVO

Os atributos são **características especiais** que diferenciam os atos administrativos dos atos privados.

#### 3.1 PRESUNÇÃO DE LEGITIMIDADE (E VERACIDADE)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | O ato presume-se legal e verdadeiro |
| **Tipo** | Presunção RELATIVA (juris tantum) |
| **Consequência** | Ato produz efeitos até prova em contrário |
| **Ônus da prova** | Do administrado que alega vício |

**Desdobramentos:**
- **Legitimidade**: presume-se conforme a lei
- **Veracidade**: presume-se que os fatos são verdadeiros

#### 3.2 IMPERATIVIDADE (COERCIBILIDADE)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Impõe obrigações independente da vontade |
| **Fundamento** | Supremacia do interesse público |
| **Limite** | Nem todo ato tem imperatividade |
| **Sem imperatividade** | Atos enunciativos (certidões, atestados) |

#### 3.3 AUTOEXECUTORIEDADE

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Execução direta sem ordem judicial |
| **Requisitos** | Previsão legal OU urgência |
| **Exemplo** | Interdição, apreensão, demolição |
| **Exceção** | Cobrança de MULTA (não é autoexecutável) |

**Subdivisões:**
| Exigibilidade | Executoriedade |
|---------------|----------------|
| Meios indiretos de coerção | Execução forçada direta |
| Multa, sanção | Interdição, apreensão |

⚠️ **MULTA**: aplicar é autoexecutável, COBRAR não é (precisa de execução fiscal).

#### 3.4 TIPICIDADE

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Ato deve corresponder a tipo legal |
| **Fundamento** | Legalidade |
| **Aplicação** | Atos unilaterais que restringem direitos |
| **Função** | Segurança jurídica |

### 4. CLASSIFICAÇÃO DOS ATOS ADMINISTRATIVOS

#### 4.1 Quanto aos DESTINATÁRIOS

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Gerais** | Atingem todos genericamente | Regulamento, edital |
| **Individuais** | Destinatário determinado | Licença, nomeação |

#### 4.2 Quanto ao ALCANCE

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Internos** | Efeitos dentro da Administração | Portaria, circular |
| **Externos** | Efeitos perante terceiros | Licença, autorização |

#### 4.3 Quanto ao OBJETO

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Império** | Supremacia, coerção | Multa, interdição |
| **Gestão** | Igualdade com particulares | Contrato de locação |
| **Expediente** | Rotina administrativa | Protocolo, arquivo |

#### 4.4 Quanto à LIBERDADE

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Vinculado** | Sem margem de escolha | Licença (preenchidos requisitos, deve conceder) |
| **Discricionário** | Margem de conveniência | Autorização (pode ou não conceder) |

⚠️ **Importante para VISA:**
- **Licença sanitária** = ato VINCULADO (se cumprir requisitos, TEM direito)
- **Autorização** = ato DISCRICIONÁRIO (precário, pode ser revogada)

#### 4.5 Quanto à FORMAÇÃO

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Simples** | Manifestação de 1 órgão | Despacho |
| **Composto** | 1 principal + 1 acessório | Autorização + visto |
| **Complexo** | Fusão de vontades de órgãos | Aposentadoria (órgão + TC) |

### 5. ESPÉCIES DE ATOS ADMINISTRATIVOS

| Espécie | Características | Exemplos |
|---------|-----------------|----------|
| **Normativos** | Gerais e abstratos | Decretos, regulamentos, resoluções |
| **Ordinatórios** | Organização interna | Instruções, circulares, portarias |
| **Negociais** | Coincidem com interesse do particular | Licença, autorização, permissão |
| **Enunciativos** | Atestam, certificam | Certidão, atestado, parecer |
| **Punitivos** | Sancionam condutas | Multa, interdição, suspensão |

### 6. INVALIDAÇÃO DOS ATOS ADMINISTRATIVOS

#### 6.1 Formas de Extinção

| Forma | Características |
|-------|-----------------|
| **ANULAÇÃO** | Ato ILEGAL; ex TUNC (retroage); Adm. ou Judiciário |
| **REVOGAÇÃO** | Ato INCONVENIENTE; ex NUNC; apenas Administração |
| **CASSAÇÃO** | Descumprimento pelo destinatário |
| **CADUCIDADE** | Lei nova incompatível |
| **Contraposição** | Ato posterior extingue anterior |

#### 6.2 Comparativo: Anulação vs. Revogação

| Aspecto | ANULAÇÃO | REVOGAÇÃO |
|---------|----------|-----------|
| **Motivo** | Ilegalidade (vício) | Inconveniência/Inoportunidade |
| **Efeitos** | Ex TUNC (retroativos) | Ex NUNC (prospectivos) |
| **Quem pode** | Administração OU Judiciário | Apenas Administração |
| **Prazo** | 5 anos (boa-fé) | Não há prazo |
| **Indenização** | Não (regra) | Não (regra) |

#### 6.3 Convalidação (Saneamento)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Correção de vício sanável |
| **Vícios sanáveis** | Competência (não exclusiva), forma (não essencial) |
| **Vícios insanáveis** | Finalidade, motivo, objeto |
| **Efeitos** | Ex TUNC (retroativos) |

### 7. ATOS ADMINISTRATIVOS NA VIGILÂNCIA SANITÁRIA

| Ato | Tipo | Característica |
|-----|------|----------------|
| **Licença sanitária** | Vinculado | Se cumprir requisitos, TEM direito |
| **Auto de infração** | Punitivo | Lavrado quando há irregularidade |
| **Interdição** | Punitivo/Cautelar | Autoexecutável |
| **Apreensão** | Punitivo/Cautelar | Autoexecutável |
| **Multa** | Punitivo | Aplicação autoexecutável, cobrança não |
| **Alvará** | Negocial | Autoriza funcionamento |
| **Notificação** | Ordinatório | Comunica irregularidade |
| **Certidão sanitária** | Enunciativo | Atesta situação |
        `,

        pontosChave: [
          "Ato administrativo = manifestação UNILATERAL de vontade da Administração, sob regime público, com efeitos jurídicos imediatos",
          "Requisitos (CO-FI-FO-MO-OB): Competência, Finalidade, Forma, Motivo, Objeto",
          "Atributos (PATI): Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade",
          "Presunção de legitimidade é RELATIVA (juris tantum) - cabe prova em contrário",
          "MULTA: aplicação autoexecutável, COBRANÇA não é (precisa de execução fiscal)",
          "Ato VINCULADO: sem margem de escolha (ex: licença). DISCRICIONÁRIO: margem de mérito (ex: autorização)",
          "ANULAÇÃO: ato ilegal, ex tunc, Adm. ou Judiciário. REVOGAÇÃO: ato inconveniente, ex nunc, só Adm.",
          "Desvio de finalidade (poder) = usar competência para fim diverso = NULIDADE",
          "Teoria dos Motivos Determinantes: motivos declarados vinculam; se falsos = nulidade",
          "Convalidação: corrige vícios SANÁVEIS (competência não exclusiva, forma não essencial)",
        ],

        armadilhas: [
          {
            titulo: "Confundir requisitos com atributos",
            descricao: "Requisitos são elementos de VALIDADE (CO-FI-FO-MO-OB). Atributos são características ESPECIAIS (PATI).",
            dica: "Requisitos = estrutura do ato. Atributos = poderes/características.",
          },
          {
            titulo: "Achar que multa é totalmente autoexecutável",
            descricao: "APLICAR a multa é autoexecutável. COBRAR a multa NÃO é (precisa de execução fiscal).",
            dica: "Auto de infração = autoexecutável. Cobrança forçada = precisa do Judiciário.",
          },
          {
            titulo: "Confundir anulação com revogação",
            descricao: "ANULAÇÃO = ilegal, ex tunc. REVOGAÇÃO = inconveniente, ex nunc.",
            dica: "A-nulação = vícios (atrás). Re-vogação = re-pensar (nunc).",
          },
          {
            titulo: "Trocar ato vinculado por discricionário",
            descricao: "LICENÇA é vinculada (direito subjetivo). AUTORIZAÇÃO é discricionária (precária).",
            dica: "Licença: preencheu requisitos = TEM direito. Autorização: Administração decide.",
          },
          {
            titulo: "Esquecer que presunção é relativa",
            descricao: "A presunção de legitimidade é RELATIVA (juris tantum), admite prova em contrário.",
            dica: "O administrado pode provar que o ato é ilegal ou os fatos são falsos.",
          },
        ],

        mnemonicos: [
          {
            termo: "CO-FI-FO-MO-OB",
            significado: "Competência, Finalidade, Forma, Motivo, Objeto",
            frase: "Os 5 requisitos do ato administrativo: CO-FI-FO-MO-OB.",
          },
          {
            termo: "PATI",
            significado: "Presunção, Autoexecutoriedade, Tipicidade, Imperatividade",
            frase: "Os 4 atributos do ato administrativo: PATI.",
          },
          {
            termo: "ANE-REX",
            significado: "Anulação = Ex tunc; Revogação = Ex nunc",
            frase: "ANE retroage. REX não retroage.",
          },
          {
            termo: "LI-AU",
            significado: "Licença = vinculada; Autorização = discricionária",
            frase: "LIcença = Vinculada. AUtorização = discricionária.",
          },
          {
            termo: "VMI",
            significado: "Vinculado: Motivo e objeto definidos. Mérito: Integram o objeto/motivo",
            frase: "No ato Vinculado não há Mérito. No discricionário, há.",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-6-1",
            frente: "Quais são os 5 REQUISITOS (elementos) do ato administrativo?",
            verso: "**CO-FI-FO-MO-OB:**\n\n1. **CO**mpetência - QUEM pratica\n2. **FI**nalidade - PARA QUÊ\n3. **FO**rma - COMO se exterioriza\n4. **MO**tivo - POR QUÊ\n5. **OB**jeto - O QUÊ determina\n\nVícios em qualquer requisito = ATO NULO",
            tags: ["requisitos", "elementos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-2",
            frente: "Quais são os 4 ATRIBUTOS do ato administrativo?",
            verso: "**PATI:**\n\n1. **P**resunção de legitimidade\n   (presume-se legal até prova em contrário)\n\n2. **A**utoexecutoriedade\n   (executa sem ordem judicial)\n\n3. **T**ipicidade\n   (deve corresponder a tipo legal)\n\n4. **I**mperatividade\n   (impõe obrigações independente de concordância)\n\n⚠️ Nem todo ato tem todos (ex: certidão não tem imperatividade).",
            tags: ["atributos", "PATI"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-3",
            frente: "A presunção de legitimidade dos atos administrativos é absoluta ou relativa?",
            verso: "**RELATIVA (juris tantum)**\n\n• Presume-se que o ato é LEGAL e VERDADEIRO\n• MAS admite prova em contrário\n• O ÔNUS DA PROVA é do administrado\n\n**Consequência:**\nO ato produz efeitos imediatamente, mesmo que impugnado.\n\nEx: Multa de trânsito vale até você provar que não cometeu a infração.",
            tags: ["presunção", "relativa"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-4",
            frente: "Por que a COBRANÇA de multa NÃO é autoexecutável?",
            verso: "**MULTA - Autoexecutoriedade PARCIAL:**\n\n✅ **APLICAR a multa = Autoexecutável**\n(Lavrar auto de infração sem ordem judicial)\n\n❌ **COBRAR a multa = NÃO autoexecutável**\n(Precisa de EXECUÇÃO FISCAL para tirar o dinheiro)\n\n**Razão:** A Administração não pode, por conta própria, acessar a conta bancária ou penhorar bens do devedor.",
            tags: ["multa", "autoexecutoriedade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-5",
            frente: "Qual a diferença entre ato VINCULADO e DISCRICIONÁRIO?",
            verso: "| | VINCULADO | DISCRICIONÁRIO |\n|--|-----------|----------------|\n| **Margem** | Sem escolha | Há mérito (conveniência) |\n| **Requisitos** | Todos definidos em lei | Motivo e/ou objeto com margem |\n| **Exemplo** | LICENÇA sanitária | AUTORIZAÇÃO |\n| **Direito** | Subjetivo (TEM direito) | Interesse legítimo |\n\n**Lembre:** Licença = Vinculada. Autorização = Discricionária.",
            tags: ["vinculado", "discricionário"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-6",
            frente: "O que é DESVIO DE FINALIDADE (desvio de poder)?",
            verso: "**DESVIO DE FINALIDADE/PODER:**\n\nO agente usa sua competência para FIM DIVERSO do previsto em lei.\n\n**Vício:** No requisito FINALIDADE\n**Consequência:** ATO NULO\n\n**Exemplo VISA:**\nFiscal interdita restaurante de desafeto pessoal, sem irregularidade sanitária.\n\nUsou o poder de interdição (que é para proteger a saúde) para vingança pessoal.",
            tags: ["desvio", "finalidade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-7",
            frente: "Qual a diferença entre ANULAÇÃO e REVOGAÇÃO?",
            verso: "| | ANULAÇÃO | REVOGAÇÃO |\n|--|----------|----------|\n| **Motivo** | Ato ILEGAL | Ato INCONVENIENTE |\n| **Efeitos** | Ex TUNC (retroage) | Ex NUNC (não retroage) |\n| **Quem pode** | Adm. ou Judiciário | Só Administração |\n| **Prazo** | 5 anos (boa-fé) | Sem prazo fixo |\n\n**Mnemônico:** ANE retroage (ex Tunc). REX não retroage (ex Nunc).",
            tags: ["anulação", "revogação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-8",
            frente: "O que é CONVALIDAÇÃO de ato administrativo?",
            verso: "**CONVALIDAÇÃO (Saneamento):**\n\nCorreção de VÍCIO SANÁVEL do ato.\n\n**Vícios SANÁVEIS (podem convalidar):**\n• Competência (se não exclusiva)\n• Forma (se não essencial)\n\n**Vícios INSANÁVEIS (não convalidam):**\n• Finalidade\n• Motivo\n• Objeto\n\n**Efeitos:** Ex TUNC (retroativos)\n\nPreservam-se os efeitos já produzidos.",
            tags: ["convalidação", "sanável"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-9",
            frente: "Quais são as espécies de atos administrativos?",
            verso: "**5 ESPÉCIES:**\n\n1. **NORMATIVOS** - gerais e abstratos\n   Ex: decretos, regulamentos\n\n2. **ORDINATÓRIOS** - organização interna\n   Ex: instruções, circulares\n\n3. **NEGOCIAIS** - interesse do particular\n   Ex: licença, autorização, permissão\n\n4. **ENUNCIATIVOS** - atestam, certificam\n   Ex: certidão, atestado, parecer\n\n5. **PUNITIVOS** - sancionam\n   Ex: multa, interdição, suspensão",
            tags: ["espécies", "classificação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-6-10",
            frente: "O que são atos de IMPÉRIO, GESTÃO e EXPEDIENTE?",
            verso: "**Classificação quanto ao OBJETO:**\n\n**IMPÉRIO:**\n• Supremacia do Estado\n• Coerção, poder de polícia\n• Ex: multa, interdição, desapropriação\n\n**GESTÃO:**\n• Administração como particular\n• Sem supremacia\n• Ex: contrato de locação, compra de material\n\n**EXPEDIENTE:**\n• Rotina administrativa\n• Impulsiona processos\n• Ex: numeração, protocolo, encaminhamento",
            tags: ["império", "gestão"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-6-1",
            enunciado: "São requisitos (elementos) do ato administrativo:",
            alternativas: [
              { letra: "A", texto: "Presunção de legitimidade, imperatividade e autoexecutoriedade." },
              { letra: "B", texto: "Competência, finalidade, forma, motivo e objeto." },
              { letra: "C", texto: "Legalidade, impessoalidade, moralidade e eficiência." },
              { letra: "D", texto: "Supremacia, indisponibilidade e continuidade." },
              { letra: "E", texto: "Hierarquia, disciplina e vinculação." },
            ],
            gabarito: "B",
            justificativa: "Os requisitos (elementos) do ato administrativo são: COMPETÊNCIA, FINALIDADE, FORMA, MOTIVO e OBJETO (CO-FI-FO-MO-OB). A alternativa A traz atributos, não requisitos.",
            dificuldade: "Fácil",
            competencia: "Requisitos do ato",
            banca: "IADES",
            tags: ["requisitos", "elementos"],
          },
          {
            id: "ap-q-6-2",
            enunciado: "São atributos do ato administrativo, EXCETO:",
            alternativas: [
              { letra: "A", texto: "Presunção de legitimidade." },
              { letra: "B", texto: "Autoexecutoriedade." },
              { letra: "C", texto: "Finalidade." },
              { letra: "D", texto: "Imperatividade." },
              { letra: "E", texto: "Tipicidade." },
            ],
            gabarito: "C",
            justificativa: "FINALIDADE é REQUISITO (elemento) do ato, não atributo. Os atributos são: Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade (PATI).",
            dificuldade: "Fácil",
            competencia: "Atributos do ato",
            banca: "IADES",
            tags: ["atributos", "PATI"],
          },
          {
            id: "ap-q-6-3",
            enunciado: "A presunção de legitimidade dos atos administrativos:",
            alternativas: [
              { letra: "A", texto: "É absoluta, não admitindo prova em contrário." },
              { letra: "B", texto: "Impede a produção de efeitos até decisão judicial." },
              { letra: "C", texto: "É relativa, admitindo prova em contrário pelo interessado." },
              { letra: "D", texto: "Só existe nos atos vinculados." },
              { letra: "E", texto: "Foi revogada pela Lei 9.784/99." },
            ],
            gabarito: "C",
            justificativa: "A presunção de legitimidade é RELATIVA (juris tantum), ou seja, admite prova em contrário. O ônus da prova é do administrado que alega o vício. O ato produz efeitos enquanto não for invalidado.",
            dificuldade: "Fácil",
            competencia: "Presunção de legitimidade",
            banca: "IADES",
            tags: ["presunção", "relativa"],
          },
          {
            id: "ap-q-6-4",
            enunciado: "Quanto à autoexecutoriedade do ato administrativo, é correto afirmar que:",
            alternativas: [
              { letra: "A", texto: "A aplicação e a cobrança de multa são igualmente autoexecutáveis." },
              { letra: "B", texto: "A aplicação de multa é autoexecutável, mas sua cobrança não é." },
              { letra: "C", texto: "Nenhum ato de vigilância sanitária é autoexecutável." },
              { letra: "D", texto: "A autoexecutoriedade exige sempre prévia autorização judicial." },
              { letra: "E", texto: "A autoexecutoriedade é atributo exclusivo de atos vinculados." },
            ],
            gabarito: "B",
            justificativa: "A APLICAÇÃO da multa (lavrar auto de infração) é autoexecutável. Porém, a COBRANÇA da multa (tirar o dinheiro do devedor) NÃO é autoexecutável - exige execução fiscal.",
            dificuldade: "Média",
            competencia: "Autoexecutoriedade",
            banca: "IADES",
            tags: ["multa", "cobrança"],
          },
          {
            id: "ap-q-6-5",
            enunciado: "O vício no elemento FINALIDADE do ato administrativo caracteriza:",
            alternativas: [
              { letra: "A", texto: "Excesso de poder." },
              { letra: "B", texto: "Desvio de poder (ou de finalidade)." },
              { letra: "C", texto: "Incompetência." },
              { letra: "D", texto: "Vício de forma." },
              { letra: "E", texto: "Defeito de objeto." },
            ],
            gabarito: "B",
            justificativa: "O DESVIO DE PODER (ou desvio de finalidade) ocorre quando o agente usa sua competência para fim DIVERSO do previsto em lei. É vício no requisito FINALIDADE e torna o ato NULO.",
            dificuldade: "Fácil",
            competencia: "Desvio de finalidade",
            banca: "IADES",
            tags: ["desvio", "finalidade"],
          },
          {
            id: "ap-q-6-6",
            enunciado: "A licença sanitária é classificada como ato:",
            alternativas: [
              { letra: "A", texto: "Discricionário e precário." },
              { letra: "B", texto: "Vinculado, gerando direito subjetivo ao interessado." },
              { letra: "C", texto: "Normativo de caráter geral." },
              { letra: "D", texto: "Punitivo e autoexecutável." },
              { letra: "E", texto: "Complexo, exigindo manifestação de dois órgãos." },
            ],
            gabarito: "B",
            justificativa: "A LICENÇA é ato VINCULADO: preenchidos os requisitos legais, o interessado TEM DIREITO à sua concessão. Diferente da autorização, que é discricionária e precária.",
            dificuldade: "Média",
            competencia: "Ato vinculado",
            banca: "IADES",
            tags: ["licença", "vinculado"],
          },
          {
            id: "ap-q-6-7",
            enunciado: "A anulação de ato administrativo ilegal produz efeitos:",
            alternativas: [
              { letra: "A", texto: "Ex nunc, ou seja, não retroativos." },
              { letra: "B", texto: "Ex tunc, ou seja, retroativos à data do ato." },
              { letra: "C", texto: "Somente para o futuro, após publicação." },
              { letra: "D", texto: "Condicionados à indenização prévia." },
              { letra: "E", texto: "Dependentes de trânsito em julgado." },
            ],
            gabarito: "B",
            justificativa: "A ANULAÇÃO de atos ilegais produz efeitos EX TUNC (retroativos), como se o ato nunca tivesse existido. Já a REVOGAÇÃO produz efeitos EX NUNC (não retroage).",
            dificuldade: "Fácil",
            competencia: "Efeitos da anulação",
            banca: "IADES",
            tags: ["anulação", "ex tunc"],
          },
          {
            id: "ap-q-6-8",
            enunciado: "A convalidação de ato administrativo é possível quando o vício recai sobre:",
            alternativas: [
              { letra: "A", texto: "A finalidade do ato." },
              { letra: "B", texto: "O objeto do ato." },
              { letra: "C", texto: "O motivo do ato." },
              { letra: "D", texto: "A competência, quando não for exclusiva." },
              { letra: "E", texto: "Qualquer dos elementos, indistintamente." },
            ],
            gabarito: "D",
            justificativa: "A convalidação é possível para vícios SANÁVEIS: competência (quando não exclusiva) e forma (quando não essencial). Vícios de finalidade, motivo e objeto são INSANÁVEIS.",
            dificuldade: "Média",
            competencia: "Convalidação",
            banca: "IADES",
            tags: ["convalidação", "sanável"],
          },
          {
            id: "ap-q-6-9",
            enunciado: "São atos administrativos enunciativos:",
            alternativas: [
              { letra: "A", texto: "Decretos, regulamentos e resoluções." },
              { letra: "B", texto: "Multas, interdições e apreensões." },
              { letra: "C", texto: "Certidões, atestados e pareceres." },
              { letra: "D", texto: "Licenças, autorizações e permissões." },
              { letra: "E", texto: "Instruções, portarias e circulares." },
            ],
            gabarito: "C",
            justificativa: "Atos ENUNCIATIVOS são aqueles que atestam, certificam ou emitem opinião: certidões, atestados e pareceres. A) normativos; B) punitivos; D) negociais; E) ordinatórios.",
            dificuldade: "Média",
            competencia: "Espécies de atos",
            banca: "IADES",
            tags: ["enunciativos", "espécies"],
          },
          {
            id: "ap-q-6-10",
            enunciado: "A revogação de ato administrativo:",
            alternativas: [
              { letra: "A", texto: "Pode ser feita pelo Poder Judiciário em qualquer situação." },
              { letra: "B", texto: "Pressupõe vício de legalidade no ato." },
              { letra: "C", texto: "Produz efeitos ex tunc, retroagindo à data do ato." },
              { letra: "D", texto: "É privativa da Administração e baseia-se em conveniência e oportunidade." },
              { letra: "E", texto: "Depende de autorização legislativa prévia." },
            ],
            gabarito: "D",
            justificativa: "A REVOGAÇÃO é privativa da Administração (Judiciário não revoga) e baseia-se em conveniência e oportunidade (mérito), não em ilegalidade. Produz efeitos EX NUNC (não retroage).",
            dificuldade: "Média",
            competencia: "Revogação",
            banca: "IADES",
            tags: ["revogação", "mérito"],
          },
        ],
      },
    },
    {
      id: "ap-topico-7",
      numero: 7,
      titulo: "Organização Administrativa",
      conteudo: {
        resumo: `
## Resumo Rápido

A organização administrativa brasileira divide-se em **Administração Direta** (desconcentração) e **Administração Indireta** (descentralização).

### Desconcentração vs Descentralização

| Conceito | O que cria | Personalidade Jurídica | Hierarquia |
|----------|------------|------------------------|------------|
| **Desconcentração** | Órgãos | NÃO tem (mesma PJ) | Subordinação |
| **Descentralização** | Entidades | TEM (nova PJ) | Vinculação |

### Estrutura da Administração

| Administração | Composição | Exemplos |
|---------------|-----------|----------|
| **Direta** | União, Estados, DF, Municípios | Ministérios, Secretarias, Delegacias |
| **Indireta** | Autarquias, Fundações, EP, SEM | INSS, Petrobras, Correios |

### Entidades da Administração Indireta - Comparativo

| Característica | Autarquia | Fundação | Empresa Pública | SEM |
|----------------|-----------|----------|-----------------|-----|
| **Personalidade** | Direito PÚBLICO | Público ou Privado | Direito PRIVADO | Direito PRIVADO |
| **Criação** | Lei específica CRIA | Lei cria (púb.) ou autoriza (priv.) | Lei AUTORIZA + registro | Lei AUTORIZA + registro |
| **Capital** | Público | Público | 100% PÚBLICO | Maioria público + privado |
| **Forma societária** | - | - | Qualquer forma | Somente S.A. |
| **Regime de pessoal** | Estatutário | Estatutário ou CLT | CLT | CLT |

### Exemplos por Entidade

| Entidade | Exemplos |
|----------|----------|
| **Autarquias** | INSS, IBAMA, INCRA, BACEN, universidades federais, agências reguladoras |
| **Fundações** | FUNAI, IBGE, Fundação Oswaldo Cruz (Fiocruz) |
| **Empresas Públicas** | Correios, CEF, BNDES, Casa da Moeda |
| **SEM** | Petrobras, Banco do Brasil, Eletrobras |

### Regime Jurídico das Autarquias (Direito Público)

| Prerrogativa | Descrição |
|--------------|-----------|
| **Bens impenhoráveis** | Não podem ser penhorados |
| **Imunidade tributária** | Recíproca (art. 150, VI, CF) |
| **Precatórios** | Pagamentos por ordem cronológica |
| **Servidores estatutários** | Regime jurídico único |

### Pontos-Chave para a Prova IADES:
- **Autarquia**: direito público, lei específica CRIA diretamente
- **EP e SEM**: direito privado, lei AUTORIZA + registro cria
- **SEM obrigatoriamente S.A.**; EP pode ser qualquer forma
- Administração indireta é **VINCULADA** (não subordinada)
- **EP = 100% público**; SEM = maioria pública + sócios privados
        `,

        explicacao: `A organização administrativa parece complexa, mas segue uma lógica simples. Entenda primeiro a diferença entre desconcentração e descentralização.

**DESCONCENTRAÇÃO vs DESCENTRALIZAÇÃO:**

DESCONCENTRAÇÃO (Administração DIRETA):
- Distribuição de tarefas DENTRO da mesma pessoa jurídica
- Criação de órgãos (sem personalidade jurídica)
- Ex: Ministério da Saúde cria Secretaria de Vigilância
- Há hierarquia/subordinação

DESCENTRALIZAÇÃO (Administração INDIRETA):
- Transferência de tarefas para OUTRA pessoa jurídica
- Criação de entidades (com personalidade jurídica)
- Ex: União cria o INSS (autarquia)
- Há vinculação, NÃO subordinação

**DICA PARA DECORAR:**
- DescoNcentração = criação de órgãOs (N de órgão) - Não tem personalidade
- DesCentralização = criação de Entidades (C de entidade) - Com personalidade

**ENTIDADES DA ADMINISTRAÇÃO INDIRETA - CARACTERÍSTICAS:**

1. **AUTARQUIAS** (direito público)
   - Por que existem? Para exercer atividades TÍPICAS de Estado
   - Criação: por lei específica (já nasce pronta)
   - Regime: 100% público (bens impenhoráveis, imunidade, precatórios, estatutários)
   - Exemplo prático: INSS (previdência é atividade típica)

2. **FUNDAÇÕES** (público ou privado)
   - Por que existem? Para atividades de interesse social sem fins lucrativos
   - Se for de direito público: é praticamente uma autarquia
   - Se for de direito privado: regime híbrido
   - Exemplo: FUNAI, fundações de apoio a universidades

3. **EMPRESAS PÚBLICAS** (direito privado)
   - Por que existem? Para explorar atividade econômica ou prestar serviço público
   - Capital: 100% público
   - Forma: qualquer (Ltda, S.A., etc.)
   - Exemplo: Correios (serviço público), CEF (atividade econômica)

4. **SOCIEDADES DE ECONOMIA MISTA** (direito privado)
   - Por que existem? Mesmas finalidades, mas permite sócio privado
   - Capital: maioria público + sócios privados (pode vender ações na bolsa)
   - Forma: obrigatoriamente S.A.
   - Exemplo: Petrobras, Banco do Brasil

**PEGADINHA CLÁSSICA:**
- EP e SEM têm direito PRIVADO, mas sofrem controle público (licitação, concurso)
- A imunidade tributária recíproca NÃO se aplica a EP/SEM exploradoras de atividade econômica`,

        pontosChave: [
          "Administração Direta: União, Estados, DF, Municípios (desconcentração)",
          "Administração Indireta: autarquias, fundações, EP, SEM (descentralização)",
          "Autarquias: direito público, lei específica cria, regime público integral",
          "Fundações: podem ser de direito público ou privado",
          "Empresas Públicas: direito privado, capital 100% público, qualquer forma",
          "SEM: direito privado, capital misto, só S.A.",
          "EP e SEM: autorizadas por lei, criadas por registro",
          "Administração indireta é VINCULADA, não subordinada",
          "Desconcentração cria órgãos; descentralização cria entidades",
        ],

        armadilhas: [
          {
            titulo: "Autarquia vs Empresa Pública",
            descricao: "Confundir autarquia com empresa pública quanto à natureza jurídica.",
            dica: "Autarquia = direito PÚBLICO. Empresa Pública = direito PRIVADO.",
          },
          {
            titulo: "Forma societária da SEM",
            descricao: "Achar que SEM pode ser Ltda ou outra forma societária.",
            dica: "SEM é obrigatoriamente S.A. (Sociedade Anônima).",
          },
          {
            titulo: "Subordinação vs Vinculação",
            descricao: "Pensar que EP/SEM são subordinadas à Administração Direta.",
            dica: "São VINCULADAS (tutela/controle finalístico), não subordinadas.",
          },
          {
            titulo: "Criação de autarquias",
            descricao: "Esquecer que autarquia é criada diretamente por lei.",
            dica: "LEI ESPECÍFICA cria autarquia. EP/SEM: lei autoriza + registro.",
          },
          {
            titulo: "Natureza das fundações",
            descricao: "Achar que toda fundação pública é de direito privado.",
            dica: "Fundação pode ser de direito público OU privado.",
          },
          {
            titulo: "Desconcentração vs Descentralização",
            descricao: "Confundir os dois conceitos.",
            dica: "Desconcentração = órgãos (mesma PJ). Descentralização = entidades (nova PJ).",
          },
        ],

        mnemonicos: [
          {
            termo: "FASE",
            significado: "Entidades da Administração Indireta",
            frase: "Fundações, Autarquias, SEM, Empresas Públicas.",
          },
          {
            termo: "SEM = S.A.",
            significado: "Forma societária obrigatória",
            frase: "Sociedade de Economia Mista só pode ser S.A. (ambos com S).",
          },
          {
            termo: "EP = 100% P",
            significado: "Capital da Empresa Pública",
            frase: "EP = 100% Público (P de Público).",
          },
          {
            termo: "Lei CRI-a vs AUT-oriza",
            significado: "Forma de criação",
            frase: "Lei CRIa autarquia. Lei AUToriza EP/SEM (depois registra).",
          },
          {
            termo: "DesCON = Órgãos",
            significado: "Desconcentração",
            frase: "DesCONcentração = Órgãos (CON de órgão, mesma PJ).",
          },
          {
            termo: "DesCEN = ENtidades",
            significado: "Descentralização",
            frase: "DesCENtralização = ENtidades (CEN de entidade, nova PJ).",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-7-1",
            frente: "Quais são as entidades da Administração Indireta?",
            verso: "Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista",
            tags: ["administração indireta", "entidades"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-2",
            frente: "Qual a diferença entre desconcentração e descentralização?",
            verso: "Desconcentração: distribuição de tarefas dentro da mesma pessoa jurídica (cria órgãos). Descentralização: transferência para outra pessoa jurídica (cria entidades)",
            tags: ["desconcentração", "descentralização"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-3",
            frente: "Como são criadas as autarquias?",
            verso: "Por LEI ESPECÍFICA (art. 37, XIX, CF) - a lei cria diretamente, sem necessidade de registro",
            tags: ["autarquia", "criação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-4",
            frente: "Qual a diferença de capital entre Empresa Pública e SEM?",
            verso: "EP: capital 100% público. SEM: capital majoritariamente público, mas admite sócios privados",
            tags: ["EP", "SEM", "capital"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-5",
            frente: "Qual forma societária é obrigatória para SEM?",
            verso: "Sociedade Anônima (S.A.) - é a única forma permitida",
            tags: ["SEM", "forma societária"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-6",
            frente: "Autarquias têm personalidade jurídica de direito público ou privado?",
            verso: "Direito PÚBLICO - por isso têm imunidade tributária, bens impenhoráveis, precatórios, servidores estatutários",
            tags: ["autarquia", "direito público"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-7",
            frente: "As entidades da Administração Indireta são subordinadas ou vinculadas?",
            verso: "VINCULADAS (supervisão ministerial), não subordinadas - não há hierarquia entre a entidade e a Administração Direta",
            tags: ["vinculação", "supervisão"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-7-8",
            frente: "Dê exemplos de autarquias federais.",
            verso: "INSS, IBAMA, INCRA, BACEN, CVM, universidades federais, agências reguladoras",
            tags: ["autarquia", "exemplos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-7-1",
            enunciado: "São entidades da Administração Indireta:",
            alternativas: [
              { letra: "A", texto: "Ministérios, Secretarias e Delegacias." },
              { letra: "B", texto: "União, Estados, DF e Municípios." },
              { letra: "C", texto: "Autarquias, fundações, empresas públicas e sociedades de economia mista." },
              { letra: "D", texto: "Apenas autarquias e fundações." },
              { letra: "E", texto: "Apenas empresas públicas e sociedades de economia mista." },
            ],
            gabarito: "C",
            justificativa: "A Administração Indireta é composta por: AUTARQUIAS, FUNDAÇÕES PÚBLICAS, EMPRESAS PÚBLICAS e SOCIEDADES DE ECONOMIA MISTA.",
            dificuldade: "Fácil",
            competencia: "Administração indireta",
            banca: "IADES",
            tags: ["administração indireta", "entidades"],
          },
          {
            id: "ap-q-7-2",
            enunciado: "As autarquias são criadas:",
            alternativas: [
              { letra: "A", texto: "por decreto do chefe do Executivo." },
              { letra: "B", texto: "por lei específica." },
              { letra: "C", texto: "por lei autorizativa seguida de registro." },
              { letra: "D", texto: "por medida provisória." },
              { letra: "E", texto: "por resolução do órgão competente." },
            ],
            gabarito: "B",
            justificativa: "Autarquias são criadas por LEI ESPECÍFICA (art. 37, XIX, CF). A lei cria diretamente a autarquia, sem necessidade de registro posterior.",
            dificuldade: "Média",
            competencia: "Criação de autarquias",
            banca: "IADES",
            tags: ["autarquia", "lei específica"],
          },
          {
            id: "ap-q-7-3",
            enunciado: "A distribuição de competências dentro de uma mesma pessoa jurídica denomina-se:",
            alternativas: [
              { letra: "A", texto: "descentralização." },
              { letra: "B", texto: "delegação." },
              { letra: "C", texto: "desconcentração." },
              { letra: "D", texto: "outorga." },
              { letra: "E", texto: "avocação." },
            ],
            gabarito: "C",
            justificativa: "DESCONCENTRAÇÃO é a distribuição de competências dentro da mesma pessoa jurídica, criando órgãos internos. DESCENTRALIZAÇÃO transfere competências para outra pessoa jurídica.",
            dificuldade: "Média",
            competencia: "Desconcentração",
            banca: "IADES",
            tags: ["desconcentração", "órgãos"],
          },
          {
            id: "ap-q-7-4",
            enunciado: "A sociedade de economia mista deve adotar a forma de:",
            alternativas: [
              { letra: "A", texto: "empresa limitada." },
              { letra: "B", texto: "sociedade anônima." },
              { letra: "C", texto: "sociedade simples." },
              { letra: "D", texto: "cooperativa." },
              { letra: "E", texto: "qualquer forma societária." },
            ],
            gabarito: "B",
            justificativa: "A SEM obrigatoriamente deve ser SOCIEDADE ANÔNIMA (S.A.). A empresa pública pode adotar qualquer forma societária.",
            dificuldade: "Média",
            competencia: "Forma societária",
            banca: "IADES",
            tags: ["SEM", "S.A."],
          },
          {
            id: "ap-q-7-5",
            enunciado: "A relação entre as entidades da Administração Indireta e a Administração Direta é de:",
            alternativas: [
              { letra: "A", texto: "subordinação hierárquica." },
              { letra: "B", texto: "vinculação, sem subordinação." },
              { letra: "C", texto: "total independência." },
              { letra: "D", texto: "delegação de poderes." },
              { letra: "E", texto: "tutela absoluta." },
            ],
            gabarito: "B",
            justificativa: "As entidades da Administração Indireta são VINCULADAS (supervisão ministerial), não SUBORDINADAS. Não há hierarquia, mas há controle finalístico.",
            dificuldade: "Média",
            competencia: "Vinculação",
            banca: "IADES",
            tags: ["vinculação", "supervisão"],
          },
          {
            id: "ap-q-7-6",
            enunciado: "A empresa pública caracteriza-se por ter:",
            alternativas: [
              { letra: "A", texto: "capital misto, com maioria pública." },
              { letra: "B", texto: "capital integralmente público." },
              { letra: "C", texto: "personalidade jurídica de direito público." },
              { letra: "D", texto: "forma obrigatória de S.A." },
              { letra: "E", texto: "regime jurídico integralmente público." },
            ],
            gabarito: "B",
            justificativa: "A empresa pública tem capital 100% PÚBLICO. A SEM é que tem capital misto. Ambas têm personalidade de direito privado.",
            dificuldade: "Média",
            competencia: "Empresa pública",
            banca: "IADES",
            tags: ["EP", "capital público"],
          },
          {
            id: "ap-q-7-7",
            enunciado: "São exemplos de autarquias federais:",
            alternativas: [
              { letra: "A", texto: "Correios e Caixa Econômica Federal." },
              { letra: "B", texto: "Petrobras e Banco do Brasil." },
              { letra: "C", texto: "INSS, IBAMA e INCRA." },
              { letra: "D", texto: "Ministério da Saúde e Secretaria da Receita Federal." },
              { letra: "E", texto: "BNDES e Casa da Moeda." },
            ],
            gabarito: "C",
            justificativa: "INSS, IBAMA e INCRA são autarquias. Correios, CEF, BNDES são empresas públicas. Petrobras e BB são SEM. Ministérios são órgãos.",
            dificuldade: "Média",
            competencia: "Exemplos de autarquias",
            banca: "IADES",
            tags: ["autarquia", "exemplos"],
          },
          {
            id: "ap-q-7-8",
            enunciado: "As autarquias possuem personalidade jurídica de direito:",
            alternativas: [
              { letra: "A", texto: "privado." },
              { letra: "B", texto: "público." },
              { letra: "C", texto: "misto." },
              { letra: "D", texto: "híbrido." },
              { letra: "E", texto: "especial." },
            ],
            gabarito: "B",
            justificativa: "Autarquias têm personalidade jurídica de direito PÚBLICO, o que lhes confere prerrogativas como imunidade tributária recíproca, bens impenhoráveis e pagamento por precatório.",
            dificuldade: "Fácil",
            competencia: "Natureza jurídica",
            banca: "IADES",
            tags: ["autarquia", "direito público"],
          },
          {
            id: "ap-q-7-9",
            enunciado: "A descentralização administrativa consiste em:",
            alternativas: [
              { letra: "A", texto: "distribuição de competências dentro da mesma pessoa jurídica." },
              { letra: "B", texto: "transferência de competências para outra pessoa jurídica." },
              { letra: "C", texto: "criação de órgãos internos." },
              { letra: "D", texto: "delegação de competências entre órgãos." },
              { letra: "E", texto: "concentração de poderes no órgão central." },
            ],
            gabarito: "B",
            justificativa: "DESCENTRALIZAÇÃO é a transferência de competências para OUTRA pessoa jurídica, criando entidades da Administração Indireta. Desconcentração é que distribui dentro da mesma pessoa jurídica.",
            dificuldade: "Média",
            competencia: "Descentralização",
            banca: "IADES",
            tags: ["descentralização", "entidades"],
          },
          {
            id: "ap-q-7-10",
            enunciado: "A criação de empresas públicas e sociedades de economia mista depende de:",
            alternativas: [
              { letra: "A", texto: "lei específica que as cria diretamente." },
              { letra: "B", texto: "decreto do chefe do Executivo." },
              { letra: "C", texto: "autorização legislativa e registro em órgão competente." },
              { letra: "D", texto: "apenas registro em órgão competente." },
              { letra: "E", texto: "medida provisória com força de lei." },
            ],
            gabarito: "C",
            justificativa: "EP e SEM são criadas em duas etapas: 1) autorização por lei específica; 2) registro no órgão competente (Junta Comercial). Diferente das autarquias, que são criadas diretamente por lei.",
            dificuldade: "Média",
            competencia: "Criação de EP/SEM",
            banca: "IADES",
            tags: ["EP", "SEM", "criação"],
          },
        ],
      },
    },
    {
      id: "ap-topico-8",
      numero: 8,
      titulo: "Controle da Administração Pública",
      conteudo: {
        resumo: `# Controle da Administração Pública

O **controle da Administração Pública** é o conjunto de instrumentos que permitem fiscalizar, corrigir e orientar a atuação administrativa, garantindo a conformidade com os princípios constitucionais e a satisfação do interesse público.

## Classificação Quanto à Origem

### 1. Controle Interno
Exercido pela **própria Administração** sobre seus órgãos e agentes.

**Fundamento**: Art. 74, CF/88 - Os Poderes manterão sistema de controle interno.

**Características**:
- Autotutela administrativa (Súmula 473, STF)
- Controle hierárquico e finalístico
- Preventivo, concomitante e posterior

### 2. Controle Externo
Exercido por **órgão estranho** à Administração controlada.

**Modalidades**:
- **Controle Legislativo**: direto (CPIs, sustações) e indireto (TCU/TCE)
- **Controle Judicial**: inafastabilidade (art. 5º, XXXV, CF)
- **Controle pelo Tribunal de Contas**: auxilia o Legislativo

### 3. Controle Social
Exercido pela **sociedade/cidadãos** sobre a Administração.

**Instrumentos**:
- Ação Popular (Lei 4.717/65)
- Direito de petição
- Audiências e consultas públicas
- Lei de Acesso à Informação (Lei 12.527/11)
- Conselhos de políticas públicas`,

        explicacao: `# Controle da Administração Pública: Análise Completa

## Conceito e Finalidade

O controle da Administração Pública é o poder-dever de vigilância, orientação e correção que um Poder, órgão ou autoridade exerce sobre a conduta funcional de outro ou sobre seus próprios atos, visando:
- **Legalidade**: conformidade com o ordenamento jurídico
- **Legitimidade**: adequação ao interesse público
- **Economicidade**: relação custo-benefício adequada
- **Eficiência**: melhor resultado com menor dispêndio

---

## CONTROLE INTERNO

### Conceito
É o controle exercido por cada Poder sobre seus próprios atos e agentes. Decorre da **autotutela administrativa** e da **hierarquia**.

### Fundamento Constitucional (Art. 74, CF/88)

Os Poderes Legislativo, Executivo e Judiciário manterão sistema de controle interno com a finalidade de:

1. **Avaliar o cumprimento das metas** previstas no PPA
2. **Comprovar a legalidade** e avaliar resultados da gestão orçamentária
3. **Exercer controle das operações de crédito**, avais e garantias
4. **Apoiar o controle externo** no exercício de sua missão

### Instrumentos do Controle Interno

| Instrumento | Descrição | Momento |
|-------------|-----------|---------|
| **Controle hierárquico** | Superior controla atos do subordinado | Permanente |
| **Supervisão ministerial** | Ministério sobre entidades vinculadas | Permanente |
| **Auditoria interna** | Verificação contábil e operacional | Posterior |
| **Corregedorias** | Apuração disciplinar | Posterior |
| **Pareceres/Consultas jurídicas** | Orientação prévia | Preventivo |
| **Homologação/Aprovação** | Condição de eficácia | Prévio |

### Súmula 473, STF - Autotutela

*"A Administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial."*

**Atenção**: A anulação deve observar o prazo decadencial de 5 anos (Lei 9.784/99, art. 54), salvo má-fé.

### Recurso Hierárquico Próprio x Impróprio

| Tipo | Características | Exemplo |
|------|-----------------|---------|
| **Próprio** | Mesmo órgão/entidade; não precisa previsão legal | Recurso ao Secretário contra ato do Diretor |
| **Impróprio** | Entidades diferentes; exige previsão legal | Recurso ao Ministério contra decisão de autarquia |

---

## CONTROLE EXTERNO

### Conceito
É o controle exercido por órgão estranho à Administração responsável pelo ato controlado.

### A) Controle Legislativo

#### Controle Político (Direto)

| Instrumento | Fundamento | Alcance |
|-------------|------------|---------|
| **CPIs** | Art. 58, §3º, CF | Poderes de investigação |
| **Convocação de autoridades** | Art. 50, CF | Ministros e titulares de órgãos |
| **Sustação de atos** | Art. 49, V, CF | Atos normativos que exorbitem |
| **Autorização/Aprovação** | Art. 49, CF | Tratados, estado de sítio, etc. |
| **Julgamento de contas** | Art. 49, IX, CF | Contas do Presidente |

#### Fiscalização Contábil-Financeira (Art. 70, CF)

> "A fiscalização contábil, financeira, orçamentária, operacional e patrimonial da União e das entidades da administração direta e indireta, quanto à **legalidade, legitimidade, economicidade**, aplicação das subvenções e renúncia de receitas, será exercida pelo Congresso Nacional, mediante controle externo, e pelo sistema de controle interno de cada Poder."

### B) Controle pelo Tribunal de Contas

O TCU (e TCEs/TCMs) **auxilia** o Legislativo no controle externo (art. 71, CF).

#### Competências Principais do TCU (Art. 71, CF)

1. **Apreciar** as contas do Presidente (parecer prévio)
2. **Julgar** as contas dos administradores e responsáveis
3. **Apreciar** legalidade de admissões e aposentadorias
4. **Realizar auditorias e inspeções**
5. **Fiscalizar** contas nacionais de empresas supranacionais
6. **Aplicar sanções**: multa, inabilitação
7. **Sustar** atos impugnados (se não atendido)
8. **Representar** ao Poder competente

#### Natureza das Decisões do TCU

| Aspecto | Entendimento |
|---------|--------------|
| Natureza | **Administrativa** (não jurisdicional) |
| Coisa julgada | Não faz (revisível pelo Judiciário) |
| Título executivo | Súmula 282, TCU - sim |
| Controle judicial | Limitado à legalidade |

#### Súmula Vinculante 3

*"Nos processos perante o Tribunal de Contas da União asseguram-se o contraditório e a ampla defesa quando da decisão puder resultar anulação ou revogação de ato administrativo que beneficie o interessado, excetuada a apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão."*

**Atenção**: Após 5 anos da chegada ao TCU sem análise, passa a exigir contraditório (jurisprudência STF).

### C) Controle Judicial

#### Fundamento: Princípio da Inafastabilidade (Art. 5º, XXXV, CF)

> "A lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito."

#### Características

| Aspecto | Descrição |
|---------|-----------|
| **Sistema adotado** | Jurisdição una (inglês) |
| **Provocação** | Depende de provocação (inércia) |
| **Alcance** | Legalidade e legitimidade |
| **Atos vinculados** | Controle amplo |
| **Atos discricionários** | Não substitui mérito, mas controla limites |

#### Instrumentos Judiciais de Controle

| Instrumento | Lei/Fundamento | Finalidade |
|-------------|----------------|------------|
| **Mandado de Segurança** | Lei 12.016/09 | Direito líquido e certo |
| **Habeas Data** | Lei 9.507/97 | Acesso/retificação de dados |
| **Habeas Corpus** | Art. 5º, LXVIII | Liberdade de locomoção |
| **Mandado de Injunção** | Lei 13.300/16 | Omissão normativa |
| **Ação Civil Pública** | Lei 7.347/85 | Direitos difusos/coletivos |
| **Ação Popular** | Lei 4.717/65 | Lesivo ao patrimônio público |

#### Controle Judicial do Mérito Administrativo

**Regra geral**: O Judiciário **não** pode substituir o mérito (conveniência e oportunidade) do administrador.

**Exceções** (controle de juridicidade):
- Violação aos princípios da razoabilidade e proporcionalidade
- Desvio de finalidade
- Ausência de motivação
- Teoria dos motivos determinantes

---

## CONTROLE SOCIAL

### Conceito
É o controle exercido pela **sociedade civil** sobre a Administração Pública, manifestação direta da cidadania e da democracia participativa.

### Fundamentos Constitucionais
- Art. 1º, parágrafo único: "Todo poder emana do povo"
- Art. 37, §3º: participação do usuário na administração pública
- Art. 74, §2º: denúncia ao TCU

### Instrumentos de Controle Social

| Instrumento | Base Legal | Características |
|-------------|------------|-----------------|
| **Ação Popular** | Lei 4.717/65 | Cidadão eleitor; gratuita (salvo má-fé) |
| **Direito de petição** | Art. 5º, XXXIV, CF | Gratuito; independe de advogado |
| **Denúncia ao TCU** | Art. 74, §2º, CF | Qualquer cidadão, partido, sindicato |
| **Audiências públicas** | Lei 9.784/99 | Debates antes de decisões relevantes |
| **Consultas públicas** | Lei 9.784/99 | Manifestações escritas |
| **Conselhos gestores** | Leis específicas | Participação na formulação de políticas |
| **Orçamento participativo** | Leis municipais | Destinação de recursos |

### Lei de Acesso à Informação (Lei 12.527/2011)

#### Princípios
- **Publicidade** como regra, sigilo como exceção
- **Transparência ativa**: divulgação proativa
- **Transparência passiva**: resposta a pedidos

#### Prazos
- Resposta imediata ou em até **20 dias** (prorrogável por mais 10)
- Recurso: **10 dias** para interpor

#### Classificação de Sigilo
| Grau | Prazo Máximo | Autoridade |
|------|--------------|------------|
| Ultrassecreto | 25 anos | Presidente, Vice, Ministros, etc. |
| Secreto | 15 anos | Autoridades que exerçam funções de direção |
| Reservado | 5 anos | Autoridades que exerçam funções de direção |

### Portal da Transparência
Obrigatório para todos os entes federativos (LC 131/2009).

**Conteúdo mínimo**:
- Despesas em tempo real
- Receitas
- Licitações e contratos
- Remuneração de servidores

---

## CLASSIFICAÇÕES DO CONTROLE

### Quanto ao Momento

| Tipo | Momento | Exemplo |
|------|---------|---------|
| **Prévio (a priori)** | Antes do ato | Autorização legislativa |
| **Concomitante** | Durante | Acompanhamento de obra |
| **Posterior (a posteriori)** | Após | Homologação, auditoria |

### Quanto à Amplitude

| Tipo | Alcance |
|------|---------|
| **Hierárquico** | Todos os aspectos (legalidade + mérito) |
| **Finalístico** | Apenas se cumpre finalidades (tutela) |

### Quanto ao Aspecto Controlado

| Tipo | Objeto |
|------|--------|
| **De legalidade** | Conformidade com a lei |
| **De mérito** | Conveniência e oportunidade |

---

## COMPARATIVO: CONTROLE INTERNO x EXTERNO x SOCIAL

| Aspecto | Interno | Externo | Social |
|---------|---------|---------|--------|
| **Quem exerce** | Próprio Poder | Outro Poder | Cidadãos/sociedade |
| **Fundamento** | Hierarquia/autotutela | Freios e contrapesos | Soberania popular |
| **Alcance** | Legalidade e mérito | Legalidade (regra) | Fiscalização geral |
| **Exemplos** | CGU, auditorias | TCU, Judiciário | Ação popular, LAI |
| **Natureza** | Obrigatório | Obrigatório | Facultativo |`,

        pontosChave: [
          "Controle interno: exercido pelo próprio Poder sobre seus atos (autotutela - Súmula 473/STF)",
          "Art. 74, CF: todos os Poderes devem manter sistema de controle interno",
          "Controle externo: Legislativo (direto + TCU), Judiciário (jurisdição una)",
          "TCU: auxilia o Legislativo, julga contas de administradores, aprecia contas do Presidente",
          "Decisões do TCU têm natureza administrativa (não fazem coisa julgada material)",
          "Súmula Vinculante 3: contraditório no TCU, exceto apreciação inicial de aposentadoria",
          "Controle judicial: não substitui mérito, mas controla limites (proporcionalidade, motivação)",
          "Controle social: ação popular, LAI, audiências públicas, denúncia ao TCU",
          "LAI (Lei 12.527/11): publicidade como regra, sigilo como exceção",
          "Prazos LAI: 20 dias + 10 de prorrogação para resposta",
          "Recurso hierárquico próprio não precisa previsão legal; impróprio exige",
          "Anulação pela Administração: prazo decadencial de 5 anos (Lei 9.784/99)"
        ],

        armadilhas: [
          {
            titulo: "TCU JULGA x APRECIA",
            descricao: "TCU JULGA contas de administradores, mas apenas APRECIA (parecer prévio) contas do Presidente.",
            dica: "Lembre: quem JULGA o Presidente é o Congresso Nacional, não o TCU.",
          },
          {
            titulo: "Decisões do TCU e coisa julgada",
            descricao: "Decisões do TCU NÃO fazem coisa julgada material - são revisíveis pelo Judiciário.",
            dica: "TCU exerce função administrativa, não jurisdicional.",
          },
          {
            titulo: "Judiciário e mérito administrativo",
            descricao: "Judiciário NÃO pode substituir o mérito administrativo - pode anular, não revogar.",
            dica: "Revogar = conveniência/oportunidade = competência da própria Administração.",
          },
          {
            titulo: "Sistema de jurisdição brasileiro",
            descricao: "Brasil adota sistema de jurisdição UNA (inglês), não o contencioso administrativo (francês).",
            dica: "Una = todas as causas vão ao Judiciário comum.",
          },
          {
            titulo: "Recurso hierárquico impróprio",
            descricao: "Recurso hierárquico IMPRÓPRIO exige previsão legal expressa (entre entidades diferentes).",
            dica: "Próprio não precisa de lei; impróprio (outra pessoa jurídica) precisa.",
          },
          {
            titulo: "Legitimidade para ação popular",
            descricao: "A ação popular exige que o autor seja CIDADÃO ELEITOR (não basta ser brasileiro).",
            dica: "Precisa ter título de eleitor - estrangeiros e menores de 16 não podem.",
          },
          {
            titulo: "Controle interno obrigatório",
            descricao: "Controle interno é OBRIGATÓRIO para todos os Poderes (art. 74, CF).",
            dica: "Todos = Executivo, Legislativo e Judiciário devem ter.",
          },
          {
            titulo: "Sustação de atos x contratos",
            descricao: "O TCU pode SUSTAR atos, mas sustação de CONTRATOS é competência do Congresso.",
            dica: "Atos = TCU sozinho. Contratos = Congresso (mais grave).",
          },
          {
            titulo: "Prazo de resposta LAI",
            descricao: "LAI: prazo de resposta é 20 dias (não 30), prorrogável por mais 10.",
            dica: "20+10 = máximo 30 dias, mas o prazo inicial é 20.",
          },
          {
            titulo: "Súmula 473 e prazo decadencial",
            descricao: "Súmula 473 não elimina prazo decadencial - após 5 anos, não pode mais anular.",
            dica: "Art. 54 da Lei 9.784/99: 5 anos para anular atos de boa-fé.",
          },
        ],

        mnemonicos: [
          {
            termo: "LEGS",
            significado: "Fiscalização pelo Controle Externo (art. 70, CF)",
            frase: "L - Legalidade / E - Economicidade / G - leGitimidade / S - Subvenções e renúncias",
          },
          {
            termo: "AME o APOIO",
            significado: "Finalidades do Controle Interno (art. 74, CF)",
            frase: "A - Avaliar metas (PPA) / M - Monitorar gestão / E - Exercer controle de crédito / APOIO ao controle externo",
          },
          {
            termo: "APRECIA x JULGA",
            significado: "Competências do TCU",
            frase: "APRECIA = Presidente (parecer prévio) e aposentadorias / JULGA = administradores e responsáveis por dinheiro público",
          },
          {
            termo: "5-15-25",
            significado: "Prazos de Sigilo na LAI",
            frase: "Reservado = 5 anos / Secreto = 15 anos / Ultrassecreto = 25 anos (dobra a cada nível)",
          },
          {
            termo: "PADACO",
            significado: "Instrumentos de Controle Social",
            frase: "P - Petição / A - Ação popular / D - Denúncia ao TCU / A - Audiência pública / CO - Conselhos/COnsulta pública",
          },
          {
            termo: "ANULA e REVOGA",
            significado: "Súmula 473 do STF",
            frase: "ANULA = vícios de ilegalidade (não gera direito) / REVOGA = conveniência e oportunidade (respeita direitos adquiridos)",
          },
        ],

        flashcards: [
          {
            frente: "Qual a diferença entre controle interno e externo?",
            verso: "INTERNO: exercido pelo próprio Poder/órgão sobre seus atos (autotutela, hierarquia). EXTERNO: exercido por Poder/órgão estranho (Legislativo, Judiciário, TCU).",
            caixa: 1,
          },
          {
            frente: "Quem julga as contas dos administradores públicos?",
            verso: "O TRIBUNAL DE CONTAS julga as contas dos administradores e demais responsáveis por dinheiros públicos. Já as contas do Presidente da República são APRECIADAS (parecer prévio) pelo TCU e JULGADAS pelo Congresso Nacional.",
            caixa: 1,
          },
          {
            frente: "As decisões do TCU fazem coisa julgada?",
            verso: "NÃO. As decisões do TCU têm natureza ADMINISTRATIVA, não jurisdicional, portanto não fazem coisa julgada material e podem ser revistas pelo Poder Judiciário.",
            caixa: 1,
          },
          {
            frente: "O Judiciário pode analisar o mérito dos atos administrativos?",
            verso: "O Judiciário NÃO pode substituir o mérito (conveniência e oportunidade) do administrador, mas pode controlar os LIMITES da discricionariedade: proporcionalidade, razoabilidade, motivação, desvio de finalidade.",
            caixa: 1,
          },
          {
            frente: "O que estabelece a Súmula 473 do STF?",
            verso: "A Administração pode ANULAR seus atos ilegais (deles não se originam direitos) ou REVOGÁ-LOS por conveniência/oportunidade (respeitados direitos adquiridos), ressalvada a apreciação judicial. É o princípio da AUTOTUTELA.",
            caixa: 1,
          },
          {
            frente: "Qual o prazo para a Administração anular atos ilegais?",
            verso: "5 ANOS, conforme art. 54 da Lei 9.784/99, contados da data em que foram praticados, SALVO comprovada MÁ-FÉ do beneficiário.",
            caixa: 1,
          },
          {
            frente: "Quais são os graus de sigilo na LAI e seus prazos?",
            verso: "RESERVADO: 5 anos / SECRETO: 15 anos / ULTRASSECRETO: 25 anos. Macete: 5-15-25 (dobra e soma 5).",
            caixa: 1,
          },
          {
            frente: "Qual o prazo para resposta a pedido de informação pela LAI?",
            verso: "Resposta imediata ou em até 20 DIAS, prorrogável por mais 10 dias mediante justificativa expressa.",
            caixa: 1,
          },
          {
            frente: "O que é o recurso hierárquico impróprio?",
            verso: "É o recurso dirigido a autoridade de OUTRA pessoa jurídica (ex: de autarquia para o Ministério). Diferente do próprio, EXIGE previsão legal expressa.",
            caixa: 1,
          },
          {
            frente: "Quais são os principais instrumentos do controle social?",
            verso: "Ação Popular (Lei 4.717/65), Direito de Petição (art. 5º, XXXIV), Denúncia ao TCU (art. 74, §2º), Lei de Acesso à Informação, Audiências/Consultas Públicas, Conselhos de Políticas Públicas.",
            caixa: 1,
          },
          {
            frente: "Qual a finalidade do sistema de controle interno previsto no art. 74, CF?",
            verso: "Avaliar cumprimento de metas do PPA, comprovar legalidade e avaliar resultados da gestão, controlar operações de crédito/avais/garantias, e APOIAR o controle externo.",
            caixa: 1,
          },
          {
            frente: "O que dispõe a Súmula Vinculante 3 sobre o TCU?",
            verso: "Assegura contraditório e ampla defesa no TCU quando a decisão puder anular/revogar ato que beneficie o interessado, EXCETO na apreciação da legalidade do ato de concessão INICIAL de aposentadoria, reforma e pensão.",
            caixa: 1,
          },
        ],

        questoes: [
          {
            id: "ap-q-8-1",
            enunciado: "Acerca do controle da Administração Pública, assinale a alternativa correta:",
            alternativas: [
              { letra: "A", texto: "O Tribunal de Contas da União exerce função jurisdicional ao julgar as contas dos administradores públicos." },
              { letra: "B", texto: "O controle interno é facultativo, devendo cada Poder decidir sobre sua implementação." },
              { letra: "C", texto: "As decisões do TCU possuem natureza administrativa e podem ser revistas pelo Poder Judiciário." },
              { letra: "D", texto: "O Poder Judiciário pode revogar atos administrativos por conveniência e oportunidade." },
              { letra: "E", texto: "O TCU julga as contas anuais prestadas pelo Presidente da República." },
            ],
            gabarito: "C",
            justificativa: "As decisões do TCU têm natureza ADMINISTRATIVA, não jurisdicional, portanto são revisíveis pelo Judiciário. O TCU APRECIA (não julga) as contas do Presidente. O controle interno é OBRIGATÓRIO (art. 74, CF). O Judiciário NÃO revoga atos (não analisa mérito).",
            dificuldade: "Média",
            competencia: "Natureza das decisões do TCU",
            banca: "IADES",
            tags: ["TCU", "controle externo", "natureza administrativa"],
          },
          {
            id: "ap-q-8-2",
            enunciado: "Segundo a Súmula 473 do Supremo Tribunal Federal, a Administração Pública:",
            alternativas: [
              { letra: "A", texto: "pode anular seus atos ilegais, independentemente de qualquer prazo." },
              { letra: "B", texto: "pode revogar atos ilegais e anular atos inconvenientes." },
              { letra: "C", texto: "pode anular atos ilegais e revogar atos por conveniência, respeitados direitos adquiridos na revogação." },
              { letra: "D", texto: "somente pode invalidar seus atos mediante decisão judicial." },
              { letra: "E", texto: "pode revogar atos ilegais, dos quais não se originam direitos." },
            ],
            gabarito: "C",
            justificativa: "A Súmula 473 estabelece que a Administração pode ANULAR atos ilegais (não geram direitos) e REVOGAR por conveniência/oportunidade (respeitando direitos adquiridos). Atenção: há prazo de 5 anos para anulação (Lei 9.784/99, art. 54).",
            dificuldade: "Média",
            competencia: "Autotutela administrativa",
            banca: "IADES",
            tags: ["Súmula 473", "autotutela", "anulação", "revogação"],
          },
          {
            id: "ap-q-8-3",
            enunciado: "A respeito do controle judicial da Administração Pública, é correto afirmar que:",
            alternativas: [
              { letra: "A", texto: "o Brasil adota o sistema do contencioso administrativo." },
              { letra: "B", texto: "o Judiciário pode substituir o mérito do ato administrativo discricionário." },
              { letra: "C", texto: "o controle judicial alcança apenas os atos vinculados." },
              { letra: "D", texto: "o Judiciário pode controlar a proporcionalidade e razoabilidade dos atos discricionários." },
              { letra: "E", texto: "a inafastabilidade da jurisdição impede qualquer instância administrativa prévia." },
            ],
            gabarito: "D",
            justificativa: "O Judiciário não substitui o mérito, mas pode controlar os LIMITES da discricionariedade: proporcionalidade, razoabilidade, motivação. Brasil adota jurisdição UNA (não contencioso administrativo). Pode haver instância administrativa prévia (não obrigatória).",
            dificuldade: "Média",
            competencia: "Controle judicial",
            banca: "IADES",
            tags: ["controle judicial", "mérito", "discricionariedade"],
          },
          {
            id: "ap-q-8-4",
            enunciado: "De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011), o prazo para resposta a pedido de acesso à informação é de:",
            alternativas: [
              { letra: "A", texto: "10 dias, prorrogáveis por mais 10." },
              { letra: "B", texto: "15 dias, improrrogáveis." },
              { letra: "C", texto: "20 dias, prorrogáveis por mais 10." },
              { letra: "D", texto: "30 dias, prorrogáveis por mais 15." },
              { letra: "E", texto: "20 dias, improrrogáveis." },
            ],
            gabarito: "C",
            justificativa: "A LAI estabelece prazo de 20 DIAS para resposta, prorrogável por mais 10 dias mediante justificativa expressa. Total máximo: 30 dias.",
            dificuldade: "Fácil",
            competencia: "Prazos da LAI",
            banca: "IADES",
            tags: ["LAI", "prazos", "acesso à informação"],
          },
          {
            id: "ap-q-8-5",
            enunciado: "O recurso hierárquico impróprio caracteriza-se por:",
            alternativas: [
              { letra: "A", texto: "ser dirigido a autoridade superior dentro da mesma pessoa jurídica." },
              { letra: "B", texto: "independer de previsão legal expressa." },
              { letra: "C", texto: "ser dirigido a autoridade de outra pessoa jurídica e exigir previsão legal." },
              { letra: "D", texto: "ser cabível apenas no âmbito da Administração Direta." },
              { letra: "E", texto: "substituir o controle judicial." },
            ],
            gabarito: "C",
            justificativa: "O recurso hierárquico IMPRÓPRIO é dirigido a autoridade de OUTRA pessoa jurídica (ex: do INSS para o Ministério da Previdência) e EXIGE previsão legal expressa. Já o recurso próprio é dentro da mesma pessoa jurídica e independe de previsão legal.",
            dificuldade: "Média",
            competencia: "Recursos administrativos",
            banca: "IADES",
            tags: ["recurso hierárquico", "impróprio", "previsão legal"],
          },
          {
            id: "ap-q-8-6",
            enunciado: "Compete ao Tribunal de Contas da União:",
            alternativas: [
              { letra: "A", texto: "julgar as contas anuais do Presidente da República." },
              { letra: "B", texto: "apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal." },
              { letra: "C", texto: "sustar contratos administrativos considerados irregulares." },
              { letra: "D", texto: "exercer o controle jurisdicional da Administração Pública." },
              { letra: "E", texto: "anular atos administrativos ilegais praticados pelo Poder Executivo." },
            ],
            gabarito: "B",
            justificativa: "O TCU aprecia, para fins de registro, a legalidade dos atos de admissão e aposentadorias (art. 71, III, CF). O TCU APRECIA (não julga) contas do Presidente. Sustação de CONTRATOS é do Congresso. TCU não exerce jurisdição nem anula atos diretamente.",
            dificuldade: "Média",
            competencia: "Competências do TCU",
            banca: "IADES",
            tags: ["TCU", "competências", "registro"],
          },
          {
            id: "ap-q-8-7",
            enunciado: "São instrumentos do controle social da Administração Pública, EXCETO:",
            alternativas: [
              { letra: "A", texto: "ação popular." },
              { letra: "B", texto: "audiências públicas." },
              { letra: "C", texto: "denúncia ao Tribunal de Contas." },
              { letra: "D", texto: "ação direta de inconstitucionalidade." },
              { letra: "E", texto: "direito de petição." },
            ],
            gabarito: "D",
            justificativa: "A ADI é instrumento de controle de constitucionalidade concentrado, com legitimados restritos (art. 103, CF), não sendo instrumento de controle SOCIAL. Ação popular, audiências públicas, denúncia ao TCU e direito de petição são instrumentos típicos de controle social.",
            dificuldade: "Média",
            competencia: "Instrumentos de controle social",
            banca: "IADES",
            tags: ["controle social", "instrumentos", "ação popular"],
          },
          {
            id: "ap-q-8-8",
            enunciado: "Acerca da Súmula Vinculante nº 3 do STF, é correto afirmar que:",
            alternativas: [
              { letra: "A", texto: "dispensa o contraditório em todos os processos do TCU." },
              { letra: "B", texto: "assegura contraditório quando a decisão puder anular ato que beneficie o interessado." },
              { letra: "C", texto: "exige contraditório prévio para a apreciação inicial de aposentadoria." },
              { letra: "D", texto: "impede a revisão das decisões do TCU pelo Judiciário." },
              { letra: "E", texto: "aplica-se exclusivamente aos processos de tomada de contas especial." },
            ],
            gabarito: "B",
            justificativa: "A SV 3 assegura contraditório e ampla defesa no TCU quando a decisão puder anular/revogar ato que beneficie o interessado, EXCETUADA a apreciação da legalidade do ato de concessão INICIAL de aposentadoria, reforma e pensão.",
            dificuldade: "Difícil",
            competencia: "Súmula Vinculante 3",
            banca: "IADES",
            tags: ["SV 3", "TCU", "contraditório"],
          },
          {
            id: "ap-q-8-9",
            enunciado: "O prazo decadencial para a Administração anular atos administrativos ilegais de que decorram efeitos favoráveis aos administrados de boa-fé é de:",
            alternativas: [
              { letra: "A", texto: "2 anos." },
              { letra: "B", texto: "5 anos." },
              { letra: "C", texto: "10 anos." },
              { letra: "D", texto: "não há prazo, em razão do princípio da autotutela." },
              { letra: "E", texto: "3 anos." },
            ],
            gabarito: "B",
            justificativa: "Conforme art. 54 da Lei 9.784/99, o prazo decadencial é de 5 ANOS, contados da data em que foram praticados, salvo comprovada má-fé. A Súmula 473 não elimina esse prazo.",
            dificuldade: "Média",
            competencia: "Prazo decadencial",
            banca: "IADES",
            tags: ["anulação", "prazo", "decadência", "Lei 9.784"],
          },
          {
            id: "ap-q-8-10",
            enunciado: "A classificação de informação como ultrassecreta, nos termos da Lei de Acesso à Informação, implica sigilo pelo prazo máximo de:",
            alternativas: [
              { letra: "A", texto: "5 anos." },
              { letra: "B", texto: "10 anos." },
              { letra: "C", texto: "15 anos." },
              { letra: "D", texto: "25 anos." },
              { letra: "E", texto: "50 anos." },
            ],
            gabarito: "D",
            justificativa: "Os prazos máximos de sigilo na LAI são: RESERVADO = 5 anos, SECRETO = 15 anos, ULTRASSECRETO = 25 anos. Macete: 5-15-25.",
            dificuldade: "Fácil",
            competencia: "Classificação de sigilo",
            banca: "IADES",
            tags: ["LAI", "sigilo", "ultrassecreto"],
          },
        ],
      },
    },
    {
      id: "ap-topico-9",
      numero: 9,
      titulo: "Evolução da Administração Pública: Modelos de Gestão",
      conteudo: {
        resumo: `# Evolução da Administração Pública

A administração pública brasileira passou por três grandes modelos de gestão ao longo da história.

## Os Três Modelos

| Modelo | Período | Características Principais |
|--------|---------|---------------------------|
| **Patrimonialista** | Até 1930 | Confusão público/privado, nepotismo |
| **Burocrático** | 1930-1995 | Formalismo, impessoalidade, hierarquia |
| **Gerencial** | 1995-atual | Eficiência, resultados, cidadão-cliente |

## Modelo Patrimonialista

- Herança do Estado absolutista
- Não há distinção entre patrimônio público e privado
- Cargos como propriedade pessoal (prebendas)
- Nepotismo e corrupção institucionalizados

## Modelo Burocrático (Weber)

- Introduzido por Getúlio Vargas (DASP, 1938)
- Combate ao patrimonialismo
- Características: legalidade, impessoalidade, hierarquia
- Críticas: rigidez, lentidão, foco em processos

## Modelo Gerencial (NPM)

- Reforma Bresser-Pereira (1995)
- PDRAE (Plano Diretor da Reforma do Aparelho do Estado)
- Foco em resultados e cidadão-cliente
- Flexibilização, descentralização, avaliação de desempenho`,

        explicacao: `# Evolução da Administração Pública: Análise Completa

## CONTEXTUALIZAÇÃO

A administração pública evolui conforme as necessidades sociais e o desenvolvimento do Estado. No Brasil, identificamos três grandes modelos que coexistiram e se sucederam, cada um buscando superar as deficiências do anterior.

---

## MODELO PATRIMONIALISTA

### Período Histórico
- Predominante no Brasil Colônia, Império e República Velha
- Até aproximadamente 1930

### Origem e Conceito

O patrimonialismo deriva do termo "patrimônio" - o Estado é visto como extensão do patrimônio do governante. Não há separação entre:
- **Res publica** (coisa pública)
- **Res principis** (coisa do príncipe)

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Confusão público-privado** | Governante usa recursos públicos como próprios |
| **Nepotismo** | Cargos para parentes e amigos |
| **Prebendas** | Cargos como fonte de renda pessoal |
| **Clientelismo** | Troca de favores por apoio político |
| **Corrupção** | Institucionalizada e tolerada |
| **Personalismo** | Decisões baseadas em relações pessoais |

### Exemplos Históricos

| Prática | Descrição |
|---------|-----------|
| **Capitanias hereditárias** | Terras como propriedade familiar |
| **Coronelismo** | Poder local baseado em propriedade rural |
| **Voto de cabresto** | Eleições manipuladas por coronéis |
| **Compra de cargos** | Ofícios vendidos pela Coroa |

### Críticas e Superação

O modelo patrimonialista gera:
- Ineficiência administrativa
- Desigualdade no acesso aos serviços
- Corrupção sistêmica
- Instabilidade institucional

Foi superado (formalmente) pela implantação do modelo burocrático.

---

## MODELO BUROCRÁTICO (WEBERIANO)

### Período Histórico
- Introduzido no Brasil a partir de 1930 (Era Vargas)
- Consolidado com o DASP (1938)
- Predominante até meados dos anos 1990

### Fundamentos Teóricos (Max Weber)

Weber identificou três tipos de dominação legítima:

| Tipo | Base | Exemplo |
|------|------|---------|
| **Tradicional** | Costumes, tradição | Monarquias |
| **Carismática** | Carisma do líder | Líderes revolucionários |
| **Racional-legal** | Leis, normas | Burocracia moderna |

A burocracia é a forma de organização típica da dominação **racional-legal**.

### Características da Burocracia

| Característica | Descrição |
|----------------|-----------|
| **Formalismo** | Comunicação e decisões escritas |
| **Impessoalidade** | Tratamento igualitário, sem favoritismos |
| **Hierarquia** | Estrutura vertical de comando |
| **Profissionalização** | Mérito, concurso público |
| **Especialização** | Divisão do trabalho, competências definidas |
| **Previsibilidade** | Comportamento padronizado |
| **Separação público-privado** | Distinção clara entre bens públicos e do agente |

### Implementação no Brasil

| Marco | Descrição |
|-------|-----------|
| **1930** | Revolução de 30, início da Era Vargas |
| **1936** | Lei nº 284 - primeira reforma administrativa |
| **1938** | Criação do DASP (Departamento Administrativo do Serviço Público) |
| **1967** | Decreto-Lei 200 - descentralização e flexibilização |

### DASP (1938)

| Função | Descrição |
|--------|-----------|
| **Organização** | Estruturação dos órgãos |
| **Orçamento** | Elaboração e controle |
| **Pessoal** | Concursos, carreiras |
| **Métodos** | Racionalização de processos |

### Decreto-Lei 200/1967

Primeira tentativa de flexibilização burocrática:
- Distinção entre Administração Direta e Indireta
- Princípios: planejamento, coordenação, descentralização, delegação, controle
- Maior autonomia para entidades da Administração Indireta

### Vantagens da Burocracia

| Vantagem | Descrição |
|----------|-----------|
| **Combate ao patrimonialismo** | Impessoalidade nas decisões |
| **Previsibilidade** | Segurança jurídica |
| **Igualdade formal** | Tratamento isonômico |
| **Profissionalização** | Servidores capacitados |
| **Controle** | Fiscalização dos atos |

### Disfunções da Burocracia (Críticas)

| Disfunção | Descrição |
|-----------|-----------|
| **Excesso de formalismo** | Papelada, documentos em demasia |
| **Rigidez** | Dificuldade de adaptação |
| **Lentidão** | Processos demorados |
| **Autorreferencialidade** | Foco em si mesma, não no cidadão |
| **Resistência a mudanças** | Conservadorismo |
| **Despersonalização** | Tratamento robotizado |
| **Foco nos meios** | Processos valem mais que resultados |

---

## MODELO GERENCIAL (NEW PUBLIC MANAGEMENT)

### Período Histórico
- Origem: anos 1980 (Reino Unido - Thatcher, EUA - Reagan)
- No Brasil: a partir de 1995 (Governo FHC)
- Reforma Bresser-Pereira

### Contexto da Reforma

| Fator | Descrição |
|-------|-----------|
| **Crise fiscal** | Estado endividado, incapaz de investir |
| **Globalização** | Competição internacional |
| **Democratização** | Exigência de melhor atendimento |
| **Crítica à burocracia** | Ineficiência, lentidão |

### PDRAE (1995)

O **Plano Diretor da Reforma do Aparelho do Estado** foi o documento base da reforma gerencial brasileira.

| Elemento | Descrição |
|----------|-----------|
| **Autor** | Luiz Carlos Bresser-Pereira (MARE) |
| **Objetivo** | Transformar a administração burocrática em gerencial |
| **Foco** | Eficiência, resultados, cidadão-cliente |
| **Instrumentos** | Agências executivas, OS, OSCIP, contratos de gestão |

### Características do Modelo Gerencial

| Característica | Descrição |
|----------------|-----------|
| **Foco em resultados** | Eficiência, eficácia, efetividade |
| **Cidadão-cliente** | Usuário como centro das decisões |
| **Descentralização** | Autonomia para unidades locais |
| **Flexibilização** | Menos rigidez normativa |
| **Controle a posteriori** | Avaliação de resultados |
| **Competição administrada** | Estímulo à eficiência |
| **Gestão por objetivos** | Metas e indicadores |
| **Accountability** | Responsabilização |

### Setores do Estado (PDRAE)

| Setor | Descrição | Forma de Propriedade |
|-------|-----------|----------------------|
| **Núcleo estratégico** | Legislativo, Judiciário, Presidência | Estatal |
| **Atividades exclusivas** | Regulação, fiscalização, segurança | Estatal |
| **Serviços não exclusivos** | Saúde, educação, pesquisa | Pública não-estatal |
| **Produção de bens/serviços** | Empresas estatais | Privada |

### Ferramentas Gerenciais

| Ferramenta | Descrição |
|------------|-----------|
| **Contrato de gestão** | Metas em troca de autonomia |
| **Agências executivas** | Autarquias qualificadas |
| **Organizações sociais** | Entidades privadas qualificadas |
| **Avaliação de desempenho** | Indicadores e metas |
| **Orçamento por resultados** | Recursos vinculados a objetivos |
| **Governança** | Transparência e participação |

### Emenda Constitucional 19/1998

Constitucionalizou princípios da reforma gerencial:
- **Eficiência** como princípio expresso (art. 37)
- Contratos de gestão (art. 37, §8º)
- Avaliação de desempenho para servidores
- Estabilidade condicionada a avaliação
- Teto remuneratório

---

## COMPARATIVO DOS MODELOS

| Aspecto | Patrimonialista | Burocrático | Gerencial |
|---------|-----------------|-------------|-----------|
| **Foco** | Governante | Processo | Resultado |
| **Interesse** | Privado do rei | Público formal | Cidadão-cliente |
| **Seleção** | Favoritismo | Concurso | Concurso + desempenho |
| **Controle** | Inexistente | Prévio (meios) | Posterior (fins) |
| **Estrutura** | Pessoal | Hierárquica rígida | Flexível, descentralizada |
| **Combate** | - | Patrimonialismo | Disfunções burocráticas |

### Relação entre os Modelos

- O modelo gerencial **NÃO elimina** a burocracia
- Mantém princípios como: legalidade, impessoalidade, concurso
- Busca corrigir as **disfunções** burocráticas
- Adiciona foco em resultados e eficiência
- Combate resquícios patrimonialistas que persistem

---

## ATUALIDADE: GOVERNANÇA PÚBLICA

### Decreto 9.203/2017 - Política de Governança

Princípios:
- Capacidade de resposta
- Integridade
- Confiabilidade
- Melhoria regulatória
- Prestação de contas e responsabilidade
- Transparência

### Evolução Recente

| Tema | Descrição |
|------|-----------|
| **Governo digital** | Serviços online, desburocratização |
| **Transparência** | LAI, Portal da Transparência |
| **Participação** | Conselhos, audiências públicas |
| **Compliance** | Integridade, combate à corrupção |
| **Inovação** | Laboratórios de inovação, GovTech |`,

        pontosChave: [
          "Patrimonialismo: confusão público-privado, nepotismo, cargos como prebendas",
          "Burocracia (Weber): formalismo, impessoalidade, hierarquia, profissionalização",
          "DASP (1938): marco da implantação burocrática no Brasil",
          "Disfunções da burocracia: rigidez, lentidão, foco em meios, autorreferência",
          "Modelo gerencial: foco em resultados, cidadão-cliente, eficiência",
          "PDRAE (1995): Plano Diretor da Reforma - Bresser-Pereira",
          "EC 19/98: eficiência como princípio constitucional expresso",
          "Gerencial NÃO elimina burocracia, corrige suas disfunções",
          "Controle: patrimonialista (não há), burocrático (prévio/meios), gerencial (posterior/fins)",
          "Setores do PDRAE: núcleo estratégico, exclusivas, não exclusivas, produção"
        ],

        armadilhas: [
          {
            titulo: "Gerencial não elimina burocracia",
            descricao: "Modelo gerencial NÃO elimina a burocracia - mantém legalidade, concurso, impessoalidade.",
            dica: "Gerencial corrige DISFUNÇÕES, não elimina a burocracia inteira.",
          },
          {
            titulo: "Ano de criação do DASP",
            descricao: "DASP foi criado em 1938 (não 1930 nem 1936 - lei 284 foi em 1936).",
            dica: "1930 = Revolução / 1936 = Lei 284 / 1938 = DASP.",
          },
          {
            titulo: "Weber e o tipo ideal",
            descricao: "Weber definiu burocracia como TIPO IDEAL, não como disfunção.",
            dica: "Para Weber, burocracia era a forma mais eficiente de organização.",
          },
          {
            titulo: "Disfunções não previstas por Weber",
            descricao: "Disfunções burocráticas NÃO foram previstas por Weber - são desvios identificados posteriormente.",
            dica: "Disfunções são CRÍTICAS à burocracia, não parte do conceito original.",
          },
          {
            titulo: "PDRAE x EC 19",
            descricao: "PDRAE é de 1995 (não 1998 - EC 19 é de 1998).",
            dica: "Primeiro o PDRAE (1995), depois a EC 19 (1998) constitucionalizou.",
          },
          {
            titulo: "Eficiência antes da EC 19",
            descricao: "Eficiência virou princípio EXPRESSO com EC 19/98 (já existia implicitamente).",
            dica: "Sempre existiu, mas a EC 19 tornou EXPRESSO no art. 37.",
          },
          {
            titulo: "Decreto-Lei 200/67",
            descricao: "Decreto-Lei 200/67 JÁ tentou flexibilizar, mas não é modelo gerencial pleno.",
            dica: "Foi uma tentativa, mas o gerencialismo veio mesmo com o PDRAE.",
          },
          {
            titulo: "Resquícios patrimonialistas",
            descricao: "Patrimonialismo NÃO foi totalmente eliminado - há resquícios até hoje.",
            dica: "Nepotismo, clientelismo ainda existem (por isso súmula vinculante 13).",
          },
          {
            titulo: "Cidadão-cliente",
            descricao: "Cidadão-cliente é conceito GERENCIAL, não burocrático.",
            dica: "Burocracia foca em processos; gerencial foca no usuário.",
          },
        ],

        mnemonicos: [
          {
            termo: "PBG",
            significado: "Ordem histórica dos modelos",
            frase: "Patrimonialismo → Burocracia → Gerencial",
          },
          {
            termo: "FIHIP",
            significado: "Características da burocracia de Weber",
            frase: "Formalismo / Impessoalidade / Hierarquia / Impessoalidade / Profissionalização",
          },
          {
            termo: "REAL FRESTA",
            significado: "Disfunções da burocracia",
            frase: "Rigidez / Excesso de formalismo / Autorreferência / Lentidão / Foco em meios / Resistência / Excesso de papéis / STAgnação",
          },
          {
            termo: "CRED FOCO",
            significado: "Características do modelo gerencial",
            frase: "Cidadão-cliente / Resultados / Eficiência / Descentralização / FOco em metas / COmpetição",
          },
          {
            termo: "PMF",
            significado: "Tipo de controle em cada modelo",
            frase: "Patrimonialista = Nenhum / Burocrático = Meios (prévio) / Gerencial = Fins (posterior)",
          },
          {
            termo: "DASP-PDRAE",
            significado: "Marcos históricos",
            frase: "1938 = DASP (burocracia) / 1995 = PDRAE (gerencial) / 1998 = EC 19 (eficiência)",
          },
        ],

        flashcards: [
          {
            frente: "Quais são os três modelos de administração pública?",
            verso: "1) PATRIMONIALISTA (até 1930) - confusão público-privado 2) BUROCRÁTICO (1930-1995) - formalismo, impessoalidade 3) GERENCIAL (1995-atual) - resultados, cidadão-cliente",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais as características do modelo patrimonialista?",
            verso: "Confusão entre patrimônio público e privado, nepotismo, clientelismo, cargos como prebendas (fonte de renda pessoal), corrupção institucionalizada, personalismo nas decisões.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais as características do modelo burocrático (Weber)?",
            verso: "Formalismo, impessoalidade, hierarquia, profissionalização (concurso), especialização (divisão do trabalho), previsibilidade, separação entre público e privado.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que foi o DASP e quando foi criado?",
            verso: "Departamento Administrativo do Serviço Público, criado em 1938 (Era Vargas). Foi o marco da implantação do modelo burocrático no Brasil. Funções: organização, orçamento, pessoal, métodos.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são as disfunções da burocracia?",
            verso: "Excesso de formalismo (papelada), rigidez, lentidão, autorreferencialidade (foco em si mesma), resistência a mudanças, despersonalização, foco em meios (processos) ao invés de fins (resultados).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que foi o PDRAE?",
            verso: "Plano Diretor da Reforma do Aparelho do Estado (1995), elaborado por Bresser-Pereira (MARE). Marco do modelo gerencial no Brasil. Objetivo: transformar a administração burocrática em gerencial.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais as características do modelo gerencial?",
            verso: "Foco em resultados, cidadão-cliente, descentralização, flexibilização, controle a posteriori, competição administrada, gestão por objetivos, accountability (responsabilização).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O modelo gerencial elimina a burocracia?",
            verso: "NÃO. O modelo gerencial mantém princípios burocráticos (legalidade, impessoalidade, concurso) mas busca corrigir as DISFUNÇÕES (rigidez, lentidão, foco em meios), adicionando foco em resultados e eficiência.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença no tipo de controle de cada modelo?",
            verso: "PATRIMONIALISTA: controle inexistente ou pessoal / BUROCRÁTICO: controle PRÉVIO (de meios/processos) / GERENCIAL: controle POSTERIOR (de resultados/fins).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que a EC 19/1998 trouxe para a administração pública?",
            verso: "Constitucionalizou a reforma gerencial: eficiência como princípio EXPRESSO (art. 37), contratos de gestão (§8º), avaliação de desempenho, estabilidade condicionada, teto remuneratório.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-9-1",
            enunciado: "O modelo de administração pública caracterizado pela confusão entre patrimônio público e privado denomina-se:",
            alternativas: [
              { letra: "A", texto: "burocrático." },
              { letra: "B", texto: "gerencial." },
              { letra: "C", texto: "patrimonialista." },
              { letra: "D", texto: "societal." },
              { letra: "E", texto: "weberiano." },
            ],
            gabarito: "C",
            justificativa: "O modelo PATRIMONIALISTA se caracteriza pela confusão entre o patrimônio público e o privado do governante, além de nepotismo e cargos como prebendas.",
            dificuldade: "Fácil",
            competencia: "Modelo patrimonialista",
            banca: "IADES",
            tags: ["patrimonialismo", "características"],
          },
          {
            id: "ap-q-9-2",
            enunciado: "São características do modelo burocrático de administração pública, segundo Max Weber, EXCETO:",
            alternativas: [
              { letra: "A", texto: "formalismo." },
              { letra: "B", texto: "hierarquia." },
              { letra: "C", texto: "impessoalidade." },
              { letra: "D", texto: "foco em resultados." },
              { letra: "E", texto: "profissionalização." },
            ],
            gabarito: "D",
            justificativa: "Foco em RESULTADOS é característica do modelo GERENCIAL. A burocracia weberiana foca em processos (meios), não em resultados (fins).",
            dificuldade: "Fácil",
            competencia: "Modelo burocrático",
            banca: "IADES",
            tags: ["burocracia", "weber"],
          },
          {
            id: "ap-q-9-3",
            enunciado: "O DASP (Departamento Administrativo do Serviço Público) foi criado em:",
            alternativas: [
              { letra: "A", texto: "1922." },
              { letra: "B", texto: "1930." },
              { letra: "C", texto: "1938." },
              { letra: "D", texto: "1967." },
              { letra: "E", texto: "1995." },
            ],
            gabarito: "C",
            justificativa: "O DASP foi criado em 1938, durante a Era Vargas, sendo o marco da implantação do modelo burocrático no Brasil.",
            dificuldade: "Média",
            competencia: "DASP",
            banca: "IADES",
            tags: ["DASP", "1938"],
          },
          {
            id: "ap-q-9-4",
            enunciado: "São disfunções da burocracia:",
            alternativas: [
              { letra: "A", texto: "eficiência e foco em resultados." },
              { letra: "B", texto: "flexibilidade e descentralização." },
              { letra: "C", texto: "rigidez, lentidão e excesso de formalismo." },
              { letra: "D", texto: "impessoalidade e meritocracia." },
              { letra: "E", texto: "accountability e transparência." },
            ],
            gabarito: "C",
            justificativa: "DISFUNÇÕES da burocracia: rigidez, lentidão, excesso de formalismo, autorreferência, resistência a mudanças, foco em meios.",
            dificuldade: "Fácil",
            competencia: "Disfunções burocráticas",
            banca: "IADES",
            tags: ["disfunções", "burocracia"],
          },
          {
            id: "ap-q-9-5",
            enunciado: "O Plano Diretor da Reforma do Aparelho do Estado (PDRAE), de 1995, foi elaborado por:",
            alternativas: [
              { letra: "A", texto: "Getúlio Vargas." },
              { letra: "B", texto: "Fernando Henrique Cardoso." },
              { letra: "C", texto: "Luiz Carlos Bresser-Pereira." },
              { letra: "D", texto: "Hélio Beltrão." },
              { letra: "E", texto: "Fernando Collor." },
            ],
            gabarito: "C",
            justificativa: "O PDRAE foi elaborado por BRESSER-PEREIRA, Ministro da Administração e Reforma do Estado (MARE) no governo FHC.",
            dificuldade: "Média",
            competencia: "PDRAE",
            banca: "IADES",
            tags: ["PDRAE", "Bresser-Pereira"],
          },
          {
            id: "ap-q-9-6",
            enunciado: "No modelo gerencial, o foco do controle é:",
            alternativas: [
              { letra: "A", texto: "nos processos e procedimentos." },
              { letra: "B", texto: "nos meios utilizados." },
              { letra: "C", texto: "na relação pessoal com o governante." },
              { letra: "D", texto: "nos resultados alcançados." },
              { letra: "E", texto: "na hierarquia funcional." },
            ],
            gabarito: "D",
            justificativa: "O modelo gerencial foca em RESULTADOS (controle a posteriori), diferente do burocrático que foca em meios/processos (controle prévio).",
            dificuldade: "Fácil",
            competencia: "Modelo gerencial",
            banca: "IADES",
            tags: ["gerencial", "resultados"],
          },
          {
            id: "ap-q-9-7",
            enunciado: "A Emenda Constitucional nº 19/1998 incluiu expressamente como princípio da administração pública:",
            alternativas: [
              { letra: "A", texto: "a legalidade." },
              { letra: "B", texto: "a impessoalidade." },
              { letra: "C", texto: "a moralidade." },
              { letra: "D", texto: "a publicidade." },
              { letra: "E", texto: "a eficiência." },
            ],
            gabarito: "E",
            justificativa: "A EC 19/98 incluiu a EFICIÊNCIA como princípio expresso no art. 37 da CF. Os demais (LIMP) já constavam desde 1988.",
            dificuldade: "Fácil",
            competencia: "EC 19/1998",
            banca: "IADES",
            tags: ["eficiência", "EC 19"],
          },
          {
            id: "ap-q-9-8",
            enunciado: "Sobre o modelo gerencial, é INCORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "busca a eficiência e a eficácia." },
              { letra: "B", texto: "foca no cidadão como cliente." },
              { letra: "C", texto: "elimina completamente os princípios burocráticos." },
              { letra: "D", texto: "adota o controle de resultados." },
              { letra: "E", texto: "promove a descentralização." },
            ],
            gabarito: "C",
            justificativa: "O modelo gerencial NÃO elimina completamente os princípios burocráticos. Mantém legalidade, impessoalidade, concurso público, mas corrige as DISFUNÇÕES.",
            dificuldade: "Média",
            competencia: "Relação gerencial-burocrático",
            banca: "IADES",
            tags: ["gerencial", "burocracia"],
          },
          {
            id: "ap-q-9-9",
            enunciado: "O tipo de dominação que fundamenta a burocracia, segundo Max Weber, é a dominação:",
            alternativas: [
              { letra: "A", texto: "tradicional." },
              { letra: "B", texto: "carismática." },
              { letra: "C", texto: "racional-legal." },
              { letra: "D", texto: "patrimonial." },
              { letra: "E", texto: "aristocrática." },
            ],
            gabarito: "C",
            justificativa: "Para Weber, a burocracia é a forma de organização típica da dominação RACIONAL-LEGAL, baseada em leis e normas impessoais.",
            dificuldade: "Média",
            competencia: "Dominação weberiana",
            banca: "IADES",
            tags: ["weber", "dominação"],
          },
          {
            id: "ap-q-9-10",
            enunciado: "A expressão 'cidadão-cliente' é característica do modelo:",
            alternativas: [
              { letra: "A", texto: "patrimonialista." },
              { letra: "B", texto: "burocrático." },
              { letra: "C", texto: "weberiano tradicional." },
              { letra: "D", texto: "gerencial." },
              { letra: "E", texto: "carismático." },
            ],
            gabarito: "D",
            justificativa: "A visão do cidadão como CLIENTE é típica do modelo GERENCIAL, que coloca o usuário como centro das decisões e foco do atendimento.",
            dificuldade: "Fácil",
            competencia: "Cidadão-cliente",
            banca: "IADES",
            tags: ["gerencial", "cidadão-cliente"],
          },
        ],
      },
    },
  ],
};
