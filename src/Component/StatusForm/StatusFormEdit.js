import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import history from 'react-router-dom';
import callApi from '../../utils/apiCaller';
  function StatusFormEdit(props) {
    
        const [id,setid]=useState('');
        const [txtTitle,settxtTitle]=useState('');
        const [txtStatus,settxtStatus]=useState('');
        const [txtDescription,settxtDescription]=useState('');
    
   /*   hiển thị dữ liệu trên form sửa */
   useEffect(()=>{
    const { match } = props
    if (match) {
      var id = match.params.id;
      callApi(`tasks/${id}`, 'GET', null).then(res => {
        var data = res.data;
         setid( data.id);
         settxtTitle(data.title);
          settxtStatus(data.status);
         settxtDescription(data.description);
  
        })
     
    }
   }
   )
 
  /* Sự kiện cho nút sửa */

    const handletxtTitle=(event)=>{
       settxtTitle(event.target.value) ;
    }
    const handletxtStatus=(event)=>{
       settxtStatus(event.target.value) ;
    }
    const handletxtDescription=(event)=>{
       settxtDescription(event.target.value) ;
    }
  
const onSubmit = (event) => {
    event.preventDefault();
    var { id } = id;
    var { history } = props;
        if (id) {
          callApi(`tasks/edit`,'POST', {
            id:id,
            title: txtTitle,
            description: txtDescription,
            status: txtStatus,
          }).then(res => {
            console.log(res);
            history.push('/managerstatus')
          }); 
        }
      }
    /*    Xóa dữ liệu trên input  */
   const   onClear = () => {
       settxtTitle('');
       settxtStatus('');
       settxtDescription('');
      }
      /* Chức năng trở về  */
    const  onEdit = () => {
        var { history } = props
        history.goBack();
      }

 return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Sửa Trạng thái </h3>
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
              <button type="submit" className="btn btn-warning" >
                Sửa
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger" onClick={onClear}>
                Hủy Bỏ
              </button>
              <button type="button" className="btn btn-warning" onClick={onEdit}>
                Trở về
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } 
export default StatusFormEdit;