import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  Chip,
  Divider,
  LinearProgress,
} from '@mui/material';
import { Home, NavigateNext, MenuBook } from '@mui/icons-material';
import { materias } from '../data';
import { useStudyStore } from '../stores/useStudyStore';
import { ContentViewer } from '../components/study/ContentViewer';
import { coresMateria } from '../theme';

export const Topico = () => {
  const { topicoId } = useParams<{ topicoId: string }>();
  const navigate = useNavigate();
  const { progressos, marcarComoLido } = useStudyStore();

  // Find topico and materia
  let topico = null;
  let materia = null;

  for (const m of materias) {
    const found = m.topicos.find((t) => t.id === topicoId);
    if (found) {
      topico = found;
      materia = m;
      break;
    }
  }

  useEffect(() => {
    if (topicoId && materia) {
      // Mark as read when user views the topic
      marcarComoLido(materia.id, topicoId);
    }
  }, [topicoId, materia, marcarComoLido]);

  if (!topico || !materia) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h5" color="error">
          Topico nao encontrado
        </Typography>
      </Box>
    );
  }

  const cor = coresMateria[materia.id] || '#1976d2';
  const key = `${materia.id}:${topicoId}`;
  const progress = progressos[key];

  const calculateProgress = () => {
    if (!progress) return 0;
    return (
      (progress.lido ? 25 : 0) +
      (progress.revisado ? 25 : 0) +
      (progress.porcentagemQuestoes > 0 ? 25 : 0) +
      (progress.porcentagemQuestoes >= 50 ? 25 : 0)
    );
  };

  return (
    <Box>
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        sx={{ mb: 3 }}
      >
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            textDecoration: 'none',
          }}
        >
          <Home fontSize="small" />
          Inicio
        </Link>
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate(`/materia/${materia.id}`)}
          sx={{ textDecoration: 'none' }}
        >
          {materia.nome}
        </Link>
        <Typography color="text.primary">{topico.titulo}</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderTop: 4,
          borderColor: cor,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
          }}
        >
          <MenuBook sx={{ color: cor, fontSize: 32 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" color="text.secondary">
              {materia.nome}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {topico.titulo}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              size="small"
              label={`${topico.conteudo.pontosChave.length} pontos-chave`}
              sx={{ bgcolor: `${cor}20`, color: cor }}
            />
            <Chip
              size="small"
              label={`${topico.conteudo.flashcards.length} flashcards`}
              variant="outlined"
            />
            <Chip
              size="small"
              label={`${topico.conteudo.questoes.length} questoes`}
              variant="outlined"
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              minWidth: 200,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Progresso:
            </Typography>
            <LinearProgress
              variant="determinate"
              value={calculateProgress()}
              sx={{
                flex: 1,
                height: 8,
                borderRadius: 4,
                bgcolor: `${cor}20`,
                '& .MuiLinearProgress-bar': {
                  bgcolor: cor,
                },
              }}
            />
            <Typography variant="body2" fontWeight="bold">
              {calculateProgress()}%
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Content */}
      <ContentViewer conteudo={topico.conteudo} topicoId={topico.id} />
    </Box>
  );
};
