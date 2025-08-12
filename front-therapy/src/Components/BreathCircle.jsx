import React from "react";

export default function BreathingCircleTab({ onClose }) {
  const [isInhale, setIsInhale] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsInhale(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick ={onClose}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        className={`breathing-circle ${isInhale ? "inhale" : "exhale"}`}
      ></div>
      <p style={{ fontSize: "2rem", fontWeight: "bold", color: "white", marginTop: "20px" }}>
        {isInhale ? "Inhale..." : "Exhale..."}
      </p>
    </div>
  );
}