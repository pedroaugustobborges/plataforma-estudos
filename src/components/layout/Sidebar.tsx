import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  MenuBook,
  ExpandLess,
  ExpandMore,
  Home,
  Quiz,
  Style,
  BarChart,
  ChevronLeft,
} from '@mui/icons-material';
import { materias } from '../../data';
import { coresMateria } from '../../theme';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  drawerWidth: number;
}

export const Sidebar = ({ open, onClose, drawerWidth }: SidebarProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedMateria, setExpandedMateria] = useState<string | null>(null);

  const handleMateriaClick = (materiaId: string) => {
    if (expandedMateria === materiaId) {
      setExpandedMateria(null);
    } else {
      setExpandedMateria(materiaId);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { label: 'Início', path: '/', icon: <Home /> },
    { label: 'Revisões', path: '/revisoes', icon: <Style /> },
    { label: 'Simulados', path: '/simulados', icon: <Quiz /> },
    { label: 'Estatísticas', path: '/estatisticas', icon: <BarChart /> },
  ];

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="primary">
          SES-GO 2024
        </Typography>
        {isMobile && (
          <IconButton onClick={onClose}>
            <ChevronLeft />
          </IconButton>
        )}
      </Box>

      {/* Menu Principal */}
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => handleNavigate(item.path)}
              selected={isActive(item.path)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'inherit',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 1 }} />

      {/* Matérias */}
      <Typography variant="overline" sx={{ px: 2, color: 'text.secondary' }}>
        Matérias
      </Typography>

      <List sx={{ px: 1, flex: 1, overflow: 'auto' }}>
        {materias.map((materia) => {
          const cor = coresMateria[materia.id] || theme.palette.primary.main;
          const isExpanded = expandedMateria === materia.id;

          return (
            <Box key={materia.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleMateriaClick(materia.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    borderLeft: 3,
                    borderColor: cor,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: cor }}>
                    <MenuBook />
                  </ListItemIcon>
                  <ListItemText
                    primary={materia.nome}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  />
                  {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigate(`/materia/${materia.id}`)}
                      sx={{ pl: 4, borderRadius: 1, mb: 0.5 }}
                    >
                      <ListItemText
                        primary="Visão Geral"
                        primaryTypographyProps={{ fontSize: '0.8rem' }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {materia.topicos.map((topico) => (
                    <ListItem key={topico.id} disablePadding>
                      <ListItemButton
                        onClick={() => handleNavigate(`/topico/${topico.id}`)}
                        selected={location.pathname === `/topico/${topico.id}`}
                        sx={{
                          pl: 4,
                          borderRadius: 1,
                          mb: 0.5,
                          '&.Mui-selected': {
                            bgcolor: `${cor}20`,
                            '&:hover': {
                              bgcolor: `${cor}30`,
                            },
                          },
                        }}
                      >
                        <ListItemText
                          primary={topico.titulo}
                          primaryTypographyProps={{
                            fontSize: '0.8rem',
                            noWrap: true,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="caption" color="text.secondary">
          Fiscal de Saúde Pública
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={onClose}
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: 1,
          borderColor: 'divider',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};
