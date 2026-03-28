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
            id: 'da-fc-9-1',
            frente: "Qual a diferença entre descentralização e desconcentração?",
            verso: "DESCENTRALIZAÇÃO: transfere atividade para OUTRA pessoa jurídica (cria entidade ou delega a particular). DESCONCENTRAÇÃO: distribui competências DENTRO da mesma pessoa (cria órgãos internos, relação hierárquica).",
            tags: ['descentralização', 'desconcentração'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-2',
            frente: "Como são criadas as autarquias?",
            verso: "Autarquias são CRIADAS DIRETAMENTE por lei específica. Têm personalidade de direito PÚBLICO e gozam de prerrogativas como imunidade tributária recíproca e prazos processuais em dobro.",
            tags: ['autarquia', 'criação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-3',
            frente: "Qual a diferença entre Empresa Pública e Sociedade de Economia Mista?",
            verso: "EP: capital 100% público, qualquer forma societária, foro na Justiça Federal. SEM: capital misto (maioria estatal), somente S/A, foro na Justiça Estadual (regra).",
            tags: ['EP', 'SEM', 'diferenças'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-4',
            frente: "O que são Organizações Sociais e qual instrumento as vincula ao Estado?",
            verso: "OS são entidades privadas qualificadas para atuar em áreas de interesse público. Vinculam-se ao Estado por CONTRATO DE GESTÃO (Lei 9.637/98). Atuam em ensino, pesquisa, saúde, cultura.",
            tags: ['OS', 'contrato de gestão'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-5',
            frente: "Qual a diferença entre OS e OSCIP?",
            verso: "OS: contrato de GESTÃO, qualificação discricionária, conselho obrigatório. OSCIP: termo de PARCERIA, qualificação vinculada, sem exigência de conselho, precisa existir há 3+ anos.",
            tags: ['OS', 'OSCIP', 'diferenças'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-6',
            frente: "O que são os Serviços Sociais Autônomos (Sistema S)?",
            verso: "Entidades privadas que atuam em formação profissional e assistência. Custeados por contribuições parafiscais (compulsórias). Exemplos: SESI, SENAI, SESC, SENAC, SEBRAE. Seguem regulamento próprio de licitação.",
            tags: ['Sistema S', 'serviços sociais'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-7',
            frente: "O que é Agência Executiva?",
            verso: "É uma QUALIFICAÇÃO dada a autarquia ou fundação que celebra CONTRATO DE GESTÃO e possui plano de reestruturação. Não é nova espécie, mas qualificação que confere maior autonomia. Ex: INMETRO.",
            tags: ['agência executiva', 'qualificação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-9-8',
            frente: "Quais são as características das Agências Reguladoras?",
            verso: "Autarquias em REGIME ESPECIAL: autonomia reforçada, dirigentes com mandato fixo e estabilidade, quarentena após deixar cargo, poder normativo técnico. Ex: ANVISA, ANS, ANATEL.",
            tags: ['agência reguladora', 'características'],
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
    {
      id: "da-topico-11",
      numero: 11,
      titulo: "Improbidade Administrativa: Lei nº 8.429/1992 e Lei nº 14.230/2021",
      conteudo: {
        resumo: `
## Resumo Rápido

### Lei de Improbidade Administrativa

A **Lei nº 8.429/1992** (LIA), com as alterações da **Lei nº 14.230/2021**, dispõe sobre as sanções aplicáveis aos agentes públicos nos casos de improbidade administrativa.

### Sujeitos

| Sujeito | Descrição |
|---------|-----------|
| **Sujeito Ativo** | Agente público (qualquer um que exerça função pública) |
| **Sujeito Passivo** | Entidade pública lesada |
| **Terceiro** | Particular que induz, concorre ou se beneficia |

### Categorias de Atos de Improbidade

| Categoria | Artigo | Gravidade | Elemento Subjetivo |
|-----------|--------|-----------|-------------------|
| **Enriquecimento ilícito** | Art. 9º | Mais grave | DOLO |
| **Prejuízo ao erário** | Art. 10 | Intermediária | DOLO |
| **Violação de princípios** | Art. 11 | Menos grave | DOLO |

### Principal Mudança - Lei 14.230/2021

**TODAS as modalidades exigem DOLO** (antes, prejuízo ao erário admitia culpa).

### Para IADES - Memorizar:
- Improbidade NÃO é crime (ilícito civil-administrativo)
- TODAS modalidades exigem DOLO (Lei 14.230/2021)
- Enriquecimento ilícito = mais grave
- Ação de improbidade: prescrição de 8 anos
- Foro comum (não há foro privilegiado)
        `,

        explicacao: `
## Explicação Didática

### 1. Natureza Jurídica

A improbidade administrativa é **ilícito de natureza civil-administrativa**, não criminal.

#### 1.1 Fundamento Constitucional

> Art. 37, §4º, CF: "Os atos de improbidade administrativa importarão a suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário, na forma e gradação previstas em lei, sem prejuízo da ação penal cabível."

### 2. Sujeito Ativo

#### 2.1 Agente Público (Art. 2º)

> "Todo aquele que exerce, ainda que transitoriamente ou sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, mandato, cargo, emprego ou função pública."

**Abrange:**
- Servidores estatutários
- Empregados públicos (CLT)
- Agentes políticos
- Particulares em colaboração
- Estagiários
- Mesários eleitorais

#### 2.2 Terceiros (Art. 3º)

Particulares podem responder por improbidade quando:
- **Induzem** o agente à prática do ato
- **Concorrem** para o ato
- **Beneficiam-se** direta ou indiretamente

⚠️ A Lei 14.230/2021 exige que terceiros participem da conduta dolosa do agente.

### 3. Sujeito Passivo

São as entidades lesadas:
- Administração direta e indireta
- Empresas incorporadas ao patrimônio público
- Entidades que recebam subvenção, auxílio, contribuição
- Entidades com participação do Poder Público

### 4. Atos de Improbidade (Após Lei 14.230/2021)

#### 4.1 Enriquecimento Ilícito (Art. 9º) - MAIS GRAVE

> "Auferir, mediante a prática de ato doloso, qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade pública."

**Exemplos:**
- Receber propina
- Usar bens públicos em proveito próprio
- Aceitar presentes de interessados
- Enriquecer durante mandato sem justificativa

**Elemento subjetivo:** DOLO

#### 4.2 Prejuízo ao Erário (Art. 10) - INTERMEDIÁRIA

> "Causar dano ao erário ou concorrer para sua ocorrência, mediante ação ou omissão dolosa."

**Exemplos:**
- Permitir aquisição acima do preço
- Facilitar alienação abaixo do valor
- Frustrar licitação
- Liberar verba indevidamente

**Elemento subjetivo:** DOLO (após Lei 14.230/2021)

⚠️ **IMPORTANTE:** Antes da Lei 14.230/2021, admitia-se CULPA no art. 10. Agora, somente DOLO.

#### 4.3 Violação de Princípios (Art. 11) - MENOS GRAVE

> "Praticar ato doloso que atente contra os princípios da administração pública, configurado quando verificada pelo menos uma das condutas."

**Exemplos:**
- Negar publicidade a atos oficiais
- Frustrar concurso público
- Revelar medida política antes da divulgação
- Descumprir normas de acessibilidade

**Elemento subjetivo:** DOLO

### 5. Sanções (Art. 12)

#### 5.1 Por Enriquecimento Ilícito (Art. 9º)

| Sanção | Previsão |
|--------|----------|
| Perda de bens | Acrescidos ilicitamente |
| Ressarcimento | Integral do dano |
| Perda da função | Sim |
| Suspensão direitos políticos | Até 14 anos |
| Multa | Até 3x o acréscimo |
| Proibição de contratar | Até 14 anos |

#### 5.2 Por Prejuízo ao Erário (Art. 10)

| Sanção | Previsão |
|--------|----------|
| Ressarcimento | Integral do dano |
| Perda de bens | Se houver |
| Perda da função | Sim |
| Suspensão direitos políticos | Até 12 anos |
| Multa | Até 2x o dano |
| Proibição de contratar | Até 12 anos |

#### 5.3 Por Violação de Princípios (Art. 11)

| Sanção | Previsão |
|--------|----------|
| Ressarcimento | Se houver dano |
| Perda da função | Sim |
| Suspensão direitos políticos | Até 4 anos |
| Multa | Até 24x a remuneração |
| Proibição de contratar | Até 4 anos |

### 6. Elemento Subjetivo - GRANDE MUDANÇA

#### 6.1 Antes da Lei 14.230/2021

| Artigo | Elemento Subjetivo |
|--------|-------------------|
| Art. 9º | Dolo |
| Art. 10 | Dolo ou **Culpa** |
| Art. 11 | Dolo |

#### 6.2 Após Lei 14.230/2021

| Artigo | Elemento Subjetivo |
|--------|-------------------|
| Art. 9º | DOLO |
| Art. 10 | DOLO |
| Art. 11 | DOLO |

⚠️ **NÃO EXISTE MAIS improbidade culposa!**

### 7. Prescrição (Art. 23)

#### 7.1 Prazo

| Situação | Prazo |
|----------|-------|
| **Regra geral** | 8 anos do fato |
| **Durante mandato** | 8 anos do término |
| **Inquérito/PAD instaurado** | Suspende até 180 dias |

#### 7.2 Ressarcimento ao Erário

- **Dano doloso:** Imprescritível (art. 37, §5º, CF)
- **Dano culposo:** Prescritível (8 anos)

### 8. Processo Judicial

#### 8.1 Legitimidade Ativa

- Ministério Público
- Pessoa jurídica interessada (lesada)

#### 8.2 Competência

- **Justiça Comum** (não há foro privilegiado)
- Estadual ou Federal, conforme o sujeito passivo

#### 8.3 Procedimento

1. Petição inicial com indícios
2. Notificação do réu (15 dias para defesa prévia)
3. Análise da inicial
4. Citação
5. Contestação
6. Instrução
7. Sentença

### 9. Acordos

#### 9.1 Acordo de Não Persecução Civil (Art. 17-B)

A Lei 14.230/2021 introduziu a possibilidade de acordo.

**Requisitos:**
- Confissão e colaboração
- Ressarcimento integral do dano
- Transferência dos bens obtidos
- Aplicação de sanções reduzidas
- Homologação judicial

### 10. Pontos Relevantes para Prova

#### 10.1 O que NÃO é Improbidade

- Mera ilegalidade (sem dolo)
- Irregularidade formal
- Erro administrativo de boa-fé
- Decisão discricionária legítima

#### 10.2 Independência das Instâncias

A responsabilização por improbidade é **independente** de:
- Processo criminal
- Processo administrativo disciplinar
- Ação de ressarcimento

⚠️ A absolvição criminal por inexistência do fato ou negativa de autoria vincula as demais esferas.
        `,

        pontosChave: [
          "Lei 8.429/1992 alterada pela Lei 14.230/2021",
          "Improbidade é ilícito CIVIL-ADMINISTRATIVO, não crime",
          "TODAS as modalidades exigem DOLO (mudança da Lei 14.230/2021)",
          "Art. 9º: enriquecimento ilícito (mais grave)",
          "Art. 10: prejuízo ao erário (intermediária)",
          "Art. 11: violação de princípios (menos grave)",
          "Prescrição: 8 anos do fato (regra geral)",
          "Ressarcimento por dano DOLOSO é IMPRESCRITÍVEL",
          "NÃO há foro privilegiado (Justiça comum)",
          "Terceiros podem responder se induzirem/concorrerem/beneficiarem",
        ],

        armadilhas: [
          {
            titulo: "Achar que improbidade admite culpa",
            descricao: "Após a Lei 14.230/2021, TODAS as modalidades exigem DOLO. Não existe mais improbidade culposa.",
            dica: "Lei 14.230/2021 = só DOLO em todas as modalidades.",
          },
          {
            titulo: "Confundir improbidade com crime",
            descricao: "Improbidade é ilícito CIVIL-ADMINISTRATIVO. Crime é matéria penal. São esferas independentes.",
            dica: "Improbidade = civil. Crime = penal. Podem coexistir.",
          },
          {
            titulo: "Pensar que há foro privilegiado",
            descricao: "Não existe foro privilegiado para improbidade. A competência é da Justiça comum.",
            dica: "Improbidade = Justiça comum, mesmo para Presidente.",
          },
          {
            titulo: "Esquecer que terceiros podem responder",
            descricao: "Particulares que induzem, concorrem ou se beneficiam também podem ser réus na ação de improbidade.",
            dica: "Terceiro responde se induzir/concorrer/beneficiar (com dolo).",
          },
        ],

        mnemonicos: [
          {
            termo: "EPV",
            significado: "Enriquecimento, Prejuízo, Violação",
            frase: "Os 3 atos de improbidade: EPV (do mais grave ao menos grave)",
          },
          {
            termo: "DOLO-DOLO-DOLO",
            significado: "Todas as modalidades exigem dolo",
            frase: "Após 14.230/2021: DOLO-DOLO-DOLO (arts. 9, 10, 11)",
          },
          {
            termo: "8 ANOS",
            significado: "Prazo prescricional",
            frase: "Prescrição de improbidade: 8 ANOS do fato",
          },
          {
            termo: "ICB",
            significado: "Induz, Concorre, Beneficia",
            frase: "Terceiro responde se: ICB (Induz, Concorre, Beneficia)",
          },
        ],

        flashcards: [
          {
            id: "da-fc-11-1",
            frente: "Qual a natureza jurídica da improbidade administrativa?",
            verso: "**Ilícito CIVIL-ADMINISTRATIVO**\n\nNÃO é crime (matéria penal).\n\nA ação de improbidade tramita na Justiça Comum, com sanções civis e políticas.\n\nPode haver responsabilização criminal SIMULTÂNEA, em processo separado.",
            tags: ["improbidade", "natureza"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-2",
            frente: "Quais são as 3 categorias de atos de improbidade e qual a mais grave?",
            verso: "**1. Enriquecimento ilícito (Art. 9º)** → MAIS GRAVE\n\n**2. Prejuízo ao erário (Art. 10)** → Intermediária\n\n**3. Violação de princípios (Art. 11)** → Menos grave\n\nMnemônico: **EPV** (do mais grave ao menos grave)",
            tags: ["atos", "categorias"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-3",
            frente: "Qual o elemento subjetivo exigido para improbidade após a Lei 14.230/2021?",
            verso: "**DOLO em TODAS as modalidades!**\n\nAntes da Lei 14.230/2021:\n- Art. 9º: Dolo\n- Art. 10: Dolo ou Culpa\n- Art. 11: Dolo\n\n**Após Lei 14.230/2021:**\n- Art. 9º: DOLO\n- Art. 10: DOLO\n- Art. 11: DOLO\n\n⚠️ Não existe mais improbidade culposa!",
            tags: ["dolo", "Lei 14.230"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-4",
            frente: "Qual o prazo prescricional da ação de improbidade?",
            verso: "**8 ANOS** (regra geral)\n\nContados:\n- Do fato (regra)\n- Do término do mandato/cargo em comissão\n\n**Exceção - IMPRESCRITÍVEL:**\n- Ação de ressarcimento por dano DOLOSO ao erário (art. 37, §5º, CF)",
            tags: ["prescrição", "prazo"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-5",
            frente: "Quem pode ser sujeito ativo de improbidade?",
            verso: "**Agente público:** qualquer pessoa que exerça função pública (art. 2º)\n\n- Servidor estatutário\n- Empregado público\n- Agente político\n- Particular em colaboração\n- Estagiário, mesário\n\n**Terceiros (art. 3º):**\n- Quem induz\n- Quem concorre\n- Quem se beneficia",
            tags: ["sujeito ativo", "agente"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-6",
            frente: "Existe foro privilegiado para ação de improbidade?",
            verso: "**NÃO!**\n\nA ação de improbidade administrativa tramita na **Justiça Comum** (1ª instância).\n\nMesmo autoridades com foro privilegiado em matéria criminal (Presidente, Governadores, etc.) respondem em 1ª instância nas ações de improbidade.\n\nCompetência: Federal ou Estadual, conforme a entidade lesada.",
            tags: ["competência", "foro"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-7",
            frente: "Quais as sanções para enriquecimento ilícito (art. 9º)?",
            verso: "**Sanções mais graves:**\n\n- Perda dos bens acrescidos ilicitamente\n- Ressarcimento integral do dano\n- Perda da função pública\n- Suspensão dos direitos políticos: **até 14 anos**\n- Multa: até 3x o acréscimo patrimonial\n- Proibição de contratar: até 14 anos",
            tags: ["sanções", "art. 9"],
            dificuldade: "dificil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-11-8",
            frente: "O que é o Acordo de Não Persecução Civil na LIA?",
            verso: "**Acordo de Não Persecução Civil (Art. 17-B)**\n\nIntroduzido pela Lei 14.230/2021.\n\n**Requisitos:**\n- Confissão e colaboração\n- Ressarcimento integral do dano\n- Transferência de bens ilícitos\n- Sanções reduzidas\n- Homologação judicial\n\nPermite solução consensual em improbidade.",
            tags: ["acordo", "ANPC"],
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
            id: "da-q-11-1",
            enunciado: "A improbidade administrativa, nos termos da Lei nº 8.429/1992, é considerada:",
            alternativas: [
              { letra: "A", texto: "crime contra a administração pública." },
              { letra: "B", texto: "infração penal de menor potencial ofensivo." },
              { letra: "C", texto: "ilícito de natureza civil-administrativa." },
              { letra: "D", texto: "contravenção administrativa." },
              { letra: "E", texto: "falta disciplinar grave." },
            ],
            gabarito: "C",
            justificativa: "A improbidade administrativa é ILÍCITO DE NATUREZA CIVIL-ADMINISTRATIVA, não criminal. As sanções são civis e políticas (perda de função, suspensão de direitos políticos, multa, etc.).",
            dificuldade: "Fácil",
            competencia: "Natureza da improbidade",
            banca: "IADES",
            tags: ["improbidade", "natureza"],
          },
          {
            id: "da-q-11-2",
            enunciado: "Com as alterações promovidas pela Lei nº 14.230/2021, o elemento subjetivo exigido para configuração de improbidade administrativa por prejuízo ao erário (art. 10) é:",
            alternativas: [
              { letra: "A", texto: "dolo ou culpa." },
              { letra: "B", texto: "apenas culpa grave." },
              { letra: "C", texto: "apenas dolo." },
              { letra: "D", texto: "responsabilidade objetiva." },
              { letra: "E", texto: "culpa presumida." },
            ],
            gabarito: "C",
            justificativa: "Após a Lei 14.230/2021, TODAS as modalidades de improbidade exigem DOLO, inclusive o prejuízo ao erário (art. 10). Não existe mais improbidade culposa.",
            dificuldade: "Média",
            competencia: "Elemento subjetivo",
            banca: "IADES",
            tags: ["dolo", "Lei 14.230"],
          },
          {
            id: "da-q-11-3",
            enunciado: "Segundo a Lei de Improbidade Administrativa, constitui ato de improbidade que importa enriquecimento ilícito:",
            alternativas: [
              { letra: "A", texto: "permitir a aquisição de bens acima do valor de mercado." },
              { letra: "B", texto: "negar publicidade aos atos oficiais." },
              { letra: "C", texto: "receber vantagem econômica para intermediar liberação de verba." },
              { letra: "D", texto: "frustrar a licitude de processo licitatório." },
              { letra: "E", texto: "revelar medida política antes de sua divulgação oficial." },
            ],
            gabarito: "C",
            justificativa: "Receber vantagem econômica indevida em razão da função pública é ENRIQUECIMENTO ILÍCITO (art. 9º). As alternativas A e D são prejuízo ao erário; B e E são violação de princípios.",
            dificuldade: "Média",
            competencia: "Enriquecimento ilícito",
            banca: "IADES",
            tags: ["art. 9", "enriquecimento"],
          },
          {
            id: "da-q-11-4",
            enunciado: "O prazo prescricional da ação de improbidade administrativa, conforme a Lei nº 14.230/2021, é de:",
            alternativas: [
              { letra: "A", texto: "5 anos do fato." },
              { letra: "B", texto: "8 anos do fato." },
              { letra: "C", texto: "10 anos do fato." },
              { letra: "D", texto: "15 anos do fato." },
              { letra: "E", texto: "imprescritível em qualquer caso." },
            ],
            gabarito: "B",
            justificativa: "O prazo prescricional da ação de improbidade é de 8 ANOS, contados do fato (art. 23). Apenas o ressarcimento por dano doloso ao erário é imprescritível.",
            dificuldade: "Fácil",
            competencia: "Prescrição",
            banca: "IADES",
            tags: ["prescrição", "prazo"],
          },
          {
            id: "da-q-11-5",
            enunciado: "A ação de improbidade administrativa deve ser processada e julgada:",
            alternativas: [
              { letra: "A", texto: "pelo tribunal competente conforme prerrogativa de foro." },
              { letra: "B", texto: "pela Justiça comum, em primeira instância." },
              { letra: "C", texto: "pelo Tribunal de Contas." },
              { letra: "D", texto: "pelo STF, em qualquer caso." },
              { letra: "E", texto: "pela Justiça Eleitoral." },
            ],
            gabarito: "B",
            justificativa: "NÃO há foro privilegiado para improbidade. A ação tramita na JUSTIÇA COMUM, em primeira instância, seja estadual ou federal, conforme a entidade lesada.",
            dificuldade: "Média",
            competencia: "Competência",
            banca: "IADES",
            tags: ["competência", "foro"],
          },
          {
            id: "da-q-11-6",
            enunciado: "A suspensão dos direitos políticos, no caso de enriquecimento ilícito (art. 9º), pode ser aplicada por até:",
            alternativas: [
              { letra: "A", texto: "4 anos." },
              { letra: "B", texto: "8 anos." },
              { letra: "C", texto: "10 anos." },
              { letra: "D", texto: "12 anos." },
              { letra: "E", texto: "14 anos." },
            ],
            gabarito: "E",
            justificativa: "Para ENRIQUECIMENTO ILÍCITO (art. 9º, mais grave), a suspensão dos direitos políticos pode ser de até 14 ANOS. Para prejuízo ao erário: até 12 anos. Para violação de princípios: até 4 anos.",
            dificuldade: "Média",
            competencia: "Sanções art. 9º",
            banca: "IADES",
            tags: ["sanções", "suspensão"],
          },
          {
            id: "da-q-11-7",
            enunciado: "Quanto ao terceiro que concorre para a prática de ato de improbidade, é CORRETO afirmar que:",
            alternativas: [
              { letra: "A", texto: "não pode ser responsabilizado por improbidade." },
              { letra: "B", texto: "responde apenas civilmente." },
              { letra: "C", texto: "pode responder por improbidade se agir com dolo." },
              { letra: "D", texto: "responde objetivamente." },
              { letra: "E", texto: "só responde se for servidor público." },
            ],
            gabarito: "C",
            justificativa: "O terceiro (particular) que induz, concorre ou se beneficia do ato de improbidade PODE RESPONDER, desde que tenha agido com DOLO (art. 3º, após Lei 14.230/2021).",
            dificuldade: "Média",
            competencia: "Terceiros",
            banca: "IADES",
            tags: ["terceiro", "responsabilidade"],
          },
          {
            id: "da-q-11-8",
            enunciado: "A ação de ressarcimento ao erário por dano causado dolosamente é:",
            alternativas: [
              { letra: "A", texto: "prescritível em 5 anos." },
              { letra: "B", texto: "prescritível em 8 anos." },
              { letra: "C", texto: "prescritível em 10 anos." },
              { letra: "D", texto: "imprescritível." },
              { letra: "E", texto: "prescritível em 20 anos." },
            ],
            gabarito: "D",
            justificativa: "A ação de ressarcimento por dano DOLOSO ao erário é IMPRESCRITÍVEL (art. 37, §5º, CF). Apenas a ação de ressarcimento por dano culposo prescreve.",
            dificuldade: "Fácil",
            competencia: "Ressarcimento",
            banca: "IADES",
            tags: ["ressarcimento", "imprescritível"],
          },
          {
            id: "da-q-11-9",
            enunciado: "A Lei nº 14.230/2021 introduziu na Lei de Improbidade Administrativa a possibilidade de:",
            alternativas: [
              { letra: "A", texto: "aplicação de pena de prisão." },
              { letra: "B", texto: "celebração de acordo de não persecução civil." },
              { letra: "C", texto: "improbidade por omissão culposa." },
              { letra: "D", texto: "foro privilegiado para autoridades." },
              { letra: "E", texto: "responsabilidade objetiva." },
            ],
            gabarito: "B",
            justificativa: "A Lei 14.230/2021 introduziu o ACORDO DE NÃO PERSECUÇÃO CIVIL (art. 17-B), permitindo solução consensual mediante confissão, ressarcimento e sanções reduzidas.",
            dificuldade: "Média",
            competencia: "Lei 14.230/2021",
            banca: "IADES",
            tags: ["acordo", "Lei 14.230"],
          },
          {
            id: "da-q-11-10",
            enunciado: "A mera ilegalidade, sem comprovação de dolo, configura improbidade administrativa?",
            alternativas: [
              { letra: "A", texto: "Sim, em qualquer modalidade." },
              { letra: "B", texto: "Sim, apenas no art. 10." },
              { letra: "C", texto: "Sim, se causar prejuízo ao erário." },
              { letra: "D", texto: "Não, pois exige-se dolo específico." },
              { letra: "E", texto: "Depende da decisão do juiz." },
            ],
            gabarito: "D",
            justificativa: "Após a Lei 14.230/2021, a mera ilegalidade ou irregularidade NÃO configura improbidade. É necessária a comprovação de DOLO específico do agente.",
            dificuldade: "Média",
            competencia: "Elemento subjetivo",
            banca: "IADES",
            tags: ["dolo", "ilegalidade"],
          },
        ],
      },
    },
    {
      id: "da-topico-12",
      numero: 12,
      titulo: "Lei nº 12.846/2013 e alterações (Lei Anticorrupção)",
      conteudo: {
        resumo: `
## Resumo Rápido

### O que é a Lei Anticorrupção?

| Aspecto | Descrição |
|---------|-----------|
| **Número** | Lei nº 12.846/2013 |
| **Nome popular** | Lei Anticorrupção ou Lei da Empresa Limpa |
| **Foco** | Responsabilização de **PESSOAS JURÍDICAS** |
| **Tipo de responsabilidade** | **OBJETIVA** (civil e administrativa) |
| **Regulamentação** | Decreto nº 11.129/2022 (antigo 8.420/2015) |

### Pontos Essenciais

- Responsabilidade **OBJETIVA** da pessoa jurídica (não precisa provar culpa)
- Aplica-se a atos praticados contra a Administração **nacional ou estrangeira**
- Pessoas físicas (dirigentes) respondem **subjetivamente** (na medida de sua culpabilidade)
- **Acordo de Leniência**: reduz penalidades em troca de colaboração
- **Programa de Integridade** (Compliance): pode atenuar sanções

### Sanções Administrativas (art. 6º)
1. **Multa**: 0,1% a 20% do faturamento bruto (ou R$ 6 mil a R$ 60 milhões)
2. **Publicação** extraordinária da decisão condenatória
        `,

        explicacao: `
## Explicação Didática

### 1. Introdução à Lei Anticorrupção

A **Lei nº 12.846/2013** representa um marco no combate à corrupção no Brasil, ao estabelecer a **responsabilização objetiva** de pessoas jurídicas por atos lesivos praticados contra a Administração Pública.

#### Contexto Histórico
- Aprovada em decorrência de compromissos internacionais do Brasil
- Convenção da OCDE sobre Corrupção de Funcionários Públicos Estrangeiros
- Convenção das Nações Unidas contra a Corrupção (Convenção de Mérida)
- Resposta às manifestações de junho de 2013

#### Por que é inovadora?
| Antes | Depois (Lei 12.846/2013) |
|-------|-------------------------|
| Apenas pessoas físicas respondiam | Pessoas jurídicas respondem diretamente |
| Responsabilidade subjetiva | Responsabilidade **objetiva** |
| Difícil punir empresas corruptoras | Sanções administrativas e judiciais diretas |

### 2. Âmbito de Aplicação (art. 1º)

#### Quem está sujeito?
- Sociedades empresárias
- Sociedades simples (personificadas ou não)
- Fundações
- Associações de entidades ou pessoas
- Sociedades estrangeiras com sede, filial ou representação no Brasil

#### Contra quem protege?
- Administração Pública **nacional** (direta e indireta, todos os Poderes e entes)
- Administração Pública **estrangeira**

⚠️ **ATENÇÃO IADES**: A lei se aplica mesmo a atos praticados contra Administração de outros países!

### 3. Atos Lesivos (art. 5º)

São atos lesivos à Administração Pública:

#### I - Prometer, oferecer ou dar vantagem indevida
- A agente público ou terceiro a ele relacionado
- Corrupção ativa empresarial

#### II - Financiar, custear ou patrocinar
- A prática de atos ilícitos previstos na lei
- Inclusive lavagem de dinheiro

#### III - Utilizar pessoa interposta
- "Laranjas" para ocultar interesses ou identidade
- Fraude à lei

#### IV - Fraudes em licitações e contratos
- Frustrar ou fraudar o caráter competitivo
- Afastar licitantes mediante fraude ou vantagem
- Fraudar licitação pública ou contrato dela decorrente
- Criar pessoa jurídica fraudulentamente
- Obter vantagem ou benefício indevido

#### V - Dificultar investigação ou fiscalização
- Obstruir atividade de investigação ou fiscalização
- Intervir na atuação de órgãos públicos

### 4. Responsabilidade OBJETIVA (art. 2º)

Este é o **ponto central** da lei!

#### Conceito
- A pessoa jurídica responde **independentemente** de comprovação de dolo ou culpa
- Basta demonstrar: ato lesivo + nexo causal + dano

#### Requisitos
1. Ato lesivo praticado em **benefício** da pessoa jurídica (direto ou indireto)
2. Por seu **interesse** (ainda que potencial)

#### Comparativo de Responsabilidades

| Pessoa | Tipo | Prova necessária |
|--------|------|------------------|
| **Jurídica** | OBJETIVA | Ato + nexo + dano (sem culpa) |
| **Física (dirigente)** | SUBJETIVA | Ato + nexo + dano + CULPA/DOLO |

#### Subsistência da Responsabilidade (art. 4º)
A responsabilidade subsiste mesmo em caso de:
- Alteração contratual
- Transformação, incorporação, fusão ou cisão societária

⚠️ Nas operações societárias, a responsabilidade da sucessora é limitada ao pagamento de multa e reparação integral do dano, até o limite do patrimônio transferido (exceto se houver simulação/fraude).

### 5. Sanções Administrativas (art. 6º)

Aplicadas pela autoridade máxima de cada órgão ou entidade, no âmbito do PAR (Processo Administrativo de Responsabilização).

#### I - Multa
- **Valor**: 0,1% a 20% do faturamento bruto do exercício anterior
- Se não for possível utilizar o critério do faturamento: R$ 6.000 a R$ 60.000.000
- A multa **nunca será inferior** à vantagem auferida, quando for possível sua estimação

#### II - Publicação extraordinária da decisão condenatória
- Em meio de grande circulação
- No próprio estabelecimento
- No site da empresa
- Às expensas da pessoa jurídica

#### Parâmetros de Dosimetria (art. 7º)
Na aplicação das sanções, serão considerados:
1. Gravidade da infração
2. Vantagem auferida ou pretendida
3. Consumação ou não da infração
4. Grau de lesão ou perigo de lesão
5. Efeito negativo produzido
6. Situação econômica do infrator
7. Cooperação da pessoa jurídica
8. **Existência de programa de integridade** (compliance)
9. Valor dos contratos com o órgão lesado

### 6. Sanções Judiciais (art. 19)

Aplicadas pelo Poder Judiciário, mediante ação civil proposta pelo MP ou pela pessoa jurídica de direito público lesada.

#### I - Perdimento de bens, direitos ou valores
- Que representem vantagem ou proveito obtidos da infração

#### II - Suspensão ou interdição parcial das atividades
- Quando comprovada a utilização da empresa para prática de ilícitos

#### III - Dissolução compulsória da pessoa jurídica
- Quando comprovado que a personalidade jurídica foi utilizada para ocultar ou facilitar a prática de atos ilícitos
- Ou quando foi constituída especificamente para esse fim

#### IV - Proibição de receber incentivos, subsídios, etc.
- Prazo: 1 a 5 anos
- Inclui: incentivos fiscais, subsídios, subvenções, doações, empréstimos de órgãos públicos

### 7. Processo Administrativo de Responsabilização (PAR)

#### Características
- **Competência**: autoridade máxima do órgão ou entidade lesada
- **Comissão**: 2 ou mais servidores estáveis
- **Prazo**: 180 dias, prorrogável
- **Contraditório e ampla defesa**: garantidos

#### Fases do PAR
1. **Instauração**: de ofício ou mediante provocação
2. **Instrução**: coleta de provas, diligências
3. **Defesa**: prazo de 30 dias
4. **Relatório**: conclusivo da comissão
5. **Julgamento**: pela autoridade competente

### 8. Acordo de Leniência (arts. 16-17)

#### O que é?
Acordo celebrado com pessoa jurídica que colabora efetivamente com as investigações, em troca de redução de penalidades.

#### Requisitos para celebração (art. 16, §1º)
1. Ser a **primeira** a se manifestar sobre o ilícito
2. **Cessar** completamente o envolvimento no ilícito
3. Admitir participação e **cooperar** plena e permanentemente
4. Comparecer a todos os atos processuais
5. **Identificar** demais envolvidos e **fornecer** documentos e informações

#### Benefícios do Acordo
- Isenção da publicação extraordinária
- Isenção da proibição de receber incentivos
- **Redução de até 2/3 da multa**
- Não afasta a obrigação de reparar integralmente o dano

#### Quem pode celebrar?
- CGU (no âmbito federal) em conjunto com a AGU em atos de menor ofensividade
- Ou exclusivamente CGU se houver descumprimento ou fraude

⚠️ **ATENÇÃO**: A proposta de acordo de leniência somente se tornará pública após a celebração, protegendo a empresa colaboradora.

### 9. Programa de Integridade (Compliance)

#### Conceito
Mecanismos e procedimentos internos de integridade, auditoria e incentivo à denúncia de irregularidades.

#### Por que é importante?
- É fator **atenuante** na dosimetria das sanções
- Pode demonstrar boa-fé da empresa
- Cada vez mais exigido em contratações públicas

#### Elementos de um Programa de Integridade (Decreto 11.129/2022)
1. **Comprometimento** da alta direção
2. **Código de Ética** e políticas internas
3. Controles internos e **auditoria**
4. **Canal de denúncias** (anônimo e protegido)
5. **Treinamentos** periódicos
6. Análise de riscos
7. Due diligence de terceiros
8. Ações corretivas

### 10. Prescrição (art. 25)

#### Prazo prescricional
- **5 anos** contados da ciência da infração

#### Infrações permanentes ou continuadas
- Contam-se do dia em que tiver cessado

#### Interrupção da prescrição
- Instauração de processo administrativo ou judicial
- Citação do responsável

### 11. Cadastro Nacional de Empresas Punidas (CNEP)

#### O que contém
- Sanções aplicadas às pessoas jurídicas
- Acordos de leniência celebrados
- Mantido e publicado pela CGU

#### Outros cadastros
- **CEIS**: Cadastro Nacional de Empresas Inidôneas e Suspensas
- **CNEP**: Cadastro Nacional de Empresas Punidas

### 12. Aplicação no Contexto da Vigilância Sanitária

#### Exemplos de atos lesivos no setor
- Empresa que corrompe fiscal sanitário para aprovar produto
- Laboratório que frauda licitação de medicamentos
- Fornecedor que paga propina para manter contrato de insumos

#### Competência para aplicar sanções
- ANVISA e SES podem instaurar PAR
- CGU pode avocar ou requisitar processos
- MP pode ajuizar ação judicial

#### Importância do Compliance no setor de saúde
- Empresas reguladas devem ter programas de integridade robustos
- Reduz riscos de sanções administrativas
- Demonstra comprometimento com a ética
        `,

        pontosChave: [
          "Lei 12.846/2013: responsabilização OBJETIVA de PESSOAS JURÍDICAS",
          "Pessoa jurídica responde sem precisar provar dolo ou culpa",
          "Dirigentes (pessoas físicas) respondem SUBJETIVAMENTE",
          "Sanções ADMINISTRATIVAS: multa (0,1% a 20%) + publicação da condenação",
          "Sanções JUDICIAIS: perdimento, suspensão, dissolução, proibição de incentivos",
          "Acordo de Leniência: primeira a colaborar, redução de até 2/3 da multa",
          "Programa de Integridade (Compliance): fator ATENUANTE na dosimetria",
          "Prescrição: 5 anos da ciência da infração",
          "PAR: 180 dias, comissão de 2+ servidores estáveis",
          "Aplica-se contra administração NACIONAL e ESTRANGEIRA",
        ],

        armadilhas: [
          {
            titulo: "Confundir responsabilidade objetiva com subjetiva",
            descricao:
              "A pessoa JURÍDICA responde objetivamente (sem culpa). A pessoa FÍSICA (dirigente) responde subjetivamente (precisa provar culpa/dolo).",
            dica: "Jurídica = objetiva. Física = subjetiva. Não confunda!",
          },
          {
            titulo: "Achar que a Lei Anticorrupção é penal",
            descricao:
              "A Lei 12.846/2013 é de natureza CIVIL e ADMINISTRATIVA, não penal. Não há previsão de prisão.",
            dica: "Lei Anticorrupção = sanções administrativas e civis, não penais.",
          },
          {
            titulo: "Pensar que o acordo de leniência elimina todas as sanções",
            descricao:
              "O acordo de leniência NÃO afasta a obrigação de reparar integralmente o dano. Reduz multa em até 2/3 e isenta da publicação e proibição de incentivos.",
            dica: "Leniência NÃO isenta de reparar o dano!",
          },
          {
            titulo: "Confundir com a Lei de Improbidade",
            descricao:
              "Lei 12.846/2013 é voltada a PESSOAS JURÍDICAS. Lei 8.429/92 (Improbidade) é voltada a AGENTES PÚBLICOS.",
            dica: "Anticorrupção = empresas. Improbidade = servidores.",
          },
        ],

        mnemonicos: [
          {
            termo: "PJ-OB",
            significado: "Pessoa Jurídica = Responsabilidade OBjetiva",
            frase: "PJ-OB: Pessoa Jurídica, Objetiva!",
          },
          {
            termo: "2/3-L",
            significado: "Redução de até 2/3 no acordo de Leniência",
            frase: "Leniência pode reduzir até 2/3 da multa",
          },
          {
            termo: "0,1-20",
            significado: "Multa de 0,1% a 20% do faturamento",
            frase: "Multa vai de ZERO-UM a VINTE por cento",
          },
          {
            termo: "PCPI",
            significado: "Programa de Compliance = Possível Integridade",
            frase: "Ter Compliance pode reduzir sanções (atenuante)",
          },
        ],

        flashcards: [
          {
            id: "da-fc-12-1",
            frente: "Qual o tipo de responsabilidade da pessoa jurídica na Lei Anticorrupção?",
            verso:
              "**RESPONSABILIDADE OBJETIVA**\n\nA pessoa jurídica responde pelos atos lesivos independentemente de comprovação de dolo ou culpa.\n\nBasta demonstrar: ato + nexo causal + dano\n\n(art. 2º, Lei 12.846/2013)",
            tags: ["responsabilidade", "objetiva", "pessoa jurídica"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-2",
            frente: "Qual o valor da multa administrativa na Lei Anticorrupção?",
            verso:
              "**0,1% a 20%** do faturamento bruto do último exercício anterior.\n\nSe não puder usar o critério do faturamento:\n→ R$ 6.000 a R$ 60.000.000\n\nA multa nunca será inferior à vantagem auferida.\n\n(art. 6º, I)",
            tags: ["multa", "sanção administrativa"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-3",
            frente: "O que é o Acordo de Leniência na Lei Anticorrupção?",
            verso:
              "Acordo com pessoa jurídica que **colabora** com investigações.\n\n**Requisitos:**\n- Ser a 1ª a se manifestar\n- Cessar envolvimento\n- Cooperar plenamente\n- Identificar demais envolvidos\n\n**Benefícios:**\n- Redução de até 2/3 da multa\n- Isenção da publicação e proibição de incentivos\n\n**NÃO isenta** de reparar o dano!",
            tags: ["leniência", "acordo", "colaboração"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-4",
            frente: "Quais são as sanções JUDICIAIS da Lei Anticorrupção?",
            verso:
              "Sanções aplicadas pelo **Judiciário** (art. 19):\n\n1. **Perdimento** de bens/valores (vantagem obtida)\n2. **Suspensão/interdição** das atividades\n3. **Dissolução compulsória** da PJ\n4. **Proibição** de receber incentivos (1-5 anos)\n\nSão mais graves que as administrativas!",
            tags: ["sanções judiciais", "dissolução"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-5",
            frente: "O Programa de Integridade (Compliance) é obrigatório na Lei Anticorrupção?",
            verso:
              "**NÃO é obrigatório**, mas é **altamente recomendável**.\n\nÉ fator **ATENUANTE** na dosimetria das sanções (art. 7º, VIII).\n\nElementos:\n- Código de ética\n- Canal de denúncias\n- Treinamentos\n- Auditoria interna\n- Due diligence de terceiros",
            tags: ["compliance", "integridade", "atenuante"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-6",
            frente: "Qual o prazo prescricional na Lei Anticorrupção?",
            verso:
              "**5 ANOS** contados da ciência da infração.\n\nSe a infração for permanente ou continuada: conta-se do dia em que cessar.\n\n**Interrompe-se** com:\n- Instauração de processo administrativo/judicial\n- Citação do responsável\n\n(art. 25)",
            tags: ["prescrição", "prazo"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-7",
            frente: "A Lei Anticorrupção aplica-se a atos contra administração estrangeira?",
            verso:
              "**SIM!**\n\nA Lei 12.846/2013 aplica-se aos atos lesivos praticados contra:\n\n- Administração pública **NACIONAL** (todos os entes e poderes)\n- Administração pública **ESTRANGEIRA**\n\nIsso atende compromissos internacionais do Brasil (OCDE, ONU).",
            tags: ["administração estrangeira", "aplicação"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-8",
            frente: "Como é a responsabilidade dos dirigentes (pessoas físicas) na Lei Anticorrupção?",
            verso:
              "Os dirigentes respondem **SUBJETIVAMENTE**.\n\nNa medida de sua culpabilidade (dolo ou culpa).\n\n**Comparativo:**\n- Pessoa Jurídica → OBJETIVA (sem culpa)\n- Pessoa Física → SUBJETIVA (com culpa)\n\n(art. 3º)",
            tags: ["dirigentes", "responsabilidade subjetiva"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-9",
            frente: "O que são o CNEP e o CEIS?",
            verso:
              "**CNEP** - Cadastro Nacional de Empresas Punidas:\n→ Sanções da Lei Anticorrupção\n→ Acordos de leniência celebrados\n\n**CEIS** - Cadastro Nacional de Empresas Inidôneas e Suspensas:\n→ Empresas impedidas de licitar\n→ Declaradas inidôneas\n\nAmbos são mantidos pela **CGU** e de acesso público.",
            tags: ["CNEP", "CEIS", "cadastros"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: "da-fc-12-10",
            frente: "Como funciona o PAR (Processo Administrativo de Responsabilização)?",
            verso:
              "**PAR** - Processo Administrativo de Responsabilização:\n\n**Competência**: autoridade máxima do órgão lesado\n**Comissão**: 2 ou mais servidores estáveis\n**Prazo**: 180 dias (prorrogável)\n**Defesa**: 30 dias\n\n**Fases**:\n1. Instauração\n2. Instrução\n3. Defesa\n4. Relatório\n5. Julgamento\n\nGarante contraditório e ampla defesa!",
            tags: ["PAR", "processo", "responsabilização"],
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
            id: "da-q-12-1",
            enunciado:
              "A responsabilidade das pessoas jurídicas na Lei nº 12.846/2013 (Lei Anticorrupção) é:",
            alternativas: [
              { letra: "A", texto: "subjetiva, dependendo de comprovação de dolo." },
              { letra: "B", texto: "subjetiva, dependendo de comprovação de culpa." },
              { letra: "C", texto: "objetiva, independente de dolo ou culpa." },
              { letra: "D", texto: "solidária com os dirigentes, sempre subjetiva." },
              { letra: "E", texto: "subsidiária, dependendo de condenação prévia." },
            ],
            gabarito: "C",
            justificativa:
              "A Lei 12.846/2013 estabelece a responsabilidade OBJETIVA das pessoas jurídicas por atos lesivos à Administração Pública. Não é necessário comprovar dolo ou culpa (art. 2º).",
            dificuldade: "Fácil",
            competencia: "Responsabilidade objetiva",
            banca: "IADES",
            tags: ["responsabilidade", "objetiva"],
          },
          {
            id: "da-q-12-2",
            enunciado:
              "A multa administrativa prevista na Lei Anticorrupção (Lei 12.846/2013) varia de:",
            alternativas: [
              { letra: "A", texto: "1% a 10% do faturamento bruto." },
              { letra: "B", texto: "0,1% a 20% do faturamento bruto." },
              { letra: "C", texto: "5% a 30% do faturamento bruto." },
              { letra: "D", texto: "0,5% a 15% do faturamento bruto." },
              { letra: "E", texto: "2% a 25% do faturamento bruto." },
            ],
            gabarito: "B",
            justificativa:
              "Conforme art. 6º, I, da Lei 12.846/2013, a multa varia de 0,1% a 20% do faturamento bruto do último exercício anterior ao da instauração do PAR.",
            dificuldade: "Média",
            competencia: "Sanções administrativas",
            banca: "IADES",
            tags: ["multa", "sanção"],
          },
          {
            id: "da-q-12-3",
            enunciado:
              "O acordo de leniência previsto na Lei Anticorrupção pode resultar em:",
            alternativas: [
              { letra: "A", texto: "isenção total da multa e do dever de reparar o dano." },
              { letra: "B", texto: "redução de até 2/3 da multa, mas NÃO afasta a reparação do dano." },
              { letra: "C", texto: "extinção da punibilidade criminal." },
              { letra: "D", texto: "perdão judicial integral." },
              { letra: "E", texto: "prescrição imediata." },
            ],
            gabarito: "B",
            justificativa:
              "O acordo de leniência pode reduzir a multa em até 2/3 e isentar da publicação da decisão e da proibição de receber incentivos. Porém, NÃO afasta a obrigação de reparar integralmente o dano (art. 16, §3º).",
            dificuldade: "Média",
            competencia: "Acordo de Leniência",
            banca: "IADES",
            tags: ["leniência", "multa"],
          },
          {
            id: "da-q-12-4",
            enunciado:
              "O Programa de Integridade (compliance), na Lei 12.846/2013, configura:",
            alternativas: [
              { letra: "A", texto: "agravante na aplicação das sanções." },
              { letra: "B", texto: "requisito obrigatório para contratar com o poder público." },
              { letra: "C", texto: "causa de isenção automática de responsabilidade." },
              { letra: "D", texto: "fator atenuante na dosimetria das sanções." },
              { letra: "E", texto: "elemento sem relevância jurídica." },
            ],
            gabarito: "D",
            justificativa:
              "A existência de mecanismos e procedimentos internos de integridade (compliance) é fator ATENUANTE na dosimetria das sanções, conforme art. 7º, VIII, da Lei 12.846/2013.",
            dificuldade: "Média",
            competencia: "Compliance",
            banca: "IADES",
            tags: ["compliance", "atenuante"],
          },
          {
            id: "da-q-12-5",
            enunciado:
              "A dissolução compulsória da pessoa jurídica, prevista na Lei Anticorrupção, é sanção de natureza:",
            alternativas: [
              { letra: "A", texto: "administrativa, aplicada pelo órgão lesado." },
              { letra: "B", texto: "judicial, aplicada pelo Poder Judiciário." },
              { letra: "C", texto: "penal, aplicada pelo juiz criminal." },
              { letra: "D", texto: "arbitral, decidida por câmara de mediação." },
              { letra: "E", texto: "regulatória, aplicada pela agência reguladora." },
            ],
            gabarito: "B",
            justificativa:
              "A dissolução compulsória é sanção JUDICIAL, aplicada pelo Poder Judiciário em ação civil, quando comprovado que a personalidade jurídica foi usada para ocultar ou facilitar a prática de ilícitos (art. 19, III).",
            dificuldade: "Média",
            competencia: "Sanções judiciais",
            banca: "IADES",
            tags: ["dissolução", "judicial"],
          },
          {
            id: "da-q-12-6",
            enunciado:
              "A Lei 12.846/2013 aplica-se a atos lesivos praticados contra:",
            alternativas: [
              { letra: "A", texto: "apenas a Administração Pública federal." },
              { letra: "B", texto: "apenas a Administração Pública brasileira." },
              { letra: "C", texto: "a Administração Pública nacional e estrangeira." },
              { letra: "D", texto: "apenas empresas públicas e sociedades de economia mista." },
              { letra: "E", texto: "apenas autarquias federais." },
            ],
            gabarito: "C",
            justificativa:
              "A Lei 12.846/2013 aplica-se aos atos lesivos praticados contra a administração pública NACIONAL (todos os entes) e ESTRANGEIRA (art. 1º), atendendo compromissos internacionais do Brasil.",
            dificuldade: "Fácil",
            competencia: "Âmbito de aplicação",
            banca: "IADES",
            tags: ["aplicação", "estrangeira"],
          },
          {
            id: "da-q-12-7",
            enunciado:
              "O prazo prescricional para a aplicação das sanções previstas na Lei Anticorrupção é de:",
            alternativas: [
              { letra: "A", texto: "3 anos." },
              { letra: "B", texto: "5 anos." },
              { letra: "C", texto: "8 anos." },
              { letra: "D", texto: "10 anos." },
              { letra: "E", texto: "imprescritível." },
            ],
            gabarito: "B",
            justificativa:
              "O prazo prescricional é de 5 ANOS, contados da data da ciência da infração ou, no caso de infração permanente ou continuada, do dia em que tiver cessado (art. 25).",
            dificuldade: "Fácil",
            competencia: "Prescrição",
            banca: "IADES",
            tags: ["prescrição", "prazo"],
          },
          {
            id: "da-q-12-8",
            enunciado:
              "Na Lei Anticorrupção, os dirigentes e administradores das pessoas jurídicas respondem:",
            alternativas: [
              { letra: "A", texto: "objetivamente, assim como a pessoa jurídica." },
              { letra: "B", texto: "subjetivamente, na medida de sua culpabilidade." },
              { letra: "C", texto: "solidariamente, independentemente de culpa." },
              { letra: "D", texto: "não respondem, pois a lei só atinge pessoas jurídicas." },
              { letra: "E", texto: "subsidiariamente, após esgotado o patrimônio da empresa." },
            ],
            gabarito: "B",
            justificativa:
              "Os dirigentes ou administradores respondem SUBJETIVAMENTE, na medida de sua culpabilidade, pelos atos ilícitos praticados (art. 3º). Diferentemente da pessoa jurídica, que responde objetivamente.",
            dificuldade: "Média",
            competencia: "Responsabilidade dos dirigentes",
            banca: "IADES",
            tags: ["dirigentes", "subjetiva"],
          },
          {
            id: "da-q-12-9",
            enunciado:
              "Constitui ato lesivo à Administração Pública, nos termos da Lei 12.846/2013:",
            alternativas: [
              { letra: "A", texto: "contratar servidor público para cargo de confiança." },
              { letra: "B", texto: "participar regularmente de processo licitatório." },
              { letra: "C", texto: "financiar ou custear a prática de atos ilícitos previstos na lei." },
              { letra: "D", texto: "apresentar recursos administrativos contra decisões." },
              { letra: "E", texto: "exercer o direito de petição perante órgãos públicos." },
            ],
            gabarito: "C",
            justificativa:
              "Financiar, custear, patrocinar ou de qualquer modo subvencionar a prática dos atos ilícitos previstos na lei é ato lesivo à Administração Pública, conforme art. 5º, II, da Lei 12.846/2013.",
            dificuldade: "Média",
            competencia: "Atos lesivos",
            banca: "IADES",
            tags: ["atos lesivos", "financiar"],
          },
          {
            id: "da-q-12-10",
            enunciado:
              "O Processo Administrativo de Responsabilização (PAR) previsto na Lei Anticorrupção deve ser concluído no prazo de:",
            alternativas: [
              { letra: "A", texto: "60 dias, improrrogáveis." },
              { letra: "B", texto: "90 dias, prorrogáveis." },
              { letra: "C", texto: "120 dias, improrrogáveis." },
              { letra: "D", texto: "180 dias, prorrogáveis." },
              { letra: "E", texto: "1 ano, improrrogável." },
            ],
            gabarito: "D",
            justificativa:
              "O PAR deve ser concluído no prazo de 180 dias, contados da data de publicação do ato de instauração. Esse prazo pode ser prorrogado, mediante ato fundamentado da autoridade instauradora (art. 10).",
            dificuldade: "Média",
            competencia: "PAR",
            banca: "IADES",
            tags: ["PAR", "prazo"],
          },
        ],
      },
    },
    {
      id: 'da-topico-13',
      numero: 13,
      titulo: 'Licitações e Contratos Administrativos - Lei nº 14.133/2021',
      conteudo: {
        resumo: `
## Resumo Rápido

### Nova Lei de Licitações (Lei 14.133/2021)

| Aspecto | Lei 14.133/2021 |
|---------|-----------------|
| **Vigência** | Publicada em 01/04/2021 |
| **Revoga** | Lei 8.666/93, Lei 10.520/02 (Pregão), Lei 12.462/11 (RDC) |
| **Período de transição** | Até 30/12/2023 (órgãos podiam escolher qual lei usar) |

### Modalidades de Licitação

| Modalidade | Característica | Critérios de Julgamento |
|------------|----------------|------------------------|
| **Pregão** | Obrigatório para bens e serviços COMUNS | Menor preço ou maior desconto |
| **Concorrência** | Qualquer valor, obras, serviços especiais | Todos os critérios |
| **Concurso** | Trabalho técnico, científico, artístico | Melhor técnica ou conteúdo artístico |
| **Leilão** | Alienação de bens | Maior lance |
| **Diálogo Competitivo** | NOVIDADE! Soluções inovadoras | Técnica e preço combinados |

### Critérios de Julgamento (Art. 33)

1. Menor preço
2. Maior desconto
3. Melhor técnica ou conteúdo artístico
4. Técnica e preço
5. Maior lance (leilão)
6. Maior retorno econômico

### Limites para Dispensa (valores atualizados)

| Tipo | Valor |
|------|-------|
| Obras e serviços de engenharia | R$ 100.000,00 |
| Outros serviços e compras | R$ 50.000,00 |

### Prazos de Publicidade Mínima

| Modalidade/Critério | Prazo |
|--------------------|-------|
| Concorrência (técnica e preço) | 35 dias úteis |
| Concorrência (outros) | 25 dias úteis |
| Pregão | 8 dias úteis |
| Leilão | 15 dias úteis |
| Concurso | 35 dias úteis |

### Contratos Administrativos

| Aspecto | Regra |
|---------|-------|
| Prazo máximo (regra) | 5 anos (incluindo prorrogações) |
| Serviços contínuos | Até 10 anos |
| Aluguel de equipamentos/programas | Até 15 anos |
| Garantia de execução | Até 5% do valor inicial |
| Garantia adicional (obras) | Até 10% |

### Para IADES:
- Pregão = bens e serviços COMUNS (obrigatório)
- Diálogo Competitivo = NOVIDADE da lei
- Não existe mais CONVITE nem TOMADA DE PREÇOS
- Seguro-garantia pode substituir caução
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Vigência

A Lei 14.133/2021 (Nova Lei de Licitações) substituiu três diplomas:
- Lei 8.666/1993 (Lei Geral de Licitações)
- Lei 10.520/2002 (Lei do Pregão)
- Lei 12.462/2011 (RDC - Regime Diferenciado de Contratações)

**Período de transição:** Até 30/12/2023, os órgãos podiam optar por qual regime usar, mas NÃO podiam misturar regimes (princípio da segregação).

### 2. Princípios (Art. 5º)

**Princípios expressos:**
- Legalidade, impessoalidade, moralidade, publicidade, eficiência
- Interesse público, probidade administrativa
- Igualdade, planejamento, transparência, eficácia
- Segregação de funções
- Motivação, vinculação ao edital
- Julgamento objetivo
- Segurança jurídica
- Razoabilidade, competitividade
- Proporcionalidade, celeridade
- Economicidade
- **Desenvolvimento nacional sustentável** (NOVIDADE!)

### 3. Agentes Públicos

**Agente de contratação:**
- Servidor efetivo ou empregado público
- Designado para conduzir o processo licitatório
- Pode ser substituído por comissão de contratação

**Pregoeiro:**
- Conduz o pregão (eletrônico ou presencial)
- Deve ter capacitação específica

**Comissão de contratação:**
- Mínimo 3 membros
- Maioria servidores efetivos

### 4. Modalidades de Licitação

#### 4.1 Pregão (Art. 28, I)
- Para aquisição de bens e serviços **COMUNS**
- Bem/serviço comum: padrões de desempenho definíveis objetivamente
- Critérios: menor preço ou maior desconto
- Forma: **PREFERENCIALMENTE ELETRÔNICO**

#### 4.2 Concorrência (Art. 28, II)
- Para qualquer valor
- Obras, serviços especiais, compras de grande valor
- Admite todos os critérios de julgamento

#### 4.3 Concurso (Art. 28, III)
- Escolha de trabalho técnico, científico ou artístico
- Prêmio ou remuneração aos vencedores

#### 4.4 Leilão (Art. 28, IV)
- Alienação de bens móveis ou imóveis
- Critério: maior lance

#### 4.5 Diálogo Competitivo (Art. 28, V) - NOVIDADE!
- Para contratações de soluções inovadoras
- Administração dialoga com licitantes pré-selecionados
- Busca identificar alternativas para necessidades complexas
- Fases: 1) Pré-qualificação 2) Diálogo 3) Competição

### 5. Dispensa e Inexigibilidade

#### 5.1 Dispensa (Art. 75)
Situações em que a licitação é possível, mas a lei permite não fazer:

**Por valor:**
- Obras/engenharia: até R$ 100.000,00
- Outros: até R$ 50.000,00
- Pode ir ao DOBRO para consórcios públicos

**Outras situações:**
- Guerra, emergência, calamidade
- Licitação deserta ou fracassada
- Compras de entidades sem fins lucrativos
- Contratação de instituição brasileira de pesquisa

#### 5.2 Inexigibilidade (Art. 74)
Quando a competição é **INVIÁVEL**:
- Fornecedor exclusivo
- Serviços técnicos especializados de profissional notório
- Artista consagrado
- Credenciamento (NOVIDADE expressa!)

### 6. Fases da Licitação (Art. 17)

**Fase preparatória:**
1. Estudo técnico preliminar
2. Termo de referência ou projeto básico
3. Orçamento estimado
4. Edital

**Fase externa:**
1. Publicação do edital
2. Apresentação de propostas
3. Julgamento
4. Habilitação (PODE SER INVERTIDA)
5. Recursos
6. Homologação e adjudicação

**INVERSÃO DE FASES:** O julgamento pode ocorrer ANTES da habilitação (como no pregão da lei antiga).

### 7. Contratos Administrativos

#### 7.1 Cláusulas Exorbitantes
- Alteração unilateral
- Rescisão unilateral
- Fiscalização
- Aplicação de sanções
- Ocupação temporária

#### 7.2 Prazos de Duração
| Tipo | Prazo máximo |
|------|--------------|
| Regra geral | 5 anos |
| Serviços contínuos | 10 anos |
| Aluguel equipamentos/TI | 15 anos |
| Concessões | Conforme lei específica |

#### 7.3 Garantias
- Até 5% do valor inicial (regra)
- Até 10% para obras de grande vulto ou alta complexidade
- Seguro-garantia pode ser exigido

### 8. Sanções Administrativas (Art. 155-163)

| Sanção | Aplicação |
|--------|-----------|
| Advertência | Infrações leves |
| Multa | Infrações de qualquer gravidade |
| Impedimento de licitar/contratar | Até 3 anos |
| Declaração de inidoneidade | 3 a 6 anos |

### 9. Portal Nacional de Contratações Públicas (PNCP)

- Sítio eletrônico oficial
- Centraliza informações sobre licitações e contratos
- Divulgação obrigatória de editais e contratos
- Cadastro unificado de fornecedores
        `,

        pontosChave: [
          'Lei 14.133/2021 revogou Leis 8.666/93, 10.520/02 e 12.462/11',
          'Modalidades: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo',
          'NÃO existem mais Convite e Tomada de Preços',
          'Diálogo Competitivo é NOVIDADE para soluções inovadoras',
          'Pregão é OBRIGATÓRIO para bens e serviços comuns',
          'Dispensa por valor: obras R$ 100.000 / outros R$ 50.000',
          'Inexigibilidade = competição INVIÁVEL (fornecedor exclusivo, notória especialização)',
          'Prazo máximo dos contratos: 5 anos (regra), 10 anos (contínuos), 15 anos (TI)',
          'PNCP = Portal Nacional de Contratações Públicas',
          'Habilitação pode ser APÓS o julgamento (inversão de fases)',
        ],

        armadilhas: [
          {
            titulo: 'Convite e Tomada de Preços',
            descricao: 'NÃO existem mais na Lei 14.133/2021',
            dica: 'Cuidado com questões que mencionam essas modalidades como se fossem da nova lei',
          },
          {
            titulo: 'Pregão x Concorrência',
            descricao: 'Pregão é para bens/serviços COMUNS; Concorrência para especiais ou qualquer critério',
            dica: 'Se mencionar técnica e preço para serviços especiais = Concorrência, não Pregão',
          },
          {
            titulo: 'Período de Transição',
            descricao: 'Terminou em 30/12/2023 - agora só vale a Lei 14.133/2021',
            dica: 'Após 2024, não cabe mais opção entre regimes',
          },
          {
            titulo: 'Dispensa x Inexigibilidade',
            descricao: 'Dispensa = licitação possível, mas dispensada. Inexigibilidade = competição INVIÁVEL',
            dica: 'Fornecedor exclusivo = INEXIGIBILIDADE, não dispensa',
          },
          {
            titulo: 'Valores de Dispensa',
            descricao: 'R$ 100.000 para obras, R$ 50.000 para outros (não confundir)',
            dica: 'Obras = valor MAIOR; compras = valor MENOR',
          },
          {
            titulo: 'Prazo de Contrato',
            descricao: '5 anos é regra GERAL, não absoluta (serviços contínuos podem ir a 10)',
            dica: 'Não marque que todo contrato tem limite de 5 anos',
          },
        ],

        mnemonicos: [
          {
            termo: 'PCCLD',
            significado: 'Modalidades de Licitação',
            frase: 'Pregão, Concorrência, Concurso, Leilão, Diálogo Competitivo',
          },
          {
            termo: '100-50',
            significado: 'Valores de dispensa',
            frase: 'R$ 100 mil (obras) / R$ 50 mil (outros)',
          },
          {
            termo: '5-10-15',
            significado: 'Prazos de contrato',
            frase: '5 anos (geral), 10 anos (contínuos), 15 anos (TI)',
          },
          {
            termo: 'INVIÁVEL = INEXIGÍVEL',
            significado: 'Inexigibilidade',
            frase: 'Se a competição é INVIÁVEL, a licitação é INEXIGÍVEL',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-13-1',
            frente: 'Quais são as modalidades de licitação na Lei 14.133/2021?',
            verso: 'Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Atenção: NÃO existem mais Convite e Tomada de Preços.',
            tags: ['modalidades', 'licitação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-2',
            frente: 'O que é o Diálogo Competitivo?',
            verso: 'NOVIDADE da Lei 14.133/2021. Modalidade para contratação de soluções INOVADORAS, em que a Administração dialoga com licitantes pré-selecionados para identificar alternativas técnicas.',
            tags: ['diálogo competitivo', 'novidade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-3',
            frente: 'Quando o Pregão é obrigatório?',
            verso: 'Para aquisição de BENS e SERVIÇOS COMUNS, cujos padrões de desempenho podem ser objetivamente definidos pelo edital. Deve ser preferencialmente ELETRÔNICO.',
            tags: ['pregão', 'obrigatório'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-4',
            frente: 'Quais os valores para dispensa de licitação por valor na Lei 14.133/2021?',
            verso: 'Obras e serviços de engenharia: até R$ 100.000,00. Outros serviços e compras: até R$ 50.000,00. Pode ser o DOBRO para consórcios públicos.',
            tags: ['dispensa', 'valores'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-5',
            frente: 'Qual a diferença entre dispensa e inexigibilidade?',
            verso: 'DISPENSA: competição é possível, mas a lei permite não licitar. INEXIGIBILIDADE: competição é INVIÁVEL (fornecedor exclusivo, notória especialização, artista consagrado).',
            tags: ['dispensa', 'inexigibilidade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-6',
            frente: 'Qual o prazo máximo dos contratos administrativos na Lei 14.133/2021?',
            verso: 'Regra geral: 5 anos. Serviços contínuos: até 10 anos. Aluguel de equipamentos e programas de TI: até 15 anos.',
            tags: ['contratos', 'prazos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-7',
            frente: 'Quais são os critérios de julgamento na Lei 14.133/2021?',
            verso: '1) Menor preço; 2) Maior desconto; 3) Melhor técnica ou conteúdo artístico; 4) Técnica e preço; 5) Maior lance (leilão); 6) Maior retorno econômico.',
            tags: ['critérios', 'julgamento'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-8',
            frente: 'O que é o PNCP?',
            verso: 'Portal Nacional de Contratações Públicas - sítio eletrônico oficial que centraliza informações sobre licitações e contratos, com cadastro unificado de fornecedores.',
            tags: ['PNCP', 'portal'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-9',
            frente: 'Quais leis a Lei 14.133/2021 revogou?',
            verso: 'Lei 8.666/1993 (Lei Geral), Lei 10.520/2002 (Pregão) e Lei 12.462/2011 (RDC). Houve período de transição até 30/12/2023.',
            tags: ['revogação', 'transição'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-13-10',
            frente: 'Qual a composição mínima da comissão de contratação?',
            verso: 'Mínimo 3 membros, sendo a MAIORIA servidores efetivos ou empregados públicos do quadro permanente da Administração.',
            tags: ['comissão', 'composição'],
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
            id: 'da-q-13-1',
            enunciado: 'Segundo a Lei nº 14.133/2021, são modalidades de licitação, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'pregão.' },
              { letra: 'B', texto: 'concorrência.' },
              { letra: 'C', texto: 'tomada de preços.' },
              { letra: 'D', texto: 'diálogo competitivo.' },
              { letra: 'E', texto: 'leilão.' },
            ],
            gabarito: 'C',
            justificativa: 'A Lei 14.133/2021 extinguiu as modalidades TOMADA DE PREÇOS e CONVITE. As modalidades são: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.',
            dificuldade: 'facil',
            competencia: 'Modalidades de licitação',
            banca: 'IADES',
            tags: ['modalidades', 'tomada de preços'],
          },
          {
            id: 'da-q-13-2',
            enunciado: 'A modalidade de licitação introduzida pela Lei 14.133/2021 para contratação de soluções inovadoras é o(a):',
            alternativas: [
              { letra: 'A', texto: 'pregão eletrônico.' },
              { letra: 'B', texto: 'concorrência especial.' },
              { letra: 'C', texto: 'diálogo competitivo.' },
              { letra: 'D', texto: 'licitação técnica.' },
              { letra: 'E', texto: 'consulta pública.' },
            ],
            gabarito: 'C',
            justificativa: 'O DIÁLOGO COMPETITIVO é a novidade da Lei 14.133/2021, destinado à contratação de soluções inovadoras quando a Administração dialoga com licitantes pré-selecionados.',
            dificuldade: 'facil',
            competencia: 'Diálogo competitivo',
            banca: 'IADES',
            tags: ['diálogo competitivo', 'novidade'],
          },
          {
            id: 'da-q-13-3',
            enunciado: 'Para aquisição de bens e serviços comuns, a Lei 14.133/2021 determina que seja utilizada a modalidade:',
            alternativas: [
              { letra: 'A', texto: 'concorrência, obrigatoriamente.' },
              { letra: 'B', texto: 'pregão, preferencialmente eletrônico.' },
              { letra: 'C', texto: 'leilão, para garantir competitividade.' },
              { letra: 'D', texto: 'diálogo competitivo, para inovação.' },
              { letra: 'E', texto: 'qualquer modalidade, a critério da Administração.' },
            ],
            gabarito: 'B',
            justificativa: 'O PREGÃO é obrigatório para bens e serviços comuns, devendo ser realizado preferencialmente na forma ELETRÔNICA, conforme art. 28, I, da Lei 14.133/2021.',
            dificuldade: 'facil',
            competencia: 'Pregão',
            banca: 'IADES',
            tags: ['pregão', 'bens comuns'],
          },
          {
            id: 'da-q-13-4',
            enunciado: 'Nos termos da Lei 14.133/2021, a dispensa de licitação por valor é aplicável para obras e serviços de engenharia de até:',
            alternativas: [
              { letra: 'A', texto: 'R$ 33.000,00.' },
              { letra: 'B', texto: 'R$ 50.000,00.' },
              { letra: 'C', texto: 'R$ 100.000,00.' },
              { letra: 'D', texto: 'R$ 150.000,00.' },
              { letra: 'E', texto: 'R$ 200.000,00.' },
            ],
            gabarito: 'C',
            justificativa: 'Para OBRAS e serviços de engenharia, o limite é R$ 100.000,00. Para outros serviços e compras, o limite é R$ 50.000,00.',
            dificuldade: 'medio',
            competencia: 'Dispensa de licitação',
            banca: 'IADES',
            tags: ['dispensa', 'valores'],
          },
          {
            id: 'da-q-13-5',
            enunciado: 'A inexigibilidade de licitação ocorre quando:',
            alternativas: [
              { letra: 'A', texto: 'o valor da contratação é inferior ao limite legal.' },
              { letra: 'B', texto: 'há situação de emergência ou calamidade.' },
              { letra: 'C', texto: 'a competição é inviável.' },
              { letra: 'D', texto: 'a licitação anterior foi deserta.' },
              { letra: 'E', texto: 'há necessidade de padronização.' },
            ],
            gabarito: 'C',
            justificativa: 'A INEXIGIBILIDADE ocorre quando a COMPETIÇÃO é INVIÁVEL, como nos casos de fornecedor exclusivo, profissional de notória especialização ou artista consagrado.',
            dificuldade: 'facil',
            competencia: 'Inexigibilidade',
            banca: 'IADES',
            tags: ['inexigibilidade', 'competição'],
          },
          {
            id: 'da-q-13-6',
            enunciado: 'O prazo de duração dos contratos administrativos, como regra geral, é de até:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '2 anos.' },
              { letra: 'C', texto: '5 anos.' },
              { letra: 'D', texto: '10 anos.' },
              { letra: 'E', texto: 'prazo indeterminado.' },
            ],
            gabarito: 'C',
            justificativa: 'A regra geral é prazo de até 5 ANOS. Exceções: serviços contínuos (10 anos) e aluguel de equipamentos/TI (15 anos).',
            dificuldade: 'medio',
            competencia: 'Duração dos contratos',
            banca: 'IADES',
            tags: ['contratos', 'prazo'],
          },
          {
            id: 'da-q-13-7',
            enunciado: 'O Portal Nacional de Contratações Públicas (PNCP) tem como função:',
            alternativas: [
              { letra: 'A', texto: 'realizar licitações em âmbito federal apenas.' },
              { letra: 'B', texto: 'centralizar informações sobre licitações e contratos.' },
              { letra: 'C', texto: 'substituir os diários oficiais dos Estados.' },
              { letra: 'D', texto: 'cadastrar apenas empresas de grande porte.' },
              { letra: 'E', texto: 'emitir certificados de regularidade fiscal.' },
            ],
            gabarito: 'B',
            justificativa: 'O PNCP é o sítio eletrônico oficial que CENTRALIZA informações sobre licitações e contratos de todos os entes federativos, com cadastro unificado de fornecedores.',
            dificuldade: 'facil',
            competencia: 'PNCP',
            banca: 'IADES',
            tags: ['PNCP', 'portal'],
          },
          {
            id: 'da-q-13-8',
            enunciado: 'São critérios de julgamento previstos na Lei 14.133/2021, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'menor preço.' },
              { letra: 'B', texto: 'maior desconto.' },
              { letra: 'C', texto: 'técnica e preço.' },
              { letra: 'D', texto: 'menor custo total.' },
              { letra: 'E', texto: 'maior retorno econômico.' },
            ],
            gabarito: 'D',
            justificativa: 'Os critérios são: menor preço, maior desconto, melhor técnica, técnica e preço, maior lance e maior retorno econômico. "Menor custo total" não é critério previsto.',
            dificuldade: 'medio',
            competencia: 'Critérios de julgamento',
            banca: 'IADES',
            tags: ['critérios', 'julgamento'],
          },
          {
            id: 'da-q-13-9',
            enunciado: 'A Lei 14.133/2021 revogou as seguintes leis:',
            alternativas: [
              { letra: 'A', texto: 'Lei 8.666/93 e Lei 9.784/99.' },
              { letra: 'B', texto: 'Lei 8.666/93, Lei 10.520/02 e Lei 12.462/11.' },
              { letra: 'C', texto: 'Lei 8.666/93 apenas.' },
              { letra: 'D', texto: 'Lei 10.520/02 e Lei 12.462/11 apenas.' },
              { letra: 'E', texto: 'Lei 8.666/93 e Lei 8.987/95.' },
            ],
            gabarito: 'B',
            justificativa: 'A Lei 14.133/2021 revogou a Lei 8.666/93 (Lei Geral), Lei 10.520/02 (Pregão) e Lei 12.462/11 (RDC).',
            dificuldade: 'medio',
            competencia: 'Revogação',
            banca: 'IADES',
            tags: ['revogação', 'transição'],
          },
          {
            id: 'da-q-13-10',
            enunciado: 'Na Lei 14.133/2021, a fase de habilitação:',
            alternativas: [
              { letra: 'A', texto: 'deve ocorrer sempre antes do julgamento das propostas.' },
              { letra: 'B', texto: 'foi eliminada do processo licitatório.' },
              { letra: 'C', texto: 'pode ocorrer após o julgamento das propostas.' },
              { letra: 'D', texto: 'é dispensada em todas as modalidades.' },
              { letra: 'E', texto: 'é obrigatória apenas no diálogo competitivo.' },
            ],
            gabarito: 'C',
            justificativa: 'A Lei 14.133/2021 permite a INVERSÃO DE FASES: a habilitação PODE ocorrer APÓS o julgamento das propostas, como já ocorria no pregão.',
            dificuldade: 'medio',
            competencia: 'Fases da licitação',
            banca: 'IADES',
            tags: ['habilitação', 'inversão'],
          },
        ],
      },
    },
    {
      id: 'da-topico-14',
      numero: 14,
      titulo: 'Bens Públicos',
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito e Classificação

| Critério | Tipos |
|----------|-------|
| **Quanto à titularidade** | Federais, Estaduais, Municipais, Distritais |
| **Quanto à destinação** | Uso comum, Uso especial, Dominicais |

### Classificação por Destinação (Art. 99, CC)

| Categoria | Definição | Exemplos | Alienável? |
|-----------|-----------|----------|------------|
| **Uso comum do povo** | Destinados ao uso geral | Praças, ruas, praias, mares | NÃO |
| **Uso especial** | Afetados ao serviço público | Repartições, escolas, hospitais públicos | NÃO |
| **Dominicais** | Patrimônio disponível do Estado | Terras devolutas, prédios desativados | SIM |

### Características dos Bens Públicos

| Característica | Significado |
|----------------|-------------|
| **Inalienabilidade** | Não podem ser vendidos (enquanto afetados) |
| **Impenhorabilidade** | Não podem ser penhorados |
| **Imprescritibilidade** | Não podem ser usucapidos |
| **Não oneração** | Não podem ser dados em garantia |

### Formas de Utilização por Terceiros

| Forma | Precariedade | Interesse | Exemplo |
|-------|--------------|-----------|---------|
| **Autorização** | SIM (mais precária) | Privado | Fechamento de rua para festa |
| **Permissão** | SIM | Público + Privado | Banca de jornal em praça |
| **Concessão** | NÃO (prazo determinado) | Público | Restaurante em aeroporto |

### Afetação e Desafetação

| Conceito | Significado |
|----------|-------------|
| **Afetação** | Atribuir destinação pública ao bem |
| **Desafetação** | Retirar a destinação pública (tornar dominical) |

### Para IADES:
- Bens de uso comum e especial são INALIENÁVEIS (enquanto afetados)
- Bens dominicais PODEM ser alienados (Lei autorizativa, avaliação, licitação)
- Bens públicos são IMPRESCRITÍVEIS (não há usucapião)
- Autorização é mais precária que permissão
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Bens Públicos

São bens públicos aqueles pertencentes às pessoas jurídicas de direito público interno (União, Estados, DF, Municípios, autarquias e fundações públicas de direito público).

**Base legal:** Arts. 98 a 103 do Código Civil.

### 2. Classificação dos Bens Públicos

#### 2.1 Quanto à Titularidade
- **Federais:** Pertencem à União
- **Estaduais:** Pertencem aos Estados
- **Municipais:** Pertencem aos Municípios
- **Distritais:** Pertencem ao DF

#### 2.2 Quanto à Destinação (Art. 99, CC)

**Bens de USO COMUM DO POVO:**
- Destinados ao uso GERAL, sem restrição individual
- Exemplos: praças, ruas, estradas, praias, mares, rios
- Podem ser de uso GRATUITO ou RETRIBUÍDO (pedágio)
- São INALIENÁVEIS (enquanto afetados)

**Bens de USO ESPECIAL:**
- AFETADOS ao serviço público
- Destinados ao exercício das atividades administrativas
- Exemplos: prédios de repartições, escolas públicas, hospitais públicos
- São INALIENÁVEIS (enquanto afetados)

**Bens DOMINICAIS (ou dominiais):**
- Constituem o patrimônio DISPONÍVEL do Estado
- NÃO estão afetados a qualquer destinação pública
- Exemplos: terras devolutas, prédios desativados, móveis inservíveis
- São ALIENÁVEIS (com requisitos legais)

### 3. Regime Jurídico dos Bens Públicos

#### 3.1 Inalienabilidade
- Bens de uso comum e especial são INALIENÁVEIS
- A inalienabilidade é RELATIVA (pode ser desafetado)
- Bens dominicais podem ser alienados

**Requisitos para alienação de dominicais:**
1. Lei autorizativa (móveis dependendo do valor)
2. Avaliação prévia
3. Licitação (regra: concorrência ou leilão)
4. Interesse público justificado

#### 3.2 Impenhorabilidade
- Bens públicos NÃO podem ser penhorados
- Consequência do sistema de precatórios (art. 100, CF)
- Aplica-se a TODOS os bens públicos

#### 3.3 Imprescritibilidade
- Bens públicos NÃO podem ser objeto de usucapião
- Previsão constitucional (arts. 183, §3º e 191, p.ú., CF)
- Aplica-se a TODOS os bens públicos, inclusive dominicais

#### 3.4 Não Onerabilidade
- Não podem ser objeto de direitos reais de garantia
- Não podem ser hipotecados, penhorados ou dados em anticrese

### 4. Afetação e Desafetação

#### 4.1 Afetação
Ato pelo qual o bem passa a ter destinação pública específica.

**Formas:**
- Lei
- Ato administrativo
- Fato administrativo (uso efetivo)

#### 4.2 Desafetação
Ato pelo qual o bem perde sua destinação pública, tornando-se dominical.

**Formas:**
- Lei (mais segura)
- Ato administrativo (quando permitido)
- Fato da natureza (destruição)

### 5. Formas de Utilização por Terceiros

#### 5.1 Uso Normal (Comum)
- Uso por qualquer pessoa do povo
- Sem necessidade de autorização
- Exemplos: andar na praça, trafegar na rua

#### 5.2 Uso Especial (Privativo)
Quando o particular utiliza o bem de forma exclusiva ou diferenciada.

**Instrumentos:**

| Instrumento | Características |
|-------------|-----------------|
| **Autorização** | Ato unilateral, discricionário, precário, interesse predominante do particular, sem prazo, sem licitação |
| **Permissão** | Ato unilateral, discricionário, precário, interesse do particular e público, pode ter prazo, pode exigir licitação |
| **Concessão** | Contrato administrativo, prazo determinado, interesse público, precedida de licitação, gera direitos ao concessionário |

#### 5.3 Comparativo

| Critério | Autorização | Permissão | Concessão |
|----------|-------------|-----------|-----------|
| Natureza | Ato | Ato | Contrato |
| Precariedade | Máxima | Intermediária | Mínima |
| Prazo | Sem prazo | Pode ter | Tem prazo |
| Interesse principal | Particular | Misto | Público |
| Licitação | Não | Pode ser exigida | Obrigatória |

### 6. Aquisição de Bens Públicos

#### 6.1 Formas de Aquisição
- **Compra:** mediante licitação
- **Doação:** pode dispensar licitação
- **Dação em pagamento**
- **Permuta**
- **Usucapião:** bens PRIVADOS usucapidos pelo Poder Público
- **Desapropriação**
- **Acessão, avulsão, aluvião**

### 7. Alienação de Bens Públicos

#### 7.1 Bens Imóveis
- Autorização legislativa
- Avaliação prévia
- Licitação (regra: concorrência)
- Justificativa do interesse público

#### 7.2 Bens Móveis
- Avaliação prévia
- Licitação (pode ser leilão)
- Dispensa de autorização legislativa (para valores menores)

**Modalidade:** Leilão para bens móveis inservíveis ou apreendidos.
        `,

        pontosChave: [
          'Classificação: uso comum do povo, uso especial e dominicais',
          'Uso comum e especial = INALIENÁVEIS (enquanto afetados)',
          'Dominicais = podem ser ALIENADOS (com requisitos)',
          'Todos os bens públicos são IMPRESCRITÍVEIS (não há usucapião)',
          'Todos os bens públicos são IMPENHORÁVEIS',
          'Afetação = dar destinação pública; Desafetação = retirar',
          'Autorização é mais PRECÁRIA que permissão',
          'Concessão de uso é CONTRATO, com prazo e direitos',
          'Alienação exige: lei autorizativa, avaliação, licitação',
          'Bens públicos não podem ser dados em garantia (hipoteca, penhor)',
        ],

        armadilhas: [
          {
            titulo: 'Dominical x Dominial',
            descricao: 'Dominical e dominial são SINÔNIMOS (patrimônio disponível)',
            dica: 'Ambos os termos são corretos e significam a mesma coisa',
          },
          {
            titulo: 'Inalienabilidade Relativa',
            descricao: 'Bens de uso comum/especial são inalienáveis ENQUANTO AFETADOS',
            dica: 'Se desafetados, tornam-se dominicais e podem ser alienados',
          },
          {
            titulo: 'Usucapião de Bens Públicos',
            descricao: 'TODOS os bens públicos são imprescritíveis, inclusive dominicais',
            dica: 'Nem mesmo dominical pode ser usucapido',
          },
          {
            titulo: 'Uso Comum RETRIBUÍDO',
            descricao: 'Bens de uso comum podem ser de uso gratuito OU retribuído',
            dica: 'Pedágio em estrada pública NÃO descaracteriza o uso comum',
          },
          {
            titulo: 'Permissão x Concessão',
            descricao: 'Permissão é ATO precário; Concessão é CONTRATO com prazo',
            dica: 'Concessão gera direitos; permissão pode ser revogada a qualquer tempo',
          },
          {
            titulo: 'Autorização x Licença',
            descricao: 'Autorização de uso de bem público é DIFERENTE de licença (poder de polícia)',
            dica: 'Autorização de uso = bem público. Licença = atividade privada.',
          },
        ],

        mnemonicos: [
          {
            termo: 'INED',
            significado: 'Características dos bens públicos',
            frase: 'Inalienabilidade, Não-oneração, Imprescritibilidade (sem usucapião), Impenhorabilidade',
          },
          {
            termo: 'CED',
            significado: 'Classificação por destinação',
            frase: 'Comum (povo), Especial (serviço), Dominical (disponível)',
          },
          {
            termo: 'APC',
            significado: 'Uso privativo de bem público',
            frase: 'Autorização (mais precária), Permissão (intermediária), Concessão (contrato)',
          },
          {
            termo: 'D-A-L-I',
            significado: 'Requisitos para alienar dominical',
            frase: 'Desafetação + Autorização legislativa + Licitação + Interesse público',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-14-1',
            frente: 'Quais são as três categorias de bens públicos quanto à destinação?',
            verso: '1) USO COMUM DO POVO (praças, ruas); 2) USO ESPECIAL (repartições, escolas); 3) DOMINICAIS (patrimônio disponível, terras devolutas).',
            tags: ['classificação', 'bens públicos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-2',
            frente: 'Os bens públicos podem ser objeto de usucapião?',
            verso: 'NÃO. TODOS os bens públicos são IMPRESCRITÍVEIS, ou seja, não podem ser usucapidos. Isso inclui os bens dominicais. Previsão: arts. 183, §3º e 191, p.ú., CF.',
            tags: ['usucapião', 'imprescritibilidade'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-3',
            frente: 'Qual a diferença entre autorização, permissão e concessão de uso?',
            verso: 'AUTORIZAÇÃO: ato precário, interesse do particular. PERMISSÃO: ato precário, interesse misto. CONCESSÃO: contrato com prazo, interesse público, gera direitos.',
            tags: ['uso', 'terceiros'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-4',
            frente: 'O que é afetação de bem público?',
            verso: 'É o ato pelo qual o bem recebe uma DESTINAÇÃO PÚBLICA específica, passando a ser de uso comum ou uso especial. Pode ocorrer por lei, ato administrativo ou fato (uso efetivo).',
            tags: ['afetação', 'destinação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-5',
            frente: 'Os bens dominicais podem ser alienados?',
            verso: 'SIM. Bens dominicais PODEM ser alienados, desde que cumpridos os requisitos: lei autorizativa (imóveis), avaliação prévia, licitação e interesse público justificado.',
            tags: ['dominicais', 'alienação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-6',
            frente: 'O que significa a impenhorabilidade dos bens públicos?',
            verso: 'Significa que os bens públicos NÃO podem ser objeto de penhora judicial. As dívidas da Fazenda Pública são pagas pelo sistema de PRECATÓRIOS (art. 100, CF).',
            tags: ['impenhorabilidade', 'precatório'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-7',
            frente: 'Bens de uso comum do povo podem ser de uso retribuído?',
            verso: 'SIM. O uso comum pode ser gratuito ou RETRIBUÍDO (art. 103, CC). Exemplo: cobrança de pedágio em estrada pública não descaracteriza o bem como de uso comum.',
            tags: ['uso comum', 'retribuição'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-8',
            frente: 'O que são terras devolutas?',
            verso: 'São terras públicas que nunca foram ou deixaram de ser utilizadas para fins públicos. São bens DOMINICAIS. As não transferidas pertencem aos Estados (regra) ou à União (faixa de fronteira).',
            tags: ['terras devolutas', 'dominicais'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-9',
            frente: 'Qual a diferença entre bens de uso especial e de uso comum?',
            verso: 'USO COMUM: destinados ao uso GERAL do povo (praças, ruas). USO ESPECIAL: AFETADOS ao serviço público, uso da Administração (prédios de repartições, hospitais públicos).',
            tags: ['uso comum', 'uso especial'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-14-10',
            frente: 'A inalienabilidade dos bens públicos é absoluta?',
            verso: 'NÃO. A inalienabilidade é RELATIVA. Bens de uso comum e especial são inalienáveis ENQUANTO AFETADOS. Se desafetados (tornam-se dominicais), podem ser alienados.',
            tags: ['inalienabilidade', 'afetação'],
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
            id: 'da-q-14-1',
            enunciado: 'De acordo com o Código Civil, os bens públicos de uso especial são aqueles:',
            alternativas: [
              { letra: 'A', texto: 'destinados ao uso geral da população, como praças e ruas.' },
              { letra: 'B', texto: 'afetados ao serviço público, como repartições e escolas.' },
              { letra: 'C', texto: 'que constituem o patrimônio disponível do Estado.' },
              { letra: 'D', texto: 'que podem ser alienados sem autorização legislativa.' },
              { letra: 'E', texto: 'que podem ser objeto de usucapião extraordinária.' },
            ],
            gabarito: 'B',
            justificativa: 'Bens de USO ESPECIAL são aqueles afetados ao serviço público, utilizados pela própria Administração. Exemplos: prédios de repartições, escolas, hospitais públicos.',
            dificuldade: 'facil',
            competencia: 'Classificação de bens públicos',
            banca: 'IADES',
            tags: ['uso especial', 'classificação'],
          },
          {
            id: 'da-q-14-2',
            enunciado: 'Em relação aos bens públicos, é correto afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'os bens dominicais podem ser objeto de usucapião.' },
              { letra: 'B', texto: 'os bens de uso comum são alienáveis.' },
              { letra: 'C', texto: 'todos os bens públicos são imprescritíveis.' },
              { letra: 'D', texto: 'os bens de uso especial podem ser penhorados.' },
              { letra: 'E', texto: 'a inalienabilidade é característica apenas dos bens de uso comum.' },
            ],
            gabarito: 'C',
            justificativa: 'TODOS os bens públicos, inclusive os dominicais, são IMPRESCRITÍVEIS (não podem ser usucapidos), conforme arts. 183, §3º e 191, p.ú., da CF.',
            dificuldade: 'medio',
            competencia: 'Características dos bens públicos',
            banca: 'IADES',
            tags: ['imprescritibilidade', 'usucapião'],
          },
          {
            id: 'da-q-14-3',
            enunciado: 'A forma de utilização de bem público por particular que se caracteriza pela máxima precariedade e atende preponderantemente ao interesse privado é a:',
            alternativas: [
              { letra: 'A', texto: 'concessão de uso.' },
              { letra: 'B', texto: 'permissão de uso.' },
              { letra: 'C', texto: 'autorização de uso.' },
              { letra: 'D', texto: 'cessão de uso.' },
              { letra: 'E', texto: 'locação de uso.' },
            ],
            gabarito: 'C',
            justificativa: 'A AUTORIZAÇÃO de uso é a forma mais precária, ato unilateral e discricionário que atende principalmente ao interesse do PARTICULAR. Pode ser revogada a qualquer tempo.',
            dificuldade: 'medio',
            competencia: 'Uso por terceiros',
            banca: 'IADES',
            tags: ['autorização', 'precariedade'],
          },
          {
            id: 'da-q-14-4',
            enunciado: 'Para a alienação de bens imóveis públicos dominicais, é necessário:',
            alternativas: [
              { letra: 'A', texto: 'apenas avaliação prévia.' },
              { letra: 'B', texto: 'autorização legislativa, avaliação e licitação.' },
              { letra: 'C', texto: 'apenas licitação na modalidade pregão.' },
              { letra: 'D', texto: 'decisão exclusiva do chefe do Poder Executivo.' },
              { letra: 'E', texto: 'prévia desapropriação por interesse público.' },
            ],
            gabarito: 'B',
            justificativa: 'A alienação de bens imóveis dominicais exige: AUTORIZAÇÃO LEGISLATIVA, AVALIAÇÃO prévia, LICITAÇÃO e interesse público demonstrado.',
            dificuldade: 'medio',
            competencia: 'Alienação de bens públicos',
            banca: 'IADES',
            tags: ['alienação', 'requisitos'],
          },
          {
            id: 'da-q-14-5',
            enunciado: 'A afetação de um bem público:',
            alternativas: [
              { letra: 'A', texto: 'torna o bem dominical.' },
              { letra: 'B', texto: 'permite sua alienação.' },
              { letra: 'C', texto: 'atribui ao bem uma destinação pública.' },
              { letra: 'D', texto: 'autoriza a penhora do bem.' },
              { letra: 'E', texto: 'possibilita a usucapião.' },
            ],
            gabarito: 'C',
            justificativa: 'AFETAÇÃO é o ato pelo qual se ATRIBUI ao bem uma DESTINAÇÃO PÚBLICA específica, tornando-o de uso comum ou uso especial.',
            dificuldade: 'facil',
            competencia: 'Afetação',
            banca: 'IADES',
            tags: ['afetação', 'conceito'],
          },
          {
            id: 'da-q-14-6',
            enunciado: 'Os bens dominicais diferem dos bens de uso especial porque:',
            alternativas: [
              { letra: 'A', texto: 'podem ser usucapidos.' },
              { letra: 'B', texto: 'não estão afetados a uma destinação pública.' },
              { letra: 'C', texto: 'são impenhoráveis.' },
              { letra: 'D', texto: 'pertencem apenas à União.' },
              { letra: 'E', texto: 'não podem ser alienados.' },
            ],
            gabarito: 'B',
            justificativa: 'Bens dominicais NÃO ESTÃO AFETADOS a qualquer destinação pública, constituindo o patrimônio disponível do Estado. Por isso podem ser alienados.',
            dificuldade: 'medio',
            competencia: 'Bens dominicais',
            banca: 'IADES',
            tags: ['dominicais', 'afetação'],
          },
          {
            id: 'da-q-14-7',
            enunciado: 'A permissão de uso de bem público caracteriza-se como:',
            alternativas: [
              { letra: 'A', texto: 'contrato administrativo bilateral.' },
              { letra: 'B', texto: 'ato administrativo precário e revogável.' },
              { letra: 'C', texto: 'ato vinculado e irrevogável.' },
              { letra: 'D', texto: 'contrato de direito privado.' },
              { letra: 'E', texto: 'ato com prazo determinado obrigatório.' },
            ],
            gabarito: 'B',
            justificativa: 'A PERMISSÃO de uso é ATO ADMINISTRATIVO unilateral, discricionário e PRECÁRIO, podendo ser REVOGADA pela Administração sem gerar direito a indenização.',
            dificuldade: 'medio',
            competencia: 'Permissão de uso',
            banca: 'IADES',
            tags: ['permissão', 'ato precário'],
          },
          {
            id: 'da-q-14-8',
            enunciado: 'São exemplos de bens de uso comum do povo:',
            alternativas: [
              { letra: 'A', texto: 'prédios de repartições públicas e hospitais.' },
              { letra: 'B', texto: 'terras devolutas e bens móveis inservíveis.' },
              { letra: 'C', texto: 'praças, ruas, praias e estradas.' },
              { letra: 'D', texto: 'escolas públicas e quartéis militares.' },
              { letra: 'E', texto: 'veículos oficiais e móveis de escritório.' },
            ],
            gabarito: 'C',
            justificativa: 'Bens de USO COMUM do povo são destinados ao uso geral, como PRAÇAS, RUAS, PRAIAS e ESTRADAS. Podem ser de uso gratuito ou retribuído.',
            dificuldade: 'facil',
            competencia: 'Uso comum do povo',
            banca: 'IADES',
            tags: ['uso comum', 'exemplos'],
          },
          {
            id: 'da-q-14-9',
            enunciado: 'Quanto à possibilidade de oneração, os bens públicos:',
            alternativas: [
              { letra: 'A', texto: 'podem ser hipotecados em qualquer caso.' },
              { letra: 'B', texto: 'podem ser dados em penhor, se móveis.' },
              { letra: 'C', texto: 'podem ser gravados com anticrese.' },
              { letra: 'D', texto: 'não podem ser objeto de direitos reais de garantia.' },
              { letra: 'E', texto: 'podem ser onerados apenas os dominicais.' },
            ],
            gabarito: 'D',
            justificativa: 'Os bens públicos são caracterizados pela NÃO ONERAÇÃO, ou seja, NÃO podem ser objeto de direitos reais de garantia (hipoteca, penhor, anticrese).',
            dificuldade: 'medio',
            competencia: 'Não oneração',
            banca: 'IADES',
            tags: ['oneração', 'garantia'],
          },
          {
            id: 'da-q-14-10',
            enunciado: 'A concessão de uso de bem público, diferentemente da autorização, caracteriza-se por ser:',
            alternativas: [
              { letra: 'A', texto: 'ato unilateral e precário.' },
              { letra: 'B', texto: 'contrato com prazo determinado.' },
              { letra: 'C', texto: 'ato que dispensa licitação.' },
              { letra: 'D', texto: 'instrumento de interesse exclusivamente privado.' },
              { letra: 'E', texto: 'forma de uso sem necessidade de contraprestação.' },
            ],
            gabarito: 'B',
            justificativa: 'A CONCESSÃO de uso é CONTRATO administrativo, com PRAZO DETERMINADO, precedida de licitação, que gera direitos ao concessionário. Diferente da autorização, que é ato precário.',
            dificuldade: 'medio',
            competencia: 'Concessão de uso',
            banca: 'IADES',
            tags: ['concessão', 'contrato'],
          },
        ],
      },
    },
    {
      id: 'da-topico-15',
      numero: 15,
      titulo: 'Lei de Acesso à Informação - Lei nº 12.527/2011',
      conteudo: {
        resumo: `
## Resumo Rápido

### Lei de Acesso à Informação (Lei 12.527/2011)

| Aspecto | Regra |
|---------|-------|
| **Fundamento** | Art. 5º, XXXIII e Art. 37, §3º, II da CF |
| **Vigência** | 16/05/2012 |
| **Abrangência** | União, Estados, DF, Municípios e todos os Poderes |

### Princípios da LAI

| Princípio | Significado |
|-----------|-------------|
| **Publicidade** | Regra geral, sigilo é EXCEÇÃO |
| **Transparência ativa** | Divulgar informações de interesse coletivo independente de solicitação |
| **Transparência passiva** | Atender pedidos de informação dos cidadãos |

### Prazos Importantes

| Situação | Prazo |
|----------|-------|
| Resposta a pedido de informação | **20 dias**, prorrogáveis por mais **10 dias** |
| Recurso contra negativa | **10 dias** |
| Decisão do recurso | **5 dias** |

### Classificação de Sigilo

| Grau | Prazo Máximo | Autoridade |
|------|--------------|------------|
| **Ultrassecreto** | 25 anos | Presidente, VP, Ministros, Comandantes, Chefes de Missão |
| **Secreto** | 15 anos | Autoridades do ultrassecreto + titulares de autarquias/fundações |
| **Reservado** | 5 anos | Autoridades anteriores + quem exerça função de direção |

### Para IADES:
- Publicidade é a REGRA, sigilo é EXCEÇÃO
- 20 + 10 dias para responder
- Ultrassecreto = 25 anos (máximo)
- Informações PESSOAIS = 100 anos de restrição
        `,

        explicacao: `
## Explicação Didática

### 1. Fundamento Constitucional

A Lei de Acesso à Informação regulamenta o direito fundamental de acesso previsto na CF/88:

**Art. 5º, XXXIII:** "Todos têm direito a receber dos órgãos públicos informações de seu interesse particular, ou de interesse coletivo ou geral..."

**Art. 37, §3º, II:** "O acesso dos usuários a registros administrativos e a informações sobre atos de governo..."

### 2. Abrangência (Art. 1º)

A LAI aplica-se a:
- **Todos os entes federativos:** União, Estados, DF e Municípios
- **Todos os Poderes:** Executivo, Legislativo e Judiciário
- **Tribunais de Contas e Ministério Público**
- **Autarquias, fundações, empresas públicas, sociedades de economia mista**
- **Entidades privadas sem fins lucrativos** (que recebam recursos públicos)

### 3. Transparência Ativa x Passiva

#### 3.1 Transparência Ativa (Art. 8º)
A Administração deve divulgar, **independente de solicitação**:
- Estrutura organizacional, competências, endereços
- Despesas e transferências de recursos
- Procedimentos licitatórios e contratos
- Programas, projetos, obras e ações
- Respostas a perguntas mais frequentes

**Obrigatoriedade de site:** Órgãos com mais de 10 mil habitantes devem manter site na internet.

#### 3.2 Transparência Passiva (Art. 10-14)
Atendimento a pedidos de informação:
- Qualquer interessado pode apresentar pedido
- **Não é necessário apresentar motivo**
- Identificação do requerente não pode exigir dados desnecessários
- Serviço gratuito (salvo custo de reprodução)

### 4. Procedimento de Acesso

#### 4.1 Pedido de Informação
- Deve conter identificação do requerente
- Especificação da informação requerida
- Pode ser feito por qualquer meio legítimo

#### 4.2 Prazos (Art. 11)
| Etapa | Prazo |
|-------|-------|
| Resposta imediata | Se disponível |
| Resposta normal | **20 dias** |
| Prorrogação | + **10 dias** (mediante justificativa) |

#### 4.3 Recursos (Art. 15-16)
- **Prazo para recorrer:** 10 dias da ciência da decisão
- **Decisão do recurso:** 5 dias
- **Instâncias recursais:**
  1. Autoridade hierarquicamente superior
  2. Controladoria-Geral (CGU) - no âmbito federal
  3. Comissão Mista de Reavaliação de Informações

### 5. Restrições de Acesso

#### 5.1 Informações Sigilosas (Art. 23-24)
São passíveis de classificação as informações que possam:
- Pôr em risco a defesa e soberania nacional
- Prejudicar negociações internacionais
- Pôr em risco a vida, segurança ou saúde da população
- Comprometer atividades de inteligência

**Graus de sigilo:**
| Grau | Prazo | Autoridade competente |
|------|-------|----------------------|
| **Ultrassecreto** | 25 anos | Presidente, VP, Ministros de Estado, Comandantes FA, Chefes de Missão Diplomática |
| **Secreto** | 15 anos | Anteriores + titulares de autarquias, fundações, EP, SEM |
| **Reservado** | 5 anos | Anteriores + quem exerça função de direção, comando ou chefia |

**Importante:** O prazo pode ser PRORROGADO UMA VEZ para ultrassecreto (total: 50 anos máximo).

#### 5.2 Informações Pessoais (Art. 31)
- Acesso restrito por **100 ANOS**
- Independe de classificação de sigilo
- Relacionadas à intimidade, vida privada, honra e imagem
- Agentes públicos em razão do exercício podem ter acesso restrito

### 6. Responsabilização (Art. 32-34)

**Condutas ilícitas:**
- Recusar informação sem fundamentação
- Retardar deliberadamente o fornecimento
- Destruir ou subtrair documentos
- Impor sigilo para obter proveito pessoal
- Ocultar da revisão informação sigilosa

**Sanções:** Responsabilidade administrativa, civil e penal.

### 7. Comissão Mista de Reavaliação de Informações

- Órgão colegiado, com representantes do Executivo e Legislativo
- Reavalia classificações de sigilo ultrassecreto e secreto
- Prazo de 4 anos para reexaminar informações classificadas
        `,

        pontosChave: [
          'Publicidade é REGRA, sigilo é EXCEÇÃO',
          'Abrange todos os Poderes e entes federativos',
          'Prazo de resposta: 20 dias + 10 dias de prorrogação',
          'NÃO é necessário justificar o pedido de informação',
          'Ultrassecreto: 25 anos / Secreto: 15 anos / Reservado: 5 anos',
          'Informações pessoais: restrição de 100 ANOS',
          'Transparência ativa: divulgar sem que alguém peça',
          'Transparência passiva: atender pedidos',
          'Recurso: 10 dias para interpor',
          'Serviço gratuito (salvo custos de reprodução)',
        ],

        armadilhas: [
          {
            titulo: 'Prazo de resposta',
            descricao: 'O prazo é de 20 dias, NÃO 30 dias',
            dica: 'Lembre: 20 + 10 = 30 total, mas o prazo inicial é 20',
          },
          {
            titulo: 'Necessidade de justificativa',
            descricao: 'O cidadão NÃO precisa justificar o pedido',
            dica: 'A lei veda expressamente exigir motivo para o pedido',
          },
          {
            titulo: 'Prazo do ultrassecreto',
            descricao: '25 anos (não 30 ou 50). Pode prorrogar uma vez = máximo 50',
            dica: 'Ultrassecreto = 25 anos (maior prazo inicial)',
          },
          {
            titulo: 'Informações pessoais',
            descricao: '100 anos de restrição, independente de classificação',
            dica: 'Não confunda sigilo (25 anos máx) com pessoais (100 anos)',
          },
          {
            titulo: 'Entidades privadas',
            descricao: 'Aplica-se também a entidades privadas SEM fins lucrativos que recebam recursos públicos',
            dica: 'Não são apenas órgãos públicos que se submetem à LAI',
          },
        ],

        mnemonicos: [
          {
            termo: 'USR 25-15-5',
            significado: 'Graus de sigilo',
            frase: 'Ultrassecreto 25 / Secreto 15 / Reservado 5',
          },
          {
            termo: '20+10',
            significado: 'Prazo de resposta',
            frase: '20 dias + 10 de prorrogação',
          },
          {
            termo: 'ATIPA',
            significado: 'Transparência ativa',
            frase: 'Administração Transparente Informa Proativamente ao povo',
          },
          {
            termo: '100 PESSOAIS',
            significado: 'Informações pessoais',
            frase: '100 anos de restrição para informações pessoais',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-15-1',
            frente: 'Qual é o prazo para resposta a pedido de informação na LAI?',
            verso: '20 DIAS, prorrogáveis por mais 10 dias mediante justificativa expressa. Total máximo: 30 dias.',
            tags: ['LAI', 'prazos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-2',
            frente: 'Quais são os graus de sigilo e seus prazos na LAI?',
            verso: 'ULTRASSECRETO: 25 anos (prorrogável uma vez = 50 max) / SECRETO: 15 anos / RESERVADO: 5 anos.',
            tags: ['sigilo', 'classificação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-3',
            frente: 'Qual é o prazo de restrição para informações pessoais?',
            verso: '100 ANOS. Independe de classificação de sigilo. Relacionadas à intimidade, vida privada, honra e imagem.',
            tags: ['informações pessoais', 'prazo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-4',
            frente: 'O que é transparência ativa na LAI?',
            verso: 'Divulgação de informações de interesse coletivo pela Administração, INDEPENDENTE de solicitação. Ex: publicar despesas, contratos, licitações no site oficial.',
            tags: ['transparência ativa', 'conceito'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-5',
            frente: 'É necessário justificar o pedido de informação?',
            verso: 'NÃO. A LAI veda expressamente que se exija do requerente motivo ou justificativa para o pedido de informação.',
            tags: ['pedido', 'justificativa'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-6',
            frente: 'A quem se aplica a Lei de Acesso à Informação?',
            verso: 'Todos os Poderes (Executivo, Legislativo, Judiciário), todos os entes (U, E, DF, M), autarquias, fundações, EP, SEM, e entidades privadas sem fins lucrativos que recebam recursos públicos.',
            tags: ['abrangência', 'aplicação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-7',
            frente: 'Quem pode classificar informação como ultrassecreta?',
            verso: 'Presidente da República, Vice-Presidente, Ministros de Estado, Comandantes das Forças Armadas e Chefes de Missão Diplomática ou Consulares permanentes.',
            tags: ['ultrassecreto', 'competência'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-8',
            frente: 'Qual o prazo para interpor recurso contra negativa de informação?',
            verso: '10 DIAS, contados da ciência da decisão. A autoridade tem 5 dias para decidir o recurso.',
            tags: ['recurso', 'prazo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-9',
            frente: 'O que é a Comissão Mista de Reavaliação de Informações?',
            verso: 'Órgão colegiado que reavalia classificações de sigilo ultrassecreto e secreto. Composta por representantes do Executivo e Legislativo.',
            tags: ['comissão mista', 'reavaliação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-15-10',
            frente: 'A informação ultrassecreta pode ter seu prazo prorrogado?',
            verso: 'SIM, o prazo de 25 anos pode ser prorrogado UMA VEZ por igual período, totalizando no máximo 50 anos de sigilo.',
            tags: ['ultrassecreto', 'prorrogação'],
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
            id: 'da-q-15-1',
            enunciado: 'De acordo com a Lei de Acesso à Informação (Lei 12.527/2011), o prazo para resposta a pedido de informação é de:',
            alternativas: [
              { letra: 'A', texto: '10 dias, improrrogáveis.' },
              { letra: 'B', texto: '15 dias, prorrogáveis por mais 15 dias.' },
              { letra: 'C', texto: '20 dias, prorrogáveis por mais 10 dias.' },
              { letra: 'D', texto: '30 dias, improrrogáveis.' },
              { letra: 'E', texto: '5 dias, prorrogáveis por mais 5 dias.' },
            ],
            gabarito: 'C',
            justificativa: 'O art. 11 da LAI estabelece prazo de 20 DIAS para resposta, prorrogável por mais 10 dias mediante justificativa expressa.',
            dificuldade: 'Fácil',
            competencia: 'Prazos da LAI',
            banca: 'IADES',
            tags: ['LAI', 'prazos'],
          },
          {
            id: 'da-q-15-2',
            enunciado: 'O grau de sigilo "ultrassecreto" tem prazo máximo de:',
            alternativas: [
              { letra: 'A', texto: '5 anos.' },
              { letra: 'B', texto: '15 anos.' },
              { letra: 'C', texto: '25 anos.' },
              { letra: 'D', texto: '50 anos.' },
              { letra: 'E', texto: '100 anos.' },
            ],
            gabarito: 'C',
            justificativa: 'O grau ULTRASSECRETO tem prazo de 25 ANOS. Pode ser prorrogado uma vez (chegando a 50), mas o prazo inicial máximo é 25 anos.',
            dificuldade: 'Fácil',
            competencia: 'Classificação de sigilo',
            banca: 'IADES',
            tags: ['ultrassecreto', 'prazo'],
          },
          {
            id: 'da-q-15-3',
            enunciado: 'Quanto ao pedido de informação, a Lei 12.527/2011 estabelece que:',
            alternativas: [
              { letra: 'A', texto: 'é obrigatória a apresentação de justificativa do pedido.' },
              { letra: 'B', texto: 'somente brasileiros podem requerer informações.' },
              { letra: 'C', texto: 'é vedado exigir que o requerente informe os motivos do pedido.' },
              { letra: 'D', texto: 'o serviço de fornecimento é sempre oneroso.' },
              { letra: 'E', texto: 'apenas advogados podem protocolar pedidos.' },
            ],
            gabarito: 'C',
            justificativa: 'A LAI veda expressamente que se exija do requerente motivo ou justificativa para o pedido de informação (art. 10, §3º).',
            dificuldade: 'Fácil',
            competencia: 'Pedido de informação',
            banca: 'IADES',
            tags: ['pedido', 'justificativa'],
          },
          {
            id: 'da-q-15-4',
            enunciado: 'As informações pessoais relativas à intimidade, vida privada, honra e imagem terão acesso restrito pelo prazo de:',
            alternativas: [
              { letra: 'A', texto: '25 anos.' },
              { letra: 'B', texto: '50 anos.' },
              { letra: 'C', texto: '75 anos.' },
              { letra: 'D', texto: '100 anos.' },
              { letra: 'E', texto: 'prazo indeterminado.' },
            ],
            gabarito: 'D',
            justificativa: 'As informações PESSOAIS têm acesso restrito por 100 ANOS, independentemente de classificação de sigilo (art. 31).',
            dificuldade: 'Média',
            competencia: 'Informações pessoais',
            banca: 'IADES',
            tags: ['pessoais', '100 anos'],
          },
          {
            id: 'da-q-15-5',
            enunciado: 'A transparência ativa, prevista na LAI, consiste em:',
            alternativas: [
              { letra: 'A', texto: 'responder pedidos de informação em até 20 dias.' },
              { letra: 'B', texto: 'divulgar informações de interesse coletivo independente de solicitação.' },
              { letra: 'C', texto: 'classificar documentos como sigilosos.' },
              { letra: 'D', texto: 'restringir acesso a informações pessoais.' },
              { letra: 'E', texto: 'cobrar pelo fornecimento de documentos.' },
            ],
            gabarito: 'B',
            justificativa: 'Transparência ATIVA é a divulgação de informações de interesse coletivo pela Administração, INDEPENDENTE de solicitação (art. 8º).',
            dificuldade: 'Fácil',
            competencia: 'Transparência ativa',
            banca: 'IADES',
            tags: ['transparência', 'ativa'],
          },
          {
            id: 'da-q-15-6',
            enunciado: 'A Lei de Acesso à Informação aplica-se:',
            alternativas: [
              { letra: 'A', texto: 'apenas ao Poder Executivo federal.' },
              { letra: 'B', texto: 'aos três Poderes, em todos os entes da federação.' },
              { letra: 'C', texto: 'somente às autarquias e fundações.' },
              { letra: 'D', texto: 'apenas aos órgãos da administração direta.' },
              { letra: 'E', texto: 'exclusivamente à União.' },
            ],
            gabarito: 'B',
            justificativa: 'A LAI aplica-se aos TRÊS PODERES (Executivo, Legislativo, Judiciário) em TODOS os entes da federação (União, Estados, DF, Municípios).',
            dificuldade: 'Fácil',
            competencia: 'Abrangência',
            banca: 'IADES',
            tags: ['aplicação', 'abrangência'],
          },
          {
            id: 'da-q-15-7',
            enunciado: 'Os graus de sigilo previstos na Lei 12.527/2011 são:',
            alternativas: [
              { letra: 'A', texto: 'confidencial, secreto e reservado.' },
              { letra: 'B', texto: 'ultrassecreto, secreto e reservado.' },
              { letra: 'C', texto: 'sigiloso, restrito e público.' },
              { letra: 'D', texto: 'confidencial, secreto e ultrassecreto.' },
              { letra: 'E', texto: 'reservado, restrito e secreto.' },
            ],
            gabarito: 'B',
            justificativa: 'A LAI prevê três graus de sigilo: ULTRASSECRETO (25 anos), SECRETO (15 anos) e RESERVADO (5 anos). Não existe mais "confidencial".',
            dificuldade: 'Fácil',
            competencia: 'Graus de sigilo',
            banca: 'IADES',
            tags: ['sigilo', 'graus'],
          },
          {
            id: 'da-q-15-8',
            enunciado: 'O prazo para interpor recurso contra a negativa de acesso à informação é de:',
            alternativas: [
              { letra: 'A', texto: '5 dias.' },
              { letra: 'B', texto: '10 dias.' },
              { letra: 'C', texto: '15 dias.' },
              { letra: 'D', texto: '20 dias.' },
              { letra: 'E', texto: '30 dias.' },
            ],
            gabarito: 'B',
            justificativa: 'O prazo para interpor recurso contra negativa de informação é de 10 DIAS, contados da ciência da decisão (art. 15).',
            dificuldade: 'Média',
            competencia: 'Recursos',
            banca: 'IADES',
            tags: ['recurso', 'prazo'],
          },
          {
            id: 'da-q-15-9',
            enunciado: 'Na Lei de Acesso à Informação, a publicidade é:',
            alternativas: [
              { letra: 'A', texto: 'exceção, sendo a regra o sigilo.' },
              { letra: 'B', texto: 'a regra geral, sendo o sigilo a exceção.' },
              { letra: 'C', texto: 'facultativa para os órgãos públicos.' },
              { letra: 'D', texto: 'aplicável apenas a documentos históricos.' },
              { letra: 'E', texto: 'restrita a informações sobre licitações.' },
            ],
            gabarito: 'B',
            justificativa: 'A PUBLICIDADE é a REGRA GERAL na LAI. O sigilo é EXCEÇÃO e deve ser devidamente fundamentado.',
            dificuldade: 'Fácil',
            competencia: 'Princípio da publicidade',
            banca: 'IADES',
            tags: ['publicidade', 'regra'],
          },
          {
            id: 'da-q-15-10',
            enunciado: 'São autoridades competentes para classificar informação como ultrassecreta, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Presidente da República.' },
              { letra: 'B', texto: 'Vice-Presidente da República.' },
              { letra: 'C', texto: 'Ministros de Estado.' },
              { letra: 'D', texto: 'Diretores de autarquias.' },
              { letra: 'E', texto: 'Comandantes das Forças Armadas.' },
            ],
            gabarito: 'D',
            justificativa: 'Diretores de autarquias podem classificar até SECRETO, não ultrassecreto. Ultrassecreto: Presidente, VP, Ministros, Comandantes FA e Chefes de Missão.',
            dificuldade: 'Média',
            competencia: 'Competência para classificação',
            banca: 'IADES',
            tags: ['ultrassecreto', 'competência'],
          },
        ],
      },
    },
    {
      id: 'da-topico-16',
      numero: 16,
      titulo: 'Lei Geral de Proteção de Dados - Lei nº 13.709/2018 (LGPD)',
      conteudo: {
        resumo: `
## Resumo Rápido

### LGPD - Lei 13.709/2018

| Aspecto | Regra |
|---------|-------|
| **Vigência** | 18/09/2020 (sanções: agosto/2021) |
| **Inspiração** | GDPR europeu |
| **Objeto** | Tratamento de dados pessoais (inclusive digital) |

### Agentes de Tratamento

| Agente | Função |
|--------|--------|
| **Controlador** | Decide sobre o tratamento |
| **Operador** | Realiza o tratamento em nome do controlador |
| **Encarregado (DPO)** | Canal de comunicação entre controlador/titulares/ANPD |

### Bases Legais para Tratamento (Art. 7º)

| Base Legal | Descrição |
|------------|-----------|
| **Consentimento** | Autorização do titular |
| **Obrigação legal** | Cumprimento de lei |
| **Políticas públicas** | Execução pelo poder público |
| **Estudos por órgão de pesquisa** | Anonimização preferencial |
| **Contrato** | Execução de contrato |
| **Processo judicial** | Exercício regular de direitos |
| **Proteção da vida** | Tutela de saúde |
| **Legítimo interesse** | Do controlador ou terceiro |
| **Proteção ao crédito** | Cadastros positivos |

### Sanções Administrativas

| Sanção | Limite |
|--------|--------|
| Multa simples | Até 2% do faturamento (máx. R$ 50 milhões por infração) |
| Multa diária | Até R$ 50 milhões |
| Bloqueio de dados | Até regularização |
| Eliminação de dados | Dados irregulares |

### Para IADES:
- ANPD = Autoridade Nacional de Proteção de Dados
- Consentimento NÃO é a única base legal
- Controlador DECIDE, Operador EXECUTA
- Dado pessoal sensível = tratamento mais restritivo
        `,

        explicacao: `
## Explicação Didática

### 1. Conceitos Fundamentais (Art. 5º)

#### 1.1 Dado Pessoal
Informação relacionada a pessoa natural **identificada ou identificável**.
- Ex: nome, CPF, endereço, e-mail, telefone

#### 1.2 Dado Pessoal Sensível
Dado sobre origem racial/étnica, convicção religiosa, opinião política, filiação sindical, dados de saúde, vida sexual, genético ou biométrico.
- **Tratamento mais restritivo!**

#### 1.3 Dado Anonimizado
Dado que **não pode ser identificado**, considerando meios técnicos disponíveis.
- Não se aplica a LGPD (não é dado pessoal)

#### 1.4 Titular
Pessoa natural a quem se referem os dados pessoais.

### 2. Agentes de Tratamento

#### 2.1 Controlador
Pessoa (natural ou jurídica) a quem **competem as decisões** sobre tratamento.
- Decide finalidade e meios
- Responsável principal

#### 2.2 Operador
Pessoa que realiza o tratamento **em nome do controlador**.
- Segue instruções do controlador
- Não decide finalidade

#### 2.3 Encarregado (DPO)
- Indicado pelo controlador e operador
- Canal de comunicação entre:
  - Controlador ↔ Titulares
  - Controlador ↔ ANPD
- Identidade deve ser divulgada publicamente

### 3. Princípios (Art. 6º)

| Princípio | Significado |
|-----------|-------------|
| **Finalidade** | Propósitos legítimos e específicos |
| **Adequação** | Compatibilidade com a finalidade |
| **Necessidade** | Mínimo necessário para a finalidade |
| **Livre acesso** | Consulta facilitada aos dados |
| **Qualidade** | Dados exatos e atualizados |
| **Transparência** | Informações claras e precisas |
| **Segurança** | Proteção contra acessos não autorizados |
| **Prevenção** | Medidas para evitar danos |
| **Não discriminação** | Vedação de tratamento discriminatório |
| **Responsabilização** | Demonstração de eficácia das medidas |

### 4. Bases Legais para Tratamento

#### 4.1 Dados Pessoais (Art. 7º)
10 bases legais:
1. **Consentimento** do titular
2. **Cumprimento de obrigação legal** pelo controlador
3. **Execução de políticas públicas** pela Administração
4. **Estudos** por órgão de pesquisa
5. **Execução de contrato** a pedido do titular
6. **Exercício regular de direitos** em processo
7. **Proteção da vida** do titular ou terceiro
8. **Tutela da saúde** por profissionais/serviços de saúde
9. **Legítimo interesse** do controlador ou terceiro
10. **Proteção do crédito**

#### 4.2 Dados Sensíveis (Art. 11)
Apenas 8 bases legais (mais restritivo):
- Consentimento específico e destacado
- Obrigação legal/regulatória
- Execução de políticas públicas
- Estudos por órgão de pesquisa
- Exercício regular de direitos
- Proteção da vida
- Tutela da saúde
- Prevenção à fraude

**NÃO há legítimo interesse nem proteção ao crédito!**

### 5. Direitos do Titular (Art. 18)

- Confirmação de existência de tratamento
- Acesso aos dados
- Correção de dados incompletos/inexatos
- Anonimização, bloqueio ou eliminação
- Portabilidade
- Eliminação (com consentimento)
- Informação sobre compartilhamento
- Informação sobre não consentir
- Revogação do consentimento

### 6. ANPD - Autoridade Nacional de Proteção de Dados

- Órgão da administração pública federal
- Natureza jurídica transitória: órgão → autarquia especial (2 anos)
- Competências:
  - Zelar pela proteção de dados pessoais
  - Elaborar diretrizes
  - Fiscalizar e aplicar sanções
  - Promover conhecimento das normas

### 7. Sanções Administrativas (Art. 52)

| Sanção | Descrição |
|--------|-----------|
| Advertência | Com prazo para correção |
| Multa simples | Até 2% do faturamento (máx. R$ 50 milhões) |
| Multa diária | Observado limite de R$ 50 milhões |
| Publicização | Após apuração confirmada |
| Bloqueio | Até regularização |
| Eliminação | Dados irregulares |
| Suspensão parcial | Até 6 meses (prorrogável) |
| Proibição parcial/total | Atividades de tratamento |

### 8. Tratamento pelo Poder Público (Art. 23-30)

- Finalidade pública e interesse público
- Uso compartilhado entre entes: permitido
- Transferência a entidades privadas: vedada (com exceções)
- Deve publicar informações sobre tratamento
        `,

        pontosChave: [
          'Dado pessoal = pessoa identificada ou IDENTIFICÁVEL',
          'Dado sensível = origem, religião, política, saúde, biometria (tratamento restritivo)',
          'Controlador DECIDE / Operador EXECUTA',
          'Encarregado (DPO) = canal de comunicação',
          '10 bases legais para dados pessoais / 8 para dados sensíveis',
          'Consentimento NÃO é a única base legal',
          'ANPD = Autoridade Nacional de Proteção de Dados',
          'Multa: até 2% do faturamento (máximo R$ 50 milhões)',
          'Dado anonimizado NÃO é dado pessoal (não se aplica LGPD)',
          'Titular tem direito de acesso, correção, eliminação e portabilidade',
        ],

        armadilhas: [
          {
            titulo: 'Consentimento como única base',
            descricao: 'Existem 10 bases legais para tratamento, não apenas consentimento',
            dica: 'LGPD permite tratamento por obrigação legal, legítimo interesse, etc.',
          },
          {
            titulo: 'Controlador x Operador',
            descricao: 'Controlador DECIDE, Operador EXECUTA. Não confunda!',
            dica: 'Quem decide = Controlador / Quem faz em nome de = Operador',
          },
          {
            titulo: 'Dado anonimizado',
            descricao: 'Se não pode ser identificado, NÃO é dado pessoal',
            dica: 'LGPD não se aplica a dados verdadeiramente anonimizados',
          },
          {
            titulo: 'Bases legais para sensíveis',
            descricao: 'Dados sensíveis têm MENOS bases legais (8, não 10)',
            dica: 'Não há legítimo interesse nem proteção ao crédito para sensíveis',
          },
          {
            titulo: 'Multa máxima',
            descricao: 'É 2% do faturamento OU R$ 50 milhões (o que for menor)',
            dica: 'Não é 2% sem limite - há teto de 50 milhões',
          },
        ],

        mnemonicos: [
          {
            termo: 'COE',
            significado: 'Agentes de tratamento',
            frase: 'Controlador (decide), Operador (executa), Encarregado (comunica)',
          },
          {
            termo: '2%-50MI',
            significado: 'Multa máxima',
            frase: '2% do faturamento OU R$ 50 milhões (o menor)',
          },
          {
            termo: 'CROP-SBG',
            significado: 'Dados sensíveis',
            frase: 'Convicção religiosa, Raça, Opinião política, Partido/sindicato, Saúde, Biometria, Genético',
          },
          {
            termo: '10-8',
            significado: 'Bases legais',
            frase: '10 bases para dados pessoais / 8 bases para dados sensíveis',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-16-1',
            frente: 'O que é dado pessoal na LGPD?',
            verso: 'Informação relacionada a pessoa natural IDENTIFICADA ou IDENTIFICÁVEL. Ex: nome, CPF, e-mail, endereço, telefone.',
            tags: ['LGPD', 'dado pessoal'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-2',
            frente: 'O que são dados pessoais sensíveis?',
            verso: 'Dados sobre: origem racial/étnica, convicção religiosa, opinião política, filiação sindical, dados de saúde, vida sexual, dado genético ou biométrico. Tratamento mais restritivo!',
            tags: ['dado sensível', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-3',
            frente: 'Qual a diferença entre Controlador e Operador?',
            verso: 'CONTROLADOR: pessoa que DECIDE sobre o tratamento (finalidade e meios). OPERADOR: pessoa que REALIZA o tratamento em nome do controlador.',
            tags: ['controlador', 'operador'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-4',
            frente: 'Qual o papel do Encarregado (DPO) na LGPD?',
            verso: 'Canal de comunicação entre o controlador/operador, os titulares dos dados e a ANPD. Sua identidade deve ser divulgada publicamente.',
            tags: ['encarregado', 'DPO'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-5',
            frente: 'Quantas bases legais existem para tratamento de dados pessoais e sensíveis?',
            verso: 'Dados PESSOAIS: 10 bases legais. Dados SENSÍVEIS: 8 bases legais (não tem legítimo interesse nem proteção ao crédito).',
            tags: ['bases legais', 'quantidade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-6',
            frente: 'Qual a multa máxima prevista na LGPD?',
            verso: 'Multa simples de até 2% do faturamento bruto, limitada a R$ 50 MILHÕES por infração. Multa diária também limitada a R$ 50 milhões.',
            tags: ['sanções', 'multa'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-7',
            frente: 'O que é a ANPD?',
            verso: 'Autoridade Nacional de Proteção de Dados. Órgão da administração pública federal responsável por zelar, implementar, fiscalizar e aplicar sanções relativas à LGPD.',
            tags: ['ANPD', 'órgão'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-8',
            frente: 'O dado anonimizado está sujeito à LGPD?',
            verso: 'NÃO. Dado anonimizado é aquele que não pode ser identificado. Se verdadeiramente anônimo, não é considerado dado pessoal e não se aplica a LGPD.',
            tags: ['anonimizado', 'aplicação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-9',
            frente: 'Quais são os principais direitos do titular dos dados?',
            verso: 'Confirmação de tratamento, ACESSO aos dados, CORREÇÃO, ANONIMIZAÇÃO/bloqueio/eliminação, PORTABILIDADE, informação sobre compartilhamento, REVOGAÇÃO do consentimento.',
            tags: ['direitos', 'titular'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-16-10',
            frente: 'O consentimento é a única base legal para tratamento de dados?',
            verso: 'NÃO! Existem outras bases: obrigação legal, execução de políticas públicas, execução de contrato, exercício regular de direitos, proteção da vida, tutela da saúde, legítimo interesse, proteção ao crédito.',
            tags: ['consentimento', 'bases legais'],
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
            id: 'da-q-16-1',
            enunciado: 'De acordo com a LGPD, dado pessoal é:',
            alternativas: [
              { letra: 'A', texto: 'informação relacionada apenas a pessoa jurídica.' },
              { letra: 'B', texto: 'informação relacionada a pessoa natural identificada ou identificável.' },
              { letra: 'C', texto: 'qualquer informação em banco de dados.' },
              { letra: 'D', texto: 'dado sigiloso de empresa privada.' },
              { letra: 'E', texto: 'informação exclusivamente em meio digital.' },
            ],
            gabarito: 'B',
            justificativa: 'Dado pessoal é informação relacionada a pessoa natural IDENTIFICADA ou IDENTIFICÁVEL (art. 5º, I, LGPD). Não inclui pessoa jurídica.',
            dificuldade: 'Fácil',
            competencia: 'Conceito de dado pessoal',
            banca: 'IADES',
            tags: ['dado pessoal', 'conceito'],
          },
          {
            id: 'da-q-16-2',
            enunciado: 'São considerados dados pessoais sensíveis, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'origem racial ou étnica.' },
              { letra: 'B', texto: 'convicção religiosa.' },
              { letra: 'C', texto: 'dado sobre a saúde.' },
              { letra: 'D', texto: 'número de telefone.' },
              { letra: 'E', texto: 'dado genético ou biométrico.' },
            ],
            gabarito: 'D',
            justificativa: 'Número de telefone é dado pessoal comum, não sensível. Dados sensíveis: origem, religião, opinião política, sindicato, saúde, vida sexual, biometria, genética.',
            dificuldade: 'Fácil',
            competencia: 'Dados sensíveis',
            banca: 'IADES',
            tags: ['sensíveis', 'exceção'],
          },
          {
            id: 'da-q-16-3',
            enunciado: 'Na LGPD, o agente de tratamento que compete tomar as decisões referentes ao tratamento de dados pessoais é o:',
            alternativas: [
              { letra: 'A', texto: 'operador.' },
              { letra: 'B', texto: 'controlador.' },
              { letra: 'C', texto: 'encarregado.' },
              { letra: 'D', texto: 'titular.' },
              { letra: 'E', texto: 'processador.' },
            ],
            gabarito: 'B',
            justificativa: 'O CONTROLADOR é a pessoa (natural ou jurídica) a quem COMPETEM AS DECISÕES referentes ao tratamento de dados pessoais (art. 5º, VI).',
            dificuldade: 'Fácil',
            competencia: 'Agentes de tratamento',
            banca: 'IADES',
            tags: ['controlador', 'decisões'],
          },
          {
            id: 'da-q-16-4',
            enunciado: 'A multa simples prevista na LGPD pode chegar a:',
            alternativas: [
              { letra: 'A', texto: '1% do faturamento, limitada a R$ 10 milhões.' },
              { letra: 'B', texto: '2% do faturamento, limitada a R$ 50 milhões por infração.' },
              { letra: 'C', texto: '5% do faturamento, sem limite máximo.' },
              { letra: 'D', texto: '10% do faturamento, limitada a R$ 100 milhões.' },
              { letra: 'E', texto: '3% do faturamento, limitada a R$ 30 milhões.' },
            ],
            gabarito: 'B',
            justificativa: 'A multa simples pode ser de até 2% do faturamento bruto, limitada a R$ 50 MILHÕES por infração (art. 52, II).',
            dificuldade: 'Fácil',
            competencia: 'Sanções',
            banca: 'IADES',
            tags: ['multa', 'sanções'],
          },
          {
            id: 'da-q-16-5',
            enunciado: 'O tratamento de dados pessoais na LGPD pode ser realizado:',
            alternativas: [
              { letra: 'A', texto: 'somente com o consentimento do titular.' },
              { letra: 'B', texto: 'apenas para cumprimento de obrigação legal.' },
              { letra: 'C', texto: 'com base em diversas hipóteses legais, não apenas consentimento.' },
              { letra: 'D', texto: 'exclusivamente pelo poder público.' },
              { letra: 'E', texto: 'somente mediante autorização judicial.' },
            ],
            gabarito: 'C',
            justificativa: 'O tratamento pode ocorrer com base em DIVERSAS hipóteses legais (art. 7º): consentimento, obrigação legal, políticas públicas, contrato, legítimo interesse, etc.',
            dificuldade: 'Fácil',
            competencia: 'Bases legais',
            banca: 'IADES',
            tags: ['tratamento', 'bases legais'],
          },
          {
            id: 'da-q-16-6',
            enunciado: 'O encarregado (DPO) na LGPD tem como função principal:',
            alternativas: [
              { letra: 'A', texto: 'decidir sobre o tratamento dos dados.' },
              { letra: 'B', texto: 'executar o tratamento em nome do controlador.' },
              { letra: 'C', texto: 'atuar como canal de comunicação entre controlador, titulares e ANPD.' },
              { letra: 'D', texto: 'aplicar sanções administrativas.' },
              { letra: 'E', texto: 'autorizar a transferência internacional de dados.' },
            ],
            gabarito: 'C',
            justificativa: 'O Encarregado (DPO) atua como CANAL DE COMUNICAÇÃO entre o controlador, os titulares dos dados e a ANPD (art. 5º, VIII).',
            dificuldade: 'Média',
            competencia: 'Encarregado',
            banca: 'IADES',
            tags: ['encarregado', 'DPO'],
          },
          {
            id: 'da-q-16-7',
            enunciado: 'O dado anonimizado, segundo a LGPD:',
            alternativas: [
              { letra: 'A', texto: 'é considerado dado pessoal sensível.' },
              { letra: 'B', texto: 'não é considerado dado pessoal, desde que não possa ser revertido.' },
              { letra: 'C', texto: 'está sujeito às mesmas regras dos dados pessoais.' },
              { letra: 'D', texto: 'só pode ser tratado com consentimento.' },
              { letra: 'E', texto: 'é sempre ilegal seu uso.' },
            ],
            gabarito: 'B',
            justificativa: 'Dado anonimizado NÃO é considerado dado pessoal, desde que o processo de anonimização não possa ser revertido com meios técnicos razoáveis.',
            dificuldade: 'Média',
            competencia: 'Dado anonimizado',
            banca: 'IADES',
            tags: ['anonimizado', 'conceito'],
          },
          {
            id: 'da-q-16-8',
            enunciado: 'A ANPD (Autoridade Nacional de Proteção de Dados) é:',
            alternativas: [
              { letra: 'A', texto: 'órgão do Poder Judiciário.' },
              { letra: 'B', texto: 'empresa pública vinculada ao Ministério da Economia.' },
              { letra: 'C', texto: 'órgão da administração pública federal.' },
              { letra: 'D', texto: 'organização não-governamental.' },
              { letra: 'E', texto: 'agência reguladora vinculada ao Senado.' },
            ],
            gabarito: 'C',
            justificativa: 'A ANPD é ÓRGÃO DA ADMINISTRAÇÃO PÚBLICA FEDERAL, integrante da Presidência da República (art. 55-A).',
            dificuldade: 'Fácil',
            competencia: 'ANPD',
            banca: 'IADES',
            tags: ['ANPD', 'natureza'],
          },
          {
            id: 'da-q-16-9',
            enunciado: 'São direitos do titular dos dados, segundo a LGPD, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'confirmação da existência de tratamento.' },
              { letra: 'B', texto: 'acesso aos dados.' },
              { letra: 'C', texto: 'correção de dados incompletos.' },
              { letra: 'D', texto: 'alteração unilateral dos dados do controlador.' },
              { letra: 'E', texto: 'portabilidade dos dados.' },
            ],
            gabarito: 'D',
            justificativa: 'O titular pode corrigir SEUS dados, não alterar dados do controlador. Direitos: confirmação, acesso, correção, anonimização, portabilidade, eliminação, etc.',
            dificuldade: 'Média',
            competencia: 'Direitos do titular',
            banca: 'IADES',
            tags: ['direitos', 'titular'],
          },
          {
            id: 'da-q-16-10',
            enunciado: 'Para o tratamento de dados pessoais SENSÍVEIS, a LGPD prevê:',
            alternativas: [
              { letra: 'A', texto: 'as mesmas bases legais dos dados pessoais comuns.' },
              { letra: 'B', texto: 'bases legais mais restritivas, sem legítimo interesse.' },
              { letra: 'C', texto: 'apenas o consentimento como base legal.' },
              { letra: 'D', texto: 'vedação absoluta de tratamento.' },
              { letra: 'E', texto: 'autorização exclusiva da ANPD.' },
            ],
            gabarito: 'B',
            justificativa: 'Dados sensíveis têm bases legais mais RESTRITIVAS (8 bases). NÃO há legítimo interesse nem proteção ao crédito como bases para sensíveis.',
            dificuldade: 'Média',
            competencia: 'Dados sensíveis',
            banca: 'IADES',
            tags: ['sensíveis', 'bases legais'],
          },
        ],
      },
    },
    // ========================================
    // DIREITO CONSTITUCIONAL
    // ========================================
    {
      id: 'da-topico-17',
      numero: 17,
      titulo: 'Constituição da República Federativa do Brasil de 1988',
      conteudo: {
        resumo: `
## Resumo Rápido

### Classificação da CF/88

| Critério | Classificação |
|----------|---------------|
| **Origem** | Promulgada (democrática) |
| **Forma** | Escrita/Codificada |
| **Extensão** | Analítica (prolixa) |
| **Modo de elaboração** | Dogmática |
| **Alterabilidade** | Rígida (com cláusulas pétreas) |
| **Conteúdo** | Formal |
| **Ideologia** | Eclética (plural) |
| **Finalidade** | Dirigente e social |

### Fundamentos da República (Art. 1º) - SO-CI-DI-VA-PLU

| Sigla | Fundamento |
|-------|------------|
| **SO** | Soberania |
| **CI** | Cidadania |
| **DI** | Dignidade da pessoa humana |
| **VA** | Valores sociais do trabalho e livre iniciativa |
| **PLU** | Pluralismo político |

### Objetivos Fundamentais (Art. 3º) - CON-GA-ER-PRO

| Sigla | Objetivo |
|-------|----------|
| **CON** | Construir sociedade livre, justa e solidária |
| **GA** | Garantir o desenvolvimento nacional |
| **ER** | Erradicar a pobreza e reduzir desigualdades |
| **PRO** | Promover o bem de todos, sem preconceitos |

### Princípios Internacionais (Art. 4º) - Principais

- Independência nacional
- Prevalência dos direitos humanos
- Autodeterminação dos povos
- Não intervenção
- Defesa da paz
- Cooperação entre os povos
- Concessão de asilo político

### Para IADES:
- SO-CI-DI-VA-PLU = FUNDAMENTOS (art. 1º)
- CON-GA-ER-PRO = OBJETIVOS (art. 3º)
- CF/88 é RÍGIDA com cláusulas pétreas
- Título I = Princípios Fundamentais (arts. 1º a 4º)
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Constituição

A **Constituição** é a lei fundamental e suprema de um Estado, que organiza seus elementos essenciais: um sistema de normas jurídicas que estabelece a forma de Estado, a forma de governo, os órgãos do poder público, os direitos fundamentais e as limitações ao poder estatal.

#### Sentidos de Constituição

| Sentido | Autor | Conceito |
|---------|-------|----------|
| **Sociológico** | Ferdinand Lassalle | Constituição é a soma dos fatores reais de poder |
| **Político** | Carl Schmitt | Constituição é a decisão política fundamental |
| **Jurídico** | Hans Kelsen | Constituição é a norma pura, fundamento de validade |

#### Concepções Modernas

- **Força Normativa da Constituição** (Konrad Hesse): a Constituição tem força para conformar a realidade
- **Constituição Aberta** (Peter Häberle): todos são intérpretes da Constituição

### 2. Classificação das Constituições

#### 2.1 Quanto à ORIGEM

| Tipo | Características | Exemplo |
|------|-----------------|---------|
| **Promulgada** | Elaborada por representantes eleitos | CF/88, CF/1946 |
| **Outorgada** | Imposta pelo governante | CF/1824, CF/1937 |
| **Cesarista/Bonapartista** | Imposta + referendo popular | CF chilena 1980 |
| **Pactuada** | Acordo entre forças políticas | Magna Carta 1215 |

#### 2.2 Quanto à FORMA

| Tipo | Características |
|------|-----------------|
| **Escrita/Codificada** | Documento único e solene |
| **Não escrita/Costumeira** | Usos, costumes, jurisprudência |

#### 2.3 Quanto à EXTENSÃO

| Tipo | Características | Exemplo |
|------|-----------------|---------|
| **Sintética/Concisa** | Poucos artigos, princípios básicos | EUA (7 artigos) |
| **Analítica/Prolixa** | Extensa, detalhada | Brasil CF/88 |

#### 2.4 Quanto ao MODO DE ELABORAÇÃO

| Tipo | Características |
|------|-----------------|
| **Dogmática** | Elaborada de uma só vez, reflete ideologia |
| **Histórica** | Formação lenta, acumulação histórica |

#### 2.5 Quanto à ALTERABILIDADE (Estabilidade)

| Tipo | Características |
|------|-----------------|
| **Rígida** | Processo de alteração mais difícil que lei ordinária |
| **Flexível** | Mesmo processo da lei ordinária |
| **Semirrígida** | Parte rígida, parte flexível |
| **Super-rígida** | Rígida + cláusulas pétreas (CF/88 para alguns autores) |
| **Imutável** | Não admite alteração |

#### 2.6 Quanto ao CONTEÚDO

| Tipo | Características |
|------|-----------------|
| **Material** | Matéria essencialmente constitucional |
| **Formal** | Todas as normas do documento, independente do conteúdo |

### 3. Estrutura da CF/88

#### Preâmbulo
> "Nós, representantes do povo brasileiro, reunidos em Assembleia Nacional Constituinte..."

- **NÃO tem força normativa** (STF, ADI 2.076)
- Serve de vetor interpretativo
- Não pode ser invocado para declarar inconstitucionalidade

#### Corpo Permanente (250 artigos originais)

| Título | Conteúdo | Artigos |
|--------|----------|---------|
| I | **Princípios Fundamentais** | 1º a 4º |
| II | Direitos e Garantias Fundamentais | 5º a 17 |
| III | Organização do Estado | 18 a 43 |
| IV | Organização dos Poderes | 44 a 135 |
| V | Defesa do Estado e Instituições Democráticas | 136 a 144 |
| VI | Tributação e Orçamento | 145 a 169 |
| VII | Ordem Econômica e Financeira | 170 a 192 |
| VIII | Ordem Social | 193 a 232 |
| IX | Disposições Constitucionais Gerais | 233 a 250 |

#### ADCT - Ato das Disposições Constitucionais Transitórias
- Normas de transição entre a ordem anterior e a nova
- Eficácia temporária
- Também tem força normativa

### 4. Princípios Fundamentais (Título I)

#### 4.1 Art. 1º - Fundamentos da República

A República Federativa do Brasil tem como **FUNDAMENTOS**:

| Inciso | Fundamento | Explicação |
|--------|------------|------------|
| I | **Soberania** | Poder supremo interno e independência externa |
| II | **Cidadania** | Participação do povo na vida política |
| III | **Dignidade da pessoa humana** | Núcleo axiológico, valor supremo |
| IV | **Valores sociais do trabalho e livre iniciativa** | Equilíbrio entre capital e trabalho |
| V | **Pluralismo político** | Diversidade de ideias e partidos |

**Mnemônico: SO-CI-DI-VA-PLU**

⚠️ **Parágrafo único, art. 1º**: "Todo poder emana do POVO" (soberania popular)

#### 4.2 Art. 2º - Separação de Poderes

> "São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário."

- Princípio da separação de poderes (Montesquieu)
- Sistema de freios e contrapesos
- **Cláusula pétrea** (art. 60, §4º, III)

#### 4.3 Art. 3º - Objetivos Fundamentais

A República tem como **OBJETIVOS**:

| Inciso | Objetivo |
|--------|----------|
| I | **Construir** sociedade livre, justa e solidária |
| II | **Garantir** o desenvolvimento nacional |
| III | **Erradicar** pobreza, marginalização e **reduzir** desigualdades |
| IV | **Promover** o bem de todos, sem preconceitos |

**Mnemônico: CON-GA-ER-PRO** (ou: os objetivos são VERBOS!)

#### 4.4 Art. 4º - Princípios nas Relações Internacionais

| Princípio | Descrição |
|-----------|-----------|
| Independência nacional | Autonomia nas decisões |
| Prevalência dos direitos humanos | Compromisso com dignidade |
| Autodeterminação dos povos | Cada povo decide seu destino |
| Não intervenção | Respeito à soberania alheia |
| Igualdade entre os Estados | Paridade jurídica |
| Defesa da paz | Solução pacífica de conflitos |
| Solução pacífica dos conflitos | Diplomacia sobre força |
| Repúdio ao terrorismo e racismo | Valores universais |
| Cooperação entre os povos | Progresso da humanidade |
| Concessão de asilo político | Proteção a perseguidos |

**Parágrafo único**: Integração latino-americana (MERCOSUL)

### 5. Poder Constituinte

#### 5.1 Poder Constituinte Originário (PCO)

| Característica | Descrição |
|----------------|-----------|
| **Inicial** | Inaugura nova ordem jurídica |
| **Ilimitado** | Não se submete à ordem anterior |
| **Incondicionado** | Não há forma predeterminada |
| **Autônomo** | Não deriva de outro poder |

#### 5.2 Poder Constituinte Derivado

| Tipo | Função | Limitações |
|------|--------|------------|
| **Reformador** | Altera a CF (EC) | Cláusulas pétreas, limites formais |
| **Decorrente** | Constituições Estaduais | Observar CF |
| **Revisor** | Revisão do art. 3º ADCT | Já foi exercido (EC 1-6/94) |

### 6. Supremacia Constitucional

A Constituição ocupa o **topo do ordenamento jurídico**:

- Todas as normas devem ser compatíveis com a CF
- Norma inconstitucional é **nula** (teoria da nulidade)
- Controle de constitucionalidade preserva a supremacia

### 7. Elementos da Constituição (José Afonso da Silva)

| Elemento | Artigos | Conteúdo |
|----------|---------|----------|
| **Orgânicos** | Títulos III e IV | Estrutura do Estado e Poderes |
| **Limitativos** | Título II | Direitos Fundamentais |
| **Socioideológicos** | Títulos VII e VIII | Ordem econômica e social |
| **Estabilização** | Título V | Defesa do Estado |
| **Formais de aplicabilidade** | Preâmbulo, ADCT | Aplicação das normas |

### 8. CF/88 - Apelidos e Características

- **"Constituição Cidadã"** (Ulysses Guimarães)
- Ampla proteção aos direitos fundamentais
- Redemocratização do Brasil
- Marco do Estado Democrático de Direito
        `,

        pontosChave: [
          'CF/88: Promulgada, Escrita, Analítica, Dogmática, Rígida, Formal, Eclética',
          'FUNDAMENTOS (art. 1º): SO-CI-DI-VA-PLU (Soberania, Cidadania, Dignidade, Valores sociais, Pluralismo)',
          'OBJETIVOS (art. 3º): CON-GA-ER-PRO (Construir, Garantir, Erradicar, Promover) - são VERBOS!',
          'Art. 4º: princípios nas relações internacionais + integração latino-americana',
          'Preâmbulo NÃO tem força normativa (STF, ADI 2.076)',
          'Poder Constituinte Originário: inicial, ilimitado, incondicionado, autônomo',
          'Separação de Poderes (art. 2º) é CLÁUSULA PÉTREA',
          'Todo poder emana do POVO (parágrafo único, art. 1º)',
          'CF/88 = "Constituição Cidadã" (Ulysses Guimarães)',
          'ADCT tem força normativa (eficácia temporária)',
          'Título I (arts. 1º a 4º) = Princípios Fundamentais',
        ],

        armadilhas: [
          {
            titulo: 'Fundamentos x Objetivos',
            descricao: 'FUNDAMENTOS (art. 1º) são a BASE do Estado. OBJETIVOS (art. 3º) são as METAS a alcançar.',
            dica: 'Fundamentos = substantivos (soberania...). Objetivos = verbos (construir, garantir...).',
          },
          {
            titulo: 'Preâmbulo com força normativa',
            descricao: 'O Preâmbulo NÃO tem força normativa, segundo o STF.',
            dica: 'Preâmbulo é vetor interpretativo, não norma vinculante.',
          },
          {
            titulo: 'Constituição flexível',
            descricao: 'A CF/88 é RÍGIDA (alguns dizem super-rígida), não flexível.',
            dica: 'Emenda constitucional exige 3/5 em 2 turnos nas duas Casas.',
          },
          {
            titulo: 'Pluralismo político x partidário',
            descricao: 'PLURALISMO POLÍTICO é fundamento (art. 1º, V). Pluralismo PARTIDÁRIO está no art. 17.',
            dica: 'Cuidado com a troca de termos.',
          },
          {
            titulo: 'Desenvolvimento nacional',
            descricao: 'GARANTIR o desenvolvimento nacional é OBJETIVO (art. 3º, II), não fundamento.',
            dica: 'Só aparece na lista de objetivos, não de fundamentos.',
          },
          {
            titulo: 'Erradicar x Eliminar',
            descricao: 'O objetivo é ERRADICAR a pobreza e REDUZIR as desigualdades (não eliminar).',
            dica: 'Use os termos exatos da Constituição.',
          },
        ],

        mnemonicos: [
          {
            termo: 'SO-CI-DI-VA-PLU',
            significado: 'Fundamentos da República (art. 1º)',
            frase: 'SOberania, CIdadania, DIgnidade da pessoa humana, VAlores sociais do trabalho e livre iniciativa, PLUralismo político',
          },
          {
            termo: 'CON-GA-ER-PRO',
            significado: 'Objetivos Fundamentais (art. 3º)',
            frase: 'CONstruir, GArantir, ERradicar, PROmover',
          },
          {
            termo: 'VERBOS = OBJETIVOS',
            significado: 'Objetivos são verbos no infinitivo',
            frase: 'Se tem verbo (construir, garantir...) = OBJETIVO. Se é substantivo = FUNDAMENTO',
          },
          {
            termo: 'PRE-A-DO-RI-F-E',
            significado: 'Classificação da CF/88',
            frase: 'Promulgada, Escrita, Analítica, DOgmática, RÍgida, Formal, Eclética',
          },
          {
            termo: 'I-I-I-A',
            significado: 'Características do Poder Constituinte Originário',
            frase: 'Inicial, Ilimitado, Incondicionado, Autônomo',
          },
          {
            termo: 'DE-CO-RE',
            significado: 'Tipos de Poder Constituinte Derivado',
            frase: 'DErivado, Reformador (EC), DEcorrente (Estados)',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-17-1',
            frente: 'Quais são os FUNDAMENTOS da República (art. 1º)?',
            verso: '**SO-CI-DI-VA-PLU**\\n\\nI - **SO**berania\\nII - **CI**dadania\\nIII - **DI**gnidade da pessoa humana\\nIV - **VA**lores sociais do trabalho e livre iniciativa\\nV - **PLU**ralismo político',
            tags: ['fundamentos', 'art. 1º', 'CF/88'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-2',
            frente: 'Quais são os OBJETIVOS fundamentais da República (art. 3º)?',
            verso: '**CON-GA-ER-PRO** (são VERBOS!)\\n\\nI - **CON**struir sociedade livre, justa e solidária\\nII - **GA**rantir o desenvolvimento nacional\\nIII - **ER**radicar pobreza e reduzir desigualdades\\nIV - **PRO**mover o bem de todos',
            tags: ['objetivos', 'art. 3º', 'CF/88'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-3',
            frente: 'Como se classifica a CF/88?',
            verso: '**PRE-A-DO-RI-F-E**\\n\\n- **P**romulgada (origem)\\n- **E**scrita (forma)\\n- **A**nalítica (extensão)\\n- **DO**gmática (elaboração)\\n- **RÍ**gida (alterabilidade)\\n- **F**ormal (conteúdo)\\n- **E**clética (ideologia)',
            tags: ['classificação', 'CF/88'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-4',
            frente: 'O Preâmbulo da CF/88 tem força normativa?',
            verso: '**NÃO**, segundo o STF (ADI 2.076).\\n\\nO preâmbulo:\\n- Não é norma constitucional\\n- Não pode fundamentar inconstitucionalidade\\n- Serve apenas como vetor interpretativo\\n- Não é de reprodução obrigatória nas CEs',
            tags: ['preâmbulo', 'STF', 'força normativa'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-5',
            frente: 'Quais são as características do Poder Constituinte Originário?',
            verso: '**I-I-I-A**\\n\\n- **I**nicial: inaugura nova ordem\\n- **I**limitado: não se submete à ordem anterior\\n- **I**ncondicionado: sem forma predeterminada\\n- **A**utônomo: não deriva de outro poder',
            tags: ['poder constituinte', 'originário', 'características'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-6',
            frente: 'Qual a diferença entre fundamentos e objetivos na CF/88?',
            verso: '**FUNDAMENTOS** (art. 1º):\\n- São a BASE do Estado\\n- Expressos em substantivos\\n- Ex: soberania, cidadania, dignidade\\n\\n**OBJETIVOS** (art. 3º):\\n- São METAS a alcançar\\n- Expressos em VERBOS\\n- Ex: construir, garantir, erradicar',
            tags: ['fundamentos', 'objetivos', 'diferença'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-7',
            frente: 'Quais são os sentidos de Constituição?',
            verso: '**SOCIOLÓGICO** (Lassalle):\\nSoma dos fatores reais de poder\\n\\n**POLÍTICO** (Schmitt):\\nDecisão política fundamental\\n\\n**JURÍDICO** (Kelsen):\\nNorma pura, fundamento de validade',
            tags: ['sentidos', 'Lassalle', 'Schmitt', 'Kelsen'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-8',
            frente: 'De quem emana todo o poder na República Federativa do Brasil?',
            verso: 'Todo poder emana do **POVO**, que o exerce por meio de representantes eleitos ou diretamente.\\n\\n(Art. 1º, parágrafo único, CF/88)\\n\\nÉ o fundamento da **soberania popular** e do **Estado Democrático de Direito**.',
            tags: ['poder', 'povo', 'soberania popular'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-9',
            frente: 'Por que a CF/88 é chamada de "Constituição Cidadã"?',
            verso: 'Apelido dado por **Ulysses Guimarães**, presidente da Assembleia Constituinte.\\n\\nMotivos:\\n- Ampla proteção aos direitos fundamentais\\n- Redemocratização após ditadura militar\\n- Participação popular na elaboração\\n- Extenso rol de garantias sociais',
            tags: ['constituição cidadã', 'Ulysses Guimarães'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-17-10',
            frente: 'Qual o parágrafo único do art. 4º da CF/88?',
            verso: 'Busca da **integração econômica, política, social e cultural dos povos da América Latina**, visando à formação de uma comunidade latino-americana de nações.\\n\\nBase constitucional do **MERCOSUL** e acordos regionais.',
            tags: ['integração', 'América Latina', 'MERCOSUL'],
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
            id: 'da-q-17-1',
            enunciado: 'São FUNDAMENTOS da República Federativa do Brasil, previstos no art. 1º da CF/88:',
            alternativas: [
              { letra: 'A', texto: 'soberania, cidadania e construção de sociedade livre.' },
              { letra: 'B', texto: 'dignidade da pessoa humana, pluralismo político e garantia do desenvolvimento nacional.' },
              { letra: 'C', texto: 'soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e livre iniciativa, pluralismo político.' },
              { letra: 'D', texto: 'independência nacional, prevalência dos direitos humanos e defesa da paz.' },
              { letra: 'E', texto: 'erradicação da pobreza, promoção do bem comum e pluralismo partidário.' },
            ],
            gabarito: 'C',
            justificativa: 'Os FUNDAMENTOS do art. 1º são: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e livre iniciativa, e pluralismo político (SO-CI-DI-VA-PLU). A alternativa A mistura com objetivos, B também, D são princípios internacionais, E mistura objetivos com fundamentos.',
            dificuldade: 'Fácil',
            competencia: 'Fundamentos da República',
            banca: 'IADES',
            tags: ['fundamentos', 'art. 1º'],
          },
          {
            id: 'da-q-17-2',
            enunciado: 'Constituem OBJETIVOS fundamentais da República Federativa do Brasil, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'construir uma sociedade livre, justa e solidária.' },
              { letra: 'B', texto: 'garantir o desenvolvimento nacional.' },
              { letra: 'C', texto: 'erradicar a pobreza e a marginalização.' },
              { letra: 'D', texto: 'assegurar a dignidade da pessoa humana.' },
              { letra: 'E', texto: 'promover o bem de todos, sem preconceitos.' },
            ],
            gabarito: 'D',
            justificativa: 'A dignidade da pessoa humana é FUNDAMENTO (art. 1º, III), não objetivo. Os objetivos (art. 3º) são: construir, garantir, erradicar/reduzir, promover (verbos no infinitivo).',
            dificuldade: 'Média',
            competencia: 'Distinção fundamentos/objetivos',
            banca: 'IADES',
            tags: ['objetivos', 'fundamentos', 'exceção'],
          },
          {
            id: 'da-q-17-3',
            enunciado: 'A Constituição Federal de 1988 pode ser classificada como:',
            alternativas: [
              { letra: 'A', texto: 'outorgada, histórica e flexível.' },
              { letra: 'B', texto: 'promulgada, dogmática e rígida.' },
              { letra: 'C', texto: 'cesarista, costumeira e semirrígida.' },
              { letra: 'D', texto: 'pactuada, sintética e imutável.' },
              { letra: 'E', texto: 'outorgada, analítica e rígida.' },
            ],
            gabarito: 'B',
            justificativa: 'A CF/88 é: PROMULGADA (democrática), DOGMÁTICA (elaborada de uma vez, com ideologia), RÍGIDA (alteração mais difícil que lei ordinária). Também é escrita, analítica, formal e eclética.',
            dificuldade: 'Média',
            competencia: 'Classificação da CF',
            banca: 'IADES',
            tags: ['classificação', 'CF/88'],
          },
          {
            id: 'da-q-17-4',
            enunciado: 'Sobre o preâmbulo da Constituição Federal de 1988, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'possui força normativa e pode fundamentar controle de constitucionalidade.' },
              { letra: 'B', texto: 'é de reprodução obrigatória nas Constituições Estaduais.' },
              { letra: 'C', texto: 'não é norma constitucional, servindo apenas como vetor interpretativo.' },
              { letra: 'D', texto: 'vincula o legislador infraconstitucional em suas deliberações.' },
              { letra: 'E', texto: 'constitui cláusula pétrea implícita.' },
            ],
            gabarito: 'C',
            justificativa: 'O STF (ADI 2.076) decidiu que o preâmbulo NÃO é norma constitucional, não tem força normativa, não é de reprodução obrigatória e não pode fundamentar inconstitucionalidade. Serve apenas como vetor interpretativo.',
            dificuldade: 'Média',
            competencia: 'Preâmbulo',
            banca: 'IADES',
            tags: ['preâmbulo', 'STF'],
          },
          {
            id: 'da-q-17-5',
            enunciado: 'O Poder Constituinte Originário caracteriza-se por ser:',
            alternativas: [
              { letra: 'A', texto: 'derivado, limitado e condicionado.' },
              { letra: 'B', texto: 'inicial, ilimitado e incondicionado.' },
              { letra: 'C', texto: 'secundário, autônomo e permanente.' },
              { letra: 'D', texto: 'reformador, decorrente e revisor.' },
              { letra: 'E', texto: 'limitado pelas cláusulas pétreas.' },
            ],
            gabarito: 'B',
            justificativa: 'O Poder Constituinte ORIGINÁRIO é: INICIAL (inaugura nova ordem), ILIMITADO (não se submete à ordem anterior), INCONDICIONADO (não há forma predeterminada) e AUTÔNOMO. As demais características são do Poder Derivado.',
            dificuldade: 'Fácil',
            competencia: 'Poder Constituinte',
            banca: 'IADES',
            tags: ['poder constituinte', 'originário'],
          },
          {
            id: 'da-q-17-6',
            enunciado: 'São princípios que regem as relações internacionais do Brasil, segundo o art. 4º da CF/88:',
            alternativas: [
              { letra: 'A', texto: 'soberania, cidadania e dignidade da pessoa humana.' },
              { letra: 'B', texto: 'construir sociedade livre e garantir desenvolvimento nacional.' },
              { letra: 'C', texto: 'independência nacional, prevalência dos direitos humanos e defesa da paz.' },
              { letra: 'D', texto: 'legalidade, impessoalidade e moralidade.' },
              { letra: 'E', texto: 'federação, república e presidencialismo.' },
            ],
            gabarito: 'C',
            justificativa: 'O art. 4º prevê os princípios das relações internacionais: independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, defesa da paz, solução pacífica de conflitos, entre outros. A = fundamentos, B = objetivos, D = administração pública.',
            dificuldade: 'Média',
            competencia: 'Princípios internacionais',
            banca: 'IADES',
            tags: ['art. 4º', 'relações internacionais'],
          },
          {
            id: 'da-q-17-7',
            enunciado: 'Segundo a CF/88, "todo poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente". Esse dispositivo consagra o princípio da:',
            alternativas: [
              { letra: 'A', texto: 'separação de poderes.' },
              { letra: 'B', texto: 'soberania popular.' },
              { letra: 'C', texto: 'supremacia constitucional.' },
              { letra: 'D', texto: 'legalidade.' },
              { letra: 'E', texto: 'federação.' },
            ],
            gabarito: 'B',
            justificativa: 'O parágrafo único do art. 1º ("todo poder emana do povo") consagra a SOBERANIA POPULAR, fundamento do Estado Democrático de Direito. O povo é o titular do poder, exercendo-o diretamente (plebiscito, referendo, iniciativa popular) ou por representantes.',
            dificuldade: 'Fácil',
            competencia: 'Soberania popular',
            banca: 'IADES',
            tags: ['soberania popular', 'art. 1º'],
          },
          {
            id: 'da-q-17-8',
            enunciado: 'A respeito do sentido de Constituição, é CORRETO afirmar que o sentido SOCIOLÓGICO, formulado por Ferdinand Lassalle, compreende a Constituição como:',
            alternativas: [
              { letra: 'A', texto: 'norma pura, fundamento de validade de todo o ordenamento jurídico.' },
              { letra: 'B', texto: 'decisão política fundamental do titular do poder constituinte.' },
              { letra: 'C', texto: 'soma dos fatores reais de poder que regem uma sociedade.' },
              { letra: 'D', texto: 'documento escrito que organiza politicamente o Estado.' },
              { letra: 'E', texto: 'conjunto de normas que limita o poder estatal.' },
            ],
            gabarito: 'C',
            justificativa: 'Para Lassalle (sentido SOCIOLÓGICO), a Constituição é a soma dos fatores reais de poder. Se a Constituição escrita não corresponder à realidade, será mera "folha de papel". Kelsen = jurídico (norma pura). Schmitt = político (decisão fundamental).',
            dificuldade: 'Média',
            competencia: 'Sentidos de Constituição',
            banca: 'IADES',
            tags: ['Lassalle', 'sociológico'],
          },
          {
            id: 'da-q-17-9',
            enunciado: 'Quanto à alterabilidade, uma Constituição que exige processo de modificação mais rigoroso que o das leis ordinárias denomina-se:',
            alternativas: [
              { letra: 'A', texto: 'flexível.' },
              { letra: 'B', texto: 'imutável.' },
              { letra: 'C', texto: 'semirrígida.' },
              { letra: 'D', texto: 'rígida.' },
              { letra: 'E', texto: 'costumeira.' },
            ],
            gabarito: 'D',
            justificativa: 'Constituição RÍGIDA é aquela que exige processo de alteração mais dificultoso que o das leis ordinárias. A CF/88 é rígida: emenda exige 3/5, dois turnos, nas duas Casas. Flexível = mesmo processo. Imutável = não admite alteração.',
            dificuldade: 'Fácil',
            competencia: 'Classificação quanto à alterabilidade',
            banca: 'IADES',
            tags: ['rígida', 'classificação'],
          },
          {
            id: 'da-q-17-10',
            enunciado: 'O Título I da Constituição Federal de 1988 trata:',
            alternativas: [
              { letra: 'A', texto: 'dos Direitos e Garantias Fundamentais.' },
              { letra: 'B', texto: 'da Organização do Estado.' },
              { letra: 'C', texto: 'dos Princípios Fundamentais.' },
              { letra: 'D', texto: 'da Organização dos Poderes.' },
              { letra: 'E', texto: 'da Ordem Econômica e Financeira.' },
            ],
            gabarito: 'C',
            justificativa: 'O Título I (arts. 1º a 4º) trata dos PRINCÍPIOS FUNDAMENTAIS: fundamentos (art. 1º), separação de poderes (art. 2º), objetivos (art. 3º) e princípios internacionais (art. 4º). Direitos = Título II. Organização do Estado = Título III.',
            dificuldade: 'Fácil',
            competencia: 'Estrutura da CF',
            banca: 'IADES',
            tags: ['Título I', 'estrutura'],
          },
        ],
      },
    },
    {
      id: 'da-topico-18',
      numero: 18,
      titulo: 'Aplicabilidade das Normas Constitucionais',
      conteudo: {
        resumo: `
## Resumo Rápido

### Classificação de José Afonso da Silva (mais cobrada!)

| Eficácia | Aplicabilidade | Características | Pode ser restringida? |
|----------|----------------|-----------------|----------------------|
| **PLENA** | Imediata, direta, integral | Autoaplicável, não depende de lei | NÃO |
| **CONTIDA** | Imediata, direta, não integral | Autoaplicável, MAS pode ser restringida | SIM (por lei) |
| **LIMITADA** | Mediata, indireta, reduzida | Depende de lei para produzir efeitos plenos | NÃO (já é limitada) |

### Normas de Eficácia Limitada - Subespécies

| Tipo | Função | Exemplo |
|------|--------|---------|
| **Institutivas/Organizatórias** | Criar órgãos/entidades | "A lei criará..." |
| **Programáticas** | Estabelecer programas/metas | Direitos sociais, ordem econômica |

### Macete Visual

\`\`\`
PLENA ───────────────────────────────────► 100% de eficácia
CONTIDA ─────────────────────► pode diminuir (lei restringe)
LIMITADA ────► pode aumentar (lei regulamenta)
\`\`\`

### Para IADES - Memorize:
- **PLENA** = aplica JÁ, não precisa de nada
- **CONTIDA** = aplica JÁ, mas lei PODE restringir
- **LIMITADA** = NÃO aplica ainda, precisa de lei
- Toda norma constitucional tem ALGUMA eficácia (mínima)
        `,

        explicacao: `
## Explicação Didática

### 1. Conceito de Aplicabilidade

**Aplicabilidade** é a qualidade da norma constitucional de ser aplicada, de produzir efeitos jurídicos concretos. Toda norma constitucional possui algum grau de eficácia, mas nem todas têm a mesma aplicabilidade.

#### Diferença entre Vigência, Validade e Eficácia

| Conceito | Significado |
|----------|-------------|
| **Vigência** | A norma existe no ordenamento (foi promulgada) |
| **Validade** | A norma está de acordo com a Constituição |
| **Eficácia** | A norma produz efeitos jurídicos |

### 2. Classificação de José Afonso da Silva

A classificação mais cobrada em concursos é a do constitucionalista **José Afonso da Silva**, que divide as normas constitucionais em três categorias quanto à eficácia:

#### 2.1 Normas de Eficácia PLENA

**Conceito:** Normas que, desde a entrada em vigor da Constituição, produzem todos os seus efeitos essenciais, tendo aplicabilidade **direta, imediata e integral**.

**Características:**
- Autoaplicáveis (não dependem de lei)
- Aplicabilidade imediata
- Não podem ser restringidas pelo legislador
- Produzem efeitos desde logo

**Exemplos na CF/88:**
| Artigo | Dispositivo |
|--------|-------------|
| Art. 2º | Separação de Poderes |
| Art. 5º, III | Vedação à tortura |
| Art. 13 | Língua portuguesa como idioma oficial |
| Art. 14, §2º | Alistamento eleitoral aos 18 anos é obrigatório |
| Art. 17 | Livre criação de partidos políticos |
| Art. 19 | Vedações aos entes federativos |
| Art. 21 | Competências da União |
| Art. 22 | Competência legislativa privativa da União |
| Art. 37, III | Prazo de validade de concurso público |
| Art. 53 | Imunidades parlamentares |
| Art. 60, §4º | Cláusulas pétreas |
| Art. 230, §2º | Gratuidade dos transportes coletivos para idosos |

#### 2.2 Normas de Eficácia CONTIDA (ou Restringível)

**Conceito:** Normas que têm aplicabilidade **direta e imediata**, mas podem ter seu alcance **restringido** por lei infraconstitucional ou por outras normas constitucionais.

**Características:**
- Autoaplicáveis (produzem efeitos imediatamente)
- Enquanto não houver restrição, têm eficácia plena
- O legislador pode REDUZIR sua abrangência
- Também chamadas de "restringíveis" ou "redutíveis"

**Expressões típicas:**
- "nos termos da lei"
- "na forma da lei"
- "salvo os casos previstos em lei"
- "que a lei estabelecer"
- "ressalvados os casos..."

**Exemplos na CF/88:**
| Artigo | Dispositivo | Restrição |
|--------|-------------|-----------|
| Art. 5º, XIII | Livre exercício de trabalho, ofício ou profissão | "atendidas as qualificações profissionais que a lei estabelecer" |
| Art. 5º, XV | Livre locomoção no território nacional | Pode ser restringida em estado de sítio |
| Art. 5º, XVI | Direito de reunião | "desde que não frustrem outra reunião anteriormente convocada" |
| Art. 5º, XXIV | Desapropriação | Mediante indenização |
| Art. 5º, LVIII | Identificação criminal | "salvo nas hipóteses previstas em lei" |
| Art. 5º, LX | Publicidade dos atos processuais | Pode ser restrita para defesa da intimidade |
| Art. 5º, LXI | Prisão | "salvo em flagrante delito ou por ordem escrita e fundamentada" |
| Art. 93, IX | Publicidade dos julgamentos | Pode ser restrita (interesse público, intimidade) |

**Importante:** Enquanto NÃO houver lei restringindo, a norma de eficácia contida tem aplicabilidade PLENA!

#### 2.3 Normas de Eficácia LIMITADA

**Conceito:** Normas que têm aplicabilidade **indireta, mediata e reduzida**, necessitando de regulamentação infraconstitucional para produzir seus efeitos principais.

**Características:**
- NÃO são autoaplicáveis
- Dependem de lei para efeitos plenos
- Possuem eficácia mínima (revogam normas anteriores incompatíveis)
- O legislador deve COMPLEMENTAR a norma

**Expressões típicas:**
- "a lei regulará"
- "a lei disporá"
- "nos termos de lei complementar"
- "na forma que a lei estabelecer"
- "a lei definirá"

##### 2.3.1 Normas de Eficácia Limitada INSTITUTIVAS (ou Organizatórias)

São aquelas que dependem de lei para dar estrutura a órgãos, entidades ou instituições previstas na Constituição.

**Exemplos:**
| Artigo | Dispositivo |
|--------|-------------|
| Art. 18, §2º | Criação de Territórios ("Lei complementar regulará...") |
| Art. 33 | Organização dos Territórios |
| Art. 88 | Organização dos Ministérios |
| Art. 90, §2º | Organização e funcionamento do Conselho da República |
| Art. 91, §2º | Organização e funcionamento do Conselho de Defesa Nacional |
| Art. 113 | Criação de TRFs e juízes federais |
| Art. 121 | Organização da Justiça Eleitoral |

##### 2.3.2 Normas de Eficácia Limitada PROGRAMÁTICAS

São aquelas que estabelecem **programas, diretrizes, metas e objetivos** a serem implementados pelo Estado. Vinculam a atuação futura do Poder Público.

**Características:**
- Fixam fins a serem alcançados
- Veiculam políticas públicas
- Impõem dever de legislar
- Vinculam ação do Estado

**Exemplos:**
| Artigo | Dispositivo |
|--------|-------------|
| Art. 3º | Objetivos fundamentais da República |
| Art. 6º | Direitos sociais (educação, saúde, alimentação...) |
| Art. 7º, XX | Proteção do mercado de trabalho da mulher |
| Art. 7º, XXVII | Proteção contra automação |
| Art. 170 | Princípios da ordem econômica |
| Art. 196 | Direito à saúde |
| Art. 205 | Direito à educação |
| Art. 215 | Garantia do pleno exercício dos direitos culturais |
| Art. 217 | Fomento ao desporto |
| Art. 218 | Promoção da ciência e tecnologia |
| Art. 227 | Proteção à criança e ao adolescente |

### 3. Eficácia Mínima das Normas Constitucionais

**TODAS** as normas constitucionais possuem eficácia mínima:

| Efeito Mínimo | Descrição |
|---------------|-----------|
| **Revogador** | Revogam normas anteriores incompatíveis |
| **Impedidor** | Impedem leis contrárias (inconstitucionalidade) |
| **Interpretativo** | Servem de parâmetro de interpretação |

⚠️ **Atenção IADES:** Não existe norma constitucional sem eficácia! Mesmo as limitadas têm eficácia mínima.

### 4. Outras Classificações Doutrinárias

#### 4.1 Maria Helena Diniz (4 categorias)

| Categoria | Correspondência |
|-----------|-----------------|
| Eficácia absoluta | Cláusulas pétreas |
| Eficácia plena | = José Afonso da Silva |
| Eficácia relativa restringível | = Contida |
| Eficácia relativa complementável | = Limitada |

#### 4.2 Celso Ribeiro Bastos e Carlos Ayres Britto

| Categoria | Características |
|-----------|-----------------|
| Irregulamentáveis | Não admitem regulamentação (plenas) |
| Regulamentáveis | Admitem ou exigem regulamentação |

#### 4.3 Luís Roberto Barroso (moderna)

| Categoria | Descrição |
|-----------|-----------|
| Normas de organização | Estrutura do Estado |
| Normas definidoras de direitos | Direitos fundamentais |
| Normas programáticas | Fins e tarefas do Estado |

### 5. Quadro Comparativo Final

| Aspecto | PLENA | CONTIDA | LIMITADA |
|---------|-------|---------|----------|
| **Aplicabilidade** | Direta, imediata, integral | Direta, imediata, não integral | Indireta, mediata, reduzida |
| **Autoaplicável?** | SIM | SIM | NÃO |
| **Precisa de lei?** | NÃO | NÃO (mas pode restringir) | SIM |
| **Efeito da lei** | - | RESTRINGE | COMPLEMENTA |
| **Direção** | Não muda | Diminui ↓ | Aumenta ↑ |

### 6. Aplicabilidade e Vigilância Sanitária

Na área de Vigilância Sanitária, diversas normas constitucionais têm aplicabilidade:

| Norma | Tipo | Observação |
|-------|------|------------|
| Art. 196 (direito à saúde) | Programática | Vincula políticas de VISA |
| Art. 200 (competência do SUS) | Plena (em parte) | VISA está no inciso I e II |
| Art. 5º, II (legalidade) | Plena | Fundamenta atuação fiscalizatória |
| Art. 37, LIMPE | Plena | Vincula atuação dos fiscais |
        `,

        pontosChave: [
          'José Afonso da Silva: PLENA, CONTIDA e LIMITADA (classificação mais cobrada)',
          'PLENA: direta, imediata, integral - não depende de lei, não pode ser restringida',
          'CONTIDA: direta, imediata - autoaplicável, MAS pode ser restringida por lei',
          'LIMITADA: indireta, mediata - depende de lei para efeitos plenos',
          'Limitada se divide em: INSTITUTIVAS (criar órgãos) e PROGRAMÁTICAS (metas/programas)',
          'Normas programáticas: estabelecem fins, diretrizes, políticas públicas',
          'TODA norma constitucional tem eficácia mínima (não existe norma sem eficácia)',
          'Eficácia mínima: revogar leis anteriores, impedir leis contrárias, servir de interpretação',
          'CONTIDA enquanto não restringida = eficácia PLENA',
          'Expressão "a lei regulará" = eficácia LIMITADA',
          'Expressão "salvo os casos previstos em lei" = eficácia CONTIDA',
        ],

        armadilhas: [
          {
            titulo: 'Confundir CONTIDA com LIMITADA',
            descricao: 'CONTIDA já produz efeitos (lei restringe). LIMITADA não produz efeitos plenos sem lei (lei amplia).',
            dica: 'Contida = começa cheia, pode esvaziar. Limitada = começa vazia, precisa encher.',
          },
          {
            titulo: 'Achar que norma limitada não tem eficácia',
            descricao: 'TODA norma constitucional tem eficácia mínima (revoga, impede, interpreta).',
            dica: 'Não existe norma constitucional totalmente sem eficácia!',
          },
          {
            titulo: 'Confundir "nos termos da lei" em diferentes contextos',
            descricao: 'A expressão pode indicar contida (restrição) OU limitada (complementação), depende do contexto.',
            dica: 'Analise se a norma já produz efeitos ou se precisa de lei para produzir.',
          },
          {
            titulo: 'Pensar que normas programáticas não vinculam',
            descricao: 'Normas programáticas VINCULAM a atuação do Estado, mesmo sendo de eficácia limitada.',
            dica: 'Programáticas impedem leis contrárias e servem de parâmetro de controle.',
          },
          {
            titulo: 'Classificar direitos sociais como plenos',
            descricao: 'A maioria dos direitos sociais do art. 6º são de eficácia LIMITADA (programáticas).',
            dica: 'Direitos sociais geralmente dependem de políticas públicas para implementação.',
          },
          {
            titulo: 'Confundir "autoaplicável" com "plena"',
            descricao: 'Normas CONTIDAS também são autoaplicáveis! A diferença é que podem ser restringidas.',
            dica: 'Autoaplicável = produz efeitos imediatos (plena E contida).',
          },
        ],

        mnemonicos: [
          {
            termo: 'PCL',
            significado: 'Plena, Contida, Limitada',
            frase: 'As 3 eficácias de José Afonso da Silva: PCL (Pode Começar a Lembrar)',
          },
          {
            termo: 'PLena = Pronta',
            significado: 'Eficácia plena',
            frase: 'PLena = Pronta para aplicar (não precisa de nada)',
          },
          {
            termo: 'ConTida = ConTer',
            significado: 'Eficácia contida',
            frase: 'ConTida = pode ser ConTida/restringida pela lei',
          },
          {
            termo: 'LiMitada = Lei é a Mãe',
            significado: 'Eficácia limitada',
            frase: 'LiMitada = precisa de Lei como Mãe para nascer completa',
          },
          {
            termo: 'IP = Institutiva e Programática',
            significado: 'Subespécies de eficácia limitada',
            frase: 'Limitada se divide em: Institutiva (cria órgãos) e Programática (metas)',
          },
          {
            termo: 'RII',
            significado: 'Efeitos mínimos das normas',
            frase: 'Toda norma tem RII: Revoga, Impede, Interpreta',
          },
          {
            termo: 'Seta para cima/baixo',
            significado: 'Direção do efeito da lei',
            frase: 'Contida ↓ (lei diminui). Limitada ↑ (lei aumenta).',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-18-1',
            frente: 'Quais são os três tipos de eficácia das normas constitucionais segundo José Afonso da Silva?',
            verso: '**P-C-L:**\\n\\n1. **PLENA**: aplicabilidade direta, imediata e integral\\n2. **CONTIDA**: aplicabilidade direta, imediata, mas não integral (pode ser restringida)\\n3. **LIMITADA**: aplicabilidade indireta, mediata e reduzida',
            tags: ['eficácia', 'José Afonso da Silva', 'classificação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-2',
            frente: 'O que caracteriza uma norma de eficácia PLENA?',
            verso: 'Norma que produz TODOS os efeitos desde logo, tendo aplicabilidade:\\n\\n- **Direta**: não precisa de outra norma\\n- **Imediata**: desde a promulgação\\n- **Integral**: não pode ser restringida\\n\\nEx: Art. 2º (separação de poderes), Art. 5º, III (vedação à tortura)',
            tags: ['eficácia plena', 'características'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-3',
            frente: 'O que caracteriza uma norma de eficácia CONTIDA?',
            verso: 'Norma AUTOAPLICÁVEL que pode ter seu alcance RESTRINGIDO por lei.\\n\\n- Produz efeitos imediatos\\n- Enquanto não houver restrição = eficácia plena\\n- Lei pode DIMINUIR sua abrangência\\n\\nEx: Art. 5º, XIII (livre exercício profissional, "atendidas as qualificações que a lei estabelecer")',
            tags: ['eficácia contida', 'características'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-4',
            frente: 'O que caracteriza uma norma de eficácia LIMITADA?',
            verso: 'Norma que DEPENDE de regulamentação para produzir seus efeitos principais.\\n\\n- NÃO é autoaplicável\\n- Aplicabilidade indireta e mediata\\n- Lei COMPLEMENTA a norma\\n\\nDivide-se em:\\n- **Institutivas**: criar órgãos\\n- **Programáticas**: estabelecer metas',
            tags: ['eficácia limitada', 'características'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-5',
            frente: 'O que são normas PROGRAMÁTICAS?',
            verso: 'São normas de eficácia LIMITADA que estabelecem **programas, diretrizes e metas** a serem implementados pelo Estado.\\n\\nCaracterísticas:\\n- Fixam fins a alcançar\\n- Veiculam políticas públicas\\n- Vinculam a ação estatal\\n\\nEx: Art. 196 (direito à saúde), Art. 205 (direito à educação)',
            tags: ['programáticas', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-6',
            frente: 'Qual a diferença entre norma CONTIDA e LIMITADA?',
            verso: '**CONTIDA:**\\n- JÁ produz efeitos\\n- Lei pode RESTRINGIR (diminuir)\\n- Direção: ↓\\n\\n**LIMITADA:**\\n- NÃO produz efeitos plenos\\n- Lei deve COMPLEMENTAR (aumentar)\\n- Direção: ↑\\n\\nMacete: Contida = cheia, pode esvaziar. Limitada = vazia, precisa encher.',
            tags: ['contida', 'limitada', 'diferença'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-7',
            frente: 'Existe norma constitucional sem nenhuma eficácia?',
            verso: '**NÃO!** Toda norma constitucional possui eficácia mínima.\\n\\nEfeitos mínimos (**RII**):\\n- **R**evoga normas anteriores incompatíveis\\n- **I**mpede leis contrárias (inconstitucionalidade)\\n- **I**nterpreta (serve de parâmetro)',
            tags: ['eficácia mínima', 'RII'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-8',
            frente: 'O art. 5º, XIII ("é livre o exercício de qualquer trabalho... atendidas as qualificações profissionais que a lei estabelecer") é norma de qual eficácia?',
            verso: 'Norma de eficácia **CONTIDA**.\\n\\n- O direito ao livre exercício profissional JÁ existe\\n- Mas a lei PODE restringir, exigindo qualificações\\n- Ex: OAB para advogados, CRM para médicos\\n\\nEnquanto não houver lei, qualquer pessoa pode exercer.',
            tags: ['art. 5º, XIII', 'contida', 'exemplo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-9',
            frente: 'Quais são as subespécies das normas de eficácia limitada?',
            verso: '**1. INSTITUTIVAS (Organizatórias):**\\n- Criam órgãos, entidades, instituições\\n- Ex: "A lei criará...", "Lei complementar regulará..."\\n\\n**2. PROGRAMÁTICAS:**\\n- Estabelecem programas e metas\\n- Ex: Art. 3º (objetivos), Art. 196 (saúde)',
            tags: ['limitada', 'institutiva', 'programática'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-18-10',
            frente: 'Cite 3 exemplos de normas de eficácia PLENA na CF/88.',
            verso: '1. **Art. 2º** - Separação de Poderes\\n2. **Art. 5º, III** - Ninguém será submetido a tortura\\n3. **Art. 14, §2º** - Alistamento eleitoral obrigatório aos 18 anos\\n4. **Art. 60, §4º** - Cláusulas pétreas\\n5. **Art. 230, §2º** - Gratuidade de transporte para idosos',
            tags: ['eficácia plena', 'exemplos'],
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
            id: 'da-q-18-1',
            enunciado: 'Segundo a classificação de José Afonso da Silva, as normas constitucionais, quanto à eficácia, dividem-se em:',
            alternativas: [
              { letra: 'A', texto: 'autoaplicáveis e não autoaplicáveis.' },
              { letra: 'B', texto: 'plenas, contidas e limitadas.' },
              { letra: 'C', texto: 'absolutas, relativas e programáticas.' },
              { letra: 'D', texto: 'originárias, derivadas e decorrentes.' },
              { letra: 'E', texto: 'formais, materiais e mistas.' },
            ],
            gabarito: 'B',
            justificativa: 'A classificação tradicional de José Afonso da Silva divide as normas constitucionais, quanto à eficácia, em: PLENAS (aplicabilidade direta, imediata e integral), CONTIDAS (podem ser restringidas) e LIMITADAS (dependem de regulamentação).',
            dificuldade: 'Fácil',
            competencia: 'Classificação de José Afonso da Silva',
            banca: 'IADES',
            tags: ['eficácia', 'classificação'],
          },
          {
            id: 'da-q-18-2',
            enunciado: 'As normas constitucionais de eficácia CONTIDA caracterizam-se por:',
            alternativas: [
              { letra: 'A', texto: 'não produzirem efeitos enquanto não regulamentadas por lei.' },
              { letra: 'B', texto: 'produzirem efeitos imediatos, mas poderem ser restringidas por lei.' },
              { letra: 'C', texto: 'não admitirem qualquer tipo de restrição pelo legislador.' },
              { letra: 'D', texto: 'dependerem exclusivamente de emenda constitucional para produzirem efeitos.' },
              { letra: 'E', texto: 'serem destituídas de qualquer eficácia jurídica.' },
            ],
            gabarito: 'B',
            justificativa: 'Normas de eficácia CONTIDA têm aplicabilidade direta e imediata (produzem efeitos desde logo), mas podem ter seu alcance RESTRINGIDO por lei infraconstitucional. Enquanto não restringidas, têm eficácia plena.',
            dificuldade: 'Média',
            competencia: 'Eficácia contida',
            banca: 'IADES',
            tags: ['contida', 'características'],
          },
          {
            id: 'da-q-18-3',
            enunciado: 'O art. 5º, XIII, da CF/88 dispõe: "é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer". Trata-se de norma de eficácia:',
            alternativas: [
              { letra: 'A', texto: 'plena.' },
              { letra: 'B', texto: 'contida.' },
              { letra: 'C', texto: 'limitada.' },
              { letra: 'D', texto: 'programática.' },
              { letra: 'E', texto: 'absoluta.' },
            ],
            gabarito: 'B',
            justificativa: 'É norma de eficácia CONTIDA: o direito ao livre exercício profissional já existe e produz efeitos, mas a lei pode RESTRINGIR esse direito exigindo qualificações profissionais (ex: exame da OAB, registro no CRM).',
            dificuldade: 'Média',
            competencia: 'Identificação de eficácia',
            banca: 'IADES',
            tags: ['contida', 'art. 5º, XIII'],
          },
          {
            id: 'da-q-18-4',
            enunciado: 'As normas programáticas são espécie de normas de eficácia:',
            alternativas: [
              { letra: 'A', texto: 'plena.' },
              { letra: 'B', texto: 'contida.' },
              { letra: 'C', texto: 'limitada.' },
              { letra: 'D', texto: 'absoluta.' },
              { letra: 'E', texto: 'exaurida.' },
            ],
            gabarito: 'C',
            justificativa: 'As normas PROGRAMÁTICAS são subespécie das normas de eficácia LIMITADA. Estabelecem programas, diretrizes e metas a serem implementados pelo Estado, dependendo de atuação legislativa e administrativa para plena efetivação.',
            dificuldade: 'Fácil',
            competencia: 'Normas programáticas',
            banca: 'IADES',
            tags: ['programáticas', 'limitada'],
          },
          {
            id: 'da-q-18-5',
            enunciado: 'Sobre as normas constitucionais de eficácia limitada, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'não possuem qualquer eficácia jurídica.' },
              { letra: 'B', texto: 'produzem todos os seus efeitos desde a promulgação.' },
              { letra: 'C', texto: 'possuem eficácia mínima, como revogar normas anteriores incompatíveis.' },
              { letra: 'D', texto: 'podem ser livremente restringidas pelo legislador.' },
              { letra: 'E', texto: 'são sinônimo de normas de eficácia contida.' },
            ],
            gabarito: 'C',
            justificativa: 'TODA norma constitucional possui eficácia mínima, inclusive as de eficácia limitada. Essa eficácia mínima inclui: revogar normas anteriores incompatíveis, impedir leis contrárias e servir de parâmetro interpretativo.',
            dificuldade: 'Média',
            competencia: 'Eficácia mínima',
            banca: 'IADES',
            tags: ['limitada', 'eficácia mínima'],
          },
          {
            id: 'da-q-18-6',
            enunciado: 'Assinale a alternativa que contém exemplo de norma de eficácia PLENA:',
            alternativas: [
              { letra: 'A', texto: 'Art. 5º, XIII - livre exercício de profissão, atendidas as qualificações que a lei estabelecer.' },
              { letra: 'B', texto: 'Art. 7º, I - relação de emprego protegida contra despedida arbitrária, nos termos de lei complementar.' },
              { letra: 'C', texto: 'Art. 2º - São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.' },
              { letra: 'D', texto: 'Art. 196 - A saúde é direito de todos e dever do Estado.' },
              { letra: 'E', texto: 'Art. 37, VII - o direito de greve será exercido nos termos e nos limites definidos em lei específica.' },
            ],
            gabarito: 'C',
            justificativa: 'O Art. 2º (separação de poderes) é norma de eficácia PLENA: produz todos os efeitos desde logo, não depende de regulamentação e não pode ser restringida. As demais são: A = contida, B = limitada, D = programática, E = limitada.',
            dificuldade: 'Média',
            competencia: 'Identificação de eficácia plena',
            banca: 'IADES',
            tags: ['plena', 'exemplo'],
          },
          {
            id: 'da-q-18-7',
            enunciado: 'A diferença fundamental entre normas de eficácia CONTIDA e LIMITADA está no fato de que:',
            alternativas: [
              { letra: 'A', texto: 'ambas dependem de lei para produzir efeitos.' },
              { letra: 'B', texto: 'a contida é autoaplicável e a limitada depende de regulamentação.' },
              { letra: 'C', texto: 'a limitada é autoaplicável e a contida depende de regulamentação.' },
              { letra: 'D', texto: 'nenhuma delas possui eficácia jurídica.' },
              { letra: 'E', texto: 'são sinônimas, não havendo diferença.' },
            ],
            gabarito: 'B',
            justificativa: 'A diferença fundamental: CONTIDA é autoaplicável (produz efeitos imediatos, mas pode ser restringida). LIMITADA NÃO é autoaplicável (depende de regulamentação para produzir seus efeitos principais).',
            dificuldade: 'Média',
            competencia: 'Diferença contida x limitada',
            banca: 'IADES',
            tags: ['contida', 'limitada', 'diferença'],
          },
          {
            id: 'da-q-18-8',
            enunciado: 'As normas de eficácia limitada de caráter INSTITUTIVO ou ORGANIZATÓRIO caracterizam-se por:',
            alternativas: [
              { letra: 'A', texto: 'estabelecer programas e metas governamentais.' },
              { letra: 'B', texto: 'criar estruturas para órgãos, entidades ou instituições.' },
              { letra: 'C', texto: 'restringir direitos fundamentais.' },
              { letra: 'D', texto: 'produzir efeitos imediatos e integrais.' },
              { letra: 'E', texto: 'não depender de qualquer regulamentação.' },
            ],
            gabarito: 'B',
            justificativa: 'Normas INSTITUTIVAS (ou organizatórias) são aquelas que dependem de lei para dar estrutura, criar ou organizar órgãos, entidades ou instituições previstas na Constituição. Ex: "A lei criará...", "Lei complementar regulará...".',
            dificuldade: 'Média',
            competencia: 'Normas institutivas',
            banca: 'IADES',
            tags: ['institutiva', 'organizatória'],
          },
          {
            id: 'da-q-18-9',
            enunciado: 'O art. 196 da CF/88 ("A saúde é direito de todos e dever do Estado...") é classificado como norma de eficácia:',
            alternativas: [
              { letra: 'A', texto: 'plena.' },
              { letra: 'B', texto: 'contida.' },
              { letra: 'C', texto: 'limitada programática.' },
              { letra: 'D', texto: 'limitada institutiva.' },
              { letra: 'E', texto: 'absoluta.' },
            ],
            gabarito: 'C',
            justificativa: 'O art. 196 (direito à saúde) é norma de eficácia LIMITADA PROGRAMÁTICA: estabelece um programa, uma meta a ser alcançada pelo Estado através de políticas públicas. Depende de implementação legislativa e administrativa.',
            dificuldade: 'Média',
            competencia: 'Normas programáticas',
            banca: 'IADES',
            tags: ['art. 196', 'programática'],
          },
          {
            id: 'da-q-18-10',
            enunciado: 'Quanto à aplicabilidade das normas constitucionais, é INCORRETO afirmar:',
            alternativas: [
              { letra: 'A', texto: 'Normas de eficácia plena têm aplicabilidade direta, imediata e integral.' },
              { letra: 'B', texto: 'Normas de eficácia contida podem ser restringidas pelo legislador.' },
              { letra: 'C', texto: 'Normas de eficácia limitada dependem de regulamentação para efeitos plenos.' },
              { letra: 'D', texto: 'Existem normas constitucionais completamente desprovidas de eficácia.' },
              { letra: 'E', texto: 'Normas programáticas vinculam a atuação do Estado.' },
            ],
            gabarito: 'D',
            justificativa: 'É INCORRETO afirmar que existem normas sem eficácia. TODA norma constitucional possui eficácia mínima (revoga normas anteriores, impede leis contrárias, serve de parâmetro interpretativo). Não existe norma constitucional "letra morta".',
            dificuldade: 'Média',
            competencia: 'Eficácia mínima',
            banca: 'IADES',
            tags: ['eficácia', 'incorreta'],
          },
        ],
      },
    },
    {
      id: 'da-topico-19',
      numero: 19,
      titulo: 'Direitos e Garantias Fundamentais',
      conteudo: {
        resumo: `
## Resumo Rápido

### Localização na CF/88
- **Título II** (arts. 5º a 17)
- Dividido em 5 capítulos

### Estrutura dos Direitos Fundamentais

| Capítulo | Artigos | Conteúdo |
|----------|---------|----------|
| I | Art. 5º | Direitos e Deveres Individuais e Coletivos |
| II | Arts. 6º a 11 | Direitos Sociais |
| III | Arts. 12 e 13 | Nacionalidade |
| IV | Arts. 14 a 16 | Direitos Políticos |
| V | Art. 17 | Partidos Políticos |

### Características dos Direitos Fundamentais

| Característica | Significado |
|----------------|-------------|
| **Historicidade** | Evoluem ao longo do tempo |
| **Universalidade** | Aplicam-se a todos |
| **Relatividade** | Não são absolutos |
| **Irrenunciabilidade** | Não podem ser renunciados |
| **Inalienabilidade** | Não podem ser vendidos |
| **Imprescritibilidade** | Não se perdem pelo tempo |
| **Concorrência** | Podem ser exercidos juntos |

### Gerações/Dimensões de Direitos

| Geração | Direitos | Valor |
|---------|----------|-------|
| **1ª** | Liberdade (civis e políticos) | LIBERDADE |
| **2ª** | Igualdade (sociais, econômicos) | IGUALDADE |
| **3ª** | Fraternidade (difusos, coletivos) | SOLIDARIEDADE |
| **4ª** | Biotecnologia, democracia | PLURALISMO |
| **5ª** | Paz, internet | PAZ |

### Art. 5º - Destaques para IADES

- **78 incisos** + 4 parágrafos
- §1º: Direitos fundamentais têm **aplicação imediata**
- §2º: Rol **exemplificativo** (não taxativo)
- §3º: Tratados de DH aprovados por 3/5 em 2 turnos = **EC**
- §4º: Tribunal Penal Internacional
        `,

        explicacao: `
## Explicação Didática

### 1. Direitos e Deveres Individuais e Coletivos (Art. 5º)

O art. 5º é o coração dos direitos fundamentais, com 78 incisos.

#### Destinatários (caput)
> "Todos são iguais perante a lei... garantindo-se aos **brasileiros e aos estrangeiros residentes no País**..."

⚠️ **ATENÇÃO STF:** Estrangeiros NÃO residentes também têm direitos fundamentais (interpretação extensiva).

#### Principais Direitos do Art. 5º

##### Direito à VIDA (implícito no caput)
- Proibição da pena de morte (salvo guerra declarada)
- Proibição da tortura
- Fundamento da dignidade humana

##### Direito à LIBERDADE

| Inciso | Liberdade | Conteúdo |
|--------|-----------|----------|
| IV | Pensamento | Livre manifestação, vedado anonimato |
| VI | Consciência e crença | Liberdade religiosa |
| IX | Expressão | Atividade intelectual, artística |
| XIII | Trabalho | Livre exercício profissional |
| XV | Locomoção | Ir e vir no território |
| XVI | Reunião | Pacífica, sem armas |
| XVII | Associação | Fins lícitos |

##### Direito à IGUALDADE

| Inciso | Conteúdo |
|--------|----------|
| Caput | Igualdade formal (perante a lei) |
| I | Homens e mulheres são iguais |
| XLI | Lei punirá discriminação |
| XLII | Racismo é crime imprescritível |

##### Direito à PROPRIEDADE

| Inciso | Conteúdo |
|--------|----------|
| XXII | Garantia do direito de propriedade |
| XXIII | Função social da propriedade |
| XXIV | Desapropriação (necessidade, utilidade pública, interesse social) |
| XXV | Requisição (iminente perigo público) |

##### REMÉDIOS CONSTITUCIONAIS

| Remédio | Inciso | Proteção |
|---------|--------|----------|
| **Habeas Corpus** | LXVIII | Liberdade de locomoção |
| **Habeas Data** | LXXII | Acesso/retificação de dados pessoais |
| **Mandado de Segurança** | LXIX | Direito líquido e certo (não amparado por HC/HD) |
| **MS Coletivo** | LXX | Direitos coletivos (partidos, sindicatos, associações) |
| **Mandado de Injunção** | LXXI | Falta de norma regulamentadora |
| **Ação Popular** | LXXIII | Anular ato lesivo ao patrimônio público |

##### Garantias PROCESSUAIS

| Inciso | Garantia |
|--------|----------|
| XXXV | Inafastabilidade da jurisdição |
| XXXVII | Vedação a juízo de exceção |
| LIII | Juiz natural |
| LIV | Devido processo legal |
| LV | Contraditório e ampla defesa |
| LVI | Provas ilícitas inadmissíveis |
| LVII | Presunção de inocência |

### 2. Direitos Sociais (Arts. 6º a 11)

#### Art. 6º - Rol dos Direitos Sociais

> "São direitos sociais a **educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados**..."

**Mnemônico: EDU-SAÚ-ALI-TRA-MOR-TRANS-LA-SE-PRE-PRO-AS**

#### Art. 7º - Direitos dos Trabalhadores (34 incisos)

| Direito | Conteúdo |
|---------|----------|
| Salário mínimo | Nacionalmente unificado |
| 13º salário | Remuneração integral |
| FGTS | 8% do salário |
| Jornada | 8h/dia, 44h/semana |
| Hora extra | Mínimo 50% a mais |
| Férias | + 1/3 constitucional |
| Licença maternidade | 120 dias |
| Licença paternidade | 5 dias (regra) |
| Aviso prévio | Mínimo 30 dias |

#### Arts. 8º a 11 - Direitos Coletivos do Trabalho

- Art. 8º: Liberdade sindical
- Art. 9º: Direito de greve
- Art. 10º: Participação em colegiados
- Art. 11º: Representante dos empregados (> 200)

### 3. Nacionalidade (Arts. 12 e 13)

#### Espécies de Brasileiro

| Tipo | Aquisição | Hipóteses |
|------|-----------|-----------|
| **NATO** | Nascimento | Critérios: jus soli, jus sanguinis |
| **NATURALIZADO** | Vontade | Ordinária, extraordinária, especial |

#### Brasileiros NATOS (Art. 12, I)

a) Nascidos no Brasil (mesmo de pais estrangeiros, salvo a serviço de seu país)
b) Nascidos no exterior, de pai/mãe brasileiro a serviço do Brasil
c) Nascidos no exterior, de pai/mãe brasileiro, registrados ou que venham residir e optem

#### Brasileiros NATURALIZADOS (Art. 12, II)

| Tipo | Requisitos |
|------|------------|
| **Ordinária** | Conforme a lei (estrangeiros em geral) |
| **Extraordinária** | 15 anos ininterruptos, sem condenação |
| **Especial** | Portugueses com reciprocidade |

#### Cargos PRIVATIVOS de Brasileiro NATO (Art. 12, §3º)

**Mnemônico: MP3.COM**

- **M**inistro do STF
- **P**residente da República e Vice
- **P**residente da Câmara
- **P**residente do Senado
- **C**arreira diplomática
- **O**ficial das Forças Armadas
- **M**inistro de Estado da Defesa

### 4. Direitos Políticos (Arts. 14 a 16)

#### Soberania Popular (Art. 14)

| Instrumento | Conceito |
|-------------|----------|
| **Plebiscito** | Consulta PRÉVIA ao ato |
| **Referendo** | Consulta POSTERIOR ao ato |
| **Iniciativa Popular** | Proposição de lei pelo povo |

#### Capacidade Eleitoral

| Capacidade | Idade | Requisitos |
|------------|-------|------------|
| **Ativa** (votar) | 16 anos (facultativo), 18 (obrigatório) | Alistamento |
| **Passiva** (ser votado) | Varia por cargo | Elegibilidade |

#### Idades Mínimas para Cargos (Art. 14, §3º, VI)

| Idade | Cargos |
|-------|--------|
| **35 anos** | Presidente, Vice, Senador |
| **30 anos** | Governador, Vice |
| **21 anos** | Deputados, Prefeito, Vice, Juiz de paz |
| **18 anos** | Vereador |

**Mnemônico: 35-30-21-18 (de cima para baixo)**

#### Inelegibilidades (Art. 14, §§4º a 7º)

| Tipo | Situação |
|------|----------|
| **Absoluta** | Inalistáveis, analfabetos |
| **Relativa** | Por motivo funcional, parentesco, etc. |

### 5. Partidos Políticos (Art. 17)

#### Princípios

- Livre criação, fusão, incorporação e extinção
- Caráter nacional
- Proibição de paramilitares
- Prestação de contas à Justiça Eleitoral

#### Autonomia Partidária

- Estatutos próprios
- Estrutura interna
- Coligações (com restrições pós-EC 97/2017)
- Fundo partidário e acesso ao rádio/TV

#### Fidelidade Partidária

- Mandato pertence ao partido
- Perda por desfiliação sem justa causa (cargos proporcionais)
        `,

        pontosChave: [
          "Título II da CF/88 (arts. 5º a 17) = Direitos e Garantias Fundamentais",
          "Art. 5º: 78 incisos + 4 parágrafos - direitos individuais e coletivos",
          "§1º do art. 5º: direitos fundamentais têm APLICAÇÃO IMEDIATA",
          "§2º: rol EXEMPLIFICATIVO (existem outros direitos implícitos e em tratados)",
          "§3º: tratados de DH com 3/5 em 2 turnos = equivalem a EC",
          "Gerações: 1ª Liberdade, 2ª Igualdade, 3ª Fraternidade",
          "Remédios: HC (locomoção), HD (dados), MS (direito líquido e certo), MI (falta de norma), AP (patrimônio)",
          "Direitos Sociais (art. 6º): educação, saúde, alimentação, trabalho, moradia...",
          "Brasileiro NATO x NATURALIZADO - cargos privativos de nato: MP3.COM",
          "Idades para cargos: 35 (PR/VP/Sen), 30 (Gov), 21 (Dep/Pref), 18 (Vereador)",
          "Plebiscito = ANTES, Referendo = DEPOIS",
        ],

        armadilhas: [
          {
            titulo: "Direitos fundamentais são absolutos",
            descricao: "NENHUM direito fundamental é absoluto, todos são RELATIVOS e podem ser limitados.",
            dica: "Até o direito à vida é relativo (pena de morte em guerra declarada).",
          },
          {
            titulo: "Art. 5º só protege brasileiros",
            descricao: "Protege brasileiros E estrangeiros. STF estende até a não residentes.",
            dica: "Direitos fundamentais têm vocação universal.",
          },
          {
            titulo: "Confundir plebiscito com referendo",
            descricao: "PLEBISCITO é ANTES (prévia). REFERENDO é DEPOIS (posterior).",
            dica: "Plebiscito = Primeiro. Referendo = Ratifica.",
          },
          {
            titulo: "Naturalizado pode ser Presidente",
            descricao: "Presidente é cargo privativo de brasileiro NATO.",
            dica: "MP3.COM = cargos só para NATOS.",
          },
          {
            titulo: "Analfabeto pode ser eleito",
            descricao: "Analfabeto é INELEGÍVEL (não pode ser votado), mas pode votar (facultativo).",
            dica: "Analfabeto vota, mas não se elege.",
          },
          {
            titulo: "Rol do art. 5º é taxativo",
            descricao: "O §2º diz que o rol é EXEMPLIFICATIVO (há direitos implícitos e em tratados).",
            dica: "§2º abre o catálogo de direitos fundamentais.",
          },
        ],

        mnemonicos: [
          {
            termo: "MP3.COM",
            significado: "Cargos privativos de brasileiro NATO",
            frase: "Ministro STF, Presidente/Vice, Presidente Câmara/Senado, Carreira diplomática, Oficial FA, Min. Defesa",
          },
          {
            termo: "35-30-21-18",
            significado: "Idades mínimas para cargos",
            frase: "35 (PR/VP/Sen), 30 (Gov), 21 (Dep/Pref), 18 (Vereador)",
          },
          {
            termo: "LIF",
            significado: "Gerações de direitos",
            frase: "Liberdade (1ª), Igualdade (2ª), Fraternidade (3ª)",
          },
          {
            termo: "HHMMMA",
            significado: "Remédios constitucionais",
            frase: "Habeas Corpus, Habeas Data, MS, MS Coletivo, Mandado de Injunção, Ação Popular",
          },
          {
            termo: "Plebiscito = Prévio",
            significado: "Diferença plebiscito x referendo",
            frase: "Plebiscito = P de Prévio (antes). Referendo = R de Ratifica (depois).",
          },
          {
            termo: "URIIIC",
            significado: "Características dos direitos fundamentais",
            frase: "Universalidade, Relatividade, Irrenunciabilidade, Inalienabilidade, Imprescritibilidade, Concorrência",
          },
        ],

        flashcards: [
          {
            id: 'da-fc-19-1',
            frente: "Quais são as gerações/dimensões de direitos fundamentais?",
            verso: "**1ª Geração**: LIBERDADE\\n- Direitos civis e políticos\\n- Abstenção do Estado\\n\\n**2ª Geração**: IGUALDADE\\n- Direitos sociais, econômicos\\n- Prestação do Estado\\n\\n**3ª Geração**: FRATERNIDADE\\n- Direitos difusos e coletivos\\n- Solidariedade",
            tags: ["gerações", "dimensões"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-2',
            frente: "Quais são os remédios constitucionais e suas proteções?",
            verso: "**HC**: liberdade de locomoção\\n**HD**: dados pessoais\\n**MS**: direito líquido e certo\\n**MS Coletivo**: direitos coletivos\\n**MI**: falta de norma regulamentadora\\n**Ação Popular**: patrimônio público",
            tags: ["remédios", "proteção"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-3',
            frente: "Quais cargos são privativos de brasileiro NATO?",
            verso: "**MP3.COM**:\\n\\n- **M**inistro do STF\\n- **P**residente e Vice\\n- **P**residente da Câmara\\n- **P**residente do Senado\\n- **C**arreira diplomática\\n- **O**ficial das Forças Armadas\\n- **M**inistro de Estado da Defesa",
            tags: ["nato", "cargos privativos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-4',
            frente: "Quais são as idades mínimas para cargos eletivos?",
            verso: "**35 anos**: Presidente, Vice, Senador\\n\\n**30 anos**: Governador, Vice\\n\\n**21 anos**: Deputados (Fed/Est), Prefeito, Vice, Juiz de paz\\n\\n**18 anos**: Vereador",
            tags: ["idade", "cargos eletivos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-5',
            frente: "Qual a diferença entre PLEBISCITO e REFERENDO?",
            verso: "**PLEBISCITO**:\\n- Consulta PRÉVIA (antes do ato)\\n- P de Prévio\\n\\n**REFERENDO**:\\n- Consulta POSTERIOR (depois do ato)\\n- R de Ratifica\\n\\nAmbos são formas de exercício da soberania popular (art. 14)",
            tags: ["plebiscito", "referendo"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-6',
            frente: "Quais são os direitos SOCIAIS do art. 6º?",
            verso: "São direitos sociais:\\n\\n- Educação\\n- Saúde\\n- Alimentação\\n- Trabalho\\n- Moradia\\n- Transporte\\n- Lazer\\n- Segurança\\n- Previdência social\\n- Proteção à maternidade e infância\\n- Assistência aos desamparados",
            tags: ["sociais", "art. 6º"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-7',
            frente: "Brasileiro naturalizado pode ser Presidente?",
            verso: "**NÃO!**\\n\\nPresidente da República é cargo **privativo de brasileiro NATO** (art. 12, §3º).\\n\\nAssim como: Vice-Presidente, Presidente da Câmara/Senado, Ministro do STF, Carreira diplomática, Oficial das FA, Ministro da Defesa.",
            tags: ["nato", "naturalizado", "presidente"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-8',
            frente: "O §1º do art. 5º diz o quê?",
            verso: "§1º: As normas definidoras dos direitos e garantias fundamentais têm **APLICAÇÃO IMEDIATA**.\\n\\nSignifica que não dependem de regulamentação para produzir efeitos.\\n\\n(Porém, normas programáticas ainda podem exigir complementação)",
            tags: ["§1º", "aplicação imediata"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-9',
            frente: "Analfabeto pode votar e ser votado?",
            verso: "**VOTAR**: SIM (facultativo)\\n\\n**SER VOTADO**: NÃO\\n\\nAnalfabetos são:\\n- Alistáveis (podem votar, de forma facultativa)\\n- INELEGÍVEIS (não podem ser candidatos)\\n\\n(Art. 14, §1º, II, a e §4º)",
            tags: ["analfabeto", "elegibilidade"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-19-10',
            frente: "Qual a diferença entre brasileiro NATO e NATURALIZADO?",
            verso: "**NATO**:\\n- Aquisição involuntária (nascimento)\\n- Critérios: jus soli, jus sanguinis\\n- Acesso a TODOS os cargos\\n\\n**NATURALIZADO**:\\n- Aquisição voluntária (requerimento)\\n- Requisitos legais\\n- Restrições em alguns cargos",
            tags: ["nato", "naturalizado", "diferença"],
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
            id: 'da-q-19-1',
            enunciado: "De acordo com o art. 5º, §1º, da CF/88, as normas definidoras de direitos e garantias fundamentais:",
            alternativas: [
              { letra: 'A', texto: 'dependem de lei para ter aplicação.' },
              { letra: 'B', texto: 'têm aplicação imediata.' },
              { letra: 'C', texto: 'são de eficácia limitada.' },
              { letra: 'D', texto: 'dependem de regulamentação pelo Executivo.' },
              { letra: 'E', texto: 'só se aplicam após regulamentação.' },
            ],
            gabarito: 'B',
            justificativa: "O §1º do art. 5º estabelece que as normas definidoras de direitos fundamentais têm APLICAÇÃO IMEDIATA, ou seja, não dependem de regulamentação para produzir efeitos.",
            dificuldade: 'Fácil',
            competencia: 'Aplicação dos direitos fundamentais',
            banca: 'IADES',
            tags: ['§1º', 'aplicação imediata'],
          },
          {
            id: 'da-q-19-2',
            enunciado: "São cargos privativos de brasileiro NATO, EXCETO:",
            alternativas: [
              { letra: 'A', texto: 'Presidente da República.' },
              { letra: 'B', texto: 'Ministro do STF.' },
              { letra: 'C', texto: 'Ministro de Estado da Fazenda.' },
              { letra: 'D', texto: 'Oficial das Forças Armadas.' },
              { letra: 'E', texto: 'Presidente do Senado Federal.' },
            ],
            gabarito: 'C',
            justificativa: "Ministro de Estado (exceto da Defesa) pode ser brasileiro naturalizado. Os cargos privativos de NATO são: MP3.COM (Min. STF, PR/VP, Pres. Câmara/Senado, Carreira diplomática, Oficial FA, Min. Defesa).",
            dificuldade: 'Média',
            competencia: 'Cargos privativos de nato',
            banca: 'IADES',
            tags: ['nato', 'cargos privativos'],
          },
          {
            id: 'da-q-19-3',
            enunciado: "O remédio constitucional cabível para proteger a liberdade de locomoção é:",
            alternativas: [
              { letra: 'A', texto: 'mandado de segurança.' },
              { letra: 'B', texto: 'habeas data.' },
              { letra: 'C', texto: 'habeas corpus.' },
              { letra: 'D', texto: 'mandado de injunção.' },
              { letra: 'E', texto: 'ação popular.' },
            ],
            gabarito: 'C',
            justificativa: "O HABEAS CORPUS protege a liberdade de locomoção (ir e vir). Habeas data = dados. MS = direito líquido e certo. MI = falta de norma. AP = patrimônio público.",
            dificuldade: 'Fácil',
            competencia: 'Remédios constitucionais',
            banca: 'IADES',
            tags: ['habeas corpus', 'locomoção'],
          },
          {
            id: 'da-q-19-4',
            enunciado: "A idade mínima para o cargo de Senador da República é de:",
            alternativas: [
              { letra: 'A', texto: '18 anos.' },
              { letra: 'B', texto: '21 anos.' },
              { letra: 'C', texto: '25 anos.' },
              { letra: 'D', texto: '30 anos.' },
              { letra: 'E', texto: '35 anos.' },
            ],
            gabarito: 'E',
            justificativa: "A idade mínima para Senador é 35 anos (mesma de Presidente e Vice). 30 anos = Governador. 21 anos = Deputados/Prefeito. 18 anos = Vereador.",
            dificuldade: 'Fácil',
            competencia: 'Idade mínima para cargos',
            banca: 'IADES',
            tags: ['idade', 'senador'],
          },
          {
            id: 'da-q-19-5',
            enunciado: "A consulta popular realizada ANTES da edição do ato legislativo ou administrativo denomina-se:",
            alternativas: [
              { letra: 'A', texto: 'referendo.' },
              { letra: 'B', texto: 'plebiscito.' },
              { letra: 'C', texto: 'iniciativa popular.' },
              { letra: 'D', texto: 'voto popular.' },
              { letra: 'E', texto: 'sufrágio.' },
            ],
            gabarito: 'B',
            justificativa: "PLEBISCITO é a consulta PRÉVIA (antes do ato). REFERENDO é a consulta posterior (depois do ato). Ambos são formas de exercício da soberania popular.",
            dificuldade: 'Fácil',
            competencia: 'Plebiscito x Referendo',
            banca: 'IADES',
            tags: ['plebiscito', 'consulta prévia'],
          },
          {
            id: 'da-q-19-6',
            enunciado: "São direitos SOCIAIS previstos no art. 6º da CF/88, EXCETO:",
            alternativas: [
              { letra: 'A', texto: 'educação.' },
              { letra: 'B', texto: 'saúde.' },
              { letra: 'C', texto: 'propriedade.' },
              { letra: 'D', texto: 'moradia.' },
              { letra: 'E', texto: 'transporte.' },
            ],
            gabarito: 'C',
            justificativa: "PROPRIEDADE é direito INDIVIDUAL (art. 5º), não social. Os direitos sociais do art. 6º são: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade/infância, assistência.",
            dificuldade: 'Média',
            competencia: 'Direitos sociais',
            banca: 'IADES',
            tags: ['sociais', 'exceção'],
          },
          {
            id: 'da-q-19-7',
            enunciado: "Quanto à nacionalidade, é CORRETO afirmar:",
            alternativas: [
              { letra: 'A', texto: 'Brasileiro nato e naturalizado têm os mesmos direitos em todos os casos.' },
              { letra: 'B', texto: 'Naturalizado pode ser Presidente da República.' },
              { letra: 'C', texto: 'A CF/88 só admite distinções entre nato e naturalizado nos casos nela previstos.' },
              { letra: 'D', texto: 'Estrangeiro residente pode naturalizar-se automaticamente.' },
              { letra: 'E', texto: 'A nacionalidade é direito absoluto e irrenunciável.' },
            ],
            gabarito: 'C',
            justificativa: "Art. 12, §2º: A lei NÃO poderá estabelecer distinção entre brasileiros natos e naturalizados, SALVO nos casos previstos na própria Constituição. As distinções são taxativas (MP3.COM, extradição, etc.).",
            dificuldade: 'Média',
            competencia: 'Nacionalidade',
            banca: 'IADES',
            tags: ['nato', 'naturalizado', 'distinção'],
          },
          {
            id: 'da-q-19-8',
            enunciado: "Sobre o alistamento eleitoral, é CORRETO afirmar que é FACULTATIVO para:",
            alternativas: [
              { letra: 'A', texto: 'maiores de 18 e menores de 70 anos.' },
              { letra: 'B', texto: 'estrangeiros naturalizados.' },
              { letra: 'C', texto: 'os analfabetos e maiores de 70 anos.' },
              { letra: 'D', texto: 'servidores públicos.' },
              { letra: 'E', texto: 'brasileiros natos.' },
            ],
            gabarito: 'C',
            justificativa: "O alistamento é FACULTATIVO para: analfabetos, maiores de 70 anos e maiores de 16/menores de 18 anos. Para os demais (18 a 70, alfabetizados), é obrigatório.",
            dificuldade: 'Média',
            competencia: 'Alistamento eleitoral',
            banca: 'IADES',
            tags: ['alistamento', 'facultativo'],
          },
          {
            id: 'da-q-19-9',
            enunciado: "O Habeas Data é cabível para:",
            alternativas: [
              { letra: 'A', texto: 'proteger a liberdade de locomoção.' },
              { letra: 'B', texto: 'assegurar o conhecimento de informações pessoais em bancos de dados.' },
              { letra: 'C', texto: 'anular ato lesivo ao patrimônio público.' },
              { letra: 'D', texto: 'proteger direito líquido e certo não amparado por HC.' },
              { letra: 'E', texto: 'suprir falta de norma regulamentadora.' },
            ],
            gabarito: 'B',
            justificativa: "HABEAS DATA serve para: a) conhecer informações pessoais em bancos de dados; b) retificar dados. A = HC, C = Ação Popular, D = MS, E = Mandado de Injunção.",
            dificuldade: 'Fácil',
            competencia: 'Habeas Data',
            banca: 'IADES',
            tags: ['habeas data', 'dados pessoais'],
          },
          {
            id: 'da-q-19-10',
            enunciado: "Os direitos fundamentais são considerados relativos porque:",
            alternativas: [
              { letra: 'A', texto: 'só se aplicam aos brasileiros.' },
              { letra: 'B', texto: 'dependem de lei para existir.' },
              { letra: 'C', texto: 'podem ser limitados em caso de colisão com outros direitos.' },
              { letra: 'D', texto: 'são renunciáveis pelo titular.' },
              { letra: 'E', texto: 'prescrevem após determinado prazo.' },
            ],
            gabarito: 'C',
            justificativa: "Direitos fundamentais são RELATIVOS (não absolutos) porque podem ser limitados quando colidem com outros direitos fundamentais. A ponderação resolve o conflito no caso concreto.",
            dificuldade: 'Média',
            competencia: 'Relatividade dos direitos',
            banca: 'IADES',
            tags: ['relatividade', 'limitação'],
          },
        ],
      },
    },
    {
      id: 'da-topico-20',
      numero: 20,
      titulo: 'Constituição do Estado de Goiás',
      conteudo: {
        resumo: `
## Resumo Rápido

### Informações Gerais

| Aspecto | Informação |
|---------|------------|
| **Promulgação** | 5 de outubro de 1989 |
| **Base** | Poder Constituinte Derivado Decorrente |
| **Fundamento** | Art. 25, CF/88 |
| **Princípio** | Simetria com a CF/88 |

### Estrutura da CE/GO

| Título | Conteúdo |
|--------|----------|
| I | Princípios Fundamentais |
| II | Direitos e Garantias Fundamentais |
| III | **Organização do Estado** |
| IV | **Organização dos Poderes** |
| V | Tributação e Orçamento |
| VI | **Ordem Econômica e Social** |
| VII | Ordem Social |

### Poder LEGISLATIVO (Assembleia Legislativa)

| Aspecto | Regra |
|---------|-------|
| **Composição** | 41 Deputados Estaduais |
| **Mandato** | 4 anos |
| **Sede** | Goiânia |
| **Legislatura** | Coincide com mandato |

### Poder EXECUTIVO

| Cargo | Eleição | Mandato |
|-------|---------|---------|
| **Governador** | Maioria absoluta | 4 anos, 1 reeleição |
| **Vice-Governador** | Chapa com Governador | 4 anos |
| **Secretários** | Livre nomeação | Livre exoneração |

### Poder JUDICIÁRIO (TJGO)

| Órgão | Composição/Função |
|-------|-------------------|
| **Tribunal de Justiça** | Desembargadores |
| **Tribunal do Júri** | Crimes dolosos contra vida |
| **Juízes de Direito** | 1ª instância |
| **Juizados Especiais** | Pequenas causas |

### Ordem Econômica e Social

| Princípio | Aplicação |
|-----------|-----------|
| **Desenvolvimento sustentável** | Equilíbrio ambiental |
| **Redução das desigualdades regionais** | Interior do Estado |
| **Valorização do trabalho** | Geração de emprego |
| **Livre iniciativa** | Apoio ao empreendedorismo |

### Para IADES - Foco em:
- 41 Deputados Estaduais
- Competências do Governador
- Política de desenvolvimento regional
- Órgãos do Judiciário estadual
        `,

        explicacao: `
## Explicação Didática

### 1. Fundamentos da Constituição Estadual

A **Constituição do Estado de Goiás** (CE/GO) foi promulgada em **5 de outubro de 1989**, exatamente um ano após a CF/88.

#### Base Jurídica

| Aspecto | Fundamento |
|---------|------------|
| **Poder Constituinte** | Derivado Decorrente |
| **Previsão CF** | Art. 25: "Os Estados organizam-se e regem-se pelas Constituições e leis que adotarem, observados os princípios desta Constituição" |
| **Princípio** | Simetria constitucional |

#### Princípio da Simetria

A CE/GO deve observar:
- Princípios da CF/88 (normas de reprodução obrigatória)
- Pode ter normas próprias (autonomia federativa)
- Não pode contrariar a CF (supremacia)

### 2. Organização do Estado de Goiás

#### 2.1 Estrutura Básica

| Elemento | Descrição |
|----------|-----------|
| **Capital** | Goiânia |
| **Território** | 340.086,698 km² |
| **Divisão** | 246 Municípios |
| **Regiões** | 18 regiões de planejamento |

#### 2.2 Símbolos do Estado (Art. 2º, CE/GO)

- Bandeira do Estado
- Brasão de Armas
- Hino de Goiás
- Selo do Estado

### 3. PODER LEGISLATIVO - Assembleia Legislativa (Arts. 15 a 27)

#### 3.1 Composição

| Aspecto | Regra CE/GO |
|---------|-------------|
| **Órgão** | Assembleia Legislativa (ALEGO) |
| **Membros** | **41 Deputados Estaduais** |
| **Mandato** | 4 anos (1 legislatura) |
| **Eleição** | Sistema proporcional |
| **Sede** | Palácio Alfredo Nasser (Goiânia) |

**Cálculo do número de deputados:**
- CF/88, Art. 27: triplo da bancada federal até 12 + 1 para cada novo até 36
- Goiás: 17 Dep. Federais × 2 + 7 = **41 Dep. Estaduais**

#### 3.2 Competência da Assembleia Legislativa

##### Competência EXCLUSIVA (não precisa de sanção)

| Matéria | Forma |
|---------|-------|
| Regimento Interno | Resolução |
| Criação de CPI | Requerimento |
| Autorizar o Governador a se ausentar | Autorização |
| Julgar contas do Governador | Decreto Legislativo |
| Fixar subsídios dos deputados | Resolução |
| Aprovar indicação de autoridades | Decreto Legislativo |
| Sustar atos normativos do Executivo | Decreto Legislativo |

##### Competência PRIVATIVA (processo legislativo comum)

| Matéria | Iniciativa |
|---------|------------|
| Leis em geral | Deputados, Governador, Judiciário, MP, cidadãos |
| Lei de organização do MP | Procurador-Geral |
| Leis tributárias | Governador (algumas exclusivas) |
| Lei orçamentária | Governador |

#### 3.3 Processo Legislativo Estadual

| Espécie Normativa | Características |
|-------------------|-----------------|
| Emenda à Constituição | 3/5 dos deputados, 2 turnos |
| Lei Complementar | Maioria absoluta (21 deputados) |
| Lei Ordinária | Maioria simples |
| Lei Delegada | Delegação ao Governador |
| Resolução | Matérias internas da ALEGO |
| Decreto Legislativo | Competência exclusiva |

#### 3.4 Imunidades dos Deputados Estaduais

| Tipo | Conteúdo |
|------|----------|
| **Material** | Inviolabilidade por opiniões, palavras e votos |
| **Formal** | Prerrogativa de foro (TJ-GO) |
| **Prisão** | Só em flagrante de crime inafiançável |

### 4. PODER EXECUTIVO (Arts. 28 a 47)

#### 4.1 Composição

| Cargo | Forma de Investidura |
|-------|---------------------|
| **Governador** | Eleição direta, maioria absoluta |
| **Vice-Governador** | Eleição conjunta (chapa) |
| **Secretários de Estado** | Livre nomeação e exoneração |

#### 4.2 Requisitos para Governador

| Requisito | Exigência |
|-----------|-----------|
| Nacionalidade | Brasileiro nato OU naturalizado |
| Idade mínima | **30 anos** |
| Filiação partidária | Obrigatória |
| Domicílio eleitoral | No Estado |
| Pleno exercício dos direitos políticos | Elegível |

#### 4.3 Mandato e Reeleição

| Aspecto | Regra |
|---------|-------|
| **Mandato** | 4 anos |
| **Início** | 1º de janeiro do ano seguinte à eleição |
| **Reeleição** | Permitida para UM período subsequente |
| **Subsídio** | Fixado por lei, teto estadual |

#### 4.4 Competências do Governador (Art. 37)

##### Competências PRIVATIVAS

| Competência | Descrição |
|-------------|-----------|
| Nomear e exonerar | Secretários de Estado, dirigentes |
| Exercer a direção superior | Da administração estadual |
| Iniciar o processo legislativo | Nas matérias de sua competência |
| Sancionar, promulgar, vetar | Leis estaduais |
| Decretar e executar | Intervenção nos municípios |
| Celebrar convênios | Com União, Estados, Municípios |
| Enviar à ALEGO | PPA, LDO, LOA |
| Prestar contas | Anualmente à ALEGO |
| Prover cargos públicos | Na forma da lei |
| Comandar | Polícia Militar e Corpo de Bombeiros |

##### Iniciativa RESERVADA ao Governador

| Matéria | Justificativa |
|---------|---------------|
| Criação de cargos | Impacto financeiro |
| Aumento de remuneração | Despesa de pessoal |
| Regime jurídico dos servidores | Organização administrativa |
| Organização da Administração | Estrutura do Executivo |
| Matéria orçamentária | PPA, LDO, LOA |
| Criação de autarquias/fundações | Administração Indireta |

#### 4.5 Responsabilidade do Governador

| Crime | Julgamento |
|-------|------------|
| **Crime de responsabilidade** | Assembleia Legislativa (Tribunal Especial) |
| **Crime comum** | STJ (após autorização da ALEGO por 2/3) |

#### 4.6 Vice-Governador

| Função | Descrição |
|--------|-----------|
| Substituir | Impedimentos temporários |
| Suceder | Vacância definitiva |
| Auxiliar | Missões especiais |
| Integrar | Conselhos de governo |

#### 4.7 Secretários de Estado

| Aspecto | Regra |
|---------|-------|
| Nomeação | Livre pelo Governador |
| Requisitos | Brasileiro, > 21 anos, direitos políticos |
| Responsabilidade | Crimes de responsabilidade (ALEGO) |
| Foro | TJ-GO (crimes comuns) |

### 5. PODER JUDICIÁRIO (Arts. 48 a 69)

#### 5.1 Estrutura do Judiciário Goiano

| Órgão | Competência/Composição |
|-------|------------------------|
| **Tribunal de Justiça** | 2ª instância, órgão de cúpula |
| **Tribunal do Júri** | Crimes dolosos contra a vida |
| **Juízes de Direito** | 1ª instância (comarcas) |
| **Juizados Especiais** | Causas de menor complexidade |
| **Juízes de Paz** | Conciliação, casamentos |

#### 5.2 Tribunal de Justiça de Goiás (TJ-GO)

| Aspecto | Regra |
|---------|-------|
| **Composição** | Desembargadores |
| **Mínimo** | 7 Desembargadores |
| **Atual** | Varia conforme organização judiciária |
| **Sede** | Goiânia |

##### Composição do TJ-GO (Regra do Quinto)

| Origem | Proporção |
|--------|-----------|
| **Carreira** (juízes de direito) | 4/5 |
| **Quinto constitucional** | 1/5 (MP + OAB) |

##### Competências do TJ-GO

| Competência | Descrição |
|-------------|-----------|
| **Originária** | Julgar autoridades estaduais (foro privilegiado) |
| **Recursal** | Recursos das decisões de 1ª instância |
| **Controle de constitucionalidade** | ADI estadual (leis municipais/estaduais x CE) |

##### Autoridades com Foro no TJ-GO

- Governador (crimes comuns, após autorização ALEGO)
- Vice-Governador
- Deputados Estaduais
- Secretários de Estado
- Procurador-Geral de Justiça
- Procurador-Geral do Estado
- Prefeitos
- Juízes de Direito

#### 5.3 Justiça de 1º Grau

| Órgão | Competência |
|-------|-------------|
| **Juízes de Direito** | Julgar causas em geral |
| **Juízes Substitutos** | Auxiliar juízes titulares |
| **Juizados Especiais** | Menor complexidade, conciliação |
| **Juízes de Paz** | Celebrar casamentos, conciliação |

#### 5.4 Garantias da Magistratura

| Garantia | Conteúdo |
|----------|----------|
| **Vitaliciedade** | Só perde cargo por sentença transitada |
| **Inamovibilidade** | Não pode ser removido sem consentimento |
| **Irredutibilidade** | Subsídio não pode ser reduzido |

### 6. ORDEM ECONÔMICA E SOCIAL (Título VI)

#### 6.1 Princípios da Ordem Econômica Goiana

| Princípio | Aplicação |
|-----------|-----------|
| **Valorização do trabalho** | Base da ordem econômica |
| **Livre iniciativa** | Estímulo ao empreendedorismo |
| **Função social da propriedade** | Limita o direito de propriedade |
| **Defesa do consumidor** | PROCON-GO |
| **Defesa do meio ambiente** | Desenvolvimento sustentável |
| **Redução das desigualdades regionais** | Política de desenvolvimento |
| **Busca do pleno emprego** | Políticas de emprego |
| **Tratamento favorecido às pequenas empresas** | Simples estadual, incentivos |

#### 6.2 Política de Desenvolvimento (Arts. 100-103)

##### Objetivos da Política de Desenvolvimento

| Objetivo | Descrição |
|----------|-----------|
| **Desenvolvimento sustentável** | Conciliar crescimento e meio ambiente |
| **Redução das desigualdades** | Entre regiões do Estado |
| **Interiorização** | Levar desenvolvimento ao interior |
| **Diversificação econômica** | Não depender de poucos setores |
| **Geração de emprego e renda** | Inclusão social |
| **Infraestrutura** | Estradas, energia, comunicações |

##### Instrumentos da Política de Desenvolvimento

| Instrumento | Finalidade |
|-------------|------------|
| **Planejamento estratégico** | Definir prioridades |
| **Incentivos fiscais** | Atrair investimentos |
| **Fundos de desenvolvimento** | Financiar projetos |
| **Parcerias público-privadas** | PPPs |
| **Distritos industriais** | Concentração de indústrias |
| **Apoio ao agronegócio** | Vocação do Estado |

##### Regiões de Planejamento

O Estado de Goiás é dividido em **regiões de planejamento** para fins de política de desenvolvimento:

| Região | Polo/Característica |
|--------|---------------------|
| Metropolitana de Goiânia | Capital, serviços, indústria |
| Entorno de Brasília | Influência do DF |
| Sul Goiano | Agronegócio forte |
| Sudoeste | Jataí, Rio Verde - grãos |
| Norte | Porangatu, pecuária |
| Nordeste | Pobreza, semiárido |
| Noroeste | Mineração |
| Centro | Anápolis, indústria farmacêutica |

##### Desenvolvimento Regional na CE/GO

> Art. 100: "O Estado promoverá o desenvolvimento econômico e social de forma integrada, visando à redução das desigualdades regionais e sociais."

| Diretriz | Ação |
|----------|------|
| Integração | Articular políticas públicas |
| Descentralização | Fortalecer municípios |
| Participação | Conselhos regionais |
| Sustentabilidade | Preservar o Cerrado |

#### 6.3 Agronegócio na Política de Desenvolvimento

Goiás é um dos maiores produtores agrícolas do Brasil:

| Produto | Importância |
|---------|-------------|
| Soja | Maior produção do Centro-Oeste |
| Milho | Exportação e ração animal |
| Algodão | Sul goiano |
| Cana-de-açúcar | Etanol, açúcar |
| Pecuária | Um dos maiores rebanhos |

A CE/GO prevê apoio específico:
- Pesquisa agrícola (EMATER, EMBRAPA)
- Assistência técnica
- Crédito rural
- Infraestrutura logística
- Defesa sanitária (AGRODEFESA)

#### 6.4 Vigilância Sanitária na Ordem Econômica

A **Vigilância Sanitária** está inserida na política de desenvolvimento por meio de:

| Aspecto | Relação com VISA |
|---------|------------------|
| Saúde | Art. 153 CE/GO (SUS estadual) |
| Defesa do consumidor | Segurança de produtos |
| Meio ambiente | Controle de riscos sanitários |
| Agronegócio | Inspeção de produtos |
| Turismo | Estabelecimentos alimentícios |

### 7. Disposições Relevantes para Concurso

#### 7.1 Servidor Público na CE/GO

| Aspecto | Regra |
|---------|-------|
| Regime jurídico | Estatutário (Lei 20.756/2020) |
| Ingresso | Concurso público |
| Estabilidade | Após 3 anos (estágio probatório) |
| Teto remuneratório | Subsídio do Governador |
| Acumulação | Mesmas regras da CF |

#### 7.2 Controle da Administração

| Órgão | Função |
|-------|--------|
| **Tribunal de Contas do Estado** | Controle externo (auxilia ALEGO) |
| **Controladoria-Geral do Estado** | Controle interno |
| **Ministério Público** | Defesa da ordem jurídica |
| **Defensoria Pública** | Assistência jurídica gratuita |

#### 7.3 Administração Pública Estadual

| Aspecto | Regra |
|---------|-------|
| Princípios | LIMPE + legalidade, finalidade, motivação |
| Licitação | Obrigatória (Lei 14.133/2021) |
| Publicidade | Atos devem ser publicados |
| Responsabilidade fiscal | LRF aplicável |
        `,

        pontosChave: [
          "CE/GO promulgada em 05/10/1989, um ano após a CF/88",
          "Assembleia Legislativa: 41 Deputados Estaduais, mandato de 4 anos",
          "Governador: eleito por maioria absoluta, mandato 4 anos, 1 reeleição",
          "Idade mínima para Governador: 30 anos",
          "TJ-GO: órgão de cúpula do Judiciário estadual, 2ª instância",
          "Quinto constitucional: 1/5 do TJ vem do MP e da OAB",
          "Foro do Governador (crime comum): STJ (após autorização 2/3 ALEGO)",
          "Secretários: livre nomeação e exoneração pelo Governador",
          "Política de desenvolvimento: reduzir desigualdades regionais",
          "18 regiões de planejamento em Goiás",
          "Agronegócio é base da economia goiana (soja, milho, pecuária)",
          "Princípio da simetria: CE/GO deve observar a CF/88",
        ],

        armadilhas: [
          {
            titulo: "Número de Deputados Estaduais",
            descricao: "Goiás tem 41 Deputados Estaduais, não 40 ou 42.",
            dica: "41 = triplo de 12 + diferença até a bancada federal (17).",
          },
          {
            titulo: "Idade para Governador",
            descricao: "Governador exige 30 anos (não 35 como Presidente).",
            dica: "35 = PR/VP/Senador. 30 = Governador/Vice.",
          },
          {
            titulo: "Foro do Governador por crime comum",
            descricao: "É o STJ (não o STF ou TJ). Precisa autorização de 2/3 da ALEGO.",
            dica: "Governador = STJ. Presidente = STF.",
          },
          {
            titulo: "Crime de responsabilidade do Governador",
            descricao: "Julgado pela ALEGO (Tribunal Especial), não pelo TJ.",
            dica: "Crime de responsabilidade = político = Legislativo julga.",
          },
          {
            titulo: "Composição do Quinto Constitucional",
            descricao: "É 1/5 do TJ (MP + OAB), não 1/4 ou 1/3.",
            dica: "Quinto = 1/5, dividido entre MP e advocacia.",
          },
          {
            titulo: "Secretários têm estabilidade",
            descricao: "Secretários são de livre nomeação e exoneração (cargos comissionados).",
            dica: "Cargo de confiança = demissível ad nutum.",
          },
        ],

        mnemonicos: [
          {
            termo: "41 DEPs",
            significado: "Composição da ALEGO",
            frase: "Goiás tem 41 Deputados Estaduais",
          },
          {
            termo: "30-GOV / 35-PRES",
            significado: "Idade mínima",
            frase: "30 anos para Governador, 35 anos para Presidente",
          },
          {
            termo: "STJ-GOV / STF-PRES",
            significado: "Foro por crime comum",
            frase: "Governador no STJ, Presidente no STF",
          },
          {
            termo: "1/5 = MP + OAB",
            significado: "Quinto Constitucional",
            frase: "1/5 do TJ vem do MP e da OAB (advocacia)",
          },
          {
            termo: "LNE",
            significado: "Secretários de Estado",
            frase: "Livre Nomeação e Exoneração pelo Governador",
          },
          {
            termo: "4+1",
            significado: "Mandato do Governador",
            frase: "4 anos de mandato + 1 reeleição permitida",
          },
          {
            termo: "2/3 ALEGO",
            significado: "Autorização para processar Governador",
            frase: "2/3 dos deputados para autorizar processo contra Governador",
          },
          {
            termo: "18 REGIÕES",
            significado: "Regiões de planejamento",
            frase: "Goiás tem 18 regiões de planejamento",
          },
        ],

        flashcards: [
          {
            id: 'da-fc-20-1',
            frente: "Quantos Deputados Estaduais compõem a Assembleia Legislativa de Goiás?",
            verso: "**41 Deputados Estaduais**\\n\\nCálculo (art. 27, CF):\\n- Triplo da bancada federal (até 12)\\n- Mais 1 para cada deputado federal acima de 12\\n- GO tem 17 dep. federais\\n\\nMandato: 4 anos (1 legislatura)",
            tags: ["ALEGO", "deputados", "composição"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-2',
            frente: "Qual a idade mínima para ser Governador de Goiás?",
            verso: "**30 anos**\\n\\nDiferente do Presidente (35 anos).\\n\\nOutros requisitos:\\n- Brasileiro (nato ou naturalizado)\\n- Filiação partidária\\n- Domicílio eleitoral no Estado\\n- Pleno exercício dos direitos políticos",
            tags: ["governador", "idade", "requisitos"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-3',
            frente: "Qual o foro do Governador de Goiás por crime COMUM?",
            verso: "**STJ** (Superior Tribunal de Justiça)\\n\\n⚠️ Exige autorização de **2/3 da ALEGO** para processar.\\n\\nDiferente do Presidente (que é julgado no STF).\\n\\nCrime de RESPONSABILIDADE: julgado pela ALEGO.",
            tags: ["governador", "foro", "STJ"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-4',
            frente: "O que é o Quinto Constitucional no TJ-GO?",
            verso: "**1/5 do TJ** é composto por membros:\\n- Do Ministério Público (metade do 1/5)\\n- Da Advocacia/OAB (outra metade)\\n\\nRequisitos: + 10 anos de carreira/advocacia, reputação ilibada, notório saber jurídico.\\n\\nOs outros 4/5 vêm da carreira (juízes de direito).",
            tags: ["quinto", "TJ-GO", "composição"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-5',
            frente: "Como é a nomeação dos Secretários de Estado?",
            verso: "**Livre nomeação e exoneração** pelo Governador.\\n\\nRequisitos:\\n- Brasileiro\\n- Maior de 21 anos\\n- Exercício dos direitos políticos\\n\\nSão cargos de CONFIANÇA (comissionados), não há estabilidade.",
            tags: ["secretários", "nomeação", "exoneração"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-6',
            frente: "Qual o mandato do Governador e quantas vezes pode se reeleger?",
            verso: "**Mandato: 4 anos**\\n**Reeleição: 1 vez** (período subsequente)\\n\\nInício: 1º de janeiro do ano seguinte à eleição.\\n\\nEleição: maioria absoluta (2º turno se necessário).",
            tags: ["governador", "mandato", "reeleição"],
            dificuldade: "facil",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-7',
            frente: "Quais são os objetivos da Política de Desenvolvimento de Goiás?",
            verso: "1. **Desenvolvimento sustentável**\\n2. **Redução das desigualdades regionais**\\n3. **Interiorização** do desenvolvimento\\n4. **Diversificação econômica**\\n5. **Geração de emprego e renda**\\n6. **Melhoria da infraestrutura**\\n\\n(Art. 100 e ss. da CE/GO)",
            tags: ["desenvolvimento", "política", "objetivos"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-8',
            frente: "Quantas regiões de planejamento existem em Goiás?",
            verso: "**18 regiões de planejamento**\\n\\nPrincipais:\\n- Metropolitana de Goiânia\\n- Entorno de Brasília\\n- Sul Goiano (agronegócio)\\n- Centro (Anápolis)\\n- Norte, Nordeste, Noroeste, Sudoeste...\\n\\nFinalidade: descentralizar o desenvolvimento.",
            tags: ["regiões", "planejamento"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-9',
            frente: "Quem julga o Governador por crime de RESPONSABILIDADE?",
            verso: "**Assembleia Legislativa** (Tribunal Especial)\\n\\n⚠️ Crime de responsabilidade é infração político-administrativa, não penal.\\n\\nDiferente de crime comum (STJ).\\n\\nAnalogia: Presidente → Senado / Governador → ALEGO",
            tags: ["governador", "responsabilidade", "julgamento"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-10',
            frente: "Quais são os órgãos do Poder Judiciário de Goiás?",
            verso: "1. **Tribunal de Justiça (TJ-GO)** - 2ª instância\\n2. **Tribunal do Júri** - crimes dolosos contra a vida\\n3. **Juízes de Direito** - 1ª instância\\n4. **Juizados Especiais** - causas de menor complexidade\\n5. **Juízes de Paz** - conciliação, casamentos",
            tags: ["judiciário", "órgãos", "Goiás"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-11',
            frente: "Quais autoridades têm foro privilegiado no TJ-GO?",
            verso: "- Vice-Governador\\n- Deputados Estaduais\\n- Secretários de Estado\\n- Procurador-Geral de Justiça\\n- Procurador-Geral do Estado\\n- **Prefeitos**\\n- Juízes de Direito\\n\\n⚠️ Governador = STJ (não TJ-GO)",
            tags: ["foro", "privilegiado", "TJ-GO"],
            dificuldade: "medio",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-20-12',
            frente: "Qual a base da economia goiana segundo a CE/GO?",
            verso: "**Agronegócio** (vocação do Estado)\\n\\nPrincipais produtos:\\n- Soja (maior produtor Centro-Oeste)\\n- Milho\\n- Pecuária\\n- Cana-de-açúcar\\n- Algodão\\n\\nA CE/GO prevê: pesquisa agrícola, crédito rural, infraestrutura logística.",
            tags: ["economia", "agronegócio", "Goiás"],
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
            id: 'da-q-20-1',
            enunciado: "A Assembleia Legislativa do Estado de Goiás é composta por:",
            alternativas: [
              { letra: 'A', texto: '24 Deputados Estaduais.' },
              { letra: 'B', texto: '35 Deputados Estaduais.' },
              { letra: 'C', texto: '41 Deputados Estaduais.' },
              { letra: 'D', texto: '47 Deputados Estaduais.' },
              { letra: 'E', texto: '51 Deputados Estaduais.' },
            ],
            gabarito: 'C',
            justificativa: "A ALEGO é composta por 41 Deputados Estaduais, conforme cálculo do art. 27 da CF/88 (triplo da bancada federal até 12, mais um para cada deputado acima de 12).",
            dificuldade: 'Fácil',
            competencia: 'Composição da ALEGO',
            banca: 'IADES',
            tags: ['ALEGO', 'deputados', '41'],
          },
          {
            id: 'da-q-20-2',
            enunciado: "A idade mínima para ser Governador do Estado de Goiás é de:",
            alternativas: [
              { letra: 'A', texto: '18 anos.' },
              { letra: 'B', texto: '21 anos.' },
              { letra: 'C', texto: '25 anos.' },
              { letra: 'D', texto: '30 anos.' },
              { letra: 'E', texto: '35 anos.' },
            ],
            gabarito: 'D',
            justificativa: "A idade mínima para Governador é 30 anos (art. 14, §3º, VI, b, CF). É diferente do Presidente (35 anos) e do Deputado Estadual (21 anos).",
            dificuldade: 'Fácil',
            competencia: 'Requisitos para Governador',
            banca: 'IADES',
            tags: ['governador', 'idade', '30 anos'],
          },
          {
            id: 'da-q-20-3',
            enunciado: "O Governador do Estado de Goiás, nos crimes comuns, será julgado pelo:",
            alternativas: [
              { letra: 'A', texto: 'Tribunal de Justiça do Estado de Goiás.' },
              { letra: 'B', texto: 'Supremo Tribunal Federal.' },
              { letra: 'C', texto: 'Superior Tribunal de Justiça, após autorização de 2/3 da ALEGO.' },
              { letra: 'D', texto: 'Assembleia Legislativa.' },
              { letra: 'E', texto: 'Tribunal Regional Federal.' },
            ],
            gabarito: 'C',
            justificativa: "O Governador tem foro no STJ para crimes comuns (art. 105, I, a, CF), mas depende de autorização de 2/3 da Assembleia Legislativa para ser processado. Crime de responsabilidade é julgado pela ALEGO.",
            dificuldade: 'Média',
            competencia: 'Foro do Governador',
            banca: 'IADES',
            tags: ['governador', 'STJ', 'foro'],
          },
          {
            id: 'da-q-20-4',
            enunciado: "Os Secretários de Estado são:",
            alternativas: [
              { letra: 'A', texto: 'eleitos pelo povo.' },
              { letra: 'B', texto: 'nomeados pela Assembleia Legislativa.' },
              { letra: 'C', texto: 'concursados, com estabilidade.' },
              { letra: 'D', texto: 'de livre nomeação e exoneração pelo Governador.' },
              { letra: 'E', texto: 'indicados pelo Tribunal de Justiça.' },
            ],
            gabarito: 'D',
            justificativa: "Os Secretários de Estado são cargos de CONFIANÇA, de livre nomeação e exoneração pelo Governador. Não há concurso público nem estabilidade para esses cargos.",
            dificuldade: 'Fácil',
            competencia: 'Secretários de Estado',
            banca: 'IADES',
            tags: ['secretários', 'nomeação', 'exoneração'],
          },
          {
            id: 'da-q-20-5',
            enunciado: "O chamado 'quinto constitucional' no Tribunal de Justiça de Goiás significa que:",
            alternativas: [
              { letra: 'A', texto: 'cinco desembargadores são escolhidos pelo Governador.' },
              { letra: 'B', texto: '1/5 da composição é reservada a membros do MP e da advocacia.' },
              { letra: 'C', texto: 'o tribunal se reúne a cada cinco anos.' },
              { letra: 'D', texto: 'cinco vagas são destinadas a juízes federais.' },
              { letra: 'E', texto: 'o presidente do TJ tem mandato de cinco anos.' },
            ],
            gabarito: 'B',
            justificativa: "O quinto constitucional (art. 94, CF) determina que 1/5 dos lugares dos Tribunais é composto por membros do Ministério Público (metade) e advogados indicados pela OAB (outra metade).",
            dificuldade: 'Média',
            competencia: 'Quinto constitucional',
            banca: 'IADES',
            tags: ['quinto', 'TJ-GO', 'composição'],
          },
          {
            id: 'da-q-20-6',
            enunciado: "Sobre o mandato do Governador do Estado de Goiás, é CORRETO afirmar:",
            alternativas: [
              { letra: 'A', texto: 'O mandato é de 5 anos, sem direito à reeleição.' },
              { letra: 'B', texto: 'O mandato é de 4 anos, permitida uma reeleição.' },
              { letra: 'C', texto: 'O mandato é de 4 anos, vedada a reeleição.' },
              { letra: 'D', texto: 'O mandato é de 6 anos, permitidas duas reeleições.' },
              { letra: 'E', texto: 'O mandato é de 4 anos, permitidas reeleições ilimitadas.' },
            ],
            gabarito: 'B',
            justificativa: "O Governador tem mandato de 4 anos, sendo permitida UMA reeleição para o período subsequente (EC 16/97). Após dois mandatos consecutivos, deve aguardar um período.",
            dificuldade: 'Fácil',
            competencia: 'Mandato do Governador',
            banca: 'IADES',
            tags: ['governador', 'mandato', 'reeleição'],
          },
          {
            id: 'da-q-20-7',
            enunciado: "A Política de Desenvolvimento do Estado de Goiás tem como um de seus objetivos:",
            alternativas: [
              { letra: 'A', texto: 'concentrar investimentos apenas na capital.' },
              { letra: 'B', texto: 'reduzir as desigualdades regionais dentro do Estado.' },
              { letra: 'C', texto: 'impedir a instalação de indústrias no interior.' },
              { letra: 'D', texto: 'priorizar exclusivamente o setor de serviços.' },
              { letra: 'E', texto: 'extinguir as regiões de planejamento.' },
            ],
            gabarito: 'B',
            justificativa: "A Política de Desenvolvimento de Goiás (art. 100 e ss., CE/GO) visa reduzir as desigualdades regionais, promovendo a interiorização do desenvolvimento e a integração de todas as regiões do Estado.",
            dificuldade: 'Fácil',
            competencia: 'Política de Desenvolvimento',
            banca: 'IADES',
            tags: ['desenvolvimento', 'desigualdades'],
          },
          {
            id: 'da-q-20-8',
            enunciado: "A Constituição do Estado de Goiás foi promulgada em:",
            alternativas: [
              { letra: 'A', texto: '5 de outubro de 1988.' },
              { letra: 'B', texto: '5 de outubro de 1989.' },
              { letra: 'C', texto: '15 de novembro de 1989.' },
              { letra: 'D', texto: '1º de janeiro de 1990.' },
              { letra: 'E', texto: '7 de setembro de 1988.' },
            ],
            gabarito: 'B',
            justificativa: "A CE/GO foi promulgada em 5 de outubro de 1989, exatamente um ano após a CF/88 (5 de outubro de 1988). Ela foi elaborada com base no poder constituinte derivado decorrente.",
            dificuldade: 'Fácil',
            competencia: 'Promulgação da CE/GO',
            banca: 'IADES',
            tags: ['CE/GO', 'promulgação', '1989'],
          },
          {
            id: 'da-q-20-9',
            enunciado: "Os Prefeitos municipais, nos crimes comuns, são julgados pelo:",
            alternativas: [
              { letra: 'A', texto: 'Supremo Tribunal Federal.' },
              { letra: 'B', texto: 'Superior Tribunal de Justiça.' },
              { letra: 'C', texto: 'Tribunal de Justiça do Estado.' },
              { letra: 'D', texto: 'Câmara Municipal.' },
              { letra: 'E', texto: 'Juiz de Direito da comarca.' },
            ],
            gabarito: 'C',
            justificativa: "Os Prefeitos têm foro privilegiado no Tribunal de Justiça do Estado para crimes comuns (art. 29, X, CF). Crimes de responsabilidade são julgados pela Câmara Municipal.",
            dificuldade: 'Média',
            competencia: 'Foro dos Prefeitos',
            banca: 'IADES',
            tags: ['prefeitos', 'TJ-GO', 'foro'],
          },
          {
            id: 'da-q-20-10',
            enunciado: "São órgãos do Poder Judiciário do Estado de Goiás, EXCETO:",
            alternativas: [
              { letra: 'A', texto: 'Tribunal de Justiça.' },
              { letra: 'B', texto: 'Juízes de Direito.' },
              { letra: 'C', texto: 'Tribunal Regional Federal.' },
              { letra: 'D', texto: 'Juizados Especiais.' },
              { letra: 'E', texto: 'Tribunal do Júri.' },
            ],
            gabarito: 'C',
            justificativa: "O Tribunal Regional Federal (TRF) é órgão da Justiça FEDERAL, não estadual. Os órgãos do Judiciário estadual são: TJ, Juízes de Direito, Tribunal do Júri, Juizados Especiais, Juízes de Paz.",
            dificuldade: 'Fácil',
            competencia: 'Órgãos do Judiciário estadual',
            banca: 'IADES',
            tags: ['judiciário', 'TRF', 'exceção'],
          },
          {
            id: 'da-q-20-11',
            enunciado: "O Estado de Goiás é dividido em quantas regiões de planejamento?",
            alternativas: [
              { letra: 'A', texto: '5 regiões.' },
              { letra: 'B', texto: '10 regiões.' },
              { letra: 'C', texto: '14 regiões.' },
              { letra: 'D', texto: '18 regiões.' },
              { letra: 'E', texto: '25 regiões.' },
            ],
            gabarito: 'D',
            justificativa: "Goiás é dividido em 18 regiões de planejamento para fins de política de desenvolvimento regional, visando descentralizar ações e reduzir desigualdades entre as regiões do Estado.",
            dificuldade: 'Média',
            competencia: 'Regiões de planejamento',
            banca: 'IADES',
            tags: ['regiões', 'planejamento', '18'],
          },
          {
            id: 'da-q-20-12',
            enunciado: "O crime de responsabilidade praticado pelo Governador do Estado de Goiás é julgado:",
            alternativas: [
              { letra: 'A', texto: 'pelo Superior Tribunal de Justiça.' },
              { letra: 'B', texto: 'pelo Supremo Tribunal Federal.' },
              { letra: 'C', texto: 'pela Assembleia Legislativa.' },
              { letra: 'D', texto: 'pelo Tribunal de Justiça.' },
              { letra: 'E', texto: 'pelo Senado Federal.' },
            ],
            gabarito: 'C',
            justificativa: "O crime de RESPONSABILIDADE do Governador é julgado pela Assembleia Legislativa (constitui-se em Tribunal Especial). Crime de responsabilidade é infração político-administrativa. Crime comum vai ao STJ.",
            dificuldade: 'Média',
            competencia: 'Julgamento do Governador',
            banca: 'IADES',
            tags: ['governador', 'responsabilidade', 'ALEGO'],
          },
        ],
      },
    },
  ],
};
