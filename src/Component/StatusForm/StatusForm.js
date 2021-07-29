import React, { Component, useState } from 'react';
import axios from 'axios';
import history from 'react-router-dom';
import callApi from '../../utils/apiCaller';
  
    function StatusForm(props)  {
        const [id,setid]=useState('');
        const [txtTitle,settxtTitle]=useState('');
        const [txtStatus,settxtStatus]=useState('');
        const [txtDescription,settxtDescription]=useState('')
     
     const handletxtTitle=(event)=>{
       settxtTitle(event.target.value); 
     };
     const handletxtStatus=(event)=>{
       settxtStatus(event.target.value); 
     };
     const handletxtDescription=(event)=>{
       settxtDescription(event.target.value); 
     };
     const onSubmit = (event) => {
          event.preventDefault();
          var { history } =  props;
          callApi('tasks/add', 'POST', {
            title:  txtTitle,
            description: txtDescription,
            status:  txtStatus,
          }).then(res => {
            console.log(res);
            history.push('/managerstatus')
          });
        };
    const onClear = () => {
         settxtTitle('');
         settxtDescription('');
         settxtStatus('');
          
        }
    
        return (
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Thêm Trạng thái </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Tiêu đề :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtTitle"
                    value={txtTitle}
                    onChange={handletxtTitle}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả :</label>
                  <textarea
                    className="form-control"
                    name="txtDescription"
                    value={txtDescription}
                    onChange={handletxtDescription}
                  ></textarea>
                </div>
                <label>Trạng Thái :</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtStatus"
                  value={txtStatus}
                  onChange={handletxtStatus}
                />
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">
                    Thêm
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-danger" onClick={onClear}>
                    Hủy Bỏ
                  </button>
                </div>
              </form>
            </div>
          </div>
    );
  }


export default StatusForm;