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
  ],
};
