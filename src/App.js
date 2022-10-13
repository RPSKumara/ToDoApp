import "./App.css";
import File from "./components/File";
import ToDo from "./components/ToDo";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          color: "red",
          p: "20px",
          textAlign: "center",
          textShadow: "1px 1px 2px white, 0 0 5px, 0 0 5px white",
          fontSize: "80px",
        }}
      >
        Todo App
      </Typography>
      {/* <File /> */}
      <ToDo />
    </div>
  );
}

export default App;
