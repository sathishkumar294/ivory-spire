import "./App.css";
import { useEffect, useState } from "react";

type Shortcut = {
  title: string;
  url: string;
  icon: string;
};

function App() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    fetch("/shortcuts.json")
      .then((response) => response.json())
      .then((data) => {
        setShortcuts(data.shortcuts);
        setName(data.name);
      });
  }, []);

  return (
    <div className="shortcuts-container">
      <div className="name name-effects">
        {Array.from(name).map((char) => (
          <span>{char}</span>
        ))}{" "}
      </div>{" "}
      {shortcuts.map((shortcut) => (
        <a href={shortcut.url} className="shortcut-card" target="_blank">
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
