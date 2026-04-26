import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  Alert,
  Tabs,
  Tab,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  Create,
  ExpandMore,
  CheckCircle,
  Warning,
  Error as ErrorIcon,
  Lightbulb,
  MenuBook,
  Grade,
  Assessment,
} from '@mui/icons-material';

interface TemaDiscursivo {
  id: string;
  tema: string;
  area: string;
  enunciado: string;
  espelhoCorrecao: {
    criterio: string;
    pontuacao: number;
    descricao: string;
    aspectosAvaliados: string[];
  }[];
  respostaModelo: string;
  analise: string;
  errosComuns: {
    erro: string;
    impacto: string;
    comoEvitar: string;
  }[];
  dicasEspecificas: string[];
}

const temasDiscursivos: TemaDiscursivo[] = [
  {
    id: 'tema-1',
    tema: 'Princípios e Diretrizes do Sistema Único de Saúde (SUS)',
    area: 'SUS e Legislação',
    enunciado: `A Constituição Federal de 1988 estabeleceu a saúde como direito de todos e dever do Estado, criando o Sistema Único de Saúde (SUS). A Lei nº 8.080/1990 regulamentou esse sistema, definindo princípios e diretrizes que orientam a organização e o funcionamento dos serviços de saúde no Brasil.

Considerando a relevância do SUS para a garantia do direito à saúde, redija um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando os seguintes aspectos:

a) os princípios doutrinários do SUS (universalidade, equidade e integralidade) e sua importância para a efetivação do direito à saúde;

b) as diretrizes organizacionais do SUS (descentralização, regionalização e participação social) e seu papel na estruturação do sistema;

c) a aplicação desses princípios e diretrizes no contexto da vigilância em saúde, especialmente nas ações de vigilância sanitária.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura clara: introdução, desenvolvimento e conclusão',
          'Apresentação de tese e argumentos consistentes',
          'Linguagem formal e impessoal',
          'Progressão textual lógica',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos solicitados',
        aspectosAvaliados: [
          'Definição correta dos princípios doutrinários (universalidade, equidade, integralidade)',
          'Explicação adequada das diretrizes organizacionais',
          'Articulação com vigilância em saúde e vigilância sanitária',
          'Não tangenciamento do tema proposto',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica das ideias e argumentos',
        aspectosAvaliados: [
          'Ausência de contradições internas',
          'Relação lógica entre as partes do texto',
          'Argumentação bem fundamentada',
          'Conclusão coerente com o desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Uso adequado de elementos coesivos',
        aspectosAvaliados: [
          'Uso correto de conectivos e operadores argumentativos',
          'Referenciação adequada (pronomes, sinônimos)',
          'Articulação entre parágrafos',
          'Progressão temática clara',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza, precisão e adequação vocabular',
        aspectosAvaliados: [
          'Vocabulário técnico apropriado',
          'Clareza na exposição das ideias',
          'Precisão conceitual',
          'Adequação ao registro formal',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção gramatical e ortográfica',
        aspectosAvaliados: [
          'Ortografia correta',
          'Concordância verbal e nominal',
          'Regência verbal e nominal',
          'Pontuação adequada',
          'Acentuação correta',
          'Estrutura sintática adequada',
        ],
      },
    ],
    respostaModelo: `O Sistema Único de Saúde (SUS), instituído pela Constituição Federal de 1988 e regulamentado pela Lei nº 8.080/1990, representa uma das maiores conquistas sociais do Brasil, fundamentando-se em princípios e diretrizes que visam garantir o acesso universal e igualitário às ações e serviços de saúde. A compreensão desses fundamentos é essencial para a efetiva implementação das políticas de saúde, incluindo as ações de vigilância sanitária.

Os princípios doutrinários do SUS constituem o alicerce ético e filosófico do sistema. A universalidade assegura que a saúde é direito de todos, independentemente de contribuição prévia, rompendo com o modelo anterior de acesso restrito aos trabalhadores formais. A equidade reconhece que, embora todos tenham direito igual à saúde, as necessidades são diferentes, exigindo tratamento desigual para alcançar a igualdade substantiva. A integralidade, por sua vez, preconiza que as ações de saúde devem abranger desde a promoção até a reabilitação, considerando o indivíduo em sua totalidade biopsicossocial.

As diretrizes organizacionais operacionalizam esses princípios na estruturação do sistema. A descentralização político-administrativa distribui responsabilidades entre as três esferas de governo, com ênfase na municipalização, aproximando a gestão das necessidades locais. A regionalização e hierarquização organizam a rede de serviços em níveis de complexidade crescente, otimizando recursos e garantindo acesso integral. A participação da comunidade, institucionalizada pelas Conferências e Conselhos de Saúde, assegura o controle social e a democratização das decisões.

No contexto da vigilância em saúde, esses princípios e diretrizes ganham especial relevância. A vigilância sanitária, componente do Sistema Nacional de Vigilância Sanitária, exerce ações de regulação, controle e fiscalização que protegem a saúde coletiva. A universalidade se manifesta na proteção de toda a população contra riscos sanitários. A equidade orienta a priorização de ações em grupos mais vulneráveis. A integralidade se expressa na abordagem ampla dos determinantes de riscos.

Em síntese, os princípios e diretrizes do SUS constituem marcos orientadores fundamentais para a organização e funcionamento do sistema de saúde brasileiro. Sua aplicação na vigilância sanitária contribui para a proteção da saúde coletiva, demonstrando a coerência e complementaridade entre os diferentes componentes do SUS na busca pela efetivação do direito constitucional à saúde.`,
    analise: `Esta resposta modelo atende integralmente aos critérios de avaliação:

**Tipo de Texto (TX - 3 pontos):** O texto apresenta estrutura dissertativo-argumentativa clara, com introdução contextualizadora, desenvolvimento em três parágrafos abordando cada aspecto solicitado, e conclusão sintética. A linguagem é formal e impessoal.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos foram contemplados: (a) princípios doutrinários definidos e relacionados ao direito à saúde; (b) diretrizes organizacionais explicadas com suas funções; (c) articulação explícita com vigilância em saúde e sanitária.

**Coerência (CR - 3 pontos):** A argumentação segue progressão lógica, partindo dos fundamentos teóricos para a aplicação prática. Não há contradições e a conclusão retoma adequadamente os pontos desenvolvidos.

**Coesão (CS - 3 pontos):** Uso adequado de conectivos ("por sua vez", "em síntese"), referenciação clara e articulação fluida entre parágrafos.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso (biopsicossocial, municipalização, hierarquização), clareza expositiva e adequação ao registro formal acadêmico.

**Aspectos Registrais (AR - 15 pontos):** Texto sem erros gramaticais, ortográficos ou de pontuação.`,
    errosComuns: [
      {
        erro: 'Confundir princípios e diretrizes',
        impacto: 'Perda de até 2 pontos no critério TM por imprecisão conceitual',
        comoEvitar: 'Memorize: princípios são valores (universalidade, equidade, integralidade); diretrizes são formas de organização (descentralização, regionalização, participação)',
      },
      {
        erro: 'Não relacionar com vigilância sanitária',
        impacto: 'Perda de até 1,5 pontos no TM por não atender ao item "c" do enunciado',
        comoEvitar: 'Reserve um parágrafo específico para demonstrar como os princípios se aplicam na vigilância sanitária',
      },
      {
        erro: 'Texto apenas descritivo, sem argumentação',
        impacto: 'Perda de até 2 pontos no TX por inadequação ao gênero solicitado',
        comoEvitar: 'Além de definir conceitos, demonstre sua importância e inter-relações',
      },
      {
        erro: 'Conclusão que apenas repete a introdução',
        impacto: 'Perda de até 1 ponto no CR por falta de progressão argumentativa',
        comoEvitar: 'A conclusão deve sintetizar os argumentos desenvolvidos, não copiar o início',
      },
      {
        erro: 'Uso de linguagem coloquial ou primeira pessoa',
        impacto: 'Perda de pontos em ER e TX por inadequação ao registro formal',
        comoEvitar: 'Use terceira pessoa e evite expressões como "eu acho", "a gente", "tipo"',
      },
    ],
    dicasEspecificas: [
      'Cite a CF/88 e a Lei 8.080/1990 para demonstrar conhecimento legal',
      'Relacione equidade com o conceito de "tratar desigualmente os desiguais"',
      'Mencione os Conselhos e Conferências de Saúde ao tratar da participação social',
      'Vincule a vigilância sanitária ao poder de polícia administrativa',
    ],
  },
  {
    id: 'tema-2',
    tema: 'Vigilância em Saúde: Integração e Organização no SUS',
    area: 'Vigilância em Saúde',
    enunciado: `A Política Nacional de Vigilância em Saúde (PNVS), instituída pela Resolução nº 588/2018 do Conselho Nacional de Saúde, define a vigilância em saúde como processo contínuo e sistemático de coleta, consolidação, análise de dados e disseminação de informações sobre eventos relacionados à saúde.

Considerando a importância da vigilância em saúde para a proteção da saúde coletiva, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) os componentes da vigilância em saúde (vigilância epidemiológica, vigilância sanitária, vigilância em saúde ambiental e vigilância em saúde do trabalhador) e suas atribuições específicas;

b) a importância da integração entre esses componentes para a efetividade das ações de proteção à saúde;

