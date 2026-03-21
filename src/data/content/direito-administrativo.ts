import type { Materia } from "../../types";

export const direitoAdministrativo: Materia = {
  id: "direito-administrativo",
  nome: "Direito Administrativo e Constitucional",
  sigla: "DA",
  descricao: "Princípios, atos, poderes e organização da Administração Pública",
  cor: "#3f51b5",
  icone: "Gavel",
  topicos: [
    {
      id: "da-topico-1",
      numero: 1,
      titulo: "Estado, Governo e Administração Pública: Conceitos e Elementos",
      conteudo: {
        resumo: `
## Resumo Rápido

### Diferenças Fundamentais

| Conceito | Definição | Característica |
|----------|-----------|----------------|
| **ESTADO** | Pessoa jurídica de direito público | PERMANENTE |
| **GOVERNO** | Condução política do Estado | TRANSITÓRIO |
| **ADMINISTRAÇÃO** | Execução das políticas públicas | INSTRUMENTAL |

### Elementos do Estado
1. **Povo** - elemento humano
2. **Território** - elemento físico/geográfico
3. **Soberania** - elemento político (poder supremo)

### Sentidos da Administração Pública
- **Sentido SUBJETIVO/ORGÂNICO** = QUEM administra (órgãos, entidades, agentes)
- **Sentido OBJETIVO/MATERIAL** = O QUE faz (atividade administrativa)

### Funções do Estado
- **Legislativa** = criar leis (típica do Legislativo)
- **Jurisdicional** = resolver conflitos (típica do Judiciário)
- **Administrativa** = executar a lei de ofício (típica do Executivo)
        `,

        explicacao: `
## Explicação Didática

### 1. O Conceito de ESTADO

O **Estado** é uma pessoa jurídica de direito público, dotada de **personalidade jurídica própria**, capaz de adquirir direitos e contrair obrigações.

#### Elementos Constitutivos do Estado

| Elemento | Descrição | Exemplo |
|----------|-----------|---------|
| **POVO** | Conjunto de pessoas vinculadas ao Estado pelo vínculo da nacionalidade | Brasileiros natos e naturalizados |
| **TERRITÓRIO** | Base física onde o Estado exerce sua soberania | Território brasileiro (terrestre, marítimo, aéreo) |
| **SOBERANIA** | Poder supremo do Estado, independência externa e supremacia interna | Capacidade de criar leis, celebrar tratados |

⚠️ **Atenção IADES**: Não confundir **POVO** com **POPULAÇÃO**:
- Povo = vínculo jurídico (nacionalidade)
- População = vínculo demográfico (todas as pessoas no território)

#### Formas de Estado
- **Estado UNITÁRIO**: poder centralizado (ex: Uruguai, Portugal)
- **Estado FEDERADO**: descentralização política (ex: Brasil, EUA)
- **Confederação**: Estados soberanos unidos por tratado (ex: histórica)

🇧🇷 **Brasil = República Federativa** (art. 1º, CF/88)

### 2. O Conceito de GOVERNO

**Governo** é a atividade de **condução política** do Estado. É o conjunto de órgãos e pessoas que exercem o poder político, definindo as diretrizes e metas a serem seguidas.

#### Características do Governo
- É **TRANSITÓRIO** (muda conforme eleições)
- Exerce **função política** (decisões discricionárias)
- Define **políticas públicas**
- Atua com **independência** funcional

#### Formas de Governo
| Forma | Característica | Exemplo |
|-------|----------------|---------|
| **República** | Eletividade, temporariedade, responsabilidade | Brasil |
| **Monarquia** | Hereditariedade, vitaliciedade | Reino Unido |

#### Sistemas de Governo
| Sistema | Características | Chefe de Estado / Governo |
|---------|-----------------|---------------------------|
| **Presidencialismo** | Concentração no Presidente | Mesmo (Presidente) |
| **Parlamentarismo** | Separação entre Chefe de Estado e Governo | Diferentes |

🇧🇷 **Brasil = República Presidencialista Federativa**

### 3. O Conceito de ADMINISTRAÇÃO PÚBLICA

A **Administração Pública** é o aparelhamento do Estado voltado para a **realização de serviços**, visando à satisfação das necessidades coletivas.

#### Sentidos da Administração Pública

##### a) Sentido SUBJETIVO (Orgânico/Formal)
**QUEM** administra?
- Órgãos públicos
- Entidades (autarquias, fundações, empresas públicas, sociedades de economia mista)
- Agentes públicos

##### b) Sentido OBJETIVO (Material/Funcional)
**O QUE** a Administração faz?
- Fomento
- Polícia administrativa
- Serviço público
- Intervenção no domínio econômico

### 4. Funções do Estado

#### Função LEGISLATIVA
- **Típica** do Poder Legislativo
- Criar leis (normas gerais e abstratas)
- Inovar no ordenamento jurídico
- Fiscalizar (com auxílio do Tribunal de Contas)

#### Função JURISDICIONAL
- **Típica** do Poder Judiciário
- Aplicar a lei ao caso concreto
- Resolver conflitos com **definitividade** (coisa julgada)
- Atuação mediante provocação (inércia)

#### Função ADMINISTRATIVA
- **Típica** do Poder Executivo
- Aplicar a lei **de ofício** (sem provocação)
- Gestão dos bens e serviços públicos
- **Não** possui definitividade (pode ser revista pelo Judiciário)

#### Importante: Funções Típicas vs. Atípicas

| Poder | Função Típica | Função Atípica |
|-------|---------------|----------------|
| Legislativo | Legislar, fiscalizar | Administrar (licitações), julgar (CPI) |
| Executivo | Administrar | Legislar (medidas provisórias), julgar (PAD) |
| Judiciário | Julgar | Administrar (servidores), legislar (regimentos) |

### 5. Estado vs. Governo vs. Administração - Comparativo Final

| Aspecto | ESTADO | GOVERNO | ADMINISTRAÇÃO |
|---------|--------|---------|---------------|
| **Natureza** | Pessoa jurídica | Atividade política | Aparelho estatal |
| **Duração** | Permanente | Transitório | Permanente |
| **Função** | Titular do poder | Exercício do poder | Execução das políticas |
| **Atos** | - | Atos de governo | Atos administrativos |
| **Personalidade** | Tem | Não tem | Não tem |

### 6. Administração Pública no Contexto da Vigilância Sanitária

A **fiscalização sanitária** é exercício da função administrativa (função executiva), especificamente do **poder de polícia** administrativa.

- O Fiscal de Saúde Pública integra a **Administração Pública em sentido subjetivo**
- As ações de fiscalização são **Administração Pública em sentido objetivo**
- A SES-GO é órgão da **Administração Direta estadual**
- A ANVISA é **Autarquia** (Administração Indireta federal)
        `,

        pontosChave: [
          "ESTADO = pessoa jurídica, permanente, 3 elementos: povo, território, soberania",
          "GOVERNO = condução política, transitório, define políticas públicas",
          "ADMINISTRAÇÃO = execução, instrumental, implementa as políticas",
          "Povo ≠ População: povo é vínculo jurídico (nacionalidade)",
          "Brasil: República Federativa Presidencialista",
          "Administração - Sentido SUBJETIVO: órgãos, entidades, agentes (QUEM)",
          "Administração - Sentido OBJETIVO: atividades administrativas (O QUE)",
          "Função ADMINISTRATIVA: aplica a lei de ofício, sem definitividade",
          "Função JURISDICIONAL: única com definitividade (coisa julgada)",
          "Vigilância Sanitária = exercício do PODER DE POLÍCIA administrativa",
        ],

        armadilhas: [
          {
            titulo: "Confundir Estado com Governo",
            descricao:
              "Estado é permanente e é pessoa jurídica. Governo é transitório e não tem personalidade jurídica.",
            dica: "O Governo muda a cada eleição, o Estado permanece.",
          },
          {
            titulo: "Confundir Povo com População",
            descricao:
              "Povo: vínculo JURÍDICO (nacionalidade). População: vínculo DEMOGRÁFICO (quem está no território).",
            dica: "Estrangeiros fazem parte da população, mas não do povo brasileiro.",
          },
          {
            titulo: "Achar que só o Executivo administra",
            descricao:
              "Legislativo e Judiciário também exercem função administrativa (atípica) ao gerir seus órgãos.",
            dica: "Todos os poderes administram, mas para o Executivo é função TÍPICA.",
          },
          {
            titulo: "Confundir sentido subjetivo com objetivo",
            descricao:
              "SUBJETIVO = SUJEITOS (quem). OBJETIVO = OBJETO (o quê).",
            dica: "Subjetivo com S de Sujeito. Objetivo com O de O quê.",
          },
        ],

        mnemonicos: [
          {
            termo: "EGA",
            significado: "Estado, Governo, Administração",
            frase:
              "EGA: Estado é permanente, Governo é transitório, Administração é instrumental",
          },
          {
            termo: "PTS",
            significado: "Povo, Território, Soberania",
            frase: "Os 3 elementos do Estado: PTS (pts = pontos essenciais)",
          },
          {
            termo: "SO-QUE",
            significado: "Subjetivo = Quem / Objetivo = O quê",
            frase: "SO(bjetivo) = QUEM / O(bjetivo) = O QUE",
          },
          {
            termo: "LJA",
            significado: "Legislativa, Jurisdicional, Administrativa",
            frase: "As 3 funções do Estado: LJA (Loja do Estado)",
          },
        ],

        flashcards: [
          {
            id: "da-fc-1-1",
            frente: "Quais são os três ELEMENTOS do Estado?",
            verso:
              "1. **POVO** - elemento humano\n2. **TERRITÓRIO** - elemento físico\n3. **SOBERANIA** - elemento político\n\nMnemônico: PTS",
            tags: ["Estado", "elementos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-2",
            frente: "Qual a diferença entre ESTADO e GOVERNO?",
            verso:
              "**ESTADO**:\n- Pessoa jurídica\n- PERMANENTE\n- Titular do poder\n\n**GOVERNO**:\n- Atividade política\n- TRANSITÓRIO\n- Exerce o poder",
            tags: ["Estado", "Governo", "diferença"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-3",
            frente: "O que é Administração Pública em sentido SUBJETIVO?",
            verso:
              "**QUEM** administra:\n- Órgãos públicos\n- Entidades (autarquias, fundações, EP, SEM)\n- Agentes públicos\n\nDica: Subjetivo = Sujeitos",
            tags: ["Administração", "subjetivo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-4",
            frente: "O que é Administração Pública em sentido OBJETIVO?",
            verso:
              "**O QUE** a Administração faz:\n- Fomento\n- Polícia administrativa\n- Serviço público\n- Intervenção no domínio econômico\n\nDica: Objetivo = O quê",
            tags: ["Administração", "objetivo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-5",
            frente: "Qual a diferença entre POVO e POPULAÇÃO?",
            verso:
              "**POVO**: vínculo JURÍDICO (nacionalidade)\n→ Brasileiros natos e naturalizados\n\n**POPULAÇÃO**: vínculo DEMOGRÁFICO\n→ Todas as pessoas no território (inclui estrangeiros)",
            tags: ["povo", "população", "pegadinha"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-6",
            frente: "Quais são as três FUNÇÕES do Estado?",
            verso:
              "1. **LEGISLATIVA** (típica do Legislativo)\n   → Criar leis\n\n2. **JURISDICIONAL** (típica do Judiciário)\n   → Resolver conflitos definitivamente\n\n3. **ADMINISTRATIVA** (típica do Executivo)\n   → Executar a lei de ofício",
            tags: ["funções", "Estado"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-7",
            frente:
              "Qual função estatal possui DEFINITIVIDADE (coisa julgada)?",
            verso:
              "Apenas a **FUNÇÃO JURISDICIONAL** possui definitividade.\n\nA função administrativa pode ser revista pelo Judiciário.\nA função legislativa pode ter leis declaradas inconstitucionais.",
            tags: ["jurisdicional", "definitividade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-1-8",
            frente: "Qual a forma e sistema de governo do Brasil?",
            verso:
              "**Forma de Estado**: FEDERAÇÃO\n**Forma de Governo**: REPÚBLICA\n**Sistema de Governo**: PRESIDENCIALISMO\n\n→ República Federativa Presidencialista",
            tags: ["Brasil", "governo"],
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
            id: "da-q-1-1",
            enunciado: "São elementos constitutivos do Estado:",
            alternativas: [
              { letra: "A", texto: "Povo, população e governo." },
              { letra: "B", texto: "Território, administração e jurisdição." },
              { letra: "C", texto: "Povo, território e soberania." },
              { letra: "D", texto: "Governo, administração e soberania." },
              { letra: "E", texto: "Nação, país e república." },
            ],
            gabarito: "C",
            justificativa:
              "Os três elementos constitutivos do Estado são: POVO (elemento humano), TERRITÓRIO (elemento físico) e SOBERANIA (elemento político). Governo e Administração não são elementos do Estado.",
            dificuldade: "Fácil",
            competencia: "Conceito - elementos do Estado",
            banca: "IADES",
            tags: ["Estado", "elementos"],
          },
          {
            id: "da-q-1-2",
            enunciado:
              "Acerca das distinções entre Estado, Governo e Administração Pública, assinale a alternativa CORRETA:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "O Estado é transitório, enquanto o Governo é permanente.",
              },
              {
                letra: "B",
                texto: "O Governo possui personalidade jurídica própria.",
              },
              {
                letra: "C",
                texto:
                  "A Administração Pública é responsável pela condução política do Estado.",
              },
              {
                letra: "D",
                texto:
                  "O Estado é pessoa jurídica de direito público, de caráter permanente.",
              },
              {
                letra: "E",
                texto:
                  "A Administração Pública define as políticas públicas a serem implementadas.",
              },
            ],
            gabarito: "D",
            justificativa:
              "O Estado é pessoa jurídica de direito público permanente. O Governo é transitório (alternativa A invertida). Governo não tem personalidade jurídica (B errada). O Governo conduz politicamente (C errada). Governo define políticas (E errada).",
            dificuldade: "Média",
            competencia: "Distinções conceituais",
            banca: "IADES",
            tags: ["Estado", "Governo", "Administração"],
          },
          {
            id: "da-q-1-3",
            enunciado:
              "A Administração Pública, em sentido subjetivo (ou orgânico), compreende:",
            alternativas: [
              {
                letra: "A",
                texto: "As atividades de fomento e serviço público.",
              },
              {
                letra: "B",
                texto:
                  "Os órgãos, entidades e agentes públicos que exercem a função administrativa.",
              },
              {
                letra: "C",
                texto: "A intervenção estatal no domínio econômico.",
              },
              {
                letra: "D",
                texto: "O exercício do poder de polícia administrativa.",
              },
              {
                letra: "E",
                texto: "A prestação de serviços públicos à coletividade.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Sentido SUBJETIVO (orgânico) refere-se a QUEM exerce a função administrativa: órgãos, entidades e agentes. As demais alternativas referem-se ao sentido OBJETIVO (o que a Administração faz).",
            dificuldade: "Média",
            competencia: "Sentidos da Administração",
            banca: "IADES",
            tags: ["subjetivo", "orgânico"],
          },
          {
            id: "da-q-1-4",
            enunciado:
              "Sobre o conceito de povo como elemento do Estado, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Abrange todas as pessoas que se encontram no território, independentemente de nacionalidade.",
              },
              {
                letra: "B",
                texto: "Refere-se exclusivamente aos brasileiros natos.",
              },
              {
                letra: "C",
                texto:
                  "Corresponde ao conjunto de pessoas vinculadas ao Estado pelo vínculo da nacionalidade.",
              },
              { letra: "D", texto: "É sinônimo de população." },
              {
                letra: "E",
                texto: "Inclui os estrangeiros residentes no país.",
              },
            ],
            gabarito: "C",
            justificativa:
              "POVO é o conjunto de pessoas vinculadas ao Estado pelo vínculo JURÍDICO da nacionalidade (brasileiros natos e naturalizados). POPULAÇÃO é conceito demográfico. A alternativa B é restritiva demais (inclui naturalizados).",
            dificuldade: "Média",
            competencia: "Conceito de povo",
            banca: "IADES",
            tags: ["povo", "nacionalidade"],
          },
          {
            id: "da-q-1-5",
            enunciado:
              "A função estatal que possui como característica a definitividade (coisa julgada) é a função:",
            alternativas: [
              { letra: "A", texto: "Administrativa." },
              { letra: "B", texto: "Legislativa." },
              { letra: "C", texto: "Governamental." },
              { letra: "D", texto: "Jurisdicional." },
              { letra: "E", texto: "Executiva." },
            ],
            gabarito: "D",
            justificativa:
              "Apenas a função JURISDICIONAL possui definitividade, produzindo coisa julgada. A função administrativa pode ser revista pelo Judiciário, e a legislativa pode ter leis declaradas inconstitucionais.",
            dificuldade: "Fácil",
            competencia: "Funções do Estado",
            banca: "IADES",
            tags: ["jurisdicional", "coisa julgada"],
          },
          {
            id: "da-q-1-6",
            enunciado:
              "O Brasil adota como forma de Estado, forma de governo e sistema de governo, respectivamente:",
            alternativas: [
              { letra: "A", texto: "República, Federação e Presidencialismo." },
              { letra: "B", texto: "Federação, República e Presidencialismo." },
              { letra: "C", texto: "Federação, Monarquia e Parlamentarismo." },
              {
                letra: "D",
                texto: "Estado Unitário, República e Presidencialismo.",
              },
              {
                letra: "E",
                texto: "Confederação, República e Parlamentarismo.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Brasil: FEDERAÇÃO (forma de Estado), REPÚBLICA (forma de governo) e PRESIDENCIALISMO (sistema de governo). A alternativa A inverte forma de Estado com forma de governo.",
            dificuldade: "Média",
            competencia: "Organização do Estado brasileiro",
            banca: "IADES",
            tags: ["Brasil", "federação", "república"],
          },
          {
            id: "da-q-1-7",
            enunciado:
              "O exercício da função administrativa pelo Poder Judiciário, ao realizar concurso público para seus servidores, configura:",
            alternativas: [
              { letra: "A", texto: "Função típica do Judiciário." },
              {
                letra: "B",
                texto: "Invasão de competência do Poder Executivo.",
              },
              { letra: "C", texto: "Função atípica do Poder Judiciário." },
              {
                letra: "D",
                texto:
                  "Ato inconstitucional por violar a separação de poderes.",
              },
              { letra: "E", texto: "Ato de governo de natureza política." },
            ],
            gabarito: "C",
            justificativa:
              "Quando o Judiciário administra (realiza licitações, concursos, gestão de pessoal), exerce função ATÍPICA administrativa. Sua função TÍPICA é julgar. Isso não viola a separação de poderes.",
            dificuldade: "Média",
            competencia: "Funções típicas e atípicas",
            banca: "IADES",
            tags: ["função atípica", "Judiciário"],
          },
          {
            id: "da-q-1-8",
            enunciado:
              "A fiscalização sanitária exercida pelo Fiscal de Saúde Pública representa, no âmbito da organização administrativa:",
            alternativas: [
              { letra: "A", texto: "Exercício de função legislativa atípica." },
              { letra: "B", texto: "Ato de governo de natureza política." },
              {
                letra: "C",
                texto: "Exercício do poder de polícia administrativa.",
              },
              { letra: "D", texto: "Função jurisdicional do Estado." },
              {
                letra: "E",
                texto: "Atividade exclusiva do Poder Legislativo.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A fiscalização sanitária é manifestação do PODER DE POLÍCIA administrativa, que limita direitos individuais em prol do interesse coletivo (saúde pública). É função administrativa típica do Executivo.",
            dificuldade: "Fácil",
            competencia: "Poder de polícia",
            banca: "IADES",
            tags: ["fiscalização", "poder de polícia", "vigilância sanitária"],
          },
          {
            id: "da-q-1-9",
            enunciado:
              "Quanto às características da função administrativa, é INCORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "É exercida preponderantemente pelo Poder Executivo.",
              },
              { letra: "B", texto: "Consiste na aplicação da lei de ofício." },
              {
                letra: "C",
                texto: "Seus atos podem ser revistos pelo Poder Judiciário.",
              },
              {
                letra: "D",
                texto: "Produz decisões com força de coisa julgada material.",
              },
              { letra: "E", texto: "Visa à satisfação do interesse público." },
            ],
            gabarito: "D",
            justificativa:
              "A função administrativa NÃO produz coisa julgada (definitividade). Apenas a função jurisdicional possui essa característica. Os atos administrativos podem sempre ser revistos pelo Judiciário.",
            dificuldade: "Média",
            competencia: "Função administrativa",
            banca: "IADES",
            tags: ["função administrativa", "coisa julgada"],
          },
          {
            id: "da-q-1-10",
            enunciado:
              "A soberania, como elemento do Estado, caracteriza-se por:",
            alternativas: [
              {
                letra: "A",
                texto: "Subordinação a organismos internacionais.",
              },
              {
                letra: "B",
                texto:
                  "Independência na ordem internacional e supremacia na ordem interna.",
              },
              {
                letra: "C",
                texto:
                  "Limitação pelos poderes dos estados-membros da Federação.",
              },
              {
                letra: "D",
                texto: "Submissão obrigatória às decisões de outros Estados.",
              },
              {
                letra: "E",
                texto: "Exercício exclusivo pelo Poder Judiciário.",
              },
            ],
            gabarito: "B",
            justificativa:
              "SOBERANIA possui duas dimensões: INDEPENDÊNCIA na ordem internacional (não se submete a outros Estados) e SUPREMACIA na ordem interna (poder maior dentro do território). Os estados-membros têm autonomia, não soberania.",
            dificuldade: "Média",
            competencia: "Soberania",
            banca: "IADES",
            tags: ["soberania", "elementos do Estado"],
          },
        ],
      },
    },
    {
      id: "da-topico-2",
      numero: 2,
      titulo: "Direito Administrativo: Conceito, Objeto e Fontes",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Direito Administrativo

O **Direito Administrativo** é o ramo do direito público que regula a organização e a atividade da Administração Pública.

| Aspecto | Descrição |
|---------|-----------|
| **Natureza** | Direito PÚBLICO interno |
| **Objeto** | Administração Pública e suas relações |
| **Finalidade** | Regular o exercício da função administrativa |
| **Regime jurídico** | Prerrogativas e sujeições do poder público |

### Fontes do Direito Administrativo

| Fonte | Tipo | Exemplo |
|-------|------|---------|
| **Lei** | Primária/Principal | Constituição, leis ordinárias |
| **Doutrina** | Secundária | Obras de juristas |
| **Jurisprudência** | Secundária | Decisões dos tribunais |
| **Costumes** | Secundária | Praxe administrativa |
| **Princípios gerais** | Secundária | Boa-fé, segurança jurídica |

### Para IADES:
- Direito Administrativo = ramo do direito PÚBLICO (não privado)
- LEI é a fonte PRIMÁRIA e principal
- Direito Administrativo brasileiro é NÃO CODIFICADO
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Direito Administrativo

#### 1.1 Definições Doutrinárias

**Hely Lopes Meirelles:**
> "Conjunto harmônico de princípios jurídicos que regem os órgãos, os agentes e as atividades públicas tendentes a realizar concreta, direta e imediatamente os fins desejados pelo Estado."

**Maria Sylvia Zanella Di Pietro:**
> "Ramo do direito público que tem por objeto os órgãos, agentes e pessoas jurídicas administrativas que integram a Administração Pública, a atividade jurídica não contenciosa que exerce e os bens de que se utiliza para a consecução de seus fins, de natureza pública."

**Celso Antônio Bandeira de Mello:**
> "Ramo do direito público que disciplina a função administrativa, bem como pessoas e órgãos que a exercem."

#### 1.2 Características do Direito Administrativo

| Característica | Descrição |
|----------------|-----------|
| **Ramo do Direito Público** | Relações Estado-particular com supremacia estatal |
| **Direito interno** | Aplica-se no território nacional |
| **Não codificado** | Não existe um "Código Administrativo" no Brasil |
| **Parcialmente legislado** | Muitas normas esparsas |
| **Em constante evolução** | Adaptação às mudanças sociais |

#### 1.3 Direito Público vs. Direito Privado

| Aspecto | Direito PÚBLICO | Direito PRIVADO |
|---------|-----------------|-----------------|
| **Relações** | Estado x particular | Particular x particular |
| **Interesse** | Coletivo/público | Individual |
| **Posição das partes** | Desigualdade (Estado prevalece) | Igualdade |
| **Autonomia** | Limitada pela lei | Ampla (o que não é proibido é permitido) |
| **Exemplos** | Administrativo, Constitucional | Civil, Empresarial |

### 2. Objeto do Direito Administrativo

O **objeto** do Direito Administrativo é a **Administração Pública** em todos os seus aspectos.

#### 2.1 Abrangência do Objeto

**Sentido SUBJETIVO (quem):**
- Órgãos públicos
- Entidades da Administração Indireta
- Agentes públicos

**Sentido OBJETIVO (o que):**
- Atividade administrativa
- Serviços públicos
- Poder de polícia
- Intervenção no domínio econômico
- Fomento

#### 2.2 Atividades Reguladas

| Atividade | Descrição | Exemplo em VISA |
|-----------|-----------|-----------------|
| **Polícia administrativa** | Limitação de direitos individuais | Fiscalização sanitária |
| **Serviço público** | Prestação de utilidades | Vacinação |
| **Fomento** | Incentivo a atividades privadas | Incentivos à pesquisa |
| **Intervenção** | Atuação no domínio econômico | Regulação de preços |

#### 2.3 Relações Jurídicas

O Direito Administrativo rege:
1. **Relações internas**: entre órgãos e agentes
2. **Relações externas**: entre Estado e particulares
3. **Relações interadministrativas**: entre entidades públicas

### 3. Fontes do Direito Administrativo

**Fonte** é o meio pelo qual o Direito se manifesta, a origem das normas jurídicas.

#### 3.1 Classificação das Fontes

| Tipo | Característica | Exemplos |
|------|----------------|----------|
| **Primária/Principal** | Cria o direito | Lei |
| **Secundária/Acessória** | Interpreta, complementa | Doutrina, jurisprudência |
| **Escrita** | Expressa em texto | Lei, regulamento |
| **Não escrita** | Prática, costume | Praxe administrativa |

#### 3.2 A Lei como Fonte Primária

A **LEI** é a fonte primária e mais importante do Direito Administrativo.

**Hierarquia normativa:**
1. **Constituição Federal** (norma suprema)
2. **Emendas Constitucionais**
3. **Leis Complementares**
4. **Leis Ordinárias**
5. **Medidas Provisórias** (força de lei)
6. **Leis Delegadas**
7. **Decretos** (regulamentam leis)
8. **Resoluções, Portarias** (atos normativos infralegais)

**Exemplos importantes:**
- CF/88 (art. 37 e seguintes)
- Lei 8.112/90 (Servidores Federais)
- Lei 14.133/21 (Licitações)
- Lei 9.784/99 (Processo Administrativo)
- Lei 8.429/92 (Improbidade)

#### 3.3 A Doutrina

**Doutrina** é o conjunto de obras, estudos e pareceres elaborados por estudiosos do Direito.

**Características:**
- Fonte SECUNDÁRIA (não cria norma)
- Interpreta e sistematiza o direito
- Influencia legisladores e juízes
- Orienta a aplicação da lei

**Doutrinadores importantes:**
- Hely Lopes Meirelles
- Celso Antônio Bandeira de Mello
- Maria Sylvia Zanella Di Pietro
- José dos Santos Carvalho Filho

#### 3.4 A Jurisprudência

**Jurisprudência** é o conjunto de decisões reiteradas dos tribunais sobre determinada matéria.

**Características:**
- Fonte SECUNDÁRIA
- Orienta a aplicação do direito
- Uniformiza entendimentos

**Súmulas Vinculantes:**
- Aprovadas pelo STF
- Vinculam toda a Administração Pública
- Exemplo: SV 13 (nepotismo)

#### 3.5 Os Costumes

**Costume** é a prática reiterada de comportamentos com convicção de obrigatoriedade.

**Tipos:**
| Costume | Relação com a lei | Validade |
|---------|-------------------|----------|
| **Secundum legem** | Conforme a lei | Válido |
| **Praeter legem** | Além da lei (preenche lacuna) | Discutível |
| **Contra legem** | Contrário à lei | Inválido |

**Praxe administrativa:**
- Práticas habituais da Administração
- Deve ser compatível com a lei

#### 3.6 Os Princípios Gerais do Direito

São normas de caráter geral que orientam o ordenamento jurídico.

**Exemplos:**
- Boa-fé
- Vedação ao enriquecimento ilícito
- Segurança jurídica
- Proporcionalidade
- Razoabilidade

### 4. Regime Jurídico-Administrativo

O **regime jurídico-administrativo** é o conjunto de prerrogativas e sujeições a que está submetida a Administração Pública.

#### 4.1 Binômio do Regime

| Elemento | Descrição | Fundamento |
|----------|-----------|------------|
| **PRERROGATIVAS** | Poderes especiais da Administração | Supremacia do interesse público |
| **SUJEIÇÕES** | Limitações à atuação administrativa | Indisponibilidade do interesse público |

#### 4.2 Exemplos de Prerrogativas

- Autotutela (anular próprios atos)
- Autoexecutoriedade (executar sem autorização judicial)
- Imperatividade (impor obrigações unilateralmente)
- Presunção de legitimidade dos atos

#### 4.3 Exemplos de Sujeições

- Licitação obrigatória
- Concurso público
- Motivação dos atos
- Responsabilidade civil objetiva
- Controle pelos Tribunais de Contas

### 5. Direito Administrativo e Vigilância Sanitária

A **fiscalização sanitária** é exercício típico do Direito Administrativo:

| Conceito | Aplicação na VISA |
|----------|-------------------|
| **Poder de polícia** | Fiscalização de estabelecimentos |
| **Ato administrativo** | Auto de infração, alvará |
| **Processo administrativo** | Apuração de infrações |
| **Responsabilidade** | Penalidades sanitárias |
| **Regime jurídico** | Prerrogativas do fiscal |
        `,

        pontosChave: [
          "Direito Administrativo = ramo do DIREITO PÚBLICO interno",
          "Objeto = Administração Pública (órgãos, agentes, atividades)",
          "Característica: NÃO CODIFICADO (não existe Código Administrativo)",
          "Fonte PRIMÁRIA e principal = LEI",
          "Fontes secundárias = doutrina, jurisprudência, costumes, princípios",
          "Hierarquia: CF → LC → LO → Decretos → Resoluções/Portarias",
          "Regime jurídico-administrativo = PRERROGATIVAS + SUJEIÇÕES",
          "Prerrogativas decorrem da SUPREMACIA do interesse público",
          "Sujeições decorrem da INDISPONIBILIDADE do interesse público",
          "Fiscalização sanitária = exercício do poder de polícia administrativa",
        ],

        armadilhas: [
          {
            titulo: "Achar que existe Código Administrativo",
            descricao:
              "O Direito Administrativo brasileiro NÃO é codificado. Existem leis esparsas.",
            dica: 'Diferente do Direito Civil e Penal, não temos "Código Administrativo".',
          },
          {
            titulo: "Confundir fontes primárias com secundárias",
            descricao:
              "Apenas a LEI é fonte primária. Doutrina e jurisprudência são secundárias.",
            dica: "Fonte primária CRIA o direito. Secundária INTERPRETA.",
          },
          {
            titulo: "Inverter prerrogativas e sujeições",
            descricao: "Prerrogativas = poderes. Sujeições = limitações.",
            dica: 'Prerrogativa vem de "privilegium" (privilégio). Sujeição é submissão.',
          },
          {
            titulo: "Aceitar costume contra legem",
            descricao:
              "Costume contrário à lei NÃO é válido no Direito Administrativo.",
            dica: "A Administração deve obediência estrita à lei (legalidade).",
          },
        ],

        mnemonicos: [
          {
            termo: "PIN-SUP",
            significado:
              "Prerrogativas vêm da Supremacia; Sujeições vêm da Indisponibilidade",
            frase:
              "PIN-SUP: Prerrogativas = Supremacia, Sujeições = indisponibilidade",
          },
          {
            termo: "LDJCP",
            significado: "Lei, Doutrina, Jurisprudência, Costumes, Princípios",
            frase: "Fontes do Dir. Adm.: LDJCP (Lei é a principal)",
          },
          {
            termo: "CF-LC-LO-D-R",
            significado:
              "Constituição, Lei Complementar, Lei Ordinária, Decreto, Resolução",
            frase: "Hierarquia normativa: CF-LC-LO-D-R (do maior ao menor)",
          },
        ],

        flashcards: [
          {
            id: "da-fc-2-1",
            frente: "O que é Direito Administrativo?",
            verso:
              "**Ramo do DIREITO PÚBLICO** que regula a organização e a atividade da Administração Pública.\n\nCaracterísticas:\n- Direito público INTERNO\n- NÃO codificado\n- Regime de prerrogativas e sujeições",
            tags: ["conceito", "direito público"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-2",
            frente: "Qual é o OBJETO do Direito Administrativo?",
            verso:
              "A **ADMINISTRAÇÃO PÚBLICA** em todos os seus aspectos:\n\n**Subjetivo (quem):**\n- Órgãos, entidades, agentes\n\n**Objetivo (o quê):**\n- Atividade administrativa\n- Serviços públicos\n- Poder de polícia",
            tags: ["objeto", "administração"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-3",
            frente: "Qual é a fonte PRIMÁRIA do Direito Administrativo?",
            verso:
              "A **LEI** é a fonte primária e principal.\n\nHierarquia:\n1. Constituição Federal\n2. Emendas Constitucionais\n3. Leis Complementares\n4. Leis Ordinárias\n5. Decretos\n6. Resoluções/Portarias",
            tags: ["fontes", "lei"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-4",
            frente:
              "Quais são as fontes SECUNDÁRIAS do Direito Administrativo?",
            verso:
              "**Fontes secundárias:**\n\n1. **DOUTRINA**: estudos de juristas\n2. **JURISPRUDÊNCIA**: decisões dos tribunais\n3. **COSTUMES**: praxe administrativa\n4. **PRINCÍPIOS GERAIS**: boa-fé, proporcionalidade\n\nNão CRIAM direito, apenas interpretam.",
            tags: ["fontes", "secundárias"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-5",
            frente: "O Direito Administrativo brasileiro é codificado?",
            verso:
              '**NÃO!**\n\nO Direito Administrativo brasileiro é parcialmente legislado, mas NÃO codificado.\n\nNão existe um "Código Administrativo".\n\nAs normas estão em leis esparsas:\n- CF/88 (art. 37+)\n- Lei 8.112/90\n- Lei 14.133/21\n- Lei 9.784/99',
            tags: ["codificação", "leis"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-6",
            frente: "O que é o regime jurídico-administrativo?",
            verso:
              "É o conjunto de **PRERROGATIVAS e SUJEIÇÕES** da Administração.\n\n**PRERROGATIVAS** (poderes):\n→ Supremacia do interesse público\n\n**SUJEIÇÕES** (limitações):\n→ Indisponibilidade do interesse público\n\nBinômio: poder + limite",
            tags: ["regime jurídico", "prerrogativas"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-7",
            frente: "O costume pode ser fonte do Direito Administrativo?",
            verso:
              "**Sim, mas com limitações:**\n\n✅ **Secundum legem**: conforme a lei = válido\n⚠️ **Praeter legem**: preenche lacuna = discutível\n❌ **Contra legem**: contrário à lei = INVÁLIDO\n\nO princípio da legalidade limita o costume.",
            tags: ["costumes", "fontes"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-2-8",
            frente:
              "Dê exemplos de prerrogativas e sujeições da Administração.",
            verso:
              "**PRERROGATIVAS:**\n- Autotutela (anular próprios atos)\n- Autoexecutoriedade\n- Imperatividade\n- Presunção de legitimidade\n\n**SUJEIÇÕES:**\n- Licitação obrigatória\n- Concurso público\n- Motivação dos atos\n- Responsabilidade objetiva",
            tags: ["prerrogativas", "sujeições"],
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
            id: "da-q-2-1",
            enunciado: "O Direito Administrativo é ramo do:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Direito privado, por regular relações entre particulares.",
              },
              {
                letra: "B",
                texto:
                  "Direito público interno, regulando a Administração Pública.",
              },
              {
                letra: "C",
                texto: "Direito internacional, por ter aplicação mundial.",
              },
              {
                letra: "D",
                texto: "Direito comercial, por regular atividades econômicas.",
              },
              {
                letra: "E",
                texto: "Direito misto, com natureza pública e privada.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O Direito Administrativo é ramo do DIREITO PÚBLICO interno, pois regula a organização e a atividade da Administração Pública dentro do território nacional, com supremacia do interesse público.",
            dificuldade: "Fácil",
            competencia: "Natureza do Direito Administrativo",
            banca: "IADES",
            tags: ["conceito", "direito público"],
          },
          {
            id: "da-q-2-2",
            enunciado:
              "Sobre as fontes do Direito Administrativo, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "A doutrina é a fonte primária e mais importante.",
              },
              {
                letra: "B",
                texto:
                  "A lei é a fonte primária, e doutrina e jurisprudência são secundárias.",
              },
              {
                letra: "C",
                texto:
                  "A jurisprudência tem força de lei e cria normas obrigatórias.",
              },
              {
                letra: "D",
                texto:
                  "Os costumes contra legem são válidos quando consolidados.",
              },
              {
                letra: "E",
                texto:
                  "Não existem fontes secundárias no Direito Administrativo.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A LEI é a fonte primária do Direito Administrativo. Doutrina, jurisprudência, costumes e princípios são fontes secundárias que interpretam e complementam, mas não criam normas jurídicas.",
            dificuldade: "Fácil",
            competencia: "Fontes do Direito Administrativo",
            banca: "IADES",
            tags: ["fontes", "lei"],
          },
          {
            id: "da-q-2-3",
            enunciado: "O objeto do Direito Administrativo é:",
            alternativas: [
              {
                letra: "A",
                texto: "Exclusivamente as relações entre particulares.",
              },
              {
                letra: "B",
                texto:
                  "A Administração Pública, seus órgãos, agentes e atividades.",
              },
              {
                letra: "C",
                texto: "Apenas os crimes contra a Administração Pública.",
              },
              {
                letra: "D",
                texto: "As relações internacionais do Estado brasileiro.",
              },
              {
                letra: "E",
                texto: "Somente as empresas estatais e suas atividades.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O objeto do Direito Administrativo é a Administração Pública em todos os seus aspectos: órgãos, entidades, agentes públicos e suas atividades (serviços públicos, poder de polícia, fomento, intervenção).",
            dificuldade: "Fácil",
            competencia: "Objeto do Direito Administrativo",
            banca: "IADES",
            tags: ["objeto", "administração"],
          },
          {
            id: "da-q-2-4",
            enunciado:
              "O Direito Administrativo brasileiro caracteriza-se por ser:",
            alternativas: [
              { letra: "A", texto: "Codificado em um único diploma legal." },
              {
                letra: "B",
                texto: "Não codificado, com normas em diversas leis esparsas.",
              },
              { letra: "C", texto: "Baseado exclusivamente em costumes." },
              { letra: "D", texto: "Ramo do direito privado." },
              { letra: "E", texto: "Imutável desde a Constituição de 1988." },
            ],
            gabarito: "B",
            justificativa:
              'O Direito Administrativo brasileiro é NÃO CODIFICADO. Não existe um "Código Administrativo". As normas estão dispersas em diversas leis (CF/88, Lei 8.112/90, Lei 14.133/21, etc.).',
            dificuldade: "Fácil",
            competencia: "Características",
            banca: "IADES",
            tags: ["codificação", "características"],
          },
          {
            id: "da-q-2-5",
            enunciado: "O regime jurídico-administrativo é composto por:",
            alternativas: [
              { letra: "A", texto: "Apenas prerrogativas, sem limitações." },
              { letra: "B", texto: "Apenas sujeições, sem poderes especiais." },
              {
                letra: "C",
                texto: "Prerrogativas (poderes) e sujeições (limitações).",
              },
              {
                letra: "D",
                texto: "Normas de direito privado aplicadas ao Estado.",
              },
              { letra: "E", texto: "Exclusivamente a Constituição Federal." },
            ],
            gabarito: "C",
            justificativa:
              "O regime jurídico-administrativo é o binômio PRERROGATIVAS (poderes especiais decorrentes da supremacia do interesse público) e SUJEIÇÕES (limitações decorrentes da indisponibilidade do interesse público).",
            dificuldade: "Média",
            competencia: "Regime jurídico-administrativo",
            banca: "IADES",
            tags: ["regime jurídico", "prerrogativas"],
          },
          {
            id: "da-q-2-6",
            enunciado:
              "A hierarquia normativa no Direito Administrativo estabelece que:",
            alternativas: [
              {
                letra: "A",
                texto: "Decretos prevalecem sobre leis ordinárias.",
              },
              {
                letra: "B",
                texto: "Resoluções têm força de Emenda Constitucional.",
              },
              {
                letra: "C",
                texto:
                  "A Constituição é a norma suprema, seguida de leis e decretos.",
              },
              {
                letra: "D",
                texto: "Não existe hierarquia entre as normas administrativas.",
              },
              {
                letra: "E",
                texto: "Portarias prevalecem sobre a Constituição.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A hierarquia normativa é: CF (suprema) → EC → LC → LO → MP → Decretos → Resoluções/Portarias. Normas inferiores devem respeitar as superiores.",
            dificuldade: "Fácil",
            competencia: "Hierarquia normativa",
            banca: "IADES",
            tags: ["hierarquia", "normas"],
          },
          {
            id: "da-q-2-7",
            enunciado:
              "Sobre os costumes como fonte do Direito Administrativo, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "Costumes contrários à lei são aceitos se reiterados.",
              },
              {
                letra: "B",
                texto: "Não são considerados fontes em nenhuma hipótese.",
              },
              {
                letra: "C",
                texto: "São fonte secundária e não podem contrariar a lei.",
              },
              {
                letra: "D",
                texto: "Substituem a lei quando mais convenientes.",
              },
              { letra: "E", texto: "São fonte primária, assim como a lei." },
            ],
            gabarito: "C",
            justificativa:
              "Os costumes são fonte SECUNDÁRIA do Direito Administrativo. Podem ser aceitos quando conformes à lei (secundum legem) ou para preencher lacunas (praeter legem), mas NUNCA contra a lei (contra legem).",
            dificuldade: "Média",
            competencia: "Costumes como fonte",
            banca: "IADES",
            tags: ["costumes", "fontes"],
          },
          {
            id: "da-q-2-8",
            enunciado:
              "São exemplos de PRERROGATIVAS da Administração Pública:",
            alternativas: [
              {
                letra: "A",
                texto: "Obrigatoriedade de licitação e concurso público.",
              },
              {
                letra: "B",
                texto: "Autoexecutoriedade, imperatividade e autotutela.",
              },
              {
                letra: "C",
                texto: "Motivação dos atos e controle pelo Tribunal de Contas.",
              },
              {
                letra: "D",
                texto: "Responsabilidade civil objetiva e publicidade.",
              },
              { letra: "E", texto: "Observância do devido processo legal." },
            ],
            gabarito: "B",
            justificativa:
              "PRERROGATIVAS são poderes especiais da Administração: autoexecutoriedade (executar sem Judiciário), imperatividade (impor obrigações), autotutela (revisar próprios atos). As demais opções são SUJEIÇÕES (limitações).",
            dificuldade: "Média",
            competencia: "Prerrogativas",
            banca: "IADES",
            tags: ["prerrogativas", "regime jurídico"],
          },
          {
            id: "da-q-2-9",
            enunciado:
              "A fiscalização sanitária exercida pelo Fiscal de Saúde Pública fundamenta-se, no Direito Administrativo, no conceito de:",
            alternativas: [
              { letra: "A", texto: "Fomento público." },
              { letra: "B", texto: "Intervenção no domínio econômico." },
              { letra: "C", texto: "Poder de polícia administrativa." },
              { letra: "D", texto: "Serviço público essencial." },
              { letra: "E", texto: "Ato jurisdicional." },
            ],
            gabarito: "C",
            justificativa:
              "A fiscalização sanitária é manifestação do PODER DE POLÍCIA administrativa, que permite à Administração limitar direitos individuais em prol do interesse coletivo (saúde pública).",
            dificuldade: "Fácil",
            competencia: "Poder de polícia",
            banca: "IADES",
            tags: ["poder de polícia", "vigilância sanitária"],
          },
          {
            id: "da-q-2-10",
            enunciado:
              "As SUJEIÇÕES a que se submete a Administração Pública decorrem do princípio da:",
            alternativas: [
              { letra: "A", texto: "Supremacia do interesse público." },
              { letra: "B", texto: "Indisponibilidade do interesse público." },
              { letra: "C", texto: "Autotutela administrativa." },
              { letra: "D", texto: "Presunção de legitimidade." },
              { letra: "E", texto: "Autoexecutoriedade." },
            ],
            gabarito: "B",
            justificativa:
              "As SUJEIÇÕES (licitação, concurso, motivação) decorrem da INDISPONIBILIDADE do interesse público, que impede o administrador de dispor livremente dos bens e interesses públicos. As prerrogativas decorrem da supremacia.",
            dificuldade: "Média",
            competencia: "Sujeições",
            banca: "IADES",
            tags: ["sujeições", "indisponibilidade"],
          },
        ],
      },
    },
    {
      id: "da-topico-3",
      numero: 3,
      titulo:
        "Ato administrativo: conceito, requisitos, atributos, classificação, espécies, extinção e decadência",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Ato Administrativo

**Ato administrativo** é toda manifestação unilateral de vontade da Administração Pública que, agindo nessa qualidade, tenha por fim imediato adquirir, resguardar, transferir, modificar, extinguir e declarar direitos, ou impor obrigações.

### Os 5 Requisitos (Elementos) - COFIFOMOB

| Requisito | O que é | Vício = |
|-----------|---------|---------|
| **CO**mpetência | Quem pode praticar | Excesso de poder |
| **FI**nalidade | Para que foi praticado | Desvio de poder |
| **FO**rma | Como foi praticado | Vício de forma |
| **M**otivo | Por que foi praticado | Ausência de motivação |
| **OB**jeto | O que foi praticado | Objeto ilícito |

### Os 4 Atributos - PATI

| Atributo | Significado |
|----------|-------------|
| **P**resunção de legitimidade | Presume-se legal até prova em contrário |
| **A**utoexecutoriedade | Executar sem autorização judicial |
| **T**ipicidade | Corresponder a figura legal prevista |
| **I**mperatividade | Impor obrigações unilateralmente |

### Para IADES:
- **Excesso de poder** = vício de COMPETÊNCIA
- **Desvio de poder** = vício de FINALIDADE
- Competência e finalidade são SEMPRE vinculados
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Ato Administrativo

#### 1.1 Definição Doutrinária

**Hely Lopes Meirelles:**
> "Ato administrativo é toda manifestação unilateral de vontade da Administração Pública que, agindo nessa qualidade, tenha por fim imediato adquirir, resguardar, transferir, modificar, extinguir e declarar direitos, ou impor obrigações aos administrados ou a si própria."

**Celso Antônio Bandeira de Mello:**
> "Declaração do Estado ou de quem o represente, que produz efeitos jurídicos imediatos, com observância da lei, sob regime jurídico de direito público e sujeita a controle pelo Poder Judiciário."

#### 1.2 Características Essenciais

| Característica | Descrição |
|----------------|-----------|
| **Manifestação de vontade** | Exteriorização de uma decisão |
| **Unilateral** | Não depende de concordância do particular |
| **Da Administração** | Praticado por agente público |
| **Regime de direito público** | Prerrogativas e sujeições |
| **Produz efeitos jurídicos** | Cria, modifica ou extingue direitos |
| **Sujeito a controle** | Judicial, administrativo, legislativo |

#### 1.3 Ato Administrativo vs. Outras Figuras

| Figura | Diferença do Ato Administrativo |
|--------|--------------------------------|
| **Fato administrativo** | Acontecimento, não manifestação de vontade |
| **Ato da Administração** | Gênero mais amplo (inclui atos privados) |
| **Ato de governo** | Natureza política, não administrativa |
| **Contrato administrativo** | Bilateral (acordo de vontades) |

### 2. Requisitos (Elementos) do Ato Administrativo

São as condições de validade do ato. Mnemônico: **COMFIFORM** ou **COFIFOMO**

#### 2.1 COMPETÊNCIA

**Conceito:** Atribuição legal do agente para praticar o ato.

**Características:**
- Definida em **lei** (irrenunciável)
- **Improrrogável** (não se estende pelo não uso)
- **Inderrogável** (não pode ser transferida por acordo)
- Pode ser **delegada** ou **avocada** (quando permitido)

**Vício:** Incompetência → **Excesso de poder** (espécie de abuso de poder)

**Exemplo em VISA:**
> O fiscal de nível superior não pode delegar ao auxiliar a competência para interditar estabelecimento.

#### 2.2 FINALIDADE

**Conceito:** Resultado que a Administração pretende alcançar.

**Dimensões:**
- **Finalidade geral:** interesse público (sempre)
- **Finalidade específica:** definida em lei para cada ato

**Vício:** Desvio de finalidade → **Desvio de poder** (espécie de abuso de poder)

**Exemplo em VISA:**
> Interditar estabelecimento por vingança pessoal, e não por motivo sanitário, é desvio de poder.

#### 2.3 FORMA

**Conceito:** Modo de exteriorização do ato.

**Regra geral:**
- Forma **escrita** (princípio da documentação)
- Motivação expressa
- Observância de procedimentos legais

**Exceções:**
- Atos urgentes podem ser verbais
- Sinais de trânsito (gestuais)

**Vício:** Inobservância da forma legal

**Exemplo em VISA:**
> Auto de infração deve ser lavrado por escrito, com todos os elementos exigidos em lei.

#### 2.4 MOTIVO

**Conceito:** Pressupostos de fato e de direito que autorizam a prática do ato.

**Componentes:**
- **Motivo de fato:** situação concreta
- **Motivo de direito:** previsão legal

**Motivação:**
- É a **exposição** dos motivos (deve ser expressa)
- Diferente de motivo (que são os fatos/fundamentos)

**Teoria dos Motivos Determinantes:**
> A validade do ato fica vinculada aos motivos declarados. Se falsos, o ato é nulo.

**Exemplo em VISA:**
> Se o fiscal interdita por "risco sanitário grave" e não há risco, o ato é nulo.

#### 2.5 OBJETO (Conteúdo)

**Conceito:** Efeito jurídico imediato que o ato produz.

**Requisitos do objeto:**
- **Lícito:** previsto em lei
- **Possível:** realizável
- **Certo:** determinado ou determinável
- **Moral:** conforme a ética

**Exemplo em VISA:**
> Objeto do auto de infração = aplicação de penalidade específica.

### 3. Vinculação vs. Discricionariedade

| Elemento | Vinculado | Discricionário |
|----------|-----------|----------------|
| **Competência** | SEMPRE | - |
| **Finalidade** | SEMPRE | - |
| **Forma** | Em regra | Às vezes |
| **Motivo** | Às vezes | Às vezes |
| **Objeto** | Às vezes | Às vezes |

**Mérito administrativo:**
- Presente nos atos discricionários
- Juízo de **conveniência e oportunidade**
- NÃO pode ser controlado pelo Judiciário
- Judiciário controla apenas **legalidade**, não mérito

### 4. Atributos do Ato Administrativo

Mnemônico: **PATI**

#### 4.1 PRESUNÇÃO DE LEGITIMIDADE (e veracidade)

**Conceito:** Os atos presumem-se legais e verdadeiros até prova em contrário.

**Características:**
- Presunção **relativa** (juris tantum)
- Inverte o **ônus da prova** (particular deve provar)
- Permite **execução imediata**
- Presente em **todos** os atos

**Exemplo em VISA:**
> O auto de infração presume-se válido; cabe ao autuado provar irregularidade.

#### 4.2 AUTOEXECUTORIEDADE

**Conceito:** Administração pode executar diretamente suas decisões, sem autorização judicial.

**Subdivisões:**
- **Exigibilidade:** impor obrigações (meios indiretos)
- **Executoriedade:** usar força (meios diretos)

**Limitações:**
- Não está presente em todos os atos
- Cobrança de multa: precisa de execução fiscal
- Deve ser proporcional

**Exemplo em VISA:**
> Interditar estabelecimento e lacrar portas pode ser feito de imediato.

#### 4.3 TIPICIDADE

**Conceito:** O ato deve corresponder a figuras previamente definidas em lei.

**Finalidade:**
- Impedir atos inominados
- Garantir segurança jurídica
- Previsibilidade

**Exemplo em VISA:**
> Advertência, multa, interdição, cancelamento são tipos previstos em lei.

#### 4.4 IMPERATIVIDADE

**Conceito:** O ato impõe obrigações independentemente da concordância do particular.

**Características:**
- Decorre da **supremacia do interesse público**
- Não está em todos os atos (ex: certidões, atestados)
- Unilateralidade

**Exemplo em VISA:**
> Determinação para adequação sanitária obriga o particular mesmo sem concordância.

### 5. Classificação dos Atos Administrativos

#### 5.1 Quanto aos Destinatários

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Gerais** | Destinatários indeterminados | Regulamento, edital |
| **Individuais** | Destinatários determinados | Nomeação, licença |

#### 5.2 Quanto ao Alcance

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Internos** | Efeitos dentro da Administração | Portaria de férias |
| **Externos** | Efeitos para terceiros | Auto de infração |

#### 5.3 Quanto ao Objeto

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Império** | Supremacia estatal | Interdição, multa |
| **Gestão** | Administração de bens | Contrato, alienação |
| **Expediente** | Rotina administrativa | Memorando, ofício |

#### 5.4 Quanto à Liberdade

| Tipo | Característica | Controle |
|------|----------------|----------|
| **Vinculado** | Sem margem de escolha | Total pelo Judiciário |
| **Discricionário** | Margem de escolha | Legalidade, não mérito |

#### 5.5 Quanto à Formação

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Simples** | Uma vontade | Despacho |
| **Complexo** | Duas vontades para UM ato | Nomeação de ministro (PR + Senado) |
| **Composto** | Um ato principal + um acessório | Ato que depende de visto |

### 6. Espécies de Atos Administrativos

#### 6.1 Atos Normativos

Estabelecem normas gerais e abstratas.

| Espécie | Característica |
|---------|----------------|
| **Decreto** | Regulamenta lei, competência do chefe do Executivo |
| **Regulamento** | Complementa lei |
| **Instrução normativa** | Orienta execução |
| **Resolução** | Deliberação de órgão colegiado |
| **Portaria** | Ato interno de autoridade |

#### 6.2 Atos Ordinatórios

Disciplinam o funcionamento interno.

| Espécie | Característica |
|---------|----------------|
| **Aviso** | Comunicação ministerial |
| **Circular** | Ordem escrita uniforme |
| **Memorando** | Comunicação interna |
| **Ofício** | Comunicação externa |

#### 6.3 Atos Negociais

Coincidem com pretensão do particular.

| Espécie | Característica |
|---------|----------------|
| **Licença** | Ato vinculado, definitivo |
| **Autorização** | Ato discricionário, precário |
| **Permissão** | Ato discricionário, precário |
| **Admissão** | Ingresso em estabelecimento público |
| **Aprovação** | Controle a priori ou a posteriori |
| **Homologação** | Controle a posteriori |

#### 6.4 Atos Enunciativos

Certificam ou atestam situações.

| Espécie | Característica |
|---------|----------------|
| **Certidão** | Cópia fiel de dados |
| **Atestado** | Comprova fato ou situação |
| **Parecer** | Opinião técnica |
| **Apostila** | Averbação, anotação |

#### 6.5 Atos Punitivos

Aplicam sanções.

| Espécie | Característica |
|---------|----------------|
| **Multa** | Penalidade pecuniária |
| **Interdição** | Vedação de atividade |
| **Destruição** | Inutilização de bens |
| **Demolição** | Destruição de obras |

### 7. Extinção dos Atos Administrativos

#### 7.1 Formas de Extinção

| Forma | Descrição | Quem pode |
|-------|-----------|-----------|
| **Cumprimento** | Esgotamento natural | - |
| **Desaparecimento** | Objeto ou sujeito deixa de existir | - |
| **Renúncia** | Beneficiário abre mão | Particular |
| **Anulação** | Vício de legalidade | Administração ou Judiciário |
| **Revogação** | Conveniência e oportunidade | Apenas Administração |
| **Cassação** | Descumprimento de condições | Administração |
| **Caducidade** | Lei nova torna ato ilegal | Administração |
| **Contraposição** | Ato posterior incompatível | Administração |

#### 7.2 Anulação vs. Revogação

| Aspecto | ANULAÇÃO | REVOGAÇÃO |
|---------|----------|-----------|
| **Motivo** | Ilegalidade (vício) | Conveniência/oportunidade |
| **Efeitos** | Ex tunc (retroage) | Ex nunc (não retroage) |
| **Quem pode** | Administração ou Judiciário | Só Administração |
| **Prazo** | 5 anos (Lei 9.784, art. 54) | Não há prazo |
| **Atos atingidos** | Ilegais | Legais, mas inconvenientes |

#### 7.3 Súmula 473 do STF

> "A Administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos."

### 8. Decadência Administrativa

#### 8.1 Conceito (Lei 9.784/99, art. 54)

> "O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários **decai em 5 anos**, contados da data em que foram praticados, salvo comprovada má-fé."

#### 8.2 Características

| Aspecto | Descrição |
|---------|-----------|
| **Prazo** | 5 anos |
| **Início** | Data da prática do ato |
| **Exceção** | Má-fé do beneficiário (não há prazo) |
| **Efeito** | Estabilização do ato |

#### 8.3 Aplicação

- Atos de que decorram **efeitos favoráveis**
- Prazo de **5 anos** para anular
- Se ultrapassado: ato se torna estável
- Princípio da **segurança jurídica**

### 9. Convalidação

**Conceito:** Correção de vício sanável, com efeitos retroativos.

**Requisitos:**
- Defeito sanável (competência, forma)
- Não prejudicar terceiros
- Não causar lesão ao interesse público

**Atos passíveis de convalidação:**
- Competência: ratificação
- Forma: reforma

**Atos NÃO passíveis de convalidação:**
- Motivo
- Finalidade
- Objeto ilícito
        `,

        pontosChave: [
          "Requisitos (COMFIFORM): Competência, Motivo, Finalidade, Forma, Objeto",
          "Competência e Finalidade são SEMPRE vinculados",
          "Excesso de poder = vício de COMPETÊNCIA; Desvio de poder = vício de FINALIDADE",
          "Atributos (PATI): Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade",
          "Presunção de legitimidade: relativa (juris tantum), presente em TODOS os atos",
          "Mérito administrativo: conveniência e oportunidade, NÃO controlado pelo Judiciário",
          "Anulação: ilegalidade, ex tunc, prazo de 5 anos (decadência)",
          "Revogação: conveniência, ex nunc, só pela Administração, sem prazo",
          "Súmula 473/STF: autotutela (anular ou revogar próprios atos)",
          "Licença = vinculada; Autorização e Permissão = discricionárias",
        ],

        armadilhas: [
          {
            titulo: "Confundir excesso com desvio de poder",
            descricao:
              "Excesso = competência (agente não tem poder). Desvio = finalidade (usa poder para fim diverso).",
            dica: "Excesso = Extrapola competência. Desvio = Desvia a finalidade.",
          },
          {
            titulo: "Achar que Judiciário pode revogar ato",
            descricao:
              "Revogação é exclusiva da Administração. Judiciário só ANULA (por ilegalidade).",
            dica: "Judiciário julga LEGALIDADE, não mérito.",
          },
          {
            titulo: "Confundir efeitos de anulação e revogação",
            descricao:
              "Anulação = ex tunc (retroage). Revogação = ex nunc (não retroage).",
            dica: "Anulação apaga o passado (TUnc). Revogação só vale daqui pra frente (NUnc).",
          },
          {
            titulo: "Esquecer o prazo de decadência",
            descricao:
              "A Administração tem 5 anos para anular atos que geram efeitos favoráveis.",
            dica: "Lei 9.784, art. 54: 5 anos para anular, salvo má-fé.",
          },
        ],

        mnemonicos: [
          {
            termo: "COMFIFORM",
            significado:
              "COmpetência, Motivo, FInalidade, FORma, Motivo→Objeto",
            frase: "Os 5 requisitos do ato: COMFIFORM",
          },
          {
            termo: "PATI",
            significado:
              "Presunção, Autoexecutoriedade, Tipicidade, Imperatividade",
            frase: "Os atributos do ato: PATI",
          },
          {
            termo: "ED-CF",
            significado: "Excesso=Competência, Desvio=Finalidade",
            frase: "Abuso de poder: Excesso (C), Desvio (F)",
          },
          {
            termo: "A-TUnc R-NUnc",
            significado: "Anulação=ex tunc, Revogação=ex nunc",
            frase: "Anula retroage (tunc), Revoga não (nunc)",
          },
        ],

        flashcards: [
          {
            id: "da-fc-3-1",
            frente:
              "Quais são os 5 REQUISITOS (elementos) do ato administrativo?",
            verso:
              "**COMFIFORM:**\n\n1. **CO**mpetência - Quem\n2. **M**otivo - Por quê\n3. **FI**nalidade - Para quê\n4. **FOR**ma - Como\n5. Objeto - O quê\n\nCompetência e Finalidade são SEMPRE vinculados.",
            tags: ["requisitos", "ato administrativo"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-2",
            frente: "Quais são os 4 ATRIBUTOS do ato administrativo?",
            verso:
              "**PATI:**\n\n1. **P**resunção de legitimidade (relativa)\n2. **A**utoexecutoriedade (executar sem Judiciário)\n3. **T**ipicidade (previsto em lei)\n4. **I**mperatividade (impor obrigações)\n\nPresunção está em TODOS os atos.",
            tags: ["atributos", "ato administrativo"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-3",
            frente: "Qual a diferença entre EXCESSO e DESVIO de poder?",
            verso:
              "**EXCESSO de poder:**\n- Vício de COMPETÊNCIA\n- Agente extrapola suas atribuições\n\n**DESVIO de poder:**\n- Vício de FINALIDADE\n- Agente usa competência para fim diverso\n\nAmbos = ABUSO DE PODER",
            tags: ["abuso de poder", "vícios"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-4",
            frente: "Qual a diferença entre ANULAÇÃO e REVOGAÇÃO?",
            verso:
              "**ANULAÇÃO:**\n- Motivo: ILEGALIDADE\n- Efeitos: ex TUNC (retroage)\n- Quem: Administração OU Judiciário\n\n**REVOGAÇÃO:**\n- Motivo: CONVENIÊNCIA\n- Efeitos: ex NUNC (não retroage)\n- Quem: SÓ Administração",
            tags: ["extinção", "anulação", "revogação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-5",
            frente: "O que diz a Súmula 473 do STF?",
            verso:
              "**AUTOTUTELA:**\n\nA Administração PODE:\n- **ANULAR** atos ilegais (não geram direitos)\n- **REVOGAR** atos legais por conveniência\n\nDevem ser respeitados os direitos adquiridos.",
            tags: ["Súmula 473", "autotutela"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-6",
            frente: "O que é a DECADÊNCIA administrativa (Lei 9.784)?",
            verso:
              "**Art. 54:**\n\nA Administração tem **5 ANOS** para anular atos que produzam efeitos FAVORÁVEIS.\n\nApós 5 anos: ato se torna ESTÁVEL.\n\n**Exceção:** má-fé do beneficiário (não há prazo).",
            tags: ["decadência", "prazo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-7",
            frente: "Qual a diferença entre LICENÇA e AUTORIZAÇÃO?",
            verso:
              "**LICENÇA:**\n- Ato VINCULADO\n- Definitivo (só anulável)\n- Direito subjetivo\n- Ex: licença para construir\n\n**AUTORIZAÇÃO:**\n- Ato DISCRICIONÁRIO\n- PRECÁRIO (revogável)\n- Interesse do particular\n- Ex: autorização para evento",
            tags: ["licença", "autorização"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-3-8",
            frente: "O que é MÉRITO ADMINISTRATIVO?",
            verso:
              "**Mérito** = juízo de CONVENIÊNCIA e OPORTUNIDADE.\n\nPresente nos atos DISCRICIONÁRIOS.\n\n⚠️ O Judiciário NÃO pode controlar o mérito!\n\nJudiciário controla apenas LEGALIDADE.",
            tags: ["mérito", "discricionariedade"],
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
            id: "da-q-3-1",
            enunciado:
              "São requisitos (elementos) de validade do ato administrativo:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Presunção de legitimidade, autoexecutoriedade, tipicidade e imperatividade.",
              },
              {
                letra: "B",
                texto: "Competência, finalidade, forma, motivo e objeto.",
              },
              {
                letra: "C",
                texto:
                  "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
              },
              {
                letra: "D",
                texto: "Anulação, revogação, cassação e caducidade.",
              },
              {
                letra: "E",
                texto: "Licença, autorização, permissão e admissão.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Os requisitos (elementos) do ato administrativo são: Competência, Finalidade, Forma, Motivo e Objeto (COMFIFORM). A alternativa A traz os ATRIBUTOS, não os requisitos.",
            dificuldade: "Fácil",
            competencia: "Requisitos do ato",
            banca: "IADES",
            tags: ["requisitos", "elementos"],
          },
          {
            id: "da-q-3-2",
            enunciado:
              "O vício de FINALIDADE no ato administrativo caracteriza o chamado:",
            alternativas: [
              { letra: "A", texto: "Excesso de poder." },
              { letra: "B", texto: "Desvio de poder." },
              { letra: "C", texto: "Abuso de autoridade." },
              { letra: "D", texto: "Incompetência absoluta." },
              { letra: "E", texto: "Vício de forma." },
            ],
            gabarito: "B",
            justificativa:
              "O DESVIO DE PODER é o vício de finalidade, quando o agente usa sua competência para fim diverso do previsto em lei. O excesso de poder é vício de COMPETÊNCIA.",
            dificuldade: "Média",
            competencia: "Vícios do ato",
            banca: "IADES",
            tags: ["desvio de poder", "finalidade"],
          },
          {
            id: "da-q-3-3",
            enunciado:
              "A presunção de legitimidade dos atos administrativos é considerada:",
            alternativas: [
              {
                letra: "A",
                texto: "Absoluta, não admitindo prova em contrário.",
              },
              {
                letra: "B",
                texto:
                  "Relativa, admitindo prova em contrário pelo interessado.",
              },
              {
                letra: "C",
                texto: "Inexistente, dependendo de confirmação judicial.",
              },
              { letra: "D", texto: "Aplicável apenas aos atos vinculados." },
              { letra: "E", texto: "Dispensável nos atos discricionários." },
            ],
            gabarito: "B",
            justificativa:
              "A presunção de legitimidade é RELATIVA (juris tantum), admitindo prova em contrário. Ela inverte o ônus da prova, cabendo ao particular demonstrar eventual ilegalidade.",
            dificuldade: "Fácil",
            competencia: "Presunção de legitimidade",
            banca: "IADES",
            tags: ["presunção", "atributo"],
          },
          {
            id: "da-q-3-4",
            enunciado:
              "Sobre a anulação e a revogação dos atos administrativos, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "Ambas podem ser realizadas pelo Poder Judiciário.",
              },
              {
                letra: "B",
                texto:
                  "A anulação opera efeitos ex nunc e a revogação ex tunc.",
              },
              {
                letra: "C",
                texto:
                  "A anulação decorre de ilegalidade e produz efeitos ex tunc.",
              },
              {
                letra: "D",
                texto:
                  "A revogação atinge atos ilegais e a anulação atos inconvenientes.",
              },
              {
                letra: "E",
                texto: "Não há diferença prática entre anulação e revogação.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A ANULAÇÃO decorre de ILEGALIDADE e opera efeitos EX TUNC (retroativos). A revogação decorre de conveniência e opera efeitos EX NUNC (não retroativos). Só a Administração revoga.",
            dificuldade: "Média",
            competencia: "Anulação e revogação",
            banca: "IADES",
            tags: ["anulação", "revogação"],
          },
          {
            id: "da-q-3-5",
            enunciado:
              "De acordo com a Lei 9.784/99, o direito da Administração de anular atos administrativos de que decorram efeitos favoráveis decai em:",
            alternativas: [
              { letra: "A", texto: "1 ano." },
              { letra: "B", texto: "2 anos." },
              { letra: "C", texto: "3 anos." },
              { letra: "D", texto: "5 anos." },
              { letra: "E", texto: "10 anos." },
            ],
            gabarito: "D",
            justificativa:
              "Conforme o art. 54 da Lei 9.784/99, o direito da Administração de anular atos que produzam efeitos favoráveis DECAI em 5 ANOS, salvo comprovada má-fé.",
            dificuldade: "Fácil",
            competencia: "Decadência administrativa",
            banca: "IADES",
            tags: ["decadência", "prazo"],
          },
          {
            id: "da-q-3-6",
            enunciado:
              "O atributo do ato administrativo que permite à Administração executar diretamente suas decisões, sem necessidade de autorização judicial, denomina-se:",
            alternativas: [
              { letra: "A", texto: "Presunção de legitimidade." },
              { letra: "B", texto: "Imperatividade." },
              { letra: "C", texto: "Autoexecutoriedade." },
              { letra: "D", texto: "Tipicidade." },
              { letra: "E", texto: "Coercibilidade." },
            ],
            gabarito: "C",
            justificativa:
              "A AUTOEXECUTORIEDADE permite que a Administração execute suas decisões diretamente, sem recorrer ao Judiciário. Exemplo: interdição de estabelecimento, demolição de obra irregular.",
            dificuldade: "Fácil",
            competencia: "Atributos",
            banca: "IADES",
            tags: ["autoexecutoriedade", "atributo"],
          },
          {
            id: "da-q-3-7",
            enunciado:
              "A licença administrativa caracteriza-se por ser um ato:",
            alternativas: [
              { letra: "A", texto: "Discricionário e precário." },
              { letra: "B", texto: "Vinculado e definitivo." },
              { letra: "C", texto: "Complexo e revogável." },
              { letra: "D", texto: "Normativo e abstrato." },
              { letra: "E", texto: "Enunciativo e bilateral." },
            ],
            gabarito: "B",
            justificativa:
              "A LICENÇA é ato VINCULADO (cumpridos os requisitos legais, deve ser concedida) e DEFINITIVO (só pode ser anulada, não revogada). Já a autorização é discricionária e precária.",
            dificuldade: "Média",
            competencia: "Espécies de atos",
            banca: "IADES",
            tags: ["licença", "vinculado"],
          },
          {
            id: "da-q-3-8",
            enunciado: "A Súmula 473 do STF consagra o princípio da:",
            alternativas: [
              { letra: "A", texto: "Legalidade." },
              { letra: "B", texto: "Impessoalidade." },
              { letra: "C", texto: "Autotutela." },
              { letra: "D", texto: "Eficiência." },
              { letra: "E", texto: "Publicidade." },
            ],
            gabarito: "C",
            justificativa:
              "A Súmula 473/STF consagra a AUTOTUTELA: a Administração pode anular seus atos ilegais ou revogá-los por conveniência, respeitados os direitos adquiridos.",
            dificuldade: "Média",
            competencia: "Súmula 473",
            banca: "IADES",
            tags: ["Súmula 473", "autotutela"],
          },
          {
            id: "da-q-3-9",
            enunciado:
              "No exercício do poder de polícia sanitária, o fiscal que interdita um estabelecimento por motivo de vingança pessoal, ainda que exista irregularidade sanitária, pratica:",
            alternativas: [
              { letra: "A", texto: "Ato regular de polícia." },
              { letra: "B", texto: "Excesso de poder." },
              { letra: "C", texto: "Desvio de poder." },
              { letra: "D", texto: "Ato vinculado legítimo." },
              { letra: "E", texto: "Exercício regular de direito." },
            ],
            gabarito: "C",
            justificativa:
              "Quando o agente usa sua competência para fim diverso do previsto (vingança pessoal em vez de proteção à saúde pública), há DESVIO DE PODER (vício de finalidade), mesmo que haja irregularidade.",
            dificuldade: "Média",
            competencia: "Desvio de poder",
            banca: "IADES",
            tags: ["desvio de poder", "vigilância sanitária"],
          },
          {
            id: "da-q-3-10",
            enunciado: "Sobre o mérito administrativo, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "Pode ser controlado amplamente pelo Poder Judiciário.",
              },
              {
                letra: "B",
                texto: "Está presente em todos os atos administrativos.",
              },
              {
                letra: "C",
                texto:
                  "Refere-se ao juízo de conveniência e oportunidade nos atos discricionários.",
              },
              { letra: "D", texto: "É sinônimo de legalidade do ato." },
              { letra: "E", texto: "Não sofre qualquer limitação." },
            ],
            gabarito: "C",
            justificativa:
              "O MÉRITO ADMINISTRATIVO é o juízo de conveniência e oportunidade presente nos atos DISCRICIONÁRIOS. O Judiciário NÃO pode controlar o mérito, apenas a legalidade.",
            dificuldade: "Média",
            competencia: "Mérito administrativo",
            banca: "IADES",
            tags: ["mérito", "discricionariedade"],
          },
        ],
      },
    },
    {
      id: "da-topico-4",
      numero: 4,
      titulo:
        "Agentes Públicos: Disposições Constitucionais e Doutrinárias, Estatuto dos Servidores de Goiás e Carreira do Fisco",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Agente Público

**Agente público** é toda pessoa física que exerce, ainda que transitoriamente ou sem remuneração, função pública (art. 2º, Lei 8.429/92).

### Espécies de Agentes Públicos

| Espécie | Características | Exemplos |
|---------|-----------------|----------|
| **Agentes políticos** | Eleitos ou nomeados politicamente | Presidente, governadores, ministros |
| **Servidores estatutários** | Regime jurídico próprio (estatuto) | Fiscais, auditores, professores |
| **Empregados públicos** | Regime CLT | Empregados de EP e SEM |
| **Temporários** | Contrato por prazo determinado | Recenseadores, médicos emergenciais |
| **Particulares em colaboração** | Exercem função pública sem vínculo | Jurados, mesários, notários |

### Cargo, Emprego e Função

| Conceito | Regime | Vínculo |
|----------|--------|---------|
| **Cargo público** | Estatutário | Efetivo ou comissão |
| **Emprego público** | CLT | Celetista |
| **Função pública** | Atividade | Sem cargo específico |

### Disposições Constitucionais (Art. 37 a 41, CF)

- **Concurso público**: obrigatório para cargos efetivos e empregos
- **Estabilidade**: após 3 anos de efetivo exercício
- **Teto remuneratório**: subsídio de Ministro do STF
- **Acumulação**: vedada, salvo exceções (saúde, professor, técnico)

### Para IADES:
- Lei 20.756/2020: Estatuto dos Servidores de Goiás
- Lei 13.266/1998: Carreira do Fisco da SEFAZ-GO
        `,

        explicacao: `
## Explicação Didática

### 1. Disposições Constitucionais sobre Agentes Públicos

#### 1.1 Acesso a Cargos e Empregos Públicos (Art. 37, I e II)

**Regra geral:**
- Cargos, empregos e funções: acessíveis a **brasileiros** e **estrangeiros** na forma da lei
- Investidura depende de **concurso público** de provas ou provas e títulos

**Exceções ao concurso:**
| Exceção | Fundamento |
|---------|------------|
| Cargos em comissão | Art. 37, II (livre nomeação) |
| Contratação temporária | Art. 37, IX (excepcional interesse público) |
| Agentes comunitários de saúde | Art. 198, § 4º (processo seletivo) |

#### 1.2 Prazo de Validade do Concurso (Art. 37, III e IV)

- Validade: até **2 anos**, prorrogável **uma vez** por igual período
- Aprovado em concurso anterior tem **prioridade** sobre novos concursados

#### 1.3 Cargos em Comissão e Funções de Confiança (Art. 37, V)

| Tipo | Características |
|------|-----------------|
| **Cargo em comissão** | Livre nomeação/exoneração; direção, chefia, assessoramento |
| **Função de confiança** | Exclusiva para servidores efetivos |

#### 1.4 Direito de Greve e Associação Sindical (Art. 37, VI e VII)

- **Associação sindical**: garantida
- **Greve**: exercida nos termos de lei específica (STF: aplica-se lei de greve da iniciativa privada)

#### 1.5 Reserva de Vagas para PCD (Art. 37, VIII)

- Lei deve reservar percentual de cargos para pessoas com deficiência
- Goiás: 5% a 20% das vagas

#### 1.6 Teto Remuneratório (Art. 37, XI)

**Teto único:** Subsídio mensal de Ministro do STF

**Subtetos estaduais:**
| Poder | Teto |
|-------|------|
| Executivo | Subsídio do Governador |
| Legislativo | Subsídio dos Deputados |
| Judiciário | Subsídio dos Desembargadores (90,25% do STF) |

#### 1.7 Acumulação de Cargos (Art. 37, XVI e XVII)

**Regra:** Vedada a acumulação remunerada de cargos públicos.

**Exceções (com compatibilidade de horários):**
| Acumulação permitida |
|---------------------|
| Dois cargos de **professor** |
| Um cargo de professor + um cargo técnico/científico |
| Dois cargos de **saúde** com profissão regulamentada |

⚠️ A proibição se estende a autarquias, fundações, EP e SEM.

#### 1.8 Estabilidade (Art. 41)

**Requisitos para estabilidade:**
1. Nomeação para cargo de provimento **efetivo**
2. **Concurso público**
3. **3 anos** de efetivo exercício
4. **Avaliação especial de desempenho** por comissão

**Perda do cargo pelo servidor estável:**
| Hipótese | Observação |
|----------|------------|
| Sentença judicial transitada em julgado | |
| Processo administrativo disciplinar | Ampla defesa garantida |
| Avaliação periódica de desempenho | Lei complementar |
| Excesso de despesa com pessoal | Art. 169, § 4º, CF |

### 2. Disposições Doutrinárias

#### 2.1 Conceito de Agente Público

**Agente público** é toda pessoa física que exerce, ainda que transitoriamente ou sem remuneração, por qualquer forma de investidura ou vínculo, mandato, cargo, emprego ou função pública.

#### 2.2 Espécies de Agentes Públicos

##### a) Agentes Políticos
- Exercem função política
- Mandato eletivo ou nomeação política
- Exemplos: Presidente, Governador, Ministros, Secretários, Parlamentares

##### b) Servidores Públicos
- **Estatutários**: regime próprio, cargo público
- **Empregados públicos**: regime CLT, emprego público
- **Temporários**: contrato por tempo determinado (art. 37, IX)

##### c) Particulares em Colaboração
- Sem vínculo permanente
- Exemplos: jurados, mesários, notários, concessionários

#### 2.3 Cargo, Emprego e Função Pública

| Conceito | Definição | Regime |
|----------|-----------|--------|
| **Cargo público** | Conjunto de atribuições e responsabilidades previstas em lei, com denominação própria e remuneração pelo erário | Estatutário |
| **Emprego público** | Ocupado por empregados públicos sob regime celetista | CLT |
| **Função pública** | Conjunto de atribuições sem cargo correspondente | Confiança ou temporária |

#### 2.4 Formas de Provimento

| Forma | Descrição |
|-------|-----------|
| **Nomeação** | Forma originária; cargo efetivo (concurso) ou comissão |
| **Promoção** | Passagem para cargo superior na carreira |
| **Readaptação** | Investidura em cargo compatível com limitação física/mental |
| **Reversão** | Retorno do aposentado ao serviço |
| **Aproveitamento** | Retorno do servidor em disponibilidade |
| **Reintegração** | Retorno do demitido por invalidação da demissão |
| **Recondução** | Retorno ao cargo anterior |

#### 2.5 Formas de Vacância

| Forma | Descrição |
|-------|-----------|
| **Exoneração** | Desligamento a pedido ou de ofício (comissão) |
| **Demissão** | Penalidade por infração grave |
| **Promoção** | Passagem para cargo superior |
| **Readaptação** | Mudança para cargo compatível |
| **Aposentadoria** | Passagem à inatividade |
| **Posse em outro cargo inacumulável** | |
| **Falecimento** | |

#### 2.6 Efetividade, Estabilidade e Vitaliciedade

| Conceito | Características |
|----------|-----------------|
| **Efetividade** | Atributo do cargo; provimento por concurso |
| **Estabilidade** | Atributo do servidor; após 3 anos + avaliação |
| **Vitaliciedade** | Perda do cargo só por sentença judicial (juízes, MP, TC) |

#### 2.7 Sistema Remuneratório

| Forma | Composição |
|-------|------------|
| **Vencimentos** | Vencimento básico + vantagens (gratificações, adicionais) |
| **Subsídio** | Parcela única, vedado acréscimos (agentes políticos, algumas carreiras) |

#### 2.8 Direitos dos Servidores (Art. 39, § 3º, CF)

Aplicam-se aos servidores alguns direitos dos trabalhadores (art. 7º):
- Salário mínimo
- 13º salário
- Férias + 1/3
- Licença-maternidade/paternidade
- Adicional noturno
- Adicional de periculosidade/insalubridade

#### 2.9 Deveres e Responsabilidades

**Deveres:**
- Lealdade à instituição
- Obediência às ordens superiores legais
- Assiduidade e pontualidade
- Sigilo funcional
- Urbanidade

**Responsabilidades (tríplice):**
| Tipo | Natureza | Sanção |
|------|----------|--------|
| **Administrativa** | Infração funcional | Advertência, suspensão, demissão |
| **Civil** | Dano ao erário ou terceiros | Indenização |
| **Penal** | Crime | Penas criminais |

⚠️ As esferas são **independentes** (regra), mas podem comunicar-se em casos específicos.

#### 2.10 Processo Administrativo Disciplinar (PAD)

**Objetivo:** Apurar responsabilidade por infração praticada no exercício do cargo.

**Fases:**
1. **Instauração**: portaria designando comissão
2. **Inquérito**: instrução, defesa, relatório
3. **Julgamento**: decisão da autoridade competente

**Garantias:**
- Contraditório e ampla defesa
- Comissão com servidores estáveis
- Prazo para defesa escrita

### 3. Estatuto dos Servidores de Goiás (Lei 20.756/2020)

#### 3.1 Título V - Do Regime Disciplinar

##### Capítulo I - Dos Deveres

**Deveres do servidor (Art. 156):**
1. Exercer com zelo e dedicação as atribuições
2. Ser leal às instituições
3. Observar normas legais e regulamentares
4. Cumprir ordens superiores (exceto manifestamente ilegais)
5. Atender com presteza ao público
6. Levar irregularidades ao conhecimento da autoridade
7. Manter conduta compatível com a moralidade
8. Ser assíduo e pontual
9. Tratar com urbanidade colegas e público
10. Guardar sigilo sobre assuntos da repartição

##### Capítulo II - Das Proibições

**Proibições (Art. 157):**
1. Ausentar-se do serviço sem autorização
2. Retirar documento ou objeto sem autorização
3. Recusar fé a documentos públicos
4. Opor resistência injustificada a processos
5. Promover manifestação de apreço ou desapreço
6. Cometer a pessoa estranha atribuição do cargo
7. Coagir subordinados com fins políticos
8. Manter sob subordinação familiar (nepotismo)
9. Valer-se do cargo para lograr proveito pessoal
10. Participar de gerência de empresa privada
11. Atuar como procurador perante a Administração
12. Receber propina, comissão, presente
13. Praticar usura
14. Exercer atividade incompatível com o cargo
15. Cometer pessoa estranha à repartição o desempenho de atribuição

##### Capítulo III - Da Acumulação

- Vedada acumulação de cargos, empregos e funções
- Exceções: compatibilidade de horários + casos constitucionais
- Servidor deve optar em caso de acumulação ilegal

##### Capítulo IV - Das Responsabilidades

**Responsabilidade do servidor:**
- Administrativa, civil e penal
- Independência das instâncias
- Comunicação em caso de absolvição penal por inexistência do fato ou negativa de autoria

##### Capítulo V - Das Penalidades

| Penalidade | Aplicação |
|------------|-----------|
| **Advertência** | Por escrito; infrações leves |
| **Suspensão** | Até 90 dias; reincidência ou infrações médias |
| **Demissão** | Infrações graves (art. 164) |
| **Cassação de aposentadoria** | Infração grave durante atividade |
| **Destituição** | Cargo em comissão ou função |

**Infrações graves (demissão):**
- Crime contra a Administração
- Abandono de cargo (30 dias)
- Inassiduidade habitual (60 dias em 12 meses)
- Improbidade administrativa
- Incontinência pública e escandalosa
- Corrupção
- Aplicação irregular de dinheiro público
- Revelação de segredo
- Lesão aos cofres públicos

### 4. Carreira do Fisco de Goiás (Lei 13.266/1998)

#### 4.1 Estrutura da Carreira

**Criação:** Lei 13.266, de 16/01/1998

**Finalidade:** Organizar a carreira do Fisco da Secretaria da Fazenda

**Cargos:**
| Cargo | Atribuição |
|-------|------------|
| **Auditor-Fiscal da Receita Estadual** | Fiscalização, lançamento, constituição de crédito tributário |
| **Agente Tributário** | Apoio às atividades de fiscalização |

#### 4.2 Ingresso na Carreira

- Concurso público de provas e títulos
- Nível superior (Auditor-Fiscal)
- Nível médio (Agente Tributário)

#### 4.3 Atribuições do Auditor-Fiscal

**Atividades privativas:**
1. Constituir crédito tributário mediante lançamento
2. Fiscalizar tributos estaduais
3. Elaborar pareceres em processos tributários
4. Proceder diligências fiscais
5. Autorizar documentos fiscais
6. Analisar recursos administrativos

#### 4.4 Prerrogativas

- **Livre acesso** a estabelecimentos para fiscalização
- **Requisição** de força policial
- **Prioridade** no atendimento por órgãos públicos
- **Porte de arma** funcional (casos previstos)

#### 4.5 Deveres Específicos

- Manter sigilo fiscal
- Atuar com imparcialidade
- Declarar impedimento/suspeição
- Atualização profissional contínua

#### 4.6 Remuneração

- Sistema de subsídio (parcela única)
- Progressão funcional
- Promoção por merecimento e antiguidade
        `,

        pontosChave: [
          "Agente público: toda pessoa física que exerce função pública, com ou sem remuneração",
          "Espécies: agentes políticos, servidores (estatutários, celetistas, temporários), particulares em colaboração",
          "Cargo público: estatutário; Emprego público: CLT; Função pública: sem cargo específico",
          "Concurso público: obrigatório para cargos efetivos, validade até 2 anos prorrogável 1 vez",
          "Estabilidade: 3 anos de efetivo exercício + avaliação de desempenho (cargo efetivo)",
          "Vitaliciedade: perda só por sentença judicial (juízes, MP, TC)",
          "Teto remuneratório: subsídio de Ministro do STF",
          "Acumulação vedada, exceto: 2 de professor, 1 professor + 1 técnico, 2 de saúde",
          "Lei 20.756/2020: Estatuto dos Servidores de GO - deveres, proibições, penalidades",
          "Lei 13.266/1998: Carreira do Fisco - Auditor-Fiscal e Agente Tributário",
        ],

        armadilhas: [
          {
            titulo: "Confundir estabilidade com efetividade",
            descricao:
              "Efetividade é atributo do CARGO (provimento por concurso). Estabilidade é atributo do SERVIDOR (após 3 anos + avaliação).",
            dica: "Efetividade vem do CARGO. Estabilidade vem do TEMPO de serviço.",
          },
          {
            titulo: "Errar prazo de estabilidade",
            descricao:
              "Após EC 19/98, o prazo para estabilidade é de 3 ANOS (não mais 2 anos).",
            dica: "Estabilidade = 3 anos + avaliação de desempenho.",
          },
          {
            titulo: "Acumulação de cargos de saúde",
            descricao:
              "A exceção é para dois cargos de SAÚDE com profissões regulamentadas, não qualquer cargo da área.",
            dica: "Médico + médico = pode. Médico + administrador de hospital = não pode.",
          },
          {
            titulo: "Confundir demissão com exoneração",
            descricao:
              "DEMISSÃO é penalidade. EXONERAÇÃO é desligamento sem caráter punitivo.",
            dica: "Demissão = punição por falta grave. Exoneração = a pedido ou de cargo em comissão.",
          },
          {
            titulo: "Pensar que as instâncias são sempre independentes",
            descricao:
              "A absolvição penal por inexistência do fato ou negativa de autoria VINCULA as outras esferas.",
            dica: "Fato não existiu ou não foi ele = absolve em todas as esferas.",
          },
        ],

        mnemonicos: [
          {
            termo: "AES",
            significado: "Acumulação: 2 de Professor, 1 + Técnico, 2 de Saúde",
            frase:
              "Acumulação permitida: Professor-Professor, Professor-Técnico, Saúde-Saúde",
          },
          {
            termo: "E-3-A",
            significado: "Estabilidade = 3 anos + Avaliação",
            frase: "Para ter Estabilidade: 3 anos + Avaliação especial",
          },
          {
            termo: "PAD-ICA",
            significado: "PAD: Instauração, Contraditório, Ampla defesa",
            frase:
              "PAD garante Instauração formal, Contraditório e Ampla defesa",
          },
          {
            termo: "VITA-SJ",
            significado: "Vitaliciedade = perda só por Sentença Judicial",
            frase: "Cargo vitalício: só perde por decisão do Judiciário",
          },
        ],

        flashcards: [
          {
            id: "da-fc-4-1",
            frente: "O que é AGENTE PÚBLICO?",
            verso:
              "Toda **pessoa física** que exerce, ainda que transitoriamente ou sem remuneração, **função pública**.\n\n(Art. 2º, Lei 8.429/92)\n\nInclui: servidores, empregados públicos, temporários, particulares em colaboração.",
            tags: ["agente público", "conceito"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-2",
            frente: "Quais são as ESPÉCIES de agentes públicos?",
            verso:
              "**1. Agentes políticos**: eleitos ou nomeados (Presidente, Governador)\n\n**2. Servidores públicos**:\n- Estatutários (regime próprio)\n- Empregados (CLT)\n- Temporários (art. 37, IX)\n\n**3. Particulares em colaboração**: jurados, mesários, notários",
            tags: ["espécies", "classificação"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-3",
            frente: "Qual a diferença entre CARGO, EMPREGO e FUNÇÃO PÚBLICA?",
            verso:
              "**CARGO PÚBLICO**:\n- Regime estatutário\n- Efetivo ou comissão\n\n**EMPREGO PÚBLICO**:\n- Regime CLT\n- Em EP e SEM\n\n**FUNÇÃO PÚBLICA**:\n- Sem cargo específico\n- Confiança ou temporária",
            tags: ["cargo", "emprego", "função"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-4",
            frente: "Quais os requisitos para ESTABILIDADE?",
            verso:
              "**4 requisitos (Art. 41, CF):**\n\n1. Nomeação para cargo **efetivo**\n2. Aprovação em **concurso público**\n3. **3 anos** de efetivo exercício\n4. **Avaliação especial** de desempenho\n\n(Após EC 19/98: 3 anos, não mais 2)",
            tags: ["estabilidade", "requisitos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-5",
            frente: "Quando é PERMITIDA a acumulação de cargos públicos?",
            verso:
              "**Acumulação permitida** (com compatibilidade de horários):\n\n1. **Dois cargos de professor**\n2. **Um de professor + um técnico/científico**\n3. **Dois cargos de saúde** com profissão regulamentada\n\n(Art. 37, XVI, CF)",
            tags: ["acumulação", "exceções"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-6",
            frente: "Como o servidor ESTÁVEL pode perder o cargo?",
            verso:
              "**Perda do cargo (Art. 41, § 1º):**\n\n1. Sentença judicial transitada em julgado\n2. Processo administrativo disciplinar\n3. Avaliação periódica de desempenho (LC)\n4. Excesso de despesa com pessoal (art. 169, § 4º)\n\n⚠️ Sempre com ampla defesa!",
            tags: ["perda do cargo", "estável"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-7",
            frente:
              "Qual a diferença entre EFETIVIDADE, ESTABILIDADE e VITALICIEDADE?",
            verso:
              "**EFETIVIDADE**:\n- Atributo do CARGO\n- Provimento por concurso\n\n**ESTABILIDADE**:\n- Atributo do SERVIDOR\n- Após 3 anos + avaliação\n\n**VITALICIEDADE**:\n- Perda SÓ por sentença judicial\n- Juízes, MP, Tribunal de Contas",
            tags: ["efetividade", "estabilidade", "vitaliciedade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-8",
            frente: "Qual a diferença entre DEMISSÃO e EXONERAÇÃO?",
            verso:
              '**DEMISSÃO**:\n- PENALIDADE\n- Por infração grave\n- Ex: corrupção, abandono\n\n**EXONERAÇÃO**:\n- NÃO é penalidade\n- A pedido do servidor OU\n- De ofício (cargo em comissão)\n\nNunca diga "o servidor foi exonerado por má conduta"!',
            tags: ["demissão", "exoneração"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-9",
            frente:
              "Quais são as principais PENALIDADES da Lei 20.756/2020 (Estatuto de GO)?",
            verso:
              "**Penalidades (Art. 162 e ss.):**\n\n1. **Advertência**: escrita, infrações leves\n2. **Suspensão**: até 90 dias\n3. **Demissão**: infrações graves\n4. **Cassação de aposentadoria**\n5. **Destituição**: cargo em comissão/função\n\nInfrações graves: abandono (30 dias), inassiduidade (60 dias), corrupção, improbidade.",
            tags: ["penalidades", "Lei 20.756"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-4-10",
            frente: "O que trata a Lei 13.266/1998 (Carreira do Fisco de GO)?",
            verso:
              "**Lei 13.266/1998:**\nOrganiza a carreira do Fisco da SEFAZ-GO\n\n**Cargos:**\n- **Auditor-Fiscal**: constituir crédito tributário, fiscalizar\n- **Agente Tributário**: apoio à fiscalização\n\n**Características:**\n- Ingresso por concurso\n- Prerrogativas: livre acesso, requisição de força policial\n- Remuneração por subsídio",
            tags: ["Lei 13.266", "Fisco"],
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
            id: "da-q-4-1",
            enunciado:
              "Acerca do conceito de agente público, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "Somente é agente público quem possui cargo efetivo.",
              },
              {
                letra: "B",
                texto:
                  "Agente público é apenas quem recebe remuneração do Estado.",
              },
              {
                letra: "C",
                texto:
                  "É toda pessoa física que exerce função pública, ainda que transitoriamente ou sem remuneração.",
              },
              {
                letra: "D",
                texto:
                  "Particulares nunca podem ser considerados agentes públicos.",
              },
              {
                letra: "E",
                texto:
                  "Agentes políticos não são considerados agentes públicos.",
              },
            ],
            gabarito: "C",
            justificativa:
              "Conforme art. 2º da Lei 8.429/92, agente público é toda pessoa física que exerce, ainda que transitoriamente ou sem remuneração, função pública. Inclui servidores, agentes políticos e particulares em colaboração.",
            dificuldade: "Fácil",
            competencia: "Conceito de agente público",
            banca: "IADES",
            tags: ["agente público", "conceito"],
          },
          {
            id: "da-q-4-2",
            enunciado:
              "São requisitos para a aquisição da estabilidade pelo servidor público, EXCETO:",
            alternativas: [
              {
                letra: "A",
                texto: "Nomeação para cargo de provimento efetivo.",
              },
              { letra: "B", texto: "Aprovação em concurso público." },
              { letra: "C", texto: "Três anos de efetivo exercício." },
              {
                letra: "D",
                texto: "Avaliação especial de desempenho por comissão.",
              },
              { letra: "E", texto: "Nomeação para cargo em comissão." },
            ],
            gabarito: "E",
            justificativa:
              "A estabilidade é adquirida por servidor de cargo EFETIVO, não em comissão. Os requisitos são: cargo efetivo, concurso público, 3 anos de exercício e avaliação de desempenho (art. 41, CF).",
            dificuldade: "Fácil",
            competencia: "Estabilidade",
            banca: "IADES",
            tags: ["estabilidade", "requisitos"],
          },
          {
            id: "da-q-4-3",
            enunciado:
              "A Constituição Federal permite a acumulação remunerada de cargos públicos, com compatibilidade de horários, nas seguintes hipóteses, EXCETO:",
            alternativas: [
              { letra: "A", texto: "Dois cargos de professor." },
              {
                letra: "B",
                texto: "Um cargo de professor com outro técnico ou científico.",
              },
              {
                letra: "C",
                texto:
                  "Dois cargos privativos de profissionais de saúde, com profissões regulamentadas.",
              },
              { letra: "D", texto: "Dois cargos de auditor fiscal." },
              {
                letra: "E",
                texto: "Um cargo de médico com outro cargo de médico.",
              },
            ],
            gabarito: "D",
            justificativa:
              "A CF permite acumulação apenas de: 2 de professor, 1 professor + 1 técnico, ou 2 de saúde com profissão regulamentada. Dois cargos de auditor fiscal NÃO se enquadram nas exceções.",
            dificuldade: "Média",
            competencia: "Acumulação de cargos",
            banca: "IADES",
            tags: ["acumulação", "exceções"],
          },
          {
            id: "da-q-4-4",
            enunciado:
              "Sobre a diferença entre efetividade, estabilidade e vitaliciedade, assinale a alternativa CORRETA:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Efetividade é atributo do servidor; estabilidade é atributo do cargo.",
              },
              {
                letra: "B",
                texto: "Estabilidade e vitaliciedade são sinônimos.",
              },
              {
                letra: "C",
                texto:
                  "O servidor vitalício só pode perder o cargo por sentença judicial.",
              },
              {
                letra: "D",
                texto: "A efetividade é adquirida após 3 anos de exercício.",
              },
              {
                letra: "E",
                texto:
                  "A vitaliciedade pode ser adquirida por qualquer servidor.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O servidor VITALÍCIO (juízes, MP, TC) só pode perder o cargo por sentença judicial. Efetividade é atributo do CARGO. Estabilidade é atributo do SERVIDOR. Vitaliciedade é para carreiras específicas.",
            dificuldade: "Média",
            competencia: "Efetividade, estabilidade, vitaliciedade",
            banca: "IADES",
            tags: ["vitaliciedade", "estabilidade"],
          },
          {
            id: "da-q-4-5",
            enunciado:
              "Conforme a Lei 20.756/2020 (Estatuto dos Servidores de Goiás), são penalidades disciplinares, EXCETO:",
            alternativas: [
              { letra: "A", texto: "Advertência." },
              { letra: "B", texto: "Suspensão." },
              { letra: "C", texto: "Demissão." },
              { letra: "D", texto: "Prisão administrativa." },
              { letra: "E", texto: "Cassação de aposentadoria." },
            ],
            gabarito: "D",
            justificativa:
              'As penalidades previstas na Lei 20.756/2020 são: advertência, suspensão, demissão, cassação de aposentadoria e destituição de cargo em comissão/função. NÃO existe "prisão administrativa" como penalidade.',
            dificuldade: "Média",
            competencia: "Penalidades - Lei 20.756/2020",
            banca: "IADES",
            tags: ["penalidades", "Estatuto GO"],
          },
          {
            id: "da-q-4-6",
            enunciado:
              "A forma de provimento em que o servidor retorna ao cargo anteriormente ocupado, em razão de inabilitação em estágio probatório relativo a outro cargo, denomina-se:",
            alternativas: [
              { letra: "A", texto: "Reversão." },
              { letra: "B", texto: "Readaptação." },
              { letra: "C", texto: "Reintegração." },
              { letra: "D", texto: "Recondução." },
              { letra: "E", texto: "Aproveitamento." },
            ],
            gabarito: "D",
            justificativa:
              "RECONDUÇÃO é o retorno do servidor ao cargo anteriormente ocupado, em razão de inabilitação em estágio probatório relativo a outro cargo ou reintegração do anterior ocupante.",
            dificuldade: "Média",
            competencia: "Formas de provimento",
            banca: "IADES",
            tags: ["recondução", "provimento"],
          },
          {
            id: "da-q-4-7",
            enunciado: "O servidor estável poderá perder o cargo, EXCETO:",
            alternativas: [
              {
                letra: "A",
                texto: "Em virtude de sentença judicial transitada em julgado.",
              },
              {
                letra: "B",
                texto:
                  "Mediante processo administrativo disciplinar com ampla defesa.",
              },
              {
                letra: "C",
                texto: "Por decisão unilateral do superior hierárquico.",
              },
              {
                letra: "D",
                texto:
                  "Mediante procedimento de avaliação periódica de desempenho.",
              },
              {
                letra: "E",
                texto:
                  "Em razão de excesso de despesa com pessoal, conforme art. 169, § 4º, CF.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O servidor estável NÃO pode perder o cargo por decisão unilateral do superior. A perda exige: sentença judicial, PAD com ampla defesa, avaliação de desempenho (LC) ou excesso de despesa (art. 41, § 1º, CF).",
            dificuldade: "Média",
            competencia: "Perda do cargo - estável",
            banca: "IADES",
            tags: ["perda do cargo", "estabilidade"],
          },
          {
            id: "da-q-4-8",
            enunciado:
              "Sobre o teto remuneratório dos servidores públicos, conforme a Constituição Federal, é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto: "O teto é o subsídio do Governador do Estado.",
              },
              {
                letra: "B",
                texto:
                  "O teto é o subsídio mensal dos Ministros do Supremo Tribunal Federal.",
              },
              {
                letra: "C",
                texto: "Não existe limitação remuneratória para servidores.",
              },
              {
                letra: "D",
                texto: "O teto só se aplica aos servidores do Poder Executivo.",
              },
              { letra: "E", texto: "O teto é diferente para cada carreira." },
            ],
            gabarito: "B",
            justificativa:
              "O teto remuneratório geral é o subsídio dos Ministros do STF (art. 37, XI, CF). Há subtetos estaduais diferenciados por Poder, mas o teto absoluto é sempre o do STF.",
            dificuldade: "Fácil",
            competencia: "Teto remuneratório",
            banca: "IADES",
            tags: ["teto", "remuneração"],
          },
          {
            id: "da-q-4-9",
            enunciado:
              "De acordo com a Lei 13.266/1998, que dispõe sobre a carreira do Fisco da Secretaria da Fazenda de Goiás, é atribuição privativa do Auditor-Fiscal da Receita Estadual:",
            alternativas: [
              {
                letra: "A",
                texto: "Realizar apenas atividades administrativas internas.",
              },
              {
                letra: "B",
                texto: "Constituir crédito tributário mediante lançamento.",
              },
              {
                letra: "C",
                texto: "Exercer exclusivamente atividades de apoio.",
              },
              {
                letra: "D",
                texto: "Atuar como advogado do Estado em causas tributárias.",
              },
              { letra: "E", texto: "Legislar sobre matéria tributária." },
            ],
            gabarito: "B",
            justificativa:
              "Conforme a Lei 13.266/1998, é atribuição privativa do Auditor-Fiscal constituir crédito tributário mediante lançamento, fiscalizar tributos estaduais, elaborar pareceres tributários, entre outras atividades de fiscalização.",
            dificuldade: "Média",
            competencia: "Carreira do Fisco",
            banca: "IADES",
            tags: ["Auditor-Fiscal", "Lei 13.266"],
          },
          {
            id: "da-q-4-10",
            enunciado:
              "Caracteriza abandono de cargo, conforme a Lei 20.756/2020, a ausência intencional do servidor ao serviço por mais de:",
            alternativas: [
              { letra: "A", texto: "15 dias consecutivos." },
              { letra: "B", texto: "20 dias consecutivos." },
              { letra: "C", texto: "30 dias consecutivos." },
              { letra: "D", texto: "45 dias consecutivos." },
              { letra: "E", texto: "60 dias consecutivos." },
            ],
            gabarito: "C",
            justificativa:
              "Conforme a Lei 20.756/2020, caracteriza abandono de cargo a ausência intencional do servidor ao serviço por mais de 30 dias consecutivos. A inassiduidade habitual é configurada por 60 faltas interpoladas em 12 meses.",
            dificuldade: "Média",
            competencia: "Abandono de cargo",
            banca: "IADES",
            tags: ["abandono", "Lei 20.756"],
          },
        ],
      },
    },
    {
      id: "da-topico-5",
      numero: 5,
      titulo: "Poderes da Administração Pública",
      conteudo: {
        resumo: `
## Resumo Rápido - Poderes Administrativos

### Os 4 Poderes Administrativos

| Poder | Conceito | Exercício |
|-------|----------|-----------|
| **Hierárquico** | Organização interna, comando e subordinação | Avocação, delegação, ordens |
| **Disciplinar** | Apurar infrações e aplicar sanções | PAD, sindicância, punições |
| **Regulamentar** | Editar normas complementares à lei | Decretos, regulamentos |
| **De Polícia** | Limitar direitos em prol do interesse público | Fiscalização, interdição, multa |

### Poder Hierárquico

**Manifestações:**
- Dar ordens e fiscalizar cumprimento
- Delegar e avocar atribuições
- Rever atos dos subordinados
- Aplicar sanções (junto com disciplinar)

**Decorar:** Hierarquia só existe na MESMA pessoa jurídica (não entre entes federados).

### Poder Disciplinar

**Características:**
- Apura infrações funcionais
- Vinculado quanto ao DEVER de punir
- Discricionário quanto à PENA aplicável
- Exige: contraditório e ampla defesa

**Sanções (Lei 8.112/90):**
- Advertência
- Suspensão (até 90 dias)
- Demissão
- Cassação de aposentadoria
- Destituição

### Poder Regulamentar (ou Normativo)

**Tipos de Regulamento:**
- **Executivo**: complementa a lei (art. 84, IV, CF)
- **Autônomo**: independe de lei (art. 84, VI, CF) - excepcional

**Limites:**
- NÃO pode inovar na ordem jurídica
- NÃO pode contrariar a lei
- Controle: sustação pelo Congresso (art. 49, V, CF)

### Poder de Polícia

**Conceito (CTN, art. 78):**
Atividade que limita ou disciplina direito, interesse ou liberdade em razão do interesse público.

**Atributos (DAC):**
- **D**iscricionariedade
- **A**utoexecutoriedade
- **C**oercibilidade

**Ciclo de Polícia:**
1. Ordem (legislação)
2. Consentimento (licenças, autorizações)
3. Fiscalização
4. Sanção

### Uso e Abuso de Poder

| Abuso | Característica |
|-------|----------------|
| **Excesso** | Vai ALÉM dos limites da competência |
| **Desvio** | Usa competência para FIM diverso |
        `,

        explicacao: `
## Explicação Didática - Poderes Administrativos

### 1. Introdução aos Poderes Administrativos

Os poderes administrativos são **instrumentos** conferidos à Administração para que ela possa cumprir suas finalidades. São poderes-DEVERES: a Administração não apenas PODE, mas DEVE exercê-los quando necessário.

**Diferença importante:**
- **Poderes administrativos**: instrumentos de gestão (hierárquico, disciplinar, regulamentar, polícia)
- **Poderes do Estado**: funções estatais (Executivo, Legislativo, Judiciário)

### 2. Poder Hierárquico

#### 2.1 Conceito
Poder de organizar internamente a estrutura administrativa, estabelecendo relação de coordenação e subordinação entre órgãos e agentes.

#### 2.2 Manifestações

| Manifestação | Descrição |
|--------------|-----------|
| **Ordenar** | Dar ordens aos subordinados |
| **Fiscalizar** | Verificar cumprimento das ordens |
| **Delegar** | Transferir parte da competência |
| **Avocar** | Chamar para si competência do subordinado |
| **Rever** | Anular ou revogar atos dos subordinados |
| **Coordenar** | Organizar atividades de forma harmônica |

#### 2.3 Limites à Delegação (Lei 9.784/99, art. 13)

**NÃO podem ser delegados:**
- Edição de atos de caráter NORMATIVO
- Decisão de RECURSOS administrativos
- Matérias de competência EXCLUSIVA

#### 2.4 Características Importantes

- Só existe DENTRO da mesma pessoa jurídica
- NÃO há hierarquia entre União, Estados e Municípios
- NÃO há hierarquia entre Administração Direta e Indireta (há VINCULAÇÃO)

### 3. Poder Disciplinar

#### 3.1 Conceito
Poder de apurar infrações funcionais e aplicar penalidades aos servidores e demais pessoas sujeitas à disciplina administrativa.

#### 3.2 Natureza Jurídica

| Aspecto | Natureza |
|---------|----------|
| Dever de apurar | **VINCULADO** |
| Instauração de processo | **VINCULADO** |
| Escolha da penalidade | **DISCRICIONÁRIO** |
| Dosimetria | **DISCRICIONÁRIO** |

#### 3.3 Abrangência

O poder disciplinar alcança:
- Servidores públicos
- Contratados (licitação)
- Particulares com vínculo especial (concessionários)

⚠️ **Não confundir** com poder de polícia: este alcança a coletividade em geral.

#### 3.4 Garantias no Processo

- Contraditório e ampla defesa
- Devido processo legal
- Presunção de inocência
- Proporcionalidade da pena

### 4. Poder Regulamentar (Normativo)

#### 4.1 Conceito
Competência para editar atos normativos que complementem ou expliquem a lei, possibilitando sua fiel execução.

#### 4.2 Tipos de Regulamento

**REGULAMENTO EXECUTIVO (regra):**
- Complementa a lei
- Art. 84, IV, CF: "expedir decretos e regulamentos para fiel execução das leis"
- NÃO inova na ordem jurídica

**REGULAMENTO AUTÔNOMO (exceção):**
- Art. 84, VI, CF: organização da Administração sem aumento de despesa
- Independe de lei
- Caráter excepcional

#### 4.3 Limites ao Poder Regulamentar

- Não pode CRIAR direitos ou obrigações novas
- Não pode CONTRARIAR a lei
- Não pode EXTRAPOLAR os limites legais
- Sujeito a controle do Congresso (art. 49, V, CF)

#### 4.4 Instrumentos Normativos

| Ato | Autoridade | Função |
|-----|------------|--------|
| Decreto | Chefe do Executivo | Regulamentar leis |
| Resolução | Órgãos colegiados | Disciplinar matérias internas |
| Instrução Normativa | Ministros/Secretários | Orientar execução |
| Portaria | Autoridades diversas | Atos internos |

### 5. Poder de Polícia

#### 5.1 Conceito Legal (CTN, art. 78)

> "Atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público concernente à segurança, à higiene, à ordem, aos costumes, à disciplina da produção e do mercado..."

#### 5.2 Fundamento

**Supremacia do interesse público sobre o privado:**
O Estado pode restringir direitos individuais quando o interesse coletivo assim exigir.

#### 5.3 Atributos do Poder de Polícia (DAC)

| Atributo | Significado | Exemplo |
|----------|-------------|---------|
| **Discricionariedade** | Margem de escolha | Definir condições de licença |
| **Autoexecutoriedade** | Execução sem ordem judicial | Interditar estabelecimento |
| **Coercibilidade** | Imposição obrigatória | Apreender produto |

⚠️ **Exceção**: Cobrança de multa NÃO é autoexecutável (precisa de execução fiscal).

#### 5.4 Ciclo de Polícia

\`\`\`
ORDEM → CONSENTIMENTO → FISCALIZAÇÃO → SANÇÃO
(lei)    (licença/autor.)   (inspeção)     (multa/interdição)
\`\`\`

**Fases delegáveis a particulares:**
- Fiscalização: SIM (mas com limites)
- Consentimento: SIM (atividades de apoio)
- Ordem e Sanção: NÃO (indelegáveis)

#### 5.5 Poder de Polícia e Vigilância Sanitária

A Vigilância Sanitária é típico exercício do poder de polícia:
- Fiscaliza estabelecimentos
- Aplica multas e sanções
- Interdita locais
- Apreende produtos

### 6. Uso e Abuso de Poder

#### 6.1 Excesso de Poder

O agente vai **ALÉM** dos limites de sua competência.

**Exemplo:** Fiscal autorizado a aplicar multas interdita estabelecimento (não tinha competência para interditar).

#### 6.2 Desvio de Poder (Finalidade)

O agente usa a competência para **FIM DIVERSO** do previsto em lei.

**Exemplo:** Fiscal interdita estabelecimento para prejudicar concorrente do primo (fim pessoal, não público).

#### 6.3 Consequências do Abuso

- Nulidade do ato
- Responsabilidade civil, penal e administrativa
- Crime de abuso de autoridade (Lei 13.869/2019)
- Improbidade administrativa (Lei 8.429/92)
        `,

        pontosChave: [
          "Poder Hierárquico: organização interna, delegação, avocação, ordens",
          "Poder Disciplinar: apurar infrações e punir servidores e contratados",
          "Poder Regulamentar: editar normas complementares à lei (não inova)",
          "Poder de Polícia: limitar direitos em prol do interesse público",
          "Atributos do poder de polícia: DAC (Discricionariedade, Autoexecutoriedade, Coercibilidade)",
          "Cobrança de multa NÃO é autoexecutável (precisa de execução fiscal)",
          "Não podem ser delegados: atos normativos, recursos, competência exclusiva",
          "Excesso de poder: vai além da competência",
          "Desvio de poder: usa competência para fim diverso",
          "Ciclo de polícia: ordem → consentimento → fiscalização → sanção",
        ],

        armadilhas: [
          {
            titulo: "Confundir poder disciplinar com poder de polícia",
            descricao:
              "Disciplinar: pune quem tem VÍNCULO (servidor, contratado). Polícia: atinge a COLETIVIDADE.",
            dica: 'Disciplinar = quem está "dentro". Polícia = quem está "fora".',
          },
          {
            titulo: "Achar que regulamento pode criar direitos",
            descricao:
              "Regulamento executivo NÃO pode inovar, apenas complementa a lei.",
            dica: "Só a LEI cria direitos e obrigações. Regulamento explica.",
          },
          {
            titulo: "Pensar que cobrança de multa é autoexecutável",
            descricao:
              "Multa é autoexecutável? NÃO! A cobrança exige execução fiscal.",
            dica: "Aplicar a multa: sim. Cobrar (tirar dinheiro): precisa de processo.",
          },
          {
            titulo: "Confundir excesso com desvio de poder",
            descricao:
              "Excesso = ultrapassa competência. Desvio = usa para fim errado.",
            dica: "Excesso = foi ALÉM. Desvio = foi para o LADO.",
          },
        ],

        mnemonicos: [
          {
            termo: "HI-DIS-RE-PO",
            significado: "HIerárquico, DISciplinar, REgulamentar, POlícia",
            frase: "Os 4 poderes administrativos: HI-DIS-RE-PO",
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
            termo: "ARE",
            significado: "Atos normativos, Recursos, Exclusiva competência",
            frase: "Não pode delegar: ARE",
          },
          {
            termo: "EXCESSO-DESVIO",
            significado: "Excesso = além. Desvio = finalidade errada",
            frase: "Excesso EXAGERA, Desvio DESVIA",
          },
        ],

        flashcards: [
          {
            id: "da-fc-5-1",
            frente: "Quais são os 4 poderes administrativos?",
            verso:
              "**HI-DIS-RE-PO:**\n\n1. **HI**erárquico: organização interna\n2. **DIS**ciplinar: apurar e punir\n3. **RE**gulamentar: editar normas\n4. **PO**lícia: limitar direitos\n\nSão poderes-DEVERES da Administração.",
            tags: ["poderes", "administrativos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-2",
            frente: "Quais são os atributos do poder de polícia?",
            verso:
              "**DAC:**\n\n**D**iscricionariedade\n→ Margem de escolha\n\n**A**utoexecutoriedade\n→ Sem ordem judicial\n\n**C**oercibilidade\n→ Imposição obrigatória\n\n⚠️ Multa NÃO é autoexecutável!",
            tags: ["polícia", "atributos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-3",
            frente:
              "Qual a diferença entre poder disciplinar e poder de polícia?",
            verso:
              "**DISCIPLINAR:**\n- Alcança quem tem VÍNCULO\n- Servidores, contratados\n- Relação especial de sujeição\n\n**POLÍCIA:**\n- Alcança a COLETIVIDADE\n- Todos os administrados\n- Relação geral de sujeição\n\nDisciplinar = DENTRO. Polícia = FORA.",
            tags: ["disciplinar", "polícia"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-4",
            frente: "O que NÃO pode ser delegado no poder hierárquico?",
            verso:
              "**NÃO podem ser delegados (Lei 9.784/99, art. 13):**\n\n1. Edição de atos **NORMATIVOS**\n2. Decisão de **RECURSOS**\n3. Matérias de competência **EXCLUSIVA**\n\nMnemônico: ARE (Atos normativos, Recursos, Exclusiva)",
            tags: ["hierárquico", "delegação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-5",
            frente: "O que é o ciclo de polícia?",
            verso:
              "**OCFS - Ciclo de Polícia:**\n\n1. **O**rdem: legislação (lei)\n2. **C**onsentimento: licenças, autorizações\n3. **F**iscalização: inspeções, vistorias\n4. **S**anção: multas, interdições\n\n**Delegáveis:** consentimento e fiscalização\n**Indelegáveis:** ordem e sanção",
            tags: ["polícia", "ciclo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-6",
            frente: "Qual a diferença entre regulamento executivo e autônomo?",
            verso:
              "**EXECUTIVO (regra):**\n- Art. 84, IV, CF\n- Complementa a lei\n- NÃO inova\n\n**AUTÔNOMO (exceção):**\n- Art. 84, VI, CF\n- Independe de lei\n- Apenas organização administrativa sem aumento de despesa\n\nExecutivo é a REGRA!",
            tags: ["regulamentar", "tipos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-7",
            frente: "O que é EXCESSO de poder?",
            verso:
              "**EXCESSO DE PODER:**\n\nO agente vai ALÉM dos limites de sua competência.\n\n**Exemplo:**\nFiscal autorizado apenas a aplicar multa INTERDITA o estabelecimento.\n\n→ Vício de COMPETÊNCIA\n→ Ato NULO",
            tags: ["abuso", "excesso"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-8",
            frente: "O que é DESVIO de poder?",
            verso:
              "**DESVIO DE PODER (ou finalidade):**\n\nO agente usa a competência para FIM DIVERSO do previsto em lei.\n\n**Exemplo:**\nFiscal interdita concorrente do primo para beneficiá-lo.\n\n→ Vício de FINALIDADE\n→ Ato NULO\n→ Comprovação: difícil (intenção oculta)",
            tags: ["abuso", "desvio"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-9",
            frente: "O poder disciplinar é vinculado ou discricionário?",
            verso:
              "**NATUREZA MISTA:**\n\n**VINCULADO quanto a:**\n- Dever de apurar infração\n- Instaurar processo\n- Punir (havendo infração)\n\n**DISCRICIONÁRIO quanto a:**\n- Escolha da penalidade\n- Dosimetria da pena\n\nDEVE punir, mas ESCOLHE como.",
            tags: ["disciplinar", "natureza"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-5-10",
            frente: "Por que a cobrança de multa NÃO é autoexecutável?",
            verso:
              "**MULTA - Autoexecutoriedade parcial:**\n\n**APLICAR a multa:** SIM, autoexecutável\n(O Estado pode lavrar auto de infração sem ordem judicial)\n\n**COBRAR a multa:** NÃO autoexecutável\n(O Estado precisa de EXECUÇÃO FISCAL para tirar o dinheiro)\n\nAplicar ≠ Cobrar",
            tags: ["multa", "autoexecutoriedade"],
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
            id: "da-q-5-1",
            enunciado: "São poderes administrativos, EXCETO:",
            alternativas: [
              { letra: "A", texto: "Poder hierárquico." },
              { letra: "B", texto: "Poder disciplinar." },
              { letra: "C", texto: "Poder legislativo." },
              { letra: "D", texto: "Poder regulamentar." },
              { letra: "E", texto: "Poder de polícia." },
            ],
            gabarito: "C",
            justificativa:
              "O poder legislativo é um dos PODERES DO ESTADO (junto com Executivo e Judiciário), não um poder administrativo. Os poderes administrativos são: hierárquico, disciplinar, regulamentar e de polícia.",
            dificuldade: "Fácil",
            competencia: "Poderes administrativos",
            banca: "IADES",
            tags: ["poderes", "classificação"],
          },
          {
            id: "da-q-5-2",
            enunciado: "São atributos do poder de polícia:",
            alternativas: [
              { letra: "A", texto: "Legalidade, impessoalidade e moralidade." },
              {
                letra: "B",
                texto:
                  "Presunção de legitimidade, imperatividade e tipicidade.",
              },
              {
                letra: "C",
                texto:
                  "Discricionariedade, autoexecutoriedade e coercibilidade.",
              },
              {
                letra: "D",
                texto: "Universalidade, integralidade e equidade.",
              },
              {
                letra: "E",
                texto: "Supremacia, indisponibilidade e autotutela.",
              },
            ],
            gabarito: "C",
            justificativa:
              "Os atributos do poder de polícia são: Discricionariedade, Autoexecutoriedade e Coercibilidade (DAC). As demais alternativas trazem princípios ou atributos de outras categorias.",
            dificuldade: "Fácil",
            competencia: "Poder de polícia",
            banca: "IADES",
            tags: ["polícia", "atributos"],
          },
          {
            id: "da-q-5-3",
            enunciado:
              "Quanto à cobrança de multa aplicada no exercício do poder de polícia, é correto afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "É autoexecutável, podendo a Administração executá-la diretamente.",
              },
              {
                letra: "B",
                texto: "Não é autoexecutável, dependendo de execução fiscal.",
              },
              {
                letra: "C",
                texto:
                  "Dispensa qualquer procedimento, podendo ser descontada diretamente.",
              },
              {
                letra: "D",
                texto: "Pode ser executada pelo Ministério Público.",
              },
              {
                letra: "E",
                texto: "Não pode ser cobrada da Administração Pública.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A APLICAÇÃO da multa é autoexecutável, mas a COBRANÇA não é. A Administração não pode, por conta própria, retirar o valor da conta do particular. É necessária a execução fiscal judicial.",
            dificuldade: "Média",
            competencia: "Autoexecutoriedade",
            banca: "IADES",
            tags: ["multa", "cobrança"],
          },
          {
            id: "da-q-5-4",
            enunciado: "O poder disciplinar difere do poder de polícia porque:",
            alternativas: [
              {
                letra: "A",
                texto: "O poder disciplinar alcança toda a coletividade.",
              },
              {
                letra: "B",
                texto: "O poder de polícia alcança apenas servidores públicos.",
              },
              {
                letra: "C",
                texto:
                  "O poder disciplinar alcança pessoas com vínculo especial com a Administração.",
              },
              {
                letra: "D",
                texto:
                  "Ambos são idênticos, apenas com nomenclaturas diferentes.",
              },
              {
                letra: "E",
                texto:
                  "O poder de polícia só pode ser exercido sobre pessoas físicas.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O poder DISCIPLINAR alcança pessoas com VÍNCULO especial (servidores, contratados). O poder de POLÍCIA alcança a COLETIVIDADE em geral (todos os administrados).",
            dificuldade: "Fácil",
            competencia: "Disciplinar x Polícia",
            banca: "IADES",
            tags: ["disciplinar", "polícia"],
          },
          {
            id: "da-q-5-5",
            enunciado:
              "De acordo com a Lei 9.784/99, NÃO podem ser objeto de delegação:",
            alternativas: [
              { letra: "A", texto: "Atos de mero expediente." },
              { letra: "B", texto: "A edição de atos de caráter normativo." },
              { letra: "C", texto: "Atos de gestão administrativa." },
              {
                letra: "D",
                texto: "Atos vinculados de competência concorrente.",
              },
              {
                letra: "E",
                texto: "Atos discricionários de competência comum.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A Lei 9.784/99, art. 13, veda a delegação de: I - edição de atos de caráter normativo; II - decisão de recursos administrativos; III - matérias de competência exclusiva do órgão ou autoridade.",
            dificuldade: "Média",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["hierárquico", "delegação"],
          },
          {
            id: "da-q-5-6",
            enunciado:
              "O regulamento executivo, emanado do Poder Executivo, caracteriza-se por:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Poder criar direitos e obrigações independentemente de lei.",
              },
              {
                letra: "B",
                texto:
                  "Complementar a lei, possibilitando sua fiel execução, sem inovar na ordem jurídica.",
              },
              { letra: "C", texto: "Substituir a lei em casos de urgência." },
              {
                letra: "D",
                texto: "Revogar dispositivos legais incompatíveis.",
              },
              { letra: "E", texto: "Ter força de lei complementar." },
            ],
            gabarito: "B",
            justificativa:
              "O regulamento EXECUTIVO (art. 84, IV, CF) complementa a lei para sua fiel execução, NÃO podendo inovar na ordem jurídica, criar direitos ou obrigações novos. Quem cria é a LEI.",
            dificuldade: "Fácil",
            competencia: "Poder regulamentar",
            banca: "IADES",
            tags: ["regulamentar", "executivo"],
          },
          {
            id: "da-q-5-7",
            enunciado:
              "O abuso de poder na modalidade de EXCESSO de poder ocorre quando:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "O agente pratica ato visando finalidade diversa da prevista em lei.",
              },
              {
                letra: "B",
                texto: "O agente atua além dos limites de sua competência.",
              },
              {
                letra: "C",
                texto: "O agente deixa de praticar ato obrigatório.",
              },
              { letra: "D", texto: "O agente pratica ato sem motivação." },
              {
                letra: "E",
                texto:
                  "O agente pratica ato contra disposição expressa de lei.",
              },
            ],
            gabarito: "B",
            justificativa:
              "EXCESSO de poder ocorre quando o agente vai ALÉM dos limites de sua competência. DESVIO de poder (letra A) é quando usa a competência para fim diverso do previsto em lei.",
            dificuldade: "Fácil",
            competencia: "Abuso de poder",
            banca: "IADES",
            tags: ["excesso", "abuso"],
          },
          {
            id: "da-q-5-8",
            enunciado:
              "No ciclo de polícia, a fase que compreende a expedição de licenças e autorizações é denominada:",
            alternativas: [
              { letra: "A", texto: "Ordem." },
              { letra: "B", texto: "Consentimento." },
              { letra: "C", texto: "Fiscalização." },
              { letra: "D", texto: "Sanção." },
              { letra: "E", texto: "Regulamentação." },
            ],
            gabarito: "B",
            justificativa:
              "O ciclo de polícia compreende: Ordem (legislação), CONSENTIMENTO (licenças e autorizações), Fiscalização (verificação) e Sanção (penalidades). Licenças e autorizações são fase de consentimento.",
            dificuldade: "Média",
            competencia: "Ciclo de polícia",
            banca: "IADES",
            tags: ["polícia", "ciclo"],
          },
          {
            id: "da-q-5-9",
            enunciado:
              "A interdição de estabelecimento pela vigilância sanitária, sem prévia autorização judicial, é possível em razão do atributo:",
            alternativas: [
              { letra: "A", texto: "Da discricionariedade." },
              { letra: "B", texto: "Da autoexecutoriedade." },
              { letra: "C", texto: "Da tipicidade." },
              { letra: "D", texto: "Da presunção de legitimidade." },
              { letra: "E", texto: "Da imperatividade." },
            ],
            gabarito: "B",
            justificativa:
              "A AUTOEXECUTORIEDADE permite que a Administração execute suas decisões sem prévia autorização judicial. A interdição de estabelecimento é ato autoexecutável do poder de polícia sanitária.",
            dificuldade: "Fácil",
            competencia: "Autoexecutoriedade",
            banca: "IADES",
            tags: ["autoexecutoriedade", "interdição"],
          },
          {
            id: "da-q-5-10",
            enunciado:
              "O fiscal sanitário interdita um restaurante pertencente a desafeto pessoal, sem que houvesse irregularidade sanitária. Esse ato configura:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Excesso de poder, por ultrapassar os limites da competência.",
              },
              {
                letra: "B",
                texto:
                  "Ato válido, se o fiscal tinha competência para interditar.",
              },
              {
                letra: "C",
                texto:
                  "Desvio de poder, por utilizar a competência para fim diverso.",
              },
              { letra: "D", texto: "Mera irregularidade sanável." },
              { letra: "E", texto: "Ato discricionário legítimo." },
            ],
            gabarito: "C",
            justificativa:
              "O DESVIO de poder (ou de finalidade) ocorre quando o agente usa sua competência para fim DIVERSO do previsto em lei. No caso, o fiscal usou a interdição para prejudicar desafeto, não para proteger a saúde pública.",
            dificuldade: "Média",
            competencia: "Desvio de poder",
            banca: "IADES",
            tags: ["desvio", "finalidade"],
          },
        ],
      },
    },
    {
      id: "da-topico-6",
      numero: 6,
      titulo:
        "Regime jurídico-administrativo: conceito e princípios expressos e implícitos",
      conteudo: {
        resumo: `
## Resumo Rápido

O **Regime Jurídico-Administrativo** é o conjunto de normas e princípios que regem a atuação da Administração Pública, conferindo-lhe **prerrogativas** (poderes especiais) e **sujeições** (limitações) não existentes nas relações privadas.

### Pilares do Regime Jurídico-Administrativo

| Pilar | Significado | Consequência |
|-------|-------------|--------------|
| **SUPREMACIA do Interesse Público** | O interesse coletivo prevalece sobre o particular | Prerrogativas (poderes especiais) |
| **INDISPONIBILIDADE do Interesse Público** | O agente não pode abrir mão do interesse público | Sujeições (limitações) |

### Princípios Expressos (Art. 37, CF - LIMPE)

| Letra | Princípio | Essência |
|-------|-----------|----------|
| **L** | Legalidade | Só pode fazer o que a lei autoriza |
| **I** | Impessoalidade | Sem favorecimentos ou perseguições |
| **M** | Moralidade | Ética, probidade, boa-fé |
| **P** | Publicidade | Transparência dos atos |
| **E** | Eficiência | Resultados com qualidade |

### Princípios Implícitos (Reconhecidos)

- Supremacia do Interesse Público
- Indisponibilidade do Interesse Público
- Razoabilidade e Proporcionalidade
- Autotutela
- Continuidade do Serviço Público
- Segurança Jurídica / Confiança Legítima
- Motivação
        `,

        explicacao: `
## Explicação Didática

### 1. CONCEITO DE REGIME JURÍDICO-ADMINISTRATIVO

O **Regime Jurídico-Administrativo** é o sistema de princípios e normas que disciplina a atuação da Administração Pública, estabelecendo um conjunto de **prerrogativas** e **sujeições** que a diferencia das relações jurídicas privadas.

#### 1.1 Características Fundamentais

| Aspecto | No Direito Privado | No Direito Administrativo |
|---------|-------------------|---------------------------|
| **Relação** | Igualdade entre partes | Verticalidade (Estado superior) |
| **Vontade** | Autonomia da vontade | Vinculação à lei |
| **Interesse** | Particular | Público |
| **Bens** | Disponíveis | Indisponíveis |

#### 1.2 Os Dois Pilares

##### SUPREMACIA DO INTERESSE PÚBLICO
- O interesse da **coletividade** prevalece sobre interesses particulares
- Fundamenta as **prerrogativas** da Administração
- Exemplos: desapropriação, requisição, poder de polícia, cláusulas exorbitantes

##### INDISPONIBILIDADE DO INTERESSE PÚBLICO
- O administrador **não é dono** do interesse público
- Fundamenta as **sujeições** da Administração
- Exemplos: obrigatoriedade de licitação, concurso público, prestação de contas

#### 1.3 Prerrogativas vs. Sujeições

| PRERROGATIVAS (Poderes) | SUJEIÇÕES (Limitações) |
|-------------------------|------------------------|
| Presunção de legitimidade | Legalidade estrita |
| Autoexecutoriedade | Motivação obrigatória |
| Imperatividade | Finalidade pública |
| Cláusulas exorbitantes | Licitação obrigatória |
| Poder de polícia | Concurso público |
| Desapropriação | Controle judicial |

### 2. PRINCÍPIOS EXPRESSOS (Art. 37, caput, CF/88)

O art. 37 da Constituição Federal estabelece:

> "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de **legalidade, impessoalidade, moralidade, publicidade e eficiência**..."

#### 2.1 LEGALIDADE

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | A Administração só pode fazer o que a lei AUTORIZA |
| **Diferença do particular** | Particular: pode tudo que a lei não proíbe |
| **Fundamento** | Estado de Direito, submissão à lei |
| **Consequência** | Atos sem base legal são NULOS |

**Duas faces da legalidade:**
- **Reserva legal**: certas matérias exigem lei formal
- **Legalidade administrativa**: atuação conforme a lei

⚠️ **Cuidado IADES**: A legalidade para a Administração é POSITIVA (só faz o que a lei autoriza), enquanto para o particular é NEGATIVA (pode fazer o que a lei não proíbe).

#### 2.2 IMPESSOALIDADE

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Atuação sem favorecimentos ou perseguições |
| **Finalidade** | Sempre o interesse público |
| **Vedação** | Promoção pessoal de agentes (art. 37, §1º) |
| **Aplicação** | Concurso público, licitação |

**Dimensões da impessoalidade:**
1. **Em relação aos administrados**: tratar todos igualmente
2. **Em relação à Administração**: atos são do órgão, não do agente
3. **Em relação à finalidade**: sempre o interesse público

#### 2.3 MORALIDADE

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Probidade, ética, lealdade, boa-fé |
| **Natureza** | Moralidade ADMINISTRATIVA (não apenas social) |
| **Controle** | Ação popular, improbidade administrativa |
| **Conteúdo** | Honestidade, decoro, boa-fé objetiva |

**Moralidade administrativa ≠ Moralidade comum:**
- Vai além da legalidade
- Inclui padrões éticos da boa administração
- Ato pode ser legal, mas IMORAL

#### 2.4 PUBLICIDADE

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Transparência dos atos administrativos |
| **Finalidade** | Controle social, validade de atos |
| **Instrumentos** | Diário Oficial, portais, LAI |
| **Exceções** | Segurança nacional, intimidade |

**Efeitos da publicidade:**
1. **Condição de eficácia**: atos só produzem efeitos após publicação
2. **Início de prazos**: prescrição, recursos
3. **Controle social**: fiscalização pelos cidadãos

#### 2.5 EFICIÊNCIA (EC 19/98)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Otimização de resultados com qualidade |
| **Inclusão** | EC 19/1998 (Reforma Administrativa) |
| **Dimensões** | Economicidade, celeridade, qualidade |
| **Modelo** | Administração gerencial |

**Eficiência não se confunde com:**
- **Eficácia**: atingir o resultado (sem considerar meios)
- **Efetividade**: impacto real na sociedade

### 3. PRINCÍPIOS IMPLÍCITOS (Reconhecidos)

#### 3.1 SUPREMACIA DO INTERESSE PÚBLICO

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Interesse coletivo > interesse particular |
| **Fundamento** | Finalidade do Estado |
| **Manifestações** | Desapropriação, requisição, poder de polícia |
| **Limite** | Direitos fundamentais, proporcionalidade |

⚠️ **Não é absoluto**: deve respeitar direitos fundamentais e a proporcionalidade.

#### 3.2 INDISPONIBILIDADE DO INTERESSE PÚBLICO

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | O interesse público não pertence ao agente |
| **Consequência** | Não pode renunciar, transigir ou dispor |
| **Manifestações** | Licitação, concurso, prestação de contas |
| **Exceção** | Lei pode autorizar acordo em casos específicos |

#### 3.3 RAZOABILIDADE E PROPORCIONALIDADE

| Princípio | Significado | Aplicação |
|-----------|-------------|-----------|
| **Razoabilidade** | Adequação entre meios e fins | O ato deve ser adequado |
| **Proporcionalidade** | Equilíbrio entre ato e resultado | Não pode haver excesso |

**Subprincípios da proporcionalidade:**
1. **Adequação**: o meio escolhido é apto a atingir o fim?
2. **Necessidade**: é o meio menos gravoso?
3. **Proporcionalidade em sentido estrito**: o benefício supera o ônus?

#### 3.4 AUTOTUTELA

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Poder de rever os próprios atos |
| **Fundamento** | Súmula 473 do STF |
| **Formas** | Anulação (ilegais), Revogação (inconvenientes) |
| **Limite** | Direito adquirido, decadência |

**Súmula 473, STF:**
> "A Administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial."

| Anulação | Revogação |
|----------|-----------|
| Atos ILEGAIS | Atos INCONVENIENTES |
| Efeitos EX TUNC (retroage) | Efeitos EX NUNC (não retroage) |
| Pode: Administração ou Judiciário | Só: Administração |
| Vício de legalidade | Mérito administrativo |

#### 3.5 CONTINUIDADE DO SERVIÇO PÚBLICO

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Serviços essenciais não podem parar |
| **Fundamento** | Interesse público |
| **Consequências** | Limite ao direito de greve, substituição |
| **Exceção** | Inadimplemento do usuário (com aviso) |

#### 3.6 SEGURANÇA JURÍDICA / CONFIANÇA LEGÍTIMA

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Proteção da estabilidade das relações |
| **Dimensão objetiva** | Irretroatividade de nova interpretação |
| **Dimensão subjetiva** | Proteção da confiança do administrado |
| **Aplicação** | Decadência do direito de anular (5 anos) |

**Lei 9.784/99, art. 54:**
> O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em **cinco anos**, contados da data em que foram praticados...

#### 3.7 MOTIVAÇÃO

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Explicitar os motivos do ato |
| **Previsão** | Lei 9.784/99, art. 50 |
| **Quando obrigatória** | Atos vinculados e discricionários (regra) |
| **Exceção** | Exoneração ad nutum de cargo comissionado |

**Teoria dos Motivos Determinantes:**
- Se o administrador declara os motivos, fica vinculado a eles
- Motivos falsos ou inexistentes = NULIDADE do ato

### 4. PRINCÍPIOS NA VIGILÂNCIA SANITÁRIA

| Princípio | Aplicação na VISA |
|-----------|-------------------|
| **Legalidade** | Fiscalização conforme lei; infrações tipificadas |
| **Impessoalidade** | Fiscalizar todos igualmente |
| **Moralidade** | Não aceitar vantagens; agir com probidade |
| **Publicidade** | Divulgar autos de infração, interdições |
| **Eficiência** | Atender demandas com qualidade e celeridade |
| **Supremacia** | Interditar para proteger a saúde coletiva |
| **Proporcionalidade** | Penalidade adequada à gravidade da infração |
| **Motivação** | Fundamentar autos de infração |
| **Autotutela** | Rever atos administrativos viciados |
| **Continuidade** | Manter fiscalização mesmo em greve |
        `,

        pontosChave: [
          "Regime jurídico-administrativo = prerrogativas + sujeições (diferente do direito privado)",
          "Dois pilares: SUPREMACIA do interesse público (prerrogativas) e INDISPONIBILIDADE (sujeições)",
          "LIMPE = princípios expressos (art. 37, CF): Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência",
          "Legalidade: Administração só faz o que a lei AUTORIZA (diferente do particular)",
          "Eficiência foi incluída pela EC 19/1998 (Reforma Administrativa)",
          "Autotutela: Administração pode ANULAR (ilegais) ou REVOGAR (inconvenientes) seus atos - Súmula 473 STF",
          "Anulação = ex tunc (retroage); Revogação = ex nunc (não retroage)",
          "Proporcionalidade: adequação, necessidade e proporcionalidade em sentido estrito",
          "Segurança jurídica: decadência de 5 anos para anular atos favoráveis (Lei 9.784/99, art. 54)",
          "Teoria dos Motivos Determinantes: motivos declarados vinculam; se falsos = nulidade",
        ],

        armadilhas: [
          {
            titulo: "Legalidade: Administração ≠ Particular",
            descricao:
              "A legalidade para a Administração é POSITIVA (só faz o que a lei autoriza). Para o particular é NEGATIVA (pode fazer o que não é proibido).",
            dica: "Particular: pode tudo que a lei não proíbe. Estado: só pode o que a lei autoriza.",
          },
          {
            titulo: "Confundir Anulação com Revogação",
            descricao:
              "Anulação = atos ILEGAIS (ex tunc, retroage). Revogação = atos INCONVENIENTES (ex nunc, não retroage).",
            dica: "A-nulação = vícios. Re-vogação = re-pensar conveniência.",
          },
          {
            titulo: "Achar que eficiência sempre existiu na CF",
            descricao:
              "O princípio da eficiência foi incluído pela EC 19/1998 (Reforma Administrativa). Não estava no texto original de 1988.",
            dica: "LIMP era o original (1988). LIMPE veio com a EC 19/1998.",
          },
          {
            titulo: "Esquecer os limites da supremacia",
            descricao:
              "A supremacia do interesse público NÃO é absoluta. Deve respeitar direitos fundamentais e a proporcionalidade.",
            dica: "Supremacia tem limites: direitos fundamentais e proporcionalidade.",
          },
          {
            titulo: "Confundir eficiência com eficácia",
            descricao:
              "Eficiência = meios (fazer bem, com economia). Eficácia = fins (atingir o resultado).",
            dica: "Eficiência: COMO faz. Eficácia: SE consegue o resultado.",
          },
        ],

        mnemonicos: [
          {
            termo: "LIMPE",
            significado:
              "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência",
            frase:
              "A Administração deve ser LIMPE: art. 37, CF (princípios expressos)",
          },
          {
            termo: "SI-IN",
            significado: "Supremacia do Interesse público + Indisponibilidade",
            frase:
              "SI-IN são os dois pilares: Supremacia = prerrogativas; Indisponibilidade = sujeições.",
          },
          {
            termo: "ANE-REX",
            significado: "Anulação = Ex tunc; Revogação = Ex nunc",
            frase:
              "ANE retroage (ex tunc). REX não retroage (ex nunc). A de Anula = A de Atrás.",
          },
          {
            termo: "ANN",
            significado: "Adequação, Necessidade, proporcioNalidade",
            frase: "ANN = os 3 subprincípios da proporcionalidade.",
          },
          {
            termo: "5-ANOS",
            significado: "Decadência para anular atos favoráveis",
            frase:
              "Lei 9.784: 5 anos para Administração anular atos favoráveis de boa-fé.",
          },
        ],

        flashcards: [
          {
            id: "da-fc-6-1",
            frente:
              "Quais são os dois PILARES do Regime Jurídico-Administrativo?",
            verso:
              "**1. SUPREMACIA DO INTERESSE PÚBLICO**\n• Interesse coletivo > particular\n• Gera PRERROGATIVAS (poderes especiais)\n• Ex: desapropriação, poder de polícia\n\n**2. INDISPONIBILIDADE DO INTERESSE PÚBLICO**\n• Administrador não é dono do interesse público\n• Gera SUJEIÇÕES (limitações)\n• Ex: licitação, concurso público",
            tags: ["regime", "pilares"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-2",
            frente:
              "Quais são os princípios EXPRESSOS da Administração Pública (art. 37, CF)?",
            verso:
              "**LIMPE**\n\n• **L**egalidade - só faz o que a lei autoriza\n• **I**mpessoalidade - sem favorecimentos\n• **M**oralidade - ética, probidade\n• **P**ublicidade - transparência\n• **E**ficiência - resultados com qualidade\n\n⚠️ Eficiência foi incluída pela EC 19/1998!",
            tags: ["princípios", "LIMPE"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-3",
            frente:
              "Qual a diferença entre legalidade para a Administração e para o particular?",
            verso:
              '**ADMINISTRAÇÃO:**\n• Legalidade POSITIVA\n• Só pode fazer o que a lei AUTORIZA\n• "Não há liberdade além da lei"\n\n**PARTICULAR:**\n• Legalidade NEGATIVA\n• Pode fazer tudo que a lei NÃO PROÍBE\n• Autonomia da vontade\n\nDica: O Estado é "servo da lei".',
            tags: ["legalidade", "diferença"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-4",
            frente:
              "Qual a diferença entre ANULAÇÃO e REVOGAÇÃO de atos administrativos?",
            verso:
              "| | ANULAÇÃO | REVOGAÇÃO |\n|--|----------|----------|\n| **Motivo** | Ato ILEGAL | Ato INCONVENIENTE |\n| **Efeitos** | Ex TUNC (retroage) | Ex NUNC (não retroage) |\n| **Quem pode** | Adm. ou Judiciário | Só Administração |\n| **Análise** | Legalidade | Mérito |\n\n**Súmula 473, STF** = autotutela",
            tags: ["autotutela", "anulação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-5",
            frente: "Quais são os três subprincípios da PROPORCIONALIDADE?",
            verso:
              "**PROPORCIONALIDADE = ANN**\n\n1. **A**dequação\n   O meio é APTO a atingir o fim?\n\n2. **N**ecessidade\n   É o meio MENOS GRAVOSO possível?\n\n3. Proporcionalidade em sentido estrito (balanceamento)\n   O BENEFÍCIO supera o ÔNUS?\n\nSe falhar em qualquer, o ato é desproporcional.",
            tags: ["proporcionalidade", "controle"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-6",
            frente: "O que estabelece a Súmula 473 do STF?",
            verso:
              '**SÚMULA 473 - STF (Autotutela)**\n\nA Administração PODE:\n\n• **ANULAR** seus atos ilegais\n  (não geram direitos)\n\n• **REVOGAR** seus atos inconvenientes\n  (respeitados direitos adquiridos)\n\nEm ambos os casos, cabe apreciação JUDICIAL.\n\n"A Administração controla seus próprios atos."',
            tags: ["autotutela", "STF"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-7",
            frente:
              "Qual o prazo de DECADÊNCIA para a Administração anular atos favoráveis ao administrado de boa-fé?",
            verso:
              '**DECADÊNCIA: 5 ANOS**\n\n**Lei 9.784/99, art. 54:**\n"O direito da Administração de anular os atos (...) de que decorram efeitos FAVORÁVEIS para os destinatários decai em **5 anos**..."\n\n**Requisitos:**\n• Ato favorável ao administrado\n• Administrado de BOA-FÉ\n• 5 anos sem anulação\n\n⚠️ Má-fé: não há decadência.',
            tags: ["decadência", "segurança"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-8",
            frente: "O que é a Teoria dos Motivos Determinantes?",
            verso:
              "**TEORIA DOS MOTIVOS DETERMINANTES**\n\nSe o administrador DECLARA os motivos do ato, fica VINCULADO a eles.\n\n**Consequência:**\n• Motivos FALSOS → nulidade\n• Motivos INEXISTENTES → nulidade\n\n**Exemplo:**\nSe demite servidor alegando falta grave que não existiu, o ato é NULO.\n\nVale mesmo para atos que não exigiam motivação.",
            tags: ["motivação", "vinculação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-9",
            frente:
              "Qual princípio foi incluído pela EC 19/1998 (Reforma Administrativa)?",
            verso:
              "**EFICIÊNCIA**\n\nA EC 19/1998 (Reforma Administrativa) incluiu o princípio da EFICIÊNCIA no art. 37, CF.\n\n**Antes:** LIMP (1988)\n**Depois:** LIMPE (1998)\n\n**Eficiência significa:**\n• Otimização de resultados\n• Qualidade + economia\n• Modelo gerencial\n\nNão confundir com eficácia (atingir resultado) ou efetividade (impacto).",
            tags: ["eficiência", "EC19"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-6-10",
            frente:
              "O que significa dizer que a supremacia do interesse público NÃO é absoluta?",
            verso:
              "**LIMITES DA SUPREMACIA:**\n\n1. **DIREITOS FUNDAMENTAIS**\n   Não pode violar direitos individuais essenciais\n\n2. **PROPORCIONALIDADE**\n   Medidas devem ser proporcionais\n\n3. **DEVIDO PROCESSO LEGAL**\n   Procedimento adequado, ampla defesa\n\n**Exemplo:**\nPode desapropriar, mas deve indenizar.\nPode interditar, mas não arbitrariamente.",
            tags: ["supremacia", "limites"],
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
            id: "da-q-6-1",
            enunciado:
              "Os dois pilares fundamentais do regime jurídico-administrativo são:",
            alternativas: [
              { letra: "A", texto: "Legalidade e publicidade." },
              {
                letra: "B",
                texto: "Supremacia e indisponibilidade do interesse público.",
              },
              { letra: "C", texto: "Moralidade e eficiência." },
              { letra: "D", texto: "Hierarquia e disciplina." },
              { letra: "E", texto: "Impessoalidade e continuidade." },
            ],
            gabarito: "B",
            justificativa:
              "Os dois pilares do regime jurídico-administrativo são a SUPREMACIA DO INTERESSE PÚBLICO (que gera prerrogativas) e a INDISPONIBILIDADE DO INTERESSE PÚBLICO (que gera sujeições).",
            dificuldade: "Fácil",
            competencia: "Regime jurídico-administrativo",
            banca: "IADES",
            tags: ["pilares", "conceito"],
          },
          {
            id: "da-q-6-2",
            enunciado:
              "Os princípios expressos da Administração Pública, previstos no art. 37, caput, da Constituição Federal, são representados pela sigla:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.",
              },
              {
                letra: "B",
                texto:
                  "LIAMP: legalidade, imparcialidade, acessibilidade, moralidade e presteza.",
              },
              {
                letra: "C",
                texto:
                  "PRIME: proporcionalidade, razoabilidade, impessoalidade, moralidade e efetividade.",
              },
              {
                letra: "D",
                texto:
                  "SALME: supremacia, autotutela, legalidade, moralidade e eficiência.",
              },
              {
                letra: "E",
                texto:
                  "CILME: continuidade, impessoalidade, legalidade, moralidade e efetividade.",
              },
            ],
            gabarito: "A",
            justificativa:
              "O art. 37, caput, CF/88, estabelece expressamente os princípios LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Os demais princípios citados nas alternativas são implícitos ou inventados.",
            dificuldade: "Fácil",
            competencia: "Princípios expressos",
            banca: "IADES",
            tags: ["LIMPE", "art. 37"],
          },
          {
            id: "da-q-6-3",
            enunciado:
              "Quanto ao princípio da legalidade aplicável à Administração Pública, é correto afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "A Administração pode fazer tudo o que a lei não proíbe expressamente.",
              },
              {
                letra: "B",
                texto:
                  "A Administração só pode fazer o que a lei expressamente autoriza.",
              },
              {
                letra: "C",
                texto:
                  "A legalidade para a Administração é idêntica à do particular.",
              },
              {
                letra: "D",
                texto:
                  "A Administração pode agir livremente em casos de omissão legal.",
              },
              {
                letra: "E",
                texto: "O princípio da legalidade foi revogado pela EC 19/98.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Para a Administração Pública, a legalidade é POSITIVA: só pode fazer o que a lei AUTORIZA. Diferente do particular, que pode fazer tudo que a lei não proíbe (legalidade negativa).",
            dificuldade: "Fácil",
            competencia: "Legalidade",
            banca: "IADES",
            tags: ["legalidade", "positiva"],
          },
          {
            id: "da-q-6-4",
            enunciado:
              "O princípio da eficiência foi incluído no texto constitucional por meio:",
            alternativas: [
              { letra: "A", texto: "Da Constituição original de 1988." },
              { letra: "B", texto: "Da Emenda Constitucional nº 19/1998." },
              { letra: "C", texto: "Da Emenda Constitucional nº 45/2004." },
              { letra: "D", texto: "Da Lei nº 9.784/1999." },
              { letra: "E", texto: "Da Emenda Constitucional nº 20/1998." },
            ],
            gabarito: "B",
            justificativa:
              "O princípio da EFICIÊNCIA foi incluído no art. 37, CF, pela EC 19/1998 (Reforma Administrativa). No texto original de 1988, constavam apenas LIMP (legalidade, impessoalidade, moralidade e publicidade).",
            dificuldade: "Fácil",
            competencia: "Eficiência",
            banca: "IADES",
            tags: ["eficiência", "EC 19"],
          },
          {
            id: "da-q-6-5",
            enunciado: "Segundo a Súmula 473 do STF, a Administração pode:",
            alternativas: [
              {
                letra: "A",
                texto: "Apenas revogar seus atos por motivo de conveniência.",
              },
              {
                letra: "B",
                texto:
                  "Anular seus atos ilegais e revogar os inconvenientes, ressalvada a apreciação judicial.",
              },
              {
                letra: "C",
                texto: "Somente anular atos mediante decisão judicial.",
              },
              {
                letra: "D",
                texto: "Revogar atos ilegais com efeitos retroativos.",
              },
              {
                letra: "E",
                texto:
                  "Anular atos de outros poderes independentemente de processo.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A Súmula 473 do STF consagra a AUTOTUTELA: a Administração pode ANULAR atos ilegais (porque não geram direitos) e REVOGAR atos por conveniência/oportunidade (respeitados direitos adquiridos), ressalvada a apreciação judicial.",
            dificuldade: "Média",
            competencia: "Autotutela",
            banca: "IADES",
            tags: ["Súmula 473", "autotutela"],
          },
          {
            id: "da-q-6-6",
            enunciado:
              "A anulação de ato administrativo ilegal produz efeitos:",
            alternativas: [
              { letra: "A", texto: "Ex nunc, ou seja, não retroativos." },
              { letra: "B", texto: "Ex tunc, ou seja, retroativos." },
              {
                letra: "C",
                texto:
                  "Apenas para o futuro, preservando todos os efeitos já produzidos.",
              },
              { letra: "D", texto: "Prospectivos, a partir da publicação." },
              { letra: "E", texto: "Condicionados à decisão judicial." },
            ],
            gabarito: "B",
            justificativa:
              "A ANULAÇÃO de atos ilegais produz efeitos EX TUNC, ou seja, retroativos à data do ato, como se ele nunca tivesse existido. Já a REVOGAÇÃO produz efeitos EX NUNC (não retroage).",
            dificuldade: "Fácil",
            competencia: "Efeitos da anulação",
            banca: "IADES",
            tags: ["anulação", "ex tunc"],
          },
          {
            id: "da-q-6-7",
            enunciado:
              "O prazo decadencial para a Administração anular atos administrativos de que decorram efeitos favoráveis ao destinatário de boa-fé é de:",
            alternativas: [
              { letra: "A", texto: "2 anos." },
              { letra: "B", texto: "3 anos." },
              { letra: "C", texto: "5 anos." },
              { letra: "D", texto: "10 anos." },
              { letra: "E", texto: "Não há prazo decadencial." },
            ],
            gabarito: "C",
            justificativa:
              "Conforme o art. 54 da Lei 9.784/99, o direito da Administração de anular atos de que decorram efeitos FAVORÁVEIS ao destinatário decai em 5 ANOS, contados da prática do ato, salvo comprovada má-fé.",
            dificuldade: "Fácil",
            competencia: "Decadência",
            banca: "IADES",
            tags: ["5 anos", "Lei 9.784"],
          },
          {
            id: "da-q-6-8",
            enunciado: "De acordo com a Teoria dos Motivos Determinantes:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "Os motivos declarados pelo administrador não vinculam o ato.",
              },
              {
                letra: "B",
                texto:
                  "Os motivos podem ser alterados livremente após a prática do ato.",
              },
              {
                letra: "C",
                texto:
                  "Se os motivos declarados forem falsos ou inexistentes, o ato é nulo.",
              },
              {
                letra: "D",
                texto:
                  "A motivação é dispensável em todos os atos administrativos.",
              },
              { letra: "E", texto: "Apenas atos vinculados exigem motivação." },
            ],
            gabarito: "C",
            justificativa:
              "A Teoria dos Motivos Determinantes estabelece que, uma vez declarados os motivos, o administrador fica VINCULADO a eles. Se os motivos forem falsos ou inexistentes, o ato será NULO.",
            dificuldade: "Média",
            competencia: "Motivação",
            banca: "IADES",
            tags: ["motivos", "vinculação"],
          },
          {
            id: "da-q-6-9",
            enunciado: "São subprincípios da proporcionalidade:",
            alternativas: [
              { letra: "A", texto: "Legalidade, moralidade e publicidade." },
              {
                letra: "B",
                texto:
                  "Adequação, necessidade e proporcionalidade em sentido estrito.",
              },
              {
                letra: "C",
                texto: "Supremacia, indisponibilidade e continuidade.",
              },
              {
                letra: "D",
                texto: "Autotutela, segurança jurídica e motivação.",
              },
              { letra: "E", texto: "Eficiência, eficácia e efetividade." },
            ],
            gabarito: "B",
            justificativa:
              "Os três subprincípios da PROPORCIONALIDADE são: ADEQUAÇÃO (o meio é apto ao fim?), NECESSIDADE (é o meio menos gravoso?) e PROPORCIONALIDADE EM SENTIDO ESTRITO (o benefício supera o ônus?).",
            dificuldade: "Média",
            competencia: "Proporcionalidade",
            banca: "IADES",
            tags: ["adequação", "necessidade"],
          },
          {
            id: "da-q-6-10",
            enunciado: "A supremacia do interesse público sobre o privado:",
            alternativas: [
              {
                letra: "A",
                texto: "É absoluta, prevalecendo em todas as situações.",
              },
              {
                letra: "B",
                texto:
                  "Autoriza a violação de direitos fundamentais em prol da coletividade.",
              },
              {
                letra: "C",
                texto:
                  "Não possui limites, podendo a Administração agir livremente.",
              },
              {
                letra: "D",
                texto:
                  "É limitada pelos direitos fundamentais e pela proporcionalidade.",
              },
              { letra: "E", texto: "Foi revogada pela Constituição de 1988." },
            ],
            gabarito: "D",
            justificativa:
              "A supremacia do interesse público NÃO é absoluta. Ela encontra LIMITES nos direitos fundamentais, na proporcionalidade e no devido processo legal. A Administração não pode violar direitos essenciais.",
            dificuldade: "Média",
            competencia: "Limites da supremacia",
            banca: "IADES",
            tags: ["supremacia", "limites"],
          },
        ],
      },
    },
    {
      id: "da-topico-7",
      numero: 7,
      titulo: "Responsabilidade Civil do Estado",
      conteudo: {
        resumo: `
## Resumo Rápido

A responsabilidade civil do Estado é a obrigação de reparar danos causados a terceiros por agentes públicos no exercício de suas funções. **Fundamento: Art. 37, §6º, CF**.

### Evolução Histórica das Teorias

| Fase | Teoria | Característica |
|------|--------|----------------|
| 1ª | **Irresponsabilidade** | "The King can do no wrong" - Estado absoluto |
| 2ª | **Responsabilidade Subjetiva** | Vítima provava culpa do agente |
| 3ª | **Risco Administrativo** | Objetiva COM excludentes (Brasil atual - regra) |
| 4ª | **Risco Integral** | Objetiva SEM excludentes (exceções) |

### Tipos de Conduta e Responsabilidade

| Tipo de Conduta | Responsabilidade | O que a vítima prova |
|-----------------|------------------|----------------------|
| **Ato Comissivo** (ação) | OBJETIVA | Dano + nexo causal (não precisa culpa) |
| **Omissão** (inação) | SUBJETIVA | Dano + nexo + culpa do serviço |

### Requisitos da Responsabilidade Objetiva

| Requisito | Descrição |
|-----------|-----------|
| **Dano** | Material ou moral sofrido pela vítima |
| **Conduta** | Ação do agente público no exercício da função |
| **Nexo causal** | Ligação direta entre conduta e dano |

### Excludentes e Atenuantes

| Tipo | Efeito | Exemplos |
|------|--------|----------|
| **Culpa EXCLUSIVA da vítima** | EXCLUI responsabilidade | Vítima causou o próprio dano |
| **Caso fortuito/força maior** | EXCLUI responsabilidade | Evento imprevisível e inevitável |
| **Fato de terceiro** | EXCLUI responsabilidade | Dano causado por terceiro, não pelo Estado |
| **Culpa CONCORRENTE** | REDUZ indenização | Vítima contribuiu, mas não foi exclusiva |

### Risco Administrativo vs Risco Integral

| Teoria | Excludentes | Aplicação |
|--------|-------------|-----------|
| **Risco Administrativo** | ADMITE | Regra geral no Brasil |
| **Risco Integral** | NÃO admite | Dano nuclear, terrorismo aéreo, dano ambiental |

### Direito de Regresso

| Aspecto | Regra |
|---------|-------|
| **Requisito** | Dolo ou culpa do agente |
| **Prescrição** | IMPRESCRITÍVEL (art. 37, §5º, CF) |
| **Fluxo** | Estado paga vítima → cobra do agente |

### Pontos-Chave para a Prova IADES:
- **Omissão = Subjetiva** (precisa provar culpa do serviço)
- Culpa **concorrente** REDUZ; culpa **exclusiva** EXCLUI
- Regresso exige **dolo ou culpa** do agente
- Empresas privadas prestadoras de serviço público = responsabilidade objetiva também
        `,

        explicacao: `A responsabilidade civil do Estado é um dos temas mais cobrados em concursos. Entenda a lógica por trás das regras.

**POR QUE O ESTADO RESPONDE OBJETIVAMENTE?**
O Estado tem muito mais poder e recursos que o cidadão. Se a vítima tivesse que provar culpa do agente (responsabilidade subjetiva), seria muito difícil conseguir indenização. Por isso, a CF adotou a teoria do RISCO ADMINISTRATIVO: quem exerce atividade que pode causar danos deve responder por eles, independentemente de culpa.

**TEORIA DO RISCO ADMINISTRATIVO vs RISCO INTEGRAL:**

RISCO ADMINISTRATIVO (regra geral):
- Responsabilidade objetiva
- ADMITE excludentes (culpa da vítima, força maior, etc.)
- O Estado pode se livrar da responsabilidade provando excludente

RISCO INTEGRAL (exceção - casos específicos):
- Também objetiva, mas NÃO admite excludentes
- Aplica-se a: dano nuclear, atentado terrorista em aeronave, dano ambiental

**ATO COMISSIVO vs OMISSÃO (muito cobrado!):**

ATO COMISSIVO (Estado AGIU e causou dano):
- Ex: viatura policial atropela pedestre
- Responsabilidade OBJETIVA: basta provar dano e nexo

OMISSÃO (Estado DEIXOU DE AGIR quando deveria):
- Ex: buraco na rua causa acidente
- Responsabilidade SUBJETIVA: vítima deve provar que o Estado foi negligente
- É a "culpa anônima do serviço" (não precisa identificar o servidor)

**COMO FUNCIONA O NEXO CAUSAL:**
O dano deve decorrer DIRETAMENTE da conduta do agente:
- Policial atira em assaltante e mata vítima → Estado responde
- Preso foge e mata alguém semanas depois → Estado NÃO responde (nexo rompido)

**EXCLUDENTES (livram o Estado):**
1. CULPA EXCLUSIVA DA VÍTIMA: vítima causou o próprio dano
2. CASO FORTUITO/FORÇA MAIOR: evento imprevisível e inevitável
3. FATO DE TERCEIRO: o dano foi causado por terceiro, não pelo Estado

**ATENUANTE (reduz indenização):**
CULPA CONCORRENTE: vítima contribuiu para o dano, mas não foi exclusiva

**DIREITO DE REGRESSO:**
O Estado paga à vítima, depois cobra do agente que causou o dano.
- Só cabe se o agente agiu com DOLO ou CULPA
- A ação regressiva é IMPRESCRITÍVEL (Constituição)`,

        pontosChave: [
          "Art. 37, §6º, CF: pessoas jurídicas de direito público e privadas prestadoras de serviço público respondem objetivamente",
          "Ato comissivo (ação): responsabilidade OBJETIVA - basta dano e nexo",
          "Omissão (inação): responsabilidade SUBJETIVA - exige culpa do serviço",
          "Teoria do Risco Administrativo: responsabilidade objetiva COM excludentes",
          "Teoria do Risco Integral: responsabilidade objetiva SEM excludentes (nuclear, terrorismo aéreo, ambiental)",
          "Excludentes: culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro",
          "Culpa concorrente: apenas reduz indenização (atenuante)",
          "Direito de regresso: Estado cobra do agente, exige dolo ou culpa, é imprescritível",
          "Requisitos: dano + conduta do agente + nexo causal",
        ],

        armadilhas: [
          {
            titulo: "Risco Administrativo vs Integral",
            descricao: "Confundir as duas teorias do risco.",
            dica: "Risco Administrativo ADMITE excludentes. Risco Integral NÃO admite.",
          },
          {
            titulo: "Omissão é objetiva?",
            descricao: "Pensar que toda responsabilidade do Estado é objetiva.",
            dica: "OMISSÃO = responsabilidade SUBJETIVA (exige prova de culpa).",
          },
          {
            titulo: "Culpa concorrente",
            descricao: "Achar que culpa concorrente exclui a responsabilidade.",
            dica: "Culpa CONCORRENTE apenas REDUZ indenização. EXCLUSIVA é que exclui.",
          },
          {
            titulo: "Regresso sem culpa",
            descricao: "Pensar que regresso independe de culpa do agente.",
            dica: "Direito de regresso exige DOLO ou CULPA do agente.",
          },
          {
            titulo: "Prescrição",
            descricao: "Confundir prescrição das ações.",
            dica: "Regresso = imprescritível. Ação da vítima = prescreve em 5 anos.",
          },
          {
            titulo: "Empresas privadas",
            descricao:
              "Esquecer que privadas prestadoras de serviço público respondem igual.",
            dica: "Empresas privadas de serviço público = responsabilidade OBJETIVA também.",
          },
        ],

        mnemonicos: [
          {
            termo: "DaNeC",
            significado: "Requisitos da responsabilidade objetiva",
            frase: "Dano + Nexo + Conduta (não precisa culpa).",
          },
          {
            termo: "CFF",
            significado: "Excludentes de responsabilidade",
            frase: "Culpa exclusiva, Força maior/fortuito, Fato de terceiro.",
          },
          {
            termo: "O-S",
            significado: "Omissão e tipo de responsabilidade",
            frase: "Omissão = Subjetiva.",
          },
          {
            termo: "DoC",
            significado: "Requisito do regresso",
            frase: "Dolo ou Culpa do agente.",
          },
          {
            termo: "NAT",
            significado: "Casos de Risco Integral",
            frase: "Nuclear, Aéreo (terrorismo), Ambiental = sem excludentes.",
          },
        ],

        flashcards: [
          {
            id: "da-fc-7-1",
            frente:
              "Qual a teoria adotada pelo Brasil para responsabilidade civil do Estado por atos COMISSIVOS?",
            verso:
              "Teoria do Risco Administrativo - responsabilidade OBJETIVA que admite excludentes",
            tags: ["risco administrativo", "objetiva"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-2",
            frente:
              "Qual tipo de responsabilidade se aplica quando o Estado causa dano por OMISSÃO?",
            verso:
              "Responsabilidade SUBJETIVA - exige prova de culpa do serviço (negligência, imperícia ou imprudência)",
            tags: ["omissão", "subjetiva"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-3",
            frente:
              "Quais são as excludentes de responsabilidade civil do Estado?",
            verso:
              "Culpa exclusiva da vítima, caso fortuito/força maior e fato de terceiro",
            tags: ["excludentes", "responsabilidade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-4",
            frente:
              "O que é necessário para o Estado exercer direito de regresso contra o agente?",
            verso: "Dolo ou culpa do agente causador do dano",
            tags: ["regresso", "dolo", "culpa"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-5",
            frente:
              "Quais os requisitos da responsabilidade objetiva do Estado?",
            verso:
              "Dano (material ou moral), conduta do agente público e nexo causal entre conduta e dano",
            tags: ["requisitos", "objetiva"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-6",
            frente: "A ação regressiva do Estado contra o agente prescreve?",
            verso:
              "NÃO - a ação regressiva é IMPRESCRITÍVEL (art. 37, §5º, CF)",
            tags: ["regresso", "prescrição"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-7",
            frente:
              "A culpa concorrente da vítima EXCLUI a responsabilidade do Estado?",
            verso:
              "NÃO - apenas REDUZ proporcionalmente a indenização. Só a culpa EXCLUSIVA da vítima exclui.",
            tags: ["culpa concorrente", "atenuante"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-7-8",
            frente: "Em quais casos se aplica a teoria do risco INTEGRAL?",
            verso:
              "Dano nuclear, atentado terrorista em aeronave e dano ambiental (não admitem excludentes)",
            tags: ["risco integral", "nuclear"],
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
            id: "da-q-7-1",
            enunciado:
              "Segundo a Constituição Federal, a responsabilidade civil do Estado por atos comissivos de seus agentes é:",
            alternativas: [
              { letra: "A", texto: "subjetiva, exigindo prova de dolo." },
              { letra: "B", texto: "subjetiva, exigindo prova de culpa." },
              {
                letra: "C",
                texto: "objetiva, na modalidade risco administrativo.",
              },
              { letra: "D", texto: "objetiva, na modalidade risco integral." },
              {
                letra: "E",
                texto: "inexistente, pois o Estado não responde civilmente.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O Brasil adota a teoria do RISCO ADMINISTRATIVO para atos comissivos: responsabilidade OBJETIVA que admite excludentes.",
            dificuldade: "Média",
            competencia: "Teoria do risco",
            banca: "IADES",
            tags: ["objetiva", "risco administrativo"],
          },
          {
            id: "da-q-7-2",
            enunciado:
              "São excludentes de responsabilidade civil do Estado, EXCETO:",
            alternativas: [
              { letra: "A", texto: "culpa exclusiva da vítima." },
              { letra: "B", texto: "caso fortuito." },
              { letra: "C", texto: "força maior." },
              { letra: "D", texto: "culpa concorrente da vítima." },
              { letra: "E", texto: "fato de terceiro." },
            ],
            gabarito: "D",
            justificativa:
              "Culpa CONCORRENTE não exclui a responsabilidade, apenas REDUZ a indenização proporcionalmente. As excludentes são: culpa exclusiva da vítima, caso fortuito/força maior e fato de terceiro.",
            dificuldade: "Média",
            competencia: "Excludentes",
            banca: "IADES",
            tags: ["excludentes", "concorrente"],
          },
          {
            id: "da-q-7-3",
            enunciado:
              "Quando o Estado causa dano por OMISSÃO, a responsabilidade é:",
            alternativas: [
              { letra: "A", texto: "objetiva, na modalidade risco integral." },
              {
                letra: "B",
                texto: "objetiva, na modalidade risco administrativo.",
              },
              {
                letra: "C",
                texto: "subjetiva, exigindo prova de culpa do serviço.",
              },
              {
                letra: "D",
                texto: "inexistente, pois omissão não gera responsabilidade.",
              },
              { letra: "E", texto: "solidária com o agente público." },
            ],
            gabarito: "C",
            justificativa:
              "Na OMISSÃO, a responsabilidade é SUBJETIVA: a vítima deve provar que o Estado foi negligente (culpa anônima do serviço). Ex: buraco na rua sem sinalização.",
            dificuldade: "Média",
            competencia: "Omissão estatal",
            banca: "IADES",
            tags: ["omissão", "subjetiva"],
          },
          {
            id: "da-q-7-4",
            enunciado:
              "O direito de regresso do Estado contra o agente causador do dano:",
            alternativas: [
              { letra: "A", texto: "independe de dolo ou culpa do agente." },
              {
                letra: "B",
                texto: "exige que o agente tenha agido com dolo ou culpa.",
              },
              {
                letra: "C",
                texto: "só pode ser exercido se houver dolo do agente.",
              },
              { letra: "D", texto: "prescreve em 5 anos." },
              { letra: "E", texto: "é vedado pela Constituição." },
            ],
            gabarito: "B",
            justificativa:
              "O direito de regresso exige DOLO ou CULPA do agente (art. 37, §6º, CF). Se o agente não agiu com culpa, o Estado não pode cobrar dele.",
            dificuldade: "Média",
            competencia: "Direito de regresso",
            banca: "IADES",
            tags: ["regresso", "dolo", "culpa"],
          },
          {
            id: "da-q-7-5",
            enunciado:
              "A ação regressiva do Estado contra agentes que causaram prejuízo ao erário:",
            alternativas: [
              { letra: "A", texto: "prescreve em 3 anos." },
              { letra: "B", texto: "prescreve em 5 anos." },
              { letra: "C", texto: "prescreve em 10 anos." },
              { letra: "D", texto: "é imprescritível." },
              { letra: "E", texto: "prescreve em 20 anos." },
            ],
            gabarito: "D",
            justificativa:
              "A ação regressiva contra agentes que causaram prejuízo ao erário é IMPRESCRITÍVEL, conforme art. 37, §5º, CF.",
            dificuldade: "Média",
            competencia: "Prescrição",
            banca: "IADES",
            tags: ["imprescritível", "regresso"],
          },
          {
            id: "da-q-7-6",
            enunciado:
              "São requisitos para a responsabilidade objetiva do Estado:",
            alternativas: [
              { letra: "A", texto: "dano, culpa do agente e nexo causal." },
              { letra: "B", texto: "dano, conduta do agente e nexo causal." },
              { letra: "C", texto: "dolo, dano e culpa." },
              { letra: "D", texto: "conduta ilícita, dano e culpa." },
              { letra: "E", texto: "apenas o dano." },
            ],
            gabarito: "B",
            justificativa:
              "Na responsabilidade OBJETIVA não se exige culpa. Os requisitos são: DANO + CONDUTA do agente + NEXO CAUSAL.",
            dificuldade: "Média",
            competencia: "Requisitos",
            banca: "IADES",
            tags: ["requisitos", "objetiva"],
          },
          {
            id: "da-q-7-7",
            enunciado: "A teoria do risco integral aplica-se aos casos de:",
            alternativas: [
              {
                letra: "A",
                texto: "acidente de trânsito envolvendo viatura policial.",
              },
              { letra: "B", texto: "erro médico em hospital público." },
              { letra: "C", texto: "dano nuclear." },
              { letra: "D", texto: "queda de árvore em via pública." },
              { letra: "E", texto: "assalto em transporte público." },
            ],
            gabarito: "C",
            justificativa:
              "A teoria do risco INTEGRAL (não admite excludentes) aplica-se a: dano nuclear, atentado terrorista em aeronave e dano ambiental.",
            dificuldade: "Difícil",
            competencia: "Risco integral",
            banca: "IADES",
            tags: ["risco integral", "nuclear"],
          },
          {
            id: "da-q-7-8",
            enunciado: "O art. 37, §6º, da CF aplica-se:",
            alternativas: [
              {
                letra: "A",
                texto: "apenas às pessoas jurídicas de direito público.",
              },
              { letra: "B", texto: "apenas às autarquias e fundações." },
              {
                letra: "C",
                texto:
                  "às pessoas jurídicas de direito público e às de direito privado prestadoras de serviços públicos.",
              },
              { letra: "D", texto: "apenas às empresas estatais." },
              {
                letra: "E",
                texto: "a todas as pessoas jurídicas de direito privado.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O art. 37, §6º, CF aplica-se às pessoas jurídicas de direito público E às de direito privado PRESTADORAS DE SERVIÇOS PÚBLICOS.",
            dificuldade: "Média",
            competencia: "Abrangência",
            banca: "IADES",
            tags: ["prestadoras", "serviço público"],
          },
          {
            id: "da-q-7-9",
            enunciado:
              "Viatura policial em perseguição atropela pedestre que atravessava a faixa. A responsabilidade do Estado é:",
            alternativas: [
              {
                letra: "A",
                texto: "inexistente, pois o policial estava em serviço.",
              },
              { letra: "B", texto: "objetiva, independentemente de culpa." },
              {
                letra: "C",
                texto: "subjetiva, exigindo prova de culpa do motorista.",
              },
              { letra: "D", texto: "subsidiária em relação ao policial." },
              { letra: "E", texto: "apenas administrativa." },
            ],
            gabarito: "B",
            justificativa:
              "Ato COMISSIVO (ação do agente) gera responsabilidade OBJETIVA. O Estado responde independentemente de culpa, bastando dano e nexo causal.",
            dificuldade: "Média",
            competencia: "Ato comissivo",
            banca: "IADES",
            tags: ["comissivo", "objetiva"],
          },
          {
            id: "da-q-7-10",
            enunciado:
              "A diferença entre a teoria do risco administrativo e a do risco integral é que:",
            alternativas: [
              {
                letra: "A",
                texto: "a primeira é subjetiva e a segunda objetiva.",
              },
              {
                letra: "B",
                texto: "a primeira admite excludentes e a segunda não.",
              },
              {
                letra: "C",
                texto: "a primeira não admite excludentes e a segunda admite.",
              },
              { letra: "D", texto: "ambas são idênticas." },
              {
                letra: "E",
                texto: "a primeira exige culpa e a segunda exige dolo.",
              },
            ],
            gabarito: "B",
            justificativa:
              "Ambas são objetivas, mas o RISCO ADMINISTRATIVO admite excludentes (culpa da vítima, força maior, etc.), enquanto o RISCO INTEGRAL não admite nenhuma excludente.",
            dificuldade: "Média",
            competencia: "Teorias do risco",
            banca: "IADES",
            tags: ["risco administrativo", "risco integral"],
          },
        ],
      },
    },
    {
      id: "da-topico-8",
      numero: 8,
      titulo:
        "Serviços Públicos: Conceito, Elementos, Formas de Prestação, Delegação (Concessão, Permissão, Autorização), Classificação, Princípios, Lei nº 8.987/1995 e PPP (Lei nº 11.079/2004)",
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Serviço Público
Atividade de interesse coletivo prestada pelo Estado ou por delegatários, sob regime jurídico de direito público.

### Elementos Constitutivos

| Elemento | Descrição |
|----------|-----------|
| **Subjetivo** | Quem presta (Estado ou delegatário) |
| **Material** | O que é (atividade de interesse coletivo) |
| **Formal** | Como é (regime de direito público) |

### Formas de Prestação

| Forma | Quem Presta | Exemplo |
|-------|------------|---------|
| **Direta/Centralizada** | Própria Administração | Segurança pública |
| **Indireta/Descentralizada** | Autarquias, Fundações, EP, SEM | ANVISA, Correios |
| **Delegação** | Particulares (concessão/permissão) | Energia elétrica |

### Delegação - Quadro Comparativo

| Aspecto | CONCESSÃO | PERMISSÃO | AUTORIZAÇÃO |
|---------|-----------|-----------|-------------|
| **Forma** | Contrato | Contrato | Ato unilateral |
| **Licitação** | Obrigatória (concorrência) | Obrigatória (qualquer) | Facultativa |
| **Delegatário** | PJ ou consórcio | PF ou PJ | PF ou PJ |
| **Prazo** | Determinado | Determinado | Indeterminado (regra) |
| **Precariedade** | Não | Sim | Sim |

### Princípios dos Serviços Públicos (LIMPE + CGMA)
- **C**ontinuidade
- **G**eneralidade/Universalidade
- **M**odicidade das tarifas
- **A**tualidade/Adaptabilidade
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Serviço Público

Não há uma definição legal unificada, mas podemos definir como:

> **Serviço público** é toda atividade de interesse coletivo, prestada pelo Estado ou por seus delegatários, sob regime predominantemente de direito público, com vistas a satisfazer necessidades essenciais da coletividade.

#### Critérios para Identificação

| Critério | Descrição | Exemplo |
|----------|-----------|---------|
| **Subjetivo** | Prestado pelo Estado ou delegatário | Empresa de energia autorizada |
| **Material** | Atividade de interesse coletivo | Saúde, educação, transporte |
| **Formal** | Regime de direito público | Princípios do art. 37, CF |

#### Serviço Público vs. Outras Atividades

| Atividade | Característica |
|-----------|----------------|
| **Serviço Público** | O Estado DEVE prestar ou delegar |
| **Poder de Polícia** | Limita direitos (ex: fiscalização VISA) |
| **Intervenção Econômica** | Estado como empresário (excepcional) |
| **Fomento** | Incentivo à atividade privada |

### 2. Elementos Constitutivos

#### 2.1 Elemento Subjetivo (Quem presta)
- O Estado (diretamente) ou
- Delegatários (particulares autorizados)

#### 2.2 Elemento Material (O que é)
- Atividade concreta
- De interesse público/coletivo
- Satisfação de necessidades essenciais

#### 2.3 Elemento Formal (Regime jurídico)
- Regime de direito público
- Princípios constitucionais (art. 37, CF)
- Responsabilidade objetiva
- Poderes especiais da Administração

### 3. Formas de Prestação e Meios de Execução

#### 3.1 Prestação Direta (Centralizada)
O próprio ente político presta o serviço através de seus órgãos:
- Segurança pública (polícias)
- Diplomacia (Ministério das Relações Exteriores)

#### 3.2 Prestação Indireta (Descentralizada)
Transferência para outras entidades:

| Tipo | Entidade | Exemplo |
|------|----------|---------|
| **Outorga** | Autarquia/Fundação | INSS, ANVISA |
| **Delegação legal** | EP/SEM | Correios, Petrobras |
| **Delegação negocial** | Particulares | Concessionárias |

#### 3.3 Meios de Execução

| Meio | Descrição |
|------|-----------|
| **Execução direta** | Administração usa meios próprios |
| **Execução indireta** | Contrata terceiros para executar |
| **Contrato de gestão** | Parceria com OS |

### 4. Delegação de Serviços Públicos

Art. 175, CF: "Incumbe ao Poder Público, na forma da lei, diretamente ou sob regime de concessão ou permissão, sempre através de licitação, a prestação de serviços públicos."

#### 4.1 CONCESSÃO (Lei 8.987/1995)

**Conceito:**
> Delegação da prestação de serviço público, mediante licitação na modalidade concorrência, a pessoa jurídica ou consórcio de empresas que demonstre capacidade para seu desempenho, por sua conta e risco e por prazo determinado.

**Características:**
- **Forma**: Contrato administrativo bilateral
- **Licitação**: OBRIGATÓRIA (modalidade CONCORRÊNCIA)
- **Delegatário**: Pessoa JURÍDICA ou consórcio
- **Prazo**: DETERMINADO
- **Remuneração**: Tarifa + receitas alternativas
- **Precariedade**: NÃO é precária
- **Extinção**:
  - Advento do termo
  - Encampação (interesse público)
  - Caducidade (inadimplência)
  - Rescisão judicial
  - Anulação
  - Falência

**Direitos dos Usuários (art. 7º):**
- Serviço adequado
- Informações
- Escolha entre prestadores (quando houver)
- Fiscalização

#### 4.2 PERMISSÃO (Lei 8.987/1995, art. 40)

**Conceito:**
> Delegação, a título precário, mediante licitação, da prestação de serviços públicos, feita pelo poder concedente à pessoa física ou jurídica que demonstre capacidade para seu desempenho.

**Características:**
- **Forma**: Contrato de ADESÃO
- **Licitação**: OBRIGATÓRIA (qualquer modalidade)
- **Delegatário**: Pessoa FÍSICA ou JURÍDICA
- **Prazo**: DETERMINADO
- **Precariedade**: SIM (revogável unilateralmente)

**Diferença principal:** Precariedade e possibilidade de pessoa física

#### 4.3 AUTORIZAÇÃO

**Conceito:**
> Ato unilateral, discricionário e precário, pelo qual o Poder Público delega a execução de serviço público a particular, por sua conta e risco.

**Características:**
- **Forma**: ATO UNILATERAL (não é contrato)
- **Licitação**: DISPENSÁVEL (regra)
- **Delegatário**: Pessoa física ou jurídica
- **Prazo**: Em regra, INDETERMINADO
- **Precariedade**: SIM (revogável a qualquer tempo)
- **Interesse**: Predomina o interesse do particular

**Exemplo:** Táxi, despachante aduaneiro

### 5. Classificação dos Serviços Públicos

#### 5.1 Quanto à Essencialidade

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Essencial** | Indispensável | Saúde, segurança |
| **Utilidade Pública** | Conveniente | Transporte, energia |

#### 5.2 Quanto aos Destinatários

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Gerais (uti universi)** | Toda coletividade | Iluminação pública |
| **Individuais (uti singuli)** | Usuário específico | Água, energia |

#### 5.3 Quanto à Obrigatoriedade

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Compulsório** | Uso obrigatório | Coleta de lixo |
| **Facultativo** | Uso opcional | Transporte público |

#### 5.4 Quanto à Delegabilidade

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Próprios** | Só o Estado | Segurança, justiça |
| **Impróprios** | Delegáveis | Transporte, energia |

### 6. Princípios dos Serviços Públicos

#### 6.1 Princípio da CONTINUIDADE
O serviço NÃO pode ser interrompido.

**Exceções permitidas (art. 6º, §3º, Lei 8.987/1995):**
- Emergência
- Após aviso prévio:
  - Por razões de ordem técnica ou segurança
  - Por inadimplemento do usuário

**Questão IADES:** A interrupção por inadimplemento NÃO viola a continuidade se houver aviso prévio.

#### 6.2 Princípio da GENERALIDADE (Universalidade)
O serviço deve atender a TODOS os usuários, sem discriminação.

#### 6.3 Princípio da MODICIDADE
As tarifas devem ser MÓDICAS (acessíveis).

**Meios para garantir modicidade:**
- Receitas alternativas
- Subsídios cruzados
- Gratuidade para hipossuficientes

#### 6.4 Princípio da ATUALIDADE (Adaptabilidade)
O serviço deve ser prestado com técnicas ATUAIS.

**Compreende:** modernidade, expansão, melhoria

#### 6.5 Princípio da CORTESIA
Tratamento respeitoso ao usuário.

#### 6.6 Princípio da SEGURANÇA
Serviço sem riscos ao usuário.

### 7. Lei nº 8.987/1995 - Principais Disposições

#### 7.1 Serviço Adequado (art. 6º)
Satisfaz as condições de:
- Regularidade
- Continuidade
- Eficiência
- Segurança
- Atualidade
- Generalidade
- Cortesia
- Modicidade das tarifas

#### 7.2 Política Tarifária (arts. 9º a 13)
- Tarifa fixada pelo preço da proposta vencedora
- Preservação do equilíbrio econômico-financeiro
- Revisões periódicas
- Fontes alternativas de receita

#### 7.3 Licitação (arts. 14 a 22)
- CONCORRÊNCIA obrigatória
- Critérios de julgamento: menor tarifa, melhor técnica, combinados
- Inversão de fases permitida

#### 7.4 Contrato (arts. 23 a 28)
Cláusulas essenciais:
- Objeto, área e prazo
- Modo, forma e condições de prestação
- Critérios de reajuste
- Direitos e deveres das partes
- Penalidades
- Casos de extinção

#### 7.5 Encargos do Concedente (art. 29)
- Regulamentar o serviço
- Fiscalizar
- Aplicar penalidades
- Intervir na prestação
- Extinguir a concessão

#### 7.6 Encargos do Concessionário (art. 31)
- Prestar serviço adequado
- Manter a regularidade
- Cumprir legislação
- Permitir fiscalização
- Captar usuários

### 8. Parceria Público-Privada (Lei nº 11.079/2004)

#### 8.1 Conceito
Contrato administrativo de concessão na modalidade PATROCINADA ou ADMINISTRATIVA.

#### 8.2 Modalidades de PPP

| Modalidade | Característica | Contraprestação |
|------------|---------------|-----------------|
| **PATROCINADA** | Concessão comum + contraprestação pública | Tarifa + parcela do poder público |
| **ADMINISTRATIVA** | Administração é usuária direta/indireta | Integralmente pelo poder público |

#### 8.3 Diferença: PPP vs. Concessão Comum

| Aspecto | CONCESSÃO COMUM | PPP |
|---------|-----------------|-----|
| **Contraprestação** | Só tarifa | Tarifa + governo (ou só governo) |
| **Valor mínimo** | Sem mínimo | R$ 10 milhões |
| **Prazo** | Sem mínimo/máximo específico | 5 a 35 anos |
| **Repartição de riscos** | Concessionário | Compartilhada |

#### 8.4 Características das PPPs

**Vedações (art. 2º, §4º):**
- Valor < R$ 10 milhões
- Prazo < 5 anos ou > 35 anos
- Objeto único (fornecimento de mão de obra, equipamentos ou execução de obra)

**Diretrizes (art. 4º):**
- Eficiência
- Respeito aos usuários
- Indelegabilidade das funções de regulação e poder de polícia
- Responsabilidade fiscal
- Transparência

#### 8.5 Garantias (art. 8º)
O poder público pode oferecer:
- Vinculação de receitas
- Fundo garantidor (FGP)
- Garantia por empresa estatal
- Outros mecanismos

#### 8.6 Sociedade de Propósito Específico (SPE)
O vencedor da licitação DEVE constituir SPE antes da assinatura do contrato.

**Vedação:** Administração Pública não pode ser majoritária na SPE (exceto instituição financeira pública em caso de inadimplência).

### 9. Aplicação à Vigilância Sanitária

A Vigilância Sanitária está relacionada aos serviços públicos de SAÚDE:

| Aspecto | Aplicação |
|---------|-----------|
| **Natureza** | Serviço público PRÓPRIO (indelegável) |
| **Poder** | Poder de POLÍCIA (não é delegável) |
| **Princípios** | Continuidade, universalidade |
| **Titularidade** | Estado (SUS) |

**IMPORTANTE:** O poder de polícia sanitária NÃO pode ser delegado a particulares, apenas a entidades da Administração Indireta (ANVISA é autarquia).
        `,

        pontosChave: [
          "Serviço público: atividade de interesse coletivo, regime de direito público",
          "Elementos: subjetivo (quem), material (o quê), formal (regime)",
          "CONCESSÃO: contrato, PJ/consórcio, concorrência obrigatória, NÃO precária",
          "PERMISSÃO: contrato de adesão, PF/PJ, licitação obrigatória, PRECÁRIA",
          "AUTORIZAÇÃO: ato unilateral, discricionário, precário, licitação dispensável",
          "Princípios: Continuidade, Generalidade, Modicidade, Atualidade",
          "Lei 8.987/1995: disciplina concessões e permissões de serviços públicos",
          "PPP Patrocinada: tarifa + contraprestação do poder público",
          "PPP Administrativa: contraprestação integralmente do poder público",
          "PPP: valor mínimo R$ 10 milhões, prazo 5 a 35 anos",
          "Interrupção por inadimplência: permitida COM aviso prévio",
          "Poder de polícia sanitária: NÃO é delegável a particulares",
        ],

        armadilhas: [
          {
            titulo: "Confundir Concessão com Permissão",
            descricao:
              "Concessão é para PJ/consórcio e não é precária. Permissão admite PF e é precária.",
            dica: "CONCESSÃO = Contrato + Consórcio/PJ. PERMISSÃO = Precária + PF possível.",
          },
          {
            titulo:
              "Achar que interrupção por inadimplência viola continuidade",
            descricao:
              "A Lei 8.987/1995 permite a interrupção por inadimplência do usuário, desde que haja aviso prévio.",
            dica: "Inadimplência + aviso prévio = pode cortar!",
          },
          {
            titulo: "Confundir PPP Patrocinada com Administrativa",
            descricao:
              "Patrocinada: tarifa + parte do governo. Administrativa: SÓ o governo paga.",
            dica: "Patrocinada = Parcela do governo + tarifa. Administrativa = Administração paga tudo.",
          },
          {
            titulo: "Pensar que poder de polícia pode ser delegado",
            descricao:
              "O poder de polícia NÃO pode ser delegado a particulares, apenas a entidades da Administração Indireta.",
            dica: "Poder de polícia = INDELEGÁVEL a particulares.",
          },
        ],

        mnemonicos: [
          {
            termo: "CPA",
            significado: "Concessão, Permissão, Autorização",
            frase:
              "CPA: Concessão (Contrato PJ), Permissão (Precária), Autorização (Ato unilateral)",
          },
          {
            termo: "CGMA",
            significado: "Continuidade, Generalidade, Modicidade, Atualidade",
            frase: "CGMA são os princípios específicos dos serviços públicos",
          },
          {
            termo: "PPP 10-35",
            significado: "R$ 10 milhões mínimo, 5 a 35 anos de prazo",
            frase: "PPP: 10 milhões mínimo, entre 5 e 35 anos de prazo",
          },
          {
            termo: "RECSAGCOM",
            significado:
              "Regularidade, Eficiência, Continuidade, Segurança, Atualidade, Generalidade, Cortesia, Modicidade",
            frase: "RECSAGCOM = características do serviço adequado",
          },
        ],

        flashcards: [
          {
            id: "da-fc-8-1",
            frente:
              "Qual a diferença entre concessão e permissão de serviço público?",
            verso:
              "Concessão: PJ/consórcio, não precária, concorrência. Permissão: PF/PJ, precária, qualquer licitação.",
            tags: ["concessão", "permissão"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-2",
            frente:
              "Pode interromper serviço público por inadimplência do usuário?",
            verso:
              "SIM, desde que haja AVISO PRÉVIO (art. 6º, §3º, Lei 8.987/1995)",
            tags: ["continuidade", "inadimplência"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-3",
            frente: "Qual a diferença entre PPP patrocinada e administrativa?",
            verso:
              "Patrocinada: tarifa + contraprestação do governo. Administrativa: só o governo paga.",
            tags: ["ppp", "modalidades"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-4",
            frente: "Quais os valores e prazos mínimos/máximos para PPP?",
            verso:
              "Valor mínimo: R$ 10 milhões. Prazo: mínimo 5 anos, máximo 35 anos.",
            tags: ["ppp", "requisitos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-5",
            frente:
              "Quais são os princípios específicos dos serviços públicos?",
            verso:
              "Continuidade, Generalidade/Universalidade, Modicidade das tarifas, Atualidade/Adaptabilidade",
            tags: ["princípios", "serviço público"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-6",
            frente: "O que é serviço adequado segundo a Lei 8.987/1995?",
            verso:
              "Aquele que satisfaz: regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade",
            tags: ["serviço adequado", "lei 8987"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-7",
            frente: "A autorização de serviço público precisa de licitação?",
            verso:
              "NÃO obrigatoriamente. É ato unilateral, discricionário e precário. Licitação é dispensável.",
            tags: ["autorização", "licitação"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-8-8",
            frente: "O poder de polícia pode ser delegado a particulares?",
            verso:
              "NÃO. O poder de polícia é INDELEGÁVEL a particulares. Pode ser exercido por autarquias (como a ANVISA).",
            tags: ["poder de polícia", "delegação"],
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
            id: "da-q-8-1",
            enunciado:
              "A delegação da prestação de serviço público a pessoa jurídica ou consórcio de empresas, mediante licitação na modalidade concorrência, por sua conta e risco e prazo determinado, caracteriza a:",
            alternativas: [
              { letra: "A", texto: "permissão." },
              { letra: "B", texto: "concessão." },
              { letra: "C", texto: "autorização." },
              { letra: "D", texto: "outorga." },
              { letra: "E", texto: "parceria público-privada." },
            ],
            gabarito: "B",
            justificativa:
              "A CONCESSÃO caracteriza-se por: contrato com PJ ou consórcio, licitação na modalidade CONCORRÊNCIA, prazo determinado, por conta e risco do concessionário.",
            dificuldade: "Fácil",
            competencia: "Delegação",
            banca: "IADES",
            tags: ["concessão", "conceito"],
          },
          {
            id: "da-q-8-2",
            enunciado:
              "Segundo a Lei nº 8.987/1995, a interrupção do serviço público por inadimplemento do usuário:",
            alternativas: [
              { letra: "A", texto: "é vedada em qualquer hipótese." },
              {
                letra: "B",
                texto: "é permitida apenas em casos de emergência.",
              },
              { letra: "C", texto: "é permitida após aviso prévio." },
              { letra: "D", texto: "depende de autorização judicial." },
              { letra: "E", texto: "viola o princípio da continuidade." },
            ],
            gabarito: "C",
            justificativa:
              "O art. 6º, §3º, da Lei 8.987/1995 permite a interrupção por inadimplemento do usuário, desde que haja AVISO PRÉVIO.",
            dificuldade: "Média",
            competencia: "Continuidade",
            banca: "IADES",
            tags: ["interrupção", "inadimplência"],
          },
          {
            id: "da-q-8-3",
            enunciado:
              "A concessão patrocinada, prevista na Lei nº 11.079/2004 (PPP), caracteriza-se por:",
            alternativas: [
              {
                letra: "A",
                texto: "remuneração integralmente paga pelo poder público.",
              },
              {
                letra: "B",
                texto:
                  "remuneração por tarifa cobrada dos usuários, acrescida de contraprestação do poder público.",
              },
              {
                letra: "C",
                texto: "ausência de qualquer remuneração pública.",
              },
              { letra: "D", texto: "prazo indeterminado." },
              {
                letra: "E",
                texto: "valor contratual máximo de R$ 10 milhões.",
              },
            ],
            gabarito: "B",
            justificativa:
              "A concessão PATROCINADA combina tarifa cobrada dos usuários COM contraprestação pecuniária do parceiro público.",
            dificuldade: "Média",
            competencia: "PPP",
            banca: "IADES",
            tags: ["ppp", "patrocinada"],
          },
          {
            id: "da-q-8-4",
            enunciado:
              "A permissão de serviço público, diferentemente da concessão, caracteriza-se por:",
            alternativas: [
              { letra: "A", texto: "dispensar licitação." },
              { letra: "B", texto: "ser não precária." },
              {
                letra: "C",
                texto: "admitir pessoa física como permissionária.",
              },
              {
                letra: "D",
                texto: "exigir licitação na modalidade concorrência.",
              },
              { letra: "E", texto: "ter prazo indeterminado." },
            ],
            gabarito: "C",
            justificativa:
              "A PERMISSÃO admite pessoa FÍSICA como permissionária. A concessão só admite pessoa jurídica ou consórcio.",
            dificuldade: "Média",
            competencia: "Permissão",
            banca: "IADES",
            tags: ["permissão", "pessoa física"],
          },
          {
            id: "da-q-8-5",
            enunciado:
              "NÃO é característica da Parceria Público-Privada (PPP):",
            alternativas: [
              {
                letra: "A",
                texto: "valor mínimo do contrato de R$ 10 milhões.",
              },
              { letra: "B", texto: "prazo mínimo de vigência de 5 anos." },
              { letra: "C", texto: "prazo máximo de 35 anos." },
              { letra: "D", texto: "repartição objetiva de riscos." },
              {
                letra: "E",
                texto: "objeto único de fornecimento de mão de obra.",
              },
            ],
            gabarito: "E",
            justificativa:
              "A Lei 11.079/2004, art. 2º, §4º, III, VEDA que a PPP tenha como objeto único o fornecimento de mão de obra, equipamentos ou execução de obra pública.",
            dificuldade: "Média",
            competencia: "PPP",
            banca: "IADES",
            tags: ["ppp", "vedações"],
          },
          {
            id: "da-q-8-6",
            enunciado: "A autorização de serviço público caracteriza-se como:",
            alternativas: [
              { letra: "A", texto: "contrato bilateral." },
              {
                letra: "B",
                texto: "ato unilateral, discricionário e precário.",
              },
              { letra: "C", texto: "contrato de adesão." },
              { letra: "D", texto: "ato vinculado." },
              { letra: "E", texto: "contrato com prazo determinado." },
            ],
            gabarito: "B",
            justificativa:
              "A autorização é ATO UNILATERAL (não é contrato), DISCRICIONÁRIO e PRECÁRIO (revogável a qualquer tempo).",
            dificuldade: "Fácil",
            competencia: "Autorização",
            banca: "IADES",
            tags: ["autorização", "características"],
          },
          {
            id: "da-q-8-7",
            enunciado:
              "São princípios específicos dos serviços públicos, EXCETO:",
            alternativas: [
              { letra: "A", texto: "continuidade." },
              { letra: "B", texto: "generalidade." },
              { letra: "C", texto: "modicidade." },
              { letra: "D", texto: "hierarquia." },
              { letra: "E", texto: "atualidade." },
            ],
            gabarito: "D",
            justificativa:
              "HIERARQUIA é princípio da Administração Pública (poder hierárquico), não é princípio específico dos serviços públicos.",
            dificuldade: "Fácil",
            competencia: "Princípios",
            banca: "IADES",
            tags: ["princípios", "serviço público"],
          },
          {
            id: "da-q-8-8",
            enunciado:
              "A concessão administrativa, prevista na Lei nº 11.079/2004, ocorre quando:",
            alternativas: [
              { letra: "A", texto: "há cobrança de tarifa dos usuários." },
              {
                letra: "B",
                texto:
                  "a Administração Pública é a usuária direta ou indireta.",
              },
              { letra: "C", texto: "o prazo é inferior a 5 anos." },
              { letra: "D", texto: "o valor é inferior a R$ 10 milhões." },
              { letra: "E", texto: "não há contraprestação do poder público." },
            ],
            gabarito: "B",
            justificativa:
              "Na concessão ADMINISTRATIVA, a Administração Pública é a usuária direta ou indireta, e a remuneração é integralmente paga pelo parceiro público.",
            dificuldade: "Média",
            competencia: "PPP",
            banca: "IADES",
            tags: ["ppp", "administrativa"],
          },
          {
            id: "da-q-8-9",
            enunciado: "O poder de polícia sanitária:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "pode ser delegado a concessionárias de serviço público.",
              },
              {
                letra: "B",
                texto:
                  "pode ser exercido por permissionárias de serviço público.",
              },
              { letra: "C", texto: "é delegável apenas a empresas públicas." },
              {
                letra: "D",
                texto:
                  "é indelegável a particulares, mas pode ser exercido por autarquias.",
              },
              {
                letra: "E",
                texto: "pode ser autorizado a sociedades de economia mista.",
              },
            ],
            gabarito: "D",
            justificativa:
              "O poder de polícia é INDELEGÁVEL a particulares. Pode ser exercido por autarquias (como a ANVISA), mas não por concessionárias ou permissionárias.",
            dificuldade: "Média",
            competencia: "Poder de polícia",
            banca: "IADES",
            tags: ["poder de polícia", "delegação"],
          },
          {
            id: "da-q-8-10",
            enunciado:
              "Segundo a Lei nº 8.987/1995, considera-se serviço adequado aquele que satisfaz as condições de:",
            alternativas: [
              {
                letra: "A",
                texto: "regularidade, exclusividade, eficiência e segurança.",
              },
              {
                letra: "B",
                texto:
                  "continuidade, generalidade, discricionariedade e cortesia.",
              },
              {
                letra: "C",
                texto:
                  "regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade.",
              },
              {
                letra: "D",
                texto:
                  "legalidade, impessoalidade, moralidade, publicidade e eficiência.",
              },
              {
                letra: "E",
                texto:
                  "supremacia, autotutela, especialidade e presunção de legitimidade.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O art. 6º, §1º, da Lei 8.987/1995 define serviço adequado: regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas.",
            dificuldade: "Média",
            competencia: "Serviço adequado",
            banca: "IADES",
            tags: ["serviço adequado", "características"],
          },
        ],
      },
    },
    {
      id: "da-topico-9",
      numero: 9,
      titulo: "Organização Administrativa",
      conteudo: {
        resumo: `# Organização Administrativa

## Técnicas de Organização

### Centralização x Descentralização

| Técnica | Conceito | Característica |
|---------|----------|----------------|
| **Centralização** | Estado executa diretamente por seus órgãos | Mesma pessoa jurídica |
| **Descentralização** | Transfere para outra pessoa jurídica | Cria entidade ou delega a particular |

### Concentração x Desconcentração

| Técnica | Conceito | Característica |
|---------|----------|----------------|
| **Concentração** | Um único órgão concentra competências | Raro na prática |
| **Desconcentração** | Distribui dentro da mesma pessoa jurídica | Cria órgãos internos (Ministérios, Secretarias) |

## Administração Direta e Indireta

### Administração Direta
União, Estados, DF e Municípios (entes políticos) + seus órgãos.

### Administração Indireta (Art. 37, XIX, CF)

| Entidade | Natureza | Criação |
|----------|----------|---------|
| **Autarquias** | Direito público | Criada por lei |
| **Fundações Públicas** | Direito público/privado | Lei autoriza (privada) ou cria (pública) |
| **Empresas Públicas** | Direito privado | Lei autoriza + registro |
| **Sociedades de Economia Mista** | Direito privado | Lei autoriza + registro |

## Terceiro Setor (Entidades Paraestatais)

| Entidade | Características |
|----------|-----------------|
| **Serviços Sociais Autônomos** | Sistema S (SESI, SENAI, SESC) |
| **Organizações Sociais (OS)** | Contrato de gestão (Lei 9.637/98) |
| **OSCIP** | Termo de parceria (Lei 9.790/99) |
| **Entidades de Apoio** | Fundações/associações de apoio a universidades |`,

        explicacao: `# Organização Administrativa: Análise Completa

## TÉCNICAS DE ORGANIZAÇÃO ADMINISTRATIVA

A organização administrativa se estrutura a partir de duas vertentes: a **titularidade** das atividades (centralização x descentralização) e a **distribuição interna** de competências (concentração x desconcentração).

---

## CENTRALIZAÇÃO E DESCENTRALIZAÇÃO

### Centralização

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Estado executa atividades diretamente por seus órgãos |
| **Característica** | Atividades permanecem na mesma pessoa jurídica |
| **Controle** | Hierárquico (subordinação) |
| **Exemplo** | Ministério da Saúde executando políticas diretamente |

### Descentralização

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Transferência de atividade para outra pessoa |
| **Característica** | Cria nova pessoa jurídica OU delega a particular |
| **Controle** | Finalístico/tutela (supervisão ministerial) |
| **Relação** | Vinculação (não subordinação) |

### Modalidades de Descentralização

| Modalidade | Descrição | Exemplo |
|------------|-----------|---------|
| **Por outorga (serviço)** | Transfere a titularidade e execução | Criação de autarquia |
| **Por delegação (colaboração)** | Transfere apenas a execução | Concessão de serviço público |
| **Territorial/geográfica** | Para entidades locais | Territórios federais |

### Quadro Comparativo

| Aspecto | Centralização | Descentralização |
|---------|---------------|------------------|
| Pessoa jurídica | Mesma | Outra (nova ou particular) |
| Vínculo | Hierarquia | Vinculação/tutela |
| Controle | Pleno | Finalístico |
| Autonomia | Não há | Há autonomia |

---

## CONCENTRAÇÃO E DESCONCENTRAÇÃO

### Concentração

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Competências reunidas em um único órgão |
| **Situação** | Rara, indesejável na prática |
| **Característica** | Ausência de divisão interna |

### Desconcentração

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Distribuição de competências DENTRO da mesma pessoa |
| **Característica** | Cria órgãos internos |
| **Vínculo** | Hierarquia (subordinação) |
| **Exemplo** | Criação de Ministérios, Secretarias |

### Tipos de Desconcentração

| Tipo | Critério | Exemplo |
|------|----------|---------|
| **Em razão da matéria** | Assunto/tema | Ministério da Saúde, da Educação |
| **Em razão do grau** | Nível hierárquico | Ministro > Secretário > Diretor |
| **Territorial** | Circunscrição geográfica | Superintendências regionais |

---

## ADMINISTRAÇÃO DIRETA

### Conceito

Conjunto de órgãos que integram as pessoas federativas (União, Estados, DF e Municípios), aos quais foi atribuída a competência para o exercício das funções administrativas.

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | Entes políticos + órgãos |
| **Personalidade** | Da pessoa política (órgãos não têm) |
| **Relação** | Hierarquia (desconcentração) |
| **Regime** | Direito público |

### Órgãos Públicos

| Tipo | Características | Exemplos |
|------|-----------------|----------|
| **Independentes** | Cúpula estatal, sem subordinação | Presidência, Congresso, STF |
| **Autônomos** | Direção, planejamento, supervisão | Ministérios, Secretarias |
| **Superiores** | Decisão, controle | Gabinetes, Coordenadorias |
| **Subalternos** | Execução | Seções, portarias |

---

## ADMINISTRAÇÃO INDIRETA (Art. 37, XIX, CF)

### Fundamento Constitucional

> "Somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação, cabendo à lei complementar, neste último caso, definir as áreas de sua atuação."

### Características Gerais

| Aspecto | Descrição |
|---------|-----------|
| **Criação** | Lei específica (cria ou autoriza) |
| **Finalidade** | Especialização, eficiência |
| **Autonomia** | Administrativa e financeira |
| **Controle** | Supervisão ministerial (tutela) |

---

## AUTARQUIAS

### Conceito

Pessoa jurídica de direito **público**, criada **por lei**, para desempenhar atividades típicas da Administração, com autonomia administrativa e financeira.

### Características

| Aspecto | Autarquia |
|---------|-----------|
| **Personalidade** | Direito PÚBLICO |
| **Criação** | LEI ESPECÍFICA (diretamente) |
| **Patrimônio** | Próprio (bens públicos) |
| **Regime de pessoal** | Estatutário (concurso público) |
| **Prerrogativas** | Imunidade tributária recíproca, prazos processuais, precatório |

### Espécies de Autarquias

| Espécie | Características | Exemplos |
|---------|-----------------|----------|
| **Comuns** | Regime tradicional | INSS, IBAMA, INCRA |
| **Especiais** | Maior autonomia, dirigentes estáveis | Agências reguladoras |
| **Fundacionais** | Patrimônio personalizado | FUNAI, FUNASA |
| **Territoriais** | Autarquia geográfica | Territórios federais |
| **Corporativas** | Fiscalização profissional | CRM, OAB*, CREA |

*OAB tem natureza sui generis (STF - ADI 3.026)

### Agências Reguladoras

| Característica | Descrição |
|----------------|-----------|
| **Natureza** | Autarquias em regime especial |
| **Autonomia** | Reforçada (técnica, administrativa, financeira) |
| **Dirigentes** | Mandato fixo, estabilidade |
| **Quarentena** | Restrição após deixar o cargo |
| **Exemplos** | ANVISA, ANS, ANATEL, ANEEL, ANP |

---

## FUNDAÇÕES PÚBLICAS

### Conceito

Pessoa jurídica constituída pela afetação de um patrimônio a determinada finalidade de interesse público.

### Natureza Jurídica (Divergência)

| Corrente | Entendimento |
|----------|--------------|
| **STF** | Pode ser de direito público (autarquia fundacional) ou privado |
| **Doutrina majoritária** | Acompanha o STF |

### Comparativo

| Aspecto | Fundação Pública de Dir. Público | Fundação Pública de Dir. Privado |
|---------|----------------------------------|----------------------------------|
| **Criação** | Lei cria diretamente | Lei autoriza + registro |
| **Regime** | Autárquico | Híbrido (derrogações) |
| **Pessoal** | Estatutário | CLT ou estatutário |
| **Exemplos** | FUNAI | Fundação Padre Anchieta |

---

## EMPRESAS PÚBLICAS

### Conceito

Pessoa jurídica de direito **privado**, com capital exclusivamente público, criada para exploração de atividade econômica ou prestação de serviço público.

### Características

| Aspecto | Empresa Pública |
|---------|-----------------|
| **Personalidade** | Direito PRIVADO |
| **Criação** | Lei AUTORIZA + registro |
| **Capital** | 100% PÚBLICO |
| **Forma societária** | QUALQUER forma admitida |
| **Foro (federais)** | Justiça FEDERAL |
| **Regime de pessoal** | CLT (emprego público) |

### Exemplos

- Correios (ECT)
- Caixa Econômica Federal
- BNDES
- Infraero
- Casa da Moeda

---

## SOCIEDADES DE ECONOMIA MISTA (SEM)

### Conceito

Pessoa jurídica de direito **privado**, com capital misto (público majoritário + privado), constituída como **sociedade anônima**.

### Características

| Aspecto | Sociedade de Economia Mista |
|---------|----------------------------|
| **Personalidade** | Direito PRIVADO |
| **Criação** | Lei AUTORIZA + registro |
| **Capital** | MISTO (maioria estatal) |
| **Forma societária** | SOMENTE S/A |
| **Foro (federais)** | Justiça ESTADUAL (regra) |
| **Regime de pessoal** | CLT |

### Exemplos

- Petrobras
- Banco do Brasil
- Eletrobras

---

## QUADRO COMPARATIVO: EP x SEM

| Aspecto | Empresa Pública | SEM |
|---------|-----------------|-----|
| Capital | 100% público | Misto (público + privado) |
| Forma | Qualquer | Apenas S/A |
| Foro (federal) | Justiça Federal | Justiça Estadual |
| Ações | Não emite | Emite ações |

### Regime Comum (Lei 13.303/2016 - Lei das Estatais)

| Aspecto | Previsão |
|---------|----------|
| **Licitação** | Obrigatória (regime próprio) |
| **Concurso** | Obrigatório para empregados |
| **Vedações** | Acumulação, nepotismo |
| **Falência** | Não se aplica (STF) |

---

## TERCEIRO SETOR (ENTIDADES PARAESTATAIS)

São pessoas de direito **privado** que colaboram com o Estado, sem integrar a Administração Pública.

### Serviços Sociais Autônomos (Sistema S)

| Característica | Descrição |
|----------------|-----------|
| **Natureza** | Pessoas jurídicas de direito privado |
| **Criação** | Lei (autoriza) |
| **Finalidade** | Formação profissional, assistência social |
| **Custeio** | Contribuições parafiscais (compulsórias) |
| **Licitação** | Regulamento próprio (não Lei 14.133) |
| **Exemplos** | SESI, SENAI, SESC, SENAC, SEBRAE |

### Organizações Sociais (OS) - Lei 9.637/98

| Característica | Descrição |
|----------------|-----------|
| **Natureza** | Qualificação dada a entidade privada |
| **Vínculo** | CONTRATO DE GESTÃO |
| **Área de atuação** | Ensino, pesquisa, saúde, cultura, meio ambiente |
| **Dispensa licitação** | Para contratar com a OS (art. 24, XXIV - revogado) |
| **Controle** | TCU fiscaliza recursos públicos |

### OSCIP - Lei 9.790/99

| Característica | Descrição |
|----------------|-----------|
| **Natureza** | Qualificação dada pelo MJ |
| **Vínculo** | TERMO DE PARCERIA |
| **Requisito** | Entidade sem fins lucrativos há 3+ anos |
| **Área de atuação** | Assistência social, cultura, educação, saúde, etc. |
| **Remuneração de dirigentes** | Permitida |

### Entidades de Apoio

| Característica | Descrição |
|----------------|-----------|
| **Natureza** | Fundações, associações, cooperativas |
| **Vínculo** | Convênio |
| **Finalidade** | Apoio a universidades e hospitais públicos |
| **Controle** | Controverso (TCU fiscaliza) |

### Quadro Comparativo: OS x OSCIP

| Aspecto | OS | OSCIP |
|---------|-----|-------|
| **Lei** | 9.637/98 | 9.790/99 |
| **Vínculo** | Contrato de gestão | Termo de parceria |
| **Qualificação** | Ato discricionário | Ato vinculado |
| **Órgão** | Ministério da área | Ministério da Justiça |
| **Conselho** | Obrigatório (com participação estatal) | Facultativo |

---

## CONTRATO DE GESTÃO

### Conceito

Instrumento firmado entre o Poder Público e entidades da Administração Indireta ou Organizações Sociais, visando ampliar autonomia em troca de metas de desempenho.

### Modalidades

| Tipo | Partes | Fundamento |
|------|--------|------------|
| **Com entidades internas** | Administração x autarquias/fundações | Art. 37, §8º, CF |
| **Com OS** | Administração x Organizações Sociais | Lei 9.637/98 |

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Objeto** | Fixar metas de desempenho |
| **Benefício** | Maior autonomia gerencial |
| **Contrapartida** | Cumprimento de resultados |
| **Agência Executiva** | Autarquia/fundação com contrato de gestão |

### Agência Executiva

| Característica | Descrição |
|----------------|-----------|
| **Conceito** | Qualificação de autarquia/fundação |
| **Requisito** | Contrato de gestão + plano de reestruturação |
| **Benefício** | Maior autonomia, limites de licitação ampliados |
| **Exemplo** | INMETRO |`,

        pontosChave: [
          "Descentralização: transfere para OUTRA pessoa jurídica (cria entidade ou delega)",
          "Desconcentração: distribui DENTRO da mesma pessoa (cria órgãos)",
          "Autarquia: direito PÚBLICO, criada por LEI ESPECÍFICA diretamente",
          "EP/SEM: direito PRIVADO, lei AUTORIZA + registro",
          "EP: capital 100% público, qualquer forma societária, Justiça Federal",
          "SEM: capital misto, SOMENTE S/A, Justiça Estadual (regra)",
          "OS: contrato de GESTÃO (Lei 9.637/98)",
          "OSCIP: termo de PARCERIA (Lei 9.790/99)",
          "Sistema S: contribuições parafiscais, regulamento próprio de licitação",
          "Agência Executiva: autarquia/fundação COM contrato de gestão",
        ],

        armadilhas: [
          {
            titulo: "Descentralização x Desconcentração",
            descricao:
              "Descentralização NÃO é desconcentração - uma cria pessoa jurídica, outra cria órgão interno.",
            dica: "DesCEntralização = Cria Entidade. DesconcentraÇÃO = Cria ÓrgÃO.",
          },
          {
            titulo: "Criação de autarquia x EP/SEM",
            descricao:
              "Autarquia é CRIADA por lei; EP/SEM são AUTORIZADAS por lei e dependem de registro.",
            dica: "Autarquia nasce com a lei. EP/SEM nascem com o registro no órgão competente.",
          },
          {
            titulo: "Forma societária de EP e SEM",
            descricao:
              "SEM só pode ser S/A; EP pode ser qualquer forma societária admitida em direito.",
            dica: "SEM = Só Sociedade Anônima. EP = qualquer forma.",
          },
          {
            titulo: "Foro de EP x SEM federal",
            descricao:
              "Foro de EP federal é Justiça FEDERAL; de SEM federal é ESTADUAL (regra geral).",
            dica: "EP = Federal. SEM = eStadual (regra).",
          },
          {
            titulo: "OS x OSCIP - instrumento de vínculo",
            descricao:
              "OS usa CONTRATO de gestão; OSCIP usa TERMO de parceria.",
            dica: "OS = Contrato de GeStão. OSCIP = termo de Parceria.",
          },
          {
            titulo: "Qualificação como OS x OSCIP",
            descricao:
              "Qualificação como OSCIP é ATO VINCULADO; como OS é DISCRICIONÁRIO.",
            dica: "OSCIP = Vinculada (cumprindo requisitos, deve qualificar). OS = discricionária.",
          },
          {
            titulo: "Sistema S e licitação",
            descricao:
              "Sistema S não segue Lei 14.133, mas regulamento próprio de licitação.",
            dica: "Sistema S tem autonomia - segue regras próprias, não a lei geral.",
          },
          {
            titulo: "Natureza jurídica da OAB",
            descricao:
              "OAB tem natureza SUI GENERIS, não é autarquia comum (ADI 3.026).",
            dica: "OAB é única - não segue regime de autarquia, não paga anuidade ao TCU.",
          },
          {
            titulo: "Agência Executiva",
            descricao:
              "Agência Executiva é QUALIFICAÇÃO dada a autarquia/fundação, não espécie de entidade.",
            dica: "Não é nova entidade, é status dado a entidade que celebra contrato de gestão.",
          },
        ],

        mnemonicos: [
          {
            termo: "ENTIDADE x ÓRGÃO",
            significado: "Diferença entre descentralização e desconcentração",
            frase:
              "DESCENTRALIZAÇÃO = Cria ENTIDADE (pessoa) / DESCONCENTRAÇÃO = Cria ÓRGÃO (interno)",
          },
          {
            termo: "CLIP",
            significado: "Características da autarquia",
            frase:
              "Criada por Lei / Imunidade tributária / Personalidade de direito Público",
          },
          {
            termo: "EP x SEM",
            significado: "Diferenças de forma e foro",
            frase:
              "EP = Qualquer forma, Justiça Federal / SEM = Só S/A, Justiça Estadual",
          },
          {
            termo: "CGP",
            significado: "Instrumentos de OS e OSCIP",
            frase: "OS = Contrato de Gestão / OSCIP = termo de Parceria",
          },
          {
            termo: "Sistema S",
            significado: "Serviços Sociais Autônomos",
            frase:
              "SESI, SENAI, SESC, SENAC, SEBRAE - contribuições parafiscais",
          },
          {
            termo: "ACALEF",
            significado: "Criação de entidades da Administração Indireta",
            frase:
              "Autarquia = Criada por Lei / EP-Fundação = Lei Autoriza + Registro",
          },
        ],

        flashcards: [
          {
            frente:
              "Qual a diferença entre descentralização e desconcentração?",
            verso:
              "DESCENTRALIZAÇÃO: transfere atividade para OUTRA pessoa jurídica (cria entidade ou delega a particular). DESCONCENTRAÇÃO: distribui competências DENTRO da mesma pessoa (cria órgãos internos, relação hierárquica).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Como são criadas as autarquias?",
            verso:
              "Autarquias são CRIADAS DIRETAMENTE por lei específica. Têm personalidade de direito PÚBLICO e gozam de prerrogativas como imunidade tributária recíproca e prazos processuais em dobro.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente:
              "Qual a diferença entre Empresa Pública e Sociedade de Economia Mista?",
            verso:
              "EP: capital 100% público, qualquer forma societária, foro na Justiça Federal. SEM: capital misto (maioria estatal), somente S/A, foro na Justiça Estadual (regra).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente:
              "O que são Organizações Sociais e qual instrumento as vincula ao Estado?",
            verso:
              "OS são entidades privadas qualificadas para atuar em áreas de interesse público. Vinculam-se ao Estado por CONTRATO DE GESTÃO (Lei 9.637/98). Atuam em ensino, pesquisa, saúde, cultura.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença entre OS e OSCIP?",
            verso:
              "OS: contrato de GESTÃO, qualificação discricionária, conselho obrigatório. OSCIP: termo de PARCERIA, qualificação vinculada, sem exigência de conselho, precisa existir há 3+ anos.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que são os Serviços Sociais Autônomos (Sistema S)?",
            verso:
              "Entidades privadas que atuam em formação profissional e assistência. Custeados por contribuições parafiscais (compulsórias). Exemplos: SESI, SENAI, SESC, SENAC, SEBRAE. Seguem regulamento próprio de licitação.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que é Agência Executiva?",
            verso:
              "É uma QUALIFICAÇÃO dada a autarquia ou fundação que celebra CONTRATO DE GESTÃO e possui plano de reestruturação. Não é nova espécie, mas qualificação que confere maior autonomia. Ex: INMETRO.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são as características das Agências Reguladoras?",
            verso:
              "Autarquias em REGIME ESPECIAL: autonomia reforçada, dirigentes com mandato fixo e estabilidade, quarentena após deixar cargo, poder normativo técnico. Ex: ANVISA, ANS, ANATEL.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: "da-q-9-1",
            enunciado:
              "A criação de ministérios e secretarias dentro de um mesmo ente político configura:",
            alternativas: [
              { letra: "A", texto: "descentralização." },
              { letra: "B", texto: "desconcentração." },
              { letra: "C", texto: "delegação." },
              { letra: "D", texto: "outorga." },
              { letra: "E", texto: "privatização." },
            ],
            gabarito: "B",
            justificativa:
              "DESCONCENTRAÇÃO é a distribuição de competências DENTRO da mesma pessoa jurídica, criando órgãos internos. Descentralização cria outra pessoa jurídica.",
            dificuldade: "Fácil",
            competencia: "Desconcentração",
            banca: "IADES",
            tags: ["desconcentração", "órgãos"],
          },
          {
            id: "da-q-9-2",
            enunciado: "As autarquias são criadas:",
            alternativas: [
              { letra: "A", texto: "por decreto do chefe do Executivo." },
              {
                letra: "B",
                texto: "por autorização legislativa e posterior registro.",
              },
              { letra: "C", texto: "diretamente por lei específica." },
              { letra: "D", texto: "por resolução do Tribunal de Contas." },
              { letra: "E", texto: "por contrato de gestão." },
            ],
            gabarito: "C",
            justificativa:
              "Art. 37, XIX, CF: autarquias são CRIADAS DIRETAMENTE por lei específica. Já EP e SEM são AUTORIZADAS por lei e dependem de registro.",
            dificuldade: "Fácil",
            competencia: "Criação de autarquias",
            banca: "IADES",
            tags: ["autarquia", "criação"],
          },
          {
            id: "da-q-9-3",
            enunciado:
              "A diferença entre empresa pública e sociedade de economia mista quanto à forma societária é que:",
            alternativas: [
              {
                letra: "A",
                texto: "ambas devem ser constituídas como sociedade anônima.",
              },
              {
                letra: "B",
                texto:
                  "empresa pública só pode ser S/A, enquanto SEM pode ser qualquer forma.",
              },
              {
                letra: "C",
                texto:
                  "empresa pública pode assumir qualquer forma, enquanto SEM só pode ser S/A.",
              },
              {
                letra: "D",
                texto: "ambas devem ser constituídas como sociedade limitada.",
              },
              {
                letra: "E",
                texto: "não há diferença quanto à forma societária.",
              },
            ],
            gabarito: "C",
            justificativa:
              "EP pode assumir QUALQUER forma societária admitida em direito. SEM SOMENTE pode ser constituída como Sociedade Anônima (S/A).",
            dificuldade: "Média",
            competencia: "EP x SEM",
            banca: "IADES",
            tags: ["empresa pública", "SEM", "forma"],
          },
          {
            id: "da-q-9-4",
            enunciado:
              "O instrumento que vincula as Organizações Sociais ao Poder Público é o:",
            alternativas: [
              { letra: "A", texto: "termo de parceria." },
              { letra: "B", texto: "contrato de gestão." },
              { letra: "C", texto: "convênio." },
              { letra: "D", texto: "acordo de cooperação." },
              { letra: "E", texto: "termo de fomento." },
            ],
            gabarito: "B",
            justificativa:
              "As Organizações Sociais são vinculadas por CONTRATO DE GESTÃO (Lei 9.637/98). As OSCIP usam termo de parceria.",
            dificuldade: "Fácil",
            competencia: "Organizações Sociais",
            banca: "IADES",
            tags: ["OS", "contrato de gestão"],
          },
          {
            id: "da-q-9-5",
            enunciado: "Os Serviços Sociais Autônomos (Sistema S):",
            alternativas: [
              {
                letra: "A",
                texto: "integram a Administração Pública Indireta.",
              },
              {
                letra: "B",
                texto: "são pessoas jurídicas de direito público.",
              },
              {
                letra: "C",
                texto:
                  "devem seguir a Lei nº 14.133/2021 para suas contratações.",
              },
              {
                letra: "D",
                texto: "são custeados por contribuições parafiscais.",
              },
              {
                letra: "E",
                texto: "não podem celebrar contratos com o Poder Público.",
              },
            ],
            gabarito: "D",
            justificativa:
              "O Sistema S é custeado por CONTRIBUIÇÕES PARAFISCAIS (compulsórias). Não integra a Administração Indireta, são pessoas de direito privado e seguem regulamento próprio de licitação.",
            dificuldade: "Média",
            competencia: "Sistema S",
            banca: "IADES",
            tags: ["sistema S", "parafiscais"],
          },
          {
            id: "da-q-9-6",
            enunciado: "A qualificação como OSCIP é concedida:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "pelo Ministério da área de atuação, como ato discricionário.",
              },
              {
                letra: "B",
                texto: "pelo Ministério da Justiça, como ato vinculado.",
              },
              {
                letra: "C",
                texto: "pelo Tribunal de Contas, mediante fiscalização.",
              },
              {
                letra: "D",
                texto: "pela Presidência da República, por decreto.",
              },
              { letra: "E", texto: "pelo Congresso Nacional, por resolução." },
            ],
            gabarito: "B",
            justificativa:
              "A qualificação como OSCIP é concedida pelo MINISTÉRIO DA JUSTIÇA como ato VINCULADO (preenchidos os requisitos, deve qualificar). A qualificação como OS é discricionária.",
            dificuldade: "Média",
            competencia: "OSCIP",
            banca: "IADES",
            tags: ["OSCIP", "qualificação"],
          },
          {
            id: "da-q-9-7",
            enunciado:
              "As causas envolvendo empresas públicas federais devem ser processadas e julgadas perante:",
            alternativas: [
              { letra: "A", texto: "a Justiça Estadual." },
              { letra: "B", texto: "a Justiça do Trabalho." },
              { letra: "C", texto: "a Justiça Federal." },
              { letra: "D", texto: "tribunais de arbitragem." },
              { letra: "E", texto: "o Tribunal de Contas." },
            ],
            gabarito: "C",
            justificativa:
              "Empresas públicas FEDERAIS têm foro na JUSTIÇA FEDERAL (art. 109, I, CF). Já as SEM federais têm foro na Justiça Estadual (regra).",
            dificuldade: "Média",
            competencia: "Foro de EP",
            banca: "IADES",
            tags: ["empresa pública", "foro"],
          },
          {
            id: "da-q-9-8",
            enunciado: "A Agência Executiva é:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "uma nova espécie de entidade da Administração Indireta.",
              },
              {
                letra: "B",
                texto:
                  "uma qualificação dada a autarquia ou fundação com contrato de gestão.",
              },
              {
                letra: "C",
                texto: "uma organização social de interesse público.",
              },
              { letra: "D", texto: "uma espécie de empresa estatal." },
              { letra: "E", texto: "um órgão da Administração Direta." },
            ],
            gabarito: "B",
            justificativa:
              "Agência Executiva é uma QUALIFICAÇÃO dada a autarquia ou fundação que celebra contrato de gestão e possui plano de reestruturação, não é nova espécie de entidade.",
            dificuldade: "Média",
            competencia: "Agência Executiva",
            banca: "IADES",
            tags: ["agência executiva", "qualificação"],
          },
          {
            id: "da-q-9-9",
            enunciado: "São exemplos de autarquias federais:",
            alternativas: [
              { letra: "A", texto: "Correios e Caixa Econômica Federal." },
              { letra: "B", texto: "Petrobras e Banco do Brasil." },
              { letra: "C", texto: "INSS, IBAMA e ANVISA." },
              { letra: "D", texto: "BNDES e Infraero." },
              { letra: "E", texto: "Fundação Getúlio Vargas e SESI." },
            ],
            gabarito: "C",
            justificativa:
              "INSS, IBAMA e ANVISA são autarquias. Correios, CEF, BNDES, Infraero são empresas públicas. Petrobras e BB são SEM. SESI é serviço social autônomo.",
            dificuldade: "Fácil",
            competencia: "Exemplos de autarquias",
            banca: "IADES",
            tags: ["autarquia", "exemplos"],
          },
          {
            id: "da-q-9-10",
            enunciado:
              "A descentralização administrativa por outorga ocorre quando:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "há delegação apenas da execução do serviço a particular.",
              },
              {
                letra: "B",
                texto:
                  "há transferência da titularidade e da execução por lei.",
              },
              { letra: "C", texto: "há criação de órgãos internos." },
              {
                letra: "D",
                texto: "há subordinação hierárquica entre entidades.",
              },
              { letra: "E", texto: "há concentração de competências." },
            ],
            gabarito: "B",
            justificativa:
              "Descentralização por OUTORGA (ou por serviço) transfere a TITULARIDADE e a execução, mediante lei, criando entidade da Administração Indireta. Por delegação transfere apenas a execução.",
            dificuldade: "Média",
            competencia: "Descentralização",
            banca: "IADES",
            tags: ["descentralização", "outorga"],
          },
        ],
      },
    },
    {
      id: "da-topico-10",
      numero: 10,
      titulo: "Controle da Administração Pública",
      conteudo: {
        resumo: `
## Resumo Rápido

### Quadro Geral do Controle

| Tipo | Quem exerce | Base |
|------|-------------|------|
| **INTERNO** | A própria Administração | Art. 74, CF |
| **EXTERNO** | Legislativo + TC | Art. 70-71, CF |
| **JUDICIAL** | Poder Judiciário | Art. 5º, XXXV, CF |

### Classificações Principais

**Quanto ao ÓRGÃO:**
- **INTERNO**: dentro da mesma estrutura (autotutela)
- **EXTERNO**: por órgão estranho à estrutura

**Quanto ao MOMENTO:**
- **PRÉVIO** (a priori): antes do ato
- **CONCOMITANTE**: durante a execução
- **POSTERIOR** (a posteriori): após o ato

**Quanto ao ASPECTO:**
- **LEGALIDADE**: conformidade com a lei
- **MÉRITO**: conveniência e oportunidade

### Para IADES - Pontos Críticos:
- Judiciário controla LEGALIDADE, não mérito
- Tribunais de Contas: órgão AUXILIAR, sem subordinação
- Súmula Vinculante 3: TC deve assegurar contraditório
- Controle interno é OBRIGATÓRIO (art. 74, CF)
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito e Fundamentos do Controle

O **controle da Administração Pública** consiste no conjunto de mecanismos jurídicos e administrativos pelos quais se exerce o **poder de fiscalização e revisão** da atividade administrativa.

#### Fundamentos Constitucionais
- **Art. 70, CF**: Fiscalização contábil, financeira, orçamentária, operacional e patrimonial
- **Art. 74, CF**: Sistema de controle interno
- **Art. 5º, XXXV, CF**: Inafastabilidade da jurisdição

#### Finalidades do Controle
1. **Assegurar a legalidade**: conformidade com as normas
2. **Garantir a legitimidade**: atendimento ao interesse público
3. **Verificar a economicidade**: uso racional dos recursos
4. **Proteger o patrimônio público**: evitar desvios
5. **Promover a eficiência**: otimização de resultados

### 2. Classificações do Controle

#### 2.1 Quanto ao ÓRGÃO CONTROLADOR

##### Controle INTERNO
- Exercido **dentro da mesma estrutura** administrativa
- Também chamado de **autotutela** ou controle administrativo
- Pode analisar **legalidade E mérito**

**Exemplos:**
- Revisão hierárquica
- Supervisão ministerial
- Corregedorias
- Controladorias (CGU)

##### Controle EXTERNO
- Exercido por **órgão estranho** à estrutura
- Pode ser: legislativo, judicial, social

**Exemplos:**
- Tribunal de Contas fiscalizando o Executivo
- Judiciário anulando ato administrativo
- Cidadão por meio de ação popular

#### 2.2 Quanto ao MOMENTO

| Momento | Descrição | Exemplo |
|---------|-----------|---------|
| **PRÉVIO** | Antes do ato produzir efeitos | Autorização legislativa para alienação |
| **CONCOMITANTE** | Durante a execução | Acompanhamento de obra |
| **POSTERIOR** | Após a execução | Prestação de contas, auditoria |

#### 2.3 Quanto ao ASPECTO

##### Controle de LEGALIDADE
- Verifica conformidade com a **lei**
- Pode ser exercido por **qualquer Poder**
- Resultado: anulação do ato ilegal

##### Controle de MÉRITO
- Analisa **conveniência e oportunidade**
- Exercido **somente pela própria Administração**
- Resultado: revogação do ato inconveniente

⚠️ **ATENÇÃO IADES**: O Judiciário NÃO controla mérito administrativo, apenas legalidade!

### 3. Controle Exercido pela Administração Pública (Controle Interno)

#### 3.1 Fundamento: Poder de Autotutela

A Administração tem o poder-dever de **rever seus próprios atos**:
- **ANULAR** os ilegais
- **REVOGAR** os inconvenientes

**Súmula 473, STF:**
> "A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos."

#### 3.2 Características do Controle Interno

| Característica | Descrição |
|----------------|-----------|
| **Obrigatório** | Art. 74, CF determina que os Poderes mantenham sistema integrado |
| **Permanente** | Atua continuamente, não apenas pontualmente |
| **Amplo** | Abrange legalidade E mérito |
| **De ofício** | Independe de provocação |

#### 3.3 Instrumentos de Controle Interno

1. **Controle hierárquico**: superior sobre inferior
2. **Supervisão ministerial**: Ministro sobre entidades vinculadas
3. **Controle correcional**: corregedorias
4. **Auditoria interna**: verificação técnica
5. **Ouvidoria**: canal com o cidadão

#### 3.4 Controladorias

- **CGU** (Controladoria-Geral da União): órgão central de controle interno federal
- Funções: auditoria, correição, ouvidoria, prevenção à corrupção

### 4. Controle Judicial

#### 4.1 Fundamento Constitucional

**Art. 5º, XXXV, CF:**
> "A lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito."

É o sistema de **jurisdição UNA** (una = única): todos os litígios podem ser apreciados pelo Judiciário.

#### 4.2 Características

| Aspecto | Descrição |
|---------|-----------|
| **Provocação** | Depende de iniciativa da parte (inércia) |
| **Definitividade** | Produz coisa julgada |
| **Substitutividade** | Substitui a vontade das partes |
| **Escopo** | APENAS legalidade/legitimidade |

#### 4.3 Limites do Controle Judicial

✅ **PODE** controlar:
- Legalidade dos atos
- Vícios de competência, forma, finalidade
- Razoabilidade e proporcionalidade
- Motivação (obrigatória quando exigida)

❌ **NÃO PODE** controlar:
- Mérito administrativo (conveniência/oportunidade)
- Oportunidade de editar atos discricionários
- Escolhas políticas legítimas

⚠️ **Exceção aparente**: Pode analisar se há desvio de finalidade ou desproporcionalidade, mas isso é controle de **legalidade**, não de mérito.

#### 4.4 Principais Ações de Controle Judicial

| Ação | Objetivo | Legitimidade |
|------|----------|--------------|
| **Ação Popular** | Anular ato lesivo | Cidadão eleitor |
| **Mandado de Segurança** | Proteger direito líquido e certo | Titular do direito |
| **Ação Civil Pública** | Proteger interesses difusos/coletivos | MP, DP, entes públicos |
| **Habeas Data** | Acesso a informações pessoais | Titular dos dados |
| **Ação de Improbidade** | Punir atos ímprobos | Exclusivamente o MP (Lei 14.230/21) |

### 5. Controle Legislativo

#### 5.1 Fundamento e Natureza

O controle legislativo sobre a Administração é **político e financeiro**, exercido pelo Congresso Nacional (art. 49, X, CF).

#### 5.2 Instrumentos de Controle Legislativo

##### a) Controle Político
- **Sustação de atos** que exorbitem o poder regulamentar (art. 49, V)
- **Autorização prévia** para certos atos (ex: alienação de terras públicas)
- **Aprovação de indicações** (ex: Ministros do STF, diretores de agências)
- **CPIs** (Comissões Parlamentares de Inquérito)

##### b) Controle Financeiro (com auxílio do TC)
- **Julgamento das contas** do Presidente (art. 49, IX)
- Análise da **execução orçamentária**
- Fiscalização de **gastos públicos**

#### 5.3 Comissões Parlamentares de Inquérito (CPI)

| Aspecto | Descrição |
|---------|-----------|
| **Criação** | 1/3 da Casa, fato determinado, prazo certo |
| **Poderes** | Investigatórios próprios de autoridades judiciais |
| **PODE** | Quebrar sigilo bancário, fiscal, dados |
| **NÃO PODE** | Busca domiciliar, prisão, interceptação telefônica |
| **Resultado** | Encaminha conclusões ao MP se houver crime |

### 6. Controle pelos Tribunais de Contas

#### 6.1 Natureza Jurídica

- Órgão **técnico e autônomo**
- **Auxilia** o Legislativo, mas **NÃO** é subordinado
- Não integra o Poder Judiciário
- Suas decisões têm natureza **administrativa**

#### 6.2 O TCU - Tribunal de Contas da União

**Composição**: 9 Ministros
- 1/3 indicados pelo Presidente (aprovados pelo Senado)
- 2/3 indicados pelo Congresso Nacional

**Requisitos** (art. 73, §1º, CF):
- Mais de 35 e menos de 70 anos
- Idoneidade moral e reputação ilibada
- Notórios conhecimentos jurídicos, contábeis, econômicos ou de administração pública
- Mais de 10 anos de exercício profissional

#### 6.3 Competências do TCU (Art. 71, CF)

| Competência | Descrição |
|-------------|-----------|
| **Apreciar contas do PR** | Parecer prévio em 60 dias |
| **Julgar contas** | De administradores de recursos públicos |
| **Apreciar atos de pessoal** | Admissões e aposentadorias (registro) |
| **Realizar inspeções e auditorias** | De ofício ou a pedido |
| **Fiscalizar recursos repassados** | A Estados, DF, Municípios |
| **Aplicar sanções** | Multa, imputação de débito |
| **Sustar atos** | Se não atendido em prazo |

#### 6.4 Súmula Vinculante nº 3, STF

> "Nos processos perante o Tribunal de Contas da União asseguram-se o contraditório e a ampla defesa quando da decisão puder resultar anulação ou revogação de ato administrativo que beneficie o interessado."

⚠️ **Exceção**: Apreciação inicial da legalidade de admissão ou concessão de aposentadoria não exige contraditório (STF, MS 25.116).

#### 6.5 Pontos Críticos sobre o TC

1. **NÃO é subordinado** ao Legislativo (auxilia, mas é autônomo)
2. **NÃO integra** o Poder Judiciário
3. Suas decisões **NÃO fazem** coisa julgada
4. **PODE aplicar** sanções diretamente (multa)
5. **Contas do PR**: TC apenas emite PARECER; quem JULGA é o Congresso

### 7. Controle Social

Exercido diretamente pela sociedade:
- **Ação Popular** (art. 5º, LXXIII)
- **Conselhos** de políticas públicas
- **Audiências públicas**
- **Portal da Transparência**
- **Lei de Acesso à Informação** (Lei 12.527/2011)

### 8. Aplicação na Vigilância Sanitária

#### 8.1 Controle Interno na VISA
- Corregedorias das SES
- Auditorias internas da ANVISA
- Supervisão ministerial pelo MS

#### 8.2 Controle Externo da VISA
- TCU fiscaliza a ANVISA (autarquia federal)
- Congresso pode criar CPI sobre VISA
- Judiciário pode anular atos ilegais

#### 8.3 Controle Social
- Denúncias de irregularidades sanitárias
- Participação em conselhos de saúde
- LAI para acesso a processos
        `,

        pontosChave: [
          "Controle INTERNO: pela própria Administração (autotutela, art. 74, CF)",
          "Controle EXTERNO: Legislativo + TC (art. 70-71, CF)",
          "Controle JUDICIAL: apenas LEGALIDADE, nunca mérito administrativo",
          "Súmula 473, STF: Administração pode anular (ilegais) ou revogar (inconvenientes)",
          "TCU: órgão autônomo que AUXILIA o Legislativo, mas não é subordinado",
          "TCU: 9 Ministros (1/3 Presidente, 2/3 Congresso)",
          "Contas do Presidente: TC emite PARECER, Congresso JULGA",
          "Súmula Vinculante 3: TC deve assegurar contraditório e ampla defesa",
          "CPI: poderes de investigação, NÃO pode prender ou fazer busca domiciliar",
          "Decisões do TC não fazem coisa julgada (natureza administrativa)",
        ],

        armadilhas: [
          {
            titulo: "Achar que o Judiciário controla mérito",
            descricao:
              "O Judiciário só controla LEGALIDADE. Não pode substituir a escolha discricionária do administrador.",
            dica: "Mesmo a análise de proporcionalidade é controle de LEGALIDADE, não de mérito.",
          },
          {
            titulo: "Confundir 'auxiliar' com 'subordinado'",
            descricao:
              "O TC auxilia o Legislativo mas NÃO é subordinado. É órgão autônomo.",
            dica: "Auxiliar significa cooperar, não obedecer.",
          },
          {
            titulo: "Achar que TC julga contas do Presidente",
            descricao:
              "O TC apenas emite PARECER PRÉVIO. Quem JULGA as contas do PR é o Congresso Nacional.",
            dica: "TC julga contas de todos, EXCETO do Presidente da República.",
          },
          {
            titulo: "Pensar que CPI pode prender ou fazer busca",
            descricao:
              "CPI tem poderes investigatórios, mas NÃO pode decretar prisão, busca domiciliar ou interceptação telefônica (cláusula de reserva jurisdicional).",
            dica: "CPI investiga. Quem prende e condena é o Judiciário.",
          },
        ],

        mnemonicos: [
          {
            termo: "IEJ",
            significado: "Interno, Externo, Judicial",
            frase: "Os 3 tipos principais de controle: IEJ",
          },
          {
            termo: "ANULA-REVOGA",
            significado: "Anula ilegal, Revoga inconveniente",
            frase: "Súmula 473: ANULA o ilegal, REVOGA o inconveniente",
          },
          {
            termo: "1/3-2/3",
            significado: "TCU: 1/3 Presidente, 2/3 Congresso",
            frase: "Composição do TCU: um terço PR, dois terços CN",
          },
          {
            termo: "PR-PA-JU",
            significado: "Presidente: Parecer, não Julgamento",
            frase: "Contas do PR: TC dá Parecer, CN Julga",
          },
        ],

        flashcards: [
          {
            id: "da-fc-10-1",
            frente: "Qual a diferença entre controle INTERNO e EXTERNO?",
            verso:
              "**INTERNO**: exercido dentro da mesma estrutura administrativa (autotutela)\n→ Própria Administração\n→ Analisa legalidade E mérito\n\n**EXTERNO**: exercido por órgão estranho à estrutura\n→ Legislativo, TC, Judiciário\n→ Em regra, só legalidade",
            tags: ["controle", "interno", "externo"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-2",
            frente: "O Judiciário pode controlar o MÉRITO administrativo?",
            verso:
              "**NÃO!**\n\nO Judiciário só controla a **LEGALIDADE** dos atos administrativos.\n\nNão pode substituir a conveniência e oportunidade do administrador.\n\nMesmo a análise de proporcionalidade/razoabilidade é controle de LEGALIDADE, não de mérito.",
            tags: ["judicial", "mérito", "legalidade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-3",
            frente: "O que diz a Súmula 473 do STF?",
            verso:
              'A Administração pode:\n\n**ANULAR** seus atos **ilegais**\n→ De ofício ou por provocação\n→ Não gera direitos adquiridos\n\n**REVOGAR** atos **inconvenientes**\n→ Apenas pela Administração\n→ Respeita direitos adquiridos\n\nÉ o poder de **AUTOTUTELA**.',
            tags: ["súmula 473", "autotutela"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-4",
            frente: "Qual a composição do TCU?",
            verso:
              "**9 MINISTROS**\n\nIndicação:\n- **1/3 (3)**: Presidente da República (aprovados pelo Senado)\n- **2/3 (6)**: Congresso Nacional\n\nRequisitos:\n- 35-70 anos\n- Idoneidade moral\n- Notórios conhecimentos\n- +10 anos de exercício",
            tags: ["TCU", "composição"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-5",
            frente: "Quem JULGA as contas do Presidente da República?",
            verso:
              "O **CONGRESSO NACIONAL** julga as contas do PR (art. 49, IX, CF).\n\nO TCU apenas emite **PARECER PRÉVIO** (em 60 dias).\n\n⚠️ Para todos os demais administradores, quem julga é o próprio TCU!",
            tags: ["contas", "presidente", "TCU"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-6",
            frente: "O TCU é subordinado ao Poder Legislativo?",
            verso:
              "**NÃO!**\n\nO TCU **AUXILIA** o Legislativo, mas é **órgão autônomo**.\n\nNão há subordinação hierárquica.\n\nO TCU:\n- Não integra o Legislativo\n- Não integra o Judiciário\n- É órgão de controle externo autônomo",
            tags: ["TCU", "autonomia"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-7",
            frente: "O que pode e o que NÃO pode a CPI fazer?",
            verso:
              "**PODE:**\n- Quebrar sigilo bancário, fiscal, dados\n- Ouvir testemunhas\n- Requisitar documentos\n\n**NÃO PODE** (reserva de jurisdição):\n- Decretar prisão\n- Busca domiciliar\n- Interceptação telefônica\n- Determinar indisponibilidade de bens",
            tags: ["CPI", "poderes"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-10-8",
            frente: "O que diz a Súmula Vinculante nº 3?",
            verso:
              "Nos processos perante o TCU devem ser assegurados **contraditório e ampla defesa** quando a decisão puder resultar em:\n- Anulação de ato\n- Revogação de ato\n\nque beneficie o interessado.\n\n⚠️ Exceção: apreciação inicial de aposentadoria/admissão.",
            tags: ["SV 3", "TCU", "contraditório"],
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
            id: "da-q-10-1",
            enunciado:
              "O controle exercido pela Administração sobre seus próprios atos, podendo anulá-los quando ilegais ou revogá-los quando inconvenientes, denomina-se:",
            alternativas: [
              { letra: "A", texto: "controle judicial." },
              { letra: "B", texto: "controle legislativo." },
              { letra: "C", texto: "controle social." },
              { letra: "D", texto: "autotutela." },
              { letra: "E", texto: "controle externo." },
            ],
            gabarito: "D",
            justificativa:
              "A AUTOTUTELA é o poder da Administração de rever seus próprios atos, anulando os ilegais ou revogando os inconvenientes (Súmula 473, STF). É forma de controle interno.",
            dificuldade: "Fácil",
            competencia: "Autotutela",
            banca: "IADES",
            tags: ["autotutela", "controle interno"],
          },
          {
            id: "da-q-10-2",
            enunciado:
              "O controle judicial sobre os atos administrativos pode verificar:",
            alternativas: [
              {
                letra: "A",
                texto: "apenas o mérito administrativo.",
              },
              {
                letra: "B",
                texto: "a legalidade e o mérito administrativo.",
              },
              {
                letra: "C",
                texto: "apenas a legalidade, não o mérito.",
              },
              {
                letra: "D",
                texto: "a conveniência e oportunidade do ato.",
              },
              {
                letra: "E",
                texto: "exclusivamente a eficiência administrativa.",
              },
            ],
            gabarito: "C",
            justificativa:
              "O Poder Judiciário só pode controlar a LEGALIDADE dos atos administrativos, não podendo adentrar no mérito (conveniência e oportunidade), que é exclusivo da Administração.",
            dificuldade: "Média",
            competencia: "Controle judicial",
            banca: "IADES",
            tags: ["judicial", "legalidade"],
          },
          {
            id: "da-q-10-3",
            enunciado: "Sobre o Tribunal de Contas da União (TCU), é correto afirmar:",
            alternativas: [
              {
                letra: "A",
                texto: "é órgão subordinado ao Poder Legislativo.",
              },
              {
                letra: "B",
                texto: "integra a estrutura do Poder Judiciário.",
              },
              {
                letra: "C",
                texto: "julga as contas do Presidente da República.",
              },
              {
                letra: "D",
                texto:
                  "auxilia o Congresso Nacional no exercício do controle externo.",
              },
              {
                letra: "E",
                texto: "suas decisões fazem coisa julgada.",
              },
            ],
            gabarito: "D",
            justificativa:
              "O TCU AUXILIA o Congresso no controle externo (art. 71, CF), mas NÃO é subordinado a ele. Não integra o Judiciário, suas decisões não fazem coisa julgada, e quem JULGA as contas do PR é o próprio Congresso.",
            dificuldade: "Média",
            competencia: "TCU",
            banca: "IADES",
            tags: ["TCU", "auxílio"],
          },
          {
            id: "da-q-10-4",
            enunciado:
              "As contas anuais do Presidente da República são:",
            alternativas: [
              {
                letra: "A",
                texto: "julgadas pelo Tribunal de Contas da União.",
              },
              {
                letra: "B",
                texto:
                  "apreciadas pelo TCU mediante parecer prévio e julgadas pelo Congresso Nacional.",
              },
              {
                letra: "C",
                texto: "julgadas diretamente pelo Supremo Tribunal Federal.",
              },
              {
                letra: "D",
                texto: "dispensadas de qualquer apreciação.",
              },
              {
                letra: "E",
                texto: "julgadas pela Câmara dos Deputados.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O TCU elabora PARECER PRÉVIO em 60 dias (art. 71, I, CF), mas quem JULGA as contas do PR é o Congresso Nacional (art. 49, IX, CF).",
            dificuldade: "Média",
            competencia: "Contas do Presidente",
            banca: "IADES",
            tags: ["contas", "presidente"],
          },
          {
            id: "da-q-10-5",
            enunciado:
              "Segundo a Súmula 473 do STF, a Administração Pública:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "pode anular seus próprios atos ilegais, sem ressalvar direitos adquiridos.",
              },
              {
                letra: "B",
                texto:
                  "pode revogar atos ilegais e anular os inconvenientes.",
              },
              {
                letra: "C",
                texto:
                  "depende de autorização judicial para rever seus atos.",
              },
              {
                letra: "D",
                texto:
                  "pode anular atos ilegais e revogar os inconvenientes, respeitados os direitos adquiridos.",
              },
              {
                letra: "E",
                texto: "não pode rever atos que já produziram efeitos.",
              },
            ],
            gabarito: "D",
            justificativa:
              "A Súmula 473 estabelece que a Administração pode ANULAR atos ilegais (de que não se originam direitos) e REVOGAR por conveniência/oportunidade, respeitados os direitos adquiridos.",
            dificuldade: "Média",
            competencia: "Súmula 473",
            banca: "IADES",
            tags: ["súmula 473", "autotutela"],
          },
          {
            id: "da-q-10-6",
            enunciado:
              "Quanto à Comissão Parlamentar de Inquérito (CPI), é CORRETO afirmar que:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "pode decretar a prisão preventiva de investigados.",
              },
              {
                letra: "B",
                texto: "pode determinar busca domiciliar.",
              },
              {
                letra: "C",
                texto: "pode quebrar sigilo bancário e fiscal.",
              },
              {
                letra: "D",
                texto: "pode interceptar comunicações telefônicas.",
              },
              {
                letra: "E",
                texto: "pode julgar e condenar os investigados.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A CPI pode QUEBRAR SIGILO bancário, fiscal e de dados. Não pode: prender, fazer busca domiciliar, interceptar telefone (cláusula de reserva de jurisdição), nem julgar (compete ao Judiciário).",
            dificuldade: "Média",
            competencia: "CPI",
            banca: "IADES",
            tags: ["CPI", "poderes"],
          },
          {
            id: "da-q-10-7",
            enunciado:
              "A composição do Tribunal de Contas da União é de:",
            alternativas: [
              {
                letra: "A",
                texto:
                  "11 Ministros, todos indicados pelo Presidente da República.",
              },
              {
                letra: "B",
                texto:
                  "9 Ministros, sendo 1/3 indicados pelo Presidente e 2/3 pelo Congresso.",
              },
              {
                letra: "C",
                texto:
                  "9 Ministros, todos indicados pelo Congresso Nacional.",
              },
              {
                letra: "D",
                texto:
                  "7 Ministros, sendo metade indicados pelo Judiciário.",
              },
              {
                letra: "E",
                texto:
                  "5 Ministros vitalícios, indicados pelo Senado Federal.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O TCU é composto por 9 Ministros: 1/3 (3) indicados pelo Presidente da República (com aprovação do Senado) e 2/3 (6) pelo Congresso Nacional.",
            dificuldade: "Fácil",
            competencia: "Composição TCU",
            banca: "IADES",
            tags: ["TCU", "composição"],
          },
          {
            id: "da-q-10-8",
            enunciado:
              "A Súmula Vinculante nº 3 do STF estabelece que, nos processos perante o TCU:",
            alternativas: [
              {
                letra: "A",
                texto: "é dispensável o contraditório.",
              },
              {
                letra: "B",
                texto:
                  "o contraditório só é exigido em processos criminais.",
              },
              {
                letra: "C",
                texto:
                  "devem ser assegurados contraditório e ampla defesa quando a decisão puder anular ato que beneficie o interessado.",
              },
              {
                letra: "D",
                texto:
                  "o TCU pode julgar sem ouvir as partes interessadas.",
              },
              {
                letra: "E",
                texto:
                  "apenas o Ministério Público deve ser ouvido.",
              },
            ],
            gabarito: "C",
            justificativa:
              "A SV 3 determina que o TCU deve assegurar contraditório e ampla defesa quando sua decisão puder resultar em anulação ou revogação de ato que beneficie o interessado.",
            dificuldade: "Média",
            competencia: "SV 3",
            banca: "IADES",
            tags: ["SV 3", "contraditório"],
          },
          {
            id: "da-q-10-9",
            enunciado:
              "O controle exercido pelo Poder Legislativo sobre a Administração Pública caracteriza-se como:",
            alternativas: [
              {
                letra: "A",
                texto: "controle interno.",
              },
              {
                letra: "B",
                texto: "controle externo.",
              },
              {
                letra: "C",
                texto: "autotutela.",
              },
              {
                letra: "D",
                texto: "controle hierárquico.",
              },
              {
                letra: "E",
                texto: "supervisão ministerial.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O controle exercido pelo Legislativo (com auxílio do TC) sobre o Executivo é CONTROLE EXTERNO, pois é exercido por Poder diverso daquele que praticou o ato.",
            dificuldade: "Fácil",
            competencia: "Controle externo",
            banca: "IADES",
            tags: ["legislativo", "controle externo"],
          },
          {
            id: "da-q-10-10",
            enunciado:
              "O sistema de controle interno, previsto no art. 74 da Constituição Federal:",
            alternativas: [
              {
                letra: "A",
                texto: "é facultativo para os entes federativos.",
              },
              {
                letra: "B",
                texto: "deve ser mantido de forma integrada pelos Poderes.",
              },
              {
                letra: "C",
                texto: "substitui o controle externo.",
              },
              {
                letra: "D",
                texto: "é exercido exclusivamente pelo Ministério Público.",
              },
              {
                letra: "E",
                texto: "somente se aplica ao Poder Executivo.",
              },
            ],
            gabarito: "B",
            justificativa:
              "O art. 74 da CF determina que os Poderes Legislativo, Executivo e Judiciário manterão, de forma INTEGRADA, sistema de controle interno. É obrigatório, não substitui o controle externo, e aplica-se aos três Poderes.",
            dificuldade: "Média",
            competencia: "Controle interno",
            banca: "IADES",
            tags: ["controle interno", "art. 74"],
          },
        ],
      },
    },
  ],
};
