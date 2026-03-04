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
  ],
};
