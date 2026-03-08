import type { Materia } from '../../types';

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
            descricao: "Descentralização cria nova pessoa jurídica (entidade). Desconcentração cria órgão na mesma pessoa.",
            dica: "DesCentralização = Cria entidade. DesCOncentração = Cria Órgão.",
          },
          {
            titulo: "Achar que há hierarquia entre Ministério e autarquia",
            descricao: "A relação é de VINCULAÇÃO (tutela), não subordinação hierárquica.",
            dica: "Ministério exerce supervisão/tutela, não hierarquia.",
          },
          {
            titulo: "Confundir EP com SEM",
            descricao: "EP = capital 100% público. SEM = capital misto. EP pode ter qualquer forma; SEM só S.A.",
            dica: "SEM sempre é S.A. e admite capital privado.",
          },
          {
            titulo: "Errar o foro das entidades federais",
            descricao: "EP federal = Justiça Federal. SEM federal = Justiça Estadual (regra).",
            dica: "Empresa Pública Federal = Justiça Federal.",
          },
        ],

        mnemonicos: [
          {
            termo: "FASE",
            significado: "Fundação, Autarquia, Sociedade de economia mista, Empresa pública",
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
            frase: "DesCentralização cria Entidade, DesConcentração distribui internamente",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-2-1",
            frente: "O que compõe a Administração DIRETA?",
            verso: "**Entes federativos e seus órgãos:**\n\n- União\n- Estados\n- Distrito Federal\n- Municípios\n\n+ Órgãos (Ministérios, Secretarias, etc.)\n\nCaracterística: NÃO têm personalidade jurídica própria (órgãos).",
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
            verso: "**FASE:**\n\n1. **F**undações Públicas\n2. **A**utarquias\n3. **S**ociedades de Economia Mista\n4. **E**mpresas Públicas\n\nTodas têm personalidade jurídica PRÓPRIA.",
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
            frente: "Qual a diferença entre DESCENTRALIZAÇÃO e DESCONCENTRAÇÃO?",
            verso: "**DESCENTRALIZAÇÃO:**\n- Cria nova PESSOA jurídica (entidade)\n- Resulta na Adm. Indireta\n\n**DESCONCENTRAÇÃO:**\n- Cria ÓRGÃO (mesma pessoa)\n- Distribuição interna de competências\n\nMacete: DesCEntralização = Entidade",
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
            verso: "**AUTARQUIAS:**\n- Personalidade de direito PÚBLICO\n- Criadas por LEI (diretamente)\n- Regime ESTATUTÁRIO (concurso)\n- Bens PÚBLICOS (impenhoráveis)\n- Privilégios da Fazenda Pública\n\nExemplos: ANVISA, INSS, IBAMA",
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
            frente: "Qual a diferença entre Empresa Pública e Sociedade de Economia Mista?",
            verso: "**EMPRESA PÚBLICA:**\n- Capital 100% PÚBLICO\n- Qualquer forma jurídica\n- Foro: Justiça FEDERAL (se federal)\n\n**SEM:**\n- Capital MISTO (maioria pública)\n- Apenas S.A.\n- Foro: Justiça ESTADUAL\n\nAmbas: CLT, lei autoriza criação",
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
            verso: "**AUTARQUIA federal de regime especial** (agência reguladora).\n\n- Vinculada ao Ministério da Saúde\n- Personalidade de direito público\n- Autonomia reforçada\n- Dirigentes com mandato fixo\n- Criada pela Lei 9.782/1999",
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
            verso: "É o **controle finalístico** exercido pela Adm. Direta sobre a Indireta.\n\n- NÃO é hierarquia\n- NÃO é subordinação\n- Verifica se a entidade cumpre sua finalidade\n\nExemplo: MS supervisiona a ANVISA",
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
            verso: "**AUTARQUIAS e FUNDAÇÕES públicas:**\n→ Estatutário (servidores)\n\n**EP e SEM:**\n→ CLT (empregados públicos)\n\n⚠️ **Todas exigem CONCURSO PÚBLICO** para ingresso (art. 37, II, CF)",
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
              { letra: "B", texto: "Empresas públicas e sociedades de economia mista." },
              { letra: "C", texto: "União, Estados, Distrito Federal, Municípios e seus órgãos." },
              { letra: "D", texto: "Apenas as autarquias de regime especial." },
              { letra: "E", texto: "Entidades com personalidade jurídica própria." },
            ],
            gabarito: "C",
            justificativa: "A Administração DIRETA é composta pelos entes federativos (União, Estados, DF e Municípios) e seus órgãos. As autarquias, fundações, EP e SEM compõem a Administração INDIRETA.",
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
            justificativa: "MINISTÉRIOS são ÓRGÃOS da Administração DIRETA, não entidades da Indireta. A Administração Indireta é composta por: Autarquias, Fundações, EP e SEM (FASE).",
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
              { letra: "C", texto: "Lei que autoriza sua criação, seguida de registro." },
              { letra: "D", texto: "Portaria do Ministério competente." },
              { letra: "E", texto: "Resolução do Congresso Nacional." },
            ],
            gabarito: "B",
            justificativa: "As AUTARQUIAS são criadas diretamente por LEI ESPECÍFICA (art. 37, XIX, CF). Já as EP, SEM e fundações privadas são autorizadas por lei e criadas por registro.",
            dificuldade: "Fácil",
            competencia: "Criação de autarquias",
            banca: "IADES",
            tags: ["autarquias", "criação"],
          },
          {
            id: "ap-q-2-4",
            enunciado: "A diferença entre descentralização e desconcentração administrativa é que:",
            alternativas: [
              { letra: "A", texto: "A descentralização cria órgãos; a desconcentração cria entidades." },
              { letra: "B", texto: "A descentralização cria entidades com personalidade própria; a desconcentração cria órgãos." },
              { letra: "C", texto: "Ambas significam a mesma coisa." },
              { letra: "D", texto: "A desconcentração transfere competências para particulares." },
              { letra: "E", texto: "A descentralização sempre ocorre por delegação." },
            ],
            gabarito: "B",
            justificativa: "DESCENTRALIZAÇÃO = cria nova pessoa jurídica (entidade da Adm. Indireta). DESCONCENTRAÇÃO = cria órgão dentro da mesma pessoa jurídica, distribuindo competências internamente.",
            dificuldade: "Média",
            competencia: "Descentralização/Desconcentração",
            banca: "IADES",
            tags: ["descentralização", "desconcentração"],
          },
          {
            id: "ap-q-2-5",
            enunciado: "A ANVISA, Agência Nacional de Vigilância Sanitária, é uma:",
            alternativas: [
              { letra: "A", texto: "Empresa pública federal." },
              { letra: "B", texto: "Sociedade de economia mista." },
              { letra: "C", texto: "Autarquia federal de regime especial." },
              { letra: "D", texto: "Órgão do Ministério da Saúde." },
              { letra: "E", texto: "Fundação pública de direito privado." },
            ],
            gabarito: "C",
            justificativa: "A ANVISA é uma AUTARQUIA federal de regime especial (agência reguladora), criada pela Lei 9.782/1999, vinculada ao Ministério da Saúde, com personalidade jurídica de direito público.",
            dificuldade: "Fácil",
            competencia: "Natureza jurídica da ANVISA",
            banca: "IADES",
            tags: ["ANVISA", "autarquia"],
          },
          {
            id: "ap-q-2-6",
            enunciado: "Sobre as Empresas Públicas e Sociedades de Economia Mista, é CORRETO afirmar:",
            alternativas: [
              { letra: "A", texto: "Ambas têm capital 100% público." },
              { letra: "B", texto: "Ambas adotam regime estatutário para seus empregados." },
              { letra: "C", texto: "EP tem capital 100% público; SEM tem capital misto com maioria pública." },
              { letra: "D", texto: "SEM pode ter qualquer forma jurídica; EP apenas S.A." },
              { letra: "E", texto: "Não precisam realizar concurso público para contratação." },
            ],
            gabarito: "C",
            justificativa: "A diferença principal é o CAPITAL: EP = 100% público; SEM = misto (maioria pública). Ambas adotam CLT e exigem concurso. EP pode ter qualquer forma jurídica; SEM apenas S.A.",
            dificuldade: "Média",
            competencia: "EP vs. SEM",
            banca: "IADES",
            tags: ["empresa pública", "SEM"],
          },
          {
            id: "ap-q-2-7",
            enunciado: "O controle exercido pelo Ministério da Saúde sobre a ANVISA denomina-se:",
            alternativas: [
              { letra: "A", texto: "Controle hierárquico." },
              { letra: "B", texto: "Subordinação administrativa." },
              { letra: "C", texto: "Tutela ou supervisão ministerial." },
              { letra: "D", texto: "Vinculação direta." },
              { letra: "E", texto: "Autotutela." },
            ],
            gabarito: "C",
            justificativa: "A relação entre Ministério e entidades da Adm. Indireta é de TUTELA ou SUPERVISÃO MINISTERIAL (controle finalístico), não hierarquia. A ANVISA é vinculada ao MS, não subordinada.",
            dificuldade: "Média",
            competencia: "Controle da Adm. Indireta",
            banca: "IADES",
            tags: ["tutela", "supervisão"],
          },
          {
            id: "ap-q-2-8",
            enunciado: "As ações judiciais contra a Caixa Econômica Federal (empresa pública federal) são julgadas pela:",
            alternativas: [
              { letra: "A", texto: "Justiça Estadual." },
              { letra: "B", texto: "Justiça do Trabalho." },
              { letra: "C", texto: "Justiça Federal." },
              { letra: "D", texto: "Justiça Militar." },
              { letra: "E", texto: "Tribunais de Contas." },
            ],
            gabarito: "C",
            justificativa: "As EMPRESAS PÚBLICAS federais têm foro na JUSTIÇA FEDERAL (art. 109, I, CF). Já as Sociedades de Economia Mista federais são julgadas na Justiça Estadual (regra).",
            dificuldade: "Média",
            competencia: "Foro das entidades",
            banca: "IADES",
            tags: ["empresa pública", "foro"],
          },
          {
            id: "ap-q-2-9",
            enunciado: "Sobre os órgãos públicos, é INCORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "Não possuem personalidade jurídica própria." },
              { letra: "B", texto: "São criados por desconcentração administrativa." },
              { letra: "C", texto: "Integram a estrutura de uma pessoa jurídica." },
              { letra: "D", texto: "Possuem capacidade processual plena para qualquer ação." },
              { letra: "E", texto: "São centros de competência para determinadas atribuições." },
            ],
            gabarito: "D",
            justificativa: "Os órgãos NÃO possuem personalidade jurídica própria, portanto, em regra, não têm capacidade processual. Excepcionalmente, órgãos independentes podem impetrar MS para defender suas prerrogativas.",
            dificuldade: "Média",
            competencia: "Órgãos públicos",
            banca: "IADES",
            tags: ["órgãos", "características"],
          },
          {
            id: "ap-q-2-10",
            enunciado: "O regime de pessoal aplicável aos empregados das Empresas Públicas é o:",
            alternativas: [
              { letra: "A", texto: "Estatutário, regido pela Lei 8.112/90." },
              { letra: "B", texto: "Celetista, regido pela CLT." },
              { letra: "C", texto: "Misto, parte estatutário e parte CLT." },
              { letra: "D", texto: "Especial, sem necessidade de concurso público." },
              { letra: "E", texto: "Temporário, com contratos por prazo determinado." },
            ],
            gabarito: "B",
            justificativa: "Os empregados de EMPRESAS PÚBLICAS e SEM são regidos pela CLT (celetistas). São empregados públicos, não servidores estatutários. Porém, a contratação exige CONCURSO PÚBLICO (art. 37, II, CF).",
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
            descricao: "Descentralização CRIA pessoa jurídica. Desconcentração cria ÓRGÃO.",
            dica: "DesCENTRALIZAÇÃO = Entidade. DesCONCENTRAÇÃO = Órgão.",
          },
          {
            titulo: "Achar que há hierarquia na Administração Indireta",
            descricao: "Entre Ministério e Autarquia há VINCULAÇÃO (tutela), não hierarquia.",
            dica: "Hierarquia só dentro da mesma pessoa jurídica.",
          },
          {
            titulo: "Confundir delegação com avocação",
            descricao: "Delegação transfere para baixo/lado. Avocação puxa para cima.",
            dica: "Delega (dá). Avoca (toma).",
          },
          {
            titulo: "Tentar delegar competência exclusiva",
            descricao: "Competências exclusivas, atos normativos e decisões recursais NÃO podem ser delegadas.",
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
            significado: "Vinculação (Adm. Indireta), Hierarquia (Desconcentração)",
            frase: "Descentralização = Vinculação; Desconcentração = Hierarquia",
          },
        ],

        flashcards: [
          {
            id: "ap-fc-3-1",
            frente: "Qual a diferença entre DESCENTRALIZAÇÃO e DESCONCENTRAÇÃO?",
            verso: "**DESCENTRALIZAÇÃO:**\n- Cria nova PESSOA jurídica\n- Resulta em Adm. Indireta\n- Relação de VINCULAÇÃO\n\n**DESCONCENTRAÇÃO:**\n- Cria novo ÓRGÃO\n- Mesma pessoa jurídica\n- Relação de SUBORDINAÇÃO",
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
            verso: "**Outorga:**\n\n- Criação por LEI\n- Transfere TITULARIDADE + execução\n- Prazo INDETERMINADO\n- Cria entidades da Adm. Indireta\n\nExemplos: ANVISA, INSS, Petrobras",
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
            verso: "**Delegação/Colaboração:**\n\n- Por CONTRATO ou ato\n- Transfere apenas EXECUÇÃO (não titularidade)\n- Prazo DETERMINADO\n- Pessoa PRIVADA\n\nExemplos: Concessionárias, permissionárias",
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
            verso: "**Art. 13, Lei 9.784/99:**\n\n1. **N**ormativos - edição de atos normativos\n2. **R**ecursos - decisão de recursos\n3. **E**xclusivas - competência exclusiva\n\nMnemônico: **NRE**",
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
            verso: "**DELEGAÇÃO:**\n- Competência vai PARA BAIXO/lado\n- Não exige hierarquia\n- Conveniência\n\n**AVOCAÇÃO:**\n- Competência vem PARA CIMA\n- EXIGE hierarquia\n- Motivos relevantes\n- Excepcional",
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
            verso: "**TUTELA (Supervisão):**\n- Adm. Direta sobre INDIRETA\n- NÃO há subordinação\n- Controle finalístico\n- Depende de lei\n\n**HIERARQUIA:**\n- Dentro da MESMA pessoa\n- Relação de subordinação\n- Controle pleno\n- Automático",
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
            verso: "**Centralização:**\n\nO Estado executa suas funções DIRETAMENTE, por meio de seus próprios órgãos e agentes.\n\n- Administração DIRETA\n- Maior controle\n- Órgãos internos executam",
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
            frente: "A ANVISA é exemplo de centralização, descentralização ou desconcentração?",
            verso: "**DESCENTRALIZAÇÃO**\n\nA ANVISA é uma **AUTARQUIA** federal (pessoa jurídica própria).\n\n- Criada por lei (outorga)\n- Vinculada ao Ministério da Saúde\n- Administração INDIRETA\n\nNÃO há hierarquia entre MS e ANVISA.",
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
            enunciado: "A criação de uma autarquia federal representa um exemplo de:",
            alternativas: [
              { letra: "A", texto: "Centralização administrativa." },
              { letra: "B", texto: "Desconcentração administrativa." },
              { letra: "C", texto: "Descentralização por outorga." },
              { letra: "D", texto: "Delegação de competência." },
              { letra: "E", texto: "Avocação de competência." },
            ],
            gabarito: "C",
            justificativa: "A criação de autarquia é DESCENTRALIZAÇÃO POR OUTORGA: a lei cria nova pessoa jurídica e transfere a titularidade e execução de serviço público.",
            dificuldade: "Fácil",
            competencia: "Descentralização",
            banca: "IADES",
            tags: ["descentralização", "outorga"],
          },
          {
            id: "ap-q-3-2",
            enunciado: "A diferença fundamental entre descentralização e desconcentração administrativa está em que:",
            alternativas: [
              { letra: "A", texto: "A descentralização cria órgãos e a desconcentração cria entidades." },
              { letra: "B", texto: "A descentralização cria nova pessoa jurídica e a desconcentração distribui competências dentro da mesma pessoa." },
              { letra: "C", texto: "Ambas criam novas pessoas jurídicas." },
              { letra: "D", texto: "A desconcentração sempre é temporária." },
              { letra: "E", texto: "A descentralização não cria vínculos jurídicos." },
            ],
            gabarito: "B",
            justificativa: "DESCENTRALIZAÇÃO cria nova PESSOA jurídica (entidade). DESCONCENTRAÇÃO cria ÓRGÃOS dentro da mesma pessoa jurídica, distribuindo competências internamente.",
            dificuldade: "Fácil",
            competencia: "Distinção conceitual",
            banca: "IADES",
            tags: ["descentralização", "desconcentração"],
          },
          {
            id: "ap-q-3-3",
            enunciado: "Conforme a Lei 9.784/99, NÃO podem ser objeto de delegação:",
            alternativas: [
              { letra: "A", texto: "Atos de expediente." },
              { letra: "B", texto: "Atos de instrução processual." },
              { letra: "C", texto: "Edição de atos normativos e decisão de recursos administrativos." },
              { letra: "D", texto: "Atos vinculados de qualquer natureza." },
              { letra: "E", texto: "Atos praticados em regime de urgência." },
            ],
            gabarito: "C",
            justificativa: "O art. 13 da Lei 9.784/99 veda a delegação de: edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva (NRE).",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["delegação", "indelegável"],
          },
          {
            id: "ap-q-3-4",
            enunciado: "A avocação de competência caracteriza-se por:",
            alternativas: [
              { letra: "A", texto: "Ser transferência permanente de competência para órgão inferior." },
              { letra: "B", texto: "Ser atração temporária de competência de órgão inferior para o superior, em caráter excepcional." },
              { letra: "C", texto: "Não depender de hierarquia entre os órgãos." },
              { letra: "D", texto: "Criar nova pessoa jurídica." },
              { letra: "E", texto: "Ser obrigatória sempre que solicitada." },
            ],
            gabarito: "B",
            justificativa: "AVOCAÇÃO é a atração TEMPORÁRIA de competência de órgão INFERIOR para o SUPERIOR, em caráter EXCEPCIONAL e por motivos relevantes. Exige relação de hierarquia.",
            dificuldade: "Média",
            competencia: "Avocação",
            banca: "IADES",
            tags: ["avocação", "competência"],
          },
          {
            id: "ap-q-3-5",
            enunciado: "O controle exercido pelo Ministério da Saúde sobre a ANVISA denomina-se:",
            alternativas: [
              { letra: "A", texto: "Controle hierárquico." },
              { letra: "B", texto: "Tutela ou supervisão ministerial." },
              { letra: "C", texto: "Controle autárquico." },
              { letra: "D", texto: "Subordinação administrativa." },
              { letra: "E", texto: "Autotutela." },
            ],
            gabarito: "B",
            justificativa: "O controle da Adm. Direta sobre a Indireta é chamado de TUTELA ou SUPERVISÃO MINISTERIAL. Não há hierarquia entre eles, mas vinculação para verificar o cumprimento das finalidades.",
            dificuldade: "Fácil",
            competencia: "Tutela administrativa",
            banca: "IADES",
            tags: ["tutela", "supervisão"],
          },
          {
            id: "ap-q-3-6",
            enunciado: "A criação de departamentos e divisões dentro de um ministério é exemplo de:",
            alternativas: [
              { letra: "A", texto: "Descentralização por outorga." },
              { letra: "B", texto: "Descentralização por delegação." },
              { letra: "C", texto: "Desconcentração administrativa." },
              { letra: "D", texto: "Desestatização." },
              { letra: "E", texto: "Privatização." },
            ],
            gabarito: "C",
            justificativa: "A criação de departamentos e divisões dentro do mesmo ministério é DESCONCENTRAÇÃO: distribuição interna de competências, criando órgãos dentro da mesma pessoa jurídica.",
            dificuldade: "Fácil",
            competencia: "Desconcentração",
            banca: "IADES",
            tags: ["desconcentração", "órgãos"],
          },
          {
            id: "ap-q-3-7",
            enunciado: "A concessão de serviço público a uma empresa privada representa:",
            alternativas: [
              { letra: "A", texto: "Descentralização por outorga." },
              { letra: "B", texto: "Descentralização por delegação." },
              { letra: "C", texto: "Desconcentração administrativa." },
              { letra: "D", texto: "Centralização administrativa." },
              { letra: "E", texto: "Avocação de competência." },
            ],
            gabarito: "B",
            justificativa: "A CONCESSÃO de serviço público é DESCENTRALIZAÇÃO POR DELEGAÇÃO (ou colaboração): por contrato, transfere-se apenas a EXECUÇÃO (não a titularidade) para pessoa privada.",
            dificuldade: "Média",
            competencia: "Descentralização por delegação",
            banca: "IADES",
            tags: ["concessão", "delegação"],
          },
          {
            id: "ap-q-3-8",
            enunciado: "Sobre a delegação de competência, é CORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "É irrevogável após formalizada." },
              { letra: "B", texto: "Depende necessariamente de relação hierárquica." },
              { letra: "C", texto: "Pode ser revogada a qualquer tempo pelo delegante." },
              { letra: "D", texto: "Transfere definitivamente a competência." },
              { letra: "E", texto: "Não precisa ser publicada." },
            ],
            gabarito: "C",
            justificativa: "A delegação é REVOGÁVEL a qualquer tempo pelo delegante. É temporária, não transfere definitivamente e deve ser publicada. Não exige hierarquia necessariamente.",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["delegação", "revogação"],
          },
          {
            id: "ap-q-3-9",
            enunciado: "A relação entre a Secretaria Estadual de Saúde (SES-GO) e sua Superintendência de Vigilância Sanitária é de:",
            alternativas: [
              { letra: "A", texto: "Vinculação (tutela)." },
              { letra: "B", texto: "Hierarquia e subordinação." },
              { letra: "C", texto: "Independência total." },
              { letra: "D", texto: "Descentralização por outorga." },
              { letra: "E", texto: "Delegação de serviços." },
            ],
            gabarito: "B",
            justificativa: "A Superintendência é ÓRGÃO dentro da SES-GO (desconcentração), portanto há relação de HIERARQUIA e SUBORDINAÇÃO. Vinculação só existe entre pessoas jurídicas diferentes.",
            dificuldade: "Média",
            competencia: "Hierarquia",
            banca: "IADES",
            tags: ["hierarquia", "órgãos"],
          },
          {
            id: "ap-q-3-10",
            enunciado: "A descentralização por outorga diferencia-se da descentralização por delegação porque:",
            alternativas: [
              { letra: "A", texto: "A outorga transfere apenas a execução do serviço." },
              { letra: "B", texto: "A delegação cria nova pessoa jurídica de direito público." },
              { letra: "C", texto: "A outorga transfere a titularidade e a execução; a delegação transfere apenas a execução." },
              { letra: "D", texto: "Ambas criam entidades da Administração Indireta." },
              { letra: "E", texto: "A delegação tem prazo indeterminado." },
            ],
            gabarito: "C",
            justificativa: "OUTORGA: lei cria entidade e transfere TITULARIDADE + execução. DELEGAÇÃO: contrato/ato transfere apenas EXECUÇÃO para pessoa privada, mantendo a titularidade com o Estado.",
            dificuldade: "Média",
            competencia: "Outorga vs. delegação",
            banca: "IADES",
            tags: ["outorga", "delegação"],
          },
        ],
      },
    },
  ],
};
