import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/barraDeTareas/PrimarySearchAppBar";
import { Box } from "@mui/system";
import backImage from "./image/Screenshot_7.png";
import "./Components/NewProduct/NewProduct"
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import NewForm from "./Views/NewForm"



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
            backgroundSize: "contain",

          }
        }}
      >

      </Box>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<NewForm/>}/>


      </Routes>




    </div>
  );
}

export default App;
