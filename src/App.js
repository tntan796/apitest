import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDiskplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: null,
      },
      keyword: "",
      sortBy: "name",
      sortValue: 1,
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }
  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình 1",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Học lập trình 2 ",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Học lập trình  3",
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }
  onToggleForm = () => {
    if (this.state.isDiskplayForm && this.taskEditing !== null) {
      this.setState({
        isDiskplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDiskplayForm: !this.state.isDiskplayForm,
        taskEditting: null,
      });
    }
  };

  onCloseForm = () => {
    this.setState({
      isDiskplayForm: false,
    });
  };

  onShowForm = () => {
    this.setState({
      isDiskplayForm: true,
    });
  };

  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdateStatus = (id) => {
    var { tasks } = this.state;

    var index = this.findIndex(id);
    console.log(index);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDelete = (id) => {
    var { tasks } = this.state;

    var index = this.findIndex(id);
    console.log(index);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  onSelectedItem = (item) => {
    this.setState({
      itemEditing: item,
      isShowingForm: true,
    });
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
    console.log(this.state);
  };
  render() {
    var {
      tasks,
      isDiskplayForm,
      taskEditing,
      filter,
      keyword,
      sortBy,
      sortValue,
    } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      if (filter.status) {
        tasks = tasks.filter((task) => {
          if (filter.status === -1) {
            return task;
          } else {
            return task.status === (filter.status === 1 ? true : false);
          }
        });
      }
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if (sortBy === "name ") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return sortValue;
        else if (a.status < b.status) return -sortValue;
        else return 0;
      });
    }
    var elmTaskForm = isDiskplayForm ? (
      <TaskForm
        onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        task={taskEditing}
      />
    ) : (
      ""
    );

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDiskplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elmTaskForm}
          </div>
          <div
            className={
              isDiskplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5" /> Thêm Công Việc
            </button>
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus mr-5" />
              Generate Data
            </button>
            <div className="row mt-15">
              <TaskControl
                onSearch={this.onSearch}
                onSort={this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
              />
            </div>
            <div className="row mt-15">
              <TaskList
                tasks={tasks}
                onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter}
                o
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
