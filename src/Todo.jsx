import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteTodo, markAsDone } from './features/todos/todoSlice';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';


export default function Todo() {

    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const handleDone = (id) => {
        console.log(id);
        dispatch(markAsDone(id));

    }

    const handleClick = (id) => {
        console.log(id);
        dispatch(deleteTodo(id));
    }

    return (
        <div className="text-center mt-6">
            <h3 className="font-bold text-xl mb-4 ">Todo List App</h3>

            {todos.map((todo) => {

                // console.log(todo.isDone , " id " , todo.id);
                if (todo.isDone === true) {
                    return (
                        <ul className="text-center">
                            <li key={todo.id} className="bg-slate-100 w-1/3 ml-[29rem] mb-2 h-10 rounded-lg  pl-2 pr-2  text-sm font-bold flex  items-center justify-between ">
                                
                                    <Checkbox
                                        disabled checked
                                        color="success"
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        onClick={() => handleDone(todo.id)}
                                    />

                                
                                <p className='mr-60 line-through text-slate-400'>Task : {todo.task}</p>
                                <DeleteIcon sx={{
                                    color: pink[800]
                                    }} 
                                    onClick={() => handleClick(todo.id)} />
                                
                                
                            </li>
                        </ul>
                    )
                }
                else {
                    return (
                        <ul className="text-center">
                            <li key={todo.id} className="bg-slate-100 w-1/3 ml-[29rem] mb-2 h-10 rounded-lg  pl-2 pr-2  text-sm font-bold flex  items-center justify-between">
                                <Checkbox
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    onClick={() => handleDone(todo.id)}
                                />
                                <p className='mr-60'>Task : {todo.task}</p>
                                <DeleteIcon sx={{
                                    color: pink[800]
                                }} onClick={() => handleClick(todo.id)} />
                                
                            </li>
                        </ul>
                    )
                }


            })}

        </div>
    )
} 