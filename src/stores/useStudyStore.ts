import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type {
  ProgressoTopico,
  RespostaQuestao,
  Nota,
  EstatisticasMateria,
  RevisaoDiaria,
} from '../types';

interface StudyState {
  // Tema
  darkMode: boolean;
  toggleDarkMode: () => void;

  // Progresso por topico
  progressos: Record<string, ProgressoTopico>;
  marcarComoLido: (materiaId: string, topicoId: string) => void;
  marcarComoRevisado: (materiaId: string, topicoId: string) => void;
  toggleFavorito: (materiaId: string, topicoId: string) => void;
  adicionarNota: (materiaId: string, topicoId: string, nota: Omit<Nota, 'id' | 'criadoEm' | 'atualizadoEm'>) => void;
  removerNota: (materiaId: string, topicoId: string, notaId: string) => void;
  atualizarProgresso: (materiaId: string, topicoId: string, dados: Partial<ProgressoTopico>) => void;

  // Respostas de questoes
  respostas: RespostaQuestao[];
  registrarResposta: (resposta: Omit<RespostaQuestao, 'data'>) => void;
  getEstatisticasMateria: (materiaId: string) => EstatisticasMateria;
  getEstatisticasGerais: () => {
    totalQuestoes: number;
    acertos: number;
    erros: number;
    porcentagemAcerto: number;
  };

  // Revisoes
  revisoesDiarias: RevisaoDiaria[];
  getRevisaoHoje: () => RevisaoDiaria | null;
  marcarFlashcardRevisado: (flashcardId: string) => void;
  marcarTopicoRevisado: (topicoId: string) => void;

  // Sidebar
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  // Busca
  termoBusca: string;
  setTermoBusca: (termo: string) => void;
}

const generateId = () => Math.random().toString(36).substring(2, 15);

const getProgressoKey = (materiaId: string, topicoId: string) => `${materiaId}:${topicoId}`;