c) o papel do Fiscal de Saúde Pública na operacionalização das ações de vigilância em saúde.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura tripartite bem definida',
          'Argumentação consistente sobre a integração',
          'Linguagem técnica e formal',
          'Posicionamento claro sobre o tema',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos',
        aspectosAvaliados: [
          'Definição correta dos quatro componentes da vigilância em saúde',
          'Argumentação sobre a importância da integração',
          'Descrição do papel do Fiscal de Saúde Pública',
          'Articulação entre os aspectos solicitados',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica e ausência de contradições',
        aspectosAvaliados: [
          'Progressão lógica do particular ao geral',
          'Conexão clara entre componentes e integração',
          'Argumentos bem fundamentados',
          'Conclusão derivada do desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual adequada',
        aspectosAvaliados: [
          'Conectivos apropriados entre ideias',
          'Referenciação clara e precisa',
          'Transições suaves entre parágrafos',
          'Unidade textual mantida',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão vocabular',
        aspectosAvaliados: [
          'Terminologia técnica correta',
          'Definições precisas',
          'Clareza na exposição',
          'Registro formal mantido',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação',
          'Estrutura sintática',
        ],
      },
    ],
    respostaModelo: `A vigilância em saúde constitui função essencial do Estado na proteção da saúde coletiva, configurando-se como processo contínuo de monitoramento e intervenção sobre determinantes e condicionantes de saúde. Conforme a Política Nacional de Vigilância em Saúde, esse campo integra diferentes componentes que, articulados, permitem uma abordagem ampla e efetiva dos riscos sanitários.

Os quatro componentes da vigilância em saúde possuem atribuições específicas e complementares. A vigilância epidemiológica dedica-se ao monitoramento de doenças e agravos, realizando investigação de surtos, notificação compulsória e análise da situação de saúde para subsidiar políticas públicas. A vigilância sanitária exerce o controle de riscos relacionados a produtos, serviços e ambientes, utilizando o poder de polícia administrativa para proteger a saúde da população. A vigilância em saúde ambiental monitora fatores ambientais que interferem na saúde, como qualidade da água, ar e solo, bem como desastres naturais e contaminantes químicos. A vigilância em saúde do trabalhador atua na identificação e controle de riscos ocupacionais, promovendo ambientes de trabalho seguros e saudáveis.

A integração entre esses componentes é fundamental para a efetividade das ações de proteção à saúde. Muitos problemas sanitários transcendem as fronteiras de um único componente, exigindo abordagem interdisciplinar. Um surto de intoxicação alimentar, por exemplo, demanda ação conjunta da vigilância epidemiológica (investigação dos casos), sanitária (inspeção do estabelecimento) e ambiental (análise de contaminantes). Essa integração potencializa recursos, evita duplicidade de ações e permite respostas mais rápidas e eficazes.

O Fiscal de Saúde Pública desempenha papel central na operacionalização dessas ações. Como agente do Estado, executa inspeções, lavra autos de infração, coleta amostras, orienta estabelecimentos e participa de investigações de agravos. Sua atuação materializa o poder de polícia sanitária, sendo essencial para a concretização dos objetivos da vigilância em saúde. Além disso, o fiscal atua como educador sanitário, promovendo a conscientização sobre boas práticas.

Portanto, a vigilância em saúde, com seus componentes integrados e operacionalizada por profissionais qualificados como o Fiscal de Saúde Pública, constitui instrumento indispensável para a proteção da saúde coletiva e a efetivação do direito constitucional à saúde no Brasil.`,
    analise: `Esta resposta demonstra domínio completo do tema:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa exemplar, com introdução que contextualiza, desenvolvimento que aborda cada aspecto em parágrafos específicos, e conclusão que sintetiza a argumentação.

**Tema/Assunto (TM - 3 pontos):** Os quatro componentes são corretamente definidos com suas atribuições. A integração é argumentada com exemplo concreto. O papel do fiscal é detalhado com atribuições específicas.

**Coerência (CR - 3 pontos):** Progressão lógica clara: definição geral → componentes específicos → necessidade de integração → papel do executor. Exemplo do surto alimentar ilustra bem a argumentação.

**Coesão (CS - 3 pontos):** Conectivos adequados ("por exemplo", "portanto", "além disso"), referenciação clara e transições bem construídas.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso (poder de polícia administrativa, notificação compulsória, determinantes e condicionantes), mantendo clareza.

**Aspectos Registrais (AR - 15 pontos):** Texto gramaticalmente correto em todos os aspectos.`,
    errosComuns: [
      {
        erro: 'Omitir um dos quatro componentes da vigilância em saúde',
        impacto: 'Perda de até 1,5 pontos no TM por abordagem incompleta do item "a"',
        comoEvitar: 'Use o mnemônico "ESTA": Epidemiológica, Sanitária, Trabalhador, Ambiental',
      },
      {
        erro: 'Tratar a integração de forma superficial, apenas mencionando que é importante',
        impacto: 'Perda de até 1 ponto no TM e CR por falta de desenvolvimento argumentativo',
        comoEvitar: 'Apresente um exemplo concreto de situação que exige atuação integrada',
      },
      {
        erro: 'Confundir vigilância sanitária com vigilância epidemiológica',
        impacto: 'Perda significativa no TM por erro conceitual grave',
        comoEvitar: 'Sanitária = produtos/serviços/ambientes; Epidemiológica = doenças/agravos',
      },
      {
        erro: 'Não mencionar o poder de polícia ao tratar do fiscal',
        impacto: 'Perda de pontos no TM por omissão de conceito central',
        comoEvitar: 'O poder de polícia é fundamento jurídico da atuação fiscalizatória',
      },
      {
        erro: 'Texto muito curto, abaixo de 20 linhas',
        impacto: 'Desconto proporcional na nota ou anulação',
        comoEvitar: 'Planeje: 1 parágrafo introdutório, 3-4 de desenvolvimento, 1 conclusivo',
      },
    ],
    dicasEspecificas: [
      'Cite a Resolução CNS nº 588/2018 que institui a PNVS',
      'Mencione a Lei nº 8.080/1990 como fundamento legal da vigilância',
      'Relacione vigilância sanitária com a ANVISA e sistema descentralizado',
      'Destaque que o fiscal é agente público com fé pública em seus atos',
    ],
  },
  {
    id: 'tema-3',
    tema: 'Sistema Nacional de Vigilância Sanitária (SNVS) e a Lei nº 9.782/1999',
    area: 'Vigilância Sanitária',
    enunciado: `A Lei nº 9.782/1999 definiu o Sistema Nacional de Vigilância Sanitária (SNVS) e criou a Agência Nacional de Vigilância Sanitária (ANVISA), estabelecendo um novo marco regulatório para a proteção da saúde no Brasil. O SNVS opera de forma descentralizada, com competências distribuídas entre União, Estados, Distrito Federal e Municípios.

Elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, discorrendo sobre:

a) a estrutura e os componentes do Sistema Nacional de Vigilância Sanitária, destacando a articulação entre os diferentes níveis de governo;

b) as competências da ANVISA como órgão coordenador do sistema e sua importância para a regulação sanitária no país;

c) o papel dos Estados na execução das ações de vigilância sanitária, com ênfase na atuação estadual como instância de referência técnica e coordenação regional.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura dissertativa clara',
          'Argumentação sobre a importância do sistema',
          'Linguagem técnico-jurídica adequada',
          'Posicionamento fundamentado',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos aspectos solicitados',
        aspectosAvaliados: [
          'Descrição da estrutura do SNVS',
          'Competências da ANVISA corretamente apresentadas',
          'Papel dos Estados como referência técnica',
          'Articulação entre níveis federativos',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica do conteúdo',
        aspectosAvaliados: [
          'Sequência lógica: sistema → coordenação → execução',
          'Argumentos consistentes',
          'Ausência de contradições',
          'Conclusão coerente',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Elementos coesivos adequados',
          'Referenciação clara',
          'Progressão temática',
          'Conexão entre parágrafos',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão',
        aspectosAvaliados: [
          'Vocabulário técnico apropriado',
          'Precisão nas definições legais',
          'Clareza expositiva',
          'Registro formal',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia',
          'Concordância',
          'Regência',
          'Pontuação',
          'Sintaxe',
        ],
      },
    ],
    respostaModelo: `O Sistema Nacional de Vigilância Sanitária (SNVS), instituído pela Lei nº 9.782/1999, representa marco fundamental na organização das ações de proteção à saúde no Brasil. Estruturado sob os princípios do federalismo cooperativo, o sistema articula competências entre os entes federativos, garantindo cobertura nacional com respeito às peculiaridades regionais.

O SNVS compreende o conjunto de ações e serviços de vigilância sanitária executados por instituições da administração pública direta e indireta da União, Estados, Distrito Federal e Municípios. Sua estrutura inclui a ANVISA como órgão federal, as vigilâncias sanitárias estaduais e do Distrito Federal, as vigilâncias municipais e os laboratórios de saúde pública. A articulação entre esses componentes ocorre mediante pactuação na Comissão Intergestores Tripartite (CIT) e nas Comissões Intergestores Bipartite (CIB) estaduais, onde são definidas responsabilidades e fluxos operacionais.

A Agência Nacional de Vigilância Sanitária (ANVISA), autarquia federal vinculada ao Ministério da Saúde, exerce papel central como coordenadora do sistema. Compete-lhe estabelecer normas, propor políticas e diretrizes, além de promover a articulação com os demais componentes do SNVS. A ANVISA também executa ações de alta complexidade, como registro de medicamentos e produtos para saúde, controle sanitário de portos, aeroportos e fronteiras, além de monitoramento de eventos adversos. Sua atuação regulatória confere segurança jurídica e técnica ao sistema, sendo referência internacional em vigilância sanitária.

Os Estados desempenham função estratégica como instância intermediária do SNVS. Atuam na coordenação das ações de vigilância sanitária em âmbito regional, prestando assessoria técnica aos municípios e executando ações de média e alta complexidade. As vigilâncias estaduais também são responsáveis pela capacitação de profissionais municipais, pela operação de laboratórios de referência regional e pela execução de ações em municípios que não possuem estrutura própria. No Estado de Goiás, a Superintendência de Vigilância em Saúde exerce essas atribuições, coordenando o componente estadual do SNVS.

Em conclusão, a estrutura descentralizada e articulada do SNVS, com a ANVISA coordenando nacionalmente e os Estados atuando como referência regional, permite que a vigilância sanitária alcance todo o território brasileiro, protegendo a saúde da população mediante ações de regulação, controle e fiscalização baseadas em evidências técnico-científicas.`,
    analise: `Esta resposta atende plenamente aos critérios avaliativos:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativa bem definida, com introdução que apresenta o tema, desenvolvimento em três parágrafos correspondentes aos itens solicitados, e conclusão sintética.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados: estrutura do SNVS com seus componentes; competências da ANVISA detalhadas; papel dos Estados como referência técnica, com menção específica a Goiás.

**Coerência (CR - 3 pontos):** Progressão lógica do sistema geral para o coordenador federal e depois para o nível estadual. Argumentação consistente e conclusão que retoma os pontos principais.

**Coesão (CS - 3 pontos):** Uso adequado de conectivos e referenciação. Transições suaves entre os níveis federativos.

**Expressão (ER - 3 pontos):** Vocabulário técnico-jurídico preciso (autarquia, federalismo cooperativo, pactuação), terminologia específica da área.

**Aspectos Registrais (AR - 15 pontos):** Correção em todos os aspectos gramaticais.`,
    errosComuns: [
      {
        erro: 'Confundir ANVISA com Ministério da Saúde',
        impacto: 'Perda de pontos no TM por erro conceitual',
        comoEvitar: 'ANVISA é autarquia VINCULADA ao MS, não é o próprio ministério. MS formula políticas; ANVISA executa e regula',
      },
      {
        erro: 'Não mencionar o papel dos Estados, focando apenas em União e Municípios',
        impacto: 'Perda de até 1,5 pontos por não atender ao item "c" do enunciado',
        comoEvitar: 'O item "c" pede ênfase justamente na atuação estadual - dedique um parágrafo a isso',
      },
      {
        erro: 'Não citar a Lei nº 9.782/1999 no texto',
        impacto: 'Perda de pontos no TM por não demonstrar conhecimento do marco legal',
        comoEvitar: 'Cite a lei já na introdução, como fundamento legal do sistema',
      },
      {
        erro: 'Descrever o sistema sem explicar a articulação entre os entes',
        impacto: 'Perda de pontos por abordagem superficial',
        comoEvitar: 'Mencione CIT, CIB e os mecanismos de pactuação interfederativa',
      },
      {
        erro: 'Usar siglas sem explicar seu significado na primeira ocorrência',
        impacto: 'Perda de pontos em ER por falta de clareza',
        comoEvitar: 'Na primeira vez, escreva por extenso: Sistema Nacional de Vigilância Sanitária (SNVS)',
      },
    ],
    dicasEspecificas: [
      'Mencione que a ANVISA foi criada pela mesma Lei 9.782/1999',
      'Cite exemplos de competências exclusivas da ANVISA (registro, portos/aeroportos)',
      'Relacione a estrutura do SNVS com o princípio da descentralização do SUS',
      'Se possível, mencione a Superintendência de Vigilância em Saúde de Goiás',
    ],
  },
  {
    id: 'tema-4',
    tema: 'Poder de Polícia Administrativa e Fiscalização Sanitária',
    area: 'Direito Sanitário',
    enunciado: `O poder de polícia administrativa constitui fundamento jurídico essencial para a atuação da vigilância sanitária, permitindo ao Estado intervir na esfera privada para proteger a saúde coletiva. A Lei nº 6.437/1977 tipifica as infrações sanitárias e estabelece o processo administrativo para apuração de irregularidades.

Considerando a importância do poder de polícia para a efetividade das ações de vigilância sanitária, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) o conceito de poder de polícia administrativa e seus atributos (discricionariedade, autoexecutoriedade e coercibilidade), relacionando-os com a atuação da vigilância sanitária;

b) os principais instrumentos legais utilizados na fiscalização sanitária (auto de infração, termo de apreensão, interdição) e seus requisitos de validade;

