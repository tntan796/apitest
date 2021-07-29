import React, { Component, useEffect, useState } from 'react';
import StatusItem from '../StatusItem/StatusItem';
import callApi from './../../utils/apiCaller';
function StatusList(props) {
    
        const [tasks,setTasks] =useState([]);
 useEffect(()=>{
    callApi('tasks','GET', null)
    .then(res=>{
      setTasks(res.data);
   });   
 });
   
    
 const onDelete =(id) =>{
      
      callApi(`tasks/delete/${id}`,'DELETE',null)
      .then(res=>{
          if(res.status===200){
           var index=findIndex(tasks,id);
           if(index !== -1){
             tasks.splice(index,1);
             setTasks(tasks)
           }
          }
          console.log(res)
          
      }).catch(err=>{
          console.log(err);
      })
     }
  const findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id)
        result = index;
    });
    return result;
  }
 
    
      var elmTasks = tasks.map((task, index) => {
        return (<StatusItem key={index} task={task} onDelete={onDelete} />
        );
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

export default StatusList;