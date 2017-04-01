import React, { Component } from 'react';
import TodoItem from './Todoitem';

class Todos extends Component {
  // delete is not setup for todos
  // deleteProject(id){
  //   this.props.onDelete(id);
  // }

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        // console.log(project);

      return (
        <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
      <h3> Current Todos</h3>
        {todoItems}
      </div>
    );
  }
}

// validations that check to make sure the todo and ondelete are the correct type(delete not setup for todo).
Todos.propTypes = {
  todos: React.PropTypes.array,
  // onDelete: React.PropTypes.func
}

export default Todos;
