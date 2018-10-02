import React, { Component } from "react";

import TodoList from './todo-list/index';
import TodoAdder from './todo-adder/index';
class TodoApp extends Component {


    constructor(props) {
        super();

        this.state = {
            newTodo: ''                                         // list was removed
        }
    }

    handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        this.props.toggleTodo({index: i, value});               // replaces previous logic
    }

    handleNewToDoChange = (event) => {
        this.setState({newTodo: event.target.value});
    }

    addTodo = () => {
        this.props.addTodo({name: this.state.newTodo});         // replaces previous logic
    }

    render() {
        return (
            <div>
                <h1>ToDo works!</h1>
                <TodoAdder />

                {/* <div>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleNewToDoChange}
                    />
                    <button onClick={this.addTodo}>Add ToDo</button>
                </div> */}

                <TodoList />

                {/* <ul>
                    {this.props.todoList.map((obj, i) => (  // references new list
                        <li key={i}>
                            <input
                                name={i}
                                type="checkbox"
                                checked={obj.done}
                                onChange={ e => this.handleToDoCheckBoxChange(e, i) }
                            />
                            {obj.name}
                        </li>)
                    )}
                </ul> */}

                <hr />
                <h2>Debug Stuff</h2>
                <pre>{JSON.stringify(this.props.todoList, null, 2)}</pre>  // references new list
            </div>
        );
    }
}

export default TodoApp;