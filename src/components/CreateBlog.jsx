import { useState } from "react";

function CreateBlog({onCreate}) {
  const [data, setData] = useState({
    title: "",
    content: "",
    time: "",
    author: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const getDate = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(); // Get the current date
  
    const day = String(date.getDate()); // Get day (1-31) and pad to 2 digits
    const month = String(months[date.getMonth()] ); // Get month (0-11), add 1 and pad to 2 digits
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
  
    return `${day}-${month}-${year}`;
  };


  const getTime = () => {
    const date = new Date();
    const hrs = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const secs = date.getSeconds().toString().padStart(2, "0");

    return `${hrs}:${mins}hrs`;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = getDate();
    const time = getTime();
   
    const finalData = {...data, time, date};

    console.log("Data ", finalData);
    onCreate(finalData);

    setData({
        title: "",
        content: "",
        time: "",
        author: "",
      });

  };

  return (
    <div>
      <h1>Create Blog</h1>

      <div className="bg-customGreen">
        <form onSubmit={handleSubmit} className="flex flex-col ml-10 mr-10">
          <input className=" m-6" type="text" placeholder="Title" name="title" onChange={handleChange} value={data.title} />

          <textarea
            className="m-6"
            placeholder="Content"
            name="content"
            rows={5}
            cols={60} onChange={handleChange} value={data.content}
          ></textarea>
          <input className="m-6" name="author" placeholder="Author"  onChange={handleChange} value={data.author}/>

          <div className=" ml-72 ">
            <button className="bg-customWhite pt-4 mb-4 pb-3 pr-6 pl-6 text-customGrey">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
