import { useState } from 'react';
import logo from '../images/logo.svg'
import { SButton } from './SButton'
import { AddTodo } from './AddTodo';
export const Topbar = () => {
    const[ addTodo, setAddTodo ] = useState(false);
    const toggleAddTodo = () => {
        setAddTodo(!addTodo);
    };
    return (
        <div className="flex justify-between border-b border-gray-200 bg-slate-100 h-16 w-full shadow-lg">
            <div className='ml-5 mt-1 h-10 w-36'>
                <img src={logo} alt="" />
            </div>
            <div className='flex'>
            <div className="flex justify-center mx-2 mt-3 h-10 w-28 border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base" onClick={toggleAddTodo}>
                            Add Todo
            </div>
                <SButton name={"Logout"}/>
            </div>
            {addTodo ? <AddTodo toggleAddTodo={toggleAddTodo}/> : ""}
        </div>
    )
}