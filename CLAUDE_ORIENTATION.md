# Claude Orientation - Plataforma de Estudos SES-GO

## Overview

This is a study platform for the **Fiscal de Saúde Pública** position at **SES-GO** (Secretaria de Estado da Saúde de Goiás), organized by **IADES** exam board.

**Key Context:**
- Position: Fiscal de Saúde Pública (Public Health Inspector)
- Focus: Vigilância Sanitária (Health Surveillance)
- Exam Board: IADES
- Salary: R$ 10,118.44
- 50 vacancies

## Project Structure

```
plataforma-estudos/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── MarkdownRenderer.tsx   # Renders markdown content
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Layout.tsx
│   │   └── study/
│   │       ├── ContentViewer.tsx      # Main content display (tabs)
│   │       ├── FlashcardViewer.tsx    # Leitner system flashcards
│   │       └── QuestionViewer.tsx     # IADES-style questions
│   ├── data/
│   │   ├── content/                   # ⭐ ADD NEW CONTENT HERE
│   │   │   ├── lingua-portuguesa.ts
│   │   │   ├── realidade-goias.ts
│   │   │   ├── direito-administrativo.ts
│   │   │   ├── administracao-publica.ts
│   │   │   ├── raciocinio-logico.ts
│   │   │   ├── informatica.ts
│   │   │   └── conhecimentos-especificos.ts
│   │   └── index.ts                   # Exports all materias
│   ├── pages/
│   ├── stores/
│   │   ├── useStudyStore.ts           # Progress tracking
│   │   └── useFlashcardStore.ts       # Leitner system
│   ├── theme/
│   │   └── index.ts                   # MUI theme + materia colors
│   └── types/
│       └── index.ts                   # TypeScript interfaces
├── edital.pdf                         # Official exam syllabus
└── CLAUDE_ORIENTATION.md              # This file
```

## Content Data Structure

### Materia (Subject)

```typescript
interface Materia {
  id: string;                    // e.g., "lingua-portuguesa"
  nome: string;                  // e.g., "Língua Portuguesa"
  sigla: string;                 // e.g., "LP"
  descricao: string;             // Brief description
  cor: string;                   // Hex color (update theme/index.ts too)
  icone: string;                 // MUI icon name
  topicos: Topico[];             // Array of topics
}
```

### Topico (Topic)

```typescript
interface Topico {
  id: string;                    // e.g., "lp-topico-1"
  numero: number;                // Topic number (1, 2, 3...)
  titulo: string;                // Topic title from edital
  conteudo: ConteudoTopico;
}
```

### ConteudoTopico (Topic Content)

```typescript
interface ConteudoTopico {
  resumo: string;                // Markdown - Quick summary
  explicacao: string;            // Markdown - Detailed explanation
  pontosChave: string[];         // Array of key points (8+ items)
  armadilhas: Armadilha[];       // Common traps (5+ items)
  mnemonicos: Mnemonico[];       // Memory aids (3+ items)
  flashcards: Flashcard[];       // Study cards (8+ items)
  questoes: Questao[];           // Practice questions (10 items)
}
```

### Armadilha (Trap)

```typescript
interface Armadilha {
  titulo: string;                // Trap name
  descricao: string;             // What the trap is
  dica: string;                  // How to avoid it
}
```

### Mnemonico (Mnemonic)

```typescript
interface Mnemonico {
  termo: string;                 // Acronym or term (e.g., "LIMPE")
  significado: string;           // What it stands for
  frase: string;                 // Memory phrase
}
```

### Flashcard

```typescript
interface Flashcard {
  id: string;                    // e.g., "lp-fc-1-1" (materia-fc-topico-number)
  frente: string;                // Question/front side
  verso: string;                 // Answer/back side
  tags: string[];                // Categories
  dificuldade: 'facil' | 'medio' | 'dificil';
  caixa: number;                 // Always start at 1
  proximaRevisao: null;          // Always null initially
  ultimaRevisao: null;           // Always null initially
  acertos: number;               // Always 0 initially
  erros: number;                 // Always 0 initially
}
```

### Questao (Question)

```typescript
interface Questao {
  id: string;                    // e.g., "lp-q-1-1"
  enunciado: string;             // Question text (can be multiline)
  alternativas: Alternativa[];   // 5 options (A-E)
  gabarito: string;              // Correct answer: "A", "B", "C", "D", or "E"
  justificativa: string;         // Explanation of correct answer
  dificuldade: 'Fácil' | 'Média' | 'Difícil';
  competencia: string;           // Skill being tested
  banca: string;                 // Always "IADES"
  ano?: number;                  // Optional year
  orgao?: string;                // Optional organization
  tags: string[];                // Categories
}

interface Alternativa {
  letra: string;                 // "A", "B", "C", "D", "E"
  texto: string;                 // Option text
}
```

## Content Guidelines

### Markdown in Resumo/Explicacao

