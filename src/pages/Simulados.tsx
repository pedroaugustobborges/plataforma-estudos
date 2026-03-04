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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Quiz, PlayArrow, Settings } from '@mui/icons-material';
import { materias, getAllQuestoes } from '../data';
import { QuestionViewer } from '../components/study/QuestionViewer';
import { coresMateria } from '../theme';

export const Simulados = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedMaterias, setSelectedMaterias] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState<string>('todas');
  const [simulationQuestions, setSimulationQuestions] = useState<any[]>([]);

  const allQuestoes = getAllQuestoes();

  const handleMateriaToggle = (materiaId: string) => {
    setSelectedMaterias((prev) =>
      prev.includes(materiaId)
        ? prev.filter((id) => id !== materiaId)
        : [...prev, materiaId]
    );
  };

  const handleSelectAll = () => {
    if (selectedMaterias.length === materias.length) {
      setSelectedMaterias([]);
    } else {
      setSelectedMaterias(materias.map((m) => m.id));
    }
  };

  const startSimulation = () => {
    let filteredQuestions = allQuestoes;

    // Filter by materia
    if (selectedMaterias.length > 0) {
      filteredQuestions = filteredQuestions.filter((q) =>
        selectedMaterias.includes(q.materiaId)
      );
    }

    // Filter by difficulty
    if (difficulty !== 'todas') {
      filteredQuestions = filteredQuestions.filter(
        (q) => q.dificuldade === difficulty
      );
    }

    // Shuffle and take required count
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setSimulationQuestions(selected);
    setIsSimulating(true);
  };

  if (isSimulating) {
    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            Simulado em Andamento
          </Typography>
          <Button variant="outlined" onClick={() => setIsSimulating(false)}>
            Encerrar Simulado
          </Button>
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
          Simulado com {simulationQuestions.length} questoes de{' '}
          {selectedMaterias.length > 0
            ? selectedMaterias.length
            : materias.length}{' '}
          materias.
        </Alert>

        <QuestionViewer
          questoes={simulationQuestions}
          topicoId="simulado"
        />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Simulados
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monte seu simulado personalizado com questoes de todas as materias no
          estilo IADES.
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Quiz sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {allQuestoes.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Questoes Disponiveis
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="primary.main">
              {materias.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Materias
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="success.main">
              IADES
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Estilo da Banca
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Configuration */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <Settings color="primary" />
            <Typography variant="h6">Configurar Simulado</Typography>
          </Box>

          {/* Materias */}
          <Typography variant="subtitle2" gutterBottom>
            Selecionar Materias
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Button
              variant="text"
              size="small"
              onClick={handleSelectAll}
              sx={{ mb: 1 }}
            >
              {selectedMaterias.length === materias.length
                ? 'Desmarcar Todas'
                : 'Selecionar Todas'}
            </Button>
            <Grid container spacing={1}>
              {materias.map((materia) => {
                const cor = coresMateria[materia.id] || '#1976d2';
                const isSelected = selectedMaterias.includes(materia.id);

                return (
                  <Grid key={materia.id}>
                    <Chip
                      label={materia.nome}
                      onClick={() => handleMateriaToggle(materia.id)}
                      sx={{
                        bgcolor: isSelected ? cor : 'transparent',
                        color: isSelected ? 'white' : 'text.primary',
                        border: 1,
                        borderColor: cor,
                        '&:hover': {
                          bgcolor: isSelected ? cor : `${cor}20`,
                        },
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={4}>
            {/* Numero de questoes */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="subtitle2" gutterBottom>
                Numero de Questoes: {questionCount}
              </Typography>
              <Slider
                value={questionCount}
                onChange={(_, value) => setQuestionCount(value as number)}
                min={5}
                max={50}
                step={5}
                marks={[
                  { value: 5, label: '5' },
                  { value: 20, label: '20' },
                  { value: 35, label: '35' },
                  { value: 50, label: '50' },
                ]}
                valueLabelDisplay="auto"
              />
            </Grid>

            {/* Dificuldade */}
            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Dificuldade</InputLabel>
                <Select
                  value={difficulty}
                  label="Dificuldade"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <MenuItem value="todas">Todas</MenuItem>
                  <MenuItem value="Facil">Facil</MenuItem>
                  <MenuItem value="Media">Media</MenuItem>
                  <MenuItem value="Dificil">Dificil</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Available questions info */}
          <Alert severity="info" sx={{ mb: 3 }}>
            {(() => {
              let available = allQuestoes;
              if (selectedMaterias.length > 0) {
                available = available.filter((q) =>
                  selectedMaterias.includes(q.materiaId)
                );
              }
              if (difficulty !== 'todas') {
                available = available.filter((q) => q.dificuldade === difficulty);
              }
              return `${available.length} questoes disponiveis com os filtros selecionados.`;
            })()}
          </Alert>

          <Button
            variant="contained"
            size="large"
            fullWidth
            startIcon={<PlayArrow />}
            onClick={startSimulation}
            disabled={
              allQuestoes.filter((q) => {
                let valid = true;
                if (selectedMaterias.length > 0) {
                  valid = valid && selectedMaterias.includes(q.materiaId);
                }
                if (difficulty !== 'todas') {
                  valid = valid && q.dificuldade === difficulty;
                }
                return valid;
              }).length === 0
            }
          >
            Iniciar Simulado
          </Button>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Dicas para o Simulado
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Alert severity="success" icon={false}>
                <Typography variant="subtitle2">Ambiente</Typography>
                <Typography variant="body2">
                  Escolha um local silencioso e livre de distracoes.
                </Typography>
              </Alert>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Alert severity="warning" icon={false}>
                <Typography variant="subtitle2">Tempo</Typography>
                <Typography variant="body2">
                  Reserve aproximadamente 3 minutos por questao.
                </Typography>
              </Alert>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Alert severity="info" icon={false}>
                <Typography variant="subtitle2">Revisao</Typography>
                <Typography variant="body2">
                  Analise as questoes erradas para identificar pontos fracos.
                </Typography>
              </Alert>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
