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
        <div className="h-screen w-screen flex m-auto justify-center items-center bg-slate-700">

            <div className="w-72 h-64 rounded-md shadow-md flex flex-col m-auto justify-center space-y-12 bg-slate-300">
                <input type="text" value={name } placeholder="Your name" onChange={handleSetName} className="w-48 mx-12 h-10 rounded-full bg-white outline-none px-2" />
                <button className="bg-slate-800 text-white py-1 px-2 rounded-full m-auto w-32"><a onClick={handleLogin} href='/chat'>Start chatting</a></button>
               
            </div>
        </div>
     );
}
 
export default Login;