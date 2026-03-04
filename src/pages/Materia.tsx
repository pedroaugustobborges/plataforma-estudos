import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Breadcrumbs,
  Link,
  Chip,
  LinearProgress,
  Paper,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  Home,
  NavigateNext,
  CheckCircle,
  RadioButtonUnchecked,
} from '@mui/icons-material';
import { materiasMap } from '../data';
import { useStudyStore } from '../stores/useStudyStore';
import { coresMateria } from '../theme';

export const Materia = () => {
  const { materiaId } = useParams<{ materiaId: string }>();
  const navigate = useNavigate();
  const { progressos } = useStudyStore();

  const materia = materiaId ? materiasMap[materiaId] : null;

  if (!materia) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h5" color="error">
          Materia nao encontrada
        </Typography>
      </Box>
    );
  }

  const cor = coresMateria[materia.id] || '#1976d2';

  const calculateTopicoProgress = (topicoId: string) => {
    const key = `${materia.id}:${topicoId}`;
    const progress = progressos[key];
    if (!progress) return 0;

    return (
      (progress.lido ? 25 : 0) +
      (progress.revisado ? 25 : 0) +
      (progress.porcentagemQuestoes > 0 ? 25 : 0) +
      (progress.porcentagemQuestoes >= 50 ? 25 : 0)
    );
  };

  const totalProgress =
    materia.topicos.reduce((acc, topico) => {
      return acc + calculateTopicoProgress(topico.id);
    }, 0) / materia.topicos.length;

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
        <Typography color="text.primary">{materia.nome}</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderTop: 4,
          borderColor: cor,
          bgcolor: `${cor}08`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {materia.nome}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {materia.descricao}
            </Typography>
          </Box>
          <Chip
            label={`${materia.topicos.length} topicos`}
            sx={{ bgcolor: cor, color: 'white' }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Progresso Geral:
          </Typography>
          <LinearProgress
            variant="determinate"
            value={totalProgress}
            sx={{
              flex: 1,
              height: 10,
              borderRadius: 5,
              bgcolor: `${cor}20`,
              '& .MuiLinearProgress-bar': {
                bgcolor: cor,
              },
            }}
          />
          <Typography variant="body2" fontWeight="bold">
            {Math.round(totalProgress)}%
          </Typography>
        </Box>
      </Paper>

      {/* Topicos */}
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Topicos
      </Typography>

      <Grid container spacing={3}>
        {materia.topicos.map((topico, index) => {
          const progress = calculateTopicoProgress(topico.id);
          const isComplete = progress === 100;

          return (
            <Grid size={{ xs: 12 }} key={topico.id}>
              <Card
                sx={{
                  borderLeft: 4,
                  borderColor: isComplete ? 'success.main' : cor,
                }}
              >
                <CardActionArea
                  onClick={() => navigate(`/topico/${topico.id}`)}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Chip
                          label={index + 1}
                          size="small"
                          sx={{
                            bgcolor: isComplete ? 'success.main' : cor,
                            color: 'white',
                            minWidth: 32,
                          }}
                        />
                        <Box>
                          <Typography variant="h6">{topico.titulo}</Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 2,
                              mt: 1,
                            }}
                          >
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
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box sx={{ width: 100 }}>
                          <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              bgcolor: isComplete ? 'success.light' : `${cor}20`,
                              '& .MuiLinearProgress-bar': {
                                bgcolor: isComplete ? 'success.main' : cor,
                              },
                            }}
                          />
                        </Box>
                        {isComplete ? (
                          <CheckCircle color="success" />
                        ) : (
                          <RadioButtonUnchecked color="action" />
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
