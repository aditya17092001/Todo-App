import logo from '../images/logo.svg'
import { Button } from './Buttons'
export const Topbar = () => {
    return (
        <div className='flex h-16 justify-between bg-slate-300 border-b-2 border-black'>
            <div className='px-5 w-40 h-auto justify-center flex flex-col hover:cursor-pointer'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='flex'>
                <Button name="Signin"/>
                <Button name="Signup"/>
            </div>
        </div>
    )
}