import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import './App.css';
import Example from './pages/Example';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme, { globalStyle } from './theme';

function App() {
  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <Example />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
