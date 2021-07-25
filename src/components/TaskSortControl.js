import React, { Component } from 'react';

class TaskSortControl extends Component {
  constructor(props) {
    super(props);
    this.state={
      sort:{
        by:'name',
        value: 1
      }
    }
  }
   componentWillReceiveProps(nextProps){
     console.log(nextProps);
   }
  
  onClick=(sortBy, sortValue)=>{
   this.props.onSort(sortBy, sortValue)
  }
  
    render() {
      var{sort}=this.state;
        return (
            <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li onClick={()=>this.onClick('name',1)}>
                <a role="button" className={(sort.by==='name '&& sort.value===1)?'sort_selected':''}>
                  <span className="fa fa-sort-alpha-down pr-5">
                    Tên A-Z
                  </span>
                </a>
              </li>
              <li  onClick={()=>this.onClick('name',-1)}>
                <a role="button"  className={(sort.by==='name '&& sort.value===-1)?'sort_selected':''} >
                  <span className="fa fa-sort-alpha-down-alt pr-5">
                    Tên Z-A
                  </span>
                </a>
              </li>
              <li role="separator" className="divider"   />
              <li onClick={()=>this.onClick('status',1)}><a role="button" className={(sort.by==='status '&& sort.value===1)?'sort_selected':''}>Trạng Thái Kích Hoạt</a></li>
              <li onClick={()=>this.onClick('status',-1)}><a role="button"  className={(sort.by==='name '&& sort.value===-1)?'sort_selected':''}>Trạng Thái Ẩn</a></li>
            </ul>
          </div>
        );  
    }
}

export default TaskSortControl;