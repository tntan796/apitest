import React, { Component } from 'react';

class StatusItem extends Component {
    render() {
       
        return (
            <tr>
            <td>1</td>
            <td>Học lập trình</td>
            <td>Tôi luôn thức dậy lúc 6 giờ sáng </td>
            <td className="text-center">
              <span className="label label-success">
                1
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