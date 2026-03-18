import { useState } from "react";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const titleIsFilled = title.trim()
  const contentIsFilled = content.trim()

  function handleCreate() {
    setTitle("");
    setContent("");
  }

  return (
    <div className="min-h-screen flex justify-center px-4 bg-gray-100">
      <div className="bg-white border border-gray-300 w-full  max-w-200">

        <div className="bg-primary w-full h-20 flex items-center px-6">
          <h1 className="text-white text-xl font-bold">
            CodeLeap Network
          </h1>
        </div>

        <div className="p-6 flex flex-col gap-6">

          <div className="w-full border border-gray-300 rounded-2xl p-6">

            <h1 className="text-xl font-bold mb-6">
              What’s on your mind?
            </h1>

            <p>Title</p>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Hello world"
              className="w-full h-8 border border-gray-400 rounded-lg mb-6 px-2 text-sm outline-none"
            />

            <p>Content</p>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content here"
              className="w-full h-content border border-gray-400 rounded-lg mb-6 px-2 py-2 text-sm resize-none outline-none"
            />

            <div className="flex justify-end">
              <button
                type="button"
                className={`w-buttons h-8 rounded-lg text-white flex items-center justify-center font-bold ${
                 titleIsFilled && contentIsFilled
                    ? "bg-primary hover:bg-hover cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleCreate}
                disabled={!(titleIsFilled && contentIsFilled)}
              >
                Create
              </button>
            </div>

          </div>


          <div className="w-full border border-gray-300 rounded-2xl overflow-hidden">

            <div className="bg-primary min-h-post flex items-center justify-between px-4">

              <h2 className="text-white font-bold text-lg sm:text-title pr-4">
                My First Post at CodeLeap Network!
              </h2>

              <div className="flex items-center gap-3 flex-shrink: 0">

                <img
                  src="/src/assets/icons/delete.svg"
                  alt="delete"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setDeleteOpen(true)}
                />

                <img
                  src="/src/assets/icons/edit.svg"
                  alt="edit"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setEditOpen(true)}
                />

              </div>

            </div>

            <div className="p-4">

              <div className="flex justify-between mb-4">
                <p className="text-gray-500 text-sm font-bold">@Victor</p>
                <p className="text-gray-500 text-sm font-bold">25 minutes ago</p>
              </div>

              <p className="text-base sm:text-paragraph">
                Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
                elit. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis
                placerat. Duis vel nibh at velit scelerisque suscipit.
                <br /><br />
                Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
                feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
                lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
              </p>

            </div>

          </div>

          <div className="w-full border border-gray-300 rounded-2xl overflow-hidden">

            <div className="bg-primary min-h-post flex items-center px-4">

              <h2 className="text-white font-bold text-lg sm:text-title">
                My Second Post at CodeLeap Network!
              </h2>

            </div>

            <div className="p-4">

              <div className="flex justify-between mb-4">
                <p className="text-gray-500 text-sm font-bold">@Vini</p>
                <p className="text-gray-500 text-sm font-bold">45 minutes ago</p>
              </div>

              <p className="text-base sm:text-paragraph">
                Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
                elit. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis
                placerat. Duis vel nibh at velit scelerisque suscipit.
                <br /><br />
                Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
                feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
                lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
              </p>

            </div>

          </div>

        </div>

        <DeleteModal
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          onDelete={() => setDeleteOpen(false)}
        />

        <EditModal
          open={editOpen}
          onClose={() => setEditOpen(false)}
          onEdit={() => setEditOpen(false)}
        />

      </div>
    </div>
  );
}