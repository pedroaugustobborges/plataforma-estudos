import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Alert,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from '@mui/material';
import { Print, FilterList, Warning, CheckCircle, Gavel, Star } from '@mui/icons-material';

interface Esquema {
  id: string;
  gatilho: string;
  area: string;
  cor: string;
  fraseAncora: string;
  pontosObrigatorios: string[];
  citeSempre: string[];
  naoEsqueca: string;
  mnemônico?: string;
}

const AREA_CORES: Record<string, string> = {
  'SUS e Políticas': '#1565c0',
  'Vigilância em Saúde': '#2e7d32',
  'SNVS e ANVISA': '#00695c',
  'Poder de Polícia': '#b71c1c',
  'Legislação GO': '#4a148c',
  'Medicamentos e Farmácias': '#e65100',
  'Alimentos': '#f57f17',
  'Qualidade e BPF': '#006064',
  'Saúde do Trabalhador': '#37474f',
  'Segurança do Paciente': '#880e4f',
  'Resíduos e Ambiente': '#33691e',
  'Estabelecimentos de Saúde': '#0d47a1',
  'Ética e Conduta': '#4e342e',
};

const esquemas: Esquema[] = [
  {
    id: 'e01',
    gatilho: 'Políticas Públicas de Saúde / Reforma Sanitária / Constituição e Saúde',
    area: 'SUS e Políticas',
    cor: AREA_CORES['SUS e Políticas'],
    fraseAncora:
      'A Constituição Federal de 1988 rompeu com o modelo previdenciário excludente e consagrou a saúde como direito de todos e dever do Estado, financiado com recursos da seguridade social.',
    pontosObrigatorios: [
      'Citar CF/88 art. 196: "saúde é direito de todos e dever do Estado"',
      'Mencionar 8ª Conferência Nacional de Saúde (1986) como marco da Reforma Sanitária',
      'Destacar o conceito ampliado de saúde: determinantes sociais (renda, educação, saneamento)',
      'Citar Lei 8.080/1990 (LOS) e Lei 8.142/1990 (participação social e financiamento)',
      'Relacionar com o avanço sobre o modelo Inamps (acesso restrito a trabalhadores formais)',
    ],
    citeSempre: ['CF/88 art. 196', 'Lei 8.080/1990', 'Lei 8.142/1990'],
    naoEsqueca:
      'Diferenciar o modelo anterior (INAMPS — só segurado) do SUS (universal). Essa ruptura histórica é o argumento central que mais vale pontos.',
    mnemônico: 'CF → LOS (8.080) → PARTICIPAÇÃO (8.142)',
  },
  {
    id: 'e02',
    gatilho: 'Princípios do SUS / Universalidade / Equidade / Integralidade / Descentralização',
    area: 'SUS e Políticas',
    cor: AREA_CORES['SUS e Políticas'],
    fraseAncora:
      'Universalidade é direito, equidade é justiça, integralidade é totalidade — os três princípios doutrinários que, operacionalizados pela descentralização, regionalização e participação social, estruturam o SUS.',
    pontosObrigatorios: [
      'DOUTRINÁRIOS: Universalidade (todos), Equidade ("tratar desigualmente os desiguais"), Integralidade (promoção → reabilitação)',
      'ORGANIZACIONAIS: Descentralização (municipalização), Regionalização/Hierarquização, Participação Social',
      'Relacionar equidade com Rawls ou simplesmente: quem mais precisa, mais recebe',
      'Mencionar Conselhos e Conferências de Saúde como instrumentos de participação social',
      'Aplicar pelo menos um princípio à vigilância sanitária (universalidade = proteção a todos; equidade = prioridade a vulneráveis)',
    ],
    citeSempre: ['Lei 8.080/1990 arts. 7º e 8º', 'CF/88 art. 198'],
    naoEsqueca:
      'Nunca confunda princípios DOUTRINÁRIOS (UEI) com ORGANIZACIONAIS (DRP). Corrector vai riscar se você inverter.',
    mnemônico: 'UEI + DRP → "Uei, deu errado? Depende de Participação!"',
  },
  {
    id: 'e03',
    gatilho: 'Vigilância em Saúde / Componentes / VE / VISA / VSAS / VST',
    area: 'Vigilância em Saúde',
    cor: AREA_CORES['Vigilância em Saúde'],
    fraseAncora:
      'A vigilância em saúde é processo contínuo e sistemático de coleta, análise e disseminação de informações sobre eventos de saúde, integrando quatro componentes complementares que atuam de forma articulada.',
    pontosObrigatorios: [
      'VE — Vigilância Epidemiológica: monitora doenças/agravos, notificação compulsória, investigação de surtos',
      'VISA — Vigilância Sanitária: controla riscos em produtos, serviços e ambientes via poder de polícia',
      'VSAS — Vigilância em Saúde Ambiental: monitora água, ar, solo, desastres e contaminantes químicos',
      'VST — Vigilância em Saúde do Trabalhador: identifica e controla riscos ocupacionais',
      'Mencionar PNVS (CNS Resolução 588/2018) como marco normativo integrador',
    ],
    citeSempre: ['Lei 8.080/1990', 'CNS Resolução nº 588/2018 (PNVS)'],
    naoEsqueca:
      'Nunca omita a VST (Saúde do Trabalhador) — é o componente mais esquecido e o que mais surpreende o corrector.',
    mnemônico: 'ESTA: Epidemiológica, Sanitária, Trabalhador, Ambiental',
  },
  {
    id: 'e04',
    gatilho: 'SNVS / ANVISA / Regulação Sanitária / Lei 9.782/1999',
    area: 'SNVS e ANVISA',
    cor: AREA_CORES['SNVS e ANVISA'],
    fraseAncora:
      'A ANVISA, autarquia sob regime especial vinculada ao Ministério da Saúde, criada pela Lei 9.782/1999, coordena o SNVS e protege a saúde da população por meio do controle sanitário de produtos e serviços.',
    pontosObrigatorios: [
      'ANVISA = autarquia sob regime especial (≠ Ministério da Saúde — é vinculada, não é o mesmo)',
      'Competências exclusivas da ANVISA: registro de medicamentos, controle em portos/aeroportos/fronteiras, normatização nacional',
      'SNVS = ANVISA + vigilâncias estaduais + vigilâncias municipais + laboratórios (LACEN)',
      'Articulação via CIT (tripartite) e CIB (bipartite estadual)',
      'Estados = referência técnica regional + capacitação municipal + laboratórios regionais',
    ],
    citeSempre: ['Lei 9.782/1999', 'Lei 8.080/1990'],
    naoEsqueca:
      'ANVISA ≠ Ministério da Saúde. ANVISA é autarquia VINCULADA ao MS. MS formula políticas; ANVISA regula e fiscaliza. Confundir os dois é erro grave.',
    mnemônico: 'ANVISA = A Nação VIgIA Sanitariamente → autarquia, regime especial, vinculada ao MS',
  },
  {
    id: 'e05',
    gatilho: 'Poder de Polícia / Atributos / Fiscalização / Autuação / Fundamento Jurídico',
    area: 'Poder de Polícia',
    cor: AREA_CORES['Poder de Polícia'],
    fraseAncora:
      'O poder de polícia administrativa, positivado no art. 78 do CTN, confere ao Estado o direito de limitar direitos individuais em prol da saúde coletiva, exercido mediante discricionariedade, autoexecutoriedade e coercibilidade.',
    pontosObrigatorios: [
      'Discricionariedade: fiscal avalia conveniência/oportunidade dentro dos limites legais',
      'Autoexecutoriedade: administração executa diretamente (ex.: apreensão) sem prévia autorização judicial',
      'Coercibilidade: imposição independente da anuência do particular',
      'Requisitos de validade do ato: COMPETÊNCIA, FORMA, OBJETO, MOTIVO e FINALIDADE',
      'Princípio da proporcionalidade: a medida deve ser adequada à gravidade da irregularidade',
    ],
    citeSempre: ['CTN art. 78', 'Lei 6.437/1977', 'CF/88 art. 37'],
    naoEsqueca:
      'Sempre mencionar que o poder de polícia tem LIMITES — não é arbitrário. A legalidade, proporcionalidade e o devido processo legal o contêm.',
    mnemônico: 'DAC = Discricionariedade, Autoexecutoriedade, Coercibilidade | COMOFIMOB = Competência, Forma, Finalidade, Objeto, Motivo',
  },
  {
    id: 'e06',
    gatilho: 'Auto de Infração / Interdição / Apreensão / Medidas Cautelares / Processo Administrativo Sanitário',
    area: 'Poder de Polícia',
    cor: AREA_CORES['Poder de Polícia'],
    fraseAncora:
      'A lavratura do auto de infração inaugura o processo administrativo sanitário e assegura ao autuado o contraditório e a ampla defesa, garantias constitucionais que não são afastadas pela urgência sanitária.',
    pontosObrigatorios: [
      'Medidas cautelares (preventivas): independem de processo prévio, aplicadas em risco iminente',
      'Auto de Infração: deve conter fatos, enquadramento legal, dados do autuado e assinatura do fiscal',
      'Fluxo PAS: Auto → Defesa prévia (prazo legal) → Julgamento → Recurso administrativo',
      'Interdição cautelar ≠ interdição definitiva (cautelar = medida imediata; definitiva = penalidade após PAS)',
      'Penalidades da Lei 6.437/1977: advertência → multa → apreensão → interdição → cancelamento de licença',
    ],
    citeSempre: ['Lei 6.437/1977', 'Lei 16.140/2007 (GO)', 'Lei 13.800/2001 (GO)', 'CF/88 art. 5º, LV'],
    naoEsqueca:
      'Interdição cautelar é medida acautelatória (risco iminente) e NÃO é punição. A punição definitiva vem depois do PAS. Confundir os dois é erro conceitual grave.',
    mnemônico: 'AUTO → DEFESA → JULGA → RECURSA (fluxo do PAS)',
  },
  {
    id: 'e07',
    gatilho: 'Ética do Servidor / Conduta do Fiscal de Vigilância Sanitária / Decreto 9.837/2021 / Portaria 170/2018',
    area: 'Ética e Conduta',
    cor: AREA_CORES['Ética e Conduta'],
    fraseAncora:
      'O Fiscal de Vigilância Sanitária, além das normas gerais de conduta do servidor público, sujeita-se a código de ética específico que privilegia a imparcialidade, a transparência, a eficiência e a primazia do interesse público.',
    pontosObrigatorios: [
      'Decreto 9.837/2021: código de ética geral dos servidores do Executivo estadual de GO',
      'Portaria SES 170/2018: código de ética específico do Fiscal de Vigilância Sanitária',
      'Princípios centrais: legalidade, impessoalidade, moralidade, publicidade, eficiência (art. 37 CF)',
      'Conflito de interesses: fiscal deve se declarar impedido em situações de interesse pessoal',
      'Responsabilidade: esferas administrativa, civil e penal são independentes e cumuláveis',
    ],
    citeSempre: ['Decreto 9.837/2021', 'Portaria SES-GO nº 170/2018', 'CF/88 art. 37 (LIMPE)'],
    naoEsqueca:
      'Mencionar que o fiscal tem FÉ PÚBLICA em suas constatações — o auto de infração presume-se verdadeiro até prova em contrário. Esse detalhe vale pontos extras.',
    mnemônico: 'LIMPE = Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência',
  },
  {
    id: 'e08',
    gatilho: 'Lei 16.140/2007 / Sistema de Vigilância em Saúde em Goiás / SVS-GO / Competências Estaduais',
    area: 'Legislação GO',
    cor: AREA_CORES['Legislação GO'],
    fraseAncora:
      'A Lei 16.140/2007 insere Goiás no federalismo sanitário, atribuindo à Superintendência de Vigilância em Saúde da SES-GO a coordenação das ações de proteção à saúde, em articulação com a ANVISA e os municípios goianos.',
    pontosObrigatorios: [
      'Estado coordena, normatiza e presta cooperação técnica; municípios executam no âmbito local',
      'SVS-GO = órgão coordenador do sistema estadual de vigilância em saúde',
      'Instrumentos: licença sanitária, auto de infração, interdição, apreensão, termo de visita',
      'PAS estadual: regido pela Lei 13.800/2001 (processo administrativo GO)',
      'Articulação via CIB-GO (Comissão Intergestores Bipartite de Goiás)',
    ],
    citeSempre: ['Lei estadual 16.140/2007', 'Lei 13.800/2001', 'CIB-GO'],
    naoEsqueca:
      'Sempre citar a SVS-GO (Superintendência de Vigilância em Saúde) como órgão coordenador estadual. Omitir essa especificidade goiana é perder pontos de localização contextual.',
    mnemônico: 'GO: SVS coordena → MUNICÍPIOS executam → CIB-GO pactuação',
  },
  {
    id: 'e09',
    gatilho: 'Processo Administrativo / Princípios / Contraditório / Ampla Defesa / Lei 13.800/2001',
    area: 'Legislação GO',
    cor: AREA_CORES['Legislação GO'],
    fraseAncora:
      'A Lei 13.800/2001 regula o processo administrativo em Goiás e garante ao administrado o contraditório, a ampla defesa, a motivação das decisões e o direito a recurso, como expressões inafastáveis do Estado Democrático de Direito.',
    pontosObrigatorios: [
      'Princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, contraditório, segurança jurídica',
      'Direito à ampla defesa: prazo para apresentação de defesa prévia e produção de provas',
      'Motivação obrigatória: toda decisão administrativa deve ser fundamentada',
      'Recursos: efeito suspensivo somente quando expressamente previsto',
      'Decadência e prescrição: prazo para a Administração exercer o poder punitivo',
    ],
    citeSempre: ['Lei 13.800/2001', 'CF/88 art. 5º, LIV (devido processo) e LV (contraditório)'],
    naoEsqueca:
      'O processo administrativo sanitário em GO obedece à Lei 13.800/2001 subsidiariamente. Citar essa lei, além da Lei 6.437/1977, demonstra conhecimento específico do ordenamento estadual.',
    mnemônico: 'CONTRADITÓRIO + AMPLA DEFESA + MOTIVAÇÃO = tríade do PAS democrático',
  },
  {
    id: 'e10',
    gatilho: 'Medicamentos / Registro / Licença Sanitária / Fabricação / Lei 6.360/1976 / Decreto 8.077/2013',
    area: 'Medicamentos e Farmácias',
    cor: AREA_CORES['Medicamentos e Farmácias'],
    fraseAncora:
      'Nenhum medicamento pode ser industrializado, exposto à venda ou entregue ao consumo antes de registrado no órgão de vigilância sanitária competente, sendo o registro condição legal de acesso ao mercado.',
    pontosObrigatorios: [
      'Lei 6.360/1976 art. 12: proibição absoluta de comercializar produto sem registro válido na ANVISA',
      'Decreto 8.077/2013: regula condições de funcionamento e licenciamento das empresas do setor',
      'Produto com registro VENCIDO ≠ produto com prazo de VALIDADE vencido (são conceitos distintos!)',
      'Medicamento sem registro = produto FALSIFICADO ou CONTRABANDEADO — comunicação à Polícia',
      'Boas Práticas de Fabricação (BPF) como pré-requisito para concessão de licença',
    ],
    citeSempre: ['Lei 6.360/1976 art. 12', 'Decreto 8.077/2013', 'RDC 301/2019 (BPF)'],
    naoEsqueca:
      'Diferenciar REGISTRO (autorização da ANVISA para colocar no mercado) de VALIDADE (prazo de uso do produto). Confundir os dois é erro conceitual eliminatório.',
    mnemônico: 'REGISTRO = permissão de mercado | VALIDADE = prazo de uso → DIFERENTES',
  },
  {
    id: 'e11',
    gatilho: 'Farmácia / Drogaria / Responsável Técnico / Dispensação / Controlados / Lei 5.991/1973',
    area: 'Medicamentos e Farmácias',
    cor: AREA_CORES['Medicamentos e Farmácias'],
    fraseAncora:
      'A presença do farmacêutico responsável técnico durante todo o horário de funcionamento é exigência legal inafastável — não há exceção para refeições, consultas ou ausências momentâneas.',
    pontosObrigatorios: [
      'Lei 5.991/1973 art. 15: farmacêutico deve estar presente em TODO o horário de funcionamento',
      'Portaria SVS/MS 344/1998: regula medicamentos controlados (armazenamento em armário fechado com chave, escrituração, retenção de receita)',
      'RDC 20/2011: antimicrobianos exigem retenção de receita médica',
      'Responsabilização dupla: estabelecimento perante VISA + farmacêutico RT perante CRF-GO',
      'Comunicação ao CRF-GO é recomendável quando há infração do RT',
    ],
    citeSempre: ['Lei 5.991/1973', 'Portaria 344/1998', 'RDC 20/2011 (antimicrobianos)', 'RDC 44/2009'],
    naoEsqueca:
      'Quando o proprietário alegar que o farmacêutico "saiu para almoço": a Lei 5.991/1973 não admite essa exceção. O corrector vai valorizar muito a refutação fundamentada.',
    mnemônico: 'RT: TODO o horário, SEM exceção → Lei 5.991/1973',
  },
  {
    id: 'e12',
    gatilho: 'Alimentos / DTA / Surto Alimentar / Boas Práticas em Alimentos / RDC 216 / RDC 275 / Decreto-Lei 986/1969',
    area: 'Alimentos',
    cor: AREA_CORES['Alimentos'],
    fraseAncora:
      'As Doenças Transmitidas por Alimentos (DTA) representam grave problema de saúde pública, prevenível mediante adoção das boas práticas regulamentadas pela RDC 216/2004 em serviços de alimentação e pela RDC 275/2002 na indústria.',
    pontosObrigatorios: [
      'RDC 216/2004: boas práticas em SERVIÇOS DE ALIMENTAÇÃO (restaurantes, lanchonetes, cantinas)',
      'RDC 275/2002: POPs (Procedimentos Operacionais Padronizados) para INDÚSTRIAS de alimentos',
      'DL 986/1969: normas básicas sobre alimentos — proibição de alimentos alterados, falsificados, deteriorados',
      'Temperatura crítica: alimentos quentes > 60°C; frios < 5°C — faixa de risco: 5°C a 60°C',
      'Surto de DTA: articulação VISA (inspeciona estabelecimento) + VE (investiga casos) + LACEN-GO (análise laboratorial)',
    ],
    citeSempre: ['RDC 216/2004', 'RDC 275/2002', 'Decreto-Lei 986/1969'],
    naoEsqueca:
      'Em casos de surto alimentar, mencionar CADEIA DE CUSTÓDIA das amostras e LACEN-GO como laboratório de referência. Esses dois termos têm alto poder de pontuação.',
    mnemônico: 'DTA: 60°C quente | 5°C frio | 5-60°C = ZONA DE PERIGO',
  },
  {
    id: 'e13',
    gatilho: 'APPCC / HACCP / Pontos Críticos de Controle / Análise de Perigos / Segurança de Alimentos',
    area: 'Qualidade e BPF',
    cor: AREA_CORES['Qualidade e BPF'],
    fraseAncora:
      'O APPCC é sistema preventivo de base científica que identifica perigos específicos e define medidas preventivas para seu controle, garantindo a inocuidade alimentar ao longo de todo o processo produtivo.',
    pontosObrigatorios: [
      '7 PRINCÍPIOS: 1-Análise de perigos; 2-Identificação dos PCCs; 3-Limites críticos; 4-Monitoramento; 5-Ações corretivas; 6-Verificação; 7-Documentação',
      'APPCC é PREVENTIVO (≠ inspeção do produto final, que é reativo)',
      'Pré-requisitos obrigatórios: BPF e POPs devem estar implementados ANTES do APPCC',
      'Árvorede decisão: ferramenta para identificar se um ponto do processo é ou não PCC',
      'Base legal: Codex Alimentarius + RDC 275/2002 + exigências da indústria exportadora',
    ],
    citeSempre: ['RDC 275/2002', 'Codex Alimentarius', 'Portaria MS 1.428/1993'],
    naoEsqueca:
      'A diferença entre PONTO DE CONTROLE (PC) e PONTO CRÍTICO DE CONTROLE (PCC): no PCC, o perigo não é eliminado em etapa posterior — é a última barreira.',
    mnemônico: '7P-APPCC: Perigos, PCCs, Parâmetros, Procedimento-monitoramento, Providências, Prova-verificação, Paper-documentação',
  },
  {
    id: 'e14',
    gatilho: 'Boas Práticas de Fabricação / BPF / Gestão da Qualidade / Validação / Desvio de Qualidade',
    area: 'Qualidade e BPF',
    cor: AREA_CORES['Qualidade e BPF'],
    fraseAncora:
      'As Boas Práticas de Fabricação garantem que os produtos sejam consistentemente produzidos e controlados conforme padrões de qualidade adequados ao uso pretendido e às especificações do registro.',
    pontosObrigatorios: [
      'BPF abrange: instalações, equipamentos, pessoal, documentação, controle de qualidade, armazenamento e distribuição',
      'Sistema de Qualidade Farmacêutica (SQF): engloba BPF, revisão periódica de produtos e gestão de riscos',
      'Validação: prove documentalmente que processo/método/equipamento produz resultados consistentes',
      'Plano Mestre de Validação (PMV): documento que define escopo, responsabilidades e cronograma de validações',
      'Desvio de qualidade: qualquer não conformidade que pode impactar a segurança, identidade, força, qualidade ou pureza do produto',
    ],
    citeSempre: ['RDC 301/2019 (BPF medicamentos)', 'RDC 658/2022', 'ICH Q10 (sistema de qualidade)'],
    naoEsqueca:
      'Desvio de qualidade DEVE ser notificado à ANVISA quando há risco de dano ao consumidor (recall). A omissão é infração grave prevista na Lei 6.360/1976.',
    mnemônico: 'BPF → VALIDA → DOCUMENTA → NOTIFICA desvio → RASTREIA recall',
  },
  {
    id: 'e15',
    gatilho: 'Saúde do Trabalhador / VST / Riscos Ocupacionais / Notificação Compulsória / Decreto 6.906/2009',
    area: 'Saúde do Trabalhador',
    cor: AREA_CORES['Saúde do Trabalhador'],
    fraseAncora:
      'A vigilância em saúde do trabalhador articula saúde, trabalho e previdência para identificar, avaliar e controlar riscos ocupacionais, sendo a notificação compulsória de agravos instrumento central de monitoramento.',
    pontosObrigatorios: [
      'Decreto estadual GO 6.906/2009: regulamenta competências da SES-GO em saúde do trabalhador',
      'Portaria 34/2006 (GO): lista de agravos de notificação compulsória em saúde do trabalhador no estado',
      'Agravos notificáveis: acidente de trabalho grave/fatal, intoxicação exógena, LER/DORT, pneumoconioses, entre outros',
      'Notificação via SINAN (Sistema de Informação de Agravos de Notificação)',
      'Nexo técnico epidemiológico: presunção de relação causal acidente-trabalho (NTEP)',
    ],
    citeSempre: ['Decreto GO 6.906/2009', 'Portaria GO 34/2006', 'Lei 8.080/1990 art. 6º'],
    naoEsqueca:
      'Citar SINAN como sistema de registro e o NTEP (nexo técnico epidemiológico) ao discutir relação causal. Esses termos específicos elevam a pontuação em ER.',
    mnemônico: 'VST: IDENTIFICA risco → NOTIFICA via SINAN → INVESTIGA nexo → PROPÕE medida',
  },
  {
    id: 'e16',
    gatilho: 'Segurança do Paciente / IRAS / Infecção Hospitalar / CCIH / Cultura de Segurança',
    area: 'Segurança do Paciente',
    cor: AREA_CORES['Segurança do Paciente'],
    fraseAncora:
      'Segurança do paciente é a redução ao mínimo aceitável do risco de dano desnecessário associado ao cuidado, exigindo protocolos baseados em evidências, cultura institucional de não punição ao erro e vigilância ativa das IRAS.',
    pontosObrigatorios: [
      'RDC 36/2013: institui ações de segurança do paciente em serviços de saúde — Núcleo de Segurança (NSP)',
      'CCIH (Comissão de Controle de Infecção Hospitalar): obrigatória em hospitais — Portaria MS 2.616/1998',
      'IRAS incluem: pneumonias associadas à ventilação (PAV), infecção de corrente sanguínea (ICS), ITU associada a cateter',
      'Higienização das mãos: medida número 1 de prevenção de IRAS, custo-benefício incomparável',
      'Programa Nacional de Segurança do Paciente (PNSP): Portaria MS 529/2013 — 6 metas internacionais',
    ],
    citeSempre: ['RDC 36/2013', 'Portaria MS 529/2013 (PNSP)', 'Portaria MS 2.616/1998 (CCIH)'],
    naoEsqueca:
      'Citar as 6 metas internacionais de segurança do paciente (OMS/Joint Commission): identificação correta, comunicação eficaz, medicação segura, cirurgia segura, higiene das mãos, prevenção de quedas.',
    mnemônico: 'NSP = Núcleo de Segurança do Paciente (obrigatório por RDC 36/2013)',
  },
  {
    id: 'e17',
    gatilho: 'Resíduos de Serviços de Saúde / RSS / PGRSS / Grupos A B C D E / RDC 222/2018',
    area: 'Resíduos e Ambiente',
    cor: AREA_CORES['Resíduos e Ambiente'],
    fraseAncora:
      'O gerenciamento de RSS abrange, da geração à disposição final, responsabilidade inafastável do gerador, devendo o Plano de Gerenciamento (PGRSS) ser elaborado, aprovado e efetivamente executado como condição de funcionamento.',
    pontosObrigatorios: [
      'Grupo A (infectante): riscos biológicos — saco branco leitoso, símbolo biológico',
      'Grupo B (químico): reagentes, drogas citostáticas, mercúrio — saco laranja ou recipiente específico',
      'Grupo C (radioativo): rejeitos com radionuclídeos — símbolo de radiação ionizante, gerenciado com CNEN',
      'Grupo D (comum): assimiláveis ao doméstico — saco preto/incolor',
      'Grupo E (perfurocortante): agulhas, bisturis — caixa rígida amarela (até 2/3 da capacidade)',
    ],
    citeSempre: ['RDC 222/2018 (ANVISA)', 'CONAMA 358/2005', 'NR 32 (saúde do trabalhador)'],
    naoEsqueca:
      'Caixas de perfurocortante (Grupo E) nunca podem ultrapassar 2/3 da capacidade. Esse limite específico é muito cobrado e demonstra conhecimento técnico detalhado.',
    mnemônico: 'ABCDE: Agente-bio, Bioquímico, Cancerígeno/radio, Doméstico, Espinho(cortante)',
  },
  {
    id: 'e18',
    gatilho: 'Projetos Físicos de Estabelecimentos de Saúde / RDC 50/2002 / RDC 51/2011 / Habite-se Sanitário',
    area: 'Estabelecimentos de Saúde',
    cor: AREA_CORES['Estabelecimentos de Saúde'],
    fraseAncora:
      'Nenhum estabelecimento assistencial de saúde pode ser construído, reformado ou ampliado sem prévia aprovação do projeto físico pela VISA competente, sendo a RDC 50/2002 o instrumento técnico central dessa avaliação.',
    pontosObrigatorios: [
      'RDC 50/2002: regulamento técnico para elaboração e avaliação de projetos físicos de EAS',
      'RDC 51/2011: define requisitos mínimos para análise e aprovação de projetos físicos no âmbito do SNVS',
      'Habite-se sanitário: documento de aprovação emitido pela VISA após vistoria do EAS construído',
      'Áreas de um EAS: Ambulatorial, Internação, Apoio ao Diagnóstico, Apoio Técnico, Apoio Logístico',
      'Competência de aprovação: VISA municipal (via CIB) ou VISA estadual conforme complexidade',
    ],
    citeSempre: ['RDC 50/2002', 'RDC 51/2011'],
    naoEsqueca:
      'Projetos físicos de EAS passam por duas aprovações: 1ª pelo Corpo de Bombeiros (AVCB) e 2ª pela VISA (habite-se sanitário). São instâncias distintas e sequenciais.',
    mnemônico: 'PROJETO → APROVAÇÃO VISA (RDC 50) → CONSTRUÇÃO → HABITE-SE VISA → LICENÇA SANITÁRIA',
  },
  {
    id: 'e19',
    gatilho: 'Esterilização de Materiais / CME / Métodos de Esterilização / Indicadores Biológicos',
    area: 'Segurança do Paciente',
    cor: AREA_CORES['Segurança do Paciente'],
    fraseAncora:
      'A esterilização é o processo que elimina todos os microrganismos viáveis, incluindo esporos bacterianos, sendo sua eficácia comprovada por indicadores biológicos e monitorada por sistema de rastreabilidade.',
    pontosObrigatorios: [
      'Classificação de Spaulding: CRÍTICO (penetra tecido estéril → esteriliza), SEMI-CRÍTICO (mucosa → no mínimo desinfecção alto nível), NÃO CRÍTICO (pele íntegra → limpeza/desinfecção baixo nível)',
      'Métodos: autoclave (vapor saturado 121°C/134°C), óxido de etileno (EtO), peróxido de hidrogênio plasma, glutaraldeído (alto nível)',
      'Indicadores: FÍSICO (temperatura/pressão), QUÍMICO (muda cor), BIOLÓGICO (esporo Geobacillus stearothermophilus) — biológico é o MAIS confiável',
      'CME (Central de Material e Esterilização): unidade obrigatória em hospitais, regida por RDC 15/2012 e RDC 330/2019',
      'Rastreabilidade: todo material processado deve ser rastreável — lote de esterilização, data, responsável',
    ],
    citeSempre: ['RDC 15/2012', 'RDC 330/2019', 'Classificação de Spaulding'],
    naoEsqueca:
      'O indicador BIOLÓGICO é o único que valida diretamente a morte do microrganismo. Indicadores físico e químico são monitoramento, não validação. Essa distinção é cobrada.',
    mnemônico: 'Spaulding: CRítico → ESteriliza | Semi → Desinfecta Alto Nível | Não-crítico → Limpa',
  },
  {
    id: 'e20',
    gatilho: 'Segurança Radiológica / Radiação Ionizante / Proteção Radiológica / CNEN',
    area: 'Resíduos e Ambiente',
    cor: AREA_CORES['Resíduos e Ambiente'],
    fraseAncora:
      'A proteção radiológica visa minimizar a exposição à radiação ionizante, orientada pelos princípios de justificação, otimização e limitação de doses, sob regulação conjunta da CNEN e da ANVISA.',
    pontosObrigatorios: [
      'Três princípios da proteção radiológica: JUSTIFICAÇÃO (o benefício supera o risco), OTIMIZAÇÃO (manter exposição tão baixa quanto razoável — ALARA), LIMITAÇÃO (limites de dose para trabalhadores e público)',
      'ALARA: As Low As Reasonably Achievable — princípio-guia da proteção radiológica',
      'Trabalhador com exposição ocupacional: limite de 20 mSv/ano (média de 5 anos)',
      'Raios-X: exige alvará de funcionamento da CNEN + licença da VISA estadual',
      'EPIs: avental plumbífero, protetor de tireoide, óculos plumbíferos; dosímetro individual obrigatório',
    ],
    citeSempre: ['CNEN NN 3.01 (proteção de trabalhadores)', 'RDC 330/2019', 'Portaria SVS/MS 453/1998'],
    naoEsqueca:
      'A CNEN regula os aspectos nucleares/radiológicos; a ANVISA (e por delegação as VISAs estaduais) regula o licenciamento dos equipamentos em serviços de saúde. São competências complementares, não concorrentes.',
    mnemônico: 'ALARA: Tão Baixo Quanto Razoavelmente Possível → JUSTIFICA → OTIMIZA → LIMITA doses',
  },
  {
    id: 'e21',
    gatilho: 'Gerenciamento de Tecnologias em Saúde / Equipamentos Médicos / Tecnovigilância',
    area: 'Estabelecimentos de Saúde',
    cor: AREA_CORES['Estabelecimentos de Saúde'],
    fraseAncora:
      'A tecnovigilância monitora eventos adversos e queixas técnicas relacionados a produtos para a saúde pós-comercialização, subsidiando ações regulatórias da ANVISA para proteção dos usuários.',
    pontosObrigatorios: [
      'Tecnovigilância = vigilância pós-mercado de equipamentos, materiais, implantes e artigos médico-hospitalares',
      'Notificação obrigatória à ANVISA: eventos adversos e queixas técnicas de produtos para saúde (RDC 67/2009)',
      'Ciclo de vida da tecnologia: avaliação → incorporação → monitoramento → desinvestimento',
      'Avaliação de Tecnologias em Saúde (ATS): evidências científicas para decisão de incorporação',
      'CONITEC: Comissão Nacional de Incorporação de Tecnologias no SUS (Lei 12.401/2011)',
    ],
    citeSempre: ['RDC 67/2009 (tecnovigilância)', 'Lei 12.401/2011 (CONITEC)'],
    naoEsqueca:
      'Distinguir HEMOVIGILÂNCIA (sangue e hemoderivados), FARMACOVIGILÂNCIA (medicamentos) e TECNOVIGILÂNCIA (equipamentos/materiais). A banca pode cobrar a distinção.',
    mnemônico: 'CONITEC → incorpora tecnologia no SUS com base em EVIDÊNCIAS (ATS)',
  },
  {
    id: 'e24',
    gatilho: 'Acidente com Césio-137 / Goiânia 1987 / Segurança Radiológica / Fontes Radioativas em Serviços de Saúde',
    area: 'Resíduos e Ambiente',
    cor: AREA_CORES['Resíduos e Ambiente'],
    fraseAncora:
      'O acidente com Césio-137 em Goiânia (1987), nível 5 na INES, expôs a ausência de controle sobre o ciclo de vida das fontes radioativas e impulsionou a reestruturação do marco regulatório de segurança radiológica no Brasil.',
    pontosObrigatorios: [
      'Fatos centrais: setembro/1987, Goiânia-GO; aparelho de radioterapia abandonado no IGR; 249 contaminados; 4 mortos (inclusive Leide das Neves, 6 anos); 112.800 monitorados; INES nível 5',
      'CNEN: licencia e regula fontes radioativas (Lei 4.118/1962) — competência nuclear/radiológica',
      'ANVISA/VISA estadual: fiscaliza estabelecimentos de saúde que usam radiação (alvará CNEN, proteção radiológica, registros de dose)',
      'Resposta à emergência: isolamento → acionamento da CNEN → notificação à VE → comunicação de risco → dosimetria das vítimas → SINAN',
      'Lições regulatórias: Portaria SVS/MS 453/1998 (radiodiagnóstico) + Lei 9.782/1999 (ANVISA) + normas CNEN sobre fontes orfãs + protocolos AIEA',
    ],
    citeSempre: ['Lei 4.118/1962 (CNEN)', 'Portaria SVS/MS 453/1998', 'Lei 9.782/1999', 'CNEN NN 3.01'],
    naoEsqueca:
      'IRRADIAÇÃO ≠ CONTAMINAÇÃO: irradiação é exposição externa (sem incorporar o material); contaminação é incorporação do Cs-137 no organismo. Em Goiânia ocorreram AMBAS. Confundir os termos é erro eliminatório em ER.',
    mnemônico: 'CNEN licencia a FONTE → VISA fiscaliza o SERVIÇO → EMERGÊNCIA: isola → aciona CNEN → notifica VE → comunica população',
  },
  {
    id: 'e22',
    gatilho: 'Abastecimento de Água / Potabilidade / Licenciamento de Água / Portaria SES-GO 2145/2024',
    area: 'Resíduos e Ambiente',
    cor: AREA_CORES['Resíduos e Ambiente'],
    fraseAncora:
      'O controle da qualidade da água para consumo humano é ação prioritária de vigilância ambiental em saúde, regulada pela Portaria GM/MS 888/2021 e, no Estado de Goiás, pela Portaria SES-GO 2145/2024 para licenciamento dos prestadores de serviço de abastecimento.',
    pontosObrigatorios: [
      'Portaria SES-GO 2145/2024: regulamenta licenciamento sanitário de prestadores de abastecimento de água em GO',
      'Portaria GM/MS 888/2021: padrão de potabilidade nacional — substituiu a Portaria 2914/2011',
      'Vigilância da qualidade da água: responsabilidade das VISAs municipais e estadual',
      'Parâmetros controlados: microbiológicos (E. coli, coliformes totais), físico-químicos (turbidez, cloro residual), radioatividade',
      'Plano de Amostragem: frequência e pontos de coleta definidos conforme população atendida',
    ],
    citeSempre: ['Portaria SES-GO 2145/2024', 'Portaria GM/MS 888/2021'],
    naoEsqueca:
      'Citar a Portaria SES-GO 2145/2024 demonstra conhecimento atualizado da legislação goiana específica — questões cobram a norma mais recente.',
    mnemônico: 'Água: POTABILIDADE (888/2021 federal) + LICENCIAMENTO GO (2145/2024 estadual)',
  },
  {
    id: 'e23',
    gatilho: 'Assédio Moral / Ambiente de Trabalho / Lei 18.456/2014 / Servidor Público',
    area: 'Ética e Conduta',
    cor: AREA_CORES['Ética e Conduta'],
    fraseAncora:
      'O assédio moral no serviço público é conduta vedada pela Lei estadual 18.456/2014 e configura infração disciplinar, podendo ensejar demissão, além de responsabilidade civil e penal do assediador.',
    pontosObrigatorios: [
      'Conceito: exposição repetida e prolongada a condutas humilhantes, vexatórias ou constrangedoras',
      'Lei 18.456/2014 (GO): pune o assédio moral na Administração estadual com advertência, suspensão e demissão',
      'Assédio vertical descendente (chefe → subordinado) é o mais comum; horizontal (entre pares) também é punido',
      'Vítima deve documentar: datas, testemunhas, e-mails, mensagens — prova é essencial',
      'Chefia pode ser punida mesmo que assédio seja praticado por terceiro sem ação corretiva',
    ],
    citeSempre: ['Lei estadual 18.456/2014', 'Decreto 9.837/2021 (ética servidor)'],
    naoEsqueca:
      'Diferenciar assédio moral (conduta repetida e prolongada) de conflito ou estresse pontual do trabalho. A repetição e a intencionalidade são elementos caracterizadores do assédio.',
    mnemônico: 'Assédio = REPETIÇÃO + HUMILHAÇÃO + INTENÇÃO → punição: advertência → suspensão → demissão',
  },
];

