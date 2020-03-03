import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container} from 'react-bootstrap'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage } from "./Pages/LandingPage"
import { FlightsMapPage } from "./Pages/FlightsMapPage"
import { FilterResultsPage } from "./Pages/FilterResultsPage"

const routes = [
  { path: '/', name: 'landingpage', Component: LandingPage },
  { path: '/landingpage', name: 'landingpage', Component: LandingPage },
  { path: '/FlightsMapPage', name: 'FlightsMapPage', Component: FlightsMapPage },
  { path: '/FilterResultsPage', name: 'FilterResultsPage', Component: FilterResultsPage }
]

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Container className="container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Container>
        </>
      </Router>
    );
  }

}

export default App;
