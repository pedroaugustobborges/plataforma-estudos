import type { Materia } from '../../types';

export const direitoAdministrativo: Materia = {
  id: 'direito-administrativo',
  nome: 'Direito Administrativo e Constitucional',
  sigla: 'DA',
  descricao: 'Princípios, atos, poderes e organização da Administração Pública',
  cor: '#3f51b5',
  icone: 'Gavel',
  topicos: [
    {
      id: 'da-topico-1',
      numero: 1,
      titulo: 'Estado, Governo e Administração Pública: Conceitos e Elementos',
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
          'ESTADO = pessoa jurídica, permanente, 3 elementos: povo, território, soberania',
          'GOVERNO = condução política, transitório, define políticas públicas',
          'ADMINISTRAÇÃO = execução, instrumental, implementa as políticas',
          'Povo ≠ População: povo é vínculo jurídico (nacionalidade)',
          'Brasil: República Federativa Presidencialista',
          'Administração - Sentido SUBJETIVO: órgãos, entidades, agentes (QUEM)',
          'Administração - Sentido OBJETIVO: atividades administrativas (O QUE)',
          'Função ADMINISTRATIVA: aplica a lei de ofício, sem definitividade',
          'Função JURISDICIONAL: única com definitividade (coisa julgada)',
          'Vigilância Sanitária = exercício do PODER DE POLÍCIA administrativa',
        ],

        armadilhas: [
          {
            titulo: 'Confundir Estado com Governo',
            descricao: 'Estado é permanente e é pessoa jurídica. Governo é transitório e não tem personalidade jurídica.',
            dica: 'O Governo muda a cada eleição, o Estado permanece.',
          },
          {
            titulo: 'Confundir Povo com População',
            descricao: 'Povo: vínculo JURÍDICO (nacionalidade). População: vínculo DEMOGRÁFICO (quem está no território).',
            dica: 'Estrangeiros fazem parte da população, mas não do povo brasileiro.',
          },
          {
            titulo: 'Achar que só o Executivo administra',
            descricao: 'Legislativo e Judiciário também exercem função administrativa (atípica) ao gerir seus órgãos.',
            dica: 'Todos os poderes administram, mas para o Executivo é função TÍPICA.',
          },
          {
            titulo: 'Confundir sentido subjetivo com objetivo',
            descricao: 'SUBJETIVO = SUJEITOS (quem). OBJETIVO = OBJETO (o quê).',
            dica: 'Subjetivo com S de Sujeito. Objetivo com O de O quê.',
          },
        ],

        mnemonicos: [
          {
            termo: 'EGA',
            significado: 'Estado, Governo, Administração',
            frase: 'EGA: Estado é permanente, Governo é transitório, Administração é instrumental',
          },
          {
            termo: 'PTS',
            significado: 'Povo, Território, Soberania',
            frase: 'Os 3 elementos do Estado: PTS (pts = pontos essenciais)',
          },
          {
            termo: 'SO-QUE',
            significado: 'Subjetivo = Quem / Objetivo = O quê',
            frase: 'SO(bjetivo) = QUEM / O(bjetivo) = O QUE',
          },
          {
            termo: 'LJA',
            significado: 'Legislativa, Jurisdicional, Administrativa',
            frase: 'As 3 funções do Estado: LJA (Loja do Estado)',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-1-1',
            frente: 'Quais são os três ELEMENTOS do Estado?',
            verso: '1. **POVO** - elemento humano\n2. **TERRITÓRIO** - elemento físico\n3. **SOBERANIA** - elemento político\n\nMnemônico: PTS',
            tags: ['Estado', 'elementos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-2',
            frente: 'Qual a diferença entre ESTADO e GOVERNO?',
            verso: '**ESTADO**:\n- Pessoa jurídica\n- PERMANENTE\n- Titular do poder\n\n**GOVERNO**:\n- Atividade política\n- TRANSITÓRIO\n- Exerce o poder',
            tags: ['Estado', 'Governo', 'diferença'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-3',
            frente: 'O que é Administração Pública em sentido SUBJETIVO?',
            verso: '**QUEM** administra:\n- Órgãos públicos\n- Entidades (autarquias, fundações, EP, SEM)\n- Agentes públicos\n\nDica: Subjetivo = Sujeitos',
            tags: ['Administração', 'subjetivo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-4',
            frente: 'O que é Administração Pública em sentido OBJETIVO?',
            verso: '**O QUE** a Administração faz:\n- Fomento\n- Polícia administrativa\n- Serviço público\n- Intervenção no domínio econômico\n\nDica: Objetivo = O quê',
            tags: ['Administração', 'objetivo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-5',
            frente: 'Qual a diferença entre POVO e POPULAÇÃO?',
            verso: '**POVO**: vínculo JURÍDICO (nacionalidade)\n→ Brasileiros natos e naturalizados\n\n**POPULAÇÃO**: vínculo DEMOGRÁFICO\n→ Todas as pessoas no território (inclui estrangeiros)',
            tags: ['povo', 'população', 'pegadinha'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-6',
            frente: 'Quais são as três FUNÇÕES do Estado?',
            verso: '1. **LEGISLATIVA** (típica do Legislativo)\n   → Criar leis\n\n2. **JURISDICIONAL** (típica do Judiciário)\n   → Resolver conflitos definitivamente\n\n3. **ADMINISTRATIVA** (típica do Executivo)\n   → Executar a lei de ofício',
            tags: ['funções', 'Estado'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-7',
            frente: 'Qual função estatal possui DEFINITIVIDADE (coisa julgada)?',
            verso: 'Apenas a **FUNÇÃO JURISDICIONAL** possui definitividade.\n\nA função administrativa pode ser revista pelo Judiciário.\nA função legislativa pode ter leis declaradas inconstitucionais.',
            tags: ['jurisdicional', 'definitividade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-1-8',
            frente: 'Qual a forma e sistema de governo do Brasil?',
            verso: '**Forma de Estado**: FEDERAÇÃO\n**Forma de Governo**: REPÚBLICA\n**Sistema de Governo**: PRESIDENCIALISMO\n\n→ República Federativa Presidencialista',
            tags: ['Brasil', 'governo'],
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
            id: 'da-q-1-1',
            enunciado: 'São elementos constitutivos do Estado:',
            alternativas: [
              { letra: 'A', texto: 'Povo, população e governo.' },
              { letra: 'B', texto: 'Território, administração e jurisdição.' },
              { letra: 'C', texto: 'Povo, território e soberania.' },
              { letra: 'D', texto: 'Governo, administração e soberania.' },
              { letra: 'E', texto: 'Nação, país e república.' },
            ],
            gabarito: 'C',
            justificativa: 'Os três elementos constitutivos do Estado são: POVO (elemento humano), TERRITÓRIO (elemento físico) e SOBERANIA (elemento político). Governo e Administração não são elementos do Estado.',
            dificuldade: 'Fácil',
            competencia: 'Conceito - elementos do Estado',
            banca: 'IADES',
            tags: ['Estado', 'elementos'],
          },
          {
            id: 'da-q-1-2',
            enunciado: 'Acerca das distinções entre Estado, Governo e Administração Pública, assinale a alternativa CORRETA:',
            alternativas: [
              { letra: 'A', texto: 'O Estado é transitório, enquanto o Governo é permanente.' },
              { letra: 'B', texto: 'O Governo possui personalidade jurídica própria.' },
              { letra: 'C', texto: 'A Administração Pública é responsável pela condução política do Estado.' },
              { letra: 'D', texto: 'O Estado é pessoa jurídica de direito público, de caráter permanente.' },
              { letra: 'E', texto: 'A Administração Pública define as políticas públicas a serem implementadas.' },
            ],
            gabarito: 'D',
            justificativa: 'O Estado é pessoa jurídica de direito público permanente. O Governo é transitório (alternativa A invertida). Governo não tem personalidade jurídica (B errada). O Governo conduz politicamente (C errada). Governo define políticas (E errada).',
            dificuldade: 'Média',
            competencia: 'Distinções conceituais',
            banca: 'IADES',
            tags: ['Estado', 'Governo', 'Administração'],
          },
          {
            id: 'da-q-1-3',
            enunciado: 'A Administração Pública, em sentido subjetivo (ou orgânico), compreende:',
            alternativas: [
              { letra: 'A', texto: 'As atividades de fomento e serviço público.' },
              { letra: 'B', texto: 'Os órgãos, entidades e agentes públicos que exercem a função administrativa.' },
              { letra: 'C', texto: 'A intervenção estatal no domínio econômico.' },
              { letra: 'D', texto: 'O exercício do poder de polícia administrativa.' },
              { letra: 'E', texto: 'A prestação de serviços públicos à coletividade.' },
            ],
            gabarito: 'B',
            justificativa: 'Sentido SUBJETIVO (orgânico) refere-se a QUEM exerce a função administrativa: órgãos, entidades e agentes. As demais alternativas referem-se ao sentido OBJETIVO (o que a Administração faz).',
            dificuldade: 'Média',
            competencia: 'Sentidos da Administração',
            banca: 'IADES',
            tags: ['subjetivo', 'orgânico'],
          },
          {
            id: 'da-q-1-4',
            enunciado: 'Sobre o conceito de povo como elemento do Estado, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'Abrange todas as pessoas que se encontram no território, independentemente de nacionalidade.' },
              { letra: 'B', texto: 'Refere-se exclusivamente aos brasileiros natos.' },
              { letra: 'C', texto: 'Corresponde ao conjunto de pessoas vinculadas ao Estado pelo vínculo da nacionalidade.' },
              { letra: 'D', texto: 'É sinônimo de população.' },
              { letra: 'E', texto: 'Inclui os estrangeiros residentes no país.' },
            ],
            gabarito: 'C',
            justificativa: 'POVO é o conjunto de pessoas vinculadas ao Estado pelo vínculo JURÍDICO da nacionalidade (brasileiros natos e naturalizados). POPULAÇÃO é conceito demográfico. A alternativa B é restritiva demais (inclui naturalizados).',
            dificuldade: 'Média',
            competencia: 'Conceito de povo',
            banca: 'IADES',
            tags: ['povo', 'nacionalidade'],
          },
          {
            id: 'da-q-1-5',
            enunciado: 'A função estatal que possui como característica a definitividade (coisa julgada) é a função:',
            alternativas: [
              { letra: 'A', texto: 'Administrativa.' },
              { letra: 'B', texto: 'Legislativa.' },
              { letra: 'C', texto: 'Governamental.' },
              { letra: 'D', texto: 'Jurisdicional.' },
              { letra: 'E', texto: 'Executiva.' },
            ],
            gabarito: 'D',
            justificativa: 'Apenas a função JURISDICIONAL possui definitividade, produzindo coisa julgada. A função administrativa pode ser revista pelo Judiciário, e a legislativa pode ter leis declaradas inconstitucionais.',
            dificuldade: 'Fácil',
            competencia: 'Funções do Estado',
            banca: 'IADES',
            tags: ['jurisdicional', 'coisa julgada'],
          },
          {
            id: 'da-q-1-6',
            enunciado: 'O Brasil adota como forma de Estado, forma de governo e sistema de governo, respectivamente:',
            alternativas: [
              { letra: 'A', texto: 'República, Federação e Presidencialismo.' },
              { letra: 'B', texto: 'Federação, República e Presidencialismo.' },
              { letra: 'C', texto: 'Federação, Monarquia e Parlamentarismo.' },
              { letra: 'D', texto: 'Estado Unitário, República e Presidencialismo.' },
              { letra: 'E', texto: 'Confederação, República e Parlamentarismo.' },
            ],
            gabarito: 'B',
            justificativa: 'Brasil: FEDERAÇÃO (forma de Estado), REPÚBLICA (forma de governo) e PRESIDENCIALISMO (sistema de governo). A alternativa A inverte forma de Estado com forma de governo.',
            dificuldade: 'Média',
            competencia: 'Organização do Estado brasileiro',
            banca: 'IADES',
            tags: ['Brasil', 'federação', 'república'],
          },
          {
            id: 'da-q-1-7',
            enunciado: 'O exercício da função administrativa pelo Poder Judiciário, ao realizar concurso público para seus servidores, configura:',
            alternativas: [
              { letra: 'A', texto: 'Função típica do Judiciário.' },
              { letra: 'B', texto: 'Invasão de competência do Poder Executivo.' },
              { letra: 'C', texto: 'Função atípica do Poder Judiciário.' },
              { letra: 'D', texto: 'Ato inconstitucional por violar a separação de poderes.' },
              { letra: 'E', texto: 'Ato de governo de natureza política.' },
            ],
            gabarito: 'C',
            justificativa: 'Quando o Judiciário administra (realiza licitações, concursos, gestão de pessoal), exerce função ATÍPICA administrativa. Sua função TÍPICA é julgar. Isso não viola a separação de poderes.',
            dificuldade: 'Média',
            competencia: 'Funções típicas e atípicas',
            banca: 'IADES',
            tags: ['função atípica', 'Judiciário'],
          },
          {
            id: 'da-q-1-8',
            enunciado: 'A fiscalização sanitária exercida pelo Fiscal de Saúde Pública representa, no âmbito da organização administrativa:',
            alternativas: [
              { letra: 'A', texto: 'Exercício de função legislativa atípica.' },
              { letra: 'B', texto: 'Ato de governo de natureza política.' },
              { letra: 'C', texto: 'Exercício do poder de polícia administrativa.' },
              { letra: 'D', texto: 'Função jurisdicional do Estado.' },
              { letra: 'E', texto: 'Atividade exclusiva do Poder Legislativo.' },
            ],
            gabarito: 'C',
            justificativa: 'A fiscalização sanitária é manifestação do PODER DE POLÍCIA administrativa, que limita direitos individuais em prol do interesse coletivo (saúde pública). É função administrativa típica do Executivo.',
            dificuldade: 'Fácil',
            competencia: 'Poder de polícia',
            banca: 'IADES',
            tags: ['fiscalização', 'poder de polícia', 'vigilância sanitária'],
          },
          {
            id: 'da-q-1-9',
            enunciado: 'Quanto às características da função administrativa, é INCORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'É exercida preponderantemente pelo Poder Executivo.' },
              { letra: 'B', texto: 'Consiste na aplicação da lei de ofício.' },
              { letra: 'C', texto: 'Seus atos podem ser revistos pelo Poder Judiciário.' },
              { letra: 'D', texto: 'Produz decisões com força de coisa julgada material.' },
              { letra: 'E', texto: 'Visa à satisfação do interesse público.' },
            ],
            gabarito: 'D',
            justificativa: 'A função administrativa NÃO produz coisa julgada (definitividade). Apenas a função jurisdicional possui essa característica. Os atos administrativos podem sempre ser revistos pelo Judiciário.',
            dificuldade: 'Média',
            competencia: 'Função administrativa',
            banca: 'IADES',
            tags: ['função administrativa', 'coisa julgada'],
          },
          {
            id: 'da-q-1-10',
            enunciado: 'A soberania, como elemento do Estado, caracteriza-se por:',
            alternativas: [
              { letra: 'A', texto: 'Subordinação a organismos internacionais.' },
              { letra: 'B', texto: 'Independência na ordem internacional e supremacia na ordem interna.' },
              { letra: 'C', texto: 'Limitação pelos poderes dos estados-membros da Federação.' },
              { letra: 'D', texto: 'Submissão obrigatória às decisões de outros Estados.' },
              { letra: 'E', texto: 'Exercício exclusivo pelo Poder Judiciário.' },
            ],
            gabarito: 'B',
            justificativa: 'SOBERANIA possui duas dimensões: INDEPENDÊNCIA na ordem internacional (não se submete a outros Estados) e SUPREMACIA na ordem interna (poder maior dentro do território). Os estados-membros têm autonomia, não soberania.',
            dificuldade: 'Média',
            competencia: 'Soberania',
            banca: 'IADES',
            tags: ['soberania', 'elementos do Estado'],
          },
        ],
      },
    },
    {
      id: 'da-topico-2',
      numero: 2,
      titulo: 'Direito Administrativo: Conceito, Objeto e Fontes',
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
          'Direito Administrativo = ramo do DIREITO PÚBLICO interno',
          'Objeto = Administração Pública (órgãos, agentes, atividades)',
          'Característica: NÃO CODIFICADO (não existe Código Administrativo)',
          'Fonte PRIMÁRIA e principal = LEI',
          'Fontes secundárias = doutrina, jurisprudência, costumes, princípios',
          'Hierarquia: CF → LC → LO → Decretos → Resoluções/Portarias',
          'Regime jurídico-administrativo = PRERROGATIVAS + SUJEIÇÕES',
          'Prerrogativas decorrem da SUPREMACIA do interesse público',
          'Sujeições decorrem da INDISPONIBILIDADE do interesse público',
          'Fiscalização sanitária = exercício do poder de polícia administrativa',
        ],

        armadilhas: [
          {
            titulo: 'Achar que existe Código Administrativo',
            descricao: 'O Direito Administrativo brasileiro NÃO é codificado. Existem leis esparsas.',
            dica: 'Diferente do Direito Civil e Penal, não temos "Código Administrativo".',
          },
          {
            titulo: 'Confundir fontes primárias com secundárias',
            descricao: 'Apenas a LEI é fonte primária. Doutrina e jurisprudência são secundárias.',
            dica: 'Fonte primária CRIA o direito. Secundária INTERPRETA.',
          },
          {
            titulo: 'Inverter prerrogativas e sujeições',
            descricao: 'Prerrogativas = poderes. Sujeições = limitações.',
            dica: 'Prerrogativa vem de "privilegium" (privilégio). Sujeição é submissão.',
          },
          {
            titulo: 'Aceitar costume contra legem',
            descricao: 'Costume contrário à lei NÃO é válido no Direito Administrativo.',
            dica: 'A Administração deve obediência estrita à lei (legalidade).',
          },
        ],

        mnemonicos: [
          {
            termo: 'PIN-SUP',
            significado: 'Prerrogativas vêm da Supremacia; Sujeições vêm da Indisponibilidade',
            frase: 'PIN-SUP: Prerrogativas = Supremacia, Sujeições = indisponibilidade',
          },
          {
            termo: 'LDJCP',
            significado: 'Lei, Doutrina, Jurisprudência, Costumes, Princípios',
            frase: 'Fontes do Dir. Adm.: LDJCP (Lei é a principal)',
          },
          {
            termo: 'CF-LC-LO-D-R',
            significado: 'Constituição, Lei Complementar, Lei Ordinária, Decreto, Resolução',
            frase: 'Hierarquia normativa: CF-LC-LO-D-R (do maior ao menor)',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-2-1',
            frente: 'O que é Direito Administrativo?',
            verso: '**Ramo do DIREITO PÚBLICO** que regula a organização e a atividade da Administração Pública.\n\nCaracterísticas:\n- Direito público INTERNO\n- NÃO codificado\n- Regime de prerrogativas e sujeições',
            tags: ['conceito', 'direito público'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-2',
            frente: 'Qual é o OBJETO do Direito Administrativo?',
            verso: 'A **ADMINISTRAÇÃO PÚBLICA** em todos os seus aspectos:\n\n**Subjetivo (quem):**\n- Órgãos, entidades, agentes\n\n**Objetivo (o quê):**\n- Atividade administrativa\n- Serviços públicos\n- Poder de polícia',
            tags: ['objeto', 'administração'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-3',
            frente: 'Qual é a fonte PRIMÁRIA do Direito Administrativo?',
            verso: 'A **LEI** é a fonte primária e principal.\n\nHierarquia:\n1. Constituição Federal\n2. Emendas Constitucionais\n3. Leis Complementares\n4. Leis Ordinárias\n5. Decretos\n6. Resoluções/Portarias',
            tags: ['fontes', 'lei'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-4',
            frente: 'Quais são as fontes SECUNDÁRIAS do Direito Administrativo?',
            verso: '**Fontes secundárias:**\n\n1. **DOUTRINA**: estudos de juristas\n2. **JURISPRUDÊNCIA**: decisões dos tribunais\n3. **COSTUMES**: praxe administrativa\n4. **PRINCÍPIOS GERAIS**: boa-fé, proporcionalidade\n\nNão CRIAM direito, apenas interpretam.',
            tags: ['fontes', 'secundárias'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-5',
            frente: 'O Direito Administrativo brasileiro é codificado?',
            verso: '**NÃO!**\n\nO Direito Administrativo brasileiro é parcialmente legislado, mas NÃO codificado.\n\nNão existe um "Código Administrativo".\n\nAs normas estão em leis esparsas:\n- CF/88 (art. 37+)\n- Lei 8.112/90\n- Lei 14.133/21\n- Lei 9.784/99',
            tags: ['codificação', 'leis'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-6',
            frente: 'O que é o regime jurídico-administrativo?',
            verso: 'É o conjunto de **PRERROGATIVAS e SUJEIÇÕES** da Administração.\n\n**PRERROGATIVAS** (poderes):\n→ Supremacia do interesse público\n\n**SUJEIÇÕES** (limitações):\n→ Indisponibilidade do interesse público\n\nBinômio: poder + limite',
            tags: ['regime jurídico', 'prerrogativas'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-7',
            frente: 'O costume pode ser fonte do Direito Administrativo?',
            verso: '**Sim, mas com limitações:**\n\n✅ **Secundum legem**: conforme a lei = válido\n⚠️ **Praeter legem**: preenche lacuna = discutível\n❌ **Contra legem**: contrário à lei = INVÁLIDO\n\nO princípio da legalidade limita o costume.',
            tags: ['costumes', 'fontes'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-2-8',
            frente: 'Dê exemplos de prerrogativas e sujeições da Administração.',
            verso: '**PRERROGATIVAS:**\n- Autotutela (anular próprios atos)\n- Autoexecutoriedade\n- Imperatividade\n- Presunção de legitimidade\n\n**SUJEIÇÕES:**\n- Licitação obrigatória\n- Concurso público\n- Motivação dos atos\n- Responsabilidade objetiva',
            tags: ['prerrogativas', 'sujeições'],
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
            id: 'da-q-2-1',
            enunciado: 'O Direito Administrativo é ramo do:',
            alternativas: [
              { letra: 'A', texto: 'Direito privado, por regular relações entre particulares.' },
              { letra: 'B', texto: 'Direito público interno, regulando a Administração Pública.' },
              { letra: 'C', texto: 'Direito internacional, por ter aplicação mundial.' },
              { letra: 'D', texto: 'Direito comercial, por regular atividades econômicas.' },
              { letra: 'E', texto: 'Direito misto, com natureza pública e privada.' },
            ],
            gabarito: 'B',
            justificativa: 'O Direito Administrativo é ramo do DIREITO PÚBLICO interno, pois regula a organização e a atividade da Administração Pública dentro do território nacional, com supremacia do interesse público.',
            dificuldade: 'Fácil',
            competencia: 'Natureza do Direito Administrativo',
            banca: 'IADES',
            tags: ['conceito', 'direito público'],
          },
          {
            id: 'da-q-2-2',
            enunciado: 'Sobre as fontes do Direito Administrativo, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'A doutrina é a fonte primária e mais importante.' },
              { letra: 'B', texto: 'A lei é a fonte primária, e doutrina e jurisprudência são secundárias.' },
              { letra: 'C', texto: 'A jurisprudência tem força de lei e cria normas obrigatórias.' },
              { letra: 'D', texto: 'Os costumes contra legem são válidos quando consolidados.' },
              { letra: 'E', texto: 'Não existem fontes secundárias no Direito Administrativo.' },
            ],
            gabarito: 'B',
            justificativa: 'A LEI é a fonte primária do Direito Administrativo. Doutrina, jurisprudência, costumes e princípios são fontes secundárias que interpretam e complementam, mas não criam normas jurídicas.',
            dificuldade: 'Fácil',
            competencia: 'Fontes do Direito Administrativo',
            banca: 'IADES',
            tags: ['fontes', 'lei'],
          },
          {
            id: 'da-q-2-3',
            enunciado: 'O objeto do Direito Administrativo é:',
            alternativas: [
              { letra: 'A', texto: 'Exclusivamente as relações entre particulares.' },
              { letra: 'B', texto: 'A Administração Pública, seus órgãos, agentes e atividades.' },
              { letra: 'C', texto: 'Apenas os crimes contra a Administração Pública.' },
              { letra: 'D', texto: 'As relações internacionais do Estado brasileiro.' },
              { letra: 'E', texto: 'Somente as empresas estatais e suas atividades.' },
            ],
            gabarito: 'B',
            justificativa: 'O objeto do Direito Administrativo é a Administração Pública em todos os seus aspectos: órgãos, entidades, agentes públicos e suas atividades (serviços públicos, poder de polícia, fomento, intervenção).',
            dificuldade: 'Fácil',
            competencia: 'Objeto do Direito Administrativo',
            banca: 'IADES',
            tags: ['objeto', 'administração'],
          },
          {
            id: 'da-q-2-4',
            enunciado: 'O Direito Administrativo brasileiro caracteriza-se por ser:',
            alternativas: [
              { letra: 'A', texto: 'Codificado em um único diploma legal.' },
              { letra: 'B', texto: 'Não codificado, com normas em diversas leis esparsas.' },
              { letra: 'C', texto: 'Baseado exclusivamente em costumes.' },
              { letra: 'D', texto: 'Ramo do direito privado.' },
              { letra: 'E', texto: 'Imutável desde a Constituição de 1988.' },
            ],
            gabarito: 'B',
            justificativa: 'O Direito Administrativo brasileiro é NÃO CODIFICADO. Não existe um "Código Administrativo". As normas estão dispersas em diversas leis (CF/88, Lei 8.112/90, Lei 14.133/21, etc.).',
            dificuldade: 'Fácil',
            competencia: 'Características',
            banca: 'IADES',
            tags: ['codificação', 'características'],
          },
          {
            id: 'da-q-2-5',
            enunciado: 'O regime jurídico-administrativo é composto por:',
            alternativas: [
              { letra: 'A', texto: 'Apenas prerrogativas, sem limitações.' },
              { letra: 'B', texto: 'Apenas sujeições, sem poderes especiais.' },
              { letra: 'C', texto: 'Prerrogativas (poderes) e sujeições (limitações).' },
              { letra: 'D', texto: 'Normas de direito privado aplicadas ao Estado.' },
              { letra: 'E', texto: 'Exclusivamente a Constituição Federal.' },
            ],
            gabarito: 'C',
            justificativa: 'O regime jurídico-administrativo é o binômio PRERROGATIVAS (poderes especiais decorrentes da supremacia do interesse público) e SUJEIÇÕES (limitações decorrentes da indisponibilidade do interesse público).',
            dificuldade: 'Média',
            competencia: 'Regime jurídico-administrativo',
            banca: 'IADES',
            tags: ['regime jurídico', 'prerrogativas'],
          },
          {
            id: 'da-q-2-6',
            enunciado: 'A hierarquia normativa no Direito Administrativo estabelece que:',
            alternativas: [
              { letra: 'A', texto: 'Decretos prevalecem sobre leis ordinárias.' },
              { letra: 'B', texto: 'Resoluções têm força de Emenda Constitucional.' },
              { letra: 'C', texto: 'A Constituição é a norma suprema, seguida de leis e decretos.' },
              { letra: 'D', texto: 'Não existe hierarquia entre as normas administrativas.' },
              { letra: 'E', texto: 'Portarias prevalecem sobre a Constituição.' },
            ],
            gabarito: 'C',
            justificativa: 'A hierarquia normativa é: CF (suprema) → EC → LC → LO → MP → Decretos → Resoluções/Portarias. Normas inferiores devem respeitar as superiores.',
            dificuldade: 'Fácil',
            competencia: 'Hierarquia normativa',
            banca: 'IADES',
            tags: ['hierarquia', 'normas'],
          },
          {
            id: 'da-q-2-7',
            enunciado: 'Sobre os costumes como fonte do Direito Administrativo, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'Costumes contrários à lei são aceitos se reiterados.' },
              { letra: 'B', texto: 'Não são considerados fontes em nenhuma hipótese.' },
              { letra: 'C', texto: 'São fonte secundária e não podem contrariar a lei.' },
              { letra: 'D', texto: 'Substituem a lei quando mais convenientes.' },
              { letra: 'E', texto: 'São fonte primária, assim como a lei.' },
            ],
            gabarito: 'C',
            justificativa: 'Os costumes são fonte SECUNDÁRIA do Direito Administrativo. Podem ser aceitos quando conformes à lei (secundum legem) ou para preencher lacunas (praeter legem), mas NUNCA contra a lei (contra legem).',
            dificuldade: 'Média',
            competencia: 'Costumes como fonte',
            banca: 'IADES',
            tags: ['costumes', 'fontes'],
          },
          {
            id: 'da-q-2-8',
            enunciado: 'São exemplos de PRERROGATIVAS da Administração Pública:',
            alternativas: [
              { letra: 'A', texto: 'Obrigatoriedade de licitação e concurso público.' },
              { letra: 'B', texto: 'Autoexecutoriedade, imperatividade e autotutela.' },
              { letra: 'C', texto: 'Motivação dos atos e controle pelo Tribunal de Contas.' },
              { letra: 'D', texto: 'Responsabilidade civil objetiva e publicidade.' },
              { letra: 'E', texto: 'Observância do devido processo legal.' },
            ],
            gabarito: 'B',
            justificativa: 'PRERROGATIVAS são poderes especiais da Administração: autoexecutoriedade (executar sem Judiciário), imperatividade (impor obrigações), autotutela (revisar próprios atos). As demais opções são SUJEIÇÕES (limitações).',
            dificuldade: 'Média',
            competencia: 'Prerrogativas',
            banca: 'IADES',
            tags: ['prerrogativas', 'regime jurídico'],
          },
          {
            id: 'da-q-2-9',
            enunciado: 'A fiscalização sanitária exercida pelo Fiscal de Saúde Pública fundamenta-se, no Direito Administrativo, no conceito de:',
            alternativas: [
              { letra: 'A', texto: 'Fomento público.' },
              { letra: 'B', texto: 'Intervenção no domínio econômico.' },
              { letra: 'C', texto: 'Poder de polícia administrativa.' },
              { letra: 'D', texto: 'Serviço público essencial.' },
              { letra: 'E', texto: 'Ato jurisdicional.' },
            ],
            gabarito: 'C',
            justificativa: 'A fiscalização sanitária é manifestação do PODER DE POLÍCIA administrativa, que permite à Administração limitar direitos individuais em prol do interesse coletivo (saúde pública).',
            dificuldade: 'Fácil',
            competencia: 'Poder de polícia',
            banca: 'IADES',
            tags: ['poder de polícia', 'vigilância sanitária'],
          },
          {
            id: 'da-q-2-10',
            enunciado: 'As SUJEIÇÕES a que se submete a Administração Pública decorrem do princípio da:',
            alternativas: [
              { letra: 'A', texto: 'Supremacia do interesse público.' },
              { letra: 'B', texto: 'Indisponibilidade do interesse público.' },
              { letra: 'C', texto: 'Autotutela administrativa.' },
              { letra: 'D', texto: 'Presunção de legitimidade.' },
              { letra: 'E', texto: 'Autoexecutoriedade.' },
            ],
            gabarito: 'B',
            justificativa: 'As SUJEIÇÕES (licitação, concurso, motivação) decorrem da INDISPONIBILIDADE do interesse público, que impede o administrador de dispor livremente dos bens e interesses públicos. As prerrogativas decorrem da supremacia.',
            dificuldade: 'Média',
            competencia: 'Sujeições',
            banca: 'IADES',
            tags: ['sujeições', 'indisponibilidade'],
          },
        ],
      },
    },
    {
      id: 'da-topico-3',
      numero: 3,
      titulo: 'Ato administrativo: conceito, requisitos, atributos, classificação, espécies, extinção e decadência',
      conteudo: {
        resumo: `
## Resumo Rápido

### Conceito de Ato Administrativo

**Ato administrativo** é toda manifestação unilateral de vontade da Administração Pública que, agindo nessa qualidade, tenha por fim imediato adquirir, resguardar, transferir, modificar, extinguir e declarar direitos, ou impor obrigações.

### Os 5 Requisitos (Elementos) - COMFIFORM

| Requisito | O que é | Vício = |
|-----------|---------|---------|
| **CO**mpetência | Quem pode praticar | Excesso de poder |
| **M**otivo | Por que foi praticado | Ausência de motivação |
| **FI**nalidade | Para que foi praticado | Desvio de poder |
| **FOR**ma | Como foi praticado | Vício de forma |
| **M**otivo → Objeto | O que foi praticado | Objeto ilícito |

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
          'Requisitos (COMFIFORM): Competência, Motivo, Finalidade, Forma, Objeto',
          'Competência e Finalidade são SEMPRE vinculados',
          'Excesso de poder = vício de COMPETÊNCIA; Desvio de poder = vício de FINALIDADE',
          'Atributos (PATI): Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade',
          'Presunção de legitimidade: relativa (juris tantum), presente em TODOS os atos',
          'Mérito administrativo: conveniência e oportunidade, NÃO controlado pelo Judiciário',
          'Anulação: ilegalidade, ex tunc, prazo de 5 anos (decadência)',
          'Revogação: conveniência, ex nunc, só pela Administração, sem prazo',
          'Súmula 473/STF: autotutela (anular ou revogar próprios atos)',
          'Licença = vinculada; Autorização e Permissão = discricionárias',
        ],

        armadilhas: [
          {
            titulo: 'Confundir excesso com desvio de poder',
            descricao: 'Excesso = competência (agente não tem poder). Desvio = finalidade (usa poder para fim diverso).',
            dica: 'Excesso = Extrapola competência. Desvio = Desvia a finalidade.',
          },
          {
            titulo: 'Achar que Judiciário pode revogar ato',
            descricao: 'Revogação é exclusiva da Administração. Judiciário só ANULA (por ilegalidade).',
            dica: 'Judiciário julga LEGALIDADE, não mérito.',
          },
          {
            titulo: 'Confundir efeitos de anulação e revogação',
            descricao: 'Anulação = ex tunc (retroage). Revogação = ex nunc (não retroage).',
            dica: 'Anulação apaga o passado (TUnc). Revogação só vale daqui pra frente (NUnc).',
          },
          {
            titulo: 'Esquecer o prazo de decadência',
            descricao: 'A Administração tem 5 anos para anular atos que geram efeitos favoráveis.',
            dica: 'Lei 9.784, art. 54: 5 anos para anular, salvo má-fé.',
          },
        ],

        mnemonicos: [
          {
            termo: 'COMFIFORM',
            significado: 'COmpetência, Motivo, FInalidade, FORma, Motivo→Objeto',
            frase: 'Os 5 requisitos do ato: COMFIFORM',
          },
          {
            termo: 'PATI',
            significado: 'Presunção, Autoexecutoriedade, Tipicidade, Imperatividade',
            frase: 'Os atributos do ato: PATI',
          },
          {
            termo: 'ED-CF',
            significado: 'Excesso=Competência, Desvio=Finalidade',
            frase: 'Abuso de poder: Excesso (C), Desvio (F)',
          },
          {
            termo: 'A-TUnc R-NUnc',
            significado: 'Anulação=ex tunc, Revogação=ex nunc',
            frase: 'Anula retroage (tunc), Revoga não (nunc)',
          },
        ],

        flashcards: [
          {
            id: 'da-fc-3-1',
            frente: 'Quais são os 5 REQUISITOS (elementos) do ato administrativo?',
            verso: '**COMFIFORM:**\n\n1. **CO**mpetência - Quem\n2. **M**otivo - Por quê\n3. **FI**nalidade - Para quê\n4. **FOR**ma - Como\n5. Objeto - O quê\n\nCompetência e Finalidade são SEMPRE vinculados.',
            tags: ['requisitos', 'ato administrativo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-2',
            frente: 'Quais são os 4 ATRIBUTOS do ato administrativo?',
            verso: '**PATI:**\n\n1. **P**resunção de legitimidade (relativa)\n2. **A**utoexecutoriedade (executar sem Judiciário)\n3. **T**ipicidade (previsto em lei)\n4. **I**mperatividade (impor obrigações)\n\nPresunção está em TODOS os atos.',
            tags: ['atributos', 'ato administrativo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-3',
            frente: 'Qual a diferença entre EXCESSO e DESVIO de poder?',
            verso: '**EXCESSO de poder:**\n- Vício de COMPETÊNCIA\n- Agente extrapola suas atribuições\n\n**DESVIO de poder:**\n- Vício de FINALIDADE\n- Agente usa competência para fim diverso\n\nAmbos = ABUSO DE PODER',
            tags: ['abuso de poder', 'vícios'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-4',
            frente: 'Qual a diferença entre ANULAÇÃO e REVOGAÇÃO?',
            verso: '**ANULAÇÃO:**\n- Motivo: ILEGALIDADE\n- Efeitos: ex TUNC (retroage)\n- Quem: Administração OU Judiciário\n\n**REVOGAÇÃO:**\n- Motivo: CONVENIÊNCIA\n- Efeitos: ex NUNC (não retroage)\n- Quem: SÓ Administração',
            tags: ['extinção', 'anulação', 'revogação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-5',
            frente: 'O que diz a Súmula 473 do STF?',
            verso: '**AUTOTUTELA:**\n\nA Administração PODE:\n- **ANULAR** atos ilegais (não geram direitos)\n- **REVOGAR** atos legais por conveniência\n\nDevem ser respeitados os direitos adquiridos.',
            tags: ['Súmula 473', 'autotutela'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-6',
            frente: 'O que é a DECADÊNCIA administrativa (Lei 9.784)?',
            verso: '**Art. 54:**\n\nA Administração tem **5 ANOS** para anular atos que produzam efeitos FAVORÁVEIS.\n\nApós 5 anos: ato se torna ESTÁVEL.\n\n**Exceção:** má-fé do beneficiário (não há prazo).',
            tags: ['decadência', 'prazo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-7',
            frente: 'Qual a diferença entre LICENÇA e AUTORIZAÇÃO?',
            verso: '**LICENÇA:**\n- Ato VINCULADO\n- Definitivo (só anulável)\n- Direito subjetivo\n- Ex: licença para construir\n\n**AUTORIZAÇÃO:**\n- Ato DISCRICIONÁRIO\n- PRECÁRIO (revogável)\n- Interesse do particular\n- Ex: autorização para evento',
            tags: ['licença', 'autorização'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'da-fc-3-8',
            frente: 'O que é MÉRITO ADMINISTRATIVO?',
            verso: '**Mérito** = juízo de CONVENIÊNCIA e OPORTUNIDADE.\n\nPresente nos atos DISCRICIONÁRIOS.\n\n⚠️ O Judiciário NÃO pode controlar o mérito!\n\nJudiciário controla apenas LEGALIDADE.',
            tags: ['mérito', 'discricionariedade'],
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
            id: 'da-q-3-1',
            enunciado: 'São requisitos (elementos) de validade do ato administrativo:',
            alternativas: [
              { letra: 'A', texto: 'Presunção de legitimidade, autoexecutoriedade, tipicidade e imperatividade.' },
              { letra: 'B', texto: 'Competência, finalidade, forma, motivo e objeto.' },
              { letra: 'C', texto: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
              { letra: 'D', texto: 'Anulação, revogação, cassação e caducidade.' },
              { letra: 'E', texto: 'Licença, autorização, permissão e admissão.' },
            ],
            gabarito: 'B',
            justificativa: 'Os requisitos (elementos) do ato administrativo são: Competência, Finalidade, Forma, Motivo e Objeto (COMFIFORM). A alternativa A traz os ATRIBUTOS, não os requisitos.',
            dificuldade: 'Fácil',
            competencia: 'Requisitos do ato',
            banca: 'IADES',
            tags: ['requisitos', 'elementos'],
          },
          {
            id: 'da-q-3-2',
            enunciado: 'O vício de FINALIDADE no ato administrativo caracteriza o chamado:',
            alternativas: [
              { letra: 'A', texto: 'Excesso de poder.' },
              { letra: 'B', texto: 'Desvio de poder.' },
              { letra: 'C', texto: 'Abuso de autoridade.' },
              { letra: 'D', texto: 'Incompetência absoluta.' },
              { letra: 'E', texto: 'Vício de forma.' },
            ],
            gabarito: 'B',
            justificativa: 'O DESVIO DE PODER é o vício de finalidade, quando o agente usa sua competência para fim diverso do previsto em lei. O excesso de poder é vício de COMPETÊNCIA.',
            dificuldade: 'Média',
            competencia: 'Vícios do ato',
            banca: 'IADES',
            tags: ['desvio de poder', 'finalidade'],
          },
          {
            id: 'da-q-3-3',
            enunciado: 'A presunção de legitimidade dos atos administrativos é considerada:',
            alternativas: [
              { letra: 'A', texto: 'Absoluta, não admitindo prova em contrário.' },
              { letra: 'B', texto: 'Relativa, admitindo prova em contrário pelo interessado.' },
              { letra: 'C', texto: 'Inexistente, dependendo de confirmação judicial.' },
              { letra: 'D', texto: 'Aplicável apenas aos atos vinculados.' },
              { letra: 'E', texto: 'Dispensável nos atos discricionários.' },
            ],
            gabarito: 'B',
            justificativa: 'A presunção de legitimidade é RELATIVA (juris tantum), admitindo prova em contrário. Ela inverte o ônus da prova, cabendo ao particular demonstrar eventual ilegalidade.',
            dificuldade: 'Fácil',
            competencia: 'Presunção de legitimidade',
            banca: 'IADES',
            tags: ['presunção', 'atributo'],
          },
          {
            id: 'da-q-3-4',
            enunciado: 'Sobre a anulação e a revogação dos atos administrativos, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'Ambas podem ser realizadas pelo Poder Judiciário.' },
              { letra: 'B', texto: 'A anulação opera efeitos ex nunc e a revogação ex tunc.' },
              { letra: 'C', texto: 'A anulação decorre de ilegalidade e produz efeitos ex tunc.' },
              { letra: 'D', texto: 'A revogação atinge atos ilegais e a anulação atos inconvenientes.' },
              { letra: 'E', texto: 'Não há diferença prática entre anulação e revogação.' },
            ],
            gabarito: 'C',
            justificativa: 'A ANULAÇÃO decorre de ILEGALIDADE e opera efeitos EX TUNC (retroativos). A revogação decorre de conveniência e opera efeitos EX NUNC (não retroativos). Só a Administração revoga.',
            dificuldade: 'Média',
            competencia: 'Anulação e revogação',
            banca: 'IADES',
            tags: ['anulação', 'revogação'],
          },
          {
            id: 'da-q-3-5',
            enunciado: 'De acordo com a Lei 9.784/99, o direito da Administração de anular atos administrativos de que decorram efeitos favoráveis decai em:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '2 anos.' },
              { letra: 'C', texto: '3 anos.' },
              { letra: 'D', texto: '5 anos.' },
              { letra: 'E', texto: '10 anos.' },
            ],
            gabarito: 'D',
            justificativa: 'Conforme o art. 54 da Lei 9.784/99, o direito da Administração de anular atos que produzam efeitos favoráveis DECAI em 5 ANOS, salvo comprovada má-fé.',
            dificuldade: 'Fácil',
            competencia: 'Decadência administrativa',
            banca: 'IADES',
            tags: ['decadência', 'prazo'],
          },
          {
            id: 'da-q-3-6',
            enunciado: 'O atributo do ato administrativo que permite à Administração executar diretamente suas decisões, sem necessidade de autorização judicial, denomina-se:',
            alternativas: [
              { letra: 'A', texto: 'Presunção de legitimidade.' },
              { letra: 'B', texto: 'Imperatividade.' },
              { letra: 'C', texto: 'Autoexecutoriedade.' },
              { letra: 'D', texto: 'Tipicidade.' },
              { letra: 'E', texto: 'Coercibilidade.' },
            ],
            gabarito: 'C',
            justificativa: 'A AUTOEXECUTORIEDADE permite que a Administração execute suas decisões diretamente, sem recorrer ao Judiciário. Exemplo: interdição de estabelecimento, demolição de obra irregular.',
            dificuldade: 'Fácil',
            competencia: 'Atributos',
            banca: 'IADES',
            tags: ['autoexecutoriedade', 'atributo'],
          },
          {
            id: 'da-q-3-7',
            enunciado: 'A licença administrativa caracteriza-se por ser um ato:',
            alternativas: [
              { letra: 'A', texto: 'Discricionário e precário.' },
              { letra: 'B', texto: 'Vinculado e definitivo.' },
              { letra: 'C', texto: 'Complexo e revogável.' },
              { letra: 'D', texto: 'Normativo e abstrato.' },
              { letra: 'E', texto: 'Enunciativo e bilateral.' },
            ],
            gabarito: 'B',
            justificativa: 'A LICENÇA é ato VINCULADO (cumpridos os requisitos legais, deve ser concedida) e DEFINITIVO (só pode ser anulada, não revogada). Já a autorização é discricionária e precária.',
            dificuldade: 'Média',
            competencia: 'Espécies de atos',
            banca: 'IADES',
            tags: ['licença', 'vinculado'],
          },
          {
            id: 'da-q-3-8',
            enunciado: 'A Súmula 473 do STF consagra o princípio da:',
            alternativas: [
              { letra: 'A', texto: 'Legalidade.' },
              { letra: 'B', texto: 'Impessoalidade.' },
              { letra: 'C', texto: 'Autotutela.' },
              { letra: 'D', texto: 'Eficiência.' },
              { letra: 'E', texto: 'Publicidade.' },
            ],
            gabarito: 'C',
            justificativa: 'A Súmula 473/STF consagra a AUTOTUTELA: a Administração pode anular seus atos ilegais ou revogá-los por conveniência, respeitados os direitos adquiridos.',
            dificuldade: 'Média',
            competencia: 'Súmula 473',
            banca: 'IADES',
            tags: ['Súmula 473', 'autotutela'],
          },
          {
            id: 'da-q-3-9',
            enunciado: 'No exercício do poder de polícia sanitária, o fiscal que interdita um estabelecimento por motivo de vingança pessoal, ainda que exista irregularidade sanitária, pratica:',
            alternativas: [
              { letra: 'A', texto: 'Ato regular de polícia.' },
              { letra: 'B', texto: 'Excesso de poder.' },
              { letra: 'C', texto: 'Desvio de poder.' },
              { letra: 'D', texto: 'Ato vinculado legítimo.' },
              { letra: 'E', texto: 'Exercício regular de direito.' },
            ],
            gabarito: 'C',
            justificativa: 'Quando o agente usa sua competência para fim diverso do previsto (vingança pessoal em vez de proteção à saúde pública), há DESVIO DE PODER (vício de finalidade), mesmo que haja irregularidade.',
            dificuldade: 'Média',
            competencia: 'Desvio de poder',
            banca: 'IADES',
            tags: ['desvio de poder', 'vigilância sanitária'],
          },
          {
            id: 'da-q-3-10',
            enunciado: 'Sobre o mérito administrativo, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'Pode ser controlado amplamente pelo Poder Judiciário.' },
              { letra: 'B', texto: 'Está presente em todos os atos administrativos.' },
              { letra: 'C', texto: 'Refere-se ao juízo de conveniência e oportunidade nos atos discricionários.' },
              { letra: 'D', texto: 'É sinônimo de legalidade do ato.' },
              { letra: 'E', texto: 'Não sofre qualquer limitação.' },
            ],
            gabarito: 'C',
            justificativa: 'O MÉRITO ADMINISTRATIVO é o juízo de conveniência e oportunidade presente nos atos DISCRICIONÁRIOS. O Judiciário NÃO pode controlar o mérito, apenas a legalidade.',
            dificuldade: 'Média',
            competencia: 'Mérito administrativo',
            banca: 'IADES',
            tags: ['mérito', 'discricionariedade'],
          },
        ],
      },
    },
  ],
};
