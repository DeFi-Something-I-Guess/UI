
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Store from './store'

import Bar from './Components/Bar.js';
import Footer from './Components/Footer.js';
import GamePage from './Pages/GamePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212529',
    },
    secondary: {
      main: '#6c757d',
    },
    background: {
      default: "#212529"
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Store>
          <div className="App">
            <Bar />
            <Router>
              <Switch>
                <Route path="/">
                  <GamePage />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </div>
        </Store>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
