import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {
    const todos: Todo[] = [
        {id: 1, title: 'Ir ao supermercado', done: false},
        {id: 2, title: 'Ir a academia', done: false}
    ];    

    return (
        <div>Todo list</div>
    );
}

export default TodoList;