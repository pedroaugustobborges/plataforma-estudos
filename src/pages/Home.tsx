import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  LinearProgress,
  Chip,
  Paper,
  Button,
  Alert,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  MenuBook,
  Quiz,
  Style,
  TrendingUp,
} from '@mui/icons-material';
import { materias, getContentStats } from '../data';
import { useStudyStore } from '../stores/useStudyStore';
import { useFlashcardStore } from '../stores/useFlashcardStore';
import { coresMateria } from '../theme';
import { getAllFlashcards } from '../data';

export const Home = () => {
  const navigate = useNavigate();
  const { progressos, getEstatisticasGerais } = useStudyStore();
  const { getFlashcardsPendentes } = useFlashcardStore();

  const stats = getContentStats();
  const allFlashcards = getAllFlashcards();
  const dueFlashcards = getFlashcardsPendentes(allFlashcards);
  const statistics = getEstatisticasGerais();

  const calculateMateriaProgress = (materiaId: string) => {
    const materia = materias.find((m) => m.id === materiaId);
    if (!materia) return 0;

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

    return materia.topicos.length > 0
      ? totalProgress / materia.topicos.length
      : 0;
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Bem-vindo de volta!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Continue seus estudos para o concurso de Fiscal de Saude Publica - SES-GO
        </Typography>
      </Box>

      {/* Alerts */}
      {dueFlashcards.length > 0 && (
        <Alert
          severity="info"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => navigate('/revisoes')}
            >
              Revisar Agora
            </Button>
          }
          sx={{ mb: 3 }}
        >
          Voce tem <strong>{dueFlashcards.length}</strong> flashcards para
          revisar hoje!
        </Alert>
      )}

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <MenuBook sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalMaterias}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Materias
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalTopicos}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Topicos
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Style sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalFlashcards}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Flashcards
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Quiz sx={{ fontSize: 40, color: 'error.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalQuestoes}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Questoes
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Performance Stats */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Seu Desempenho
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary.main" fontWeight="bold">
                {statistics.totalQuestoes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Questoes Respondidas
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="success.main" fontWeight="bold">
                {statistics.porcentagemAcerto}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Taxa de Acerto
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="warning.main" fontWeight="bold">
                {statistics.acertos}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Acertos
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Materias */}
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Materias do Edital
      </Typography>
      <Grid container spacing={3}>
        {materias.map((materia) => {
          const progress = calculateMateriaProgress(materia.id);
          const cor = coresMateria[materia.id] || '#1976d2';

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={materia.id}>
              <Card
                sx={{
                  height: '100%',
                  borderTop: 4,
                  borderColor: cor,
                }}
              >
                <CardActionArea
                  onClick={() => navigate(`/materia/${materia.id}`)}
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {materia.nome}
                      </Typography>
                      <Chip
                        size="small"
                        label={`${materia.topicos.length} topicos`}
                        sx={{ bgcolor: `${cor}20`, color: cor }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {materia.descricao}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
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
                      <Typography variant="caption" color="text.secondary">
                        {Math.round(progress)}%
                      </Typography>
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
