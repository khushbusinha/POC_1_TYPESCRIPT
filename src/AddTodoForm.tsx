import React, { ChangeEvent, FormEvent } from "react";
import { AddTodo } from "./types";


interface AddTodoFormProps {
    addTodo: AddTodo;
    newTodo?: any;
}
export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo, newTodo}) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        newTodo = e.target.value;
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
    }


    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}