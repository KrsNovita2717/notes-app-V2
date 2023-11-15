import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ArchivePage from './pages/ArchivePage';
import AddNewNotePage from './pages/AddNewNotepage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='app-container'>
      <header>
        <h1>
          <Link to='/'>My Notes</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archives' element={<ArchivePage />} />
          <Route path='/notes/new' element={<AddNewNotePage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
          <Route path='/notes/edit/:id' element={<EditPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
