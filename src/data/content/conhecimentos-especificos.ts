import type { Materia } from '../../types';

export const conhecimentosEspecificos: Materia = {
  id: 'conhecimentos-especificos',
  nome: 'Conhecimentos Específicos',
  sigla: 'CE',
  descricao: 'Vigilância Sanitária, Políticas de Saúde e Legislação Sanitária',
  cor: '#4caf50',
  icone: 'HealthAndSafety',
  topicos: [
    {
      id: 'ce-topico-1',
      numero: 1,
      titulo: 'Políticas públicas de saúde no Brasil',
      conteudo: {
        resumo: `
## Resumo Rápido

### Linha do Tempo das Políticas de Saúde

| Período | Modelo | Característica |
|---------|--------|----------------|
| Até 1923 | Sanitarismo campanhista | Foco em epidemias |
| 1923-1988 | Previdenciário | Saúde para trabalhadores formais |
| 1988+ | SUS | Saúde como DIREITO de todos |

### Marco Legal Fundamental
- **CF/1988, Art. 196**: "A saúde é direito de todos e dever do Estado"
- **Lei 8.080/1990**: Lei Orgânica da Saúde (organização do SUS)
- **Lei 8.142/1990**: Participação social e financiamento

### Princípios do SUS (Decorar!)

**DOUTRINÁRIOS:**
- **Universalidade**: todos têm direito
- **Integralidade**: atenção completa
- **Equidade**: tratar desiguais desigualmente

**ORGANIZACIONAIS:**
- Descentralização
- Regionalização e Hierarquização
- Participação da comunidade

### Para IADES - Vigilância Sanitária:
- VISA integra o SUS (é ação de saúde)
- Lei 9.782/1999: criou a ANVISA
- Poder de polícia sanitária
        `,

        explicacao: `
## Explicação Didática

### 1. Evolução Histórica das Políticas de Saúde no Brasil

#### 1.1 Período Colonial e Imperial (até 1889)
- Saúde não era responsabilidade do Estado
- Assistência por instituições religiosas (Santas Casas)
- Medicina apenas para quem podia pagar

#### 1.2 Sanitarismo Campanhista (1889-1930)
- Foco em **doenças epidêmicas** (febre amarela, varíola, peste)
- Campanhas de **vacinação obrigatória**
- **Oswaldo Cruz**: Revolta da Vacina (1904)
- Modelo **autoritário e militarizado**

#### 1.3 Modelo Previdenciário (1930-1988)
| Marco | Descrição |
|-------|-----------|
| 1923 - Lei Eloy Chaves | Cria as CAPs (Caixas de Aposentadoria e Pensões) |
| 1930 - IAPs | Institutos por categoria profissional |
| 1966 - INPS | Unificação dos institutos |
| 1977 - INAMPS | Assistência médica da previdência |

**Características:**
- Saúde vinculada ao **trabalho formal**
- Quem não contribuía: filantropia ou pagamento
- Sistema fragmentado e excludente
- Dicotomia: preventivo (MS) vs. curativo (INAMPS)

#### 1.4 Movimento da Reforma Sanitária (1970-1988)
- Crítica ao modelo excludente
- Luta por saúde como **direito de cidadania**
- **8ª Conferência Nacional de Saúde (1986)**: marco histórico
- Lema: "Saúde é democracia, democracia é saúde"

### 2. O Sistema Único de Saúde (SUS)

#### 2.1 Base Constitucional
**Art. 196, CF/88:**
> "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação."

**Art. 198, CF/88:** Define a organização do SUS

#### 2.2 Legislação Infraconstitucional

| Lei | Conteúdo |
|-----|----------|
| **Lei 8.080/1990** | Lei Orgânica da Saúde - organização do SUS |
| **Lei 8.142/1990** | Participação social e financiamento |
| **Decreto 7.508/2011** | Regulamenta a Lei 8.080 |
| **LC 141/2012** | Financiamento da saúde |

### 3. Princípios do SUS

#### 3.1 Princípios Doutrinários (Ideológicos)

**UNIVERSALIDADE**
- TODOS têm direito à saúde
- Independente de contribuição
- Brasileiros e estrangeiros em território nacional

**INTEGRALIDADE**
- Atenção completa: promoção, prevenção, cura, reabilitação
- Não fragmentar o cuidado
- Ver o indivíduo como um todo

**EQUIDADE**
- Tratar os **desiguais de forma desigual**
- Priorizar quem mais precisa
- Justiça social na saúde

#### 3.2 Princípios Organizacionais (Operacionais)

**DESCENTRALIZAÇÃO**
- Distribuição de poder entre União, Estados e Municípios
- **Direção única** em cada esfera:
  - União: Ministério da Saúde
  - Estados: Secretarias Estaduais (SES)
  - Municípios: Secretarias Municipais (SMS)

**REGIONALIZAÇÃO E HIERARQUIZAÇÃO**
- Organização por níveis de complexidade:
  - **Atenção Básica** (UBS, ESF)
  - **Média Complexidade** (especialidades)
  - **Alta Complexidade** (hospitais, UTI)
- Regiões de Saúde para garantir acesso

**PARTICIPAÇÃO DA COMUNIDADE**
- **Conselhos de Saúde**: deliberativos e permanentes
- **Conferências de Saúde**: a cada 4 anos
- Composição paritária (50% usuários)

### 4. Organização do SUS

#### 4.1 Instâncias de Gestão
| Nível | Gestor | Instância Colegiada |
|-------|--------|---------------------|
| Federal | Ministério da Saúde | CIT (Comissão Intergestores Tripartite) |
| Estadual | SES | CIB (Comissão Intergestores Bipartite) |
| Municipal | SMS | CIR (Comissão Intergestores Regional) |

#### 4.2 Controle Social
- **Conselhos de Saúde**: federal, estaduais, municipais
- **Composição**: 50% usuários, 25% trabalhadores, 25% gestores/prestadores
- Caráter: permanente e **deliberativo**

### 5. Vigilância em Saúde no SUS

A Vigilância em Saúde integra o SUS e compreende:

| Componente | Objeto |
|------------|--------|
| **Vigilância Epidemiológica** | Doenças e agravos |
| **Vigilância Sanitária** | Produtos, serviços, ambientes |
| **Vigilância Ambiental** | Fatores ambientais de risco |
| **Saúde do Trabalhador** | Riscos ocupacionais |

### 6. Vigilância Sanitária e o SUS

#### 6.1 Conceito Legal (Lei 8.080/1990, art. 6º, §1º)
> "Entende-se por vigilância sanitária um conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde."

#### 6.2 Sistema Nacional de Vigilância Sanitária (SNVS)
- **ANVISA** (federal): coordena, normatiza, fiscaliza
- **VISA Estaduais**: complementam, fiscalizam
- **VISA Municipais**: executam, fiscalizam

#### 6.3 A ANVISA
- Criada pela **Lei 9.782/1999**
- **Autarquia** sob regime especial
- Vinculada ao Ministério da Saúde
- Sede em Brasília, pode atuar em todo território

### 7. Financiamento do SUS

#### 7.1 Fontes de Recursos
- União: orçamento fiscal e seguridade social
- Estados: mínimo 12% da receita
- Municípios: mínimo 15% da receita
- (LC 141/2012)

#### 7.2 Transferências
- **Fundo a Fundo**: automático, sem convênio
- Fundos de Saúde: federal, estaduais, municipais

### 8. Atenção à Saúde

#### 8.1 Níveis de Atenção
| Nível | Características | Exemplos |
|-------|-----------------|----------|
| **Primária/Básica** | Porta de entrada, longitudinalidade | UBS, ESF, ACS |
| **Secundária** | Especialidades, média complexidade | Ambulatórios, CAPS |
| **Terciária** | Alta complexidade | Hospitais, UTI, transplantes |

#### 8.2 Redes de Atenção à Saúde (RAS)
- Organização integrada de serviços
- Atenção Básica como coordenadora
- Linhas de cuidado (ex: materno-infantil, oncológica)
        `,

        pontosChave: [
          'CF/88, Art. 196: "Saúde é direito de todos e dever do Estado"',
          'Princípios DOUTRINÁRIOS: Universalidade, Integralidade, Equidade',
          'Princípios ORGANIZACIONAIS: Descentralização, Regionalização, Participação',
          'Lei 8.080/1990 = Lei Orgânica da Saúde (organização do SUS)',
          'Lei 8.142/1990 = Participação social e financiamento',
          'Conselhos de Saúde: 50% usuários, deliberativos e permanentes',
          'Conferências de Saúde: a cada 4 anos, propositivas',
          '8ª Conferência Nacional de Saúde (1986) = marco da Reforma Sanitária',
          'ANVISA: autarquia federal, criada pela Lei 9.782/1999',
          'VISA integra o SUS como parte da Vigilância em Saúde',
        ],

        armadilhas: [
          {
            titulo: 'Confundir Equidade com Igualdade',
            descricao: 'Igualdade = tratar todos igual. Equidade = tratar desiguais de forma desigual para alcançar justiça.',
            dica: 'Equidade considera as diferenças. Quem precisa mais, recebe mais.',
          },
          {
            titulo: 'Errar a composição do Conselho de Saúde',
            descricao: 'A composição é paritária: 50% USUÁRIOS, 25% trabalhadores, 25% gestores/prestadores.',
            dica: 'Usuários = metade. É a participação mais importante.',
          },
          {
            titulo: 'Trocar Lei 8.080 com Lei 8.142',
            descricao: '8.080 = organização do SUS. 8.142 = participação e financiamento.',
            dica: '8.080 = O SUS (organização). 8.142 = O povo e o $ (participação e financiamento).',
          },
          {
            titulo: 'Achar que Conselhos são consultivos',
            descricao: 'Os Conselhos de Saúde são DELIBERATIVOS (decidem), não apenas consultivos.',
            dica: 'Conselho delibera. Conferência propõe.',
          },
        ],

        mnemonicos: [
          {
            termo: 'UIE',
            significado: 'Universalidade, Integralidade, Equidade',
            frase: 'Os princípios doutrinários do SUS: UIE (ui-e!)',
          },
          {
            termo: 'DRP',
            significado: 'Descentralização, Regionalização, Participação',
            frase: 'Princípios organizacionais: DRP (o SUS tem DRP)',
          },
          {
            termo: '80-42',
            significado: 'Lei 8.080 (organização) e Lei 8.142 (participação)',
            frase: '80 = Organização / 42 = Quem participa (4 + 2 = 6 = sexto sentido da comunidade)',
          },
          {
            termo: 'VESA',
            significado: 'Vigilância Epidemiológica, Sanitária, Ambiental',
            frase: 'Componentes da Vigilância em Saúde: VESA + Saúde do Trabalhador',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-1-1',
            frente: 'O que diz o Art. 196 da Constituição Federal sobre saúde?',
            verso: '"A saúde é **DIREITO DE TODOS** e **DEVER DO ESTADO**, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e ao acesso **UNIVERSAL E IGUALITÁRIO** às ações e serviços."',
            tags: ['constituição', 'art. 196'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-2',
            frente: 'Quais são os três princípios DOUTRINÁRIOS do SUS?',
            verso: '**1. UNIVERSALIDADE**\n→ Todos têm direito\n\n**2. INTEGRALIDADE**\n→ Atenção completa\n\n**3. EQUIDADE**\n→ Tratar desiguais desigualmente\n\nMnemônico: UIE',
            tags: ['princípios', 'doutrinários'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-3',
            frente: 'Qual a diferença entre EQUIDADE e IGUALDADE?',
            verso: '**IGUALDADE**: tratar todos de forma igual\n\n**EQUIDADE**: tratar os **desiguais de forma desigual** para alcançar justiça social\n\nExemplo: investir mais em regiões mais carentes é EQUIDADE.',
            tags: ['equidade', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-4',
            frente: 'Qual a composição dos Conselhos de Saúde?',
            verso: '**50% USUÁRIOS**\n25% Trabalhadores de saúde\n25% Gestores/prestadores\n\nCaráter: **DELIBERATIVO** (decide) e PERMANENTE\n\n⚠️ Usuários sempre são METADE!',
            tags: ['conselho', 'composição'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-5',
            frente: 'Qual a diferença entre Lei 8.080 e Lei 8.142?',
            verso: '**Lei 8.080/1990**:\n→ Lei Orgânica da Saúde\n→ ORGANIZAÇÃO do SUS\n\n**Lei 8.142/1990**:\n→ PARTICIPAÇÃO social\n→ FINANCIAMENTO\n→ Conselhos e Conferências',
            tags: ['legislação', 'leis orgânicas'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-6',
            frente: 'O que foi a 8ª Conferência Nacional de Saúde (1986)?',
            verso: '**Marco da Reforma Sanitária Brasileira**\n\nPrincipais contribuições:\n- Saúde como direito de cidadania\n- Conceito ampliado de saúde\n- Bases para o SUS na CF/88\n\nLema: "Saúde é democracia"',
            tags: ['reforma sanitária', 'história'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-7',
            frente: 'Quais são os componentes da Vigilância em Saúde?',
            verso: '1. **Vigilância Epidemiológica**\n   → Doenças e agravos\n\n2. **Vigilância Sanitária**\n   → Produtos, serviços, ambientes\n\n3. **Vigilância Ambiental**\n   → Fatores ambientais\n\n4. **Saúde do Trabalhador**\n   → Riscos ocupacionais',
            tags: ['vigilância', 'componentes'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-1-8',
            frente: 'O que é a ANVISA e qual lei a criou?',
            verso: '**ANVISA** = Agência Nacional de Vigilância Sanitária\n\n- **Autarquia** federal sob regime especial\n- Criada pela **Lei 9.782/1999**\n- Vinculada ao Ministério da Saúde\n- Coordena o SNVS',
            tags: ['ANVISA', 'legislação'],
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
            id: 'ce-q-1-1',
            enunciado: 'De acordo com a Constituição Federal de 1988, a saúde é:',
            alternativas: [
              { letra: 'A', texto: 'Direito de todos e dever do Estado.' },
              { letra: 'B', texto: 'Direito apenas dos trabalhadores contribuintes.' },
              { letra: 'C', texto: 'Responsabilidade exclusiva do setor privado.' },
              { letra: 'D', texto: 'Privilégio das classes mais favorecidas.' },
              { letra: 'E', texto: 'Atribuição exclusiva dos municípios.' },
            ],
            gabarito: 'A',
            justificativa: 'O Art. 196 da CF/88 estabelece que "a saúde é direito de todos e dever do Estado", consagrando a universalidade do acesso à saúde no Brasil.',
            dificuldade: 'Fácil',
            competencia: 'Base constitucional',
            banca: 'IADES',
            tags: ['constituição', 'art. 196'],
          },
          {
            id: 'ce-q-1-2',
            enunciado: 'Os princípios doutrinários do SUS são:',
            alternativas: [
              { letra: 'A', texto: 'Descentralização, regionalização e hierarquização.' },
              { letra: 'B', texto: 'Universalidade, integralidade e equidade.' },
              { letra: 'C', texto: 'Participação, financiamento e controle social.' },
              { letra: 'D', texto: 'Prevenção, promoção e recuperação.' },
              { letra: 'E', texto: 'Eficiência, eficácia e economicidade.' },
            ],
            gabarito: 'B',
            justificativa: 'Os princípios DOUTRINÁRIOS (ideológicos) são: Universalidade, Integralidade e Equidade. Os princípios organizacionais são descentralização, regionalização e participação.',
            dificuldade: 'Fácil',
            competencia: 'Princípios do SUS',
            banca: 'IADES',
            tags: ['princípios', 'doutrinários'],
          },
          {
            id: 'ce-q-1-3',
            enunciado: 'A Lei 8.080/1990, conhecida como Lei Orgânica da Saúde, dispõe sobre:',
            alternativas: [
              { letra: 'A', texto: 'A participação da comunidade e o financiamento do SUS.' },
              { letra: 'B', texto: 'A organização e o funcionamento dos serviços de saúde.' },
              { letra: 'C', texto: 'A criação da ANVISA.' },
              { letra: 'D', texto: 'O código de ética dos profissionais de saúde.' },
              { letra: 'E', texto: 'A regulamentação dos planos de saúde privados.' },
            ],
            gabarito: 'B',
            justificativa: 'A Lei 8.080/1990 dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes. A participação e financiamento estão na Lei 8.142.',
            dificuldade: 'Média',
            competencia: 'Legislação do SUS',
            banca: 'IADES',
            tags: ['Lei 8.080', 'organização'],
          },
          {
            id: 'ce-q-1-4',
            enunciado: 'A composição dos Conselhos de Saúde, conforme a Lei 8.142/1990, deve garantir que os usuários representem:',
            alternativas: [
              { letra: 'A', texto: '25% dos membros.' },
              { letra: 'B', texto: '33% dos membros.' },
              { letra: 'C', texto: '50% dos membros.' },
              { letra: 'D', texto: '75% dos membros.' },
              { letra: 'E', texto: '100% dos membros.' },
            ],
            gabarito: 'C',
            justificativa: 'Os Conselhos de Saúde têm composição paritária: 50% de usuários, 25% de trabalhadores de saúde e 25% de gestores e prestadores de serviços.',
            dificuldade: 'Fácil',
            competencia: 'Controle social',
            banca: 'IADES',
            tags: ['conselho', 'composição'],
          },
          {
            id: 'ce-q-1-5',
            enunciado: 'O princípio da equidade no SUS significa:',
            alternativas: [
              { letra: 'A', texto: 'Tratar todos os cidadãos de forma absolutamente igual.' },
              { letra: 'B', texto: 'Oferecer atendimento apenas para os mais necessitados.' },
              { letra: 'C', texto: 'Priorizar o atendimento para quem pode pagar.' },
              { letra: 'D', texto: 'Tratar os desiguais de forma desigual, investindo mais onde há maior necessidade.' },
              { letra: 'E', texto: 'Restringir o acesso aos serviços de alta complexidade.' },
            ],
            gabarito: 'D',
            justificativa: 'Equidade significa tratar os desiguais de forma desigual, priorizando quem mais necessita. Não é tratar todos igual (isso seria igualdade), mas buscar a justiça social na saúde.',
            dificuldade: 'Média',
            competencia: 'Princípio da equidade',
            banca: 'IADES',
            tags: ['equidade', 'princípio'],
          },
          {
            id: 'ce-q-1-6',
            enunciado: 'A 8ª Conferência Nacional de Saúde, realizada em 1986, foi um marco histórico porque:',
            alternativas: [
              { letra: 'A', texto: 'Criou a ANVISA.' },
              { letra: 'B', texto: 'Estabeleceu as bases conceituais para a criação do SUS.' },
              { letra: 'C', texto: 'Extinguiu o INAMPS.' },
              { letra: 'D', texto: 'Criou os primeiros conselhos de saúde.' },
              { letra: 'E', texto: 'Privatizou os serviços de saúde no Brasil.' },
            ],
            gabarito: 'B',
            justificativa: 'A 8ª CNS (1986) foi o marco da Reforma Sanitária, estabelecendo as bases conceituais que fundamentaram a criação do SUS na Constituição de 1988.',
            dificuldade: 'Média',
            competencia: 'História das políticas de saúde',
            banca: 'IADES',
            tags: ['8ª CNS', 'reforma sanitária'],
          },
          {
            id: 'ce-q-1-7',
            enunciado: 'A Agência Nacional de Vigilância Sanitária (ANVISA) foi criada pela:',
            alternativas: [
              { letra: 'A', texto: 'Lei 8.080/1990.' },
              { letra: 'B', texto: 'Lei 8.142/1990.' },
              { letra: 'C', texto: 'Constituição Federal de 1988.' },
              { letra: 'D', texto: 'Lei 9.782/1999.' },
              { letra: 'E', texto: 'Lei 6.437/1977.' },
            ],
            gabarito: 'D',
            justificativa: 'A ANVISA foi criada pela Lei 9.782/1999, que define o Sistema Nacional de Vigilância Sanitária e cria a agência como autarquia sob regime especial.',
            dificuldade: 'Fácil',
            competencia: 'Legislação ANVISA',
            banca: 'IADES',
            tags: ['ANVISA', 'Lei 9.782'],
          },
          {
            id: 'ce-q-1-8',
            enunciado: 'São componentes da Vigilância em Saúde no âmbito do SUS, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Vigilância Epidemiológica.' },
              { letra: 'B', texto: 'Vigilância Sanitária.' },
              { letra: 'C', texto: 'Vigilância Ambiental em Saúde.' },
              { letra: 'D', texto: 'Saúde do Trabalhador.' },
              { letra: 'E', texto: 'Vigilância Patrimonial.' },
            ],
            gabarito: 'E',
            justificativa: 'Os componentes da Vigilância em Saúde são: Vigilância Epidemiológica, Vigilância Sanitária, Vigilância Ambiental e Saúde do Trabalhador. Vigilância Patrimonial não é componente.',
            dificuldade: 'Fácil',
            competencia: 'Vigilância em Saúde',
            banca: 'IADES',
            tags: ['vigilância', 'componentes'],
          },
          {
            id: 'ce-q-1-9',
            enunciado: 'A descentralização como princípio organizativo do SUS significa:',
            alternativas: [
              { letra: 'A', texto: 'Concentração das decisões no Ministério da Saúde.' },
              { letra: 'B', texto: 'Distribuição de responsabilidades entre União, Estados e Municípios com direção única em cada esfera.' },
              { letra: 'C', texto: 'Privatização dos serviços de saúde.' },
              { letra: 'D', texto: 'Transferência total da responsabilidade para os municípios.' },
              { letra: 'E', texto: 'Eliminação da participação federal na saúde.' },
            ],
            gabarito: 'B',
            justificativa: 'Descentralização significa distribuir poder e responsabilidades entre as três esferas de governo, com direção única em cada nível: MS (União), SES (Estados), SMS (Municípios).',
            dificuldade: 'Média',
            competencia: 'Descentralização',
            banca: 'IADES',
            tags: ['descentralização', 'organização'],
          },
          {
            id: 'ce-q-1-10',
            enunciado: 'Sobre os Conselhos de Saúde, é CORRETO afirmar que possuem caráter:',
            alternativas: [
              { letra: 'A', texto: 'Apenas consultivo e temporário.' },
              { letra: 'B', texto: 'Deliberativo e permanente.' },
              { letra: 'C', texto: 'Executivo e transitório.' },
              { letra: 'D', texto: 'Normativo e ocasional.' },
              { letra: 'E', texto: 'Fiscalizatório e eventual.' },
            ],
            gabarito: 'B',
            justificativa: 'Os Conselhos de Saúde são órgãos colegiados de caráter PERMANENTE e DELIBERATIVO (tomam decisões), conforme estabelecido na Lei 8.142/1990.',
            dificuldade: 'Fácil',
            competencia: 'Controle social',
            banca: 'IADES',
            tags: ['conselho', 'deliberativo'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-2',
      numero: 2,
      titulo: 'Sistema Único de Saúde (SUS): princípios, diretrizes, organização, níveis de atenção e participação social',
      conteudo: {
        resumo: `
## Resumo Rápido

### O SUS em Números

| Aspecto | Dado |
|---------|------|
| **Criação** | CF/1988, regulamentado em 1990 |
| **Cobertura** | ~190 milhões de brasileiros |
| **Princípios** | Universalidade, Integralidade, Equidade |
| **Gestão** | Tripartite (União, Estados, Municípios) |

### Princípios e Diretrizes

| Princípios DOUTRINÁRIOS | Diretrizes ORGANIZACIONAIS |
|-------------------------|---------------------------|
| Universalidade | Descentralização |
| Integralidade | Regionalização |
| Equidade | Hierarquização |
| | Participação da comunidade |

### Níveis de Atenção

| Nível | Complexidade | Exemplo |
|-------|--------------|---------|
| **Primário/Básico** | Baixa | UBS, ESF, ACS |
| **Secundário** | Média | Policlínicas, CAPS |
| **Terciário** | Alta | Hospitais, UTI |

### Participação Social

| Instância | Caráter | Periodicidade |
|-----------|---------|---------------|
| **Conselhos de Saúde** | Deliberativo | Permanente |
| **Conferências de Saúde** | Propositivo | A cada 4 anos |
        `,

        explicacao: `
## Explicação Didática

### 1. O Sistema Único de Saúde (SUS)

#### 1.1 Base Legal

| Norma | Conteúdo |
|-------|----------|
| **CF/1988 (arts. 196-200)** | Criação do SUS, direito à saúde |
| **Lei 8.080/1990** | Organização e funcionamento |
| **Lei 8.142/1990** | Participação social e financiamento |
| **Decreto 7.508/2011** | Regulamentação da Lei 8.080 |
| **LC 141/2012** | Financiamento mínimo da saúde |

#### 1.2 Conceito

O **SUS** é um sistema público de saúde brasileiro, considerado um dos maiores do mundo, que oferece acesso integral, universal e gratuito para toda a população.

**Características:**
- **Público**: financiado com recursos públicos
- **Universal**: para todos, sem discriminação
- **Integral**: promoção, prevenção, cura e reabilitação
- **Gratuito**: sem cobrança no ponto de atendimento

### 2. Princípios Doutrinários (Ideológicos)

São os valores que fundamentam o SUS:

#### 2.1 UNIVERSALIDADE

> "A saúde é direito de TODOS"

- Acesso a todas as pessoas
- Independente de contribuição
- Brasileiros E estrangeiros em território nacional
- Sem discriminação de qualquer natureza

#### 2.2 INTEGRALIDADE

> "Atenção COMPLETA"

- Promoção, prevenção, cura e reabilitação
- Serviços individuais e coletivos
- Ver o indivíduo como um todo
- Não fragmentar o cuidado

**Dimensões:**
- **Vertical**: todos os níveis (básica, média, alta complexidade)
- **Horizontal**: todos os aspectos (físico, mental, social)

#### 2.3 EQUIDADE

> "Tratar os DESIGUAIS de forma DESIGUAL"

- Investir mais onde há maior necessidade
- Priorizar populações vulneráveis
- Buscar a justiça social
- Diferente de igualdade (tratar todos igual)

**Exemplo:**
> Investir mais em saúde em regiões mais carentes é EQUIDADE.

### 3. Diretrizes Organizacionais (Operacionais)

São os princípios que orientam a organização do SUS:

#### 3.1 DESCENTRALIZAÇÃO

Distribuição de responsabilidades entre as três esferas de governo.

| Esfera | Gestor | Atribuições principais |
|--------|--------|------------------------|
| **Federal** | Ministério da Saúde | Normatização, coordenação nacional |
| **Estadual** | Secretaria Estadual (SES) | Coordenação regional, alta complexidade |
| **Municipal** | Secretaria Municipal (SMS) | Execução, atenção básica |

**Direção Única:**
- Cada esfera tem UM gestor
- Não há subordinação entre eles
- Atuação coordenada

#### 3.2 REGIONALIZAÇÃO

Organização dos serviços em **regiões de saúde** para garantir acesso a todos os níveis.

**Região de Saúde:**
- Espaço geográfico contínuo
- Conjunto de municípios
- Rede de serviços integrados
- Referência para atenção especializada

#### 3.3 HIERARQUIZAÇÃO

Organização por **níveis de complexidade** crescente:

| Nível | Complexidade | Serviços | Acesso |
|-------|--------------|----------|--------|
| **Atenção Básica** | Baixa | UBS, ESF | Porta de entrada |
| **Média Complexidade** | Média | Policlínicas, CAPS | Referência |
| **Alta Complexidade** | Alta | Hospitais, UTI | Referência |

#### 3.4 PARTICIPAÇÃO DA COMUNIDADE

Garantia de participação popular na gestão do SUS.

**Instâncias:**
- **Conselhos de Saúde**: deliberativos e permanentes
- **Conferências de Saúde**: propositivas, a cada 4 anos

### 4. Níveis de Atenção à Saúde

#### 4.1 ATENÇÃO PRIMÁRIA / BÁSICA

É a **porta de entrada** preferencial do SUS.

**Características:**
- Primeiro contato
- Longitudinalidade (acompanhamento contínuo)
- Coordenação do cuidado
- Território definido

**Serviços:**
| Serviço | Sigla | Descrição |
|---------|-------|-----------|
| Unidade Básica de Saúde | UBS | Consultas, vacinas, curativos |
| Estratégia Saúde da Família | ESF | Equipes multidisciplinares |
| Agente Comunitário de Saúde | ACS | Visitas domiciliares |
| Núcleo de Apoio à Saúde da Família | NASF | Equipe de apoio |

**Ações:**
- Promoção da saúde
- Prevenção de doenças
- Diagnóstico precoce
- Tratamento de casos simples
- Encaminhamento (referência)

#### 4.2 ATENÇÃO SECUNDÁRIA / MÉDIA COMPLEXIDADE

Serviços especializados que exigem mais recursos.

**Características:**
- Atendimento especializado
- Procedimentos ambulatoriais
- Acesso por encaminhamento (referência)

**Exemplos:**
- Consultas com especialistas
- Exames diagnósticos
- Pequenas cirurgias
- CAPS (saúde mental)
- CEO (saúde bucal)

#### 4.3 ATENÇÃO TERCIÁRIA / ALTA COMPLEXIDADE

Procedimentos de alto custo e alta tecnologia.

**Características:**
- Hospitais especializados
- Alta densidade tecnológica
- Profissionais especializados
- Alto custo

**Exemplos:**
- Internação hospitalar
- UTI
- Cirurgias complexas
- Transplantes
- Tratamento oncológico
- Hemodiálise

### 5. Redes de Atenção à Saúde (RAS)

#### 5.1 Conceito

As **RAS** são arranjos organizativos que integram ações e serviços de saúde de diferentes densidades tecnológicas.

#### 5.2 Características

- Atenção Básica como **coordenadora**
- Sistema de apoio (diagnóstico, farmacêutico)
- Sistema logístico (regulação, transporte)
- Governança

#### 5.3 Redes Temáticas

| Rede | Foco |
|------|------|
| **Rede Cegonha** | Materno-infantil |
| **Rede de Urgência e Emergência** | SAMU, UPA |
| **Rede de Atenção Psicossocial** | Saúde mental |
| **Rede de Cuidados à Pessoa com Deficiência** | Reabilitação |
| **Rede de Atenção às Doenças Crônicas** | Diabetes, hipertensão |

### 6. Participação Social

#### 6.1 Conselhos de Saúde

| Aspecto | Descrição |
|---------|-----------|
| **Natureza** | Colegiado |
| **Caráter** | DELIBERATIVO e permanente |
| **Composição** | 50% usuários, 25% trabalhadores, 25% gestores/prestadores |
| **Função** | Formular estratégias, controlar execução |
| **Níveis** | Nacional, estadual, municipal |

**Composição paritária:**
- 50% representantes dos **USUÁRIOS**
- 25% representantes dos **trabalhadores de saúde**
- 25% representantes do **governo e prestadores**

#### 6.2 Conferências de Saúde

| Aspecto | Descrição |
|---------|-----------|
| **Periodicidade** | A cada **4 anos** |
| **Caráter** | Propositivo |
| **Convocação** | Pelo Poder Executivo ou pelo Conselho |
| **Função** | Avaliar situação e propor diretrizes |
| **Níveis** | Municipal → Estadual → Nacional |

### 7. Instâncias de Pactuação

| Instância | Composição | Nível |
|-----------|------------|-------|
| **CIT** | MS + CONASS + CONASEMS | Federal |
| **CIB** | SES + COSEMS | Estadual |
| **CIR** | SES + SMS (região) | Regional |

**Legenda:**
- CIT: Comissão Intergestores Tripartite
- CIB: Comissão Intergestores Bipartite
- CIR: Comissão Intergestores Regional
- CONASS: Conselho Nacional de Secretários de Saúde
- CONASEMS: Conselho Nacional de Secretarias Municipais de Saúde

### 8. Vigilância Sanitária no SUS

A **Vigilância Sanitária** é parte integrante do SUS:

| Aspecto | Descrição |
|---------|-----------|
| **Base legal** | Lei 8.080/1990, art. 6º |
| **Conceito** | Ações de controle de riscos à saúde |
| **SNVS** | Sistema Nacional de Vigilância Sanitária |
| **ANVISA** | Coordena o SNVS (nível federal) |
| **VISA estadual** | Complementa e fiscaliza |
| **VISA municipal** | Executa ações locais |
        `,

        pontosChave: [
          'SUS criado pela CF/88, regulamentado pelas Leis 8.080 e 8.142 de 1990',
          'Princípios DOUTRINÁRIOS: Universalidade, Integralidade, Equidade (UIE)',
          'Diretrizes ORGANIZACIONAIS: Descentralização, Regionalização, Hierarquização, Participação',
          'Atenção Básica = porta de entrada preferencial, coordenadora do cuidado',
          'Níveis: Primário (UBS, ESF) → Secundário (especialidades) → Terciário (hospitais, UTI)',
          'Conselhos de Saúde: DELIBERATIVOS, permanentes, 50% usuários',
          'Conferências de Saúde: propositivas, a cada 4 ANOS',
          'Gestão tripartite: União (MS), Estados (SES), Municípios (SMS)',
          'CIT (tripartite), CIB (bipartite), CIR (regional) = instâncias de pactuação',
          'VISA integra o SUS como parte da Vigilância em Saúde',
        ],

        armadilhas: [
          {
            titulo: 'Confundir Conselho com Conferência',
            descricao: 'Conselho = deliberativo, permanente. Conferência = propositiva, a cada 4 anos.',
            dica: 'Conselho DECIDE (delibera). Conferência PROPÕE.',
          },
          {
            titulo: 'Errar a composição do Conselho',
            descricao: 'A composição é paritária: 50% usuários, 25% trabalhadores, 25% gestores/prestadores.',
            dica: 'USUÁRIOS = sempre METADE (50%).',
          },
          {
            titulo: 'Confundir hierarquização com subordinação',
            descricao: 'Hierarquização refere-se aos níveis de complexidade, não à subordinação entre gestores.',
            dica: 'Hierarquização = níveis de atenção. Não há hierarquia entre MS, SES e SMS.',
          },
          {
            titulo: 'Trocar porta de entrada',
            descricao: 'A Atenção Básica é a PORTA DE ENTRADA preferencial, não o hospital.',
            dica: 'Atenção Básica = primeiro contato, coordenadora do cuidado.',
          },
        ],

        mnemonicos: [
          {
            termo: 'UIE',
            significado: 'Universalidade, Integralidade, Equidade',
            frase: 'Princípios doutrinários: UIE (ui-e!)',
          },
          {
            termo: 'DRHP',
            significado: 'Descentralização, Regionalização, Hierarquização, Participação',
            frase: 'Diretrizes organizacionais: DRHP (o DRª HP)',
          },
          {
            termo: '50-25-25',
            significado: 'Composição do Conselho: 50% usuários, 25% trabalhadores, 25% gestores',
            frase: 'Conselho: 50% usuários é METADE',
          },
          {
            termo: 'BMA',
            significado: 'Básica, Média, Alta (níveis de atenção)',
            frase: 'Níveis de atenção: BMA (do mais simples ao complexo)',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-2-1',
            frente: 'Quais são os três princípios DOUTRINÁRIOS do SUS?',
            verso: '**1. UNIVERSALIDADE**\n→ Saúde para TODOS\n\n**2. INTEGRALIDADE**\n→ Atenção COMPLETA\n\n**3. EQUIDADE**\n→ Tratar desiguais DESIGUALMENTE\n\nMnemônico: UIE',
            tags: ['SUS', 'princípios'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-2',
            frente: 'Quais são as diretrizes ORGANIZACIONAIS do SUS?',
            verso: '**1. DESCENTRALIZAÇÃO**\n→ Divisão entre União, Estados, Municípios\n\n**2. REGIONALIZAÇÃO**\n→ Organização por regiões de saúde\n\n**3. HIERARQUIZAÇÃO**\n→ Níveis de complexidade\n\n**4. PARTICIPAÇÃO DA COMUNIDADE**\n→ Conselhos e Conferências',
            tags: ['SUS', 'diretrizes'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-3',
            frente: 'Quais são os três níveis de atenção à saúde?',
            verso: '**PRIMÁRIO/BÁSICO:**\n- UBS, ESF, ACS\n- Porta de entrada\n\n**SECUNDÁRIO:**\n- Especialidades, CAPS\n- Média complexidade\n\n**TERCIÁRIO:**\n- Hospitais, UTI\n- Alta complexidade',
            tags: ['níveis de atenção', 'SUS'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-4',
            frente: 'Qual a composição dos Conselhos de Saúde?',
            verso: '**COMPOSIÇÃO PARITÁRIA:**\n\n- **50% USUÁRIOS** (metade!)\n- 25% Trabalhadores de saúde\n- 25% Gestores e prestadores\n\nCaráter: **DELIBERATIVO** e **PERMANENTE**',
            tags: ['participação social', 'conselho'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-5',
            frente: 'Qual a diferença entre Conselhos e Conferências de Saúde?',
            verso: '**CONSELHOS:**\n- Deliberativos (decidem)\n- Permanentes\n- 50% usuários\n\n**CONFERÊNCIAS:**\n- Propositivas (propõem)\n- A cada 4 ANOS\n- Avaliam e propõem diretrizes',
            tags: ['participação social', 'diferença'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-6',
            frente: 'O que é a Atenção Básica/Primária?',
            verso: '**PORTA DE ENTRADA** preferencial do SUS.\n\nCaracterísticas:\n- Primeiro contato\n- Longitudinalidade\n- Coordenação do cuidado\n- Território definido\n\nServiços: UBS, ESF, ACS, NASF',
            tags: ['atenção básica', 'níveis'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-7',
            frente: 'O que são as instâncias CIT, CIB e CIR?',
            verso: '**Instâncias de PACTUAÇÃO:**\n\n**CIT** (Tripartite):\n- MS + CONASS + CONASEMS\n- Nível federal\n\n**CIB** (Bipartite):\n- SES + COSEMS\n- Nível estadual\n\n**CIR** (Regional):\n- SES + SMS da região',
            tags: ['gestão', 'pactuação'],
            dificuldade: 'dificil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-2-8',
            frente: 'O que são as Redes de Atenção à Saúde (RAS)?',
            verso: '**RAS** = arranjos que integram serviços de diferentes complexidades.\n\nCaracterísticas:\n- Atenção Básica como COORDENADORA\n- Integração dos níveis\n- Sistema de apoio\n\nRedes temáticas: Cegonha, Urgência, Psicossocial, etc.',
            tags: ['RAS', 'organização'],
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
            id: 'ce-q-2-1',
            enunciado: 'São princípios DOUTRINÁRIOS do SUS, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Universalidade.' },
              { letra: 'B', texto: 'Integralidade.' },
              { letra: 'C', texto: 'Descentralização.' },
              { letra: 'D', texto: 'Equidade.' },
              { letra: 'E', texto: 'Todas são princípios doutrinários.' },
            ],
            gabarito: 'C',
            justificativa: 'DESCENTRALIZAÇÃO é uma diretriz ORGANIZACIONAL, não um princípio doutrinário. Os princípios doutrinários são: Universalidade, Integralidade e Equidade (UIE).',
            dificuldade: 'Fácil',
            competencia: 'Princípios do SUS',
            banca: 'IADES',
            tags: ['SUS', 'princípios'],
          },
          {
            id: 'ce-q-2-2',
            enunciado: 'A Atenção Básica é considerada a porta de entrada preferencial do SUS. Assinale a alternativa que apresenta um serviço desse nível de atenção:',
            alternativas: [
              { letra: 'A', texto: 'UTI (Unidade de Terapia Intensiva).' },
              { letra: 'B', texto: 'Centro cirúrgico hospitalar.' },
              { letra: 'C', texto: 'Unidade Básica de Saúde (UBS).' },
              { letra: 'D', texto: 'Serviço de hemodiálise.' },
              { letra: 'E', texto: 'Centro de transplante.' },
            ],
            gabarito: 'C',
            justificativa: 'A UBS (Unidade Básica de Saúde) é um serviço de ATENÇÃO BÁSICA/PRIMÁRIA. As demais opções são serviços de alta complexidade (terciário).',
            dificuldade: 'Fácil',
            competencia: 'Níveis de atenção',
            banca: 'IADES',
            tags: ['atenção básica', 'UBS'],
          },
          {
            id: 'ce-q-2-3',
            enunciado: 'Sobre os Conselhos de Saúde, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'Possuem caráter apenas consultivo.' },
              { letra: 'B', texto: 'Reúnem-se a cada 4 anos.' },
              { letra: 'C', texto: 'São compostos exclusivamente por gestores.' },
              { letra: 'D', texto: 'Têm caráter deliberativo e permanente.' },
              { letra: 'E', texto: 'Os usuários representam 25% da composição.' },
            ],
            gabarito: 'D',
            justificativa: 'Os Conselhos de Saúde têm caráter DELIBERATIVO (não apenas consultivo) e PERMANENTE. A composição é paritária: 50% usuários, 25% trabalhadores, 25% gestores.',
            dificuldade: 'Média',
            competencia: 'Participação social',
            banca: 'IADES',
            tags: ['conselho', 'participação'],
          },
          {
            id: 'ce-q-2-4',
            enunciado: 'A diretriz organizacional do SUS que se refere à organização dos serviços por níveis de complexidade crescente denomina-se:',
            alternativas: [
              { letra: 'A', texto: 'Descentralização.' },
              { letra: 'B', texto: 'Regionalização.' },
              { letra: 'C', texto: 'Hierarquização.' },
              { letra: 'D', texto: 'Participação social.' },
              { letra: 'E', texto: 'Integralidade.' },
            ],
            gabarito: 'C',
            justificativa: 'HIERARQUIZAÇÃO é a diretriz que organiza os serviços por níveis de complexidade: atenção básica, média complexidade e alta complexidade.',
            dificuldade: 'Fácil',
            competencia: 'Diretrizes do SUS',
            banca: 'IADES',
            tags: ['hierarquização', 'diretrizes'],
          },
          {
            id: 'ce-q-2-5',
            enunciado: 'As Conferências de Saúde, conforme a Lei 8.142/1990, devem ser realizadas com periodicidade de:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '2 anos.' },
              { letra: 'C', texto: '3 anos.' },
              { letra: 'D', texto: '4 anos.' },
              { letra: 'E', texto: '5 anos.' },
            ],
            gabarito: 'D',
            justificativa: 'As Conferências de Saúde devem ser realizadas a cada 4 ANOS, com representação dos vários segmentos sociais, para avaliar a situação de saúde e propor diretrizes.',
            dificuldade: 'Fácil',
            competencia: 'Conferências de Saúde',
            banca: 'IADES',
            tags: ['conferência', 'periodicidade'],
          },
          {
            id: 'ce-q-2-6',
            enunciado: 'O princípio do SUS que garante que todos tenham direito ao acesso aos serviços de saúde é denominado:',
            alternativas: [
              { letra: 'A', texto: 'Equidade.' },
              { letra: 'B', texto: 'Integralidade.' },
              { letra: 'C', texto: 'Universalidade.' },
              { letra: 'D', texto: 'Descentralização.' },
              { letra: 'E', texto: 'Regionalização.' },
            ],
            gabarito: 'C',
            justificativa: 'UNIVERSALIDADE é o princípio que garante que a saúde é direito de TODOS, independentemente de contribuição, raça, gênero ou qualquer outra condição.',
            dificuldade: 'Fácil',
            competencia: 'Princípio da universalidade',
            banca: 'IADES',
            tags: ['universalidade', 'princípios'],
          },
          {
            id: 'ce-q-2-7',
            enunciado: 'A Comissão Intergestores Tripartite (CIT) é composta por representantes de:',
            alternativas: [
              { letra: 'A', texto: 'Apenas Estados e Municípios.' },
              { letra: 'B', texto: 'União, Estados e Municípios.' },
              { letra: 'C', texto: 'Apenas União e Estados.' },
              { letra: 'D', texto: 'Usuários, trabalhadores e gestores.' },
              { letra: 'E', texto: 'Apenas Municípios da mesma região.' },
            ],
            gabarito: 'B',
            justificativa: 'A CIT (Comissão Intergestores TRIPARTITE) é composta por representantes das três esferas: União (MS), Estados (CONASS) e Municípios (CONASEMS).',
            dificuldade: 'Média',
            competencia: 'Instâncias de pactuação',
            banca: 'IADES',
            tags: ['CIT', 'gestão'],
          },
          {
            id: 'ce-q-2-8',
            enunciado: 'A Estratégia Saúde da Família (ESF) é considerada um serviço de:',
            alternativas: [
              { letra: 'A', texto: 'Alta complexidade.' },
              { letra: 'B', texto: 'Média complexidade.' },
              { letra: 'C', texto: 'Atenção Básica/Primária.' },
              { letra: 'D', texto: 'Urgência e emergência.' },
              { letra: 'E', texto: 'Reabilitação especializada.' },
            ],
            gabarito: 'C',
            justificativa: 'A ESF (Estratégia Saúde da Família) é um serviço de ATENÇÃO BÁSICA/PRIMÁRIA, considerada a principal estratégia de reorganização da atenção à saúde no Brasil.',
            dificuldade: 'Fácil',
            competencia: 'Atenção Básica',
            banca: 'IADES',
            tags: ['ESF', 'atenção básica'],
          },
          {
            id: 'ce-q-2-9',
            enunciado: 'O princípio da EQUIDADE no SUS significa:',
            alternativas: [
              { letra: 'A', texto: 'Tratar todos de forma absolutamente igual.' },
              { letra: 'B', texto: 'Atender apenas quem contribui com a previdência.' },
              { letra: 'C', texto: 'Investir mais onde há maior necessidade, buscando justiça social.' },
              { letra: 'D', texto: 'Oferecer apenas serviços de alta complexidade.' },
              { letra: 'E', texto: 'Centralizar todos os serviços na capital.' },
            ],
            gabarito: 'C',
            justificativa: 'EQUIDADE significa tratar os DESIGUAIS de forma DESIGUAL, investindo mais onde há maior necessidade para reduzir as desigualdades. É diferente de IGUALDADE (tratar todos igual).',
            dificuldade: 'Média',
            competencia: 'Princípio da equidade',
            banca: 'IADES',
            tags: ['equidade', 'princípios'],
          },
          {
            id: 'ce-q-2-10',
            enunciado: 'No contexto das Redes de Atenção à Saúde (RAS), qual nível de atenção atua como COORDENADOR do cuidado?',
            alternativas: [
              { letra: 'A', texto: 'Atenção hospitalar de alta complexidade.' },
              { letra: 'B', texto: 'Serviços de urgência e emergência.' },
              { letra: 'C', texto: 'Atenção Básica/Primária.' },
              { letra: 'D', texto: 'Serviços de média complexidade.' },
              { letra: 'E', texto: 'Centros de referência especializados.' },
            ],
            gabarito: 'C',
            justificativa: 'Nas RAS, a ATENÇÃO BÁSICA atua como COORDENADORA do cuidado, sendo responsável por ordenar os fluxos e contrafluxos de pessoas, produtos e informações na rede.',
            dificuldade: 'Média',
            competencia: 'Redes de Atenção à Saúde',
            banca: 'IADES',
            tags: ['RAS', 'atenção básica'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-3',
      numero: 3,
      titulo: 'Vigilância em Saúde: vigilância epidemiológica, sanitária, ambiental e saúde do trabalhador',
      conteudo: {
        resumo: `
## Resumo Rápido

### Componentes da Vigilância em Saúde

| Componente | Objeto | Ação Principal |
|------------|--------|----------------|
| **Vigilância Epidemiológica** | Doenças e agravos | Notificar, investigar, controlar |
| **Vigilância Sanitária** | Produtos, serviços, ambientes | Regular, fiscalizar, punir |
| **Vigilância Ambiental** | Fatores ambientais de risco | Monitorar, prevenir |
| **Saúde do Trabalhador** | Riscos ocupacionais | Proteger, promover saúde |

### Base Legal

| Norma | Conteúdo |
|-------|----------|
| **Lei 8.080/1990, art. 6º** | Define vigilância em saúde no SUS |
| **Lei 9.782/1999** | Cria ANVISA e SNVS |
| **Lei 6.437/1977** | Infrações sanitárias e penalidades |
| **Portaria GM/MS 1.378/2013** | Política Nacional de Vigilância em Saúde |

### Para IADES:
- Vigilância Epidemiológica = DOENÇAS (notificação compulsória)
- Vigilância Sanitária = PRODUTOS e SERVIÇOS (poder de polícia)
- Vigilância Ambiental = AMBIENTE (água, ar, solo)
- Saúde do Trabalhador = TRABALHO (acidentes, doenças ocupacionais)
        `,

        explicacao: `
## Explicação Didática

### 1. Vigilância em Saúde: Conceito

A **Vigilância em Saúde** é um conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva.

#### 1.1 Base Legal

**Lei 8.080/1990, art. 6º:**
> Define o campo de atuação do SUS, incluindo a vigilância em saúde.

**Portaria GM/MS 1.378/2013:**
> Estabelece a Política Nacional de Vigilância em Saúde (PNVS).

#### 1.2 Componentes

| Componente | Foco |
|------------|------|
| **Vigilância Epidemiológica** | Doenças e agravos |
| **Vigilância Sanitária** | Produtos, serviços, ambientes |
| **Vigilância Ambiental** | Fatores ambientais |
| **Saúde do Trabalhador** | Riscos ocupacionais |
| **Vigilância Situacional** | Análise de situação de saúde |

### 2. Vigilância Epidemiológica

#### 2.1 Conceito (Lei 8.080/1990, art. 6º, §2º)

> "Conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos."

#### 2.2 Funções

| Função | Descrição |
|--------|-----------|
| **Coleta de dados** | Notificação, busca ativa |
| **Processamento** | Consolidação, análise |
| **Análise e interpretação** | Indicadores, tendências |
| **Recomendação** | Medidas de controle |
| **Promoção de ações** | Prevenção e controle |
| **Divulgação** | Informes, boletins |
| **Avaliação** | Eficácia das medidas |

#### 2.3 Notificação Compulsória

**Doenças de Notificação Compulsória (DNC):**
Lista definida pelo Ministério da Saúde (Portaria de Consolidação nº 4/2017).

| Tipo | Prazo | Exemplos |
|------|-------|----------|
| **Imediata (até 24h)** | 24 horas | Sarampo, dengue grave, óbito materno |
| **Semanal** | Semana epidemiológica | Dengue, tuberculose, hanseníase |

**Quem deve notificar:**
- Profissionais de saúde
- Responsáveis por estabelecimentos de saúde
- Cidadãos (opcionalmente)

#### 2.4 Investigação Epidemiológica

**Objetivo:** Identificar fonte de infecção e modo de transmissão para adotar medidas de controle.

**Etapas:**
1. Coleta de dados sobre o caso
2. Busca de casos secundários
3. Análise dos dados
4. Medidas de controle
5. Encerramento e relatório

#### 2.5 Sistemas de Informação

| Sistema | Sigla | Função |
|---------|-------|--------|
| Sistema de Informação de Agravos de Notificação | **SINAN** | Notificação e investigação de doenças |
| Sistema de Informação sobre Mortalidade | **SIM** | Óbitos |
| Sistema de Informações sobre Nascidos Vivos | **SINASC** | Nascimentos |
| Sistema de Informações Hospitalares | **SIH** | Internações |

### 3. Vigilância Sanitária

#### 3.1 Conceito (Lei 8.080/1990, art. 6º, §1º)

> "Entende-se por vigilância sanitária um conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde."

#### 3.2 Abrangência

**Produtos:**
- Medicamentos
- Alimentos
- Cosméticos
- Saneantes
- Equipamentos médicos

**Serviços:**
- Hospitais, clínicas
- Laboratórios
- Farmácias
- Estabelecimentos de alimentação
- Salões de beleza

**Ambientes:**
- Locais de trabalho
- Espaços públicos
- Portos, aeroportos, fronteiras

#### 3.3 Sistema Nacional de Vigilância Sanitária (SNVS)

| Nível | Órgão | Competências |
|-------|-------|--------------|
| **Federal** | ANVISA | Coordenar, normatizar, fiscalizar em âmbito nacional |
| **Estadual** | VISA Estadual (SES) | Complementar, fiscalizar, coordenar regionalmente |
| **Municipal** | VISA Municipal (SMS) | Executar ações locais, fiscalizar |

#### 3.4 ANVISA

**Agência Nacional de Vigilância Sanitária:**
- Criada pela **Lei 9.782/1999**
- **Autarquia** federal sob regime especial
- Vinculada ao Ministério da Saúde
- Autonomia administrativa e financeira
- Mandato fixo de dirigentes

**Competências:**
- Registro de produtos
- Autorização de funcionamento
- Inspeção e fiscalização
- Normatização (RDCs)
- Controle de portos e aeroportos

#### 3.5 Poder de Polícia Sanitária

A VISA exerce **poder de polícia administrativa** para:
- Licenciar estabelecimentos
- Fiscalizar condições sanitárias
- Aplicar sanções (advertência, multa, apreensão, interdição)
- Inutilizar produtos

**Base legal:** Lei 6.437/1977 (infrações sanitárias).

#### 3.6 Infrações e Penalidades (Lei 6.437/1977)

| Penalidade | Descrição |
|------------|-----------|
| **Advertência** | Infração leve, primeira vez |
| **Multa** | Valores atualizados periodicamente |
| **Apreensão** | Produtos irregulares |
| **Inutilização** | Destruição de produtos |
| **Interdição** | Suspensão de funcionamento |
| **Cancelamento de registro** | Produto ou empresa |
| **Proibição de propaganda** | Publicidade irregular |

#### 3.7 Alvará Sanitário

**Licença Sanitária** ou **Alvará de Funcionamento:**
- Documento que autoriza funcionamento
- Emitido pela VISA local
- Renovação periódica
- Condicionado ao cumprimento de normas

### 4. Vigilância Ambiental em Saúde

#### 4.1 Conceito

Conjunto de ações que proporcionam o conhecimento e a detecção de mudanças nos fatores determinantes e condicionantes do meio ambiente que interferem na saúde humana.

#### 4.2 Áreas de Atuação

| Área | Objeto |
|------|--------|
| **Qualidade da água** | Água para consumo humano (VIGIAGUA) |
| **Qualidade do ar** | Poluição atmosférica (VIGIAR) |
| **Qualidade do solo** | Contaminação (VIGISOLO) |
| **Desastres naturais** | Inundações, secas (VIGIDESASTRES) |
| **Substâncias químicas** | Produtos perigosos (VIGIQUIM) |

#### 4.3 VIGIAGUA

Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano.

**Ações:**
- Monitoramento da qualidade
- Controle de doenças de veiculação hídrica
- Fiscalização de sistemas de abastecimento

**Parâmetros:**
- Coliformes totais e E. coli
- Cloro residual
- Turbidez
- Fluoreto

### 5. Saúde do Trabalhador

#### 5.1 Conceito (Lei 8.080/1990, art. 6º, §3º)

> "Entende-se por saúde do trabalhador, para fins desta lei, um conjunto de atividades que se destina, através das ações de vigilância epidemiológica e vigilância sanitária, à promoção e proteção da saúde dos trabalhadores, assim como visa à recuperação e reabilitação da saúde dos trabalhadores submetidos aos riscos e agravos advindos das condições de trabalho."

#### 5.2 Abrangência

- **Todos os trabalhadores**: formais, informais, temporários, autônomos
- Independente do vínculo empregatício
- Inclui desempregados e aposentados

#### 5.3 Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST)

| Componente | Função |
|------------|--------|
| **CEREST** (Centro de Referência) | Suporte técnico, educação, fiscalização |
| **Atenção Básica** | Identificação, notificação |
| **Hospitais/especialidades** | Atendimento de casos graves |

#### 5.4 Agravos Relacionados ao Trabalho

| Agravo | Descrição |
|--------|-----------|
| **Acidente de trabalho** | Lesão durante o trabalho |
| **Doença ocupacional** | Causada pelo trabalho |
| **Doença do trabalho** | Agravada pelo trabalho |
| **LER/DORT** | Lesões por esforço repetitivo |
| **Perda auditiva** | Exposição a ruído |
| **Intoxicações** | Agrotóxicos, químicos |
| **Pneumoconioses** | Inalação de poeiras |

#### 5.5 Notificação no SINAN

Agravos de notificação compulsória relacionados ao trabalho:
- Acidente de trabalho (grave, fatal, em menores)
- Acidente com exposição a material biológico
- Intoxicação por agrotóxicos
- LER/DORT
- Perda auditiva induzida por ruído (PAIR)
- Pneumoconioses
- Câncer relacionado ao trabalho

### 6. Integração das Vigilâncias

#### 6.1 Atuação Integrada

As vigilâncias devem atuar de forma **integrada**, pois:
- Mesmos determinantes de saúde
- Ações complementares
- Territorialização comum
- Base de dados compartilhada

#### 6.2 Exemplos de Integração

| Situação | Vigilâncias Envolvidas |
|----------|------------------------|
| Surto de intoxicação alimentar | Epidemiológica + Sanitária |
| Dengue | Epidemiológica + Ambiental |
| Acidente com produto químico | Ambiental + Saúde do Trabalhador |
| Tuberculose em trabalhadores | Epidemiológica + Saúde do Trabalhador |
        `,

        pontosChave: [
          'Vigilância em Saúde = Epidemiológica + Sanitária + Ambiental + Saúde do Trabalhador',
          'Vigilância Epidemiológica: doenças e agravos, notificação compulsória, SINAN',
          'Vigilância Sanitária: produtos, serviços, ambientes - poder de polícia',
          'ANVISA: autarquia federal, Lei 9.782/1999, coordena o SNVS',
          'Vigilância Ambiental: água (VIGIAGUA), ar (VIGIAR), solo (VIGISOLO)',
          'Saúde do Trabalhador: TODOS os trabalhadores, CEREST, RENAST',
          'Lei 6.437/1977: infrações sanitárias e penalidades',
          'Notificação compulsória: imediata (24h) ou semanal, SINAN',
          'SNVS: ANVISA (federal) + VISA estadual + VISA municipal',
          'As vigilâncias devem atuar de forma INTEGRADA',
        ],

        armadilhas: [
          {
            titulo: 'Confundir vigilância epidemiológica com sanitária',
            descricao: 'Epidemiológica = DOENÇAS e agravos. Sanitária = PRODUTOS, serviços e ambientes.',
            dica: 'Epidemiológica = EPIdemia (doença). Sanitária = SANidade de produtos/serviços.',
          },
          {
            titulo: 'Achar que saúde do trabalhador é só para trabalhadores formais',
            descricao: 'A saúde do trabalhador abrange TODOS: formais, informais, autônomos, temporários.',
            dica: 'Saúde do Trabalhador = UNIVERSAL, independente do vínculo.',
          },
          {
            titulo: 'Esquecer que VISA tem poder de polícia',
            descricao: 'A Vigilância Sanitária exerce poder de POLÍCIA ADMINISTRATIVA: licencia, fiscaliza, pune.',
            dica: 'VISA = pode interditar, multar, apreender, cancelar registro.',
          },
          {
            titulo: 'Confundir SNVS com SUS',
            descricao: 'SNVS = Sistema Nacional de Vigilância SANITÁRIA. SUS = Sistema Único de SAÚDE.',
            dica: 'SNVS está dentro do SUS, mas é específico para vigilância sanitária.',
          },
        ],

        mnemonicos: [
          {
            termo: 'VESA-T',
            significado: 'Vigilância Epidemiológica, Sanitária, Ambiental + Saúde do Trabalhador',
            frase: 'Componentes da Vigilância em Saúde: VESA + T (trabalhador)',
          },
          {
            termo: 'EPIdemia-SANidade',
            significado: 'Epidemiológica = doenças (epidemias); Sanitária = sanidade de produtos',
            frase: 'EPI para doenças, SAN para produtos',
          },
          {
            termo: 'ANVISA-9782',
            significado: 'ANVISA criada pela Lei 9.782/1999',
            frase: '9-7-82 → 1999 (inverte) = Lei da ANVISA',
          },
          {
            termo: 'VIGI-AAA',
            significado: 'VIGIAGUA (água), VIGIAR (ar), VIGISOLO (solo)',
            frase: 'Vigilância Ambiental: Água, Ar, Área (solo)',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-3-1',
            frente: 'Quais são os quatro componentes da Vigilância em Saúde?',
            verso: '**1. Vigilância EPIDEMIOLÓGICA**\n→ Doenças e agravos\n\n**2. Vigilância SANITÁRIA**\n→ Produtos, serviços, ambientes\n\n**3. Vigilância AMBIENTAL**\n→ Água, ar, solo\n\n**4. Saúde do TRABALHADOR**\n→ Riscos ocupacionais',
            tags: ['vigilância', 'componentes'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-2',
            frente: 'O que é Vigilância Epidemiológica?',
            verso: 'Conjunto de ações para **conhecer, detectar e prevenir** mudanças nos fatores de saúde individual/coletiva.\n\nFoco: **DOENÇAS e AGRAVOS**\n\nAções: notificação, investigação, controle.\n\nSistema: SINAN',
            tags: ['vigilância epidemiológica', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-3',
            frente: 'O que é Vigilância Sanitária?',
            verso: 'Conjunto de ações para **eliminar, diminuir ou prevenir riscos** decorrentes de:\n\n- Meio ambiente\n- Produção e circulação de BENS\n- Prestação de SERVIÇOS\n\nExerce **poder de polícia**: licencia, fiscaliza, pune.',
            tags: ['vigilância sanitária', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-4',
            frente: 'O que é a ANVISA e qual lei a criou?',
            verso: '**ANVISA** = Agência Nacional de Vigilância Sanitária\n\n- Criada pela **Lei 9.782/1999**\n- **Autarquia** sob regime especial\n- Coordena o **SNVS**\n- Vinculada ao Ministério da Saúde\n\nCompetências: registro, fiscalização, normatização.',
            tags: ['ANVISA', 'legislação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-5',
            frente: 'Quais são as penalidades previstas na Lei 6.437/1977?',
            verso: '**Infrações Sanitárias:**\n\n- Advertência\n- **Multa**\n- **Apreensão** de produto\n- **Inutilização** de produto\n- **Interdição** de estabelecimento\n- Cancelamento de registro\n- Proibição de propaganda',
            tags: ['penalidades', 'Lei 6.437'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-6',
            frente: 'O que é o SINAN?',
            verso: '**SINAN** = Sistema de Informação de Agravos de Notificação\n\nFunção: registrar doenças e agravos de **notificação compulsória**.\n\nNotificação:\n- **Imediata**: até 24h (sarampo, dengue grave)\n- **Semanal**: até final da semana epidemiológica',
            tags: ['SINAN', 'notificação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-7',
            frente: 'Quais são os programas de Vigilância Ambiental?',
            verso: '**Vigilância Ambiental:**\n\n- **VIGIAGUA**: água para consumo\n- **VIGIAR**: qualidade do ar\n- **VIGISOLO**: contaminação do solo\n- **VIGIDESASTRES**: desastres naturais\n- **VIGIQUIM**: substâncias químicas',
            tags: ['vigilância ambiental', 'programas'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-3-8',
            frente: 'O que é a RENAST e o CEREST?',
            verso: '**RENAST** = Rede Nacional de Atenção Integral à Saúde do Trabalhador\n\n**CEREST** = Centro de Referência em Saúde do Trabalhador\n\nFunções do CEREST:\n- Suporte técnico\n- Educação permanente\n- Apoio a fiscalização\n- Atendimento de casos',
            tags: ['saúde do trabalhador', 'RENAST'],
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
            id: 'ce-q-3-1',
            enunciado: 'São componentes da Vigilância em Saúde, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Vigilância Epidemiológica.' },
              { letra: 'B', texto: 'Vigilância Sanitária.' },
              { letra: 'C', texto: 'Vigilância Ambiental em Saúde.' },
              { letra: 'D', texto: 'Saúde do Trabalhador.' },
              { letra: 'E', texto: 'Vigilância Financeira.' },
            ],
            gabarito: 'E',
            justificativa: 'Os componentes da Vigilância em Saúde são: Vigilância Epidemiológica, Vigilância Sanitária, Vigilância Ambiental e Saúde do Trabalhador. Não existe "Vigilância Financeira" no campo da saúde.',
            dificuldade: 'Fácil',
            competencia: 'Componentes da Vigilância em Saúde',
            banca: 'IADES',
            tags: ['vigilância', 'componentes'],
          },
          {
            id: 'ce-q-3-2',
            enunciado: 'A Vigilância Sanitária tem como objeto de atuação:',
            alternativas: [
              { letra: 'A', texto: 'Apenas doenças transmissíveis.' },
              { letra: 'B', texto: 'Produtos, serviços e ambientes de interesse da saúde.' },
              { letra: 'C', texto: 'Exclusivamente medicamentos.' },
              { letra: 'D', texto: 'Apenas estabelecimentos hospitalares.' },
              { letra: 'E', texto: 'Somente qualidade da água.' },
            ],
            gabarito: 'B',
            justificativa: 'A Vigilância Sanitária atua sobre PRODUTOS (medicamentos, alimentos, cosméticos), SERVIÇOS (hospitais, clínicas, laboratórios) e AMBIENTES (locais de trabalho, espaços públicos).',
            dificuldade: 'Fácil',
            competencia: 'Objeto da Vigilância Sanitária',
            banca: 'IADES',
            tags: ['vigilância sanitária', 'abrangência'],
          },
          {
            id: 'ce-q-3-3',
            enunciado: 'A Lei 9.782/1999 criou qual órgão do Sistema Nacional de Vigilância Sanitária?',
            alternativas: [
              { letra: 'A', texto: 'Ministério da Saúde.' },
              { letra: 'B', texto: 'Secretarias Estaduais de Saúde.' },
              { letra: 'C', texto: 'Agência Nacional de Vigilância Sanitária (ANVISA).' },
              { letra: 'D', texto: 'Conselho Nacional de Saúde.' },
              { letra: 'E', texto: 'Fundo Nacional de Saúde.' },
            ],
            gabarito: 'C',
            justificativa: 'A Lei 9.782/1999 define o Sistema Nacional de Vigilância Sanitária (SNVS) e cria a ANVISA como autarquia federal sob regime especial, vinculada ao Ministério da Saúde.',
            dificuldade: 'Fácil',
            competencia: 'Legislação ANVISA',
            banca: 'IADES',
            tags: ['ANVISA', 'Lei 9.782'],
          },
          {
            id: 'ce-q-3-4',
            enunciado: 'O Sistema de Informação de Agravos de Notificação (SINAN) é utilizado para:',
            alternativas: [
              { letra: 'A', texto: 'Registrar procedimentos hospitalares.' },
              { letra: 'B', texto: 'Controlar o estoque de medicamentos.' },
              { letra: 'C', texto: 'Registrar doenças e agravos de notificação compulsória.' },
              { letra: 'D', texto: 'Cadastrar profissionais de saúde.' },
              { letra: 'E', texto: 'Controlar transferências financeiras.' },
            ],
            gabarito: 'C',
            justificativa: 'O SINAN é o sistema da Vigilância Epidemiológica utilizado para registro e investigação de DOENÇAS e AGRAVOS de notificação compulsória.',
            dificuldade: 'Fácil',
            competencia: 'SINAN',
            banca: 'IADES',
            tags: ['SINAN', 'vigilância epidemiológica'],
          },
          {
            id: 'ce-q-3-5',
            enunciado: 'A Lei 6.437/1977 dispõe sobre:',
            alternativas: [
              { letra: 'A', texto: 'Organização do SUS.' },
              { letra: 'B', texto: 'Criação da ANVISA.' },
              { letra: 'C', texto: 'Infrações à legislação sanitária e suas penalidades.' },
              { letra: 'D', texto: 'Participação da comunidade na saúde.' },
              { letra: 'E', texto: 'Financiamento da saúde pública.' },
            ],
            gabarito: 'C',
            justificativa: 'A Lei 6.437/1977 configura INFRAÇÕES à legislação sanitária federal e estabelece as PENALIDADES: advertência, multa, apreensão, inutilização, interdição, entre outras.',
            dificuldade: 'Fácil',
            competencia: 'Lei 6.437/1977',
            banca: 'IADES',
            tags: ['infrações', 'penalidades'],
          },
          {
            id: 'ce-q-3-6',
            enunciado: 'O programa VIGIAGUA tem como objetivo monitorar:',
            alternativas: [
              { letra: 'A', texto: 'A qualidade do ar nas cidades.' },
              { letra: 'B', texto: 'A qualidade da água para consumo humano.' },
              { letra: 'C', texto: 'As condições de trabalho nas indústrias.' },
              { letra: 'D', texto: 'A contaminação do solo urbano.' },
              { letra: 'E', texto: 'Os surtos de doenças transmissíveis.' },
            ],
            gabarito: 'B',
            justificativa: 'O VIGIAGUA é o Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano, que monitora parâmetros como coliformes, cloro residual, turbidez e fluoreto.',
            dificuldade: 'Fácil',
            competencia: 'VIGIAGUA',
            banca: 'IADES',
            tags: ['vigilância ambiental', 'água'],
          },
          {
            id: 'ce-q-3-7',
            enunciado: 'A Saúde do Trabalhador, conforme a Lei 8.080/1990, abrange:',
            alternativas: [
              { letra: 'A', texto: 'Apenas trabalhadores com carteira assinada.' },
              { letra: 'B', texto: 'Somente trabalhadores da área da saúde.' },
              { letra: 'C', texto: 'Todos os trabalhadores, independentemente do vínculo empregatício.' },
              { letra: 'D', texto: 'Apenas servidores públicos.' },
              { letra: 'E', texto: 'Somente trabalhadores da indústria.' },
            ],
            gabarito: 'C',
            justificativa: 'A Saúde do Trabalhador abrange TODOS os trabalhadores: formais, informais, autônomos, temporários, domésticos, rurais, urbanos, independentemente do vínculo empregatício.',
            dificuldade: 'Fácil',
            competencia: 'Saúde do Trabalhador',
            banca: 'IADES',
            tags: ['saúde do trabalhador', 'abrangência'],
          },
          {
            id: 'ce-q-3-8',
            enunciado: 'O CEREST (Centro de Referência em Saúde do Trabalhador) tem como função:',
            alternativas: [
              { letra: 'A', texto: 'Registrar nascimentos e óbitos.' },
              { letra: 'B', texto: 'Emitir alvarás sanitários para empresas.' },
              { letra: 'C', texto: 'Prestar suporte técnico e educação permanente em saúde do trabalhador.' },
              { letra: 'D', texto: 'Controlar a qualidade da água.' },
              { letra: 'E', texto: 'Fiscalizar estabelecimentos de alimentação.' },
            ],
            gabarito: 'C',
            justificativa: 'O CEREST é parte da RENAST e tem como funções: suporte técnico à rede de saúde, educação permanente, apoio a ações de vigilância e atendimento de casos de doenças relacionadas ao trabalho.',
            dificuldade: 'Média',
            competencia: 'CEREST',
            banca: 'IADES',
            tags: ['CEREST', 'RENAST'],
          },
          {
            id: 'ce-q-3-9',
            enunciado: 'A Vigilância Sanitária exerce o chamado poder de polícia sanitária, que inclui:',
            alternativas: [
              { letra: 'A', texto: 'Apenas ações educativas.' },
              { letra: 'B', texto: 'Licenciamento, fiscalização e aplicação de penalidades.' },
              { letra: 'C', texto: 'Somente registro de medicamentos.' },
              { letra: 'D', texto: 'Apenas investigação de surtos.' },
              { letra: 'E', texto: 'Exclusivamente controle de fronteiras.' },
            ],
            gabarito: 'B',
            justificativa: 'O poder de polícia sanitária permite à VISA: licenciar estabelecimentos, fiscalizar condições sanitárias e aplicar PENALIDADES (advertência, multa, apreensão, interdição, cancelamento de registro).',
            dificuldade: 'Fácil',
            competencia: 'Poder de polícia',
            banca: 'IADES',
            tags: ['vigilância sanitária', 'poder de polícia'],
          },
          {
            id: 'ce-q-3-10',
            enunciado: 'A notificação compulsória de doenças é uma atividade típica da:',
            alternativas: [
              { letra: 'A', texto: 'Vigilância Sanitária.' },
              { letra: 'B', texto: 'Vigilância Epidemiológica.' },
              { letra: 'C', texto: 'Vigilância Ambiental.' },
              { letra: 'D', texto: 'Assistência farmacêutica.' },
              { letra: 'E', texto: 'Atenção hospitalar.' },
            ],
            gabarito: 'B',
            justificativa: 'A NOTIFICAÇÃO COMPULSÓRIA de doenças e agravos é atividade da VIGILÂNCIA EPIDEMIOLÓGICA, registrada no SINAN. A Vigilância Sanitária atua sobre produtos e serviços, não sobre doenças.',
            dificuldade: 'Fácil',
            competencia: 'Vigilância Epidemiológica',
            banca: 'IADES',
            tags: ['notificação', 'vigilância epidemiológica'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-4',
      numero: 4,
      titulo: 'Sistema Nacional de Vigilância Sanitária (SNVS)',
      conteudo: {
        resumo: `
## Resumo Rápido - SNVS (Lei 9.782/1999)

### O que é o SNVS?
Sistema descentralizado que coordena as ações de vigilância sanitária em todo o Brasil, integrando União, Estados, DF e Municípios.

### Composição do SNVS (Art. 1º)
| Esfera | Órgão |
|--------|-------|
| **Federal** | ANVISA + órgãos federais do MS |
| **Estadual** | Vigilância Sanitária dos Estados e DF |
| **Municipal** | Vigilância Sanitária dos Municípios |

### ANVISA - Características Principais
- **Natureza**: Autarquia especial sob regime especial
- **Vinculação**: Ministério da Saúde
- **Autonomia**: Administrativa, financeira, patrimonial e de gestão de RH
- **Mandato dos dirigentes**: 3 anos (estabilidade)
- **Sede**: Distrito Federal (pode atuar em todo território)

### Áreas de Abrangência da ANVISA (Art. 8º)
Mnemônico **SAMPAS**:
- **S**angue, hemoderivados, serviços de hemoterapia
- **A**limentos (inclusive bebidas e águas envasadas)
- **M**edicamentos (produção, registro, comercialização)
- **P**rodutos para saúde (cosméticos, saneantes, equipamentos)
- **A**mbientes e processos (tecnologias e substâncias)
- **S**erviços de saúde (portos, aeroportos, fronteiras)

### Funções da ANVISA (Art. 7º)
1. **Regulamentação**: normas técnicas
2. **Registro**: produtos sujeitos à VISA
3. **Fiscalização**: estabelecimentos e produtos
4. **Controle**: importação/exportação
5. **Autorização**: funcionamento de empresas
6. **Monitoramento**: qualidade e farmacovigilância

### Competências Exclusivas da ANVISA
- Registro de medicamentos, alimentos, cosméticos, saneantes
- Controle de portos, aeroportos, fronteiras
- Autorização de importação/exportação
- Certificado de Boas Práticas de Fabricação

### Infrações e Penalidades (Lei 6.437/1977)
| Penalidade | Descrição |
|------------|-----------|
| Advertência | Infração leve, primeira vez |
| Multa | R$ 2.000 a R$ 1.500.000 |
| Apreensão | Produto em desacordo |
| Inutilização | Produto sem condições de uso |
| Interdição | Total ou parcial |
| Cancelamento | Do registro ou alvará |
| Proibição | De propaganda |
        `,

        explicacao: `
## Explicação Didática - SNVS

### 1. Histórico e Criação

#### 1.1 Antes da Lei 9.782/1999
- Vigilância Sanitária fragmentada
- Secretaria de Vigilância Sanitária (SVS) no MS
- Baixa autonomia e recursos limitados
- Escândalos: falsificação de medicamentos (caso Microvilar)

#### 1.2 A Lei 9.782/1999
- Criou o **Sistema Nacional de Vigilância Sanitária**
- Criou a **ANVISA** (Agência Nacional de Vigilância Sanitária)
- Modelo de agência reguladora independente
- Inspiração em agências internacionais (FDA-EUA)

### 2. Conceitos Fundamentais

#### 2.1 Vigilância Sanitária (Definição Legal)
**Lei 8.080/1990, Art. 6º, §1º:**
> "Conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde"

#### 2.2 Risco Sanitário
- **Risco**: probabilidade de ocorrência de dano à saúde
- **Risco sanitário**: relacionado a produtos e serviços de interesse da saúde
- Atuação baseada em **análise de risco**

#### 2.3 Poder de Polícia Sanitária
- Prerrogativa do Estado de limitar direitos individuais
- Em prol do interesse coletivo (saúde pública)
- Características: discricionariedade, autoexecutoriedade, coercibilidade

### 3. O Sistema Nacional de Vigilância Sanitária

#### 3.1 Estrutura do SNVS (Art. 1º)
\`\`\`
                    MINISTÉRIO DA SAÚDE
                           │
                        ANVISA
                           │
    ┌──────────────────────┼──────────────────────┐
    │                      │                      │
VISA ESTADUAL       VISA ESTADUAL          VISA ESTADUAL
(LACEN)             (LACEN)                (LACEN)
    │                      │                      │
VISA MUNICIPAL      VISA MUNICIPAL         VISA MUNICIPAL
\`\`\`

#### 3.2 Princípios do SNVS
- **Descentralização**: ações executadas principalmente por municípios
- **Coordenação**: ANVISA coordena o sistema nacional
- **Colaboração**: ação conjunta entre os entes
- **Subsidiariedade**: ente menor executa, maior apoia

### 4. A ANVISA

#### 4.1 Natureza Jurídica
- **Autarquia especial** sob regime especial
- Personalidade jurídica de **direito público**
- **Independência administrativa** e financeira
- **Mandato fixo** dos dirigentes (estabilidade)

#### 4.2 Estrutura Organizacional
| Órgão | Composição | Função |
|-------|------------|--------|
| **Diretoria Colegiada** | 5 Diretores | Decisões estratégicas |
| **Procuradoria** | Procuradores federais | Assessoria jurídica |
| **Corregedoria** | Corregedores | Controle interno |
| **Ouvidoria** | Ouvidor | Canal com sociedade |

#### 4.3 Diretoria Colegiada
- **5 membros** (incluindo 1 Diretor-Presidente)
- Indicados pelo **Presidente da República**
- Aprovados pelo **Senado Federal** (sabatina)
- Mandato de **3 anos** (uma recondução)
- **Quarentena**: 4 meses após deixar cargo

### 5. Áreas de Abrangência (Art. 8º)

#### 5.1 Medicamentos
- Registro obrigatório na ANVISA
- Genéricos, similares, referência
- Controle de qualidade e eficácia
- Farmacovigilância

#### 5.2 Alimentos
- Registro ou comunicação de início de fabricação
- Rotulagem nutricional
- Aditivos, contaminantes
- Alimentos para fins especiais

#### 5.3 Cosméticos e Saneantes
- **Cosméticos**: produtos de uso externo
- **Saneantes**: limpeza e desinfecção
- Classificação por risco (grau 1 e 2)

#### 5.4 Produtos para Saúde
- Equipamentos médicos
- Produtos diagnósticos (in vitro)
- Materiais e artigos hospitalares

#### 5.5 Sangue e Hemoderivados
- Coleta, processamento, estocagem
- Hemoterapia e hemocentros
- Marco: Lei 10.205/2001

#### 5.6 Serviços de Saúde
- Hospitais, clínicas, laboratórios
- Portos, aeroportos, fronteiras
- Controle sanitário de viajantes

### 6. Competências e Funções da ANVISA (Art. 7º)

#### 6.1 Função Normativa
- Editar normas técnicas (RDC, IN)
- Regulamentar produção e comercialização
- Estabelecer padrões e limites

#### 6.2 Função Registradora
- **Registro**: ato que permite comercialização
- Validade: geralmente 5 anos (renovável)
- Análise prévia: qualidade, segurança, eficácia

#### 6.3 Função Fiscalizadora
- Inspeções sanitárias
- Coleta de amostras
- Lavratura de autos de infração

#### 6.4 Função Autorizadora
- Autorização de Funcionamento de Empresa (AFE)
- Certificado de Boas Práticas de Fabricação (CBPF)
- Licença de importação

### 7. Competências por Esfera de Governo

| Esfera | Competência |
|--------|-------------|
| **ANVISA** | Normas gerais, registro de produtos, controle de portos/aeroportos, coordenação do SNVS |
| **Estados** | Coordenação estadual, LACEN, suporte técnico aos municípios |
| **Municípios** | Fiscalização de estabelecimentos, emissão de alvará sanitário, ações locais |

### 8. Infrações e Penalidades

#### 8.1 Base Legal
- **Lei 6.437/1977**: configura infrações e penalidades
- Alterada pela Lei 9.695/1998 (crimes hediondos)

#### 8.2 Principais Infrações
- Fabricar produto sem registro
- Comercializar produto com validade vencida
- Operar sem autorização/licença
- Descumprir normas de boas práticas

#### 8.3 Penalidades (gradação)
1. **Advertência** (infração leve, primeira vez)
2. **Multa** (R$ 2.000 a R$ 1.500.000)
3. **Apreensão** de produto
4. **Inutilização** de produto
5. **Interdição** (parcial ou total)
6. **Suspensão** de vendas/fabricação
7. **Cancelamento** de registro/licença
8. **Proibição** de propaganda

### 9. Financiamento do SNVS

#### 9.1 Receitas da ANVISA
- **Taxas de vigilância sanitária** (TFVS, TFF, TPB)
- Dotações orçamentárias
- Multas aplicadas
- Convênios e acordos

#### 9.2 Taxa de Fiscalização
- Devida por empresas reguladas
- Varia conforme porte e atividade
- Fato gerador: poder de polícia exercido
        `,

        pontosChave: [
          'SNVS: sistema descentralizado que integra União, Estados, DF e Municípios',
          'Lei 9.782/1999: criou o SNVS e a ANVISA',
          'ANVISA: autarquia especial vinculada ao Ministério da Saúde',
          'Diretoria Colegiada: 5 diretores com mandato de 3 anos',
          'Diretores aprovados pelo Senado Federal (sabatina)',
          'Quarentena de 4 meses após deixar cargo na ANVISA',
          'Registro de medicamentos: exclusivo da ANVISA',
          'Controle de portos, aeroportos e fronteiras: ANVISA',
          'Fiscalização local de estabelecimentos: principalmente municipal',
          'Mnemônico SAMPAS: Sangue, Alimentos, Medicamentos, Produtos, Ambientes, Serviços',
          'Penalidades variam de advertência até cancelamento de registro',
          'Multas: R$ 2.000 a R$ 1.500.000 (Lei 6.437/1977)',
          'Poder de polícia sanitária: discricionariedade, autoexecutoriedade, coercibilidade',
        ],

        armadilhas: [
          {
            titulo: 'ANVISA não é órgão, é AUTARQUIA',
            descricao: 'ANVISA tem personalidade jurídica própria (autarquia), não é mero órgão do Ministério da Saúde.',
            dica: 'Órgão não tem personalidade jurídica própria; autarquia TEM.',
          },
          {
            titulo: 'Estados também fazem parte do SNVS',
            descricao: 'O SNVS integra União, Estados, DF E Municípios. Não é só ANVISA e municípios.',
            dica: 'SNVS = TODOS os entes federativos trabalhando em conjunto.',
          },
          {
            titulo: 'Mandato de 3 anos, não 4 ou 5',
            descricao: 'O mandato dos diretores da ANVISA é de 3 anos, com possibilidade de uma recondução.',
            dica: '3 anos + SENADO = mandato dos diretores.',
          },
          {
            titulo: 'Aprovação pelo SENADO, não Câmara',
            descricao: 'Os diretores da ANVISA são aprovados pelo Senado Federal, não pela Câmara dos Deputados.',
            dica: 'SENADO aprova diretores de agências reguladoras.',
          },
          {
            titulo: 'Fiscalização local é competência MUNICIPAL',
            descricao: 'A fiscalização de estabelecimentos locais é competência principal do município, não da ANVISA.',
            dica: 'Descentralização: quem está mais perto executa (município).',
          },
          {
            titulo: 'Registro vs. Alvará',
            descricao: 'Registro de medicamentos é ANVISA, mas alvará sanitário é municipal/estadual.',
            dica: 'ANVISA registra produtos; município/estado emite alvará.',
          },
          {
            titulo: 'Quarentena de 4 meses, não 6 ou 12',
            descricao: 'A quarentena para ex-diretores é de 4 meses, não 6 ou 12 meses.',
            dica: 'Quarentena ANVISA = 4 meses.',
          },
        ],

        mnemonicos: [
          {
            termo: 'SAMPAS',
            significado: 'Sangue, Alimentos, Medicamentos, Produtos, Ambientes, Serviços',
            frase: 'Áreas de abrangência da ANVISA: SAMPAS cobre tudo!',
          },
          {
            termo: 'AUTO-FIM',
            significado: 'AUTOnomia administrativa, FInanceira, Mandato fixo',
            frase: 'A ANVISA tem AUTO-FIM: autonomia e mandato fixo dos dirigentes.',
          },
          {
            termo: '5-3-SENADO',
            significado: '5 diretores, 3 anos de mandato, aprovação pelo Senado',
            frase: 'Diretoria ANVISA: 5-3-SENADO (5 diretores, 3 anos, Senado aprova).',
          },
          {
            termo: 'DAC',
            significado: 'Discricionariedade, Autoexecutoriedade, Coercibilidade',
            frase: 'Poder de polícia sanitária tem DAC: decide, executa, impõe.',
          },
          {
            termo: 'PAF',
            significado: 'Portos, Aeroportos, Fronteiras',
            frase: 'Controle de PAF é exclusivo da ANVISA (competência federal).',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-4-1',
            frente: 'Qual lei criou o SNVS e a ANVISA?',
            verso: '**Lei 9.782/1999**\n\nCriou o Sistema Nacional de Vigilância Sanitária e a ANVISA como autarquia especial.',
            tags: ['SNVS', 'ANVISA', 'Lei 9.782'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-2',
            frente: 'Qual é a natureza jurídica da ANVISA?',
            verso: '**AUTARQUIA ESPECIAL** sob regime especial\n\n→ Vinculada ao Ministério da Saúde\n→ Autonomia administrativa e financeira\n→ Mandato fixo dos dirigentes',
            tags: ['ANVISA', 'natureza jurídica'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-3',
            frente: 'Quantos membros compõem a Diretoria Colegiada da ANVISA?',
            verso: '**5 membros** (incluindo o Diretor-Presidente)\n\n→ Indicados pelo Presidente da República\n→ Aprovados pelo Senado Federal\n→ Mandato de 3 anos',
            tags: ['ANVISA', 'diretoria'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-4',
            frente: 'Qual o mandato dos diretores da ANVISA e quem aprova sua indicação?',
            verso: '**Mandato de 3 ANOS**\n\n→ Aprovação prévia do **SENADO FEDERAL**\n→ Possibilidade de uma recondução\n→ Quarentena de 4 meses após deixar cargo',
            tags: ['ANVISA', 'mandato', 'Senado'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-5',
            frente: 'Qual o período de quarentena para diretores após deixar a ANVISA?',
            verso: '**4 MESES**\n\n→ Não podem exercer atividade no setor regulado\n→ Recebem remuneração equivalente durante o período',
            tags: ['ANVISA', 'quarentena'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-6',
            frente: 'Quais são as áreas de abrangência da ANVISA (mnemônico SAMPAS)?',
            verso: '**SAMPAS:**\n\n**S**angue e hemoderivados\n**A**limentos e bebidas\n**M**edicamentos\n**P**rodutos para saúde\n**A**mbientes e processos\n**S**erviços de saúde',
            tags: ['ANVISA', 'SAMPAS', 'abrangência'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-7',
            frente: 'Qual a competência exclusiva da ANVISA em relação a portos, aeroportos e fronteiras?',
            verso: '**Controle sanitário de PAF:**\n\n→ **P**ortos\n→ **A**eroportos\n→ **F**ronteiras terrestres\n\nCompetência federal exclusiva (não pode ser delegada)',
            tags: ['ANVISA', 'portos', 'aeroportos', 'fronteiras'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-8',
            frente: 'Quais são as principais funções da ANVISA?',
            verso: '**Funções da ANVISA:**\n\n1. **Regulamentar** (normas técnicas)\n2. **Registrar** (produtos)\n3. **Fiscalizar** (estabelecimentos)\n4. **Autorizar** (funcionamento de empresas)\n5. **Monitorar** (qualidade e farmacovigilância)',
            tags: ['ANVISA', 'funções'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-9',
            frente: 'Qual lei estabelece as infrações e penalidades em vigilância sanitária?',
            verso: '**Lei 6.437/1977**\n\n→ Configura infrações à legislação sanitária\n→ Estabelece as penalidades\n→ Alterada pela Lei 9.695/1998',
            tags: ['infrações', 'penalidades', 'Lei 6.437'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-4-10',
            frente: 'Qual o valor das multas em vigilância sanitária conforme a Lei 6.437/1977?',
            verso: '**R$ 2.000 a R$ 1.500.000**\n\n→ Pode ser duplicada em caso de reincidência\n→ Outras penalidades: advertência, apreensão, interdição, cancelamento de registro',
            tags: ['multa', 'penalidades'],
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
            id: 'ce-q-4-1',
            enunciado: 'A Lei nº 9.782/1999 criou o Sistema Nacional de Vigilância Sanitária. Sobre o SNVS, assinale a alternativa correta:',
            alternativas: [
              { letra: 'A', texto: 'É composto apenas pela ANVISA e pelos municípios.' },
              { letra: 'B', texto: 'É um sistema centralizado com ações executadas exclusivamente pela União.' },
              { letra: 'C', texto: 'Integra União, Estados, Distrito Federal e Municípios de forma descentralizada.' },
              { letra: 'D', texto: 'Exclui os Estados da execução de ações de vigilância sanitária.' },
              { letra: 'E', texto: 'Funciona de forma independente do Sistema Único de Saúde.' },
            ],
            gabarito: 'C',
            justificativa: 'O SNVS é um sistema DESCENTRALIZADO que integra TODOS os entes federativos: União (ANVISA), Estados/DF e Municípios, atuando de forma coordenada dentro do SUS.',
            dificuldade: 'Fácil',
            competencia: 'SNVS',
            banca: 'IADES',
            tags: ['SNVS', 'Lei 9.782/1999', 'descentralização'],
          },
          {
            id: 'ce-q-4-2',
            enunciado: 'A Agência Nacional de Vigilância Sanitária (ANVISA), criada pela Lei nº 9.782/1999, tem como natureza jurídica:',
            alternativas: [
              { letra: 'A', texto: 'Fundação pública de direito privado.' },
              { letra: 'B', texto: 'Autarquia especial sob regime especial, vinculada ao Ministério da Saúde.' },
              { letra: 'C', texto: 'Empresa pública federal.' },
              { letra: 'D', texto: 'Órgão da administração direta do Ministério da Saúde.' },
              { letra: 'E', texto: 'Sociedade de economia mista.' },
            ],
            gabarito: 'B',
            justificativa: 'A ANVISA é uma AUTARQUIA ESPECIAL sob regime especial, VINCULADA ao Ministério da Saúde. Não é órgão (não tem personalidade jurídica própria), nem empresa pública.',
            dificuldade: 'Fácil',
            competencia: 'ANVISA',
            banca: 'IADES',
            tags: ['ANVISA', 'natureza jurídica', 'autarquia'],
          },
          {
            id: 'ce-q-4-3',
            enunciado: 'Sobre a Diretoria Colegiada da ANVISA, é correto afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'É composta por 3 membros com mandato de 5 anos.' },
              { letra: 'B', texto: 'Os diretores são indicados pelo Presidente da República e aprovados pela Câmara dos Deputados.' },
              { letra: 'C', texto: 'É composta por 5 membros, indicados pelo Presidente e aprovados pelo Senado Federal, com mandato de 3 anos.' },
              { letra: 'D', texto: 'Os diretores podem ser demitidos a qualquer momento pelo Ministro da Saúde.' },
              { letra: 'E', texto: 'O mandato dos diretores é de 4 anos, sem possibilidade de recondução.' },
            ],
            gabarito: 'C',
            justificativa: 'A Diretoria Colegiada da ANVISA é composta por 5 MEMBROS (incluindo o Diretor-Presidente), indicados pelo Presidente da República, aprovados pelo SENADO FEDERAL, com mandato de 3 ANOS.',
            dificuldade: 'Média',
            competencia: 'Diretoria ANVISA',
            banca: 'IADES',
            tags: ['ANVISA', 'diretoria colegiada', 'mandato'],
          },
          {
            id: 'ce-q-4-4',
            enunciado: 'Conforme a Lei nº 9.782/1999, NÃO está entre as áreas de abrangência da atuação da ANVISA:',
            alternativas: [
              { letra: 'A', texto: 'Medicamentos de uso humano e suas substâncias ativas.' },
              { letra: 'B', texto: 'Alimentos, inclusive bebidas, águas envasadas e seus insumos.' },
              { letra: 'C', texto: 'Sangue, hemoderivados e serviços de hemoterapia.' },
              { letra: 'D', texto: 'Agendamento de consultas médicas no SUS.' },
              { letra: 'E', texto: 'Cosméticos, saneantes e equipamentos médicos.' },
            ],
            gabarito: 'D',
            justificativa: 'Agendamento de consultas no SUS é atividade de ASSISTÊNCIA À SAÚDE, não de vigilância sanitária. A ANVISA atua sobre produtos e serviços de interesse da saúde (SAMPAS).',
            dificuldade: 'Fácil',
            competencia: 'Áreas de abrangência',
            banca: 'IADES',
            tags: ['ANVISA', 'áreas de abrangência', 'competência'],
          },
          {
            id: 'ce-q-4-5',
            enunciado: 'O controle sanitário de portos, aeroportos e fronteiras terrestres é competência:',
            alternativas: [
              { letra: 'A', texto: 'Exclusiva dos municípios onde estão localizados.' },
              { letra: 'B', texto: 'Da Polícia Federal.' },
              { letra: 'C', texto: 'Da ANVISA, sendo competência federal exclusiva.' },
              { letra: 'D', texto: 'Compartilhada entre Estados e Municípios.' },
              { letra: 'E', texto: 'Do Ministério das Relações Exteriores.' },
            ],
            gabarito: 'C',
            justificativa: 'O controle sanitário de PORTOS, AEROPORTOS e FRONTEIRAS é competência EXCLUSIVA da ANVISA (federal), pois envolve questões de saúde internacional e controle de entrada/saída de produtos.',
            dificuldade: 'Média',
            competencia: 'Competência federal',
            banca: 'IADES',
            tags: ['ANVISA', 'portos', 'aeroportos', 'fronteiras'],
          },
          {
            id: 'ce-q-4-6',
            enunciado: 'A quarentena aplicável aos ex-diretores da ANVISA após deixarem o cargo é de:',
            alternativas: [
              { letra: 'A', texto: '6 meses.' },
              { letra: 'B', texto: '12 meses.' },
              { letra: 'C', texto: '4 meses.' },
              { letra: 'D', texto: '3 meses.' },
              { letra: 'E', texto: '24 meses.' },
            ],
            gabarito: 'C',
            justificativa: 'A quarentena dos ex-diretores da ANVISA é de 4 MESES, período no qual não podem exercer atividade no setor regulado, recebendo remuneração equivalente.',
            dificuldade: 'Média',
            competencia: 'Quarentena',
            banca: 'IADES',
            tags: ['ANVISA', 'quarentena', 'diretores'],
          },
          {
            id: 'ce-q-4-7',
            enunciado: 'Segundo a Lei nº 6.437/1977, que configura infrações à legislação sanitária, o valor das multas pode variar de:',
            alternativas: [
              { letra: 'A', texto: 'R$ 500 a R$ 500.000.' },
              { letra: 'B', texto: 'R$ 1.000 a R$ 1.000.000.' },
              { letra: 'C', texto: 'R$ 2.000 a R$ 1.500.000.' },
              { letra: 'D', texto: 'R$ 5.000 a R$ 2.000.000.' },
              { letra: 'E', texto: 'R$ 10.000 a R$ 5.000.000.' },
            ],
            gabarito: 'C',
            justificativa: 'A Lei 6.437/1977 estabelece multas de R$ 2.000 a R$ 1.500.000 para infrações sanitárias, valor que pode ser duplicado em caso de reincidência.',
            dificuldade: 'Média',
            competencia: 'Penalidades',
            banca: 'IADES',
            tags: ['infrações', 'penalidades', 'multa'],
          },
          {
            id: 'ce-q-4-8',
            enunciado: 'Entre as funções da ANVISA previstas na Lei nº 9.782/1999, inclui-se:',
            alternativas: [
              { letra: 'A', texto: 'Prestação direta de serviços de assistência médica.' },
              { letra: 'B', texto: 'Registro de produtos submetidos ao regime de vigilância sanitária.' },
              { letra: 'C', texto: 'Contratação de profissionais de saúde para o SUS.' },
              { letra: 'D', texto: 'Gestão dos hospitais universitários federais.' },
              { letra: 'E', texto: 'Pagamento de benefícios previdenciários.' },
            ],
            gabarito: 'B',
            justificativa: 'O REGISTRO de produtos (medicamentos, alimentos, cosméticos etc.) é função típica da ANVISA. A agência não presta assistência médica nem gerencia hospitais.',
            dificuldade: 'Fácil',
            competencia: 'Funções da ANVISA',
            banca: 'IADES',
            tags: ['ANVISA', 'funções', 'registro'],
          },
          {
            id: 'ce-q-4-9',
            enunciado: 'O poder de polícia sanitária exercido pela vigilância sanitária possui como características:',
            alternativas: [
              { letra: 'A', texto: 'Facultatividade, consensualidade e subsidiariedade.' },
              { letra: 'B', texto: 'Discricionariedade, autoexecutoriedade e coercibilidade.' },
              { letra: 'C', texto: 'Voluntariedade, imparcialidade e transparência.' },
              { letra: 'D', texto: 'Bilateralidade, onerosidade e comutatividade.' },
              { letra: 'E', texto: 'Eletividade, temporaliedade e representatividade.' },
            ],
            gabarito: 'B',
            justificativa: 'O poder de polícia sanitária tem como características: DISCRICIONARIEDADE (margem de escolha), AUTOEXECUTORIEDADE (executar sem autorização judicial) e COERCIBILIDADE (impor obrigatoriamente).',
            dificuldade: 'Média',
            competencia: 'Poder de polícia',
            banca: 'IADES',
            tags: ['poder de polícia', 'características', 'vigilância sanitária'],
          },
          {
            id: 'ce-q-4-10',
            enunciado: 'A emissão do Certificado de Boas Práticas de Fabricação (CBPF) para indústrias farmacêuticas é competência:',
            alternativas: [
              { letra: 'A', texto: 'Das Vigilâncias Sanitárias municipais.' },
              { letra: 'B', texto: 'Das Vigilâncias Sanitárias estaduais.' },
              { letra: 'C', texto: 'Da ANVISA.' },
              { letra: 'D', texto: 'Do Conselho Regional de Farmácia.' },
              { letra: 'E', texto: 'Do Ministério da Indústria.' },
            ],
            gabarito: 'C',
            justificativa: 'O CBPF (Certificado de Boas Práticas de Fabricação) é emitido pela ANVISA após inspeção que verifica conformidade com normas de fabricação de medicamentos.',
            dificuldade: 'Fácil',
            competencia: 'CBPF',
            banca: 'IADES',
            tags: ['ANVISA', 'CBPF', 'boas práticas'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-5',
      numero: 5,
      titulo: 'Ética, princípios e valores no setor público',
      conteudo: {
        resumo: `
## Resumo Rápido - Ética no Setor Público

### Legislação Aplicável

| Norma | Conteúdo |
|-------|----------|
| **Decreto 9.837/2021 (GO)** | Código de Ética do servidor estadual |
| **Portaria 170/2018-SES** | Código de Ética do Fiscal de VISA |

### Princípios Éticos Fundamentais

**LIMPE + Ética:**
- Legalidade
- Impessoalidade
- Moralidade
- Publicidade
- Eficiência
- Probidade
- Decoro

### Deveres do Servidor (Decreto 9.837/2021)

| Dever | Descrição |
|-------|-----------|
| Lealdade | Às instituições e ao interesse público |
| Probidade | Honestidade, integridade |
| Decoro | Comportamento adequado |
| Cortesia | Tratamento respeitoso |
| Zelo | Cuidado com bens e informações |
| Sigilo | Proteger informações |

### Vedações

- Usar cargo para benefício próprio
- Solicitar/aceitar vantagens indevidas
- Prejudicar deliberadamente
- Usar informações privilegiadas
- Praticar assédio moral/sexual

### Fiscal de Vigilância Sanitária (Portaria 170/2018)

**Princípios Específicos:**
- Proteção da saúde pública (sempre)
- Imparcialidade nas fiscalizações
- Sigilo das informações fiscais
- Proporcionalidade nas sanções
- Educação sanitária

**Vedações Específicas:**
- Receber presentes de fiscalizados
- Antecipar resultado de fiscalização
- Atuar em estabelecimento de parente/amigo
- Usar poder para intimidação
        `,

        explicacao: `
## Explicação Didática - Ética no Setor Público

### 1. Fundamentos da Ética Pública

#### 1.1 Conceito de Ética
Conjunto de valores e princípios que orientam a conduta humana, distinguindo o certo do errado, o justo do injusto.

#### 1.2 Ética Pública
Aplicação dos princípios éticos ao serviço público, considerando:
- Interesse público (sempre superior)
- Responsabilidade com recursos públicos
- Transparência das ações
- Impessoalidade no tratamento

#### 1.3 Base Constitucional
O art. 37 da CF estabelece os princípios da Administração Pública, sendo a **moralidade** um deles. A violação da ética pode configurar improbidade administrativa.

### 2. Decreto nº 9.837/2021 (Goiás)

#### 2.1 Objeto
Institui o **Código de Ética e Conduta Profissional** do servidor e da alta administração do Poder Executivo estadual de Goiás.

#### 2.2 Abrangência
- Administração DIRETA
- AUTARQUIAS
- FUNDAÇÕES
- Toda a alta administração

#### 2.3 Princípios (Art. 3º)

| Princípio | Significado |
|-----------|-------------|
| **Integridade** | Coerência entre palavras e ações |
| **Probidade** | Honestidade no exercício do cargo |
| **Imparcialidade** | Sem favorecimentos |
| **Transparência** | Clareza nas ações |
| **Respeito** | Dignidade de todos |
| **Responsabilidade** | Assumir consequências |

#### 2.4 Deveres do Servidor (Art. 4º)

**LEALDADE:**
- Às instituições públicas
- Ao interesse público
- À hierarquia

**PROBIDADE:**
- Agir com honestidade
- Não usar cargo para vantagem
- Preservar patrimônio público

**DECORO:**
- Comportamento adequado
- Linguagem apropriada
- Vestimenta compatível

**CORTESIA:**
- Tratamento respeitoso
- Presteza no atendimento
- Urbanidade

**ZELO:**
- Cuidado com bens públicos
- Proteção de informações
- Economia de recursos

**SIGILO:**
- Proteger informações restritas
- Não divulgar dados sensíveis
- Manter confidencialidade

#### 2.5 Vedações (Art. 5º)

**USO INDEVIDO DO CARGO:**
- Obter vantagem pessoal
- Beneficiar terceiros indevidamente
- Usar informações privilegiadas

**CONDUTA INADEQUADA:**
- Assédio moral ou sexual
- Discriminação
- Conflito de interesses
- Uso de álcool/drogas em serviço

**VANTAGENS INDEVIDAS:**
- Solicitar presentes
- Aceitar propinas
- Receber "agrados" de interessados

### 3. Portaria nº 170/2018-SES (Fiscal de VISA)

#### 3.1 Objeto
Aprova o **Código de Ética dos Servidores que exercem a função de Fiscal de Vigilância Sanitária** no Estado de Goiás.

#### 3.2 Missão do Fiscal
Proteger e promover a saúde da população através da fiscalização de produtos e serviços de interesse sanitário.

#### 3.3 Princípios Específicos

**PROTEÇÃO À SAÚDE PÚBLICA:**
- Sempre priorizar a saúde coletiva
- Não permitir riscos à população
- Agir preventivamente

**IMPARCIALIDADE:**
- Tratar igualmente os fiscalizados
- Não discriminar
- Aplicar critérios objetivos

**PROPORCIONALIDADE:**
- Sanção adequada à infração
- Medidas compatíveis com o risco
- Evitar excessos

**SIGILO:**
- Proteger informações fiscais
- Não divulgar dados dos fiscalizados
- Resguardar segredos industriais

**EDUCAÇÃO SANITÁRIA:**
- Orientar antes de punir
- Promover conhecimento
- Colaborar com a regularização

#### 3.4 Deveres Específicos do Fiscal

| Dever | Descrição |
|-------|-----------|
| Identificar-se | Apresentar credencial |
| Documentar | Registrar as ações |
| Fundamentar | Justificar as decisões |
| Informar | Esclarecer direitos do fiscalizado |
| Comunicar | Relatar irregularidades |

#### 3.5 Vedações Específicas do Fiscal

**CONFLITO DE INTERESSES:**
- Fiscalizar parentes
- Atuar em local onde tenha interesse
- Aceitar emprego de fiscalizado

**VANTAGENS INDEVIDAS:**
- Receber presentes
- Aceitar "cortesias"
- Solicitar qualquer benefício

**CONDUTAS PROIBIDAS:**
- Antecipar resultado de fiscalização
- Usar poder para intimidar
- Negociar redução de penalidade
- Falsificar documentos

### 4. Comissões de Ética

#### 4.1 Composição
- Membros designados pelo órgão
- Representantes de diferentes setores
- Mandato determinado

#### 4.2 Competências
- Receber denúncias
- Apurar condutas
- Recomendar sanções
- Promover educação ética

### 5. Consequências das Infrações Éticas

#### 5.1 Âmbito Administrativo
- Advertência
- Censura ética
- Recomendação de punição disciplinar

#### 5.2 Cumulação de Responsabilidades
A infração ética pode gerar responsabilidade:
- ADMINISTRATIVA (PAD)
- CIVIL (reparação de danos)
- PENAL (crimes)
- Por IMPROBIDADE (Lei 8.429/92)
        `,

        pontosChave: [
          'Decreto 9.837/2021 (GO): Código de Ética do servidor estadual',
          'Portaria 170/2018-SES: Código de Ética do Fiscal de VISA',
          'Princípios: integridade, probidade, imparcialidade, transparência',
          'Deveres: lealdade, probidade, decoro, cortesia, zelo, sigilo',
          'Vedação: usar cargo para benefício próprio ou de terceiros',
          'Vedação: solicitar ou aceitar vantagens indevidas (presentes, propinas)',
          'Fiscal VISA: sempre priorizar proteção à saúde pública',
          'Fiscal VISA: não fiscalizar parentes ou locais onde tenha interesse',
          'Proporcionalidade: sanção adequada à gravidade da infração',
          'Responsabilidade é múltipla: administrativa, civil, penal e improbidade',
        ],

        armadilhas: [
          {
            titulo: 'Achar que ética não tem sanção',
            descricao: 'Infrações éticas PODEM resultar em punições administrativas.',
            dica: 'Ética + PAD = punição real.',
          },
          {
            titulo: 'Confundir os decretos',
            descricao: '9.837/2021 é de GO (servidores). Federal é Decreto 1.171/94.',
            dica: '9.837/2021 = Goiás. 1.171/94 = Federal.',
          },
          {
            titulo: 'Pensar que presentes pequenos são permitidos',
            descricao: 'Qualquer presente de fiscalizado é VEDADO ao fiscal de VISA.',
            dica: 'Fiscal não pode aceitar NADA de fiscalizado.',
          },
          {
            titulo: 'Achar que sigilo é sempre absoluto',
            descricao: 'Sigilo protege informações, mas não impede investigações legais.',
            dica: 'Sigilo serve ao interesse público, não para esconder ilícitos.',
          },
        ],

        mnemonicos: [
          {
            termo: 'LPDZSC',
            significado: 'Lealdade, Probidade, Decoro, Zelo, Sigilo, Cortesia',
            frase: 'Deveres do servidor: LPDZSC (Lembre: Pra Dar Zelo, Seja Cortês)',
          },
          {
            termo: 'PITR',
            significado: 'Probidade, Integridade, Transparência, Respeito',
            frase: 'Princípios éticos: PITR',
          },
          {
            termo: 'VISA = Proteção à Saúde',
            significado: 'O fiscal de VISA sempre prioriza a saúde pública',
            frase: 'VISA = Vigilância para a Saúde (sempre prioridade)',
          },
          {
            termo: 'NADA do fiscalizado',
            significado: 'Fiscal não pode aceitar presentes, cortesias ou qualquer benefício',
            frase: 'De fiscalizado: NADA aceitar!',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-5-1',
            frente: 'Qual norma institui o Código de Ética do servidor estadual de Goiás?',
            verso: '**Decreto nº 9.837/2021**\n\nInstitui o Código de Ética e Conduta Profissional do servidor e da alta administração do Poder Executivo estadual de Goiás.\n\nAbrangência: administração direta, autarquias e fundações.',
            tags: ['ética', 'Decreto 9.837'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-2',
            frente: 'Qual norma estabelece o Código de Ética do Fiscal de Vigilância Sanitária em Goiás?',
            verso: '**Portaria nº 170/2018-SES**\n\nAprova o Código de Ética dos Servidores que exercem a função de Fiscal de Vigilância Sanitária no Estado de Goiás.\n\nMissão: proteger e promover a saúde da população.',
            tags: ['ética', 'Portaria 170'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-3',
            frente: 'Quais são os principais DEVERES do servidor público segundo o Decreto 9.837/2021?',
            verso: '**DEVERES:**\n\n- **L**ealdade: às instituições\n- **P**robidade: honestidade\n- **D**ecoro: comportamento adequado\n- **Z**elo: cuidado com bens\n- **S**igilo: proteger informações\n- **C**ortesia: tratamento respeitoso',
            tags: ['deveres', 'servidor'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-4',
            frente: 'Quais são as principais VEDAÇÕES ao servidor público?',
            verso: '**VEDAÇÕES:**\n\n❌ Usar cargo para benefício próprio\n❌ Solicitar/aceitar vantagens indevidas\n❌ Usar informações privilegiadas\n❌ Praticar assédio moral/sexual\n❌ Discriminar pessoas\n❌ Conflito de interesses',
            tags: ['vedações', 'proibições'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-5',
            frente: 'Qual o principal princípio que deve nortear a atuação do Fiscal de VISA?',
            verso: '**PROTEÇÃO À SAÚDE PÚBLICA**\n\nO fiscal de VISA deve SEMPRE priorizar a saúde coletiva.\n\n**Decorrências:**\n- Não permitir riscos à população\n- Agir preventivamente\n- Interesse público > interesses privados',
            tags: ['VISA', 'saúde pública'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-6',
            frente: 'O fiscal de VISA pode aceitar presentes de fiscalizados?',
            verso: '**NÃO! JAMAIS!**\n\nO fiscal de VISA não pode aceitar:\n- Presentes (de qualquer valor)\n- "Cortesias"\n- Benefícios de qualquer natureza\n- Convites\n\n**Motivo:** Manter imparcialidade e evitar conflito de interesses.',
            tags: ['VISA', 'presentes'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-7',
            frente: 'O fiscal de VISA pode fiscalizar estabelecimento de parente?',
            verso: '**NÃO!**\n\nO fiscal NÃO pode atuar em:\n- Estabelecimento de parentes\n- Local onde tenha interesse pessoal\n- Empresa de amigos próximos\n\n**Deve:** Declarar impedimento e ser substituído.\n\n**Motivo:** Evitar conflito de interesses.',
            tags: ['VISA', 'conflito'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-8',
            frente: 'Quais são as consequências de uma infração ética?',
            verso: '**RESPONSABILIDADES MÚLTIPLAS:**\n\n1. **Administrativa:** PAD, demissão\n2. **Civil:** reparação de danos\n3. **Penal:** crimes\n4. **Improbidade:** Lei 8.429/92\n\nTodas podem ser aplicadas CUMULATIVAMENTE!',
            tags: ['consequências', 'responsabilidade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-9',
            frente: 'O que significa o princípio da PROPORCIONALIDADE para o Fiscal de VISA?',
            verso: '**PROPORCIONALIDADE:**\n\nA sanção deve ser ADEQUADA à infração.\n\n**Aplicação:**\n- Medida compatível com o risco\n- Evitar excessos\n- Gradação das penalidades\n- Considerar circunstâncias\n\n**Exemplo:** Infração leve ≠ interdição total.',
            tags: ['proporcionalidade', 'sanção'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-5-10',
            frente: 'Qual o papel da educação sanitária na atuação ética do fiscal de VISA?',
            verso: '**EDUCAÇÃO SANITÁRIA:**\n\nO fiscal deve ORIENTAR antes de punir.\n\n**Ações:**\n- Promover conhecimento\n- Explicar as normas\n- Colaborar com regularização\n- Dar prazo para adequação (quando cabível)\n\nPunição é última medida, não primeira.',
            tags: ['educação', 'orientação'],
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
            id: 'ce-q-5-1',
            enunciado: 'O Decreto nº 9.837/2021 do Estado de Goiás institui:',
            alternativas: [
              { letra: 'A', texto: 'O Estatuto dos Servidores Públicos Civis.' },
              { letra: 'B', texto: 'O Código de Ética e Conduta Profissional do servidor estadual.' },
              { letra: 'C', texto: 'O Regime Disciplinar dos Servidores.' },
              { letra: 'D', texto: 'A Lei de Acesso à Informação estadual.' },
              { letra: 'E', texto: 'O Plano de Cargos e Salários.' },
            ],
            gabarito: 'B',
            justificativa: 'O Decreto nº 9.837/2021 institui o CÓDIGO DE ÉTICA E CONDUTA PROFISSIONAL do servidor e da alta administração do Poder Executivo estadual de Goiás.',
            dificuldade: 'Fácil',
            competencia: 'Decreto 9.837/2021',
            banca: 'IADES',
            tags: ['Decreto 9.837', 'ética'],
          },
          {
            id: 'ce-q-5-2',
            enunciado: 'A Portaria nº 170/2018-SES aprova:',
            alternativas: [
              { letra: 'A', texto: 'O regulamento técnico de alimentos.' },
              { letra: 'B', texto: 'O Código de Ética dos Fiscais de Vigilância Sanitária.' },
              { letra: 'C', texto: 'As taxas de vigilância sanitária.' },
              { letra: 'D', texto: 'O calendário de fiscalizações.' },
              { letra: 'E', texto: 'A estrutura organizacional da SES.' },
            ],
            gabarito: 'B',
            justificativa: 'A Portaria nº 170/2018-SES aprova o CÓDIGO DE ÉTICA dos servidores que exercem a função de Fiscal de Vigilância Sanitária no Estado de Goiás.',
            dificuldade: 'Fácil',
            competencia: 'Portaria 170/2018',
            banca: 'IADES',
            tags: ['Portaria 170', 'VISA'],
          },
          {
            id: 'ce-q-5-3',
            enunciado: 'De acordo com o Código de Ética do servidor estadual de Goiás, são deveres do servidor, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Lealdade às instituições públicas.' },
              { letra: 'B', texto: 'Probidade no exercício do cargo.' },
              { letra: 'C', texto: 'Aceitar presentes de valor simbólico.' },
              { letra: 'D', texto: 'Decoro no comportamento.' },
              { letra: 'E', texto: 'Sigilo quanto a informações restritas.' },
            ],
            gabarito: 'C',
            justificativa: 'Aceitar presentes é VEDAÇÃO, não dever. Os deveres incluem lealdade, probidade, decoro, cortesia, zelo e sigilo.',
            dificuldade: 'Fácil',
            competencia: 'Deveres do servidor',
            banca: 'IADES',
            tags: ['deveres', 'vedações'],
          },
          {
            id: 'ce-q-5-4',
            enunciado: 'O Fiscal de Vigilância Sanitária, ao atuar em estabelecimento pertencente a familiar próximo, deve:',
            alternativas: [
              { letra: 'A', texto: 'Proceder normalmente com a fiscalização.' },
              { letra: 'B', texto: 'Informar ao familiar sobre a fiscalização com antecedência.' },
              { letra: 'C', texto: 'Declarar impedimento e ser substituído por outro fiscal.' },
              { letra: 'D', texto: 'Aplicar penalidade mais branda.' },
              { letra: 'E', texto: 'Solicitar autorização do superior para atuar.' },
            ],
            gabarito: 'C',
            justificativa: 'O fiscal deve DECLARAR IMPEDIMENTO e ser substituído quando houver conflito de interesses, como fiscalizar estabelecimento de parente ou onde tenha interesse pessoal.',
            dificuldade: 'Fácil',
            competencia: 'Conflito de interesses',
            banca: 'IADES',
            tags: ['impedimento', 'conflito'],
          },
          {
            id: 'ce-q-5-5',
            enunciado: 'O princípio que deve nortear PRIORITARIAMENTE a atuação do Fiscal de Vigilância Sanitária é:',
            alternativas: [
              { letra: 'A', texto: 'A arrecadação de multas.' },
              { letra: 'B', texto: 'A proteção à saúde pública.' },
              { letra: 'C', texto: 'O interesse do fiscalizado.' },
              { letra: 'D', texto: 'A economia de recursos.' },
              { letra: 'E', texto: 'A rapidez nas fiscalizações.' },
            ],
            gabarito: 'B',
            justificativa: 'O fiscal de VISA deve SEMPRE priorizar a PROTEÇÃO À SAÚDE PÚBLICA. Este é o princípio norteador de toda a atuação da vigilância sanitária.',
            dificuldade: 'Fácil',
            competencia: 'Princípio fundamental',
            banca: 'IADES',
            tags: ['saúde pública', 'prioridade'],
          },
          {
            id: 'ce-q-5-6',
            enunciado: 'Quanto a presentes oferecidos por fiscalizados, o Fiscal de Vigilância Sanitária:',
            alternativas: [
              { letra: 'A', texto: 'Pode aceitar presentes de pequeno valor.' },
              { letra: 'B', texto: 'Pode aceitar apenas alimentos perecíveis.' },
              { letra: 'C', texto: 'Não pode aceitar presentes de qualquer natureza.' },
              { letra: 'D', texto: 'Pode aceitar se dividir com a equipe.' },
              { letra: 'E', texto: 'Pode aceitar após a conclusão da fiscalização.' },
            ],
            gabarito: 'C',
            justificativa: 'O fiscal de VISA NÃO pode aceitar presentes, cortesias ou benefícios de qualquer natureza dos fiscalizados, independentemente do valor.',
            dificuldade: 'Fácil',
            competencia: 'Vedação a presentes',
            banca: 'IADES',
            tags: ['presentes', 'vedação'],
          },
          {
            id: 'ce-q-5-7',
            enunciado: 'A infração ética cometida por servidor público pode resultar em responsabilidade:',
            alternativas: [
              { letra: 'A', texto: 'Apenas administrativa.' },
              { letra: 'B', texto: 'Apenas civil.' },
              { letra: 'C', texto: 'Apenas penal.' },
              { letra: 'D', texto: 'Administrativa, civil, penal e por improbidade, cumulativamente.' },
              { letra: 'E', texto: 'Nenhuma, pois ética é apenas orientação.' },
            ],
            gabarito: 'D',
            justificativa: 'A infração ética pode gerar responsabilidade ADMINISTRATIVA, CIVIL, PENAL e por IMPROBIDADE, todas podendo ser aplicadas CUMULATIVAMENTE.',
            dificuldade: 'Média',
            competencia: 'Responsabilidades',
            banca: 'IADES',
            tags: ['responsabilidade', 'consequências'],
          },
          {
            id: 'ce-q-5-8',
            enunciado: 'O princípio da proporcionalidade na atuação do Fiscal de VISA significa:',
            alternativas: [
              { letra: 'A', texto: 'Aplicar sempre a penalidade máxima.' },
              { letra: 'B', texto: 'Aplicar sanção adequada à gravidade da infração.' },
              { letra: 'C', texto: 'Dispensar a punição em casos leves.' },
              { letra: 'D', texto: 'Negociar a penalidade com o fiscalizado.' },
              { letra: 'E', texto: 'Aplicar a mesma penalidade para todas as infrações.' },
            ],
            gabarito: 'B',
            justificativa: 'A proporcionalidade exige que a SANÇÃO seja ADEQUADA à gravidade da infração, evitando excessos ou punições insuficientes.',
            dificuldade: 'Fácil',
            competencia: 'Proporcionalidade',
            banca: 'IADES',
            tags: ['proporcionalidade', 'sanção'],
          },
          {
            id: 'ce-q-5-9',
            enunciado: 'O papel da educação sanitária na atuação ética do Fiscal de VISA é:',
            alternativas: [
              { letra: 'A', texto: 'Substituir completamente a aplicação de penalidades.' },
              { letra: 'B', texto: 'Orientar e promover conhecimento antes de punir.' },
              { letra: 'C', texto: 'Ser aplicada apenas em estabelecimentos novos.' },
              { letra: 'D', texto: 'Ser utilizada como forma de barganha.' },
              { letra: 'E', texto: 'Não ter relevância na atuação fiscal.' },
            ],
            gabarito: 'B',
            justificativa: 'A educação sanitária visa ORIENTAR antes de punir, promovendo conhecimento e colaborando com a regularização. A punição deve ser última medida.',
            dificuldade: 'Fácil',
            competencia: 'Educação sanitária',
            banca: 'IADES',
            tags: ['educação', 'orientação'],
          },
          {
            id: 'ce-q-5-10',
            enunciado: 'Constitui conduta VEDADA ao servidor público segundo o Decreto 9.837/2021:',
            alternativas: [
              { letra: 'A', texto: 'Atender o público com cortesia.' },
              { letra: 'B', texto: 'Zelar pelo patrimônio público.' },
              { letra: 'C', texto: 'Usar o cargo para obter vantagem pessoal.' },
              { letra: 'D', texto: 'Manter sigilo sobre informações restritas.' },
              { letra: 'E', texto: 'Ser leal às instituições públicas.' },
            ],
            gabarito: 'C',
            justificativa: 'USAR O CARGO para obter vantagem pessoal é VEDAÇÃO expressa. As demais alternativas são DEVERES do servidor público.',
            dificuldade: 'Fácil',
            competencia: 'Vedações',
            banca: 'IADES',
            tags: ['vedações', 'vantagem pessoal'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-6',
      numero: 6,
      titulo: 'Lei Estadual nº 16.140/2007 - Sistema Único de Saúde de Goiás (SUS-GO)',
      conteudo: {
        resumo: `
## Resumo Rápido

A **Lei Estadual nº 16.140/2007** dispõe sobre o Sistema Único de Saúde (SUS) em Goiás, regulamentando as condições para promoção, proteção e recuperação da saúde, bem como a organização, regulamentação, fiscalização e controle dos serviços de saúde no Estado.

### Estrutura da Lei

| Aspecto | Conteúdo |
|---------|----------|
| **Objetivo** | Regular o SUS no âmbito de Goiás |
| **Princípios** | Universalidade, integralidade, equidade |
| **Diretrizes** | Descentralização, regionalização, participação |
| **Gestão** | Secretaria Estadual de Saúde (SES-GO) |

### Princípios do SUS-GO

| Princípio | Significado |
|-----------|-------------|
| **Universalidade** | Saúde é direito de TODOS |
| **Integralidade** | Atendimento COMPLETO (prevenção + tratamento) |
| **Equidade** | Tratar DIFERENTEMENTE os desiguais |
| **Descentralização** | Gestão compartilhada (União, Estado, Município) |
| **Participação** | Controle social (Conselhos de Saúde) |

### Áreas de Atuação

- Vigilância sanitária
- Vigilância epidemiológica
- Saúde do trabalhador
- Assistência farmacêutica
- Controle e fiscalização de estabelecimentos
        `,

        explicacao: `
## Explicação Didática

### 1. DISPOSIÇÕES GERAIS

#### 1.1 Objeto da Lei

A Lei 16.140/2007 dispõe sobre o **Sistema Único de Saúde - SUS** no Estado de Goiás, regulamentando:

- As condições para **promoção, proteção e recuperação** da saúde
- A **organização** e **regulamentação** dos serviços de saúde
- A **fiscalização** e **controle** dos serviços correspondentes

#### 1.2 Conceito de Saúde

A lei adota o conceito ampliado de saúde:

> "A saúde tem como fatores determinantes e condicionantes, entre outros, a alimentação, a moradia, o saneamento básico, o meio ambiente, o trabalho, a renda, a educação, o transporte, o lazer e o acesso aos bens e serviços essenciais."

#### 1.3 Saúde como Direito

- A saúde é **direito de todos** e **dever do Estado**
- O Estado deve garantir condições indispensáveis ao pleno exercício desse direito
- O dever do Estado **não exclui** o das pessoas, da família, das empresas e da sociedade

### 2. PRINCÍPIOS DO SUS-GO

#### 2.1 Princípios Doutrinários

| Princípio | Definição | Aplicação |
|-----------|-----------|-----------|
| **Universalidade** | Todos têm direito ao acesso | Qualquer pessoa pode usar o SUS |
| **Integralidade** | Atendimento completo às necessidades | Prevenção + tratamento + reabilitação |
| **Equidade** | Tratar diferentemente os desiguais | Priorizar quem mais precisa |

#### 2.2 Princípios Organizativos

| Princípio | Definição | Aplicação |
|-----------|-----------|-----------|
| **Descentralização** | Divisão de responsabilidades | União → Estado → Município |
| **Regionalização** | Organização por regiões de saúde | Regiões de Saúde de GO |
| **Hierarquização** | Níveis de complexidade | Básica → Média → Alta |
| **Participação** | Controle social | Conselhos e Conferências |

### 3. DIRETRIZES DO SUS-GO

#### 3.1 Descentralização

- Ênfase na **municipalização** dos serviços
- Direção única em cada esfera de governo
- Cooperação técnica e financeira entre entes

#### 3.2 Regionalização e Hierarquização

**Regiões de Saúde de Goiás:**
- O Estado é dividido em **regiões de saúde**
- Cada região possui estrutura de atenção primária, secundária e terciária
- Pactuação de responsabilidades entre gestores

**Níveis de Atenção:**

| Nível | Complexidade | Exemplos |
|-------|--------------|----------|
| **Primário** | Atenção básica | UBS, PSF, vacinação |
| **Secundário** | Média complexidade | Especialidades, exames |
| **Terciário** | Alta complexidade | Hospitais, UTI, transplantes |

#### 3.3 Participação da Comunidade

| Instância | Função |
|-----------|--------|
| **Conselho Estadual de Saúde** | Deliberar sobre políticas de saúde |
| **Conferência Estadual de Saúde** | Avaliar e propor diretrizes |
| **Conselhos Municipais** | Controle social local |

### 4. COMPETÊNCIAS DO ESTADO (SES-GO)

#### 4.1 Atribuições da Gestão Estadual

A **Secretaria Estadual de Saúde (SES-GO)** tem como atribuições:

| Área | Competências |
|------|--------------|
| **Planejamento** | Plano Estadual de Saúde, programação |
| **Regulação** | Normatizar ações e serviços |
| **Financiamento** | Cofinanciar ações, gerir fundos |
| **Coordenação** | Coordenar redes de atenção |
| **Fiscalização** | Vigilância sanitária e epidemiológica |

#### 4.2 Vigilância em Saúde

O Estado é responsável por coordenar e executar ações de:

| Área | Ações |
|------|-------|
| **Vigilância Sanitária** | Controle de bens, serviços e ambientes |
| **Vigilância Epidemiológica** | Controle de doenças e agravos |
| **Vigilância Ambiental** | Fatores de risco ambientais |
| **Saúde do Trabalhador** | Riscos ocupacionais |

### 5. VIGILÂNCIA SANITÁRIA NA LEI 16.140/2007

#### 5.1 Conceito de Vigilância Sanitária

> "Conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde."

#### 5.2 Campos de Atuação

| Campo | Objetos |
|-------|---------|
| **Produtos** | Alimentos, medicamentos, cosméticos, saneantes |
| **Serviços** | Saúde, alimentação, embelezamento |
| **Ambientes** | Trabalho, moradia, lazer |
| **Equipamentos** | Médicos, hospitalares |

#### 5.3 Ações de Vigilância Sanitária

- **Inspeção** de estabelecimentos
- **Licenciamento** sanitário
- **Controle** de produtos e serviços
- **Educação** sanitária
- **Fiscalização** e aplicação de penalidades
- **Investigação** de surtos e agravos

### 6. INFRAÇÕES E PENALIDADES

#### 6.1 Tipos de Infrações Sanitárias

- Funcionamento sem licença sanitária
- Descumprimento de normas técnicas
- Comercialização de produtos irregulares
- Condições higiênico-sanitárias inadequadas
- Obstrução à fiscalização

#### 6.2 Penalidades Previstas

| Penalidade | Aplicação |
|------------|-----------|
| **Advertência** | Infrações leves, primeiro descumprimento |
| **Multa** | Infrações de todas as gravidades |
| **Apreensão** | Produtos irregulares |
| **Interdição** | Estabelecimentos com risco sanitário |
| **Cancelamento de licença** | Infrações graves ou reincidência |
| **Proibição de propaganda** | Propaganda irregular |

#### 6.3 Processo Administrativo Sanitário

1. **Lavratura do Auto de Infração**
2. **Notificação do infrator**
3. **Prazo para defesa** (geralmente 15 dias)
4. **Análise da defesa**
5. **Decisão** (aplicação ou não de penalidade)
6. **Recurso** (se cabível)
7. **Execução** da penalidade

### 7. FINANCIAMENTO DO SUS-GO

#### 7.1 Fontes de Recursos

| Fonte | Origem |
|-------|--------|
| **Federal** | Repasses do Ministério da Saúde |
| **Estadual** | Orçamento do Estado (mínimo 12% da receita) |
| **Municipal** | Orçamento dos municípios (mínimo 15%) |
| **Outras** | Taxas, multas, convênios |

#### 7.2 Fundo Estadual de Saúde

- Gerido pela SES-GO
- Recebe recursos federais e estaduais
- Financia ações e serviços de saúde
- Prestação de contas ao Conselho Estadual

### 8. CONTROLE SOCIAL

#### 8.1 Conselho Estadual de Saúde de Goiás

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | Paritária (50% usuários, 50% outros) |
| **Função** | Deliberar sobre políticas de saúde |
| **Caráter** | Permanente e deliberativo |
| **Reuniões** | Ordinárias mensais |

#### 8.2 Conferência Estadual de Saúde

- Realizada a cada **4 anos**
- Avalia a situação de saúde
- Propõe diretrizes para a política de saúde
- Delegados eleitos em etapas municipais/regionais

### 9. PONTOS IMPORTANTES PARA PROVA

| Tema | Ponto-Chave |
|------|-------------|
| **Princípios** | Universalidade, integralidade, equidade |
| **Diretrizes** | Descentralização, regionalização, participação |
| **VISA** | Competência compartilhada Estado-Município |
| **Penalidades** | Advertência, multa, apreensão, interdição |
| **Controle social** | Conselho Estadual paritário |
| **Financiamento** | Estado: mínimo 12% da receita |
| **Conferência** | A cada 4 anos |
        `,

        pontosChave: [
          'Lei 16.140/2007 regulamenta o SUS no Estado de Goiás',
          'Princípios doutrinários: Universalidade, Integralidade, Equidade',
          'Princípios organizativos: Descentralização, Regionalização, Hierarquização, Participação',
          'SES-GO: gestora estadual do SUS, coordena vigilância sanitária',
          'Vigilância Sanitária: eliminar/diminuir/prevenir riscos à saúde',
          'Penalidades: advertência, multa, apreensão, interdição, cancelamento de licença',
          'Conselho Estadual de Saúde: composição PARITÁRIA (50% usuários)',
          'Conferência Estadual de Saúde: a cada 4 anos',
          'Estado deve aplicar mínimo 12% da receita em saúde',
          'Descentralização: ênfase na municipalização, cooperação entre entes',
        ],

        armadilhas: [
          {
            titulo: 'Confundir princípios doutrinários com organizativos',
            descricao: 'Doutrinários: universalidade, integralidade, equidade. Organizativos: descentralização, regionalização, hierarquização, participação.',
            dica: 'UIE = princípios doutrinários. DRHP = princípios organizativos.',
          },
          {
            titulo: 'Errar a composição do Conselho de Saúde',
            descricao: 'O Conselho é PARITÁRIO: 50% de usuários. Os outros 50% são divididos entre gestores, prestadores e profissionais.',
            dica: 'USUÁRIOS sempre têm 50% das vagas no Conselho.',
          },
          {
            titulo: 'Confundir periodicidade da Conferência',
            descricao: 'A Conferência de Saúde é realizada a cada 4 ANOS, não anualmente.',
            dica: 'Conferência = 4 anos. Conselho = reuniões mensais.',
          },
          {
            titulo: 'Errar percentual mínimo de aplicação',
            descricao: 'Estado: mínimo 12%. Município: mínimo 15%. São diferentes!',
            dica: 'Estado = 12%. Município = 15%.',
          },
        ],

        mnemonicos: [
          {
            termo: 'UIE',
            significado: 'Universalidade, Integralidade, Equidade',
            frase: 'UIE = princípios DOUTRINÁRIOS do SUS.',
          },
          {
            termo: 'DRHP',
            significado: 'Descentralização, Regionalização, Hierarquização, Participação',
            frase: 'DRHP = princípios ORGANIZATIVOS do SUS.',
          },
          {
            termo: '50-50',
            significado: 'Composição paritária do Conselho',
            frase: '50% usuários, 50% outros (gestores, prestadores, profissionais).',
          },
          {
            termo: '12-15',
            significado: 'Percentuais mínimos',
            frase: 'Estado = 12%. Município = 15%.',
          },
          {
            termo: 'AMMAIC',
            significado: 'Advertência, Multa, Apreensão, Interdição, Cancelamento',
            frase: 'AMMAIC = penalidades sanitárias da menor para maior.',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-6-1',
            frente: 'Quais são os PRINCÍPIOS DOUTRINÁRIOS do SUS?',
            verso: '**Princípios Doutrinários (UIE):**\n\n1. **UNIVERSALIDADE**\n   Saúde é direito de TODOS\n\n2. **INTEGRALIDADE**\n   Atendimento COMPLETO (prevenção + tratamento + reabilitação)\n\n3. **EQUIDADE**\n   Tratar DIFERENTEMENTE os desiguais (priorizar quem mais precisa)',
            tags: ['princípios', 'doutrinários'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-2',
            frente: 'Quais são os PRINCÍPIOS ORGANIZATIVOS do SUS?',
            verso: '**Princípios Organizativos (DRHP):**\n\n1. **DESCENTRALIZAÇÃO**\n   Responsabilidade compartilhada (União → Estado → Município)\n\n2. **REGIONALIZAÇÃO**\n   Organização por regiões de saúde\n\n3. **HIERARQUIZAÇÃO**\n   Níveis de complexidade (básica → média → alta)\n\n4. **PARTICIPAÇÃO**\n   Controle social (Conselhos e Conferências)',
            tags: ['princípios', 'organizativos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-3',
            frente: 'O que é VIGILÂNCIA SANITÁRIA segundo a Lei 16.140/2007?',
            verso: '**Vigilância Sanitária:**\n\n"Conjunto de ações capaz de:\n• ELIMINAR\n• DIMINUIR\n• PREVENIR\n\nriscos à saúde decorrentes de:\n• Meio ambiente\n• Produção e circulação de bens\n• Prestação de serviços de interesse da saúde"\n\n**Campos:** produtos, serviços, ambientes, equipamentos.',
            tags: ['VISA', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-4',
            frente: 'Quais são as PENALIDADES sanitárias previstas na Lei 16.140/2007?',
            verso: '**Penalidades (AMMAIC):**\n\n• **A**dvertência - infrações leves\n• **M**ulta - todas as gravidades\n• **A**preensão - produtos irregulares\n• **I**nterdição - estabelecimentos com risco\n• **C**ancelamento de licença - infrações graves\n• Proibição de propaganda\n\n**Da menor para maior gravidade:** advertência → multa → apreensão → interdição → cancelamento',
            tags: ['penalidades', 'VISA'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-5',
            frente: 'Qual a composição do Conselho Estadual de Saúde?',
            verso: '**Composição PARITÁRIA:**\n\n• **50% - USUÁRIOS** do SUS\n\n• **50% - Outros segmentos:**\n  - Gestores públicos\n  - Prestadores de serviços\n  - Profissionais de saúde\n\n**Caráter:**\n• Permanente\n• Deliberativo (decide, não apenas opina)\n• Reuniões ordinárias mensais',
            tags: ['Conselho', 'composição'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-6',
            frente: 'Com que periodicidade é realizada a Conferência Estadual de Saúde?',
            verso: '**Conferência Estadual de Saúde:**\n\n**Periodicidade:** A cada **4 ANOS**\n\n**Funções:**\n• Avaliar situação de saúde\n• Propor diretrizes para a política de saúde\n• Definir prioridades\n\n**Processo:**\n1. Etapas municipais\n2. Etapas regionais\n3. Conferência Estadual\n4. Conferência Nacional',
            tags: ['Conferência', 'periodicidade'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-7',
            frente: 'Qual o percentual mínimo que o Estado deve aplicar em saúde?',
            verso: '**Percentuais Mínimos (EC 29/2000):**\n\n• **ESTADO:** 12% da receita de impostos\n• **MUNICÍPIO:** 15% da receita de impostos\n• **UNIÃO:** valor do ano anterior + variação do PIB\n\n**Dica:** Estado = 12%, Município = 15%\n(Município aplica MAIS % que o Estado)',
            tags: ['financiamento', 'percentual'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-8',
            frente: 'Quais são os níveis de atenção à saúde?',
            verso: '**Níveis de Atenção:**\n\n| Nível | Complexidade | Exemplos |\n|-------|--------------|----------|\n| **Primário** | Básica | UBS, PSF, vacinação |\n| **Secundário** | Média | Especialistas, exames |\n| **Terciário** | Alta | Hospitais, UTI, transplantes |\n\n**Princípio:** HIERARQUIZAÇÃO\n(Encaminhamento progressivo conforme necessidade)',
            tags: ['atenção', 'níveis'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-9',
            frente: 'O que significa o princípio da EQUIDADE no SUS?',
            verso: '**EQUIDADE:**\n\n"Tratar DIFERENTEMENTE os desiguais"\n\n**Significado:**\n• NÃO é tratar todos igualmente\n• É priorizar quem MAIS PRECISA\n• Reduzir desigualdades em saúde\n\n**Exemplo:**\nAtendimento prioritário para:\n- Idosos\n- Gestantes\n- Deficientes\n- Populações vulneráveis\n\n**Equidade ≠ Igualdade**',
            tags: ['equidade', 'princípio'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-6-10',
            frente: 'Quais são as competências da SES-GO na gestão do SUS?',
            verso: '**Competências da SES-GO:**\n\n• **Planejamento:** Plano Estadual de Saúde\n• **Regulação:** normas estaduais\n• **Financiamento:** cofinanciar ações\n• **Coordenação:** redes de atenção\n• **Fiscalização:** vigilância em saúde\n\n**Vigilâncias coordenadas:**\n- Sanitária\n- Epidemiológica\n- Ambiental\n- Saúde do trabalhador',
            tags: ['SES-GO', 'competências'],
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
            id: 'ce-q-6-1',
            enunciado: 'São princípios DOUTRINÁRIOS do SUS, conforme a Lei 16.140/2007:',
            alternativas: [
              { letra: 'A', texto: 'Descentralização, regionalização e hierarquização.' },
              { letra: 'B', texto: 'Universalidade, integralidade e equidade.' },
              { letra: 'C', texto: 'Participação, transparência e eficiência.' },
              { letra: 'D', texto: 'Municipalização, federalização e estadualização.' },
              { letra: 'E', texto: 'Gratuidade, obrigatoriedade e exclusividade.' },
            ],
            gabarito: 'B',
            justificativa: 'Os princípios DOUTRINÁRIOS do SUS são: UNIVERSALIDADE (direito de todos), INTEGRALIDADE (atendimento completo) e EQUIDADE (tratar diferentemente os desiguais).',
            dificuldade: 'Fácil',
            competencia: 'Princípios do SUS',
            banca: 'IADES',
            tags: ['princípios', 'doutrinários'],
          },
          {
            id: 'ce-q-6-2',
            enunciado: 'A composição do Conselho Estadual de Saúde é:',
            alternativas: [
              { letra: 'A', texto: 'Exclusivamente por profissionais de saúde.' },
              { letra: 'B', texto: 'Indicada pelo Governador do Estado.' },
              { letra: 'C', texto: 'Paritária, com 50% de representantes dos usuários.' },
              { letra: 'D', texto: 'Formada apenas por gestores públicos.' },
              { letra: 'E', texto: 'Composta por maioria de prestadores de serviços.' },
            ],
            gabarito: 'C',
            justificativa: 'O Conselho de Saúde tem composição PARITÁRIA: 50% de representantes dos USUÁRIOS e 50% divididos entre gestores, prestadores e profissionais de saúde.',
            dificuldade: 'Fácil',
            competencia: 'Controle social',
            banca: 'IADES',
            tags: ['Conselho', 'composição'],
          },
          {
            id: 'ce-q-6-3',
            enunciado: 'A Conferência Estadual de Saúde é realizada a cada:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '2 anos.' },
              { letra: 'C', texto: '3 anos.' },
              { letra: 'D', texto: '4 anos.' },
              { letra: 'E', texto: '5 anos.' },
            ],
            gabarito: 'D',
            justificativa: 'A Conferência de Saúde é realizada a cada 4 ANOS para avaliar a situação de saúde e propor diretrizes para a política de saúde.',
            dificuldade: 'Fácil',
            competencia: 'Conferência de Saúde',
            banca: 'IADES',
            tags: ['Conferência', 'periodicidade'],
          },
          {
            id: 'ce-q-6-4',
            enunciado: 'O princípio da EQUIDADE no SUS significa:',
            alternativas: [
              { letra: 'A', texto: 'Tratar todos de forma absolutamente igual.' },
              { letra: 'B', texto: 'Atender apenas a população de baixa renda.' },
              { letra: 'C', texto: 'Tratar diferentemente os desiguais, priorizando quem mais precisa.' },
              { letra: 'D', texto: 'Cobrar valores proporcionais à renda.' },
              { letra: 'E', texto: 'Oferecer serviços apenas em hospitais públicos.' },
            ],
            gabarito: 'C',
            justificativa: 'EQUIDADE significa tratar DIFERENTEMENTE os desiguais, priorizando quem mais precisa. Não é igualdade (tratar todos igual), mas justiça na distribuição dos recursos.',
            dificuldade: 'Fácil',
            competencia: 'Princípio da equidade',
            banca: 'IADES',
            tags: ['equidade', 'conceito'],
          },
          {
            id: 'ce-q-6-5',
            enunciado: 'São penalidades sanitárias previstas na legislação, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Advertência.' },
              { letra: 'B', texto: 'Multa.' },
              { letra: 'C', texto: 'Interdição.' },
              { letra: 'D', texto: 'Prisão.' },
              { letra: 'E', texto: 'Apreensão.' },
            ],
            gabarito: 'D',
            justificativa: 'PRISÃO é penalidade PENAL, não sanitária/administrativa. As penalidades sanitárias são: advertência, multa, apreensão, interdição, cancelamento de licença, proibição de propaganda.',
            dificuldade: 'Fácil',
            competencia: 'Penalidades sanitárias',
            banca: 'IADES',
            tags: ['penalidades', 'exceção'],
          },
          {
            id: 'ce-q-6-6',
            enunciado: 'O percentual MÍNIMO da receita de impostos que o Estado deve aplicar em saúde é:',
            alternativas: [
              { letra: 'A', texto: '10%.' },
              { letra: 'B', texto: '12%.' },
              { letra: 'C', texto: '15%.' },
              { letra: 'D', texto: '18%.' },
              { letra: 'E', texto: '25%.' },
            ],
            gabarito: 'B',
            justificativa: 'Conforme EC 29/2000, o Estado deve aplicar no mínimo 12% da receita de impostos em saúde. Os municípios devem aplicar no mínimo 15%.',
            dificuldade: 'Fácil',
            competencia: 'Financiamento',
            banca: 'IADES',
            tags: ['financiamento', '12%'],
          },
          {
            id: 'ce-q-6-7',
            enunciado: 'A Vigilância Sanitária é definida como:',
            alternativas: [
              { letra: 'A', texto: 'Conjunto de ações para tratamento de doenças.' },
              { letra: 'B', texto: 'Conjunto de ações para eliminar, diminuir ou prevenir riscos à saúde.' },
              { letra: 'C', texto: 'Serviço exclusivo de fiscalização de alimentos.' },
              { letra: 'D', texto: 'Órgão responsável apenas por emitir licenças.' },
              { letra: 'E', texto: 'Departamento de vigilância policial em hospitais.' },
            ],
            gabarito: 'B',
            justificativa: 'Vigilância Sanitária é o "conjunto de ações capaz de ELIMINAR, DIMINUIR ou PREVENIR riscos à saúde" decorrentes de produtos, serviços, ambientes e equipamentos.',
            dificuldade: 'Fácil',
            competencia: 'Conceito de VISA',
            banca: 'IADES',
            tags: ['VISA', 'conceito'],
          },
          {
            id: 'ce-q-6-8',
            enunciado: 'São princípios ORGANIZATIVOS do SUS:',
            alternativas: [
              { letra: 'A', texto: 'Universalidade e integralidade.' },
              { letra: 'B', texto: 'Equidade e gratuidade.' },
              { letra: 'C', texto: 'Descentralização, regionalização e participação.' },
              { letra: 'D', texto: 'Moralidade, publicidade e eficiência.' },
              { letra: 'E', texto: 'Legalidade e impessoalidade.' },
            ],
            gabarito: 'C',
            justificativa: 'Os princípios ORGANIZATIVOS do SUS são: Descentralização, Regionalização, Hierarquização e Participação da comunidade. Universalidade, integralidade e equidade são DOUTRINÁRIOS.',
            dificuldade: 'Média',
            competencia: 'Princípios organizativos',
            banca: 'IADES',
            tags: ['princípios', 'organizativos'],
          },
          {
            id: 'ce-q-6-9',
            enunciado: 'O Conselho Estadual de Saúde tem caráter:',
            alternativas: [
              { letra: 'A', texto: 'Apenas consultivo.' },
              { letra: 'B', texto: 'Permanente e deliberativo.' },
              { letra: 'C', texto: 'Temporário e opinativo.' },
              { letra: 'D', texto: 'Executivo e legislativo.' },
              { letra: 'E', texto: 'Judicial e normativo.' },
            ],
            gabarito: 'B',
            justificativa: 'O Conselho de Saúde tem caráter PERMANENTE (funciona continuamente) e DELIBERATIVO (suas decisões devem ser homologadas pelo gestor, não são apenas opiniões).',
            dificuldade: 'Média',
            competencia: 'Natureza do Conselho',
            banca: 'IADES',
            tags: ['Conselho', 'caráter'],
          },
          {
            id: 'ce-q-6-10',
            enunciado: 'A atenção de ALTA COMPLEXIDADE no SUS corresponde ao nível:',
            alternativas: [
              { letra: 'A', texto: 'Primário.' },
              { letra: 'B', texto: 'Secundário.' },
              { letra: 'C', texto: 'Terciário.' },
              { letra: 'D', texto: 'Quaternário.' },
              { letra: 'E', texto: 'Básico.' },
            ],
            gabarito: 'C',
            justificativa: 'Atenção de ALTA complexidade corresponde ao nível TERCIÁRIO (hospitais, UTI, transplantes). Primário = básica (UBS). Secundário = média complexidade (especialidades).',
            dificuldade: 'Fácil',
            competencia: 'Níveis de atenção',
            banca: 'IADES',
            tags: ['atenção', 'terciário'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-7',
      numero: 7,
      titulo: 'Processo Administrativo em Goiás',
      conteudo: {
        resumo: `
## Resumo Rápido

A **Lei Estadual nº 13.800/2001** regula o processo administrativo no âmbito da Administração Pública do Estado de Goiás.

### Princípios do Processo Administrativo

| Princípio | Significado |
|-----------|-------------|
| **Legalidade** | Ação conforme a lei |
| **Finalidade** | Atender ao interesse público |
| **Motivação** | Fundamentar todas as decisões |
| **Razoabilidade/Proporcionalidade** | Medidas adequadas e proporcionais |
| **Ampla Defesa e Contraditório** | Direito de se defender e contestar |
| **Oficialidade** | Administração conduz o processo de ofício |
| **Eficiência** | Resultado com menor custo |
| **Segurança Jurídica** | Previsibilidade das decisões |

### Fases do Processo Administrativo

| Fase | Descrição | Observação |
|------|-----------|------------|
| 1. **Instauração** | Início do processo | De ofício ou a pedido |
| 2. **Instrução** | Coleta de provas | Documentos, perícias, testemunhas |
| 3. **Defesa** | Manifestação do interessado | Prazo para contestar |
| 4. **Relatório** | Resumo do processo | Não vincula a decisão |
| 5. **Decisão** | Julgamento final | Deve ser motivada |

### Prazos Importantes

| Ato | Prazo | Observação |
|-----|-------|------------|
| **Decisão** | 30 dias | Prorrogável motivadamente |
| **Recurso** | 10 dias | Da ciência da decisão |
| **Alegações finais** | 10 dias | Antes da decisão |

### Recursos Administrativos

| Aspecto | Regra |
|---------|-------|
| **Destinatário** | Autoridade que proferiu a decisão |
| **Encaminhamento** | À superior se não reconsiderado |
| **Efeito devolutivo** | SIM (pode reformar decisão) |
| **Efeito suspensivo** | NÃO (regra geral) |

### Revisão do Processo

| Aspecto | Regra |
|---------|-------|
| **Quando** | A qualquer tempo, diante de fatos novos |
| **Reformatio in pejus** | VEDADA (não pode agravar a sanção) |

### Direitos vs Deveres do Administrado

| Direitos | Deveres |
|----------|---------|
| Ser tratado com respeito | Expor fatos conforme a verdade |
| Ciência da tramitação | Lealdade, urbanidade e boa-fé |
| Formular alegações | Não agir de modo temerário |
| Obter certidões e cópias | - |

### Pontos-Chave para a Prova IADES:
- **Lei 13.800/2001** = processo administrativo em Goiás (não confundir com Lei 9.784/99 federal)
- Fases: **IIDRD** (Instauração, Instrução, Defesa, Relatório, Decisão)
- Recurso: **10 dias**, SEM efeito suspensivo (regra)
- Revisão: **não pode piorar** a situação do administrado
        `,

        explicacao: `O processo administrativo é o instrumento pelo qual a Administração toma decisões que afetam direitos dos cidadãos. A Lei 13.800/2001 garante que isso seja feito de forma justa e transparente.

**POR QUE ESTUDAR PROCESSO ADMINISTRATIVO?**
Todo ato da Administração que afete direitos de alguém deve seguir o devido processo legal. A lei garante que o cidadão possa se defender antes de ser punido ou ter direitos restringidos.

**PRINCÍPIOS FUNDAMENTAIS:**

OFICIALIDADE (impulso oficial):
- A Administração deve conduzir o processo independentemente de provocação das partes
- Diferente do processo civil (onde as partes precisam "mover" o processo)

CONTRADITÓRIO E AMPLA DEFESA:
- Direito de saber o que está sendo discutido
- Direito de apresentar sua versão e provas
- Direito de recorrer das decisões

MOTIVAÇÃO:
- Toda decisão administrativa deve ser fundamentada
- Não basta dizer "indeferido", tem que explicar por quê

**FASES DO PROCESSO:**

1. INSTAURAÇÃO
   - Pode ser de ofício (pela própria Administração)
   - Pode ser a pedido (requerimento do interessado)

2. INSTRUÇÃO
   - Coleta de provas, documentos, perícias
   - Podem ser ouvidas testemunhas
   - Podem ser realizadas diligências

3. DEFESA
   - Prazo para o interessado se manifestar
   - Direito de contestar acusações
   - Pode juntar documentos

4. RELATÓRIO
   - Servidor faz resumo do processo
   - Sugere decisão, mas não vincula

5. DECISÃO
   - Autoridade competente decide
   - Deve ser motivada
   - Prazo: 30 dias (prorrogável)

**RECURSOS:**
- Prazo: 10 dias
- Regra: não tem efeito suspensivo (a decisão continua valendo)
- Exceção: quando houver risco de dano irreparável

**REFORMATIO IN PEJUS:**
Na revisão (quando surgem fatos novos), não se pode AGRAVAR a situação do administrado. Ex: se foi punido com advertência, a revisão não pode mudar para suspensão.`,

        pontosChave: [
          'Lei 13.800/2001 regula processo administrativo em Goiás',
          'Princípios: legalidade, finalidade, motivação, contraditório, ampla defesa',
          'Fases: instauração, instrução, defesa, relatório, decisão',
          'Prazo para decisão: 30 dias (prorrogável)',
          'Prazo para recurso: 10 dias',
          'Recurso em regra NÃO tem efeito suspensivo',
          'Revisão não pode agravar a situação (vedada reformatio in pejus)',
          'Oficialidade: Administração conduz processo de ofício',
          'Toda decisão deve ser motivada',
        ],

        armadilhas: [
          {
            titulo: 'Efeito do recurso',
            descricao: 'Pensar que recurso administrativo tem efeito suspensivo automático.',
            dica: 'Em regra, recurso tem apenas efeito DEVOLUTIVO (não suspende a decisão).',
          },
          {
            titulo: 'Prazo de recurso',
            descricao: 'Confundir prazo de recurso administrativo (10 dias) com outros prazos.',
            dica: 'Prazo de recurso é 10 dias, não 15 como no processo civil.',
          },
          {
            titulo: 'Revisão e agravamento',
            descricao: 'Achar que a revisão pode piorar a situação do administrado.',
            dica: 'Vedada reformatio in pejus - revisão só pode beneficiar.',
          },
          {
            titulo: 'Instauração do processo',
            descricao: 'Achar que processo só pode ser iniciado a pedido.',
            dica: 'Pode ser de ofício (pela Administração) OU a pedido do interessado.',
          },
          {
            titulo: 'Vinculação do relatório',
            descricao: 'Pensar que o relatório vincula a decisão final.',
            dica: 'O relatório é opinativo - a autoridade decide livremente.',
          },
          {
            titulo: 'Silêncio administrativo',
            descricao: 'Achar que silêncio significa deferimento automático.',
            dica: 'Silêncio não equivale a decisão favorável, salvo previsão legal expressa.',
          },
        ],

        mnemonicos: [
          {
            termo: 'IIDRD',
            significado: 'Fases do processo administrativo',
            frase: 'Instauração, Instrução, Defesa, Relatório, Decisão.',
          },
          {
            termo: '30D',
            significado: 'Prazo para decisão',
            frase: '30 Dias (prorrogável) para a Administração decidir.',
          },
          {
            termo: '10D',
            significado: 'Prazo para recurso',
            frase: '10 Dias para interpor recurso administrativo.',
          },
          {
            termo: 'DEV sim, SUS não',
            significado: 'Efeitos do recurso',
            frase: 'Recurso tem efeito Devolutivo SIM, Suspensivo NÃO (regra).',
          },
          {
            termo: 'Melhora OK, piora NÃO',
            significado: 'Revisão do processo',
            frase: 'Revisão pode melhorar, mas nunca piorar a situação.',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-7-1',
            frente: 'Qual lei regula o processo administrativo no Estado de Goiás?',
            verso: 'Lei Estadual nº 13.800/2001',
            tags: ['processo administrativo', 'lei'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-2',
            frente: 'Quais são as 5 fases do processo administrativo?',
            verso: 'Instauração, Instrução, Defesa, Relatório e Decisão',
            tags: ['fases', 'processo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-3',
            frente: 'Qual o prazo para a Administração decidir o processo?',
            verso: '30 dias, prorrogável por igual período de forma motivada',
            tags: ['prazo', 'decisão'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-4',
            frente: 'Qual o prazo para interpor recurso administrativo?',
            verso: '10 dias contados da ciência da decisão',
            tags: ['recurso', 'prazo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-5',
            frente: 'O recurso administrativo tem efeito suspensivo?',
            verso: 'Em regra, NÃO. Tem apenas efeito devolutivo. Exceção: quando houver risco de dano irreparável',
            tags: ['recurso', 'efeito suspensivo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-6',
            frente: 'O que é vedado na revisão do processo administrativo?',
            verso: 'Reformatio in pejus - não pode agravar a situação do administrado',
            tags: ['revisão', 'vedação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-7',
            frente: 'O que é o princípio da oficialidade no processo administrativo?',
            verso: 'A Administração deve conduzir e impulsionar o processo de ofício, independentemente de provocação das partes',
            tags: ['oficialidade', 'princípio'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-7-8',
            frente: 'O processo administrativo pode ser instaurado de que formas?',
            verso: 'De ofício (pela própria Administração) ou a pedido (requerimento do interessado)',
            tags: ['instauração', 'formas'],
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
            id: 'ce-q-7-1',
            enunciado: 'A lei que regula o processo administrativo no âmbito do Estado de Goiás é a:',
            alternativas: [
              { letra: 'A', texto: 'Lei nº 8.112/1990.' },
              { letra: 'B', texto: 'Lei nº 9.784/1999.' },
              { letra: 'C', texto: 'Lei nº 13.800/2001.' },
              { letra: 'D', texto: 'Lei nº 14.133/2021.' },
              { letra: 'E', texto: 'Lei nº 8.666/1993.' },
            ],
            gabarito: 'C',
            justificativa: 'A Lei Estadual nº 13.800/2001 regula o processo administrativo no Estado de Goiás. A Lei 9.784/1999 é federal.',
            dificuldade: 'Fácil',
            competencia: 'Legislação',
            banca: 'IADES',
            tags: ['lei', 'processo administrativo'],
          },
          {
            id: 'ce-q-7-2',
            enunciado: 'São fases do processo administrativo, na ordem correta:',
            alternativas: [
              { letra: 'A', texto: 'defesa, instrução, instauração, decisão, relatório.' },
              { letra: 'B', texto: 'instauração, instrução, defesa, relatório, decisão.' },
              { letra: 'C', texto: 'relatório, instauração, defesa, instrução, decisão.' },
              { letra: 'D', texto: 'decisão, recurso, revisão, instrução, defesa.' },
              { letra: 'E', texto: 'instrução, defesa, instauração, relatório, decisão.' },
            ],
            gabarito: 'B',
            justificativa: 'A ordem correta das fases é: INSTAURAÇÃO (início), INSTRUÇÃO (provas), DEFESA (manifestação), RELATÓRIO (resumo) e DECISÃO (julgamento).',
            dificuldade: 'Média',
            competencia: 'Fases do processo',
            banca: 'IADES',
            tags: ['fases', 'ordem'],
          },
          {
            id: 'ce-q-7-3',
            enunciado: 'O prazo para a Administração proferir decisão no processo administrativo é de:',
            alternativas: [
              { letra: 'A', texto: '10 dias.' },
              { letra: 'B', texto: '15 dias.' },
              { letra: 'C', texto: '30 dias.' },
              { letra: 'D', texto: '60 dias.' },
              { letra: 'E', texto: '90 dias.' },
            ],
            gabarito: 'C',
            justificativa: 'O prazo para decisão é de 30 DIAS, podendo ser prorrogado por igual período de forma motivada.',
            dificuldade: 'Média',
            competencia: 'Prazos',
            banca: 'IADES',
            tags: ['prazo', 'decisão'],
          },
          {
            id: 'ce-q-7-4',
            enunciado: 'O recurso administrativo, em regra:',
            alternativas: [
              { letra: 'A', texto: 'tem efeito suspensivo automático.' },
              { letra: 'B', texto: 'não tem efeito suspensivo.' },
              { letra: 'C', texto: 'suspende todos os prazos do processo.' },
              { letra: 'D', texto: 'impede a execução da decisão.' },
              { letra: 'E', texto: 'deve ser julgado em 24 horas.' },
            ],
            gabarito: 'B',
            justificativa: 'Em regra, o recurso administrativo NÃO tem efeito suspensivo, tendo apenas efeito devolutivo. A decisão pode ser executada mesmo com recurso pendente.',
            dificuldade: 'Média',
            competencia: 'Recursos',
            banca: 'IADES',
            tags: ['recurso', 'efeito'],
          },
          {
            id: 'ce-q-7-5',
            enunciado: 'O prazo para interposição de recurso administrativo é de:',
            alternativas: [
              { letra: 'A', texto: '5 dias.' },
              { letra: 'B', texto: '10 dias.' },
              { letra: 'C', texto: '15 dias.' },
              { letra: 'D', texto: '20 dias.' },
              { letra: 'E', texto: '30 dias.' },
            ],
            gabarito: 'B',
            justificativa: 'O prazo para recurso é de 10 DIAS, contados da ciência da decisão.',
            dificuldade: 'Fácil',
            competencia: 'Prazos',
            banca: 'IADES',
            tags: ['recurso', 'prazo'],
          },
          {
            id: 'ce-q-7-6',
            enunciado: 'Na revisão do processo administrativo:',
            alternativas: [
              { letra: 'A', texto: 'é possível agravar a sanção aplicada.' },
              { letra: 'B', texto: 'é vedado agravar a situação do administrado.' },
              { letra: 'C', texto: 'só pode ser feita pelo Poder Judiciário.' },
              { letra: 'D', texto: 'só cabe se houver trânsito em julgado.' },
              { letra: 'E', texto: 'depende de autorização legislativa.' },
            ],
            gabarito: 'B',
            justificativa: 'Na revisão, é VEDADA a reformatio in pejus, ou seja, não se pode agravar a situação do administrado. A revisão só pode beneficiá-lo.',
            dificuldade: 'Média',
            competencia: 'Revisão',
            banca: 'IADES',
            tags: ['revisão', 'reformatio'],
          },
          {
            id: 'ce-q-7-7',
            enunciado: 'O princípio segundo o qual a Administração deve conduzir o processo independentemente de provocação das partes é o da:',
            alternativas: [
              { letra: 'A', texto: 'legalidade.' },
              { letra: 'B', texto: 'impessoalidade.' },
              { letra: 'C', texto: 'oficialidade.' },
              { letra: 'D', texto: 'moralidade.' },
              { letra: 'E', texto: 'publicidade.' },
            ],
            gabarito: 'C',
            justificativa: 'O princípio da OFICIALIDADE (ou impulso oficial) determina que a Administração deve conduzir e impulsionar o processo de ofício.',
            dificuldade: 'Média',
            competencia: 'Princípios',
            banca: 'IADES',
            tags: ['oficialidade', 'princípio'],
          },
          {
            id: 'ce-q-7-8',
            enunciado: 'O processo administrativo pode ser instaurado:',
            alternativas: [
              { letra: 'A', texto: 'apenas de ofício.' },
              { letra: 'B', texto: 'apenas a pedido do interessado.' },
              { letra: 'C', texto: 'de ofício ou a pedido do interessado.' },
              { letra: 'D', texto: 'apenas por determinação judicial.' },
              { letra: 'E', texto: 'apenas pelo Ministério Público.' },
            ],
            gabarito: 'C',
            justificativa: 'O processo administrativo pode ser instaurado DE OFÍCIO (pela própria Administração) ou A PEDIDO (requerimento do interessado).',
            dificuldade: 'Fácil',
            competencia: 'Instauração',
            banca: 'IADES',
            tags: ['instauração', 'formas'],
          },
          {
            id: 'ce-q-7-9',
            enunciado: 'São direitos do administrado no processo administrativo, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'ser tratado com respeito.' },
              { letra: 'B', texto: 'ter ciência da tramitação do processo.' },
              { letra: 'C', texto: 'formular alegações e apresentar documentos.' },
              { letra: 'D', texto: 'obter decisão favorável em qualquer caso.' },
              { letra: 'E', texto: 'obter certidões e cópias.' },
            ],
            gabarito: 'D',
            justificativa: 'O administrado tem direito ao devido processo legal, mas NÃO tem garantia de decisão favorável. A decisão depende da análise do mérito.',
            dificuldade: 'Fácil',
            competencia: 'Direitos do administrado',
            banca: 'IADES',
            tags: ['direitos', 'administrado'],
          },
          {
            id: 'ce-q-7-10',
            enunciado: 'A motivação das decisões administrativas:',
            alternativas: [
              { letra: 'A', texto: 'é dispensável em qualquer caso.' },
              { letra: 'B', texto: 'só é exigida em processos disciplinares.' },
              { letra: 'C', texto: 'é obrigatória como garantia do devido processo legal.' },
              { letra: 'D', texto: 'pode ser substituída pelo silêncio administrativo.' },
              { letra: 'E', texto: 'só é necessária se houver recurso.' },
            ],
            gabarito: 'C',
            justificativa: 'A MOTIVAÇÃO é obrigatória, sendo garantia do devido processo legal. Toda decisão deve expor os fundamentos de fato e de direito que a embasam.',
            dificuldade: 'Média',
            competencia: 'Motivação',
            banca: 'IADES',
            tags: ['motivação', 'obrigatoriedade'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-8',
      numero: 8,
      titulo: 'Fiscalização e Controle Sanitário',
      conteudo: {
        resumo: `
## Resumo Rápido

O controle sanitário é exercido pela **Vigilância Sanitária (VISA)** através do poder de polícia sanitária para proteção da saúde pública.

### Poder de Polícia Sanitária

| Atributo | Significado | Aplicação |
|----------|-------------|-----------|
| **Discricionariedade** | Margem de escolha | Decidir qual medida aplicar |
| **Autoexecutoriedade** | Execução direta | Interditar SEM autorização judicial |
| **Coercibilidade** | Imposição forçada | Obrigar cumprimento das normas |

### Medidas Cautelares (Preventivas)

| Medida | Descrição | Objetivo |
|--------|-----------|----------|
| **Interdição** | Impede funcionamento do estabelecimento | Cessar risco imediato |
| **Apreensão** | Retenção de produtos irregulares | Análise ou inutilização |
| **Inutilização** | Destruição de produtos impróprios | Eliminar risco |
| **Suspensão de venda** | Proibição de comercialização | Até sanear irregularidades |
| **Cancelamento de registro** | Cassação da autorização | Medida mais grave |

### Interdição - Detalhamento

| Aspecto | Regra |
|---------|-------|
| **Tipos** | Total ou parcial |
| **Quando** | Risco iminente à saúde pública |
| **Requisitos** | Fundamentada + comunicada ao interessado |
| **Autorização judicial** | NÃO necessária (autoexecutoriedade) |

### Colheita de Amostras - Regra das 3 Partes

| Parte | Finalidade |
|-------|-----------|
| **1ª Parte** | Análise laboratorial |
| **2ª Parte** | Contraprova (se contestar) |
| **3ª Parte** | Arquivo (reserva) |

### Processo Administrativo Sanitário

| Fase | Descrição | Prazo |
|------|-----------|-------|
| 1. **Autuação** | Fiscal lavra auto de infração | - |
| 2. **Defesa** | Manifestação do autuado | 15 dias |
| 3. **Instrução** | Coleta de provas | - |
| 4. **Julgamento** | Decisão + aplicação de penalidade | - |
| 5. **Recurso** | Revisão por instância superior | - |

### Penalidades Sanitárias (Crescente Gravidade)

| Penalidade | Gravidade | Observação |
|------------|-----------|------------|
| **Advertência** | Leve | Infração menor |
| **Multa** | Média | Valor proporcional |
| **Apreensão/Inutilização** | Média-grave | Produtos irregulares |
| **Suspensão de venda** | Grave | Produtos específicos |
| **Interdição** | Grave | Temporária ou definitiva |
| **Cancelamento de registro** | Gravíssima | Perda da autorização |
| **Proibição de propaganda** | Acessória | Complementar |

### Cautelar vs Penalidade

| Tipo | Natureza | Momento | Exemplo |
|------|----------|---------|---------|
| **Cautelar** | PREVENTIVA | Imediato | Interdição por surto |
| **Penalidade** | PUNITIVA | Após processo | Multa por descumprimento |

### Pontos-Chave para a Prova IADES:
- VISA tem **autoexecutoriedade** (age sem autorização judicial)
- Amostra = **3 partes** (análise, contraprova, arquivo)
- **Suspensão** = produto; **Interdição** = estabelecimento
- Cautelar = **prevenir**; Penalidade = **punir**
        `,

        explicacao: `O controle sanitário é uma das atividades mais importantes da saúde pública. Entenda como funciona na prática.

**O QUE É VIGILÂNCIA SANITÁRIA?**
É o conjunto de ações para eliminar, diminuir ou prevenir riscos à saúde decorrentes de:
- Alimentos e bebidas
- Medicamentos e cosméticos
- Serviços de saúde
- Ambientes de trabalho
- Produtos de interesse sanitário

**PODER DE POLÍCIA:**
A VISA tem PODER DE POLÍCIA, o que significa que pode:
- Fiscalizar sem aviso prévio
- Autuar imediatamente
- Aplicar medidas cautelares (interdição, apreensão)
- Impor penalidades

**MEDIDAS CAUTELARES vs PENALIDADES:**
CAUTELARES: são preventivas, visam evitar dano imediato
- Ex: interditar restaurante com surto de intoxicação

PENALIDADES: são punitivas, aplicadas após o processo
- Ex: multa por descumprimento de normas

**INTERDIÇÃO - COMO FUNCIONA:**
1. Fiscal constata risco grave
2. Lavra auto de interdição
3. Estabelecimento não pode funcionar
4. Proprietário pode pedir desinterdição após corrigir
5. Fiscal vistoria e libera se tudo estiver ok

**APREENSÃO DE PRODUTOS:**
- Produto vencido? Apreende
- Produto sem registro? Apreende
- Produto adulterado? Apreende
- Sempre lavra TERMO de apreensão

**COLHEITA DE AMOSTRAS - REGRA DAS TRÊS PARTES:**
Quando colhe amostra para análise:
- 1ª parte: vai para análise no laboratório
- 2ª parte: fica para contraprova (se o interessado contestar)
- 3ª parte: arquivo (se precisar de nova análise)

**PROCESSO ADMINISTRATIVO SANITÁRIO:**
1. AUTUAÇÃO: fiscal lavra auto de infração
2. DEFESA: 15 dias para apresentar defesa
3. INSTRUÇÃO: coleta de provas adicionais
4. JULGAMENTO: autoridade decide e aplica penalidade
5. RECURSO: prazo para recorrer à instância superior

**PRINCÍPIO DA PROPORCIONALIDADE:**
A penalidade deve ser proporcional à gravidade:
- Infração leve: advertência
- Infração média: multa
- Infração grave: interdição, cassação`,

        pontosChave: [
          'Vigilância Sanitária exerce poder de polícia (fiscalizar, autuar, penalizar)',
          'Medidas cautelares: interdição, apreensão, suspensão de venda',
          'Penalidades: advertência, multa, inutilização, cancelamento, interdição',
          'Interdição pode ser total ou parcial',
          'Colheita de amostras: três partes (análise, contraprova, arquivo)',
          'Processo sanitário: autuação, defesa, instrução, julgamento, recurso',
          'Garantia de contraditório e ampla defesa',
          'Princípio da proporcionalidade: penalidade conforme gravidade',
        ],

        armadilhas: [
          {
            titulo: 'Cautelar vs Penalidade',
            descricao: 'Confundir medida cautelar com penalidade.',
            dica: 'Cautelar = preventiva (evitar dano). Penalidade = punitiva (após processo).',
          },
          {
            titulo: 'Natureza da interdição',
            descricao: 'Achar que interdição é sempre definitiva.',
            dica: 'Interdição pode ser temporária ou definitiva, total ou parcial.',
          },
          {
            titulo: 'Partes da amostra',
            descricao: 'Esquecer quantas partes compõem a amostra.',
            dica: 'São TRÊS partes: análise, contraprova e arquivo.',
          },
          {
            titulo: 'Autorização judicial',
            descricao: 'Pensar que VISA precisa de autorização judicial para interditar.',
            dica: 'VISA tem autoexecutoriedade - interdita sem autorização judicial.',
          },
          {
            titulo: 'Suspensão vs Interdição',
            descricao: 'Confundir suspensão de venda com interdição do estabelecimento.',
            dica: 'Suspensão = produto. Interdição = estabelecimento.',
          },
          {
            titulo: 'Direito de defesa',
            descricao: 'Achar que não há direito de defesa em processo sanitário.',
            dica: 'Há garantia de contraditório e ampla defesa em todo processo.',
          },
        ],

        mnemonicos: [
          {
            termo: 'AISI',
            significado: 'Medidas cautelares',
            frase: 'Apreensão, Interdição, Suspensão, Inutilização.',
          },
          {
            termo: 'ACA',
            significado: 'Partes da amostra',
            frase: 'Análise, Contraprova, Arquivo (três partes).',
          },
          {
            termo: 'AMAICP',
            significado: 'Penalidades sanitárias',
            frase: 'Advertência, Multa, Apreensão, Interdição, Cancelamento, Proibição propaganda.',
          },
          {
            termo: 'ADIJR',
            significado: 'Fases do processo sanitário',
            frase: 'Autuação, Defesa, Instrução, Julgamento, Recurso.',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-8-1',
            frente: 'Quais são as principais medidas cautelares da Vigilância Sanitária?',
            verso: 'Interdição, apreensão, inutilização e suspensão de venda/fabricação',
            tags: ['medidas cautelares', 'VISA'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-2',
            frente: 'Em quantas partes deve ser dividida a amostra colhida pela VISA?',
            verso: 'Três partes: uma para análise, uma para contraprova e uma para arquivo',
            tags: ['amostra', 'colheita'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-3',
            frente: 'Quais os atributos do poder de polícia sanitária?',
            verso: 'Discricionariedade, autoexecutoriedade e coercibilidade',
            tags: ['poder de polícia', 'atributos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-4',
            frente: 'Qual a diferença entre medida cautelar e penalidade?',
            verso: 'Cautelar é preventiva (evitar dano imediato). Penalidade é punitiva (sanção após processo administrativo)',
            tags: ['cautelar', 'penalidade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-5',
            frente: 'Quais são as penalidades sanitárias?',
            verso: 'Advertência, multa, apreensão, inutilização, suspensão de venda, cancelamento de registro, interdição e proibição de propaganda',
            tags: ['penalidades', 'sanitárias'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-6',
            frente: 'A Vigilância Sanitária precisa de autorização judicial para interditar um estabelecimento?',
            verso: 'NÃO. A VISA tem poder de polícia com AUTOEXECUTORIEDADE - pode interditar imediatamente sem precisar do Judiciário',
            tags: ['interdição', 'autoexecutoriedade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-7',
            frente: 'Quais as fases do processo administrativo sanitário?',
            verso: 'Autuação, Defesa, Instrução, Julgamento e Recurso',
            tags: ['processo', 'fases'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-8-8',
            frente: 'Quando se aplica a inutilização de produtos?',
            verso: 'Quando os produtos estão impróprios para consumo e não há possibilidade de regularização (ex: alimentos deteriorados)',
            tags: ['inutilização', 'produtos'],
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
            id: 'ce-q-8-1',
            enunciado: 'São medidas cautelares sanitárias, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'interdição.' },
              { letra: 'B', texto: 'apreensão.' },
              { letra: 'C', texto: 'multa.' },
              { letra: 'D', texto: 'suspensão de venda.' },
              { letra: 'E', texto: 'inutilização.' },
            ],
            gabarito: 'C',
            justificativa: 'MULTA é PENALIDADE, não medida cautelar. Medidas cautelares são preventivas: interdição, apreensão, suspensão, inutilização.',
            dificuldade: 'Média',
            competencia: 'Medidas cautelares',
            banca: 'IADES',
            tags: ['cautelar', 'multa'],
          },
          {
            id: 'ce-q-8-2',
            enunciado: 'A amostra colhida pela Vigilância Sanitária deve ser dividida em:',
            alternativas: [
              { letra: 'A', texto: 'duas partes.' },
              { letra: 'B', texto: 'três partes.' },
              { letra: 'C', texto: 'quatro partes.' },
              { letra: 'D', texto: 'cinco partes.' },
              { letra: 'E', texto: 'uma única parte.' },
            ],
            gabarito: 'B',
            justificativa: 'A amostra é dividida em TRÊS partes: análise, contraprova e arquivo.',
            dificuldade: 'Média',
            competencia: 'Colheita de amostras',
            banca: 'IADES',
            tags: ['amostra', 'partes'],
          },
          {
            id: 'ce-q-8-3',
            enunciado: 'O atributo do poder de polícia que permite à VISA agir independentemente de autorização judicial é a:',
            alternativas: [
              { letra: 'A', texto: 'discricionariedade.' },
              { letra: 'B', texto: 'coercibilidade.' },
              { letra: 'C', texto: 'autoexecutoriedade.' },
              { letra: 'D', texto: 'imperatividade.' },
              { letra: 'E', texto: 'tipicidade.' },
            ],
            gabarito: 'C',
            justificativa: 'A AUTOEXECUTORIEDADE permite que a Administração execute seus atos sem necessidade de autorização judicial prévia.',
            dificuldade: 'Média',
            competencia: 'Poder de polícia',
            banca: 'IADES',
            tags: ['autoexecutoriedade', 'poder de polícia'],
          },
          {
            id: 'ce-q-8-4',
            enunciado: 'A interdição de estabelecimento pela Vigilância Sanitária:',
            alternativas: [
              { letra: 'A', texto: 'só pode ser total, nunca parcial.' },
              { letra: 'B', texto: 'pode ser total ou parcial, conforme o risco.' },
              { letra: 'C', texto: 'depende de autorização do Ministério Público.' },
              { letra: 'D', texto: 'só pode ser aplicada pelo Poder Judiciário.' },
              { letra: 'E', texto: 'é sempre definitiva.' },
            ],
            gabarito: 'B',
            justificativa: 'A interdição pode ser TOTAL ou PARCIAL, conforme a gravidade e extensão do risco sanitário.',
            dificuldade: 'Média',
            competencia: 'Interdição',
            banca: 'IADES',
            tags: ['interdição', 'modalidades'],
          },
          {
            id: 'ce-q-8-5',
            enunciado: 'São penalidades sanitárias:',
            alternativas: [
              { letra: 'A', texto: 'apenas advertência e multa.' },
              { letra: 'B', texto: 'apenas multa e interdição.' },
              { letra: 'C', texto: 'advertência, multa, apreensão, inutilização, interdição, cancelamento e proibição de propaganda.' },
              { letra: 'D', texto: 'apenas prisão e multa.' },
              { letra: 'E', texto: 'apenas cassação da licença.' },
            ],
            gabarito: 'C',
            justificativa: 'As penalidades sanitárias incluem: advertência, multa, apreensão, inutilização, suspensão, interdição, cancelamento de registro e proibição de propaganda.',
            dificuldade: 'Média',
            competencia: 'Penalidades',
            banca: 'IADES',
            tags: ['penalidades', 'espécies'],
          },
          {
            id: 'ce-q-8-6',
            enunciado: 'A inutilização de produtos é aplicada quando:',
            alternativas: [
              { letra: 'A', texto: 'o produto está com prazo de validade próximo.' },
              { letra: 'B', texto: 'o produto pode ser regularizado.' },
              { letra: 'C', texto: 'o produto está impróprio e não há possibilidade de regularização.' },
              { letra: 'D', texto: 'o fabricante solicita.' },
              { letra: 'E', texto: 'há excesso de estoque.' },
            ],
            gabarito: 'C',
            justificativa: 'A inutilização é aplicada quando o produto está IMPRÓPRIO para consumo e NÃO HÁ POSSIBILIDADE de regularização.',
            dificuldade: 'Fácil',
            competencia: 'Inutilização',
            banca: 'IADES',
            tags: ['inutilização', 'hipóteses'],
          },
          {
            id: 'ce-q-8-7',
            enunciado: 'No processo administrativo sanitário, o autuado tem direito a:',
            alternativas: [
              { letra: 'A', texto: 'defesa e recurso.' },
              { letra: 'B', texto: 'apenas defesa, sem recurso.' },
              { letra: 'C', texto: 'apenas recurso, sem defesa prévia.' },
              { letra: 'D', texto: 'nenhum direito de manifestação.' },
              { letra: 'E', texto: 'suspensão automática da penalidade.' },
            ],
            gabarito: 'A',
            justificativa: 'O processo administrativo sanitário garante CONTRADITÓRIO e AMPLA DEFESA, incluindo direito de defesa prévia e recurso.',
            dificuldade: 'Fácil',
            competencia: 'Garantias processuais',
            banca: 'IADES',
            tags: ['defesa', 'recurso'],
          },
          {
            id: 'ce-q-8-8',
            enunciado: 'A suspensão de venda de produto pela VISA:',
            alternativas: [
              { letra: 'A', texto: 'é permanente e irreversível.' },
              { letra: 'B', texto: 'é medida temporária até a regularização.' },
              { letra: 'C', texto: 'só pode ser aplicada após sentença judicial.' },
              { letra: 'D', texto: 'dispensa fundamentação.' },
              { letra: 'E', texto: 'nunca pode atingir toda a produção.' },
            ],
            gabarito: 'B',
            justificativa: 'A suspensão de venda é TEMPORÁRIA, vigorando até que as irregularidades sejam sanadas.',
            dificuldade: 'Média',
            competencia: 'Suspensão de venda',
            banca: 'IADES',
            tags: ['suspensão', 'temporária'],
          },
          {
            id: 'ce-q-8-9',
            enunciado: 'A diferença entre medida cautelar e penalidade sanitária é que:',
            alternativas: [
              { letra: 'A', texto: 'são a mesma coisa.' },
              { letra: 'B', texto: 'a cautelar é preventiva e a penalidade é punitiva.' },
              { letra: 'C', texto: 'a penalidade é preventiva e a cautelar é punitiva.' },
              { letra: 'D', texto: 'ambas são aplicadas sem processo.' },
              { letra: 'E', texto: 'apenas a penalidade pode ser aplicada pela VISA.' },
            ],
            gabarito: 'B',
            justificativa: 'Medida CAUTELAR é PREVENTIVA (visa evitar dano imediato). PENALIDADE é PUNITIVA (sanção aplicada após processo administrativo).',
            dificuldade: 'Média',
            competencia: 'Distinção conceitual',
            banca: 'IADES',
            tags: ['cautelar', 'penalidade', 'distinção'],
          },
          {
            id: 'ce-q-8-10',
            enunciado: 'Para a colheita de amostras, a parte destinada à CONTRAPROVA serve para:',
            alternativas: [
              { letra: 'A', texto: 'análise inicial pelo laboratório.' },
              { letra: 'B', texto: 'nova análise caso o interessado conteste o resultado.' },
              { letra: 'C', texto: 'arquivamento permanente.' },
              { letra: 'D', texto: 'devolução ao fabricante.' },
              { letra: 'E', texto: 'destruição imediata.' },
            ],
            gabarito: 'B',
            justificativa: 'A CONTRAPROVA é reservada para nova análise caso o interessado conteste o resultado da análise inicial.',
            dificuldade: 'Média',
            competencia: 'Colheita de amostras',
            banca: 'IADES',
            tags: ['contraprova', 'finalidade'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-9',
      numero: 9,
      titulo: 'Infração Sanitária',
      conteudo: {
        resumo: `# Infração Sanitária

A **infração sanitária** é toda ação ou omissão que contrarie as normas de saúde pública, constituindo ilícito administrativo sujeito a penalidades.

## Base Legal
- Lei Federal nº 6.437/1977 (infrações à legislação sanitária federal)
- Código de Saúde de Goiás (Lei Estadual nº 14.713/2004)

## Conceito de Infração Sanitária

> "Considera-se infração sanitária a desobediência ou a inobservância ao disposto nas normas legais e regulamentares que versem sobre saúde pública." (Art. 10, Lei 6.437/77)

## Penalidades Sanitárias (Art. 2º, Lei 6.437/77)

| Penalidade | Descrição |
|------------|-----------|
| **Advertência** | Menor gravidade, quando não há má-fé |
| **Multa** | Valor pecuniário conforme gravidade |
| **Apreensão** | Retenção do produto irregular |
| **Inutilização** | Destruição de produto impróprio |
| **Suspensão de venda** | Temporária, até regularização |
| **Suspensão de fabricação** | Temporária ou definitiva |
| **Cancelamento de registro** | Perda da autorização |
| **Interdição (parcial/total)** | Impede funcionamento |
| **Cancelamento de licença** | Perda do alvará |
| **Cancelamento de autorização** | Perda de AFE/AE |
| **Proibição de propaganda** | Veda publicidade do produto |

## Circunstâncias Agravantes e Atenuantes

### Agravantes
- Reincidência
- Dolo ou má-fé
- Obtenção de vantagem pecuniária
- Infração com grave risco à saúde
- Omissão de informações
- Falsificação de documentos

### Atenuantes
- Primariedade (primeira infração)
- Baixo grau de instrução do infrator
- Colaboração com a fiscalização
- Comunicação espontânea à autoridade`,

        explicacao: `# Infração Sanitária: Análise Completa

## Fundamentação Legal

A Lei Federal nº **6.437/1977** configura as infrações à legislação sanitária federal e estabelece as sanções respectivas. É a principal norma que rege o direito sancionador sanitário no Brasil.

---

## CONCEITO E NATUREZA JURÍDICA

### Definição Legal (Art. 10, Lei 6.437/77)

> "Considera-se infração sanitária a desobediência ou a inobservância ao disposto nas normas legais e regulamentares que versem sobre saúde pública, bem como aos atos emanados das autoridades sanitárias competentes."

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Natureza** | Ilícito administrativo |
| **Independência** | Não depende de ilícito penal/civil |
| **Responsabilidade** | Objetiva e solidária |
| **Prescrição** | 5 anos (Lei 9.873/99) |

### Responsabilidade Solidária

São responsáveis pela infração sanitária:
1. **Proprietário** do estabelecimento
2. **Responsável técnico** (farmacêutico, médico, etc.)
3. **Fabricante/importador** do produto
4. **Quem concorre** para a prática da infração

---

## PENALIDADES SANITÁRIAS (Art. 2º, Lei 6.437/77)

### Classificação das Penalidades

| Tipo | Penalidades |
|------|-------------|
| **Morais** | Advertência |
| **Pecuniárias** | Multa |
| **Patrimoniais** | Apreensão, inutilização |
| **Restritivas de direitos** | Suspensão, interdição, cancelamento, proibição |

### Detalhamento das Penalidades

#### 1. Advertência
- Aplicada em infrações de **menor gravidade**
- Quando NÃO há má-fé ou reincidência
- Pode ser convertida em multa na reincidência

#### 2. Multa
- Aplicada conforme **gravidade** da infração
- Valores atualizados periodicamente
- Pode ser aplicada isolada ou cumulativamente

**Faixas de Multa (Lei 6.437/77)**:
- Leve: até R$ 2.000,00
- Grave: de R$ 2.000,01 até R$ 75.000,00
- Gravíssima: de R$ 75.000,01 até R$ 200.000,00
- Em caso de reincidência: multa em dobro

#### 3. Apreensão de Produto
- Retenção física do produto irregular
- Pode ser para **análise** ou **inutilização**
- Produto fica sob custódia da VISA

#### 4. Inutilização de Produto
- Destruição de produtos **impróprios**
- Quando não há possibilidade de regularização
- Realizada com termo próprio e testemunhas

#### 5. Suspensão de Venda e/ou Fabricação
- **Temporária**: até correção das irregularidades
- **Definitiva**: quando não há possibilidade de regularização
- Pode atingir produto, lote ou toda a produção

#### 6. Cancelamento de Registro
- Perda do registro na ANVISA
- Impede fabricação e comercialização do produto
- Medida das mais graves

#### 7. Interdição (Total ou Parcial)
| Tipo | Aplicação |
|------|-----------|
| **Total** | Todo o estabelecimento |
| **Parcial** | Setor, equipamento ou atividade específica |
| **Temporária** | Até correção das irregularidades |
| **Definitiva** | Quando não há possibilidade de regularização |

#### 8. Cancelamento de Licença (Alvará)
- Perda da autorização de funcionamento
- Estabelecimento não pode mais operar
- Pode ser temporária ou definitiva

#### 9. Cancelamento de AFE/AE
- Perda da Autorização de Funcionamento de Empresa (AFE)
- Perda da Autorização Especial (AE)
- Impede operação no âmbito federal

#### 10. Proibição de Propaganda
- Vedação de publicidade do produto
- Por tempo determinado ou indeterminado
- Comum em casos de propaganda enganosa

---

## CIRCUNSTÂNCIAS AGRAVANTES (Art. 8º)

| Agravante | Efeito |
|-----------|--------|
| **Reincidência** | Multa em DOBRO |
| **Dolo ou má-fé** | Aumenta gravidade |
| **Vantagem pecuniária** | Aumenta gravidade |
| **Grave risco à saúde** | Aumenta gravidade |
| **Falsificação de documentos** | Máxima gravidade |
| **Omissão de informações** | Aumenta gravidade |
| **Continuidade da infração** | Agrava pena |

### Conceito de Reincidência
Nova infração da **mesma natureza** no prazo de **5 anos** após o trânsito em julgado da decisão anterior.

---

## CIRCUNSTÂNCIAS ATENUANTES (Art. 9º)

| Atenuante | Efeito |
|-----------|--------|
| **Primariedade** | Reduz gravidade |
| **Boa-fé comprovada** | Reduz gravidade |
| **Baixo grau de instrução** | Reduz gravidade |
| **Colaboração com a fiscalização** | Reduz gravidade |
| **Comunicação espontânea** | Reduz gravidade |
| **Reparação do dano** | Reduz gravidade |

---

## TIPIFICAÇÃO DAS INFRAÇÕES

### Infrações Relativas a Produtos (Art. 10)

| Inciso | Conduta | Penalidade |
|--------|---------|------------|
| I | Fabricar/importar produto sem registro | Apreensão + multa grave |
| II | Alterar composição sem autorização | Apreensão + multa |
| III | Rotulagem em desacordo | Multa + apreensão |
| IV | Propaganda irregular | Proibição + multa |
| V | Comercializar produto vencido | Apreensão + multa |

### Infrações Relativas a Estabelecimentos

| Inciso | Conduta | Penalidade |
|--------|---------|------------|
| XV | Funcionar sem licença | Interdição + multa |
| XVI | Não possuir responsável técnico | Multa + interdição |
| XVII | Condições higiênico-sanitárias inadequadas | Interdição + multa |
| XVIII | Não cumprir auto de infração | Multa em dobro |

### Infrações Graves

| Conduta | Penalidade |
|---------|------------|
| Falsificar produtos | Cancelamento + multa máxima + comunicação ao MP |
| Expor a venda produto com alteração | Apreensão + inutilização + multa |
| Importar produto proibido | Apreensão + multa gravíssima |

---

## PROCESSO ADMINISTRATIVO SANITÁRIO

### Fases do Processo

| Fase | Descrição | Prazo |
|------|-----------|-------|
| 1. **Autuação** | Lavratura do auto de infração | - |
| 2. **Defesa** | Manifestação do autuado | 15-30 dias |
| 3. **Instrução** | Produção de provas | Variável |
| 4. **Julgamento** | Decisão da autoridade | Após instrução |
| 5. **Recurso** | Impugnação da decisão | 15-30 dias |

### Requisitos do Auto de Infração

O auto de infração deve conter:
- Identificação do infrator
- Local, data e hora da infração
- Descrição da infração (tipificação legal)
- Dispositivo legal infringido
- Assinatura do autuante e autuado
- Ciência ao autuado

### Nulidade do Auto
O auto será **nulo** se:
- Não identificar o infrator
- Não descrever a conduta infracional
- Não indicar o dispositivo legal violado
- Não permitir a defesa do autuado

---

## PRESCRIÇÃO

### Prazos Prescricionais (Lei 9.873/99)

| Situação | Prazo |
|----------|-------|
| **Para instaurar processo** | 5 anos da data da infração |
| **Intercorrente** | 3 anos de paralisação do processo |
| **Para executar a sanção** | 5 anos do trânsito em julgado |

### Causas Interruptivas
- Citação do infrator
- Qualquer ato de instrução
- Decisão condenatória recorrível`,

        pontosChave: [
          "Infração sanitária: desobediência às normas de saúde pública (Art. 10, Lei 6.437/77)",
          "Base legal: Lei 6.437/77 (federal) e Código de Saúde de Goiás (Lei 14.713/2004)",
          "Responsabilidade é SOLIDÁRIA (proprietário, RT, fabricante, quem concorre)",
          "Penalidades: advertência, multa, apreensão, inutilização, suspensão, interdição, cancelamento, proibição de propaganda",
          "Reincidência: multa em DOBRO (nova infração da mesma natureza em 5 anos)",
          "Prescrição: 5 anos para instaurar processo, 3 anos intercorrente",
          "Auto de infração é nulo se não identificar infrator ou não descrever a conduta",
          "Agravantes: reincidência, dolo, vantagem pecuniária, grave risco",
          "Atenuantes: primariedade, boa-fé, colaboração, comunicação espontânea",
          "Interdição pode ser total ou parcial, temporária ou definitiva"
        ],

        armadilhas: [
          {
            titulo: "Natureza Administrativa",
            descricao: "Infração sanitária é ADMINISTRATIVA, independe de ilícito penal/civil",
            dica: "É possível haver infração sanitária sem crime e vice-versa - são esferas independentes"
          },
          {
            titulo: "Advertência Limitada",
            descricao: "Advertência só cabe em infrações de MENOR GRAVIDADE e SEM má-fé",
            dica: "Infrações graves ou com má-fé não podem receber advertência"
          },
          {
            titulo: "Reincidência Específica",
            descricao: "Reincidência é nova infração da MESMA NATUREZA em 5 anos (não qualquer infração)",
            dica: "Infrações de naturezas diferentes não configuram reincidência"
          },
          {
            titulo: "Suspensão de Venda",
            descricao: "Suspensão de venda pode ser TEMPORÁRIA (até regularização) ou DEFINITIVA",
            dica: "Não confundir com interdição - suspensão é para produtos, interdição para estabelecimentos"
          },
          {
            titulo: "Cancelamento Amplo",
            descricao: "Cancelamento de registro impede FABRICAÇÃO E COMERCIALIZAÇÃO (não só venda)",
            dica: "O cancelamento atinge toda a cadeia produtiva, desde a fabricação"
          },
          {
            titulo: "Responsabilidade Solidária",
            descricao: "Responsabilidade é SOLIDÁRIA - proprietário E responsável técnico respondem",
            dica: "Ambos respondem pelos mesmos fatos, podendo ser autuados conjuntamente"
          },
          {
            titulo: "Prescrição Intercorrente",
            descricao: "Prescrição intercorrente é de 3 ANOS (não 5 anos como a prescricional ordinária)",
            dica: "5-3-5: 5 anos para instaurar, 3 intercorrente, 5 para executar"
          },
          {
            titulo: "Auto de Infração",
            descricao: "Auto de infração precisa ser ASSINADO pelo autuado OU constar recusa",
            dica: "A recusa não invalida o auto, mas deve ser registrada"
          },
          {
            titulo: "Inutilização",
            descricao: "Inutilização é para produtos IMPRÓPRIOS, não apenas irregulares",
            dica: "Produto irregular pode ser regularizado; impróprio deve ser inutilizado"
          }
        ],

        mnemonicos: [
          {
            termo: "AMIIS-CPP",
            significado: "Penalidades Sanitárias",
            frase: "Advertência / Multa / Inutilização / Interdição / Suspensão / Cancelamento / Proibição de Propaganda"
          },
          {
            termo: "DROGA",
            significado: "Circunstâncias Agravantes",
            frase: "Dolo / Reincidência / Omissão / Grave risco / Alteração/falsificação"
          },
          {
            termo: "POBRE",
            significado: "Circunstâncias Atenuantes",
            frase: "Primariedade / Orientação baixa (instrução) / Boa-fé / Reparação / Espontânea comunicação"
          },
          {
            termo: "5-3-5",
            significado: "Prazos de Prescrição",
            frase: "5 anos para instaurar / 3 anos intercorrente / 5 anos para executar"
          },
          {
            termo: "ADJIR",
            significado: "Fases do Processo Administrativo",
            frase: "Autuação / Defesa / Julgamento (Instrução) / Recurso"
          },
          {
            termo: "PROF",
            significado: "Responsáveis Solidários",
            frase: "Proprietário / Responsável técnico / Outros que concorrem / Fabricante"
          },
        ],

        flashcards: [
          {
            frente: "O que é infração sanitária segundo a Lei 6.437/77?",
            verso: "É a desobediência ou inobservância às normas legais e regulamentares que versem sobre saúde pública, bem como aos atos emanados das autoridades sanitárias competentes.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são as penalidades sanitárias previstas na Lei 6.437/77?",
            verso: "Advertência, multa, apreensão, inutilização, suspensão de venda/fabricação, cancelamento de registro/licença/autorização, interdição (total ou parcial) e proibição de propaganda.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual o efeito da reincidência nas penalidades sanitárias?",
            verso: "A multa é aplicada em DOBRO. Reincidência é a nova infração da MESMA NATUREZA no prazo de 5 anos após o trânsito em julgado da decisão anterior.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quem são os responsáveis solidários pela infração sanitária?",
            verso: "Proprietário do estabelecimento, responsável técnico (farmacêutico, médico, etc.), fabricante/importador do produto e quem concorre para a prática da infração.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual o prazo de prescrição para instaurar processo administrativo sanitário?",
            verso: "5 ANOS da data da infração. A prescrição intercorrente é de 3 anos de paralisação do processo.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quando se aplica a pena de advertência?",
            verso: "Em infrações de MENOR GRAVIDADE, quando NÃO há má-fé nem reincidência. Pode ser convertida em multa em caso de reincidência.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são as circunstâncias agravantes da infração sanitária?",
            verso: "Reincidência, dolo ou má-fé, obtenção de vantagem pecuniária, grave risco à saúde, falsificação de documentos, omissão de informações, continuidade da infração.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são as circunstâncias atenuantes da infração sanitária?",
            verso: "Primariedade, boa-fé comprovada, baixo grau de instrução, colaboração com a fiscalização, comunicação espontânea à autoridade, reparação do dano.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'ce-q-9-1',
            enunciado: 'Nos termos da Lei nº 6.437/1977, considera-se infração sanitária:',
            alternativas: [
              { letra: 'A', texto: 'apenas as condutas dolosas contra a saúde pública.' },
              { letra: 'B', texto: 'somente as infrações que causem dano efetivo à saúde.' },
              { letra: 'C', texto: 'a desobediência ou inobservância às normas que versem sobre saúde pública.' },
              { letra: 'D', texto: 'exclusivamente as condutas tipificadas no Código Penal.' },
              { letra: 'E', texto: 'apenas as infrações cometidas por empresas.' },
            ],
            gabarito: 'C',
            justificativa: 'Art. 10 da Lei 6.437/77: "Considera-se infração sanitária a desobediência ou a inobservância ao disposto nas normas legais e regulamentares que versem sobre saúde pública."',
            dificuldade: 'Fácil',
            competencia: 'Conceito de infração',
            banca: 'IADES',
            tags: ['infração sanitária', 'conceito'],
          },
          {
            id: 'ce-q-9-2',
            enunciado: 'São penalidades sanitárias previstas na Lei nº 6.437/1977, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'advertência.' },
              { letra: 'B', texto: 'multa.' },
              { letra: 'C', texto: 'prisão.' },
              { letra: 'D', texto: 'interdição.' },
              { letra: 'E', texto: 'cancelamento de registro.' },
            ],
            gabarito: 'C',
            justificativa: 'PRISÃO é sanção PENAL, não administrativa. As penalidades sanitárias são: advertência, multa, apreensão, inutilização, suspensão, interdição, cancelamento e proibição de propaganda.',
            dificuldade: 'Fácil',
            competencia: 'Penalidades sanitárias',
            banca: 'IADES',
            tags: ['penalidades', 'exceção'],
          },
          {
            id: 'ce-q-9-3',
            enunciado: 'Em caso de reincidência em infração sanitária, a multa será aplicada:',
            alternativas: [
              { letra: 'A', texto: 'no mesmo valor da primeira.' },
              { letra: 'B', texto: 'em dobro.' },
              { letra: 'C', texto: 'em triplo.' },
              { letra: 'D', texto: 'reduzida pela metade.' },
              { letra: 'E', texto: 'convertida em advertência.' },
            ],
            gabarito: 'B',
            justificativa: 'Em caso de REINCIDÊNCIA, a multa é aplicada em DOBRO. Considera-se reincidência nova infração da mesma natureza em 5 anos.',
            dificuldade: 'Fácil',
            competencia: 'Reincidência',
            banca: 'IADES',
            tags: ['reincidência', 'multa'],
          },
          {
            id: 'ce-q-9-4',
            enunciado: 'A responsabilidade pela infração sanitária é:',
            alternativas: [
              { letra: 'A', texto: 'exclusiva do proprietário.' },
              { letra: 'B', texto: 'exclusiva do responsável técnico.' },
              { letra: 'C', texto: 'solidária entre proprietário, RT e quem concorre para a infração.' },
              { letra: 'D', texto: 'apenas do fabricante.' },
              { letra: 'E', texto: 'subjetiva e individual.' },
            ],
            gabarito: 'C',
            justificativa: 'A responsabilidade é SOLIDÁRIA entre proprietário, responsável técnico, fabricante e quem concorre para a prática da infração.',
            dificuldade: 'Média',
            competencia: 'Responsabilidade',
            banca: 'IADES',
            tags: ['responsabilidade', 'solidária'],
          },
          {
            id: 'ce-q-9-5',
            enunciado: 'O prazo prescricional para a Administração instaurar processo administrativo sanitário é de:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '2 anos.' },
              { letra: 'C', texto: '3 anos.' },
              { letra: 'D', texto: '5 anos.' },
              { letra: 'E', texto: '10 anos.' },
            ],
            gabarito: 'D',
            justificativa: 'O prazo prescricional é de 5 ANOS da data da infração (Lei 9.873/99). A prescrição intercorrente é de 3 anos.',
            dificuldade: 'Média',
            competencia: 'Prescrição',
            banca: 'IADES',
            tags: ['prescrição', 'prazo'],
          },
          {
            id: 'ce-q-9-6',
            enunciado: 'A pena de advertência é aplicada quando:',
            alternativas: [
              { letra: 'A', texto: 'há reincidência.' },
              { letra: 'B', texto: 'a infração é de gravidade máxima.' },
              { letra: 'C', texto: 'a infração é de menor gravidade e não há má-fé.' },
              { letra: 'D', texto: 'há dolo ou fraude.' },
              { letra: 'E', texto: 'em todas as infrações como primeira penalidade.' },
            ],
            gabarito: 'C',
            justificativa: 'A advertência é aplicada em infrações de MENOR GRAVIDADE, quando NÃO há má-fé nem reincidência.',
            dificuldade: 'Fácil',
            competencia: 'Advertência',
            banca: 'IADES',
            tags: ['advertência', 'aplicação'],
          },
          {
            id: 'ce-q-9-7',
            enunciado: 'São circunstâncias AGRAVANTES da infração sanitária:',
            alternativas: [
              { letra: 'A', texto: 'primariedade e boa-fé.' },
              { letra: 'B', texto: 'colaboração com a fiscalização.' },
              { letra: 'C', texto: 'reincidência, dolo e grave risco à saúde.' },
              { letra: 'D', texto: 'baixo grau de instrução.' },
              { letra: 'E', texto: 'comunicação espontânea.' },
            ],
            gabarito: 'C',
            justificativa: 'São AGRAVANTES: reincidência, dolo ou má-fé, vantagem pecuniária, grave risco à saúde, falsificação, omissão de informações.',
            dificuldade: 'Média',
            competencia: 'Agravantes',
            banca: 'IADES',
            tags: ['agravantes', 'circunstâncias'],
          },
          {
            id: 'ce-q-9-8',
            enunciado: 'A inutilização de produtos é aplicada quando:',
            alternativas: [
              { letra: 'A', texto: 'o produto pode ser regularizado.' },
              { letra: 'B', texto: 'o produto está impróprio e não há possibilidade de regularização.' },
              { letra: 'C', texto: 'o fabricante solicita.' },
              { letra: 'D', texto: 'há excesso de estoque.' },
              { letra: 'E', texto: 'o prazo de validade está próximo.' },
            ],
            gabarito: 'B',
            justificativa: 'A inutilização é aplicada quando o produto está IMPRÓPRIO para consumo e NÃO HÁ POSSIBILIDADE de regularização.',
            dificuldade: 'Média',
            competencia: 'Inutilização',
            banca: 'IADES',
            tags: ['inutilização', 'aplicação'],
          },
          {
            id: 'ce-q-9-9',
            enunciado: 'A prescrição intercorrente no processo administrativo sanitário ocorre quando:',
            alternativas: [
              { letra: 'A', texto: 'o processo fica paralisado por 3 anos.' },
              { letra: 'B', texto: 'o processo fica paralisado por 5 anos.' },
              { letra: 'C', texto: 'há recurso pendente.' },
              { letra: 'D', texto: 'o autuado não é encontrado.' },
              { letra: 'E', texto: 'a defesa é apresentada.' },
            ],
            gabarito: 'A',
            justificativa: 'A prescrição INTERCORRENTE ocorre quando o processo fica paralisado por 3 ANOS sem qualquer ato de instrução.',
            dificuldade: 'Média',
            competencia: 'Prescrição intercorrente',
            banca: 'IADES',
            tags: ['prescrição', 'intercorrente'],
          },
          {
            id: 'ce-q-9-10',
            enunciado: 'A interdição de estabelecimento pela Vigilância Sanitária:',
            alternativas: [
              { letra: 'A', texto: 'é sempre total e definitiva.' },
              { letra: 'B', texto: 'pode ser total ou parcial, temporária ou definitiva.' },
              { letra: 'C', texto: 'depende de autorização judicial.' },
              { letra: 'D', texto: 'só pode ser aplicada pelo Ministério da Saúde.' },
              { letra: 'E', texto: 'não se aplica a estabelecimentos de saúde.' },
            ],
            gabarito: 'B',
            justificativa: 'A interdição pode ser TOTAL ou PARCIAL (setor, equipamento), TEMPORÁRIA (até regularização) ou DEFINITIVA (impossibilidade de regularização).',
            dificuldade: 'Média',
            competencia: 'Interdição',
            banca: 'IADES',
            tags: ['interdição', 'modalidades'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-10',
      numero: 10,
      titulo: 'Poder de Polícia Sanitária',
      conteudo: {
        resumo: `# Poder de Polícia Sanitária

O **poder de polícia** é a faculdade de que dispõe a Administração Pública para condicionar e restringir o uso de bens, atividades e direitos individuais em benefício da coletividade.

## Conceito Legal (Art. 78, CTN)

> "Considera-se poder de polícia a atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público."

## Poder de Polícia Sanitária

É a parcela do poder de polícia exercida pelas autoridades de saúde para proteção da saúde pública, controlando atividades, produtos e serviços que possam afetar a saúde da população.

## Atributos do Poder de Polícia

| Atributo | Conceito | Aplicação na VISA |
|----------|----------|-------------------|
| **Discricionariedade** | Margem de escolha quanto ao modo e extensão | Escolher a medida mais adequada ao caso |
| **Autoexecutoriedade** | Execução direta sem ordem judicial | Interditar estabelecimento imediatamente |
| **Coercibilidade** | Imposição coativa das medidas | Obrigar cumprimento das normas sanitárias |

## Ciclo de Polícia

| Fase | Ação | Exemplo |
|------|------|---------|
| **Ordem** | Normas restritivas | Resolução da ANVISA |
| **Consentimento** | Anuência (alvará, licença) | Licença sanitária |
| **Fiscalização** | Verificação do cumprimento | Inspeção sanitária |
| **Sanção** | Punição pelo descumprimento | Multa, interdição |`,

        explicacao: `# Poder de Polícia Sanitária: Análise Completa

## Conceito de Poder de Polícia

### Definição Legal (Art. 78, CTN)

> "Considera-se poder de polícia a atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público concernente à segurança, à higiene, à ordem, aos costumes, à disciplina da produção e do mercado, ao exercício de atividades econômicas dependentes de concessão ou autorização do Poder Público, à tranquilidade pública ou ao respeito à propriedade e aos direitos individuais ou coletivos."

### Definição Doutrinária

É a faculdade de que dispõe a Administração Pública para **condicionar e restringir** o uso e gozo de bens, atividades e direitos individuais, em benefício da coletividade ou do próprio Estado.

---

## PODER DE POLÍCIA SANITÁRIA

### Conceito

É a parcela do poder de polícia exercida pelas **autoridades sanitárias** (ANVISA, VISAs estaduais e municipais) para:
- Proteger a saúde pública
- Controlar riscos sanitários
- Regular produtos e serviços de interesse da saúde

### Fundamento Constitucional

**Art. 196, CF**: "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à **redução do risco de doença** e de outros agravos."

**Art. 197, CF**: São de relevância pública as ações e serviços de saúde, cabendo ao Poder Público dispor sobre sua **regulamentação, fiscalização e controle**.

---

## ATRIBUTOS DO PODER DE POLÍCIA

### 1. Discricionariedade

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Margem de escolha quanto ao modo, tempo e extensão da atuação |
| **Na VISA** | Escolher a medida mais adequada e proporcional ao caso |
| **Limites** | Razoabilidade, proporcionalidade, finalidade pública |

**Exemplo**: Diante de irregularidade sanitária, o fiscal pode escolher entre advertir, multar ou interditar, conforme a gravidade.

**Atenção**: NEM TODO ato de polícia é discricionário. A **licença** é ato vinculado (preenchidos os requisitos, deve ser concedida).

### 2. Autoexecutoriedade

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Execução direta e imediata SEM necessidade de autorização judicial |
| **Na VISA** | Interditar estabelecimento, apreender produtos, inutilizar mercadorias |
| **Fundamento** | Proteção da saúde pública exige ação imediata |

**Exemplo**: O fiscal pode interditar um restaurante com condições sanitárias graves sem precisar de ordem judicial.

**Limites**:
- Proporcionalidade
- Necessidade
- Observância do contraditório (quando possível)

**Importante**: Autoexecutoriedade NÃO significa arbitrariedade. Os atos devem ser motivados e passíveis de controle judicial posterior.

### 3. Coercibilidade (Imperatividade)

| Aspecto | Descrição |
|---------|-----------|
| **Conceito** | Imposição unilateral e obrigatória das determinações |
| **Na VISA** | Obrigar o cumprimento das normas sanitárias independentemente da vontade do particular |
| **Instrumento** | Uso da força pública quando necessário |

**Exemplo**: Se o proprietário descumprir a interdição, pode ser conduzido coercitivamente ou o estabelecimento lacrado.

---

## CICLO DE POLÍCIA (FASES)

### 1. Ordem de Polícia (Legislação)

| Característica | Descrição |
|----------------|-----------|
| **O que é** | Normas que estabelecem limitações e condições |
| **Instrumento** | Leis, decretos, resoluções, portarias |
| **Na VISA** | RDCs da ANVISA, portarias do MS, leis sanitárias |

**Exemplos**:
- RDC que estabelece BPF (Boas Práticas de Fabricação)
- Portaria que define padrões de qualidade da água
- Lei que proíbe fumar em ambientes fechados

### 2. Consentimento de Polícia

| Característica | Descrição |
|----------------|-----------|
| **O que é** | Anuência da Administração para atividade/uso |
| **Instrumentos** | Licença, autorização, permissão |
| **Na VISA** | Licença sanitária, AFE, AE, registro de produtos |

**Tipos de Consentimento**:

| Tipo | Natureza | Característica |
|------|----------|----------------|
| **Licença** | Vinculada | Preenchidos os requisitos, DEVE ser concedida |
| **Autorização** | Discricionária | Administração avalia conveniência |
| **Permissão** | Discricionária e precária | Pode ser revogada a qualquer tempo |

**Exemplos na VISA**:
- Licença sanitária (alvará sanitário) - para funcionamento
- AFE (Autorização de Funcionamento de Empresa) - ANVISA
- AE (Autorização Especial) - medicamentos controlados
- Registro de produto - para comercialização

### 3. Fiscalização de Polícia

| Característica | Descrição |
|----------------|-----------|
| **O que é** | Verificação do cumprimento das normas e condições |
| **Modalidades** | Inspeção, auditoria, monitoramento |
| **Na VISA** | Inspeções sanitárias em estabelecimentos e produtos |

**Tipos de Fiscalização**:

| Tipo | Momento | Objetivo |
|------|---------|----------|
| **Prévia** | Antes do funcionamento | Verificar condições para licenciamento |
| **Rotineira** | Durante a atividade | Monitorar conformidade |
| **Por denúncia** | A qualquer tempo | Apurar irregularidades denunciadas |
| **Por evento** | Após incidentes | Investigar causas e responsabilidades |

**Poderes do Fiscal**:
- Acesso a estabelecimentos
- Coleta de amostras
- Requisição de documentos
- Lavratura de autos de infração
- Adoção de medidas cautelares

### 4. Sanção de Polícia

| Característica | Descrição |
|----------------|-----------|
| **O que é** | Aplicação de penalidades pelo descumprimento |
| **Requisito** | Processo administrativo com contraditório |
| **Na VISA** | Advertência, multa, interdição, cancelamento |

---

## LIMITES DO PODER DE POLÍCIA

### Princípios Limitadores

| Princípio | Aplicação |
|-----------|-----------|
| **Legalidade** | Só pode atuar nos limites da lei |
| **Proporcionalidade** | Medida adequada à gravidade |
| **Razoabilidade** | Coerência entre meios e fins |
| **Finalidade** | Sempre o interesse público |
| **Motivação** | Justificar os atos praticados |

### Controle dos Atos de Polícia

| Tipo | Órgão | Alcance |
|------|-------|---------|
| **Interno** | Própria Administração | Mérito e legalidade |
| **Externo Legislativo** | TCU/TCE | Legalidade e economicidade |
| **Externo Judicial** | Judiciário | Legalidade (não mérito) |
| **Social** | Cidadãos | Denúncias, ação popular |

---

## DELEGAÇÃO DO PODER DE POLÍCIA

### Regra Geral (STF - ADI 1.717)

O poder de polícia **NÃO pode ser delegado** a particulares, pois envolve:
- Exercício de poder de império
- Restrição de direitos
- Coerção estatal

### Exceção: Atos Materiais

Podem ser delegados atos MATERIAIS de apoio:
- Operação de equipamentos (radares)
- Execução de análises laboratoriais
- Atividades de suporte logístico

**Exemplo na VISA**: O laboratório pode ser terceirizado, mas a DECISÃO sobre conformidade é da autoridade sanitária.

### Delegação para Autarquias

O poder de polícia pode ser exercido por **autarquias** (como a ANVISA), pois:
- São pessoas jurídicas de direito público
- Integram a Administração Pública
- Não é delegação, mas descentralização administrativa

---

## DIFERENÇA: POLÍCIA ADMINISTRATIVA x JUDICIÁRIA

| Aspecto | Polícia Administrativa | Polícia Judiciária |
|---------|------------------------|-------------------|
| **Incidência** | Bens, direitos, atividades | Pessoas (criminosos) |
| **Finalidade** | Prevenir ilícitos administrativos | Reprimir ilícitos penais |
| **Atuação** | Preventiva (regra) | Repressiva |
| **Órgãos** | VISA, IBAMA, Detran | Polícia Civil, Federal |
| **Exemplo** | Interdição de restaurante | Prisão por crime sanitário |`,

        pontosChave: [
          "Poder de polícia: faculdade de condicionar e restringir direitos em prol da coletividade",
          "Art. 78, CTN: definição legal de poder de polícia",
          "Atributos: DISCRICIONARIEDADE, AUTOEXECUTORIEDADE e COERCIBILIDADE (DAC)",
          "Autoexecutoriedade: VISA age sem necessidade de autorização judicial",
          "Ciclo de polícia: Ordem → Consentimento → Fiscalização → Sanção",
          "Licença é ato VINCULADO; autorização é DISCRICIONÁRIA",
          "Poder de polícia NÃO pode ser delegado a particulares (STF)",
          "Pode ser exercido por autarquias (ANVISA) - descentralização, não delegação",
          "Limites: legalidade, proporcionalidade, razoabilidade, finalidade",
          "Diferença: polícia administrativa (bens/atividades) x judiciária (pessoas)"
        ],

        armadilhas: [
          {
            titulo: "Licença é Vinculada",
            descricao: "Nem todo ato de polícia é discricionário - LICENÇA é VINCULADA",
            dica: "Licença = preencheu requisitos legais, DEVE ser concedida (sem margem de escolha)"
          },
          {
            titulo: "Autoexecutoriedade ≠ Arbitrariedade",
            descricao: "Autoexecutoriedade NÃO é arbitrariedade - atos devem ser motivados",
            dica: "Agir sem ordem judicial não significa agir sem limites legais"
          },
          {
            titulo: "Autarquias e Poder de Polícia",
            descricao: "Poder de polícia pode ser exercido por AUTARQUIAS (não é delegação)",
            dica: "Descentralização para autarquias (ANVISA) é diferente de delegação para particulares"
          },
          {
            titulo: "Particulares Excluídos",
            descricao: "Particular NÃO pode exercer poder de polícia, apenas atos materiais de apoio",
            dica: "Atos materiais de apoio: operar equipamentos, fazer análises - não decisórios"
          },
          {
            titulo: "Coercibilidade Proporcional",
            descricao: "Coercibilidade NÃO significa uso ilimitado de força - respeitar proporcionalidade",
            dica: "A força deve ser adequada e necessária - excesso gera responsabilidade"
          },
          {
            titulo: "Controle Judicial Limitado",
            descricao: "Judiciário controla LEGALIDADE, não o MÉRITO dos atos de polícia",
            dica: "Judiciário não pode substituir a decisão administrativa, só anular se ilegal"
          },
          {
            titulo: "Formas de Consentimento",
            descricao: "Consentimento pode ser por LICENÇA (vinculada) ou AUTORIZAÇÃO (discricionária)",
            dica: "Macete: LVinculada, ADiscricionária"
          },
          {
            titulo: "Tipos de Fiscalização",
            descricao: "A fiscalização pode ser prévia, rotineira ou por denúncia",
            dica: "Fiscalização não é apenas reativa - pode ser preventiva e programada"
          },
          {
            titulo: "Sanção com Processo",
            descricao: "Sanção exige PROCESSO ADMINISTRATIVO com contraditório",
            dica: "Mesmo com autoexecutoriedade, sanção definitiva requer devido processo legal"
          }
        ],

        mnemonicos: [
          {
            termo: "DAC",
            significado: "Atributos do Poder de Polícia",
            frase: "Discricionariedade / Autoexecutoriedade / Coercibilidade"
          },
          {
            termo: "OCFS",
            significado: "Ciclo de Polícia",
            frase: "Ordem / Consentimento / Fiscalização / Sanção"
          },
          {
            termo: "SEM JUIZ",
            significado: "Autoexecutoriedade",
            frase: "A VISA age SEM precisar de autorização JUDICIAL prévia"
          },
          {
            termo: "VIDA",
            significado: "Licença x Autorização",
            frase: "VInculada = Licença / Discricionária = Autorização"
          },
          {
            termo: "NUNCA PARTICULAR",
            significado: "Delegação do Poder de Polícia",
            frase: "Particular NÃO exerce poder de polícia - só atos materiais de apoio"
          },
          {
            termo: "PLPRF + M",
            significado: "Limites do Poder de Polícia",
            frase: "Proporcionalidade / Legalidade / Proporcionalidade / Razoabilidade / Finalidade + Motivação"
          },
        ],

        flashcards: [
          {
            frente: "Quais são os atributos do poder de polícia?",
            verso: "DISCRICIONARIEDADE (margem de escolha), AUTOEXECUTORIEDADE (execução sem ordem judicial) e COERCIBILIDADE (imposição obrigatória). Macete: DAC.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que significa autoexecutoriedade no poder de polícia sanitária?",
            verso: "Significa que a VISA pode executar seus atos DIRETAMENTE, SEM necessidade de autorização judicial prévia. Ex: interditar estabelecimento imediatamente diante de risco sanitário.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são as fases do ciclo de polícia?",
            verso: "1) ORDEM (normas restritivas) 2) CONSENTIMENTO (licença, autorização) 3) FISCALIZAÇÃO (verificação do cumprimento) 4) SANÇÃO (penalidade pelo descumprimento). Macete: OCFS.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença entre licença e autorização?",
            verso: "LICENÇA é ato VINCULADO (preenchidos os requisitos, DEVE ser concedida). AUTORIZAÇÃO é ato DISCRICIONÁRIO (Administração avalia conveniência). Macete: LVinculada, ADiscricionária.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O poder de polícia pode ser delegado a particulares?",
            verso: "NÃO. O poder de polícia NÃO pode ser delegado a particulares (STF). Podem ser delegados apenas atos MATERIAIS de apoio (operação de equipamentos, análises laboratoriais).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença entre polícia administrativa e polícia judiciária?",
            verso: "ADMINISTRATIVA: incide sobre bens, direitos e atividades; preventiva; órgãos como VISA, IBAMA. JUDICIÁRIA: incide sobre pessoas; repressiva; Polícia Civil e Federal.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual o fundamento constitucional do poder de polícia sanitária?",
            verso: "Art. 196 e 197, CF. A saúde é direito de todos e dever do Estado, cabendo ao Poder Público regulamentar, FISCALIZAR e CONTROLAR as ações e serviços de saúde.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais são os limites do poder de polícia?",
            verso: "Legalidade (atuar nos limites da lei), Proporcionalidade (medida adequada), Razoabilidade (coerência meios-fins), Finalidade (interesse público), Motivação (justificar atos).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'ce-q-10-1',
            enunciado: 'São atributos do poder de polícia, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'discricionariedade.' },
              { letra: 'B', texto: 'autoexecutoriedade.' },
              { letra: 'C', texto: 'coercibilidade.' },
              { letra: 'D', texto: 'contratualidade.' },
              { letra: 'E', texto: 'imperatividade.' },
            ],
            gabarito: 'D',
            justificativa: 'Os atributos são: DISCRICIONARIEDADE, AUTOEXECUTORIEDADE e COERCIBILIDADE. Contratualidade não é atributo do poder de polícia, que é unilateral.',
            dificuldade: 'Fácil',
            competencia: 'Atributos do poder de polícia',
            banca: 'IADES',
            tags: ['poder de polícia', 'atributos'],
          },
          {
            id: 'ce-q-10-2',
            enunciado: 'O atributo do poder de polícia que permite à VISA interditar um estabelecimento sem necessidade de autorização judicial é a:',
            alternativas: [
              { letra: 'A', texto: 'discricionariedade.' },
              { letra: 'B', texto: 'autoexecutoriedade.' },
              { letra: 'C', texto: 'vinculação.' },
              { letra: 'D', texto: 'tipicidade.' },
              { letra: 'E', texto: 'publicidade.' },
            ],
            gabarito: 'B',
            justificativa: 'A AUTOEXECUTORIEDADE permite que a Administração execute seus atos diretamente, SEM necessidade de autorização judicial prévia.',
            dificuldade: 'Fácil',
            competencia: 'Autoexecutoriedade',
            banca: 'IADES',
            tags: ['autoexecutoriedade', 'interdição'],
          },
          {
            id: 'ce-q-10-3',
            enunciado: 'As fases do ciclo de polícia são, respectivamente:',
            alternativas: [
              { letra: 'A', texto: 'sanção, ordem, fiscalização e consentimento.' },
              { letra: 'B', texto: 'ordem, consentimento, fiscalização e sanção.' },
              { letra: 'C', texto: 'fiscalização, sanção, ordem e consentimento.' },
              { letra: 'D', texto: 'consentimento, ordem, sanção e fiscalização.' },
              { letra: 'E', texto: 'ordem, sanção, consentimento e fiscalização.' },
            ],
            gabarito: 'B',
            justificativa: 'O ciclo de polícia segue a ordem: ORDEM (normas) → CONSENTIMENTO (licença) → FISCALIZAÇÃO → SANÇÃO. Macete: OCFS.',
            dificuldade: 'Média',
            competencia: 'Ciclo de polícia',
            banca: 'IADES',
            tags: ['ciclo de polícia', 'fases'],
          },
          {
            id: 'ce-q-10-4',
            enunciado: 'A licença sanitária é ato administrativo:',
            alternativas: [
              { letra: 'A', texto: 'discricionário.' },
              { letra: 'B', texto: 'vinculado.' },
              { letra: 'C', texto: 'precário.' },
              { letra: 'D', texto: 'revogável a qualquer tempo.' },
              { letra: 'E', texto: 'dispensável.' },
            ],
            gabarito: 'B',
            justificativa: 'A LICENÇA é ato VINCULADO. Preenchidos os requisitos legais, a Administração DEVE concedê-la. Diferente da autorização, que é discricionária.',
            dificuldade: 'Média',
            competencia: 'Licença',
            banca: 'IADES',
            tags: ['licença', 'vinculado'],
          },
          {
            id: 'ce-q-10-5',
            enunciado: 'Quanto à delegação do poder de polícia a particulares, é correto afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'é plenamente admitida.' },
              { letra: 'B', texto: 'só é permitida para empresas estatais.' },
              { letra: 'C', texto: 'não é admitida, podendo ser delegados apenas atos materiais de apoio.' },
              { letra: 'D', texto: 'depende de autorização legislativa específica.' },
              { letra: 'E', texto: 'é permitida mediante contrato de concessão.' },
            ],
            gabarito: 'C',
            justificativa: 'O poder de polícia NÃO pode ser delegado a particulares (STF). Podem ser delegados apenas atos MATERIAIS de apoio, como operação de equipamentos.',
            dificuldade: 'Média',
            competencia: 'Delegação',
            banca: 'IADES',
            tags: ['delegação', 'particulares'],
          },
          {
            id: 'ce-q-10-6',
            enunciado: 'A discricionariedade no poder de polícia significa que:',
            alternativas: [
              { letra: 'A', texto: 'a Administração pode agir arbitrariamente.' },
              { letra: 'B', texto: 'a Administração tem margem de escolha quanto ao modo e extensão da atuação.' },
              { letra: 'C', texto: 'não há limites para a atuação administrativa.' },
              { letra: 'D', texto: 'a lei não se aplica ao poder de polícia.' },
              { letra: 'E', texto: 'o particular pode escolher se cumpre ou não a determinação.' },
            ],
            gabarito: 'B',
            justificativa: 'Discricionariedade significa MARGEM DE ESCOLHA quanto ao modo, tempo e extensão da atuação, dentro dos limites legais e da proporcionalidade.',
            dificuldade: 'Média',
            competencia: 'Discricionariedade',
            banca: 'IADES',
            tags: ['discricionariedade', 'conceito'],
          },
          {
            id: 'ce-q-10-7',
            enunciado: 'A diferença entre polícia administrativa e polícia judiciária é que:',
            alternativas: [
              { letra: 'A', texto: 'a administrativa é repressiva e a judiciária é preventiva.' },
              { letra: 'B', texto: 'a administrativa incide sobre bens e atividades, a judiciária sobre pessoas.' },
              { letra: 'C', texto: 'ambas são exercidas apenas pela Polícia Federal.' },
              { letra: 'D', texto: 'não há diferença entre elas.' },
              { letra: 'E', texto: 'a judiciária não pode usar coerção.' },
            ],
            gabarito: 'B',
            justificativa: 'Polícia ADMINISTRATIVA incide sobre BENS, direitos e atividades (VISA, IBAMA). Polícia JUDICIÁRIA incide sobre PESSOAS, para apurar ilícitos penais (Polícia Civil/Federal).',
            dificuldade: 'Média',
            competencia: 'Polícia administrativa x judiciária',
            banca: 'IADES',
            tags: ['polícia', 'administrativa', 'judiciária'],
          },
          {
            id: 'ce-q-10-8',
            enunciado: 'A autarquia ANVISA pode exercer poder de polícia sanitária porque:',
            alternativas: [
              { letra: 'A', texto: 'recebeu delegação de particulares.' },
              { letra: 'B', texto: 'é pessoa jurídica de direito público, integrante da Administração Pública.' },
              { letra: 'C', texto: 'é empresa estatal.' },
              { letra: 'D', texto: 'atua apenas consultivamente.' },
              { letra: 'E', texto: 'não exerce poder de polícia, apenas fiscalização.' },
            ],
            gabarito: 'B',
            justificativa: 'A ANVISA é AUTARQUIA (pessoa jurídica de direito público) que integra a Administração Pública. Trata-se de DESCENTRALIZAÇÃO administrativa, não delegação.',
            dificuldade: 'Média',
            competencia: 'ANVISA e poder de polícia',
            banca: 'IADES',
            tags: ['ANVISA', 'autarquia', 'poder de polícia'],
          },
          {
            id: 'ce-q-10-9',
            enunciado: 'São limites do poder de polícia:',
            alternativas: [
              { letra: 'A', texto: 'apenas a legalidade.' },
              { letra: 'B', texto: 'legalidade, proporcionalidade, razoabilidade e finalidade.' },
              { letra: 'C', texto: 'não há limites para o poder de polícia.' },
              { letra: 'D', texto: 'apenas a vontade do administrador.' },
              { letra: 'E', texto: 'apenas o interesse do particular.' },
            ],
            gabarito: 'B',
            justificativa: 'Os limites do poder de polícia são: LEGALIDADE, PROPORCIONALIDADE, RAZOABILIDADE, FINALIDADE (interesse público) e MOTIVAÇÃO.',
            dificuldade: 'Fácil',
            competencia: 'Limites',
            banca: 'IADES',
            tags: ['limites', 'poder de polícia'],
          },
          {
            id: 'ce-q-10-10',
            enunciado: 'A coercibilidade, como atributo do poder de polícia, significa que:',
            alternativas: [
              { letra: 'A', texto: 'a Administração pode usar força ilimitada.' },
              { letra: 'B', texto: 'o particular pode recusar cumprir as determinações.' },
              { letra: 'C', texto: 'a Administração pode impor suas determinações de forma obrigatória.' },
              { letra: 'D', texto: 'os atos dependem de concordância do particular.' },
              { letra: 'E', texto: 'apenas o Judiciário pode aplicar sanções.' },
            ],
            gabarito: 'C',
            justificativa: 'COERCIBILIDADE significa que a Administração pode IMPOR suas determinações de forma obrigatória, independentemente da vontade do particular, inclusive com uso da força pública quando necessário.',
            dificuldade: 'Média',
            competencia: 'Coercibilidade',
            banca: 'IADES',
            tags: ['coercibilidade', 'atributos'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-11',
      numero: 11,
      titulo: 'Lei nº 6.360/1976 - Vigilância Sanitária de Produtos',
      conteudo: {
        resumo: `# Lei nº 6.360/1976

A **Lei nº 6.360/1976** dispõe sobre a vigilância sanitária a que ficam sujeitos os **medicamentos, drogas, insumos farmacêuticos, correlatos, cosméticos, saneantes e outros produtos**.

## Âmbito de Aplicação

| Categoria | Exemplos |
|-----------|----------|
| **Medicamentos** | Remédios, vacinas |
| **Drogas** | Substâncias para medicamentos |
| **Insumos farmacêuticos** | Matérias-primas |
| **Correlatos** | Equipamentos médicos, próteses |
| **Cosméticos** | Perfumes, maquiagens, cremes |
| **Saneantes** | Desinfetantes, detergentes |
| **Produtos de higiene** | Sabonetes, xampus |

## Principais Exigências

### Registro de Produtos (Art. 12)
- **Obrigatório** para fabricação, comercialização e importação
- Concedido pelo Ministério da Saúde (ANVISA)
- Validade: **5 anos** (renováveis)

### Autorização de Funcionamento (AFE)
- Obrigatória para empresas que:
  - Fabricam
  - Importam
  - Exportam
  - Distribuem
  - Comercializam produtos sujeitos à vigilância sanitária

### Responsável Técnico
- Obrigatório para todos os estabelecimentos
- Deve ser profissional habilitado (farmacêutico para medicamentos)
- Responsável pela qualidade dos produtos e processos

## Boas Práticas de Fabricação (BPF)
- Obrigatórias para a fabricação
- Controle de qualidade em todas as etapas
- Certificado de BPF emitido pela ANVISA`,

        explicacao: `# Lei nº 6.360/1976: Análise Completa

## Contexto e Importância

A Lei nº 6.360/1976 é a principal norma que disciplina a **vigilância sanitária de produtos**. Foi regulamentada pelo Decreto nº 8.077/2013 e suas normas são complementadas pelas Resoluções da ANVISA.

---

## ÂMBITO DE APLICAÇÃO (Art. 1º)

### Produtos Sujeitos à Lei

| Categoria | Definição | Exemplos |
|-----------|-----------|----------|
| **Medicamentos** | Produto para diagnóstico, profilaxia, tratamento | Antibióticos, analgésicos, vacinas |
| **Drogas** | Substância para preparação de medicamento | Princípios ativos |
| **Insumos farmacêuticos** | Toda substância para fabricação de medicamento | Excipientes, adjuvantes |
| **Correlatos** | Equipamentos para finalidade médica/laboratorial | Seringas, próteses, marcapassos |
| **Cosméticos** | Produtos para higiene, embelezamento | Perfumes, batons, cremes |
| **Saneantes** | Produtos para desinfecção, limpeza | Água sanitária, detergentes |
| **Produtos de higiene** | Produtos para higiene pessoal | Sabonetes, xampus, pasta de dente |

### Definições Importantes

**Medicamento** (Art. 3º, I): Produto farmacêutico com finalidade profilática, curativa, paliativa ou para fins de diagnóstico.

**Medicamento Similar** (Art. 3º, II): Contém mesmo princípio ativo, concentração, forma farmacêutica, via de administração, posologia e indicação terapêutica do medicamento de referência, diferindo em características como tamanho, prazo de validade, embalagem, rotulagem, excipientes e veículos.

**Medicamento Genérico** (Lei 9.787/99): Medicamento similar que comprova bioequivalência ao de referência.

**Correlato** (Art. 3º, III): Substância, produto, aparelho ou acessório não enquadrado como droga ou medicamento, cujo uso está ligado à saúde.

---

## REGISTRO DE PRODUTOS (Arts. 12 a 15)

### Obrigatoriedade

> "Nenhum dos produtos de que trata esta Lei, inclusive os importados, poderá ser industrializado, exposto à venda ou entregue ao consumo antes de registrado no Ministério da Saúde." (Art. 12)

### Requisitos para Registro

| Requisito | Descrição |
|-----------|-----------|
| Comprovação de segurança | Testes e ensaios |
| Comprovação de eficácia | Para medicamentos |
| Fórmula/composição | Declaração completa |
| Rotulagem e bula | Conforme normas |
| Processo de fabricação | Descrição detalhada |
| Controle de qualidade | Especificações |

### Validade do Registro

- **Prazo**: 5 anos (prorrogáveis por períodos iguais)
- **Revalidação**: Deve ser requerida no primeiro semestre do último ano de validade
- **Cancelamento**: Por irregularidades ou risco à saúde

### Dispensa de Registro

Alguns produtos têm registro dispensado (Art. 25), mas devem ser **notificados**:
- Produtos de baixo risco
- Cosméticos grau 1
- Saneantes de risco 1

---

## AUTORIZAÇÃO DE FUNCIONAMENTO (Arts. 50 a 56)

### Conceito

A **AFE** (Autorização de Funcionamento de Empresa) é ato privativo da ANVISA que autoriza empresas a:
- Fabricar
- Importar
- Exportar
- Distribuir
- Comercializar produtos sujeitos à vigilância sanitária

### Requisitos

| Requisito | Descrição |
|-----------|-----------|
| **Instalações adequadas** | Conforme normas sanitárias |
| **Equipamentos** | Apropriados à atividade |
| **Responsável técnico** | Profissional habilitado |
| **Boas Práticas** | Certificado de BPF (quando exigível) |
| **Regularidade fiscal** | CNPJ regular |

### Licença Sanitária

Além da AFE (federal), a empresa precisa de **Licença Sanitária** (estadual/municipal) para funcionar.

| Autorização | Órgão | Âmbito |
|-------------|-------|--------|
| AFE | ANVISA | Nacional |
| Licença Sanitária | VISA estadual/municipal | Local |

---

## RESPONSABILIDADE TÉCNICA (Arts. 51 e 52)

### Exigência

> "A empresa terá obrigatoriamente um responsável técnico legalmente habilitado." (Art. 51)

### Profissionais Habilitados

| Produto | Responsável Técnico |
|---------|---------------------|
| Medicamentos | Farmacêutico |
| Produtos biológicos | Farmacêutico, médico, biólogo |
| Correlatos | Conforme especificidade |
| Cosméticos | Farmacêutico, químico |
| Saneantes | Farmacêutico, químico, engenheiro químico |

### Atribuições do RT

- Garantir cumprimento das normas sanitárias
- Assinar documentos técnicos
- Responder tecnicamente pela empresa
- Manter-se atualizado
- Comunicar irregularidades à autoridade sanitária

---

## BOAS PRÁTICAS DE FABRICAÇÃO (BPF)

### Conceito

Conjunto de normas e procedimentos que garantem a qualidade, segurança e eficácia dos produtos em todas as etapas do processo produtivo.

### Elementos das BPF

| Elemento | Descrição |
|----------|-----------|
| **Pessoal** | Qualificação e treinamento |
| **Instalações** | Projeto e construção adequados |
| **Equipamentos** | Validados e qualificados |
| **Documentação** | Procedimentos escritos |
| **Produção** | Controle de processos |
| **Controle de qualidade** | Análises e liberação |
| **Autoinspeção** | Auditorias internas |

### Certificado de BPF

- Emitido pela ANVISA
- Obtido mediante inspeção
- Válido por período determinado
- Condição para funcionamento

---

## ROTULAGEM E BULAS (Arts. 57 a 61)

### Rotulagem Obrigatória

Todo produto deve conter no rótulo:
- Nome do produto
- Composição qualitativa e quantitativa
- Nome e endereço do fabricante
- Número do registro
- Data de fabricação e validade
- Lote
- Advertências (quando necessário)

### Bula de Medicamentos

Obrigatória para medicamentos, contendo:
- Identificação do medicamento
- Informações ao paciente
- Informações técnicas
- Dizeres legais

### Publicidade (Arts. 56 a 58, Lei 6.360/76 + Lei 9.294/96)

| Medicamento | Publicidade |
|-------------|-------------|
| **Com prescrição** | Apenas para profissionais de saúde |
| **Sem prescrição** | Permitida, com restrições |

---

## FISCALIZAÇÃO (Arts. 71 a 74)

### Competência

- **ANVISA**: âmbito federal
- **VISAs estaduais**: âmbito estadual
- **VISAs municipais**: âmbito local

### Medidas Fiscalizatórias

| Medida | Aplicação |
|--------|-----------|
| Inspeção | Verificação do cumprimento |
| Coleta de amostras | Para análise |
| Interdição cautelar | Risco iminente |
| Apreensão | Produtos irregulares |
| Inutilização | Produtos impróprios |

---

## INFRAÇÕES E PENALIDADES

### Remissão

As infrações às disposições da Lei 6.360/76 são punidas conforme a **Lei 6.437/77** (já estudada no Tópico 9).

### Infrações Específicas

| Infração | Penalidade |
|----------|------------|
| Fabricar sem registro | Apreensão + multa + interdição |
| Funcionar sem AFE | Interdição + multa |
| Ausência de RT | Multa + interdição |
| Rotulagem irregular | Apreensão + multa |
| Publicidade irregular | Proibição + multa |

---

## MEDICAMENTOS GENÉRICOS (Lei 9.787/99)

### Conceito

Medicamento SIMILAR ao de referência, com comprovação de **bioequivalência** por testes in vivo ou in vitro.

### Características

| Aspecto | Requisito |
|---------|-----------|
| **Princípio ativo** | Mesmo do referência |
| **Forma farmacêutica** | Mesma |
| **Bioequivalência** | Comprovada |
| **Intercambiabilidade** | Permitida |
| **Identificação** | Faixa amarela com "G" |

### Prescrição

No SUS, obrigatória pela **Denominação Comum Brasileira (DCB)** ou **Denominação Comum Internacional (DCI)**.

---

## QUADRO RESUMO: TIPOS DE MEDICAMENTOS

| Tipo | Registro | Bioequivalência | Intercambiável |
|------|----------|-----------------|----------------|
| **Referência** | Inovador, primeiro | - | Padrão |
| **Genérico** | Pelo DCB, sem marca | Comprovada | Sim |
| **Similar** | Com marca | Não comprovada (regra) | Não (regra) |

---

## PRODUTOS CONTROLADOS (Portaria 344/98)

### Conceito

Medicamentos sujeitos a **controle especial** por conterem substâncias entorpecentes, psicotrópicas ou precursoras.

### Listas

| Lista | Substâncias | Exemplo |
|-------|-------------|---------|
| A1, A2, A3 | Entorpecentes | Morfina, codeína |
| B1, B2 | Psicotrópicos | Anfetaminas, barbitúricos |
| C1 a C5 | Outras controladas | Anabolizantes, retinoides |

### Notificação de Receita

| Tipo | Cor | Listas |
|------|-----|--------|
| A | Amarela | A1, A2, A3 |
| B | Azul | B1, B2 |
| Especial | Branca | C1, C2, C3 |`,

        pontosChave: [
          "Lei 6.360/76: vigilância sanitária de medicamentos, cosméticos, saneantes, correlatos e outros",
          "Registro de produtos: OBRIGATÓRIO para fabricação, importação e comercialização",
          "Validade do registro: 5 ANOS, renováveis",
          "AFE (Autorização de Funcionamento de Empresa): ato privativo da ANVISA",
          "Responsável técnico: OBRIGATÓRIO - farmacêutico para medicamentos",
          "BPF (Boas Práticas de Fabricação): obrigatórias, certificado emitido pela ANVISA",
          "Rotulagem: nome, composição, fabricante, registro, validade, lote obrigatórios",
          "Medicamento genérico: bioequivalência COMPROVADA, intercambiável, faixa amarela com G",
          "Medicamento similar: mesmo princípio ativo, mas SEM bioequivalência comprovada (regra)",
          "Prescrição no SUS: obrigatória pela DCB (Denominação Comum Brasileira)"
        ],

        armadilhas: [
          {
            titulo: "Registro Federal x Licença Local",
            descricao: "Registro é FEDERAL (ANVISA), licença sanitária é ESTADUAL/MUNICIPAL",
            dica: "São atos distintos e complementares - um não substitui o outro"
          },
          {
            titulo: "Validade de 5 Anos",
            descricao: "Validade do registro é 5 ANOS (não 10 anos como alguns contratos)",
            dica: "A AFE tem validade indeterminada, mas o REGISTRO vale 5 anos"
          },
          {
            titulo: "Genérico x Similar",
            descricao: "GENÉRICO tem bioequivalência comprovada; SIMILAR não tem (regra geral)",
            dica: "Genérico pode substituir referência; similar não (depende de testes)"
          },
          {
            titulo: "Faixa do Genérico",
            descricao: "Genérico usa faixa AMARELA com G (não azul nem verde)",
            dica: "Faixa amarela com G é a identificação visual obrigatória"
          },
          {
            titulo: "AFE e Licença Complementares",
            descricao: "AFE é da ANVISA; Licença Sanitária é da VISA estadual/municipal - são COMPLEMENTARES",
            dica: "Empresa precisa de AMBAS para funcionar legalmente"
          },
          {
            titulo: "Publicidade de Prescrição",
            descricao: "Medicamentos de prescrição só podem ter publicidade para PROFISSIONAIS DE SAÚDE",
            dica: "Publicidade ao público só para medicamentos isentos de prescrição"
          },
          {
            titulo: "Receita Amarela",
            descricao: "Notificação de receita AMARELA é para entorpecentes (Lista A), não psicotrópicos",
            dica: "Amarela = A (entorpecentes), Azul = B (psicotrópicos)"
          },
          {
            titulo: "Similar tem Marca",
            descricao: "Similar pode ter MARCA; genérico é identificado pelo princípio ativo (DCB)",
            dica: "Genérico: nome DCB + G amarelo; Similar: marca comercial"
          },
          {
            titulo: "Notificação ≠ Registro",
            descricao: "Alguns produtos têm registro DISPENSADO, mas precisam ser NOTIFICADOS",
            dica: "Baixo risco = notificação simplificada; alto risco = registro completo"
          }
        ],

        mnemonicos: [
          {
            termo: "MeDICCoSaPH",
            significado: "Produtos da Lei 6.360/76",
            frase: "Medicamentos / Drogas / Insumos / Correlatos / Cosméticos / Saneantes / Produtos de Higiene"
          },
          {
            termo: "CINCO ANOS",
            significado: "Validade do Registro",
            frase: "Registro de produtos: válido por 5 anos, renováveis por períodos iguais"
          },
          {
            termo: "FAIXA AMARELA G",
            significado: "Identificação do Genérico",
            frase: "Faixa amarela com letra G - bioequivalência comprovada"
          },
          {
            termo: "AAB",
            significado: "Notificação de Receita",
            frase: "Amarela = entorpecentes (A) / Azul = psicotrópicos (B) / Branca = especiais (C)"
          },
          {
            termo: "PIEDCAC",
            significado: "Boas Práticas de Fabricação",
            frase: "Pessoal / Instalações / Equipamentos / Documentação / Controle de qualidade / Autoinspeção / Calibração"
          },
          {
            termo: "FA-LEM",
            significado: "AFE x Licença",
            frase: "Federal = AFE (ANVISA) / Local/Estadual/Municipal = Licença Sanitária (VISA)"
          },
        ],

        flashcards: [
          {
            frente: "Quais produtos estão sujeitos à Lei 6.360/76?",
            verso: "Medicamentos, drogas, insumos farmacêuticos, correlatos, cosméticos, saneantes e produtos de higiene. Macete: MeDICCoSaPH.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a validade do registro de produtos na ANVISA?",
            verso: "5 ANOS, renováveis por períodos iguais. A revalidação deve ser requerida no primeiro semestre do último ano de validade.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença entre medicamento genérico e similar?",
            verso: "GENÉRICO: bioequivalência COMPROVADA, intercambiável, identificado pelo DCB, faixa amarela com G. SIMILAR: bioequivalência NÃO comprovada (regra), tem marca comercial, NÃO intercambiável.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que é AFE e quem a concede?",
            verso: "AFE (Autorização de Funcionamento de Empresa) é ato privativo da ANVISA que autoriza empresas a fabricar, importar, exportar, distribuir e comercializar produtos sujeitos à vigilância sanitária.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual profissional deve ser o responsável técnico por medicamentos?",
            verso: "FARMACÊUTICO. É obrigatório para todo estabelecimento que fabrique, distribua ou comercialize medicamentos.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que são BPF (Boas Práticas de Fabricação)?",
            verso: "Conjunto de normas e procedimentos que garantem qualidade, segurança e eficácia dos produtos em todas as etapas do processo produtivo. O certificado é emitido pela ANVISA.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quais informações devem constar obrigatoriamente no rótulo de produtos?",
            verso: "Nome do produto, composição, nome e endereço do fabricante, número do registro, data de fabricação e validade, lote e advertências quando necessário.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a cor da notificação de receita para medicamentos entorpecentes?",
            verso: "AMARELA (Lista A). Psicotrópicos usam notificação AZUL (Lista B). Outras substâncias controladas usam receita BRANCA especial (Lista C).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'ce-q-11-1',
            enunciado: 'Nos termos da Lei nº 6.360/1976, o registro de produtos:',
            alternativas: [
              { letra: 'A', texto: 'é facultativo para medicamentos importados.' },
              { letra: 'B', texto: 'é obrigatório para fabricação, importação e comercialização.' },
              { letra: 'C', texto: 'tem validade de 10 anos.' },
              { letra: 'D', texto: 'é concedido pelas Secretarias Estaduais de Saúde.' },
              { letra: 'E', texto: 'é dispensado para medicamentos genéricos.' },
            ],
            gabarito: 'B',
            justificativa: 'Art. 12 da Lei 6.360/76: nenhum produto poderá ser industrializado, exposto à venda ou entregue ao consumo antes de REGISTRADO no Ministério da Saúde (ANVISA). Validade: 5 anos.',
            dificuldade: 'Fácil',
            competencia: 'Registro de produtos',
            banca: 'IADES',
            tags: ['registro', 'obrigatoriedade'],
          },
          {
            id: 'ce-q-11-2',
            enunciado: 'A validade do registro de produtos na ANVISA é de:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '2 anos.' },
              { letra: 'C', texto: '5 anos.' },
              { letra: 'D', texto: '10 anos.' },
              { letra: 'E', texto: 'indeterminada.' },
            ],
            gabarito: 'C',
            justificativa: 'O registro de produtos tem validade de 5 ANOS, prorrogáveis por períodos iguais mediante requerimento de revalidação.',
            dificuldade: 'Fácil',
            competencia: 'Validade do registro',
            banca: 'IADES',
            tags: ['registro', 'validade'],
          },
          {
            id: 'ce-q-11-3',
            enunciado: 'A AFE (Autorização de Funcionamento de Empresa) é concedida por:',
            alternativas: [
              { letra: 'A', texto: 'Vigilância Sanitária Municipal.' },
              { letra: 'B', texto: 'Secretaria Estadual de Saúde.' },
              { letra: 'C', texto: 'ANVISA.' },
              { letra: 'D', texto: 'Conselho Regional de Farmácia.' },
              { letra: 'E', texto: 'Prefeitura Municipal.' },
            ],
            gabarito: 'C',
            justificativa: 'A AFE (Autorização de Funcionamento de Empresa) é ato PRIVATIVO da ANVISA. A licença sanitária local é concedida pela VISA estadual/municipal.',
            dificuldade: 'Fácil',
            competencia: 'AFE',
            banca: 'IADES',
            tags: ['AFE', 'ANVISA'],
          },
          {
            id: 'ce-q-11-4',
            enunciado: 'O responsável técnico por estabelecimento que fabrica medicamentos deve ser:',
            alternativas: [
              { letra: 'A', texto: 'médico.' },
              { letra: 'B', texto: 'enfermeiro.' },
              { letra: 'C', texto: 'farmacêutico.' },
              { letra: 'D', texto: 'engenheiro.' },
              { letra: 'E', texto: 'administrador.' },
            ],
            gabarito: 'C',
            justificativa: 'Para fabricação de MEDICAMENTOS, o responsável técnico deve ser FARMACÊUTICO. Para outros produtos, pode ser químico ou outro profissional habilitado conforme a especificidade.',
            dificuldade: 'Fácil',
            competencia: 'Responsável técnico',
            banca: 'IADES',
            tags: ['RT', 'farmacêutico'],
          },
          {
            id: 'ce-q-11-5',
            enunciado: 'O medicamento genérico caracteriza-se por:',
            alternativas: [
              { letra: 'A', texto: 'ter marca comercial.' },
              { letra: 'B', texto: 'não comprovar bioequivalência.' },
              { letra: 'C', texto: 'ser identificado pelo princípio ativo e possuir bioequivalência comprovada.' },
              { letra: 'D', texto: 'ter preço superior ao de referência.' },
              { letra: 'E', texto: 'não ser intercambiável.' },
            ],
            gabarito: 'C',
            justificativa: 'O medicamento GENÉRICO é identificado pela DCB (princípio ativo), possui BIOEQUIVALÊNCIA COMPROVADA com o de referência e é INTERCAMBIÁVEL.',
            dificuldade: 'Média',
            competencia: 'Medicamento genérico',
            banca: 'IADES',
            tags: ['genérico', 'bioequivalência'],
          },
          {
            id: 'ce-q-11-6',
            enunciado: 'A cor da notificação de receita para medicamentos entorpecentes (Lista A) é:',
            alternativas: [
              { letra: 'A', texto: 'branca.' },
              { letra: 'B', texto: 'azul.' },
              { letra: 'C', texto: 'amarela.' },
              { letra: 'D', texto: 'verde.' },
              { letra: 'E', texto: 'vermelha.' },
            ],
            gabarito: 'C',
            justificativa: 'Notificação AMARELA = entorpecentes (Lista A). Notificação AZUL = psicotrópicos (Lista B). Receita BRANCA especial = outras controladas (Lista C).',
            dificuldade: 'Média',
            competencia: 'Notificação de receita',
            banca: 'IADES',
            tags: ['receita', 'controlados'],
          },
          {
            id: 'ce-q-11-7',
            enunciado: 'Os produtos sujeitos à Lei nº 6.360/1976 incluem:',
            alternativas: [
              { letra: 'A', texto: 'apenas medicamentos.' },
              { letra: 'B', texto: 'medicamentos, cosméticos, saneantes e correlatos, entre outros.' },
              { letra: 'C', texto: 'apenas cosméticos e saneantes.' },
              { letra: 'D', texto: 'apenas produtos importados.' },
              { letra: 'E', texto: 'apenas vacinas.' },
            ],
            gabarito: 'B',
            justificativa: 'A Lei 6.360/76 abrange: medicamentos, drogas, insumos farmacêuticos, correlatos, cosméticos, saneantes e produtos de higiene.',
            dificuldade: 'Fácil',
            competencia: 'Âmbito de aplicação',
            banca: 'IADES',
            tags: ['produtos', 'aplicação'],
          },
          {
            id: 'ce-q-11-8',
            enunciado: 'As Boas Práticas de Fabricação (BPF) são:',
            alternativas: [
              { letra: 'A', texto: 'opcionais para medicamentos.' },
              { letra: 'B', texto: 'exigidas apenas para exportação.' },
              { letra: 'C', texto: 'obrigatórias, com certificado emitido pela ANVISA.' },
              { letra: 'D', texto: 'dispensadas para cosméticos.' },
              { letra: 'E', texto: 'de competência municipal.' },
            ],
            gabarito: 'C',
            justificativa: 'As BPF são OBRIGATÓRIAS para fabricação de medicamentos e outros produtos. O certificado de BPF é emitido pela ANVISA mediante inspeção.',
            dificuldade: 'Média',
            competencia: 'BPF',
            banca: 'IADES',
            tags: ['BPF', 'certificado'],
          },
          {
            id: 'ce-q-11-9',
            enunciado: 'A prescrição de medicamentos no âmbito do SUS deve ser feita:',
            alternativas: [
              { letra: 'A', texto: 'obrigatoriamente pelo nome comercial.' },
              { letra: 'B', texto: 'apenas em receituário azul.' },
              { letra: 'C', texto: 'obrigatoriamente pela Denominação Comum Brasileira (DCB).' },
              { letra: 'D', texto: 'apenas por médicos especialistas.' },
              { letra: 'E', texto: 'sem nenhuma padronização.' },
            ],
            gabarito: 'C',
            justificativa: 'No SUS, a prescrição deve ser feita obrigatoriamente pela DCB (Denominação Comum Brasileira) ou DCI (Internacional), facilitando a dispensação de genéricos.',
            dificuldade: 'Média',
            competencia: 'Prescrição SUS',
            banca: 'IADES',
            tags: ['prescrição', 'SUS', 'DCB'],
          },
          {
            id: 'ce-q-11-10',
            enunciado: 'A diferença entre AFE e Licença Sanitária é que:',
            alternativas: [
              { letra: 'A', texto: 'são a mesma coisa.' },
              { letra: 'B', texto: 'AFE é federal (ANVISA) e Licença é estadual/municipal (VISA).' },
              { letra: 'C', texto: 'apenas uma delas é necessária.' },
              { letra: 'D', texto: 'AFE é municipal e Licença é federal.' },
              { letra: 'E', texto: 'nenhuma é obrigatória.' },
            ],
            gabarito: 'B',
            justificativa: 'AFE é ato FEDERAL da ANVISA. Licença Sanitária é ato ESTADUAL ou MUNICIPAL da VISA local. AMBAS são necessárias e complementares.',
            dificuldade: 'Média',
            competencia: 'AFE x Licença',
            banca: 'IADES',
            tags: ['AFE', 'licença', 'competência'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-12',
      numero: 12,
      titulo: 'Decreto nº 8.077/2013 - Regulamento da Lei 6.360/1976',
      conteudo: {
        resumo: `# Decreto nº 8.077/2013

O **Decreto nº 8.077/2013** regulamenta a Lei nº 6.360/1976, dispondo sobre as condições para funcionamento de empresas e registro de produtos sujeitos à vigilância sanitária.

## Âmbito de Aplicação

Aplica-se a empresas que desenvolvam atividades de:
- Fabricação
- Importação
- Exportação
- Distribuição
- Comercialização
- Fracionamento
- Armazenamento
- Transporte

De: medicamentos, drogas, insumos, correlatos, cosméticos, saneantes, produtos de higiene.

## Autorização de Funcionamento (AFE)

| Aspecto | Descrição |
|---------|-----------|
| **Competência** | ANVISA (federal) |
| **Obrigatoriedade** | Para todas as atividades listadas |
| **Validade** | Indeterminada (condicionada a GMP e RT) |
| **Requisito** | Responsável técnico + instalações |

## Autorização Especial (AE)

Necessária para atividades com:
- Medicamentos controlados (Portaria 344/98)
- Substâncias entorpecentes e psicotrópicas
- Insumos farmacêuticos controlados

## Boas Práticas (GMP)

- Certificado de Boas Práticas obrigatório
- Emitido pela ANVISA após inspeção
- Condição para manutenção da AFE`,

        explicacao: `# Decreto nº 8.077/2013: Análise Completa

## CONTEXTO E IMPORTÂNCIA

O Decreto nº 8.077/2013 **regulamenta a Lei nº 6.360/1976**, estabelecendo regras específicas para:
- Funcionamento de empresas do setor
- Registro de produtos
- Boas práticas de fabricação

Foi alterado posteriormente pelos Decretos nº 9.094/2017 e nº 10.030/2019.

---

## ÂMBITO DE APLICAÇÃO (Art. 1º)

### Empresas Reguladas

O decreto aplica-se a empresas que desenvolvam atividades de:

| Atividade | Descrição |
|-----------|-----------|
| **Fabricação** | Produção industrial |
| **Importação** | Entrada de produtos estrangeiros |
| **Exportação** | Saída para mercado externo |
| **Distribuição** | Comercialização por atacado |
| **Comercialização** | Venda direta |
| **Fracionamento** | Divisão de produtos |
| **Armazenamento** | Guarda e conservação |
| **Transporte** | Movimentação logística |

### Produtos Regulados

| Categoria | Exemplos |
|-----------|----------|
| **Medicamentos** | Remédios, vacinas |
| **Drogas** | Princípios ativos |
| **Insumos farmacêuticos** | Matérias-primas |
| **Correlatos** | Equipamentos médicos |
| **Cosméticos** | Perfumes, maquiagens |
| **Saneantes** | Desinfetantes, detergentes |
| **Produtos de higiene** | Sabonetes, xampus |

---

## AUTORIZAÇÃO DE FUNCIONAMENTO DE EMPRESA (AFE)

### Conceito (Art. 2º)

> "A Autorização de Funcionamento de Empresa (AFE) é o ato privativo da Anvisa que permite o exercício das atividades relacionadas aos produtos sujeitos à vigilância sanitária."

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Competência** | ANVISA (exclusiva) |
| **Natureza** | Ato administrativo vinculado |
| **Validade** | Indeterminada |
| **Condição** | Manutenção dos requisitos |

### Requisitos para Concessão (Art. 3º)

| Requisito | Descrição |
|-----------|-----------|
| **Responsável técnico** | Profissional habilitado |
| **Instalações** | Adequadas à atividade |
| **Equipamentos** | Compatíveis com as operações |
| **Licença sanitária** | Emitida pela VISA local |
| **Boas práticas** | Certificação (quando exigível) |
| **Regularidade fiscal** | CNPJ regular |

### Atividades que Exigem AFE (Art. 4º)

| Atividade | Medicamentos | Correlatos | Cosméticos | Saneantes |
|-----------|--------------|------------|------------|-----------|
| Fabricar | Sim | Sim | Sim | Sim |
| Importar | Sim | Sim | Sim | Sim |
| Exportar | Sim | Sim | Sim | Sim |
| Distribuir | Sim | Sim | Sim | Sim |
| Fracionar | Sim | - | - | - |
| Armazenar | Sim | Sim | Sim | Sim |
| Transportar | Sim | Sim | Sim | Sim |

### Alteração e Cancelamento

| Situação | Procedimento |
|----------|--------------|
| **Alteração de dados** | Comunicação à ANVISA em 30 dias |
| **Mudança de endereço** | Nova vistoria, atualização da AFE |
| **Encerramento** | Comunicação para cancelamento |
| **Descumprimento** | Cancelamento por ato da ANVISA |

---

## AUTORIZAÇÃO ESPECIAL (AE)

### Conceito (Art. 7º)

Autorização necessária para atividades relacionadas a:
- Medicamentos contendo substâncias controladas
- Insumos farmacêuticos controlados
- Precursores químicos

### Substâncias que Exigem AE

| Lista (Portaria 344/98) | Exemplos |
|-------------------------|----------|
| A1, A2, A3 | Entorpecentes (morfina, codeína) |
| B1, B2 | Psicotrópicos (anfetaminas) |
| C1, C2, C3, C4, C5 | Outras controladas |

### Requisitos Adicionais

| Requisito | Descrição |
|-----------|-----------|
| **Sistema de controle** | Escrituração especial |
| **Segurança** | Cofre ou armário com chave |
| **Balanço de substâncias** | Relatório periódico à ANVISA |
| **Destruição** | Procedimento supervisionado |

---

## RESPONSÁVEL TÉCNICO (RT)

### Exigência (Art. 8º)

> "A empresa deverá possuir, obrigatoriamente, responsável técnico legalmente habilitado."

### Profissionais Habilitados

| Produto | Responsável Técnico |
|---------|---------------------|
| **Medicamentos** | Farmacêutico |
| **Drogas/Insumos** | Farmacêutico |
| **Correlatos** | Conforme regulamento específico |
| **Cosméticos** | Farmacêutico ou químico |
| **Saneantes** | Farmacêutico, químico ou engenheiro químico |

### Atribuições do RT (Art. 9º)

| Atribuição | Descrição |
|------------|-----------|
| Garantir cumprimento das BPF | Controle de qualidade |
| Assinar documentos técnicos | Laudos, registros |
| Comunicar irregularidades | À autoridade sanitária |
| Manter-se atualizado | Capacitação contínua |
| Supervisionar operações | Produção, controle |

### Substituição do RT

| Situação | Procedimento |
|----------|--------------|
| **Afastamento temporário** | Substituto em até 30 dias |
| **Desligamento** | Comunicação em 10 dias |
| **Vacância** | Suspensão das atividades |

---

## BOAS PRÁTICAS DE FABRICAÇÃO (GMP)

### Certificação (Art. 10)

| Aspecto | Descrição |
|---------|-----------|
| **Obrigatoriedade** | Para fabricantes e importadores |
| **Emissão** | ANVISA, após inspeção |
| **Validade** | Conforme regulamento (geralmente 2-3 anos) |
| **Renovação** | Nova inspeção |

### Elementos das Boas Práticas

| Elemento | Descrição |
|----------|-----------|
| **Pessoal** | Qualificação e treinamento |
| **Instalações** | Projeto e manutenção |
| **Equipamentos** | Qualificação e calibração |
| **Materiais** | Controle e rastreabilidade |
| **Produção** | Procedimentos validados |
| **Controle de qualidade** | Análises e liberação |
| **Documentação** | Registros e procedimentos |
| **Autoinspeção** | Auditorias internas |

### Inspeções

| Tipo | Momento | Objetivo |
|------|---------|----------|
| **Pré-operacional** | Antes do início | Verificar instalações |
| **Rotineira** | Periódica | Manter certificação |
| **Por denúncia** | A qualquer tempo | Apurar irregularidades |
| **Para certificação** | Solicitação | Emitir/renovar CBPF |

---

## REGISTRO DE PRODUTOS

### Obrigatoriedade (Art. 14)

> "Os produtos sujeitos à vigilância sanitária somente poderão ser fabricados, importados, exportados, comercializados ou distribuídos após registro ou cadastro na Anvisa."

### Validade do Registro

| Produto | Validade |
|---------|----------|
| **Medicamentos** | 5 anos |
| **Correlatos** | 5 anos (ou conforme RDC) |
| **Cosméticos** | 5 anos (grau 2) ou notificação (grau 1) |
| **Saneantes** | 5 anos (risco 2) ou notificação (risco 1) |

### Dispensa de Registro

Alguns produtos têm registro **dispensado**, mas precisam de **notificação**:
- Cosméticos grau 1
- Saneantes risco 1
- Alimentos (categoria específica)

### Cancelamento do Registro

| Hipótese | Descrição |
|----------|-----------|
| **Não renovação** | Falta de pedido de revalidação |
| **Irregularidades** | Descumprimento de normas |
| **Risco à saúde** | Determinação da ANVISA |
| **Pedido da empresa** | Desistência voluntária |

---

## ROTULAGEM E BULAS

### Rotulagem (Art. 17)

Todo produto deve conter:
- Identificação do produto
- Composição
- Fabricante/importador
- Número de registro
- Lote e validade
- Informações de uso
- Advertências (quando cabível)

### Bulas (Art. 18)

| Tipo | Conteúdo |
|------|----------|
| **Paciente** | Linguagem acessível |
| **Profissional** | Informações técnicas completas |

---

## PUBLICIDADE E PROPAGANDA

### Restrições (Art. 19)

| Produto | Publicidade |
|---------|-------------|
| **Medicamentos com prescrição** | Apenas para profissionais |
| **Medicamentos sem prescrição** | Permitida com restrições |
| **Produtos controlados** | Proibida ao público |

### Requisitos

| Requisito | Descrição |
|-----------|-----------|
| **Veracidade** | Informações verdadeiras |
| **Advertências** | Alertas obrigatórios |
| **Equilíbrio** | Benefícios e riscos |
| **Autorização** | ANVISA para alguns casos |

---

## FISCALIZAÇÃO E PENALIDADES

### Competência

| Esfera | Órgão |
|--------|-------|
| **Federal** | ANVISA |
| **Estadual** | VISA estadual |
| **Municipal** | VISA municipal |

### Infrações

As infrações ao Decreto são punidas conforme a **Lei nº 6.437/1977** (já estudada).

### Medidas Cautelares

| Medida | Aplicação |
|--------|-----------|
| **Apreensão** | Produtos irregulares |
| **Interdição** | Estabelecimentos |
| **Suspensão de venda** | Produtos com risco |
| **Inutilização** | Produtos impróprios |

---

## QUADRO RESUMO: AFE x AE x LICENÇA

| Aspecto | AFE | AE | Licença Sanitária |
|---------|-----|-----|-------------------|
| **Órgão** | ANVISA | ANVISA | VISA estadual/municipal |
| **Âmbito** | Nacional | Nacional | Local |
| **Produtos** | Todos sujeitos à VISA | Controlados | Todos |
| **Validade** | Indeterminada | Indeterminada | Anual/bienal |
| **Requisitos** | RT + instalações | AFE + controle especial | AFE + vistoria local |`,

        pontosChave: [
          "Decreto 8.077/2013 regulamenta a Lei 6.360/1976",
          "AFE: ato privativo da ANVISA, validade indeterminada",
          "AE (Autorização Especial): para substâncias controladas (Portaria 344/98)",
          "RT obrigatório: farmacêutico para medicamentos",
          "Certificado de Boas Práticas (CBPF): condição para funcionamento",
          "Registro de produtos: validade de 5 anos (regra geral)",
          "Alguns produtos têm registro dispensado, mas precisam de NOTIFICAÇÃO",
          "AFE + Licença Sanitária: AMBAS são necessárias",
          "RT deve ser comunicado à ANVISA: 10 dias após desligamento",
          "Publicidade de medicamentos com prescrição: só para profissionais"
        ],

        armadilhas: [
          {
            titulo: "AFE Indeterminada",
            descricao: "AFE tem validade INDETERMINADA (não 5 anos como o registro)",
            dica: "AFE = indeterminada (condicionada); Registro = 5 anos"
          },
          {
            titulo: "Registro de 5 Anos",
            descricao: "Registro de produtos é que vale 5 ANOS (não a AFE)",
            dica: "Confusão comum: trocar validade da AFE com validade do registro"
          },
          {
            titulo: "AE para Controlados",
            descricao: "AE é para CONTROLADOS (Portaria 344), não para todos os medicamentos",
            dica: "AFE = todos os produtos VISA; AE = apenas controlados"
          },
          {
            titulo: "Notificação ≠ Registro",
            descricao: "NOTIFICAÇÃO não é o mesmo que REGISTRO - produtos de baixo risco são notificados",
            dica: "Notificação é simplificada para produtos de menor risco"
          },
          {
            titulo: "Competência Territorial",
            descricao: "Licença Sanitária é LOCAL (VISA estadual/municipal), AFE é FEDERAL (ANVISA)",
            dica: "FA-LEM: Federal = AFE, Local/Estadual/Municipal = Licença"
          },
          {
            titulo: "RT Obrigatório",
            descricao: "RT é obrigatório - sem RT, atividades são SUSPENSAS",
            dica: "Desligamento do RT: comunicar em 10 dias e nomear substituto"
          },
          {
            titulo: "Graus de Cosméticos",
            descricao: "Cosméticos grau 1 são NOTIFICADOS, grau 2 são REGISTRADOS",
            dica: "Grau 1 = baixo risco (notifica); Grau 2 = maior risco (registra)"
          },
          {
            titulo: "CBPF para Fabricantes",
            descricao: "CBPF é para FABRICANTES E IMPORTADORES (não apenas distribuidores)",
            dica: "Distribuidores não precisam de CBPF, mas precisam de AFE"
          },
          {
            titulo: "Publicidade Restrita",
            descricao: "Publicidade ao público só para medicamentos SEM prescrição",
            dica: "Prescrição = só para profissionais de saúde"
          }
        ],

        mnemonicos: [
          {
            termo: "AIA",
            significado: "AFE - Características",
            frase: "Autorização / pela ANVISA / Indeterminada (validade)"
          },
          {
            termo: "AE = 344",
            significado: "Autorização Especial",
            frase: "Autorização Especial = substâncias CONTROLADAS (Portaria 344/98)"
          },
          {
            termo: "5 ANOS",
            significado: "Validade do Registro",
            frase: "Registro de produtos = 5 anos de validade (não confundir com AFE)"
          },
          {
            termo: "RT = FARM",
            significado: "Responsável Técnico",
            frase: "Responsável Técnico para medicamentos = obrigatoriamente FARMACÊUTICO"
          },
          {
            termo: "FAI",
            significado: "CBPF - Obrigatoriedade",
            frase: "Certificado de Boas Práticas = Fabricantes + Importadores"
          },
          {
            termo: "1N-2R",
            significado: "Graus de Cosméticos",
            frase: "Grau 1 = Notifica (baixo risco), Grau 2 = Registra (maior risco)"
          },
        ],

        flashcards: [
          {
            frente: "O que regulamenta o Decreto nº 8.077/2013?",
            verso: "Regulamenta a Lei nº 6.360/1976, dispondo sobre condições para funcionamento de empresas e registro de produtos sujeitos à vigilância sanitária.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença entre AFE e AE?",
            verso: "AFE (Autorização de Funcionamento): para todas as atividades com produtos VISA. AE (Autorização Especial): para atividades com substâncias CONTROLADAS (Portaria 344/98).",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a validade da AFE?",
            verso: "INDETERMINADA, condicionada à manutenção dos requisitos (RT, instalações, boas práticas). O registro de produtos é que tem validade de 5 anos.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quem pode ser RT de estabelecimentos que fabricam medicamentos?",
            verso: "FARMACÊUTICO, obrigatoriamente. Para cosméticos, pode ser farmacêutico ou químico. Para saneantes, pode ser farmacêutico, químico ou engenheiro químico.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "O que acontece quando o RT se desliga da empresa?",
            verso: "A empresa deve comunicar à ANVISA em até 10 DIAS e providenciar substituto. Sem RT, as atividades devem ser SUSPENSAS.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Qual a diferença entre registro e notificação de produtos?",
            verso: "REGISTRO: para produtos de maior risco (cosméticos grau 2, saneantes risco 2), validade 5 anos. NOTIFICAÇÃO: para produtos de baixo risco (grau 1, risco 1), procedimento simplificado.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Quem precisa de Certificado de Boas Práticas de Fabricação?",
            verso: "FABRICANTES e IMPORTADORES de medicamentos e outros produtos sujeitos à vigilância sanitária. O CBPF é emitido pela ANVISA após inspeção.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            frente: "Como é a publicidade de medicamentos que exigem prescrição?",
            verso: "Permitida APENAS para profissionais de saúde habilitados a prescrever. É PROIBIDA ao público em geral.",
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'ce-q-12-1',
            enunciado: 'O Decreto nº 8.077/2013 regulamenta:',
            alternativas: [
              { letra: 'A', texto: 'a Lei nº 6.437/1977 (infrações sanitárias).' },
              { letra: 'B', texto: 'a Lei nº 8.080/1990 (Lei Orgânica do SUS).' },
              { letra: 'C', texto: 'a Lei nº 6.360/1976 (vigilância de produtos).' },
              { letra: 'D', texto: 'a Lei nº 9.782/1999 (criação da ANVISA).' },
              { letra: 'E', texto: 'a Lei nº 5.991/1973 (controle sanitário do comércio de drogas).' },
            ],
            gabarito: 'C',
            justificativa: 'O Decreto 8.077/2013 regulamenta a Lei 6.360/1976, que dispõe sobre vigilância sanitária de medicamentos, cosméticos, saneantes e correlatos.',
            dificuldade: 'Fácil',
            competencia: 'Regulamentação',
            banca: 'IADES',
            tags: ['decreto 8.077', 'lei 6.360'],
          },
          {
            id: 'ce-q-12-2',
            enunciado: 'A Autorização de Funcionamento de Empresa (AFE) é ato privativo:',
            alternativas: [
              { letra: 'A', texto: 'das Vigilâncias Sanitárias municipais.' },
              { letra: 'B', texto: 'das Secretarias Estaduais de Saúde.' },
              { letra: 'C', texto: 'da ANVISA.' },
              { letra: 'D', texto: 'do Conselho Regional de Farmácia.' },
              { letra: 'E', texto: 'do Ministério da Saúde.' },
            ],
            gabarito: 'C',
            justificativa: 'A AFE é ato PRIVATIVO da ANVISA, de competência exclusivamente federal. A Licença Sanitária é que é concedida pela VISA estadual/municipal.',
            dificuldade: 'Fácil',
            competencia: 'AFE',
            banca: 'IADES',
            tags: ['AFE', 'ANVISA'],
          },
          {
            id: 'ce-q-12-3',
            enunciado: 'A validade da AFE é:',
            alternativas: [
              { letra: 'A', texto: '1 ano.' },
              { letra: 'B', texto: '5 anos.' },
              { letra: 'C', texto: '10 anos.' },
              { letra: 'D', texto: 'indeterminada.' },
              { letra: 'E', texto: '2 anos.' },
            ],
            gabarito: 'D',
            justificativa: 'A AFE tem validade INDETERMINADA, condicionada à manutenção dos requisitos (RT, instalações, BPF). O registro de PRODUTOS é que vale 5 anos.',
            dificuldade: 'Média',
            competencia: 'Validade da AFE',
            banca: 'IADES',
            tags: ['AFE', 'validade'],
          },
          {
            id: 'ce-q-12-4',
            enunciado: 'A Autorização Especial (AE) é necessária para atividades com:',
            alternativas: [
              { letra: 'A', texto: 'todos os medicamentos.' },
              { letra: 'B', texto: 'apenas cosméticos.' },
              { letra: 'C', texto: 'substâncias controladas (Portaria 344/98).' },
              { letra: 'D', texto: 'apenas saneantes.' },
              { letra: 'E', texto: 'alimentos.' },
            ],
            gabarito: 'C',
            justificativa: 'A AE é necessária para atividades com substâncias CONTROLADAS, listadas na Portaria 344/98 (entorpecentes, psicotrópicos e outras).',
            dificuldade: 'Fácil',
            competencia: 'Autorização Especial',
            banca: 'IADES',
            tags: ['AE', 'controlados'],
          },
          {
            id: 'ce-q-12-5',
            enunciado: 'O responsável técnico de estabelecimento fabricante de medicamentos deve ser:',
            alternativas: [
              { letra: 'A', texto: 'médico.' },
              { letra: 'B', texto: 'enfermeiro.' },
              { letra: 'C', texto: 'farmacêutico.' },
              { letra: 'D', texto: 'químico.' },
              { letra: 'E', texto: 'biólogo.' },
            ],
            gabarito: 'C',
            justificativa: 'Para MEDICAMENTOS, o RT deve ser obrigatoriamente FARMACÊUTICO. Para cosméticos, pode ser farmacêutico ou químico.',
            dificuldade: 'Fácil',
            competencia: 'Responsável técnico',
            banca: 'IADES',
            tags: ['RT', 'farmacêutico'],
          },
          {
            id: 'ce-q-12-6',
            enunciado: 'Quanto ao desligamento do responsável técnico, a empresa deve:',
            alternativas: [
              { letra: 'A', texto: 'comunicar à ANVISA em até 10 dias.' },
              { letra: 'B', texto: 'comunicar à ANVISA em até 30 dias.' },
              { letra: 'C', texto: 'continuar operando normalmente.' },
              { letra: 'D', texto: 'comunicar apenas ao Conselho Regional.' },
              { letra: 'E', texto: 'fechar imediatamente.' },
            ],
            gabarito: 'A',
            justificativa: 'A empresa deve comunicar o desligamento do RT à ANVISA em até 10 DIAS e providenciar substituto. Sem RT, as atividades devem ser suspensas.',
            dificuldade: 'Média',
            competencia: 'Desligamento do RT',
            banca: 'IADES',
            tags: ['RT', 'desligamento'],
          },
          {
            id: 'ce-q-12-7',
            enunciado: 'Os cosméticos grau 1 são submetidos a:',
            alternativas: [
              { letra: 'A', texto: 'registro obrigatório na ANVISA.' },
              { letra: 'B', texto: 'notificação na ANVISA.' },
              { letra: 'C', texto: 'autorização especial.' },
              { letra: 'D', texto: 'dispensa de qualquer ato sanitário.' },
              { letra: 'E', texto: 'análise prévia pelo INCQS.' },
            ],
            gabarito: 'B',
            justificativa: 'Cosméticos grau 1 (baixo risco) são submetidos a NOTIFICAÇÃO, não a registro. Cosméticos grau 2 são submetidos a registro.',
            dificuldade: 'Média',
            competencia: 'Notificação',
            banca: 'IADES',
            tags: ['cosméticos', 'notificação'],
          },
          {
            id: 'ce-q-12-8',
            enunciado: 'O Certificado de Boas Práticas de Fabricação (CBPF) é obrigatório para:',
            alternativas: [
              { letra: 'A', texto: 'apenas distribuidoras.' },
              { letra: 'B', texto: 'apenas drogarias.' },
              { letra: 'C', texto: 'fabricantes e importadores.' },
              { letra: 'D', texto: 'apenas transportadoras.' },
              { letra: 'E', texto: 'nenhuma empresa.' },
            ],
            gabarito: 'C',
            justificativa: 'O CBPF é obrigatório para FABRICANTES e IMPORTADORES de produtos sujeitos à vigilância sanitária. É emitido pela ANVISA após inspeção.',
            dificuldade: 'Média',
            competencia: 'CBPF',
            banca: 'IADES',
            tags: ['CBPF', 'obrigatoriedade'],
          },
          {
            id: 'ce-q-12-9',
            enunciado: 'A publicidade de medicamentos que exigem prescrição é:',
            alternativas: [
              { letra: 'A', texto: 'permitida livremente.' },
              { letra: 'B', texto: 'permitida apenas para profissionais de saúde.' },
              { letra: 'C', texto: 'proibida em qualquer circunstância.' },
              { letra: 'D', texto: 'permitida apenas em revistas científicas.' },
              { letra: 'E', texto: 'permitida apenas na internet.' },
            ],
            gabarito: 'B',
            justificativa: 'Medicamentos que exigem prescrição só podem ter publicidade para PROFISSIONAIS DE SAÚDE habilitados a prescrever. É proibida ao público.',
            dificuldade: 'Fácil',
            competencia: 'Publicidade',
            banca: 'IADES',
            tags: ['publicidade', 'prescrição'],
          },
          {
            id: 'ce-q-12-10',
            enunciado: 'Para funcionar legalmente, uma indústria farmacêutica precisa de:',
            alternativas: [
              { letra: 'A', texto: 'apenas AFE.' },
              { letra: 'B', texto: 'apenas Licença Sanitária.' },
              { letra: 'C', texto: 'AFE e Licença Sanitária.' },
              { letra: 'D', texto: 'apenas registro dos produtos.' },
              { letra: 'E', texto: 'apenas CBPF.' },
            ],
            gabarito: 'C',
            justificativa: 'A indústria farmacêutica precisa de AMBAS: AFE (federal, ANVISA) e Licença Sanitária (estadual/municipal, VISA local). São complementares.',
            dificuldade: 'Fácil',
            competencia: 'AFE e Licença',
            banca: 'IADES',
            tags: ['AFE', 'licença', 'ambas'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-13',
      numero: 13,
      titulo: 'Decreto-Lei nº 986/1969 - Normas Básicas sobre Alimentos',
      conteudo: {
        resumo: `
## Resumo Rápido

### Objeto do Decreto-Lei

O **Decreto-Lei nº 986/1969** institui as **normas básicas sobre alimentos** no Brasil, estabelecendo definições, padrões e procedimentos para o controle sanitário de alimentos.

### Definições Fundamentais

| Termo | Definição |
|-------|-----------|
| **Alimento** | Substância destinada a fornecer elementos necessários à vida |
| **Matéria-prima alimentar** | Substância animal/vegetal utilizada na fabricação de alimentos |
| **Alimento in natura** | Sem processamento (estado natural) |
| **Alimento enriquecido** | Adição de nutrientes |
| **Aditivo** | Substância adicionada intencionalmente |

### Registro e Rotulagem

| Aspecto | Requisito |
|---------|-----------|
| **Registro** | Obrigatório para alimentos industrializados |
| **Rotulagem** | Denominação, composição, peso, validade, fabricante |
| **Prazo** | Até 5 anos (renovável) |

### Proibições

- Alimentos alterados, adulterados, falsificados
- Alimentos com aditivos proibidos
- Alimentos sem registro (quando exigido)
- Alimentos com rotulagem irregular

### Para IADES - Memorizar:
- Decreto-Lei 986/69 = lei geral de alimentos
- Registro = obrigatório para industrializados
- Rotulagem = identificação obrigatória
- Aditivo = substância adicionada intencionalmente
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Importância

O **Decreto-Lei nº 986/1969** é a **norma fundamental** sobre alimentos no Brasil. Estabelece os princípios básicos do controle sanitário de alimentos, sendo complementado por diversas resoluções da ANVISA.

#### Âmbito de Aplicação
Aplica-se a:
- Alimentos industrializados
- Matérias-primas alimentares
- Aditivos alimentares
- Embalagens de alimentos
- Propaganda de alimentos

### 2. Definições Legais (Art. 2º)

#### 2.1 Alimento

> "Toda substância ou mistura de substâncias, no estado sólido, líquido, pastoso ou qualquer outra forma adequada, destinadas a fornecer ao organismo humano os elementos normais à sua formação, manutenção e desenvolvimento."

#### 2.2 Matéria-Prima Alimentar

> "Toda substância de origem vegetal ou animal, em estado bruto, que para ser utilizada como alimento precisa sofrer tratamento e/ou transformação de natureza física, química ou biológica."

#### 2.3 Classificação dos Alimentos

| Classificação | Descrição | Exemplo |
|---------------|-----------|---------|
| **In natura** | Estado natural, sem processamento | Frutas, verduras |
| **De origem animal** | Provenientes de animais | Carnes, leite, ovos |
| **De origem vegetal** | Provenientes de plantas | Cereais, legumes |
| **Industrializado** | Submetido a processo industrial | Enlatados, congelados |
| **Enriquecido** | Com adição de nutrientes | Farinha enriquecida |
| **Dietético** | Para dietas especiais | Diet, light |
| **Para fins especiais** | Necessidades específicas | Infantis, atletas |

#### 2.4 Aditivo Alimentar

> "Substância intencionalmente adicionada ao alimento com a finalidade de conservar, intensificar ou modificar suas propriedades, desde que não prejudique seu valor nutritivo."

##### Classificação de Aditivos

| Tipo | Função | Exemplo |
|------|--------|---------|
| **Conservador** | Impedir deterioração | Benzoato de sódio |
| **Corante** | Conferir/intensificar cor | Carmim, urucum |
| **Aromatizante** | Conferir/intensificar aroma | Vanilina |
| **Edulcorante** | Conferir sabor doce | Aspartame, sacarina |
| **Estabilizante** | Manter características | Goma guar |
| **Antioxidante** | Retardar oxidação | BHT, vitamina C |

### 3. Registro de Alimentos (Art. 3º)

#### 3.1 Obrigatoriedade

Todo alimento **industrializado** só pode ser exposto ao consumo após:
1. **Registro** no órgão competente (MS/ANVISA)
2. **Publicação** no Diário Oficial

#### 3.2 Dispensa de Registro

Estão **dispensados** de registro:
- Alimentos in natura
- Alimentos de produção caseira
- Alimentos manipulados em estabelecimentos comerciais
- Alguns alimentos definidos pela ANVISA (notificação)

#### 3.3 Requisitos para Registro

| Requisito | Descrição |
|-----------|-----------|
| **Identificação** | Razão social, CNPJ, endereço |
| **Fórmula** | Composição qualitativa e quantitativa |
| **Processo** | Descrição do processo de fabricação |
| **Rotulagem** | Projeto de rótulo |
| **Análises** | Laudos laboratoriais |
| **Taxa** | Pagamento de taxa de registro |

#### 3.4 Validade do Registro

- **Prazo**: até 5 anos
- **Renovação**: obrigatória
- **Cancelamento**: por irregularidade ou a pedido

### 4. Rotulagem de Alimentos (Art. 10-12)

#### 4.1 Informações Obrigatórias

| Informação | Descrição |
|------------|-----------|
| **Denominação** | Nome do produto |
| **Lista de ingredientes** | Em ordem decrescente |
| **Peso líquido** | Quantidade |
| **Validade** | Data de fabricação e validade |
| **Fabricante** | Nome, endereço, CNPJ |
| **Lote** | Identificação do lote |
| **País de origem** | Se importado |
| **Informação nutricional** | Tabela nutricional |

#### 4.2 Proibições na Rotulagem

❌ Não pode:
- Induzir o consumidor a erro
- Atribuir propriedades medicinais
- Fazer alegações falsas
- Omitir informações relevantes
- Usar termos inadequados

### 5. Alimentos Impróprios (Art. 4º)

#### 5.1 Alimento Alterado

Sofreu modificações em suas características por causas naturais (físicas, químicas, biológicas).

**Exemplos:**
- Alimento mofado
- Alimento rancificado
- Alimento fermentado (não intencional)

#### 5.2 Alimento Adulterado

Sofreu modificação **fraudulenta** para mascarar ou alterar sua composição.

**Exemplos:**
- Adição de água ao leite
- Substituição de ingrediente nobre por inferior
- Alteração de prazo de validade

#### 5.3 Alimento Falsificado

Apresenta aparência de produto legítimo, mas não o é.

**Exemplos:**
- Produto com marca falsificada
- Produto que imita outro
- Origem falsa declarada

#### 5.4 Alimento Contaminado

Contém micro-organismos, substâncias químicas ou físicas em níveis prejudiciais.

**Exemplos:**
- Presença de Salmonella
- Resíduos de agrotóxicos acima do permitido
- Presença de corpos estranhos

### 6. Fiscalização e Penalidades (Art. 14-19)

#### 6.1 Órgãos Fiscalizadores

| Nível | Órgão |
|-------|-------|
| **Federal** | ANVISA, MAPA |
| **Estadual** | VISA estaduais |
| **Municipal** | VISA municipais |

#### 6.2 Competências Fiscais

- Inspecionar estabelecimentos
- Coletar amostras
- Analisar produtos
- Lavrar autos de infração
- Aplicar penalidades
- Apreender e interditar produtos

#### 6.3 Infrações

| Infração | Conduta |
|----------|---------|
| **Fabricar** | Produto sem registro |
| **Vender** | Alimento impróprio |
| **Distribuir** | Alimento sem rotulagem |
| **Importar** | Sem autorização |
| **Fraudar** | Adulterar, falsificar |

#### 6.4 Penalidades

1. Advertência
2. Multa
3. Apreensão do produto
4. Inutilização do produto
5. Interdição do estabelecimento
6. Suspensão de vendas
7. Cancelamento do registro
8. Intervenção

### 7. Padrões de Identidade e Qualidade (PIQ)

Os alimentos devem atender a **Padrões de Identidade e Qualidade** estabelecidos em regulamentos técnicos.

#### 7.1 Elementos do PIQ

| Elemento | Descrição |
|----------|-----------|
| **Definição** | O que é o produto |
| **Designação** | Como deve ser chamado |
| **Classificação** | Tipos e categorias |
| **Composição** | Ingredientes permitidos |
| **Requisitos** | Características obrigatórias |
| **Aditivos** | Quais são permitidos |
| **Contaminantes** | Limites máximos |
| **Rotulagem** | Regras específicas |

### 8. Aplicação na Vigilância Sanitária

#### 8.1 Atuação do Fiscal

Na fiscalização de alimentos, o fiscal deve verificar:

| Aspecto | O que verificar |
|---------|-----------------|
| **Registro** | Se está vigente (quando exigido) |
| **Rotulagem** | Informações obrigatórias |
| **Validade** | Produtos dentro do prazo |
| **Armazenamento** | Condições adequadas |
| **Manipulação** | Boas práticas |
| **Origem** | Procedência documentada |

#### 8.2 Integração com outras Normas

O Decreto-Lei 986/69 é complementado por:
- **RDC 259/2002**: Rotulagem geral
- **RDC 360/2003**: Informação nutricional
- **RDC 216/2004**: Boas práticas em alimentação
- **RDC 275/2002**: POPs e BPF
        `,

        pontosChave: [
          'Decreto-Lei 986/69: norma básica sobre alimentos no Brasil',
          'Alimento: substância que fornece elementos à vida',
          'Registro obrigatório para alimentos INDUSTRIALIZADOS',
          'Dispensa de registro: in natura, caseiro, manipulados',
          'Aditivo: substância adicionada INTENCIONALMENTE',
          'Rotulagem: denominação, ingredientes, peso, validade, fabricante',
          'Alimento ALTERADO: causas naturais (físico/químico/biológico)',
          'Alimento ADULTERADO: modificação FRAUDULENTA',
          'Alimento FALSIFICADO: aparência de outro produto',
          'Validade do registro: até 5 anos (renovável)',
        ],

        armadilhas: [
          {
            titulo: 'Confundir alterado com adulterado',
            descricao: 'ALTERADO = causas naturais (mofo, ranço). ADULTERADO = fraude intencional (água no leite).',
            dica: 'Adulterado tem DOLO (intenção de fraudar).',
          },
          {
            titulo: 'Achar que todo alimento precisa de registro',
            descricao: 'Alimentos in natura, caseiros e manipulados são DISPENSADOS de registro.',
            dica: 'Registro é para INDUSTRIALIZADOS.',
          },
          {
            titulo: 'Confundir aditivo com contaminante',
            descricao: 'Aditivo é adicionado INTENCIONALMENTE e é permitido. Contaminante é indesejado.',
            dica: 'Aditivo = proposital e legal. Contaminante = acidental e ilegal.',
          },
          {
            titulo: 'Esquecer a validade do registro',
            descricao: 'O registro tem prazo de até 5 ANOS e deve ser renovado.',
            dica: 'Registro vencido = produto irregular.',
          },
        ],

        mnemonicos: [
          {
            termo: 'AAF-C',
            significado: 'Alterado, Adulterado, Falsificado, Contaminado',
            frase: 'Alimentos impróprios: AAF-C (impróprio AAFaC)',
          },
          {
            termo: 'DIPVF',
            significado: 'Denominação, Ingredientes, Peso, Validade, Fabricante',
            frase: 'Rotulagem obrigatória: DIPVF (Diga ao Fiscal)',
          },
          {
            termo: 'IN-NA-TU-RA',
            significado: 'In natura não precisa de registro',
            frase: 'IN NATURA = dispensa registro (é NATURAl demais para registrar)',
          },
          {
            termo: '5A',
            significado: 'Registro vale até 5 Anos',
            frase: 'Registro de alimento: 5 Anos (cinco A de Alimento)',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-13-1',
            frente: 'O que regulamenta o Decreto-Lei nº 986/1969?',
            verso: 'Institui as **NORMAS BÁSICAS SOBRE ALIMENTOS** no Brasil.\n\nEstabelece:\n- Definições (alimento, aditivo, etc.)\n- Registro de alimentos\n- Rotulagem obrigatória\n- Classificação de alimentos impróprios\n- Fiscalização e penalidades',
            tags: ['DL 986', 'alimentos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-2',
            frente: 'Qual a diferença entre alimento ALTERADO e ADULTERADO?',
            verso: '**ALTERADO:**\n→ Causas NATURAIS\n→ Sem intenção\n→ Ex: mofo, ranço, fermentação\n\n**ADULTERADO:**\n→ Causas FRAUDULENTAS\n→ Com intenção de enganar\n→ Ex: água no leite, troca de ingrediente\n\nAdulterado tem DOLO!',
            tags: ['alterado', 'adulterado'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-3',
            frente: 'Quais alimentos são DISPENSADOS de registro?',
            verso: 'Dispensados de registro:\n\n- Alimentos **in natura**\n- Alimentos de **produção caseira**\n- Alimentos **manipulados** em estabelecimentos comerciais\n- Alguns alimentos definidos pela ANVISA\n\n**Obrigatório**: alimentos INDUSTRIALIZADOS',
            tags: ['registro', 'dispensa'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-4',
            frente: 'O que deve constar obrigatoriamente no RÓTULO de alimentos?',
            verso: '**DIPVF:**\n\n- **D**enominação do produto\n- **I**ngredientes (ordem decrescente)\n- **P**eso líquido\n- **V**alidade e fabricação\n- **F**abricante (nome, endereço, CNPJ)\n\nTambém: lote, origem, informação nutricional',
            tags: ['rotulagem', 'obrigatório'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-5',
            frente: 'O que é ADITIVO alimentar?',
            verso: 'Substância **intencionalmente adicionada** ao alimento para:\n\n- Conservar\n- Intensificar ou modificar propriedades\n- Melhorar características\n\n⚠️ Desde que NÃO prejudique o valor nutritivo.\n\nExemplos: conservantes, corantes, aromatizantes, edulcorantes.',
            tags: ['aditivo', 'conceito'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-6',
            frente: 'Qual o prazo de validade do REGISTRO de alimentos?',
            verso: '**Até 5 ANOS**\n\nCaracterísticas:\n- Renovação obrigatória\n- Cancelável por irregularidade\n- Cancelável a pedido\n- Publicação no Diário Oficial\n\nRegistro vencido = produto IRREGULAR',
            tags: ['registro', 'validade'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-7',
            frente: 'O que é alimento FALSIFICADO?',
            verso: 'Alimento que apresenta **aparência de produto legítimo**, mas NÃO é.\n\nExemplos:\n- Marca falsificada\n- Imitação de outro produto\n- Origem falsa declarada\n\nDiferente de adulterado (que é modificação do próprio produto).',
            tags: ['falsificado', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-13-8',
            frente: 'Quais são as categorias de alimentos IMPRÓPRIOS?',
            verso: '**AAF-C:**\n\n1. **A**lterado: causas naturais\n2. **A**dulterado: fraude\n3. **F**alsificado: aparência de outro\n4. **C**ontaminado: substâncias nocivas\n\nTodos são considerados IMPRÓPRIOS para consumo.',
            tags: ['impróprio', 'categorias'],
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
            id: 'ce-q-13-1',
            enunciado: 'O Decreto-Lei nº 986/1969 institui normas básicas sobre:',
            alternativas: [
              { letra: 'A', texto: 'medicamentos.' },
              { letra: 'B', texto: 'cosméticos.' },
              { letra: 'C', texto: 'alimentos.' },
              { letra: 'D', texto: 'saneantes.' },
              { letra: 'E', texto: 'correlatos.' },
            ],
            gabarito: 'C',
            justificativa: 'O Decreto-Lei nº 986/1969 institui as NORMAS BÁSICAS SOBRE ALIMENTOS, estabelecendo definições, padrões, registro e rotulagem.',
            dificuldade: 'Fácil',
            competencia: 'Objeto do DL 986/69',
            banca: 'IADES',
            tags: ['DL 986', 'objeto'],
          },
          {
            id: 'ce-q-13-2',
            enunciado: 'Alimento que sofreu modificação por causas naturais, como mofo ou fermentação indesejada, é classificado como:',
            alternativas: [
              { letra: 'A', texto: 'adulterado.' },
              { letra: 'B', texto: 'falsificado.' },
              { letra: 'C', texto: 'alterado.' },
              { letra: 'D', texto: 'fraudado.' },
              { letra: 'E', texto: 'contaminado.' },
            ],
            gabarito: 'C',
            justificativa: 'Alimento ALTERADO é aquele que sofreu modificações por causas NATURAIS (físicas, químicas ou biológicas), como mofo, ranço ou fermentação não intencional.',
            dificuldade: 'Média',
            competencia: 'Classificação de alimentos',
            banca: 'IADES',
            tags: ['alterado', 'classificação'],
          },
          {
            id: 'ce-q-13-3',
            enunciado: 'O registro de alimentos industrializados no órgão competente tem validade de:',
            alternativas: [
              { letra: 'A', texto: 'até 2 anos.' },
              { letra: 'B', texto: 'até 3 anos.' },
              { letra: 'C', texto: 'até 5 anos.' },
              { letra: 'D', texto: 'até 10 anos.' },
              { letra: 'E', texto: 'prazo indeterminado.' },
            ],
            gabarito: 'C',
            justificativa: 'O registro de alimentos tem validade de até 5 ANOS, devendo ser renovado após esse prazo.',
            dificuldade: 'Fácil',
            competencia: 'Validade do registro',
            banca: 'IADES',
            tags: ['registro', 'validade'],
          },
          {
            id: 'ce-q-13-4',
            enunciado: 'A substância intencionalmente adicionada ao alimento com finalidade de conservar ou modificar suas propriedades é denominada:',
            alternativas: [
              { letra: 'A', texto: 'contaminante.' },
              { letra: 'B', texto: 'aditivo.' },
              { letra: 'C', texto: 'impureza.' },
              { letra: 'D', texto: 'adjuvante.' },
              { letra: 'E', texto: 'coadjuvante.' },
            ],
            gabarito: 'B',
            justificativa: 'ADITIVO é substância intencionalmente adicionada ao alimento para conservar, intensificar ou modificar suas propriedades, sem prejudicar o valor nutritivo.',
            dificuldade: 'Fácil',
            competencia: 'Conceito de aditivo',
            banca: 'IADES',
            tags: ['aditivo', 'conceito'],
          },
          {
            id: 'ce-q-13-5',
            enunciado: 'Estão DISPENSADOS de registro os seguintes alimentos, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'alimentos in natura.' },
              { letra: 'B', texto: 'alimentos de produção caseira.' },
              { letra: 'C', texto: 'alimentos manipulados em restaurantes.' },
              { letra: 'D', texto: 'alimentos industrializados.' },
              { letra: 'E', texto: 'frutas e verduras.' },
            ],
            gabarito: 'D',
            justificativa: 'Alimentos INDUSTRIALIZADOS precisam de registro obrigatório. In natura, caseiros e manipulados são dispensados.',
            dificuldade: 'Média',
            competencia: 'Dispensa de registro',
            banca: 'IADES',
            tags: ['registro', 'dispensa'],
          },
          {
            id: 'ce-q-13-6',
            enunciado: 'A adição de água ao leite para aumentar seu volume caracteriza alimento:',
            alternativas: [
              { letra: 'A', texto: 'alterado.' },
              { letra: 'B', texto: 'adulterado.' },
              { letra: 'C', texto: 'contaminado.' },
              { letra: 'D', texto: 'enriquecido.' },
              { letra: 'E', texto: 'dietético.' },
            ],
            gabarito: 'B',
            justificativa: 'A adição de água ao leite é modificação FRAUDULENTA (com intenção de enganar), caracterizando alimento ADULTERADO.',
            dificuldade: 'Fácil',
            competencia: 'Alimento adulterado',
            banca: 'IADES',
            tags: ['adulterado', 'fraude'],
          },
          {
            id: 'ce-q-13-7',
            enunciado: 'São informações obrigatórias na rotulagem de alimentos:',
            alternativas: [
              { letra: 'A', texto: 'apenas o nome do produto.' },
              { letra: 'B', texto: 'denominação, ingredientes, peso líquido, validade e fabricante.' },
              { letra: 'C', texto: 'apenas a data de validade.' },
              { letra: 'D', texto: 'apenas o nome do fabricante.' },
              { letra: 'E', texto: 'apenas o código de barras.' },
            ],
            gabarito: 'B',
            justificativa: 'A rotulagem deve conter: denominação, lista de ingredientes, peso líquido, data de validade, identificação do fabricante, lote, entre outras informações.',
            dificuldade: 'Média',
            competencia: 'Rotulagem obrigatória',
            banca: 'IADES',
            tags: ['rotulagem', 'obrigatório'],
          },
          {
            id: 'ce-q-13-8',
            enunciado: 'O alimento que apresenta aparência de produto legítimo, mas não o é, é classificado como:',
            alternativas: [
              { letra: 'A', texto: 'alterado.' },
              { letra: 'B', texto: 'adulterado.' },
              { letra: 'C', texto: 'falsificado.' },
              { letra: 'D', texto: 'deteriorado.' },
              { letra: 'E', texto: 'contaminado.' },
            ],
            gabarito: 'C',
            justificativa: 'Alimento FALSIFICADO é aquele que apresenta aparência de produto legítimo, mas não o é (marca falsa, imitação, origem falsa).',
            dificuldade: 'Média',
            competencia: 'Alimento falsificado',
            banca: 'IADES',
            tags: ['falsificado', 'conceito'],
          },
          {
            id: 'ce-q-13-9',
            enunciado: 'De acordo com o Decreto-Lei nº 986/1969, considera-se alimento:',
            alternativas: [
              { letra: 'A', texto: 'apenas substâncias sólidas.' },
              { letra: 'B', texto: 'apenas substâncias líquidas.' },
              { letra: 'C', texto: 'toda substância destinada a fornecer elementos necessários à vida.' },
              { letra: 'D', texto: 'apenas produtos de origem animal.' },
              { letra: 'E', texto: 'apenas produtos industrializados.' },
            ],
            gabarito: 'C',
            justificativa: 'Alimento é toda substância ou mistura de substâncias, em qualquer estado, destinada a fornecer ao organismo humano os elementos necessários à sua formação, manutenção e desenvolvimento.',
            dificuldade: 'Fácil',
            competencia: 'Conceito de alimento',
            banca: 'IADES',
            tags: ['alimento', 'conceito'],
          },
          {
            id: 'ce-q-13-10',
            enunciado: 'A rotulagem de alimentos é proibida de:',
            alternativas: [
              { letra: 'A', texto: 'informar a composição do produto.' },
              { letra: 'B', texto: 'indicar o prazo de validade.' },
              { letra: 'C', texto: 'atribuir propriedades medicinais ao alimento.' },
              { letra: 'D', texto: 'informar o peso líquido.' },
              { letra: 'E', texto: 'identificar o fabricante.' },
            ],
            gabarito: 'C',
            justificativa: 'É PROIBIDO atribuir propriedades medicinais a alimentos, induzir o consumidor a erro, fazer alegações falsas ou omitir informações relevantes.',
            dificuldade: 'Média',
            competencia: 'Proibições na rotulagem',
            banca: 'IADES',
            tags: ['rotulagem', 'proibição'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-14',
      numero: 14,
      titulo: 'Lei nº 5.991/1973 - Controle Sanitário do Comércio de Drogas e Medicamentos',
      conteudo: {
        resumo: `
## Resumo Rápido

### Objeto da Lei

A **Lei nº 5.991/1973** dispõe sobre o **controle sanitário do comércio** de drogas, medicamentos, insumos farmacêuticos e correlatos.

### Conceitos Fundamentais

| Termo | Definição |
|-------|-----------|
| **Droga** | Substância ou matéria-prima com finalidade medicinal |
| **Medicamento** | Produto com finalidade curativa, profilática ou diagnóstica |
| **Insumo** | Droga ou matéria-prima para medicamento |
| **Correlato** | Aparelho, material de saúde |
| **Drogaria** | Dispensa medicamentos industrializados |
| **Farmácia** | Manipula e dispensa medicamentos |

### Estabelecimentos

| Tipo | Atividade | RT |
|------|-----------|-----|
| **Farmácia** | Manipulação + dispensação | Farmacêutico |
| **Drogaria** | Dispensação (industrializados) | Farmacêutico |
| **Distribuidora** | Distribuição por atacado | Farmacêutico |
| **Posto de Medicamentos** | Dispensação em localidade sem farmácia | Não é farmacêutico |

### Responsável Técnico

- Obrigatório: **farmacêutico** (farmácia, drogaria, distribuidora)
- Assistência farmacêutica ao público
- Responsabilidade técnica pelos produtos

### Para IADES - Memorizar:
- Farmácia = manipula + dispensa
- Drogaria = só dispensa (industrializados)
- RT de farmácia/drogaria = FARMACÊUTICO
- Dispensação de controlados = presença do farmacêutico
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Importância

A **Lei nº 5.991/1973** é a **norma fundamental** sobre o comércio de medicamentos no Brasil. Estabelece regras para funcionamento de estabelecimentos que comercializam drogas e medicamentos.

#### Âmbito de Aplicação

Aplica-se a estabelecimentos de:
- Dispensação de medicamentos
- Fabricação de medicamentos
- Distribuição de medicamentos
- Importação/exportação de medicamentos

### 2. Definições Legais (Art. 4º)

#### 2.1 Droga

> "Substância ou matéria-prima que tenha finalidade medicamentosa ou sanitária."

#### 2.2 Medicamento

> "Produto farmacêutico, tecnicamente obtido ou elaborado, com finalidade profilática, curativa, paliativa ou para fins de diagnóstico."

##### Classificação de Medicamentos

| Tipo | Descrição | Venda |
|------|-----------|-------|
| **Referência** | Original, primeiro do mercado | Com prescrição (geralmente) |
| **Genérico** | Bioequivalente, após patente | Com prescrição (geralmente) |
| **Similar** | Mesma substância, pode ter nome | Com prescrição (geralmente) |
| **Controlado** | Sujeito a controle especial | Prescrição + retenção |
| **OTC (Isento)** | Venda livre | Sem prescrição |

#### 2.3 Insumo Farmacêutico

> "Droga ou matéria-prima aditiva ou complementar de qualquer natureza, destinada a emprego em medicamentos."

#### 2.4 Correlato

> "Substância, produto, aparelho ou acessório não enquadrado como droga, medicamento ou insumo, cujo uso está ligado à defesa e proteção da saúde."

**Exemplos:**
- Seringas, agulhas
- Aparelhos de pressão
- Termômetros
- Lentes de contato

### 3. Estabelecimentos (Art. 5º)

#### 3.1 Farmácia

| Aspecto | Descrição |
|---------|-----------|
| **Atividade principal** | Manipulação de fórmulas magistrais/oficinais |
| **Outras atividades** | Dispensação de medicamentos industrializados |
| **RT** | Farmacêutico obrigatório |
| **Característica** | Pode ter laboratório de manipulação |

#### 3.2 Drogaria

| Aspecto | Descrição |
|---------|-----------|
| **Atividade** | Dispensação de medicamentos INDUSTRIALIZADOS |
| **Proibição** | Não pode manipular |
| **RT** | Farmacêutico obrigatório |
| **Característica** | Somente venda de produtos acabados |

#### 3.3 Distribuidora (Empresa Distribuidora)

| Aspecto | Descrição |
|---------|-----------|
| **Atividade** | Comércio por ATACADO |
| **Destinatário** | Farmácias, drogarias, hospitais |
| **RT** | Farmacêutico obrigatório |
| **Característica** | Não vende ao consumidor final |

#### 3.4 Posto de Medicamentos

| Aspecto | Descrição |
|---------|-----------|
| **Atividade** | Dispensação de medicamentos |
| **Local** | Onde NÃO há farmácia |
| **RT** | Não precisa ser farmacêutico |
| **Característica** | Medicamentos essenciais |

⚠️ **Diferença crucial**: Farmácia MANIPULA, Drogaria NÃO!

### 4. Responsabilidade Técnica (Art. 15)

#### 4.1 Obrigatoriedade

A direção técnica é **obrigatoriamente** de responsabilidade de:

| Estabelecimento | RT |
|-----------------|-----|
| Farmácia | Farmacêutico |
| Drogaria | Farmacêutico |
| Distribuidora | Farmacêutico |
| Hospital (farmácia) | Farmacêutico |
| Posto de medicamentos | Prático (onde permitido) |

#### 4.2 Atribuições do RT

- Assistência farmacêutica ao público
- Orientação sobre uso de medicamentos
- Responsabilidade pela guarda de produtos
- Cumprimento de normas sanitárias
- Supervisão de funcionários
- Comunicação ao CRF de irregularidades

#### 4.3 Presença Obrigatória

O farmacêutico deve estar presente:
- Durante todo o horário de funcionamento
- Na dispensação de medicamentos controlados
- Quando exigido por regulamento

### 5. Dispensação de Medicamentos

#### 5.1 Receita Médica

| Tipo | Medicamentos | Validade | Retenção |
|------|--------------|----------|----------|
| **Simples** | Antibióticos (1ª dispensação) | 10 dias | Parcial |
| **Especial (Branca)** | Lista C | 30 dias | Sim |
| **Azul (B)** | Psicotrópicos | 30 dias | Sim |
| **Amarela (A)** | Entorpecentes | 30 dias | Sim |
| **Isento** | MIPs/OTC | - | Não |

#### 5.2 Requisitos da Receita

| Elemento | Obrigatório |
|----------|-------------|
| Identificação do paciente | Sim |
| Nome do medicamento (DCB/genérico no SUS) | Sim |
| Posologia | Sim |
| Data | Sim |
| Assinatura do prescritor | Sim |
| CRM/registro profissional | Sim |
| Endereço do prescritor | Sim (controlados) |

### 6. Licença de Funcionamento (Art. 21-24)

#### 6.1 Requisitos

Para funcionar, o estabelecimento precisa de:

| Requisito | Órgão |
|-----------|-------|
| **Licença Sanitária** | VISA estadual/municipal |
| **Inscrição no CRF** | Conselho Regional de Farmácia |
| **Autorização Especial** | ANVISA (se controlados) |
| **RT** | Farmacêutico contratado |

#### 6.2 Condições para Licença

- Instalações adequadas
- Equipamentos necessários
- RT legalmente habilitado
- Cumprimento das normas sanitárias
- Localização adequada

### 7. Fiscalização (Art. 35-38)

#### 7.1 Competência

| Nível | Órgão |
|-------|-------|
| Federal | ANVISA |
| Estadual | VISA estadual |
| Municipal | VISA municipal |

#### 7.2 Atribuições dos Fiscais

- Verificar licença de funcionamento
- Verificar presença do RT
- Inspecionar instalações
- Verificar condições de armazenamento
- Coletar amostras
- Lavrar autos de infração
- Aplicar penalidades

### 8. Infrações e Penalidades

#### 8.1 Infrações Comuns

| Infração | Descrição |
|----------|-----------|
| Funcionar sem licença | Estabelecimento irregular |
| Funcionar sem RT | Ausência de farmacêutico |
| Vender sem receita | Medicamento de prescrição |
| Manipular em drogaria | Atividade proibida |
| Alterar preços | Prática comercial ilegal |

#### 8.2 Penalidades

1. Advertência
2. Multa
3. Apreensão de produtos
4. Inutilização de produtos
5. Suspensão de vendas
6. Suspensão de licença
7. Cancelamento de licença
8. Interdição do estabelecimento

### 9. Aplicação na Vigilância Sanitária

#### 9.1 Inspeção em Farmácias/Drogarias

O fiscal deve verificar:

| Item | Verificação |
|------|-------------|
| Licença | Vigente e exposta |
| RT | Presente e identificado |
| Instalações | Adequadas e limpas |
| Medicamentos | Validade, armazenamento |
| Controlados | Livro de registro, guarda |
| Receitas | Arquivo correto |
| Termolábeis | Refrigeração adequada |

#### 9.2 Documentação

- Licença sanitária
- Certidão do CRF
- Autorização especial (se aplicável)
- CMVS (Cadastro Municipal de Vigilância Sanitária)
- Balanços de controlados
        `,

        pontosChave: [
          'Lei 5.991/73: controle sanitário do comércio de medicamentos',
          'Farmácia: manipula + dispensa; Drogaria: só dispensa industrializados',
          'RT de farmácia/drogaria/distribuidora: FARMACÊUTICO obrigatório',
          'Posto de medicamentos: onde NÃO há farmácia, não precisa ser farmacêutico',
          'Correlato: aparelho ou acessório ligado à saúde (não é medicamento)',
          'Medicamento: produto farmacêutico com finalidade curativa/profilática/diagnóstica',
          'Droga: substância com finalidade medicamentosa ou sanitária',
          'Dispensação de controlados: presença obrigatória do farmacêutico',
          'Licença sanitária + RT = requisitos para funcionamento',
          'Manipulação em drogaria = PROIBIDO',
        ],

        armadilhas: [
          {
            titulo: 'Confundir farmácia com drogaria',
            descricao: 'FARMÁCIA manipula (fórmulas magistrais/oficinais) + dispensa. DROGARIA só dispensa industrializados.',
            dica: 'FARMÁCIA = FÁBRICA pequena (manipula). DROGARIA = DROGA pronta (só vende).',
          },
          {
            titulo: 'Achar que posto de medicamentos precisa de farmacêutico',
            descricao: 'Posto de medicamentos funciona onde NÃO há farmácia e o RT não precisa ser farmacêutico.',
            dica: 'Posto = localidades sem acesso a farmácia.',
          },
          {
            titulo: 'Confundir droga com medicamento',
            descricao: 'DROGA é substância/matéria-prima. MEDICAMENTO é produto elaborado pronto para uso.',
            dica: 'Droga é ingrediente. Medicamento é produto final.',
          },
          {
            titulo: 'Esquecer que correlatos estão na lei',
            descricao: 'Correlatos (aparelhos, materiais de saúde) também são regulados pela Lei 5.991/73.',
            dica: 'Seringa, termômetro, aparelho de pressão = correlatos.',
          },
        ],

        mnemonicos: [
          {
            termo: 'FarMANIpula',
            significado: 'Farmácia manipula',
            frase: 'FarMANIa = MANIPULA. Drogaria = só DROGAs prontas.',
          },
          {
            termo: 'DMIC',
            significado: 'Droga, Medicamento, Insumo, Correlato',
            frase: 'Produtos da Lei 5.991: DMIC (Dê-me seu MIC)',
          },
          {
            termo: 'RT-FARM',
            significado: 'RT de farmácia/drogaria é FARMacêutico',
            frase: 'RT-FARM: Responsável Técnico é FARMacêutico',
          },
          {
            termo: 'PO-SEM',
            significado: 'Posto = onde SEM farmácia',
            frase: 'Posto de Medicamentos: onde está SEM farmácia',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-14-1',
            frente: 'O que regulamenta a Lei nº 5.991/1973?',
            verso: 'Dispõe sobre o **CONTROLE SANITÁRIO DO COMÉRCIO** de:\n\n- Drogas\n- Medicamentos\n- Insumos farmacêuticos\n- Correlatos\n\nEstabelece regras para farmácias, drogarias, distribuidoras e postos de medicamentos.',
            tags: ['Lei 5991', 'objeto'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-2',
            frente: 'Qual a diferença entre FARMÁCIA e DROGARIA?',
            verso: '**FARMÁCIA:**\n→ MANIPULA fórmulas magistrais/oficinais\n→ Também dispensa industrializados\n→ Tem laboratório\n\n**DROGARIA:**\n→ Só DISPENSA industrializados\n→ NÃO pode manipular\n→ Apenas venda de prontos\n\nAmbas precisam de farmacêutico como RT!',
            tags: ['farmácia', 'drogaria'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-3',
            frente: 'Qual a diferença entre DROGA e MEDICAMENTO?',
            verso: '**DROGA:**\n→ Substância ou matéria-prima\n→ Finalidade medicamentosa/sanitária\n→ É o INGREDIENTE\n\n**MEDICAMENTO:**\n→ Produto farmacêutico elaborado\n→ Finalidade curativa/profilática/diagnóstica\n→ É o PRODUTO FINAL',
            tags: ['droga', 'medicamento'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-4',
            frente: 'O que são CORRELATOS?',
            verso: '**Correlatos** = substância, produto, aparelho ou acessório NÃO enquadrado como droga/medicamento/insumo, mas ligado à saúde.\n\nExemplos:\n- Seringas, agulhas\n- Aparelhos de pressão\n- Termômetros\n- Lentes de contato\n- Preservativos',
            tags: ['correlato', 'conceito'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-5',
            frente: 'Quem pode ser RT de farmácia/drogaria?',
            verso: '**FARMACÊUTICO** obrigatoriamente.\n\nO farmacêutico é RT em:\n- Farmácias\n- Drogarias\n- Distribuidoras\n- Farmácias hospitalares\n\nExceção: Posto de medicamentos (onde não há farmácia) pode ter outro responsável.',
            tags: ['RT', 'farmacêutico'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-6',
            frente: 'O que é POSTO DE MEDICAMENTOS?',
            verso: 'Estabelecimento para dispensação de medicamentos em localidades onde **NÃO existe farmácia**.\n\nCaracterísticas:\n- Medicamentos essenciais\n- Não precisa ser farmacêutico como RT\n- Para atender comunidades sem acesso\n- Autorização especial',
            tags: ['posto', 'medicamentos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-7',
            frente: 'Quais requisitos para funcionamento de farmácia/drogaria?',
            verso: 'Requisitos:\n\n1. **Licença Sanitária** (VISA)\n2. **RT farmacêutico** (inscrito no CRF)\n3. **Instalações adequadas**\n4. **Autorização Especial** (se trabalhar com controlados - ANVISA)\n5. **CMVS** (Cadastro Municipal)\n\nSem isso = funcionamento IRREGULAR!',
            tags: ['licença', 'requisitos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-14-8',
            frente: 'Qual a cor da receita para cada tipo de medicamento controlado?',
            verso: '**AMARELA (Lista A):**\n→ Entorpecentes\n\n**AZUL (Lista B):**\n→ Psicotrópicos\n\n**BRANCA ESPECIAL (Lista C):**\n→ Outros controlados\n\n**Simples (com retenção):**\n→ Antibióticos (1ª dispensação)',
            tags: ['receita', 'controlados'],
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
            id: 'ce-q-14-1',
            enunciado: 'A Lei nº 5.991/1973 dispõe sobre o controle sanitário do comércio de:',
            alternativas: [
              { letra: 'A', texto: 'alimentos e bebidas.' },
              { letra: 'B', texto: 'drogas, medicamentos, insumos farmacêuticos e correlatos.' },
              { letra: 'C', texto: 'cosméticos e perfumes.' },
              { letra: 'D', texto: 'agrotóxicos.' },
              { letra: 'E', texto: 'saneantes domissanitários.' },
            ],
            gabarito: 'B',
            justificativa: 'A Lei 5.991/1973 dispõe sobre o controle sanitário do comércio de DROGAS, MEDICAMENTOS, INSUMOS FARMACÊUTICOS e CORRELATOS.',
            dificuldade: 'Fácil',
            competencia: 'Objeto da Lei',
            banca: 'IADES',
            tags: ['Lei 5991', 'objeto'],
          },
          {
            id: 'ce-q-14-2',
            enunciado: 'A diferença fundamental entre farmácia e drogaria é que:',
            alternativas: [
              { letra: 'A', texto: 'a farmácia não precisa de farmacêutico.' },
              { letra: 'B', texto: 'a drogaria pode manipular medicamentos.' },
              { letra: 'C', texto: 'a farmácia pode manipular fórmulas, a drogaria não.' },
              { letra: 'D', texto: 'apenas a drogaria precisa de licença.' },
              { letra: 'E', texto: 'não há diferença entre elas.' },
            ],
            gabarito: 'C',
            justificativa: 'A diferença fundamental é que a FARMÁCIA pode MANIPULAR fórmulas magistrais e oficinais, enquanto a DROGARIA só pode dispensar medicamentos industrializados.',
            dificuldade: 'Fácil',
            competencia: 'Farmácia x Drogaria',
            banca: 'IADES',
            tags: ['farmácia', 'drogaria'],
          },
          {
            id: 'ce-q-14-3',
            enunciado: 'A responsabilidade técnica de farmácias e drogarias é obrigatoriamente de:',
            alternativas: [
              { letra: 'A', texto: 'médico.' },
              { letra: 'B', texto: 'enfermeiro.' },
              { letra: 'C', texto: 'farmacêutico.' },
              { letra: 'D', texto: 'técnico de farmácia.' },
              { letra: 'E', texto: 'qualquer profissional de saúde.' },
            ],
            gabarito: 'C',
            justificativa: 'A responsabilidade técnica de farmácias, drogarias e distribuidoras é OBRIGATORIAMENTE de FARMACÊUTICO legalmente habilitado.',
            dificuldade: 'Fácil',
            competencia: 'RT',
            banca: 'IADES',
            tags: ['RT', 'farmacêutico'],
          },
          {
            id: 'ce-q-14-4',
            enunciado: 'De acordo com a Lei nº 5.991/1973, considera-se DROGA:',
            alternativas: [
              { letra: 'A', texto: 'apenas substâncias ilícitas.' },
              { letra: 'B', texto: 'substância ou matéria-prima com finalidade medicamentosa ou sanitária.' },
              { letra: 'C', texto: 'produto farmacêutico acabado.' },
              { letra: 'D', texto: 'aparelho ou acessório de saúde.' },
              { letra: 'E', texto: 'apenas medicamentos controlados.' },
            ],
            gabarito: 'B',
            justificativa: 'DROGA é substância ou matéria-prima que tenha finalidade medicamentosa ou sanitária (não confundir com o sentido popular de drogas ilícitas).',
            dificuldade: 'Média',
            competencia: 'Conceito de droga',
            banca: 'IADES',
            tags: ['droga', 'conceito'],
          },
          {
            id: 'ce-q-14-5',
            enunciado: 'O posto de medicamentos caracteriza-se por:',
            alternativas: [
              { letra: 'A', texto: 'manipular fórmulas magistrais.' },
              { letra: 'B', texto: 'funcionar em localidades onde não há farmácia.' },
              { letra: 'C', texto: 'exigir farmacêutico como responsável técnico.' },
              { letra: 'D', texto: 'comercializar apenas cosméticos.' },
              { letra: 'E', texto: 'ser exclusivo para hospitais.' },
            ],
            gabarito: 'B',
            justificativa: 'O posto de medicamentos funciona em LOCALIDADES ONDE NÃO HÁ FARMÁCIA, dispensando medicamentos essenciais à população sem acesso.',
            dificuldade: 'Média',
            competencia: 'Posto de medicamentos',
            banca: 'IADES',
            tags: ['posto', 'característica'],
          },
          {
            id: 'ce-q-14-6',
            enunciado: 'Correlatos, segundo a Lei nº 5.991/1973, são:',
            alternativas: [
              { letra: 'A', texto: 'sinônimo de medicamentos.' },
              { letra: 'B', texto: 'substâncias para fabricação de drogas.' },
              { letra: 'C', texto: 'aparelhos e acessórios ligados à defesa e proteção da saúde.' },
              { letra: 'D', texto: 'apenas seringas descartáveis.' },
              { letra: 'E', texto: 'matérias-primas farmacêuticas.' },
            ],
            gabarito: 'C',
            justificativa: 'CORRELATOS são substâncias, produtos, aparelhos ou acessórios não enquadrados como droga/medicamento/insumo, cujo uso está ligado à defesa e proteção da saúde.',
            dificuldade: 'Média',
            competencia: 'Correlatos',
            banca: 'IADES',
            tags: ['correlato', 'conceito'],
          },
          {
            id: 'ce-q-14-7',
            enunciado: 'A manipulação de medicamentos em drogarias é:',
            alternativas: [
              { letra: 'A', texto: 'permitida com autorização especial.' },
              { letra: 'B', texto: 'permitida sem restrições.' },
              { letra: 'C', texto: 'proibida.' },
              { letra: 'D', texto: 'permitida apenas para controlados.' },
              { letra: 'E', texto: 'permitida em horário reduzido.' },
            ],
            gabarito: 'C',
            justificativa: 'A manipulação de medicamentos em drogarias é PROIBIDA. A drogaria só pode dispensar medicamentos industrializados. A manipulação é atividade exclusiva de farmácias.',
            dificuldade: 'Fácil',
            competencia: 'Proibição em drogaria',
            banca: 'IADES',
            tags: ['drogaria', 'manipulação'],
          },
          {
            id: 'ce-q-14-8',
            enunciado: 'Para funcionamento regular, uma farmácia deve possuir:',
            alternativas: [
              { letra: 'A', texto: 'apenas alvará de funcionamento.' },
              { letra: 'B', texto: 'licença sanitária e responsável técnico farmacêutico.' },
              { letra: 'C', texto: 'apenas registro no CRF.' },
              { letra: 'D', texto: 'autorização verbal da vigilância.' },
              { letra: 'E', texto: 'apenas CNPJ.' },
            ],
            gabarito: 'B',
            justificativa: 'Para funcionamento regular, a farmácia precisa de LICENÇA SANITÁRIA (VISA) e RESPONSÁVEL TÉCNICO FARMACÊUTICO (inscrito no CRF).',
            dificuldade: 'Média',
            competencia: 'Requisitos de funcionamento',
            banca: 'IADES',
            tags: ['licença', 'requisitos'],
          },
          {
            id: 'ce-q-14-9',
            enunciado: 'A empresa distribuidora de medicamentos:',
            alternativas: [
              { letra: 'A', texto: 'vende diretamente ao consumidor final.' },
              { letra: 'B', texto: 'não precisa de responsável técnico.' },
              { letra: 'C', texto: 'realiza comércio por atacado para estabelecimentos.' },
              { letra: 'D', texto: 'manipula medicamentos.' },
              { letra: 'E', texto: 'dispensa de licença sanitária.' },
            ],
            gabarito: 'C',
            justificativa: 'A empresa distribuidora realiza COMÉRCIO POR ATACADO, fornecendo para farmácias, drogarias e hospitais. Não vende ao consumidor final e precisa de farmacêutico como RT.',
            dificuldade: 'Média',
            competencia: 'Distribuidora',
            banca: 'IADES',
            tags: ['distribuidora', 'atacado'],
          },
          {
            id: 'ce-q-14-10',
            enunciado: 'O produto farmacêutico tecnicamente elaborado com finalidade profilática, curativa ou para fins de diagnóstico é denominado:',
            alternativas: [
              { letra: 'A', texto: 'droga.' },
              { letra: 'B', texto: 'insumo.' },
              { letra: 'C', texto: 'correlato.' },
              { letra: 'D', texto: 'medicamento.' },
              { letra: 'E', texto: 'cosmético.' },
            ],
            gabarito: 'D',
            justificativa: 'MEDICAMENTO é o produto farmacêutico tecnicamente obtido ou elaborado, com finalidade profilática, curativa, paliativa ou para fins de diagnóstico.',
            dificuldade: 'Fácil',
            competencia: 'Conceito de medicamento',
            banca: 'IADES',
            tags: ['medicamento', 'conceito'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-15',
      numero: 15,
      titulo: 'Decreto Estadual nº 6.906/2009 - Saúde do Trabalhador em Goiás',
      conteudo: {
        resumo: `
## Resumo Rápido

### Objeto do Decreto

O **Decreto Estadual nº 6.906/2009** regulamenta a competência da **Secretaria de Estado da Saúde (SES-GO)** quanto à **saúde do trabalhador** no Estado de Goiás.

### Conceito de Saúde do Trabalhador

Conjunto de atividades que visa à **promoção e proteção da saúde** dos trabalhadores, bem como a **recuperação e reabilitação** daqueles submetidos aos riscos e agravos das condições de trabalho.

### Competências da SES-GO

| Competência | Descrição |
|-------------|-----------|
| **Vigilância** | Fiscalizar ambientes e processos de trabalho |
| **Informação** | Manter sistema de informação sobre saúde do trabalhador |
| **Atenção** | Garantir atendimento aos trabalhadores acidentados/doentes |
| **Participação** | Articular com sindicatos e representantes |

### Ações de Vigilância

- Inspeção em ambientes de trabalho
- Avaliação de riscos ocupacionais
- Investigação de acidentes e doenças
- Notificação compulsória de agravos

### Para IADES - Memorizar:
- CEREST: Centro de Referência em Saúde do Trabalhador
- SINAN: Sistema de Informação de Agravos de Notificação
- RENAST: Rede Nacional de Atenção à Saúde do Trabalhador
- Notificação de acidentes de trabalho é OBRIGATÓRIA
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Fundamentação Legal

#### 1.1 Base Constitucional

A **saúde do trabalhador** está prevista na Constituição Federal:

**Art. 200, CF/88:**
> "Ao sistema único de saúde compete, além de outras atribuições, nos termos da lei:
> II - executar as ações de vigilância sanitária e epidemiológica, bem como as de **saúde do trabalhador**;"

#### 1.2 Lei Orgânica da Saúde (Lei 8.080/90)

**Art. 6º, §3º:** Define saúde do trabalhador como conjunto de atividades que se destina, através das ações de vigilância epidemiológica e sanitária, à promoção e proteção da saúde dos trabalhadores.

#### 1.3 O Decreto Estadual nº 6.906/2009

Regulamenta especificamente as competências da **SES-GO** na área de saúde do trabalhador, estabelecendo:
- Atribuições do Estado
- Instrumentos de vigilância
- Sistema de informação
- Articulação institucional

### 2. Conceito de Saúde do Trabalhador

#### 2.1 Definição Legal

A **saúde do trabalhador** compreende um conjunto de atividades que visa:

| Dimensão | Objetivo |
|----------|----------|
| **PROMOÇÃO** | Melhorar as condições de trabalho |
| **PROTEÇÃO** | Prevenir riscos e doenças ocupacionais |
| **RECUPERAÇÃO** | Tratar trabalhadores doentes/acidentados |
| **REABILITAÇÃO** | Reinserir no trabalho |

#### 2.2 Abrangência

Aplica-se a **todos os trabalhadores**, independentemente de:
- Vínculo formal ou informal
- Setor público ou privado
- Zona urbana ou rural
- Regime CLT ou estatutário

### 3. Competências da SES-GO

#### 3.1 Vigilância em Saúde do Trabalhador

##### a) Fiscalização de Ambientes de Trabalho
- Inspeção em estabelecimentos
- Avaliação de condições ambientais
- Verificação de equipamentos de proteção
- Análise de processos produtivos

##### b) Investigação de Agravos
- Acidentes de trabalho típicos
- Acidentes de trajeto
- Doenças ocupacionais
- Mortes relacionadas ao trabalho

##### c) Análise de Riscos Ocupacionais

| Tipo de Risco | Exemplos |
|---------------|----------|
| **Físicos** | Ruído, vibração, radiação, temperaturas extremas |
| **Químicos** | Gases, poeiras, vapores, produtos tóxicos |
| **Biológicos** | Vírus, bactérias, fungos, parasitas |
| **Ergonômicos** | Postura, repetitividade, esforço físico |
| **Acidentes** | Máquinas, eletricidade, incêndio |

#### 3.2 Sistema de Informação

A SES-GO deve manter e alimentar:

##### a) SINAN (Sistema de Informação de Agravos de Notificação)
- Notificação compulsória de agravos
- Dados epidemiológicos
- Perfil de morbidade ocupacional

##### b) Agravos de Notificação Compulsória

| Agravo | Código CID |
|--------|------------|
| Acidente de trabalho grave | - |
| Acidente com exposição a material biológico | - |
| Acidente de trabalho fatal | - |
| Intoxicação exógena | - |
| Dermatoses ocupacionais | - |
| LER/DORT | - |
| Pneumoconioses | - |
| Perda auditiva induzida por ruído (PAIR) | - |
| Câncer relacionado ao trabalho | - |
| Transtornos mentais relacionados ao trabalho | - |

⚠️ **IADES cobra:** A notificação é OBRIGATÓRIA e deve ser feita mesmo em suspeita!

#### 3.3 Atenção à Saúde do Trabalhador

##### a) Rede de Atenção
- **Atenção Básica**: porta de entrada, identificação de casos
- **CEREST**: referência especializada
- **Urgência/Emergência**: atendimento de acidentes
- **Hospitais**: casos de maior complexidade

##### b) CEREST (Centro de Referência em Saúde do Trabalhador)

| Função | Descrição |
|--------|-----------|
| **Assistência** | Atendimento especializado |
| **Apoio técnico** | Suporte à rede de saúde |
| **Vigilância** | Ações de fiscalização |
| **Educação** | Capacitação de profissionais |
| **Informação** | Dados epidemiológicos |

#### 3.4 Articulação Institucional

A SES-GO deve articular-se com:

| Órgão/Instituição | Objetivo |
|-------------------|----------|
| **Ministério do Trabalho** | Fiscalização complementar |
| **INSS** | Benefícios previdenciários |
| **Sindicatos** | Participação social |
| **Ministério Público** | Ações de responsabilização |
| **Municípios** | Descentralização de ações |

### 4. Instrumentos de Vigilância

#### 4.1 Inspeção Sanitária em Ambientes de Trabalho

##### Procedimentos:
1. Planejamento da inspeção
2. Verificação de documentos (PPRA, PCMSO, CIPA)
3. Inspeção física do ambiente
4. Entrevista com trabalhadores
5. Coleta de amostras (se necessário)
6. Elaboração de relatório
7. Notificação de irregularidades
8. Aplicação de medidas (se cabível)

##### Documentos a Verificar:

| Documento | Significado |
|-----------|-------------|
| **PPRA** | Programa de Prevenção de Riscos Ambientais |
| **PCMSO** | Programa de Controle Médico de Saúde Ocupacional |
| **CIPA** | Comissão Interna de Prevenção de Acidentes |
| **ASO** | Atestado de Saúde Ocupacional |
| **CAT** | Comunicação de Acidente de Trabalho |

#### 4.2 Investigação de Acidentes

##### Objetivos:
- Identificar causas básicas e imediatas
- Propor medidas preventivas
- Responsabilizar, se for o caso
- Alimentar sistema de informação

##### Etapas:
1. Notificação do acidente
2. Coleta de informações
3. Análise do local
4. Entrevistas
5. Análise de causas
6. Relatório final
7. Recomendações

### 5. Doenças Ocupacionais

#### 5.1 Conceito

**Doença ocupacional** é aquela produzida ou desencadeada pelo exercício do trabalho peculiar a determinada atividade.

#### 5.2 Tipos

| Tipo | Definição | Exemplo |
|------|-----------|---------|
| **Doença Profissional** | Inerente à atividade | Silicose em mineiros |
| **Doença do Trabalho** | Adquirida pelas condições | DORT em digitadores |

#### 5.3 Principais Doenças

| Doença | Agente/Causa |
|--------|--------------|
| **LER/DORT** | Movimentos repetitivos |
| **PAIR** | Exposição a ruído |
| **Silicose** | Poeira de sílica |
| **Asbestose** | Amianto |
| **Dermatoses** | Agentes químicos |
| **Intoxicações** | Substâncias tóxicas |
| **Transtornos mentais** | Estresse, assédio |

### 6. A RENAST

#### 6.1 Conceito

A **RENAST** (Rede Nacional de Atenção Integral à Saúde do Trabalhador) é a estrutura do SUS responsável pela atenção à saúde do trabalhador.

#### 6.2 Componentes

| Componente | Função |
|------------|--------|
| **CEREST** | Polo de referência |
| **Atenção Básica** | Porta de entrada |
| **Rede de urgência** | Acidentes |
| **VISA** | Vigilância |
| **SINAN** | Informação |

#### 6.3 Em Goiás

- CEREST Estadual coordena a rede
- CEREST Regionais apoiam municípios
- Articulação com VISA estadual e municipais

### 7. Portaria SES-GO nº 34/2006

Complementando o Decreto 6.906/2009, a **Portaria nº 34/2006** torna compulsória a notificação de agravos à saúde do trabalhador em Goiás.

#### Agravos de Notificação Compulsória em Goiás:
- Acidente de trabalho fatal
- Acidente de trabalho grave
- Acidente com material biológico
- Intoxicação por agrotóxicos
- LER/DORT
- PAIR
- Pneumoconioses
- Dermatoses ocupacionais
- Câncer relacionado ao trabalho
- Transtornos mentais do trabalho

### 8. Aplicação Prática para o Fiscal

#### 8.1 Competências do Fiscal de Saúde Pública

Na área de saúde do trabalhador, o fiscal pode:

| Ação | Descrição |
|------|-----------|
| **Inspecionar** | Verificar condições de trabalho |
| **Notificar** | Comunicar irregularidades |
| **Orientar** | Educar sobre prevenção |
| **Interditar** | Em caso de risco grave e iminente |
| **Coletar** | Amostras para análise |
| **Investigar** | Acidentes e doenças |

#### 8.2 Integração com Vigilância Sanitária

A saúde do trabalhador está integrada à VISA:
- Estabelecimentos de saúde: condições de trabalho dos profissionais
- Indústrias: riscos ocupacionais
- Hospitais: exposição a agentes biológicos
- Laboratórios: manipulação de substâncias

### 9. Quadro Resumo das Siglas

| Sigla | Significado |
|-------|-------------|
| **CEREST** | Centro de Referência em Saúde do Trabalhador |
| **RENAST** | Rede Nacional de Atenção à Saúde do Trabalhador |
| **SINAN** | Sistema de Informação de Agravos de Notificação |
| **PPRA** | Programa de Prevenção de Riscos Ambientais |
| **PCMSO** | Programa de Controle Médico de Saúde Ocupacional |
| **CIPA** | Comissão Interna de Prevenção de Acidentes |
| **CAT** | Comunicação de Acidente de Trabalho |
| **ASO** | Atestado de Saúde Ocupacional |
| **LER** | Lesão por Esforço Repetitivo |
| **DORT** | Distúrbio Osteomuscular Relacionado ao Trabalho |
| **PAIR** | Perda Auditiva Induzida por Ruído |
        `,

        pontosChave: [
          'Decreto 6.906/2009: regulamenta competência da SES-GO em saúde do trabalhador',
          'Saúde do trabalhador: promoção, proteção, recuperação e reabilitação',
          'CEREST: Centro de Referência em Saúde do Trabalhador',
          'RENAST: Rede Nacional de Atenção à Saúde do Trabalhador',
          'SINAN: sistema de notificação de agravos (obrigatório)',
          'Riscos ocupacionais: físicos, químicos, biológicos, ergonômicos, acidentes',
          'PPRA e PCMSO: documentos obrigatórios das empresas',
          'Notificação compulsória: acidente de trabalho, doenças ocupacionais',
          'LER/DORT, PAIR, silicose: doenças ocupacionais frequentes',
          'Portaria 34/2006 GO: lista de agravos de notificação compulsória',
        ],

        armadilhas: [
          {
            titulo: 'Confundir doença profissional com doença do trabalho',
            descricao: 'Doença PROFISSIONAL é inerente à atividade (ex: silicose em mineradores). Doença DO TRABALHO é adquirida pelas condições de trabalho.',
            dica: 'Profissional = própria da profissão. Do trabalho = pelas condições.',
          },
          {
            titulo: 'Achar que notificação é apenas para casos confirmados',
            descricao: 'A notificação deve ser feita mesmo em casos SUSPEITOS. Não precisa esperar confirmação.',
            dica: 'Suspeita já gera obrigação de notificar.',
          },
          {
            titulo: 'Confundir CAT com notificação no SINAN',
            descricao: 'CAT é documento previdenciário (INSS). SINAN é sistema epidemiológico (SUS). Ambos são obrigatórios, mas para fins diferentes.',
            dica: 'CAT = INSS (benefícios). SINAN = SUS (vigilância).',
          },
          {
            titulo: 'Pensar que saúde do trabalhador é só do Ministério do Trabalho',
            descricao: 'Saúde do trabalhador é competência do SUS (Art. 200, CF). O Ministério do Trabalho atua na parte trabalhista (NRs), mas a saúde é do SUS.',
            dica: 'SAÚDE do trabalhador = SUS. SEGURANÇA do trabalho = MT.',
          },
        ],

        mnemonicos: [
          {
            termo: 'PPRA-PCMSO',
            significado: 'Programas obrigatórios das empresas',
            frase: 'PPRA = Prevenção (ambientes). PCMSO = Controle Médico (exames).',
          },
          {
            termo: 'FQBEA',
            significado: 'Físicos, Químicos, Biológicos, Ergonômicos, Acidentes',
            frase: 'Os 5 tipos de riscos ocupacionais: FQBEA',
          },
          {
            termo: 'CEREST',
            significado: 'Centro de Referência em Saúde do Trabalhador',
            frase: 'No CEREST, o trabalhador encontra REST(auro) para sua saúde',
          },
          {
            termo: 'PRR',
            significado: 'Promoção, Recuperação, Reabilitação',
            frase: 'As 3 dimensões da saúde do trabalhador: PRR (mais Proteção)',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-15-1',
            frente: 'O que regulamenta o Decreto Estadual nº 6.906/2009?',
            verso: 'Regulamenta a competência da **SES-GO** (Secretaria de Estado da Saúde de Goiás) quanto à **saúde do trabalhador**.\n\nEstabelece:\n- Atribuições do Estado\n- Instrumentos de vigilância\n- Sistema de informação\n- Articulação institucional',
            tags: ['Decreto 6.906', 'saúde do trabalhador'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-2',
            frente: 'O que é o CEREST?',
            verso: '**CEREST** = Centro de Referência em Saúde do Trabalhador\n\nFunções:\n- Assistência especializada\n- Apoio técnico à rede\n- Vigilância em saúde do trabalhador\n- Educação permanente\n- Informação epidemiológica\n\nIntegra a RENAST.',
            tags: ['CEREST', 'conceito'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-3',
            frente: 'Quais são os tipos de RISCOS OCUPACIONAIS?',
            verso: '**FQBEA:**\n\n1. **F**ísicos: ruído, vibração, radiação\n2. **Q**uímicos: gases, poeiras, vapores\n3. **B**iológicos: vírus, bactérias, fungos\n4. **E**rgonômicos: postura, repetitividade\n5. **A**cidentes: máquinas, eletricidade',
            tags: ['riscos', 'ocupacionais'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-4',
            frente: 'Qual a diferença entre PPRA e PCMSO?',
            verso: '**PPRA** = Programa de Prevenção de Riscos Ambientais\n→ Foco no AMBIENTE de trabalho\n→ Identifica e controla riscos\n\n**PCMSO** = Programa de Controle Médico de Saúde Ocupacional\n→ Foco no TRABALHADOR\n→ Exames médicos (admissional, periódico, etc.)\n\nAmbos são obrigatórios!',
            tags: ['PPRA', 'PCMSO'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-5',
            frente: 'Qual a diferença entre doença PROFISSIONAL e doença DO TRABALHO?',
            verso: '**Doença PROFISSIONAL:**\n→ Inerente à atividade\n→ Peculiar à profissão\n→ Ex: silicose em mineradores\n\n**Doença DO TRABALHO:**\n→ Adquirida pelas condições\n→ Não é específica da profissão\n→ Ex: DORT em digitadores\n\nAmbas são equiparadas a acidente de trabalho!',
            tags: ['doença ocupacional', 'diferença'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-6',
            frente: 'O que é a RENAST?',
            verso: '**RENAST** = Rede Nacional de Atenção Integral à Saúde do Trabalhador\n\nEstrutura do SUS para saúde do trabalhador.\n\nComponentes:\n- CEREST (referência)\n- Atenção Básica (porta de entrada)\n- Urgência/Emergência\n- Vigilância em Saúde\n- SINAN (informação)',
            tags: ['RENAST', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-7',
            frente: 'O que é CAT e para que serve?',
            verso: '**CAT** = Comunicação de Acidente de Trabalho\n\n**Finalidade:**\n→ Documento previdenciário (INSS)\n→ Garante direitos do trabalhador\n→ Benefícios acidentários\n\n**Prazo:** Até o 1º dia útil após o acidente\n\n⚠️ Não confundir com notificação no SINAN (vigilância epidemiológica).',
            tags: ['CAT', 'acidente'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-15-8',
            frente: 'Quais agravos à saúde do trabalhador são de notificação compulsória em Goiás?',
            verso: 'Portaria SES-GO nº 34/2006:\n\n- Acidente de trabalho fatal e grave\n- Acidente com material biológico\n- Intoxicação por agrotóxicos\n- LER/DORT\n- PAIR\n- Pneumoconioses\n- Dermatoses ocupacionais\n- Câncer relacionado ao trabalho\n- Transtornos mentais do trabalho\n\n⚠️ Notificar mesmo em SUSPEITA!',
            tags: ['notificação', 'agravos'],
            dificuldade: 'dificil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'ce-q-15-1',
            enunciado: 'O Decreto Estadual nº 6.906/2009 regulamenta a competência da SES-GO quanto:',
            alternativas: [
              { letra: 'A', texto: 'à vigilância sanitária de alimentos.' },
              { letra: 'B', texto: 'ao controle de zoonoses.' },
              { letra: 'C', texto: 'à saúde do trabalhador.' },
              { letra: 'D', texto: 'à vigilância ambiental.' },
              { letra: 'E', texto: 'ao controle de medicamentos.' },
            ],
            gabarito: 'C',
            justificativa: 'O Decreto Estadual nº 6.906/2009 regulamenta especificamente a competência da SES-GO na área de SAÚDE DO TRABALHADOR.',
            dificuldade: 'Fácil',
            competencia: 'Objeto do Decreto',
            banca: 'IADES',
            tags: ['Decreto 6.906', 'objeto'],
          },
          {
            id: 'ce-q-15-2',
            enunciado: 'O Centro de Referência em Saúde do Trabalhador (CEREST) tem como função:',
            alternativas: [
              { letra: 'A', texto: 'substituir os hospitais no atendimento de acidentes.' },
              { letra: 'B', texto: 'prestar assistência especializada e apoio técnico à rede.' },
              { letra: 'C', texto: 'apenas emitir CAT.' },
              { letra: 'D', texto: 'fiscalizar exclusivamente indústrias.' },
              { letra: 'E', texto: 'conceder benefícios previdenciários.' },
            ],
            gabarito: 'B',
            justificativa: 'O CEREST presta ASSISTÊNCIA ESPECIALIZADA, oferece APOIO TÉCNICO à rede de saúde, realiza vigilância, educação permanente e produz informação epidemiológica.',
            dificuldade: 'Média',
            competencia: 'CEREST',
            banca: 'IADES',
            tags: ['CEREST', 'funções'],
          },
          {
            id: 'ce-q-15-3',
            enunciado: 'São tipos de riscos ocupacionais, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'físicos.' },
              { letra: 'B', texto: 'químicos.' },
              { letra: 'C', texto: 'biológicos.' },
              { letra: 'D', texto: 'jurídicos.' },
              { letra: 'E', texto: 'ergonômicos.' },
            ],
            gabarito: 'D',
            justificativa: 'Os riscos ocupacionais são: Físicos, Químicos, Biológicos, Ergonômicos e de Acidentes. Risco JURÍDICO não é categoria de risco ocupacional.',
            dificuldade: 'Fácil',
            competencia: 'Riscos ocupacionais',
            banca: 'IADES',
            tags: ['riscos', 'classificação'],
          },
          {
            id: 'ce-q-15-4',
            enunciado: 'A doença produzida ou desencadeada pelo exercício do trabalho peculiar a determinada atividade é denominada:',
            alternativas: [
              { letra: 'A', texto: 'doença comum.' },
              { letra: 'B', texto: 'doença profissional.' },
              { letra: 'C', texto: 'doença epidêmica.' },
              { letra: 'D', texto: 'doença endêmica.' },
              { letra: 'E', texto: 'doença crônica.' },
            ],
            gabarito: 'B',
            justificativa: 'DOENÇA PROFISSIONAL é aquela produzida ou desencadeada pelo exercício do trabalho peculiar (inerente) a determinada atividade. É diferente de doença DO TRABALHO (condições de trabalho).',
            dificuldade: 'Média',
            competencia: 'Doença ocupacional',
            banca: 'IADES',
            tags: ['doença profissional', 'conceito'],
          },
          {
            id: 'ce-q-15-5',
            enunciado: 'O PPRA (Programa de Prevenção de Riscos Ambientais) tem como foco:',
            alternativas: [
              { letra: 'A', texto: 'os exames médicos dos trabalhadores.' },
              { letra: 'B', texto: 'os acidentes de trajeto.' },
              { letra: 'C', texto: 'o ambiente de trabalho e seus riscos.' },
              { letra: 'D', texto: 'a concessão de benefícios.' },
              { letra: 'E', texto: 'a aposentadoria especial.' },
            ],
            gabarito: 'C',
            justificativa: 'O PPRA foca no AMBIENTE de trabalho, identificando e controlando riscos ambientais. O PCMSO foca no trabalhador (exames médicos).',
            dificuldade: 'Média',
            competencia: 'PPRA',
            banca: 'IADES',
            tags: ['PPRA', 'ambiente'],
          },
          {
            id: 'ce-q-15-6',
            enunciado: 'A notificação de agravos à saúde do trabalhador deve ser realizada:',
            alternativas: [
              { letra: 'A', texto: 'somente após confirmação laboratorial.' },
              { letra: 'B', texto: 'apenas em casos fatais.' },
              { letra: 'C', texto: 'mesmo em casos suspeitos.' },
              { letra: 'D', texto: 'somente pelo empregador.' },
              { letra: 'E', texto: 'apenas no INSS.' },
            ],
            gabarito: 'C',
            justificativa: 'A notificação compulsória deve ser realizada MESMO EM CASOS SUSPEITOS, não precisa aguardar confirmação. Qualquer profissional de saúde pode notificar.',
            dificuldade: 'Média',
            competencia: 'Notificação',
            banca: 'IADES',
            tags: ['notificação', 'suspeita'],
          },
          {
            id: 'ce-q-15-7',
            enunciado: 'A RENAST (Rede Nacional de Atenção Integral à Saúde do Trabalhador) integra o:',
            alternativas: [
              { letra: 'A', texto: 'Ministério do Trabalho.' },
              { letra: 'B', texto: 'INSS.' },
              { letra: 'C', texto: 'Sistema Único de Saúde (SUS).' },
              { letra: 'D', texto: 'Sistema S.' },
              { letra: 'E', texto: 'Ministério da Economia.' },
            ],
            gabarito: 'C',
            justificativa: 'A RENAST é a estrutura do SUS responsável pela atenção à saúde do trabalhador, conforme art. 200, II, da CF/88.',
            dificuldade: 'Fácil',
            competencia: 'RENAST',
            banca: 'IADES',
            tags: ['RENAST', 'SUS'],
          },
          {
            id: 'ce-q-15-8',
            enunciado: 'A CAT (Comunicação de Acidente de Trabalho) é documento:',
            alternativas: [
              { letra: 'A', texto: 'de vigilância epidemiológica.' },
              { letra: 'B', texto: 'previdenciário, destinado ao INSS.' },
              { letra: 'C', texto: 'trabalhista, destinado ao sindicato.' },
              { letra: 'D', texto: 'de identificação do trabalhador.' },
              { letra: 'E', texto: 'exclusivo para acidentes fatais.' },
            ],
            gabarito: 'B',
            justificativa: 'A CAT é documento PREVIDENCIÁRIO destinado ao INSS, que garante os direitos do trabalhador acidentado aos benefícios acidentários.',
            dificuldade: 'Média',
            competencia: 'CAT',
            banca: 'IADES',
            tags: ['CAT', 'previdenciário'],
          },
          {
            id: 'ce-q-15-9',
            enunciado: 'A Portaria SES-GO nº 34/2006 torna compulsória a notificação de agravos à saúde do trabalhador. São agravos de notificação compulsória em Goiás:',
            alternativas: [
              { letra: 'A', texto: 'apenas acidentes fatais.' },
              { letra: 'B', texto: 'LER/DORT, PAIR, pneumoconioses, entre outros.' },
              { letra: 'C', texto: 'apenas doenças infecciosas.' },
              { letra: 'D', texto: 'apenas acidentes típicos.' },
              { letra: 'E', texto: 'nenhum, pois não há lista específica.' },
            ],
            gabarito: 'B',
            justificativa: 'A Portaria 34/2006 lista diversos agravos, incluindo: LER/DORT, PAIR, pneumoconioses, dermatoses, intoxicações, acidentes graves, câncer ocupacional, transtornos mentais.',
            dificuldade: 'Média',
            competencia: 'Notificação compulsória GO',
            banca: 'IADES',
            tags: ['Portaria 34', 'notificação'],
          },
          {
            id: 'ce-q-15-10',
            enunciado: 'A saúde do trabalhador compreende atividades de:',
            alternativas: [
              { letra: 'A', texto: 'apenas promoção da saúde.' },
              { letra: 'B', texto: 'apenas recuperação e reabilitação.' },
              { letra: 'C', texto: 'promoção, proteção, recuperação e reabilitação.' },
              { letra: 'D', texto: 'apenas vigilância.' },
              { letra: 'E', texto: 'apenas fiscalização.' },
            ],
            gabarito: 'C',
            justificativa: 'A saúde do trabalhador compreende o conjunto de atividades de PROMOÇÃO, PROTEÇÃO, RECUPERAÇÃO e REABILITAÇÃO da saúde dos trabalhadores.',
            dificuldade: 'Fácil',
            competencia: 'Conceito',
            banca: 'IADES',
            tags: ['saúde do trabalhador', 'conceito'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-16',
      numero: 16,
      titulo: 'Portaria SES-GO nº 2145/2024 - Licenciamento Sanitário de Abastecimento de Água',
      conteudo: {
        resumo: `
## Resumo Rápido

### Objeto da Portaria

A **Portaria SES-GO nº 2145/2024** dispõe sobre a **regulamentação e o licenciamento sanitário** para os prestadores de serviços de **abastecimento de água para consumo humano** no Estado de Goiás.

### Âmbito de Aplicação

| Tipo de Prestador | Abrangência |
|-------------------|-------------|
| **SAA** | Sistema de Abastecimento de Água coletivo |
| **SAC** | Solução Alternativa Coletiva |
| **SAI** | Solução Alternativa Individual |

### Licenciamento Sanitário

| Requisito | Descrição |
|-----------|-----------|
| **Licença Sanitária** | Obrigatória para SAA e SAC |
| **Cadastro** | Obrigatório para todos |
| **VIGIAGUA** | Sistema de informação |
| **Responsável Técnico** | Profissional habilitado |

### Padrão de Potabilidade

- Portaria GM/MS nº 888/2021 (padrão federal)
- Parâmetros microbiológicos, químicos, físicos
- Monitoramento obrigatório
- Análises laboratoriais periódicas

### Para IADES - Memorizar:
- SAA/SAC = licenciamento obrigatório
- VIGIAGUA = sistema de vigilância da água
- Potabilidade = Portaria 888/2021
- Coliformes totais e E. coli = parâmetros microbiológicos
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Importância

A **Portaria SES-GO nº 2145/2024** estabelece as normas estaduais para vigilância e licenciamento sanitário dos sistemas de abastecimento de água em Goiás, em consonância com as normas federais.

#### Base Legal
- Portaria GM/MS nº 888/2021 (padrão de potabilidade)
- Lei Estadual nº 16.140/2007 (SUS em Goiás)
- Decreto Estadual nº 6.906/2009

### 2. Definições Fundamentais

#### 2.1 Sistema de Abastecimento de Água (SAA)

> "Instalação composta por um conjunto de obras civis, materiais e equipamentos, desde a zona de captação até as ligações prediais, destinada à produção e ao fornecimento coletivo de água potável, por meio de rede de distribuição."

**Componentes:**
- Captação (superficial ou subterrânea)
- Adução
- Tratamento
- Reservação
- Distribuição
- Ligações prediais

#### 2.2 Solução Alternativa Coletiva (SAC)

> "Modalidade de abastecimento coletivo destinada a fornecer água potável, com captação subterrânea ou superficial, com ou sem canalização dos ramais prediais e sem rede de distribuição."

**Exemplos:**
- Poço comunitário
- Chafariz público
- Caminhão-pipa

#### 2.3 Solução Alternativa Individual (SAI)

> "Modalidade de abastecimento de água para fins de consumo humano que atende a domicílios com uma única família."

**Exemplos:**
- Poço particular
- Cisterna
- Nascente

### 3. Licenciamento Sanitário

#### 3.1 Obrigatoriedade

| Forma de Abastecimento | Licença | Cadastro |
|------------------------|---------|----------|
| **SAA** | Obrigatória | Obrigatório |
| **SAC** | Obrigatória | Obrigatório |
| **SAI** | Dispensa | Recomendado |

#### 3.2 Requisitos para Licenciamento

| Requisito | Descrição |
|-----------|-----------|
| Projeto técnico | Descrição do sistema |
| RT | Responsável técnico habilitado |
| Outorga | Direito de uso da água |
| Plano de amostragem | Frequência de análises |
| Laboratório | Credenciado para análises |

#### 3.3 Documentação Necessária

1. Requerimento de licenciamento
2. Projeto técnico do sistema
3. ART do responsável técnico
4. Outorga de recursos hídricos
5. Plano de amostragem e controle
6. Laudos de análises
7. Procedimentos operacionais

### 4. Vigilância da Qualidade da Água

#### 4.1 VIGIAGUA

O **VIGIAGUA** é o Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano.

**Objetivos:**
- Desenvolver ações de vigilância
- Avaliar risco à saúde
- Monitorar qualidade da água
- Prevenir doenças de veiculação hídrica

#### 4.2 Controle x Vigilância

| Aspecto | CONTROLE | VIGILÂNCIA |
|---------|----------|------------|
| **Responsável** | Prestador do serviço | Setor saúde (VISA) |
| **Objetivo** | Garantir a qualidade | Verificar a qualidade |
| **Ações** | Tratamento, análises | Inspeção, coleta, análise |

### 5. Padrão de Potabilidade

#### 5.1 Portaria GM/MS nº 888/2021

Estabelece os padrões de potabilidade da água para consumo humano no Brasil.

#### 5.2 Parâmetros Principais

##### a) Microbiológicos

| Parâmetro | VMP |
|-----------|-----|
| **Escherichia coli** | Ausência em 100 mL |
| **Coliformes totais** | Ausência em 100 mL (saída ETA) |

##### b) Turbidez

| Etapa | VMP |
|-------|-----|
| Saída do filtro | 0,5 uT |
| Saída do tratamento | 1,0 uT |
| Rede de distribuição | 5,0 uT |

##### c) Cloro Residual Livre

| Aspecto | Valor |
|---------|-------|
| **Mínimo** | 0,2 mg/L |
| **Máximo** | 5,0 mg/L |
| **Recomendado** | 0,5 a 2,0 mg/L |

##### d) Fluoreto

| Aspecto | Valor |
|---------|-------|
| **VMP** | 1,5 mg/L |
| **Recomendado** | 0,7 mg/L |

### 6. Plano de Amostragem

#### 6.1 Frequência Mínima

A frequência de coleta e análise depende:
- Tipo de sistema (SAA, SAC)
- População abastecida
- Tipo de tratamento

#### 6.2 Pontos de Coleta

- Captação (água bruta)
- Saída do tratamento
- Reservatórios
- Rede de distribuição
- Pontos de consumo

### 7. Não Conformidades

#### 7.1 Situações de Risco

| Situação | Ação |
|----------|------|
| E. coli detectada | Intervenção imediata |
| Turbidez elevada | Correção no tratamento |
| Cloro insuficiente | Ajuste de dosagem |
| Parâmetro químico elevado | Investigação e correção |

#### 7.2 Medidas Corretivas

1. Comunicação à VISA
2. Investigação da causa
3. Correção do processo
4. Nova coleta e análise
5. Comunicação à população (se necessário)

### 8. Fiscalização e Penalidades

#### 8.1 Competência

- VISA estadual (coordenação)
- VISA municipais (execução)
- ANVISA (complementar)

#### 8.2 Ações de Fiscalização

| Ação | Descrição |
|------|-----------|
| Inspeção | Verificação in loco |
| Coleta de amostras | Análise de vigilância |
| Análise documental | Verificação de registros |
| Notificação | Exigência de correções |
| Penalidade | Em caso de descumprimento |

### 9. Aplicação Prática para o Fiscal

#### 9.1 O que verificar

| Item | Verificação |
|------|-------------|
| Licença sanitária | Vigente |
| RT | Presente e habilitado |
| Análises | Frequência e resultados |
| Tratamento | Funcionamento adequado |
| Cloro residual | Dentro dos limites |
| Registros | Documentação atualizada |

#### 9.2 Coleta de Amostras

- Amostras de vigilância (VISA)
- Pontos representativos
- Técnica asséptica
- Transporte refrigerado
- Laboratório credenciado
        `,

        pontosChave: [
          'Portaria SES-GO 2145/2024: licenciamento sanitário de água em Goiás',
          'SAA: Sistema de Abastecimento de Água (rede de distribuição)',
          'SAC: Solução Alternativa Coletiva (sem rede, coletivo)',
          'SAI: Solução Alternativa Individual (uma família)',
          'SAA e SAC: licenciamento OBRIGATÓRIO',
          'VIGIAGUA: programa de vigilância da qualidade da água',
          'Portaria 888/2021: padrão de potabilidade federal',
          'E. coli e coliformes: parâmetros microbiológicos',
          'Cloro residual livre: mínimo 0,2 mg/L, máximo 5,0 mg/L',
          'Controle = prestador; Vigilância = setor saúde',
        ],

        armadilhas: [
          {
            titulo: 'Confundir SAA com SAC',
            descricao: 'SAA tem REDE DE DISTRIBUIÇÃO. SAC é coletivo mas SEM rede de distribuição.',
            dica: 'SAA = rede. SAC = coletivo sem rede. SAI = individual.',
          },
          {
            titulo: 'Confundir controle com vigilância',
            descricao: 'CONTROLE é do prestador (garantir qualidade). VIGILÂNCIA é do setor saúde (verificar qualidade).',
            dica: 'Controle = empresa. Vigilância = VISA.',
          },
          {
            titulo: 'Errar os valores de cloro residual',
            descricao: 'Mínimo = 0,2 mg/L. Máximo = 5,0 mg/L. Fora disso = não potável.',
            dica: 'Cloro: 0,2 a 5,0 mg/L (lembre: 0,2 é o mínimo!).',
          },
          {
            titulo: 'Achar que SAI precisa de licença',
            descricao: 'SAI (individual, uma família) é DISPENSADO de licença sanitária.',
            dica: 'SAI = individual = dispensa.',
          },
        ],

        mnemonicos: [
          {
            termo: 'SAA-SAC-SAI',
            significado: 'Sistema, Solução Alternativa Coletiva, Solução Alternativa Individual',
            frase: 'SAA (rede), SAC (coletivo sem rede), SAI (individual)',
          },
          {
            termo: 'VIGIÁGUA',
            significado: 'VIGIlância da ÁGUA',
            frase: 'VIGIÁGUA: programa que VIGIA a ÁGUA',
          },
          {
            termo: '0,2-5',
            significado: 'Cloro residual: 0,2 a 5,0 mg/L',
            frase: 'Cloro: de 0,2 (mínimo) a 5 (máximo)',
          },
          {
            termo: 'CV-PE',
            significado: 'Controle = Prestador; Vigilância = Estado',
            frase: 'Controle é do Prestador, Vigilância do Estado (saúde)',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-16-1',
            frente: 'O que regulamenta a Portaria SES-GO nº 2145/2024?',
            verso: 'Regulamenta o **licenciamento sanitário** para prestadores de serviços de **abastecimento de água para consumo humano** em Goiás.\n\nAbrange:\n- SAA (Sistema de Abastecimento)\n- SAC (Solução Alternativa Coletiva)\n- SAI (Solução Alternativa Individual)',
            tags: ['Portaria 2145', 'água'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-16-2',
            frente: 'Qual a diferença entre SAA, SAC e SAI?',
            verso: '**SAA** (Sistema de Abastecimento de Água):\n→ Coletivo com REDE de distribuição\n\n**SAC** (Solução Alternativa Coletiva):\n→ Coletivo SEM rede (poço, chafariz)\n\n**SAI** (Solução Alternativa Individual):\n→ Uma família (poço particular)',
            tags: ['SAA', 'SAC', 'SAI'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-16-3',
            frente: 'Quais valores de CLORO RESIDUAL LIVRE são permitidos?',
            verso: '**Mínimo:** 0,2 mg/L\n**Máximo:** 5,0 mg/L\n**Recomendado:** 0,5 a 2,0 mg/L\n\nAbaixo de 0,2 = risco de contaminação\nAcima de 5,0 = risco à saúde\n\nParâmetro obrigatório na rede de distribuição!',
            tags: ['cloro', 'potabilidade'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-16-4',
            frente: 'O que é o VIGIAGUA?',
            verso: '**VIGIAGUA** = Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano\n\nObjetivos:\n- Vigilância da qualidade\n- Avaliação de risco\n- Monitoramento contínuo\n- Prevenção de doenças hídricas\n\nÉ coordenado pelo Ministério da Saúde.',
            tags: ['VIGIAGUA', 'vigilância'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-16-5',
            frente: 'Qual a diferença entre CONTROLE e VIGILÂNCIA da água?',
            verso: '**CONTROLE:**\n→ Responsável: PRESTADOR do serviço\n→ Objetivo: GARANTIR a qualidade\n→ Ações: tratamento, análises próprias\n\n**VIGILÂNCIA:**\n→ Responsável: SETOR SAÚDE (VISA)\n→ Objetivo: VERIFICAR a qualidade\n→ Ações: inspeção, coleta, análise',
            tags: ['controle', 'vigilância'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-16-6',
            frente: 'Quais parâmetros MICROBIOLÓGICOS indicam potabilidade?',
            verso: '**Escherichia coli (E. coli):**\n→ Ausência em 100 mL (obrigatório)\n→ Indicador de contaminação fecal\n\n**Coliformes totais:**\n→ Ausência em 100 mL (saída do tratamento)\n→ Indicador de contaminação\n\nPresença = água NÃO POTÁVEL!',
            tags: ['microbiológico', 'E. coli'],
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
            id: 'ce-q-16-1',
            enunciado: 'A Portaria SES-GO nº 2145/2024 dispõe sobre o licenciamento sanitário para:',
            alternativas: [
              { letra: 'A', texto: 'estabelecimentos de alimentos.' },
              { letra: 'B', texto: 'prestadores de serviços de abastecimento de água.' },
              { letra: 'C', texto: 'hospitais e clínicas.' },
              { letra: 'D', texto: 'indústrias farmacêuticas.' },
              { letra: 'E', texto: 'transportadores de resíduos.' },
            ],
            gabarito: 'B',
            justificativa: 'A Portaria SES-GO nº 2145/2024 dispõe sobre a regulamentação e o licenciamento sanitário para PRESTADORES DE SERVIÇOS DE ABASTECIMENTO DE ÁGUA para consumo humano.',
            dificuldade: 'Fácil',
            competencia: 'Objeto da Portaria',
            banca: 'IADES',
            tags: ['Portaria 2145', 'objeto'],
          },
          {
            id: 'ce-q-16-2',
            enunciado: 'O Sistema de Abastecimento de Água (SAA) caracteriza-se por:',
            alternativas: [
              { letra: 'A', texto: 'atender apenas uma família.' },
              { letra: 'B', texto: 'não possuir tratamento.' },
              { letra: 'C', texto: 'possuir rede de distribuição.' },
              { letra: 'D', texto: 'ser alternativa individual.' },
              { letra: 'E', texto: 'dispensar licenciamento.' },
            ],
            gabarito: 'C',
            justificativa: 'O SAA (Sistema de Abastecimento de Água) caracteriza-se por possuir REDE DE DISTRIBUIÇÃO, diferindo da SAC (sem rede) e SAI (individual).',
            dificuldade: 'Média',
            competencia: 'Conceito de SAA',
            banca: 'IADES',
            tags: ['SAA', 'característica'],
          },
          {
            id: 'ce-q-16-3',
            enunciado: 'O valor MÍNIMO de cloro residual livre exigido na água para consumo humano é:',
            alternativas: [
              { letra: 'A', texto: '0,1 mg/L.' },
              { letra: 'B', texto: '0,2 mg/L.' },
              { letra: 'C', texto: '0,5 mg/L.' },
              { letra: 'D', texto: '1,0 mg/L.' },
              { letra: 'E', texto: '2,0 mg/L.' },
            ],
            gabarito: 'B',
            justificativa: 'O valor MÍNIMO de cloro residual livre é 0,2 mg/L. O máximo permitido é 5,0 mg/L.',
            dificuldade: 'Média',
            competencia: 'Cloro residual',
            banca: 'IADES',
            tags: ['cloro', 'mínimo'],
          },
          {
            id: 'ce-q-16-4',
            enunciado: 'O VIGIAGUA é:',
            alternativas: [
              { letra: 'A', texto: 'um tipo de tratamento de água.' },
              { letra: 'B', texto: 'o programa de vigilância da qualidade da água.' },
              { letra: 'C', texto: 'uma empresa de abastecimento.' },
              { letra: 'D', texto: 'um laboratório de análises.' },
              { letra: 'E', texto: 'um sistema de captação.' },
            ],
            gabarito: 'B',
            justificativa: 'VIGIAGUA é o Programa Nacional de VIGILÂNCIA da Qualidade da Água para Consumo Humano, coordenado pelo Ministério da Saúde.',
            dificuldade: 'Fácil',
            competencia: 'VIGIAGUA',
            banca: 'IADES',
            tags: ['VIGIAGUA', 'conceito'],
          },
          {
            id: 'ce-q-16-5',
            enunciado: 'A responsabilidade pelo CONTROLE da qualidade da água é do:',
            alternativas: [
              { letra: 'A', texto: 'consumidor final.' },
              { letra: 'B', texto: 'setor de vigilância sanitária.' },
              { letra: 'C', texto: 'prestador do serviço de abastecimento.' },
              { letra: 'D', texto: 'Ministério do Meio Ambiente.' },
              { letra: 'E', texto: 'laboratório de análises.' },
            ],
            gabarito: 'C',
            justificativa: 'O CONTROLE (garantir a qualidade) é responsabilidade do PRESTADOR do serviço. A VIGILÂNCIA (verificar a qualidade) é do setor de saúde.',
            dificuldade: 'Média',
            competencia: 'Controle x Vigilância',
            banca: 'IADES',
            tags: ['controle', 'responsável'],
          },
          {
            id: 'ce-q-16-6',
            enunciado: 'A presença de Escherichia coli na água para consumo humano indica:',
            alternativas: [
              { letra: 'A', texto: 'água de boa qualidade.' },
              { letra: 'B', texto: 'contaminação fecal e água não potável.' },
              { letra: 'C', texto: 'excesso de cloro.' },
              { letra: 'D', texto: 'alta turbidez.' },
              { letra: 'E', texto: 'pH inadequado.' },
            ],
            gabarito: 'B',
            justificativa: 'A presença de E. coli indica CONTAMINAÇÃO FECAL, tornando a água NÃO POTÁVEL. O padrão exige AUSÊNCIA em 100 mL.',
            dificuldade: 'Fácil',
            competencia: 'E. coli',
            banca: 'IADES',
            tags: ['E. coli', 'potabilidade'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-17',
      numero: 17,
      titulo: 'Portaria SES-GO nº 34/2006 - Agravos de Notificação Compulsória à Saúde do Trabalhador',
      conteudo: {
        resumo: `
## Resumo Rápido

### Objeto da Portaria

A **Portaria SES-GO nº 34/2006** torna **compulsória a notificação** de agravos à saúde do trabalhador no Estado de Goiás.

### Agravos de Notificação Compulsória

| Agravo | Descrição |
|--------|-----------|
| **Acidente de trabalho fatal** | Morte em decorrência do trabalho |
| **Acidente de trabalho grave** | Com mutilação, incapacidade |
| **Acidente com material biológico** | Exposição a sangue/fluidos |
| **LER/DORT** | Lesões por esforço repetitivo |
| **PAIR** | Perda auditiva por ruído |
| **Pneumoconioses** | Doenças por poeira |
| **Intoxicação por agrotóxicos** | Exposição a pesticidas |
| **Dermatoses ocupacionais** | Doenças de pele do trabalho |
| **Câncer relacionado ao trabalho** | Neoplasia ocupacional |
| **Transtornos mentais** | Doenças psíquicas do trabalho |

### Responsáveis pela Notificação

- Profissionais de saúde
- Estabelecimentos de saúde públicos e privados
- Serviços de saúde do trabalhador

### Para IADES - Memorizar:
- Notificação é OBRIGATÓRIA
- Notificar mesmo em caso de SUSPEITA
- SINAN = sistema de notificação
- Lista de 10 agravos principais
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Importância

A **Portaria SES-GO nº 34/2006** estabelece a lista de agravos à saúde do trabalhador de notificação compulsória em Goiás, complementando a legislação federal.

#### Base Legal
- Portaria MS nº 1.339/1999 (lista de doenças)
- Portaria MS nº 777/2004 (notificação)
- Lei 8.080/1990 (vigilância em saúde)

### 2. Notificação Compulsória

#### 2.1 Conceito

É a comunicação **obrigatória** à autoridade de saúde sobre a ocorrência de determinado agravo, para fins de vigilância epidemiológica.

#### 2.2 Características

| Aspecto | Descrição |
|---------|-----------|
| **Obrigatória** | Não é facultativa |
| **Imediata** | Para casos graves/surtos |
| **Em suspeita** | Não precisa confirmação |
| **Universal** | Todo profissional de saúde |

### 3. Lista de Agravos

#### 3.1 Acidentes de Trabalho

##### a) Acidente de Trabalho Fatal
- Óbito em decorrência do trabalho
- Típico ou de trajeto
- Notificação imediata (24h)

##### b) Acidente de Trabalho Grave
- Com mutilação
- Incapacidade permanente
- Envolvendo menores
- Em trabalho infantil

##### c) Acidente com Material Biológico
- Exposição a sangue
- Perfurocortantes
- Fluidos corporais
- Risco de HIV, Hepatites

#### 3.2 Doenças Relacionadas ao Trabalho

##### a) LER/DORT
- Lesão por Esforço Repetitivo
- Distúrbio Osteomuscular Relacionado ao Trabalho
- Tendinites, bursites, síndrome do túnel do carpo

##### b) PAIR
- Perda Auditiva Induzida por Ruído
- Exposição ocupacional a níveis elevados
- Irreversível e progressiva

##### c) Pneumoconioses
- Doenças pulmonares por inalação de poeiras
- Silicose (sílica)
- Asbestose (amianto)

##### d) Intoxicação por Agrotóxicos
- Exposição a pesticidas
- Aguda ou crônica
- Trabalho rural

##### e) Dermatoses Ocupacionais
- Doenças de pele relacionadas ao trabalho
- Dermatites de contato
- Câncer de pele ocupacional

##### f) Câncer Relacionado ao Trabalho
- Neoplasias de origem ocupacional
- Exposição a carcinógenos
- Latência longa

##### g) Transtornos Mentais
- Síndrome de Burnout
- Depressão
- Transtorno de estresse
- Assédio moral (LER psíquica)

### 4. Procedimento de Notificação

#### 4.1 Fluxo

1. **Identificação** do caso (suspeito ou confirmado)
2. **Preenchimento** da ficha de notificação
3. **Registro** no SINAN
4. **Envio** à vigilância municipal
5. **Investigação** epidemiológica
6. **Consolidação** estadual/federal

#### 4.2 Ficha de Notificação

| Campo | Informação |
|-------|------------|
| Dados pessoais | Nome, idade, sexo |
| Ocupação | Cargo, função, CBO |
| Empresa | Nome, CNPJ, endereço |
| Agravo | Tipo, data de início |
| Diagnóstico | CID-10 |
| Evolução | Tratamento, desfecho |

### 5. Responsáveis pela Notificação

#### 5.1 Quem Deve Notificar

| Responsável | Obrigação |
|-------------|-----------|
| Médicos | Sim, obrigatório |
| Enfermeiros | Sim, obrigatório |
| Outros profissionais de saúde | Sim |
| Estabelecimentos de saúde | Sim |
| Serviços de saúde ocupacional | Sim |

#### 5.2 Onde Notificar

- Unidade de saúde
- CEREST
- Vigilância epidemiológica municipal
- SINAN online

### 6. SINAN

O **SINAN** (Sistema de Informação de Agravos de Notificação) é o sistema informatizado para registro das notificações.

#### 6.1 Funcionalidades

- Registro de notificações
- Investigação de casos
- Geração de relatórios
- Análise epidemiológica
- Monitoramento de indicadores

### 7. Penalidades

O descumprimento da obrigação de notificar pode resultar em:
- Advertência
- Multa
- Outras sanções administrativas
- Responsabilização ética (conselhos profissionais)

### 8. Aplicação Prática

#### 8.1 O Fiscal e a Notificação

O fiscal de vigilância sanitária pode:
- Verificar se estabelecimentos notificam
- Orientar sobre obrigatoriedade
- Encaminhar casos identificados
- Acompanhar investigações

#### 8.2 Integração VISA-VISAT

- VISA: condições sanitárias
- VISAT: saúde do trabalhador
- Ações conjuntas de fiscalização
- Compartilhamento de informações
        `,

        pontosChave: [
          'Portaria SES-GO 34/2006: notificação compulsória de agravos do trabalhador',
          'Notificação é OBRIGATÓRIA para todos profissionais de saúde',
          'Notificar mesmo em caso de SUSPEITA',
          'Acidente fatal: notificação IMEDIATA (24h)',
          'SINAN: sistema de informação para notificação',
          'LER/DORT, PAIR, pneumoconioses: doenças de notificação',
          'Intoxicação por agrotóxicos: notificação obrigatória',
          'Acidente com material biológico: notificação obrigatória',
          'Transtornos mentais do trabalho: incluídos na lista',
          'CEREST: referência para notificações de saúde do trabalhador',
        ],

        armadilhas: [
          {
            titulo: 'Achar que precisa confirmação para notificar',
            descricao: 'A notificação deve ser feita mesmo em SUSPEITA, não precisa aguardar confirmação diagnóstica.',
            dica: 'Suspeita já basta para notificar!',
          },
          {
            titulo: 'Pensar que só médico notifica',
            descricao: 'TODOS os profissionais de saúde têm obrigação de notificar, não apenas médicos.',
            dica: 'Enfermeiro, fisioterapeuta, etc. também notificam.',
          },
          {
            titulo: 'Confundir CAT com notificação SINAN',
            descricao: 'CAT = INSS (previdência). SINAN = SUS (vigilância). São documentos diferentes.',
            dica: 'CAT = benefícios. SINAN = vigilância epidemiológica.',
          },
          {
            titulo: 'Esquecer os transtornos mentais',
            descricao: 'Transtornos mentais relacionados ao trabalho (Burnout, depressão) também são de notificação.',
            dica: 'Saúde mental do trabalhador = notificação obrigatória.',
          },
        ],

        mnemonicos: [
          {
            termo: 'LAP-DIC-T',
            significado: 'LER, Acidente, PAIR, Dermatoses, Intoxicação, Câncer, Transtornos',
            frase: 'Agravos do trabalhador: LAP-DIC-T',
          },
          {
            termo: 'SINAN-SUS',
            significado: 'SINAN é sistema do SUS',
            frase: 'SINAN = Sistema de Notificação do SUS',
          },
          {
            termo: 'SUSPEITA-JÁ',
            significado: 'Suspeita já basta para notificar',
            frase: 'Suspeita JÁ notifica, não espera confirmação',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-17-1',
            frente: 'O que estabelece a Portaria SES-GO nº 34/2006?',
            verso: 'Torna **COMPULSÓRIA a notificação** de agravos à saúde do trabalhador no Estado de Goiás.\n\nAgravos incluem:\n- Acidentes de trabalho (fatais, graves, material biológico)\n- LER/DORT, PAIR\n- Intoxicação por agrotóxicos\n- Pneumoconioses\n- Transtornos mentais',
            tags: ['Portaria 34', 'notificação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-17-2',
            frente: 'Precisa de confirmação diagnóstica para notificar agravo do trabalhador?',
            verso: '**NÃO!**\n\nA notificação deve ser feita mesmo em caso de **SUSPEITA**.\n\nNão é necessário aguardar:\n- Exames complementares\n- Confirmação laboratorial\n- Alta médica\n\nSuspeita → Notifica → Investiga',
            tags: ['notificação', 'suspeita'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-17-3',
            frente: 'Quais os principais agravos de notificação compulsória do trabalhador?',
            verso: '1. Acidente de trabalho **fatal**\n2. Acidente de trabalho **grave**\n3. Acidente com **material biológico**\n4. **LER/DORT**\n5. **PAIR** (perda auditiva)\n6. **Pneumoconioses**\n7. **Intoxicação por agrotóxicos**\n8. **Dermatoses** ocupacionais\n9. **Câncer** relacionado ao trabalho\n10. **Transtornos mentais**',
            tags: ['agravos', 'lista'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-17-4',
            frente: 'Quem tem obrigação de notificar agravos do trabalhador?',
            verso: '**TODOS os profissionais de saúde:**\n\n- Médicos\n- Enfermeiros\n- Fisioterapeutas\n- Psicólogos\n- Outros profissionais\n\n**Estabelecimentos:**\n- Hospitais, UBS, clínicas\n- SESMT das empresas\n- CEREST',
            tags: ['responsável', 'notificação'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-17-5',
            frente: 'Em quanto tempo deve ser notificado um acidente de trabalho FATAL?',
            verso: '**IMEDIATAMENTE - em até 24 horas**\n\nAcidentes fatais exigem notificação IMEDIATA devido à:\n- Gravidade do evento\n- Necessidade de investigação\n- Prevenção de novos casos\n- Ação de vigilância',
            tags: ['fatal', 'prazo'],
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
            id: 'ce-q-17-1',
            enunciado: 'A Portaria SES-GO nº 34/2006 torna compulsória a notificação de:',
            alternativas: [
              { letra: 'A', texto: 'doenças transmissíveis.' },
              { letra: 'B', texto: 'agravos à saúde do trabalhador.' },
              { letra: 'C', texto: 'intoxicações alimentares.' },
              { letra: 'D', texto: 'acidentes de trânsito.' },
              { letra: 'E', texto: 'violência doméstica.' },
            ],
            gabarito: 'B',
            justificativa: 'A Portaria SES-GO nº 34/2006 torna compulsória a notificação de AGRAVOS À SAÚDE DO TRABALHADOR no Estado de Goiás.',
            dificuldade: 'Fácil',
            competencia: 'Objeto da Portaria',
            banca: 'IADES',
            tags: ['Portaria 34', 'objeto'],
          },
          {
            id: 'ce-q-17-2',
            enunciado: 'A notificação de agravos à saúde do trabalhador deve ser realizada:',
            alternativas: [
              { letra: 'A', texto: 'apenas após confirmação diagnóstica.' },
              { letra: 'B', texto: 'mesmo em casos suspeitos.' },
              { letra: 'C', texto: 'apenas por médicos.' },
              { letra: 'D', texto: 'apenas em casos fatais.' },
              { letra: 'E', texto: 'apenas em hospitais.' },
            ],
            gabarito: 'B',
            justificativa: 'A notificação deve ser feita MESMO EM CASOS SUSPEITOS, não sendo necessário aguardar confirmação diagnóstica.',
            dificuldade: 'Média',
            competencia: 'Momento da notificação',
            banca: 'IADES',
            tags: ['notificação', 'suspeita'],
          },
          {
            id: 'ce-q-17-3',
            enunciado: 'São agravos de notificação compulsória segundo a Portaria nº 34/2006, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'LER/DORT.' },
              { letra: 'B', texto: 'PAIR.' },
              { letra: 'C', texto: 'gripe comum.' },
              { letra: 'D', texto: 'intoxicação por agrotóxicos.' },
              { letra: 'E', texto: 'pneumoconioses.' },
            ],
            gabarito: 'C',
            justificativa: 'Gripe comum não é agravo ocupacional de notificação. São de notificação: LER/DORT, PAIR, intoxicação por agrotóxicos, pneumoconioses, entre outros.',
            dificuldade: 'Fácil',
            competencia: 'Lista de agravos',
            banca: 'IADES',
            tags: ['agravos', 'exceto'],
          },
          {
            id: 'ce-q-17-4',
            enunciado: 'O acidente de trabalho fatal deve ser notificado:',
            alternativas: [
              { letra: 'A', texto: 'em até 30 dias.' },
              { letra: 'B', texto: 'em até 7 dias.' },
              { letra: 'C', texto: 'imediatamente (em até 24 horas).' },
              { letra: 'D', texto: 'apenas se solicitado.' },
              { letra: 'E', texto: 'no relatório anual.' },
            ],
            gabarito: 'C',
            justificativa: 'Acidente de trabalho FATAL exige notificação IMEDIATA, em até 24 horas, devido à gravidade e necessidade de investigação.',
            dificuldade: 'Média',
            competencia: 'Prazo de notificação',
            banca: 'IADES',
            tags: ['fatal', 'prazo'],
          },
          {
            id: 'ce-q-17-5',
            enunciado: 'O sistema de informação utilizado para notificação de agravos é o:',
            alternativas: [
              { letra: 'A', texto: 'SINASC.' },
              { letra: 'B', texto: 'SIM.' },
              { letra: 'C', texto: 'SINAN.' },
              { letra: 'D', texto: 'SIH.' },
              { letra: 'E', texto: 'CNES.' },
            ],
            gabarito: 'C',
            justificativa: 'O SINAN (Sistema de Informação de Agravos de Notificação) é o sistema utilizado para registro das notificações compulsórias.',
            dificuldade: 'Fácil',
            competencia: 'Sistema de informação',
            banca: 'IADES',
            tags: ['SINAN', 'sistema'],
          },
        ],
      },
    },
    {
      id: 'ce-topico-18',
      numero: 18,
      titulo: 'Lei Estadual nº 18.456/2014 - Prevenção e Punição do Assédio Moral',
      conteudo: {
        resumo: `
## Resumo Rápido

### Objeto da Lei

A **Lei Estadual nº 18.456/2014** dispõe sobre a **prevenção e punição do assédio moral** no âmbito da Administração estadual de Goiás.

### Conceito de Assédio Moral

| Elemento | Descrição |
|----------|-----------|
| **Conduta** | Ação ou omissão degradante |
| **Repetição** | Comportamento reiterado |
| **Alvo** | Servidor público |
| **Efeito** | Dano à dignidade, integridade psíquica |

### Formas de Assédio

| Tipo | Descrição |
|------|-----------|
| **Vertical descendente** | Superior → subordinado |
| **Vertical ascendente** | Subordinado → superior |
| **Horizontal** | Entre colegas do mesmo nível |

### Exemplos de Condutas

- Atribuir tarefas humilhantes
- Isolar o servidor
- Criticar constantemente
- Impedir crescimento profissional
- Desconsiderar pareceres sem fundamentação

### Penalidades

| Infração | Sanção |
|----------|--------|
| Primeira vez | Advertência |
| Reincidência | Suspensão (até 30 dias) |
| Reiteração | Demissão |

### Para IADES - Memorizar:
- Assédio moral = conduta REITERADA + dano à dignidade
- Aplica-se a TODA administração estadual
- Vítima pode ser servidor ou subordinado
- Lei específica de Goiás
        `,

        explicacao: `
## Explicação Didática

### 1. Contexto e Importância

A **Lei Estadual nº 18.456/2014** é a norma específica de Goiás para prevenção e punição do assédio moral na Administração Pública estadual.

#### Âmbito de Aplicação
- Administração direta
- Autarquias
- Fundações
- Empresas públicas
- Sociedades de economia mista

### 2. Conceito de Assédio Moral (Art. 2º)

#### 2.1 Definição Legal

> "Considera-se assédio moral toda ação, gesto ou palavra que, de forma repetitiva, atinja a autoestima, a segurança, a dignidade, a personalidade ou a integridade psíquica ou física de servidor público, colocando-o em risco ou degradando o ambiente de trabalho."

#### 2.2 Elementos Caracterizadores

| Elemento | Descrição |
|----------|-----------|
| **Conduta** | Ação, gesto ou palavra |
| **Repetição** | Comportamento reiterado (não isolado) |
| **Dano** | Prejuízo à dignidade ou integridade |
| **Ambiente** | Degradação do ambiente de trabalho |

⚠️ **Atenção:** Ato isolado NÃO caracteriza assédio moral!

### 3. Formas de Assédio Moral

#### 3.1 Assédio Vertical Descendente

- **Autor:** Superior hierárquico
- **Vítima:** Subordinado
- **Exemplo:** Chefe que humilha servidor publicamente

É a forma **mais comum** de assédio moral.

#### 3.2 Assédio Vertical Ascendente

- **Autor:** Subordinado(s)
- **Vítima:** Superior hierárquico
- **Exemplo:** Equipe que sabota novo chefe

É forma **menos comum**, mas existe.

#### 3.3 Assédio Horizontal

- **Autor:** Colega de trabalho
- **Vítima:** Outro colega
- **Exemplo:** Colegas que isolam um servidor

Ocorre entre pessoas do **mesmo nível hierárquico**.

### 4. Condutas Caracterizadoras (Art. 3º)

A lei exemplifica condutas que podem caracterizar assédio moral:

#### 4.1 Isolamento

| Conduta | Descrição |
|---------|-----------|
| Ignorar presença | Não dirigir a palavra |
| Excluir de reuniões | Deixar de fora de encontros |
| Isolar fisicamente | Mudar de sala sem motivo |

#### 4.2 Humilhação

| Conduta | Descrição |
|---------|-----------|
| Críticas constantes | Apontar erros em público |
| Apelidos pejorativos | Usar termos ofensivos |
| Zombaria | Fazer piadas sobre o servidor |

#### 4.3 Desqualificação Profissional

| Conduta | Descrição |
|---------|-----------|
| Retirar tarefas | Deixar sem trabalho |
| Atribuir tarefas inferiores | Degradar a função |
| Impedir promoção | Bloquear crescimento |
| Desconsiderar pareceres | Ignorar trabalho técnico |

#### 4.4 Pressão Excessiva

| Conduta | Descrição |
|---------|-----------|
| Metas impossíveis | Exigências inexequíveis |
| Prazos irreais | Cobrança desproporcional |
| Vigilância excessiva | Monitoramento constante |

### 5. O que NÃO é Assédio Moral

| Situação | Por que não é assédio |
|----------|----------------------|
| Exigência de desempenho | É poder diretivo legítimo |
| Crítica construtiva | Feedback é necessário |
| Conflito pontual | Precisa ser reiterado |
| Má gestão | Sem intenção de prejudicar |
| Estresse organizacional | Não é pessoal |

### 6. Penalidades (Art. 5º)

#### 6.1 Escala de Sanções

| Ocorrência | Sanção |
|------------|--------|
| **1ª infração** | Advertência por escrito |
| **Reincidência** | Suspensão (até 30 dias) |
| **Reiteração** | Demissão |

#### 6.2 Agravantes

A pena pode ser agravada se:
- Houver dano à saúde da vítima
- Afastamento do servidor vítima
- Uso de cargo de chefia
- Natureza grave da conduta

### 7. Procedimento

#### 7.1 Denúncia

| Forma | Local |
|-------|-------|
| Escrita ou verbal | Ouvidoria, chefia, RH |
| Anônima | Permitida |
| Fundamentada | Com descrição dos fatos |

#### 7.2 Apuração

1. Recebimento da denúncia
2. Análise preliminar
3. Instauração de sindicância ou PAD
4. Investigação
5. Defesa do acusado
6. Relatório final
7. Julgamento
8. Aplicação de sanção (se procedente)

### 8. Proteção à Vítima

#### 8.1 Direitos do Servidor Vítima

| Direito | Descrição |
|---------|-----------|
| Sigilo | Preservação da identidade |
| Proteção | Contra retaliações |
| Acompanhamento | Apoio psicológico |
| Remoção | Se necessário |

#### 8.2 Medidas Preventivas

- Campanhas de conscientização
- Capacitação de gestores
- Canais de denúncia
- Comissões de prevenção

### 9. Responsabilidades

#### 9.1 Do Assediador

- Responsabilidade administrativa (PAD)
- Responsabilidade civil (indenização)
- Responsabilidade criminal (se houver crime)

#### 9.2 Da Administração

- Dever de prevenir
- Dever de investigar
- Dever de punir
- Reparação do dano

### 10. Relação com Saúde do Trabalhador

#### 10.1 Adoecimento por Assédio

O assédio moral pode causar:
- Depressão
- Ansiedade
- Síndrome de Burnout
- Transtorno de estresse pós-traumático
- Doenças psicossomáticas

#### 10.2 Nexo com o Trabalho

Se houver adoecimento:
- É doença relacionada ao trabalho
- Notificação compulsória (transtorno mental)
- CAT (se servidor celetista)
- Licença para tratamento

### 11. Aplicação na Vigilância Sanitária

#### 11.1 O Fiscal como Servidor

O fiscal de vigilância sanitária:
- É protegido pela lei (como vítima potencial)
- Pode ser responsabilizado (se assediador)
- Deve conhecer a norma

#### 11.2 Ambiente de Trabalho Saudável

- Respeito entre colegas
- Gestão humanizada
- Comunicação clara
- Canais de diálogo
        `,

        pontosChave: [
          'Lei 18.456/2014 GO: prevenção e punição de assédio moral',
          'Assédio moral: conduta REITERADA que atinge dignidade',
          'Aplica-se a toda Administração estadual de Goiás',
          'Vertical descendente: superior → subordinado (mais comum)',
          'Vertical ascendente: subordinado → superior',
          'Horizontal: entre colegas do mesmo nível',
          'Ato ISOLADO não caracteriza assédio moral',
          'Penalidades: advertência → suspensão → demissão',
          'Vítima tem direito a sigilo e proteção',
          'Assédio pode causar doenças ocupacionais (notificação)',
        ],

        armadilhas: [
          {
            titulo: 'Achar que ato isolado é assédio',
            descricao: 'Assédio moral exige conduta REITERADA. Um ato isolado, por mais grave, não caracteriza assédio.',
            dica: 'Assédio = repetição. Ato único = não é assédio (pode ser outra infração).',
          },
          {
            titulo: 'Confundir assédio com poder diretivo',
            descricao: 'Cobrar metas, dar ordens, exigir desempenho são exercício LEGÍTIMO do poder diretivo, não assédio.',
            dica: 'Chefe pode cobrar. Não pode humilhar.',
          },
          {
            titulo: 'Pensar que só superior pode assediar',
            descricao: 'O assédio pode ser vertical (superior ou subordinado) ou horizontal (colegas).',
            dica: 'Assédio tem 3 formas: descendente, ascendente, horizontal.',
          },
          {
            titulo: 'Esquecer que assédio causa doença',
            descricao: 'O assédio moral pode causar transtornos mentais, que são de notificação compulsória.',
            dica: 'Assédio → adoecimento → doença do trabalho → notificação.',
          },
        ],

        mnemonicos: [
          {
            termo: 'DVH',
            significado: 'Descendente, Vertical ascendente, Horizontal',
            frase: 'Formas de assédio: DVH (Descendente, V-ascendente, Horizontal)',
          },
          {
            termo: 'CRED',
            significado: 'Conduta REiterada + Dano',
            frase: 'Assédio moral = CRED (Conduta REiterada + Dano)',
          },
          {
            termo: 'ASD',
            significado: 'Advertência, Suspensão, Demissão',
            frase: 'Penalidades: ASD (Advertência → Suspensão → Demissão)',
          },
          {
            termo: 'NÃO-UM',
            significado: 'NÃO é UM ato isolado',
            frase: 'Assédio NÃO é UM ato (precisa repetir)',
          },
        ],

        flashcards: [
          {
            id: 'ce-fc-18-1',
            frente: 'O que dispõe a Lei Estadual nº 18.456/2014?',
            verso: 'Dispõe sobre a **prevenção e punição do ASSÉDIO MORAL** no âmbito da Administração estadual de Goiás.\n\nAplica-se a:\n- Administração direta\n- Autarquias e fundações\n- Empresas públicas\n- Sociedades de economia mista',
            tags: ['Lei 18456', 'assédio'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-18-2',
            frente: 'O que caracteriza ASSÉDIO MORAL?',
            verso: '**Elementos:**\n\n1. **Conduta** (ação, gesto, palavra)\n2. **REITERADA** (repetitiva, não isolada)\n3. **Dano** à dignidade ou integridade\n4. **Degradação** do ambiente de trabalho\n\n⚠️ Ato ISOLADO não é assédio moral!',
            tags: ['assédio', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-18-3',
            frente: 'Quais são as FORMAS de assédio moral?',
            verso: '**1. Vertical DESCENDENTE:**\n→ Superior → subordinado\n→ Mais comum\n\n**2. Vertical ASCENDENTE:**\n→ Subordinado → superior\n→ Menos comum\n\n**3. HORIZONTAL:**\n→ Entre colegas do mesmo nível',
            tags: ['formas', 'classificação'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-18-4',
            frente: 'Quais as PENALIDADES para assédio moral em Goiás?',
            verso: '**Escala progressiva:**\n\n1. **1ª infração:** Advertência por escrito\n2. **Reincidência:** Suspensão (até 30 dias)\n3. **Reiteração:** Demissão\n\nAgravantes: dano à saúde, uso de cargo, gravidade.',
            tags: ['penalidades', 'sanções'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-18-5',
            frente: 'Um ato ISOLADO de humilhação caracteriza assédio moral?',
            verso: '**NÃO!**\n\nAssédio moral exige conduta **REITERADA** (repetitiva).\n\nUm ato isolado, por mais grave:\n- Não é assédio moral\n- Pode ser outra infração disciplinar\n- Pode gerar responsabilização\n\nMas NÃO caracteriza assédio.',
            tags: ['ato isolado', 'não é'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'ce-fc-18-6',
            frente: 'O assédio moral pode causar doença ocupacional?',
            verso: '**SIM!**\n\nO assédio moral pode causar:\n- Depressão\n- Ansiedade\n- Síndrome de Burnout\n- Estresse pós-traumático\n\nSe houver adoecimento:\n- É doença do trabalho\n- Notificação compulsória\n- Direito a tratamento',
            tags: ['doença', 'ocupacional'],
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
            id: 'ce-q-18-1',
            enunciado: 'A Lei Estadual nº 18.456/2014 dispõe sobre:',
            alternativas: [
              { letra: 'A', texto: 'assédio sexual.' },
              { letra: 'B', texto: 'assédio moral.' },
              { letra: 'C', texto: 'assédio patrimonial.' },
              { letra: 'D', texto: 'assédio processual.' },
              { letra: 'E', texto: 'assédio eleitoral.' },
            ],
            gabarito: 'B',
            justificativa: 'A Lei Estadual nº 18.456/2014 dispõe sobre a prevenção e punição do ASSÉDIO MORAL no âmbito da Administração estadual de Goiás.',
            dificuldade: 'Fácil',
            competencia: 'Objeto da Lei',
            banca: 'IADES',
            tags: ['Lei 18456', 'objeto'],
          },
          {
            id: 'ce-q-18-2',
            enunciado: 'Para caracterizar assédio moral, a conduta deve ser:',
            alternativas: [
              { letra: 'A', texto: 'única e grave.' },
              { letra: 'B', texto: 'reiterada e degradante.' },
              { letra: 'C', texto: 'apenas verbal.' },
              { letra: 'D', texto: 'praticada apenas por superior.' },
              { letra: 'E', texto: 'sempre em público.' },
            ],
            gabarito: 'B',
            justificativa: 'Assédio moral exige conduta REITERADA (repetitiva) que cause dano à dignidade ou degradação do ambiente de trabalho. Ato isolado não caracteriza assédio.',
            dificuldade: 'Média',
            competencia: 'Caracterização',
            banca: 'IADES',
            tags: ['assédio', 'elementos'],
          },
          {
            id: 'ce-q-18-3',
            enunciado: 'O assédio moral praticado por superior hierárquico contra subordinado é denominado:',
            alternativas: [
              { letra: 'A', texto: 'horizontal.' },
              { letra: 'B', texto: 'vertical ascendente.' },
              { letra: 'C', texto: 'vertical descendente.' },
              { letra: 'D', texto: 'transversal.' },
              { letra: 'E', texto: 'institucional.' },
            ],
            gabarito: 'C',
            justificativa: 'Assédio VERTICAL DESCENDENTE é praticado pelo superior hierárquico contra subordinado. É a forma mais comum de assédio moral.',
            dificuldade: 'Fácil',
            competencia: 'Formas de assédio',
            banca: 'IADES',
            tags: ['descendente', 'forma'],
          },
          {
            id: 'ce-q-18-4',
            enunciado: 'A penalidade prevista para a primeira infração de assédio moral na Administração estadual de Goiás é:',
            alternativas: [
              { letra: 'A', texto: 'demissão.' },
              { letra: 'B', texto: 'suspensão.' },
              { letra: 'C', texto: 'advertência.' },
              { letra: 'D', texto: 'multa.' },
              { letra: 'E', texto: 'disponibilidade.' },
            ],
            gabarito: 'C',
            justificativa: 'Para a 1ª infração de assédio moral, a penalidade é ADVERTÊNCIA por escrito. Reincidência = suspensão. Reiteração = demissão.',
            dificuldade: 'Média',
            competencia: 'Penalidades',
            banca: 'IADES',
            tags: ['penalidade', 'advertência'],
          },
          {
            id: 'ce-q-18-5',
            enunciado: 'Um ato isolado de humilhação no trabalho caracteriza assédio moral?',
            alternativas: [
              { letra: 'A', texto: 'Sim, sempre.' },
              { letra: 'B', texto: 'Sim, se for grave.' },
              { letra: 'C', texto: 'Não, pois assédio exige conduta reiterada.' },
              { letra: 'D', texto: 'Sim, se for de superior.' },
              { letra: 'E', texto: 'Sim, se causar dano.' },
            ],
            gabarito: 'C',
            justificativa: 'Assédio moral exige conduta REITERADA. Ato ISOLADO, por mais grave que seja, não caracteriza assédio moral (pode ser outra infração).',
            dificuldade: 'Média',
            competencia: 'Ato isolado',
            banca: 'IADES',
            tags: ['ato isolado', 'reiteração'],
          },
          {
            id: 'ce-q-18-6',
            enunciado: 'O assédio moral praticado por colegas de trabalho do mesmo nível hierárquico é denominado:',
            alternativas: [
              { letra: 'A', texto: 'vertical descendente.' },
              { letra: 'B', texto: 'vertical ascendente.' },
              { letra: 'C', texto: 'horizontal.' },
              { letra: 'D', texto: 'diagonal.' },
              { letra: 'E', texto: 'institucional.' },
            ],
            gabarito: 'C',
            justificativa: 'Assédio HORIZONTAL é praticado entre colegas de trabalho do mesmo nível hierárquico.',
            dificuldade: 'Fácil',
            competencia: 'Formas de assédio',
            banca: 'IADES',
            tags: ['horizontal', 'forma'],
          },
        ],
      },
    },
  ],
};
