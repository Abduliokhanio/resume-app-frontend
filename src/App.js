import './App.css';
import {RightBlock} from './component/rightBlock'
import {Navigation} from './component/nav'
import Feed from './component/feed';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
      <Navigation />
      
      <div class = "mainCard">
        <Card class="shadow p-3 mb-5 bg-white rounded">
          <CardDeck>
              <Feed />
              <RightBlock />
          </CardDeck>
        </Card>
      </div>
     
    </div>
  );
}

export default App;
