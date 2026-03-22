// Tipos principais da plataforma de estudos

export interface Materia {
  id: string;
  nome: string;
  sigla: string;
  descricao: string;
  cor: string;
  icone: string;
  topicos: Topico[];
}

export interface Topico {
  id: string;
  numero: number;
  titulo: string;
  conteudo: ConteudoTopico;
}

export interface ConteudoTopico {
  resumo: string;
  explicacao: string;
  pontosChave: string[];
  armadilhas: Armadilha[];
  mnemonicos: Mnemonico[];
  flashcards: Flashcard[];
  questoes: Questao[];
}

export interface Armadilha {
  titulo: string;
  descricao: string;
  dica: string;
}

export interface Mnemonico {
  termo: string;
  significado: string;
  frase: string;
}

export interface Flashcard {
  id: string;
  frente: string;
  verso: string;
  tags: string[];
  dificuldade: 'facil' | 'medio' | 'dificil';
  // Leitner box (1-5)
  caixa: number;
  proximaRevisao: string | null;
  ultimaRevisao: string | null;
  acertos: number;
  erros: number;
}

export interface Questao {
  id: string;
  enunciado: string;
  alternativas: Alternativa[];
  gabarito: string; // A, B, C, D ou E
  justificativa: string;
  dificuldade: 'facil' | 'medio' | 'dificil' | 'Fácil' | 'Média' | 'Difícil';
  competencia: string;
  banca: string;
  ano?: number;
  orgao?: string;
  tags: string[];
}

export interface Alternativa {
  letra: string;
  texto: string;
}

export interface ProgressoTopico {
  topicoId: string;
  materiaId: string;
  lido: boolean;
  revisado: boolean;
  favorito: boolean;
  notas: Nota[];
  ultimoAcesso: string | null;
  porcentagemQuestoes: number;
  porcentagemFlashcards: number;
}

export interface Nota {
  id: string;
  texto: string;
  destaque?: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface RespostaQuestao {
  questaoId: string;
  respostaSelecionada: string;
  correta: boolean;
  tempo: number; // em segundos
  data: string;
}

export interface EstatisticasMateria {
  materiaId: string;
  totalQuestoes: number;
  questoesRespondidas: number;
  acertos: number;
  erros: number;
  porcentagemAcerto: number;
  tempoMedio: number;
}

export interface RevisaoDiaria {
  data: string;
  flashcardsPendentes: string[];
  flashcardsRevisados: string[];
  topicosPendentes: string[];
  topicosRevisados: string[];
}

export type StatusEstudo = 'nao_visto' | 'em_revisao' | 'dominado';

export interface FiltrosBusca {
  termo: string;
  materias: string[];
  tags: string[];
  status: StatusEstudo[];
  dificuldade: ('facil' | 'medio' | 'dificil' | 'Fácil' | 'Média' | 'Difícil')[];
}
