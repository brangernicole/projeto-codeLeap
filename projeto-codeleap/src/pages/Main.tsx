import { useState } from "react"

export default function Main() {
  const [title, setTitle] =useState('')
  const [content, setContent] = useState('')
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-300 w-[800px]">
      <div className="bg-[#7695EC] w-full h-[80px]  flex items-center px-6">
      <h1 className="text-white text-xl font-bold">CodeLeap Network</h1>
    </div>
    <div className="p-6 flex flex-col gap-6">
    <div className="w-[752px] h-[334px] border border-gray-300 rounded-2xl p-6">
    <h1 className="text-xl font-bold mb-6">What’s on your mind?</h1>
    <p>Title</p>
    <input type="text" 
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Hello world"
    className="w-[704px] h-[32px] border-[1px]  border-[#999999] focus:border-[#777777] outline-none rounded-lg mb-6 px-2 text-[14px]"
    />
    <p>Content</p>
    <textarea
    value={content}
    onChange={(e) => setContent(e.target.value)}
    placeholder="Content here"
    className="w-[704px] h-[74px] border-[1px] border-[#999999] focus:border-[#777777] outline-none rounded-lg mb-6 px-2 py-2 text-[14px] resize-none"
    />
    <button type="submit" className={` w-[111px] h-[32px] rounded-lg float-right text-white flex items-center justify-center ${
            title.trim() && content.trim()
              ? '!bg-[#7695EC] cursor-pointer'
              : '!bg-gray-400 cursor-not-allowed'
          }`}
           disabled={!title.trim() || !content.trim()}
          >
        Create
    </button>
    </div>
    <div className="w-[752px] border border-gray-300 rounded-2xl overflow-hidden">
    <div className="bg-[#7695EC] h-[70px] flex items-center justify-between px-4">
    <h2 className="text-white font-bold text-[22px]">My First Post at CodeLeap Network!</h2>
    <div className="flex gap-4">
      <img src="/src/assets/icons/delete.svg" alt="delete" className="py-3.5 px-6.5  cursor-pointer"/>
      <img src="/src/assets/icons/edit.svg" alt="edit" className="w-3.1 h-8.3 pl-9.1 pr-3.8 cursor-pointer"/>
    </div>
    </div>
    <div className="p-4">
    <div className="flex justify-between mb-4">
      <p className="text-gray-500 text-sm font-bold">@Victor</p>
      <p className="text-gray-500 text-sm font-bold">25 minutes ago</p>
    </div>
    <p className="text-[18px]">
      Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
      <br /><br />
      Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
      </p>
    </div>
    </div>
    <div className="w-[752px] border border-gray-300 rounded-2xl overflow-hidden">
    <div className="bg-[#7695EC] h-[70px] flex items-center justify-between px-4">
      <h2 className="text-white font-bold text-[22px]">My Second Post at CodeLeap Network!</h2>
    </div>
    <div className="p-4">
      <div className="flex justify-between mb-4">
      <p className="text-gray-500 text-sm font-bold">@Vini</p>
      <p className="text-gray-500 text-sm font-bold">45 minutes ago</p>
    </div>
    <p className="text-[18px]">
    Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. 
    <br /> <br /> 
    Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
    </p>
    </div>
    </div>
    </div> 
    </div>
    </div>
  )
}
