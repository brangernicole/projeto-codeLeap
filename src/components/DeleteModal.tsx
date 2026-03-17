type DeleteModalProps = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
};

function DeleteModal({ open, onClose, onDelete }: DeleteModalProps) {
  if(!open) return null;
  return (
    <div className="fixed inset-0 bg-background-modal flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-modal h-delete-modal p-6 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this item?</h2>
          <div className="flex justify-end gap-4">
            <button
              className="rounded-lg w-30 h-8 text-base font-bold bg-white border border-gray-300 text-black hover:border-black hover:text-black transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="rounded-lg w-30 h-8 text-base font-bold bg-red-500 text-white hover:bg-red-600 transition-colors"
              onClick={onDelete}
            >
              Delete
            </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
