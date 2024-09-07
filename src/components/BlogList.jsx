import BlogShow from "./BlogShow";


function BlogList({blogData, editBlog}) {

    const display = blogData.map((blog) => { return <BlogShow blog={blog} editBlog={editBlog} key={blog.id} />})

  return (
    <div className="grid grid-cols-4 gap-5 mx-10 mt-10">
      {display}
    </div>
  );
}

export default BlogList;
