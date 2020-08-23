import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import { v4 as uuid } from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Learn Reactjs',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" render={() => {
            return <React.Fragment>
                <div className="container">
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}/>
                </div>
              </React.Fragment>
            }}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
