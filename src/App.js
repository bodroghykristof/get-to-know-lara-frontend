import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/users/Register';
import Login from './components/users/Login';
import MailBox from './components/mails/Mailbox';
import Compose from './components/mails/Compose';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import mainTheme from './components/general/MainTheme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <Route path='/' exact component={Main}></Route>
        <Route path='/registration' exact component={Register}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route
          path='/mail/inbox'
          exact
          render={() => <MailBox type='to' />}
        ></Route>
        <Route
          path='/mail/sent'
          exact
          render={() => <MailBox type='from' />}
        ></Route>
        <Route path='/mail/compose' exact component={Compose}></Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;
