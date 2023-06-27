import React from "react";

function App() {
  const styleGreet = {
    display: "flex",
    alignItems: "Center",
    justifyContent: "center",
    height: "100vh",
  };
  const changeColor = {};
  const time = new Date();
  const hours = time.getHours();

  const greet = () => {
    if (hours >= 1 && hours < 12) {
      changeColor.color = "pink";
      return "good morning";
    } else if (hours >= 12 && hours < 18) {
      return "good afternoon";
      changeColor.color = "green";
    } else if (hours >= 18 && hours < 20) {
      return " good evening";
      changeColor.color = "red";
    } else {
      return " good night";
      changeColor.color = "yellow";
    }
  };
  const h1Style = {
    height: "5vh",
    // backgroundColor: "black",
    color: "black",
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
