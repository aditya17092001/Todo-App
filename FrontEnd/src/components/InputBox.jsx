export const InputBox = (props) => {
    const{ label, placeholder, onChange } = props;
    return (
        <div>
            <div className="flex justify-start">
                {label}
            </div>
            <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
            
        </div>
    )
}