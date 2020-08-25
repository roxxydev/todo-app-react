import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        const { id, title } = this.props.todo;

        return (
            <div className={ this.props.todo.completed ? "todoItemCompleted" : "todoItem" }>
                <p>
                <input type="checkbox" onChange={ () => this.props.markComplete(id) }/> {title}
                <button className="btnTodoItemDelete" onClick={ () => this.props.deleteTodo(id) }>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func,
    deleteTodo: PropTypes.func
}

export default TodoItem;

