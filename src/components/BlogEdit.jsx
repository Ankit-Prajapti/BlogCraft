import { useState } from "react";

function BlogEdit({ blog, onCancle, onSave }) {
  const [editedBlog, setEditedBlog] = useState({ ...blog });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancle();

  }

  const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <form className="flex flex-col maxHeight" >
      <input
        type="text"
        name="title"
        value={editedBlog.title}
        onChange={handleInputChange}
        className="text-xl font-bold mb-2 p-1 border rounded"
      />
      
      <textarea
        name="content"
        value={editedBlog.content}
        onChange={handleInputChange}
        className="flex-grow mb-2 p-1 border rounded resize-none custom-scrollbar"
      />
      <input
        type="text"
        name="author"
        value={editedBlog.author}
        onChange={handleInputChange}
        className="text-sm text-gray-600 mb-2 p-1 border rounded"
      />
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default BlogEdit;
