import type { Materia } from '../types';
import { linguaPortuguesa } from './content/lingua-portuguesa';
import { realidadeGoias } from './content/realidade-goias';
import { direitoAdministrativo } from './content/direito-administrativo';
import { administracaoPublica } from './content/administracao-publica';
import { raciocinioLogico } from './content/raciocinio-logico';
import { informatica } from './content/informatica';
import { conhecimentosEspecificos } from './content/conhecimentos-especificos';

// Todas as materias do edital
export const materias: Materia[] = [
  linguaPortuguesa,
  realidadeGoias,
  direitoAdministrativo,
  administracaoPublica,
  raciocinioLogico,
  informatica,
  conhecimentosEspecificos,
];

// Mapa de materias por ID para acesso rapido
export const materiasMap: Record<string, Materia> = materias.reduce(
  (acc, materia) => {
    acc[materia.id] = materia;
    return acc;
  },
  {} as Record<string, Materia>
);

// Obter todas as questoes de todas as materias
export const getAllQuestoes = () => {
  return materias.flatMap((materia) =>
    materia.topicos.flatMap((topico) =>
      topico.conteudo.questoes.map((questao) => ({
        ...questao,
        materiaId: materia.id,
        materiaNome: materia.nome,
        topicoId: topico.id,
        topicoTitulo: topico.titulo,
      }))
    )
  );
};

// Obter todos os flashcards de todas as materias
export const getAllFlashcards = () => {
  return materias.flatMap((materia) =>
    materia.topicos.flatMap((topico) =>
      topico.conteudo.flashcards.map((flashcard) => ({
        ...flashcard,
        materiaId: materia.id,
        materiaNome: materia.nome,
        topicoId: topico.id,
        topicoTitulo: topico.titulo,
      }))
    )
  );
};

// Estatisticas gerais do conteudo
export const getContentStats = () => {
  let totalTopicos = 0;
  let totalQuestoes = 0;
  let totalFlashcards = 0;

  materias.forEach((materia) => {
    totalTopicos += materia.topicos.length;
    materia.topicos.forEach((topico) => {
      totalQuestoes += topico.conteudo.questoes.length;
      totalFlashcards += topico.conteudo.flashcards.length;
    });
  });

  return {
    totalMaterias: materias.length,
    totalTopicos,
    totalQuestoes,
    totalFlashcards,
  };
};

// Exportacoes individuais
export {
  linguaPortuguesa,
  realidadeGoias,
  direitoAdministrativo,
  administracaoPublica,
  raciocinioLogico,
  informatica,
  conhecimentosEspecificos,
};
