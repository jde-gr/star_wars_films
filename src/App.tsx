import { Routes, Route, Navigate } from 'react-router-dom';
import FilmDetails from './pages/FilmDetails/FilmDetails';
import NotFound from './pages/NotFound/NotFound';
import SearchFilmsForm from './pages/SearchFilmsForm/SearchFilmsForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/search' />} />
      <Route path='/search' element={<SearchFilmsForm />} />
      <Route path='/search/:terms' element={<SearchFilmsForm />} />
      <Route path='/film/details/' element={<FilmDetails />} />
      <Route path='/film/details/:film' element={<FilmDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
