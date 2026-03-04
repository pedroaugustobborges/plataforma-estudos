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
  ],
};
