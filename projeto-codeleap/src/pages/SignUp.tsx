import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      navigate("/main");
    }, 100);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white rounded-2xl border border-gray-300 w-full max-w-[500px] p-4 sm:p-6">

        <h1 className="text-xl font-bold mb-4">
          Welcome to CodeLeap network!
        </h1>

        <p className="text-sm mb-1">Please enter your username</p>
      <input
      type="text"
      placeholder="John Doe"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full h-8 border border-gray-400 rounded-lg mb-4 px-2 text-sm focus:border-gray-500 outline-none"
    />

    <form onSubmit={handleSubmit} className="flex justify-end">
      <button
        type="submit"
        disabled={!username.trim()}
        className={`w-full max-w-[111px] h-8 rounded-lg flex items-center justify-center font-bold text-white ${
          username.trim()
            ? "bg-blue-400 hover:bg-blue-500 cursor-pointer"
            : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
        }`}
      >
        ENTER
      </button>
    </form>

      </div>
    </div>
  );
}