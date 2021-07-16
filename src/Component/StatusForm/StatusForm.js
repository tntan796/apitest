import React, { Component } from 'react';

class StatusForm  extends Component {
    render() {
        return (
            <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm Trạng thái </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tiêu đề :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Mô tả :</label>
             <textarea name="" id="input" className="form-control" rows="3" required="required"></textarea>
            </div>
            <label>Trạng Thái :</label>
            <input type="text" className="form-control" />
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
              <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                </div>
            </form>
        </div>
      </div>
        );
    }
}

export default StatusForm ;