import React, { useContext } from 'react';
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
    title: yup.string().required("Tarefa inválida"),
    category: yup.string().required("Categoria inválida")
});

interface AddToForm {
    title: string,
    category: string
}



const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddToForm, e: any) => {
        addTodo(data.title, data.category);
        e.target.reset();
        window.location.href = '/';
    }
    
    const onLoading = () => {
        return 'loading...';
    }

    return (
        <form onSubmit={handleSubmit<AddToForm>(onSubmit)}>
            <h4>#NovaTarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nome da tarefa" className="uk-input" ref={register} />
    <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-margin uk-width-1-1">
                <select className="uk-input" name="category" id="category" ref={register} >
                    <option value="0">Sem Categoria</option>
                    <option value="1">Importante</option>
                    <option value="2">Urgente</option>
                </select>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>

        </form>
    );
}

export default AddTodo;
