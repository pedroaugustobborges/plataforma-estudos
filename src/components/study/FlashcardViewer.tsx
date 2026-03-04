import { useState } from 'react';
import {
  Card,
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

      {/* Card Container */}
      <Box
        sx={{
          perspective: '1000px',
          height: 320,
        }}
      >
        <Box
          onClick={handleFlip}
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front */}
          <Card
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
              boxSizing: 'border-box',
            }}
          >
            <Chip
              size="small"
              label={currentFlashcard.dificuldade}
              color={getDifficultyColor(currentFlashcard.dificuldade) as any}
              sx={{ mb: 2 }}
            />
            <Typography variant="h6" sx={{ mb: 3, px: 2 }}>
              {currentFlashcard.frente}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Clique para ver a resposta
            </Typography>
          </Card>

          {/* Back */}
          <Card
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
              boxSizing: 'border-box',
              bgcolor: 'action.hover',
            }}
          >
            <Typography variant="subtitle1" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
              Resposta
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'pre-line',
                px: 2,
                overflow: 'auto',
                maxHeight: '80%',
              }}
            >
              {currentFlashcard.verso}
            </Typography>
          </Card>
        </Box>
      </Box>

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
