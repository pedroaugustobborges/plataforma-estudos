import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Flashcard } from '../types';

// Sistema Leitner: intervalos de revisao por caixa (em dias)
const LEITNER_INTERVALS: Record<number, number> = {
  1: 1,   // Caixa 1: revisar todo dia
  2: 2,   // Caixa 2: a cada 2 dias
  3: 4,   // Caixa 3: a cada 4 dias
  4: 8,   // Caixa 4: a cada 8 dias
  5: 16,  // Caixa 5: a cada 16 dias (dominado)
};

interface FlashcardState {
  // Estado dos flashcards (sobrescreve o padrao dos dados)
  flashcardStates: Record<string, {
    caixa: number;
    proximaRevisao: string | null;
    ultimaRevisao: string | null;
    acertos: number;
    erros: number;
  }>;

  // Acoes
  responderFlashcard: (flashcardId: string, acertou: boolean) => void;
  getFlashcardState: (flashcardId: string) => {
    caixa: number;
    proximaRevisao: string | null;
    ultimaRevisao: string | null;
    acertos: number;
    erros: number;
  };
  getFlashcardsPendentes: (flashcards: Flashcard[]) => Flashcard[];
  resetarFlashcard: (flashcardId: string) => void;
  resetarTodos: () => void;

  // Estatisticas
  getEstatisticasLeitner: () => {
    caixa1: number;
    caixa2: number;
    caixa3: number;
    caixa4: number;
    caixa5: number;
    pendentesHoje: number;
  };
}

const calcularProximaRevisao = (caixa: number): string => {
  const dias = LEITNER_INTERVALS[caixa] || 1;
  const data = new Date();
  data.setDate(data.getDate() + dias);
  return data.toISOString().split('T')[0];
};

const isRevisaoDevida = (proximaRevisao: string | null): boolean => {
  if (!proximaRevisao) return true;
  const hoje = new Date().toISOString().split('T')[0];
  return proximaRevisao <= hoje;
};

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      flashcardStates: {},

      responderFlashcard: (flashcardId, acertou) => {
        set((state) => {
          const estadoAtual = state.flashcardStates[flashcardId] || {
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          };

          let novaCaixa: number;
          if (acertou) {
            // Acertou: sobe uma caixa (maximo 5)
            novaCaixa = Math.min(estadoAtual.caixa + 1, 5);
          } else {
            // Errou: volta para caixa 1
            novaCaixa = 1;
          }

          return {
            flashcardStates: {
              ...state.flashcardStates,
              [flashcardId]: {
                caixa: novaCaixa,
                proximaRevisao: calcularProximaRevisao(novaCaixa),
                ultimaRevisao: new Date().toISOString(),
                acertos: estadoAtual.acertos + (acertou ? 1 : 0),
                erros: estadoAtual.erros + (acertou ? 0 : 1),
              },
            },
          };
        });
      },

      getFlashcardState: (flashcardId) => {
        const { flashcardStates } = get();
        return flashcardStates[flashcardId] || {
          caixa: 1,
          proximaRevisao: null,
          ultimaRevisao: null,
          acertos: 0,
          erros: 0,
        };
      },

      getFlashcardsPendentes: (flashcards) => {
        const { flashcardStates } = get();

        return flashcards.filter((fc) => {
          const estado = flashcardStates[fc.id];
          if (!estado) return true; // Nunca revisado
          return isRevisaoDevida(estado.proximaRevisao);
        });
      },

      resetarFlashcard: (flashcardId) => {
        set((state) => {
          const novoState = { ...state.flashcardStates };
          delete novoState[flashcardId];
          return { flashcardStates: novoState };
        });
      },

      resetarTodos: () => {
        set({ flashcardStates: {} });
      },

      getEstatisticasLeitner: () => {
        const { flashcardStates } = get();
        const estados = Object.values(flashcardStates);
        const hoje = new Date().toISOString().split('T')[0];

        return {
          caixa1: estados.filter((e) => e.caixa === 1).length,
          caixa2: estados.filter((e) => e.caixa === 2).length,
          caixa3: estados.filter((e) => e.caixa === 3).length,
          caixa4: estados.filter((e) => e.caixa === 4).length,
          caixa5: estados.filter((e) => e.caixa === 5).length,
          pendentesHoje: estados.filter(
            (e) => e.proximaRevisao && e.proximaRevisao <= hoje
          ).length,
        };
      },
    }),
    {
      name: 'flashcard-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
