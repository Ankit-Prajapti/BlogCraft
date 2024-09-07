import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="">
        <nav className=" flex align-middle justify-between  pl-20 pr-20 pt-5 pb-5 ">
          <div className=" text-white font-bold text-4xl">
          <Link to="/">BlogCraft</Link>
          </div>

          <ul className=" list-none flex text-lg gap-10 align-bottom text-customText">
            <li className=" inline">
              <Link to="/">Home</Link>
            </li>
            <li className=" inline">
              <Link to="/about">Create</Link>
            </li>
            <li className=" inline">
              <Link to="/contact">Edit</Link>
            </li>
            <li className=" inline">
                icon
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