c) os princípios que orientam a aplicação de sanções administrativas e a importância do devido processo legal na apuração de infrações sanitárias.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura argumentativa clara',
          'Fundamentação jurídica adequada',
          'Linguagem técnico-jurídica',
          'Posicionamento sobre a importância do tema',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos aspectos',
        aspectosAvaliados: [
          'Definição correta de poder de polícia e seus atributos',
          'Descrição dos instrumentos legais com requisitos',
          'Princípios aplicáveis às sanções',
          'Devido processo legal explicado',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica',
        aspectosAvaliados: [
          'Progressão do conceito à aplicação',
          'Articulação entre fundamento e instrumentos',
          'Argumentos juridicamente consistentes',
          'Conclusão derivada do desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referenciação jurídica clara',
          'Transições lógicas',
          'Unidade argumentativa',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão jurídica',
        aspectosAvaliados: [
          'Terminologia jurídica correta',
          'Definições precisas',
          'Clareza na exposição de conceitos',
          'Registro formal jurídico',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `O poder de polícia administrativa constitui prerrogativa do Estado para limitar o exercício de direitos individuais em prol do interesse coletivo. No âmbito da vigilância sanitária, esse poder fundamenta a atuação fiscalizatória e regulatória que visa proteger a saúde da população, representando instrumento indispensável para a efetivação do direito constitucional à saúde.

O conceito de poder de polícia, positivado no artigo 78 do Código Tributário Nacional, compreende a atividade administrativa que limita ou disciplina direitos em razão do interesse público concernente à segurança, higiene e saúde. Seus atributos conferem eficácia à atuação estatal. A discricionariedade permite à autoridade sanitária avaliar a conveniência e oportunidade de suas ações dentro dos limites legais. A autoexecutoriedade autoriza a administração a executar diretamente suas decisões, como a apreensão de produtos impróprios, sem necessidade de prévia autorização judicial. A coercibilidade possibilita a imposição das medidas independentemente da anuência do particular, garantindo a efetividade da proteção sanitária.

Os instrumentos legais da fiscalização sanitária materializam o exercício desse poder. O auto de infração documenta a constatação de irregularidades, devendo conter descrição precisa dos fatos, enquadramento legal e identificação do autuado. O termo de apreensão e inutilização aplica-se a produtos que oferecem risco à saúde. A interdição, medida mais gravosa, suspende atividades de estabelecimentos que representam perigo iminente. Todos esses instrumentos devem observar requisitos de validade: competência do agente, forma prescrita em lei, objeto lícito, motivo verdadeiro e finalidade pública.

A aplicação de sanções administrativas orienta-se por princípios constitucionais e legais. O devido processo legal assegura ao autuado o direito à ampla defesa e ao contraditório, com prazos para impugnação e recursos. A proporcionalidade exige que a penalidade seja adequada à gravidade da infração. A legalidade determina que somente condutas previamente tipificadas podem ser sancionadas, conforme a Lei nº 6.437/1977. A motivação obriga a fundamentação expressa das decisões administrativas.

Em suma, o poder de polícia sanitária, exercido mediante instrumentos legais adequados e com observância do devido processo legal, constitui mecanismo essencial para que a vigilância sanitária cumpra sua missão de proteger a saúde coletiva, equilibrando a intervenção estatal com o respeito aos direitos individuais.`,
    analise: `Esta resposta demonstra sólido conhecimento jurídico-administrativo:

**Tipo de Texto (TX - 3 pontos):** Estrutura argumentativa bem construída, com introdução que contextualiza o tema, desenvolvimento que aborda cada aspecto em parágrafos específicos, e conclusão que sintetiza a argumentação.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados com precisão: poder de polícia definido com seus três atributos; instrumentos legais descritos com requisitos; princípios das sanções e devido processo legal explicados.

**Coerência (CR - 3 pontos):** Progressão lógica do fundamento jurídico (poder de polícia) aos instrumentos e depois aos limites (princípios). Argumentação consistente.

**Coesão (CS - 3 pontos):** Conectivos adequados, terminologia jurídica consistente, transições claras entre os aspectos.

**Expressão (ER - 3 pontos):** Vocabulário jurídico preciso (prerrogativa, positivado, autoexecutoriedade, autuado), demonstrando domínio da linguagem técnica.

**Aspectos Registrais (AR - 15 pontos):** Correção gramatical completa.`,
    errosComuns: [
      {
        erro: 'Confundir os três atributos do poder de polícia',
        impacto: 'Perda significativa no TM por erro conceitual fundamental',
        comoEvitar: 'Memorize: Discricionariedade (escolha), Autoexecutoriedade (execução direta), Coercibilidade (imposição)',
      },
      {
        erro: 'Não mencionar a Lei nº 6.437/1977',
        impacto: 'Perda de pontos por não demonstrar conhecimento do marco legal específico',
        comoEvitar: 'Esta lei é central no tema - cite-a ao tratar das infrações e sanções',
      },
      {
        erro: 'Esquecer de mencionar ampla defesa e contraditório',
        impacto: 'Perda de pontos no item "c" por omissão de garantias fundamentais',
        comoEvitar: 'Devido processo legal = ampla defesa + contraditório - são indissociáveis',
      },
      {
        erro: 'Não explicar os requisitos de validade dos atos administrativos',
        impacto: 'Abordagem incompleta do item "b"',
        comoEvitar: 'Mencione: competência, forma, objeto, motivo e finalidade',
      },
      {
        erro: 'Apresentar o poder de polícia como arbitrário',
        impacto: 'Erro conceitual grave - demonstra desconhecimento dos limites legais',
        comoEvitar: 'Enfatize que o poder de polícia é limitado pela lei e pelos princípios constitucionais',
      },
    ],
    dicasEspecificas: [
      'Cite o art. 78 do CTN como definição legal de poder de polícia',
      'Mencione que a interdição pode ser cautelar ou definitiva',
      'Relacione os princípios com o art. 37 da CF (legalidade, impessoalidade, moralidade)',
      'Destaque que o fiscal tem fé pública em suas constatações',
    ],
  },
  {
    id: 'tema-5',
    tema: 'Vigilância em Saúde no Estado de Goiás: Lei Estadual nº 16.140/2007',
    area: 'Legislação Estadual',
    enunciado: `A Lei Estadual nº 16.140/2007 dispõe sobre o Sistema de Vigilância em Saúde no Estado de Goiás, estabelecendo competências, estrutura organizacional e procedimentos para as ações de vigilância sanitária, epidemiológica, ambiental e saúde do trabalhador no âmbito estadual.

Considerando a importância da legislação estadual para a operacionalização das ações de vigilância em saúde, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) a organização do Sistema de Vigilância em Saúde no Estado de Goiás e as competências das instâncias estaduais e municipais;

b) os instrumentos e procedimentos previstos para a fiscalização sanitária estadual, incluindo o processo administrativo sanitário;

c) a relação entre a legislação estadual e o Sistema Nacional de Vigilância Sanitária (SNVS), demonstrando como Goiás se insere no contexto federativo da vigilância em saúde.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura dissertativa bem definida',
          'Argumentação sobre a importância da legislação',
          'Linguagem técnico-jurídica apropriada',
          'Posicionamento claro',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos',
        aspectosAvaliados: [
          'Organização do sistema estadual descrita',
          'Instrumentos e processo administrativo explicados',
          'Relação com SNVS demonstrada',
          'Competências Estado/Município diferenciadas',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica',
        aspectosAvaliados: [
          'Progressão do estadual ao nacional',
          'Articulação entre competências e instrumentos',
          'Argumentos bem fundamentados',
          'Conclusão coerente',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referenciação clara',
          'Transições entre aspectos',
          'Unidade textual',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão',
        aspectosAvaliados: [
          'Vocabulário técnico correto',
          'Precisão conceitual',
          'Clareza expositiva',
          'Registro formal',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia',
          'Concordância',
          'Regência',
          'Pontuação',
          'Sintaxe',
        ],
      },
    ],
    respostaModelo: `A Lei Estadual nº 16.140/2007 constitui marco normativo fundamental para a vigilância em saúde no Estado de Goiás, regulamentando a estrutura, competências e procedimentos do sistema estadual em consonância com a legislação federal e os princípios do SUS. Sua análise permite compreender como Goiás operacionaliza as ações de proteção à saúde coletiva no contexto do federalismo sanitário brasileiro.

O Sistema de Vigilância em Saúde de Goiás organiza-se de forma descentralizada, com a Secretaria de Estado da Saúde (SES-GO), por meio da Superintendência de Vigilância em Saúde, exercendo a coordenação estadual. Compete ao Estado elaborar normas complementares, coordenar ações regionais, prestar cooperação técnica aos municípios, executar ações de média e alta complexidade, manter laboratórios de referência e capacitar recursos humanos. Aos municípios cabe a execução das ações de vigilância em saúde de âmbito local, incluindo inspeções em estabelecimentos de interesse à saúde, investigação de agravos e aplicação de medidas sanitárias em seu território.

Os instrumentos de fiscalização sanitária previstos na legislação estadual incluem termo de visita, auto de infração, termo de intimação, termo de apreensão e inutilização, termo de interdição e termo de coleta de amostras. O processo administrativo sanitário segue rito próprio, assegurando o contraditório e a ampla defesa. Iniciado pela lavratura do auto de infração, permite ao autuado apresentar defesa prévia, produzir provas e interpor recursos administrativos. As penalidades variam de advertência a cancelamento de licença, aplicadas conforme a gravidade da infração e os antecedentes do infrator.

A relação entre a legislação estadual e o Sistema Nacional de Vigilância Sanitária (SNVS) fundamenta-se no pacto federativo e no princípio da descentralização do SUS. Goiás integra o SNVS como instância intermediária, recebendo diretrizes da ANVISA e do Ministério da Saúde, ao mesmo tempo em que coordena a atuação dos municípios goianos. Essa articulação ocorre mediante pactuações nas instâncias colegiadas, como a CIB-GO, onde são definidas responsabilidades e critérios de repartição de competências. A legislação estadual complementa, sem contrariar, a normativa federal, adaptando-a às peculiaridades regionais.

Portanto, a Lei nº 16.140/2007 insere Goiás de forma integrada no SNVS, assegurando que a vigilância em saúde estadual opere em harmonia com o sistema nacional, contribuindo para a proteção da saúde da população goiana mediante ações coordenadas e tecnicamente fundamentadas.`,
    analise: `Esta resposta demonstra conhecimento específico da legislação estadual:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa completa, com introdução contextualizadora, desenvolvimento em três parágrafos correspondentes aos aspectos solicitados, e conclusão que integra os pontos discutidos.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos abordados: organização do sistema estadual com competências diferenciadas; instrumentos e processo administrativo detalhados; relação com SNVS demonstrada através do pacto federativo.

**Coerência (CR - 3 pontos):** Progressão lógica da organização estadual para os instrumentos e depois para a inserção no sistema nacional. Argumentação consistente e conclusão derivada do desenvolvimento.

**Coesão (CS - 3 pontos):** Conectivos adequados, referenciação clara à legislação e transições bem construídas entre os aspectos.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso (pacto federativo, instâncias colegiadas, CIB-GO), demonstrando conhecimento específico do contexto goiano.

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa.`,
    errosComuns: [
      {
        erro: 'Não citar a Lei nº 16.140/2007 no texto',
        impacto: 'Perda significativa no TM - a lei é o tema central da questão',
        comoEvitar: 'Cite a lei já na introdução e faça referências a ela ao longo do texto',
      },
      {
        erro: 'Confundir competências estaduais e municipais',
        impacto: 'Perda de pontos por imprecisão no item "a"',
        comoEvitar: 'Estado = coordenação, referência técnica, complexidade; Município = execução local',
      },
      {
        erro: 'Não mencionar o processo administrativo sanitário',
        impacto: 'Abordagem incompleta do item "b"',
        comoEvitar: 'Descreva as fases: auto de infração, defesa, julgamento, recursos',
      },
      {
        erro: 'Tratar Goiás isoladamente, sem conexão com o SNVS',
        impacto: 'Perda de pontos no item "c" por não demonstrar a inserção federativa',
        comoEvitar: 'Explique como Goiás se articula com ANVISA, MS e municípios',
      },
      {
        erro: 'Não mencionar a Superintendência de Vigilância em Saúde',
        impacto: 'Perda de pontos por não conhecer a estrutura estadual',
        comoEvitar: 'Cite que a SVS é o órgão da SES-GO responsável pela coordenação',
      },
    ],
    dicasEspecificas: [
      'Mencione a Lei nº 13.800/2001 (Código de Saúde de Goiás) como complementar',
      'Cite a CIB-GO como instância de pactuação estadual',
      'Relacione com a Lei federal 8.080/1990 e Lei 9.782/1999',
      'Demonstre conhecimento de que o cargo de Fiscal de Saúde Pública é estadual',
    ],
  },
  {
    id: 'tema-6',
    tema: 'Caso Concreto: Surto de Doença Transmitida por Alimento em Restaurante',
    area: 'Vigilância Sanitária de Alimentos',
    enunciado: `CASO CONCRETO

A Vigilância Sanitária Estadual de Goiás recebeu notificação da Vigilância Epidemiológica informando a ocorrência de 47 casos de gastroenterite aguda em pacientes atendidos em unidades de saúde de Goiânia nas últimas 48 horas. A investigação epidemiológica preliminar identificou que todos os pacientes consumiram refeições no Restaurante "Sabor da Terra", localizado na região central da capital, nos dias 15 e 16 do corrente mês. Os sintomas predominantes foram diarreia, vômitos e febre, com início entre 6 e 12 horas após a ingestão dos alimentos.

Você, Fiscal de Saúde Pública do Estado de Goiás, foi designado para realizar inspeção sanitária no estabelecimento. Durante a fiscalização, foram constatadas as seguintes irregularidades: ausência de controle de temperatura das preparações quentes mantidas em buffet (temperatura aferida de 42°C); manipuladores sem uniformes adequados e sem comprovação de capacitação em boas práticas; presença de alimentos vencidos no estoque; e ausência de registros de higienização de equipamentos.

Considerando a situação descrita, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) as medidas sanitárias imediatas que devem ser adotadas pelo fiscal diante das irregularidades constatadas, fundamentando-as legalmente;

b) os procedimentos de coleta de amostras e investigação que devem ser realizados em articulação com a vigilância epidemiológica;

c) o processo administrativo sanitário aplicável ao caso, incluindo as infrações configuradas e as penalidades cabíveis conforme a legislação vigente.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura clara com introdução, desenvolvimento e conclusão',
          'Argumentação técnica fundamentada no caso concreto',
          'Linguagem formal e técnica apropriada',
          'Posicionamento profissional adequado ao cargo de fiscal',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos do caso',
        aspectosAvaliados: [
          'Medidas sanitárias imediatas corretamente indicadas (interdição, apreensão)',
          'Procedimentos de coleta de amostras descritos tecnicamente',
          'Articulação com vigilância epidemiológica demonstrada',
          'Infrações e penalidades fundamentadas na Lei 6.437/1977',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica da resposta ao caso',
        aspectosAvaliados: [
          'Sequência lógica: medidas imediatas → investigação → processo',
          'Argumentos consistentes com a situação descrita',
          'Proporcionalidade das medidas às irregularidades',
          'Conclusão que integra as ações propostas',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual adequada',
        aspectosAvaliados: [
          'Conectivos que estabelecem relações de causa e consequência',
          'Referência adequada aos elementos do caso',
          'Progressão temática clara',
          'Transições entre os aspectos solicitados',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão técnica',
        aspectosAvaliados: [
          'Vocabulário técnico de vigilância sanitária de alimentos',
          'Terminologia legal correta',
          'Precisão nos procedimentos descritos',
          'Clareza nas fundamentações',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação corretas',
          'Concordância verbal e nominal',
          'Regência adequada',
          'Pontuação correta',
          'Estrutura sintática adequada',
        ],
      },
    ],
    respostaModelo: `A ocorrência de surtos de Doenças Transmitidas por Alimentos (DTA) constitui evento de relevância para a saúde pública que demanda atuação imediata e articulada da vigilância sanitária. O caso em análise evidencia grave situação de risco sanitário, exigindo do Fiscal de Saúde Pública medidas proporcionais à gravidade das irregularidades constatadas e ao dano potencial à coletividade.

Diante das irregularidades verificadas durante a inspeção, as medidas sanitárias imediatas devem priorizar a interrupção do risco à saúde. A interdição cautelar do estabelecimento é medida imprescindível, fundamentada no artigo 23 da Lei nº 6.437/1977, considerando que as condições constatadas configuram risco iminente à saúde pública. Simultaneamente, deve-se proceder à apreensão e inutilização dos alimentos vencidos encontrados no estoque, lavrando-se o respectivo Termo de Apreensão e Inutilização. O Auto de Infração deve ser lavrado descrevendo pormenorizadamente cada irregularidade constatada, com enquadramento legal específico para cada conduta infracional.

A investigação do surto requer articulação estreita com a Vigilância Epidemiológica, conforme preconiza a Política Nacional de Vigilância em Saúde. Devem ser coletadas amostras de alimentos suspeitos, especialmente das preparações servidas nos dias do surto, observando-se a cadeia de custódia e os procedimentos técnicos de coleta, acondicionamento e transporte estabelecidos pelo LACEN-GO. Amostras de sobras de alimentos, matérias-primas e água devem ser encaminhadas para análise microbiológica. Paralelamente, a vigilância epidemiológica conduzirá a investigação dos casos, realizando inquérito alimentar e coleta de amostras clínicas dos pacientes para identificação do agente etiológico.

O processo administrativo sanitário seguirá o rito previsto na Lei Estadual nº 16.140/2007 e, subsidiariamente, na Lei Federal nº 6.437/1977. As infrações configuradas incluem: manter alimentos em condições inadequadas de conservação (art. 10, inciso IV); comercializar produtos com prazo de validade vencido (art. 10, inciso VI); descumprir normas de boas práticas de manipulação (art. 10, inciso II). As penalidades aplicáveis variam de advertência a multa e interdição definitiva, considerando-se a gravidade das infrações, os antecedentes do infrator e as circunstâncias atenuantes ou agravantes. No presente caso, a existência de vítimas constitui circunstância agravante que deve ser considerada na dosimetria da penalidade.

Em conclusão, a atuação do Fiscal de Saúde Pública em casos de surtos de DTA deve ser tempestiva, tecnicamente fundamentada e juridicamente embasada, garantindo a proteção da saúde coletiva sem prejuízo do devido processo legal e do direito de defesa do autuado.`,
    analise: `Esta resposta demonstra domínio técnico e legal do tema:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa adequada, com introdução que contextualiza o caso, desenvolvimento em três parágrafos correspondentes aos itens solicitados, e conclusão que sintetiza a atuação esperada do fiscal.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados com profundidade: medidas imediatas (interdição, apreensão, auto de infração); coleta de amostras com menção ao LACEN-GO e articulação com VE; processo administrativo com citação de infrações específicas da Lei 6.437/1977.

**Coerência (CR - 3 pontos):** Sequência lógica de ações: primeiro interrompe o risco (interdição), depois investiga (coleta de amostras), por fim responsabiliza (processo administrativo). A menção às circunstâncias agravantes demonstra análise completa do caso.

**Coesão (CS - 3 pontos):** Conectivos adequados estabelecendo relações de causa/consequência e sequência temporal. Referências claras ao caso concreto ao longo do texto.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso (DTA, cadeia de custódia, agente etiológico, dosimetria da penalidade, LACEN-GO), demonstrando conhecimento especializado.

**Aspectos Registrais (AR - 15 pontos):** Correção gramatical completa.`,
    errosComuns: [
      {
        erro: 'Não indicar a interdição cautelar como medida imediata',
        impacto: 'Perda significativa no TM - a interdição é medida essencial em casos de risco iminente',
        comoEvitar: 'Em surtos de DTA com irregularidades graves, a interdição cautelar é medida prioritária prevista no art. 23 da Lei 6.437/1977',
      },
      {
        erro: 'Ignorar a articulação com a Vigilância Epidemiológica',
        impacto: 'Perda de pontos no item "b" - a questão pede expressamente essa articulação',
        comoEvitar: 'Descreva o trabalho conjunto: VISA coleta amostras de alimentos, VE investiga casos e coleta amostras clínicas',
      },
      {
        erro: 'Não fundamentar legalmente as medidas adotadas',
        impacto: 'Perda de pontos no TM e CR por falta de embasamento jurídico',
        comoEvitar: 'Cite a Lei 6.437/1977 (federal) e a Lei 16.140/2007 (estadual) ao fundamentar as ações',
      },
      {
        erro: 'Confundir interdição cautelar com interdição definitiva',
        impacto: 'Erro conceitual que demonstra desconhecimento do processo',
        comoEvitar: 'Interdição cautelar é imediata (medida acautelatória); interdição definitiva é penalidade aplicada após processo',
      },
      {
        erro: 'Não mencionar o LACEN-GO na coleta de amostras',
        impacto: 'Perda de pontos por não demonstrar conhecimento da estrutura estadual',
        comoEvitar: 'O LACEN-GO é o laboratório de referência para análises de amostras em Goiás',
      },
    ],
    dicasEspecificas: [
      'Mencione a temperatura adequada para alimentos quentes (acima de 60°C) conforme RDC 216/2004',
      'Cite a importância da cadeia de custódia para validade probatória das amostras',
      'Relacione as infrações com os incisos específicos do art. 10 da Lei 6.437/1977',
      'Demonstre conhecimento da função do LACEN-GO no sistema estadual',
      'Mencione que a existência de vítimas é circunstância agravante na dosimetria da pena',
    ],
  },
  {
    id: 'tema-7',
    tema: 'Caso Concreto: Irregularidades em Drogaria com Medicamentos Controlados',
    area: 'Vigilância Sanitária de Medicamentos',
    enunciado: `CASO CONCRETO

Durante fiscalização de rotina em uma drogaria localizada no município de Anápolis-GO, você, Fiscal de Saúde Pública do Estado de Goiás, constatou as seguintes irregularidades: dispensação de medicamentos antimicrobianos (antibióticos) sem a devida retenção de receita; medicamentos sujeitos a controle especial (Portaria SVS/MS nº 344/1998) armazenados fora do armário fechado com chave; ausência do farmacêutico responsável técnico durante o horário de funcionamento; e 15 unidades de medicamento controlado "Clonazepam 2mg" com registro na ANVISA vencido há 6 meses no estoque da farmácia.

O proprietário do estabelecimento alegou que o farmacêutico havia saído para almoço, que os medicamentos controlados estavam sendo reorganizados no momento da inspeção, e que desconhecia o vencimento do registro do Clonazepam, pois o medicamento ainda estava dentro do prazo de validade.

Considerando a situação descrita, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) a análise das irregularidades constatadas à luz da legislação sanitária vigente, diferenciando as infrações de natureza técnica das infrações de natureza administrativa;

b) as medidas sanitárias cabíveis para cada irregularidade identificada, justificando a proporcionalidade das ações;

c) a responsabilização do estabelecimento e do responsável técnico, considerando as atribuições legais de cada um perante a legislação sanitária e profissional.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura dissertativa clara e organizada',
          'Argumentação técnica sobre cada irregularidade',
          'Linguagem formal e técnica adequada',
          'Análise crítica das alegações do proprietário',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos',
        aspectosAvaliados: [
          'Análise correta de cada irregularidade com fundamentação legal',
          'Diferenciação entre infrações técnicas e administrativas',
          'Medidas proporcionais a cada situação',
          'Responsabilização adequada do estabelecimento e RT',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica da análise',
        aspectosAvaliados: [
          'Sequência lógica: análise → medidas → responsabilização',
          'Proporcionalidade entre irregularidade e medida',
          'Refutação adequada das alegações do proprietário',
          'Conclusão coerente com o desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referência clara às irregularidades do caso',
          'Progressão temática lógica',
          'Transições bem construídas',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão técnica',
        aspectosAvaliados: [
          'Vocabulário técnico farmacêutico adequado',
          'Terminologia legal correta',
          'Citação precisa da legislação aplicável',
          'Clareza na exposição das medidas',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `A fiscalização de drogarias constitui atividade essencial da vigilância sanitária para garantir a segurança no uso de medicamentos pela população. O caso em análise revela múltiplas irregularidades que comprometem a saúde pública e violam dispositivos legais específicos, demandando atuação firme e proporcional do Fiscal de Saúde Pública.

A análise das irregularidades permite classificá-las conforme sua natureza. São infrações de natureza técnica: a dispensação de antimicrobianos sem retenção de receita, que viola a RDC ANVISA nº 20/2011; o armazenamento inadequado de medicamentos controlados fora de armário trancado, em desacordo com a Portaria SVS/MS nº 344/1998; e a manutenção de medicamento com registro vencido, infração ao art. 12 da Lei nº 6.360/1976. A ausência do farmacêutico responsável técnico configura infração administrativa, violando o art. 15 da Lei nº 5.991/1973 e a RDC ANVISA nº 44/2009, que exigem a presença do profissional durante todo o horário de funcionamento.

As medidas sanitárias devem ser proporcionais à gravidade de cada irregularidade. Para os medicamentos com registro vencido, impõe-se a apreensão e inutilização, pois são considerados produtos sem registro válido, cuja comercialização é vedada pelo art. 12 da Lei nº 6.360/1976. Para as demais irregularidades, a lavratura de Auto de Infração é medida adequada, com descrição individualizada de cada conduta. A interdição cautelar do estabelecimento pode ser considerada se caracterizado risco iminente à saúde, especialmente diante da ausência do responsável técnico e do descontrole de substâncias sujeitas a regime especial. As alegações do proprietário não elidem as infrações, pois a legislação não admite exceções para horário de refeição do farmacêutico nem para reorganização do estoque.

A responsabilização recai tanto sobre o estabelecimento quanto sobre o responsável técnico, em esferas distintas. O estabelecimento responde administrativamente perante a vigilância sanitária, sujeitando-se às penalidades da Lei nº 6.437/1977, que incluem advertência, multa, apreensão de produtos, interdição e cancelamento de licença. O farmacêutico responsável técnico, além de corresponsável pelas infrações sanitárias, pode ser responsabilizado perante o Conselho Regional de Farmácia por descumprimento de suas atribuições legais, conforme Lei nº 3.820/1960. A comunicação ao CRF-GO é recomendável para apuração de eventual infração ética.

Em síntese, o caso demanda atuação rigorosa do fiscal, com medidas proporcionais que garantam a proteção da saúde pública, sem prejuízo da responsabilização nas esferas administrativa, sanitária e profissional dos envolvidos.`,
    analise: `Esta resposta demonstra conhecimento aprofundado da legislação de medicamentos:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativa exemplar, com introdução contextualizadora, desenvolvimento que aborda sistematicamente cada aspecto solicitado, e conclusão integradora. As alegações do proprietário são adequadamente refutadas.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados: infrações classificadas como técnicas ou administrativas com fundamentação legal específica (RDC 20/2011, Portaria 344/1998, Lei 6.360/1976, Lei 5.991/1973); medidas proporcionais indicadas para cada situação; responsabilização diferenciada do estabelecimento e do RT.

**Coerência (CR - 3 pontos):** Progressão lógica clara, com proporcionalidade entre irregularidades e medidas. A refutação das alegações é tecnicamente fundamentada.

**Coesão (CS - 3 pontos):** Conectivos adequados, referências claras ao caso concreto, transições bem construídas entre os aspectos.

**Expressão (ER - 3 pontos):** Vocabulário técnico-jurídico preciso (registro vencido, responsável técnico, apreensão e inutilização, esferas de responsabilização), com citação correta de múltiplas normas.

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa.`,
    errosComuns: [
      {
        erro: 'Confundir prazo de validade do medicamento com validade do registro na ANVISA',
        impacto: 'Perda significativa no TM por erro conceitual grave',
        comoEvitar: 'Validade do produto = data de vencimento do medicamento; Validade do registro = autorização da ANVISA para comercialização (são coisas distintas)',
      },
      {
        erro: 'Não citar a Portaria SVS/MS nº 344/1998 ao tratar de medicamentos controlados',
        impacto: 'Perda de pontos por não demonstrar conhecimento da norma específica',
        comoEvitar: 'A Portaria 344/1998 é a norma central para medicamentos sujeitos a controle especial - sempre a cite',
      },
      {
        erro: 'Ignorar a responsabilização do farmacêutico RT',
        impacto: 'Abordagem incompleta do item "c"',
        comoEvitar: 'Mencione a responsabilidade perante VISA e também perante o CRF-GO',
      },
      {
        erro: 'Aceitar as justificativas do proprietário como válidas',
        impacto: 'Demonstra desconhecimento da legislação',
        comoEvitar: 'A Lei 5.991/1973 exige farmacêutico durante TODO o funcionamento, sem exceção para almoço',
      },
      {
        erro: 'Aplicar interdição como primeira medida para todas as irregularidades',
        impacto: 'Perda de pontos em CR por desproporcionalidade',
        comoEvitar: 'A interdição é medida extrema para risco iminente; para outras situações, auto de infração é adequado',
      },
    ],
    dicasEspecificas: [
      'Diferencie claramente registro do produto (ANVISA) de prazo de validade (fabricante)',
      'Cite a RDC 20/2011 para antimicrobianos e a Portaria 344/1998 para controlados',
      'Mencione que a comunicação ao CRF-GO é recomendável para infrações do RT',
      'Fundamente a apreensão de medicamentos sem registro válido no art. 12 da Lei 6.360/1976',
      'Lembre que a Lei 5.991/1973 exige farmacêutico durante todo o horário de funcionamento',
    ],
  },
  {
    id: 'tema-8',
    tema: 'Caso Concreto: Descarte Irregular de Resíduos de Serviços de Saúde em Hospital',
    area: 'Vigilância em Saúde Ambiental',
    enunciado: `CASO CONCRETO

A Vigilância Sanitária Estadual de Goiás recebeu denúncia anônima relatando que o Hospital Santa Maria, instituição privada de médio porte localizada em Aparecida de Goiânia, estaria descartando resíduos de serviços de saúde de forma irregular. Segundo a denúncia, materiais perfurocortantes e resíduos infectantes estariam sendo depositados em contêineres comuns de lixo na área externa do hospital.

Designado para apurar a denúncia, você realizou inspeção no estabelecimento e constatou: resíduos do Grupo A (infectantes) misturados com resíduos do Grupo D (comuns) em sacos pretos; caixas de perfurocortantes (Grupo E) ultrapassando o limite de preenchimento de 2/3; ausência de abrigo externo adequado para armazenamento temporário de resíduos; Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) desatualizado, com última revisão há 4 anos; e funcionários do setor de limpeza sem treinamento documentado para manejo de RSS.

