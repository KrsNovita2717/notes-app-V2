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
import RegisterPage from './pages/RegisterPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    };
  }

  render() {
    if (this.state.authedUser === null) {
      return (
        <div className='app-container'>
          <header>
            <h1>
              <Link to='/'>Catatanku</Link>
            </h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<p>Halaman Login</p>} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div className='app-container'>
        <header>
          <h1>
            <Link to='/'>Catatanku</Link>
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
}

export default App;
