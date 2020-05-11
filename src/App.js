import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos : [
      {id : 1, content : 'Add Milk to can'},
      {id : 2, content : 'Go to Shopping'},
      {id : 3, content : 'Meet Thala'}
    ]
  }
  deletetodo = (id) => {
    console.log(id)
  const newtodos = this.state.todos.filter(todo => 
    {
    return todo.id !== id
  });
  this.setState({
    todos : newtodos
  })
  }

  AddTodo = (contents) => {
    let newtodos = this.state.todos
    newtodos.push({id : Math.random() , content : contents})
    this.setState({
      todos : newtodos      
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deletetodo = {this.deletetodo} />     
        <AddTodo AddTodo = {this.AddTodo} />   
      </div>
    );
  }
}

export default App;