const PRINT_STYLES = `
@media print {
  @page { size: A4; margin: 10mm; }

  /* Cores preservadas */
  body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

  /* Ocultar toda a navegação do Layout */
  .MuiAppBar-root,
  .MuiDrawer-root,
  .MuiDrawer-paper,
  header,
  nav {
    display: none !important;
  }

  /* Reset completo no container raiz */
  body > #root,
  body > #root > div,
  body > #root > div > div {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* O <main> (componente Box do Layout) ocupa tudo sem margem */
  main {
    margin: 0 !important;
    padding: 8mm !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    min-height: auto !important;
  }

  /* Elementos sem impressão */
  .no-print { display: none !important; }

  /* Grid de cards: 2 colunas */
  .print-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 6mm; }

  /* Cards */
  .esquema-card { break-inside: avoid; page-break-inside: avoid; border: 1.5px solid #ccc; border-radius: 6px; overflow: hidden; margin-bottom: 4mm; }
  .esquema-header { padding: 4mm 5mm !important; }
  .esquema-body { padding: 4mm 5mm !important; font-size: 9pt !important; }
  .ancora-text { font-size: 9.5pt !important; font-style: italic; font-weight: bold; border-left: 3px solid; padding-left: 4mm; margin-bottom: 3mm; }
  .ponto-item { font-size: 8.5pt !important; margin-bottom: 1mm; }
  .cite-chip { display: inline-block; border: 1px solid; border-radius: 3px; padding: 1px 4px; margin: 1px 2px; font-size: 7.5pt !important; font-weight: bold; }
  .alerta-box { border: 1px solid; border-radius: 3px; padding: 2mm 3mm; margin-top: 2mm; font-size: 8pt !important; }
  .section-title { font-size: 7pt !important; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #555; margin: 2mm 0 1mm 0; }
  h6.gatilho-text { font-size: 9pt !important; font-weight: bold; line-height: 1.2; }
  .mnemo-box { font-size: 7.5pt !important; background: #f5f5f5 !important; border-radius: 3px; padding: 1mm 2mm; margin-top: 2mm; font-family: monospace; }
  .area-label { font-size: 7pt !important; opacity: 0.85; }
  .page-header { display: block !important; text-align: center; margin-bottom: 8mm; border-bottom: 2px solid #1565c0; padding-bottom: 3mm; }
  .page-header h4 { font-size: 14pt !important; font-weight: bold; color: #1565c0 !important; }
  .page-header p { font-size: 8pt !important; color: #555; }
}
`;

