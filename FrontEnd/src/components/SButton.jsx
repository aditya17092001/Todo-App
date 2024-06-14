export const SButton = ({name}) => {
    return (
        <div>
            <div className="flex justify-center mx-2 mt-3 h-10 w-28 border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base">
                            {name}
            </div>
        </div>
    )
}