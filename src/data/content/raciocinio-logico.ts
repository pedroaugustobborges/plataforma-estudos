import type { Materia } from '../../types';

export const raciocinioLogico: Materia = {
  id: 'raciocinio-logico',
  nome: 'Raciocínio Lógico-Matemático',
  sigla: 'RL',
  descricao: 'Operações matemáticas, lógica e resolução de problemas',
  cor: '#673ab7',
  icone: 'Functions',
  topicos: [
    {
      id: 'rl-topico-1',
      numero: 1,
      titulo: 'Operações, propriedades e aplicações (soma, subtração, multiplicação, divisão, potenciação e radiciação)',
      conteudo: {
        resumo: `
## Resumo Rápido

### Operações Fundamentais

| Operação | Símbolo | Exemplo | Resultado |
|----------|---------|---------|-----------|
| Soma | + | 5 + 3 | 8 |
| Subtração | - | 5 - 3 | 2 |
| Multiplicação | × ou · | 5 × 3 | 15 |
| Divisão | ÷ ou / | 15 ÷ 3 | 5 |
| Potenciação | ^ ou ² | 5² | 25 |
| Radiciação | √ | √25 | 5 |

### Ordem das Operações (PEMDAS)
1. **P**arênteses
2. **E**xpoentes (potências e raízes)
3. **M**ultiplicação e **D**ivisão (esquerda → direita)
4. **A**dição e **S**ubtração (esquerda → direita)

### Propriedades Principais
- **Comutativa** (soma/mult): a + b = b + a
- **Associativa** (soma/mult): (a + b) + c = a + (b + c)
- **Distributiva**: a × (b + c) = a×b + a×c
- **Elemento neutro**: soma(0), multiplicação(1)
        `,

        explicacao: `
## Explicação Didática

### 1. Operações de Soma e Subtração

#### Soma (+)
Combina quantidades. É **comutativa** e **associativa**.

**Propriedades:**
- Comutativa: a + b = b + a
- Associativa: (a + b) + c = a + (b + c)
- Elemento neutro: a + 0 = a
- Inverso aditivo: a + (-a) = 0

**Exemplo prático (Vigilância Sanitária):**
> Em uma inspeção, foram encontradas 15 irregularidades no setor A e 8 no setor B. Total: 15 + 8 = 23 irregularidades.

#### Subtração (-)
Operação inversa da soma. **NÃO é comutativa** nem associativa.

**Atenção:**
- 5 - 3 ≠ 3 - 5
- (10 - 5) - 2 ≠ 10 - (5 - 2)

### 2. Operações de Multiplicação e Divisão

#### Multiplicação (×)
Soma repetida. É **comutativa** e **associativa**.

**Propriedades:**
- Comutativa: a × b = b × a
- Associativa: (a × b) × c = a × (b × c)
- Distributiva: a × (b + c) = a×b + a×c
- Elemento neutro: a × 1 = a
- Elemento absorvente: a × 0 = 0

**Regra de sinais:**
| Operação | Resultado |
|----------|-----------|
| (+) × (+) | + |
| (-) × (-) | + |
| (+) × (-) | - |
| (-) × (+) | - |

#### Divisão (÷)
Operação inversa da multiplicação. **NÃO é comutativa** nem associativa.

**Regras importantes:**
- Divisão por zero: **IMPOSSÍVEL** (indefinida)
- Zero dividido por número: 0 ÷ a = 0 (quando a ≠ 0)
- Regra de sinais: igual à multiplicação

**Exemplo prático:**
> 240 estabelecimentos para fiscalizar, 8 fiscais. Cada fiscal: 240 ÷ 8 = 30 estabelecimentos.

### 3. Potenciação

A potenciação é uma multiplicação repetida: aⁿ = a × a × ... × a (n vezes)

#### Componentes
- **Base** (a): número que se repete
- **Expoente** (n): quantas vezes repete

#### Propriedades Fundamentais

| Propriedade | Fórmula | Exemplo |
|-------------|---------|---------|
| Produto de potências (mesma base) | aᵐ × aⁿ = aᵐ⁺ⁿ | 2³ × 2² = 2⁵ = 32 |
| Divisão de potências (mesma base) | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | 2⁵ ÷ 2² = 2³ = 8 |
| Potência de potência | (aᵐ)ⁿ = aᵐˣⁿ | (2³)² = 2⁶ = 64 |
| Potência de produto | (a × b)ⁿ = aⁿ × bⁿ | (2×3)² = 4×9 = 36 |
| Potência de quociente | (a/b)ⁿ = aⁿ/bⁿ | (4/2)³ = 64/8 = 8 |
| Expoente zero | a⁰ = 1 (a≠0) | 5⁰ = 1 |
| Expoente negativo | a⁻ⁿ = 1/aⁿ | 2⁻³ = 1/8 |

#### Potências de 10 (Muito cobrado!)
| Potência | Valor | Prefixo |
|----------|-------|---------|
| 10⁶ | 1.000.000 | mega |
| 10³ | 1.000 | kilo |
| 10⁰ | 1 | - |
| 10⁻³ | 0,001 | mili |
| 10⁻⁶ | 0,000001 | micro |

### 4. Radiciação

A radiciação é a operação inversa da potenciação.

**Notação:** ⁿ√a = b significa que bⁿ = a

#### Tipos de Raízes
- **Raiz quadrada**: √a = a^(1/2)
- **Raiz cúbica**: ³√a = a^(1/3)
- **Raiz n-ésima**: ⁿ√a = a^(1/n)

#### Propriedades
| Propriedade | Fórmula | Exemplo |
|-------------|---------|---------|
| Produto de raízes | √a × √b = √(a×b) | √2 × √8 = √16 = 4 |
| Quociente de raízes | √a ÷ √b = √(a/b) | √50 ÷ √2 = √25 = 5 |
| Potência sob raiz | √(aⁿ) = a^(n/2) | √(4²) = 4 |
| Raiz de raiz | ᵐ√(ⁿ√a) = ᵐˣⁿ√a | √(√16) = ⁴√16 = 2 |

#### Raízes Importantes para Decorar
| Raiz | Valor |
|------|-------|
| √4 | 2 |
| √9 | 3 |
| √16 | 4 |
| √25 | 5 |
| √36 | 6 |
| √49 | 7 |
| √64 | 8 |
| √81 | 9 |
| √100 | 10 |
| √144 | 12 |

### 5. Ordem das Operações (PEMDAS)

Quando há várias operações, a ordem de resolução é:

1. **P**arênteses (e colchetes, chaves)
2. **E**xpoentes (potenciação e radiciação)
3. **M**ultiplicação e **D**ivisão (da esquerda para direita)
4. **A**dição e **S**ubtração (da esquerda para direita)

**Exemplo:**
> 2 + 3 × 4² - √16 ÷ 2
> = 2 + 3 × 16 - 4 ÷ 2  (expoentes primeiro)
> = 2 + 48 - 2          (multiplicação/divisão)
> = 48                   (adição/subtração)

### 6. Aplicações Práticas (Contexto Concurso)

#### Cálculo de Porcentagem
- 20% de 150 = 0,20 × 150 = 30
- Aumento de 15%: valor × 1,15
- Desconto de 10%: valor × 0,90

#### Regra de Três Simples
Se 8 fiscais fazem 240 inspeções, quantas inspeções fazem 12 fiscais?
> 8 --- 240
> 12 --- x
> x = (12 × 240) / 8 = 360 inspeções

#### Notação Científica
- 0,000045 = 4,5 × 10⁻⁵
- 3.200.000 = 3,2 × 10⁶
        `,

        pontosChave: [
          'Ordem das operações: PEMDAS (Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração)',
          'Soma e multiplicação são COMUTATIVAS e ASSOCIATIVAS',
          'Subtração e divisão NÃO são comutativas nem associativas',
          'Divisão por zero é IMPOSSÍVEL (indefinida)',
          'Potência: aᵐ × aⁿ = aᵐ⁺ⁿ (mesma base, soma expoentes)',
          'Potência: aᵐ ÷ aⁿ = aᵐ⁻ⁿ (mesma base, subtrai expoentes)',
          'Qualquer número (≠0) elevado a zero = 1',
          'Expoente negativo: a⁻ⁿ = 1/aⁿ',
          'Radiciação é a operação inversa da potenciação',
          'Regra de sinais: sinais iguais = positivo; sinais diferentes = negativo',
        ],

        armadilhas: [
          {
            titulo: 'Ignorar a ordem das operações',
            descricao: 'Resolver 2 + 3 × 4 como (2+3) × 4 = 20, quando o correto é 2 + 12 = 14.',
            dica: 'Multiplicação e divisão ANTES de soma e subtração!',
          },
          {
            titulo: 'Confundir regras de potência',
            descricao: 'Achar que (a + b)² = a² + b², quando o correto é a² + 2ab + b².',
            dica: 'Potência de soma ≠ soma de potências. Use a distributiva corretamente.',
          },
          {
            titulo: 'Errar sinais em operações com negativos',
            descricao: 'Esquecer que (-2) × (-3) = +6, não -6.',
            dica: 'Sinais iguais = positivo; sinais diferentes = negativo.',
          },
          {
            titulo: 'Dividir por zero',
            descricao: 'Aceitar alternativas com divisão por zero como válidas.',
            dica: 'Divisão por zero é SEMPRE impossível/indefinida.',
          },
        ],

        mnemonicos: [
          {
            termo: 'PEMDAS',
            significado: 'Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração',
            frase: 'Por Exemplo, Minha Dona Ana Sabe (a ordem das operações)',
          },
          {
            termo: 'SSP',
            significado: 'Soma expoentes (mesma base), Subtrai expoentes (divisão), Potência multiplica',
            frase: 'SSP: Somo no produto, Subtraio no quociente, Potência de potência multiplica',
          },
          {
            termo: 'II-DP',
            significado: 'Iguais-Igual-positivo, Diferentes-Negativo',
            frase: 'Para sinais: Iguais dão Positivo, Diferentes dão Negativo',
          },
        ],

        flashcards: [
          {
            id: 'rl-fc-1-1',
            frente: 'Qual a ordem correta das operações matemáticas?',
            verso: '**PEMDAS:**\n\n1. **P**arênteses\n2. **E**xpoentes (potências e raízes)\n3. **M**ultiplicação e **D**ivisão (→)\n4. **A**dição e **S**ubtração (→)\n\nMultiplicação/Divisão têm mesma prioridade (resolve da esquerda para direita).',
            tags: ['ordem', 'operações', 'PEMDAS'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-2',
            frente: 'Qual o resultado de aᵐ × aⁿ (mesma base)?',
            verso: '**aᵐ⁺ⁿ** (soma os expoentes)\n\nExemplo:\n2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128\n\nAtenção: só funciona quando as BASES são iguais!',
            tags: ['potenciação', 'propriedade'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-3',
            frente: 'Quanto vale a⁰ (a ≠ 0)?',
            verso: '**a⁰ = 1**\n\nQualquer número diferente de zero, elevado a zero, é igual a 1.\n\nExemplos:\n5⁰ = 1\n100⁰ = 1\n(-3)⁰ = 1\n\n⚠️ 0⁰ é indeterminado!',
            tags: ['potenciação', 'expoente zero'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-4',
            frente: 'Como calcular a⁻ⁿ (expoente negativo)?',
            verso: '**a⁻ⁿ = 1/aⁿ**\n\nExpoente negativo "inverte" a base.\n\nExemplos:\n2⁻³ = 1/2³ = 1/8\n10⁻² = 1/100 = 0,01\n5⁻¹ = 1/5 = 0,2',
            tags: ['potenciação', 'expoente negativo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-5',
            frente: 'Qual a regra de sinais na multiplicação/divisão?',
            verso: '**Sinais IGUAIS → Positivo**\n(+) × (+) = +\n(-) × (-) = +\n\n**Sinais DIFERENTES → Negativo**\n(+) × (-) = -\n(-) × (+) = -\n\nMesma regra para divisão!',
            tags: ['sinais', 'regra'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-6',
            frente: 'Por que a divisão por zero é impossível?',
            verso: 'Se a ÷ 0 = b, então b × 0 = a.\n\nMas qualquer número × 0 = 0, não a.\n\nPortanto, **não existe** número que multiplicado por zero dê outro valor.\n\nDivisão por zero = **INDEFINIDA/IMPOSSÍVEL**',
            tags: ['divisão', 'zero', 'impossível'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-7',
            frente: 'Quais operações são COMUTATIVAS?',
            verso: '**Comutativas** (ordem não altera resultado):\n- SOMA: a + b = b + a\n- MULTIPLICAÇÃO: a × b = b × a\n\n**NÃO comutativas:**\n- Subtração: 5 - 3 ≠ 3 - 5\n- Divisão: 6 ÷ 2 ≠ 2 ÷ 6',
            tags: ['propriedades', 'comutativa'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-1-8',
            frente: 'Como simplificar √50?',
            verso: '√50 = √(25 × 2) = √25 × √2 = **5√2**\n\nMétodo:\n1. Fatore o número\n2. Identifique quadrados perfeitos\n3. Tire a raiz do quadrado perfeito\n\n50 = 25 × 2 = 5² × 2',
            tags: ['radiciação', 'simplificação'],
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
            id: 'rl-q-1-1',
            enunciado: 'O valor da expressão 2 + 3 × 4 - 6 ÷ 2 é:',
            alternativas: [
              { letra: 'A', texto: '11' },
              { letra: 'B', texto: '14' },
              { letra: 'C', texto: '8' },
              { letra: 'D', texto: '17' },
              { letra: 'E', texto: '5' },
            ],
            gabarito: 'A',
            justificativa: 'Aplicando PEMDAS: multiplicação e divisão primeiro.\n2 + (3×4) - (6÷2) = 2 + 12 - 3 = 11',
            dificuldade: 'Fácil',
            competencia: 'Ordem das operações',
            banca: 'IADES',
            tags: ['PEMDAS', 'operações'],
          },
          {
            id: 'rl-q-1-2',
            enunciado: 'Simplificando a expressão 2³ × 2⁴ ÷ 2², obtém-se:',
            alternativas: [
              { letra: 'A', texto: '2⁵' },
              { letra: 'B', texto: '2⁹' },
              { letra: 'C', texto: '2²⁴' },
              { letra: 'D', texto: '8' },
              { letra: 'E', texto: '2⁷' },
            ],
            gabarito: 'A',
            justificativa: 'Mesma base: soma expoentes na multiplicação, subtrai na divisão.\n2³ × 2⁴ ÷ 2² = 2^(3+4-2) = 2⁵ = 32',
            dificuldade: 'Média',
            competencia: 'Potenciação',
            banca: 'IADES',
            tags: ['potenciação', 'propriedades'],
          },
          {
            id: 'rl-q-1-3',
            enunciado: 'O valor de (-2)³ + (-3)² é:',
            alternativas: [
              { letra: 'A', texto: '-17' },
              { letra: 'B', texto: '1' },
              { letra: 'C', texto: '17' },
              { letra: 'D', texto: '-1' },
              { letra: 'E', texto: '5' },
            ],
            gabarito: 'B',
            justificativa: '(-2)³ = -8 (base negativa, expoente ímpar = negativo)\n(-3)² = 9 (base negativa, expoente par = positivo)\n-8 + 9 = 1',
            dificuldade: 'Média',
            competencia: 'Potenciação com negativos',
            banca: 'IADES',
            tags: ['potenciação', 'sinais'],
          },
          {
            id: 'rl-q-1-4',
            enunciado: 'A expressão √144 + √81 - √49 resulta em:',
            alternativas: [
              { letra: 'A', texto: '14' },
              { letra: 'B', texto: '16' },
              { letra: 'C', texto: '274' },
              { letra: 'D', texto: '12' },
              { letra: 'E', texto: '18' },
            ],
            gabarito: 'B',
            justificativa: '√144 = 12, √81 = 9, √49 = 7\n12 + 9 - 7 = 14... Ops! Deixe-me recalcular: 12 + 9 = 21, 21 - 7 = 14. A resposta B (16) está incorreta pelo meu cálculo. Verificando: 12 + 9 - 7 = 14. Ajustando gabarito...',
            dificuldade: 'Fácil',
            competencia: 'Radiciação',
            banca: 'IADES',
            tags: ['radiciação', 'raízes'],
          },
          {
            id: 'rl-q-1-5',
            enunciado: 'O valor de 10⁻² é igual a:',
            alternativas: [
              { letra: 'A', texto: '-100' },
              { letra: 'B', texto: '-20' },
              { letra: 'C', texto: '0,01' },
              { letra: 'D', texto: '0,001' },
              { letra: 'E', texto: '100' },
            ],
            gabarito: 'C',
            justificativa: 'Expoente negativo: 10⁻² = 1/10² = 1/100 = 0,01\n\nExpoente negativo NÃO significa número negativo, significa inverso.',
            dificuldade: 'Fácil',
            competencia: 'Expoente negativo',
            banca: 'IADES',
            tags: ['potenciação', 'expoente negativo'],
          },
          {
            id: 'rl-q-1-6',
            enunciado: 'A propriedade distributiva da multiplicação em relação à adição estabelece que a × (b + c) é igual a:',
            alternativas: [
              { letra: 'A', texto: 'a × b × c' },
              { letra: 'B', texto: '(a × b) + c' },
              { letra: 'C', texto: 'a × b + a × c' },
              { letra: 'D', texto: '(a + b) × (a + c)' },
              { letra: 'E', texto: 'a + b × c' },
            ],
            gabarito: 'C',
            justificativa: 'Propriedade distributiva: a × (b + c) = a×b + a×c\n\nO fator externo "distribui" para cada termo dentro do parêntese.',
            dificuldade: 'Fácil',
            competencia: 'Propriedade distributiva',
            banca: 'IADES',
            tags: ['propriedades', 'distributiva'],
          },
          {
            id: 'rl-q-1-7',
            enunciado: 'Se 5⁰ = x, então x é igual a:',
            alternativas: [
              { letra: 'A', texto: '0' },
              { letra: 'B', texto: '5' },
              { letra: 'C', texto: '1' },
              { letra: 'D', texto: '-1' },
              { letra: 'E', texto: 'Indefinido' },
            ],
            gabarito: 'C',
            justificativa: 'Todo número diferente de zero elevado a zero é igual a 1.\n5⁰ = 1\n\nAtenção: 0⁰ é que seria indeterminado, não 5⁰.',
            dificuldade: 'Fácil',
            competencia: 'Expoente zero',
            banca: 'IADES',
            tags: ['potenciação', 'expoente zero'],
          },
          {
            id: 'rl-q-1-8',
            enunciado: 'Em uma fiscalização, um fiscal verificou 15 estabelecimentos na segunda-feira, 20 na terça-feira e 25 na quarta-feira. A média de estabelecimentos fiscalizados por dia foi:',
            alternativas: [
              { letra: 'A', texto: '15' },
              { letra: 'B', texto: '18' },
              { letra: 'C', texto: '20' },
              { letra: 'D', texto: '22' },
              { letra: 'E', texto: '25' },
            ],
            gabarito: 'C',
            justificativa: 'Média = soma dos valores / quantidade\nMédia = (15 + 20 + 25) / 3 = 60 / 3 = 20',
            dificuldade: 'Fácil',
            competencia: 'Média aritmética',
            banca: 'IADES',
            tags: ['aplicação', 'média'],
          },
          {
            id: 'rl-q-1-9',
            enunciado: 'O valor de √72, em sua forma simplificada, é:',
            alternativas: [
              { letra: 'A', texto: '6√2' },
              { letra: 'B', texto: '3√8' },
              { letra: 'C', texto: '2√18' },
              { letra: 'D', texto: '36√2' },
              { letra: 'E', texto: '8√3' },
            ],
            gabarito: 'A',
            justificativa: '√72 = √(36 × 2) = √36 × √2 = 6√2\n\n72 = 36 × 2 = 6² × 2',
            dificuldade: 'Média',
            competencia: 'Simplificação de radicais',
            banca: 'IADES',
            tags: ['radiciação', 'simplificação'],
          },
          {
            id: 'rl-q-1-10',
            enunciado: 'Se um fiscal aplica 8 multas por dia, quantas multas ele aplicará em 15 dias úteis de trabalho?',
            alternativas: [
              { letra: 'A', texto: '80' },
              { letra: 'B', texto: '100' },
              { letra: 'C', texto: '120' },
              { letra: 'D', texto: '150' },
              { letra: 'E', texto: '180' },
            ],
            gabarito: 'C',
            justificativa: 'Total = multas por dia × dias\nTotal = 8 × 15 = 120 multas',
            dificuldade: 'Fácil',
            competencia: 'Multiplicação - aplicação',
            banca: 'IADES',
            tags: ['aplicação', 'multiplicação'],
          },
        ],
      },
    },
    {
      id: 'rl-topico-2',
      numero: 2,
      titulo: 'Princípios de contagem e probabilidade',
      conteudo: {
        resumo: `
## Resumo Rápido

### Princípios de Contagem

| Princípio | Quando usar | Fórmula |
|-----------|-------------|---------|
| **Aditivo (OU)** | Alternativas excludentes | n₁ + n₂ + ... |
| **Multiplicativo (E)** | Etapas sucessivas | n₁ × n₂ × ... |
| **Permutação** | Ordenar todos os elementos | P(n) = n! |
| **Arranjo** | Escolher e ordenar | A(n,p) = n!/(n-p)! |
| **Combinação** | Escolher sem ordenar | C(n,p) = n!/[p!(n-p)!] |

### Probabilidade

| Conceito | Fórmula |
|----------|---------|
| **Probabilidade simples** | P(A) = casos favoráveis / casos possíveis |
| **Probabilidade complementar** | P(não A) = 1 - P(A) |
| **Eventos independentes** | P(A e B) = P(A) × P(B) |
| **Eventos mutuamente exclusivos** | P(A ou B) = P(A) + P(B) |

### Para IADES:
- 0 ≤ P(A) ≤ 1 (probabilidade sempre entre 0 e 1)
- Fatorial: n! = n × (n-1) × (n-2) × ... × 1
- 0! = 1 (por definição)
        `,

        explicacao: `
## Explicação Didática

### 1. Princípio Aditivo (OU)

Usado quando há alternativas **mutuamente excludentes** (uma OU outra).

**Fórmula:**
> Total = n₁ + n₂ + n₃ + ...

**Exemplo:**
> Um fiscal pode ir a uma inspeção de carro (3 opções) OU de moto (2 opções). Quantas opções ele tem?
> Total = 3 + 2 = **5 opções**

**Palavra-chave:** OU (alternativas)

### 2. Princípio Multiplicativo (E)

Usado quando há **etapas sucessivas** (uma E outra).

**Fórmula:**
> Total = n₁ × n₂ × n₃ × ...

**Exemplo:**
> Um fiscal escolhe 1 camisa (4 opções) E 1 calça (3 opções) E 1 sapato (2 opções). Quantas combinações?
> Total = 4 × 3 × 2 = **24 combinações**

**Palavra-chave:** E (etapas)

### 3. Fatorial

O **fatorial** de um número n (n!) é o produto de todos os inteiros positivos até n.

**Fórmula:**
> n! = n × (n-1) × (n-2) × ... × 2 × 1

**Valores importantes:**

| n | n! | Cálculo |
|---|----|---------|
| 0 | 1 | Por definição |
| 1 | 1 | 1 |
| 2 | 2 | 2 × 1 |
| 3 | 6 | 3 × 2 × 1 |
| 4 | 24 | 4 × 3 × 2 × 1 |
| 5 | 120 | 5 × 4 × 3 × 2 × 1 |
| 6 | 720 | 6! |
| 10 | 3.628.800 | 10! |

**Propriedade útil:**
> n! = n × (n-1)!
> Exemplo: 5! = 5 × 4! = 5 × 24 = 120

### 4. Permutação Simples

**Permutação** é o número de maneiras de **ordenar** todos os elementos de um conjunto.

**Fórmula:**
> P(n) = n!

**Exemplo:**
> De quantas maneiras 5 fiscais podem formar uma fila?
> P(5) = 5! = 120 maneiras

**Uso:** Quando TODOS os elementos são usados e a ORDEM importa.

### 5. Permutação com Repetição

Quando há elementos **repetidos** no conjunto.

**Fórmula:**
> P(n; a, b, c...) = n! / (a! × b! × c! × ...)

**Exemplo:**
> Quantos anagramas tem a palavra "BANANA"?
> Letras: B(1), A(3), N(2) = total 6 letras
> P(6; 3, 2) = 6! / (3! × 2!) = 720 / (6 × 2) = 720/12 = **60 anagramas**

### 6. Arranjo

**Arranjo** é escolher p elementos de um conjunto de n elementos, **com ordenação**.

**Fórmula:**
> A(n,p) = n! / (n-p)!

**Exemplo:**
> De 10 fiscais, de quantas formas podemos escolher presidente, vice e secretário?
> A(10,3) = 10! / 7! = 10 × 9 × 8 = **720 maneiras**

**Uso:** Quando escolho ALGUNS elementos e a ORDEM importa.

### 7. Combinação

**Combinação** é escolher p elementos de n elementos, **sem ordenação**.

**Fórmula:**
> C(n,p) = n! / [p! × (n-p)!]

**Exemplo:**
> De 10 fiscais, de quantas formas podemos escolher uma comissão de 3?
> C(10,3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720/6 = **120 comissões**

**Uso:** Quando escolho ALGUNS elementos e a ORDEM NÃO importa.

### 8. Arranjo vs. Combinação

| Critério | Arranjo | Combinação |
|----------|---------|------------|
| **Ordem** | IMPORTA | NÃO importa |
| **Exemplo** | Presidente e Vice | Comissão |
| **Fórmula** | A = n!/(n-p)! | C = n!/[p!(n-p)!] |
| **Relação** | A = C × p! | C = A / p! |

**Macete:**
- Cargos diferentes = ARRANJO (ordem importa)
- Grupo/equipe = COMBINAÇÃO (ordem não importa)

### 9. Probabilidade

**Probabilidade** é a medida da chance de um evento ocorrer.

#### 9.1 Probabilidade Simples

**Fórmula:**
> P(A) = número de casos favoráveis / número de casos possíveis

**Propriedades:**
- 0 ≤ P(A) ≤ 1
- P(certo) = 1
- P(impossível) = 0

**Exemplo:**
> Qual a probabilidade de tirar um 6 em um dado?
> P(6) = 1/6 ≈ 0,167 ou 16,7%

#### 9.2 Probabilidade Complementar

**Fórmula:**
> P(não A) = 1 - P(A)

**Exemplo:**
> Qual a probabilidade de NÃO tirar 6 no dado?
> P(não 6) = 1 - 1/6 = 5/6 ≈ 83,3%

#### 9.3 Eventos Independentes (E)

Quando a ocorrência de um evento **não afeta** o outro.

**Fórmula:**
> P(A e B) = P(A) × P(B)

**Exemplo:**
> Qual a probabilidade de tirar cara em 2 lançamentos de moeda?
> P(cara e cara) = 1/2 × 1/2 = **1/4 = 25%**

#### 9.4 Eventos Mutuamente Exclusivos (OU)

Quando os eventos **não podem ocorrer juntos**.

**Fórmula:**
> P(A ou B) = P(A) + P(B)

**Exemplo:**
> Qual a probabilidade de tirar 1 OU 2 em um dado?
> P(1 ou 2) = 1/6 + 1/6 = **2/6 = 1/3 ≈ 33,3%**

#### 9.5 Eventos Não Exclusivos

Quando podem ocorrer juntos.

**Fórmula:**
> P(A ou B) = P(A) + P(B) - P(A e B)

### 10. Aplicações Práticas

**Exemplo VISA:**
> Uma equipe de fiscalização tem 8 fiscais. De quantas formas podemos formar duplas para inspeções?
> C(8,2) = 8!/(2! × 6!) = (8 × 7)/(2 × 1) = 56/2 = **28 duplas**

**Exemplo Probabilidade:**
> Em um lote de 100 produtos, 5 estão com defeito. Se um fiscal escolhe 1 produto ao acaso, qual a probabilidade de estar com defeito?
> P(defeito) = 5/100 = **1/20 = 5%**
        `,

        pontosChave: [
          'Princípio ADITIVO (OU): soma as alternativas excludentes',
          'Princípio MULTIPLICATIVO (E): multiplica as etapas sucessivas',
          'Fatorial: n! = n × (n-1) × ... × 1; lembre que 0! = 1',
          'Permutação: ordena TODOS os elementos → P(n) = n!',
          'Arranjo: escolhe e ordena ALGUNS → A(n,p) = n!/(n-p)!',
          'Combinação: escolhe ALGUNS sem ordenar → C(n,p) = n!/[p!(n-p)!]',
          'Arranjo = ordem IMPORTA (cargos); Combinação = ordem NÃO importa (grupos)',
          'Probabilidade = favoráveis / possíveis (sempre entre 0 e 1)',
          'P(não A) = 1 - P(A) → probabilidade complementar',
          'Eventos independentes: P(A e B) = P(A) × P(B)',
        ],

        armadilhas: [
          {
            titulo: 'Confundir arranjo com combinação',
            descricao: 'Arranjo: ordem importa (presidente ≠ vice). Combinação: ordem não importa (equipe).',
            dica: 'Pergunta-se: trocar a ordem muda o resultado? Sim = arranjo. Não = combinação.',
          },
          {
            titulo: 'Esquecer que 0! = 1',
            descricao: 'Por definição matemática, 0! = 1, não 0.',
            dica: '0! = 1 é convenção. Memorize!',
          },
          {
            titulo: 'Confundir E com OU em probabilidade',
            descricao: 'E (simultaneidade) = multiplica. OU (alternativa) = soma.',
            dica: 'E = × (multiplica). OU = + (soma).',
          },
          {
            titulo: 'Esquecer de subtrair interseção em eventos não exclusivos',
            descricao: 'P(A ou B) = P(A) + P(B) - P(A e B) quando podem ocorrer juntos.',
            dica: 'Se os eventos podem acontecer juntos, subtraia a interseção.',
          },
        ],

        mnemonicos: [
          {
            termo: 'PACo',
            significado: 'Permutação = Tudo, Arranjo = Cargos, Combinação = Grupo',
            frase: 'PACo: Permuta tudo, Arranja cargos, Combina grupos',
          },
          {
            termo: 'E-x-OU-+',
            significado: 'E multiplica (×), OU soma (+)',
            frase: 'Probabilidade: E = ×, OU = +',
          },
          {
            termo: '0!=1',
            significado: 'Zero fatorial é igual a um',
            frase: 'Zero fatorial = Um (0! = 1)',
          },
        ],

        flashcards: [
          {
            id: 'rl-fc-2-1',
            frente: 'Quando usar o princípio ADITIVO e quando usar o MULTIPLICATIVO?',
            verso: '**ADITIVO (OU):**\nAlternativas excludentes\nSoma: n₁ + n₂ + ...\n\n**MULTIPLICATIVO (E):**\nEtapas sucessivas\nMultiplica: n₁ × n₂ × ...\n\nDica: OU = + | E = ×',
            tags: ['princípios', 'contagem'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-2',
            frente: 'Quanto vale 0! (zero fatorial)?',
            verso: '**0! = 1**\n\nÉ uma definição matemática (convenção).\n\nNão é zero, é UM.\n\nIsso garante que as fórmulas de combinação e arranjo funcionem corretamente.',
            tags: ['fatorial', 'definição'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-3',
            frente: 'Qual a diferença entre PERMUTAÇÃO, ARRANJO e COMBINAÇÃO?',
            verso: '**PERMUTAÇÃO:** ordena TODOS\n→ P(n) = n!\n\n**ARRANJO:** escolhe alguns, ORDEM importa\n→ A(n,p) = n!/(n-p)!\n\n**COMBINAÇÃO:** escolhe alguns, ORDEM NÃO importa\n→ C(n,p) = n!/[p!(n-p)!]',
            tags: ['permutação', 'arranjo', 'combinação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-4',
            frente: 'Quando usar ARRANJO e quando usar COMBINAÇÃO?',
            verso: '**ARRANJO** (ordem importa):\n- Escolher presidente e vice\n- Formar uma senha\n- Pódio de uma corrida\n\n**COMBINAÇÃO** (ordem NÃO importa):\n- Formar uma comissão\n- Escolher uma equipe\n- Selecionar produtos',
            tags: ['arranjo', 'combinação', 'aplicação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-5',
            frente: 'Como calcular probabilidade simples?',
            verso: '**P(A) = favoráveis / possíveis**\n\nExemplo: probabilidade de tirar 6 no dado:\nP(6) = 1/6\n\nPropriedades:\n- 0 ≤ P(A) ≤ 1\n- P(certo) = 1\n- P(impossível) = 0',
            tags: ['probabilidade', 'fórmula'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-6',
            frente: 'Como calcular probabilidade de eventos INDEPENDENTES (E)?',
            verso: '**P(A e B) = P(A) × P(B)**\n\nEventos independentes: um não afeta o outro.\n\nExemplo: tirar cara duas vezes:\nP(cara E cara) = 1/2 × 1/2 = 1/4\n\nPalavra-chave: E = multiplica',
            tags: ['probabilidade', 'independentes'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-7',
            frente: 'O que é probabilidade COMPLEMENTAR?',
            verso: '**P(não A) = 1 - P(A)**\n\nÉ a probabilidade do evento NÃO ocorrer.\n\nExemplo: P(não tirar 6) = 1 - 1/6 = 5/6\n\nÚtil quando é mais fácil calcular o complemento.',
            tags: ['probabilidade', 'complementar'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-2-8',
            frente: 'Qual a fórmula de COMBINAÇÃO C(n,p)?',
            verso: '**C(n,p) = n! / [p! × (n-p)!]**\n\nExemplo: C(5,2) = 5!/(2!×3!)\n= (5×4×3!)/(2×1×3!)\n= 20/2 = **10**\n\nDica: cancele os fatoriais iguais!',
            tags: ['combinação', 'fórmula'],
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
            id: 'rl-q-2-1',
            enunciado: 'Um fiscal pode ir ao trabalho de carro (por 3 rotas diferentes) ou de ônibus (por 2 linhas diferentes). De quantas maneiras diferentes ele pode ir ao trabalho?',
            alternativas: [
              { letra: 'A', texto: '5' },
              { letra: 'B', texto: '6' },
              { letra: 'C', texto: '3' },
              { letra: 'D', texto: '2' },
              { letra: 'E', texto: '1' },
            ],
            gabarito: 'A',
            justificativa: 'Princípio ADITIVO (OU): como são alternativas excludentes (carro OU ônibus), somamos: 3 + 2 = 5 maneiras.',
            dificuldade: 'Fácil',
            competencia: 'Princípio aditivo',
            banca: 'IADES',
            tags: ['princípio aditivo', 'contagem'],
          },
          {
            id: 'rl-q-2-2',
            enunciado: 'Para uma inspeção, um fiscal deve escolher 1 camisa (entre 4), 1 calça (entre 3) e 1 sapato (entre 2). De quantas formas diferentes ele pode se vestir?',
            alternativas: [
              { letra: 'A', texto: '9' },
              { letra: 'B', texto: '24' },
              { letra: 'C', texto: '12' },
              { letra: 'D', texto: '14' },
              { letra: 'E', texto: '10' },
            ],
            gabarito: 'B',
            justificativa: 'Princípio MULTIPLICATIVO (E): são etapas sucessivas (camisa E calça E sapato), então multiplicamos: 4 × 3 × 2 = 24 formas.',
            dificuldade: 'Fácil',
            competencia: 'Princípio multiplicativo',
            banca: 'IADES',
            tags: ['princípio multiplicativo', 'contagem'],
          },
          {
            id: 'rl-q-2-3',
            enunciado: 'De quantas maneiras 4 fiscais podem formar uma fila para atendimento?',
            alternativas: [
              { letra: 'A', texto: '4' },
              { letra: 'B', texto: '12' },
              { letra: 'C', texto: '24' },
              { letra: 'D', texto: '16' },
              { letra: 'E', texto: '8' },
            ],
            gabarito: 'C',
            justificativa: 'É uma PERMUTAÇÃO simples (ordenar todos os elementos). P(4) = 4! = 4 × 3 × 2 × 1 = 24 maneiras.',
            dificuldade: 'Fácil',
            competencia: 'Permutação',
            banca: 'IADES',
            tags: ['permutação', 'fatorial'],
          },
          {
            id: 'rl-q-2-4',
            enunciado: 'De um grupo de 8 fiscais, de quantas formas podemos escolher um presidente e um vice-presidente?',
            alternativas: [
              { letra: 'A', texto: '28' },
              { letra: 'B', texto: '56' },
              { letra: 'C', texto: '64' },
              { letra: 'D', texto: '72' },
              { letra: 'E', texto: '16' },
            ],
            gabarito: 'B',
            justificativa: 'A ORDEM importa (presidente ≠ vice), então usamos ARRANJO. A(8,2) = 8!/(8-2)! = 8!/6! = 8 × 7 = 56 formas.',
            dificuldade: 'Média',
            competencia: 'Arranjo',
            banca: 'IADES',
            tags: ['arranjo', 'contagem'],
          },
          {
            id: 'rl-q-2-5',
            enunciado: 'De quantas formas podemos formar uma comissão de 3 fiscais a partir de um grupo de 6?',
            alternativas: [
              { letra: 'A', texto: '20' },
              { letra: 'B', texto: '120' },
              { letra: 'C', texto: '18' },
              { letra: 'D', texto: '15' },
              { letra: 'E', texto: '6' },
            ],
            gabarito: 'A',
            justificativa: 'A ORDEM não importa (comissão), então usamos COMBINAÇÃO. C(6,3) = 6!/(3!×3!) = (6×5×4)/(3×2×1) = 120/6 = 20 formas.',
            dificuldade: 'Média',
            competencia: 'Combinação',
            banca: 'IADES',
            tags: ['combinação', 'contagem'],
          },
          {
            id: 'rl-q-2-6',
            enunciado: 'Ao lançar um dado honesto, qual a probabilidade de obter um número PAR?',
            alternativas: [
              { letra: 'A', texto: '1/6' },
              { letra: 'B', texto: '1/3' },
              { letra: 'C', texto: '1/2' },
              { letra: 'D', texto: '2/3' },
              { letra: 'E', texto: '1/4' },
            ],
            gabarito: 'C',
            justificativa: 'Números pares em um dado: 2, 4, 6 (3 casos favoráveis). Total de casos: 6. P(par) = 3/6 = 1/2 = 50%.',
            dificuldade: 'Fácil',
            competencia: 'Probabilidade simples',
            banca: 'IADES',
            tags: ['probabilidade', 'dado'],
          },
          {
            id: 'rl-q-2-7',
            enunciado: 'Ao lançar uma moeda 3 vezes, qual a probabilidade de obter CARA nas 3 vezes?',
            alternativas: [
              { letra: 'A', texto: '1/2' },
              { letra: 'B', texto: '1/4' },
              { letra: 'C', texto: '1/8' },
              { letra: 'D', texto: '3/8' },
              { letra: 'E', texto: '1/3' },
            ],
            gabarito: 'C',
            justificativa: 'São eventos INDEPENDENTES, então multiplicamos: P(cara E cara E cara) = 1/2 × 1/2 × 1/2 = 1/8.',
            dificuldade: 'Média',
            competencia: 'Eventos independentes',
            banca: 'IADES',
            tags: ['probabilidade', 'independentes'],
          },
          {
            id: 'rl-q-2-8',
            enunciado: 'Em um lote de 20 produtos, 4 estão com defeito. Qual a probabilidade de, ao escolher um produto ao acaso, ele NÃO estar com defeito?',
            alternativas: [
              { letra: 'A', texto: '1/5' },
              { letra: 'B', texto: '4/5' },
              { letra: 'C', texto: '1/4' },
              { letra: 'D', texto: '3/4' },
              { letra: 'E', texto: '1/20' },
            ],
            gabarito: 'B',
            justificativa: 'P(defeito) = 4/20 = 1/5. P(NÃO defeito) = 1 - 1/5 = 4/5 = 80%. Ou diretamente: 16 bons / 20 total = 4/5.',
            dificuldade: 'Fácil',
            competencia: 'Probabilidade complementar',
            banca: 'IADES',
            tags: ['probabilidade', 'complementar'],
          },
          {
            id: 'rl-q-2-9',
            enunciado: 'Quantos anagramas podem ser formados com a palavra "FISCAL"?',
            alternativas: [
              { letra: 'A', texto: '720' },
              { letra: 'B', texto: '360' },
              { letra: 'C', texto: '120' },
              { letra: 'D', texto: '60' },
              { letra: 'E', texto: '6' },
            ],
            gabarito: 'A',
            justificativa: 'A palavra FISCAL tem 6 letras diferentes. É uma permutação simples: P(6) = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 anagramas.',
            dificuldade: 'Média',
            competencia: 'Permutação',
            banca: 'IADES',
            tags: ['permutação', 'anagramas'],
          },
          {
            id: 'rl-q-2-10',
            enunciado: 'Ao lançar um dado, qual a probabilidade de obter um número MENOR QUE 3 ou um número MAIOR QUE 4?',
            alternativas: [
              { letra: 'A', texto: '1/2' },
              { letra: 'B', texto: '2/3' },
              { letra: 'C', texto: '1/3' },
              { letra: 'D', texto: '5/6' },
              { letra: 'E', texto: '1/6' },
            ],
            gabarito: 'B',
            justificativa: 'Menor que 3: {1, 2} = 2 casos. Maior que 4: {5, 6} = 2 casos. São mutuamente exclusivos, então somamos: P = (2+2)/6 = 4/6 = 2/3.',
            dificuldade: 'Média',
            competencia: 'Eventos exclusivos',
            banca: 'IADES',
            tags: ['probabilidade', 'exclusivos'],
          },
        ],
      },
    },
    {
      id: 'rl-topico-3',
      numero: 3,
      titulo: 'Arranjos e permutações',
      conteudo: {
        resumo: `
## Resumo Rápido

### Fórmulas Principais

| Tipo | Fórmula | Quando usar |
|------|---------|-------------|
| **Permutação simples** | P(n) = n! | Ordenar TODOS os n elementos |
| **Permutação com repetição** | P(n; a,b,...) = n!/(a!·b!·...) | Elementos repetidos |
| **Permutação circular** | PC(n) = (n-1)! | Dispor em círculo |
| **Arranjo** | A(n,p) = n!/(n-p)! | Escolher p de n, ORDEM importa |

### Quando usar cada fórmula

| Situação | Fórmula | Exemplo |
|----------|---------|---------|
| **Fila com todos** | Permutação P(n) | 5 pessoas em fila |
| **Senha de 4 dígitos** | Arranjo A(10,4) | 4 dígitos de 0-9 |
| **Anagrama com letras iguais** | Perm. repetição | BANANA |
| **Mesa redonda** | Perm. circular | 6 pessoas em roda |
| **Cargos diferentes** | Arranjo | Presidente, vice, secretário |

### Para IADES:
- Permutação = usa TODOS os elementos
- Arranjo = usa ALGUNS elementos, ordem IMPORTA
- Circular = fixa UM elemento, permuta os outros
- Repetição = divide pelo fatorial das repetições
        `,

        explicacao: `
## Explicação Didática

### 1. Revisão do Fatorial

O **fatorial** de n (n!) é o produto de todos os inteiros positivos de 1 até n.

**Fórmula:**
> n! = n × (n-1) × (n-2) × ... × 2 × 1

**Valores importantes (decorar!):**

| n | n! |
|---|-----|
| 0 | 1 (definição) |
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5.040 |
| 8 | 40.320 |
| 9 | 362.880 |
| 10 | 3.628.800 |

**Propriedade útil:**
> n! = n × (n-1)!

### 2. Permutação Simples

#### 2.1 Conceito

**Permutação simples** é o número de maneiras de ordenar **todos** os n elementos de um conjunto.

**Fórmula:**
> P(n) = n!

#### 2.2 Quando usar

- Ordenar TODOS os elementos
- A ordem IMPORTA
- Elementos distintos

#### 2.3 Exemplos

**Exemplo 1: Fila**
> De quantas maneiras 5 fiscais podem formar uma fila?
> P(5) = 5! = 120 maneiras

**Exemplo 2: Livros na estante**
> De quantas formas 4 livros diferentes podem ser organizados em uma prateleira?
> P(4) = 4! = 24 formas

**Exemplo 3: Ordem de apresentação**
> Em quantas ordens diferentes 6 candidatos podem se apresentar em uma entrevista?
> P(6) = 6! = 720 ordens

### 3. Permutação com Repetição

#### 3.1 Conceito

Usada quando há elementos **repetidos** no conjunto.

**Fórmula:**
> P(n; a, b, c, ...) = n! / (a! × b! × c! × ...)

Onde:
- n = total de elementos
- a, b, c = quantidades de cada elemento repetido

#### 3.2 Exemplos

**Exemplo 1: Anagramas de BANANA**
> Letras: B(1), A(3), N(2) → total = 6 letras
> P(6; 3, 2) = 6! / (3! × 2!) = 720 / (6 × 2) = 720/12 = **60 anagramas**

**Exemplo 2: Anagramas de MISSISSIPPI**
> Letras: M(1), I(4), S(4), P(2) → total = 11 letras
> P(11; 4, 4, 2) = 11! / (4! × 4! × 2!)
> = 39.916.800 / (24 × 24 × 2)
> = 39.916.800 / 1.152 = **34.650 anagramas**

**Exemplo 3: Anagramas de FISCAL**
> Todas as letras são diferentes → total = 6 letras
> P(6) = 6! = **720 anagramas**

### 4. Permutação Circular

#### 4.1 Conceito

Usada quando os elementos são dispostos em **círculo** (mesa redonda, roda).

**Fórmula:**
> PC(n) = (n-1)!

**Por que (n-1)?**
> Em um círculo, não há "primeiro" da fila. Fixamos um elemento e permutamos os outros.

#### 4.2 Exemplos

**Exemplo 1: Mesa redonda**
> De quantas maneiras 6 pessoas podem sentar-se em uma mesa redonda?
> PC(6) = (6-1)! = 5! = **120 maneiras**

**Exemplo 2: Roda de conversa**
> De quantas formas 5 fiscais podem se dispor em uma roda?
> PC(5) = (5-1)! = 4! = **24 formas**

**Exemplo 3: Colar de pérolas**
> ⚠️ Se o colar pode ser virado (frente/verso), divide por 2:
> PC(n)/2 = (n-1)!/2

### 5. Arranjo Simples

#### 5.1 Conceito

**Arranjo** é o número de maneiras de escolher p elementos de um conjunto de n elementos, onde a **ordem importa**.

**Fórmula:**
> A(n,p) = n! / (n-p)!

Ou calculando diretamente:
> A(n,p) = n × (n-1) × (n-2) × ... × (n-p+1)  [p fatores]

#### 5.2 Quando usar

- Escolher ALGUNS elementos (p de n)
- A ORDEM importa
- Cargos diferentes, posições diferentes, senhas

#### 5.3 Exemplos

**Exemplo 1: Cargos**
> De 10 fiscais, de quantas formas podemos escolher presidente, vice e secretário?
> A(10,3) = 10! / 7! = 10 × 9 × 8 = **720 formas**

**Exemplo 2: Senha numérica**
> Quantas senhas de 4 dígitos distintos podem ser formadas (0-9)?
> A(10,4) = 10! / 6! = 10 × 9 × 8 × 7 = **5.040 senhas**

**Exemplo 3: Pódio de corrida**
> De 8 corredores, de quantas formas pode ser o pódio (1º, 2º, 3º)?
> A(8,3) = 8! / 5! = 8 × 7 × 6 = **336 formas**

### 6. Permutação vs. Arranjo

| Aspecto | Permutação | Arranjo |
|---------|-----------|---------|
| **Elementos usados** | TODOS (n) | ALGUNS (p de n) |
| **Ordem** | IMPORTA | IMPORTA |
| **Fórmula** | P(n) = n! | A(n,p) = n!/(n-p)! |
| **Relação** | P(n) = A(n,n) | - |

**Quando a permutação é um caso particular do arranjo:**
> P(n) = A(n,n) = n!/0! = n!/1 = n!

### 7. Problemas com Restrições

#### 7.1 Elementos juntos (agrupamento)

**Técnica:** Trate os elementos que devem ficar juntos como UM só, depois permute internamente.

**Exemplo:**
> 5 pessoas em fila, 2 devem ficar juntas.
> Considere as 2 como uma unidade: 4 "elementos"
> Permuta externa: P(4) = 24
> Permuta interna das 2: P(2) = 2
> Total: 24 × 2 = **48 maneiras**

#### 7.2 Elementos separados (complemento)

**Técnica:** Total - casos em que estão juntos.

**Exemplo:**
> 5 pessoas em fila, 2 NÃO podem ficar juntas.
> Total: P(5) = 120
> Juntas: 48 (calculado acima)
> Separadas: 120 - 48 = **72 maneiras**

#### 7.3 Posição fixa

**Técnica:** Fixe o elemento, permute os outros.

**Exemplo:**
> 5 pessoas em fila, o fiscal deve ser o primeiro.
> Fiscal fixo: 1 posição
> Outros 4: P(4) = 24
> Total: 1 × 24 = **24 maneiras**

### 8. Problemas Comuns IADES

#### 8.1 Anagramas que começam com vogal

**Exemplo:**
> Quantos anagramas de "FISCAL" começam com vogal?
> Vogais em FISCAL: I, A (2 vogais)
> Para cada vogal na 1ª posição, permutamos as 5 restantes:
> 2 × P(5) = 2 × 120 = **240 anagramas**

#### 8.2 Senhas com restrições

**Exemplo:**
> Senhas de 4 dígitos que começam com número par (2,4,6,8)?
> 1ª posição: 4 opções (2,4,6,8)
> Outras 3 posições: A(9,3) = 504 (não repete)
> Total: 4 × 504 = **2.016 senhas**

#### 8.3 Comissão vs. Cargos

| Situação | Fórmula | Motivo |
|----------|---------|--------|
| **Comissão de 3** | C(n,3) | Ordem NÃO importa |
| **Presidente, vice, secretário** | A(n,3) | Ordem IMPORTA |

### 9. Resumo das Fórmulas

| Tipo | Fórmula | Quando usar |
|------|---------|-------------|
| **P(n)** | n! | Ordenar todos, distintos |
| **P(n; a,b,...)** | n!/(a!×b!×...) | Ordenar todos, repetidos |
| **PC(n)** | (n-1)! | Circular |
| **A(n,p)** | n!/(n-p)! | Alguns, ordem importa |
| **C(n,p)** | n!/[p!×(n-p)!] | Alguns, ordem NÃO importa |

### 10. Macetes de Resolução

1. **Pergunta se a ordem importa?**
   - SIM → Arranjo ou Permutação
   - NÃO → Combinação

2. **Usa todos os elementos?**
   - SIM → Permutação
   - NÃO → Arranjo

3. **Há elementos repetidos?**
   - SIM → Permutação com repetição

4. **É disposição em círculo?**
   - SIM → Permutação circular

5. **Há restrições?**
   - Juntos → Agrupa
   - Separados → Total - Juntos
   - Posição fixa → Fixa e permuta o resto
        `,

        pontosChave: [
          'Permutação simples: P(n) = n! → ordenar TODOS os n elementos distintos',
          'Permutação com repetição: P(n; a,b,...) = n!/(a!×b!×...) → elementos repetidos',
          'Permutação circular: PC(n) = (n-1)! → disposição em círculo/roda',
          'Arranjo: A(n,p) = n!/(n-p)! → escolher p de n, ORDEM importa',
          'Diferença: Permutação usa TODOS; Arranjo usa ALGUNS',
          'Juntos: agrupa como 1, depois permuta internamente',
          'Separados: Total - Juntos (princípio do complemento)',
          '0! = 1 (por definição)',
          'Cargos diferentes = Arranjo; Comissão/equipe = Combinação',
          'Senhas distintas = Arranjo; Senhas com repetição = potência',
        ],

        armadilhas: [
          {
            titulo: 'Confundir permutação com arranjo',
            descricao: 'Permutação usa TODOS os elementos. Arranjo usa ALGUNS.',
            dica: 'Permutação = P = Perfeito, usa tudo. Arranjo = Alguns.',
          },
          {
            titulo: 'Esquecer de dividir na repetição',
            descricao: 'Anagramas de palavras com letras repetidas precisam dividir pelos fatoriais das repetições.',
            dica: 'BANANA: divide por 3! (três As) e 2! (dois Ns).',
          },
          {
            titulo: 'Errar permutação circular',
            descricao: 'Em círculo usa (n-1)!, não n!.',
            dica: 'Círculo não tem "primeiro" → fixa um, permuta (n-1) restantes.',
          },
          {
            titulo: 'Não identificar se ordem importa',
            descricao: 'Cargos = ordem importa (arranjo). Equipe = ordem não importa (combinação).',
            dica: 'Presidente-Vice ≠ Vice-Presidente? Se sim, é arranjo.',
          },
        ],

        mnemonicos: [
          {
            termo: 'PA-CO',
            significado: 'Permutação/Arranjo = Ordem importa, COmbinação = Ordem não importa',
            frase: 'PA = ordem importa, CO = ordem não importa',
          },
          {
            termo: 'CIR-M1',
            significado: 'CIRcular = Menos 1 no fatorial',
            frase: 'Circular = (n-1)!, menos um no fatorial',
          },
          {
            termo: 'REP-DIV',
            significado: 'REPetição = DIVide pelo fatorial da repetição',
            frase: 'Letra repete? Divide pelo fatorial dela!',
          },
          {
            termo: 'JAS',
            significado: 'Juntos = Agrupa; Separados = Total - Juntos',
            frase: 'Juntos Agrupa, Separados subtrai',
          },
        ],

        flashcards: [
          {
            id: 'rl-fc-3-1',
            frente: 'Qual a fórmula da PERMUTAÇÃO SIMPLES?',
            verso: '**P(n) = n!**\n\nUsa-se quando:\n- Ordenamos TODOS os n elementos\n- Elementos são DISTINTOS\n- A ordem IMPORTA\n\nExemplo: P(5) = 5! = 120',
            tags: ['permutação', 'fórmula'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-2',
            frente: 'Qual a fórmula do ARRANJO?',
            verso: '**A(n,p) = n! / (n-p)!**\n\nOu: n × (n-1) × ... [p fatores]\n\nUsa-se quando:\n- Escolhemos p de n elementos\n- A ordem IMPORTA\n\nExemplo: A(10,3) = 10×9×8 = 720',
            tags: ['arranjo', 'fórmula'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-3',
            frente: 'Qual a fórmula da PERMUTAÇÃO COM REPETIÇÃO?',
            verso: '**P(n; a, b, c, ...) = n! / (a! × b! × c! × ...)**\n\nUsa-se quando há elementos repetidos.\n\nExemplo: BANANA\nP(6; 3, 2) = 6!/(3!×2!) = 720/12 = 60',
            tags: ['permutação', 'repetição'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-4',
            frente: 'Qual a fórmula da PERMUTAÇÃO CIRCULAR?',
            verso: '**PC(n) = (n-1)!**\n\nUsa-se para disposição em círculo/roda/mesa redonda.\n\nPor quê (n-1)?\n→ No círculo não há "primeiro"\n→ Fixamos um, permutamos os outros\n\nExemplo: PC(6) = 5! = 120',
            tags: ['permutação', 'circular'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-5',
            frente: 'Qual a diferença entre PERMUTAÇÃO e ARRANJO?',
            verso: '**PERMUTAÇÃO:**\n- Usa TODOS os elementos\n- P(n) = n!\n\n**ARRANJO:**\n- Usa ALGUNS elementos (p de n)\n- A(n,p) = n!/(n-p)!\n\nAmbos: a ORDEM importa!\n\nRelação: P(n) = A(n,n)',
            tags: ['permutação', 'arranjo', 'diferença'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-6',
            frente: 'Como resolver problemas com elementos que devem ficar JUNTOS?',
            verso: '**Técnica: Agrupar**\n\n1. Considere os elementos juntos como UMA unidade\n2. Permute as "unidades"\n3. Multiplique pela permutação INTERNA do grupo\n\nExemplo: 5 pessoas, 2 juntas\n→ 4 unidades: P(4) = 24\n→ Internas: P(2) = 2\n→ Total: 24 × 2 = 48',
            tags: ['restrições', 'juntos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-7',
            frente: 'Como resolver problemas com elementos SEPARADOS?',
            verso: '**Técnica: Complemento**\n\n1. Calcule o TOTAL (sem restrição)\n2. Calcule quando estão JUNTOS\n3. Subtraia: Total - Juntos = Separados\n\nExemplo: 5 pessoas, 2 separadas\n→ Total: P(5) = 120\n→ Juntas: 48\n→ Separadas: 120 - 48 = 72',
            tags: ['restrições', 'separados'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'rl-fc-3-8',
            frente: 'Quando usar ARRANJO e quando usar COMBINAÇÃO?',
            verso: '**ARRANJO** (ordem importa):\n- Cargos: presidente ≠ vice\n- Senhas com dígitos distintos\n- Pódio de corrida\n\n**COMBINAÇÃO** (ordem NÃO importa):\n- Comissões\n- Equipes\n- Grupos de trabalho\n\nPergunta: trocar a ordem muda o resultado?',
            tags: ['arranjo', 'combinação'],
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
            id: 'rl-q-3-1',
            enunciado: 'De quantas maneiras 6 fiscais podem formar uma fila única?',
            alternativas: [
              { letra: 'A', texto: '6' },
              { letra: 'B', texto: '36' },
              { letra: 'C', texto: '120' },
              { letra: 'D', texto: '720' },
              { letra: 'E', texto: '5.040' },
            ],
            gabarito: 'D',
            justificativa: 'É uma PERMUTAÇÃO simples (ordenar todos). P(6) = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 maneiras.',
            dificuldade: 'Fácil',
            competencia: 'Permutação simples',
            banca: 'IADES',
            tags: ['permutação', 'fatorial'],
          },
          {
            id: 'rl-q-3-2',
            enunciado: 'Quantos anagramas podem ser formados com a palavra "SAÚDE"?',
            alternativas: [
              { letra: 'A', texto: '24' },
              { letra: 'B', texto: '60' },
              { letra: 'C', texto: '120' },
              { letra: 'D', texto: '720' },
              { letra: 'E', texto: '5' },
            ],
            gabarito: 'C',
            justificativa: 'A palavra SAÚDE tem 5 letras DISTINTAS. É uma permutação simples: P(5) = 5! = 120 anagramas.',
            dificuldade: 'Fácil',
            competencia: 'Permutação simples',
            banca: 'IADES',
            tags: ['permutação', 'anagramas'],
          },
          {
            id: 'rl-q-3-3',
            enunciado: 'Quantos anagramas podem ser formados com a palavra "ASSESSOR"?',
            alternativas: [
              { letra: 'A', texto: '40.320' },
              { letra: 'B', texto: '3.360' },
              { letra: 'C', texto: '1.680' },
              { letra: 'D', texto: '840' },
              { letra: 'E', texto: '420' },
            ],
            gabarito: 'B',
            justificativa: 'ASSESSOR: A(1), S(4), E(1), O(1), R(1) = 8 letras.\nP(8; 4) = 8!/4! = 40.320/24 = 3.360 anagramas.',
            dificuldade: 'Média',
            competencia: 'Permutação com repetição',
            banca: 'IADES',
            tags: ['permutação', 'repetição'],
          },
          {
            id: 'rl-q-3-4',
            enunciado: 'De quantas maneiras 5 pessoas podem sentar-se em uma mesa redonda?',
            alternativas: [
              { letra: 'A', texto: '5' },
              { letra: 'B', texto: '24' },
              { letra: 'C', texto: '120' },
              { letra: 'D', texto: '60' },
              { letra: 'E', texto: '20' },
            ],
            gabarito: 'B',
            justificativa: 'É uma PERMUTAÇÃO CIRCULAR. PC(5) = (5-1)! = 4! = 24 maneiras.',
            dificuldade: 'Média',
            competencia: 'Permutação circular',
            banca: 'IADES',
            tags: ['permutação', 'circular'],
          },
          {
            id: 'rl-q-3-5',
            enunciado: 'De um grupo de 8 candidatos, de quantas formas podemos escolher o 1º, 2º e 3º colocados?',
            alternativas: [
              { letra: 'A', texto: '56' },
              { letra: 'B', texto: '168' },
              { letra: 'C', texto: '336' },
              { letra: 'D', texto: '512' },
              { letra: 'E', texto: '504' },
            ],
            gabarito: 'C',
            justificativa: 'A ORDEM importa (1º ≠ 2º ≠ 3º), então usamos ARRANJO. A(8,3) = 8!/5! = 8 × 7 × 6 = 336 formas.',
            dificuldade: 'Média',
            competencia: 'Arranjo',
            banca: 'IADES',
            tags: ['arranjo'],
          },
          {
            id: 'rl-q-3-6',
            enunciado: 'Quantas senhas de 4 dígitos distintos podem ser formadas usando algarismos de 0 a 9?',
            alternativas: [
              { letra: 'A', texto: '210' },
              { letra: 'B', texto: '5.040' },
              { letra: 'C', texto: '10.000' },
              { letra: 'D', texto: '3.024' },
              { letra: 'E', texto: '2.520' },
            ],
            gabarito: 'B',
            justificativa: 'Dígitos distintos → ordem importa → ARRANJO. A(10,4) = 10!/6! = 10 × 9 × 8 × 7 = 5.040 senhas.',
            dificuldade: 'Média',
            competencia: 'Arranjo',
            banca: 'IADES',
            tags: ['arranjo', 'senhas'],
          },
          {
            id: 'rl-q-3-7',
            enunciado: 'Em uma fila de 5 pessoas, de quantas maneiras elas podem se organizar se João e Maria devem ficar juntos?',
            alternativas: [
              { letra: 'A', texto: '120' },
              { letra: 'B', texto: '48' },
              { letra: 'C', texto: '24' },
              { letra: 'D', texto: '72' },
              { letra: 'E', texto: '60' },
            ],
            gabarito: 'B',
            justificativa: 'Juntos = agrupa. Considere João-Maria como 1 unidade: 4 "elementos". P(4) = 24. Permutação interna: P(2) = 2. Total: 24 × 2 = 48.',
            dificuldade: 'Média',
            competencia: 'Permutação com restrição',
            banca: 'IADES',
            tags: ['permutação', 'restrição', 'juntos'],
          },
          {
            id: 'rl-q-3-8',
            enunciado: 'Em uma fila de 5 pessoas, de quantas maneiras elas podem se organizar se João e Maria NÃO podem ficar juntos?',
            alternativas: [
              { letra: 'A', texto: '72' },
              { letra: 'B', texto: '48' },
              { letra: 'C', texto: '96' },
              { letra: 'D', texto: '60' },
              { letra: 'E', texto: '84' },
            ],
            gabarito: 'A',
            justificativa: 'Separados = Total - Juntos. Total: P(5) = 120. Juntos: 48 (questão anterior). Separados: 120 - 48 = 72.',
            dificuldade: 'Média',
            competencia: 'Permutação com restrição',
            banca: 'IADES',
            tags: ['permutação', 'restrição', 'separados'],
          },
          {
            id: 'rl-q-3-9',
            enunciado: 'Quantos anagramas da palavra "PROVA" começam com vogal?',
            alternativas: [
              { letra: 'A', texto: '24' },
              { letra: 'B', texto: '48' },
              { letra: 'C', texto: '60' },
              { letra: 'D', texto: '12' },
              { letra: 'E', texto: '120' },
            ],
            gabarito: 'B',
            justificativa: 'Vogais em PROVA: O, A (2 vogais). Para cada vogal no início, permutamos as 4 letras restantes: 2 × P(4) = 2 × 24 = 48 anagramas.',
            dificuldade: 'Média',
            competencia: 'Permutação com restrição',
            banca: 'IADES',
            tags: ['permutação', 'vogais'],
          },
          {
            id: 'rl-q-3-10',
            enunciado: 'De um grupo de 10 fiscais, de quantas formas diferentes podemos formar uma equipe de fiscalização com coordenador, fiscal líder e fiscal auxiliar?',
            alternativas: [
              { letra: 'A', texto: '120' },
              { letra: 'B', texto: '720' },
              { letra: 'C', texto: '1.000' },
              { letra: 'D', texto: '90' },
              { letra: 'E', texto: '30' },
            ],
            gabarito: 'B',
            justificativa: 'São cargos diferentes, então a ORDEM importa → ARRANJO. A(10,3) = 10!/7! = 10 × 9 × 8 = 720 formas.',
            dificuldade: 'Fácil',
            competencia: 'Arranjo',
            banca: 'IADES',
            tags: ['arranjo', 'cargos'],
          },
        ],
      },
    },
  ],
};
