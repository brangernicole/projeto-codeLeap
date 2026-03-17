import { useState } from "react";

type EditModalProps = {
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
};

function EditModal({ open, onClose, onEdit }: EditModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const canSave = title.trim() && content.trim();
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-background-modal flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-modal h-edit p-6 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4 text-title">Edit item</h2>
          <p className="text-base text-left mb-1">Title</p>
          <input 
            type="text"
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full max-w-modal-edit h-8 shrink-0 border border-gray-400 rounded-lg mb-8 px-2 text-sm focus:border-gray-500 focus:outline-none" 
          />
          <p className="text-base text-left mb-1">Content</p>
          <textarea
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-edit border border-gray-400 rounded-lg mb-6 px-3 py-2 text-sm resize-none placeholder:text-gray-300 focus:border-gray-500 focus:outline-none"
          />
          <div className="flex justify-end gap-4">
            <button
              className="rounded-lg px-6 h-8 text-base font-bold bg-white border border-gray-300 text-black hover:border-black hover:text-black transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`rounded-lg px-6 h-8 text-base font-bold text-white ${
              canSave
                ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
              onClick={onEdit}
              disabled={!canSave}
            >
              Save
            </button>
          </div>
      </div>
    </div>
    
  );
}

export default EditModal;