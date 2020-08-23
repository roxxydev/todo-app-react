import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import Axios from 'axios';

class App extends Component {

  url = 'https://jsonplaceholder.typicode.com/todos';

  state = {
    todos: []
  };

  async componentDidMount() {
    const res = await Axios.get(this.url);
    this.setState({ todos: res.data });
  }

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

  deleteTodo = async (id) => {

    await Axios.delete(`${this.url}/${id}`);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = async (title) => {

    const res = await Axios.post(this.url, {
      title,
      completed: false,
    });

    this.setState({todos: [...this.state.todos, res.data] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/todo-app-react" render={() => {
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
