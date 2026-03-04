import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  Menu,
  Search,
  DarkMode,
  LightMode,
  Notifications,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useStudyStore } from '../../stores/useStudyStore';
import { useFlashcardStore } from '../../stores/useFlashcardStore';
import { getAllFlashcards } from '../../data';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

interface HeaderProps {
  onMenuClick: () => void;
  drawerWidth: number;
  sidebarOpen: boolean;
}

export const Header = ({ onMenuClick, drawerWidth, sidebarOpen }: HeaderProps) => {
  const { darkMode, toggleDarkMode } = useStudyStore();
  const { getFlashcardsPendentes } = useFlashcardStore();

  const allFlashcards = getAllFlashcards();
  const dueCount = getFlashcardsPendentes(allFlashcards).length;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%' },
        ml: { md: sidebarOpen ? `${drawerWidth}px` : 0 },
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Plataforma de Estudos
        </Typography>

        <SearchWrapper>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar conteudo..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchWrapper>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Flashcards pendentes">
            <IconButton color="inherit">
              <Badge badgeContent={dueCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title={darkMode ? 'Modo claro' : 'Modo escuro'}>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
