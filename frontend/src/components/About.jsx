import img2 from "./images/johana3.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailInlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import animationData from "./images/Animation2.json";
import Lottie from "react-lottie";
import { useContext, useEffect } from "react";
import { Context } from "../Helpers/Helper";
function About() {
  const { changeMode } = useContext(Context);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const greetings = () => {
    let greet = "";
    let hours = new Date().getHours();
    if (hours < 12) {
      greet = <h2>Good Morning</h2>;
    } else if (hours <= 16) {
      greet = <h2>Good Afternoon</h2>;
    } else {
      greet = <h2>Good EVenning</h2>;
    }
    return greet;
  };
  return (
    <div className={`${changeMode ? " p-2" : "text- p-2"}`}>
      {" "}
      <div className="flex items-center justify-around  m-4 border rounded">
        <div className="text-green-500"> {greetings()}</div>
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row     justify-evenly">
        <div className={`${changeMode ? " p-3 m-2 rounded  sm:w-1 lg:w-1/2" : " p-3 m-2 rounded  sm:w-1 lg:w-1/2"}`}>
          <img src={img2} alt="" className="float-left rounded-[100%] h-40 w-40 object-cover" />
          <h1 className="text-2xl font-thin">Johana Kihiu</h1>
          <h4 className="text-orange-400">Junior Web Developer</h4>
          <p className="text-2xl font-sanrif ">
            Innovative, task-driven professional with more than 2 years of experience in Web Design and development
            across diverse industries . Equipedwith a record of successin consistency and provinding the technological
            needs of companies through ingenouis innovation. Proficient in developing Web Applications, creating user
            interfaces, writting and testing codes, troubleshooting simple/complex issues, and implementating new
            features based on user feedback.
          </p>
        </div>
        <div className="flex flex-col items-center  justify-evenly m-5">
          <ul className="flex flex-col justify-between gap-5 bg-slate-600  p-20 text-white rounded">
            <li className="flex flex-row items-center">
              <span className="text-orange-400 p-3">
                <MailInlineIcon />
              </span>
              <a href="mailto:johanagikonyo552@gmail.com">johanagikonyo@gmail.com</a>
            </li>
            <li className="flex flex-row items-center">
              <span className="text-orange-400 p-3 ">
                <PhoneCallbackOutlinedIcon />
              </span>
              +254740550484
            </li>
            <li className="flex flex-row items-center">
              <span className="text-orange-400 p-3">
                <LocationOnOutlinedIcon />
              </span>
              Nairobi Kenya
            </li>
            <li className="flex flex-row items-center">
              <span className="text-orange-400 p-3">
                <GitHubIcon />
              </span>
              <a href="https://github.com/JohanaGikonyo"> github.com/JohanaGikonyo</a>
            </li>
            <li className="flex flex-row items-center">
              <span className="text-orange-400 p-3">
                <LinkedInIcon />
              </span>
              <a href="https://www.linkedin.com/in/johana-gikonyo-789118233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                Johana Gikonyo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          changeMode
            ? "flex lg:flex-row flex-col justify-evenly items-center  m-3 rounded p-5 gap-5"
            : "flex lg:flex-row flex-col justify-evenly items-center  m-3 rounded border p-5 gap-5"
        }`}
      >
        <div className={`${changeMode ? " border rounded" : " border rounded"}`}>
          <h1>
            <span className="text-orange-500">
              <CheckCircleOutlineRoundedIcon />
            </span>
            WORK EXPERIENCE
          </h1>
          <h2>Web Developer</h2>
          <h5>
            Pear Computers Inc.{" "}
            <span className="text-orange-500">
              <LaunchRoundedIcon />
            </span>
          </h5>
        </div>
        <div
          className={`${
            changeMode
              ? "flex flex-col gap-4 text-black   rounded p-3 justify-between "
              : "flex flex-col gap-4   rounded p-3 justify-between "
          }`}
        >
          <h1 className="flex flex-row  items-center gap-3  overline-red-400">
            <span className="text-orange-500">
              <SchoolOutlinedIcon />
            </span>
            Skills
          </h1>
          <ul className="lg:flex flex-row gap-4 grid grid-cols-2">
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded grid grid-cols-2">
              <p>HTML5</p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>

            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded sm:flex-6 grid grid-cols-2">
              <p>CSS3 </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded sm:flex-6 grid grid-cols-2">
              <p>JavaSCript </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded  grid grid-cols-2">
              <p>Node Js </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500  m-2 rounded grid grid-cols-2">
              <p> Tailwind </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded grid grid-cols-2 ">
              <p>TypeScript</p> <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded grid grid-cols-2">
              <p>Node Js </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded grid grid-cols-2">
              <p>EXpress </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
            <li className="lg:flex flex-col items-center border border-blue-500 p-3 m-2 rounded grid grid-cols-2">
              <p>Mongo Db </p>
              <br />
              <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nO3RAQkAMAACQXPYv+cWYwzvwADyCQAAAACL2p4fF0f6vkInigAAAACw4AJR/O9Z5v9+rQAAAABJRU5ErkJggg==" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <marquee
          direction="left"
          className={`${changeMode ? "text-3xl italic font-serif text-black m-0" : "text-3xl italic font-serif m-0"}`}
        >
          Thank You 🥰 And Welcome! Looking Forward To Working Together AS A Team 🤝
        </marquee>
      </div>
    </div>
  );
}

export default About;
