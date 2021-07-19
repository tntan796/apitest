import React, { Component } from 'react';
import StatusItem from '../StatusItem/StatusItem';
import callApi from './../../utils/apiCaller';
class StatusList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tasks:[]
        };
    }
     componentDidMount(){

       callApi('tasks','GET', null)
          .then(res=>{
          this.setState({
            tasks: res.data
         });   
         
      });
     }

     onDelete =(id) =>{
       var {tasks}=this.state;
      callApi(`tasks/delete/${id}`,'DELETE',null)
      .then(res=>{
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
     findIndex=(tasks,id)=>{
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