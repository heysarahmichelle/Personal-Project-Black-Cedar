import React, {Component} from 'react';
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import HomePage from './components/Home Page/HomePage';
import Shop from './components/Shop/Shop';



class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return (
      <HashRouter>
      <div>
        <Shop />

        <HomePage />
        {routes}
      </div>
    </HashRouter>
    );
  }
}

export default App;
