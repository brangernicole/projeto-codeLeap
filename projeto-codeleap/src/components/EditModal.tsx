type EditModalProps = {
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
};

function EditModal({ open, onClose, onEdit }: EditModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-[#777777CC] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-[660px] h-[334px] p-6 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4 text-[22px]">Edit item</h2>
          <p className="text-[16px] text-left mb-1">Title</p>
          <input 
            type="text"
            placeholder="Hello world"
            className="w-full h-8 border border-[#999999] rounded-lg mb-8 px-2 text-[14px] focus:border-gray-500 focus:outline-none" 
          />
          <p className="text-[16px] text-left mb-1">Content</p>
          <textarea
            placeholder="Content here"
            className="w-full h-18.5 border border-[#999999] rounded-lg mb-6 px-3 py-2 text-[14px] resize-none placeholder:text-[#CCCCCC] focus:border-gray-500 focus:outline-none"
          />
          <div className="flex justify-end gap-4">
            <button
              className="rounded-lg px-6 h-8 text-[16px] font-bold bg-white border border-gray-300 text-black hover:border-black hover:text-black transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-6 h-8 text-[16px] font-bold bg-green-500 text-white hover:bg-green-600 transition-colors"
              onClick={onEdit}
            >
              Save
            </button>
          </div>
      </div>
    </div>
    
  );
}

export default EditModal;