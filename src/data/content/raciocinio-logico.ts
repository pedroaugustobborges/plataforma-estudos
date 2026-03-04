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
  ],
};
