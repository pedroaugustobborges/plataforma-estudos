import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Alert,
} from '@mui/material';
import {
  CheckCircle,
  Warning,
  Lightbulb,
  Psychology,
  MenuBook,
} from '@mui/icons-material';
import type { ConteudoTopico } from '../../types';
import { FlashcardViewer } from './FlashcardViewer';
import { QuestionViewer } from './QuestionViewer';

interface ContentViewerProps {
  conteudo: ConteudoTopico;
  topicoId: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`content-tabpanel-${index}`}
      aria-labelledby={`content-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export const ContentViewer = ({
  conteudo,
  topicoId,
}: ContentViewerProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Paper sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minHeight: 64,
            },
          }}
        >
          <Tab icon={<MenuBook />} label="Resumo" iconPosition="start" />
          <Tab icon={<CheckCircle />} label="Pontos-Chave" iconPosition="start" />
          <Tab icon={<Warning />} label="Armadilhas" iconPosition="start" />
          <Tab icon={<Psychology />} label="Flashcards" iconPosition="start" />
          <Tab icon={<Lightbulb />} label="Questoes" iconPosition="start" />
        </Tabs>
      </Paper>

      {/* Resumo */}
      <TabPanel value={activeTab} index={0}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Resumo
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}
            >
              {conteudo.resumo}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Explicacao Didatica
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}
            >
              {conteudo.explicacao}
            </Typography>
          </CardContent>
        </Card>

        {conteudo.mnemonicos && conteudo.mnemonicos.length > 0 && (
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Lightbulb color="warning" />
                Mnemonicos
              </Typography>
              <List>
                {conteudo.mnemonicos.map((mnemonic, index) => (
                  <ListItem key={index}>
                    <Alert severity="info" sx={{ width: '100%' }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {mnemonic.termo}: {mnemonic.significado}
                      </Typography>
                      <Typography variant="body2">
                        {mnemonic.frase}
                      </Typography>
                    </Alert>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
      </TabPanel>

      {/* Pontos-Chave */}
      <TabPanel value={activeTab} index={1}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Pontos-Chave para Memorizar
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Estes sao os pontos mais importantes que costumam cair em prova.
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {conteudo.pontosChave.map((ponto, index) => (
                <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                    <Chip
                      size="small"
                      label={index + 1}
                      color="primary"
                      sx={{ minWidth: 28 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={ponto}
                    primaryTypographyProps={{
                      sx: { lineHeight: 1.6 },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Armadilhas */}
      <TabPanel value={activeTab} index={2}>
        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            Atencao!
          </Typography>
          <Typography variant="body2">
            Estas sao armadilhas comuns usadas pela banca IADES. Fique atento!
          </Typography>
        </Alert>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="warning.main">
              Armadilhas Frequentes
            </Typography>
            <List>
              {conteudo.armadilhas.map((armadilha, index) => (
                <ListItem key={index} sx={{ alignItems: 'flex-start', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Warning color="warning" />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {armadilha.titulo}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {armadilha.descricao}
                  </Typography>
                  <Alert severity="info" sx={{ width: '100%' }}>
                    <Typography variant="body2">
                      <strong>Dica:</strong> {armadilha.dica}
                    </Typography>
                  </Alert>
                  <Divider sx={{ mt: 2, width: '100%' }} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Flashcards */}
      <TabPanel value={activeTab} index={3}>
        <Typography variant="h6" gutterBottom color="primary">
          Flashcards - Sistema Leitner
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Use os flashcards para memorizacao. O sistema usa repeticao espacada
          para otimizar seu aprendizado.
        </Typography>
        <FlashcardViewer flashcards={conteudo.flashcards} />
      </TabPanel>

      {/* Questoes */}
      <TabPanel value={activeTab} index={4}>
        <Typography variant="h6" gutterBottom color="primary">
          Questoes Estilo IADES
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Pratique com questoes no estilo da banca IADES.
        </Typography>
        <QuestionViewer questoes={conteudo.questoes} topicoId={topicoId} />
      </TabPanel>
    </Box>
  );
};
