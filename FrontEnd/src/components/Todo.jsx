import { useState } from "react";
import { EditTodo } from "./EditTodo";
import { Delete } from "./Delete";

export const Todo = (props) => {
    const { title, description, createdAt, completed, _id } = props.data;
    let date = new Date(createdAt);
    let showDescription = description.length >= 60 ? description.substring(0,60)+"..." : description;
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };
    const toggleDelete = () => {
        setIsDelete(!isDelete);
    };
    
    return(
        <div className='border border-red-500 w-90 h-36 p-5  bg-slate-200 rounded-2xl m-3'>
            <div className="flex justify-between">
                <div className="font-bold text-2xl">{title}</div>
                <div className="flex">
                    <div className="m-2 hover:cursor-pointer hover:shadow-xl" onClick={toggleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
                    </div>
                    <div className="m-2 hover:cursor-pointer hover:shadow-sl" onClick={toggleEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className=" font-semibold text-xl">{showDescription}</div>
            <div className="flex justify-between">
                <div>
                    <div>{"Date: "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</div>
                    <div>{"Time: "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()}</div>
                </div>
                <div className="">
                    <div className="flex flex-col">
                        <div className="flex justify-center mx-2 mt-3 h-10 w-44 border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base">
                            {completed ? "Mark as incomplete" : "Yet to complete"}
                        </div>
                    </div>
                </div>
            </div>
            {isEdit && <EditTodo toggleEdit={toggleEdit} />}
            {isDelete && <Delete toggleDelete={toggleDelete} data = {props.data} />}

        </div>
    )
}