

import React, {Component} from 'react'

import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'





export class App extends Component {

  state={
    progress:0
  
  }
  setProgress=(progress)=> {
    this.setState({progress:progress})
  }

render(){


  return (
    <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      
      />
        <Navbar />

        {/* <News setProgress ={this.setProgress} country="in" category="general" /> */}
        <Switch>
          <Route exact path="/" ><News setProgress ={this.setProgress}  key="general" country="in" category="general" /></Route>
          <Route exact path="/business" ><News setProgress ={this.setProgress} key="business"country="in" category="business" /></Route>
          <Route exact path="/science" ><News setProgress ={this.setProgress} key="science" country="in" category="science" /></Route>
          <Route exact path="/general" ><News setProgress ={this.setProgress} key="general" country="in" category="general" /></Route>
          <Route exact path="/entertainment" ><News setProgress ={this.setProgress} key="entertainment" country="in" category="entertainment" /></Route>
          <Route exact path="/sports"><News setProgress ={this.setProgress} key="sports" country="in" category="sports" /></Route>
          <Route exact path="/health" ><News setProgress ={this.setProgress} key="health" country="in" category="health" /></Route>

        </Switch>





      </Router>
      <Footer/>

    </div>
  )
}

}

export default App








