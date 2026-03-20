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
  ],
};
