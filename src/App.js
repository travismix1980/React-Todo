import React, {Component} from 'react';
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out the trash',
                completed: false,
            },
            {
                id: 2,
                title: 'Dinner with wife',
                completed: false,
            },
            {
                id: 3,
                title: 'Meeting with boss',
                completed: false,
            },
        ]
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    delTodo = (id) =>{
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)],
        })
    }

    generateId = () =>{
        if(this.state.todos.length > 0){
            return (this.state.todos[this.state.todos.length -1].id + 1);
        }
        else {
            return 1;
        }
    }

    addTodo = (title) =>{
        console.log(title);
        const newTodo = {
            id: this.generateId(),
            title,
            completed: false,
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}
                    />
                </div>
            </div>
        );
    }
}

export default App;
