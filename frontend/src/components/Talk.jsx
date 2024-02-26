import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Talk() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required id="outlined-required" label="Required" defaultValue="" />
      </Box>
    </div>
  );
}

export default Talk;
