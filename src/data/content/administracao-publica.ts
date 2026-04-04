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
      titulo:
        "Princípios da Administração Pública previstos no art. 37 da Constituição Federal",
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
            descricao:
              "Para o particular: pode tudo que a lei não proíbe. Para a Administração: só pode o que a lei autoriza.",
            dica: "Particular = liberdade. Administração = vinculação à lei.",
          },
          {
            titulo: "Achar que publicidade é sempre obrigatória",
            descricao:
              "Existem exceções: segurança do Estado, segurança da sociedade, intimidade.",
            dica: "Publicidade é REGRA, sigilo é EXCEÇÃO justificada.",
          },
          {
            titulo: "Confundir anulação com revogação",
            descricao:
              "Anulação = ilegalidade (ex tunc). Revogação = conveniência (ex nunc).",
            dica: "Anula o ilegal, Revoga o inconveniente.",
          },
          {
            titulo: "Pensar que eficiência é apenas economia",
            descricao:
              "Eficiência inclui qualidade, celeridade, resultados - não apenas reduzir custos.",
            dica: "Eficiência = qualidade + economia + resultados.",
          },
          {
            titulo: "Esquecer que eficiência foi incluída pela EC 19/98",
            descricao:
              "A EC 19/98 (Reforma Administrativa) incluiu o princípio da eficiência no art. 37.",
            dica: "LIMPE só ficou completo em 1998.",
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
            termo: "A-I-L-E-G",
            significado:
              "Anulação = Ilegalidade; Revogação = LEGítimo mas inconveniente",
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
            frente:
              "Quais são os 5 princípios EXPRESSOS da Administração Pública (art. 37, CF)?",
            verso:
              "**LIMPE:**\n\n- **L**egalidade\n- **I**mpessoalidade\n- **M**oralidade\n- **P**ublicidade\n- **E**ficiência\n\n(Eficiência foi incluída pela EC 19/98)",
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
            frente:
              "Qual a diferença entre LEGALIDADE para a Administração e para o particular?",
            verso:
              "**ADMINISTRAÇÃO:**\nSó pode fazer o que a lei **AUTORIZA**\n(Legalidade positiva/estrita)\n\n**PARTICULAR:**\nPode fazer tudo que a lei **NÃO PROÍBE**\n(Legalidade negativa)\n\nA Administração está mais restrita que o particular.",
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
            frente:
              "O que é o princípio da IMPESSOALIDADE e quais suas dimensões?",
            verso:
              "**IMPESSOALIDADE = atuação imparcial**\n\n**Duas dimensões:**\n\n1. **Finalidade**: visar ao interesse público\n2. **Isonomia**: tratamento igualitário\n\n**Consequências:**\n- Vedação ao nepotismo (SV 13)\n- Concurso público\n- Proibição de promoção pessoal (art. 37, § 1º)",
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
            frente:
              "O que é o princípio da MORALIDADE e qual sua consequência?",
            verso:
              "**MORALIDADE = ética, probidade, boa-fé**\n\nNão é apenas a moral comum, mas a MORALIDADE ADMINISTRATIVA (regras de boa administração).\n\n**Violação = IMPROBIDADE (Lei 8.429/92)**\n\n**Controle:**\n- Ação Popular\n- Ação Civil Pública",
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
            verso:
              "**Exceções (sigilo permitido):**\n\n1. **Segurança do Estado**\n2. **Segurança da sociedade**\n3. **Intimidade** dos envolvidos\n4. **Sigilo da fonte** jornalística\n\n**LAI (Lei 12.527/2011):**\nClassificação: reservado (5a), secreto (15a), ultrassecreto (25a)\n\nPublicidade = REGRA; Sigilo = EXCEÇÃO",
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
            verso:
              "**EC 19/98** (Reforma Administrativa)\n\n**EFICIÊNCIA = qualidade + resultados + economia**\n\n**Instrumentos:**\n- Contratos de gestão\n- Avaliação de desempenho\n- Agências executivas\n- Administração gerencial\n\nAntes de 1998, o LIMPE era apenas LIMP!",
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
            verso:
              '**Súmula 473/STF:**\n\n"A Administração pode ANULAR seus atos ilegais [...] ou REVOGÁ-LOS por conveniência, respeitados os direitos adquiridos."\n\n| Ação | Fundamento | Efeitos |\n|------|------------|--------|\n| Anulação | Ilegalidade | Ex tunc |\n| Revogação | Conveniência | Ex nunc |',
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
            verso:
              "**SUPREMACIA: interesse COLETIVO > interesse INDIVIDUAL**\n\n**Manifestações:**\n- Desapropriação\n- Requisição administrativa\n- Poder de polícia\n- Cláusulas exorbitantes\n\n⚠️ Não é absoluto: deve respeitar direitos fundamentais!",
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
            frente:
              "O que é o princípio da PROPORCIONALIDADE e seu tríplice teste?",
            verso:
              "**PROPORCIONALIDADE: meios adequados aos fins**\n\n**Tríplice teste:**\n\n1. **ADEQUAÇÃO**: meio apto ao fim?\n2. **NECESSIDADE**: meio menos gravoso?\n3. **PROPORCIONALIDADE em sentido estrito**: benefícios > custos?\n\nExemplo: interdição deve ser proporcional ao risco.",
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
            frente:
              "Qual a diferença entre EFICIÊNCIA, EFICÁCIA e EFETIVIDADE?",
            verso:
              '**EFICIÊNCIA:**\n- Fazer bem (relação custo-benefício)\n- "Fazer certo"\n\n**EFICÁCIA:**\n- Atingir o objetivo\n- "Fazer a coisa certa"\n\n**EFETIVIDADE:**\n- Impacto real na sociedade\n- "Fazer a diferença"\n\nPode ser eficaz sem ser eficiente (e vice-versa)!',
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
            enunciado:
              "Os princípios constitucionais expressos da Administração Pública, previstos no art. 37 da Constituição Federal, são:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Legalidade, supremacia, moralidade, publicidade e eficiência.",
              },
              {
                letra: "B",
                texto:
                  "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
              },
              {
                letra: "C",
                texto:
                  "Legalidade, impessoalidade, motivação, publicidade e eficiência.",
              },
              {
                letra: "D",
                texto:
                  "Supremacia, indisponibilidade, razoabilidade, publicidade e eficiência.",
              },
              {
                letra: "E",
                texto:
                  "Legalidade, impessoalidade, moralidade, continuidade e eficiência.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O art. 37, caput, da CF estabelece expressamente os princípios LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Os demais são princípios implícitos.",
            dificuldade: "Fácil",
            competencia: "Princípios expressos",
            banca: "IADES",
            tags: ["LIMPE", "princípios"],
          },
          {
            id: "ap-q-4-2",
            enunciado:
              "O princípio da legalidade, aplicado à Administração Pública, significa que o administrador:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Pode fazer tudo que a lei não proíbe, tal como o particular.",
              },
              {
                letra: "B",
                texto:
                  "Só pode atuar quando houver prévia autorização ou determinação legal.",
              },
              {
                letra: "C",
                texto:
                  "Deve obedecer apenas às leis em sentido estrito, não aos regulamentos.",
              },
              {
                letra: "D",
                texto:
                  "Pode descumprir a lei se isso resultar em maior eficiência.",
              },
              {
                letra: "E",
                texto: "Tem liberdade para inovar no ordenamento jurídico.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Para a Administração, vigora a legalidade estrita: só pode fazer o que a lei AUTORIZA ou DETERMINA. Diferente do particular, que pode fazer tudo que a lei não proíbe.",
            dificuldade: "Fácil",
            competencia: "Princípio da legalidade",
            banca: "IADES",
            tags: ["legalidade", "vinculação"],
          },
          {
            id: "ap-q-4-3",
            enunciado:
              "O princípio da impessoalidade veda, entre outras situações:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A publicação dos atos administrativos em Diário Oficial.",
              },
              {
                letra: "B",
                texto:
                  "A realização de concurso público para provimento de cargos.",
              },
              {
                letra: "C",
                texto:
                  "A promoção pessoal de autoridades em publicidade governamental.",
              },
              {
                letra: "D",
                texto: "A transparência na execução orçamentária.",
              },
              { letra: "E", texto: "A motivação dos atos administrativos." },
            ],
            gabarito: "C",
            justificativa:
              "O art. 37, § 1º, CF veda a promoção pessoal em publicidade governamental. A impessoalidade impede que autoridades usem a máquina pública para autopromoção.",
            dificuldade: "Fácil",
            competencia: "Princípio da impessoalidade",
            banca: "IADES",
            tags: ["impessoalidade", "promoção pessoal"],
          },
          {
            id: "ap-q-4-4",
            enunciado:
              "A violação ao princípio da moralidade administrativa pode configurar:",
            alternativas: [
              {
                letra: "A",
                texto: "Apenas infração disciplinar, sem outras consequências.",
              },
              {
                letra: "B",
                texto:
                  "Ato de improbidade administrativa, nos termos da Lei 8.429/92.",
              },
              {
                letra: "C",
                texto:
                  "Apenas responsabilidade civil, sem repercussão administrativa.",
              },
              {
                letra: "D",
                texto:
                  "Nenhuma sanção, pois a moralidade é apenas recomendação.",
              },
              { letra: "E", texto: "Exclusivamente responsabilidade penal." },
            ],
            gabarito: "B",
            justificativa:
              "A violação ao princípio da moralidade pode configurar ato de IMPROBIDADE ADMINISTRATIVA (Lei 8.429/92), especialmente nos casos de atentado contra princípios (art. 11).",
            dificuldade: "Média",
            competencia: "Princípio da moralidade",
            banca: "IADES",
            tags: ["moralidade", "improbidade"],
          },
          {
            id: "ap-q-4-5",
            enunciado:
              "O princípio da publicidade admite exceções. É hipótese de sigilo constitucionalmente prevista:",
            alternativas: [
              {
                letra: "A",
                texto: "Decisões que beneficiem particular em licitação.",
              },
              { letra: "B", texto: "Atos que causem prejuízo ao erário." },
              {
                letra: "C",
                texto: "Informações imprescindíveis à segurança do Estado.",
              },
              {
                letra: "D",
                texto: "Atos que contrariem interesses de autoridades.",
              },
              {
                letra: "E",
                texto:
                  "Qualquer informação considerada inconveniente pelo administrador.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A CF permite sigilo em casos de segurança do Estado e da sociedade (art. 5º, XXXIII), além de proteção à intimidade. As demais alternativas não constituem exceções legítimas.",
            dificuldade: "Média",
            competencia: "Princípio da publicidade",
            banca: "IADES",
            tags: ["publicidade", "exceções"],
          },
          {
            id: "ap-q-4-6",
            enunciado:
              "O princípio da eficiência foi incluído expressamente na Constituição Federal pela:",
            alternativas: [
              { letra: "A", texto: "Constituição originária de 1988." },
              { letra: "B", texto: "Emenda Constitucional nº 19/1998." },
              { letra: "C", texto: "Emenda Constitucional nº 45/2004." },
              { letra: "D", texto: "Lei Complementar nº 101/2000." },
              { letra: "E", texto: "Emenda Constitucional nº 32/2001." },
            ],
            gabarito: "B",
            justificativa:
              "O princípio da EFICIÊNCIA foi incluído no art. 37 da CF pela EC 19/98 (Reforma Administrativa). Antes, o acrônimo era apenas LIMP.",
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
            justificativa:
              "A Súmula 473/STF consagra a AUTOTUTELA: a Administração pode anular seus atos ilegais ou revogá-los por conveniência, respeitados os direitos adquiridos.",
            dificuldade: "Fácil",
            competencia: "Princípio da autotutela",
            banca: "IADES",
            tags: ["autotutela", "Súmula 473"],
          },
          {
            id: "ap-q-4-8",
            enunciado:
              "O princípio da supremacia do interesse público estabelece que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Os interesses particulares sempre prevalecem sobre os coletivos.",
              },
              {
                letra: "B",
                texto:
                  "O interesse coletivo prevalece sobre o interesse individual, observados os direitos fundamentais.",
              },
              {
                letra: "C",
                texto:
                  "A Administração pode violar direitos fundamentais em nome do interesse público.",
              },
              {
                letra: "D",
                texto:
                  "Não há limites ao poder estatal quando invocado o interesse público.",
              },
              {
                letra: "E",
                texto:
                  "O interesse público pode ser renunciado pelo administrador.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A supremacia do interesse público significa que o interesse coletivo prevalece sobre o individual, mas isso NÃO autoriza violação de direitos fundamentais. A supremacia tem limites.",
            dificuldade: "Média",
            competencia: "Supremacia do interesse público",
            banca: "IADES",
            tags: ["supremacia", "interesse público"],
          },
          {
            id: "ap-q-4-9",
            enunciado:
              "Quanto à anulação e revogação de atos administrativos, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A anulação produz efeitos ex nunc, enquanto a revogação produz efeitos ex tunc.",
              },
              {
                letra: "B",
                texto:
                  "A anulação decorre de ilegalidade e produz efeitos ex tunc.",
              },
              {
                letra: "C",
                texto: "A revogação decorre de ilegalidade do ato.",
              },
              {
                letra: "D",
                texto:
                  "Apenas o Poder Judiciário pode anular atos administrativos.",
              },
              {
                letra: "E",
                texto:
                  "A anulação respeita os direitos adquiridos, mas a revogação não.",
              },
            ],
            gabarito: "B",
            justificativa:
              "ANULAÇÃO: ilegalidade, efeitos ex tunc (retroativos). REVOGAÇÃO: conveniência/oportunidade, efeitos ex nunc (prospectivos). Ambas respeitam direitos adquiridos.",
            dificuldade: "Média",
            competencia: "Anulação e revogação",
            banca: "IADES",
            tags: ["anulação", "revogação"],
          },
          {
            id: "ap-q-4-10",
            enunciado:
              "A aplicação de multa desproporcional à gravidade da infração sanitária viola o princípio da:",
            alternativas: [
              { letra: "A", texto: "Publicidade." },
              { letra: "B", texto: "Continuidade." },
              { letra: "C", texto: "Razoabilidade e proporcionalidade." },
              { letra: "D", texto: "Autotutela." },
              { letra: "E", texto: "Presunção de legitimidade." },
            ],
            gabarito: "C",
            justificativa:
              "A proporcionalidade exige que os meios sejam adequados, necessários e proporcionais aos fins. Multa desproporcional à gravidade viola esse princípio, pois o meio não corresponde à finalidade.",
            dificuldade: "Média",
            competencia: "Proporcionalidade",
            banca: "IADES",
            tags: ["proporcionalidade", "vigilância sanitária"],
          },
        ],
      },
    },
    {
      id: "ap-topico-5",
      numero: 5,
      titulo:
        "Poderes administrativos: hierárquico, disciplinar, regulamentar e de polícia",
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
            descricao:
              "Avocação é EXCEÇÃO e deve ser justificada. Delegação é mais comum.",
            dica: "Avocar = excepcional. Delegar = possível em regra.",
          },
          {
            titulo: "Confundir polícia administrativa e judiciária",
            descricao:
              "Administrativa: preventiva, sobre bens/atividades. Judiciária: repressiva, sobre pessoas.",
            dica: "VISA = administrativa. Polícia Civil = judiciária.",
          },
          {
            titulo: "Achar que regulamento pode criar obrigações",
            descricao:
              "Regulamento EXECUTIVO não pode inovar, apenas complementa a lei.",
            dica: "Só LEI cria direitos e obrigações.",
          },
          {
            titulo: "Pensar que toda multa é autoexecutável",
            descricao:
              "APLICAR multa: autoexecutável. COBRAR multa: precisa execução fiscal.",
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
            significado:
              "Discricionariedade, Autoexecutoriedade, Coercibilidade",
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
            verso:
              "**4 PODERES ADMINISTRATIVOS:**\n\n1. **Hierárquico**: organização interna\n2. **Disciplinar**: apurar e punir\n3. **Regulamentar**: editar normas\n4. **De Polícia**: limitar direitos\n\nMnemônico: HIDIPO + Regulamentar",
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
            verso:
              "**INDELEGÁVEIS (Lei 9.784/99, art. 13):**\n\n1. Edição de atos **NORMATIVOS**\n2. Decisão de **RECURSOS**\n3. Matérias de competência **EXCLUSIVA**\n\nMnemônico: ARE",
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
            frente:
              "Qual a natureza do poder disciplinar (vinculado ou discricionário)?",
            verso:
              "**NATUREZA MISTA:**\n\n**VINCULADO:**\n- Dever de apurar\n- Dever de punir (se comprovado)\n\n**DISCRICIONÁRIO:**\n- Escolha da penalidade\n- Dosimetria da pena\n\nDEVE punir, mas ESCOLHE como.",
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
            verso:
              "**DELEGAÇÃO:**\n- Transfere competência para subordinado\n- REGRA GERAL\n- Pode ser revogada\n\n**AVOCAÇÃO:**\n- Chama para si competência do subordinado\n- EXCEÇÃO (deve ser justificada)\n- Temporária",
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
            verso:
              "**LIMITES:**\n\n❌ NÃO pode INOVAR\n(não cria direitos/obrigações)\n\n❌ NÃO pode CONTRARIAR\n(fidelidade à lei)\n\n❌ NÃO pode EXTRAPOLAR\n(dentro dos limites legais)\n\n**Controle:**\nCongresso pode sustar (art. 49, V, CF)",
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
            verso:
              "**CICLO OCFS:**\n\n1. **O**rdem: legislação\n2. **C**onsentimento: licenças, autorizações\n3. **F**iscalização: verificação\n4. **S**anção: penalidades\n\n**Delegáveis:** C e F\n**Indelegáveis:** O e S",
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
            verso:
              "**DAC:**\n\n**D**iscricionariedade\n→ Margem de escolha\n\n**A**utoexecutoriedade\n→ Sem ordem judicial\n\n**C**oercibilidade\n→ Imposição obrigatória\n\n⚠️ Cobrar multa NÃO é autoexecutável!",
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
            frente:
              "Qual a diferença entre polícia administrativa e polícia judiciária?",
            verso:
              "**ADMINISTRATIVA:**\n- Caráter PREVENTIVO\n- Incide sobre BENS e ATIVIDADES\n- Diversos órgãos\n- Ex: vigilância sanitária\n\n**JUDICIÁRIA:**\n- Caráter REPRESSIVO\n- Incide sobre PESSOAS\n- Órgãos de segurança\n- Ex: polícia civil",
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
            verso:
              "**ALCANCE DO PODER DISCIPLINAR:**\n\nPessoas com VÍNCULO especial:\n- Servidores públicos\n- Empregados públicos\n- Contratados (licitação)\n- Particulares em regime especial\n\n⚠️ NÃO confundir com poder de polícia (alcança a coletividade).",
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
            verso:
              "**VISA E PODER DE POLÍCIA:**\n\n**Ordem:** RDCs da ANVISA\n**Consentimento:** Alvará sanitário\n**Fiscalização:** Inspeção de estabelecimentos\n**Sanção:** Multa, interdição, apreensão\n\n**Atributos:**\n- Interdição imediata (autoexecutoriedade)\n- Obrigação de cumprir (coercibilidade)",
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
            enunciado:
              "O poder pelo qual a Administração distribui e escalona funções de seus órgãos, ordena e revê a atuação de seus agentes, estabelecendo relação de subordinação, denomina-se poder:",
            alternativas: [
              { letra: "A", texto: "Disciplinar." },
              { letra: "B", texto: "Regulamentar." },
              { letra: "C", texto: "Hierárquico." },
              { letra: "D", texto: "De polícia." },
              { letra: "E", texto: "Vinculado." },
            ],
            gabarito: "C",
            justificativa:
              "O poder HIERÁRQUICO é o que permite organizar a estrutura administrativa, estabelecer subordinação, dar ordens, fiscalizar, delegar, avocar e rever atos dos subordinados.",
            dificuldade: "Fácil",
            competencia: "Poder hierárquico",
            banca: "IADES",
            tags: ["hierárquico", "conceito"],
          },
          {
            id: "ap-q-5-2",
            enunciado:
              "A apuração de infrações e a aplicação de penalidades aos servidores públicos e demais pessoas sujeitas à disciplina administrativa caracteriza o exercício do poder:",
            alternativas: [
              { letra: "A", texto: "Hierárquico." },
              { letra: "B", texto: "Disciplinar." },
              { letra: "C", texto: "De polícia." },
              { letra: "D", texto: "Regulamentar." },
              { letra: "E", texto: "Normativo." },
            ],
            gabarito: "B",
            justificativa:
              "O poder DISCIPLINAR é a faculdade de apurar infrações e aplicar penalidades a servidores e demais pessoas com vínculo especial com a Administração.",
            dificuldade: "Fácil",
            competencia: "Poder disciplinar",
            banca: "IADES",
            tags: ["disciplinar", "conceito"],
          },
          {
            id: "ap-q-5-3",
            enunciado:
              "A competência para expedição de decretos e regulamentos para fiel execução das leis, conferida ao Chefe do Poder Executivo, caracteriza o poder:",
            alternativas: [
              { letra: "A", texto: "Hierárquico." },
              { letra: "B", texto: "Disciplinar." },
              { letra: "C", texto: "De polícia." },
              { letra: "D", texto: "Regulamentar." },
              { letra: "E", texto: "Discricionário." },
            ],
            gabarito: "D",
            justificativa:
              "O poder REGULAMENTAR (art. 84, IV, CF) é a competência do Chefe do Executivo para editar decretos e regulamentos para a fiel execução das leis.",
            dificuldade: "Fácil",
            competencia: "Poder regulamentar",
            banca: "IADES",
            tags: ["regulamentar", "conceito"],
          },
          {
            id: "ap-q-5-4",
            enunciado:
              "Sobre os atributos do poder de polícia, é INCORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A discricionariedade permite margem de escolha ao administrador.",
              },
              {
                letra: "B",
                texto:
                  "A autoexecutoriedade dispensa autorização judicial prévia.",
              },
              {
                letra: "C",
                texto:
                  "A coercibilidade permite a imposição obrigatória das medidas.",
              },
              {
                letra: "D",
                texto: "A cobrança de multa é sempre autoexecutável.",
              },
              {
                letra: "E",
                texto:
                  "A interdição de estabelecimento é medida autoexecutável.",
              },
            ],
            gabarito: "D",
            justificativa:
              "A APLICAÇÃO da multa é autoexecutável, mas a COBRANÇA não é. Para cobrar a multa (obter o pagamento forçado), é necessário ajuizar execução fiscal.",
            dificuldade: "Média",
            competencia: "Atributos",
            banca: "IADES",
            tags: ["multa", "autoexecutoriedade"],
          },
          {
            id: "ap-q-5-5",
            enunciado:
              "O ciclo de polícia compreende as fases de ordem, consentimento, fiscalização e sanção. São fases INDELEGÁVEIS a particulares:",
            alternativas: [
              { letra: "A", texto: "Ordem e consentimento." },
              { letra: "B", texto: "Consentimento e fiscalização." },
              { letra: "C", texto: "Fiscalização e sanção." },
              { letra: "D", texto: "Ordem e sanção." },
              { letra: "E", texto: "Todas as fases são indelegáveis." },
            ],
            gabarito: "D",
            justificativa:
              "As fases de ORDEM (legislação) e SANÇÃO (penalidades) são indelegáveis a particulares, pois envolvem exercício de autoridade típica do Estado. Consentimento e fiscalização podem ser delegados.",
            dificuldade: "Média",
            competencia: "Ciclo de polícia",
            banca: "IADES",
            tags: ["ciclo", "delegação"],
          },
          {
            id: "ap-q-5-6",
            enunciado:
              "De acordo com a Lei 9.784/99, NÃO pode ser objeto de delegação:",
            alternativas: [
              { letra: "A", texto: "Atos de expediente." },
              { letra: "B", texto: "Decisão de recursos administrativos." },
              { letra: "C", texto: "Atos de gestão." },
              { letra: "D", texto: "Atos discricionários." },
              { letra: "E", texto: "Atos vinculados." },
            ],
            gabarito: "B",
            justificativa:
              "O art. 13 da Lei 9.784/99 veda a delegação de: I - edição de atos normativos; II - decisão de recursos administrativos; III - matérias de competência exclusiva.",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["delegação", "vedações"],
          },
          {
            id: "ap-q-5-7",
            enunciado:
              "A vigilância sanitária, ao interditar estabelecimento que oferece risco à saúde pública, exerce o poder:",
            alternativas: [
              { letra: "A", texto: "Hierárquico." },
              { letra: "B", texto: "Disciplinar." },
              { letra: "C", texto: "De polícia." },
              { letra: "D", texto: "Regulamentar." },
              { letra: "E", texto: "Moderador." },
            ],
            gabarito: "C",
            justificativa:
              "A interdição de estabelecimento é típico exercício do PODER DE POLÍCIA sanitária, limitando a atividade econômica em razão do interesse público (saúde coletiva).",
            dificuldade: "Fácil",
            competencia: "Poder de polícia",
            banca: "IADES",
            tags: ["VISA", "interdição"],
          },
          {
            id: "ap-q-5-8",
            enunciado:
              "A polícia administrativa distingue-se da polícia judiciária porque:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A administrativa tem caráter repressivo; a judiciária, preventivo.",
              },
              {
                letra: "B",
                texto:
                  "A administrativa incide sobre pessoas; a judiciária, sobre bens.",
              },
              {
                letra: "C",
                texto:
                  "A administrativa tem caráter preventivo e incide sobre bens e atividades.",
              },
              {
                letra: "D",
                texto: "Ambas são idênticas em natureza e finalidade.",
              },
              {
                letra: "E",
                texto: "A judiciária é exercida pela vigilância sanitária.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A polícia ADMINISTRATIVA tem caráter PREVENTIVO e incide sobre BENS e ATIVIDADES. A polícia JUDICIÁRIA tem caráter REPRESSIVO e incide sobre PESSOAS.",
            dificuldade: "Média",
            competencia: "Tipos de polícia",
            banca: "IADES",
            tags: ["administrativa", "judiciária"],
          },
          {
            id: "ap-q-5-9",
            enunciado:
              "O regulamento executivo, previsto no art. 84, IV, da CF/88, caracteriza-se por:",
            alternativas: [
              { letra: "A", texto: "Criar direitos e obrigações novos." },
              { letra: "B", texto: "Independer de lei anterior." },
              { letra: "C", texto: "Ter força de lei ordinária." },
              {
                letra: "D",
                texto: "Complementar a lei sem inovar na ordem jurídica.",
              },
              { letra: "E", texto: "Poder revogar leis incompatíveis." },
            ],
            gabarito: "D",
            justificativa:
              "O regulamento EXECUTIVO destina-se à fiel execução da lei, complementando-a sem INOVAR na ordem jurídica. Não pode criar direitos ou obrigações que a lei não previu.",
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
              {
                letra: "C",
                texto:
                  "Vinculada quanto ao dever de punir e discricionária quanto à escolha da pena.",
              },
              {
                letra: "D",
                texto:
                  "Discricionária quanto ao dever de punir e vinculada quanto à escolha da pena.",
              },
              { letra: "E", texto: "Facultativa em todos os aspectos." },
            ],
            gabarito: "C",
            justificativa:
              "O poder disciplinar é VINCULADO quanto ao dever de apurar e punir (se comprovada a infração), mas DISCRICIONÁRIO quanto à escolha e dosimetria da penalidade aplicável.",
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
      titulo:
        "Atos administrativos: conceito, requisitos, atributos, classificação e invalidação",
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
            descricao:
              "Requisitos são elementos de VALIDADE (CO-FI-FO-MO-OB). Atributos são características ESPECIAIS (PATI).",
            dica: "Requisitos = estrutura do ato. Atributos = poderes/características.",
          },
          {
            titulo: "Achar que multa é totalmente autoexecutável",
            descricao:
              "APLICAR a multa é autoexecutável. COBRAR a multa NÃO é (precisa de execução fiscal).",
            dica: "Auto de infração = autoexecutável. Cobrança forçada = precisa do Judiciário.",
          },
          {
            titulo: "Confundir anulação com revogação",
            descricao:
              "ANULAÇÃO = ilegal, ex tunc. REVOGAÇÃO = inconveniente, ex nunc.",
            dica: "A-nulação = vícios (atrás). Re-vogação = re-pensar (nunc).",
          },
          {
            titulo: "Trocar ato vinculado por discricionário",
            descricao:
              "LICENÇA é vinculada (direito subjetivo). AUTORIZAÇÃO é discricionária (precária).",
            dica: "Licença: preencheu requisitos = TEM direito. Autorização: Administração decide.",
          },
          {
            titulo: "Esquecer que presunção é relativa",
            descricao:
              "A presunção de legitimidade é RELATIVA (juris tantum), admite prova em contrário.",
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
            significado:
              "Presunção, Autoexecutoriedade, Tipicidade, Imperatividade",
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
            significado:
              "Vinculado: Motivo e objeto definidos. Mérito: Integram o objeto/motivo",
            frase: "No ato Vinculado não há Mérito. No discricionário, há.",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-6-1",
            frente:
              "Quais são os 5 REQUISITOS (elementos) do ato administrativo?",
            verso:
              "**CO-FI-FO-MO-OB:**\n\n1. **CO**mpetência - QUEM pratica\n2. **FI**nalidade - PARA QUÊ\n3. **FO**rma - COMO se exterioriza\n4. **MO**tivo - POR QUÊ\n5. **OB**jeto - O QUÊ determina\n\nVícios em qualquer requisito = ATO NULO",
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
            verso:
              "**PATI:**\n\n1. **P**resunção de legitimidade\n   (presume-se legal até prova em contrário)\n\n2. **A**utoexecutoriedade\n   (executa sem ordem judicial)\n\n3. **T**ipicidade\n   (deve corresponder a tipo legal)\n\n4. **I**mperatividade\n   (impõe obrigações independente de concordância)\n\n⚠️ Nem todo ato tem todos (ex: certidão não tem imperatividade).",
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
            frente:
              "A presunção de legitimidade dos atos administrativos é absoluta ou relativa?",
            verso:
              "**RELATIVA (juris tantum)**\n\n• Presume-se que o ato é LEGAL e VERDADEIRO\n• MAS admite prova em contrário\n• O ÔNUS DA PROVA é do administrado\n\n**Consequência:**\nO ato produz efeitos imediatamente, mesmo que impugnado.\n\nEx: Multa de trânsito vale até você provar que não cometeu a infração.",
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
            verso:
              "**MULTA - Autoexecutoriedade PARCIAL:**\n\n✅ **APLICAR a multa = Autoexecutável**\n(Lavrar auto de infração sem ordem judicial)\n\n❌ **COBRAR a multa = NÃO autoexecutável**\n(Precisa de EXECUÇÃO FISCAL para tirar o dinheiro)\n\n**Razão:** A Administração não pode, por conta própria, acessar a conta bancária ou penhorar bens do devedor.",
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
            verso:
              "| | VINCULADO | DISCRICIONÁRIO |\n|--|-----------|----------------|\n| **Margem** | Sem escolha | Há mérito (conveniência) |\n| **Requisitos** | Todos definidos em lei | Motivo e/ou objeto com margem |\n| **Exemplo** | LICENÇA sanitária | AUTORIZAÇÃO |\n| **Direito** | Subjetivo (TEM direito) | Interesse legítimo |\n\n**Lembre:** Licença = Vinculada. Autorização = Discricionária.",
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
            verso:
              "**DESVIO DE FINALIDADE/PODER:**\n\nO agente usa sua competência para FIM DIVERSO do previsto em lei.\n\n**Vício:** No requisito FINALIDADE\n**Consequência:** ATO NULO\n\n**Exemplo VISA:**\nFiscal interdita restaurante de desafeto pessoal, sem irregularidade sanitária.\n\nUsou o poder de interdição (que é para proteger a saúde) para vingança pessoal.",
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
            verso:
              "| | ANULAÇÃO | REVOGAÇÃO |\n|--|----------|----------|\n| **Motivo** | Ato ILEGAL | Ato INCONVENIENTE |\n| **Efeitos** | Ex TUNC (retroage) | Ex NUNC (não retroage) |\n| **Quem pode** | Adm. ou Judiciário | Só Administração |\n| **Prazo** | 5 anos (boa-fé) | Sem prazo fixo |\n\n**Mnemônico:** ANE retroage (ex Tunc). REX não retroage (ex Nunc).",
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
            verso:
              "**CONVALIDAÇÃO (Saneamento):**\n\nCorreção de VÍCIO SANÁVEL do ato.\n\n**Vícios SANÁVEIS (podem convalidar):**\n• Competência (se não exclusiva)\n• Forma (se não essencial)\n\n**Vícios INSANÁVEIS (não convalidam):**\n• Finalidade\n• Motivo\n• Objeto\n\n**Efeitos:** Ex TUNC (retroativos)\n\nPreservam-se os efeitos já produzidos.",
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
            verso:
              "**5 ESPÉCIES:**\n\n1. **NORMATIVOS** - gerais e abstratos\n   Ex: decretos, regulamentos\n\n2. **ORDINATÓRIOS** - organização interna\n   Ex: instruções, circulares\n\n3. **NEGOCIAIS** - interesse do particular\n   Ex: licença, autorização, permissão\n\n4. **ENUNCIATIVOS** - atestam, certificam\n   Ex: certidão, atestado, parecer\n\n5. **PUNITIVOS** - sancionam\n   Ex: multa, interdição, suspensão",
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
            verso:
              "**Classificação quanto ao OBJETO:**\n\n**IMPÉRIO:**\n• Supremacia do Estado\n• Coerção, poder de polícia\n• Ex: multa, interdição, desapropriação\n\n**GESTÃO:**\n• Administração como particular\n• Sem supremacia\n• Ex: contrato de locação, compra de material\n\n**EXPEDIENTE:**\n• Rotina administrativa\n• Impulsiona processos\n• Ex: numeração, protocolo, encaminhamento",
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
              {
                letra: "A",
                texto:
                  "Presunção de legitimidade, imperatividade e autoexecutoriedade.",
              },
              {
                letra: "B",
                texto: "Competência, finalidade, forma, motivo e objeto.",
              },
              {
                letra: "C",
                texto: "Legalidade, impessoalidade, moralidade e eficiência.",
              },
              {
                letra: "D",
                texto: "Supremacia, indisponibilidade e continuidade.",
              },
              { letra: "E", texto: "Hierarquia, disciplina e vinculação." },
            ],
            gabarito: "B",
            justificativa:
              "Os requisitos (elementos) do ato administrativo são: COMPETÊNCIA, FINALIDADE, FORMA, MOTIVO e OBJETO (CO-FI-FO-MO-OB). A alternativa A traz atributos, não requisitos.",
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
            justificativa:
              "FINALIDADE é REQUISITO (elemento) do ato, não atributo. Os atributos são: Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade (PATI).",
            dificuldade: "Fácil",
            competencia: "Atributos do ato",
            banca: "IADES",
            tags: ["atributos", "PATI"],
          },
          {
            id: "ap-q-6-3",
            enunciado: "A presunção de legitimidade dos atos administrativos:",
            alternativas: [
              {
                letra: "A",
                texto: "É absoluta, não admitindo prova em contrário.",
              },
              {
                letra: "B",
                texto: "Impede a produção de efeitos até decisão judicial.",
              },
              {
                letra: "C",
                texto:
                  "É relativa, admitindo prova em contrário pelo interessado.",
              },
              { letra: "D", texto: "Só existe nos atos vinculados." },
              { letra: "E", texto: "Foi revogada pela Lei 9.784/99." },
            ],
            gabarito: "C",
            justificativa:
              "A presunção de legitimidade é RELATIVA (juris tantum), ou seja, admite prova em contrário. O ônus da prova é do administrado que alega o vício. O ato produz efeitos enquanto não for invalidado.",
            dificuldade: "Fácil",
            competencia: "Presunção de legitimidade",
            banca: "IADES",
            tags: ["presunção", "relativa"],
          },
          {
            id: "ap-q-6-4",
            enunciado:
              "Quanto à autoexecutoriedade do ato administrativo, é correto afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A aplicação e a cobrança de multa são igualmente autoexecutáveis.",
              },
              {
                letra: "B",
                texto:
                  "A aplicação de multa é autoexecutável, mas sua cobrança não é.",
              },
              {
                letra: "C",
                texto: "Nenhum ato de vigilância sanitária é autoexecutável.",
              },
              {
                letra: "D",
                texto:
                  "A autoexecutoriedade exige sempre prévia autorização judicial.",
              },
              {
                letra: "E",
                texto:
                  "A autoexecutoriedade é atributo exclusivo de atos vinculados.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A APLICAÇÃO da multa (lavrar auto de infração) é autoexecutável. Porém, a COBRANÇA da multa (tirar o dinheiro do devedor) NÃO é autoexecutável - exige execução fiscal.",
            dificuldade: "Média",
            competencia: "Autoexecutoriedade",
            banca: "IADES",
            tags: ["multa", "cobrança"],
          },
          {
            id: "ap-q-6-5",
            enunciado:
              "O vício no elemento FINALIDADE do ato administrativo caracteriza:",
            alternativas: [
              { letra: "A", texto: "Excesso de poder." },
              { letra: "B", texto: "Desvio de poder (ou de finalidade)." },
              { letra: "C", texto: "Incompetência." },
              { letra: "D", texto: "Vício de forma." },
              { letra: "E", texto: "Defeito de objeto." },
            ],
            gabarito: "B",
            justificativa:
              "O DESVIO DE PODER (ou desvio de finalidade) ocorre quando o agente usa sua competência para fim DIVERSO do previsto em lei. É vício no requisito FINALIDADE e torna o ato NULO.",
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
              {
                letra: "B",
                texto: "Vinculado, gerando direito subjetivo ao interessado.",
              },
              { letra: "C", texto: "Normativo de caráter geral." },
              { letra: "D", texto: "Punitivo e autoexecutável." },
              {
                letra: "E",
                texto: "Complexo, exigindo manifestação de dois órgãos.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A LICENÇA é ato VINCULADO: preenchidos os requisitos legais, o interessado TEM DIREITO à sua concessão. Diferente da autorização, que é discricionária e precária.",
            dificuldade: "Média",
            competencia: "Ato vinculado",
            banca: "IADES",
            tags: ["licença", "vinculado"],
          },
          {
            id: "ap-q-6-7",
            enunciado:
              "A anulação de ato administrativo ilegal produz efeitos:",
            alternativas: [
              { letra: "A", texto: "Ex nunc, ou seja, não retroativos." },
              {
                letra: "B",
                texto: "Ex tunc, ou seja, retroativos à data do ato.",
              },
              { letra: "C", texto: "Somente para o futuro, após publicação." },
              { letra: "D", texto: "Condicionados à indenização prévia." },
              { letra: "E", texto: "Dependentes de trânsito em julgado." },
            ],
            gabarito: "B",
            justificativa:
              "A ANULAÇÃO de atos ilegais produz efeitos EX TUNC (retroativos), como se o ato nunca tivesse existido. Já a REVOGAÇÃO produz efeitos EX NUNC (não retroage).",
            dificuldade: "Fácil",
            competencia: "Efeitos da anulação",
            banca: "IADES",
            tags: ["anulação", "ex tunc"],
          },
          {
            id: "ap-q-6-8",
            enunciado:
              "A convalidação de ato administrativo é possível quando o vício recai sobre:",
            alternativas: [
              { letra: "A", texto: "A finalidade do ato." },
              { letra: "B", texto: "O objeto do ato." },
              { letra: "C", texto: "O motivo do ato." },
              { letra: "D", texto: "A competência, quando não for exclusiva." },
              { letra: "E", texto: "Qualquer dos elementos, indistintamente." },
            ],
            gabarito: "D",
            justificativa:
              "A convalidação é possível para vícios SANÁVEIS: competência (quando não exclusiva) e forma (quando não essencial). Vícios de finalidade, motivo e objeto são INSANÁVEIS.",
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
            justificativa:
              "Atos ENUNCIATIVOS são aqueles que atestam, certificam ou emitem opinião: certidões, atestados e pareceres. A) normativos; B) punitivos; D) negociais; E) ordinatórios.",
            dificuldade: "Média",
            competencia: "Espécies de atos",
            banca: "IADES",
            tags: ["enunciativos", "espécies"],
          },
          {
            id: "ap-q-6-10",
            enunciado: "A revogação de ato administrativo:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Pode ser feita pelo Poder Judiciário em qualquer situação.",
              },
              { letra: "B", texto: "Pressupõe vício de legalidade no ato." },
              {
                letra: "C",
                texto: "Produz efeitos ex tunc, retroagindo à data do ato.",
              },
              {
                letra: "D",
                texto:
                  "É privativa da Administração e baseia-se em conveniência e oportunidade.",
              },
              {
                letra: "E",
                texto: "Depende de autorização legislativa prévia.",
              },
            ],
            gabarito: "D",
            justificativa:
              "A REVOGAÇÃO é privativa da Administração (Judiciário não revoga) e baseia-se em conveniência e oportunidade (mérito), não em ilegalidade. Produz efeitos EX NUNC (não retroage).",
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
            descricao:
              "Confundir autarquia com empresa pública quanto à natureza jurídica.",
            dica: "Autarquia = direito PÚBLICO. Empresa Pública = direito PRIVADO.",
          },
          {
            titulo: "Forma societária da SEM",
            descricao: "Achar que SEM pode ser Ltda ou outra forma societária.",
            dica: "SEM é obrigatoriamente S.A. (Sociedade Anônima).",
          },
          {
            titulo: "Subordinação vs Vinculação",
            descricao:
              "Pensar que EP/SEM são subordinadas à Administração Direta.",
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
            frase:
              "Sociedade de Economia Mista só pode ser S.A. (ambos com S).",
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
            verso:
              "Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista",
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
            frente:
              "Qual a diferença entre desconcentração e descentralização?",
            verso:
              "Desconcentração: distribuição de tarefas dentro da mesma pessoa jurídica (cria órgãos). Descentralização: transferência para outra pessoa jurídica (cria entidades)",
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
            verso:
              "Por LEI ESPECÍFICA (art. 37, XIX, CF) - a lei cria diretamente, sem necessidade de registro",
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
            verso:
              "EP: capital 100% público. SEM: capital majoritariamente público, mas admite sócios privados",
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
            frente:
              "Autarquias têm personalidade jurídica de direito público ou privado?",
            verso:
              "Direito PÚBLICO - por isso têm imunidade tributária, bens impenhoráveis, precatórios, servidores estatutários",
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
            frente:
              "As entidades da Administração Indireta são subordinadas ou vinculadas?",
            verso:
              "VINCULADAS (supervisão ministerial), não subordinadas - não há hierarquia entre a entidade e a Administração Direta",
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
            verso:
              "INSS, IBAMA, INCRA, BACEN, CVM, universidades federais, agências reguladoras",
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
              {
                letra: "C",
                texto:
                  "Autarquias, fundações, empresas públicas e sociedades de economia mista.",
              },
              { letra: "D", texto: "Apenas autarquias e fundações." },
              {
                letra: "E",
                texto:
                  "Apenas empresas públicas e sociedades de economia mista.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A Administração Indireta é composta por: AUTARQUIAS, FUNDAÇÕES PÚBLICAS, EMPRESAS PÚBLICAS e SOCIEDADES DE ECONOMIA MISTA.",
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
              {
                letra: "C",
                texto: "por lei autorizativa seguida de registro.",
              },
              { letra: "D", texto: "por medida provisória." },
              { letra: "E", texto: "por resolução do órgão competente." },
            ],
            gabarito: "B",
            justificativa:
              "Autarquias são criadas por LEI ESPECÍFICA (art. 37, XIX, CF). A lei cria diretamente a autarquia, sem necessidade de registro posterior.",
            dificuldade: "Média",
            competencia: "Criação de autarquias",
            banca: "IADES",
            tags: ["autarquia", "lei específica"],
          },
          {
            id: "ap-q-7-3",
            enunciado:
              "A distribuição de competências dentro de uma mesma pessoa jurídica denomina-se:",
            alternativas: [
              { letra: "A", texto: "descentralização." },
              { letra: "B", texto: "delegação." },
              { letra: "C", texto: "desconcentração." },
              { letra: "D", texto: "outorga." },
              { letra: "E", texto: "avocação." },
            ],
            gabarito: "C",
            justificativa:
              "DESCONCENTRAÇÃO é a distribuição de competências dentro da mesma pessoa jurídica, criando órgãos internos. DESCENTRALIZAÇÃO transfere competências para outra pessoa jurídica.",
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
            justificativa:
              "A SEM obrigatoriamente deve ser SOCIEDADE ANÔNIMA (S.A.). A empresa pública pode adotar qualquer forma societária.",
            dificuldade: "Média",
            competencia: "Forma societária",
            banca: "IADES",
            tags: ["SEM", "S.A."],
          },
          {
            id: "ap-q-7-5",
            enunciado:
              "A relação entre as entidades da Administração Indireta e a Administração Direta é de:",
            alternativas: [
              { letra: "A", texto: "subordinação hierárquica." },
              { letra: "B", texto: "vinculação, sem subordinação." },
              { letra: "C", texto: "total independência." },
              { letra: "D", texto: "delegação de poderes." },
              { letra: "E", texto: "tutela absoluta." },
            ],
            gabarito: "B",
            justificativa:
              "As entidades da Administração Indireta são VINCULADAS (supervisão ministerial), não SUBORDINADAS. Não há hierarquia, mas há controle finalístico.",
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
              {
                letra: "C",
                texto: "personalidade jurídica de direito público.",
              },
              { letra: "D", texto: "forma obrigatória de S.A." },
              { letra: "E", texto: "regime jurídico integralmente público." },
            ],
            gabarito: "B",
            justificativa:
              "A empresa pública tem capital 100% PÚBLICO. A SEM é que tem capital misto. Ambas têm personalidade de direito privado.",
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
              {
                letra: "D",
                texto: "Ministério da Saúde e Secretaria da Receita Federal.",
              },
              { letra: "E", texto: "BNDES e Casa da Moeda." },
            ],
            gabarito: "C",
            justificativa:
              "INSS, IBAMA e INCRA são autarquias. Correios, CEF, BNDES são empresas públicas. Petrobras e BB são SEM. Ministérios são órgãos.",
            dificuldade: "Média",
            competencia: "Exemplos de autarquias",
            banca: "IADES",
            tags: ["autarquia", "exemplos"],
          },
          {
            id: "ap-q-7-8",
            enunciado:
              "As autarquias possuem personalidade jurídica de direito:",
            alternativas: [
              { letra: "A", texto: "privado." },
              { letra: "B", texto: "público." },
              { letra: "C", texto: "misto." },
              { letra: "D", texto: "híbrido." },
              { letra: "E", texto: "especial." },
            ],
            gabarito: "B",
            justificativa:
              "Autarquias têm personalidade jurídica de direito PÚBLICO, o que lhes confere prerrogativas como imunidade tributária recíproca, bens impenhoráveis e pagamento por precatório.",
            dificuldade: "Fácil",
            competencia: "Natureza jurídica",
            banca: "IADES",
            tags: ["autarquia", "direito público"],
          },
          {
            id: "ap-q-7-9",
            enunciado: "A descentralização administrativa consiste em:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "distribuição de competências dentro da mesma pessoa jurídica.",
              },
              {
                letra: "B",
                texto:
                  "transferência de competências para outra pessoa jurídica.",
              },
              { letra: "C", texto: "criação de órgãos internos." },
              { letra: "D", texto: "delegação de competências entre órgãos." },
              {
                letra: "E",
                texto: "concentração de poderes no órgão central.",
              },
            ],
            gabarito: "B",
            justificativa:
              "DESCENTRALIZAÇÃO é a transferência de competências para OUTRA pessoa jurídica, criando entidades da Administração Indireta. Desconcentração é que distribui dentro da mesma pessoa jurídica.",
            dificuldade: "Média",
            competencia: "Descentralização",
            banca: "IADES",
            tags: ["descentralização", "entidades"],
          },
          {
            id: "ap-q-7-10",
            enunciado:
              "A criação de empresas públicas e sociedades de economia mista depende de:",
            alternativas: [
              { letra: "A", texto: "lei específica que as cria diretamente." },
              { letra: "B", texto: "decreto do chefe do Executivo." },
              {
                letra: "C",
                texto:
                  "autorização legislativa e registro em órgão competente.",
              },
              { letra: "D", texto: "apenas registro em órgão competente." },
              { letra: "E", texto: "medida provisória com força de lei." },
            ],
            gabarito: "C",
            justificativa:
              "EP e SEM são criadas em duas etapas: 1) autorização por lei específica; 2) registro no órgão competente (Junta Comercial). Diferente das autarquias, que são criadas diretamente por lei.",
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
          "Anulação pela Administração: prazo decadencial de 5 anos (Lei 9.784/99)",
        ],

        armadilhas: [
          {
            titulo: "TCU JULGA x APRECIA",
            descricao:
              "TCU JULGA contas de administradores, mas apenas APRECIA (parecer prévio) contas do Presidente.",
            dica: "Lembre: quem JULGA o Presidente é o Congresso Nacional, não o TCU.",
          },
          {
            titulo: "Decisões do TCU e coisa julgada",
            descricao:
              "Decisões do TCU NÃO fazem coisa julgada material - são revisíveis pelo Judiciário.",
            dica: "TCU exerce função administrativa, não jurisdicional.",
          },
          {
            titulo: "Judiciário e mérito administrativo",
            descricao:
              "Judiciário NÃO pode substituir o mérito administrativo - pode anular, não revogar.",
            dica: "Revogar = conveniência/oportunidade = competência da própria Administração.",
          },
          {
            titulo: "Sistema de jurisdição brasileiro",
            descricao:
              "Brasil adota sistema de jurisdição UNA (inglês), não o contencioso administrativo (francês).",
            dica: "Una = todas as causas vão ao Judiciário comum.",
          },
          {
            titulo: "Recurso hierárquico impróprio",
            descricao:
              "Recurso hierárquico IMPRÓPRIO exige previsão legal expressa (entre entidades diferentes).",
            dica: "Próprio não precisa de lei; impróprio (outra pessoa jurídica) precisa.",
          },
          {
            titulo: "Legitimidade para ação popular",
            descricao:
              "A ação popular exige que o autor seja CIDADÃO ELEITOR (não basta ser brasileiro).",
            dica: "Precisa ter título de eleitor - estrangeiros e menores de 16 não podem.",
          },
          {
            titulo: "Controle interno obrigatório",
            descricao:
              "Controle interno é OBRIGATÓRIO para todos os Poderes (art. 74, CF).",
            dica: "Todos = Executivo, Legislativo e Judiciário devem ter.",
          },
          {
            titulo: "Sustação de atos x contratos",
            descricao:
              "O TCU pode SUSTAR atos, mas sustação de CONTRATOS é competência do Congresso.",
            dica: "Atos = TCU sozinho. Contratos = Congresso (mais grave).",
          },
          {
            titulo: "Prazo de resposta LAI",
            descricao:
              "LAI: prazo de resposta é 20 dias (não 30), prorrogável por mais 10.",
            dica: "20+10 = máximo 30 dias, mas o prazo inicial é 20.",
          },
          {
            titulo: "Súmula 473 e prazo decadencial",
            descricao:
              "Súmula 473 não elimina prazo decadencial - após 5 anos, não pode mais anular.",
            dica: "Art. 54 da Lei 9.784/99: 5 anos para anular atos de boa-fé.",
          },
        ],

        mnemonicos: [
          {
            termo: "LEGS",
            significado: "Fiscalização pelo Controle Externo (art. 70, CF)",
            frase:
              "L - Legalidade / E - Economicidade / G - leGitimidade / S - Subvenções e renúncias",
          },
          {
            termo: "AME o APOIO",
            significado: "Finalidades do Controle Interno (art. 74, CF)",
            frase:
              "A - Avaliar metas (PPA) / M - Monitorar gestão / E - Exercer controle de crédito / APOIO ao controle externo",
          },
          {
            termo: "APRECIA x JULGA",
            significado: "Competências do TCU",
            frase:
              "APRECIA = Presidente (parecer prévio) e aposentadorias / JULGA = administradores e responsáveis por dinheiro público",
          },
          {
            termo: "5-15-25",
            significado: "Prazos de Sigilo na LAI",
            frase:
              "Reservado = 5 anos / Secreto = 15 anos / Ultrassecreto = 25 anos (dobra a cada nível)",
          },
          {
            termo: "PADACO",
            significado: "Instrumentos de Controle Social",
            frase:
              "P - Petição / A - Ação popular / D - Denúncia ao TCU / A - Audiência pública / CO - Conselhos/COnsulta pública",
          },
          {
            termo: "ANULA e REVOGA",
            significado: "Súmula 473 do STF",
            frase:
              "ANULA = vícios de ilegalidade (não gera direito) / REVOGA = conveniência e oportunidade (respeita direitos adquiridos)",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-8-1",
            frente: "Qual a diferença entre controle interno e externo?",
            verso:
              "INTERNO: exercido pelo próprio Poder/órgão sobre seus atos (autotutela, hierarquia). EXTERNO: exercido por Poder/órgão estranho (Legislativo, Judiciário, TCU).",
            tags: ["controle", "interno", "externo"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-2",
            frente: "Quem julga as contas dos administradores públicos?",
            verso:
              "O TRIBUNAL DE CONTAS julga as contas dos administradores e demais responsáveis por dinheiros públicos. Já as contas do Presidente da República são APRECIADAS (parecer prévio) pelo TCU e JULGADAS pelo Congresso Nacional.",
            tags: ["TCU", "contas", "julgamento"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-3",
            frente: "As decisões do TCU fazem coisa julgada?",
            verso:
              "NÃO. As decisões do TCU têm natureza ADMINISTRATIVA, não jurisdicional, portanto não fazem coisa julgada material e podem ser revistas pelo Poder Judiciário.",
            tags: ["TCU", "coisa julgada", "natureza"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-4",
            frente:
              "O Judiciário pode analisar o mérito dos atos administrativos?",
            verso:
              "O Judiciário NÃO pode substituir o mérito (conveniência e oportunidade) do administrador, mas pode controlar os LIMITES da discricionariedade: proporcionalidade, razoabilidade, motivação, desvio de finalidade.",
            tags: ["controle judicial", "mérito", "discricionariedade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-5",
            frente: "O que estabelece a Súmula 473 do STF?",
            verso:
              "A Administração pode ANULAR seus atos ilegais (deles não se originam direitos) ou REVOGÁ-LOS por conveniência/oportunidade (respeitados direitos adquiridos), ressalvada a apreciação judicial. É o princípio da AUTOTUTELA.",
            tags: ["Súmula 473", "autotutela", "anulação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-6",
            frente: "Qual o prazo para a Administração anular atos ilegais?",
            verso:
              "5 ANOS, conforme art. 54 da Lei 9.784/99, contados da data em que foram praticados, SALVO comprovada MÁ-FÉ do beneficiário.",
            tags: ["prazo", "anulação", "Lei 9.784"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-7",
            frente: "Quais são os graus de sigilo na LAI e seus prazos?",
            verso:
              "RESERVADO: 5 anos / SECRETO: 15 anos / ULTRASSECRETO: 25 anos. Macete: 5-15-25 (dobra e soma 5).",
            tags: ["LAI", "sigilo", "prazos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-8",
            frente:
              "Qual o prazo para resposta a pedido de informação pela LAI?",
            verso:
              "Resposta imediata ou em até 20 DIAS, prorrogável por mais 10 dias mediante justificativa expressa.",
            tags: ["LAI", "prazo", "resposta"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-9",
            frente: "O que é o recurso hierárquico impróprio?",
            verso:
              "É o recurso dirigido a autoridade de OUTRA pessoa jurídica (ex: de autarquia para o Ministério). Diferente do próprio, EXIGE previsão legal expressa.",
            tags: ["recurso", "hierárquico", "impróprio"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-8-10",
            frente: "Quais são os principais instrumentos do controle social?",
            verso:
              "Ação Popular (Lei 4.717/65), Direito de Petição (art. 5º, XXXIV), Denúncia ao TCU (art. 74, §2º), Lei de Acesso à Informação, Audiências/Consultas Públicas, Conselhos de Políticas Públicas.",
            tags: ["controle social", "instrumentos", "participação"],
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
            id: "ap-q-8-1",
            enunciado:
              "Acerca do controle da Administração Pública, assinale a alternativa correta:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "O Tribunal de Contas da União exerce função jurisdicional ao julgar as contas dos administradores públicos.",
              },
              {
                letra: "B",
                texto:
                  "O controle interno é facultativo, devendo cada Poder decidir sobre sua implementação.",
              },
              {
                letra: "C",
                texto:
                  "As decisões do TCU possuem natureza administrativa e podem ser revistas pelo Poder Judiciário.",
              },
              {
                letra: "D",
                texto:
                  "O Poder Judiciário pode revogar atos administrativos por conveniência e oportunidade.",
              },
              {
                letra: "E",
                texto:
                  "O TCU julga as contas anuais prestadas pelo Presidente da República.",
              },
            ],
            gabarito: "C",
            justificativa:
              "As decisões do TCU têm natureza ADMINISTRATIVA, não jurisdicional, portanto são revisíveis pelo Judiciário. O TCU APRECIA (não julga) as contas do Presidente. O controle interno é OBRIGATÓRIO (art. 74, CF). O Judiciário NÃO revoga atos (não analisa mérito).",
            dificuldade: "Média",
            competencia: "Natureza das decisões do TCU",
            banca: "IADES",
            tags: ["TCU", "controle externo", "natureza administrativa"],
          },
          {
            id: "ap-q-8-2",
            enunciado:
              "Segundo a Súmula 473 do Supremo Tribunal Federal, a Administração Pública:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "pode anular seus atos ilegais, independentemente de qualquer prazo.",
              },
              {
                letra: "B",
                texto:
                  "pode revogar atos ilegais e anular atos inconvenientes.",
              },
              {
                letra: "C",
                texto:
                  "pode anular atos ilegais e revogar atos por conveniência, respeitados direitos adquiridos na revogação.",
              },
              {
                letra: "D",
                texto:
                  "somente pode invalidar seus atos mediante decisão judicial.",
              },
              {
                letra: "E",
                texto:
                  "pode revogar atos ilegais, dos quais não se originam direitos.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A Súmula 473 estabelece que a Administração pode ANULAR atos ilegais (não geram direitos) e REVOGAR por conveniência/oportunidade (respeitando direitos adquiridos). Atenção: há prazo de 5 anos para anulação (Lei 9.784/99, art. 54).",
            dificuldade: "Média",
            competencia: "Autotutela administrativa",
            banca: "IADES",
            tags: ["Súmula 473", "autotutela", "anulação", "revogação"],
          },
          {
            id: "ap-q-8-3",
            enunciado:
              "A respeito do controle judicial da Administração Pública, é correto afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "o Brasil adota o sistema do contencioso administrativo.",
              },
              {
                letra: "B",
                texto:
                  "o Judiciário pode substituir o mérito do ato administrativo discricionário.",
              },
              {
                letra: "C",
                texto: "o controle judicial alcança apenas os atos vinculados.",
              },
              {
                letra: "D",
                texto:
                  "o Judiciário pode controlar a proporcionalidade e razoabilidade dos atos discricionários.",
              },
              {
                letra: "E",
                texto:
                  "a inafastabilidade da jurisdição impede qualquer instância administrativa prévia.",
              },
            ],
            gabarito: "D",
            justificativa:
              "O Judiciário não substitui o mérito, mas pode controlar os LIMITES da discricionariedade: proporcionalidade, razoabilidade, motivação. Brasil adota jurisdição UNA (não contencioso administrativo). Pode haver instância administrativa prévia (não obrigatória).",
            dificuldade: "Média",
            competencia: "Controle judicial",
            banca: "IADES",
            tags: ["controle judicial", "mérito", "discricionariedade"],
          },
          {
            id: "ap-q-8-4",
            enunciado:
              "De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011), o prazo para resposta a pedido de acesso à informação é de:",
            alternativas: [
              { letra: "A", texto: "10 dias, prorrogáveis por mais 10." },
              { letra: "B", texto: "15 dias, improrrogáveis." },
              { letra: "C", texto: "20 dias, prorrogáveis por mais 10." },
              { letra: "D", texto: "30 dias, prorrogáveis por mais 15." },
              { letra: "E", texto: "20 dias, improrrogáveis." },
            ],
            gabarito: "C",
            justificativa:
              "A LAI estabelece prazo de 20 DIAS para resposta, prorrogável por mais 10 dias mediante justificativa expressa. Total máximo: 30 dias.",
            dificuldade: "Fácil",
            competencia: "Prazos da LAI",
            banca: "IADES",
            tags: ["LAI", "prazos", "acesso à informação"],
          },
          {
            id: "ap-q-8-5",
            enunciado: "O recurso hierárquico impróprio caracteriza-se por:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "ser dirigido a autoridade superior dentro da mesma pessoa jurídica.",
              },
              { letra: "B", texto: "independer de previsão legal expressa." },
              {
                letra: "C",
                texto:
                  "ser dirigido a autoridade de outra pessoa jurídica e exigir previsão legal.",
              },
              {
                letra: "D",
                texto: "ser cabível apenas no âmbito da Administração Direta.",
              },
              { letra: "E", texto: "substituir o controle judicial." },
            ],
            gabarito: "C",
            justificativa:
              "O recurso hierárquico IMPRÓPRIO é dirigido a autoridade de OUTRA pessoa jurídica (ex: do INSS para o Ministério da Previdência) e EXIGE previsão legal expressa. Já o recurso próprio é dentro da mesma pessoa jurídica e independe de previsão legal.",
            dificuldade: "Média",
            competencia: "Recursos administrativos",
            banca: "IADES",
            tags: ["recurso hierárquico", "impróprio", "previsão legal"],
          },
          {
            id: "ap-q-8-6",
            enunciado: "Compete ao Tribunal de Contas da União:",
            alternativas: [
              {
                letra: "A",
                texto: "julgar as contas anuais do Presidente da República.",
              },
              {
                letra: "B",
                texto:
                  "apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal.",
              },
              {
                letra: "C",
                texto:
                  "sustar contratos administrativos considerados irregulares.",
              },
              {
                letra: "D",
                texto:
                  "exercer o controle jurisdicional da Administração Pública.",
              },
              {
                letra: "E",
                texto:
                  "anular atos administrativos ilegais praticados pelo Poder Executivo.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O TCU aprecia, para fins de registro, a legalidade dos atos de admissão e aposentadorias (art. 71, III, CF). O TCU APRECIA (não julga) contas do Presidente. Sustação de CONTRATOS é do Congresso. TCU não exerce jurisdição nem anula atos diretamente.",
            dificuldade: "Média",
            competencia: "Competências do TCU",
            banca: "IADES",
            tags: ["TCU", "competências", "registro"],
          },
          {
            id: "ap-q-8-7",
            enunciado:
              "São instrumentos do controle social da Administração Pública, EXCETO:",
            alternativas: [
              { letra: "A", texto: "ação popular." },
              { letra: "B", texto: "audiências públicas." },
              { letra: "C", texto: "denúncia ao Tribunal de Contas." },
              { letra: "D", texto: "ação direta de inconstitucionalidade." },
              { letra: "E", texto: "direito de petição." },
            ],
            gabarito: "D",
            justificativa:
              "A ADI é instrumento de controle de constitucionalidade concentrado, com legitimados restritos (art. 103, CF), não sendo instrumento de controle SOCIAL. Ação popular, audiências públicas, denúncia ao TCU e direito de petição são instrumentos típicos de controle social.",
            dificuldade: "Média",
            competencia: "Instrumentos de controle social",
            banca: "IADES",
            tags: ["controle social", "instrumentos", "ação popular"],
          },
          {
            id: "ap-q-8-8",
            enunciado:
              "Acerca da Súmula Vinculante nº 3 do STF, é correto afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "dispensa o contraditório em todos os processos do TCU.",
              },
              {
                letra: "B",
                texto:
                  "assegura contraditório quando a decisão puder anular ato que beneficie o interessado.",
              },
              {
                letra: "C",
                texto:
                  "exige contraditório prévio para a apreciação inicial de aposentadoria.",
              },
              {
                letra: "D",
                texto: "impede a revisão das decisões do TCU pelo Judiciário.",
              },
              {
                letra: "E",
                texto:
                  "aplica-se exclusivamente aos processos de tomada de contas especial.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A SV 3 assegura contraditório e ampla defesa no TCU quando a decisão puder anular/revogar ato que beneficie o interessado, EXCETUADA a apreciação da legalidade do ato de concessão INICIAL de aposentadoria, reforma e pensão.",
            dificuldade: "Difícil",
            competencia: "Súmula Vinculante 3",
            banca: "IADES",
            tags: ["SV 3", "TCU", "contraditório"],
          },
          {
            id: "ap-q-8-9",
            enunciado:
              "O prazo decadencial para a Administração anular atos administrativos ilegais de que decorram efeitos favoráveis aos administrados de boa-fé é de:",
            alternativas: [
              { letra: "A", texto: "2 anos." },
              { letra: "B", texto: "5 anos." },
              { letra: "C", texto: "10 anos." },
              {
                letra: "D",
                texto: "não há prazo, em razão do princípio da autotutela.",
              },
              { letra: "E", texto: "3 anos." },
            ],
            gabarito: "B",
            justificativa:
              "Conforme art. 54 da Lei 9.784/99, o prazo decadencial é de 5 ANOS, contados da data em que foram praticados, salvo comprovada má-fé. A Súmula 473 não elimina esse prazo.",
            dificuldade: "Média",
            competencia: "Prazo decadencial",
            banca: "IADES",
            tags: ["anulação", "prazo", "decadência", "Lei 9.784"],
          },
          {
            id: "ap-q-8-10",
            enunciado:
              "A classificação de informação como ultrassecreta, nos termos da Lei de Acesso à Informação, implica sigilo pelo prazo máximo de:",
            alternativas: [
              { letra: "A", texto: "5 anos." },
              { letra: "B", texto: "10 anos." },
              { letra: "C", texto: "15 anos." },
              { letra: "D", texto: "25 anos." },
              { letra: "E", texto: "50 anos." },
            ],
            gabarito: "D",
            justificativa:
              "Os prazos máximos de sigilo na LAI são: RESERVADO = 5 anos, SECRETO = 15 anos, ULTRASSECRETO = 25 anos. Macete: 5-15-25.",
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
          "Setores do PDRAE: núcleo estratégico, exclusivas, não exclusivas, produção",
        ],

        armadilhas: [
          {
            titulo: "Gerencial não elimina burocracia",
            descricao:
              "Modelo gerencial NÃO elimina a burocracia - mantém legalidade, concurso, impessoalidade.",
            dica: "Gerencial corrige DISFUNÇÕES, não elimina a burocracia inteira.",
          },
          {
            titulo: "Ano de criação do DASP",
            descricao:
              "DASP foi criado em 1938 (não 1930 nem 1936 - lei 284 foi em 1936).",
            dica: "1930 = Revolução / 1936 = Lei 284 / 1938 = DASP.",
          },
          {
            titulo: "Weber e o tipo ideal",
            descricao:
              "Weber definiu burocracia como TIPO IDEAL, não como disfunção.",
            dica: "Para Weber, burocracia era a forma mais eficiente de organização.",
          },
          {
            titulo: "Disfunções não previstas por Weber",
            descricao:
              "Disfunções burocráticas NÃO foram previstas por Weber - são desvios identificados posteriormente.",
            dica: "Disfunções são CRÍTICAS à burocracia, não parte do conceito original.",
          },
          {
            titulo: "PDRAE x EC 19",
            descricao: "PDRAE é de 1995 (não 1998 - EC 19 é de 1998).",
            dica: "Primeiro o PDRAE (1995), depois a EC 19 (1998) constitucionalizou.",
          },
          {
            titulo: "Eficiência antes da EC 19",
            descricao:
              "Eficiência virou princípio EXPRESSO com EC 19/98 (já existia implicitamente).",
            dica: "Sempre existiu, mas a EC 19 tornou EXPRESSO no art. 37.",
          },
          {
            titulo: "Decreto-Lei 200/67",
            descricao:
              "Decreto-Lei 200/67 JÁ tentou flexibilizar, mas não é modelo gerencial pleno.",
            dica: "Foi uma tentativa, mas o gerencialismo veio mesmo com o PDRAE.",
          },
          {
            titulo: "Resquícios patrimonialistas",
            descricao:
              "Patrimonialismo NÃO foi totalmente eliminado - há resquícios até hoje.",
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
            frase:
              "Formalismo / Impessoalidade / Hierarquia / Impessoalidade / Profissionalização",
          },
          {
            termo: "REAL FRESTA",
            significado: "Disfunções da burocracia",
            frase:
              "Rigidez / Excesso de formalismo / Autorreferência / Lentidão / Foco em meios / Resistência / Excesso de papéis / STAgnação",
          },
          {
            termo: "CRED FOCO",
            significado: "Características do modelo gerencial",
            frase:
              "Cidadão-cliente / Resultados / Eficiência / Descentralização / FOco em metas / COmpetição",
          },
          {
            termo: "PMF",
            significado: "Tipo de controle em cada modelo",
            frase:
              "Patrimonialista = Nenhum / Burocrático = Meios (prévio) / Gerencial = Fins (posterior)",
          },
          {
            termo: "DASP-PDRAE",
            significado: "Marcos históricos",
            frase:
              "1938 = DASP (burocracia) / 1995 = PDRAE (gerencial) / 1998 = EC 19 (eficiência)",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-9-1",
            frente: "Quais são os três modelos de administração pública?",
            verso:
              "1) PATRIMONIALISTA (até 1930) - confusão público-privado 2) BUROCRÁTICO (1930-1995) - formalismo, impessoalidade 3) GERENCIAL (1995-atual) - resultados, cidadão-cliente",
            tags: ["modelos", "evolução", "administração"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-2",
            frente: "Quais as características do modelo patrimonialista?",
            verso:
              "Confusão entre patrimônio público e privado, nepotismo, clientelismo, cargos como prebendas (fonte de renda pessoal), corrupção institucionalizada, personalismo nas decisões.",
            tags: ["patrimonialismo", "características"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-3",
            frente: "Quais as características do modelo burocrático (Weber)?",
            verso:
              "Formalismo, impessoalidade, hierarquia, profissionalização (concurso), especialização (divisão do trabalho), previsibilidade, separação entre público e privado.",
            tags: ["burocracia", "Weber", "características"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-4",
            frente: "O que foi o DASP e quando foi criado?",
            verso:
              "Departamento Administrativo do Serviço Público, criado em 1938 (Era Vargas). Foi o marco da implantação do modelo burocrático no Brasil. Funções: organização, orçamento, pessoal, métodos.",
            tags: ["DASP", "burocracia", "história"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-5",
            frente: "Quais são as disfunções da burocracia?",
            verso:
              "Excesso de formalismo (papelada), rigidez, lentidão, autorreferencialidade (foco em si mesma), resistência a mudanças, despersonalização, foco em meios (processos) ao invés de fins (resultados).",
            tags: ["burocracia", "disfunções"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-6",
            frente: "O que foi o PDRAE?",
            verso:
              "Plano Diretor da Reforma do Aparelho do Estado (1995), elaborado por Bresser-Pereira (MARE). Marco do modelo gerencial no Brasil. Objetivo: transformar a administração burocrática em gerencial.",
            tags: ["PDRAE", "reforma", "gerencialismo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-7",
            frente: "Quais as características do modelo gerencial?",
            verso:
              "Foco em resultados, cidadão-cliente, descentralização, flexibilização, controle a posteriori, competição administrada, gestão por objetivos, accountability (responsabilização).",
            tags: ["gerencialismo", "características"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-8",
            frente: "O modelo gerencial elimina a burocracia?",
            verso:
              "NÃO. O modelo gerencial mantém princípios burocráticos (legalidade, impessoalidade, concurso) mas busca corrigir as DISFUNÇÕES (rigidez, lentidão, foco em meios), adicionando foco em resultados e eficiência.",
            tags: ["gerencialismo", "burocracia", "evolução"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-9",
            frente: "Qual a diferença no tipo de controle de cada modelo?",
            verso:
              "PATRIMONIALISTA: controle inexistente ou pessoal / BUROCRÁTICO: controle PRÉVIO (de meios/processos) / GERENCIAL: controle POSTERIOR (de resultados/fins).",
            tags: ["controle", "modelos", "comparação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-9-10",
            frente: "O que a EC 19/1998 trouxe para a administração pública?",
            verso:
              "Constitucionalizou a reforma gerencial: eficiência como princípio EXPRESSO (art. 37), contratos de gestão (§8º), avaliação de desempenho, estabilidade condicionada, teto remuneratório.",
            tags: ["EC 19/1998", "eficiência", "reforma"],
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
            id: "ap-q-9-1",
            enunciado:
              "O modelo de administração pública caracterizado pela confusão entre patrimônio público e privado denomina-se:",
            alternativas: [
              { letra: "A", texto: "burocrático." },
              { letra: "B", texto: "gerencial." },
              { letra: "C", texto: "patrimonialista." },
              { letra: "D", texto: "societal." },
              { letra: "E", texto: "weberiano." },
            ],
            gabarito: "C",
            justificativa:
              "O modelo PATRIMONIALISTA se caracteriza pela confusão entre o patrimônio público e o privado do governante, além de nepotismo e cargos como prebendas.",
            dificuldade: "Fácil",
            competencia: "Modelo patrimonialista",
            banca: "IADES",
            tags: ["patrimonialismo", "características"],
          },
          {
            id: "ap-q-9-2",
            enunciado:
              "São características do modelo burocrático de administração pública, segundo Max Weber, EXCETO:",
            alternativas: [
              { letra: "A", texto: "formalismo." },
              { letra: "B", texto: "hierarquia." },
              { letra: "C", texto: "impessoalidade." },
              { letra: "D", texto: "foco em resultados." },
              { letra: "E", texto: "profissionalização." },
            ],
            gabarito: "D",
            justificativa:
              "Foco em RESULTADOS é característica do modelo GERENCIAL. A burocracia weberiana foca em processos (meios), não em resultados (fins).",
            dificuldade: "Fácil",
            competencia: "Modelo burocrático",
            banca: "IADES",
            tags: ["burocracia", "weber"],
          },
          {
            id: "ap-q-9-3",
            enunciado:
              "O DASP (Departamento Administrativo do Serviço Público) foi criado em:",
            alternativas: [
              { letra: "A", texto: "1922." },
              { letra: "B", texto: "1930." },
              { letra: "C", texto: "1938." },
              { letra: "D", texto: "1967." },
              { letra: "E", texto: "1995." },
            ],
            gabarito: "C",
            justificativa:
              "O DASP foi criado em 1938, durante a Era Vargas, sendo o marco da implantação do modelo burocrático no Brasil.",
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
              {
                letra: "C",
                texto: "rigidez, lentidão e excesso de formalismo.",
              },
              { letra: "D", texto: "impessoalidade e meritocracia." },
              { letra: "E", texto: "accountability e transparência." },
            ],
            gabarito: "C",
            justificativa:
              "DISFUNÇÕES da burocracia: rigidez, lentidão, excesso de formalismo, autorreferência, resistência a mudanças, foco em meios.",
            dificuldade: "Fácil",
            competencia: "Disfunções burocráticas",
            banca: "IADES",
            tags: ["disfunções", "burocracia"],
          },
          {
            id: "ap-q-9-5",
            enunciado:
              "O Plano Diretor da Reforma do Aparelho do Estado (PDRAE), de 1995, foi elaborado por:",
            alternativas: [
              { letra: "A", texto: "Getúlio Vargas." },
              { letra: "B", texto: "Fernando Henrique Cardoso." },
              { letra: "C", texto: "Luiz Carlos Bresser-Pereira." },
              { letra: "D", texto: "Hélio Beltrão." },
              { letra: "E", texto: "Fernando Collor." },
            ],
            gabarito: "C",
            justificativa:
              "O PDRAE foi elaborado por BRESSER-PEREIRA, Ministro da Administração e Reforma do Estado (MARE) no governo FHC.",
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
            justificativa:
              "O modelo gerencial foca em RESULTADOS (controle a posteriori), diferente do burocrático que foca em meios/processos (controle prévio).",
            dificuldade: "Fácil",
            competencia: "Modelo gerencial",
            banca: "IADES",
            tags: ["gerencial", "resultados"],
          },
          {
            id: "ap-q-9-7",
            enunciado:
              "A Emenda Constitucional nº 19/1998 incluiu expressamente como princípio da administração pública:",
            alternativas: [
              { letra: "A", texto: "a legalidade." },
              { letra: "B", texto: "a impessoalidade." },
              { letra: "C", texto: "a moralidade." },
              { letra: "D", texto: "a publicidade." },
              { letra: "E", texto: "a eficiência." },
            ],
            gabarito: "E",
            justificativa:
              "A EC 19/98 incluiu a EFICIÊNCIA como princípio expresso no art. 37 da CF. Os demais (LIMP) já constavam desde 1988.",
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
              {
                letra: "C",
                texto: "elimina completamente os princípios burocráticos.",
              },
              { letra: "D", texto: "adota o controle de resultados." },
              { letra: "E", texto: "promove a descentralização." },
            ],
            gabarito: "C",
            justificativa:
              "O modelo gerencial NÃO elimina completamente os princípios burocráticos. Mantém legalidade, impessoalidade, concurso público, mas corrige as DISFUNÇÕES.",
            dificuldade: "Média",
            competencia: "Relação gerencial-burocrático",
            banca: "IADES",
            tags: ["gerencial", "burocracia"],
          },
          {
            id: "ap-q-9-9",
            enunciado:
              "O tipo de dominação que fundamenta a burocracia, segundo Max Weber, é a dominação:",
            alternativas: [
              { letra: "A", texto: "tradicional." },
              { letra: "B", texto: "carismática." },
              { letra: "C", texto: "racional-legal." },
              { letra: "D", texto: "patrimonial." },
              { letra: "E", texto: "aristocrática." },
            ],
            gabarito: "C",
            justificativa:
              "Para Weber, a burocracia é a forma de organização típica da dominação RACIONAL-LEGAL, baseada em leis e normas impessoais.",
            dificuldade: "Média",
            competencia: "Dominação weberiana",
            banca: "IADES",
            tags: ["weber", "dominação"],
          },
          {
            id: "ap-q-9-10",
            enunciado:
              "A expressão 'cidadão-cliente' é característica do modelo:",
            alternativas: [
              { letra: "A", texto: "patrimonialista." },
              { letra: "B", texto: "burocrático." },
              { letra: "C", texto: "weberiano tradicional." },
              { letra: "D", texto: "gerencial." },
              { letra: "E", texto: "carismático." },
            ],
            gabarito: "D",
            justificativa:
              "A visão do cidadão como CLIENTE é típica do modelo GERENCIAL, que coloca o usuário como centro das decisões e foco do atendimento.",
            dificuldade: "Fácil",
            competencia: "Cidadão-cliente",
            banca: "IADES",
            tags: ["gerencial", "cidadão-cliente"],
          },
        ],
      },
    },
    {
      id: "ap-topico-10",
      numero: 10,
      titulo: "Nova Gestão Pública, Governança Pública e Gestão por Resultados",
      conteudo: {
        resumo: `
## Resumo Rápido

### Nova Gestão Pública (NGP / NPM)

| Aspecto | Descrição |
|---------|-----------|
| **Origem** | Reino Unido, EUA, Nova Zelândia (anos 1980) |
| **Brasil** | PDRAE (1995), governo FHC |
| **Foco** | Resultados, eficiência, cidadão-cliente |
| **Modelo** | Pós-burocrático / Gerencial |

### Governança Pública

| Elemento | Descrição |
|----------|-----------|
| **Conceito** | Capacidade de governo + articulação com sociedade |
| **Pilares** | Transparência, integridade, accountability, participação |
| **Foco** | Coordenação de atores para o bem comum |
| **Distinção** | Governança ≠ Governabilidade |

### Gestão por Resultados

| Característica | Descrição |
|----------------|-----------|
| **Controle** | A posteriori (resultados) |
| **Foco** | Outputs (entregas) e outcomes (impactos) |
| **Instrumentos** | Indicadores, metas, contrato de gestão |
| **Avaliação** | Desempenho, não apenas conformidade |

### Para IADES - Memorizar:
- NGP = foco em RESULTADOS, não em processos
- Governança = COMO se governa (capacidade + legitimidade)
- Governabilidade = CONDIÇÕES para governar (apoio político)
- Gestão por resultados: controle A POSTERIORI
        `,

        explicacao: `
## Explicação Didática

### 1. Nova Gestão Pública (New Public Management - NPM)

#### 1.1 Conceito e Origem

A **Nova Gestão Pública** (NGP) é um movimento de reforma administrativa surgido nos anos 1980, que busca incorporar **práticas da iniciativa privada** ao setor público.

#### Contexto de Surgimento
- **Crise fiscal** dos Estados nos anos 1970-80
- **Críticas à burocracia** weberiana (rigidez, ineficiência)
- **Influência neoliberal** (Estado mínimo)
- **Globalização** e competitividade

#### Países Pioneiros
| País | Reforma |
|------|---------|
| **Reino Unido** | Governo Thatcher (1979) |
| **EUA** | Reinventando o Governo (1993) |
| **Nova Zelândia** | Modelo mais radical |
| **Brasil** | PDRAE (1995) |

#### 1.2 Princípios da NGP

1. **Foco no cidadão-cliente**
   - O usuário é tratado como cliente do serviço público
   - Satisfação e qualidade no atendimento

2. **Orientação para resultados**
   - Controle a posteriori (não prévio)
   - Avaliação por desempenho, não por conformidade

3. **Flexibilização**
   - Menos regras rígidas
   - Descentralização de decisões

4. **Competição**
   - Estímulo à competição entre prestadores
   - Parcerias público-privadas

5. **Accountability**
   - Responsabilização pelos resultados
   - Transparência e prestação de contas

#### 1.3 A NGP no Brasil: O PDRAE

O **Plano Diretor da Reforma do Aparelho do Estado** (1995) foi o marco da NGP no Brasil.

##### Autor e Contexto
- **Luiz Carlos Bresser-Pereira** (Ministro do MARE)
- Governo Fernando Henrique Cardoso
- EC 19/1998 (Reforma Administrativa)

##### Núcleos do Estado (PDRAE)

| Núcleo | Função | Forma de Propriedade |
|--------|--------|---------------------|
| **Estratégico** | Decisões políticas | Estatal |
| **Atividades Exclusivas** | Poder de Estado | Estatal |
| **Serviços Não-Exclusivos** | Serviços sociais | Pública não-estatal |
| **Produção de Bens** | Mercado | Privada |

##### Instrumentos do PDRAE
- **Agências Executivas**: autarquias com contrato de gestão
- **Organizações Sociais**: publicização de serviços
- **Contrato de Gestão**: metas e autonomia
- **Avaliação de Desempenho**: novo critério de promoção

### 2. Governança Pública

#### 2.1 Conceito

**Governança Pública** é a capacidade que um dado governo tem para **formular e implementar** políticas públicas, de forma **articulada** com a sociedade e outros atores.

> "Governança refere-se aos mecanismos, processos e instituições através dos quais cidadãos e grupos articulam seus interesses, exercem seus direitos legais, cumprem suas obrigações e mediam suas diferenças." (ONU)

#### 2.2 Governança vs. Governabilidade

| Aspecto | GOVERNANÇA | GOVERNABILIDADE |
|---------|------------|-----------------|
| **Pergunta** | COMO se governa? | É POSSÍVEL governar? |
| **Foco** | Capacidade técnica/gerencial | Condições políticas |
| **Dimensão** | Administrativa/operacional | Política |
| **Elementos** | Eficiência, controle, participação | Legitimidade, apoio, coalizão |
| **Problema** | Má gestão, corrupção | Crise política, instabilidade |

⚠️ **IADES cobra muito**: Governança = COMO. Governabilidade = SE É POSSÍVEL.

#### 2.3 Pilares da Boa Governança

##### a) Transparência (Disclosure)
- Divulgação proativa de informações
- LAI (Lei 12.527/2011)
- Portal da Transparência

##### b) Integridade (Integrity)
- Ética e probidade
- Compliance e controles internos
- Combate à corrupção

##### c) Accountability (Responsabilização)
- Prestação de contas
- Responsabilização por resultados
- Controle social

##### d) Participação
- Conselhos e conferências
- Audiências públicas
- Consultas populares

#### 2.4 Governança Corporativa no Setor Público

Aplicação dos princípios de governança corporativa às organizações públicas:

| Princípio | Aplicação |
|-----------|-----------|
| **Equidade** | Tratamento justo de stakeholders |
| **Transparência** | Informações claras e acessíveis |
| **Prestação de Contas** | Accountability por resultados |
| **Responsabilidade Corporativa** | Sustentabilidade e ética |

#### 2.5 Decreto nº 9.203/2017

Estabelece a política de governança da administração pública federal.

**Princípios:**
- Capacidade de resposta
- Integridade
- Confiabilidade
- Melhoria regulatória
- Prestação de contas e responsabilidade
- Transparência

**Diretrizes:**
- Direcionamento estratégico
- Monitoramento do desempenho
- Avaliação de políticas públicas

### 3. Gestão por Resultados

#### 3.1 Conceito

A **Gestão por Resultados** (GpR) é um modelo de administração que foca nos **outputs** (entregas) e **outcomes** (impactos) da ação governamental, em vez de simplesmente controlar processos e conformidade.

#### 3.2 Características

| Aspecto | Burocrático | Gestão por Resultados |
|---------|-------------|----------------------|
| **Controle** | A priori (prévio) | A posteriori (posterior) |
| **Foco** | Meios, processos | Fins, resultados |
| **Critério** | Conformidade | Desempenho |
| **Avaliação** | Aderência às regras | Alcance de metas |

#### 3.3 Elementos da Gestão por Resultados

##### a) Planejamento Estratégico
- Missão, visão, valores
- Objetivos estratégicos
- Metas e indicadores

##### b) Indicadores de Desempenho
| Tipo | Mede |
|------|------|
| **Eficiência** | Relação insumo/produto |
| **Eficácia** | Alcance de metas |
| **Efetividade** | Impacto na sociedade |
| **Economicidade** | Uso racional de recursos |

##### c) Contrato de Gestão
- Acordo entre órgãos/entidades
- Define metas e indicadores
- Confere autonomia em troca de resultados
- Art. 37, §8º, CF (EC 19/98)

##### d) Avaliação de Desempenho
- Servidores avaliados por resultados
- Bonificação por desempenho
- Feedback contínuo

#### 3.4 Ciclo da Gestão por Resultados

\`\`\`
PLANEJAR → EXECUTAR → MONITORAR → AVALIAR → CORRIGIR
    ↑________________________________________________↓
\`\`\`

1. **Planejar**: definir metas e indicadores
2. **Executar**: realizar as ações planejadas
3. **Monitorar**: acompanhar em tempo real
4. **Avaliar**: verificar alcance das metas
5. **Corrigir**: ajustar para o próximo ciclo

### 4. Instrumentos da Nova Gestão

#### 4.1 Contrato de Gestão (Art. 37, §8º, CF)

> "A autonomia gerencial, orçamentária e financeira dos órgãos e entidades da administração direta e indireta poderá ser ampliada mediante contrato..."

**Elementos:**
- Metas de desempenho
- Indicadores de avaliação
- Ampliação de autonomia
- Prazo determinado

#### 4.2 Organizações Sociais (OS)

- Lei 9.637/1998
- Entidades privadas sem fins lucrativos
- Qualificadas pelo Poder Público
- Celebram **contrato de gestão**
- Atuam em: saúde, educação, cultura, ciência, meio ambiente

#### 4.3 Agências Executivas

- Lei 9.649/1998
- Autarquias ou fundações com contrato de gestão
- Qualificação por decreto
- Plano de reestruturação
- Maior autonomia administrativa

#### 4.4 Parcerias Público-Privadas (PPP)

- Lei 11.079/2004
- Concessões especiais
- Contraprestação do poder público
- Modalidades: patrocinada e administrativa

### 5. Críticas e Limites da NGP

#### 5.1 Críticas Comuns

1. **Transposição acrítica** de técnicas privadas
2. **Redução do cidadão** a mero cliente
3. **Dificuldade de mensurar** resultados no setor público
4. **Risco de privatização** de serviços essenciais
5. **Fragmentação** da administração

#### 5.2 Limites no Brasil

- Resistência corporativa
- Cultura burocrática arraigada
- Descontinuidade de políticas
- Desigualdades regionais

### 6. Aplicação na Vigilância Sanitária

#### 6.1 Governança na VISA
- Articulação entre ANVISA, estados e municípios
- Participação social nos conselhos
- Transparência nas decisões regulatórias

#### 6.2 Gestão por Resultados na VISA
- Indicadores de desempenho (inspeções, registros)
- Metas de cobertura de fiscalização
- Avaliação de impacto das ações

#### 6.3 Contratos de Gestão
- Agências Executivas no Sistema de Saúde
- Hospitais sob gestão de OS
- Metas de qualidade e atendimento
        `,

        pontosChave: [
          "NGP: foco em resultados, cidadão-cliente, flexibilização, accountability",
          "PDRAE (1995): marco da reforma gerencial no Brasil (Bresser-Pereira)",
          "Governança = COMO se governa (capacidade técnica e articulação)",
          "Governabilidade = SE É POSSÍVEL governar (condições políticas)",
          "Pilares da governança: transparência, integridade, accountability, participação",
          "Gestão por Resultados: controle A POSTERIORI, foco em outputs e outcomes",
          "Contrato de Gestão: metas + autonomia (art. 37, §8º, CF)",
          "Indicadores: eficiência (insumo/produto), eficácia (metas), efetividade (impacto)",
          "OS (Lei 9.637/98): entidades privadas + contrato de gestão",
          "Decreto 9.203/2017: política de governança federal",
        ],

        armadilhas: [
          {
            titulo: "Confundir Governança com Governabilidade",
            descricao:
              "Governança = COMO se governa (capacidade). Governabilidade = SE É POSSÍVEL governar (condições políticas).",
            dica: "GoverNANÇA = gerêNCIA (como administrar). GoverNABILIDADE = viABILIDADE (se é viável).",
          },
          {
            titulo: "Achar que NGP eliminou a burocracia",
            descricao:
              "A NGP corrigiu DISFUNÇÕES da burocracia, mas manteve princípios como legalidade, impessoalidade e concurso público.",
            dica: "NGP não é anti-burocrática; é pós-burocrática (evolução, não substituição).",
          },
          {
            titulo: "Confundir eficiência com eficácia",
            descricao:
              "Eficiência = fazer bem (custo-benefício). Eficácia = atingir metas. Efetividade = impacto na sociedade.",
            dica: "Pode ser eficaz sem ser eficiente (alcança meta gastando muito).",
          },
          {
            titulo: "Inverter o tipo de controle",
            descricao:
              "Modelo burocrático = controle PRÉVIO (a priori). Modelo gerencial = controle POSTERIOR (a posteriori).",
            dica: "Gerencial controla DEPOIS (resultados). Burocrático controla ANTES (processos).",
          },
        ],

        mnemonicos: [
          {
            termo: "TIPA",
            significado:
              "Transparência, Integridade, Participação, Accountability",
            frase:
              "Pilares da governança: TIPA (um governo com TIPA de qualidade)",
          },
          {
            termo: "3 Es",
            significado: "Eficiência, Eficácia, Efetividade",
            frase:
              "Os 3 Es da avaliação: Eficiência (como), Eficácia (o quê), Efetividade (impacto)",
          },
          {
            termo: "GOVERNANÇA-COMO",
            significado: "Governança = Como se governa",
            frase:
              "GoverNANÇA começa com a mesma sílaba de NANAGEM (gerenciamento) = COMO",
          },
          {
            termo: "APRI-POST",
            significado: "Burocrático=A Priori, Gerencial=A Posteriori",
            frase:
              "Buro controla Antes (A Priori), Gerencial controla dePoiS (Posteriori)",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-10-1",
            frente: "Qual a diferença entre GOVERNANÇA e GOVERNABILIDADE?",
            verso:
              "**GOVERNANÇA**:\n- COMO se governa\n- Capacidade técnica/gerencial\n- Mecanismos de gestão\n- Dimensão administrativa\n\n**GOVERNABILIDADE**:\n- SE É POSSÍVEL governar\n- Condições políticas\n- Legitimidade e apoio\n- Dimensão política",
            tags: ["governança", "governabilidade", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-2",
            frente: "Quais são os pilares da boa governança pública?",
            verso:
              "**TIPA:**\n\n1. **T**ransparência (disclosure)\n   → Divulgação de informações\n\n2. **I**ntegridade\n   → Ética e probidade\n\n3. **P**articipação\n   → Envolvimento da sociedade\n\n4. **A**ccountability\n   → Responsabilização",
            tags: ["governança", "pilares"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-3",
            frente:
              "Qual a diferença entre EFICIÊNCIA, EFICÁCIA e EFETIVIDADE?",
            verso:
              "**EFICIÊNCIA**:\n→ Fazer CERTO (relação custo-benefício)\n→ Usar menos recursos\n\n**EFICÁCIA**:\n→ Fazer a COISA CERTA (atingir metas)\n→ Alcançar objetivos\n\n**EFETIVIDADE**:\n→ Causar IMPACTO (transformação social)\n→ Resolver o problema",
            tags: ["eficiência", "eficácia", "efetividade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-4",
            frente: "O que é a Gestão por Resultados?",
            verso:
              "Modelo que foca em **resultados** (outputs e outcomes), não em processos.\n\nCaracterísticas:\n- Controle A POSTERIORI\n- Avaliação por desempenho\n- Indicadores e metas\n- Contrato de gestão\n\nOposto do modelo burocrático (controle a priori/prévio).",
            tags: ["gestão por resultados", "conceito"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-5",
            frente: "O que foi o PDRAE e quem foi seu autor?",
            verso:
              "**PDRAE** = Plano Diretor da Reforma do Aparelho do Estado (1995)\n\n**Autor**: Luiz Carlos BRESSER-PEREIRA\n\n**Governo**: FHC\n\n**Objetivo**: Implementar a Reforma Gerencial no Brasil\n\n**Marco legal**: EC 19/1998",
            tags: ["PDRAE", "Bresser-Pereira"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-6",
            frente: "O que é o Contrato de Gestão (art. 37, §8º, CF)?",
            verso:
              "Acordo para **ampliar autonomia** de órgãos/entidades em troca de **metas de desempenho**.\n\nElementos:\n- Metas a cumprir\n- Indicadores de avaliação\n- Prazo determinado\n- Ampliação de autonomia (gerencial, orçamentária, financeira)\n\nUsado em: OS, Agências Executivas",
            tags: ["contrato de gestão", "art. 37"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-7",
            frente: "Qual tipo de controle predomina no modelo GERENCIAL?",
            verso:
              "Controle **A POSTERIORI** (posterior)\n\n→ Foco nos RESULTADOS\n→ Avaliação DEPOIS da execução\n→ Indicadores de desempenho\n\n(Diferente do modelo BUROCRÁTICO que usa controle A PRIORI = antes/prévio)",
            tags: ["controle", "gerencial"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-10-8",
            frente: "O que são Organizações Sociais (OS)?",
            verso:
              '**Lei 9.637/1998**\n\nEntidades **privadas sem fins lucrativos** que:\n- Recebem qualificação do Poder Público\n- Celebram **contrato de gestão**\n- Recebem recursos públicos\n- Atuam em: saúde, educação, cultura, ciência, meio ambiente\n\nÉ a "publicização" de serviços não-exclusivos.',
            tags: ["OS", "organizações sociais"],
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
            id: "ap-q-10-1",
            enunciado:
              "A capacidade que um governo possui para formular e implementar políticas públicas de forma eficiente, articulando-se com a sociedade, refere-se ao conceito de:",
            alternativas: [
              { letra: "A", texto: "governabilidade." },
              { letra: "B", texto: "governança." },
              { letra: "C", texto: "accountability." },
              { letra: "D", texto: "compliance." },
              { letra: "E", texto: "transparência." },
            ],
            gabarito: "B",
            justificativa:
              "GOVERNANÇA refere-se à capacidade de COMO governar (formular e implementar políticas). GOVERNABILIDADE refere-se às CONDIÇÕES políticas para governar (legitimidade, apoio).",
            dificuldade: "Fácil",
            competencia: "Governança",
            banca: "IADES",
            tags: ["governança", "conceito"],
          },
          {
            id: "ap-q-10-2",
            enunciado:
              "Na gestão por resultados, o tipo de controle predominante é o controle:",
            alternativas: [
              { letra: "A", texto: "prévio (a priori)." },
              { letra: "B", texto: "hierárquico." },
              { letra: "C", texto: "posterior (a posteriori)." },
              { letra: "D", texto: "de conformidade." },
              { letra: "E", texto: "burocrático." },
            ],
            gabarito: "C",
            justificativa:
              "A gestão por resultados utiliza controle A POSTERIORI (após a execução), focando em resultados alcançados. O controle a priori é característico do modelo burocrático.",
            dificuldade: "Fácil",
            competencia: "Gestão por resultados",
            banca: "IADES",
            tags: ["controle", "a posteriori"],
          },
          {
            id: "ap-q-10-3",
            enunciado:
              "O Plano Diretor da Reforma do Aparelho do Estado (PDRAE), de 1995, foi elaborado por:",
            alternativas: [
              { letra: "A", texto: "Max Weber." },
              { letra: "B", texto: "Luiz Carlos Bresser-Pereira." },
              { letra: "C", texto: "Woodrow Wilson." },
              { letra: "D", texto: "Frederick Taylor." },
              { letra: "E", texto: "Henry Fayol." },
            ],
            gabarito: "B",
            justificativa:
              "O PDRAE foi elaborado por BRESSER-PEREIRA, Ministro da Administração Federal e Reforma do Estado (MARE) no governo FHC.",
            dificuldade: "Fácil",
            competencia: "PDRAE",
            banca: "IADES",
            tags: ["PDRAE", "Bresser-Pereira"],
          },
          {
            id: "ap-q-10-4",
            enunciado: "São pilares da boa governança pública, EXCETO:",
            alternativas: [
              { letra: "A", texto: "transparência." },
              { letra: "B", texto: "accountability." },
              { letra: "C", texto: "participação." },
              { letra: "D", texto: "centralização." },
              { letra: "E", texto: "integridade." },
            ],
            gabarito: "D",
            justificativa:
              "Os pilares da governança são: Transparência, Integridade, Participação e Accountability. CENTRALIZAÇÃO não é pilar da governança; pelo contrário, a descentralização é característica da boa governança.",
            dificuldade: "Fácil",
            competencia: "Pilares da governança",
            banca: "IADES",
            tags: ["governança", "pilares"],
          },
          {
            id: "ap-q-10-5",
            enunciado:
              "A relação entre os recursos utilizados e os produtos obtidos caracteriza o conceito de:",
            alternativas: [
              { letra: "A", texto: "eficácia." },
              { letra: "B", texto: "efetividade." },
              { letra: "C", texto: "economicidade." },
              { letra: "D", texto: "eficiência." },
              { letra: "E", texto: "legitimidade." },
            ],
            gabarito: "D",
            justificativa:
              "EFICIÊNCIA é a relação entre insumos (recursos) e produtos (outputs). É fazer mais com menos. Eficácia é atingir metas; Efetividade é causar impacto.",
            dificuldade: "Média",
            competencia: "Eficiência",
            banca: "IADES",
            tags: ["eficiência", "conceito"],
          },
          {
            id: "ap-q-10-6",
            enunciado:
              "O instrumento previsto no art. 37, §8º, da Constituição Federal, que amplia a autonomia de órgãos e entidades em troca de metas de desempenho, é denominado:",
            alternativas: [
              { letra: "A", texto: "termo de parceria." },
              { letra: "B", texto: "convênio administrativo." },
              { letra: "C", texto: "contrato de gestão." },
              { letra: "D", texto: "acordo de cooperação." },
              { letra: "E", texto: "termo de colaboração." },
            ],
            gabarito: "C",
            justificativa:
              "O art. 37, §8º, CF prevê o CONTRATO DE GESTÃO como instrumento para ampliar autonomia mediante metas de desempenho. É usado com OS e Agências Executivas.",
            dificuldade: "Média",
            competencia: "Contrato de gestão",
            banca: "IADES",
            tags: ["contrato de gestão", "CF"],
          },
          {
            id: "ap-q-10-7",
            enunciado:
              "As Organizações Sociais (OS), previstas na Lei nº 9.637/1998, celebram com o Poder Público:",
            alternativas: [
              { letra: "A", texto: "termo de parceria." },
              { letra: "B", texto: "contrato de gestão." },
              { letra: "C", texto: "termo de fomento." },
              { letra: "D", texto: "acordo de cooperação." },
              { letra: "E", texto: "convênio." },
            ],
            gabarito: "B",
            justificativa:
              "As Organizações Sociais celebram CONTRATO DE GESTÃO com o Poder Público (Lei 9.637/98). O termo de parceria é celebrado com OSCIPs (Lei 9.790/99).",
            dificuldade: "Média",
            competencia: "OS",
            banca: "IADES",
            tags: ["OS", "contrato de gestão"],
          },
          {
            id: "ap-q-10-8",
            enunciado:
              "As condições sistêmicas que permitem ao governo exercer suas funções, como legitimidade e apoio político, referem-se ao conceito de:",
            alternativas: [
              { letra: "A", texto: "governança." },
              { letra: "B", texto: "governabilidade." },
              { letra: "C", texto: "accountability." },
              { letra: "D", texto: "compliance." },
              { letra: "E", texto: "efetividade." },
            ],
            gabarito: "B",
            justificativa:
              "GOVERNABILIDADE refere-se às CONDIÇÕES para governar (legitimidade, apoio político, coalizão). GOVERNANÇA refere-se à CAPACIDADE técnica de implementar políticas.",
            dificuldade: "Média",
            competencia: "Governabilidade",
            banca: "IADES",
            tags: ["governabilidade", "conceito"],
          },
          {
            id: "ap-q-10-9",
            enunciado:
              "A Nova Gestão Pública (NGP) caracteriza-se principalmente pelo:",
            alternativas: [
              { letra: "A", texto: "foco em processos e conformidade." },
              { letra: "B", texto: "controle prévio das atividades." },
              { letra: "C", texto: "foco em resultados e cidadão-cliente." },
              { letra: "D", texto: "centralização das decisões." },
              { letra: "E", texto: "rigidez nos procedimentos." },
            ],
            gabarito: "C",
            justificativa:
              "A NGP tem como características principais: foco em RESULTADOS (não processos), visão do CIDADÃO-CLIENTE, descentralização e flexibilização. O controle é a posteriori.",
            dificuldade: "Fácil",
            competencia: "NGP",
            banca: "IADES",
            tags: ["NGP", "características"],
          },
          {
            id: "ap-q-10-10",
            enunciado:
              "O impacto real das políticas públicas na sociedade, ou seja, a transformação efetiva na realidade social, denomina-se:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "produtividade." },
            ],
            gabarito: "C",
            justificativa:
              "EFETIVIDADE é o impacto real na sociedade (outcomes). Eficiência é a relação custo-benefício. Eficácia é o alcance de metas (outputs).",
            dificuldade: "Média",
            competencia: "Efetividade",
            banca: "IADES",
            tags: ["efetividade", "impacto"],
          },
        ],
      },
    },
    {
      id: "ap-topico-11",
      numero: 11,
      titulo: "Planejamento Estratégico no Setor Público",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Planejamento Estratégico

O **planejamento estratégico** é um processo sistemático de definição de **objetivos de longo prazo**, identificação de **estratégias** e alocação de **recursos** para alcançá-los.

### Níveis de Planejamento

| Nível | Característica | Horizonte |
|-------|----------------|-----------|
| **Estratégico** | Global, alta direção | Longo prazo |
| **Tático** | Departamental | Médio prazo |
| **Operacional** | Execução, tarefas | Curto prazo |

### Etapas do Planejamento Estratégico

| Etapa | Descrição |
|-------|-----------|
| **1. Diagnóstico** | Análise interna e externa (SWOT) |
| **2. Definição de missão/visão** | Identidade e futuro desejado |
| **3. Objetivos** | Metas a alcançar |
| **4. Formulação de estratégias** | Como alcançar os objetivos |
| **5. Implementação** | Execução do plano |
| **6. Controle e avaliação** | Monitoramento e ajustes |

### Instrumentos no Setor Público

- PPA (Plano Plurianual) - 4 anos
- LDO (Lei de Diretrizes Orçamentárias) - 1 ano
- LOA (Lei Orçamentária Anual) - 1 ano

### Para IADES - Memorizar:
- Estratégico = longo prazo, alta direção
- Tático = médio prazo, departamentos
- Operacional = curto prazo, execução
- SWOT: Forças, Fraquezas, Oportunidades, Ameaças
- BSC: 4 perspectivas (financeira, cliente, processos, aprendizado)
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito e Importância

O **planejamento estratégico** no setor público é o processo pelo qual a organização define sua **missão**, estabelece **objetivos** e formula **estratégias** para alcançá-los, considerando o ambiente interno e externo.

#### 1.1 Por que Planejar?

- Direcionar esforços para resultados
- Otimizar recursos escassos
- Antecipar mudanças
- Alinhar a organização
- Melhorar a tomada de decisão
- Prestar contas à sociedade

### 2. Níveis de Planejamento

#### 2.1 Planejamento Estratégico

| Característica | Descrição |
|----------------|-----------|
| **Quem** | Alta direção |
| **Abrangência** | Toda a organização |
| **Horizonte** | Longo prazo (3-10 anos) |
| **Foco** | Objetivos globais |
| **Conteúdo** | Genérico, sintético |

**Exemplos no setor público:**
- Plano de governo
- PPA (Plano Plurianual)
- Plano Estratégico institucional

#### 2.2 Planejamento Tático

| Característica | Descrição |
|----------------|-----------|
| **Quem** | Gerência média |
| **Abrangência** | Departamental |
| **Horizonte** | Médio prazo (1-3 anos) |
| **Foco** | Objetivos setoriais |
| **Conteúdo** | Menos genérico |

**Exemplos:**
- Plano de marketing
- Plano de recursos humanos
- Plano de TI

#### 2.3 Planejamento Operacional

| Característica | Descrição |
|----------------|-----------|
| **Quem** | Supervisão, execução |
| **Abrangência** | Atividades específicas |
| **Horizonte** | Curto prazo (até 1 ano) |
| **Foco** | Tarefas e atividades |
| **Conteúdo** | Detalhado, analítico |

**Exemplos:**
- Cronograma de atividades
- Plano de trabalho
- Procedimentos operacionais

### 3. Etapas do Planejamento Estratégico

#### 3.1 Diagnóstico Estratégico

##### a) Análise Interna
- **Forças (Strengths):** pontos fortes da organização
- **Fraquezas (Weaknesses):** pontos fracos

##### b) Análise Externa
- **Oportunidades (Opportunities):** fatores externos favoráveis
- **Ameaças (Threats):** fatores externos desfavoráveis

##### c) Matriz SWOT

| | Fatores Positivos | Fatores Negativos |
|-|-------------------|-------------------|
| **Interno** | Forças | Fraquezas |
| **Externo** | Oportunidades | Ameaças |

#### 3.2 Definição de Missão, Visão e Valores

##### a) Missão
> Razão de ser da organização. O que ela faz, para quem e por quê.

**Exemplo:** "Promover a saúde da população goiana com qualidade e eficiência."

##### b) Visão
> Estado futuro desejado. Onde a organização quer chegar.

**Exemplo:** "Ser referência nacional em vigilância sanitária até 2030."

##### c) Valores
> Princípios que orientam a conduta organizacional.

**Exemplos:** Ética, transparência, eficiência, respeito.

#### 3.3 Definição de Objetivos

Os objetivos devem ser **SMART:**
- **S**pecific (Específico)
- **M**easurable (Mensurável)
- **A**chievable (Alcançável)
- **R**elevant (Relevante)
- **T**ime-bound (Temporal)

#### 3.4 Formulação de Estratégias

Definição de como alcançar os objetivos:
- Programas
- Projetos
- Ações

#### 3.5 Implementação

- Alocação de recursos
- Definição de responsabilidades
- Cronograma
- Comunicação

#### 3.6 Controle e Avaliação

- Indicadores de desempenho
- Metas
- Monitoramento
- Ações corretivas

### 4. Ferramentas de Planejamento

#### 4.1 Balanced Scorecard (BSC)

Sistema de medição de desempenho com 4 perspectivas:

| Perspectiva | Pergunta-chave |
|-------------|----------------|
| **Financeira** | Como estamos para os contribuintes? |
| **Cliente/Cidadão** | Como os cidadãos nos veem? |
| **Processos Internos** | Em que devemos ser excelentes? |
| **Aprendizado e Crescimento** | Como continuar melhorando? |

#### 4.2 Análise PESTEL

Análise do macroambiente:
- **P**olítico
- **E**conômico
- **S**ocial
- **T**ecnológico
- **E**cológico (ambiental)
- **L**egal

#### 4.3 5 Forças de Porter

Análise competitiva:
1. Rivalidade entre concorrentes
2. Ameaça de novos entrantes
3. Ameaça de substitutos
4. Poder de barganha dos fornecedores
5. Poder de barganha dos clientes

### 5. Planejamento no Setor Público Brasileiro

#### 5.1 Sistema de Planejamento

A CF/88 estabelece o ciclo orçamentário:

| Instrumento | Prazo | Conteúdo |
|-------------|-------|----------|
| **PPA** | 4 anos | Diretrizes, objetivos, metas |
| **LDO** | 1 ano | Metas e prioridades |
| **LOA** | 1 ano | Orçamento detalhado |

#### 5.2 Plano Plurianual (PPA)

- Vigência: 4 anos
- Inicia no 2º ano de governo
- Estabelece programas e ações
- Regionaliza investimentos
- Base para LDO e LOA

#### 5.3 Integração Plano-Orçamento

PPA → LDO → LOA → Execução → Avaliação

### 6. Desafios no Setor Público

#### 6.1 Dificuldades

| Desafio | Descrição |
|---------|-----------|
| Descontinuidade | Mudanças de governo |
| Rigidez | Limitações legais |
| Política | Interferências políticas |
| Cultura | Resistência a mudanças |
| Recursos | Restrições orçamentárias |

#### 6.2 Boas Práticas

- Participação social
- Transparência
- Indicadores claros
- Monitoramento constante
- Flexibilidade para ajustes

### 7. Indicadores de Desempenho

#### 7.1 Tipos de Indicadores

| Tipo | O que mede | Exemplo |
|------|------------|---------|
| **Eficiência** | Recursos/produtos | Custo por atendimento |
| **Eficácia** | Metas/objetivos | % de metas alcançadas |
| **Efetividade** | Impacto/sociedade | Redução de doenças |
| **Economicidade** | Custos | Economia obtida |

#### 7.2 Construção de Indicadores

- Fórmula clara
- Fonte de dados confiável
- Periodicidade definida
- Meta estabelecida
- Responsável identificado

### 8. Aplicação Prática

#### 8.1 Planejamento na Vigilância Sanitária

| Elemento | Exemplo |
|----------|---------|
| Missão | Proteger a saúde da população |
| Visão | Ser referência em vigilância |
| Objetivo | Aumentar inspeções em 20% |
| Estratégia | Capacitar fiscais, ampliar equipe |
| Indicador | Nº de inspeções realizadas |
| Meta | 1.000 inspeções/ano |
        `,

        pontosChave: [
          "Planejamento estratégico: longo prazo, alta direção, visão global",
          "Planejamento tático: médio prazo, departamental",
          "Planejamento operacional: curto prazo, execução, tarefas",
          "SWOT: Forças, Fraquezas (interno) + Oportunidades, Ameaças (externo)",
          "Missão: razão de ser. Visão: futuro desejado. Valores: princípios",
          "BSC: 4 perspectivas (financeira, cliente, processos, aprendizado)",
          "Objetivos SMART: Específico, Mensurável, Alcançável, Relevante, Temporal",
          "PPA: 4 anos. LDO: 1 ano. LOA: 1 ano",
          "Eficiência: recursos/produtos. Eficácia: metas. Efetividade: impacto",
          "Controle e avaliação: indicadores, metas, monitoramento",
        ],

        armadilhas: [
          {
            titulo: "Confundir os níveis de planejamento",
            descricao:
              "Estratégico é LONGO prazo e global. Tático é MÉDIO prazo e departamental. Operacional é CURTO prazo e específico.",
            dica: "Estratégico = estratégia global. Tático = tática setorial. Operacional = operações do dia.",
          },
          {
            titulo: "Inverter análise interna e externa na SWOT",
            descricao:
              "INTERNO = Forças e Fraquezas (dependem da organização). EXTERNO = Oportunidades e Ameaças (não controláveis).",
            dica: "FOFA: Forças/Fraquezas = DENTRO. Oportunidades/Ameaças = FORA.",
          },
          {
            titulo: "Confundir missão com visão",
            descricao:
              "MISSÃO = razão de ser ATUAL. VISÃO = onde quer CHEGAR no futuro.",
            dica: "Missão = o que sou. Visão = o que quero ser.",
          },
          {
            titulo: "Trocar eficiência, eficácia e efetividade",
            descricao:
              "Eficiência = fazer certo (recursos). Eficácia = fazer a coisa certa (metas). Efetividade = causar impacto.",
            dica: "3 Es: eficiência (como), eficácia (o quê), efetividade (resultado).",
          },
        ],

        mnemonicos: [
          {
            termo: "FOFA",
            significado: "Forças, Oportunidades, Fraquezas, Ameaças",
            frase:
              "FOFA = SWOT em português (Forças-Fraquezas interno, Oportunidades-Ameaças externo)",
          },
          {
            termo: "SMART",
            significado:
              "Específico, Mensurável, Alcançável, Relevante, Temporal",
            frase: "Objetivo SMART é objetivo bem definido",
          },
          {
            termo: "ETO",
            significado: "Estratégico, Tático, Operacional",
            frase:
              "ETO: do mais alto (Estratégico) ao mais baixo (Operacional)",
          },
          {
            termo: "BSC-4P",
            significado: "Financeira, Cliente, Processos, Aprendizado",
            frase: "BSC tem 4 Perspectivas: FCPA",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-11-1",
            frente: "Quais são os 3 níveis de planejamento organizacional?",
            verso:
              "**1. ESTRATÉGICO:**\n→ Longo prazo (3-10 anos)\n→ Alta direção\n→ Visão global\n\n**2. TÁTICO:**\n→ Médio prazo (1-3 anos)\n→ Gerência média\n→ Departamental\n\n**3. OPERACIONAL:**\n→ Curto prazo (até 1 ano)\n→ Supervisão\n→ Tarefas específicas",
            tags: ["níveis", "planejamento"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-2",
            frente: "O que é a análise SWOT e o que cada letra significa?",
            verso:
              "**SWOT** = Ferramenta de diagnóstico estratégico\n\n**Ambiente INTERNO:**\n- **S**trengths (Forças)\n- **W**eaknesses (Fraquezas)\n\n**Ambiente EXTERNO:**\n- **O**pportunities (Oportunidades)\n- **T**hreats (Ameaças)\n\nEm português: FOFA",
            tags: ["SWOT", "diagnóstico"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-3",
            frente: "Qual a diferença entre MISSÃO e VISÃO?",
            verso:
              "**MISSÃO:**\n→ Razão de ser da organização\n→ O que ela FAZ, para QUEM, POR QUÊ\n→ Presente/permanente\n\n**VISÃO:**\n→ Estado futuro DESEJADO\n→ Onde a organização QUER CHEGAR\n→ Inspiradora, desafiadora\n\n**Valores:** princípios que orientam a conduta",
            tags: ["missão", "visão"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-4",
            frente: "O que significa um objetivo SMART?",
            verso:
              '**S** - Specific (Específico)\n**M** - Measurable (Mensurável)\n**A** - Achievable (Alcançável)\n**R** - Relevant (Relevante)\n**T** - Time-bound (Temporal)\n\nExemplo: "Aumentar as inspeções sanitárias em 20% até dezembro de 2025."',
            tags: ["SMART", "objetivos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-5",
            frente: "Quais são as 4 perspectivas do Balanced Scorecard (BSC)?",
            verso:
              "**1. Financeira/Orçamentária:**\n→ Como estamos para contribuintes?\n\n**2. Cliente/Cidadão:**\n→ Como os cidadãos nos veem?\n\n**3. Processos Internos:**\n→ Em que devemos ser excelentes?\n\n**4. Aprendizado e Crescimento:**\n→ Como continuar melhorando?",
            tags: ["BSC", "perspectivas"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-6",
            frente:
              "Quais são os instrumentos do ciclo orçamentário brasileiro (CF/88)?",
            verso:
              "**PPA** (Plano Plurianual):\n→ 4 anos\n→ Diretrizes, objetivos, metas\n\n**LDO** (Lei de Diretrizes Orçamentárias):\n→ 1 ano\n→ Metas e prioridades\n\n**LOA** (Lei Orçamentária Anual):\n→ 1 ano\n→ Orçamento detalhado\n\nFluxo: PPA → LDO → LOA",
            tags: ["PPA", "LDO", "LOA"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-7",
            frente:
              "Qual a diferença entre eficiência, eficácia e efetividade?",
            verso:
              "**EFICIÊNCIA:**\n→ Relação insumos/produtos\n→ Fazer CERTO as coisas\n→ Uso racional de recursos\n\n**EFICÁCIA:**\n→ Alcance de metas/objetivos\n→ Fazer a COISA certa\n→ Resultados planejados\n\n**EFETIVIDADE:**\n→ Impacto na sociedade\n→ Transformação real\n→ Outcomes",
            tags: ["eficiência", "eficácia", "efetividade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-11-8",
            frente: "Quais são as etapas do planejamento estratégico?",
            verso:
              "**1. Diagnóstico** (análise SWOT)\n\n**2. Definição de missão/visão/valores**\n\n**3. Definição de objetivos** (SMART)\n\n**4. Formulação de estratégias**\n\n**5. Implementação** (execução)\n\n**6. Controle e avaliação** (indicadores, monitoramento)",
            tags: ["etapas", "processo"],
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
            id: "ap-q-11-1",
            enunciado:
              "O planejamento que envolve a alta direção, tem visão global da organização e horizonte de longo prazo é denominado:",
            alternativas: [
              { letra: "A", texto: "planejamento operacional." },
              { letra: "B", texto: "planejamento tático." },
              { letra: "C", texto: "planejamento estratégico." },
              { letra: "D", texto: "planejamento funcional." },
              { letra: "E", texto: "planejamento contingencial." },
            ],
            gabarito: "C",
            justificativa:
              "O planejamento ESTRATÉGICO é de longo prazo, envolve a alta direção e tem visão global da organização. O tático é médio prazo/departamental. O operacional é curto prazo/tarefas.",
            dificuldade: "Fácil",
            competencia: "Níveis de planejamento",
            banca: "IADES",
            tags: ["estratégico", "níveis"],
          },
          {
            id: "ap-q-11-2",
            enunciado:
              "Na análise SWOT, as oportunidades e ameaças referem-se ao ambiente:",
            alternativas: [
              { letra: "A", texto: "interno da organização." },
              { letra: "B", texto: "externo à organização." },
              { letra: "C", texto: "departamental." },
              { letra: "D", texto: "operacional." },
              { letra: "E", texto: "funcional." },
            ],
            gabarito: "B",
            justificativa:
              "Na SWOT: INTERNO = Forças e Fraquezas (controláveis). EXTERNO = Oportunidades e Ameaças (não controláveis pela organização).",
            dificuldade: "Fácil",
            competencia: "Análise SWOT",
            banca: "IADES",
            tags: ["SWOT", "externo"],
          },
          {
            id: "ap-q-11-3",
            enunciado:
              "A razão de ser de uma organização, que define o que ela faz e para quem, denomina-se:",
            alternativas: [
              { letra: "A", texto: "visão." },
              { letra: "B", texto: "missão." },
              { letra: "C", texto: "objetivo." },
              { letra: "D", texto: "meta." },
              { letra: "E", texto: "estratégia." },
            ],
            gabarito: "B",
            justificativa:
              "MISSÃO é a razão de ser da organização (o que faz, para quem, por quê). VISÃO é o estado futuro desejado.",
            dificuldade: "Fácil",
            competencia: "Missão e visão",
            banca: "IADES",
            tags: ["missão", "conceito"],
          },
          {
            id: "ap-q-11-4",
            enunciado:
              "O Balanced Scorecard (BSC) contempla quantas perspectivas?",
            alternativas: [
              { letra: "A", texto: "2 perspectivas." },
              { letra: "B", texto: "3 perspectivas." },
              { letra: "C", texto: "4 perspectivas." },
              { letra: "D", texto: "5 perspectivas." },
              { letra: "E", texto: "6 perspectivas." },
            ],
            gabarito: "C",
            justificativa:
              "O BSC possui 4 PERSPECTIVAS: Financeira, Cliente/Cidadão, Processos Internos e Aprendizado/Crescimento.",
            dificuldade: "Fácil",
            competencia: "BSC",
            banca: "IADES",
            tags: ["BSC", "perspectivas"],
          },
          {
            id: "ap-q-11-5",
            enunciado: "O Plano Plurianual (PPA) tem vigência de:",
            alternativas: [
              { letra: "A", texto: "1 ano." },
              { letra: "B", texto: "2 anos." },
              { letra: "C", texto: "3 anos." },
              { letra: "D", texto: "4 anos." },
              { letra: "E", texto: "5 anos." },
            ],
            gabarito: "D",
            justificativa:
              "O PPA (Plano Plurianual) tem vigência de 4 ANOS, iniciando no segundo ano de governo e terminando no primeiro ano do governo seguinte.",
            dificuldade: "Fácil",
            competencia: "PPA",
            banca: "IADES",
            tags: ["PPA", "vigência"],
          },
          {
            id: "ap-q-11-6",
            enunciado:
              "A relação entre os recursos utilizados e os produtos obtidos refere-se ao conceito de:",
            alternativas: [
              { letra: "A", texto: "eficácia." },
              { letra: "B", texto: "efetividade." },
              { letra: "C", texto: "eficiência." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "produtividade." },
            ],
            gabarito: "C",
            justificativa:
              "EFICIÊNCIA é a relação entre insumos (recursos) e produtos. Eficácia é o alcance de metas. Efetividade é o impacto na sociedade.",
            dificuldade: "Média",
            competencia: "Eficiência",
            banca: "IADES",
            tags: ["eficiência", "conceito"],
          },
          {
            id: "ap-q-11-7",
            enunciado:
              "No critério SMART para definição de objetivos, a letra M significa:",
            alternativas: [
              { letra: "A", texto: "Metodológico." },
              { letra: "B", texto: "Mensurável." },
              { letra: "C", texto: "Motivador." },
              { letra: "D", texto: "Material." },
              { letra: "E", texto: "Multidimensional." },
            ],
            gabarito: "B",
            justificativa:
              "SMART: S(Specific/Específico), M(Measurable/MENSURÁVEL), A(Achievable/Alcançável), R(Relevant/Relevante), T(Time-bound/Temporal).",
            dificuldade: "Média",
            competencia: "SMART",
            banca: "IADES",
            tags: ["SMART", "objetivos"],
          },
          {
            id: "ap-q-11-8",
            enunciado:
              "O planejamento que se caracteriza pelo médio prazo e foco departamental é o:",
            alternativas: [
              { letra: "A", texto: "estratégico." },
              { letra: "B", texto: "tático." },
              { letra: "C", texto: "operacional." },
              { letra: "D", texto: "contingencial." },
              { letra: "E", texto: "normativo." },
            ],
            gabarito: "B",
            justificativa:
              "O planejamento TÁTICO é de médio prazo (1-3 anos), departamental, elaborado pela gerência média. Traduz o estratégico em ações setoriais.",
            dificuldade: "Fácil",
            competencia: "Planejamento tático",
            banca: "IADES",
            tags: ["tático", "níveis"],
          },
          {
            id: "ap-q-11-9",
            enunciado:
              "Na análise SWOT, os pontos fortes da organização são denominados:",
            alternativas: [
              { letra: "A", texto: "oportunidades." },
              { letra: "B", texto: "ameaças." },
              { letra: "C", texto: "fraquezas." },
              { letra: "D", texto: "forças." },
              { letra: "E", texto: "estratégias." },
            ],
            gabarito: "D",
            justificativa:
              "Na SWOT, os pontos FORTES internos são chamados de FORÇAS (Strengths). Pontos fracos internos são Fraquezas (Weaknesses).",
            dificuldade: "Fácil",
            competencia: "SWOT",
            banca: "IADES",
            tags: ["SWOT", "forças"],
          },
          {
            id: "ap-q-11-10",
            enunciado:
              "O impacto real das ações governamentais na transformação da realidade social refere-se ao conceito de:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "legalidade." },
            ],
            gabarito: "C",
            justificativa:
              "EFETIVIDADE é o impacto real na sociedade (outcomes). Mede se as ações de fato transformaram a realidade social, para além de atingir metas (eficácia) ou usar bem os recursos (eficiência).",
            dificuldade: "Média",
            competencia: "Efetividade",
            banca: "IADES",
            tags: ["efetividade", "impacto"],
          },
        ],
      },
    },
    {
      id: "ap-topico-12",
      numero: 12,
      titulo: "Indicadores de Desempenho",
      conteudo: {
        resumo: `
## Resumo Rápido

### O que são Indicadores de Desempenho?

| Aspecto | Definição |
|---------|-----------|
| **Conceito** | Métricas que quantificam resultados e processos organizacionais |
| **Finalidade** | Medir, monitorar e avaliar o desempenho institucional |
| **Natureza** | Instrumento de gestão para tomada de decisão |

### Os 6Es do Desempenho (Cadeia de Valor)

| Dimensão | O que mede | Pergunta-chave |
|----------|------------|----------------|
| **Eficiência** | Relação insumos/produtos | Usamos bem os recursos? |
| **Eficácia** | Alcance das metas | Atingimos os objetivos? |
| **Efetividade** | Impacto na sociedade | Transformamos a realidade? |
| **Economicidade** | Otimização dos custos | Gastamos menos? |
| **Execução** | Realização física | Entregamos o previsto? |
| **Excelência** | Qualidade dos serviços | O usuário está satisfeito? |

### Atributos de um Bom Indicador (SMART)
- **S**pecific (Específico)
- **M**easurable (Mensurável)
- **A**chievable (Alcançável)
- **R**elevant (Relevante)
- **T**ime-bound (Temporal)
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Indicadores de Desempenho

**Indicadores de desempenho** são instrumentos de gestão essenciais para o monitoramento e avaliação das organizações públicas. Permitem **medir**, de forma objetiva, aspectos relevantes da atuação governamental.

#### Definição Técnica
> Indicador é uma representação quantitativa ou qualitativa que permite observar o comportamento de um fenômeno ao longo do tempo, comparando-o com padrões ou metas estabelecidas.

#### Por que são importantes na Administração Pública?
1. **Transparência**: prestação de contas à sociedade
2. **Melhoria contínua**: identificar pontos de aprimoramento
3. **Planejamento**: subsidiar decisões estratégicas
4. **Controle**: verificar cumprimento de metas do PPA
5. **Accountability**: responsabilização de gestores

### 2. Tipos de Indicadores

#### 2.1 Por Dimensão de Análise (6Es do Desempenho)

##### EFICIÊNCIA
**O que mede**: relação entre os insumos utilizados e os produtos gerados.

- Foco no **processo** (como fazer)
- Otimização de recursos
- "Fazer certo as coisas"

**Exemplos**:
- Custo por aluno matriculado
- Tempo médio de atendimento
- Gastos por fiscal de vigilância sanitária
- Processos analisados por servidor

##### EFICÁCIA
**O que mede**: grau de alcance das metas estabelecidas.

- Foco no **resultado** (o que fazer)
- Atingimento de objetivos
- "Fazer a coisa certa"

**Exemplos**:
- % de metas do PPA alcançadas
- Taxa de conclusão do curso
- Número de fiscalizações realizadas vs. planejadas
- Percentual de vacinação atingido

##### EFETIVIDADE
**O que mede**: impacto real na sociedade (outcomes/impactos).

- Foco no **impacto social**
- Transformação da realidade
- "Fazer a diferença"

**Exemplos**:
- Redução da mortalidade infantil
- Diminuição de surtos de intoxicação alimentar
- Melhoria no IDH
- Aumento da expectativa de vida

##### ECONOMICIDADE
**O que mede**: obtenção e uso de recursos com menor custo.

- Foco na **aquisição** de insumos
- Menor preço, mesma qualidade
- "Gastar menos"

**Exemplos**:
- Economia obtida em licitações
- Redução de custos operacionais
- Valor pago vs. preço de referência

##### EXECUÇÃO
**O que mede**: realização física e financeira das ações.

- Foco na **entrega** de produtos/serviços
- Cumprimento do cronograma
- "Entregar o prometido"

**Exemplos**:
- % de obras concluídas
- % do orçamento executado
- Quantidade de atendimentos realizados

##### EXCELÊNCIA
**O que mede**: qualidade dos produtos e serviços, satisfação do usuário.

- Foco na **qualidade** percebida
- Conformidade com padrões
- "Satisfazer o cidadão"

**Exemplos**:
- Índice de satisfação do usuário
- Tempo de espera
- Taxa de reclamações
- Avaliação do serviço

#### 2.2 Por Posição na Cadeia de Valor

| Tipo | Posição | O que mede |
|------|---------|------------|
| **Insumo** (Input) | Entrada | Recursos disponibilizados |
| **Processo** | Meio | Atividades de transformação |
| **Produto** (Output) | Saída | Bens e serviços entregues |
| **Resultado** (Outcome) | Impacto | Efeitos na sociedade |

**Exemplo na Vigilância Sanitária:**
- **Insumo**: número de fiscais, orçamento disponível
- **Processo**: tempo de análise de processos
- **Produto**: número de alvarás emitidos
- **Resultado**: redução de surtos de DTAs

### 3. Atributos de um Bom Indicador

#### Critérios SMART

| Critério | Significado | Exemplo |
|----------|-------------|---------|
| **Specific** | Claro e específico | "% de alvarás emitidos em até 30 dias" (não "agilidade") |
| **Measurable** | Pode ser medido | Dados disponíveis e confiáveis |
| **Achievable** | Meta realista | Desafiadora, mas possível |
| **Relevant** | Importa para a organização | Alinhado aos objetivos estratégicos |
| **Time-bound** | Prazo definido | Mensal, trimestral, anual |

#### Outros Atributos Desejáveis

| Atributo | Descrição |
|----------|-----------|
| **Comparabilidade** | Permite comparação temporal ou entre unidades |
| **Simplicidade** | Fácil compreensão e comunicação |
| **Sensibilidade** | Reage às mudanças do fenômeno |
| **Disponibilidade** | Dados acessíveis em tempo hábil |
| **Economicidade** | Custo de mensuração razoável |
| **Estabilidade** | Mantém a série histórica |
| **Auditabilidade** | Permite verificação e validação |

### 4. Componentes de um Indicador

Todo indicador deve ter os seguintes componentes definidos:

| Componente | Descrição | Exemplo |
|------------|-----------|---------|
| **Nome** | Denominação clara | Taxa de mortalidade infantil |
| **Fórmula** | Método de cálculo | (Óbitos <1 ano / Nascidos vivos) × 1000 |
| **Unidade de medida** | Escala | Por mil nascidos vivos |
| **Polaridade** | Se maior é melhor ou pior | Quanto menor, melhor |
| **Periodicidade** | Frequência de medição | Anual |
| **Meta** | Valor desejado | Reduzir para 10 por mil |
| **Fonte** | Origem dos dados | SIM/SINASC |
| **Responsável** | Quem apura | Coordenação de Epidemiologia |

### 5. Metas e Padrões de Referência

#### Tipos de Metas
1. **Meta histórica**: baseada no desempenho passado
2. **Meta normativa**: definida em lei ou regulamento
3. **Meta negociada**: acordada entre partes
4. **Meta de benchmark**: baseada em melhores práticas

#### Padrões de Comparação (Benchmarking)
- **Interno**: entre unidades da mesma organização
- **Competitivo**: com organizações similares
- **Funcional**: com funções similares em outros setores
- **Genérico**: melhores práticas do mercado

### 6. Sistema de Indicadores

#### Estruturação em Painéis (Dashboards)

| Nível | Indicadores | Usuários |
|-------|------------|----------|
| **Estratégico** | Poucos, de impacto | Alta direção |
| **Tático** | Intermediários | Gerentes |
| **Operacional** | Muitos, de processo | Equipes |

#### Balanced Scorecard (BSC) - Perspectivas

| Perspectiva | Pergunta-chave | Indicadores típicos |
|-------------|----------------|---------------------|
| **Financeira** | Estamos agregando valor? | ROI, economicidade |
| **Clientes** | Estamos satisfazendo? | Satisfação, tempo de espera |
| **Processos** | Onde devemos melhorar? | Eficiência, qualidade |
| **Aprendizado** | Estamos evoluindo? | Capacitação, inovação |

⚠️ **Adaptação ao setor público**: a perspectiva "financeira" é meio, não fim. A perspectiva "clientes/cidadãos" ganha centralidade.

### 7. Indicadores no Ciclo PDCA

| Fase | Uso dos Indicadores |
|------|---------------------|
| **Plan (Planejar)** | Definir indicadores e metas |
| **Do (Executar)** | Coletar dados e registrar |
| **Check (Verificar)** | Analisar desempenho vs. meta |
| **Act (Agir)** | Corrigir desvios, melhorar processos |

### 8. Indicadores na Vigilância Sanitária

#### Exemplos Práticos

| Tipo | Indicador | Fórmula |
|------|-----------|---------|
| **Eficiência** | Custo por inspeção | Custo total / nº de inspeções |
| **Eficácia** | Taxa de cumprimento do plano | Inspeções realizadas / planejadas × 100 |
| **Efetividade** | Redução de surtos DTAs | (Surtos ano atual - ano anterior) / ano anterior × 100 |
| **Qualidade** | % de processos sem inconsistências | Processos conformes / total × 100 |

#### Indicadores do Sistema Nacional de Vigilância Sanitária

1. **Cobertura de inspeções** em estabelecimentos de alto risco
2. **Tempo médio de análise** de petições
3. **Taxa de registro de produtos** em prazo legal
4. **Índice de conformidade** de produtos fiscalizados
5. **Notificações de eventos adversos** por 100 mil habitantes

### 9. Erros Comuns na Construção de Indicadores

| Erro | Problema | Solução |
|------|----------|---------|
| **Indicador vago** | "Melhorar o atendimento" | Definir métrica específica |
| **Excesso de indicadores** | Perda de foco | Priorizar os essenciais |
| **Indicador sem meta** | Não permite avaliar | Estabelecer meta e prazo |
| **Dados não confiáveis** | Decisões equivocadas | Validar fonte e coleta |
| **Foco apenas em resultados** | Ignora processos | Balancear tipos de indicadores |
| **Meta irreal** | Desmotivação | Negociar metas desafiadoras mas possíveis |

### 10. Indicadores e Gestão por Resultados

Na **Administração Pública Gerencial**, indicadores são fundamentais para:

1. **Contratualização de resultados** (contratos de gestão, termos de parceria)
2. **Avaliação de desempenho institucional** (gratificações, bônus)
3. **Accountability** (prestação de contas)
4. **Planejamento estratégico** (PPA, LDO, LOA)
5. **Orçamento por resultados** (vinculação recursos-resultados)

#### No Brasil: Instrumentos Legais
- **PPA** (Plano Plurianual): define indicadores dos programas
- **LRF** (Lei de Responsabilidade Fiscal): exige metas fiscais
- **TCU**: audita indicadores de desempenho
- **CGU**: avalia programas governamentais
        `,

        pontosChave: [
          "Indicadores de desempenho: métricas para medir, monitorar e avaliar resultados",
          "6Es: Eficiência, Eficácia, Efetividade, Economicidade, Execução, Excelência",
          "EFICIÊNCIA = relação insumos/produtos (fazer certo)",
          "EFICÁCIA = alcance de metas (fazer a coisa certa)",
          "EFETIVIDADE = impacto real na sociedade (fazer diferença)",
          "SMART: Específico, Mensurável, Alcançável, Relevante, Temporal",
          "Cadeia de valor: Insumo → Processo → Produto → Resultado",
          "BSC adapta-se ao setor público: cidadão no centro",
          "Indicadores subsidiam o ciclo PDCA de melhoria contínua",
          "PPA define indicadores dos programas governamentais",
        ],

        armadilhas: [
          {
            titulo: "Confundir eficiência com eficácia",
            descricao:
              "Eficiência = COMO fazer (usar bem os recursos). Eficácia = O QUE fazer (atingir a meta). São conceitos diferentes!",
            dica: "Eficiência é MEIO (processo), Eficácia é FIM (resultado).",
          },
          {
            titulo: "Achar que efetividade é o mesmo que eficácia",
            descricao:
              "Eficácia = atingir metas internas. Efetividade = impacto REAL na sociedade. Uma ação pode ser eficaz mas não efetiva.",
            dica: "Efetividade pergunta: a vida das pessoas melhorou?",
          },
          {
            titulo: "Criar indicadores sem meta definida",
            descricao:
              "Um indicador sem meta não permite avaliar desempenho. Não basta medir, é preciso ter parâmetro de comparação.",
            dica: "Indicador sem meta = dado, não informação de gestão.",
          },
          {
            titulo: "Pensar que mais indicadores é melhor",
            descricao:
              "Excesso de indicadores dispersa a atenção e dificulta a gestão. Priorize os indicadores-chave (KPIs).",
            dica: "Menos é mais: poucos indicadores, bem escolhidos.",
          },
        ],

        mnemonicos: [
          {
            termo: "6Es",
            significado:
              "Eficiência, Eficácia, Efetividade, Economicidade, Execução, Excelência",
            frase: "Os 6Es do desempenho começam todos com E!",
          },
          {
            termo: "SMART",
            significado:
              "Specific, Measurable, Achievable, Relevant, Time-bound",
            frase:
              "Meta SMART é meta inteligente (smart = inteligente em inglês)",
          },
          {
            termo: "IPR",
            significado: "Insumo, Processo, Resultado",
            frase: "Cadeia de valor: IPR (Insumo → Processo → Resultado)",
          },
          {
            termo: "EEE",
            significado:
              "Eficiência (como), Eficácia (o quê), Efetividade (impacto)",
            frase: "EEE: os três Es mais cobrados em prova!",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-12-1",
            frente: "O que mede a EFICIÊNCIA?",
            verso:
              '**EFICIÊNCIA** mede a relação entre **insumos utilizados** e **produtos gerados**.\n\nÉ o "fazer certo as coisas".\n\nFoco: otimização de recursos (processo)\n\n**Exemplo**: custo por aluno, tempo de atendimento, gastos por inspeção',
            tags: ["eficiência", "insumos", "produtos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-2",
            frente: "O que mede a EFICÁCIA?",
            verso:
              '**EFICÁCIA** mede o grau de **alcance das metas** estabelecidas.\n\nÉ o "fazer a coisa certa".\n\nFoco: atingimento de objetivos (resultado)\n\n**Exemplo**: % de metas atingidas, taxa de vacinação alcançada, número de fiscalizações vs. planejadas',
            tags: ["eficácia", "metas", "resultados"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-3",
            frente: "O que mede a EFETIVIDADE?",
            verso:
              '**EFETIVIDADE** mede o **impacto real na sociedade** (outcomes).\n\nÉ o "fazer a diferença".\n\nFoco: transformação social\n\n**Exemplo**: redução da mortalidade infantil, melhoria do IDH, diminuição de surtos alimentares\n\nVai além de atingir metas!',
            tags: ["efetividade", "impacto", "sociedade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-4",
            frente: "O que significa o acrônimo SMART para metas?",
            verso:
              "**S**pecific - Específico\n**M**easurable - Mensurável\n**A**chievable - Alcançável\n**R**elevant - Relevante\n**T**ime-bound - Temporal (prazo definido)\n\nMetas SMART são claras, mensuráveis e têm prazo!",
            tags: ["SMART", "metas", "atributos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-5",
            frente: "Quais são os 6Es do desempenho?",
            verso:
              "1. **Eficiência**: relação insumo/produto\n2. **Eficácia**: alcance de metas\n3. **Efetividade**: impacto social\n4. **Economicidade**: otimização de custos\n5. **Execução**: realização física/financeira\n6. **Excelência**: qualidade/satisfação\n\nDimensões de análise da gestão pública!",
            tags: ["6Es", "desempenho", "dimensões"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-6",
            frente:
              "Qual a diferença entre indicador de PRODUTO e de RESULTADO?",
            verso:
              "**PRODUTO (Output)**:\n- O que a organização ENTREGA\n- Bens e serviços produzidos\n- Ex: nº de alvarás emitidos\n\n**RESULTADO (Outcome)**:\n- EFEITOS na sociedade\n- Impacto das entregas\n- Ex: redução de DTAs\n\nProduto é entrega. Resultado é impacto.",
            tags: ["produto", "resultado", "output", "outcome"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-7",
            frente: "O que é ECONOMICIDADE como dimensão de desempenho?",
            verso:
              '**ECONOMICIDADE** mede a obtenção e uso de recursos com o **menor custo** possível.\n\nFoco: aquisição de insumos\n\n"Gastar menos, sem perder qualidade"\n\n**Exemplo**:\n- Economia em licitações\n- Redução de custos operacionais\n- Preço pago vs. preço de referência',
            tags: ["economicidade", "custos", "aquisição"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-8",
            frente: "Como os indicadores se relacionam com o ciclo PDCA?",
            verso:
              "**Plan**: definir indicadores e metas\n**Do**: coletar dados, registrar medições\n**Check**: analisar desempenho vs. meta\n**Act**: corrigir desvios, melhorar processos\n\nIndicadores são essenciais para o **Check** (verificar) e alimentam o **Act** (agir corretivamente).",
            tags: ["PDCA", "ciclo", "melhoria"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-9",
            frente: "Qual a diferença entre indicadores de OUTPUT e OUTCOME?",
            verso:
              "**OUTPUT (Produto)**:\n→ O que a organização ENTREGA diretamente\n→ Bens e serviços produzidos\n→ Ex: nº de alvarás emitidos, aulas ministradas\n\n**OUTCOME (Resultado/Impacto)**:\n→ EFEITOS das entregas na sociedade\n→ Mudança na realidade\n→ Ex: redução de DTAs, melhoria no aprendizado\n\nOutput é ENTREGA, Outcome é IMPACTO!",
            tags: ["output", "outcome", "cadeia de valor"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-12-10",
            frente:
              "Como o Balanced Scorecard (BSC) se adapta ao setor público?",
            verso:
              "**BSC no Setor Público**:\n\nPerspectivas adaptadas:\n1. **Cidadão/Sociedade** → no TOPO (não financeira)\n2. **Processos Internos** → eficiência operacional\n3. **Aprendizado** → capacitação de servidores\n4. **Orçamentária** → como MEIO, não fim\n\n**Diferença crucial**:\n- Privado: financeiro é objetivo final\n- Público: cidadão é objetivo final, recursos são instrumentais",
            tags: ["BSC", "setor público", "perspectivas"],
            dificuldade: "dificil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "ap-q-12-1",
            enunciado:
              "O indicador que mede a relação entre os insumos utilizados e os produtos gerados refere-se a:",
            alternativas: [
              { letra: "A", texto: "eficácia." },
              { letra: "B", texto: "efetividade." },
              { letra: "C", texto: "eficiência." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "excelência." },
            ],
            gabarito: "C",
            justificativa:
              "EFICIÊNCIA mede a relação entre insumos (recursos utilizados) e produtos (resultados gerados). É a dimensão do 'fazer certo as coisas', otimizando recursos.",
            dificuldade: "Fácil",
            competencia: "Eficiência",
            banca: "IADES",
            tags: ["eficiência", "insumos"],
          },
          {
            id: "ap-q-12-2",
            enunciado:
              "O impacto real das ações governamentais na transformação da realidade social é medido pelo conceito de:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "execução." },
            ],
            gabarito: "C",
            justificativa:
              "EFETIVIDADE é o impacto real das ações na sociedade (outcomes). Vai além de atingir metas (eficácia) ou usar bem os recursos (eficiência). Mede se a realidade social de fato mudou.",
            dificuldade: "Fácil",
            competencia: "Efetividade",
            banca: "IADES",
            tags: ["efetividade", "impacto"],
          },
          {
            id: "ap-q-12-3",
            enunciado:
              "O acrônimo SMART, utilizado na definição de metas e indicadores, significa:",
            alternativas: [
              {
                letra: "A",
                texto: "Simples, Moderado, Acessível, Razoável, Transitório.",
              },
              {
                letra: "B",
                texto:
                  "Específico, Mensurável, Alcançável, Relevante, Temporal.",
              },
              {
                letra: "C",
                texto:
                  "Sistemático, Metodológico, Analítico, Racional, Técnico.",
              },
              {
                letra: "D",
                texto: "Seguro, Monitorável, Auditável, Realista, Tangível.",
              },
              {
                letra: "E",
                texto: "Sintético, Macro, Avaliável, Reproduzível, Testável.",
              },
            ],
            gabarito: "B",
            justificativa:
              "SMART: Specific (Específico), Measurable (Mensurável), Achievable (Alcançável), Relevant (Relevante), Time-bound (Temporal/com prazo). São critérios para boas metas.",
            dificuldade: "Média",
            competencia: "SMART",
            banca: "IADES",
            tags: ["SMART", "metas"],
          },
          {
            id: "ap-q-12-4",
            enunciado:
              "A dimensão de desempenho que avalia se a organização atingiu os objetivos planejados é a:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "excelência." },
            ],
            gabarito: "B",
            justificativa:
              "EFICÁCIA mede o grau de alcance das metas estabelecidas, ou seja, se os objetivos planejados foram atingidos. É o 'fazer a coisa certa'.",
            dificuldade: "Fácil",
            competencia: "Eficácia",
            banca: "IADES",
            tags: ["eficácia", "metas"],
          },
          {
            id: "ap-q-12-5",
            enunciado:
              "Um indicador que mede o número de fiscalizações realizadas em relação ao número de fiscais disponíveis é classificado como indicador de:",
            alternativas: [
              { letra: "A", texto: "efetividade." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "eficiência." },
              { letra: "D", texto: "impacto." },
              { letra: "E", texto: "resultado." },
            ],
            gabarito: "C",
            justificativa:
              "O indicador relaciona produtos (fiscalizações realizadas) com insumos (fiscais disponíveis), caracterizando um indicador de EFICIÊNCIA, que mede a produtividade dos recursos.",
            dificuldade: "Média",
            competencia: "Eficiência",
            banca: "IADES",
            tags: ["eficiência", "produtividade"],
          },
          {
            id: "ap-q-12-6",
            enunciado:
              "Na cadeia de valor da gestão pública, os indicadores de PRODUTO (output) medem:",
            alternativas: [
              { letra: "A", texto: "os recursos disponibilizados." },
              {
                letra: "B",
                texto: "os bens e serviços entregues à sociedade.",
              },
              { letra: "C", texto: "os impactos na realidade social." },
              { letra: "D", texto: "as atividades de transformação." },
              { letra: "E", texto: "o custo por unidade produzida." },
            ],
            gabarito: "B",
            justificativa:
              "Indicadores de PRODUTO (output) medem os bens e serviços que a organização entrega diretamente. Insumos (input) são recursos, Processo são atividades, e Resultado (outcome) são impactos.",
            dificuldade: "Média",
            competencia: "Cadeia de valor",
            banca: "IADES",
            tags: ["produto", "output"],
          },
          {
            id: "ap-q-12-7",
            enunciado:
              "A obtenção de insumos com o menor custo possível, mantendo a qualidade adequada, refere-se à dimensão de:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "excelência." },
            ],
            gabarito: "D",
            justificativa:
              "ECONOMICIDADE refere-se à obtenção de recursos (insumos) com o menor custo, mantendo a qualidade. É a dimensão de 'gastar menos' na aquisição, diferente da eficiência que trata do uso dos recursos.",
            dificuldade: "Média",
            competencia: "Economicidade",
            banca: "IADES",
            tags: ["economicidade", "custos"],
          },
          {
            id: "ap-q-12-8",
            enunciado:
              "Para que um indicador seja considerado adequado, é essencial que ele apresente, entre outras, a característica de:",
            alternativas: [
              { letra: "A", texto: "complexidade máxima." },
              { letra: "B", texto: "custo elevado de apuração." },
              { letra: "C", texto: "impossibilidade de verificação." },
              { letra: "D", texto: "mensurabilidade." },
              { letra: "E", texto: "subjetividade na interpretação." },
            ],
            gabarito: "D",
            justificativa:
              "MENSURABILIDADE é característica essencial de um bom indicador (critério 'M' do SMART). Deve ser possível medir o indicador de forma objetiva, com dados disponíveis e confiáveis.",
            dificuldade: "Fácil",
            competencia: "Atributos de indicadores",
            banca: "IADES",
            tags: ["mensurável", "atributos"],
          },
          {
            id: "ap-q-12-9",
            enunciado:
              "A satisfação do usuário com os serviços prestados é medida por indicadores de:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "excelência." },
            ],
            gabarito: "E",
            justificativa:
              "EXCELÊNCIA mede a qualidade percebida dos produtos e serviços, incluindo a satisfação do usuário. É a dimensão de 'satisfazer o cidadão' com serviços de qualidade.",
            dificuldade: "Média",
            competencia: "Excelência",
            banca: "IADES",
            tags: ["excelência", "satisfação"],
          },
          {
            id: "ap-q-12-10",
            enunciado:
              "No ciclo PDCA, os indicadores de desempenho são especialmente importantes na fase de:",
            alternativas: [
              { letra: "A", texto: "Plan (Planejar), exclusivamente." },
              { letra: "B", texto: "Do (Executar), exclusivamente." },
              {
                letra: "C",
                texto: "Check (Verificar), para análise do desempenho.",
              },
              { letra: "D", texto: "Act (Agir), exclusivamente." },
              {
                letra: "E",
                texto: "nenhuma das fases, pois são externos ao ciclo.",
              },
            ],
            gabarito: "C",
            justificativa:
              "Embora os indicadores sejam usados em todo o ciclo, eles são especialmente importantes na fase CHECK (Verificar), onde se analisa o desempenho real em comparação com as metas estabelecidas no Plan.",
            dificuldade: "Média",
            competencia: "PDCA",
            banca: "IADES",
            tags: ["PDCA", "verificar"],
          },
        ],
      },
    },
    {
      id: "ap-topico-13",
      numero: 13,
      titulo: "Políticas Públicas",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Política Pública

> "Conjunto de decisões e ações do governo para resolver problemas públicos e atender demandas da sociedade."

| Elemento | Descrição |
|----------|-----------|
| **Quem faz** | Estado (governo) |
| **Para quê** | Resolver problemas públicos |
| **Como** | Decisões, programas, ações |
| **Para quem** | Sociedade (público-alvo) |

### Tipologia de Políticas Públicas (Lowi)

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Distributivas** | Benefícios concentrados, custos difusos | Subsídios, isenções fiscais |
| **Redistributivas** | Transferem recursos entre grupos | Bolsa Família, reforma agrária |
| **Regulatórias** | Estabelecem regras de comportamento | Código de trânsito, normas sanitárias |
| **Constitutivas** | Definem regras do jogo político | Reforma eleitoral, divisão de poderes |

### Ciclo de Políticas Públicas

| Fase | Pergunta-chave | Atividades |
|------|----------------|------------|
| **1. Formação da Agenda** | O que é problema? | Identificar problemas, definir prioridades |
| **2. Formulação** | Qual a solução? | Elaborar alternativas, decidir curso de ação |
| **3. Implementação** | Como executar? | Colocar em prática, alocar recursos |
| **4. Monitoramento** | Está funcionando? | Acompanhar execução, corrigir desvios |
| **5. Avaliação** | Funcionou? | Medir resultados, impactos, efetividade |

### Tipos de Avaliação

| Tipo | Momento | Foco |
|------|---------|------|
| **Ex-ante** | ANTES da implementação | Viabilidade, previsão de impactos |
| **Formativa** | DURANTE a implementação | Ajustes, melhorias |
| **Ex-post (somativa)** | APÓS a implementação | Resultados, impactos alcançados |

### Para IADES:
- Ciclo é ITERATIVO (não linear) - fases se sobrepõem
- Agenda = o que entra ou não na pauta de decisões
- Implementação ≠ Formulação (problemas na execução)
- Avaliação pode retroalimentar todo o ciclo
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Políticas Públicas

#### 1.1 Definições Clássicas

**Thomas Dye (1972):**
> "Política pública é tudo o que os governos decidem fazer ou não fazer."

**David Easton:**
> "Alocação autoritativa de valores para a sociedade."

**Celina Souza:**
> "Campo do conhecimento que busca colocar o governo em ação e analisar essa ação."

#### 1.2 Elementos Constitutivos
- **Intencionalidade pública:** decisão de agir sobre problema
- **Resposta a problema:** identificação de demanda social
- **Conjunto de ações:** não apenas decisão, mas implementação
- **Direcionamento a público específico:** beneficiários definidos

### 2. Tipologia de Políticas Públicas

#### 2.1 Classificação de Theodore Lowi (1964)

**Políticas DISTRIBUTIVAS:**
- Benefícios concentrados em grupos específicos
- Custos difusos pela sociedade
- Baixo conflito político
- Exemplos: subsídios agrícolas, isenções fiscais, obras localizadas
- Característica: "todos ganham" (aparentemente)

**Políticas REDISTRIBUTIVAS:**
- Transferência de recursos entre grupos sociais
- Alto conflito político (ganhadores vs. perdedores)
- Exemplos: Bolsa Família, progressividade tributária, reforma agrária
- Característica: "uns ganham, outros perdem"

**Políticas REGULATÓRIAS:**
- Estabelecem regras de comportamento
- Afetam setores específicos
- Conflito moderado
- Exemplos: código de trânsito, normas sanitárias, regulação de preços
- Característica: definem o que pode ou não ser feito

**Políticas CONSTITUTIVAS (ou Estruturadoras):**
- Definem regras do jogo político
- Moldam a estrutura do Estado
- Exemplos: reforma eleitoral, federalismo, separação de poderes
- Característica: "regras sobre regras"

#### 2.2 Outras Classificações

**Por área de atuação:**
- Sociais (saúde, educação, assistência)
- Econômicas (fiscal, monetária, industrial)
- Infraestrutura (transporte, energia, saneamento)
- Ambientais (preservação, sustentabilidade)

**Por abrangência:**
- Universais (toda a população)
- Focalizadas (grupos específicos)

### 3. Ciclo de Políticas Públicas

O ciclo é um modelo HEURÍSTICO (analítico), não uma descrição rígida da realidade.

#### 3.1 Formação da Agenda (Agenda-Setting)

**O que é agenda?**
Lista de problemas que merecem atenção do governo.

**Tipos de agenda:**
| Tipo | Descrição |
|------|-----------|
| **Sistêmica** | Problemas percebidos pela sociedade |
| **Governamental** | Problemas que o governo considera |
| **Decisória** | Problemas sobre os quais o governo age |

**Modelo de Kingdon (Múltiplos Fluxos):**
| Fluxo | Conteúdo |
|-------|----------|
| **Problemas** | Indicadores, crises, feedback |
| **Soluções** | Alternativas técnicas disponíveis |
| **Político** | Clima político, mudanças de governo |
| **Janela de oportunidade** | Quando os três fluxos convergem |

#### 3.2 Formulação de Alternativas

- Identificação de opções de ação
- Análise de custos e benefícios
- Consideração de viabilidade técnica e política
- Tomada de decisão

**Modelos de decisão:**
| Modelo | Característica |
|--------|----------------|
| **Racional** | Otimização, análise completa (ideal) |
| **Incremental** | Mudanças graduais, ajustes marginais |
| **Garbage Can** | Soluções buscando problemas, casualidade |

#### 3.3 Implementação

Fase em que a política "sai do papel" e é executada.

**Abordagens:**
| Abordagem | Perspectiva |
|-----------|-------------|
| **Top-down** | Decisão no topo, execução na base (comando e controle) |
| **Bottom-up** | Importância dos implementadores de linha de frente |

**Problemas comuns:**
- Falta de recursos
- Resistência dos implementadores
- Ambiguidade de objetivos
- Coordenação intergovernamental
- Captura por interesses

#### 3.4 Monitoramento

- Acompanhamento contínuo da execução
- Verificação de indicadores de processo
- Identificação de desvios e correção
- Geração de informações para gestão

**Diferença de Avaliação:**
Monitoramento é CONTÍNUO; Avaliação é em momentos específicos.

#### 3.5 Avaliação

**Tipos por momento:**
| Tipo | Quando | Para quê |
|------|--------|----------|
| **Ex-ante** | Antes de implementar | Prever viabilidade, estimar impactos |
| **Formativa** | Durante execução | Ajustar, corrigir rumos |
| **Ex-post (somativa)** | Após conclusão | Medir resultados, accountability |

**Critérios de avaliação:**
| Critério | Pergunta |
|----------|----------|
| **Eficiência** | Os recursos foram bem utilizados? |
| **Eficácia** | Os objetivos foram alcançados? |
| **Efetividade** | Houve mudança na situação-problema? |
| **Equidade** | Os benefícios foram distribuídos justamente? |
| **Sustentabilidade** | Os resultados se mantêm no tempo? |

### 4. Atores e Arenas

#### 4.1 Atores
- Governamentais: Executivo, Legislativo, Judiciário, burocracia
- Não governamentais: sociedade civil, mídia, grupos de interesse
- Internacionais: organizações, outros países

#### 4.2 Arenas
- Formais: parlamento, órgãos de governo
- Informais: negociações, lobbies
- Híbridas: conselhos de políticas públicas
        `,

        pontosChave: [
          "Política pública = decisões e ações do Estado para resolver problemas públicos",
          "Tipologia de Lowi: Distributivas, Redistributivas, Regulatórias, Constitutivas",
          "Ciclo: Agenda → Formulação → Implementação → Monitoramento → Avaliação",
          "O ciclo é ITERATIVO, não linear (fases se sobrepõem)",
          "Agenda-setting: definir QUAIS problemas entram na pauta governamental",
          "Modelo de Kingdon: convergência de fluxos (problemas, soluções, político)",
          "Implementação: abordagens top-down (comando) vs bottom-up (implementadores)",
          "Avaliação: ex-ante (antes), formativa (durante), ex-post/somativa (depois)",
          "Eficácia = atingir objetivos; Efetividade = mudar a realidade",
          "Monitoramento é contínuo; Avaliação é pontual",
        ],

        armadilhas: [
          {
            titulo: "Ciclo Linear",
            descricao:
              "O ciclo de políticas públicas NÃO é linear nem sequencial rígido",
            dica: "As fases se sobrepõem e retroalimentam - é iterativo",
          },
          {
            titulo: "Eficácia x Efetividade",
            descricao:
              "Eficácia = atingir metas. Efetividade = impacto real na sociedade",
            dica: "Pode ter eficácia (meta batida) sem efetividade (problema não resolvido)",
          },
          {
            titulo: "Monitoramento x Avaliação",
            descricao:
              "Monitoramento é CONTÍNUO durante execução; Avaliação é em momentos específicos",
            dica: "Monitoramento acompanha; Avaliação julga resultados",
          },
          {
            titulo: "Formulação x Implementação",
            descricao: "Uma boa formulação NÃO garante boa implementação",
            dica: 'Há "brechas de implementação" por falta de recursos, resistência, etc.',
          },
          {
            titulo: "Top-down x Bottom-up",
            descricao:
              "Top-down vê implementação como execução; Bottom-up valoriza adaptação local",
            dica: "Na prática, há combinação das duas abordagens",
          },
          {
            titulo: "Avaliação Ex-ante",
            descricao: "Ex-ante é ANTES da implementação, não durante",
            dica: "Ex-ante prevê; Formativa ajusta; Ex-post mede resultados",
          },
        ],

        mnemonicos: [
          {
            termo: "DRRC",
            significado: "Tipologia de Lowi",
            frase: "Distributiva, Redistributiva, Regulatória, Constitutiva",
          },
          {
            termo: "AFIMA",
            significado: "Ciclo de Políticas Públicas",
            frase:
              "Agenda, Formulação, Implementação, Monitoramento, Avaliação",
          },
          {
            termo: "3Es + Equidade",
            significado: "Critérios de avaliação",
            frase:
              "Eficiência (recursos), Eficácia (metas), Efetividade (impacto) + Equidade (justiça)",
          },
          {
            termo: "EFE",
            significado: "Momentos da avaliação",
            frase: "Ex-ante (antes), Formativa (durante), Ex-post (depois)",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-13-1",
            frente: "O que é política pública?",
            verso:
              "Conjunto de decisões e ações do Estado (governo) para resolver PROBLEMAS PÚBLICOS e atender demandas da sociedade. Envolve definição de prioridades, alocação de recursos e implementação de programas.",
            tags: ["conceito", "política pública"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-2",
            frente: "Quais são os tipos de políticas públicas segundo Lowi?",
            verso:
              "DISTRIBUTIVAS (benefícios concentrados), REDISTRIBUTIVAS (transferência entre grupos), REGULATÓRIAS (regras de comportamento), CONSTITUTIVAS (regras do jogo político).",
            tags: ["Lowi", "tipologia"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-3",
            frente: "Quais são as fases do ciclo de políticas públicas?",
            verso:
              "1) Formação da AGENDA 2) FORMULAÇÃO de alternativas 3) IMPLEMENTAÇÃO 4) MONITORAMENTO 5) AVALIAÇÃO. O ciclo é ITERATIVO (não linear).",
            tags: ["ciclo", "fases"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-4",
            frente: "O que é a fase de agenda-setting?",
            verso:
              "É a fase em que se define QUAIS PROBLEMAS entram na pauta de decisões do governo. Nem todo problema social vira problema político. O modelo de Kingdon explica pela convergência de três fluxos.",
            tags: ["agenda", "Kingdon"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-5",
            frente:
              "Qual a diferença entre avaliação ex-ante, formativa e ex-post?",
            verso:
              "EX-ANTE: ANTES de implementar (viabilidade). FORMATIVA: DURANTE a execução (ajustes). EX-POST (somativa): APÓS conclusão (resultados e impactos).",
            tags: ["avaliação", "tipos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-6",
            frente: "Qual a diferença entre eficácia e efetividade?",
            verso:
              "EFICÁCIA: atingir os OBJETIVOS propostos (fazer a coisa certa). EFETIVIDADE: produzir IMPACTO REAL na situação-problema (mudança na sociedade). Pode haver eficácia sem efetividade.",
            tags: ["eficácia", "efetividade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-7",
            frente: "O que é uma política redistributiva?",
            verso:
              "Política que TRANSFERE recursos de um grupo social para outro. Gera alto conflito político (ganhadores vs perdedores). Exemplos: Bolsa Família, progressividade tributária, reforma agrária.",
            tags: ["redistributiva", "Lowi"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-8",
            frente: "O que é a abordagem top-down na implementação?",
            verso:
              "Visão que enfatiza o COMANDO do topo para a base. A decisão vem dos formuladores e deve ser executada fielmente pelos implementadores. Foco no controle e na hierarquia.",
            tags: ["implementação", "top-down"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-9",
            frente: "Qual a diferença entre monitoramento e avaliação?",
            verso:
              "MONITORAMENTO: acompanhamento CONTÍNUO durante a execução (indicadores de processo). AVALIAÇÃO: análise em MOMENTOS ESPECÍFICOS (antes, durante, depois) para julgar resultados.",
            tags: ["monitoramento", "avaliação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-13-10",
            frente: 'O que é a "janela de oportunidade" no modelo de Kingdon?',
            verso:
              "É o momento em que os TRÊS FLUXOS convergem: problemas (indicadores, crises), soluções (alternativas técnicas) e político (clima, mudança de governo). Quando a janela abre, a política pode entrar na agenda.",
            tags: ["Kingdon", "janela"],
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
            id: "ap-q-13-1",
            enunciado:
              "De acordo com a tipologia de Theodore Lowi, a política que estabelece regras de comportamento para setores específicos é classificada como:",
            alternativas: [
              { letra: "A", texto: "distributiva." },
              { letra: "B", texto: "redistributiva." },
              { letra: "C", texto: "regulatória." },
              { letra: "D", texto: "constitutiva." },
              { letra: "E", texto: "compensatória." },
            ],
            gabarito: "C",
            justificativa:
              "Políticas REGULATÓRIAS estabelecem REGRAS de comportamento para setores específicos. Exemplos: código de trânsito, normas sanitárias, regulação de preços.",
            dificuldade: "facil",
            competencia: "Tipologia de Lowi",
            banca: "IADES",
            tags: ["Lowi", "regulatória"],
          },
          {
            id: "ap-q-13-2",
            enunciado:
              "A fase do ciclo de políticas públicas em que se define quais problemas entrarão na pauta de decisões governamentais é denominada:",
            alternativas: [
              { letra: "A", texto: "formulação." },
              { letra: "B", texto: "implementação." },
              { letra: "C", texto: "avaliação." },
              { letra: "D", texto: "formação da agenda." },
              { letra: "E", texto: "monitoramento." },
            ],
            gabarito: "D",
            justificativa:
              "A FORMAÇÃO DA AGENDA (agenda-setting) é a fase em que se define QUAIS PROBLEMAS entrarão ou não na pauta de decisões do governo.",
            dificuldade: "facil",
            competencia: "Ciclo de políticas públicas",
            banca: "IADES",
            tags: ["agenda", "ciclo"],
          },
          {
            id: "ap-q-13-3",
            enunciado:
              "A avaliação realizada ANTES da implementação de uma política pública, com foco na viabilidade e previsão de impactos, é denominada avaliação:",
            alternativas: [
              { letra: "A", texto: "formativa." },
              { letra: "B", texto: "somativa." },
              { letra: "C", texto: "ex-ante." },
              { letra: "D", texto: "ex-post." },
              { letra: "E", texto: "processual." },
            ],
            gabarito: "C",
            justificativa:
              "Avaliação EX-ANTE é realizada ANTES da implementação, focando na VIABILIDADE e na PREVISÃO de impactos da política.",
            dificuldade: "facil",
            competencia: "Tipos de avaliação",
            banca: "IADES",
            tags: ["avaliação", "ex-ante"],
          },
          {
            id: "ap-q-13-4",
            enunciado:
              "O critério de avaliação que verifica se a política produziu mudanças reais na situação-problema é denominado:",
            alternativas: [
              { letra: "A", texto: "eficiência." },
              { letra: "B", texto: "eficácia." },
              { letra: "C", texto: "efetividade." },
              { letra: "D", texto: "economicidade." },
              { letra: "E", texto: "equidade." },
            ],
            gabarito: "C",
            justificativa:
              "EFETIVIDADE mede se a política produziu MUDANÇAS REAIS na situação-problema, ou seja, o IMPACTO na sociedade. Diferente de eficácia (atingir metas).",
            dificuldade: "medio",
            competencia: "Critérios de avaliação",
            banca: "IADES",
            tags: ["efetividade", "impacto"],
          },
          {
            id: "ap-q-13-5",
            enunciado:
              "Segundo Lowi, políticas que transferem recursos de um grupo social para outro, gerando alto conflito político, são classificadas como:",
            alternativas: [
              { letra: "A", texto: "distributivas." },
              { letra: "B", texto: "redistributivas." },
              { letra: "C", texto: "regulatórias." },
              { letra: "D", texto: "constitutivas." },
              { letra: "E", texto: "alocativas." },
            ],
            gabarito: "B",
            justificativa:
              "Políticas REDISTRIBUTIVAS transferem recursos entre grupos sociais, gerando ALTO CONFLITO (ganhadores vs perdedores). Ex: Bolsa Família, reforma agrária.",
            dificuldade: "medio",
            competencia: "Tipologia de Lowi",
            banca: "IADES",
            tags: ["redistributiva", "conflito"],
          },
          {
            id: "ap-q-13-6",
            enunciado:
              "No modelo de Kingdon, a convergência dos fluxos de problemas, soluções e político cria uma:",
            alternativas: [
              { letra: "A", texto: "crise institucional." },
              { letra: "B", texto: "janela de oportunidade." },
              { letra: "C", texto: "avaliação formativa." },
              { letra: "D", texto: "decisão incremental." },
              { letra: "E", texto: "política distributiva." },
            ],
            gabarito: "B",
            justificativa:
              "No modelo de Kingdon, quando os três FLUXOS (problemas, soluções, político) CONVERGEM, abre-se uma JANELA DE OPORTUNIDADE para que uma política entre na agenda.",
            dificuldade: "medio",
            competencia: "Modelo de Kingdon",
            banca: "IADES",
            tags: ["Kingdon", "janela"],
          },
          {
            id: "ap-q-13-7",
            enunciado:
              "A abordagem de implementação que enfatiza a importância dos implementadores de linha de frente e a adaptação local é denominada:",
            alternativas: [
              { letra: "A", texto: "top-down." },
              { letra: "B", texto: "bottom-up." },
              { letra: "C", texto: "incremental." },
              { letra: "D", texto: "racional." },
              { letra: "E", texto: "garbage can." },
            ],
            gabarito: "B",
            justificativa:
              "A abordagem BOTTOM-UP valoriza o papel dos IMPLEMENTADORES de linha de frente (burocratas de rua) e a ADAPTAÇÃO LOCAL das políticas.",
            dificuldade: "medio",
            competencia: "Implementação",
            banca: "IADES",
            tags: ["bottom-up", "implementação"],
          },
          {
            id: "ap-q-13-8",
            enunciado:
              "Sobre o ciclo de políticas públicas, é correto afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "é um processo linear e sequencial obrigatório.",
              },
              {
                letra: "B",
                texto: "as fases são estanques e não se relacionam.",
              },
              {
                letra: "C",
                texto: "a avaliação ocorre apenas ao final do processo.",
              },
              {
                letra: "D",
                texto: "é um modelo iterativo em que as fases se sobrepõem.",
              },
              { letra: "E", texto: "não inclui a fase de monitoramento." },
            ],
            gabarito: "D",
            justificativa:
              "O ciclo de políticas públicas é ITERATIVO (não linear), as fases SE SOBREPÕEM e se retroalimentam. É um modelo analítico, não uma sequência rígida.",
            dificuldade: "medio",
            competencia: "Ciclo de políticas",
            banca: "IADES",
            tags: ["ciclo", "iterativo"],
          },
          {
            id: "ap-q-13-9",
            enunciado:
              "O acompanhamento contínuo da execução de uma política pública, com verificação de indicadores de processo, caracteriza:",
            alternativas: [
              { letra: "A", texto: "a formulação." },
              { letra: "B", texto: "a avaliação ex-ante." },
              { letra: "C", texto: "o monitoramento." },
              { letra: "D", texto: "a avaliação ex-post." },
              { letra: "E", texto: "a formação da agenda." },
            ],
            gabarito: "C",
            justificativa:
              "O MONITORAMENTO é o acompanhamento CONTÍNUO da execução, verificando indicadores de processo e identificando desvios para correção.",
            dificuldade: "facil",
            competencia: "Monitoramento",
            banca: "IADES",
            tags: ["monitoramento", "contínuo"],
          },
          {
            id: "ap-q-13-10",
            enunciado: "São exemplos de políticas distributivas, EXCETO:",
            alternativas: [
              { letra: "A", texto: "subsídios agrícolas." },
              { letra: "B", texto: "isenções fiscais para empresas." },
              { letra: "C", texto: "obras de infraestrutura localizadas." },
              { letra: "D", texto: "bolsa família e reforma agrária." },
              { letra: "E", texto: "financiamentos subsidiados." },
            ],
            gabarito: "D",
            justificativa:
              "Bolsa Família e reforma agrária são políticas REDISTRIBUTIVAS (transferem recursos entre grupos). Distributivas têm benefícios concentrados e custos difusos.",
            dificuldade: "medio",
            competencia: "Tipologia de políticas",
            banca: "IADES",
            tags: ["distributiva", "redistributiva"],
          },
        ],
      },
    },
    {
      id: "ap-topico-14",
      numero: 14,
      titulo: "Planejamento e Orçamento Público",
      conteudo: {
        resumo: `
## Resumo Rápido

### Instrumentos de Planejamento Orçamentário (Art. 165, CF)

| Instrumento | Vigência | Iniciativa | Conteúdo |
|-------------|----------|------------|----------|
| **PPA** | 4 anos | Executivo | Diretrizes, objetivos, metas (DOM) |
| **LDO** | 1 ano | Executivo | Metas e prioridades, orienta LOA |
| **LOA** | 1 ano | Executivo | Previsão de receitas e fixação de despesas |

### Plano Plurianual (PPA)

| Aspecto | Descrição |
|---------|-----------|
| **Vigência** | 4 anos (inicia no 2º ano do mandato, vai até 1º ano do seguinte) |
| **Conteúdo** | Diretrizes, Objetivos e Metas (DOM) |
| **Abrangência** | Despesas de capital e programas de duração continuada |
| **Envio ao Legislativo** | Até 4 meses antes do encerramento do 1º exercício (31/ago) |
| **Devolução** | Até encerramento da sessão legislativa |

### Lei de Diretrizes Orçamentárias (LDO)

| Aspecto | Descrição |
|---------|-----------|
| **Vigência** | 1 ano (orienta a elaboração da LOA) |
| **Conteúdo** | Metas e prioridades, alterações tributárias, política de pessoal |
| **Anexos obrigatórios** | Anexo de Metas Fiscais e Anexo de Riscos Fiscais (LRF) |
| **Envio ao Legislativo** | Até 8,5 meses antes do encerramento (15/abr) |
| **Devolução** | Até encerramento do 1º período da sessão (17/jul) |

### Lei Orçamentária Anual (LOA)

| Aspecto | Descrição |
|---------|-----------|
| **Vigência** | 1 ano (exercício financeiro) |
| **Conteúdo** | Previsão de receitas e fixação de despesas |
| **Orçamentos** | Fiscal, Investimentos das estatais, Seguridade social |
| **Envio ao Legislativo** | Até 4 meses antes do encerramento (31/ago) |
| **Devolução** | Até encerramento da sessão legislativa (22/dez) |

### Princípios Orçamentários

| Princípio | Significado |
|-----------|-------------|
| **Unidade** | Orçamento único por ente |
| **Universalidade** | Todas as receitas e despesas |
| **Anualidade** | Vigência de um exercício |
| **Exclusividade** | Só matéria orçamentária (exceções: créditos e operações) |
| **Não vinculação** | Receita de impostos não vinculada (exceções: saúde, educação) |
| **Equilíbrio** | Despesas ≤ Receitas |

### Para IADES:
- PPA é o plano de MÉDIO PRAZO (4 anos)
- LDO é o ELO entre PPA e LOA
- LOA não pode conter dispositivo estranho à previsão de receita/fixação de despesa
- Créditos adicionais: suplementares, especiais, extraordinários
        `,

        explicacao: `
## Explicação Didática

### 1. Sistema de Planejamento Orçamentário

O sistema integra três instrumentos legais, todos de iniciativa PRIVATIVA do Poder Executivo:

**Hierarquia:**
PPA → LDO → LOA

O PPA define o planejamento de médio prazo; a LDO estabelece as prioridades anuais; a LOA operacionaliza os recursos.

### 2. Plano Plurianual (PPA)

#### 2.1 Conceito e Conteúdo
O PPA estabelece, de forma regionalizada:
- **Diretrizes**: orientações gerais
- **Objetivos**: resultados a alcançar
- **Metas**: quantificação dos objetivos

**Macete DOM:** Diretrizes, Objetivos, Metas

#### 2.2 Vigência
- **4 anos**
- Inicia no 2º ano do mandato do chefe do Executivo
- Termina no 1º ano do mandato seguinte
- Garante continuidade: novo governante executa 1 ano do plano anterior

#### 2.3 Abrangência
- Despesas de CAPITAL (investimentos, inversões, amortização da dívida)
- Despesas decorrentes de programas de DURAÇÃO CONTINUADA

**Regra importante:** Nenhum investimento com duração superior a um exercício pode ser iniciado sem prévia inclusão no PPA (art. 167, §1º, CF).

#### 2.4 Prazos (União)
- Envio ao Congresso: até 31/agosto do 1º ano do mandato
- Devolução: até 22/dezembro (encerramento da sessão)

### 3. Lei de Diretrizes Orçamentárias (LDO)

#### 3.1 Conceito e Função
A LDO é o ELO entre o PPA e a LOA. Orienta a elaboração do orçamento anual.

#### 3.2 Conteúdo (Art. 165, §2º, CF)
- Metas e prioridades da administração pública
- Diretrizes para elaboração da LOA
- Disposições sobre alterações na legislação tributária
- Política de aplicação das agências financeiras de fomento

#### 3.3 Conteúdo Adicional (LRF - Art. 4º)
- **Anexo de Metas Fiscais:** metas de receita, despesa, resultado primário e nominal
- **Anexo de Riscos Fiscais:** passivos contingentes, riscos fiscais

#### 3.4 Prazos (União)
- Envio ao Congresso: até 15/abril
- Devolução: até 17/julho (encerramento do 1º período)
- **Não pode haver recesso sem aprovação da LDO** (art. 57, §2º, CF)

### 4. Lei Orçamentária Anual (LOA)

#### 4.1 Conceito
Lei que prevê RECEITAS e fixa DESPESAS para o exercício financeiro (1º jan a 31/dez).

#### 4.2 Composição (Art. 165, §5º, CF)
A LOA compreende três orçamentos:

| Orçamento | Abrangência |
|-----------|-------------|
| **Fiscal** | Poderes, órgãos, fundos, fundações, empresas dependentes |
| **Investimentos das estatais** | Empresas não dependentes do Tesouro |
| **Seguridade social** | Saúde, previdência, assistência social |

#### 4.3 Princípio da Exclusividade
A LOA não conterá dispositivo estranho à previsão de receita e fixação de despesa.

**Exceções permitidas:**
- Autorização para abertura de créditos suplementares
- Contratação de operações de crédito (inclusive ARO)

#### 4.4 Prazos (União)
- Envio ao Congresso: até 31/agosto
- Devolução: até 22/dezembro

### 5. Créditos Orçamentários e Adicionais

#### 5.1 Créditos Orçamentários
São as dotações previstas na LOA para cada despesa.

#### 5.2 Créditos Adicionais
Autorizações para despesas não computadas ou insuficientes na LOA.

| Tipo | Finalidade | Autorização | Vigência |
|------|------------|-------------|----------|
| **Suplementar** | Reforço de dotação | LOA ou lei específica | Exercício |
| **Especial** | Despesa sem dotação | Lei específica | Exercício (regra) |
| **Extraordinário** | Urgente e imprevista | MP (União) ou decreto | Exercício |

**Crédito extraordinário:** Guerras, calamidade, comoção interna.

#### 5.3 Fontes de Recursos
- Superávit financeiro apurado em balanço
- Excesso de arrecadação
- Anulação total ou parcial de dotações
- Operações de crédito

### 6. Princípios Orçamentários

#### 6.1 Princípio da Unidade (Totalidade)
Cada ente deve ter um ÚNICO orçamento para cada exercício.

#### 6.2 Princípio da Universalidade
TODAS as receitas e despesas devem constar do orçamento.

#### 6.3 Princípio da Anualidade (Periodicidade)
O orçamento é válido para UM EXERCÍCIO financeiro (1 ano).

#### 6.4 Princípio do Orçamento Bruto
Receitas e despesas devem constar pelos valores TOTAIS (sem deduções).

#### 6.5 Princípio da Exclusividade
LOA só trata de matéria orçamentária (exceções: créditos suplementares e operações de crédito).

#### 6.6 Princípio da Não Vinculação (Não Afetação)
Receita de IMPOSTOS não pode ser vinculada a órgão, fundo ou despesa.

**Exceções constitucionais:**
- Saúde e educação (mínimos constitucionais)
- Repartição de receitas tributárias
- Garantias às operações de crédito por ARO
- Atividades da administração tributária

#### 6.7 Princípio do Equilíbrio
Despesas devem ser iguais ou menores que as receitas.

### 7. Ciclo Orçamentário

| Fase | Responsável | Atividade |
|------|-------------|-----------|
| Elaboração | Executivo | Prepara proposta |
| Apreciação/Votação | Legislativo | Analisa e aprova |
| Execução | Executivo | Realiza receitas e despesas |
| Controle | Legislativo + TCU/TCE | Fiscaliza execução |
        `,

        pontosChave: [
          "PPA: 4 anos, Diretrizes-Objetivos-Metas (DOM), despesas de capital",
          "LDO: 1 ano, ELO entre PPA e LOA, metas fiscais, prioridades",
          "LOA: 1 ano, previsão de receitas e fixação de despesas",
          "LOA compõe-se de 3 orçamentos: Fiscal, Investimentos estatais, Seguridade",
          "Iniciativa das leis orçamentárias: PRIVATIVA do Executivo",
          "LDO não pode ser rejeitada sem aprovação (sessão não encerra)",
          "Créditos adicionais: Suplementares, Especiais, Extraordinários",
          "Crédito extraordinário: guerra, calamidade, comoção interna (MP)",
          "Princípio da não vinculação: exceções para saúde, educação, repartição",
          "Princípio da exclusividade: exceção para créditos suplementares e operações de crédito",
        ],

        armadilhas: [
          {
            titulo: "Vigência do PPA",
            descricao:
              "PPA é de 4 ANOS, não coincide com o mandato (inicia no 2º ano)",
            dica: "Novo governante executa 1 ano do PPA anterior e elabora o seu próprio",
          },
          {
            titulo: "LDO x LOA",
            descricao: "LDO ORIENTA a LOA, não é a mesma coisa",
            dica: "LDO = prioridades. LOA = números (receitas e despesas)",
          },
          {
            titulo: "Três Orçamentos na LOA",
            descricao:
              "LOA contém TRÊS orçamentos (fiscal, investimentos, seguridade)",
            dica: "Mas é uma única lei (princípio da unidade)",
          },
          {
            titulo: "Crédito Extraordinário",
            descricao:
              "Crédito extraordinário é para URGÊNCIA (guerra, calamidade)",
            dica: "Não confundir com suplementar (reforço) ou especial (nova despesa)",
          },
          {
            titulo: "Não Vinculação de Impostos",
            descricao:
              "A não vinculação é para IMPOSTOS, não para todas as receitas",
            dica: "Taxas e contribuições podem ser vinculadas",
          },
          {
            titulo: "Iniciativa Privativa",
            descricao:
              "As leis orçamentárias são de iniciativa PRIVATIVA do Executivo",
            dica: "Legislativo aprova, mas NÃO pode propor PPA, LDO ou LOA",
          },
        ],

        mnemonicos: [
          {
            termo: "DOM",
            significado: "Conteúdo do PPA",
            frase: "Diretrizes, Objetivos, Metas",
          },
          {
            termo: "4-1-1",
            significado: "Vigência das leis orçamentárias",
            frase: "PPA = 4 anos / LDO = 1 ano / LOA = 1 ano",
          },
          {
            termo: "FIS",
            significado: "Orçamentos da LOA",
            frase: "Fiscal, Investimentos das estatais, Seguridade social",
          },
          {
            termo: "SE-E-EX",
            significado: "Créditos adicionais",
            frase:
              "Suplementar (reforço), Especial (novo), Extraordinário (urgente)",
          },
          {
            termo: "GCC",
            significado: "Crédito extraordinário",
            frase: "Guerra, Calamidade, Comoção interna",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-14-1",
            frente:
              "Quais são os três instrumentos de planejamento orçamentário previstos na CF?",
            verso:
              "PPA (Plano Plurianual), LDO (Lei de Diretrizes Orçamentárias) e LOA (Lei Orçamentária Anual). Todos de iniciativa privativa do Poder Executivo.",
            tags: ["planejamento", "instrumentos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-2",
            frente: "Qual a vigência do PPA e o que ele contém?",
            verso:
              "Vigência de 4 ANOS (do 2º ano do mandato ao 1º do seguinte). Contém: Diretrizes, Objetivos e Metas (DOM) para despesas de capital e programas de duração continuada.",
            tags: ["PPA", "vigência"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-3",
            frente: "Qual a função da LDO no sistema orçamentário?",
            verso:
              "A LDO é o ELO entre o PPA e a LOA. Estabelece metas e prioridades, orienta a elaboração da LOA, dispõe sobre alterações tributárias e política de pessoal.",
            tags: ["LDO", "função"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-4",
            frente: "Quais orçamentos compõem a LOA?",
            verso:
              "A LOA compreende TRÊS orçamentos: 1) Fiscal (Poderes e órgãos), 2) Investimentos das estatais (empresas não dependentes), 3) Seguridade social (saúde, previdência, assistência).",
            tags: ["LOA", "composição"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-5",
            frente: "Quais são os tipos de créditos adicionais?",
            verso:
              "SUPLEMENTARES (reforço de dotação existente), ESPECIAIS (despesa sem dotação prévia), EXTRAORDINÁRIOS (urgentes - guerra, calamidade, comoção interna).",
            tags: ["créditos adicionais", "tipos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-6",
            frente: "O que é o princípio da não vinculação (não afetação)?",
            verso:
              "Proíbe vincular receita de IMPOSTOS a órgão, fundo ou despesa. Exceções: saúde, educação, repartição de receitas, garantias de ARO, administração tributária.",
            tags: ["não vinculação", "princípio"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-7",
            frente: "O que é o princípio da exclusividade orçamentária?",
            verso:
              "A LOA não pode conter dispositivo estranho à previsão de receita e fixação de despesa. Exceções: autorização para créditos suplementares e operações de crédito.",
            tags: ["exclusividade", "princípio"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-8",
            frente:
              "O que acontece se a LDO não for aprovada antes do recesso?",
            verso:
              "A sessão legislativa NÃO PODE ser encerrada sem a aprovação da LDO (art. 57, §2º, CF). Os parlamentares ficam até aprovar.",
            tags: ["LDO", "aprovação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-9",
            frente: "Quais são os anexos obrigatórios da LDO segundo a LRF?",
            verso:
              "Anexo de METAS FISCAIS (metas de receita, despesa, resultado primário e nominal) e Anexo de RISCOS FISCAIS (passivos contingentes, riscos orçamentários).",
            tags: ["LDO", "anexos", "LRF"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-14-10",
            frente: "Qual o prazo de envio da LOA ao Legislativo?",
            verso:
              "Até 4 meses antes do encerramento do exercício financeiro (31 de agosto na União). Devolução até 22 de dezembro.",
            tags: ["LOA", "prazos"],
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
            id: "ap-q-14-1",
            enunciado:
              "O instrumento de planejamento que estabelece, de forma regionalizada, as diretrizes, objetivos e metas da administração pública para as despesas de capital é o:",
            alternativas: [
              { letra: "A", texto: "Plano Plurianual (PPA)." },
              { letra: "B", texto: "Lei de Diretrizes Orçamentárias (LDO)." },
              { letra: "C", texto: "Lei Orçamentária Anual (LOA)." },
              { letra: "D", texto: "Plano Diretor." },
              { letra: "E", texto: "Programa de Metas." },
            ],
            gabarito: "A",
            justificativa:
              "O PPA estabelece, de forma regionalizada, as DIRETRIZES, OBJETIVOS e METAS (DOM) para as despesas de capital e programas de duração continuada.",
            dificuldade: "facil",
            competencia: "PPA",
            banca: "IADES",
            tags: ["PPA", "DOM"],
          },
          {
            id: "ap-q-14-2",
            enunciado: "A vigência do Plano Plurianual (PPA) é de:",
            alternativas: [
              { letra: "A", texto: "1 ano." },
              { letra: "B", texto: "2 anos." },
              { letra: "C", texto: "3 anos." },
              { letra: "D", texto: "4 anos." },
              { letra: "E", texto: "5 anos." },
            ],
            gabarito: "D",
            justificativa:
              "O PPA tem vigência de 4 ANOS, iniciando no 2º ano do mandato do chefe do Executivo e encerrando no 1º ano do mandato seguinte.",
            dificuldade: "facil",
            competencia: "Vigência do PPA",
            banca: "IADES",
            tags: ["PPA", "vigência"],
          },
          {
            id: "ap-q-14-3",
            enunciado:
              "A Lei de Diretrizes Orçamentárias (LDO), segundo a Lei de Responsabilidade Fiscal, deve conter:",
            alternativas: [
              { letra: "A", texto: "apenas as metas de arrecadação." },
              {
                letra: "B",
                texto: "Anexo de Metas Fiscais e Anexo de Riscos Fiscais.",
              },
              {
                letra: "C",
                texto: "somente a previsão de receitas correntes.",
              },
              { letra: "D", texto: "exclusivamente as despesas de capital." },
              { letra: "E", texto: "apenas o cronograma de desembolso." },
            ],
            gabarito: "B",
            justificativa:
              "A LRF exige que a LDO contenha ANEXO DE METAS FISCAIS (metas anuais de receita, despesa, resultado) e ANEXO DE RISCOS FISCAIS (passivos contingentes).",
            dificuldade: "medio",
            competencia: "LDO e LRF",
            banca: "IADES",
            tags: ["LDO", "anexos"],
          },
          {
            id: "ap-q-14-4",
            enunciado: "A Lei Orçamentária Anual (LOA) compreende:",
            alternativas: [
              { letra: "A", texto: "apenas o orçamento fiscal." },
              {
                letra: "B",
                texto: "o orçamento fiscal e o de investimentos das estatais.",
              },
              {
                letra: "C",
                texto:
                  "o orçamento fiscal, de investimentos das estatais e da seguridade social.",
              },
              { letra: "D", texto: "apenas o orçamento da seguridade social." },
              { letra: "E", texto: "somente as despesas de capital." },
            ],
            gabarito: "C",
            justificativa:
              "A LOA compreende TRÊS orçamentos: fiscal, de investimentos das empresas estatais e da seguridade social (art. 165, §5º, CF).",
            dificuldade: "medio",
            competencia: "Composição da LOA",
            banca: "IADES",
            tags: ["LOA", "orçamentos"],
          },
          {
            id: "ap-q-14-5",
            enunciado:
              "Os créditos adicionais destinados a despesas urgentes e imprevistas, como em caso de guerra ou calamidade pública, são denominados:",
            alternativas: [
              { letra: "A", texto: "suplementares." },
              { letra: "B", texto: "especiais." },
              { letra: "C", texto: "extraordinários." },
              { letra: "D", texto: "complementares." },
              { letra: "E", texto: "emergenciais." },
            ],
            gabarito: "C",
            justificativa:
              "Créditos EXTRAORDINÁRIOS são destinados a despesas urgentes e IMPREVISTAS, decorrentes de guerra, comoção interna ou calamidade pública.",
            dificuldade: "facil",
            competencia: "Créditos adicionais",
            banca: "IADES",
            tags: ["extraordinário", "calamidade"],
          },
          {
            id: "ap-q-14-6",
            enunciado:
              "O princípio orçamentário que proíbe vincular receita de impostos a órgão, fundo ou despesa é o princípio da:",
            alternativas: [
              { letra: "A", texto: "universalidade." },
              { letra: "B", texto: "unidade." },
              { letra: "C", texto: "não vinculação (não afetação)." },
              { letra: "D", texto: "exclusividade." },
              { letra: "E", texto: "anualidade." },
            ],
            gabarito: "C",
            justificativa:
              "O princípio da NÃO VINCULAÇÃO (não afetação) proíbe vincular receita de IMPOSTOS a órgão, fundo ou despesa, com exceções previstas na CF.",
            dificuldade: "medio",
            competencia: "Princípios orçamentários",
            banca: "IADES",
            tags: ["não vinculação", "princípio"],
          },
          {
            id: "ap-q-14-7",
            enunciado:
              "A iniciativa das leis orçamentárias (PPA, LDO e LOA) é:",
            alternativas: [
              {
                letra: "A",
                texto: "concorrente entre Executivo e Legislativo.",
              },
              { letra: "B", texto: "privativa do Poder Legislativo." },
              { letra: "C", texto: "privativa do Poder Executivo." },
              { letra: "D", texto: "do Tribunal de Contas." },
              { letra: "E", texto: "popular, mediante projeto de lei." },
            ],
            gabarito: "C",
            justificativa:
              "A iniciativa das leis orçamentárias (PPA, LDO e LOA) é PRIVATIVA do Poder EXECUTIVO (art. 165, CF).",
            dificuldade: "facil",
            competencia: "Iniciativa de leis",
            banca: "IADES",
            tags: ["iniciativa", "Executivo"],
          },
          {
            id: "ap-q-14-8",
            enunciado:
              "Segundo a Constituição Federal, a sessão legislativa NÃO será interrompida sem a aprovação do projeto de:",
            alternativas: [
              { letra: "A", texto: "Lei Orçamentária Anual." },
              { letra: "B", texto: "Lei de Diretrizes Orçamentárias." },
              { letra: "C", texto: "Plano Plurianual." },
              { letra: "D", texto: "Lei Complementar de Finanças." },
              { letra: "E", texto: "qualquer lei de iniciativa do Executivo." },
            ],
            gabarito: "B",
            justificativa:
              "A sessão legislativa NÃO será interrompida sem a aprovação da LDO (art. 57, §2º, CF). Os parlamentares devem aprovar antes do recesso.",
            dificuldade: "medio",
            competencia: "Aprovação da LDO",
            banca: "IADES",
            tags: ["LDO", "recesso"],
          },
          {
            id: "ap-q-14-9",
            enunciado:
              "O princípio da exclusividade orçamentária determina que a LOA não conterá dispositivo estranho à previsão de receita e fixação de despesa, EXCETO:",
            alternativas: [
              { letra: "A", texto: "disposições sobre pessoal e encargos." },
              { letra: "B", texto: "normas de direito tributário." },
              {
                letra: "C",
                texto: "autorização para abertura de créditos suplementares.",
              },
              { letra: "D", texto: "criação de cargos públicos." },
              { letra: "E", texto: "disposições sobre regime previdenciário." },
            ],
            gabarito: "C",
            justificativa:
              "As exceções ao princípio da exclusividade são: autorização para CRÉDITOS SUPLEMENTARES e contratação de OPERAÇÕES DE CRÉDITO.",
            dificuldade: "medio",
            competencia: "Princípio da exclusividade",
            banca: "IADES",
            tags: ["exclusividade", "exceções"],
          },
          {
            id: "ap-q-14-10",
            enunciado:
              "São fontes de recursos para abertura de créditos adicionais, EXCETO:",
            alternativas: [
              { letra: "A", texto: "superávit financeiro apurado em balanço." },
              { letra: "B", texto: "excesso de arrecadação." },
              { letra: "C", texto: "anulação total ou parcial de dotações." },
              { letra: "D", texto: "operações de crédito." },
              { letra: "E", texto: "doações de pessoas físicas." },
            ],
            gabarito: "E",
            justificativa:
              "As fontes para créditos adicionais são: superávit financeiro, excesso de arrecadação, anulação de dotações, operações de crédito. Doações de PF não são fonte prevista.",
            dificuldade: "medio",
            competencia: "Fontes de recursos",
            banca: "IADES",
            tags: ["créditos adicionais", "fontes"],
          },
        ],
      },
    },
    {
      id: "ap-topico-15",
      numero: 15,
      titulo: "Princípios Orçamentários",
      conteudo: {
        resumo: `
## Resumo Rápido

### Princípios Orçamentários

| Princípio | Significado |
|-----------|-------------|
| **Unidade/Totalidade** | Um único orçamento para cada ente |
| **Universalidade** | Todas as receitas e despesas devem estar previstas |
| **Anualidade/Periodicidade** | Vigência de 1 ano (exercício financeiro) |
| **Exclusividade** | LOA só trata de receita e despesa (exceções: créditos suplementares e operações de crédito) |
| **Orçamento Bruto** | Receitas e despesas pelo valor TOTAL, sem deduções |
| **Não Vinculação/Não Afetação** | Vedado vincular receita de IMPOSTOS |
| **Especificação/Discriminação** | Detalhamento das receitas e despesas |
| **Publicidade** | Divulgação obrigatória |
| **Equilíbrio** | Receitas = Despesas (planejado) |
| **Legalidade** | Orçamento deve ser aprovado por lei |

### Exceções à Não Vinculação (Art. 167, IV, CF)

| Exceção | Descrição |
|---------|-----------|
| Repartição de receitas | FPE, FPM, etc. |
| Saúde | Mínimo constitucional |
| Educação | Mínimo constitucional |
| Administração tributária | Atividades de arrecadação |
| Garantias às ARO | Antecipação de receita orçamentária |
| Contragarantia à União | Dívidas com a União |

### Para IADES:
- Exclusividade tem EXCEÇÕES (créditos suplementares e operações de crédito)
- Não vinculação = apenas para IMPOSTOS
- Universalidade ≠ Unidade (universalidade = tudo previsto / unidade = um único documento)
        `,

        explicacao: `
## Explicação Didática

### 1. Princípio da Unidade (Totalidade)

**Conceito:** Cada ente federativo deve ter um único orçamento.

- Existe UM ÚNICO orçamento para cada esfera de governo
- LOA consolida os três orçamentos (fiscal, investimentos, seguridade)
- Evita orçamentos paralelos

**Atenção:** A LOA contém três orçamentos (fiscal, investimentos, seguridade), mas eles compõem um ÚNICO documento.

### 2. Princípio da Universalidade

**Conceito:** O orçamento deve conter TODAS as receitas e TODAS as despesas.

- Lei 4.320/64, art. 2º: "A Lei do Orçamento conterá a discriminação da receita e despesa..."
- Permite conhecimento global das finanças públicas
- Facilita o controle parlamentar

**Não confunda:**
- Universalidade = todas as receitas e despesas previstas
- Unidade = um único documento

### 3. Princípio da Anualidade (Periodicidade)

**Conceito:** O orçamento deve ser elaborado para período determinado (1 ANO).

- Exercício financeiro = ano civil (1º jan a 31 dez)
- LOA tem vigência de 1 ano
- Permite revisão periódica das políticas

### 4. Princípio da Exclusividade

**Conceito:** A LOA não conterá dispositivo estranho à previsão de receita e fixação de despesa.

**Exceções (CF, art. 165, §8º):**
- Autorização para abertura de créditos SUPLEMENTARES
- Contratação de OPERAÇÕES DE CRÉDITO

**Objetivo:** Evitar as "caudas orçamentárias" (normas estranhas ao orçamento).

### 5. Princípio do Orçamento Bruto

**Conceito:** Receitas e despesas devem constar pelos valores TOTAIS, vedadas quaisquer deduções.

- Lei 4.320/64, art. 6º
- Não se permite compensação entre receitas e despesas
- Valores SEM deduções

**Exemplo:** Se arrecada R$ 100 e gasta R$ 30, deve constar:
- Receita: R$ 100 (não R$ 70)
- Despesa: R$ 30

### 6. Princípio da Não Vinculação (Não Afetação)

**Conceito:** É vedada a vinculação de receita de IMPOSTOS a órgão, fundo ou despesa.

**Fundamento:** CF, art. 167, IV

**Exceções:**
- Repartição constitucional (FPE, FPM)
- Destinação para SAÚDE
- Destinação para EDUCAÇÃO
- Destinação para ADMINISTRAÇÃO TRIBUTÁRIA
- Garantia às operações de crédito por ANTECIPAÇÃO DE RECEITA (ARO)
- Contragarantia à União e Estados
- Fundo de combate à pobreza
- Pagamento de débitos com a União (Lei 9.496/97)

**Importante:** Só se aplica a IMPOSTOS, não a taxas e contribuições.

### 7. Princípio da Especificação (Especialização/Discriminação)

**Conceito:** As receitas e despesas devem ser discriminadas, demonstrando a origem e aplicação.

- Lei 4.320/64, art. 5º
- Veda autorizações globais/genéricas
- Detalha para permitir fiscalização

**Exceções:**
- Reserva de contingência
- Programas especiais de trabalho

### 8. Princípio da Publicidade

**Conceito:** O orçamento deve ser divulgado amplamente.

- CF, art. 37
- Publicação no Diário Oficial
- Transparência e controle social

### 9. Princípio do Equilíbrio

**Conceito:** As receitas previstas devem ser iguais às despesas fixadas.

- Equilíbrio formal (planejado)
- LRF reforça o equilíbrio das contas públicas
- Vedada realização de despesas superiores aos créditos

### 10. Princípio da Legalidade

**Conceito:** O orçamento deve ser aprovado por LEI.

- PPA, LDO e LOA são leis ordinárias
- Iniciativa privativa do Poder Executivo
- Aprovação pelo Poder Legislativo

### 11. Princípio da Clareza

**Conceito:** O orçamento deve ser claro e compreensível.

- Linguagem acessível
- Facilita o entendimento pelo cidadão
- Promove o controle social

### 12. Princípio da Programação

**Conceito:** O orçamento deve expressar programas de governo.

- Vinculação entre plano e orçamento
- Orçamento-programa
- Metas e objetivos definidos
        `,

        pontosChave: [
          "Unidade: um único orçamento por ente (LOA consolida fiscal + investimentos + seguridade)",
          "Universalidade: TODAS as receitas e despesas devem estar previstas",
          "Anualidade: vigência de 1 ANO (exercício financeiro = ano civil)",
          "Exclusividade: LOA só trata de receita e despesa (exceções: créditos suplementares e operações de crédito)",
          "Orçamento Bruto: valores TOTAIS, sem deduções",
          "Não Vinculação: vedado vincular IMPOSTOS (exceções: saúde, educação, repartição, administração tributária)",
          "Especificação: discriminar origem e aplicação (veda dotações globais)",
          "Publicidade: divulgação ampla e obrigatória",
          "Equilíbrio: receitas previstas = despesas fixadas",
          "Legalidade: orçamento aprovado por LEI",
        ],

        armadilhas: [
          {
            titulo: "Universalidade x Unidade",
            descricao:
              "Universalidade = tudo previsto / Unidade = um único documento",
            dica: "UNIversalidade = tUdo INcluído / UNIdade = UM documento",
          },
          {
            titulo: "Exceções à Exclusividade",
            descricao:
              "Créditos SUPLEMENTARES e operações de crédito podem constar na LOA",
            dica: "Não é vedação absoluta - há duas exceções importantes",
          },
          {
            titulo: "Não Vinculação só para IMPOSTOS",
            descricao: "A vedação de vincular receitas é apenas para IMPOSTOS",
            dica: "Taxas e contribuições PODEM ser vinculadas",
          },
          {
            titulo: "Exceções à Não Vinculação",
            descricao:
              "Saúde, educação, repartição de receitas, administração tributária, ARO",
            dica: "São muitas exceções - memorize as principais",
          },
          {
            titulo: "Orçamento Bruto",
            descricao: "Valores TOTAIS, sem compensação ou dedução",
            dica: "Se arrecada 100 e gasta 30, consta 100 + 30, não 70",
          },
        ],

        mnemonicos: [
          {
            termo: "UUA-EO-NEP-ELP",
            significado: "Princípios orçamentários",
            frase:
              "Unidade, Universalidade, Anualidade, Exclusividade, Orçamento bruto, Não vinculação, Especificação, Publicidade, Equilíbrio, Legalidade, Programação",
          },
          {
            termo: "SO-CO",
            significado: "Exceções à exclusividade",
            frase: "Créditos Suplementares e Operações de Crédito",
          },
          {
            termo: "SEAR-CG",
            significado: "Exceções à não vinculação",
            frase:
              "Saúde, Educação, Administração tributária, Repartição, Contragarantia, Garantia ARO",
          },
          {
            termo: "TUDO-UM",
            significado: "Universalidade x Unidade",
            frase: "Universalidade = TUDO previsto / Unidade = UM documento",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-15-1",
            frente:
              "O que estabelece o princípio da universalidade orçamentária?",
            verso:
              "Que o orçamento deve conter TODAS as receitas e TODAS as despesas do ente. Permite conhecimento global das finanças e facilita controle parlamentar.",
            tags: ["universalidade", "princípio"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-2",
            frente: "Quais são as exceções ao princípio da exclusividade?",
            verso:
              'Autorização para abertura de créditos SUPLEMENTARES e contratação de OPERAÇÕES DE CRÉDITO. São os únicos dispositivos "estranhos" permitidos na LOA.',
            tags: ["exclusividade", "exceções"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-3",
            frente:
              "O princípio da não vinculação (não afetação) aplica-se a quais receitas?",
            verso:
              "Aplica-se apenas a receitas de IMPOSTOS. Taxas e contribuições PODEM ser vinculadas a órgãos, fundos ou despesas específicas.",
            tags: ["não vinculação", "impostos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-4",
            frente:
              "Quais são as principais exceções ao princípio da não vinculação?",
            verso:
              "Saúde, Educação, Administração tributária, Repartição de receitas (FPE, FPM), Garantia às ARO, Contragarantia à União, Fundo de combate à pobreza.",
            tags: ["não vinculação", "exceções"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-5",
            frente: "O que estabelece o princípio do orçamento bruto?",
            verso:
              "Receitas e despesas devem constar pelos valores TOTAIS, vedadas quaisquer deduções. Não se permite compensação. Se arrecada 100 e gasta 30, consta 100 + 30.",
            tags: ["orçamento bruto", "valores"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-6",
            frente:
              "Qual a diferença entre princípio da unidade e da universalidade?",
            verso:
              "UNIDADE: cada ente tem UM único orçamento (documento único). UNIVERSALIDADE: TODAS as receitas e despesas devem estar previstas no orçamento.",
            tags: ["unidade", "universalidade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-7",
            frente: "O que é o princípio da anualidade orçamentária?",
            verso:
              "O orçamento deve ser elaborado para período de 1 ANO. O exercício financeiro coincide com o ano civil (1º de janeiro a 31 de dezembro).",
            tags: ["anualidade", "exercício"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-8",
            frente: "O princípio da especificação veda o quê?",
            verso:
              "Veda autorizações GLOBAIS ou genéricas. As receitas e despesas devem ser DISCRIMINADAS, detalhando origem e aplicação para permitir fiscalização.",
            tags: ["especificação", "discriminação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-9",
            frente:
              'O que são "caudas orçamentárias" e qual princípio as proíbe?',
            verso:
              "Caudas orçamentárias são normas estranhas ao orçamento inseridas na LOA. O princípio da EXCLUSIVIDADE proíbe, permitindo apenas receita/despesa + exceções.",
            tags: ["exclusividade", "caudas"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-15-10",
            frente: "O princípio do equilíbrio orçamentário significa o quê?",
            verso:
              "Que as receitas PREVISTAS devem ser iguais às despesas FIXADAS. É um equilíbrio FORMAL/planejado. A LRF reforça o equilíbrio das contas públicas.",
            tags: ["equilíbrio", "receitas"],
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
            id: "ap-q-15-1",
            enunciado:
              "O princípio orçamentário que estabelece que todas as receitas e despesas devem estar previstas no orçamento é o princípio da:",
            alternativas: [
              { letra: "A", texto: "unidade." },
              { letra: "B", texto: "universalidade." },
              { letra: "C", texto: "exclusividade." },
              { letra: "D", texto: "anualidade." },
              { letra: "E", texto: "não vinculação." },
            ],
            gabarito: "B",
            justificativa:
              "O princípio da UNIVERSALIDADE estabelece que o orçamento deve conter TODAS as receitas e TODAS as despesas do ente.",
            dificuldade: "Fácil",
            competencia: "Princípio da universalidade",
            banca: "IADES",
            tags: ["universalidade", "princípio"],
          },
          {
            id: "ap-q-15-2",
            enunciado:
              "São exceções ao princípio da exclusividade orçamentária:",
            alternativas: [
              {
                letra: "A",
                texto: "criação de cargos e alteração de alíquotas.",
              },
              {
                letra: "B",
                texto:
                  "autorização para créditos suplementares e operações de crédito.",
              },
              {
                letra: "C",
                texto: "vinculação de receitas e criação de tributos.",
              },
              { letra: "D", texto: "transferências voluntárias e convênios." },
              {
                letra: "E",
                texto: "emendas parlamentares e reserva de contingência.",
              },
            ],
            gabarito: "B",
            justificativa:
              "As exceções ao princípio da exclusividade são: autorização para CRÉDITOS SUPLEMENTARES e contratação de OPERAÇÕES DE CRÉDITO.",
            dificuldade: "Média",
            competencia: "Princípio da exclusividade",
            banca: "IADES",
            tags: ["exclusividade", "exceções"],
          },
          {
            id: "ap-q-15-3",
            enunciado:
              "O princípio da não vinculação (não afetação) proíbe vincular receitas de:",
            alternativas: [
              { letra: "A", texto: "taxas." },
              { letra: "B", texto: "contribuições de melhoria." },
              { letra: "C", texto: "impostos." },
              { letra: "D", texto: "contribuições sociais." },
              { letra: "E", texto: "empréstimos compulsórios." },
            ],
            gabarito: "C",
            justificativa:
              "O princípio da não vinculação (art. 167, IV, CF) proíbe vincular receitas de IMPOSTOS a órgão, fundo ou despesa. Não se aplica a taxas e contribuições.",
            dificuldade: "Fácil",
            competencia: "Não vinculação",
            banca: "IADES",
            tags: ["não vinculação", "impostos"],
          },
          {
            id: "ap-q-15-4",
            enunciado:
              "São exceções constitucionais ao princípio da não vinculação de receitas de impostos, EXCETO:",
            alternativas: [
              { letra: "A", texto: "destinação para a saúde." },
              { letra: "B", texto: "destinação para a educação." },
              { letra: "C", texto: "repartição constitucional de receitas." },
              { letra: "D", texto: "destinação para obras públicas." },
              { letra: "E", texto: "administração tributária." },
            ],
            gabarito: "D",
            justificativa:
              "Obras públicas NÃO são exceção à não vinculação. Exceções: saúde, educação, repartição de receitas, administração tributária, garantia ARO, contragarantia.",
            dificuldade: "Média",
            competencia: "Exceções à não vinculação",
            banca: "IADES",
            tags: ["não vinculação", "exceções"],
          },
          {
            id: "ap-q-15-5",
            enunciado: "O princípio do orçamento bruto determina que:",
            alternativas: [
              { letra: "A", texto: "as despesas devem superar as receitas." },
              {
                letra: "B",
                texto:
                  "receitas e despesas devem constar pelos valores totais, sem deduções.",
              },
              {
                letra: "C",
                texto:
                  "o orçamento deve ser aprovado antes do início do exercício.",
              },
              {
                letra: "D",
                texto: "é permitida a compensação entre receitas e despesas.",
              },
              {
                letra: "E",
                texto: "as receitas devem ser discriminadas por fonte.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O princípio do orçamento BRUTO determina que receitas e despesas constem pelos valores TOTAIS, vedadas quaisquer deduções ou compensações.",
            dificuldade: "Fácil",
            competencia: "Orçamento bruto",
            banca: "IADES",
            tags: ["orçamento bruto", "valores"],
          },
          {
            id: "ap-q-15-6",
            enunciado:
              "O princípio que estabelece que cada ente federativo deve ter um único orçamento é o princípio da:",
            alternativas: [
              { letra: "A", texto: "universalidade." },
              { letra: "B", texto: "unidade." },
              { letra: "C", texto: "exclusividade." },
              { letra: "D", texto: "programação." },
              { letra: "E", texto: "clareza." },
            ],
            gabarito: "B",
            justificativa:
              "O princípio da UNIDADE (ou totalidade) estabelece que cada ente federativo deve ter UM único orçamento, evitando orçamentos paralelos.",
            dificuldade: "Fácil",
            competencia: "Princípio da unidade",
            banca: "IADES",
            tags: ["unidade", "princípio"],
          },
          {
            id: "ap-q-15-7",
            enunciado: "O princípio da anualidade orçamentária estabelece que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "o orçamento deve ser publicado anualmente no Diário Oficial.",
              },
              {
                letra: "B",
                texto:
                  "o orçamento deve ser elaborado e executado para o período de um ano.",
              },
              {
                letra: "C",
                texto: "as receitas devem ser arrecadadas anualmente.",
              },
              {
                letra: "D",
                texto: "os créditos devem ser renovados todo ano.",
              },
              {
                letra: "E",
                texto: "as despesas devem ser pagas dentro do ano.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O princípio da ANUALIDADE (periodicidade) estabelece que o orçamento é elaborado para período de UM ANO, coincidente com o exercício financeiro (ano civil).",
            dificuldade: "Fácil",
            competencia: "Princípio da anualidade",
            banca: "IADES",
            tags: ["anualidade", "período"],
          },
          {
            id: "ap-q-15-8",
            enunciado:
              "O princípio da especificação (discriminação) orçamentária veda:",
            alternativas: [
              { letra: "A", texto: "a publicação do orçamento." },
              { letra: "B", texto: "a inclusão de todas as receitas." },
              {
                letra: "C",
                texto: "autorizações globais ou genéricas de despesas.",
              },
              { letra: "D", texto: "a previsão de receitas tributárias." },
              { letra: "E", texto: "a fixação de despesas de pessoal." },
            ],
            gabarito: "C",
            justificativa:
              "O princípio da especificação veda autorizações GLOBAIS ou genéricas. As receitas e despesas devem ser discriminadas/detalhadas.",
            dificuldade: "Média",
            competencia: "Princípio da especificação",
            banca: "IADES",
            tags: ["especificação", "discriminação"],
          },
          {
            id: "ap-q-15-9",
            enunciado: "O princípio da exclusividade orçamentária visa evitar:",
            alternativas: [
              { letra: "A", texto: "a duplicidade de orçamentos." },
              { letra: "B", texto: 'as chamadas "caudas orçamentárias".' },
              { letra: "C", texto: "a universalidade das receitas." },
              { letra: "D", texto: "o equilíbrio entre receitas e despesas." },
              { letra: "E", texto: "a publicidade do orçamento." },
            ],
            gabarito: "B",
            justificativa:
              'O princípio da EXCLUSIVIDADE visa evitar as "caudas orçamentárias", ou seja, normas estranhas ao orçamento inseridas na LOA.',
            dificuldade: "Média",
            competencia: "Princípio da exclusividade",
            banca: "IADES",
            tags: ["exclusividade", "caudas"],
          },
          {
            id: "ap-q-15-10",
            enunciado: "O princípio do equilíbrio orçamentário preconiza que:",
            alternativas: [
              {
                letra: "A",
                texto: "as despesas devem ser sempre maiores que as receitas.",
              },
              {
                letra: "B",
                texto:
                  "as receitas previstas devem ser iguais às despesas fixadas.",
              },
              { letra: "C", texto: "o superávit deve ser a meta principal." },
              {
                letra: "D",
                texto: "o déficit é permitido em qualquer situação.",
              },
              {
                letra: "E",
                texto: "apenas as despesas correntes devem ser equilibradas.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O princípio do EQUILÍBRIO estabelece que as receitas PREVISTAS devem ser iguais às despesas FIXADAS. É um equilíbrio formal/planejado.",
            dificuldade: "Fácil",
            competencia: "Princípio do equilíbrio",
            banca: "IADES",
            tags: ["equilíbrio", "receitas"],
          },
        ],
      },
    },
    {
      id: "ap-topico-16",
      numero: 16,
      titulo: "Receita Pública: Conceitos, Classificação e Estágios",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Receita Pública

| Sentido | Definição |
|---------|-----------|
| **Amplo** | Todo ingresso de recursos nos cofres públicos |
| **Estrito** | Apenas ingressos que se incorporam definitivamente ao patrimônio |

### Classificação Quanto à Natureza

| Tipo | Característica | Exemplos |
|------|----------------|----------|
| **Orçamentária** | Prevista no orçamento | Tributos, transferências |
| **Extraorçamentária** | NÃO prevista, devolução futura | Caução, depósito, ARO |

### Classificação por Categoria Econômica

| Categoria | Código | Características |
|-----------|--------|-----------------|
| **Correntes** | 1 | Aumentam patrimônio líquido |
| **Capital** | 2 | Não aumentam patrimônio líquido, resultam de operações de crédito, alienações, etc. |

### Receitas Correntes (TRIBUTA CON PAIS)

| Origem | Exemplos |
|--------|----------|
| **Tri**butária | Impostos, taxas, contribuições de melhoria |
| **Contribui**ções | COFINS, CSLL, PIS |
| **Pa**trimonial | Aluguéis, dividendos, royalties |
| **Agr**opecuária | Produção vegetal, animal |
| **I**ndustrial | Produção industrial |
| **S**erviços | Transporte, comunicação |
| Transferências correntes | FPM, FPE, FUNDEB |
| Outras receitas correntes | Multas, indenizações |

### Receitas de Capital (OPERA ALI AMOR TRANS)

| Origem | Exemplos |
|--------|----------|
| **Opera**ções de crédito | Empréstimos internos e externos |
| **Ali**enação de bens | Venda de imóveis, veículos |
| **Amor**tização de empréstimos | Recebimento de empréstimos concedidos |
| **Trans**ferências de capital | Para obras, investimentos |
| Outras receitas de capital | Superávit do Banco Central |

### Estágios da Receita

| Estágio | Descrição |
|---------|-----------|
| **Previsão** | Estimativa de arrecadação na LOA |
| **Lançamento** | Identificação do devedor e valor |
| **Arrecadação** | Pagamento pelo contribuinte ao agente |
| **Recolhimento** | Transferência ao Tesouro (caixa único) |

### Para IADES:
- Corrente = patrimônio AUMENTA
- Capital = patrimônio NÃO aumenta
- PLAR = Previsão, Lançamento, Arrecadação, Recolhimento
- Tributo é receita CORRENTE (não capital)
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Receita Pública

#### 1.1 Sentido Amplo (Ingresso)
Todo e qualquer ingresso de recursos nos cofres públicos, incluindo:
- Receitas tributárias
- Empréstimos
- Depósitos
- Cauções

#### 1.2 Sentido Estrito (Receita)
Apenas os ingressos que se incorporam DEFINITIVAMENTE ao patrimônio público, não gerando obrigação de devolução.

### 2. Classificação Quanto à Natureza

#### 2.1 Receitas Orçamentárias
- Previstas na LOA
- Disponíveis para cobertura de despesas públicas
- Ex: tributos, transferências constitucionais, receitas de serviços

#### 2.2 Receitas Extraorçamentárias
- NÃO previstas no orçamento
- Geram obrigação de DEVOLUÇÃO
- São apenas ingressos temporários
- Ex: cauções, depósitos de terceiros, ARO (Antecipação de Receita Orçamentária)

### 3. Classificação por Categoria Econômica

#### 3.1 Receitas Correntes (Código 1)
Receitas que AUMENTAM o patrimônio líquido do Estado.

**Origens (Lei 4.320/64):**
| Código | Origem | Descrição |
|--------|--------|-----------|
| 1.1 | Tributária | Impostos, taxas, contribuições de melhoria |
| 1.2 | Contribuições | Sociais, econômicas, iluminação pública |
| 1.3 | Patrimonial | Receitas do patrimônio: aluguéis, dividendos |
| 1.4 | Agropecuária | Produção vegetal, animal, derivados |
| 1.5 | Industrial | Extração mineral, transformação, construção |
| 1.6 | Serviços | Comércio, transporte, comunicação, saúde |
| 1.7 | Transferências Correntes | De outras esferas (FPM, FPE, FUNDEB) |
| 1.9 | Outras Rec. Correntes | Multas, juros, indenizações |

#### 3.2 Receitas de Capital (Código 2)
Receitas que NÃO aumentam o patrimônio líquido (geram contrapartida no passivo ou reduzem ativo).

**Origens:**
| Código | Origem | Descrição |
|--------|--------|-----------|
| 2.1 | Operações de Crédito | Empréstimos, financiamentos |
| 2.2 | Alienação de Bens | Venda de móveis e imóveis |
| 2.3 | Amortização de Empréstimos | Retorno de empréstimos concedidos |
| 2.4 | Transferências de Capital | Para investimentos, inversões |
| 2.5 | Outras Rec. de Capital | Superávit do BC, remuneração |

### 4. Receita Tributária

#### 4.1 Impostos
- Tributo não vinculado a atividade específica
- Competência privativa de cada ente

#### 4.2 Taxas
- Vinculadas a serviço público específico ou poder de polícia
- Ex: taxa de coleta de lixo, taxa de fiscalização

#### 4.3 Contribuição de Melhoria
- Decorrente de obra pública que valoriza o imóvel
- Limite individual: valorização do imóvel
- Limite total: custo da obra

### 5. Estágios da Receita Pública

#### 5.1 Previsão (Estimativa)
- Estimativa de arrecadação na LOA
- Metodologia de projeção de receitas
- Considera variações econômicas, legislação

#### 5.2 Lançamento
- Procedimento administrativo que verifica:
  - Ocorrência do fato gerador
  - Identificação do contribuinte
  - Cálculo do montante devido
  - Matrícula do crédito tributário

**Modalidades de lançamento:**
| Modalidade | Descrição | Exemplo |
|------------|-----------|---------|
| De ofício | Autoridade faz tudo | IPTU, IPVA |
| Por declaração | Contribuinte informa, autoridade lança | ITBI |
| Por homologação | Contribuinte calcula e paga, autoridade homologa | IR, ICMS |

#### 5.3 Arrecadação
- Contribuinte paga ao agente arrecadador
- Agentes: bancos autorizados, lotéricas, etc.
- Momento em que o recurso "entra" no sistema financeiro

#### 5.4 Recolhimento
- Transferência dos recursos ao Tesouro
- Conta única do Tesouro
- Agente arrecadador repassa ao ente público

### 6. Receita sob Enfoque Patrimonial x Orçamentário

| Enfoque | Reconhecimento |
|---------|----------------|
| **Patrimonial** | Fato gerador (competência) |
| **Orçamentário** | Arrecadação (caixa) |

### 7. Dívida Ativa

- Créditos não pagos no vencimento
- Inscrição após esgotada via administrativa
- Gera certidão de dívida ativa (CDA)
- Permite execução fiscal
        `,

        pontosChave: [
          "Receita orçamentária: prevista na LOA / Extraorçamentária: não prevista, devolução futura",
          "Receitas Correntes (código 1): AUMENTAM patrimônio líquido",
          "Receitas de Capital (código 2): NÃO aumentam patrimônio líquido",
          "Estágios: PLAR - Previsão, Lançamento, Arrecadação, Recolhimento",
          "Tributos são receitas CORRENTES (tributária)",
          "Operações de crédito são receitas de CAPITAL",
          "Alienação de bens = receita de CAPITAL",
          "Lançamento: de ofício, por declaração ou por homologação",
          "Arrecadação: pagamento ao agente / Recolhimento: transferência ao Tesouro",
          "Dívida ativa: créditos não pagos, inscrita após via administrativa",
        ],

        armadilhas: [
          {
            titulo: "Corrente x Capital",
            descricao: "Corrente AUMENTA patrimônio / Capital NÃO aumenta",
            dica: "Tributo = corrente / Empréstimo = capital",
          },
          {
            titulo: "Arrecadação x Recolhimento",
            descricao:
              "Arrecadação = pagamento ao agente / Recolhimento = transferência ao Tesouro",
            dica: "Arrecadação vem ANTES do recolhimento",
          },
          {
            titulo: "Operação de crédito",
            descricao: "É receita de CAPITAL, não corrente",
            dica: "Empréstimo gera passivo, não aumenta patrimônio líquido",
          },
          {
            titulo: "Receita extraorçamentária",
            descricao: "NÃO está prevista no orçamento, será devolvida",
            dica: "Caução e depósito são extraorçamentárias",
          },
          {
            titulo: "Estágios da receita",
            descricao: "PLAR: Previsão, Lançamento, Arrecadação, Recolhimento",
            dica: "Cuidado: não confunda ordem dos estágios",
          },
        ],

        mnemonicos: [
          {
            termo: "PLAR",
            significado: "Estágios da receita",
            frase: "Previsão, Lançamento, Arrecadação, Recolhimento",
          },
          {
            termo: "TRIBUTA CON PAIS",
            significado: "Receitas correntes",
            frase:
              "Tributária, Contribuições, Patrimonial, Agropecuária, Industrial, Serviços",
          },
          {
            termo: "OPERA ALI AMOR",
            significado: "Receitas de capital",
            frase: "Operações de crédito, Alienação, Amortização",
          },
          {
            termo: "ODH",
            significado: "Modalidades de lançamento",
            frase: "De Ofício, por Declaração, por Homologação",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-16-1",
            frente: "Quais são os estágios da receita pública?",
            verso:
              "PLAR: 1) PREVISÃO (estimativa na LOA), 2) LANÇAMENTO (identificação do devedor), 3) ARRECADAÇÃO (pagamento ao agente), 4) RECOLHIMENTO (transferência ao Tesouro).",
            tags: ["estágios", "receita"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-2",
            frente:
              "Qual a diferença entre receita corrente e receita de capital?",
            verso:
              "CORRENTE: AUMENTA patrimônio líquido (tributos, serviços). CAPITAL: NÃO aumenta patrimônio (operações de crédito, alienações). Código 1 = corrente / Código 2 = capital.",
            tags: ["corrente", "capital"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-3",
            frente: "Quais são as origens das receitas correntes?",
            verso:
              "TRIBUTA CON PAIS: Tributária, Contribuições, Patrimonial, Agropecuária, Industrial, Serviços, Transferências correntes, Outras receitas correntes.",
            tags: ["correntes", "origens"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-4",
            frente: "O que é receita extraorçamentária?",
            verso:
              "É ingresso de recursos NÃO previsto no orçamento, que gera obrigação de DEVOLUÇÃO. São entradas temporárias. Ex: caução, depósito de terceiros, ARO.",
            tags: ["extraorçamentária", "conceito"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-5",
            frente: "Qual a diferença entre arrecadação e recolhimento?",
            verso:
              "ARRECADAÇÃO: contribuinte paga ao agente arrecadador (banco). RECOLHIMENTO: agente transfere os recursos ao Tesouro (conta única). Arrecadação vem ANTES.",
            tags: ["arrecadação", "recolhimento"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-6",
            frente: "Quais são as modalidades de lançamento tributário?",
            verso:
              "DE OFÍCIO: autoridade faz tudo (IPTU, IPVA). POR DECLARAÇÃO: contribuinte informa, autoridade lança (ITBI). POR HOMOLOGAÇÃO: contribuinte calcula e paga (IR, ICMS).",
            tags: ["lançamento", "modalidades"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-7",
            frente: "Operação de crédito é receita corrente ou de capital?",
            verso:
              "Receita de CAPITAL. Operações de crédito (empréstimos) geram aumento do passivo, portanto NÃO aumentam o patrimônio líquido.",
            tags: ["operação de crédito", "capital"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-8",
            frente: "O que é a dívida ativa?",
            verso:
              "Créditos públicos NÃO PAGOS no vencimento, após esgotada a via administrativa. É inscrita e gera Certidão de Dívida Ativa (CDA), que permite execução fiscal.",
            tags: ["dívida ativa", "conceito"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-9",
            frente: "Quais são as origens das receitas de capital?",
            verso:
              "OPERA ALI AMOR: Operações de crédito, Alienação de bens, Amortização de empréstimos concedidos, Transferências de capital, Outras receitas de capital.",
            tags: ["capital", "origens"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-16-10",
            frente:
              "A receita tributária é classificada como corrente ou de capital?",
            verso:
              "CORRENTE. Receitas tributárias (impostos, taxas, contribuições de melhoria) são receitas correntes pois AUMENTAM o patrimônio líquido do ente.",
            tags: ["tributária", "corrente"],
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
            id: "ap-q-16-1",
            enunciado: "Os estágios da receita pública, na ordem correta, são:",
            alternativas: [
              {
                letra: "A",
                texto: "lançamento, previsão, arrecadação e recolhimento.",
              },
              {
                letra: "B",
                texto: "previsão, lançamento, arrecadação e recolhimento.",
              },
              {
                letra: "C",
                texto: "arrecadação, lançamento, previsão e recolhimento.",
              },
              {
                letra: "D",
                texto: "recolhimento, arrecadação, lançamento e previsão.",
              },
              {
                letra: "E",
                texto: "previsão, arrecadação, lançamento e recolhimento.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Os estágios da receita são PLAR: PREVISÃO, LANÇAMENTO, ARRECADAÇÃO e RECOLHIMENTO, nesta ordem.",
            dificuldade: "Fácil",
            competencia: "Estágios da receita",
            banca: "IADES",
            tags: ["estágios", "ordem"],
          },
          {
            id: "ap-q-16-2",
            enunciado: "São classificadas como receitas correntes:",
            alternativas: [
              {
                letra: "A",
                texto: "operações de crédito e alienação de bens.",
              },
              { letra: "B", texto: "tributárias, patrimoniais e de serviços." },
              {
                letra: "C",
                texto:
                  "amortização de empréstimos e transferências de capital.",
              },
              {
                letra: "D",
                texto: "alienação de bens e receitas industriais.",
              },
              { letra: "E", texto: "operações de crédito e contribuições." },
            ],
            gabarito: "B",
            justificativa:
              "Receitas CORRENTES: tributárias, contribuições, patrimoniais, agropecuárias, industriais, serviços, transferências correntes. Operações de crédito e alienações são de CAPITAL.",
            dificuldade: "Fácil",
            competencia: "Receitas correntes",
            banca: "IADES",
            tags: ["correntes", "classificação"],
          },
          {
            id: "ap-q-16-3",
            enunciado: "A receita extraorçamentária caracteriza-se por:",
            alternativas: [
              { letra: "A", texto: "estar prevista na LOA." },
              { letra: "B", texto: "aumentar o patrimônio líquido do ente." },
              {
                letra: "C",
                texto:
                  "não estar prevista no orçamento e gerar obrigação de devolução.",
              },
              { letra: "D", texto: "ser de natureza tributária." },
              {
                letra: "E",
                texto: "decorrer de transferências constitucionais.",
              },
            ],
            gabarito: "C",
            justificativa:
              "Receita extraorçamentária NÃO está prevista no orçamento e gera obrigação de DEVOLUÇÃO. Ex: caução, depósitos, ARO.",
            dificuldade: "Média",
            competencia: "Receita extraorçamentária",
            banca: "IADES",
            tags: ["extraorçamentária", "conceito"],
          },
          {
            id: "ap-q-16-4",
            enunciado:
              "O estágio da receita em que o contribuinte efetua o pagamento ao agente arrecadador é a:",
            alternativas: [
              { letra: "A", texto: "previsão." },
              { letra: "B", texto: "lançamento." },
              { letra: "C", texto: "arrecadação." },
              { letra: "D", texto: "recolhimento." },
              { letra: "E", texto: "liquidação." },
            ],
            gabarito: "C",
            justificativa:
              "A ARRECADAÇÃO é o estágio em que o contribuinte efetua o pagamento ao agente arrecadador (banco, lotérica). O RECOLHIMENTO é a transferência ao Tesouro.",
            dificuldade: "Fácil",
            competencia: "Estágio da arrecadação",
            banca: "IADES",
            tags: ["arrecadação", "estágio"],
          },
          {
            id: "ap-q-16-5",
            enunciado: "As receitas de capital caracterizam-se por:",
            alternativas: [
              { letra: "A", texto: "aumentarem o patrimônio líquido do ente." },
              {
                letra: "B",
                texto: "não aumentarem o patrimônio líquido do ente.",
              },
              { letra: "C", texto: "serem exclusivamente tributárias." },
              { letra: "D", texto: "decorrerem apenas de serviços públicos." },
              { letra: "E", texto: "serem sempre extraorçamentárias." },
            ],
            gabarito: "B",
            justificativa:
              "Receitas de CAPITAL NÃO aumentam o patrimônio líquido. Ex: operações de crédito (geram passivo), alienação (reduzem ativo).",
            dificuldade: "Fácil",
            competencia: "Receitas de capital",
            banca: "IADES",
            tags: ["capital", "patrimônio"],
          },
          {
            id: "ap-q-16-6",
            enunciado: "São exemplos de receitas de capital:",
            alternativas: [
              { letra: "A", texto: "impostos e taxas." },
              { letra: "B", texto: "contribuições sociais e patrimoniais." },
              {
                letra: "C",
                texto: "operações de crédito e alienação de bens.",
              },
              { letra: "D", texto: "receitas de serviços e industriais." },
              { letra: "E", texto: "transferências correntes e tributárias." },
            ],
            gabarito: "C",
            justificativa:
              "Receitas de CAPITAL: operações de crédito, alienação de bens, amortização de empréstimos, transferências de capital.",
            dificuldade: "Fácil",
            competencia: "Receitas de capital",
            banca: "IADES",
            tags: ["capital", "exemplos"],
          },
          {
            id: "ap-q-16-7",
            enunciado: "O lançamento de ofício é caracterizado por:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "a autoridade fazer tudo, sem participação do contribuinte.",
              },
              {
                letra: "B",
                texto:
                  "o contribuinte calcular e pagar, aguardando homologação.",
              },
              {
                letra: "C",
                texto:
                  "o contribuinte prestar declaração, e a autoridade lançar.",
              },
              { letra: "D", texto: "não haver ato formal de lançamento." },
              { letra: "E", texto: "ser exclusivo para receitas de capital." },
            ],
            gabarito: "A",
            justificativa:
              "No lançamento DE OFÍCIO, a autoridade faz tudo: identifica fato gerador, contribuinte e valor. Ex: IPTU, IPVA.",
            dificuldade: "Média",
            competencia: "Lançamento de ofício",
            banca: "IADES",
            tags: ["lançamento", "ofício"],
          },
          {
            id: "ap-q-16-8",
            enunciado:
              "A transferência dos valores arrecadados para a conta única do Tesouro corresponde ao estágio da:",
            alternativas: [
              { letra: "A", texto: "previsão." },
              { letra: "B", texto: "lançamento." },
              { letra: "C", texto: "arrecadação." },
              { letra: "D", texto: "recolhimento." },
              { letra: "E", texto: "liquidação." },
            ],
            gabarito: "D",
            justificativa:
              "O RECOLHIMENTO é a transferência dos valores arrecadados para a conta única do Tesouro. É o último estágio da receita.",
            dificuldade: "Fácil",
            competencia: "Estágio do recolhimento",
            banca: "IADES",
            tags: ["recolhimento", "Tesouro"],
          },
          {
            id: "ap-q-16-9",
            enunciado: "A dívida ativa é:",
            alternativas: [
              {
                letra: "A",
                texto: "o valor dos empréstimos tomados pelo governo.",
              },
              {
                letra: "B",
                texto:
                  "o crédito público não pago no vencimento, inscrito após via administrativa.",
              },
              {
                letra: "C",
                texto: "a soma das receitas tributárias do exercício.",
              },
              {
                letra: "D",
                texto: "a previsão de receitas para o próximo exercício.",
              },
              { letra: "E", texto: "o total de transferências recebidas." },
            ],
            gabarito: "B",
            justificativa:
              "Dívida ativa é o crédito público NÃO PAGO no vencimento, inscrito após esgotada a via administrativa. Permite execução fiscal.",
            dificuldade: "Média",
            competencia: "Dívida ativa",
            banca: "IADES",
            tags: ["dívida ativa", "conceito"],
          },
          {
            id: "ap-q-16-10",
            enunciado: "A receita tributária é classificada como:",
            alternativas: [
              { letra: "A", texto: "receita de capital." },
              { letra: "B", texto: "receita corrente." },
              { letra: "C", texto: "receita extraorçamentária." },
              { letra: "D", texto: "ingresso de terceiros." },
              { letra: "E", texto: "operação de crédito." },
            ],
            gabarito: "B",
            justificativa:
              "Receita tributária (impostos, taxas, contribuições de melhoria) é receita CORRENTE, pois aumenta o patrimônio líquido do ente.",
            dificuldade: "Fácil",
            competencia: "Classificação tributária",
            banca: "IADES",
            tags: ["tributária", "corrente"],
          },
        ],
      },
    },
    {
      id: "ap-topico-17",
      numero: 17,
      titulo: "Despesa Pública: conceitos, classificação e estágios",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Despesa Pública

**Despesa pública** é o conjunto de dispêndios realizados pelo Estado para o funcionamento dos serviços públicos e atendimento das necessidades coletivas.

### Classificações da Despesa

| Critério | Tipos |
|----------|-------|
| **Quanto à categoria econômica** | Corrente e Capital |
| **Quanto ao grupo** | Pessoal, Juros, Outras Correntes, Investimentos, Inversões, Amortização |
| **Quanto à natureza** | Orçamentária e Extraorçamentária |
| **Institucional** | Por órgão/unidade orçamentária |
| **Funcional** | Por função e subfunção |
| **Programática** | Por programa, ação, subtítulo |

### Despesas CORRENTES vs CAPITAL

| CORRENTES | CAPITAL |
|-----------|---------|
| Não aumentam patrimônio | Aumentam patrimônio |
| Manutenção da máquina | Investimentos/expansão |
| Pessoal, custeio, juros | Obras, equipamentos, amortização |

### Estágios da Despesa - FELP

| Estágio | Descrição | Documento |
|---------|-----------|-----------|
| **F**ixação | Definição na LOA | LOA |
| **E**mpenho | Compromisso de pagamento | Nota de Empenho |
| **L**iquidação | Verificação do direito | Nota de Liquidação |
| **P**agamento | Entrega do numerário | Ordem de Pagamento |

### Para IADES - Memorize:
- FELP = Fixação, Empenho, Liquidação, Pagamento
- Empenho = cria OBRIGAÇÃO de pagar
- Liquidação = verifica DIREITO do credor
- Pagamento = EXTINÇÃO da obrigação
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Despesa Pública

**Despesa pública** é todo dispêndio de recursos do erário para:
- Manutenção dos serviços públicos
- Pagamento de pessoal
- Realização de investimentos
- Pagamento de dívidas
- Transferências a outras entidades

#### Sentidos de Despesa Pública

| Sentido | Conceito |
|---------|----------|
| **Amplo** | Toda saída de recursos dos cofres públicos |
| **Estrito** | Somente os gastos fixados na LOA |

### 2. Classificação da Despesa Pública

#### 2.1 Quanto à NATUREZA

| Tipo | Características | Exemplos |
|------|-----------------|----------|
| **Orçamentária** | Prevista no orçamento, depende de autorização legislativa | Pessoal, serviços, obras |
| **Extraorçamentária** | Não consta no orçamento, são restituições | Cauções, depósitos, consignações |

#### 2.2 Quanto à CATEGORIA ECONÔMICA (Lei 4.320/64)

##### Despesas CORRENTES

São despesas que **NÃO contribuem** diretamente para aquisição ou formação de bem de capital.

| Grupo | Descrição | Exemplos |
|-------|-----------|----------|
| **Pessoal e Encargos** | Remuneração dos agentes | Salários, 13º, férias, INSS |
| **Juros e Encargos** | Dívida pública | Juros, comissões, taxas |
| **Outras Despesas Correntes** | Manutenção | Material de consumo, diárias, serviços |

##### Despesas de CAPITAL

São despesas que **contribuem** diretamente para aquisição ou formação de bem de capital.

| Grupo | Descrição | Exemplos |
|-------|-----------|----------|
| **Investimentos** | Aumento de patrimônio | Obras, equipamentos, instalações |
| **Inversões Financeiras** | Aquisição de bens já existentes | Aquisição de imóveis, títulos, ações |
| **Amortização da Dívida** | Pagamento do principal | Amortização de empréstimos |

#### Macete: CORRENTE x CAPITAL

\`\`\`
CORRENTE = ConSome (material de CONSUMO, manutenção)
CAPITAL = ConStruir (construção, patrimônio permanente)
\`\`\`

#### 2.3 Classificação FUNCIONAL

Identifica em **qual área** a despesa será realizada.

| Elemento | Descrição | Exemplo |
|----------|-----------|---------|
| **Função** | Maior agregação das áreas | 10 - Saúde |
| **Subfunção** | Partição da função | 301 - Atenção Básica |

**Funções de Governo (principais):**
- 01 - Legislativa
- 04 - Administração
- 10 - Saúde
- 12 - Educação
- 06 - Segurança Pública

#### 2.4 Classificação INSTITUCIONAL

Identifica **quem** é responsável pela despesa.

| Elemento | Descrição | Exemplo |
|----------|-----------|---------|
| **Órgão** | Ministério, Secretaria | 36000 - Ministério da Saúde |
| **Unidade Orçamentária** | Subdivisão do órgão | 36201 - ANVISA |

#### 2.5 Classificação PROGRAMÁTICA

Identifica **para quê** a despesa será realizada.

| Elemento | Descrição |
|----------|-----------|
| **Programa** | Conjunto de ações para objetivo comum |
| **Ação** | Operação que resulta em produto |
| **Subtítulo** | Localização geográfica |

### 3. Estágios da Despesa Pública

A despesa passa por **quatro estágios** obrigatórios: **FELP**

#### 3.1 FIXAÇÃO

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Estabelecimento da dotação na LOA |
| **Momento** | Fase de elaboração orçamentária |
| **Característica** | Define o limite máximo de gasto |
| **Documento** | Lei Orçamentária Anual |

**Importante:** A LOA fixa as despesas (limite máximo) e estima as receitas.

#### 3.2 EMPENHO (Art. 58-60, Lei 4.320/64)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Ato que cria para o Estado obrigação de pagamento |
| **Natureza** | **Primeiro estágio da execução** |
| **Documento** | Nota de Empenho |
| **Efeito** | Reserva de dotação orçamentária |

**É VEDADO realizar despesa sem prévio empenho!** (Art. 60, Lei 4.320/64)

##### Modalidades de Empenho

| Modalidade | Característica | Exemplo |
|------------|----------------|---------|
| **Ordinário** | Valor exato e conhecido, pagamento único | Compra de equipamento |
| **Estimativo** | Valor não pode ser previamente determinado | Água, luz, telefone |
| **Global** | Valor determinado, pagamento parcelado | Contrato de serviços |

#### 3.3 LIQUIDAÇÃO (Art. 62-63, Lei 4.320/64)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Verificação do direito adquirido pelo credor |
| **Objetivo** | Apurar origem, objeto e valor exato |
| **Verificação** | Entrega do bem/serviço conforme contrato |
| **Documento** | Ateste, nota fiscal, nota de liquidação |

**Na liquidação, verifica-se:**
1. Origem e objeto do que se deve pagar
2. Importância exata a pagar
3. A quem se deve pagar

#### 3.4 PAGAMENTO (Art. 64-65, Lei 4.320/64)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Entrega do numerário ao credor |
| **Condição** | Após regular liquidação |
| **Efeito** | Extinção da obrigação |
| **Documento** | Ordem de pagamento |

**Ordem de pagamento** = despacho da autoridade ordenando o pagamento.

### 4. Quadro Resumo dos Estágios - FELP

| Estágio | O que faz | Pergunta-chave | Documento |
|---------|-----------|----------------|-----------|
| **Fixação** | Autoriza a despesa | Quanto PODE gastar? | LOA |
| **Empenho** | Reserva o crédito | Quanto VAI gastar? | Nota de Empenho |
| **Liquidação** | Confirma o direito | O credor ENTREGOU? | Ateste/NL |
| **Pagamento** | Extingue a obrigação | Credor RECEBEU? | Ordem Pagamento |

### 5. Créditos Adicionais

Quando a dotação é insuficiente ou inexistente:

| Tipo | Autorização | Abertura | Quando usar |
|------|-------------|----------|-------------|
| **Suplementar** | Lei (pode LOA) | Decreto | Reforço de dotação |
| **Especial** | Lei específica | Decreto | Despesa sem dotação |
| **Extraordinário** | MP ou Decreto | Ato próprio | Guerra, calamidade, comoção |

### 6. Despesa Pública e Vigilância Sanitária

| Classificação | Aplicação na VISA |
|---------------|-------------------|
| **Funcional** | 10 - Saúde / 304 - Vigilância Sanitária |
| **Institucional** | SES-GO, VISA Municipal, ANVISA |
| **Econômica** | Pessoal (corrente), Equipamentos (capital) |
        `,

        pontosChave: [
          "Despesa pública = dispêndios do Estado para serviços públicos e necessidades coletivas",
          "Classificação econômica: CORRENTES (manutenção) e CAPITAL (patrimônio)",
          "Despesas CORRENTES: pessoal, juros, outras correntes (não aumentam patrimônio)",
          "Despesas de CAPITAL: investimentos, inversões, amortização (aumentam patrimônio)",
          "Estágios da despesa: FELP (Fixação, Empenho, Liquidação, Pagamento)",
          "FIXAÇÃO: autorização na LOA (limite máximo)",
          "EMPENHO: cria obrigação de pagamento (é VEDADO despesa sem empenho)",
          "Empenho: ordinário (valor exato), estimativo (variável), global (parcelado)",
          "LIQUIDAÇÃO: verifica direito do credor (entrega do bem/serviço)",
          "PAGAMENTO: extinção da obrigação (entrega do dinheiro)",
          "Créditos adicionais: suplementar, especial, extraordinário",
        ],

        armadilhas: [
          {
            titulo: "Confundir estágios da RECEITA com DESPESA",
            descricao: "Receita: PLAR (Previsão, Lançamento, Arrecadação, Recolhimento). Despesa: FELP.",
            dica: "Receita = PLAR, Despesa = FELP",
          },
          {
            titulo: "Achar que empenho é o pagamento",
            descricao: "EMPENHO apenas cria a obrigação. PAGAMENTO é a extinção da obrigação.",
            dica: "Empenho = compromisso. Pagamento = quitação.",
          },
          {
            titulo: "Confundir liquidação com pagamento",
            descricao: "LIQUIDAÇÃO verifica o direito. PAGAMENTO entrega o dinheiro.",
            dica: "Liquidação = conferência. Pagamento = dinheiro na conta.",
          },
          {
            titulo: "Investimento x Inversão Financeira",
            descricao: "INVESTIMENTO cria bem novo. INVERSÃO adquire bem já existente.",
            dica: "Obra nova = investimento. Comprar imóvel pronto = inversão.",
          },
          {
            titulo: "Empenho estimativo x global",
            descricao: "ESTIMATIVO: valor incerto. GLOBAL: valor certo, pagamento parcelado.",
            dica: "Conta de luz = estimativo. Contrato anual = global.",
          },
          {
            titulo: "Crédito especial x suplementar",
            descricao: "SUPLEMENTAR reforça dotação existente. ESPECIAL cria dotação nova.",
            dica: "Já existe mas falta = suplementar. Não existe = especial.",
          },
        ],

        mnemonicos: [
          {
            termo: "FELP",
            significado: "Estágios da Despesa",
            frase: "Fixação, Empenho, Liquidação, Pagamento",
          },
          {
            termo: "PLAR x FELP",
            significado: "Receita x Despesa",
            frase: "Receita = PLAR (entra). Despesa = FELP (sai).",
          },
          {
            termo: "E-L-P",
            significado: "Execução da despesa",
            frase: "Empenhar → Liquidar → Pagar (nessa ordem, sempre!)",
          },
          {
            termo: "Corrente = Consome",
            significado: "Despesa corrente",
            frase: "Despesa Corrente = material de CONSumo, manutenção",
          },
          {
            termo: "Capital = Constrói",
            significado: "Despesa de capital",
            frase: "Despesa de Capital = CONSTRói patrimônio",
          },
          {
            termo: "OEG",
            significado: "Modalidades de empenho",
            frase: "Ordinário (exato), Estimativo (variável), Global (parcelado)",
          },
          {
            termo: "SEE",
            significado: "Créditos adicionais",
            frase: "Suplementar (reforço), Especial (novo), Extraordinário (urgente)",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-17-1",
            frente: "Quais são os ESTÁGIOS da despesa pública?",
            verso: "**FELP:**\\n\\n1. **F**ixação - autorização na LOA\\n2. **E**mpenho - cria obrigação\\n3. **L**iquidação - verifica direito\\n4. **P**agamento - extingue obrigação",
            tags: ["estágios", "despesa", "FELP"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-2",
            frente: "O que é o EMPENHO?",
            verso: "É o ato emanado de autoridade competente que **cria para o Estado obrigação de pagamento**.\\n\\n- Primeiro estágio da EXECUÇÃO\\n- Documento: Nota de Empenho\\n- É VEDADO despesa sem prévio empenho\\n\\nModalidades: Ordinário, Estimativo, Global",
            tags: ["empenho", "conceito"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-3",
            frente: "Quais são as MODALIDADES de empenho?",
            verso: "**OEG:**\\n\\n1. **Ordinário**: valor exato, pagamento único\\n   Ex: compra de computador\\n\\n2. **Estimativo**: valor não determinável\\n   Ex: conta de luz, água\\n\\n3. **Global**: valor determinado, pagamento parcelado\\n   Ex: contrato de 12 meses",
            tags: ["empenho", "modalidades"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-4",
            frente: "O que é a LIQUIDAÇÃO da despesa?",
            verso: "É a verificação do **direito adquirido pelo credor**.\\n\\nVerifica-se:\\n- Origem e objeto do que se deve pagar\\n- Importância exata a pagar\\n- A quem se deve pagar\\n\\nComprova-se a entrega do bem/serviço.",
            tags: ["liquidação", "conceito"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-5",
            frente: "Qual a diferença entre despesas CORRENTES e de CAPITAL?",
            verso: "**CORRENTES:**\\n- NÃO aumentam patrimônio\\n- Manutenção da máquina\\n- Ex: pessoal, juros, material de consumo\\n\\n**CAPITAL:**\\n- AUMENTAM patrimônio\\n- Investimentos/expansão\\n- Ex: obras, equipamentos, amortização",
            tags: ["corrente", "capital", "diferença"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-6",
            frente: "Qual a diferença entre INVESTIMENTO e INVERSÃO FINANCEIRA?",
            verso: "**INVESTIMENTO:**\\n- Cria bem NOVO\\n- Aumenta a produção\\n- Ex: construir prédio, comprar máquina nova\\n\\n**INVERSÃO FINANCEIRA:**\\n- Adquire bem JÁ existente\\n- Não aumenta produção\\n- Ex: comprar imóvel pronto, ações",
            tags: ["investimento", "inversão", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-7",
            frente: "Quais são os tipos de CRÉDITOS ADICIONAIS?",
            verso: "**SEE:**\\n\\n1. **Suplementar**: reforço de dotação existente\\n2. **Especial**: despesa sem dotação (nova)\\n3. **Extraordinário**: guerra, calamidade, comoção\\n\\nSupl/Especial = Lei + Decreto\\nExtraordinário = MP ou Decreto",
            tags: ["créditos adicionais", "tipos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-8",
            frente: "Quais são os grupos de despesas CORRENTES?",
            verso: "1. **Pessoal e Encargos Sociais**\\n   Salários, 13º, INSS, FGTS\\n\\n2. **Juros e Encargos da Dívida**\\n   Juros, comissões, taxas\\n\\n3. **Outras Despesas Correntes**\\n   Material de consumo, diárias, passagens, serviços",
            tags: ["correntes", "grupos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-9",
            frente: "Quais são os grupos de despesas de CAPITAL?",
            verso: "1. **Investimentos**\\n   Obras, equipamentos, instalações (NOVOS)\\n\\n2. **Inversões Financeiras**\\n   Aquisição de bens já existentes, títulos, ações\\n\\n3. **Amortização da Dívida**\\n   Pagamento do principal dos empréstimos",
            tags: ["capital", "grupos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-17-10",
            frente: "O que é a classificação FUNCIONAL da despesa?",
            verso: "Identifica em **qual área** a despesa será realizada.\\n\\n- **Função**: maior agregação (ex: 10-Saúde)\\n- **Subfunção**: partição da função (ex: 304-Vigilância Sanitária)\\n\\nFunções principais: Legislativa, Administração, Saúde, Educação, Segurança",
            tags: ["funcional", "classificação"],
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
            id: "ap-q-17-1",
            enunciado: "Os estágios da despesa pública, em sua ordem correta, são:",
            alternativas: [
              { letra: "A", texto: "empenho, liquidação, fixação e pagamento." },
              { letra: "B", texto: "fixação, empenho, liquidação e pagamento." },
              { letra: "C", texto: "previsão, lançamento, arrecadação e recolhimento." },
              { letra: "D", texto: "liquidação, empenho, pagamento e fixação." },
              { letra: "E", texto: "pagamento, fixação, empenho e liquidação." },
            ],
            gabarito: "B",
            justificativa: "Os estágios da DESPESA são: FELP - Fixação, Empenho, Liquidação e Pagamento (nessa ordem). A alternativa C refere-se aos estágios da RECEITA (PLAR).",
            dificuldade: "Fácil",
            competencia: "Estágios da despesa",
            banca: "IADES",
            tags: ["estágios", "FELP"],
          },
          {
            id: "ap-q-17-2",
            enunciado: "O empenho da despesa pública é:",
            alternativas: [
              { letra: "A", texto: "a entrega do numerário ao credor." },
              { letra: "B", texto: "o ato que cria para o Estado obrigação de pagamento." },
              { letra: "C", texto: "a verificação do direito adquirido pelo credor." },
              { letra: "D", texto: "a autorização da despesa na Lei Orçamentária." },
              { letra: "E", texto: "a extinção da obrigação do Estado." },
            ],
            gabarito: "B",
            justificativa: "Empenho é o ato emanado de autoridade competente que cria para o Estado OBRIGAÇÃO de pagamento. A = pagamento, C = liquidação, D = fixação, E = pagamento.",
            dificuldade: "Fácil",
            competencia: "Conceito de empenho",
            banca: "IADES",
            tags: ["empenho", "conceito"],
          },
          {
            id: "ap-q-17-3",
            enunciado: "São modalidades de empenho, EXCETO:",
            alternativas: [
              { letra: "A", texto: "ordinário." },
              { letra: "B", texto: "estimativo." },
              { letra: "C", texto: "global." },
              { letra: "D", texto: "parcelado." },
              { letra: "E", texto: "todos são modalidades de empenho." },
            ],
            gabarito: "D",
            justificativa: "As modalidades de empenho são: ORDINÁRIO (valor exato, pagamento único), ESTIMATIVO (valor variável) e GLOBAL (valor certo, pagamento parcelado). 'Parcelado' não é modalidade de empenho.",
            dificuldade: "Média",
            competencia: "Modalidades de empenho",
            banca: "IADES",
            tags: ["empenho", "modalidades"],
          },
          {
            id: "ap-q-17-4",
            enunciado: "A liquidação da despesa consiste na:",
            alternativas: [
              { letra: "A", texto: "autorização para realização da despesa." },
              { letra: "B", texto: "criação de obrigação de pagamento." },
              { letra: "C", texto: "verificação do direito adquirido pelo credor." },
              { letra: "D", texto: "entrega do numerário ao credor." },
              { letra: "E", texto: "reserva de dotação orçamentária." },
            ],
            gabarito: "C",
            justificativa: "A LIQUIDAÇÃO é a verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do crédito (art. 63, Lei 4.320/64).",
            dificuldade: "Fácil",
            competencia: "Conceito de liquidação",
            banca: "IADES",
            tags: ["liquidação", "conceito"],
          },
          {
            id: "ap-q-17-5",
            enunciado: "As despesas com pessoal e encargos sociais classificam-se como despesas:",
            alternativas: [
              { letra: "A", texto: "de capital - investimentos." },
              { letra: "B", texto: "de capital - inversões financeiras." },
              { letra: "C", texto: "correntes." },
              { letra: "D", texto: "extraorçamentárias." },
              { letra: "E", texto: "de capital - amortização da dívida." },
            ],
            gabarito: "C",
            justificativa: "Despesas com Pessoal e Encargos Sociais são despesas CORRENTES, pois não contribuem para aumento do patrimônio. São despesas de manutenção da máquina pública.",
            dificuldade: "Fácil",
            competencia: "Classificação econômica",
            banca: "IADES",
            tags: ["pessoal", "corrente"],
          },
          {
            id: "ap-q-17-6",
            enunciado: "A construção de uma nova sede para um órgão público é classificada como despesa de:",
            alternativas: [
              { letra: "A", texto: "custeio." },
              { letra: "B", texto: "inversão financeira." },
              { letra: "C", texto: "investimento." },
              { letra: "D", texto: "transferência de capital." },
              { letra: "E", texto: "amortização da dívida." },
            ],
            gabarito: "C",
            justificativa: "Construção de nova sede é INVESTIMENTO (despesa de capital), pois cria bem NOVO, aumentando o patrimônio público. Inversão financeira seria a COMPRA de imóvel já existente.",
            dificuldade: "Média",
            competencia: "Investimento x Inversão",
            banca: "IADES",
            tags: ["investimento", "capital"],
          },
          {
            id: "ap-q-17-7",
            enunciado: "O empenho utilizado para despesas cujo montante não pode ser previamente determinado, como contas de água e energia elétrica, denomina-se:",
            alternativas: [
              { letra: "A", texto: "ordinário." },
              { letra: "B", texto: "global." },
              { letra: "C", texto: "estimativo." },
              { letra: "D", texto: "especial." },
              { letra: "E", texto: "suplementar." },
            ],
            gabarito: "C",
            justificativa: "O empenho ESTIMATIVO é usado quando o valor não pode ser previamente determinado (variável). Exemplos: água, luz, telefone. Ordinário = valor exato. Global = valor certo, pagamento parcelado.",
            dificuldade: "Média",
            competencia: "Empenho estimativo",
            banca: "IADES",
            tags: ["estimativo", "empenho"],
          },
          {
            id: "ap-q-17-8",
            enunciado: "Sobre os créditos adicionais, é CORRETO afirmar:",
            alternativas: [
              { letra: "A", texto: "o crédito suplementar destina-se a despesas sem dotação orçamentária." },
              { letra: "B", texto: "o crédito especial destina-se ao reforço de dotação orçamentária." },
              { letra: "C", texto: "o crédito extraordinário destina-se a despesas urgentes e imprevistas, como calamidade." },
              { letra: "D", texto: "todos os créditos adicionais independem de autorização legislativa." },
              { letra: "E", texto: "o crédito suplementar é aberto por medida provisória." },
            ],
            gabarito: "C",
            justificativa: "Crédito EXTRAORDINÁRIO destina-se a despesas urgentes e imprevistas (guerra, calamidade, comoção). SUPLEMENTAR = reforço (A e B invertidas). Suplementar e especial exigem lei.",
            dificuldade: "Média",
            competencia: "Créditos adicionais",
            banca: "IADES",
            tags: ["créditos adicionais", "extraordinário"],
          },
          {
            id: "ap-q-17-9",
            enunciado: "Conforme a Lei nº 4.320/64, é VEDADO:",
            alternativas: [
              { letra: "A", texto: "realizar empenho antes da liquidação." },
              { letra: "B", texto: "realizar despesa sem prévio empenho." },
              { letra: "C", texto: "realizar pagamento após a liquidação." },
              { letra: "D", texto: "utilizar empenho estimativo." },
              { letra: "E", texto: "abrir créditos suplementares." },
            ],
            gabarito: "B",
            justificativa: "Art. 60 da Lei 4.320/64: 'É VEDADA a realização de despesa sem prévio empenho'. O empenho é pré-requisito obrigatório para qualquer despesa.",
            dificuldade: "Fácil",
            competencia: "Vedação de despesa sem empenho",
            banca: "IADES",
            tags: ["empenho", "vedação"],
          },
          {
            id: "ap-q-17-10",
            enunciado: "O pagamento da despesa pública ocorre:",
            alternativas: [
              { letra: "A", texto: "antes do empenho." },
              { letra: "B", texto: "antes da liquidação." },
              { letra: "C", texto: "somente após regular liquidação." },
              { letra: "D", texto: "independentemente de liquidação." },
              { letra: "E", texto: "antes da fixação da despesa." },
            ],
            gabarito: "C",
            justificativa: "O PAGAMENTO é o último estágio e só pode ocorrer após regular LIQUIDAÇÃO (art. 62, Lei 4.320/64). A ordem é: Fixação → Empenho → Liquidação → Pagamento.",
            dificuldade: "Fácil",
            competencia: "Ordem dos estágios",
            banca: "IADES",
            tags: ["pagamento", "liquidação"],
          },
        ],
      },
    },
    {
      id: "ap-topico-18",
      numero: 18,
      titulo: "Restos a Pagar e Dívida Pública",
      conteudo: {
        resumo: `
## Resumo Rápido

### Restos a Pagar (RAP)

| Conceito | Despesas empenhadas mas NÃO pagas até 31/12 |
|----------|---------------------------------------------|
| **Base legal** | Art. 36, Lei 4.320/64 |
| **Natureza** | Despesa extraorçamentária no ano seguinte |

### Tipos de Restos a Pagar

| Tipo | Situação | Obrigação |
|------|----------|-----------|
| **Processados** | Empenhados E liquidados | Mais forte (direito adquirido) |
| **Não Processados** | Empenhados, mas NÃO liquidados | Pode ser cancelado |

### Regra de Ouro dos RAP

\`\`\`
RAP PROCESSADO = já liquidou = TEM que pagar
RAP NÃO PROCESSADO = não liquidou = PODE cancelar
\`\`\`

### Dívida Pública

| Tipo | Prazo | Finalidade |
|------|-------|------------|
| **Flutuante** | Curto prazo (< 12 meses) | Caixa, fluxo |
| **Fundada/Consolidada** | Longo prazo (> 12 meses) | Investimentos |

### Componentes da Dívida FLUTUANTE

| Componente | Descrição |
|------------|-----------|
| Restos a Pagar | Despesas empenhadas não pagas |
| Serviços da dívida a pagar | Juros e encargos |
| Depósitos de terceiros | Cauções, garantias |
| Débitos de tesouraria | ARO (Antecipação de Receita) |

### Para IADES:
- RAP Processado = LIQUIDADO (mais seguro)
- RAP Não Processado = NÃO liquidado (pode cancelar)
- Restos a Pagar fazem parte da dívida FLUTUANTE
- LRF limita inscrição de RAP no último ano de mandato
        `,

        explicacao: `
## Explicação Didática

### 1. Restos a Pagar - Conceito

**Restos a Pagar (RAP)** são as despesas **empenhadas** mas **não pagas** até 31 de dezembro de cada exercício financeiro.

> Art. 36, Lei 4.320/64: "Consideram-se Restos a Pagar as despesas empenhadas mas não pagas até o dia 31 de dezembro..."

#### Fundamento

O princípio da **anualidade orçamentária** exige que a execução ocorra dentro do exercício. Porém, nem sempre é possível pagar todas as despesas empenhadas no mesmo ano. Assim, surgem os Restos a Pagar.

#### Regime de Competência

| Despesa é registrada | Quando ocorre |
|---------------------|---------------|
| No orçamento | Quando é EMPENHADA |
| Como RAP | Se não for PAGA no mesmo exercício |

### 2. Tipos de Restos a Pagar

#### 2.1 Restos a Pagar PROCESSADOS

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Despesas empenhadas E LIQUIDADAS |
| **Situação** | O credor já entregou o bem/serviço |
| **Direito** | Credor tem DIREITO ADQUIRIDO |
| **Cancelamento** | NÃO pode ser cancelado |
| **Prescrição** | 5 anos (Decreto 20.910/32) |

**Exemplo:** Contrato de obras executado em outubro, nota fiscal emitida em novembro, mas pagamento só em fevereiro do ano seguinte.

#### 2.2 Restos a Pagar NÃO PROCESSADOS

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Despesas empenhadas, mas NÃO liquidadas |
| **Situação** | O credor ainda NÃO entregou o bem/serviço |
| **Direito** | Credor NÃO tem direito adquirido |
| **Cancelamento** | PODE ser cancelado |
| **Validade** | Até 30/06 do 2º ano seguinte (regra federal) |

**Exemplo:** Empenho feito em dezembro para material de escritório, mas entrega só em janeiro do ano seguinte.

### 3. Quadro Comparativo dos RAP

| Aspecto | PROCESSADO | NÃO PROCESSADO |
|---------|------------|----------------|
| **Empenho** | ✓ Sim | ✓ Sim |
| **Liquidação** | ✓ Sim | ✗ Não |
| **Pagamento** | ✗ Não | ✗ Não |
| **Direito do credor** | Adquirido | Não adquirido |
| **Pode cancelar** | Não | Sim |
| **Execução** | Obrigatória | Depende da entrega |

### 4. Inscrição em Restos a Pagar

#### Momento da Inscrição
- Ocorre em **31 de dezembro** de cada ano
- Automática para despesas empenhadas não pagas

#### Registro Contábil

| No ano do empenho | No ano do pagamento |
|-------------------|---------------------|
| Despesa ORÇAMENTÁRIA | Despesa EXTRAORÇAMENTÁRIA |
| Afeta resultado orçamentário | NÃO afeta resultado orçamentário |

### 5. Restos a Pagar na LRF

A **Lei de Responsabilidade Fiscal** (LC 101/2000) trouxe restrições importantes:

#### Art. 42 - Vedação no Final de Mandato

> "É VEDADO ao titular de Poder ou órgão, nos **últimos dois quadrimestres** do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte **sem que haja suficiente disponibilidade de caixa** para este efeito."

| Situação | Regra |
|----------|-------|
| Últimos 8 meses de mandato | Vedado contrair despesa sem cobertura |
| Inscrição em RAP | Só se houver disponibilidade de caixa |
| Descumprimento | Crime de responsabilidade fiscal |

### 6. Dívida Pública - Conceito

**Dívida pública** é o conjunto de obrigações financeiras assumidas pelo Estado em decorrência de operações de crédito, empréstimos e financiamentos.

### 7. Classificação da Dívida Pública

#### 7.1 Dívida FLUTUANTE (Curto Prazo)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Dívida de curto prazo (até 12 meses) |
| **Finalidade** | Administração de caixa |
| **Autorização** | NÃO depende de autorização legislativa |
| **Lei** | Art. 92, Lei 4.320/64 |

**Componentes da Dívida Flutuante:**

| Componente | Descrição |
|------------|-----------|
| **Restos a Pagar** | Despesas empenhadas não pagas |
| **Serviços da dívida a pagar** | Juros e encargos pendentes |
| **Depósitos de terceiros** | Cauções, garantias, consignações |
| **Débitos de tesouraria** | ARO (Antecipação de Receita Orçamentária) |

#### 7.2 Dívida FUNDADA ou CONSOLIDADA (Longo Prazo)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Dívida de longo prazo (> 12 meses) |
| **Finalidade** | Financiar investimentos |
| **Autorização** | DEPENDE de autorização legislativa |
| **Lei** | Art. 98, Lei 4.320/64 |

**Componentes da Dívida Fundada:**

| Componente | Descrição |
|------------|-----------|
| **Operações de crédito** | Empréstimos internos e externos |
| **Precatórios** | Dívidas judiciais (> 12 meses) |
| **Títulos públicos** | LTN, LFT, NTN-B |
| **Parcelamentos** | Tributos parcelados (> 12 meses) |

### 8. Quadro Comparativo - Dívida Flutuante x Fundada

| Aspecto | FLUTUANTE | FUNDADA |
|---------|-----------|---------|
| **Prazo** | Curto (≤ 12 meses) | Longo (> 12 meses) |
| **Autorização** | Não precisa | Precisa (legislativa) |
| **Finalidade** | Caixa | Investimentos |
| **Exemplos** | RAP, ARO, cauções | Empréstimos, títulos, precatórios |
| **Base legal** | Art. 92, Lei 4.320 | Art. 98, Lei 4.320 |

### 9. Dívida Pública na LRF

#### Limites de Endividamento

| Ente | Limite (% da RCL) |
|------|-------------------|
| **União** | Definido pelo Senado |
| **Estados/DF** | 200% da RCL |
| **Municípios** | 120% da RCL |

#### Recondução ao Limite

Se ultrapassar o limite:
- Prazo de **3 quadrimestres** para recondução
- Redução mínima de **25%** no primeiro quadrimestre
- Enquanto não reconduzir: vedações a operações de crédito

### 10. Operações de Crédito

#### Conceito
Compromisso financeiro assumido em razão de mútuo, abertura de crédito, emissão de títulos, etc.

#### Regra de Ouro (Art. 167, III, CF)

> "É VEDADA a realização de operações de crédito que excedam o montante das despesas de CAPITAL."

| O que significa | Regra |
|-----------------|-------|
| Operações de crédito | ≤ Despesas de capital |
| Não pode pegar emprestado | Para pagar despesas correntes |
| Exceção | Créditos suplementares com autorização legislativa |

### 11. ARO - Antecipação de Receita Orçamentária

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Empréstimo para cobrir insuficiência de caixa |
| **Natureza** | Dívida FLUTUANTE |
| **Prazo** | Até 10 de dezembro do mesmo ano |
| **Vedação** | No último ano de mandato |
| **Garantia** | Receitas próprias |

### 12. Resumo Prático - Vigilância Sanitária

| Situação | Classificação |
|----------|---------------|
| Empenho em dezembro, pagamento em janeiro | RAP (processado ou não) |
| Contrato de obras > 12 meses | Pode gerar dívida fundada |
| Cauções de contratos | Dívida flutuante |
| Material entregue, não pago | RAP Processado |
        `,

        pontosChave: [
          "Restos a Pagar = despesas EMPENHADAS mas NÃO PAGAS até 31/12",
          "RAP PROCESSADOS = empenhados E liquidados (direito adquirido, não pode cancelar)",
          "RAP NÃO PROCESSADOS = empenhados mas NÃO liquidados (pode cancelar)",
          "RAP fazem parte da DÍVIDA FLUTUANTE",
          "Dívida FLUTUANTE = curto prazo (≤ 12 meses), não precisa autorização",
          "Dívida FUNDADA = longo prazo (> 12 meses), precisa autorização legislativa",
          "Componentes da flutuante: RAP, ARO, depósitos, serviços da dívida",
          "LRF veda RAP nos últimos 2 quadrimestres sem disponibilidade de caixa",
          "Limites de dívida: Estados 200% RCL, Municípios 120% RCL",
          "Regra de Ouro: operações de crédito ≤ despesas de capital",
          "ARO = Antecipação de Receita Orçamentária (dívida flutuante)",
        ],

        armadilhas: [
          {
            titulo: "Confundir RAP Processado com Não Processado",
            descricao: "PROCESSADO = liquidado (credor entregou). NÃO PROCESSADO = não liquidado.",
            dica: "Processado = passou pelo processo de liquidação.",
          },
          {
            titulo: "RAP como despesa orçamentária",
            descricao: "RAP é despesa EXTRAORÇAMENTÁRIA no ano do pagamento.",
            dica: "No ano do empenho = orçamentária. No ano do pagamento do RAP = extraorçamentária.",
          },
          {
            titulo: "Dívida flutuante precisa de autorização",
            descricao: "Dívida FLUTUANTE NÃO precisa de autorização legislativa. FUNDADA precisa.",
            dica: "Flutuante = flui sem autorização. Fundada = tem fundamento legal (autorização).",
          },
          {
            titulo: "ARO é dívida fundada",
            descricao: "ARO (Antecipação de Receita) é dívida FLUTUANTE, não fundada.",
            dica: "ARO = curto prazo (até dezembro) = flutuante.",
          },
          {
            titulo: "Precatórios são dívida flutuante",
            descricao: "Precatórios (> 12 meses) são dívida FUNDADA, não flutuante.",
            dica: "Precatório = longo prazo = fundada.",
          },
          {
            titulo: "Cancelamento de RAP Processado",
            descricao: "RAP PROCESSADO não pode ser cancelado (direito adquirido do credor).",
            dica: "Se liquidou, tem que pagar. Só RAP não processado pode cancelar.",
          },
        ],

        mnemonicos: [
          {
            termo: "RAP = Restou A Pagar",
            significado: "Restos a Pagar",
            frase: "Empenhou, não pagou até 31/12 = RESTOU A PAGAR",
          },
          {
            termo: "Processado = Passou pelo processo",
            significado: "RAP Processado",
            frase: "Processado = PASSOU pelo processo de liquidação (entregou)",
          },
          {
            termo: "FLU-CUR / FUN-LON",
            significado: "Flutuante x Fundada",
            frase: "FLUtuante = CURto prazo. FUNdada = LONgo prazo",
          },
          {
            termo: "RSDD",
            significado: "Componentes da Dívida Flutuante",
            frase: "Restos a pagar, Serviços da dívida, Depósitos, Débitos (ARO)",
          },
          {
            termo: "ARO = Até o final do ano",
            significado: "ARO - Antecipação de Receita",
            frase: "ARO deve ser paga até 10 de dezembro do MESMO ano",
          },
          {
            termo: "200-120",
            significado: "Limites de dívida fundada",
            frase: "Estados = 200% RCL, Municípios = 120% RCL",
          },
          {
            termo: "Regra de Ouro = Empréstimo ≤ Capital",
            significado: "Art. 167, III, CF",
            frase: "Operações de crédito NÃO podem superar despesas de CAPITAL",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-18-1",
            frente: "O que são RESTOS A PAGAR?",
            verso: "São despesas **EMPENHADAS** mas **NÃO PAGAS** até 31 de dezembro.\\n\\nBase legal: Art. 36, Lei 4.320/64\\n\\nNatureza: despesa extraorçamentária no ano do pagamento.",
            tags: ["RAP", "conceito"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-2",
            frente: "Qual a diferença entre RAP PROCESSADO e NÃO PROCESSADO?",
            verso: "**PROCESSADO:**\\n- Empenhado E LIQUIDADO\\n- Credor ENTREGOU o bem/serviço\\n- Direito adquirido\\n- NÃO pode cancelar\\n\\n**NÃO PROCESSADO:**\\n- Empenhado, NÃO liquidado\\n- Credor NÃO entregou\\n- Pode ser cancelado",
            tags: ["RAP", "processado", "não processado"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-3",
            frente: "Quais são os tipos de DÍVIDA PÚBLICA?",
            verso: "**FLUTUANTE (curto prazo):**\\n- ≤ 12 meses\\n- NÃO precisa autorização\\n- Ex: RAP, ARO, depósitos\\n\\n**FUNDADA (longo prazo):**\\n- > 12 meses\\n- PRECISA autorização legislativa\\n- Ex: empréstimos, títulos, precatórios",
            tags: ["dívida", "flutuante", "fundada"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-4",
            frente: "Quais são os componentes da DÍVIDA FLUTUANTE?",
            verso: "**RSDD:**\\n\\n1. **R**estos a Pagar\\n2. **S**erviços da dívida a pagar\\n3. **D**epósitos de terceiros (cauções)\\n4. **D**ébitos de tesouraria (ARO)\\n\\n(Art. 92, Lei 4.320/64)",
            tags: ["flutuante", "componentes"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-5",
            frente: "O que é a REGRA DE OURO do orçamento?",
            verso: "Art. 167, III, CF:\\n\\n**Operações de crédito NÃO podem exceder despesas de CAPITAL.**\\n\\nSignifica: não pode pegar empréstimo para pagar despesa corrente (salário, custeio).\\n\\nEmpréstimo deve ser para INVESTIMENTO.",
            tags: ["regra de ouro", "art. 167"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-6",
            frente: "Quais são os limites de DÍVIDA FUNDADA na LRF?",
            verso: "**Resolução SF 40/2001:**\\n\\n- **Estados/DF**: 200% da RCL\\n- **Municípios**: 120% da RCL\\n- **União**: definido pelo Senado\\n\\nRCL = Receita Corrente Líquida",
            tags: ["limites", "dívida fundada", "LRF"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-7",
            frente: "O que é ARO - Antecipação de Receita Orçamentária?",
            verso: "**Empréstimo de curto prazo** para cobrir insuficiência temporária de caixa.\\n\\n- Natureza: dívida FLUTUANTE\\n- Prazo: quitação até 10/DEZ do mesmo ano\\n- Vedada no último ano de mandato\\n- Garantia: receitas próprias",
            tags: ["ARO", "antecipação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-8",
            frente: "Qual a vedação da LRF sobre RAP no final de mandato?",
            verso: "**Art. 42, LRF:**\\n\\nNos **últimos 2 quadrimestres** do mandato (8 meses finais):\\n\\nÉ VEDADO contrair obrigação de despesa que:\\n- Não possa ser paga no mesmo exercício\\n- OU tenha parcelas no ano seguinte SEM disponibilidade de caixa",
            tags: ["LRF", "art. 42", "final de mandato"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-9",
            frente: "RAP é classificado como despesa orçamentária ou extraorçamentária?",
            verso: "**No ano do EMPENHO:**\\nDespesa ORÇAMENTÁRIA\\n(afeta o resultado orçamentário)\\n\\n**No ano do PAGAMENTO do RAP:**\\nDespesa EXTRAORÇAMENTÁRIA\\n(NÃO afeta o resultado orçamentário)\\n\\nO registro da despesa ocorre no empenho.",
            tags: ["RAP", "orçamentária", "extraorçamentária"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-18-10",
            frente: "Precatórios são dívida flutuante ou fundada?",
            verso: "**DÍVIDA FUNDADA** (consolidada)\\n\\nPrecatórios são dívidas judiciais com prazo > 12 meses para pagamento.\\n\\nExceção: precatórios de pequeno valor (RPV) com pagamento em até 60 dias não são dívida fundada.",
            tags: ["precatórios", "dívida fundada"],
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
            id: "ap-q-18-1",
            enunciado: "Consideram-se Restos a Pagar as despesas:",
            alternativas: [
              { letra: "A", texto: "fixadas mas não empenhadas até 31/12." },
              { letra: "B", texto: "empenhadas mas não pagas até 31/12." },
              { letra: "C", texto: "liquidadas e pagas até 31/12." },
              { letra: "D", texto: "previstas mas não arrecadadas até 31/12." },
              { letra: "E", texto: "autorizadas mas não fixadas na LOA." },
            ],
            gabarito: "B",
            justificativa: "Art. 36, Lei 4.320/64: Restos a Pagar são despesas EMPENHADAS mas NÃO PAGAS até 31 de dezembro. Se não empenhou, não é RAP. Se pagou, não restou nada.",
            dificuldade: "Fácil",
            competencia: "Conceito de RAP",
            banca: "IADES",
            tags: ["RAP", "conceito"],
          },
          {
            id: "ap-q-18-2",
            enunciado: "Os Restos a Pagar PROCESSADOS são aqueles:",
            alternativas: [
              { letra: "A", texto: "empenhados, mas não liquidados." },
              { letra: "B", texto: "empenhados e liquidados, mas não pagos." },
              { letra: "C", texto: "apenas fixados na LOA." },
              { letra: "D", texto: "empenhados e pagos no exercício." },
              { letra: "E", texto: "previstos mas não empenhados." },
            ],
            gabarito: "B",
            justificativa: "RAP PROCESSADOS são despesas EMPENHADAS E LIQUIDADAS, mas NÃO PAGAS. Passaram pelo 'processo' de liquidação. O credor já entregou o bem/serviço.",
            dificuldade: "Fácil",
            competencia: "RAP Processado",
            banca: "IADES",
            tags: ["RAP processado"],
          },
          {
            id: "ap-q-18-3",
            enunciado: "Os Restos a Pagar fazem parte da:",
            alternativas: [
              { letra: "A", texto: "dívida fundada." },
              { letra: "B", texto: "dívida consolidada." },
              { letra: "C", texto: "dívida flutuante." },
              { letra: "D", texto: "receita extraorçamentária." },
              { letra: "E", texto: "despesa de capital." },
            ],
            gabarito: "C",
            justificativa: "Restos a Pagar integram a DÍVIDA FLUTUANTE (art. 92, Lei 4.320/64), junto com depósitos de terceiros, serviços da dívida a pagar e débitos de tesouraria (ARO).",
            dificuldade: "Fácil",
            competencia: "RAP e dívida flutuante",
            banca: "IADES",
            tags: ["RAP", "flutuante"],
          },
          {
            id: "ap-q-18-4",
            enunciado: "A dívida pública de longo prazo, superior a 12 meses, que depende de autorização legislativa, denomina-se:",
            alternativas: [
              { letra: "A", texto: "dívida flutuante." },
              { letra: "B", texto: "dívida fundada ou consolidada." },
              { letra: "C", texto: "restos a pagar." },
              { letra: "D", texto: "antecipação de receita orçamentária." },
              { letra: "E", texto: "débitos de tesouraria." },
            ],
            gabarito: "B",
            justificativa: "Dívida FUNDADA (ou consolidada) é aquela de LONGO PRAZO (> 12 meses) que DEPENDE de autorização legislativa. Flutuante é curto prazo e não precisa de autorização.",
            dificuldade: "Fácil",
            competencia: "Dívida fundada",
            banca: "IADES",
            tags: ["fundada", "consolidada"],
          },
          {
            id: "ap-q-18-5",
            enunciado: "São componentes da dívida flutuante, EXCETO:",
            alternativas: [
              { letra: "A", texto: "restos a pagar." },
              { letra: "B", texto: "serviços da dívida a pagar." },
              { letra: "C", texto: "depósitos de terceiros." },
              { letra: "D", texto: "precatórios judiciais." },
              { letra: "E", texto: "débitos de tesouraria." },
            ],
            gabarito: "D",
            justificativa: "PRECATÓRIOS (dívidas judiciais > 12 meses) são dívida FUNDADA, não flutuante. Componentes da flutuante: RAP, serviços da dívida, depósitos e débitos de tesouraria (art. 92).",
            dificuldade: "Média",
            competencia: "Componentes da dívida flutuante",
            banca: "IADES",
            tags: ["flutuante", "componentes"],
          },
          {
            id: "ap-q-18-6",
            enunciado: "De acordo com a LRF, é VEDADO ao titular de Poder, nos últimos dois quadrimestres do mandato:",
            alternativas: [
              { letra: "A", texto: "realizar qualquer tipo de despesa." },
              { letra: "B", texto: "contrair obrigação sem disponibilidade de caixa para pagamento." },
              { letra: "C", texto: "empenhar despesas correntes." },
              { letra: "D", texto: "liquidar despesas de capital." },
              { letra: "E", texto: "pagar restos a pagar processados." },
            ],
            gabarito: "B",
            justificativa: "Art. 42, LRF: nos últimos 2 quadrimestres (8 meses) é VEDADO contrair obrigação que não possa ser paga no exercício ou que tenha parcelas no ano seguinte SEM disponibilidade de caixa.",
            dificuldade: "Média",
            competencia: "LRF - final de mandato",
            banca: "IADES",
            tags: ["LRF", "art. 42"],
          },
          {
            id: "ap-q-18-7",
            enunciado: "A 'Regra de Ouro' prevista no art. 167, III, da Constituição Federal estabelece que:",
            alternativas: [
              { letra: "A", texto: "as despesas correntes não podem superar as receitas correntes." },
              { letra: "B", texto: "as operações de crédito não podem exceder as despesas de capital." },
              { letra: "C", texto: "a dívida fundada não pode superar 200% da RCL." },
              { letra: "D", texto: "os restos a pagar devem ser pagos no exercício seguinte." },
              { letra: "E", texto: "a ARO deve ser quitada até 31 de dezembro." },
            ],
            gabarito: "B",
            justificativa: "A Regra de Ouro (art. 167, III, CF) veda operações de crédito que EXCEDAM as despesas de capital. Não se pode pegar empréstimo para pagar despesa corrente.",
            dificuldade: "Média",
            competencia: "Regra de Ouro",
            banca: "IADES",
            tags: ["regra de ouro", "art. 167"],
          },
          {
            id: "ap-q-18-8",
            enunciado: "A Antecipação de Receita Orçamentária (ARO) é classificada como:",
            alternativas: [
              { letra: "A", texto: "dívida fundada." },
              { letra: "B", texto: "dívida flutuante." },
              { letra: "C", texto: "receita de capital." },
              { letra: "D", texto: "despesa corrente." },
              { letra: "E", texto: "crédito especial." },
            ],
            gabarito: "B",
            justificativa: "ARO é empréstimo de CURTO PRAZO (deve ser quitado até 10/dez do mesmo ano), portanto é DÍVIDA FLUTUANTE. Integra os 'débitos de tesouraria' do art. 92.",
            dificuldade: "Fácil",
            competencia: "ARO",
            banca: "IADES",
            tags: ["ARO", "flutuante"],
          },
          {
            id: "ap-q-18-9",
            enunciado: "Os limites de endividamento para Estados e Distrito Federal, conforme a LRF, são de:",
            alternativas: [
              { letra: "A", texto: "100% da Receita Corrente Líquida." },
              { letra: "B", texto: "120% da Receita Corrente Líquida." },
              { letra: "C", texto: "150% da Receita Corrente Líquida." },
              { letra: "D", texto: "200% da Receita Corrente Líquida." },
              { letra: "E", texto: "250% da Receita Corrente Líquida." },
            ],
            gabarito: "D",
            justificativa: "Os limites de dívida consolidada são: Estados/DF = 200% da RCL e Municípios = 120% da RCL (Resolução SF 40/2001).",
            dificuldade: "Média",
            competencia: "Limites de endividamento",
            banca: "IADES",
            tags: ["limites", "200%"],
          },
          {
            id: "ap-q-18-10",
            enunciado: "O pagamento de Restos a Pagar no exercício seguinte ao da inscrição é considerado despesa:",
            alternativas: [
              { letra: "A", texto: "orçamentária corrente." },
              { letra: "B", texto: "orçamentária de capital." },
              { letra: "C", texto: "extraorçamentária." },
              { letra: "D", texto: "intraorçamentária." },
              { letra: "E", texto: "vinculada." },
            ],
            gabarito: "C",
            justificativa: "O pagamento de RAP é despesa EXTRAORÇAMENTÁRIA no ano do pagamento, pois a despesa orçamentária já foi registrada no ano do empenho. Evita-se a dupla contagem.",
            dificuldade: "Média",
            competencia: "Classificação do pagamento de RAP",
            banca: "IADES",
            tags: ["RAP", "extraorçamentária"],
          },
        ],
      },
    },
    {
      id: "ap-topico-19",
      numero: 19,
      titulo: "Lei de Responsabilidade Fiscal (LC nº 101/2000)",
      conteudo: {
        resumo: `
## Resumo Rápido

### Informações Gerais da LRF

| Aspecto | Informação |
|---------|------------|
| **Lei** | LC nº 101, de 4 de maio de 2000 |
| **Fundamento** | Art. 163 e 169, CF/88 |
| **Abrangência** | União, Estados, DF, Municípios e todos os Poderes |
| **Objetivo** | Responsabilidade na gestão fiscal |

### Pilares da LRF

| Pilar | Conteúdo |
|-------|----------|
| **Planejamento** | PPA, LDO, LOA, metas fiscais |
| **Transparência** | Publicidade, audiências, relatórios |
| **Controle** | Fiscalização, sanções, prestação de contas |
| **Responsabilização** | Penalidades por descumprimento |

### Limites de Despesa com Pessoal (% da RCL)

| Ente | Limite Global | Prudencial (95%) | Alerta (90%) |
|------|---------------|------------------|--------------|
| **União** | 50% | 47,5% | 45% |
| **Estados** | 60% | 57% | 54% |
| **Municípios** | 60% | 57% | 54% |

### Distribuição por Poder (Estados/Municípios)

| Poder | Estados | Municípios |
|-------|---------|------------|
| **Executivo** | 49% | 54% |
| **Legislativo** (+ TC) | 6% | 6% |
| **Judiciário** | 6% | - |
| **MP** | 2% | - |

### Para IADES - Memorize:
- Limite global: União 50%, Estados/Municípios 60%
- Prudencial: 95% do limite (vedações)
- Alerta: 90% do limite (TC avisa)
- Recondução: 2 quadrimestres (1/3 no primeiro)
- RREO: a cada bimestre / RGF: a cada quadrimestre
        `,

        explicacao: `
## Explicação Didática

### 1. Fundamentos da LRF

A **Lei de Responsabilidade Fiscal** (LC 101/2000) estabelece normas de finanças públicas voltadas para a **responsabilidade na gestão fiscal**.

#### Base Constitucional

| Dispositivo | Conteúdo |
|-------------|----------|
| Art. 163, CF | Finanças públicas (lei complementar) |
| Art. 169, CF | Limites de despesa com pessoal |
| Art. 165-167, CF | Orçamento público |

#### Objetivos da LRF (Art. 1º, §1º)

A responsabilidade fiscal pressupõe ação planejada e transparente, com:
1. **Prevenção de riscos** e correção de desvios
2. **Cumprimento de metas** de resultados (superávit/déficit)
3. **Obediência a condições** quanto a renúncia de receita, geração de despesas, dívidas, etc.

### 2. Abrangência da LRF (Art. 1º, §§2º e 3º)

| Ente/Órgão | Alcance |
|------------|---------|
| **Entes Federativos** | União, Estados, DF e Municípios |
| **Poderes** | Executivo, Legislativo e Judiciário |
| **Órgãos** | Tribunais de Contas, MP, Defensoria |
| **Administração** | Direta e Indireta (autarquias, fundações, EP, SEM dependentes) |

### 3. Receita Corrente Líquida - RCL (Art. 2º, IV)

A **RCL** é a base de cálculo para os limites da LRF.

#### Cálculo da RCL

\`\`\`
RCL = Receitas Correntes
      (-) Transferências constitucionais aos Municípios
      (-) Contribuições do servidor para previdência
      (-) Compensação financeira entre regimes
      (-) Valores entregues por repartição (FPE, FPM, etc.)
\`\`\`

### 4. Limites de Despesa com Pessoal (Arts. 18 a 23)

#### 4.1 Conceito de Despesa com Pessoal (Art. 18)

Inclui:
- Ativos, inativos e pensionistas
- Mandatos eletivos, cargos, funções, empregos
- Vencimentos, vantagens, subsídios
- Encargos sociais e contribuições previdenciárias

#### 4.2 Limites Globais (Art. 19)

| Ente | Limite da RCL |
|------|---------------|
| **União** | **50%** |
| **Estados** | **60%** |
| **Municípios** | **60%** |

#### 4.3 Repartição por Poder (Art. 20)

##### UNIÃO (50% total)

| Poder/Órgão | Limite |
|-------------|--------|
| Legislativo + TCU | 2,5% |
| Judiciário | 6% |
| Executivo | 40,9% |
| MP da União | 0,6% |

##### ESTADOS (60% total)

| Poder/Órgão | Limite |
|-------------|--------|
| Legislativo + TCE | 3% |
| Judiciário | 6% |
| Executivo | 49% |
| MP Estadual | 2% |

##### MUNICÍPIOS (60% total)

| Poder/Órgão | Limite |
|-------------|--------|
| Legislativo + TCM | 6% |
| Executivo | 54% |

#### 4.4 Limite PRUDENCIAL (Art. 22)

**95% do limite** = Limite Prudencial

Ao atingir o limite prudencial, ficam **VEDADOS**:
- Concessão de vantagem, aumento, reajuste (salvo sentença judicial, lei anterior, revisão geral)
- Criação de cargo, emprego ou função
- Alteração de estrutura de carreira que implique aumento
- Provimento de cargo público, admissão, contratação (EXCETO reposição de vacância nas áreas de educação, saúde e segurança)
- Contratação de hora extra (EXCETO situações da LDO)

#### 4.5 Limite de ALERTA (Art. 59, §1º, II)

**90% do limite** = Alerta do Tribunal de Contas

O TC alertará quando a despesa atingir 90% do limite.

#### 4.6 Recondução ao Limite (Art. 23)

Se ultrapassar o limite:
- Prazo: **2 quadrimestres** (8 meses)
- No primeiro quadrimestre: eliminar pelo menos **1/3** do excesso
- Não reconduzindo: vedações do art. 22 + proibição de receber transferências voluntárias

##### Medidas para Recondução (Art. 169, §§3º e 4º, CF)

1. Redução de pelo menos 20% das despesas com cargos em comissão
2. Exoneração de servidores não estáveis
3. Exoneração de servidores estáveis (se insuficientes as anteriores)

### 5. Transparência e Controle (Arts. 48 a 59)

#### 5.1 Instrumentos de Transparência (Art. 48)

- Planos, orçamentos e leis de diretrizes
- Prestações de contas e parecer prévio
- **RREO** (Relatório Resumido de Execução Orçamentária)
- **RGF** (Relatório de Gestão Fiscal)
- Versões simplificadas desses documentos

#### 5.2 RREO - Relatório Resumido de Execução Orçamentária (Art. 52)

| Aspecto | Regra |
|---------|-------|
| **Periodicidade** | **Bimestral** (a cada 2 meses) |
| **Publicação** | Até 30 dias após o bimestre |
| **Conteúdo** | Balanço orçamentário, demonstrativos de execução |

#### 5.3 RGF - Relatório de Gestão Fiscal (Art. 54)

| Aspecto | Regra |
|---------|-------|
| **Periodicidade** | **Quadrimestral** (a cada 4 meses) |
| **Publicação** | Até 30 dias após o quadrimestre |
| **Último ano mandato** | Último quadrimestre = mensal (dez, jan, fev) |
| **Emissão** | Cada Poder e órgão emite seu RGF |

##### Conteúdo do RGF

- Despesa com pessoal (por Poder e órgão)
- Dívida consolidada e mobiliária
- Concessão de garantias
- Operações de crédito
- Disponibilidade de caixa

#### 5.4 Audiências Públicas (Art. 48, §1º)

- Incentivo à participação popular
- Acompanhamento da execução orçamentária
- Discussão do PPA, LDO e LOA

### 6. Dívida e Endividamento (Arts. 29 a 42)

#### 6.1 Limites de Dívida (Resolução SF 40/2001)

| Ente | Dívida Consolidada (% RCL) |
|------|---------------------------|
| **União** | Definido pelo Senado |
| **Estados/DF** | 200% da RCL |
| **Municípios** | 120% da RCL |

#### 6.2 Operações de Crédito (Art. 32)

Requisitos para contratação:
- Autorização na LOA ou crédito adicional
- Parecer do TC (se for interno)
- Observância dos limites
- Autorização do Senado (dívida externa ou mobiliária da União)

#### 6.3 ARO - Antecipação de Receita Orçamentária (Art. 38)

| Regra | Descrição |
|-------|-----------|
| Prazo | Quitação até 10 de dezembro |
| Vedação | Último ano de mandato (proibida) |
| Vedação | Enquanto houver ARO anterior não resgatada |
| Limite | Não pode exceder receita própria prevista |

#### 6.4 Vedações no Final de Mandato (Arts. 21 e 42)

| Vedação | Prazo |
|---------|-------|
| Aumento despesa pessoal | Últimos **180 dias** do mandato |
| Contrair obrigação sem cobertura | Últimos **2 quadrimestres** (8 meses) |
| ARO | Todo o último ano |

### 7. Sanções e Responsabilização

#### 7.1 Sanções Institucionais

| Situação | Sanção |
|----------|--------|
| Não publicar RREO/RGF | Vedação de receber transferências voluntárias |
| Exceder limite de pessoal | Vedações do art. 22, proibição de transferências |
| Exceder limite de dívida | Vedação de operações de crédito |

#### 7.2 Sanções Pessoais (Lei 10.028/2000)

Crimes e infrações cometidas por gestores:
- Ordenar/autorizar despesa sem cobertura
- Deixar de ordenar redução de despesa
- Ordenar/autorizar despesa não autorizada
- Deixar de publicar relatórios

### 8. Gestão de Pessoal e VISA

Na Vigilância Sanitária, a LRF impacta:

| Aspecto | Impacto |
|---------|---------|
| Concursos | Dependem de espaço fiscal (limite de pessoal) |
| Contratações temporárias | Entram no limite |
| Terceirizações | Despesa corrente, não pessoal |
| Reajustes | Vedados no limite prudencial |
        `,

        pontosChave: [
          "LRF (LC 101/2000): responsabilidade na gestão fiscal",
          "Abrangência: União, Estados, DF, Municípios e todos os Poderes",
          "RCL = Receita Corrente Líquida (base de cálculo dos limites)",
          "Limites de pessoal: União 50%, Estados/Municípios 60% da RCL",
          "Limite PRUDENCIAL = 95% do limite (vedações automáticas)",
          "Limite de ALERTA = 90% do limite (TC avisa)",
          "Recondução ao limite: 2 quadrimestres, 1/3 no primeiro",
          "RREO: bimestral (a cada 2 meses)",
          "RGF: quadrimestral (a cada 4 meses)",
          "Limite de dívida: Estados 200% RCL, Municípios 120% RCL",
          "Vedação no final de mandato: últimos 180 dias (pessoal) e 8 meses (obrigações)",
          "ARO vedada no último ano de mandato",
        ],

        armadilhas: [
          {
            titulo: "Limite de pessoal da União",
            descricao: "União é 50%, Estados e Municípios são 60%.",
            dica: "União = 50 (5 letras). Estados/Municípios = 60.",
          },
          {
            titulo: "Limite prudencial x alerta",
            descricao: "PRUDENCIAL (95%) gera vedações. ALERTA (90%) é só aviso do TC.",
            dica: "Prudencial = mais grave = vedações. Alerta = aviso = TC.",
          },
          {
            titulo: "Periodicidade RREO x RGF",
            descricao: "RREO é BIMESTRAL. RGF é QUADRIMESTRAL.",
            dica: "RREO = Resumido = mais Rápido = Bimestre. RGF = Gestão = maior = Quadrimestre.",
          },
          {
            titulo: "Recondução ao limite",
            descricao: "Prazo é de 2 QUADRIMESTRES (8 meses), não 2 bimestres.",
            dica: "Recondução = 2 quadrimestres, 1/3 no primeiro.",
          },
          {
            titulo: "Vedação de aumento no final de mandato",
            descricao: "Últimos 180 DIAS do mandato (não 180 dias do ANO).",
            dica: "180 dias antes do FIM do mandato (julho a dezembro do último ano).",
          },
          {
            titulo: "Limite de pessoal do Executivo estadual",
            descricao: "Executivo estadual: 49%. O total do Estado é 60%.",
            dica: "60% - 6% Leg - 6% Jud - 2% MP = 49% Executivo (sem a Def. Pub.).",
          },
        ],

        mnemonicos: [
          {
            termo: "50-60-60",
            significado: "Limites de pessoal",
            frase: "União 50%, Estados 60%, Municípios 60%",
          },
          {
            termo: "95-90",
            significado: "Prudencial e Alerta",
            frase: "95% = Prudencial (vedações), 90% = Alerta (TC avisa)",
          },
          {
            termo: "RREO = Bimestre / RGF = Quadrimestre",
            significado: "Periodicidade dos relatórios",
            frase: "RREO Resumido = Rápido = Bi. RGF Gestão = Grande = Quadri.",
          },
          {
            termo: "2Q-1/3",
            significado: "Recondução ao limite",
            frase: "2 Quadrimestres para reconduzir, 1/3 no primeiro",
          },
          {
            termo: "180-8",
            significado: "Vedações no final de mandato",
            frase: "180 dias (pessoal), 8 meses/2 quadrimestres (obrigações)",
          },
          {
            termo: "200-120",
            significado: "Limites de dívida",
            frase: "Estados 200% RCL, Municípios 120% RCL",
          },
          {
            termo: "PTCR",
            significado: "Pilares da LRF",
            frase: "Planejamento, Transparência, Controle, Responsabilização",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-19-1",
            frente: "Quais são os limites GLOBAIS de despesa com pessoal na LRF?",
            verso: "**Percentual da RCL:**\\n\\n- **União**: 50%\\n- **Estados**: 60%\\n- **Municípios**: 60%\\n\\n(Art. 19, LRF)",
            tags: ["limites", "pessoal", "global"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-2",
            frente: "O que é o limite PRUDENCIAL e quais suas consequências?",
            verso: "**95% do limite de pessoal**\\n\\nVedações automáticas:\\n- Concessão de vantagens/aumentos\\n- Criação de cargos\\n- Provimento de cargos (exceto reposição em educação, saúde, segurança)\\n- Hora extra (exceto LDO)",
            tags: ["prudencial", "vedações"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-3",
            frente: "Qual a diferença entre RREO e RGF?",
            verso: "**RREO** (Execução Orçamentária):\\n- BIMESTRAL\\n- Execução do orçamento\\n\\n**RGF** (Gestão Fiscal):\\n- QUADRIMESTRAL\\n- Despesa com pessoal, dívida\\n- Cada Poder emite o seu",
            tags: ["RREO", "RGF", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-4",
            frente: "Qual o prazo para RECONDUÇÃO ao limite de pessoal?",
            verso: "**2 quadrimestres** (8 meses)\\n\\nNo primeiro quadrimestre: eliminar pelo menos **1/3 do excesso**.\\n\\nSe não reconduzir: vedações + proibição de transferências voluntárias.",
            tags: ["recondução", "prazo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-5",
            frente: "Quais são os limites de DÍVIDA na LRF?",
            verso: "**Dívida Consolidada (% da RCL):**\\n\\n- **Estados/DF**: 200%\\n- **Municípios**: 120%\\n- **União**: definido pelo Senado\\n\\n(Resolução SF 40/2001)",
            tags: ["dívida", "limites"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-6",
            frente: "Quais são as vedações no FINAL DE MANDATO?",
            verso: "**Últimos 180 dias:**\\n- Aumento de despesa com pessoal\\n\\n**Últimos 2 quadrimestres (8 meses):**\\n- Contrair obrigação sem disponibilidade de caixa\\n\\n**Todo o último ano:**\\n- ARO (Antecipação de Receita)",
            tags: ["final de mandato", "vedações"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-7",
            frente: "O que é a RCL (Receita Corrente Líquida)?",
            verso: "**Base de cálculo da LRF**\\n\\nRCL = Receitas Correntes\\n(-) Transferências constitucionais\\n(-) Contribuições previdenciárias\\n(-) Compensação entre regimes\\n(-) Valores por repartição\\n\\nApurada no mês e nos 11 anteriores.",
            tags: ["RCL", "conceito"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-8",
            frente: "Qual o limite do EXECUTIVO estadual para despesa com pessoal?",
            verso: "**49% da RCL**\\n\\nDistribuição no Estado (60% total):\\n- Executivo: 49%\\n- Legislativo + TC: 3%\\n- Judiciário: 6%\\n- MP: 2%",
            tags: ["executivo", "estadual", "limite"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-9",
            frente: "O que acontece quando se atinge 90% do limite de pessoal?",
            verso: "**Limite de ALERTA**\\n\\nO Tribunal de Contas ALERTA os Poderes e órgãos.\\n\\nAinda não há vedações automáticas (essas vêm no prudencial - 95%).\\n\\n(Art. 59, §1º, II, LRF)",
            tags: ["alerta", "90%"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-19-10",
            frente: "Quais são os pilares da LRF?",
            verso: "**PTCR:**\\n\\n1. **P**lanejamento (PPA, LDO, LOA, metas)\\n2. **T**ransparência (publicidade, relatórios)\\n3. **C**ontrole (fiscalização, TC)\\n4. **R**esponsabilização (sanções)",
            tags: ["pilares", "LRF"],
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
            id: "ap-q-19-1",
            enunciado: "De acordo com a LRF, o limite global de despesa com pessoal para os ESTADOS é de:",
            alternativas: [
              { letra: "A", texto: "40% da Receita Corrente Líquida." },
              { letra: "B", texto: "50% da Receita Corrente Líquida." },
              { letra: "C", texto: "60% da Receita Corrente Líquida." },
              { letra: "D", texto: "70% da Receita Corrente Líquida." },
              { letra: "E", texto: "80% da Receita Corrente Líquida." },
            ],
            gabarito: "C",
            justificativa: "O limite global de despesa com pessoal é: União 50%, Estados 60%, Municípios 60% da RCL (art. 19, LRF).",
            dificuldade: "Fácil",
            competencia: "Limites de pessoal",
            banca: "IADES",
            tags: ["limites", "60%", "estados"],
          },
          {
            id: "ap-q-19-2",
            enunciado: "O limite PRUDENCIAL de despesa com pessoal, que gera vedações automáticas, corresponde a:",
            alternativas: [
              { letra: "A", texto: "80% do limite." },
              { letra: "B", texto: "85% do limite." },
              { letra: "C", texto: "90% do limite." },
              { letra: "D", texto: "95% do limite." },
              { letra: "E", texto: "100% do limite." },
            ],
            gabarito: "D",
            justificativa: "O limite PRUDENCIAL é 95% do limite (art. 22). Ao atingi-lo, ficam vedados: aumento, criação de cargos, provimento (exceto reposição em áreas essenciais), hora extra.",
            dificuldade: "Fácil",
            competencia: "Limite prudencial",
            banca: "IADES",
            tags: ["prudencial", "95%"],
          },
          {
            id: "ap-q-19-3",
            enunciado: "O Relatório Resumido de Execução Orçamentária (RREO) deve ser publicado:",
            alternativas: [
              { letra: "A", texto: "mensalmente." },
              { letra: "B", texto: "bimestralmente." },
              { letra: "C", texto: "trimestralmente." },
              { letra: "D", texto: "quadrimestralmente." },
              { letra: "E", texto: "semestralmente." },
            ],
            gabarito: "B",
            justificativa: "O RREO é publicado BIMESTRALMENTE (a cada 2 meses), até 30 dias após o encerramento do bimestre (art. 52, LRF).",
            dificuldade: "Fácil",
            competencia: "RREO",
            banca: "IADES",
            tags: ["RREO", "bimestral"],
          },
          {
            id: "ap-q-19-4",
            enunciado: "O Relatório de Gestão Fiscal (RGF) deve ser emitido:",
            alternativas: [
              { letra: "A", texto: "mensalmente." },
              { letra: "B", texto: "bimestralmente." },
              { letra: "C", texto: "trimestralmente." },
              { letra: "D", texto: "quadrimestralmente." },
              { letra: "E", texto: "anualmente." },
            ],
            gabarito: "D",
            justificativa: "O RGF é emitido QUADRIMESTRALMENTE (a cada 4 meses), até 30 dias após o encerramento do quadrimestre (art. 54, LRF).",
            dificuldade: "Fácil",
            competencia: "RGF",
            banca: "IADES",
            tags: ["RGF", "quadrimestral"],
          },
          {
            id: "ap-q-19-5",
            enunciado: "O prazo para recondução da despesa com pessoal ao limite, quando este for ultrapassado, é de:",
            alternativas: [
              { letra: "A", texto: "1 bimestre." },
              { letra: "B", texto: "2 bimestres." },
              { letra: "C", texto: "1 quadrimestre." },
              { letra: "D", texto: "2 quadrimestres." },
              { letra: "E", texto: "1 semestre." },
            ],
            gabarito: "D",
            justificativa: "O prazo de recondução é de 2 QUADRIMESTRES (8 meses), devendo ser eliminado pelo menos 1/3 do excesso no primeiro quadrimestre (art. 23, LRF).",
            dificuldade: "Média",
            competencia: "Recondução",
            banca: "IADES",
            tags: ["recondução", "prazo"],
          },
          {
            id: "ap-q-19-6",
            enunciado: "É VEDADO ao titular de Poder, nos últimos 180 dias do mandato:",
            alternativas: [
              { letra: "A", texto: "realizar licitações." },
              { letra: "B", texto: "aumentar despesa total com pessoal." },
              { letra: "C", texto: "pagar fornecedores." },
              { letra: "D", texto: "emitir empenhos." },
              { letra: "E", texto: "publicar relatórios." },
            ],
            gabarito: "B",
            justificativa: "Nos últimos 180 dias do mandato, é VEDADO aumentar despesa com pessoal, salvo se houver lei de revisão geral (art. 21, parágrafo único, LRF).",
            dificuldade: "Média",
            competencia: "Vedações final de mandato",
            banca: "IADES",
            tags: ["180 dias", "vedação"],
          },
          {
            id: "ap-q-19-7",
            enunciado: "O Tribunal de Contas alertará os Poderes quando a despesa com pessoal atingir:",
            alternativas: [
              { letra: "A", texto: "80% do limite." },
              { letra: "B", texto: "85% do limite." },
              { letra: "C", texto: "90% do limite." },
              { letra: "D", texto: "95% do limite." },
              { letra: "E", texto: "100% do limite." },
            ],
            gabarito: "C",
            justificativa: "O limite de ALERTA é 90% do limite. O TC alerta os Poderes, mas ainda não há vedações automáticas (estas vêm no prudencial - 95%).",
            dificuldade: "Fácil",
            competencia: "Limite de alerta",
            banca: "IADES",
            tags: ["alerta", "90%", "TC"],
          },
          {
            id: "ap-q-19-8",
            enunciado: "No âmbito do Poder EXECUTIVO estadual, o limite de despesa com pessoal é de:",
            alternativas: [
              { letra: "A", texto: "40% da RCL." },
              { letra: "B", texto: "49% da RCL." },
              { letra: "C", texto: "54% da RCL." },
              { letra: "D", texto: "60% da RCL." },
              { letra: "E", texto: "65% da RCL." },
            ],
            gabarito: "B",
            justificativa: "O Executivo estadual tem limite de 49% da RCL (art. 20, II, c). O total do Estado (60%) se divide: Executivo 49%, Legislativo+TC 3%, Judiciário 6%, MP 2%.",
            dificuldade: "Média",
            competencia: "Repartição por Poder",
            banca: "IADES",
            tags: ["executivo", "49%"],
          },
          {
            id: "ap-q-19-9",
            enunciado: "A ARO (Antecipação de Receita Orçamentária) é VEDADA:",
            alternativas: [
              { letra: "A", texto: "no primeiro ano de mandato." },
              { letra: "B", texto: "no último ano de mandato." },
              { letra: "C", texto: "em anos eleitorais." },
              { letra: "D", texto: "em anos de recessão." },
              { letra: "E", texto: "nunca é vedada." },
            ],
            gabarito: "B",
            justificativa: "A ARO é PROIBIDA no último ano de mandato do Chefe do Poder Executivo (art. 38, IV, b, LRF). Também é vedada se houver ARO anterior não resgatada.",
            dificuldade: "Média",
            competencia: "ARO",
            banca: "IADES",
            tags: ["ARO", "vedação", "último ano"],
          },
          {
            id: "ap-q-19-10",
            enunciado: "São pilares da Lei de Responsabilidade Fiscal, EXCETO:",
            alternativas: [
              { letra: "A", texto: "planejamento." },
              { letra: "B", texto: "transparência." },
              { letra: "C", texto: "centralização." },
              { letra: "D", texto: "controle." },
              { letra: "E", texto: "responsabilização." },
            ],
            gabarito: "C",
            justificativa: "Os pilares da LRF são: Planejamento, Transparência, Controle e Responsabilização (PTCR). Centralização NÃO é pilar da LRF; pelo contrário, há descentralização na gestão.",
            dificuldade: "Fácil",
            competencia: "Pilares da LRF",
            banca: "IADES",
            tags: ["pilares", "exceção"],
          },
        ],
      },
    },
    {
      id: "ap-topico-20",
      numero: 20,
      titulo: "Gestão de Pessoas no Setor Público",
      conteudo: {
        resumo: `
## Resumo Rápido

### Regimes Jurídicos de Pessoal

| Regime | Vínculo | Legislação |
|--------|---------|------------|
| **Estatutário** | Legal (unilateral) | Estatuto (lei) |
| **Celetista** | Contratual (bilateral) | CLT |
| **Temporário** | Contrato por prazo determinado | Lei específica |

### Formas de Provimento (Art. 8º, Lei 8.112/90)

| Originário | Derivado |
|------------|----------|
| Nomeação | Promoção, Readaptação, Reversão, Aproveitamento, Reintegração, Recondução |

### Formas de Vacância (Art. 33, Lei 8.112/90)

| Forma | Descrição |
|-------|-----------|
| Exoneração | A pedido ou de ofício (não estável) |
| Demissão | Penalidade (PAD) |
| Promoção | Vacância no cargo anterior |
| Readaptação | Vacância no cargo anterior |
| Aposentadoria | Compulsória (75), voluntária, invalidez |
| Posse em outro cargo inacumulável | Vacância no cargo anterior |
| Falecimento | Extinção do vínculo |

### Estágio Probatório

| Aspecto | Regra |
|---------|-------|
| **Duração** | 3 anos (36 meses) |
| **Fatores de avaliação** | Assiduidade, Disciplina, Capacidade de iniciativa, Produtividade, Responsabilidade |
| **Estabilidade** | Após aprovação no estágio |
| **Reprovação** | Exoneração ou recondução |

### Mnemônico: ADCPR
- **A**ssiduidade
- **D**isciplina
- **C**apacidade de iniciativa
- **P**rodutividade
- **R**esponsabilidade
        `,

        explicacao: `
## Explicação Didática

### 1. Regimes Jurídicos de Pessoal

#### 1.1 Regime ESTATUTÁRIO

| Aspecto | Características |
|---------|-----------------|
| **Vínculo** | LEGAL (não contratual) |
| **Natureza** | Unilateral (Estado define) |
| **Legislação** | Estatuto próprio (ex: Lei 8.112/90 federal, Lei 20.756/2020 GO) |
| **Alteração** | Lei pode alterar unilateralmente |
| **Aplicação** | Administração Direta, Autarquias, Fundações Públicas |

#### 1.2 Regime CELETISTA

| Aspecto | Características |
|---------|-----------------|
| **Vínculo** | CONTRATUAL (bilateral) |
| **Natureza** | Acordo de vontades |
| **Legislação** | CLT (Consolidação das Leis do Trabalho) |
| **Alteração** | Respeita cláusulas do contrato |
| **Aplicação** | Empresas Públicas, Sociedades de Economia Mista |

#### 1.3 Regime TEMPORÁRIO

| Aspecto | Características |
|---------|-----------------|
| **Base** | Art. 37, IX, CF/88 |
| **Requisitos** | Necessidade temporária + Excepcional interesse público |
| **Vínculo** | Contrato por prazo determinado |
| **Concurso** | NÃO exige (processo seletivo simplificado) |
| **Exemplos** | Calamidade, surto, epidemia, censo |

### 2. Formas de Provimento

**Provimento** é o ato de preenchimento de cargo público.

#### 2.1 Provimento ORIGINÁRIO

| Forma | Descrição |
|-------|-----------|
| **Nomeação** | Único provimento originário (primeiro vínculo) |

#### 2.2 Provimento DERIVADO

| Forma | Descrição | Requisitos |
|-------|-----------|------------|
| **Promoção** | Progressão na carreira | Avaliação, tempo |
| **Readaptação** | Limitação física/mental superveniente | Habilitação, atribuições compatíveis |
| **Reversão** | Retorno do aposentado | De ofício (ilegal) ou a pedido |
| **Aproveitamento** | Retorno do servidor em disponibilidade | Cargo compatível |
| **Reintegração** | Retorno por decisão judicial | Invalidação da demissão |
| **Recondução** | Retorno ao cargo anterior | Inabilitação em estágio ou reintegração do anterior |

#### Mnemônico Provimento Derivado: PRR-RAR
- **P**romoção
- **R**eadaptação
- **R**eversão
- **A**proveitamento
- **R**eintegração
- **R**econdução

### 3. Formas de Vacância

**Vacância** é o ato que torna vago o cargo público.

| Forma | Situação |
|-------|----------|
| **Exoneração** | A pedido do servidor OU de ofício (cargo em comissão ou inabilitação em estágio) |
| **Demissão** | PENALIDADE por infração grave (via PAD) |
| **Promoção** | Vaga o cargo inferior para ocupar superior |
| **Readaptação** | Vaga o cargo para ocupar outro compatível |
| **Aposentadoria** | Compulsória (75 anos), voluntária, invalidez |
| **Posse em outro cargo** | Inacumulável, vaga o anterior |
| **Falecimento** | Extinção do vínculo |

#### Diferença: Exoneração x Demissão

| Aspecto | EXONERAÇÃO | DEMISSÃO |
|---------|------------|----------|
| Natureza | NÃO é penalidade | É PENALIDADE |
| Motivo | Pedido, conveniência, inabilitação | Infração grave |
| Processo | Não exige PAD | Exige PAD com ampla defesa |
| Voluntária | Pode ser | Nunca é |

### 4. Estágio Probatório

#### 4.1 Conceito e Prazo

| Aspecto | Regra |
|---------|-------|
| **Conceito** | Período de avaliação do servidor nomeado |
| **Duração** | **3 ANOS** (36 meses) |
| **Início** | Entrada em exercício |
| **Término** | Aquisição da estabilidade (se aprovado) |

⚠️ **EC 19/98** alterou para 3 anos. Antes era 2 anos.

#### 4.2 Fatores de Avaliação (ADCPR)

| Fator | Descrição |
|-------|-----------|
| **A**ssiduidade | Frequência, pontualidade |
| **D**isciplina | Cumprimento de normas, hierarquia |
| **C**apacidade de iniciativa | Proatividade, soluções |
| **P**rodutividade | Resultados, qualidade |
| **R**esponsabilidade | Compromisso, ética |

#### 4.3 Resultado do Estágio Probatório

| Resultado | Consequência |
|-----------|--------------|
| **Aprovação** | Aquisição de ESTABILIDADE |
| **Reprovação** | EXONERAÇÃO (não é demissão!) |

#### 4.4 Estabilidade x Efetividade

| Conceito | Significado |
|----------|-------------|
| **Efetividade** | Atributo do CARGO (provimento efetivo, concurso) |
| **Estabilidade** | Atributo do SERVIDOR (após 3 anos aprovado) |

### 5. Avaliação de Desempenho

#### 5.1 Base Constitucional (Art. 41, §1º, III)

O servidor estável pode perder o cargo por **avaliação periódica de desempenho**, na forma de lei complementar.

#### 5.2 Objetivo da Avaliação

- Melhoria da gestão pública
- Identificação de necessidades de capacitação
- Progressão e promoção
- Gratificações de desempenho
- Perda de cargo (último caso)

#### 5.3 Princípios da Avaliação

| Princípio | Descrição |
|-----------|-----------|
| **Objetividade** | Critérios claros e mensuráveis |
| **Transparência** | Servidor conhece os critérios |
| **Contraditório** | Direito de contestar resultado |
| **Periodicidade** | Avaliações regulares |

### 6. Direitos dos Servidores

#### 6.1 Direitos Pecuniários

| Direito | Descrição |
|---------|-----------|
| Vencimento | Retribuição pelo exercício do cargo |
| Vantagens | Indenizações, gratificações, adicionais |
| Férias | + 1/3 constitucional |
| 13º salário | Gratificação natalina |
| Licenças | Saúde, maternidade, paternidade, etc. |

#### 6.2 Direitos Sociais

| Direito | Descrição |
|---------|-----------|
| Aposentadoria | RPPS (Regime Próprio) |
| Assistência à saúde | Plano de saúde, auxílios |
| Proteção ao trabalho | Segurança, ambiente saudável |
| Previdência | Pensão, auxílio-doença |

#### 6.3 Direitos Associativos

| Direito | Base |
|---------|------|
| Sindicalização | Art. 37, VI, CF |
| Greve | Art. 37, VII, CF (nos termos da lei) |
| Associação | Art. 5º, XVII, CF |

### 7. Deveres dos Servidores

| Dever | Descrição |
|-------|-----------|
| **Lealdade** | Às instituições |
| **Legalidade** | Cumprir as leis |
| **Moralidade** | Ética no serviço |
| **Assiduidade** | Comparecer regularmente |
| **Pontualidade** | Cumprir horários |
| **Urbanidade** | Tratar bem o público |
| **Discrição** | Sigilo quando necessário |
| **Zelo** | Cuidar do patrimônio público |
| **Eficiência** | Realizar bem as tarefas |

### 8. Ética no Serviço Público

#### 8.1 Base Normativa

| Norma | Âmbito |
|-------|--------|
| CF/88, art. 37 | Moralidade como princípio |
| Lei 8.112/90 | Deveres e proibições federais |
| Decreto 1.171/94 | Código de Ética federal |
| Decreto 9.837/2021 | Código de Ética GO |
| Portaria 170/2018-SES | Ética do Fiscal de VISA |

#### 8.2 Princípios Éticos

| Princípio | Aplicação |
|-----------|-----------|
| **Dignidade** | Respeito a todos |
| **Decoro** | Comportamento adequado |
| **Boa-fé** | Agir com honestidade |
| **Probidade** | Integridade moral |
| **Zelo** | Dedicação ao serviço |

#### 8.3 Vedações ao Servidor

| Vedação | Descrição |
|---------|-----------|
| Valer-se do cargo | Para proveito pessoal |
| Receber propina | Qualquer vantagem indevida |
| Usar informação privilegiada | Para benefício próprio |
| Exercer atividade incompatível | Com o cargo |
| Coagir subordinados | Para fins político-partidários |

### 9. Gestão de Pessoas na Vigilância Sanitária

| Aspecto | Aplicação |
|---------|-----------|
| **Regime** | Estatutário (SES-GO) |
| **Código de Ética** | Decreto 9.837/2021 + Portaria 170/2018 |
| **Fiscais** | Lei 13.266/98 (carreira do fisco) |
| **Estágio probatório** | 3 anos, avaliação ADCPR |
| **Capacitação** | Contínua (Escola de Governo) |

### 10. Estatuto de Goiás (Lei 20.756/2020)

| Aspecto | Regra |
|---------|-------|
| **Regime** | Estatutário |
| **Estágio probatório** | 3 anos |
| **Estabilidade** | Após aprovação no estágio |
| **Direitos** | Capítulos próprios |
| **Deveres** | Rol específico |
| **Processo disciplinar** | PAD, sindicância |
        `,

        pontosChave: [
          "Regimes: Estatutário (legal), Celetista (contratual), Temporário (excepcional)",
          "Provimento originário: NOMEAÇÃO (único)",
          "Provimento derivado: PRR-RAR (Promoção, Readaptação, Reversão, Aproveitamento, Reintegração, Recondução)",
          "Vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo, falecimento",
          "EXONERAÇÃO ≠ DEMISSÃO: exoneração não é penalidade, demissão é",
          "Estágio probatório: 3 ANOS (EC 19/98)",
          "Fatores de avaliação: ADCPR (Assiduidade, Disciplina, Capacidade de iniciativa, Produtividade, Responsabilidade)",
          "Reprovação no estágio = EXONERAÇÃO (não demissão)",
          "EFETIVIDADE = atributo do cargo / ESTABILIDADE = atributo do servidor",
          "Servidor estável: só perde cargo por PAD, sentença judicial ou avaliação periódica",
          "Deveres: lealdade, legalidade, moralidade, assiduidade, urbanidade, eficiência",
          "Ética: Decreto 1.171/94 (federal), Decreto 9.837/2021 (GO)",
        ],

        armadilhas: [
          {
            titulo: "Confundir exoneração com demissão",
            descricao: "EXONERAÇÃO não é penalidade. DEMISSÃO é penalidade (via PAD).",
            dica: "Pediu para sair = exoneração. Foi punido = demissão.",
          },
          {
            titulo: "Estágio probatório de 2 anos",
            descricao: "O prazo é de 3 ANOS desde a EC 19/98 (não mais 2 anos).",
            dica: "3 anos de estágio = 3 anos para estabilidade.",
          },
          {
            titulo: "Nomeação é provimento derivado",
            descricao: "NOMEAÇÃO é o ÚNICO provimento ORIGINÁRIO.",
            dica: "Nomeação = primeiro cargo = originário.",
          },
          {
            titulo: "Reversão é volta de disponibilidade",
            descricao: "REVERSÃO = volta de aposentadoria. APROVEITAMENTO = volta de disponibilidade.",
            dica: "Reversão = Reverter aposentadoria. Aproveitamento = Aproveitar o disponível.",
          },
          {
            titulo: "Temporário precisa de concurso",
            descricao: "Contratação temporária NÃO exige concurso, apenas processo seletivo simplificado.",
            dica: "Temporário = excepcional = sem concurso (mas com seleção).",
          },
          {
            titulo: "Estabilidade x Efetividade",
            descricao: "EFETIVIDADE é do cargo (concursado). ESTABILIDADE é do servidor (após 3 anos).",
            dica: "Pode ser efetivo sem ser estável (durante o estágio).",
          },
        ],

        mnemonicos: [
          {
            termo: "ADCPR",
            significado: "Fatores do estágio probatório",
            frase: "Assiduidade, Disciplina, Capacidade de iniciativa, Produtividade, Responsabilidade",
          },
          {
            termo: "PRR-RAR",
            significado: "Provimento derivado",
            frase: "Promoção, Readaptação, Reversão, Aproveitamento, Reintegração, Recondução",
          },
          {
            termo: "NOMEAÇÃO = NO",
            significado: "Único provimento originário",
            frase: "Nomeação é o único provimento Originário (NO)",
          },
          {
            termo: "3-3-3",
            significado: "Estágio probatório",
            frase: "3 anos de estágio = 3 anos para estabilidade",
          },
          {
            termo: "Exo = Ex / Demo = Demo",
            significado: "Exoneração x Demissão",
            frase: "Exoneração = Ex-funcionário (pediu). Demissão = Demolido (punido).",
          },
          {
            termo: "Reversão = Reverter aposentadoria",
            significado: "Diferença reversão x aproveitamento",
            frase: "Reversão = volta da aposentadoria. Aproveitamento = volta da disponibilidade.",
          },
          {
            termo: "EfeTIvo = aTITudo do cargo",
            significado: "Efetividade x Estabilidade",
            frase: "Efetividade = cargo (TI de atitTUde). Estabilidade = servidor (após 3 anos).",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-20-1",
            frente: "Quais são os REGIMES JURÍDICOS de pessoal na Administração Pública?",
            verso: "1. **Estatutário**: vínculo legal, unilateral\\n   (Adm. Direta, Autarquias, Fundações)\\n\\n2. **Celetista**: vínculo contratual, CLT\\n   (EP, SEM)\\n\\n3. **Temporário**: contrato prazo determinado\\n   (excepcional interesse público)",
            tags: ["regimes", "estatutário", "celetista"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-2",
            frente: "Quais são as formas de PROVIMENTO de cargo público?",
            verso: "**ORIGINÁRIO**: NOMEAÇÃO (única)\\n\\n**DERIVADO** (PRR-RAR):\\n- **P**romoção\\n- **R**eadaptação\\n- **R**eversão\\n- **A**proveitamento\\n- **R**eintegração\\n- **R**econdução",
            tags: ["provimento", "originário", "derivado"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-3",
            frente: "Qual a diferença entre EXONERAÇÃO e DEMISSÃO?",
            verso: "**EXONERAÇÃO**:\\n- NÃO é penalidade\\n- A pedido ou de ofício\\n- Não exige PAD\\n\\n**DEMISSÃO**:\\n- É PENALIDADE\\n- Por infração grave\\n- Exige PAD com ampla defesa",
            tags: ["exoneração", "demissão", "diferença"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-4",
            frente: "Qual a duração do ESTÁGIO PROBATÓRIO e quais os fatores de avaliação?",
            verso: "**Duração**: 3 ANOS (EC 19/98)\\n\\n**Fatores (ADCPR)**:\\n- **A**ssiduidade\\n- **D**isciplina\\n- **C**apacidade de iniciativa\\n- **P**rodutividade\\n- **R**esponsabilidade",
            tags: ["estágio probatório", "ADCPR"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-5",
            frente: "O que acontece se o servidor for REPROVADO no estágio probatório?",
            verso: "**EXONERAÇÃO** (não é demissão!)\\n\\nOu, se ocupava cargo anterior:\\n**RECONDUÇÃO** ao cargo de origem.\\n\\nA exoneração no estágio NÃO é penalidade, é por inaptidão.",
            tags: ["estágio probatório", "reprovação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-6",
            frente: "Qual a diferença entre EFETIVIDADE e ESTABILIDADE?",
            verso: "**EFETIVIDADE**:\\n- Atributo do CARGO\\n- Provimento por concurso\\n- Desde a nomeação\\n\\n**ESTABILIDADE**:\\n- Atributo do SERVIDOR\\n- Após 3 anos aprovado\\n- Garantia contra perda do cargo",
            tags: ["efetividade", "estabilidade", "diferença"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-7",
            frente: "Quais as formas de VACÂNCIA de cargo público?",
            verso: "1. Exoneração\\n2. Demissão\\n3. Promoção\\n4. Readaptação\\n5. Aposentadoria\\n6. Posse em outro cargo inacumulável\\n7. Falecimento\\n\\n(Art. 33, Lei 8.112/90)",
            tags: ["vacância", "formas"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-8",
            frente: "O que é REVERSÃO e o que é APROVEITAMENTO?",
            verso: "**REVERSÃO**:\\nRetorno do servidor APOSENTADO\\n(de ofício = ilegal ou a pedido)\\n\\n**APROVEITAMENTO**:\\nRetorno do servidor em DISPONIBILIDADE\\n(cargo foi extinto/desnecessário)",
            tags: ["reversão", "aproveitamento"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-9",
            frente: "Em quais hipóteses o servidor ESTÁVEL pode perder o cargo?",
            verso: "1. **Sentença judicial** transitada em julgado\\n\\n2. **PAD** (processo administrativo disciplinar)\\n\\n3. **Avaliação periódica de desempenho** (mediante lei complementar)\\n\\n(Art. 41, §1º, CF/88)",
            tags: ["estabilidade", "perda do cargo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-20-10",
            frente: "Quais são os principais DEVERES dos servidores públicos?",
            verso: "- **Lealdade** às instituições\\n- **Legalidade** (cumprir leis)\\n- **Moralidade** (ética)\\n- **Assiduidade** (frequência)\\n- **Pontualidade** (horários)\\n- **Urbanidade** (trato cortês)\\n- **Eficiência** (qualidade)",
            tags: ["deveres", "servidor"],
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
            id: "ap-q-20-1",
            enunciado: "O único provimento ORIGINÁRIO de cargo público é:",
            alternativas: [
              { letra: "A", texto: "promoção." },
              { letra: "B", texto: "nomeação." },
              { letra: "C", texto: "readaptação." },
              { letra: "D", texto: "reintegração." },
              { letra: "E", texto: "reversão." },
            ],
            gabarito: "B",
            justificativa: "A NOMEAÇÃO é o único provimento originário, pois é o primeiro vínculo do servidor com o cargo. As demais formas (promoção, readaptação, etc.) são provimentos DERIVADOS.",
            dificuldade: "Fácil",
            competencia: "Provimento originário",
            banca: "IADES",
            tags: ["nomeação", "originário"],
          },
          {
            id: "ap-q-20-2",
            enunciado: "O estágio probatório dos servidores públicos tem duração de:",
            alternativas: [
              { letra: "A", texto: "6 meses." },
              { letra: "B", texto: "1 ano." },
              { letra: "C", texto: "2 anos." },
              { letra: "D", texto: "3 anos." },
              { letra: "E", texto: "5 anos." },
            ],
            gabarito: "D",
            justificativa: "O estágio probatório tem duração de 3 ANOS, conforme alteração da EC 19/98 (antes era 2 anos). É o período em que o servidor é avaliado para adquirir estabilidade.",
            dificuldade: "Fácil",
            competencia: "Estágio probatório",
            banca: "IADES",
            tags: ["estágio probatório", "3 anos"],
          },
          {
            id: "ap-q-20-3",
            enunciado: "São fatores de avaliação no estágio probatório, EXCETO:",
            alternativas: [
              { letra: "A", texto: "assiduidade." },
              { letra: "B", texto: "disciplina." },
              { letra: "C", texto: "antiguidade." },
              { letra: "D", texto: "produtividade." },
              { letra: "E", texto: "responsabilidade." },
            ],
            gabarito: "C",
            justificativa: "Os fatores são ADCPR: Assiduidade, Disciplina, Capacidade de iniciativa, Produtividade, Responsabilidade. ANTIGUIDADE não é fator de avaliação no estágio probatório.",
            dificuldade: "Média",
            competencia: "Fatores do estágio probatório",
            banca: "IADES",
            tags: ["ADCPR", "exceção"],
          },
          {
            id: "ap-q-20-4",
            enunciado: "A diferença entre exoneração e demissão está no fato de que:",
            alternativas: [
              { letra: "A", texto: "ambas são formas de penalidade." },
              { letra: "B", texto: "demissão é penalidade, exoneração não é." },
              { letra: "C", texto: "exoneração é penalidade, demissão não é." },
              { letra: "D", texto: "exoneração só ocorre a pedido do servidor." },
              { letra: "E", texto: "demissão não exige processo administrativo." },
            ],
            gabarito: "B",
            justificativa: "DEMISSÃO é PENALIDADE (exige PAD). EXONERAÇÃO não é penalidade (pode ser a pedido ou de ofício para cargo em comissão ou inabilitação em estágio).",
            dificuldade: "Fácil",
            competencia: "Exoneração x Demissão",
            banca: "IADES",
            tags: ["exoneração", "demissão"],
          },
          {
            id: "ap-q-20-5",
            enunciado: "O servidor que é reprovado no estágio probatório será:",
            alternativas: [
              { letra: "A", texto: "demitido." },
              { letra: "B", texto: "exonerado." },
              { letra: "C", texto: "suspenso." },
              { letra: "D", texto: "advertido." },
              { letra: "E", texto: "readaptado." },
            ],
            gabarito: "B",
            justificativa: "O servidor reprovado no estágio probatório será EXONERADO (ou reconduzido ao cargo anterior, se houver). NÃO é demissão, pois não é penalidade.",
            dificuldade: "Fácil",
            competencia: "Reprovação no estágio",
            banca: "IADES",
            tags: ["estágio", "reprovação", "exoneração"],
          },
          {
            id: "ap-q-20-6",
            enunciado: "O retorno do servidor aposentado ao serviço público denomina-se:",
            alternativas: [
              { letra: "A", texto: "reintegração." },
              { letra: "B", texto: "recondução." },
              { letra: "C", texto: "readaptação." },
              { letra: "D", texto: "reversão." },
              { letra: "E", texto: "aproveitamento." },
            ],
            gabarito: "D",
            justificativa: "REVERSÃO é o retorno do aposentado. REINTEGRAÇÃO é por decisão judicial. APROVEITAMENTO é do servidor em disponibilidade. RECONDUÇÃO é do inabilitado ou por reintegração do anterior.",
            dificuldade: "Média",
            competencia: "Formas de provimento",
            banca: "IADES",
            tags: ["reversão", "aposentado"],
          },
          {
            id: "ap-q-20-7",
            enunciado: "Quanto à efetividade e estabilidade, é CORRETO afirmar:",
            alternativas: [
              { letra: "A", texto: "são sinônimas." },
              { letra: "B", texto: "efetividade é atributo do cargo, estabilidade é do servidor." },
              { letra: "C", texto: "estabilidade é atributo do cargo, efetividade é do servidor." },
              { letra: "D", texto: "ambas são adquiridas após o concurso público." },
              { letra: "E", texto: "não há distinção jurídica entre elas." },
            ],
            gabarito: "B",
            justificativa: "EFETIVIDADE é atributo do CARGO (provimento efetivo via concurso). ESTABILIDADE é atributo do SERVIDOR (adquirida após 3 anos de estágio probatório aprovado).",
            dificuldade: "Média",
            competencia: "Efetividade x Estabilidade",
            banca: "IADES",
            tags: ["efetividade", "estabilidade"],
          },
          {
            id: "ap-q-20-8",
            enunciado: "O servidor estável só perderá o cargo em virtude de:",
            alternativas: [
              { letra: "A", texto: "avontade do chefe imediato." },
              { letra: "B", texto: "necessidade de redução de despesas." },
              { letra: "C", texto: "sentença judicial, PAD ou avaliação periódica de desempenho." },
              { letra: "D", texto: "apenas sentença judicial transitada em julgado." },
              { letra: "E", texto: "conveniência administrativa." },
            ],
            gabarito: "C",
            justificativa: "O servidor estável só perde o cargo por: 1) Sentença judicial transitada em julgado; 2) PAD; 3) Avaliação periódica de desempenho (art. 41, §1º, CF).",
            dificuldade: "Média",
            competencia: "Perda do cargo de servidor estável",
            banca: "IADES",
            tags: ["estabilidade", "perda do cargo"],
          },
          {
            id: "ap-q-20-9",
            enunciado: "São formas de VACÂNCIA de cargo público, EXCETO:",
            alternativas: [
              { letra: "A", texto: "exoneração." },
              { letra: "B", texto: "demissão." },
              { letra: "C", texto: "nomeação." },
              { letra: "D", texto: "promoção." },
              { letra: "E", texto: "aposentadoria." },
            ],
            gabarito: "C",
            justificativa: "NOMEAÇÃO é forma de PROVIMENTO (preenchimento), não de vacância. Vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo, falecimento.",
            dificuldade: "Fácil",
            competencia: "Formas de vacância",
            banca: "IADES",
            tags: ["vacância", "exceção"],
          },
          {
            id: "ap-q-20-10",
            enunciado: "A contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público:",
            alternativas: [
              { letra: "A", texto: "exige concurso público." },
              { letra: "B", texto: "dispensa qualquer processo seletivo." },
              { letra: "C", texto: "gera estabilidade após 3 anos." },
              { letra: "D", texto: "dispensa concurso, mas exige processo seletivo simplificado." },
              { letra: "E", texto: "é vedada pela Constituição." },
            ],
            gabarito: "D",
            justificativa: "A contratação temporária (art. 37, IX, CF) dispensa CONCURSO, mas deve haver processo seletivo simplificado. É para necessidade temporária de excepcional interesse público.",
            dificuldade: "Média",
            competencia: "Contratação temporária",
            banca: "IADES",
            tags: ["temporário", "processo seletivo"],
          },
        ],
      },
    },
    // ==================== TÓPICO 21 ====================
    {
      id: "ap-topico-21",
      numero: 21,
      titulo:
        "Licitações e contratos administrativos: princípios, Lei nº 14.133/2021, fases da licitação, modalidades, critérios de julgamento, contratos administrativos, gestão e fiscalização contratual",
      conteudo: {
        resumo: `
## Resumo Rápido - Licitações e Contratos (Lei 14.133/2021)

### O que é Licitação?
**Procedimento administrativo** pelo qual a Administração seleciona a proposta mais vantajosa para contratar obras, serviços, compras e alienações.

### Princípios da Licitação (Art. 5º da Lei 14.133/2021)
| Princípio | Significado |
|-----------|-------------|
| **Legalidade** | Vinculação às normas legais |
| **Impessoalidade** | Tratamento igualitário |
| **Moralidade** | Conduta ética e proba |
| **Publicidade** | Transparência dos atos |
| **Eficiência** | Melhor resultado |
| **Interesse público** | Prevalência do coletivo |
| **Probidade** | Honestidade na gestão |
| **Igualdade** | Isonomia entre licitantes |
| **Planejamento** | Preparação adequada |
| **Transparência** | Acesso às informações |
| **Segregação de funções** | Separação de atribuições |
| **Julgamento objetivo** | Critérios claros e predefinidos |

### Modalidades de Licitação (Art. 28)
| Modalidade | Utilização | Características |
|------------|-----------|-----------------|
| **Pregão** | Bens e serviços comuns | Obrigatório para bens/serviços comuns |
| **Concorrência** | Qualquer valor | Ampla publicidade |
| **Concurso** | Trabalho técnico/artístico | Prêmio ou remuneração |
| **Leilão** | Alienação de bens | Maior lance |
| **Diálogo Competitivo** | Inovação/complexidade | Soluções não disponíveis |

### Fases da Licitação (Art. 17)
1. **Preparatória** (planejamento)
2. **Divulgação do edital**
3. **Apresentação de propostas/lances**
4. **Julgamento**
5. **Habilitação**
6. **Recursal**
7. **Homologação**

### Critérios de Julgamento (Art. 33)
- **Menor preço** (mais comum)
- **Maior desconto**
- **Melhor técnica ou conteúdo artístico**
- **Técnica e preço**
- **Maior lance** (leilão)
- **Maior retorno econômico**

### Contratação Direta (Sem Licitação)
| Tipo | Hipóteses principais |
|------|---------------------|
| **Dispensa** | Valor até R$ 50 mil (obras) / R$ 25 mil (outros), emergência, guerra |
| **Inexigibilidade** | Inviabilidade de competição (fornecedor exclusivo, artista consagrado) |

### Para IADES - Foco em:
- Princípios específicos da Lei 14.133/2021
- Diferença entre dispensa e inexigibilidade
- Fases da licitação e sua ordem
- Modalidades e quando usar cada uma
        `,

        explicacao: `
## Explicação Didática - Licitações e Contratos (Lei 14.133/2021)

### 1. Conceito e Fundamento Constitucional

A **licitação** é o procedimento administrativo formal pelo qual a Administração Pública seleciona a proposta mais vantajosa para a celebração de contrato.

#### Base Constitucional (Art. 37, XXI, CF/88)
> "Ressalvados os casos especificados na legislação, as obras, serviços, compras e alienações serão contratados mediante processo de licitação pública..."

#### Objetivos da Licitação (Art. 11 da Lei 14.133/2021)
1. **Assegurar seleção da proposta apta a gerar o resultado mais vantajoso**
2. **Assegurar tratamento isonômico** entre os licitantes
3. **Evitar contratações com sobrepreço ou superfaturamento**
4. **Incentivar a inovação e o desenvolvimento nacional sustentável**

### 2. Princípios da Licitação (Art. 5º)

#### Princípios Expressos na Lei 14.133/2021
| Princípio | Aplicação Prática |
|-----------|-------------------|
| **Legalidade** | Edital deve seguir a lei |
| **Impessoalidade** | Não favorece nenhum licitante |
| **Moralidade** | Probidade em todo o processo |
| **Publicidade** | Divulgação ampla do edital |
| **Eficiência** | Obter o melhor resultado |
| **Interesse público** | Finalidade da contratação |
| **Probidade administrativa** | Honestidade na condução |
| **Igualdade** | Mesmas condições a todos |
| **Planejamento** | Estudo técnico preliminar, TR |
| **Transparência** | Portal Nacional de Contratações Públicas |
| **Segregação de funções** | Quem licita não fiscaliza |
| **Julgamento objetivo** | Critérios claros no edital |

#### Novos Princípios na Lei 14.133/2021
- **Celeridade**: procedimento mais ágil
- **Economicidade**: menor custo-benefício
- **Desenvolvimento nacional sustentável**: preferência por produtos/empresas nacionais
- **Vinculação ao edital**: o edital é a "lei" da licitação
- **Competitividade**: estimular a participação

### 3. Modalidades de Licitação (Art. 28)

#### PREGÃO (Art. 29)
| Aspecto | Descrição |
|---------|-----------|
| **Uso** | Aquisição de **bens e serviços COMUNS** |
| **Obrigatoriedade** | OBRIGATÓRIO quando bens/serviços forem comuns |
| **Forma** | Preferencialmente eletrônico |
| **Critério** | Menor preço ou maior desconto |
| **Inversão** | Primeiro proposta, depois habilitação |

**Bens/serviços comuns**: aqueles cujos padrões de desempenho e qualidade podem ser objetivamente definidos pelo edital.

#### CONCORRÊNCIA (Art. 29)
| Aspecto | Descrição |
|---------|-----------|
| **Uso** | Contratação de **bens e serviços especiais** e obras |
| **Valor** | Qualquer valor |
| **Publicidade** | Ampla divulgação |
| **Critérios** | Todos os previstos em lei |

**Bens/serviços especiais**: aqueles que não são comuns (ex: consultoria complexa).

#### CONCURSO (Art. 30)
| Aspecto | Descrição |
|---------|-----------|
| **Uso** | Trabalho **técnico, científico ou artístico** |
| **Prêmio** | Vencedor recebe prêmio ou remuneração |
| **Comissão** | Julgamento por comissão especial |
| **Prazo** | Mínimo 35 dias úteis |

#### LEILÃO (Art. 31)
| Aspecto | Descrição |
|---------|-----------|
| **Uso** | **Alienação** de bens imóveis ou móveis inservíveis |
| **Critério** | **Maior lance** |
| **Condução** | Leiloeiro oficial ou servidor |

#### DIÁLOGO COMPETITIVO (Art. 32) - NOVIDADE!
| Aspecto | Descrição |
|---------|-----------|
| **Uso** | Inovação tecnológica, soluções não disponíveis no mercado |
| **Característica** | Diálogos com licitantes pré-selecionados |
| **Quando** | Objeto complexo, condições não precisas |
| **Fases** | Diálogo + Apresentação de propostas |

### 4. Fases da Licitação (Art. 17)

A Lei 14.133/2021 estabelece uma **ordem específica** para as fases:

#### Sequência das Fases
\`\`\`
1. PREPARATÓRIA
   ↓
2. DIVULGAÇÃO DO EDITAL
   ↓
3. APRESENTAÇÃO DE PROPOSTAS E LANCES
   ↓
4. JULGAMENTO
   ↓
5. HABILITAÇÃO
   ↓
6. RECURSAL
   ↓
7. HOMOLOGAÇÃO
\`\`\`

#### Detalhamento de Cada Fase

**1. FASE PREPARATÓRIA (Art. 18)**
- Estudo Técnico Preliminar (ETP)
- Termo de Referência (TR) ou Projeto Básico
- Orçamento estimado
- Análise de riscos
- Pesquisa de preços

**2. DIVULGAÇÃO DO EDITAL**
- Portal Nacional de Contratações Públicas (PNCP)
- Diário Oficial
- Prazos mínimos conforme modalidade

**3. APRESENTAÇÃO DE PROPOSTAS E LANCES**
- Propostas escritas ou eletrônicas
- Lances (no pregão e leilão)
- Modo aberto, fechado ou combinado

**4. JULGAMENTO**
- Aplicação do critério definido no edital
- Classificação das propostas
- Negociação com melhor classificado

**5. HABILITAÇÃO**
- Verificação documental
- Capacidade técnica, econômica, jurídica
- Regularidade fiscal e trabalhista

**INVERSÃO DE FASES**: Na Lei 14.133/2021, o julgamento vem ANTES da habilitação (como já ocorria no pregão).

**6. FASE RECURSAL**
- Recurso único após habilitação
- Prazo de 3 dias úteis
- Efeito suspensivo automático

**7. HOMOLOGAÇÃO**
- Autoridade competente
- Verifica regularidade do processo
- Adjudicação ao vencedor

### 5. Critérios de Julgamento (Art. 33)

| Critério | Quando usar | Vencedor |
|----------|-------------|----------|
| **Menor preço** | Bens/serviços comuns | Menor valor ofertado |
| **Maior desconto** | Sobre tabela de preços | Maior % de desconto |
| **Melhor técnica** | Predominância intelectual | Maior nota técnica |
| **Técnica e preço** | Técnica relevante | Ponderação dos dois |
| **Maior lance** | Leilão | Maior valor oferecido |
| **Maior retorno econômico** | Concessões | Maior ganho para Administração |

### 6. Contratação Direta (Arts. 74 e 75)

#### DISPENSA de Licitação (Art. 75)
A licitação é **dispensável** (a Administração pode optar):

| Hipótese | Valor/Situação |
|----------|----------------|
| **Pequeno valor - obras** | Até R$ 100.000,00 (atualização 2024) |
| **Pequeno valor - outros** | Até R$ 50.000,00 (atualização 2024) |
| **Emergência** | Urgência de atendimento |
| **Guerra ou perturbação** | Defesa nacional |
| **Licitação deserta** | Ninguém compareceu |
| **Licitação fracassada** | Propostas desclassificadas |
| **Empresa pública** | Para outra entidade da Adm. |
| **Compra de imóvel** | Necessidades específicas |

#### INEXIGIBILIDADE de Licitação (Art. 74)
A licitação é **inexigível** (impossível competir):

| Hipótese | Exemplo |
|----------|---------|
| **Fornecedor exclusivo** | Representante comercial único |
| **Profissional de notória especialização** | Consultor renomado |
| **Artista consagrado** | Show musical, exposição |
| **Credenciamento** | Quando todos podem prestar |

#### Diferença Fundamental
| DISPENSA | INEXIGIBILIDADE |
|----------|-----------------|
| Competição é POSSÍVEL | Competição é IMPOSSÍVEL |
| A Administração ESCOLHE não licitar | A Administração NÃO PODE licitar |
| Rol TAXATIVO (listado na lei) | Rol EXEMPLIFICATIVO |

### 7. Contratos Administrativos (Arts. 89 a 137)

#### Conceito
Acordo de vontades entre a Administração e o particular para a consecução de fins públicos.

#### Características dos Contratos Administrativos
| Característica | Descrição |
|----------------|-----------|
| **Formalismo** | Escrito, publicado, etc. |
| **Pessoalidade** | Intuitu personae |
| **Comutativo** | Prestações equivalentes |
| **Adesão** | Cláusulas definidas pela Administração |
| **Cláusulas exorbitantes** | Prerrogativas especiais |

#### Cláusulas Exorbitantes (Art. 104)
A Administração pode, unilateralmente:
1. **Modificar o contrato** (alteração unilateral)
2. **Rescindir o contrato** (rescisão unilateral)
3. **Fiscalizar a execução**
4. **Aplicar sanções**
5. **Ocupar temporariamente** bens e pessoal

#### Duração dos Contratos (Art. 105-115)
| Tipo | Prazo máximo |
|------|--------------|
| **Regra geral** | 5 anos (prorrogável até 10) |
| **Serviços contínuos** | 5 anos (prorrogável até 10) |
| **Aluguel de equipamentos/TI** | 5 anos (prorrogável até 15) |
| **Concessão de serviço público** | Conforme lei específica |

#### Alteração dos Contratos (Art. 124)
| Tipo | Quem decide | Limite |
|------|-------------|--------|
| **Unilateral** | Administração | 25% (acréscimo/supressão) |
| **Consensual** | Acordo | Conforme interesse público |
| **Reequilíbrio** | Fato superveniente | Restabelecer equação |

### 8. Gestão e Fiscalização Contratual (Arts. 117-118)

#### Agentes Responsáveis
| Agente | Função |
|--------|--------|
| **Gestor do Contrato** | Coordenação e gerenciamento |
| **Fiscal Técnico** | Acompanhamento técnico |
| **Fiscal Administrativo** | Acompanhamento administrativo |
| **Fiscal Setorial** | Por etapa ou localidade |

#### Atribuições do Fiscal
1. **Acompanhar** a execução do contrato
2. **Registrar** ocorrências em relatório
3. **Comunicar** falhas ao gestor
4. **Verificar** medições e pagamentos
5. **Atestar** notas fiscais
6. **Propor** aplicação de sanções

#### Sanções por Inexecução (Art. 155-163)
| Sanção | Hipótese |
|--------|----------|
| **Advertência** | Infrações leves |
| **Multa** | Atraso ou inadimplemento |
| **Impedimento de licitar** | Infrações graves (até 3 anos) |
| **Declaração de inidoneidade** | Infrações gravíssimas (3-6 anos) |

### 9. Vigilância Sanitária e Licitações

#### Aplicação Prática
| Situação | Procedimento |
|----------|--------------|
| **Aquisição de equipamentos** | Pregão (bens comuns) |
| **Contratação de laboratórios** | Concorrência ou pregão |
| **Serviços de análise** | Pregão ou credenciamento |
| **Obras em postos de saúde** | Concorrência |

#### Requisitos de Habilitação para Área de Saúde
- Alvará sanitário vigente
- Registro na ANVISA (quando aplicável)
- Responsável técnico habilitado
- Certidões do conselho profissional

### 10. Portal Nacional de Contratações Públicas (PNCP)

A Lei 14.133/2021 criou o **PNCP** como sistema obrigatório para:
- Divulgação de editais
- Publicação de atas
- Registro de contratos
- Catálogo eletrônico de compras
- Transparência das contratações
        `,

        pontosChave: [
          "Licitação = procedimento para selecionar a proposta MAIS VANTAJOSA",
          "Lei 14.133/2021 é a NOVA Lei de Licitações (substitui Lei 8.666/93)",
          "Princípios: LIMPE + planejamento, transparência, segregação de funções, julgamento objetivo",
          "Modalidades: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo (NOVIDADE)",
          "Pregão = OBRIGATÓRIO para bens e serviços COMUNS",
          "Diálogo Competitivo = para inovação e soluções complexas (NOVA modalidade)",
          "Fases: Preparatória → Edital → Propostas → Julgamento → Habilitação → Recurso → Homologação",
          "INVERSÃO: Julgamento vem ANTES da Habilitação (diferente da Lei 8.666/93)",
          "DISPENSA: competição possível, mas dispensada (rol TAXATIVO)",
          "INEXIGIBILIDADE: competição IMPOSSÍVEL (fornecedor exclusivo, artista, etc.)",
          "Contratos: prazo máximo 5 anos (prorrogável até 10 anos)",
          "Alteração unilateral: limite de 25% (acréscimo ou supressão)",
          "Cláusulas exorbitantes: poderes especiais da Administração",
          "Gestor e Fiscal: responsáveis pela gestão e fiscalização contratual",
          "PNCP: Portal Nacional de Contratações Públicas (obrigatório)",
        ],

        armadilhas: [
          {
            titulo: "Confundir DISPENSA com INEXIGIBILIDADE",
            descricao:
              "Dispensa = competição é possível, mas a lei dispensa. Inexigibilidade = competição é IMPOSSÍVEL.",
            dica: "DISPENSA: posso licitar, mas não preciso. INEXIGIBILIDADE: não consigo licitar.",
          },
          {
            titulo: "Errar a ordem das FASES da licitação",
            descricao:
              "Na Lei 14.133/2021, o JULGAMENTO vem ANTES da HABILITAÇÃO (inversão de fases).",
            dica: "Primeiro julga as propostas, depois verifica documentos do vencedor.",
          },
          {
            titulo: "Achar que TOMADA DE PREÇOS ainda existe",
            descricao:
              "A Lei 14.133/2021 EXTINGUIU as modalidades Tomada de Preços e Convite.",
            dica: "Modalidades: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.",
          },
          {
            titulo: "Confundir Pregão com Concorrência",
            descricao:
              "Pregão = bens/serviços COMUNS (obrigatório). Concorrência = bens/serviços ESPECIAIS.",
            dica: "Comum = padrão de mercado. Especial = complexidade técnica.",
          },
          {
            titulo: "Errar os LIMITES para dispensa por valor",
            descricao:
              "Os valores são atualizados anualmente. Em 2024: R$ 100 mil (obras) e R$ 50 mil (outros).",
            dica: "Verifique os valores atualizados pelo Decreto de atualização anual.",
          },
          {
            titulo: "Achar que cláusula exorbitante é ilegal",
            descricao:
              "Cláusulas exorbitantes são LEGAIS nos contratos administrativos. São prerrogativas da Administração.",
            dica: "No contrato administrativo, a Administração tem poderes especiais.",
          },
        ],

        mnemonicos: [
          {
            termo: "PCCLD",
            significado:
              "Pregão, Concorrência, Concurso, Leilão, Diálogo Competitivo",
            frase: "PCCLD: as 5 modalidades da Lei 14.133/2021",
          },
          {
            termo: "PEDEJURE-HO",
            significado:
              "Preparatória, EDital, JUlgamento, REcurso, HOmologação",
            frase: "PEDEJURE-HO: ordem das fases da licitação",
          },
          {
            termo: "DIsPENsa = PENsei e dispensei",
            significado: "Na dispensa, a competição é possível, mas dispensada",
            frase: "DisPENsa: PENSEI em licitar, mas a lei me dispensou",
          },
          {
            termo: "IneXIgibilidade = eXIste um só",
            significado: "Na inexigibilidade, só existe um fornecedor",
            frase: "IneXIgibilidade: só eXIste uma opção, não dá para competir",
          },
          {
            termo: "25%",
            significado: "Limite de alteração unilateral do contrato",
            frase: "Limite de 25% para acréscimo ou supressão unilateral",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-21-1",
            frente:
              "Quais são as MODALIDADES de licitação na Lei 14.133/2021?",
            verso:
              "**5 modalidades**:\n\n1. **PREGÃO** - bens/serviços comuns\n2. **CONCORRÊNCIA** - bens/serviços especiais, obras\n3. **CONCURSO** - trabalho técnico/artístico\n4. **LEILÃO** - alienação de bens\n5. **DIÁLOGO COMPETITIVO** - inovação (NOVA!)\n\n⚠️ EXTINGUIU: Tomada de Preços e Convite",
            tags: ["modalidades", "14.133"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-2",
            frente: "Qual a diferença entre DISPENSA e INEXIGIBILIDADE?",
            verso:
              "**DISPENSA**:\n- Competição é POSSÍVEL\n- Lei PERMITE não licitar\n- Rol TAXATIVO (listado)\n- Ex: pequeno valor, emergência\n\n**INEXIGIBILIDADE**:\n- Competição é IMPOSSÍVEL\n- NÃO HÁ como licitar\n- Rol EXEMPLIFICATIVO\n- Ex: fornecedor exclusivo, artista",
            tags: ["dispensa", "inexigibilidade", "contratação direta"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-3",
            frente: "Quais são as FASES da licitação na Lei 14.133/2021?",
            verso:
              "**Ordem das fases**:\n\n1. **Preparatória** (ETP, TR)\n2. **Divulgação do edital**\n3. **Apresentação de propostas/lances**\n4. **Julgamento** ← ANTES\n5. **Habilitação** ← DEPOIS\n6. **Recursal** (fase única)\n7. **Homologação**\n\n⚠️ INVERSÃO: Julgamento vem ANTES da Habilitação!",
            tags: ["fases", "ordem", "inversão"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-4",
            frente:
              "Quando é OBRIGATÓRIO usar a modalidade PREGÃO?",
            verso:
              "**PREGÃO é OBRIGATÓRIO** para aquisição de:\n\n- **Bens COMUNS**\n- **Serviços COMUNS**\n\n**O que são bens/serviços comuns?**\nAqueles cujos padrões de desempenho e qualidade podem ser **objetivamente definidos** pelo edital.\n\nForma preferencial: **eletrônico**\nCritério: menor preço ou maior desconto",
            tags: ["pregão", "obrigatório", "bens comuns"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-5",
            frente: "O que é o DIÁLOGO COMPETITIVO?",
            verso:
              "**Nova modalidade** da Lei 14.133/2021.\n\n**Quando usar:**\n- Inovação tecnológica\n- Soluções não disponíveis no mercado\n- Objeto complexo\n- Condições não podem ser previamente definidas\n\n**Como funciona:**\n1. Pré-seleção de licitantes\n2. Diálogos para desenvolver solução\n3. Apresentação de propostas finais\n4. Julgamento",
            tags: ["diálogo competitivo", "nova modalidade", "inovação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-6",
            frente:
              "Quais são os CRITÉRIOS DE JULGAMENTO previstos na Lei 14.133/2021?",
            verso:
              "**6 critérios** (Art. 33):\n\n1. **Menor preço** - mais comum\n2. **Maior desconto** - sobre tabela\n3. **Melhor técnica** - predominância intelectual\n4. **Técnica e preço** - ponderação\n5. **Maior lance** - leilão\n6. **Maior retorno econômico** - concessões\n\nO critério deve estar DEFINIDO no edital.",
            tags: ["critérios", "julgamento"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-7",
            frente:
              "O que são CLÁUSULAS EXORBITANTES nos contratos administrativos?",
            verso:
              "**Prerrogativas especiais** da Administração:\n\n1. **Modificar unilateralmente** o contrato\n2. **Rescindir unilateralmente**\n3. **Fiscalizar** a execução\n4. **Aplicar sanções** diretamente\n5. **Ocupar temporariamente** bens/pessoal\n\n**Limite alteração unilateral:** 25%\n\nSão LEGAIS, pois protegem o interesse público.",
            tags: ["cláusulas exorbitantes", "contrato", "prerrogativas"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-8",
            frente: "Qual o prazo máximo dos CONTRATOS na Lei 14.133/2021?",
            verso:
              "**Prazos máximos:**\n\n| Tipo | Prazo |\n|------|-------|\n| Regra geral | 5 anos (prorrog. até 10) |\n| Serviços contínuos | 5 anos (prorrog. até 10) |\n| Aluguel equip./TI | 5 anos (prorrog. até 15) |\n\n⚠️ Diferente da Lei 8.666/93 (prazo vinculado ao crédito orçamentário)",
            tags: ["prazo", "contrato", "prorrogação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-9",
            frente:
              "Quem são os agentes responsáveis pela FISCALIZAÇÃO contratual?",
            verso:
              "**Agentes de fiscalização:**\n\n1. **Gestor do Contrato** - coordena e gerencia\n2. **Fiscal Técnico** - acompanha aspectos técnicos\n3. **Fiscal Administrativo** - acompanha aspectos admin.\n4. **Fiscal Setorial** - por etapa ou localidade\n\n**Atribuições:** acompanhar, registrar, comunicar, verificar, atestar, propor sanções.\n\nPrincípio: **segregação de funções**",
            tags: ["fiscal", "gestor", "fiscalização"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "ap-fc-21-10",
            frente:
              "Quais são as SANÇÕES por inexecução contratual na Lei 14.133/2021?",
            verso:
              "**4 sanções** (Art. 155-163):\n\n1. **Advertência** - infrações leves\n2. **Multa** - atraso, inadimplemento\n3. **Impedimento de licitar** - até 3 anos (infrações graves)\n4. **Declaração de inidoneidade** - 3 a 6 anos (gravíssimas)\n\n⚠️ EXTINGUIU: Suspensão temporária\n\nDevido processo legal: contraditório e ampla defesa.",
            tags: ["sanções", "inexecução", "penalidades"],
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
            id: "ap-q-21-1",
            enunciado:
              "De acordo com a Lei nº 14.133/2021, as modalidades de licitação são:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "concorrência, tomada de preços, convite, concurso e leilão.",
              },
              {
                letra: "B",
                texto:
                  "pregão, concorrência, concurso, leilão e diálogo competitivo.",
              },
              {
                letra: "C",
                texto: "pregão, tomada de preços, concorrência e leilão.",
              },
              {
                letra: "D",
                texto:
                  "concorrência, convite, pregão, concurso e consulta.",
              },
              {
                letra: "E",
                texto:
                  "leilão, pregão eletrônico, concurso, tomada de preços e concorrência.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A Lei 14.133/2021 estabelece 5 modalidades: PREGÃO, CONCORRÊNCIA, CONCURSO, LEILÃO e DIÁLOGO COMPETITIVO (novidade). A lei EXTINGUIU as modalidades Tomada de Preços e Convite, que existiam na Lei 8.666/93.",
            dificuldade: "Fácil",
            competencia: "Modalidades de licitação",
            banca: "IADES",
            tags: ["modalidades", "14.133/2021"],
          },
          {
            id: "ap-q-21-2",
            enunciado:
              "A respeito da dispensa e da inexigibilidade de licitação previstas na Lei nº 14.133/2021, assinale a alternativa CORRETA:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A dispensa ocorre quando há inviabilidade de competição.",
              },
              {
                letra: "B",
                texto:
                  "A inexigibilidade é aplicável quando a competição é possível, mas a lei permite não licitar.",
              },
              {
                letra: "C",
                texto:
                  "A inexigibilidade ocorre quando a competição é inviável, como no caso de fornecedor exclusivo.",
              },
              {
                letra: "D",
                texto:
                  "As hipóteses de inexigibilidade estão previstas em rol taxativo.",
              },
              {
                letra: "E",
                texto:
                  "A dispensa é aplicável apenas em situações de emergência.",
              },
            ],
            gabarito: "C",
            justificativa:
              "INEXIGIBILIDADE ocorre quando a competição é INVIÁVEL (impossível), como fornecedor exclusivo, artista consagrado, profissional de notória especialização. DISPENSA = competição possível, mas a lei dispensa. O rol de dispensa é taxativo; o de inexigibilidade é exemplificativo.",
            dificuldade: "Média",
            competencia: "Dispensa e inexigibilidade",
            banca: "IADES",
            tags: ["dispensa", "inexigibilidade"],
          },
          {
            id: "ap-q-21-3",
            enunciado:
              "Na Lei nº 14.133/2021, a ordem das fases do procedimento licitatório é:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "habilitação, julgamento, recurso e homologação.",
              },
              {
                letra: "B",
                texto:
                  "julgamento, habilitação, recurso e homologação.",
              },
              {
                letra: "C",
                texto:
                  "edital, habilitação, julgamento, recurso e homologação.",
              },
              {
                letra: "D",
                texto:
                  "edital, classificação, habilitação e adjudicação.",
              },
              {
                letra: "E",
                texto:
                  "publicação, qualificação, julgamento e contratação.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Na Lei 14.133/2021, há INVERSÃO de fases: primeiro ocorre o JULGAMENTO das propostas, depois a HABILITAÇÃO do vencedor, em seguida a fase RECURSAL (única) e por fim a HOMOLOGAÇÃO. Isso já era aplicado no pregão e foi generalizado.",
            dificuldade: "Média",
            competencia: "Fases da licitação",
            banca: "IADES",
            tags: ["fases", "ordem", "inversão"],
          },
          {
            id: "ap-q-21-4",
            enunciado:
              "A modalidade de licitação obrigatória para aquisição de bens e serviços comuns é:",
            alternativas: [
              { letra: "A", texto: "concorrência." },
              { letra: "B", texto: "pregão." },
              { letra: "C", texto: "diálogo competitivo." },
              { letra: "D", texto: "leilão." },
              { letra: "E", texto: "concurso." },
            ],
            gabarito: "B",
            justificativa:
              "O PREGÃO é a modalidade OBRIGATÓRIA para aquisição de bens e serviços COMUNS, conforme art. 29 da Lei 14.133/2021. Bens/serviços comuns são aqueles cujos padrões podem ser objetivamente definidos no edital. Preferencialmente, deve ser realizado na forma eletrônica.",
            dificuldade: "Fácil",
            competencia: "Pregão",
            banca: "IADES",
            tags: ["pregão", "bens comuns", "obrigatório"],
          },
          {
            id: "ap-q-21-5",
            enunciado:
              "O Diálogo Competitivo, modalidade prevista na Lei nº 14.133/2021, é utilizado quando:",
            alternativas: [
              {
                letra: "A",
                texto: "a Administração precisa alienar bens móveis.",
              },
              {
                letra: "B",
                texto:
                  "há necessidade de selecionar trabalho técnico, científico ou artístico.",
              },
              {
                letra: "C",
                texto:
                  "a inovação tecnológica ou técnica impossibilita que a Administração defina previamente a solução.",
              },
              {
                letra: "D",
                texto:
                  "os bens e serviços são comuns e padronizados.",
              },
              {
                letra: "E",
                texto:
                  "há urgência no atendimento de situação emergencial.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O DIÁLOGO COMPETITIVO (art. 32) é modalidade NOVA da Lei 14.133/2021, utilizada quando a inovação tecnológica ou técnica impede que a Administração defina previamente a solução. Envolve diálogos com licitantes pré-selecionados para desenvolver soluções.",
            dificuldade: "Média",
            competencia: "Diálogo Competitivo",
            banca: "IADES",
            tags: ["diálogo competitivo", "inovação"],
          },
          {
            id: "ap-q-21-6",
            enunciado:
              "São critérios de julgamento previstos na Lei nº 14.133/2021, EXCETO:",
            alternativas: [
              { letra: "A", texto: "menor preço." },
              { letra: "B", texto: "maior desconto." },
              { letra: "C", texto: "melhor técnica ou conteúdo artístico." },
              { letra: "D", texto: "menor prazo de entrega." },
              { letra: "E", texto: "técnica e preço." },
            ],
            gabarito: "D",
            justificativa:
              "Os critérios de julgamento previstos no art. 33 da Lei 14.133/2021 são: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (leilão) e maior retorno econômico. 'Menor prazo de entrega' NÃO é critério de julgamento autônomo.",
            dificuldade: "Média",
            competencia: "Critérios de julgamento",
            banca: "IADES",
            tags: ["critérios", "julgamento", "exceção"],
          },
          {
            id: "ap-q-21-7",
            enunciado:
              "Nos contratos administrativos regidos pela Lei nº 14.133/2021, a Administração pode alterar unilateralmente o contrato em até:",
            alternativas: [
              {
                letra: "A",
                texto: "10% do valor inicial atualizado.",
              },
              {
                letra: "B",
                texto: "15% do valor inicial atualizado.",
              },
              {
                letra: "C",
                texto: "20% do valor inicial atualizado.",
              },
              {
                letra: "D",
                texto: "25% do valor inicial atualizado.",
              },
              {
                letra: "E",
                texto: "30% do valor inicial atualizado.",
              },
            ],
            gabarito: "D",
            justificativa:
              "A Administração pode alterar UNILATERALMENTE o contrato em até 25% do valor inicial atualizado, tanto para acréscimos quanto para supressões (art. 125 da Lei 14.133/2021). Este limite decorre das cláusulas exorbitantes típicas dos contratos administrativos.",
            dificuldade: "Fácil",
            competencia: "Alteração contratual",
            banca: "IADES",
            tags: ["alteração", "25%", "contrato"],
          },
          {
            id: "ap-q-21-8",
            enunciado:
              "De acordo com a Lei nº 14.133/2021, são sanções aplicáveis ao contratado por infrações, EXCETO:",
            alternativas: [
              { letra: "A", texto: "advertência." },
              { letra: "B", texto: "multa." },
              { letra: "C", texto: "suspensão temporária de participação em licitação." },
              { letra: "D", texto: "impedimento de licitar e contratar." },
              { letra: "E", texto: "declaração de inidoneidade." },
            ],
            gabarito: "C",
            justificativa:
              "A Lei 14.133/2021 prevê 4 sanções: advertência, multa, impedimento de licitar (até 3 anos) e declaração de inidoneidade (3-6 anos). A 'SUSPENSÃO TEMPORÁRIA' existia na Lei 8.666/93, mas foi EXTINTA pela nova lei.",
            dificuldade: "Média",
            competencia: "Sanções contratuais",
            banca: "IADES",
            tags: ["sanções", "penalidades", "exceção"],
          },
          {
            id: "ap-q-21-9",
            enunciado:
              "O agente público responsável por coordenar e gerenciar a execução do contrato, com atribuições de acompanhamento e fiscalização, é denominado:",
            alternativas: [
              { letra: "A", texto: "ordenador de despesa." },
              { letra: "B", texto: "autoridade competente." },
              { letra: "C", texto: "gestor do contrato." },
              { letra: "D", texto: "pregoeiro." },
              { letra: "E", texto: "comissário de licitação." },
            ],
            gabarito: "C",
            justificativa:
              "O GESTOR DO CONTRATO é o agente responsável por coordenar e gerenciar a execução contratual (art. 117). Ele é auxiliado pelo fiscal técnico (aspectos técnicos) e fiscal administrativo (aspectos administrativos). Aplica-se o princípio da segregação de funções.",
            dificuldade: "Fácil",
            competencia: "Gestão contratual",
            banca: "IADES",
            tags: ["gestor", "fiscal", "contrato"],
          },
          {
            id: "ap-q-21-10",
            enunciado:
              "É hipótese de INEXIGIBILIDADE de licitação prevista na Lei nº 14.133/2021:",
            alternativas: [
              {
                letra: "A",
                texto: "contratação de pequeno valor.",
              },
              {
                letra: "B",
                texto: "casos de emergência ou calamidade pública.",
              },
              {
                letra: "C",
                texto: "licitação deserta.",
              },
              {
                letra: "D",
                texto:
                  "aquisição de materiais que só possam ser fornecidos por produtor exclusivo.",
              },
              {
                letra: "E",
                texto: "contratação de remanescente de obra.",
              },
            ],
            gabarito: "D",
            justificativa:
              "A INEXIGIBILIDADE ocorre quando há INVIABILIDADE de competição. O caso de produtor/fornecedor EXCLUSIVO é hipótese clássica de inexigibilidade (art. 74, I). As demais alternativas são hipóteses de DISPENSA (art. 75).",
            dificuldade: "Média",
            competencia: "Inexigibilidade",
            banca: "IADES",
            tags: ["inexigibilidade", "fornecedor exclusivo"],
          },
        ],
      },
    },
  ],
};
