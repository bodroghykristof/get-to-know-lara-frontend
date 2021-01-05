import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register/Register';

function App() {
  return (
    <Router>
      <Route path='/registration' exact component={Register}></Route>
    </Router>
  );
}

export default App;
