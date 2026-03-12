import { useState } from "react"

export default function SignUp() {
  const [username, setUsername] = useState('')
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl border border-gray-300 w-[500px] p-6">
      <h1 className="text-xl font-bold mb-4">Welcome to CodeLeap network!</h1>
        <p className="text-sm mb-1">Please enter your username</p>
          <input 
          type="text" 
          placeholder="John Doe" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-[452px] h-[32px] border-[1px]  border-[#999999] focus:border-[#777777] outline-none rounded-lg mb-4 px-2 text-[14px]"
          />
          <button 
            type="submit"
            disabled={!username.trim()}
            className={`w-[111px] h-[32px] rounded-lg float-right flex items-center justify-center font-bold ${
              username.trim()
                ? 'btn-create text-white cursor-pointer'
                : 'btn-disabled text-white cursor-not-allowed'
            }`}
          >
            ENTER
          </button>
    </div>
    </div>
  )
}
