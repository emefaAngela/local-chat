// Modules
import React, { useMemo } from 'react'

// Component: Chart bubble
// eslint-disable-next-line react/prop-types
function ChatBubble ({ chat, time, user }) {
	// Data
	const username = sessionStorage.getItem('username')

	// Data (Memoized)
	const isUser = useMemo(() => username === user, [user, username])

	// Render
	return (
		<div className={`flex max-w-sx flex-col
			${isUser
				? 'self-end'
				: 'self-start'
			}`}>
			<div className={`flex space-x-1 -mb-4 text-xs text-center ml-3
				${isUser
					? 'self-start'
					: 'self-start'
				}`}>
				{isUser
					? <div>you ,</div>
					: <div>{username},  </div>
				}
				<div className="text-[10px]">{time}</div>
			</div>
			<div className={`p-2 flex justify-center m-4 text-center items-center w-fit max-w-xs
				${isUser
					? 'self-end bg-[#E5E5E5] text-[#1F3CA0] rounded-ee-xl rounded-s-xl'
					: 'self-start bg-[#1F3CA0] text-[#E5E5E5] rounded-e-xl rounded-es-xl'
				}`}>
				{chat}
			</div>
		</div>
	)
}

// Export
export default ChatBubble
