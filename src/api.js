import axios from "axios";

// Fetching all data of Blogs form Database
export const fetchBlogs = async () => {
  const result = await axios.get("http://localhost:3001/blogs");

  console.log("FetchData :", result.data);
};

// Adding new data to database.

export const addBlog = async (data) => {
  const result = await axios.post("http://localhost:3001/blogs", data);

  console.log("AddBlog: ", result.data);
};

// Updating the data of blog.

export const updateBlog = async (id, data) => {
  const result = await axios.put(`http://localhost:3001/blogs/${id}`, data);

  console.log("UpdateBlog: ", result.data);
};

// Delete Blog

export const deleteBlog = async (id) => {
  const result = await axios.delete(`http://localhost:3001/blogs/${id}`);

  console.log("DeleteBlog: ", result.data);
};
