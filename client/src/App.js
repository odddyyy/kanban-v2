import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//pages
import AuthPage from './pages/AuthPage'
import Board from './pages/Board'

function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      children: <AuthPage />
    },
    {
      path: '/board',
      children: <Board />
    }
  ]
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((i, idx) => (
            <Route key={idx} {...i} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
