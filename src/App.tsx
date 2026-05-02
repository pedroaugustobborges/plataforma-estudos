import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  Home,
  Materia,
  Topico,
  Revisoes,
  Simulados,
  Discursivas,
  Estatisticas,
  GabaritoDiscursivo,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="materia/:materiaId" element={<Materia />} />
          <Route path="topico/:topicoId" element={<Topico />} />
          <Route path="revisoes" element={<Revisoes />} />
          <Route path="simulados" element={<Simulados />} />
          <Route path="discursivas" element={<Discursivas />} />
          <Route path="gabarito-discursivo" element={<GabaritoDiscursivo />} />
          <Route path="estatisticas" element={<Estatisticas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
