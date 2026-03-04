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
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Style, PlayArrow } from '@mui/icons-material';
import { useFlashcardStore } from '../stores/useFlashcardStore';
import { getAllFlashcards } from '../data';
import { FlashcardViewer } from '../components/study/FlashcardViewer';

export const Revisoes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const { getFlashcardsPendentes, getEstatisticasLeitner, flashcardStates } = useFlashcardStore();

  const allFlashcards = getAllFlashcards();
  const dueFlashcards = getFlashcardsPendentes(allFlashcards);
  const estatisticas = getEstatisticasLeitner();

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (isReviewing) {
    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            Revisando Flashcards
          </Typography>
          <Button
            variant="outlined"
            onClick={() => setIsReviewing(false)}
          >
            Voltar
          </Button>
        </Box>

        <FlashcardViewer flashcards={dueFlashcards} />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Revisoes - Sistema Leitner
        </Typography>
        <Typography variant="body1" color="text.secondary">
          O sistema de repeticao espacada ajuda voce a memorizar o conteudo de
          forma mais eficiente.
        </Typography>
      </Box>

      {/* Due Alert */}
      {dueFlashcards.length > 0 && (
        <Alert
          severity="warning"
          action={
            <Button
              color="inherit"
              size="small"
              startIcon={<PlayArrow />}
              onClick={() => setIsReviewing(true)}
            >
              Comecar Revisao
            </Button>
          }
          sx={{ mb: 3 }}
        >
          Voce tem <strong>{dueFlashcards.length}</strong> flashcards para
          revisar hoje! A revisao regular e essencial para a memorizacao de
          longo prazo.
        </Alert>
      )}

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Style sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {allFlashcards.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total de Flashcards
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'warning.light' }}>
            <Typography variant="h4" fontWeight="bold" color="warning.dark">
              {dueFlashcards.length}
            </Typography>
            <Typography variant="body2" color="warning.dark">
              Para Revisar Hoje
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'success.light' }}>
            <Typography variant="h4" fontWeight="bold" color="success.dark">
              {estatisticas.caixa5}
            </Typography>
            <Typography variant="body2" color="success.dark">
              Dominados (Caixa 5)
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold">
              {Object.keys(flashcardStates).length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ja Estudados
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Leitner System Explanation */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Como funciona o Sistema Leitner?
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            O sistema usa 5 caixas com intervalos crescentes de revisao:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {[
              { box: 1, interval: '1 dia', color: 'error.main', count: estatisticas.caixa1 },
              { box: 2, interval: '2 dias', color: 'warning.main', count: estatisticas.caixa2 },
              { box: 3, interval: '4 dias', color: 'info.main', count: estatisticas.caixa3 },
              { box: 4, interval: '8 dias', color: 'success.light', count: estatisticas.caixa4 },
              { box: 5, interval: '16 dias', color: 'success.main', count: estatisticas.caixa5 },
            ].map(({ box, interval, color, count }) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={box}>
                <Paper
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    borderTop: 3,
                    borderColor: color,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Caixa {box}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {interval}
                  </Typography>
                  <Chip
                    size="small"
                    label={`${count} cards`}
                    sx={{ mt: 1 }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Pendentes" />
          <Tab label="Todos os Flashcards" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {activeTab === 0 && (
        <Box>
          {dueFlashcards.length === 0 ? (
            <Alert severity="success">
              Parabens! Voce nao tem flashcards para revisar no momento.
              Continue assim!
            </Alert>
          ) : (
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Flashcards para Revisar
                </Typography>
                <List>
                  {dueFlashcards.slice(0, 10).map((flashcard: any) => (
                    <Box key={flashcard.id}>
                      <ListItem>
                        <ListItemText
                          primary={flashcard.frente}
                          secondary={`${flashcard.materiaNome} - ${flashcard.topicoTitulo}`}
                        />
                        <ListItemSecondaryAction>
                          <Chip
                            size="small"
                            label={flashcard.dificuldade}
                            color={
                              flashcard.dificuldade === 'facil'
                                ? 'success'
                                : flashcard.dificuldade === 'medio'
                                ? 'warning'
                                : 'error'
                            }
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </Box>
                  ))}
                </List>
                {dueFlashcards.length > 10 && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    E mais {dueFlashcards.length - 10} flashcards...
                  </Typography>
                )}
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<PlayArrow />}
                  onClick={() => setIsReviewing(true)}
                  sx={{ mt: 2 }}
                >
                  Comecar Revisao
                </Button>
              </CardContent>
            </Card>
          )}
        </Box>
      )}

      {activeTab === 1 && (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Todos os Flashcards ({allFlashcards.length})
            </Typography>
            <List>
              {allFlashcards.slice(0, 20).map((flashcard: any) => (
                <Box key={flashcard.id}>
                  <ListItem>
                    <ListItemText
                      primary={flashcard.frente}
                      secondary={`${flashcard.materiaNome} - ${flashcard.topicoTitulo}`}
                    />
                    <ListItemSecondaryAction>
                      <Chip
                        size="small"
                        label={flashcard.dificuldade}
                        color={
                          flashcard.dificuldade === 'facil'
                            ? 'success'
                            : flashcard.dificuldade === 'medio'
                            ? 'warning'
                            : 'error'
                        }
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </Box>
              ))}
            </List>
            {allFlashcards.length > 20 && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Mostrando 20 de {allFlashcards.length} flashcards.
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};
