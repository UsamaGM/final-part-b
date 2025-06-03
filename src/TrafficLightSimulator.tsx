import { useEffect, useState } from "react";

function TrafficLightSimulator() {
  const [light, setLight] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLight((light + 1) % 3);
    }, 1000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  });

  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D1B1D",
      }}
    >
      <p style={{ color: "white", fontFamily: "sans-serif" }}>
        Traffic Light Simulator
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#2E2D2E",
          width: "fit-content",
          gap: 10,
          padding: 35,
          borderRadius: 20,
        }}
      >
        <div
          style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: light === 0 ? "red" : "#525152",
            transition: "all 350ms ease-in-out",
            boxShadow: light === 0 ? "0 0 20px red" : "",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: light === 1 ? "yellow" : "#525152",
            transition: "all 350ms ease-in-out",
            boxShadow: light === 1 ? "0 0 20px yellow" : "",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: light === 2 ? "green" : "#525152",
            transition: "all 350ms ease-in-out",
            boxShadow: light === 2 ? "0 0 20px green" : "",
          }}
        />
      </div>
    </div>
  );
}

export default TrafficLightSimulator;
