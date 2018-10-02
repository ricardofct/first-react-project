import React, { Component } from "react";
import { Route } from 'react-router-dom';

import TodoList from './shared/todo-list/index';
import TodoAdder from './shared/todo-adder/index';
import TodoView from './todo-view/index'

const TodoApp = () => (
            <div>
                <h1>ToDo works!</h1>
                <TodoAdder />
                <TodoList />

                <Route path="/todo/:id" component={TodoView}/>
            </div>
);

export default TodoApp;