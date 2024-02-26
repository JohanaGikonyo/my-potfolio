import { NavLink } from "react-router-dom";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import { useEffect, useContext } from "react";
import img3 from "./images/logo.jpg";
import { Context } from "../Helpers/Helper";
function Navigation() {
  const { changeMode, setChangeMode } = useContext(Context);
  useEffect(() => {
    if (changeMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [changeMode]);

  return (
    <div className={`top-0 sticky nav ${changeMode ? "dark-mode" : "bright-mode"}`}>
      <div className="flex flex-row justify-between p-1 m-2 items-center  ">
        <div className="text-orange-400 italic font-thin text-5xl">
          <NavLink to="/">
            <h5 className="flex">
              <span>
                {" "}
                <img src={img3} alt="" className="w-10 h-10 object-cover rounded-[50%]" />
              </span>
              JG KIHIU
            </h5>
          </NavLink>
        </div>
        <div className="flex gap-3 flex-row justify-between">
          {changeMode ? (
            <NightsStayOutlinedIcon onClick={() => setChangeMode((prev) => !prev)} />
          ) : (
            <WbSunnyOutlinedIcon onClick={() => setChangeMode((prev) => !prev)} />
          )}

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <button className="bg-orange-500 text-white text-center p-1 rounded">
            <NavLink to="/talk">Let`s Talk</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
