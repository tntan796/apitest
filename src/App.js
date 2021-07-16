import React, { Component } from 'react';
import './App.css'
import Menu from './Component/Menu/Menu';
import StatusForm from './Component/StatusForm/StatusForm';
import StatusList from './Component/StatusList/StatusList';
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
      <div className="container">
        <Menu/>
  <div className="row">
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <StatusForm/>
    </div>
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <button type="button" className="btn btn-primary mb-15" >
        <span className="fa fa-plus mr-5 " />Thêm Công Việc
      </button>
     
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <StatusList tasks={tasks}/>
        </div>
      </div>
    </div>
  </div>
</div>

    
    );
  }
}

export default App;