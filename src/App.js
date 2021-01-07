import './App.css';
import {RightBlock} from './component/rightBlock'
import {Navigation} from './component/nav'
import Feed from './component/feed';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import First_SL from './state-less/First_SL'
import First_SF from './state-full/First_SF'
import Props from './state-full/Props'

//pgs
import {Formpg} from './component/formpg';
import {About} from './component/about';
import Digimon from './component/digimon';
import DigiDetail from './component/digiDetail';

//react-router-dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
          <Navigation />
          <Switch>
              <Route exact path = "/">
                  <div class = "mainCard">
                    <Card class="shadow p-3 mb-5 bg-white rounded">
                      <CardDeck>
                          <Feed />
                          <RightBlock />
                      </CardDeck>
                    </Card> 
                  </div>
              </Route>
            <Route path="/about" component={About}/>
            <Route path="/new" component={Formpg}/>
            <Route exact path="/digimon" component={Digimon}/>
            <Route path="/digimon/:id" component={DigiDetail}/>
            <Route path="/test_sl" component={First_SL}/>
            <Route path="/test_sf" component={First_SF}/>
            <Route path="/props" component={Props}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
