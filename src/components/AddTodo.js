import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ""
    };

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        if (title && title.length) {
            this.props.addTodo(this.state.title);
            this.setState({ title: "" })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <form id="addTodoForm" onSubmit={this.onSubmit}>
                <input
                    id="addTodoTextInput"
                    type="text"
                    name="title"
                    placeholder="Add Todo Item"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <input type="submit" className="btn" value="Submit" />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func
}

export default AddTodo
