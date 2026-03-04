import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
  Button,
  LinearProgress,
} from '@mui/material';
import {
  Flip,
  CheckCircle,
  Cancel,
  NavigateNext,
  NavigateBefore,
} from '@mui/icons-material';
import type { Flashcard } from '../../types';
import { useFlashcardStore } from '../../stores/useFlashcardStore';

interface FlashcardViewerProps {
  flashcards: Flashcard[];
}

export const FlashcardViewer = ({ flashcards }: FlashcardViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { responderFlashcard, getFlashcardState } = useFlashcardStore();

  if (flashcards.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography color="text.secondary">
          Nenhum flashcard disponivel.
        </Typography>
      </Box>
    );
  }

  const currentFlashcard = flashcards[currentIndex];
  const cardState = getFlashcardState(currentFlashcard.id);
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (correct: boolean) => {
    responderFlashcard(currentFlashcard.id, correct);
    handleNext();
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facil':
        return 'success';
      case 'medio':
        return 'warning';
      case 'dificil':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Progress */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Flashcard {currentIndex + 1} de {flashcards.length}
          </Typography>
          {cardState && (
            <Chip
              size="small"
              label={`Caixa ${cardState.caixa}`}
              color="primary"
              variant="outlined"
            />
          )}
        </Box>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Card */}
      <Card
        sx={{
          minHeight: 300,
          cursor: 'pointer',
          perspective: '1000px',
          position: 'relative',
        }}
        onClick={handleFlip}
      >
        <Box
          sx={{
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Front */}
          <CardContent
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
            }}
          >
            <Chip
              size="small"
              label={currentFlashcard.dificuldade}
              color={getDifficultyColor(currentFlashcard.dificuldade) as any}
              sx={{ mb: 2 }}
            />
            <Typography variant="h6" sx={{ mb: 3 }}>
              {currentFlashcard.frente}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Clique para ver a resposta
            </Typography>
          </CardContent>

          {/* Back */}
          <CardContent
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
              bgcolor: 'action.hover',
            }}
          >
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              Resposta
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {currentFlashcard.verso}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mt: 3,
        }}
      >
        <IconButton
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          color="primary"
        >
          <NavigateBefore />
        </IconButton>

        <IconButton onClick={handleFlip} color="primary">
          <Flip />
        </IconButton>

        {isFlipped && (
          <>
            <Button
              variant="outlined"
              color="error"
              startIcon={<Cancel />}
              onClick={() => handleResponse(false)}
            >
              Errei
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<CheckCircle />}
              onClick={() => handleResponse(true)}
            >
              Acertei
            </Button>
          </>
        )}

        <IconButton
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          color="primary"
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
};