The platform renders markdown with full support for:
- **Headers**: `##` for main sections, `###` for subsections
- **Bold**: `**text**` - renders in primary color
- **Tables**: Standard markdown tables with `|` separators
- **Lists**: Both ordered and unordered
- **Blockquotes**: `>` for important quotes
- **Code**: Inline with backticks

**Example:**
```markdown
## Resumo Rápido

A **vigilância sanitária** é responsável por...

### Pontos Importantes

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| Estado | Nação organizada | Brasil |
| Governo | Direção política | Atual gestão |

### Para IADES - Foco em:
- Diferença entre **função política** e **função administrativa**
- A Administração atua de forma **vinculada à lei**
```

### IADES Exam Style

When creating questions, follow IADES patterns:
1. **Question types**: "Segundo o texto...", "Depreende-se...", "É correto afirmar...", "Assinale a alternativa..."
2. **Trap patterns**: Generalizations ("todos", "sempre", "nunca"), inversions, extrapolations
3. **Context**: Always relate to Vigilância Sanitária when possible
4. **Difficulty distribution**: ~30% Fácil, ~50% Média, ~20% Difícil

### Flashcard Guidelines

- **Front**: Clear question or concept
- **Back**: Concise answer, can use `\n` for line breaks
- **Difficulty**: facil (basic concepts), medio (applications), dificil (exceptions/details)

### Key Points (pontosChave)

- Write 8+ key points per topic
- Focus on what IADES commonly tests
- Make them memorable and concise
- Include comparisons and distinctions

### Armadilhas (Traps)

- Include 5+ traps per topic
- Based on real IADES exam patterns
- Always provide actionable tips to avoid them

### Mnemonicos

- Create 3+ mnemonics per topic
- Use Brazilian Portuguese acronyms
- Make them memorable and relevant

## Adding a New Topic

### Step 1: Identify the topic from edital.pdf

Read the edital and identify which topic to add next.

### Step 2: Add to the correct materia file

Open `src/data/content/[materia].ts` and add a new object to the `topicos` array:

```typescript
{
  id: 'xx-topico-2',  // Increment topic number
  numero: 2,
  titulo: 'Topic Title from Edital',
  conteudo: {
    resumo: `...`,
    explicacao: `...`,
    pontosChave: [...],
    armadilhas: [...],
    mnemonicos: [...],
    flashcards: [...],
    questoes: [...],
  },
},
```

### Step 3: Follow the ID pattern

- Flashcard IDs: `{materia-sigla}-fc-{topico}-{numero}` (e.g., `lp-fc-2-1`)
- Question IDs: `{materia-sigla}-q-{topico}-{numero}` (e.g., `lp-q-2-1`)

### Step 4: Build and test

```bash
npm run build
npm run preview
```

## Materia IDs and Colors

| Materia | ID | Color | Sigla |
|---------|------|-------|-------|
| Língua Portuguesa | lingua-portuguesa | #e91e63 | LP |
| Realidade de Goiás | realidade-goias | #ff9800 | RG |
| Direito Administrativo | direito-administrativo | #3f51b5 | DA |
| Administração Pública | administracao-publica | #009688 | AP |
| Raciocínio Lógico | raciocinio-logico | #673ab7 | RL |
| Informática | informatica | #2196f3 | IF |
| Conhecimentos Específicos | conhecimentos-especificos | #4caf50 | CE |

## Current Progress

### Topics Completed (Topic 1 for each):

- [x] Língua Portuguesa - Tópico 1: Compreensão e interpretação de textos
- [x] Realidade de Goiás - Tópico 1: Formação econômica de Goiás
- [x] Direito Administrativo - Tópico 1: Estado, Governo e Administração Pública
- [x] Administração Pública - Tópico 1: Conceitos e finalidades
- [x] Raciocínio Lógico - Tópico 1: Operações e propriedades
- [x] Informática - Tópico 1: Internet e Intranet
- [x] Conhecimentos Específicos - Tópico 1: Políticas públicas de saúde

### Topics Pending:

Check `edital.pdf` for the complete syllabus and add remaining topics following this guide.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 7** (requires Node.js 20.19+)
- **Material UI 7** (Grid with `size` prop)
- **Zustand** (state management with localStorage)
- **Tailwind CSS 4** (via @tailwindcss/postcss)
- **react-markdown** + **remark-gfm** (markdown rendering)

## Commands

```bash
npm run dev      # Development server (requires Node 20.19+)
npm run build    # Production build
npm run preview  # Preview production build
```

## Important Notes

1. **Always use `import type`** for TypeScript type imports
2. **Grid component** uses `size={{ xs: 12, md: 6 }}` syntax (MUI v7)
3. **Markdown tables** require proper formatting with `|` and `---` separators
4. **Questions must have exactly 5 alternatives** (A through E)
5. **Flashcard initial state**: caixa=1, all dates=null, counters=0
6. **Content should always relate to Vigilância Sanitária** context when applicable
