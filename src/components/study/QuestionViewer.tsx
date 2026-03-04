import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Alert,
  Chip,
  Collapse,
  LinearProgress,
  IconButton,
} from '@mui/material';
import {
  CheckCircle,
  Cancel,
  NavigateNext,
  NavigateBefore,
  Lightbulb,
} from '@mui/icons-material';
import type { Questao } from '../../types';
import { useStudyStore } from '../../stores/useStudyStore';

interface QuestionViewerProps {
  questoes: Questao[];
  topicoId: string;
}

export const QuestionViewer = ({ questoes, topicoId: _topicoId }: QuestionViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { registrarResposta } = useStudyStore();

  if (questoes.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography color="text.secondary">
          Nenhuma questao disponivel.
        </Typography>
      </Box>
    );
  }

  const currentQuestion = questoes[currentIndex];
  const progress = ((currentIndex + 1) / questoes.length) * 100;
  const isCorrect = selectedAnswer === currentQuestion.gabarito;

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!showResult) {
      setSelectedAnswer(event.target.value);
    }
  };

  const handleConfirm = () => {
    if (selectedAnswer) {
      setShowResult(true);
      registrarResposta({
        questaoId: currentQuestion.id,
        respostaSelecionada: selectedAnswer,
        correta: selectedAnswer === currentQuestion.gabarito,
        tempo: 0,
      });
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    if (currentIndex < questoes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facil':
        return 'success';
      case 'Media':
        return 'warning';
      case 'Dificil':
        return 'error';
      default:
        return 'default';
    }
  };

  const getOptionStyle = (optionKey: string) => {
    if (!showResult) {
      return selectedAnswer === optionKey
        ? { bgcolor: 'action.selected', borderRadius: 1 }
        : {};
    }

    if (optionKey === currentQuestion.gabarito) {
      return {
        bgcolor: 'success.light',
        borderRadius: 1,
        '& .MuiFormControlLabel-label': { color: 'success.dark' },
      };
    }

    if (selectedAnswer === optionKey && !isCorrect) {
      return {
        bgcolor: 'error.light',
        borderRadius: 1,
        '& .MuiFormControlLabel-label': { color: 'error.dark' },
      };
    }

    return { opacity: 0.5 };
  };

  return (
    <Box>
      {/* Progress */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Questao {currentIndex + 1} de {questoes.length}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              size="small"
              label={currentQuestion.dificuldade}
              color={getDifficultyColor(currentQuestion.dificuldade) as any}
            />
            {currentQuestion.ano && (
              <Chip
                size="small"
                label={`${currentQuestion.banca} ${currentQuestion.ano}`}
                variant="outlined"
              />
            )}
          </Box>
        </Box>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Question */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
            {currentQuestion.enunciado}
          </Typography>

          <RadioGroup value={selectedAnswer || ''} onChange={handleAnswerSelect}>
            {currentQuestion.alternativas.map((alt) => (
              <FormControlLabel
                key={alt.letra}
                value={alt.letra}
                control={<Radio disabled={showResult} />}
                label={`${alt.letra}) ${alt.texto}`}
                sx={{
                  mb: 1,
                  p: 1,
                  transition: 'all 0.2s',
                  ...getOptionStyle(alt.letra),
                }}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Result */}
      <Collapse in={showResult}>
        <Alert
          severity={isCorrect ? 'success' : 'error'}
          icon={isCorrect ? <CheckCircle /> : <Cancel />}
          sx={{ mb: 2 }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            {isCorrect ? 'Parabens! Voce acertou!' : 'Resposta incorreta'}
          </Typography>
          <Typography variant="body2">
            A resposta correta e: {currentQuestion.gabarito}
          </Typography>
        </Alert>

        <Card sx={{ mb: 2, bgcolor: 'background.paper' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Lightbulb color="warning" />
              <Typography variant="subtitle2" fontWeight="bold">
                Explicacao
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              {currentQuestion.justificativa}
            </Typography>
          </CardContent>
        </Card>
      </Collapse>

      {/* Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <IconButton
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          color="primary"
        >
          <NavigateBefore />
        </IconButton>

        {!showResult ? (
          <Button
            variant="contained"
            onClick={handleConfirm}
            disabled={!selectedAnswer}
          >
            Confirmar Resposta
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentIndex === questoes.length - 1}
            endIcon={<NavigateNext />}
          >
            Proxima Questao
          </Button>
        )}

        <IconButton
          onClick={handleNext}
          disabled={currentIndex === questoes.length - 1}
          color="primary"
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
};
