import React, { Component } from 'react';

class StatusItem extends Component {
    render() {
          var{task,index}=this.props
        return (
            <tr>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description} </td>
            <td className="text-center">
              <span className={task.status===1? "label label-success": "label label-danger"}>
                {task.status}
              </span>
            </td>
            
            <td className="text-center">
              <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5" />Sửa
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <span className="fa fa-trash mr-5" />Xóa
              </button>
            </td>
          </tr>
        );
    }
}

export default StatusItem;