import { faker } from "@faker-js/faker";
import { range } from "lodash";
import { useState } from "react";
import "./App.css";
import List from "./List";
import VirtualList from "./VirtualList";
import { Item } from "./types";
import { clearLeaks } from "./constants";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [enableLeak, setEnableLeak] = useState<boolean>(false);
  const [enableVirtual, setEnableVirtual] = useState<boolean>(false);

  function generateItems() {
    const generatedItems = range(0, count).map((val, idx): Item => {
      return {
        id: idx,
        text: `${(val += 1)} - ${faker.animal.bird()}`,
      };
    });

    setItems(generatedItems);
  }

  function handleMemoryLeak(event: React.ChangeEvent<HTMLInputElement>) {
    setEnableLeak(event.target.checked);
  }

  const RenderList = enableVirtual ? VirtualList : List;

  return (
    <>
      <div className="form-section">
        <input
          className="form-item"
          type="number"
          min={0}
          onChange={(event) => {
            setCount(parseInt(event.target.value, 10));
          }}
        />
        <div className="form-item">
          <label>Memory Leak</label>
          <input type="checkbox" onChange={handleMemoryLeak} />
        </div>
        <div className="form-item">
          <label>Virtual list</label>
          <input
            type="checkbox"
            onChange={(event) => {
              setEnableVirtual(event.target.checked);
            }}
          />
        </div>
        <button onClick={generateItems} className="form-item">
          Generate
        </button>
        <button onClick={clearLeaks} className="form-item">
          Force GC
        </button>
      </div>
      <RenderList items={items} memoryLeak={enableLeak} />
    </>
  );
}

export default App;
