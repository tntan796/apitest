import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function StatusItem(props) {

    /*   Xuất hiện thông báo Xóa  */
 const onDelete = (id) => {
   const {onDelete}=props
    if (confirm( "Bạn chắc chắn muốn xóa không?")) {//eslint-disable-line
      onDelete(id);
    }
  };
    const { task } = props;
    return (
      <tr>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td>{task.description} </td>
        <td className="text-center">
          <span
            className={
              task.status === 1 ? "label label-success" : "label label-danger"
            }
          >
            {task.status}
          </span>
        </td>
        <td className="text-center">
          
          <Link to={`/tasks/${task.id}/edit`} className="btn btn-warning">
            Sửa
          </Link>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() =>onDelete(task.id)}
          >
            <span className="fa fa-trash mr-5" />
            Xóa
          </button>
        </td>
      </tr>
    );
  }


export default StatusItem;