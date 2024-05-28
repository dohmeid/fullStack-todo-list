import React, { useContext } from 'react';
import './Tasks.module.css';
import Task from "./Task/Task";
import { TodosContext } from '../../context/todos';

const Tasks = () => {
    const { getFilteredTodos } = useContext(TodosContext);

    //rendering the todos list
    let todosArray = getFilteredTodos();
    const TODO_LIST = todosArray.map((todo, index) => (
        <Task key={todo._id} index={index + 1} todoData={todo} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">TODO Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                {TODO_LIST}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan="5">Total tasks:<span>{todosArray.length}</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Tasks;