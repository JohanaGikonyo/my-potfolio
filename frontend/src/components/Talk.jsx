import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import animationData from "./images/Animation - 1709040981241.json";
import Alert from "@mui/material/Alert";
import loadings from "./images/loading.json";
import Lottie from "react-lottie";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Helpers/Helper";
import axios from "redaxios";

function Talk() {
  const [showPassword, setShowPassword] = useState(true);
  const { changeMode } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);

  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("https://my-potfolio-website.onrender.com/signin", {
        email,
        password,
        message,
      });

      if (response.data === "success") {
        setLoading(false);
        setLoadingMessage(true);
      } else {
        alert("not sent");
      }
    } catch (e) {
      console.error("An error occurred", e);
    }
  };

  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo(0, 0);
    const loadingTimer = setTimeout(() => {
      setLoadingMessage(false);
      loadingMessage ? history("/") : "";
    }, [2000]);

    return () => clearTimeout(loadingTimer);
  }, [loadingMessage, history]);

  return (
    <div
      className={`${
        changeMode
          ? "text-white   p-0 rounded lg:flex lg:flex-row justify-around"
          : "flex flex-col items-center lg:flex lg:flex-row justify-around"
      } `}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        className={`${
          changeMode
            ? " flex flex-col items-center gap-5 m-3"
            : "bg-white flex flex-col items-center gap-5 m-3 lg:w-[25%] z-40 rounded p-5 shadow-slate-400 shadow-md relative"
        }`}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className=" sticky z-50 absolute left-[25%] top-[50%] text-green-800 bg-white">
          {" "}
          {loading ? (
            <h1>
              <span className="flex items-center">
                Wait...
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: loadings,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  width={100}
                  height={100}
                />
              </span>
            </h1>
          ) : (
            ""
          )}
          {loadingMessage ? (
            <Alert variant="filled" severity="success">
              Sent Successively.Thank you!
            </Alert>
          ) : (
            ""
          )}
        </div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type={`${showPassword ? "password" : "text"}`}
          id="outlined-required"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          defaultValue=""
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? (
                  <RemoveRedEyeIcon onClick={() => setShowPassword((prev) => !prev)} className="hover:cursor-pointer" />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="hover:cursor-pointer"
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          onChange={(e) => setMessage(e.target.value)}
          multiline
          maxRows={10}
          variant="standard"
        />
        <TextField type="submit" className="cursor-pointer" />
      </Box>
      <div className="text-black">
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
          Let`s Talk:<span className="text-orange-500">+254740550484</span>
        </div>
        Email:{" "}
        <a href="mailto:johanagikonyo552@gmail.com" className="text-orange-500">
          johanagikonyo552@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Talk;
