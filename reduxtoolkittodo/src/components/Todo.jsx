import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { remotodo } from '../features/todo/todoslice';
import { updatetodo } from '../features/todo/todoslice';

export default function Todo(props) {

    const todos = useSelector(state => state.todos)
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const dispatch = useDispatch()

    const updatehandle = (e) => {
        e.preventDefault()
        dispatch(updatetodo(update.text))

        setisTodoEditable(false)
    }
    console.log(todos);
    return (
        <>
            {
                todos.map((todo) => (
                    <div
                        className="w-full text-black bg-slate-400 h-10 relative">
                        <input type="text"
                            readOnly={isTodoEditable}
                            className=' bg-transparent outline-none'
                            value={todo.text} />
                        {console.log(todo.text)}

                        <div className="absolute right-4 top-0">
                            <button onClick={updatehandle} className=' bg-blue-500 px-3'>update</button>
                            <button
                                className='   text-3xl bg-red-500 px-5 ml-3'
                                onClick={() => dispatch(remotodo(todo.id))}
                            >x</button>

                        </div>
                    </div>
                ))
            }
        </>
    )
}