export const GabaritoDiscursivo = () => {
  const [areaFiltro, setAreaFiltro] = useState<string | null>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = PRINT_STYLES;
    style.id = 'gabarito-print-styles';
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById('gabarito-print-styles');
      if (el) el.remove();
    };
  }, []);

  const handlePrint = () => window.print();

  const areas = Array.from(new Set(esquemas.map((e) => e.area)));

  const esquemasFiltrados = areaFiltro
    ? esquemas.filter((e) => e.area === areaFiltro)
    : esquemas;

  return (
    <Box>
      {/* Header da Página */}
      <Box className="page-header" sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="primary.main" gutterBottom>
          Gabarito Discursivo — Esquemas por Tema
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "Se a questão for sobre X, faça Y" — frases e estruturas de alto impacto para a correção IADES
        </Typography>
      </Box>

      {/* Controles — ocultos na impressão */}
      <Box
        className="no-print"
        sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}
      >
        <Button
          variant="contained"
          startIcon={<Print />}
          onClick={handlePrint}
          size="large"
          sx={{ fontWeight: 'bold' }}
        >
          Imprimir / Salvar PDF
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
          Dica: no diálogo de impressão, selecione "Salvar como PDF" e "Mais configurações → Habilitar gráficos em segundo plano"
        </Typography>
      </Box>

      {/* Filtro por Área — oculto na impressão */}
      <Box className="no-print" sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <FilterList fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary" fontWeight="bold">
            FILTRAR POR ÁREA
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={areaFiltro}
          exclusive
          onChange={(_, v) => setAreaFiltro(v)}
          size="small"
          sx={{ flexWrap: 'wrap', gap: 0.5 }}
        >
          {areas.map((area) => (
            <ToggleButton
              key={area}
              value={area}
              sx={{
                borderRadius: '20px !important',
                px: 1.5,
                fontSize: '0.72rem',
                border: `1px solid ${AREA_CORES[area] || '#ccc'} !important`,
                '&.Mui-selected': {
                  bgcolor: AREA_CORES[area] || '#1565c0',
                  color: '#fff',
                  '&:hover': { bgcolor: AREA_CORES[area] || '#1565c0', opacity: 0.9 },
                },
              }}
            >
              {area}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {areaFiltro && (
          <Button size="small" onClick={() => setAreaFiltro(null)} sx={{ ml: 1 }}>
            Limpar filtro
          </Button>
        )}
      </Box>

      {/* Alerta instrucional — oculto na impressão */}
      <Alert severity="info" className="no-print" sx={{ mb: 3 }}>
        <strong>Como usar:</strong> Para cada tema, memorize a <strong>Frase-Âncora</strong> (use ela na introdução ou conclusão), inclua todos os <strong>Pontos Obrigatórios</strong> no desenvolvimento, cite as <strong>normas indicadas</strong> e jamais cometa o erro apontado em <strong>Não Esqueça</strong>.
      </Alert>

      {/* Grid de Esquemas */}
      <Box className="print-grid" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
        {esquemasFiltrados.map((esq) => (
          <Paper
            key={esq.id}
            className="esquema-card"
            elevation={3}
            sx={{ borderRadius: 2, overflow: 'hidden', border: `2px solid ${esq.cor}22` }}
          >
            {/* Header colorido */}
            <Box
              className="esquema-header"
              sx={{ bgcolor: esq.cor, color: '#fff', px: 2, py: 1.5 }}
            >
              <Typography
                className="area-label"
                variant="caption"
                sx={{ opacity: 0.85, display: 'block', mb: 0.3, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.65rem' }}
              >
                {esq.area}
              </Typography>
              <Typography
                className="gatilho-text"
                variant="subtitle2"
                sx={{ fontWeight: 'bold', lineHeight: 1.3, fontSize: '0.82rem' }}
              >
                SE A QUESTÃO FOR SOBRE: {esq.gatilho}
              </Typography>
            </Box>

            {/* Corpo */}
            <Box className="esquema-body" sx={{ px: 2, py: 1.5 }}>
              {/* Frase-Âncora */}
              <Box
                className="ancora-text"
                sx={{
                  borderLeft: `3px solid ${esq.cor}`,
                  pl: 1.5,
                  mb: 1.5,
                  py: 0.5,
                  bgcolor: `${esq.cor}08`,
                  borderRadius: '0 4px 4px 0',
                }}
              >
                <Typography variant="caption" sx={{ display: 'block', color: esq.cor, fontWeight: 'bold', mb: 0.3, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  Frase-Âncora (use na introdução ou conclusão)
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 600, fontSize: '0.78rem', lineHeight: 1.35, color: '#1a1a1a' }}>
                  "{esq.fraseAncora}"
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              {/* Pontos obrigatórios */}
              <Typography className="section-title" variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 'bold', color: esq.cor, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 0.8, mb: 0.5 }}>
                <CheckCircle sx={{ fontSize: 12 }} /> Pontos obrigatórios no texto
              </Typography>
              <Box component="ol" sx={{ m: 0, pl: 2.5 }}>
                {esq.pontosObrigatorios.map((p, i) => (
                  <Box component="li" key={i} className="ponto-item" sx={{ mb: 0.4 }}>
                    <Typography variant="caption" sx={{ fontSize: '0.73rem', lineHeight: 1.3, color: '#222' }}>
                      {p}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 1 }} />

              {/* Mnemônico */}
              {esq.mnemônico && (
                <Box className="mnemo-box" sx={{ bgcolor: '#f5f5f5', borderRadius: 1, px: 1.5, py: 0.8, mb: 1, fontFamily: 'monospace' }}>
                  <Typography variant="caption" sx={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#555', textTransform: 'uppercase', display: 'block', mb: 0.2 }}>
                    Mnemônico
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.72rem', color: '#333', fontFamily: 'monospace' }}>
                    {esq.mnemônico}
                  </Typography>
                </Box>
              )}

              {/* Cite sempre */}
              <Box sx={{ mb: 1 }}>
                <Typography className="section-title" variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 'bold', color: '#555', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 0.8, mb: 0.5 }}>
                  <Gavel sx={{ fontSize: 12 }} /> Cite sempre
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {esq.citeSempre.map((c) => (
                    <Chip
                      key={c}
                      label={c}
                      className="cite-chip"
                      size="small"
                      sx={{
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        bgcolor: `${esq.cor}18`,
                        color: esq.cor,
                        border: `1px solid ${esq.cor}55`,
                        height: 20,
                        '& .MuiChip-label': { px: 0.8 },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Não esqueça */}
              <Box
                className="alerta-box"
                sx={{
                  border: `1px solid #ff6f00`,
                  borderRadius: 1,
                  bgcolor: '#fff8e1',
                  px: 1.5,
                  py: 0.8,
                }}
              >
                <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 'bold', color: '#e65100', fontSize: '0.65rem', textTransform: 'uppercase', mb: 0.3 }}>
                  <Warning sx={{ fontSize: 12 }} /> Não esqueça — ponto mais cobrado
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.73rem', color: '#4a2800', lineHeight: 1.35, display: 'block' }}>
                  {esq.naoEsqueca}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Rodapé de impressão */}
      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: 1,
          borderColor: 'divider',
          textAlign: 'center',
          display: { xs: 'none', md: 'block' },
        }}
        className="no-print"
      >
        <Typography variant="caption" color="text.secondary">
          {esquemasFiltrados.length} esquemas exibidos • Fiscal de Saúde Pública — IADES/SES-GO
        </Typography>
      </Box>

      {/* Rodapé visível apenas na impressão */}
      <Box
        sx={{ display: 'none' }}
        className="print-footer"
      >
        <Typography variant="caption">
          Fiscal de Saúde Pública — IADES/SES-GO • Gabarito Discursivo por Tema • {esquemas.length} esquemas
        </Typography>
      </Box>

      {/* Star — legenda global no fim, oculta na impressão */}
      <Alert severity="success" className="no-print" icon={<Star />} sx={{ mt: 3 }}>
        <strong>Estrutura universal para qualquer discursiva IADES:</strong>{' '}
        <strong>Introdução</strong> (contexto + frase-âncora + tese) →{' '}
        <strong>P1</strong> (item a) →{' '}
        <strong>P2</strong> (item b) →{' '}
        <strong>P3</strong> (item c) →{' '}
        <strong>Conclusão</strong> (retomar tese + projeção). Nunca menos de 20 nem mais de 40 linhas.
      </Alert>
    </Box>
  );
};
