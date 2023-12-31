import React from "react";

function App() {
  const styleGreet = {
    display: "flex",
    alignItems: "Center",
    justifyContent: "center",
    height: "100vh",
  };
  const h1Style = {
    gap: "10px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40vw",
    height: "10vh",
    backgroundColor: "pink",
    color: "black",
  };
  const changeColor = {};
  const time = new Date();
  const hours = time.getHours();

  const greet = () => {
    if (hours >= 1 && hours < 12) {
      changeColor.color = "pink";
      return "good morning";
    } else if (hours >= 12 && hours < 18) {
       changeColor.color = "green";
      return "good afternoon";
    } else if (hours >= 18 && hours < 20) {
       changeColor.color = "red";
      return " good evening";
    } else {
      changeColor.color = "yellow";
      return " good night"; 
    }
  };
  return (
    <div className="" style={styleGreet}>
      <h1 style={h1Style}>
        hello sir,<span style={changeColor}> {greet()}</span>
      </h1>
    </div>
  );
}

export default App;
