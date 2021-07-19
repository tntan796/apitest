import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Menu from './Component/Menu/Menu';
import StatusForm from './Component/StatusForm/StatusForm';
import StatusList from './Component/StatusList/StatusList';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import routes from './router';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks: []
    }
  }
  
  render() {  
    var tasks=this.state;
   
    return (
      <Router>
        <div className="container">
          <Menu />
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {this.showContentMenu(routes)}
              {/* <Switch>
                <Route exact path="/addstatus"  >
                  <StatusForm history={history} />
                </Route>
              </Switch> */}
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* <Switch>
                    <Route path="/managerstatus">
                      <StatusList tasks={tasks} />
                    </Route>
                  </Switch> */}
                   {this.showContentMenu(routes)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu=(routes =>{
     var result=null;
     return <Switch> {result}</Switch>
  });
}

export default App;