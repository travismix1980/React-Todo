import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component{


    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            markComplete={this.props.markComplete}
                            delTodo={this.props.delTodo}
                        />))
                    }
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Todos;