import React, { Component } from 'react';
import StatusItem from '../StatusItem/StatusItem';
import axios from 'axios'
class StatusList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tasks:[]
        };
    }
     componentDidMount(){
      axios({
        method: 'GET',
        url: 'https://tano-api.herokuapp.com/tasks',
        data: null
      }).then(res=>{
          this.setState({
            tasks: res.data
         });  
            
          
      }).catch(err=>{
          console.log(err);
      })
     }
    render() {
      var {tasks} = this.state ;
      var elmTasks=tasks.map((task,index)=>{
        return (<StatusItem key={index} task={task}  />
        ) ;
      });
        return (
          
            <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tiêu Đề </th>
                <th className="text-center">Mô tả</th>
                <th className="text-center">Trạng thái </th>
                <th className="text-center">Thao tác  </th>
              </tr>
            </thead>
            <tbody>
             {elmTasks}
            </tbody>
          </table>
        );
    }
}

export default StatusList;