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

     onDelete =(id) =>{
       var {tasks}=this.state
      axios({
        method: 'DELETE',
        url: 'https://tano-api.herokuapp.com/tasks/delete/${id}',
        data: null
      }).then(res=>{
          if(res.status===200){
           var index=this.findIndex(tasks,id);
           if(index !== -1){
             tasks.splice(index,1);
             this.setState({
               tasks:tasks
             })
           }
          }
          console.log(res)
          
      }).catch(err=>{
          console.log(err);
      })
     }
     findInex=(tasks,id)=>{
       var result=-1;
       tasks.forEach((task,index) => {
         if(task.id===id)
         result=index;
       });
       return result;
     }
    render() {
      var {tasks} = this.state ;
      var elmTasks=tasks.map((task,index)=>{
        return (<StatusItem key={index} task={task} onDelete={this.onDelete}  />
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