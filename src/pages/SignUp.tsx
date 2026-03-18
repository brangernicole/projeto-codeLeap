import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      navigate("/Home");
    }, 100);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white rounded-2xl border border-gray-300 w-signup-card min-h-signup-card p-4 sm:p-6">

        <h1 className="text-xl font-bold mb-4">
          Welcome to CodeLeap network!
        </h1>

        <p className="text-sm mb-1">Please enter your username</p>
       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <input
    type="text"
    placeholder="John Doe"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full h-8 border border-gray-400 rounded-lg mb-4 px-2 text-sm focus:border-gray-500 outline-none"
  />
  <div className="flex justify-end">
    <button
      type="submit"
      disabled={!username.trim()}
      className={`w-buttons max-w-buttons h-8 rounded-lg flex items-center justify-center font-bold text-white ${
        username.trim()
          ? "bg-blue-400 hover:bg-blue-500 cursor-pointer"
          : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
      }`}
    >
      ENTER
    </button>
  </div>
</form>

      </div>
    </div>
  );
}