export const useStudyStore = create<StudyState>()(
  persist(
    (set, get) => ({
      // Tema
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      // Progresso
      progressos: {},

      marcarComoLido: (materiaId, topicoId) => {
        const key = getProgressoKey(materiaId, topicoId);
        set((state) => ({
          progressos: {
            ...state.progressos,
            [key]: {
              ...state.progressos[key],
              topicoId,
              materiaId,
              lido: true,
              ultimoAcesso: new Date().toISOString(),
              revisado: state.progressos[key]?.revisado ?? false,
              favorito: state.progressos[key]?.favorito ?? false,
              notas: state.progressos[key]?.notas ?? [],
              porcentagemQuestoes: state.progressos[key]?.porcentagemQuestoes ?? 0,
              porcentagemFlashcards: state.progressos[key]?.porcentagemFlashcards ?? 0,
            },
          },
        }));
      },

      marcarComoRevisado: (materiaId, topicoId) => {
        const key = getProgressoKey(materiaId, topicoId);
        set((state) => ({
          progressos: {
            ...state.progressos,
            [key]: {
              ...state.progressos[key],
              topicoId,
              materiaId,
              revisado: true,
              lido: true,
              ultimoAcesso: new Date().toISOString(),
              favorito: state.progressos[key]?.favorito ?? false,
              notas: state.progressos[key]?.notas ?? [],
              porcentagemQuestoes: state.progressos[key]?.porcentagemQuestoes ?? 0,
              porcentagemFlashcards: state.progressos[key]?.porcentagemFlashcards ?? 0,
            },
          },
        }));
      },

      toggleFavorito: (materiaId, topicoId) => {
        const key = getProgressoKey(materiaId, topicoId);
        set((state) => ({
          progressos: {
            ...state.progressos,
            [key]: {
              ...state.progressos[key],
              topicoId,
              materiaId,
              favorito: !(state.progressos[key]?.favorito ?? false),
              lido: state.progressos[key]?.lido ?? false,
              revisado: state.progressos[key]?.revisado ?? false,
              ultimoAcesso: state.progressos[key]?.ultimoAcesso ?? null,
              notas: state.progressos[key]?.notas ?? [],
              porcentagemQuestoes: state.progressos[key]?.porcentagemQuestoes ?? 0,
              porcentagemFlashcards: state.progressos[key]?.porcentagemFlashcards ?? 0,
            },
          },
        }));
      },

      adicionarNota: (materiaId, topicoId, nota) => {
        const key = getProgressoKey(materiaId, topicoId);
        const novaNota: Nota = {
          ...nota,
          id: generateId(),
          criadoEm: new Date().toISOString(),
          atualizadoEm: new Date().toISOString(),
        };
        set((state) => ({
          progressos: {
            ...state.progressos,
            [key]: {
              ...state.progressos[key],
              topicoId,
              materiaId,
              notas: [...(state.progressos[key]?.notas ?? []), novaNota],
              lido: state.progressos[key]?.lido ?? false,
              revisado: state.progressos[key]?.revisado ?? false,
              favorito: state.progressos[key]?.favorito ?? false,
              ultimoAcesso: state.progressos[key]?.ultimoAcesso ?? null,
              porcentagemQuestoes: state.progressos[key]?.porcentagemQuestoes ?? 0,
              porcentagemFlashcards: state.progressos[key]?.porcentagemFlashcards ?? 0,
            },
          },
        }));
      },

      removerNota: (materiaId, topicoId, notaId) => {
        const key = getProgressoKey(materiaId, topicoId);
        set((state) => ({
          progressos: {
            ...state.progressos,
            [key]: {
              ...state.progressos[key],
              notas: (state.progressos[key]?.notas ?? []).filter((n) => n.id !== notaId),
            },
          },
        }));
      },

      atualizarProgresso: (materiaId, topicoId, dados) => {
        const key = getProgressoKey(materiaId, topicoId);
        set((state) => ({
          progressos: {
            ...state.progressos,
            [key]: {
              ...state.progressos[key],
              ...dados,
              topicoId,
              materiaId,
            },
          },
        }));
      },

      // Respostas
      respostas: [],

      registrarResposta: (resposta) => {
        set((state) => ({
          respostas: [
            ...state.respostas,
            {
              ...resposta,
              data: new Date().toISOString(),
            },
          ],
        }));
      },

      getEstatisticasMateria: (materiaId) => {
        const { respostas } = get();
        const respostasMateria = respostas.filter((r) =>
          r.questaoId.startsWith(materiaId)
        );

        const acertos = respostasMateria.filter((r) => r.correta).length;
        const erros = respostasMateria.length - acertos;
        const tempoTotal = respostasMateria.reduce((acc, r) => acc + r.tempo, 0);

        return {
          materiaId,
          totalQuestoes: respostasMateria.length,
          questoesRespondidas: respostasMateria.length,
          acertos,
          erros,
          porcentagemAcerto: respostasMateria.length > 0
            ? Math.round((acertos / respostasMateria.length) * 100)
            : 0,
          tempoMedio: respostasMateria.length > 0
            ? Math.round(tempoTotal / respostasMateria.length)
            : 0,
        };
      },

      getEstatisticasGerais: () => {
        const { respostas } = get();
        const acertos = respostas.filter((r) => r.correta).length;
        const erros = respostas.length - acertos;

        return {
          totalQuestoes: respostas.length,
          acertos,
          erros,
          porcentagemAcerto: respostas.length > 0
            ? Math.round((acertos / respostas.length) * 100)
            : 0,
        };
      },

      // Revisoes
      revisoesDiarias: [],

      getRevisaoHoje: () => {
        const { revisoesDiarias } = get();
        const hoje = new Date().toISOString().split('T')[0];
        return revisoesDiarias.find((r) => r.data === hoje) ?? null;
      },

      marcarFlashcardRevisado: (flashcardId) => {
        const hoje = new Date().toISOString().split('T')[0];
        set((state) => {
          const revisaoIndex = state.revisoesDiarias.findIndex((r) => r.data === hoje);

          if (revisaoIndex === -1) {
            return {
              revisoesDiarias: [
                ...state.revisoesDiarias,
                {
                  data: hoje,
                  flashcardsPendentes: [],
                  flashcardsRevisados: [flashcardId],
                  topicosPendentes: [],
                  topicosRevisados: [],
                },
              ],
            };
          }

          const novasRevisoes = [...state.revisoesDiarias];
          novasRevisoes[revisaoIndex] = {
            ...novasRevisoes[revisaoIndex],
            flashcardsRevisados: [
              ...novasRevisoes[revisaoIndex].flashcardsRevisados,
              flashcardId,
            ],
            flashcardsPendentes: novasRevisoes[revisaoIndex].flashcardsPendentes.filter(
              (id) => id !== flashcardId
            ),
          };

          return { revisoesDiarias: novasRevisoes };
        });
      },

      marcarTopicoRevisado: (topicoId) => {
        const hoje = new Date().toISOString().split('T')[0];
        set((state) => {
          const revisaoIndex = state.revisoesDiarias.findIndex((r) => r.data === hoje);

          if (revisaoIndex === -1) {
            return {
              revisoesDiarias: [
                ...state.revisoesDiarias,
                {
                  data: hoje,
                  flashcardsPendentes: [],
                  flashcardsRevisados: [],
                  topicosPendentes: [],
                  topicosRevisados: [topicoId],
                },
              ],
            };
          }

          const novasRevisoes = [...state.revisoesDiarias];
          novasRevisoes[revisaoIndex] = {
            ...novasRevisoes[revisaoIndex],
            topicosRevisados: [
              ...novasRevisoes[revisaoIndex].topicosRevisados,
              topicoId,
            ],
            topicosPendentes: novasRevisoes[revisaoIndex].topicosPendentes.filter(
              (id) => id !== topicoId
            ),
          };

          return { revisoesDiarias: novasRevisoes };
        });
      },

      // Sidebar
      sidebarOpen: true,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),

      // Busca
      termoBusca: '',
      setTermoBusca: (termo) => set({ termoBusca: termo }),
    }),
    {
      name: 'study-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        darkMode: state.darkMode,
        progressos: state.progressos,
        respostas: state.respostas,
        revisoesDiarias: state.revisoesDiarias,
      }),
    }
  )
);
