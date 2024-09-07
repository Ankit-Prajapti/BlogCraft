import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogShow from "./components/BlogShow";
import CreateBlog from "./components/CreateBlog";
import BlogEdit from "./components/BlogEdit";
import { useState } from "react";
import BlogList from "./components/BlogList";

function App() {
  const [allBlogs, setAllBlogs] = useState([
    {
      title: "Third",
      content: "Making a post reques",
      time: "Now",
      author: "json",
      id: "1",
    },
    {
      title: "Third",
      content: "Making  post reques",
      time: "Now",
      author: "json",
      id: "85",
    },
    {
      id: "2",
      title: "Second Blog",
      content: "This  scond is for testing and not for showing",
      time: "time",
      author: "author",
    },
    {
      id: "543e",
      title: "Third",
      content: "Making a post reques",
      time: "Now",
      author: "json",
    },
  ]);

  const addBlog = (data) => {
    setAllBlogs((prevValue) =>
      
      [...prevValue, data]
    
    );
  };

  const deleteBlog = (id) => {
    const updatedData = allBlogs.filter((blog) => {
      return blog.id !== id;
    });

    console.log("AppDelete Blog: ", updatedData);
    setAllBlogs(updatedData);
  };

  const updateBlog = (id, newData) => {
    const updateBlog = allBlogs.map((blog) => {
      if(blog.id === id){
        return {...blog, ...newData}
      }
      return blog;
    })

    console.log("AppUpdateBlog : ",updateBlog)
    setAllBlogs(updateBlog);
  }

  return (
    <BrowserRouter>
      <div className=" bg-customGrey">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<BlogList blogData={allBlogs} editBlog={updateBlog} deleteBlog={deleteBlog}/>} />
        <Route path="/about" element={<CreateBlog onCreate={addBlog}/>} />
        {/* <Route path="/contact" element={<BlogEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
