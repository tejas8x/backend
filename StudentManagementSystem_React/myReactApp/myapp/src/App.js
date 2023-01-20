import Header from './Components/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import List from './Components/List';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Router>
        <Switch>
          <Route path="/" exact component={List}></Route>
        
        </Switch>
     </Router>
    </div>
  );
}

export default App;
