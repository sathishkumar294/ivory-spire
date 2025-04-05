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
    <div className="mx-auto p-4 w-full">
      <div className="name-container font-bold mb-4 text-center">
        <div className="name name-effects">
          {Array.from(name).map((char) => (
            <span className="text-[4rem]">{char}</span>
          ))}
        </div>
      </div>
      <div className="shortcuts-container grid gap-1 justify-center">
        {shortcuts.map((shortcut, i) => (
          <a
            href={shortcut.url}
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            target="_blank"
          >
            <div className="w-full aspect-square bg-gray-100">
              <img
                src={shortcut.icon}
                alt={shortcut.title}
                className="w-full h-full object-cover p-2"
              />
            </div>
            <div className="p-2 text-center font-medium text-sm kids-font">
              {shortcut.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default App;
