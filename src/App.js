import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register/Register';
import { ThemeProvider } from 'styled-components';
import mainTheme from './components/general/MainTheme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <Route path='/registration' exact component={Register}></Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;
