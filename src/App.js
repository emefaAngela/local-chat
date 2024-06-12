import ChatBubble from "./chatbubble";
import { useState,useEffect } from "react";
import { PaperAirplaneIcon} from '@heroicons/react/24/outline'


function App() {
  const [chat,setChat]=useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || [];
    setChats(storedChats);

    const interval = setInterval(() => {
      const updatedChats = JSON.parse(localStorage.getItem('chats')) || [];
      setChats(updatedChats);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

const handlesetChat=(e)=>{
  setChat(e.target.value);
  console.log(chat)
}


const sendChat=()=>{
  if (chat.trim() !== "") {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    const user = sessionStorage.getItem('username');
    const newChat = { id: Date.now(), text: chat, time, user };

      const updatedChats = [...chats, newChat];
      localStorage.setItem('chats', JSON.stringify(updatedChats));
      setChats(updatedChats);
      setChat('');
  }
}



  return (
    <div className='bg-[#FFFFFF] w-full h-full flex justify-center'>
      <div className="w-4/6 h-[746px] flex flex-col-reverse rounded-xl bg-[#F6F5F5]">

      {/* <div className=""> */}
       <input  type="text" onChange={handlesetChat} value={chat}  className="w-90% mx-6 my-4 h-10 outline-none border border-[#1F3CA0]  px-4 rounded-full" name="" id="" />
        {/* <ChatBubble/> */}
        <div>
        <PaperAirplaneIcon onClick={sendChat} className="w-5 h-5 text-[#1F3CA0]  -rotate-45 absolute right-[18rem] top-[43rem] mt-2.5 "/>
        </div>
      {/* </div> */}
        
       
        
        <div className="flex flex-col">
          {chats.map(chat=>(
            <ChatBubble chat={chat.text} time={chat.time} user={chat.user} key={chat.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
