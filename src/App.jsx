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
import LoginPage from './pages/Loginpage';
import { getUserLogged, putAccessToken } from './utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      }
    })
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      }
    })
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    });

    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

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
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess}/>} />
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
          <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
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
