import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Announcement from './components/Announcement/Announcement';


class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return (
      <div className="App">
        <Announcement />
        <Header />


     </div>
    );
  }
}

export default App;
