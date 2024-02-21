import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/barraDeTareas/PrimarySearchAppBar";
import Card from "./Components/Card/Card";
import { Box } from "@mui/system";
import imagen from "./image/417134192_7035273036527283_1575827752176715560_n.jpg";
import backImage from "./image/9666d6952c150d93bceea187aa91848e.jpg";
import Typography from "@mui/material/Typography";


function App() {
  let imagenBackground = `url(${imagen})`;
  let imagenBackground1 = `url(${backImage})`;
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
            zIndex: -1,
          }
        }}
      >
          <div
          style={{
            position: "absolute",
            top:'10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
            backgroundImage: imagenBackground1,
            backgroundSize: "contain",
            filter: "blur(5px)", // Ajusta el valor de blur según tus necesidades
            zIndex: -1,
          }}
        ></div>
        
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'Protest Strike',
              position: "relative",
              zIndex: 1,
              color: "#25D366",
            
    
            }}
          >
            ESTILoSMART
          </Typography>
          </Box>
      
       <Card />
    </div>
  );
}

export default App;
