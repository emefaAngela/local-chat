//Modules
import { useState } from "react"
import {tw} from "../src/utils/tailwind"

//Component : Login
const Login = () => {

    //state and logic to store username and update as user types
    const [name,setname]=useState('');
    const handleSetName=(event)=>{
        setname(event.target.value);
    }

    //logic to store username in session
    const handleLogin=()=>{
        sessionStorage.setItem('username', name);
    }

    //Render component
    return ( 
        <div className={tw(
                            'h-screen w-screen flex m-auto justify-center items-center',
                            'bg-[#1E243F]'
                          )}>
            <div className={tw(
                                'w-72 h-64 rounded-md shadow-md flex flex-col m-auto justify-center items-center space-y-12',
                                'bg-[#E5E5E5]'
                              )}
            >
                <div className="">
                    What should we call you?
                </div>
                <input 
                    type="text"
                    value={name } 
                    placeholder="username" 
                    onChange={handleSetName} 
                    className={tw(
                                  'w-48 mx-12',
                                  'rounded-lg outline-none',
                                  'bg-white text-[#9CA3AF]',
                                  'px-4 py-3'
                                )}
                />
                <button
                     className={tw(
                                   'bg-[#1F3C88] text-white',
                                   'py-3 px-4 rounded-lg',
                                   'm-auto w-48'
                                   )}>
                    <a
                      onClick={handleLogin}
                      href='/chat'>
                      Start chatting
                    </a>
                </button>
            </div>
        </div>
     );
}
 
export default Login;