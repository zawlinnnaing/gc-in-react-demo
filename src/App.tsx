import { faker } from "@faker-js/faker";
import { range } from "lodash";
import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const [enableLeak, setEnableLeak] = useState<boolean>(false);

  function generateItems() {
    const generatedItems = range(0, count).map(
      (val) => `${(val += 1)} - ${faker.animal.bird()}`
    );

    setItems(generatedItems);
  }

  function handleMemoryLeak(event: React.ChangeEvent<HTMLInputElement>) {
    setEnableLeak(event.target.value === "true");
  }

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
          <input
            type="radio"
            value="true"
            name="Enable"
            onChange={handleMemoryLeak}
          />
          Enable
          <input
            type="radio"
            value="false"
            name="Disable"
            onChange={handleMemoryLeak}
          />
          Disable
        </div>
        <button onClick={generateItems}>Generate</button>
      </div>
      <List items={items} memoryLeak={enableLeak} />
    </>
  );
}

export default App;
