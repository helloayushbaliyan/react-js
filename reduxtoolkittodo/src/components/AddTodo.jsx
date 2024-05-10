import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addtodo } from '../features/todo/todoslice';

export default function Addtodo(props) {

    const [Input, setInput] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addtodo(Input))
        console.log(Input);
        setInput("")
    }
    return (
        <>
            <form onSubmit={addTodoHandler}>
                <input

                    value={Input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='enter todo.'
                    className='w-[35rem] h-16 text-white bg-slate-900' type="text" />
                <button type='submit' className='h-16 bg-green-500 w-[8rem]'>subit</button>
            </form>
        </>
    )
}
