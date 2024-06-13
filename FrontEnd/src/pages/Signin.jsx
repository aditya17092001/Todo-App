import React from 'react';
import logo from '../images/logo.svg';
import { InputBox } from '../components/InputBox';
import { Button } from '../components/Buttons';
import { BottomWarning } from '../components/BottomWarning';

export const Signin = () => {
    return (
        <div>
            <div className="relative">
                <div className="z-2 flex relative">
                    <div className="flex justify-start h-dvh basis-2/3 bg-orange-200">
                        <div className="flex justify-center w-1/2 px-10">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="h-dvh basis-1/3 bg-yellow-100"></div>
                </div>
                <div className="absolute top-1/4 right-44 z-1 rounded-2xl bg-gray-200 w-1/3 ">
                    <div className='flex justify-center font-semibold pt-10 pb-5 text-3xl'>Signin</div>
                    <div className='flex justify-center'>
                        <div className='w-4/5'>
                            <InputBox label="Email" placeholder="xyz@gmail.com"/>
                            <InputBox label="Password" placeholder="Password"/>
                            <div className='flex justify-center'>
                                <Button name="Signin"/>
                            </div>
                            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
