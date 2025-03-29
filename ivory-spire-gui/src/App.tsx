import "./App.css";
import React, { useEffect, useState } from "react";

type Shortcut = {
  title: string;
  url: string;
  icon: string;
};

function App() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  useEffect(() => {
    fetch("/shortcuts.json")
      .then((response) => response.json())
      .then((data) => setShortcuts(data.shortcuts));
  }, []);

  return (
    <div className="shortcuts-container">
      <div className="name"> MAGILAN </div>{" "}
      {shortcuts.map((shortcut) => (
        <a href={shortcut.url} className="shortcut-card">
          <img
            src={shortcut.icon}
            alt={shortcut.title}
            className="shortcut-image"
          />
          <span className="shortcut-title"> {shortcut.title} </span>
        </a>
      ))}
    </div>
  );
}
export default App;
