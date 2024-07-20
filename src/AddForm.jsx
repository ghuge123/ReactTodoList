import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todos/todoSlice';
export default function AddForm(){
    const [task , setTask] = useState("");
    let dispatch = useDispatch();
    let handleChange = (e)=>{
        setTask(e.target.value);
      
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }
    return(
        <div className='flex justify-center mt-24' >
            <form onSubmit={handleSubmit}>
                <TextField id="task" label="Task" variant="outlined" required={true} value={task} onChange={handleChange}/><br></br><br></br>
                <div className='ml-16'>
                    <Button  variant="outlined" type='submit' >Add Task</Button>
                </div>
                
            </form>
            
        </div>
    )
}