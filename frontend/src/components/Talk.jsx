import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useContext, useState } from "react";
import { Context } from "../Helpers/Helper";

function Talk() {
  const [showPassword, setShowPassword] = useState(true);
  const { changeMode } = useContext(Context);
  return (
    <div className={`${changeMode ? "text-white bg-slate-200  p-0 rounded" : ""}`}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        className="flex flex-col items-center gap-5 m-3"
        autoComplete="off"
      >
        <TextField required id="outlined-required" label="Email" defaultValue="" />
        <TextField
          type={`${showPassword ? "password" : "text"}`}
          id="outlined-required"
          label="password"
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
        <TextField id="standard-multiline-flexible" label="Message" multiline maxRows={10} variant="standard" />
        <TextField type="submit" />
      </Box>
      <div>
        Email:{" "}
        <a href="mailto:johanagikonyo552@gmail.com" className="text-orange-500">
          johanagikonyo552@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Talk;
