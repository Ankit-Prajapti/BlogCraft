import BlogShow from "./BlogShow";


function BlogList({blogData, editBlog, deleteBlog}) {

    const display = blogData.map((blog) => { return <BlogShow blog={blog} deleteBlog={deleteBlog} editBlog={editBlog} key={blog.id} />})

  return (
    <div className="grid grid-cols-4 gap-5 mx-10 my-10">
      {display}
    </div>
  );
}

export default BlogList;
