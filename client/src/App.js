import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/barraDeTareas/PrimarySearchAppBar";
import Card from "./Components/Card/Card";
import { Box } from "@mui/system";
import imagen from "./image/417134192_7035273036527283_1575827752176715560_n.jpg";
import backImage from "./image/Screenshot_7.png";


function App() {
  let imagenBackground = `url(${backImage})`

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Box
         sx={{
          position: "relative",
          borderRadius: "10px",
          height: "25vh",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: imagenBackground,
            backgroundSize:"contain",
      
          }
        }}
      >
         
          </Box>
      
       <Card />
       <Card />
       <Card />
    </div>
  );
}

export default App;
