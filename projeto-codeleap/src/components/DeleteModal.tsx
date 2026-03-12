type DeleteModalProps = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
};

function DeleteModal({ open, onClose, onDelete }: DeleteModalProps) {
  if(!open) return null;
  return (
    <div className="fixed inset-0 bg-[#777777CC] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-[660px] h-[146px] p-6 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this item?</h2>
          <div className="flex justify-end gap-4">
            <button className="btn-cancel rounded-lg w-30 h-8 text-[16px] font-bold" onClick={onClose}>Cancel</button>
            <button className="btn-red rounded-lg w-30 h-8 text-[16px] font-bold" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
