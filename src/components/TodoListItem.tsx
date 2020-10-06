import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    const handleChange = () => {
        toggle(props.todo);
    }

    const handleCategory = (category: string) => {
        switch (category) {
            case '0':
                return 'Sem Categoria';
            case '1':
                return 'Importante';
            case '2':
                return 'Urgente';
            default:
                return 'Sem Categoria';
        }
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto"> 
                <label>
                    <input className="uk-checkbox" type="checkbox" checked={props.todo.done} onChange={handleChange} />
                </label>
            </td>

            <td className="uk-width-1-2">{props.todo.title}</td>
            <td className="uk-width-1-2">{handleCategory(props.todo.category)}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.todo)} ></button>
            </td>
        </tr>
    );
}

export default TodoListItem;