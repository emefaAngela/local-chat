//Modules
import React from 'react'
import ChatBubble from './chatbubble'
import { useState,useEffect } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { tw } from '../src/utils/tailwind'

// Comment: Add comments relevant to your code to separate parts of your code.
// 1: Please avoid adding too make white spaces in between lines.
// 2: Avoid inconsistency [its either you don't use semi-colons at all or you use it everywhere. I prefer you don't though].
// 3. Make your tabs consistent. Make sure closing tags or brackets match with their opening ones.
// 4. Spaces before and after =, { }, ( ) need to be consistent.
// 5. User Arrow functions for only callbacks. It will make your code more readable.
// 6. Be consistent with your namings too.
//   6a. File names should start with a capital and be camelCased. eg: ChatBubble.js
//   6b. Component names should be the same as their file names. eg: Function ChartBubble () {}
//   6c. Variable and function names should be camelCased.
// 7. Code is written vertically. Always make sure your code is going down and sideways.
// Comment: I'm going to rewrite your chatbubble.js so you lean from it to improve the rest.

//Component : App
function App() {

  //states to store chat
  const [chat,setChat] = useState('')
  const [chats, setChats] = useState([])

  //store sent chats to local storage and fetch them on each render
  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || []
    setChats(storedChats)
    const interval = setInterval(() => {
      const updatedChats = JSON.parse(localStorage.getItem('chats')) || []
      setChats(updatedChats)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

//set new chat as user types
const handlesetChat = e => {
  setChat(e.target.value)
  //console.log(chat)
}

//function to send new chat
const sendChat = () => {
	if (chat.trim() === '') return
	const currentDate = new Date() // You can move these to a separate utility function or simplify it
	const hours = currentDate.getHours()
	const minutes = currentDate.getMinutes()
	const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
	const user = sessionStorage.getItem('username')
	const newChat = { id: Date.now(), text: chat, time, user }
	const updatedChats = [...chats, newChat]
	localStorage.setItem('chats', JSON.stringify(updatedChats))
	setChats(updatedChats)
	setChat('')
}

//Render
  return (
    <div className={tw(
      'flex justify-center',
      'w-full h-full',
      'bg-[#FFFFFF]'
    )}>
      <div className={tw(
        'w-4/6 h-[746px]',
        'flex flex-col-reverse',
        'rounded-xl',
        'bg-[#F6F5F5]'
        )}>
       <input
        type="text"
        onChange={handlesetChat}
        value={chat}
        className={tw(
        'w-90% mx-6 my-4 h-10',
        'outline-none border border-[#1F3CA0]',
        'px-4 rounded-full'
        )}
        name=""
        id="" />
      <div>
        <PaperAirplaneIcon
        onClick={sendChat}
        className={tw(
                      'w-5 h-5',
                      'text-[#1F3CA0]',
                      '-rotate-45 absolute right-[18rem] top-[43rem] mt-2.5'
                     )} />
      </div>
      <div className={tw(
                        'flex flex-col'
                        )}>
          {chats.map(chat => (
            <ChatBubble
                      chat={chat.text}
                      time={chat.time}
                      user={chat.user}
                      key={chat.id} />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
