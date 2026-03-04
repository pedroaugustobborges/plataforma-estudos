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
  ],
};
