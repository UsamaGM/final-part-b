function TrafficLightSimulator() {
  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D1B1D",
      }}
    >
      <div
        style={{
          gap: 15,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#2E2D2E",
          width: "fit-content",
          padding: "15px 25px",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: "yellow",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        />
      </div>
    </div>
  );
}

export default TrafficLightSimulator;
