import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css'
import Menu from './Component/Menu/Menu';
import StatusForm from './Component/StatusForm/StatusForm';
import StatusList from './Component/StatusList/StatusList';
import StatusFormEdit from './Component/StatusForm/StatusFormEdit';

import routes from './router';
    class App extends Component {
      constructor(props) {
        super(props);
        this.state={ 
          tasks: []
        }
      }
      render() {  
        return (
      <Router>
        <div className="container">
          <Menu />
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <Switch>
                <Route exact path="/addstatus"  component={({history})=>  <StatusForm history={history} />}>  
                </Route>
              </Switch> 
               <Switch>
                <Route exact path="/tasks/:id/edit"  component={({history,match})=>  <StatusFormEdit history={history} match={match} />}>   
                </Route>
              </Switch> 
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <Switch>
                    <Route path="/managerstatus" component={({tasks})=>  <StatusList tasks={tasks} />}>
                    </Route>
                  </Switch> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;