import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <div className="col">
        <TodoItem key={todo.id} todo={todo}/>
      </div>
    ));
  }
}

//Proptypes
// TODO: research Proptype
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
