import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function Talk() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div>
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
    </div>
  );
}

export default Talk;