Considerando a situação descrita e a legislação vigente, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) os riscos à saúde pública e ao meio ambiente decorrentes das irregularidades constatadas, fundamentando a gravidade da situação;

b) as normas sanitárias e ambientais violadas, demonstrando o enquadramento legal das condutas irregulares;

c) as medidas administrativas e sanitárias que devem ser adotadas pelo fiscal, incluindo a articulação com outros órgãos de fiscalização.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura dissertativa clara',
          'Argumentação sobre riscos e medidas',
          'Linguagem técnica adequada',
          'Análise crítica da situação',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos aspectos',
        aspectosAvaliados: [
          'Riscos à saúde e ao meio ambiente corretamente identificados',
          'Normas sanitárias e ambientais citadas (RDC 222/2018, CONAMA)',
          'Classificação correta dos grupos de resíduos',
          'Medidas adequadas e articulação interinstitucional',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica',
        aspectosAvaliados: [
          'Progressão: riscos → normas violadas → medidas',
          'Proporcionalidade das medidas aos riscos',
          'Argumentação consistente',
          'Conclusão derivada do desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referência aos elementos do caso',
          'Progressão temática',
          'Transições claras',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão técnica',
        aspectosAvaliados: [
          'Vocabulário técnico de RSS',
          'Terminologia ambiental correta',
          'Citação precisa de normas',
          'Clareza na exposição',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `O gerenciamento inadequado de Resíduos de Serviços de Saúde (RSS) constitui grave problema de saúde pública e ambiental, capaz de provocar danos irreversíveis à população e aos ecossistemas. O caso em análise evidencia falhas sistemáticas no hospital inspecionado, demandando atuação rigorosa da vigilância sanitária em articulação com outros órgãos fiscalizadores.

Os riscos decorrentes das irregularidades constatadas são múltiplos e severos. A mistura de resíduos infectantes (Grupo A) com resíduos comuns (Grupo D) expõe trabalhadores da limpeza, catadores e a comunidade do entorno a agentes biológicos patogênicos, como bactérias, vírus e fungos presentes em materiais contaminados com sangue e secreções. O excesso de preenchimento das caixas de perfurocortantes aumenta o risco de acidentes com materiais contaminados, podendo transmitir doenças como hepatite B, hepatite C e HIV. A ausência de abrigo externo adequado favorece a proliferação de vetores e o acesso de animais aos resíduos, ampliando a cadeia de contaminação. Além dos riscos à saúde humana, o descarte irregular contamina solo e recursos hídricos, gerando impactos ambientais de difícil reversão.

As irregularidades violam múltiplas normas sanitárias e ambientais. A RDC ANVISA nº 222/2018 estabelece as regras para gerenciamento de RSS, incluindo a obrigatoriedade de segregação na fonte, acondicionamento adequado por grupo, PGRSS atualizado e capacitação dos trabalhadores. A Resolução CONAMA nº 358/2005 dispõe sobre o tratamento e disposição final de RSS, complementando as exigências sanitárias com requisitos ambientais. A ausência de treinamento documentado viola ainda a NR-32 do Ministério do Trabalho, que trata da segurança em serviços de saúde. Todas essas condutas configuram infrações sanitárias tipificadas na Lei nº 6.437/1977.

As medidas administrativas devem ser imediatas e abrangentes. Primeiramente, deve-se lavrar Auto de Infração detalhando cada irregularidade com seu enquadramento legal específico. A emissão de Termo de Intimação com prazo exequível para adequação às normas é medida proporcional, considerando que os riscos, embora graves, não configuram situação de emergência sanitária que justifique interdição imediata. O PGRSS deve ser exigido em versão atualizada, contemplando todas as etapas do gerenciamento. A articulação com a Secretaria de Meio Ambiente é imprescindível para apuração de eventual infração ambiental, bem como a comunicação à vigilância em saúde do trabalhador para verificação das condições de segurança dos funcionários.

Portanto, a atuação integrada da vigilância sanitária com órgãos ambientais e de saúde do trabalhador é fundamental para a efetiva proteção da saúde pública e do meio ambiente, garantindo que o hospital adote as medidas corretivas necessárias sob pena das sanções legais cabíveis.`,
    analise: `Esta resposta demonstra visão integrada de vigilância em saúde:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa bem construída, com introdução que dimensiona a gravidade do tema, desenvolvimento em três parágrafos correspondentes aos aspectos solicitados, e conclusão integradora.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados com profundidade: riscos à saúde e ao ambiente detalhados; normas corretamente citadas (RDC 222/2018, CONAMA 358/2005, NR-32); medidas proporcionais com articulação interinstitucional.

**Coerência (CR - 3 pontos):** Progressão lógica clara dos riscos para as normas violadas e depois para as medidas. A opção por não interditar imediatamente é justificada com proporcionalidade.

**Coesão (CS - 3 pontos):** Conectivos adequados, terminologia técnica consistente (Grupos A, D, E), referências claras ao caso.

**Expressão (ER - 3 pontos):** Vocabulário técnico de RSS e ambiental preciso, demonstrando conhecimento especializado e intersetorial.

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa.`,
    errosComuns: [
      {
        erro: 'Não conhecer a classificação dos grupos de RSS (A, B, C, D, E)',
        impacto: 'Perda significativa no TM por desconhecimento técnico essencial',
        comoEvitar: 'Memorize: A=infectantes, B=químicos, C=radioativos, D=comuns, E=perfurocortantes',
      },
      {
        erro: 'Citar apenas normas sanitárias, ignorando as ambientais',
        impacto: 'Abordagem incompleta - RSS tem dupla regulação (ANVISA e CONAMA)',
        comoEvitar: 'Cite a RDC 222/2018 (ANVISA) E a Resolução CONAMA 358/2005',
      },
      {
        erro: 'Não mencionar a necessidade de articulação com órgão ambiental',
        impacto: 'Perda de pontos no item "c" que pede articulação com outros órgãos',
        comoEvitar: 'RSS envolve VISA, órgão ambiental e vigilância do trabalhador - mencione a atuação conjunta',
      },
      {
        erro: 'Propor interdição imediata como única medida',
        impacto: 'Demonstra falta de proporcionalidade na análise',
        comoEvitar: 'Avalie a gravidade: risco iminente = interdição; risco controlável = intimação com prazo',
      },
      {
        erro: 'Ignorar o PGRSS como documento obrigatório',
        impacto: 'Omissão de elemento central da gestão de RSS',
        comoEvitar: 'O PGRSS é obrigatório para todos os geradores de RSS e deve estar atualizado',
      },
    ],
    dicasEspecificas: [
      'Cite a RDC ANVISA nº 222/2018 como norma atual de gerenciamento de RSS',
      'Mencione a Resolução CONAMA 358/2005 para a interface ambiental',
      'Demonstre conhecimento da classificação de RSS em grupos (A, B, C, D, E)',
      'Relacione com a NR-32 do MTE para questões de saúde do trabalhador',
      'Destaque que PGRSS é documento obrigatório que deve ser atualizado periodicamente',
    ],
  },
  {
    id: 'tema-9',
    tema: 'Caso Concreto: Fábrica Clandestina de Alimentos sem Registro',
    area: 'Vigilância Sanitária de Alimentos',
    enunciado: `CASO CONCRETO

A Vigilância Sanitária Estadual de Goiás, em ação conjunta com a Polícia Civil, realizou operação para apurar denúncia sobre produção clandestina de alimentos em área rural do município de Itumbiara-GO. No local indicado, foi encontrada uma instalação improvisada onde eram fabricados queijos, requeijão e doces de leite que, segundo informações, eram comercializados em feiras livres e pequenos mercados da região, sem qualquer tipo de inspeção ou registro.

Durante a fiscalização, foram constatadas as seguintes irregularidades: ausência total de licença sanitária e registro dos produtos; utilização de leite cru não pasteurizado como matéria-prima, adquirido de produtores locais sem inspeção; estrutura física inadequada, com piso de terra batida, ausência de água tratada e instalações sanitárias improvisadas; presença de animais domésticos no local de produção; e aproximadamente 200 kg de produtos já embalados e prontos para comercialização, com rótulos artesanais sem informações obrigatórias.

Considerando a situação descrita, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) os riscos sanitários decorrentes da produção clandestina de alimentos nas condições descritas, especialmente quanto à utilização de leite cru não pasteurizado;

b) as competências e a atuação da vigilância sanitária estadual em estabelecimentos que produzem alimentos de origem animal, considerando a interface com o serviço de inspeção;

c) as medidas sanitárias e administrativas cabíveis ao caso, incluindo o destino dos produtos apreendidos e as possíveis repercussões nas esferas administrativa e penal.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura dissertativa bem definida',
          'Argumentação sobre riscos e competências',
          'Linguagem técnica adequada',
          'Análise crítica da situação clandestina',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos aspectos',
        aspectosAvaliados: [
          'Riscos do leite cru e condições inadequadas',
          'Competências VISA x SIM/SIE/SIF explicadas',
          'Medidas sanitárias proporcionais',
          'Repercussões administrativas e penais mencionadas',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica',
        aspectosAvaliados: [
          'Progressão: riscos → competências → medidas',
          'Proporcionalidade das ações à gravidade',
          'Argumentação consistente',
          'Conclusão derivada da análise',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referência aos elementos do caso',
          'Progressão temática clara',
          'Transições bem construídas',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão técnica',
        aspectosAvaliados: [
          'Vocabulário técnico de alimentos',
          'Terminologia de inspeção correta',
          'Citação de doenças transmitidas',
          'Clareza na exposição de competências',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `A produção clandestina de alimentos representa grave ameaça à saúde pública, especialmente quando envolve produtos de origem animal elaborados sem qualquer controle sanitário. O caso em análise configura situação de extremo risco, exigindo atuação imediata e articulada da vigilância sanitária com outros órgãos de fiscalização e repressão.

Os riscos sanitários decorrentes da situação descrita são múltiplos e severos. A utilização de leite cru não pasteurizado como matéria-prima expõe os consumidores a agentes patogênicos como Brucella spp. (causadora da brucelose), Mycobacterium bovis (tuberculose bovina), Listeria monocytogenes, Salmonella spp. e Escherichia coli, todos potencialmente presentes no leite não submetido a tratamento térmico adequado. A pasteurização, processo obrigatório por força da legislação sanitária, elimina esses microrganismos, sendo sua ausência fator crítico de risco. Agrava a situação a estrutura física totalmente inadequada: piso de terra batida impossibilita higienização, ausência de água tratada compromete toda a cadeia de produção, e a presença de animais no local de fabricação introduz contaminação adicional por pelos, fezes e microrganismos diversos.

Quanto às competências, cabe esclarecer que a produção de alimentos de origem animal está sujeita à inspeção sanitária oficial, exercida pelo Sistema Brasileiro de Inspeção de Produtos de Origem Animal (SISBI-POA), em seus níveis municipal (SIM), estadual (SIE) ou federal (SIF), conforme o alcance da comercialização. A vigilância sanitária estadual atua de forma complementar, especialmente na fiscalização do comércio varejista e no atendimento a denúncias, como no presente caso. A ação conjunta com a Polícia Civil é adequada, considerando que a produção clandestina de alimentos pode configurar crime contra a saúde pública, conforme art. 272 do Código Penal.

As medidas sanitárias devem ser imediatas e rigorosas. A interdição do estabelecimento é medida cautelar obrigatória, fundamentada no risco iminente à saúde pública. Todos os produtos encontrados devem ser apreendidos e inutilizados, mediante lavratura do Termo de Apreensão e Inutilização, considerando que alimentos sem registro e produzidos em condições sanitárias inadequadas são impróprios para consumo. O Auto de Infração deve contemplar todas as irregularidades constatadas, com enquadramento na Lei nº 6.437/1977. Deve-se comunicar o órgão de defesa agropecuária para investigação da origem do leite e rastreamento dos produtores fornecedores. Na esfera penal, a situação pode configurar crime do art. 272 do CP (corrupção de alimentos) e art. 7º, inciso IX, da Lei nº 8.137/1990 (crime contra as relações de consumo).

Em conclusão, a produção clandestina de alimentos demanda resposta enérgica do Estado, com atuação integrada entre vigilância sanitária, serviço de inspeção, defesa agropecuária e polícia, visando proteger a saúde dos consumidores e responsabilizar os infratores nas esferas administrativa e penal.`,
    analise: `Esta resposta demonstra conhecimento multidisciplinar do tema:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa exemplar, com introdução que dimensiona a gravidade, desenvolvimento completo dos três aspectos em parágrafos específicos, e conclusão integradora.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados com profundidade técnica: riscos do leite cru com citação de patógenos específicos; competências diferenciadas (SIM/SIE/SIF x VISA); medidas completas incluindo repercussão penal (art. 272 CP, Lei 8.137/1990).

**Coerência (CR - 3 pontos):** Progressão lógica clara. A gravidade dos riscos justifica as medidas rigorosas propostas. A articulação interinstitucional é bem fundamentada.

**Coesão (CS - 3 pontos):** Conectivos adequados, terminologia técnica consistente, referências claras ao caso.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso, incluindo nomenclatura de patógenos (Brucella spp., Listeria monocytogenes) e siglas do sistema de inspeção.

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa.`,
    errosComuns: [
      {
        erro: 'Não mencionar os riscos específicos do leite cru (brucelose, tuberculose)',
        impacto: 'Perda de pontos no item "a" por abordagem superficial dos riscos',
        comoEvitar: 'Cite patógenos específicos: Brucella, M. bovis, Listeria, Salmonella, E. coli',
      },
      {
        erro: 'Confundir vigilância sanitária com serviço de inspeção de produtos de origem animal',
        impacto: 'Erro conceitual grave sobre competências',
        comoEvitar: 'Inspeção de POA = SIM/SIE/SIF; VISA = comércio varejista e denúncias. São sistemas distintos',
      },
      {
        erro: 'Não mencionar a possibilidade de crime contra a saúde pública',
        impacto: 'Abordagem incompleta do item "c" que pede repercussões penais',
        comoEvitar: 'Cite o art. 272 do CP (corrupção de alimentos) e Lei 8.137/1990',
      },
      {
        erro: 'Propor apenas advertência para situação tão grave',
        impacto: 'Demonstra desproporcionalidade na análise',
        comoEvitar: 'Produção clandestina exige interdição, apreensão e inutilização - são medidas mínimas',
      },
      {
        erro: 'Ignorar a necessidade de comunicação ao órgão de defesa agropecuária',
        impacto: 'Omissão de articulação importante',
        comoEvitar: 'O órgão de defesa agropecuária deve investigar a origem do leite e os produtores',
      },
    ],
    dicasEspecificas: [
      'Mencione a obrigatoriedade da pasteurização do leite por força legal',
      'Cite patógenos específicos transmitidos pelo leite cru para demonstrar conhecimento técnico',
      'Diferencie claramente VISA de SIM/SIE/SIF - são sistemas com competências distintas',
      'Fundamente a repercussão penal no art. 272 do CP e Lei 8.137/1990',
      'Destaque a necessidade de inutilização dos produtos, pois não podem ser regularizados',
    ],
  },
  {
    id: 'tema-10',
    tema: 'Caso Concreto: Denúncia de Produtos Cosméticos Falsificados no Comércio',
    area: 'Vigilância Sanitária de Cosméticos',
    enunciado: `CASO CONCRETO

A Vigilância Sanitária Estadual de Goiás recebeu denúncia formal da empresa "Beleza Nacional Cosméticos Ltda.", detentora de registro de diversos produtos cosméticos na ANVISA, informando que seus produtos estariam sendo falsificados e comercializados em estabelecimentos comerciais de Goiânia e região metropolitana. Segundo a denúncia, os produtos falsificados apresentam embalagens muito semelhantes às originais, porém com diferenças sutis na tonalidade das cores e na qualidade de impressão dos rótulos.

Você, Fiscal de Saúde Pública, foi designado para realizar inspeção em três estabelecimentos indicados na denúncia. Em dois deles, foram encontrados produtos com as características descritas. Ao verificar os documentos fiscais de aquisição, constatou-se que os produtos foram adquiridos de distribuidora não autorizada pela empresa fabricante, com notas fiscais que apresentavam inconsistências. Os produtos suspeitos, ao serem comparados com amostras originais fornecidas pela empresa denunciante, revelaram diferenças na textura, coloração e odor.

Considerando a situação descrita, elabore um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando:

a) os riscos à saúde dos consumidores decorrentes do uso de produtos cosméticos falsificados, considerando a ausência de controle sobre sua composição e fabricação;

b) os procedimentos técnicos que o fiscal deve adotar para a correta caracterização dos produtos como falsificados, incluindo a documentação necessária;

c) as medidas sanitárias e administrativas aplicáveis, bem como a articulação com outros órgãos para a completa apuração do caso.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura dissertativa clara',
          'Argumentação sobre riscos e procedimentos',
          'Linguagem técnica apropriada',
          'Análise sistemática do caso',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos aspectos',
        aspectosAvaliados: [
          'Riscos dos cosméticos falsificados identificados',
          'Procedimentos de caracterização descritos',
          'Coleta de amostras e perícia mencionadas',
          'Articulação interinstitucional adequada',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica',
        aspectosAvaliados: [
          'Progressão: riscos → caracterização → medidas',
          'Procedimentos tecnicamente corretos',
          'Articulação lógica entre órgãos',
          'Conclusão derivada da análise',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referência aos elementos do caso',
          'Progressão temática clara',
          'Transições bem construídas',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão técnica',
        aspectosAvaliados: [
          'Vocabulário técnico de cosméticos',
          'Terminologia legal correta',
          'Citação de legislação específica',
          'Clareza nos procedimentos',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `A falsificação de produtos cosméticos constitui grave infração sanitária que coloca em risco a saúde dos consumidores e configura crime contra a saúde pública e as relações de consumo. O caso em análise demanda atuação técnica rigorosa do Fiscal de Saúde Pública, com procedimentos adequados para caracterização da falsificação e articulação com outros órgãos competentes.

Os riscos à saúde decorrentes do uso de cosméticos falsificados são significativos e diversos. Produtos fabricados clandestinamente não passam por controle de qualidade, podendo conter substâncias proibidas, metais pesados, conservantes inadequados ou microrganismos patogênicos. A ausência de Boas Práticas de Fabricação expõe o consumidor a reações alérgicas, dermatites, irritações cutâneas e oculares, intoxicações e, em casos graves, danos permanentes à pele e anexos. Cosméticos para área dos olhos e mucosas apresentam risco ainda maior, podendo causar lesões graves. Ademais, o consumidor falsamente acredita utilizar produto seguro e registrado, o que agrava a situação de vulnerabilidade.

Para a correta caracterização dos produtos como falsificados, o fiscal deve adotar procedimentos técnicos rigorosos. Primeiramente, deve-se documentar fotograficamente os produtos suspeitos, suas embalagens e rótulos, comparando-os com os originais. As inconsistências identificadas devem ser descritas detalhadamente no Termo de Visita ou Auto de Infração. A coleta de amostras para análise laboratorial é essencial, devendo-se encaminhar ao LACEN-GO tanto amostras dos produtos suspeitos quanto amostras originais para análise comparativa. Os documentos fiscais de aquisição devem ser apreendidos ou copiados, sendo fundamentais para rastreamento da origem. A manifestação formal da empresa titular do registro, atestando que os produtos não são originais, constitui prova importante para o processo.

As medidas sanitárias incluem a apreensão imediata de todos os produtos suspeitos, mediante lavratura do Termo de Apreensão, e a lavratura de Auto de Infração com enquadramento na Lei nº 6.437/1977, especialmente no art. 10, que tipifica a comercialização de produtos falsificados. A interdição dos lotes específicos deve ser comunicada à ANVISA para extensão da medida em âmbito nacional. A articulação interinstitucional é fundamental: deve-se comunicar à Polícia Civil para investigação criminal, considerando que a falsificação de cosméticos configura crime previsto no art. 273, §1º-B, do Código Penal, com pena de reclusão de 10 a 15 anos. A Receita Federal deve ser informada sobre as notas fiscais inconsistentes, e o PROCON pode ser acionado para medidas de proteção ao consumidor.

Em conclusão, a atuação do fiscal em casos de produtos falsificados deve ser técnica, documentada e articulada, garantindo tanto a proteção imediata dos consumidores quanto a responsabilização dos infratores nas esferas administrativa, civil e penal.`,
    analise: `Esta resposta demonstra visão completa do enfrentamento à falsificação:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa bem construída, com introdução que contextualiza a gravidade, desenvolvimento em três parágrafos específicos para cada aspecto, e conclusão integradora.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados: riscos detalhados (reações alérgicas, contaminação); procedimentos de caracterização (fotos, análise laboratorial, documentos); medidas e articulação ampla (ANVISA, Polícia, Receita Federal, PROCON).

**Coerência (CR - 3 pontos):** Progressão lógica clara. Os procedimentos são tecnicamente corretos e as medidas proporcionais à gravidade. A articulação interinstitucional é bem fundamentada.

**Coesão (CS - 3 pontos):** Conectivos adequados, terminologia consistente, referências claras ao caso.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso, com citação correta do art. 273, §1º-B do CP e pena específica (10 a 15 anos).

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa.`,
    errosComuns: [
      {
        erro: 'Desconhecer a gravidade penal da falsificação de cosméticos',
        impacto: 'Omissão importante - é crime hediondo com pena de 10 a 15 anos',
        comoEvitar: 'Cite o art. 273, §1º-B do CP - falsificação de cosméticos é equiparada a medicamentos',
      },
      {
        erro: 'Não mencionar a necessidade de análise laboratorial comparativa',
        impacto: 'Procedimento incompleto de caracterização',
        comoEvitar: 'A comparação laboratorial entre produto suspeito e original é fundamental para prova',
      },
      {
        erro: 'Ignorar a comunicação à ANVISA para medidas em âmbito nacional',
        impacto: 'Omissão de medida importante para proteção ampla',
        comoEvitar: 'Falsificação geralmente não é local - ANVISA deve ser comunicada para alertas nacionais',
      },
      {
        erro: 'Não apreender os documentos fiscais',
        impacto: 'Comprometimento do rastreamento da origem',
        comoEvitar: 'Notas fiscais são essenciais para identificar a cadeia de distribuição',
      },
      {
        erro: 'Tratar como simples infração administrativa',
        impacto: 'Minimização de situação que configura crime grave',
        comoEvitar: 'Sempre mencione a repercussão penal - falsificação de cosmético é crime hediondo',
      },
    ],
    dicasEspecificas: [
      'Cite o art. 273, §1º-B do CP - falsificação de cosméticos tem pena de 10 a 15 anos',
      'Mencione a importância da manifestação formal do titular do registro',
      'Destaque a necessidade de comunicação à ANVISA para alertas nacionais',
      'Inclua a articulação com Polícia Civil, Receita Federal e PROCON',
      'Fundamente os riscos: reações alérgicas, contaminação microbiológica, substâncias proibidas',
    ],
  },
  {
    id: 'tema-11',
    tema: 'Boas Práticas em Serviços de Alimentação: RDC nº 216/2004 e RDC nº 275/2002',
    area: 'Vigilância Sanitária de Alimentos',
    enunciado: `A Agência Nacional de Vigilância Sanitária (ANVISA), por meio da Resolução da Diretoria Colegiada – RDC nº 216/2004, e da RDC nº 275/2002, tornou obrigatória, no Brasil, a adoção de boas práticas nas empresas ou para prestadores de serviços que exerçam atividades econômicas relacionadas a alimentos. Inclusive, a inobservância ou a desobediência ao disposto nessas resoluções configuram infração de natureza sanitária, sujeitando o infrator às penalidades previstas na Lei Federal nº 6.437/1977.

Considerando que as informações apresentadas têm caráter meramente motivador, redija um texto dissertativo e (ou) descritivo acerca das boas práticas na área de alimentos. Aborde, necessariamente, os seguintes tópicos:

a) identifique os pontos ou aspectos nos quais as referidas boas práticas podem ser aplicadas dentro de uma empresa ou por prestadores de serviços dessa área;

b) descreva os objetivos de cada uma das normas citadas (RDC nº 216 e RDC nº 275); e

c) indique os seus âmbitos de atuação.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo e/ou descritivo',
        aspectosAvaliados: [
          'Estrutura textual clara: introdução, desenvolvimento e conclusão',
          'Linguagem formal, técnica e impessoal',
          'Progressão textual lógica e coesa',
          'Posicionamento fundamentado sobre as boas práticas',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa e precisa dos três tópicos obrigatórios',
        aspectosAvaliados: [
          'Identificação correta dos aspectos de aplicação das boas práticas (higiene, manipulação, estrutura, controle de pragas, água, descarte de resíduos)',
          'Objetivo da RDC 216/2004: boas práticas em serviços de alimentação',
          'Objetivo da RDC 275/2002: procedimentos operacionais padronizados e lista de verificação',
          'Âmbito da RDC 216 (serviços de alimentação) vs. âmbito da RDC 275 (indústrias de alimentos)',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica e ausência de contradições',
        aspectosAvaliados: [
          'Progressão lógica dos aspectos gerais para os específicos',
          'Diferenciação clara entre as duas normas sem contradições',
          'Argumentos tecnicamente consistentes',
          'Conclusão coerente com o desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Uso adequado de elementos coesivos',
        aspectosAvaliados: [
          'Conectivos e operadores argumentativos adequados',
          'Referenciação clara (pronomes, sinônimos)',
          'Articulação entre parágrafos e tópicos',
          'Progressão temática sem rupturas',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza, precisão e adequação vocabular',
        aspectosAvaliados: [
          'Vocabulário técnico de boas práticas em alimentos',
          'Precisão conceitual nas definições normativas',
          'Clareza na exposição dos âmbitos',
          'Adequação ao registro formal',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção gramatical e ortográfica',
        aspectosAvaliados: [
          'Ortografia correta',
          'Concordância verbal e nominal',
          'Regência verbal e nominal',
          'Pontuação adequada',
          'Acentuação correta',
          'Estrutura sintática adequada',
        ],
      },
    ],
    respostaModelo: `As boas práticas na área de alimentos constituem conjunto de medidas que visam garantir a segurança sanitária dos alimentos produzidos e comercializados no Brasil, protegendo a saúde dos consumidores. Nesse contexto, a ANVISA editou a RDC nº 216/2004 e a RDC nº 275/2002, normas que, juntas, formam o arcabouço regulatório fundamental para o controle higiênico-sanitário em toda a cadeia produtiva de alimentos.

As boas práticas podem ser aplicadas em diversos aspectos dentro de uma empresa ou serviço de alimentação. No que tange à edificação e instalações, exige-se estrutura física adequada, com superfícies laváveis, ventilação suficiente e separação entre áreas sujas e limpas. Quanto à higienização, devem-se adotar Procedimentos Operacionais Padronizados (POPs) para a limpeza e desinfecção de equipamentos, utensílios e ambientes. O controle integrado de pragas constitui aspecto essencial para impedir a contaminação cruzada. O abastecimento de água deve atender aos padrões de potabilidade, e o manejo adequado dos resíduos sólidos previne a atração de vetores. Por fim, o controle de temperatura das preparações, especialmente no armazenamento e na distribuição, e a comprovação de capacitação em higiene dos manipuladores são pontos críticos amplamente verificados em fiscalizações.

A RDC nº 216/2004 tem como objetivo estabelecer procedimentos de boas práticas para serviços de alimentação, a fim de garantir as condições higiênico-sanitárias dos alimentos preparados. Sua finalidade é assegurar que o alimento chegue ao consumidor final em condições seguras, abrangendo todas as etapas de preparo, desde a recepção de matérias-primas até a distribuição das preparações. Já a RDC nº 275/2002 objetiva estabelecer Procedimentos Operacionais Padronizados (POPs) obrigatórios e introduzir o uso de Lista de Verificação das Boas Práticas de Fabricação para avaliação e monitoramento das condições higiênico-sanitárias nas indústrias produtoras de alimentos, contribuindo para a melhoria contínua dos processos produtivos.

No que se refere ao âmbito de aplicação, as normas se distinguem pelo segmento que regulam. A RDC nº 216/2004 aplica-se aos serviços de alimentação que realizam atividades de manipulação, preparação, fracionamento, armazenamento, distribuição, transporte, exposição à venda e entrega de alimentos preparados ao consumidor, como restaurantes, lanchonetes, cantinas, bufês, padarias, confeitarias e estabelecimentos congêneres. A RDC nº 275/2002, por sua vez, aplica-se aos estabelecimentos produtores e industrializadores de alimentos, regulando as indústrias alimentícias em geral, com foco na padronização documental e no automonitoramento por meio das listas de verificação.

Portanto, ambas as normas são instrumentos complementares e indispensáveis para a efetiva proteção da saúde coletiva, cabendo à vigilância sanitária, especialmente aos fiscais de saúde, verificar seu cumprimento mediante inspeções periódicas, com a aplicação das penalidades previstas na Lei nº 6.437/1977 aos infratores.`,
    analise: `Esta resposta atende plenamente ao estilo da banca IADES, conforme padrão verificado em provas anteriores:

**Tipo de Texto (TX - 3 pontos):** O texto apresenta estrutura dissertativo-descritiva clara, com introdução contextualizadora, desenvolvimento temático por tópicos e conclusão integradora. Linguagem formal e impessoal ao longo de todo o texto.

**Tema/Assunto (TM - 3 pontos):** Todos os três tópicos obrigatórios foram contemplados: (a) aspectos de aplicação das boas práticas detalhados em seis dimensões; (b) objetivos de cada norma claramente diferenciados; (c) âmbitos de atuação distinguidos com precisão (serviços vs. indústrias).

**Coerência (CR - 3 pontos):** Progressão lógica da norma geral para os específicos, com diferenciação consistente entre as duas RDCs. Ausência de contradições e conclusão derivada do desenvolvimento.

**Coesão (CS - 3 pontos):** Uso adequado de conectivos ("no que tange", "quanto a", "já", "por sua vez"), articulando fluidamente os três tópicos solicitados.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso (POPs, contaminação cruzada, potabilidade, cadeia produtiva), demonstrando domínio da área.

**Aspectos Registrais (AR - 15 pontos):** Texto sem erros gramaticais, ortográficos ou de pontuação.`,
    errosComuns: [
      {
        erro: 'Inverter os âmbitos das normas: aplicar RDC 216 às indústrias e RDC 275 aos serviços',
        impacto: 'Perda grave no TM por erro conceitual central — o tópico "c" trata especificamente dos âmbitos',
        comoEvitar: 'RDC 216/2004 = serviços de alimentação (restaurantes, lanchonetes); RDC 275/2002 = indústrias de alimentos',
      },
      {
        erro: 'Não citar os POPs como instrumento central da RDC 275/2002',
        impacto: 'Perda de pontos no TM por omissão do principal elemento normativo da resolução',
        comoEvitar: 'Os POPs (Procedimentos Operacionais Padronizados) são o coração da RDC 275 — obrigatoriamente mencione-os',
      },
      {
        erro: 'Abordar apenas higiene de manipuladores, ignorando outros aspectos das boas práticas',
        impacto: 'Abordagem incompleta do tópico "a", reduzindo a nota em TM',
        comoEvitar: 'Liste pelo menos 5 aspectos: instalações, higienização, controle de pragas, água, resíduos, temperatura, manipuladores',
      },
      {
        erro: 'Não mencionar a Lei nº 6.437/1977 como fundamento punitivo',
        impacto: 'Perda de pontos em ER por não demonstrar conhecimento do respaldo legal das normas',
        comoEvitar: 'O enunciado já cita a Lei 6.437/1977 — mencione-a na conclusão para fechar o raciocínio jurídico',
      },
      {
        erro: 'Confundir "boas práticas de fabricação" com "boas práticas de manipulação"',
        impacto: 'Imprecisão terminológica que afeta a nota em ER',
        comoEvitar: 'RDC 216 usa o termo "boas práticas para serviços de alimentação"; RDC 275 trata das "boas práticas de fabricação"',
      },
    ],
    dicasEspecificas: [
      'Este tema foi cobrado pela IADES em prova de Vigilância Sanitária — alta probabilidade de recorrência',
      'Memorize o âmbito: RDC 216 → estabelecimentos que preparam alimentos para consumo direto; RDC 275 → indústrias processadoras',
      'Cite pelo menos dois tipos de estabelecimentos para cada norma ao especificar o âmbito',
      'A temperatura mínima para alimentos quentes é 60°C (RDC 216) — dado técnico que valoriza a resposta',
      'Mencione que a RDC 275 introduziu a Lista de Verificação como ferramenta de automonitoramento',
    ],
  },
  {
    id: 'tema-12',
    tema: 'Regulação Sanitária de Cosméticos, Produtos de Higiene Pessoal e Perfumes',
    area: 'Vigilância Sanitária de Cosméticos',
    enunciado: `A regulação sanitária de cosméticos, produtos de higiene pessoal, perfumes e similares constitui importante frente de atuação da Agência Nacional de Vigilância Sanitária (ANVISA), pautada na Resolução RDC nº 7/2015 e na Lei nº 6.360/1976. O setor de cosméticos no Brasil é um dos maiores do mundo, com ampla variedade de produtos que, por sua natureza de uso sobre a pele, cabelos e mucosas, apresentam potencial de risco sanitário quando fabricados ou comercializados em desconformidade com os padrões regulatórios vigentes.

Considerando a relevância da regulação sanitária nesse setor, redija um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando os seguintes aspectos:

a) a classificação dos cosméticos em graus de risco (Grau 1 e Grau 2), indicando as implicações regulatórias dessa distinção, especialmente quanto aos procedimentos de regularização junto à ANVISA;

b) as exigências de Boas Práticas de Fabricação (BPF) para a indústria cosmética e os principais riscos sanitários associados ao descumprimento dessas normas;

c) as atribuições do Fiscal de Saúde Pública estadual na fiscalização do comércio varejista de cosméticos, incluindo os procedimentos de coleta de amostras e os critérios para identificação de irregularidades.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura tripartite bem definida',
          'Argumentação sobre riscos e regulação',
          'Linguagem técnica e formal',
          'Posicionamento fundamentado sobre o tema',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos',
        aspectosAvaliados: [
          'Classificação Grau 1 e Grau 2 com implicações regulatórias corretas (notificação vs. registro)',
          'BPF cosmética e riscos do descumprimento descritos',
          'Atribuições do fiscal estadual no varejo especificadas',
          'Procedimentos de coleta e critérios de irregularidade',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica das ideias',
        aspectosAvaliados: [
          'Progressão: classificação → fabricação → fiscalização',
          'Articulação entre os aspectos sem contradições',
          'Argumentos tecnicamente consistentes',
          'Conclusão que integra os aspectos',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual adequada',
        aspectosAvaliados: [
          'Conectivos que articulam os aspectos',
          'Referenciação clara à legislação citada',
          'Progressão temática sem rupturas',
          'Transições bem construídas',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão vocabular',
        aspectosAvaliados: [
          'Terminologia técnica de cosméticos correta',
          'Diferenciação precisa entre notificação e registro',
          'Clareza na exposição dos procedimentos',
          'Registro formal mantido',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `A regulação sanitária de cosméticos, produtos de higiene pessoal e perfumes no Brasil reflete a necessidade de equilibrar o acesso da população a esses produtos com a proteção da saúde, dado o contato direto desses itens com pele, cabelos e mucosas. A Resolução RDC nº 7/2015 da ANVISA, em consonância com a Lei nº 6.360/1976, estabelece o sistema regulatório que classifica os produtos e define os requisitos para sua fabricação, comercialização e fiscalização.

A classificação dos cosméticos em Grau 1 e Grau 2 é o eixo central do sistema regulatório brasileiro. Os produtos de Grau 1 são aqueles de baixo risco, cuja formulação e finalidade não requerem demonstração prévia de eficácia e segurança, bastando a notificação à ANVISA antes de sua comercialização. Exemplos incluem shampoos, condicionadores, cremes hidratantes e batons. Já os produtos de Grau 2 apresentam indicações específicas, concentrações elevadas de princípios ativos ou ações sobre a pele e cabelos que demandam comprovação de segurança, exigindo registro prévio na ANVISA para sua comercialização. Filtros solares, produtos para alisamento capilar com formol e produtos despigmentantes são exemplos desse grupo. Essa distinção implica obrigações regulatórias distintas para as empresas, com diferentes níveis de controle pré-mercado.

As Boas Práticas de Fabricação (BPF) para a indústria cosmética, regulamentadas pela RDC nº 48/2013, estabelecem padrões para instalações, equipamentos, pessoal, documentação e controle de qualidade. O descumprimento das BPF acarreta riscos sanitários significativos: contaminação microbiológica pode causar infecções cutâneas e oculares; substâncias proibidas ou em concentrações inadequadas provocam reações alérgicas, dermatites e, em casos graves, danos tóxicos sistêmicos; a ausência de controle de pH pode causar queimaduras químicas. Para o consumidor, esses riscos são agravados pela falsa segurança de usar um produto aparentemente legítimo.

No varejo, o Fiscal de Saúde Pública estadual exerce papel fundamental na verificação da regularidade dos produtos expostos à venda. Suas atribuições incluem: conferir a regularização dos produtos na ANVISA (número de notificação ou registro no rótulo); verificar condições de armazenamento e prazo de validade; identificar produtos com indícios de falsificação ou adulteração; e realizar coleta de amostras para análise laboratorial. A coleta deve seguir protocolos técnicos de cadeia de custódia, com amostras encaminhadas ao LACEN-GO, observando-se as quantidades mínimas estabelecidas nas normas. A identificação de irregularidades enseja a lavratura de auto de infração, apreensão dos produtos e comunicação à ANVISA para adoção de medidas complementares em âmbito nacional.

Em síntese, a fiscalização de cosméticos pelo Estado de Goiás, articulada com a regulação federal da ANVISA, constitui instrumento essencial para proteger a saúde dos consumidores goianos, combater a falsificação e o contrabando e garantir que apenas produtos seguros e regularizados cheguem ao mercado.`,
    analise: `Esta resposta demonstra domínio técnico e regulatório do tema:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa completa, com introdução contextualizadora, três parágrafos de desenvolvimento correspondentes aos aspectos solicitados, e conclusão integradora.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados: classificação Grau 1 e Grau 2 com implicações (notificação vs. registro); BPF e riscos do descumprimento detalhados; atribuições do fiscal no varejo com menção ao LACEN-GO e à ANVISA.

**Coerência (CR - 3 pontos):** Progressão lógica da regulação nacional (classificação → fabricação) para a atuação local (fiscalização estadual). Argumentação consistente e conclusão que retoma os pontos principais.

**Coesão (CS - 3 pontos):** Conectivos adequados ("já", "em consonância", "em síntese"), referenciação legal consistente e transições bem construídas.

**Expressão (ER - 3 pontos):** Vocabulário técnico preciso (despigmentantes, princípios ativos, cadeia de custódia, pré-mercado), demonstrando domínio da terminologia cosmética e regulatória.

**Aspectos Registrais (AR - 15 pontos):** Texto gramaticalmente correto em todos os aspectos.`,
    errosComuns: [
      {
        erro: 'Inverter os graus: classificar produtos de baixo risco como Grau 2 ou afirmar que todos exigem registro',
        impacto: 'Erro conceitual grave no item "a", com perda significativa no TM',
        comoEvitar: 'Grau 1 = notificação (baixo risco); Grau 2 = registro (maior risco/concentração de ativos)',
      },
      {
        erro: 'Confundir "notificação" com "registro" — usar os termos como sinônimos',
        impacto: 'Perda de pontos em TM e ER por imprecisão terminológica fundamental',
        comoEvitar: 'Notificação é o procedimento simplificado para Grau 1; registro é o processo mais rigoroso exigido para Grau 2',
      },
      {
        erro: 'Tratar a fiscalização estadual como idêntica à federal, sem diferenciar âmbitos',
        impacto: 'Perda de pontos no item "c" por não demonstrar compreensão da repartição de competências',
        comoEvitar: 'Estado fiscaliza o comércio varejista e serviços locais; ANVISA cuida do registro, pós-mercado e portos/fronteiras',
      },
      {
        erro: 'Não mencionar o LACEN-GO na descrição dos procedimentos de coleta de amostras',
        impacto: 'Perda de pontos por não demonstrar conhecimento da estrutura laboratorial estadual',
        comoEvitar: 'Toda coleta de amostra em Goiás deve mencionar o encaminhamento ao LACEN-GO',
      },
      {
        erro: 'Listar riscos apenas como "reações alérgicas" sem detalhar os mecanismos',
        impacto: 'Abordagem superficial do item "b", resultando em perda de pontos em TM',
        comoEvitar: 'Detalhe: contaminação microbiológica, substâncias proibidas, pH inadequado, princípios ativos em concentração excessiva',
      },
    ],
    dicasEspecificas: [
      'A RDC 7/2015 é a norma central para classificação de cosméticos — cite-a expressamente',
      'Para Grau 1: shampoo, hidratante, batom, perfume simples; Para Grau 2: filtro solar, alisante com formol, clareador',
      'Mencione que o número de notificação/registro deve constar obrigatoriamente no rótulo',
      'Cite a RDC 48/2013 ao tratar das BPF para a indústria cosmética',
      'Lembre-se que o fiscal pode apreender produtos irregulares independentemente de processo administrativo (medida cautelar)',
    ],
  },
  {
    id: 'tema-13',
    tema: 'Licenciamento Sanitário de Estabelecimentos: Competência Estadual e Municipal',
    area: 'Direito Sanitário',
    enunciado: `O licenciamento sanitário constitui instrumento fundamental de controle prévio do Estado sobre atividades que possam representar riscos à saúde da população. No Estado de Goiás, esse instrumento é regulado pela Lei Estadual nº 16.140/2007 e pela Lei Federal nº 9.782/1999, que definem as competências de cada ente federativo na concessão e renovação de licenças sanitárias. A Resolução de Diretoria Colegiada – RDC nº 11/2022 da ANVISA estabelece os requisitos para o funcionamento de serviços de atenção à saúde e define responsabilidades sobre o processo de licenciamento.

Considerando a relevância do licenciamento sanitário como instrumento preventivo de proteção à saúde, redija um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando os seguintes aspectos:

a) o licenciamento sanitário como manifestação do poder de polícia preventivo, diferenciando-o do poder de polícia repressivo exercido nas ações fiscalizatórias;

b) a repartição de competências entre Estado e Municípios para a concessão de licenças sanitárias no âmbito do Sistema Nacional de Vigilância Sanitária, indicando os critérios utilizados para essa divisão;

c) as consequências jurídicas e sanitárias do funcionamento de estabelecimentos sem licença sanitária e as medidas cabíveis ao Fiscal de Saúde Pública diante dessa irregularidade.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura argumentativa clara e bem definida',
          'Fundamentação jurídica consistente',
          'Linguagem técnico-jurídica apropriada',
          'Posicionamento sobre a importância do licenciamento',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos',
        aspectosAvaliados: [
          'Conceito de poder de polícia preventivo e sua distinção do repressivo',
          'Repartição de competências com critérios explicados (complexidade, porte)',
          'Consequências jurídicas e sanitárias do funcionamento irregular descritas',
          'Medidas cabíveis ao fiscal corretamente indicadas',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica',
        aspectosAvaliados: [
          'Progressão: fundamento → competências → consequências',
          'Argumentação juridicamente coerente',
          'Proporcionalidade nas medidas propostas',
          'Conclusão derivada do desenvolvimento',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos adequados',
          'Referenciação jurídica clara',
          'Transições lógicas entre aspectos',
          'Unidade argumentativa mantida',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão técnico-jurídica',
        aspectosAvaliados: [
          'Terminologia jurídica correta',
          'Distinção precisa entre institutos legais',
          'Clareza na exposição das competências',
          'Registro formal mantido',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `O licenciamento sanitário representa manifestação do poder de polícia administrativa em sua dimensão preventiva, por meio do qual o Estado condiciona o início de atividades potencialmente geradoras de riscos à saúde à comprovação prévia de que o estabelecimento reúne as condições sanitárias adequadas. Trata-se de instrumento indispensável para a proteção da saúde coletiva, distinguindo-se do poder de polícia repressivo que se manifesta nas ações fiscalizatórias posteriores.

No poder de polícia preventivo, a intervenção estatal ocorre antes do início da atividade, mediante análise documental e vistoria das instalações, resultando na concessão ou denegação da licença sanitária. O alvará sanitário, documento que materializa essa licença, constitui condição de funcionamento do estabelecimento, sem a qual a atividade é considerada irregular. O poder de polícia repressivo, por seu turno, atua após o início da atividade, verificando o cumprimento das normas sanitárias mediante inspeções, com a consequente aplicação de penalidades em caso de irregularidades. Ambas as dimensões são complementares e igualmente fundamentadas na supremacia do interesse público sobre o privado.

A repartição de competências para concessão de licenças sanitárias no SNVS baseia-se no princípio da descentralização e no critério da complexidade do risco sanitário. Em regra, os municípios são responsáveis pelo licenciamento de estabelecimentos de baixo e médio risco, como restaurantes, salões de beleza, academias, farmácias e pequenas clínicas. O Estado detém competência para licenciar estabelecimentos de maior complexidade ou risco, como hospitais, laboratórios de análises clínicas de alta complexidade, indústrias alimentícias e estabelecimentos que exijam avaliação técnica especializada. Em Goiás, essas competências são definidas pela Lei Estadual nº 16.140/2007 e pactuadas na Comissão Intergestores Bipartite (CIB-GO), assegurando coerência com as diretrizes nacionais.

O funcionamento sem licença sanitária configura infração grave, tipificada na Lei nº 6.437/1977 e sujeitando o infrator a penalidades que variam de multa à interdição do estabelecimento. Sanitariamente, representa risco imediato à saúde dos usuários, uma vez que não há garantia de que o local atende às condições mínimas de segurança. Diante dessa irregularidade, o Fiscal de Saúde Pública deve, em primeiro lugar, intimar o responsável a regularizar a situação em prazo definido; caso o risco à saúde seja iminente, cabe a interdição cautelar imediata, seguida da lavratura de auto de infração com o enquadramento legal correspondente. Quando identificados indícios de crime contra a saúde pública, cabe ainda comunicação ao Ministério Público.

Em conclusão, o licenciamento sanitário, em suas dimensões preventiva e repressiva, constitui pilar do sistema de proteção à saúde, sendo dever do Fiscal de Saúde Pública zelar pelo seu cumprimento, garantindo que apenas estabelecimentos que atendam às exigências sanitárias legais funcionem e prestem serviços à população goiana.`,
    analise: `Esta resposta demonstra sólido domínio jurídico-administrativo do tema:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa exemplar, com introdução que apresenta a tese, desenvolvimento em três parágrafos e conclusão derivada da argumentação.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados: distinção preventivo/repressivo bem fundamentada; competências diferenciadas com critérios (complexidade, risco) e menção à CIB-GO; consequências e medidas do fiscal detalhadas.

**Coerência (CR - 3 pontos):** Progressão lógica do fundamento teórico para a aplicação prática. Proporcionalidade das medidas (intimação para regularização, interdição apenas se risco iminente).

**Coesão (CS - 3 pontos):** Conectivos adequados ("por seu turno", "em conclusão", "em primeiro lugar"), referenciação legal precisa e transições claras.

**Expressão (ER - 3 pontos):** Terminologia jurídico-administrativa precisa (supremacia do interesse público, alvará sanitário, denegação), demonstrando domínio da linguagem técnica.

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa.`,
    errosComuns: [
      {
        erro: 'Não diferenciar poder de polícia preventivo do repressivo, tratando-os como iguais',
        impacto: 'Perda significativa no item "a" do TM — é a distinção central da questão',
        comoEvitar: 'Preventivo = antes da atividade (licença); Repressivo = durante/após a atividade (fiscalização, autuação)',
      },
      {
        erro: 'Afirmar que estados e municípios têm competência idêntica, sem diferenciar por critério de risco',
        impacto: 'Erro na repartição de competências do item "b", com perda no TM',
        comoEvitar: 'Estado: alta complexidade/risco; Município: baixo e médio risco. O critério é a complexidade do risco sanitário',
      },
      {
        erro: 'Propor apenas multa diante de estabelecimento sem licença, sem mencionar interdição',
        impacto: 'Abordagem incompleta do item "c", especialmente se houver risco à saúde',
        comoEvitar: 'Avalie o risco: sem risco iminente → intimação para regularização; risco iminente → interdição cautelar imediata',
      },
      {
        erro: 'Não citar a Lei Estadual nº 16.140/2007 ao tratar das competências em Goiás',
        impacto: 'Perda de pontos por não demonstrar conhecimento da legislação estadual específica',
        comoEvitar: 'A Lei 16.140/2007 define as competências do sistema estadual de vigilância — cite-a no item "b"',
      },
      {
        erro: 'Omitir a CIB-GO como instância de pactuação de competências entre estado e municípios',
        impacto: 'Perda de pontos por desconhecimento da estrutura de governança do SNVS em Goiás',
        comoEvitar: 'A CIB-GO é o fórum onde Estado e municípios goianos pactuam responsabilidades na vigilância em saúde',
      },
    ],
    dicasEspecificas: [
      'O alvará sanitário é o documento que materializa a licença — use esse termo no texto',
      'Cite a RDC 11/2022 ao tratar de serviços de atenção à saúde (hospitais, clínicas)',
      'Mencione que a licença sanitária tem validade definida e precisa ser renovada periodicamente',
      'Destaque que o funcionamento sem licença configura infração autônoma, independente de outras irregularidades',
      'Relacione o licenciamento com o princípio constitucional da prevenção do dano à saúde (art. 196 CF/88)',
    ],
  },
  {
    id: 'tema-14',
    tema: 'Promoção da Saúde e Educação Sanitária como Instrumentos da Vigilância Sanitária',
    area: 'Saúde Coletiva',
    enunciado: `A Política Nacional de Promoção da Saúde (PNPS), instituída pela Portaria nº 2.446/2014 do Ministério da Saúde, e a Política Nacional de Vigilância em Saúde (PNVS), aprovada pela Resolução CNS nº 588/2018, reconhecem que as ações de vigilância sanitária não se restringem ao controle e à fiscalização, devendo também incorporar dimensões educativas e promocionais. A educação sanitária, como estratégia de comunicação de risco e de empoderamento dos cidadãos para a adoção de práticas saudáveis, é componente essencial para a efetividade das ações de proteção à saúde coletiva.

Considerando a complementaridade entre fiscalização e promoção da saúde no campo da vigilância sanitária, redija um texto dissertativo-argumentativo, entre 20 e 40 linhas, abordando os seguintes aspectos:

a) a dimensão educativa da atuação do Fiscal de Saúde Pública, demonstrando de que forma as ações de orientação e de comunicação de risco complementam e potencializam as ações fiscalizatórias tradicionais;

b) as estratégias de educação sanitária que podem ser desenvolvidas no âmbito da vigilância sanitária estadual, direcionadas tanto a estabelecimentos sujeitos à fiscalização quanto à população em geral;

c) os desafios para a integração entre vigilância sanitária e promoção da saúde no contexto do SUS, considerando as limitações estruturais e a necessidade de atuação intersetorial.`,
    espelhoCorrecao: [
      {
        criterio: 'Tipo de Texto (TX)',
        pontuacao: 3,
        descricao: 'Adequação ao gênero dissertativo-argumentativo',
        aspectosAvaliados: [
          'Estrutura argumentativa bem construída',
          'Tese clara sobre a complementaridade',
          'Linguagem formal e técnica',
          'Argumentação consistente sobre promoção da saúde',
        ],
      },
      {
        criterio: 'Tema/Assunto (TM)',
        pontuacao: 3,
        descricao: 'Abordagem completa dos três aspectos',
        aspectosAvaliados: [
          'Dimensão educativa do fiscal explicada com clareza',
          'Estratégias de educação sanitária diversificadas e concretas',
          'Desafios identificados e analisados criticamente',
          'Intersetorialidade e SUS mencionados',
        ],
      },
      {
        criterio: 'Coerência (CR)',
        pontuacao: 3,
        descricao: 'Organização lógica e ausência de contradições',
        aspectosAvaliados: [
          'Progressão: individual (fiscal) → institucional (estratégias) → sistêmico (desafios)',
          'Argumentação sobre complementaridade sem contradições',
          'Exemplos concretos que fundamentam os argumentos',
          'Conclusão que sintetiza a tese',
        ],
      },
      {
        criterio: 'Coesão (CS)',
        pontuacao: 3,
        descricao: 'Articulação textual',
        aspectosAvaliados: [
          'Conectivos que articulam as dimensões',
          'Referenciação às políticas públicas citadas',
          'Progressão temática clara',
          'Transições adequadas entre aspectos',
        ],
      },
      {
        criterio: 'Expressão (ER)',
        pontuacao: 3,
        descricao: 'Clareza e precisão vocabular',
        aspectosAvaliados: [
          'Vocabulário de saúde coletiva e promoção da saúde',
          'Terminologia da vigilância sanitária correta',
          'Clareza na exposição das estratégias',
          'Registro formal e técnico mantido',
        ],
      },
      {
        criterio: 'Aspectos Registrais (AR)',
        pontuacao: 15,
        descricao: 'Correção linguística',
        aspectosAvaliados: [
          'Ortografia e acentuação',
          'Concordância e regência',
          'Pontuação adequada',
          'Estrutura sintática correta',
        ],
      },
    ],
    respostaModelo: `A vigilância sanitária, historicamente associada ao exercício do poder de polícia e às ações de controle e fiscalização, tem passado por importante reorientação conceitual e prática, incorporando a dimensão da promoção da saúde como estratégia complementar e indissociável de sua missão. Essa transformação reflete a compreensão de que a mera imposição de normas e sanções é insuficiente para garantir, de forma sustentável, a proteção da saúde coletiva, sendo necessário empoderar os cidadãos e os estabelecimentos para a adoção espontânea de boas práticas.

A dimensão educativa permeia, de forma transversal, toda a atuação do Fiscal de Saúde Pública. Durante as inspeções, o fiscal não apenas constata irregularidades, mas orienta os responsáveis sobre as normas aplicáveis, explica as razões técnicas das exigências e indica os procedimentos para adequação. Essa postura educativa potencializa a efetividade das ações fiscalizatórias, pois um estabelecimento que compreende o fundamento técnico de uma exigência sanitária tende a cumpri-la com maior engajamento e perenidade do que aquele que simplesmente recebe uma autuação. A comunicação de risco sanitário, estratégia que traduz para a linguagem do público-alvo as ameaças à saúde identificadas, é ferramenta central nesse processo, articulando a expertise técnica do fiscal com a capacidade de compreensão e mudança de comportamento dos interlocutores.

As estratégias de educação sanitária no âmbito estadual podem ser diversificadas e complementares. Para os estabelecimentos sujeitos à fiscalização, destacam-se: a oferta de capacitações em boas práticas de manipulação de alimentos, gerenciamento de resíduos e controle de infecções; a elaboração e distribuição de guias e manuais de autoavaliação; e a realização de visitas orientadoras, anteriores às inspeções formais, que promovam a adequação voluntária. Para a população em geral, a educação sanitária pode ocorrer por meio de campanhas de conscientização sobre direitos do consumidor, alertas sobre produtos irregulares, ações em escolas e unidades de saúde, e uso de mídias sociais para disseminação de informações sobre riscos sanitários, aproveitando o alcance das plataformas digitais.

Os desafios para a integração entre vigilância sanitária e promoção da saúde são concretos e relevantes. As limitações de pessoal e recursos das vigilâncias estaduais restringem a capacidade de desenvolver ações educativas além das fiscalizatórias. A cultura organizacional ainda prevalente, centrada na punição, resiste à incorporação de abordagens promocionais. A necessidade de atuação intersetorial — envolvendo educação, assistência social, meio ambiente e outros setores — demanda coordenação que frequentemente esbarra em fragmentação institucional. Superar esses desafios requer investimento em formação dos profissionais de vigilância sanitária, revisão dos modelos de avaliação de desempenho e fortalecimento dos mecanismos de governança intersetorial no âmbito do SUS.

Em síntese, a integração entre vigilância sanitária e promoção da saúde representa avanço necessário e inadiável para que a proteção da saúde coletiva se consolide de forma sustentável no Brasil, transformando o Fiscal de Saúde Pública em agente não apenas de controle, mas também de transformação social.`,
    analise: `Esta resposta demonstra visão ampliada e crítica do campo da vigilância sanitária:

**Tipo de Texto (TX - 3 pontos):** Estrutura dissertativo-argumentativa exemplar, com tese clara (vigilância sanitária deve incorporar promoção da saúde), desenvolvimento em quatro parágrafos e conclusão que sintetiza a transformação necessária.

**Tema/Assunto (TM - 3 pontos):** Todos os aspectos contemplados com profundidade: dimensão educativa do fiscal explicada com o conceito de comunicação de risco; estratégias diversificadas para estabelecimentos e população; desafios sistêmicos identificados com propostas de superação.

**Coerência (CR - 3 pontos):** Progressão lógica do individual para o sistêmico. A tese da complementaridade é sustentada ao longo de todo o texto sem contradições.

**Coesão (CS - 3 pontos):** Conectivos adequados ("de forma transversal", "em síntese", "por sua vez"), referenciação às políticas públicas e articulação fluida entre os três aspectos.

**Expressão (ER - 3 pontos):** Vocabulário técnico de saúde coletiva preciso (empoderamento, comunicação de risco, intersetorialidade, governança), demonstrando formação ampla na área.

**Aspectos Registrais (AR - 15 pontos):** Correção linguística completa em todos os aspectos avaliados.`,
    errosComuns: [
      {
        erro: 'Tratar promoção da saúde como sinônimo de prevenção, sem diferenciar os conceitos',
        impacto: 'Imprecisão conceitual que afeta a nota em ER e TM',
        comoEvitar: 'Promoção da saúde é mais ampla — envolve empoderamento, autonomia e determinantes sociais; prevenção foca na evitação de doenças específicas',
      },
      {
        erro: 'Apresentar educação sanitária apenas como "palestras e panfletos", sem estratégias concretas',
        impacto: 'Abordagem superficial do item "b", resultando em perda de pontos no TM',
        comoEvitar: 'Diversifique as estratégias: capacitações, manuais, visitas orientadoras, campanhas, redes sociais, ações em escolas',
      },
      {
        erro: 'Não identificar desafios concretos, limitando-se a afirmar que a integração "é necessária"',
        impacto: 'Perda de pontos no item "c" por falta de análise crítica',
        comoEvitar: 'Cite limitações reais: carência de pessoal, cultura punitiva, fragmentação intersetorial, subfinanciamento',
      },
      {
        erro: 'Não citar a PNPS (Portaria 2.446/2014) ou a PNVS (Resolução CNS 588/2018)',
        impacto: 'Perda de pontos em TM e ER por não demonstrar conhecimento das políticas nacionais',
        comoEvitar: 'Ambas as políticas estão no enunciado — cite-as no texto para demonstrar domínio normativo',
      },
      {
        erro: 'Apresentar promoção da saúde como substituta da fiscalização, não como complementar',
        impacto: 'Erro conceitual que contradiz a proposta do enunciado, afetando CR e TM',
        comoEvitar: 'A questão pede "complementaridade" — deixe claro que educação potencializa, mas não substitui, a fiscalização',
      },
    ],
    dicasEspecificas: [
      'Cite a Portaria 2.446/2014 (PNPS) e a Resolução CNS 588/2018 (PNVS) na introdução',
      'Use o conceito de "comunicação de risco" como estratégia técnica central da educação sanitária',
      'Mencione a intersetorialidade como elemento obrigatório — envolva pelo menos dois outros setores (educação, assistência social)',
      'Relacione com o conceito de "vigilância sanitária cidadã" ou "educação em saúde" como política',
      'Destaque que o fiscal como "educador sanitário" é papel reconhecido pela PNVS',
    ],
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tema-tabpanel-${index}`}
      aria-labelledby={`tema-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export const Discursivas = () => {
  const [selectedTema, setSelectedTema] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [showResposta, setShowResposta] = useState(false);

  const tema = temasDiscursivos[selectedTema];

  const pontuacaoTotal = tema.espelhoCorrecao.reduce(
    (acc, item) => acc + item.pontuacao,
    0
  );

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Provas Discursivas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Prepare-se para a prova discursiva com temas relevantes, espelhos de
          correcao e respostas modelo no padrao IADES.
        </Typography>
      </Box>

      {/* Informacoes da Prova */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <Typography variant="subtitle2" gutterBottom>
          Informacoes da Prova Discursiva - IADES
        </Typography>
        <Typography variant="body2">
          Texto dissertativo-argumentativo de <strong>20 a 40 linhas</strong>.
          Valor: <strong>30 pontos</strong>. Criterios: TX (3pts) + TM (3pts) +
          CR (3pts) + CS (3pts) + ER (3pts) + AR (15pts). Minimo para aprovacao
          na discursiva: <strong>15 pontos</strong>.
        </Typography>
      </Alert>

      {/* Estatisticas */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Create sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {temasDiscursivos.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temas Disponiveis
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Grade sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold" color="success.main">
              30
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pontos Totais
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <MenuBook sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold" color="warning.main">
              20-40
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Linhas Exigidas
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Assessment sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold" color="info.main">
              6
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Criterios de Avaliacao
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Selecao de Tema */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Selecione um Tema
          </Typography>
          <Grid container spacing={2}>
            {temasDiscursivos.map((t, index) => (
              <Grid key={t.id} size={{ xs: 12, md: 6 }}>
                <Paper
                  onClick={() => {
                    setSelectedTema(index);
                    setActiveTab(0);
                    setShowResposta(false);
                  }}
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    border: 2,
                    borderColor:
                      selectedTema === index ? 'primary.main' : 'transparent',
                    bgcolor:
                      selectedTema === index ? 'primary.50' : 'background.paper',
                    '&:hover': {
                      borderColor: 'primary.light',
                      bgcolor: 'action.hover',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {t.tema}
                      </Typography>
                      <Chip
                        label={t.area}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Conteudo do Tema */}
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Tema {selectedTema + 1}: {tema.tema}
          </Typography>
          <Chip label={tema.area} color="primary" sx={{ mb: 3 }} />

          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}
          >
            <Tab label="Enunciado" />
            <Tab label="Espelho de Correcao" />
            <Tab label="Resposta Modelo" />
            <Tab label="Erros Comuns" />
            <Tab label="Dicas" />
          </Tabs>

          {/* Enunciado */}
          <TabPanel value={activeTab} index={0}>
            <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
              <Typography
                variant="body1"
                sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}
              >
                {tema.enunciado}
              </Typography>
            </Paper>
          </TabPanel>

          {/* Espelho de Correcao */}
          <TabPanel value={activeTab} index={1}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                      Criterio
                    </TableCell>
                    <TableCell
                      sx={{ color: 'white', fontWeight: 'bold' }}
                      align="center"
                    >
                      Pontuacao
                    </TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                      Descricao
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tema.espelhoCorrecao.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography fontWeight="bold">{item.criterio}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={`${item.pontuacao} pts`}
                          color="primary"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" gutterBottom>
                          {item.descricao}
                        </Typography>
                        <List dense>
                          {item.aspectosAvaliados.map((aspecto, i) => (
                            <ListItem key={i} sx={{ py: 0 }}>
                              <ListItemIcon sx={{ minWidth: 28 }}>
                                <CheckCircle
                                  sx={{ fontSize: 16 }}
                                  color="success"
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={aspecto}
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow sx={{ bgcolor: 'success.50' }}>
                    <TableCell>
                      <Typography fontWeight="bold" color="success.main">
                        TOTAL
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={`${pontuacaoTotal} pts`}
                        color="success"
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">
                        Nota maxima possivel
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Resposta Modelo */}
          <TabPanel value={activeTab} index={2}>
            {!showResposta ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Alert severity="warning" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    Recomendamos que voce tente redigir sua propria resposta
                    antes de ver o modelo. Isso ajudara a fixar o conteudo e
                    identificar pontos de melhoria.
                  </Typography>
                </Alert>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setShowResposta(true)}
                >
                  Ver Resposta Modelo
                </Button>
              </Box>
            ) : (
              <Box>
                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="subtitle2">
                    Resposta Modelo - Nota Maxima (30/30)
                  </Typography>
                </Alert>

                <Paper sx={{ p: 3, bgcolor: 'grey.50', mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ whiteSpace: 'pre-line', lineHeight: 2, textAlign: 'justify' }}
                  >
                    {tema.respostaModelo}
                  </Typography>
                </Paper>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight="bold">
                      Analise Tecnica da Correcao
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}
                    >
                      {tema.analise}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            )}
          </TabPanel>

          {/* Erros Comuns */}
          <TabPanel value={activeTab} index={3}>
            <Typography variant="h6" gutterBottom color="error">
              Erros que Reduzem a Nota
            </Typography>
            <Grid container spacing={2}>
              {tema.errosComuns.map((item, index) => (
                <Grid key={index} size={{ xs: 12 }}>
                  <Paper sx={{ p: 2, borderLeft: 4, borderColor: 'error.main' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <ErrorIcon color="error" />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {item.erro}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="error.main"
                          sx={{ mt: 0.5 }}
                        >
                          Impacto: {item.impacto}
                        </Typography>
                        <Divider sx={{ my: 1 }} />
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircle color="success" sx={{ fontSize: 18, mt: 0.3 }} />
                          <Typography variant="body2">
                            <strong>Como evitar:</strong> {item.comoEvitar}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Dicas */}
          <TabPanel value={activeTab} index={4}>
            <Typography variant="h6" gutterBottom color="primary">
              Dicas Especificas para Este Tema
            </Typography>
            <Grid container spacing={2}>
              {tema.dicasEspecificas.map((dica, index) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
                  <Paper
                    sx={{ p: 2, borderLeft: 4, borderColor: 'primary.main' }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Lightbulb color="primary" />
                      <Typography variant="body2">{dica}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
              Dicas Gerais para Provas Discursivas IADES
            </Typography>
            <Grid container spacing={2}>
              {[
                'Leia atentamente TODOS os itens do enunciado antes de comecar a escrever',
                'Faca um rascunho organizando os pontos principais de cada item solicitado',
                'Reserve um paragrafo para cada aspecto pedido no enunciado',
                'Use vocabulario tecnico, mas mantenha a clareza - nao complique desnecessariamente',
                'Evite repeticoes e redundancias - cada frase deve agregar informacao nova',
                'Revise ortografia, concordancia e pontuacao antes de passar a limpo',
                'Mantenha margens e caligrafia legiveis - texto ilegivel nao e corrigido',
                'Conte as linhas: minimo 20, maximo 40. Texto fora dos limites e penalizado',
              ].map((dica, index) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
                  <Paper sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Warning color="warning" />
                      <Typography variant="body2">{dica}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
};
