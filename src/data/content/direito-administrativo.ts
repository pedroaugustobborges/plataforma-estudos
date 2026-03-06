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
  ],
};
