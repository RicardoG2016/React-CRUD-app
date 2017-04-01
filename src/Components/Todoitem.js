import React, { Component } from 'react';

class TodoItem extends Component {
  
  // deleteProject(id){
  //   console.log('test')
  //   this.props.onDelete(id);
  // }

  render() {
    
    return (
      <li className="Todo">
       <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}


// validations that check to make sure the project and ondelete are the correct type.
TodoItem.propTypes = {
  todo: React.PropTypes.object,
  // onDelete: React.PropTypes.func
}

export default TodoItem;
