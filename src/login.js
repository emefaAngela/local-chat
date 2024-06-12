import { useState } from "react"
const Login = () => {
    const [name,setname]=useState('');
    const handleSetName=(event)=>{
        setname(event.target.value);
    }

    const handleLogin=()=>{
        sessionStorage.setItem('username', name);
    }
    return ( 
        <div className="h-screen w-screen flex m-auto justify-center items-center bg-[#1E243F]">

            <div className="w-72 h-64 rounded-md shadow-md flex flex-col m-auto justify-center items-center space-y-12 bg-[#E5E5E5]">
                <div className="">What should we call you?</div>
                <input type="text" value={name } placeholder="username" onChange={handleSetName} className="w-48 mx-12  rounded-lg bg-white text-[#9CA3AF] outline-none px-4 py-3" />
                <button className="bg-[#1F3C88] text-white py-3 px-4 rounded-lg m-auto w-48"><a onClick={handleLogin} href='/chat'>Start chatting</a></button>
               
            </div>
        </div>
     );
}
 
export default Login;