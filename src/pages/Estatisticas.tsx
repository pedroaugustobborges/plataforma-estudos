import {
  Box,
  Typography,
  Card,
  CardContent,
  Paper,
  LinearProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  CheckCircle,
  Style,
  Quiz,
  MenuBook,
} from '@mui/icons-material';
import { materias, getContentStats, getAllQuestoes } from '../data';
import { useStudyStore } from '../stores/useStudyStore';
import { useFlashcardStore } from '../stores/useFlashcardStore';
import { coresMateria } from '../theme';

export const Estatisticas = () => {
  const { progressos, getEstatisticasGerais, respostas } = useStudyStore();
  const { flashcardStates, getEstatisticasLeitner } = useFlashcardStore();

  const contentStats = getContentStats();
  const statistics = getEstatisticasGerais();
  const allQuestoes = getAllQuestoes();
  const estatisticasLeitner = getEstatisticasLeitner();

  const calculateMateriaStats = (materiaId: string) => {
    const materia = materias.find((m) => m.id === materiaId);
    if (!materia) return null;

    const materiaQuestoes = allQuestoes.filter((q) => q.materiaId === materiaId);
    const respondidas = respostas.filter((r) =>
      materiaQuestoes.some((q) => q.id === r.questaoId)
    );
    const corretas = respondidas.filter((r) => r.correta);

    let totalProgress = 0;
    materia.topicos.forEach((topico) => {
      const key = `${materiaId}:${topico.id}`;
      const progress = progressos[key];
      if (progress) {
        const topicoProgress =
          (progress.lido ? 25 : 0) +
          (progress.revisado ? 25 : 0) +
          (progress.porcentagemQuestoes > 0 ? 25 : 0) +
          (progress.porcentagemQuestoes >= 50 ? 25 : 0);
        totalProgress += topicoProgress;
      }
    });

    return {
      totalQuestoes: materiaQuestoes.length,
      respondidas: respondidas.length,
      corretas: corretas.length,
      taxaAcerto:
        respondidas.length > 0
          ? Math.round((corretas.length / respondidas.length) * 100)
          : 0,
      progresso:
        materia.topicos.length > 0
          ? totalProgress / materia.topicos.length
          : 0,
    };
  };

  const totalFlashcardsEstudados = Object.keys(flashcardStates).length;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Estatisticas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Acompanhe seu progresso e identifique pontos de melhoria.
        </Typography>
      </Box>

      {/* Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <Quiz sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h3" fontWeight="bold">
              {statistics.totalQuestoes}
            </Typography>
            <Typography variant="body2">Questoes Respondidas</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              bgcolor: 'success.main',
              color: 'success.contrastText',
            }}
          >
            <CheckCircle sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h3" fontWeight="bold">
              {statistics.porcentagemAcerto}%
            </Typography>
            <Typography variant="body2">Taxa de Acerto</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              bgcolor: 'warning.main',
              color: 'warning.contrastText',
            }}
          >
            <Style sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h3" fontWeight="bold">
              {totalFlashcardsEstudados}
            </Typography>
            <Typography variant="body2">Flashcards Estudados</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              bgcolor: 'info.main',
              color: 'info.contrastText',
            }}
          >
            <MenuBook sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h3" fontWeight="bold">
              {contentStats.totalTopicos}
            </Typography>
            <Typography variant="body2">Topicos Disponiveis</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Flashcard Distribution */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Distribuicao de Flashcards (Leitner)
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {[
              { box: 1, count: estatisticasLeitner.caixa1, color: 'error.main' },
              { box: 2, count: estatisticasLeitner.caixa2, color: 'warning.main' },
              { box: 3, count: estatisticasLeitner.caixa3, color: 'info.main' },
              { box: 4, count: estatisticasLeitner.caixa4, color: 'success.light' },
              { box: 5, count: estatisticasLeitner.caixa5, color: 'success.main' },
            ].map(({ box, count, color }) => {
              const percentage =
                totalFlashcardsEstudados > 0
                  ? (count / totalFlashcardsEstudados) * 100
                  : 0;

              return (
                <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={box}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      borderTop: 3,
                      borderColor: color,
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Caixa {box}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={percentage}
                      sx={{
                        mt: 1,
                        height: 6,
                        borderRadius: 3,
                        '& .MuiLinearProgress-bar': {
                          bgcolor: color,
                        },
                      }}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>

      {/* Materia Stats */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Desempenho por Materia
          </Typography>
          <List>
            {materias.map((materia) => {
              const stats = calculateMateriaStats(materia.id);
              const cor = coresMateria[materia.id] || '#1976d2';

              if (!stats) return null;

              return (
                <Box key={materia.id}>
                  <ListItem sx={{ py: 2 }}>
                    <Box
                      sx={{
                        width: 4,
                        height: 60,
                        bgcolor: cor,
                        borderRadius: 2,
                        mr: 2,
                      }}
                    />
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" fontWeight="bold">
                          {materia.nome}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 2,
                              flexWrap: 'wrap',
                              mb: 1,
                            }}
                          >
                            <Chip
                              size="small"
                              icon={<Quiz fontSize="small" />}
                              label={`${stats.respondidas}/${stats.totalQuestoes} questoes`}
                              variant="outlined"
                            />
                            <Chip
                              size="small"
                              icon={<CheckCircle fontSize="small" />}
                              label={`${stats.taxaAcerto}% acerto`}
                              color={
                                stats.taxaAcerto >= 70
                                  ? 'success'
                                  : stats.taxaAcerto >= 50
                                  ? 'warning'
                                  : 'error'
                              }
                            />
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Typography variant="caption" color="text.secondary">
                              Progresso:
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={stats.progresso}
                              sx={{
                                flex: 1,
                                height: 6,
                                borderRadius: 3,
                                bgcolor: `${cor}20`,
                                '& .MuiLinearProgress-bar': {
                                  bgcolor: cor,
                                },
                              }}
                            />
                            <Typography variant="caption" fontWeight="bold">
                              {Math.round(stats.progresso)}%
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Divider />
                </Box>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
