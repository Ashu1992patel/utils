import React, { useState } from "react";
import Alert from "./common/Alert";
import Navbar from "./common/Navbar";
import Utility from "./Utility";

export default function Wrapper() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (alertType, alertMessage) => {
    setAlert({
      type: alertType,
      message: alertMessage,
    });
    setTimeout(() => {
      setAlert(null);
      setInterval(() => {
        document.title = "Alert Activated";
      }, 2000);
    }, 2000);

    setInterval(() => {
      document.title = "Yeah!";
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#534d6e";
      document.body.style.color = "white";
      showAlert("success", "Dark mode has been activated.");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "Light mode has been activated.");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Utility mode={mode} showAlert={showAlert} />
    </>
  );
}
