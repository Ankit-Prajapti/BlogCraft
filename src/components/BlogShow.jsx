import { useState } from "react";
import BlogEdit from "./BlogEdit";

function BlogShow({ blog, editBlog , deleteBlog}) {
  const [isEditing, setIsEditing] = useState(false);
  



  const handleSave = (id, data) => {
    editBlog(id, data)
   
    
    setIsEditing(false);
    
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedBlog({ ...blog });
  
  };


  return (
    <div className="bg-customWhite rounded-lg shadow-lg p-4 w-80 flex flex-col  maxHeight">
      {!isEditing ? ( 
        <>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <div className="space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded text-sm" onClick={() => deleteBlog(blog.id)}>
                Delete
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2 text-right">
            {blog.date}   {blog.time}
          </p>
          <div className="overflow-y-auto flex-grow custom-scrollbar">
            <p className="text-gray-800">{blog.content}</p>
          </div>
          <p className="text-right text-sm text-gray-600 mb-2">
            -{blog.author}
          </p>
        </>
      ) : (<BlogEdit onCancle={handleCancel} onSave={handleSave} blog={blog} />
        
      )}
    </div>
  );
}

export default BlogShow;
