import React, { Component } from 'react';
import axios from 'axios';
import history from 'react-router-dom';
import callApi from '../../utils/apiCaller';
  
      class StatusForm extends Component {
        constructor(props) {
          super(props);
          this.state = {
            id: "",
            txtTitle: "",
            txtStatus: "",
            txtDescription: "",
          };
        }
        onChange = (event) => {
          var target = event. target;
          var name = target. name;
          var value = target. value;
          this.setState({
            [name]: value,
          });
        };
        onSubmit = (event) => {
          event.preventDefault();
          var { history } = this. props;
          callApi('tasks/add', 'POST', {
            title: this. state. txtTitle,
            description: this. state. txtDescription,
            status: this. state. txtStatus,
          }).then(res => {
            console.log(res);
            history.push('/managerstatus')
          });
        };
        onClear = () => {
          this.setState({
            txtTitle: "",
            txtStatus: "",
            txtDescription: "",
          })
        }
      render() {
        var { txtTitle, txtDescription, txtStatus } = this.state;
        return (
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Thêm Trạng thái </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Tiêu đề :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtTitle"
                    value={txtTitle}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả :</label>
                  <textarea
                    className="form-control"
                    name="txtDescription"
                    value={txtDescription}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <label>Trạng Thái :</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtStatus"
                  value={txtStatus}
                  onChange={this.onChange}
                />
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">
                    Thêm
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-danger" onClick={this.onClear}>
                    Hủy Bỏ
                  </button>
                </div>
              </form>
            </div>
          </div>
    );
  }
}

export default StatusForm;