import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import CardGrid from "./components/card-grid/CardGrid";
import OfflineIndicator from "./components/OfflineIndicator";

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
    <div className="app-container">
      <Header name={name} />
      <main>
        {/* Use main tag for semantic content area */}
        <CardGrid items={shortcuts} />
      </main>
      <OfflineIndicator />
    </div>
  );
}
export default App;
