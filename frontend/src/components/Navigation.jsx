import { NavLink } from "react-router-dom";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import { useEffect, useContext } from "react";
import img3 from "./images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../Helpers/Helper";
import { useState, useRef } from "react";
function Navigation() {
  const { changeMode, setChangeMode } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);
  const { chooseSection, setChooseSection } = useContext(Context);
  const menuref = useRef(null);
  useEffect(() => {
    if (changeMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    const handleOutsideClick = (event) => {
      if (menuref.current && menuref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [changeMode, setMenuOpen]);

  return (
    <div className={`top-0 sticky nav ${changeMode ? "dark-mode" : "bright-mode"} relative z-50`}>
      <div className="flex flex-row justify-between p-1 m-2 items-center ">
        <div className="text-orange-400 italic font-thin text-5xl">
          <h5 className="flex">
            <span>
              {" "}
              <img src={img3} alt="" className="w-10 h-10 object-cover rounded-[50%]" />
            </span>
            JG KIHIU
          </h5>
        </div>
        <div className="lg:hidden ">
          {chooseSection ? (
            <ExpandLessIcon onClick={() => setChooseSection((prev) => !prev)} />
          ) : (
            <ExpandMoreIcon onClick={() => setChooseSection((prev) => !prev)} />
          )}
        </div>
        <div className="flex gap-3 flex-row justify-between items-center">
          {changeMode ? (
            <WbSunnyOutlinedIcon onClick={() => setChangeMode((prev) => !prev)} />
          ) : (
            <NightsStayOutlinedIcon onClick={() => setChangeMode((prev) => !prev)} />
          )}
          <div
            className={`${
              menuOpen
                ? "flex bg-black text-white absolute z-0 top-0 right-0  rounded p-5 transition ease-in-out duration-1000 transform translate-x-1 translate-y-5 "
                : ""
            }`}
            ref={menuref}
          >
            <div
              className={`${menuOpen ? "flex flex-col gap-5" : "hidden"} lg:flex lg:flex-row lg:gap-5 lg:items-center
                navbar`}
            >
              <NavLink
                to="/"
                className="transition duration-500 ease-in-out transform     rounded "
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink to="/about" className="transition duration-500 ease-in-out transform     rounded">
                About
              </NavLink>
              <NavLink to="/work" className="transition duration-500 ease-in-out transform     rounded">
                {" "}
                Work
              </NavLink>
              <button className=" text-center p-1 rounded">
                <NavLink to="/talk" className="transition duration-500 ease-in-out transform rounded p-2 ">
                  Let`s Talk
                </NavLink>
              </button>
            </div>
            <div className="block lg:hidden">
              {menuOpen ? (
                <CloseIcon
                  onClick={() => {
                    setMenuOpen((prev) => !prev);
                  }}
                />
              ) : (
                <MenuIcon
                  onClick={() => {
                    setMenuOpen((prev) => !prev);
                  }}
                />
              )}{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Navigation;
