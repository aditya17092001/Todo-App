export const Button = (props) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center mx-2 mt-3 h-10 w-64 border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base">
                {props.name}
            </div>
        </div>
    )
}