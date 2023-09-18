import { useEffect, useRef } from "react";
import "./App.css";
import { memoryLeaks } from "./constants";

function ListItem(props: React.PropsWithChildren<{ memoryLeak: boolean }>) {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (props.memoryLeak && itemRef.current) {
      memoryLeaks.push(itemRef.current);
    }
  }, [props.memoryLeak]);

  return (
    <li className="list-item" ref={itemRef}>
      {props.children}
    </li>
  );
}

export default function List({
  items,
  memoryLeak,
}: {
  items: string[];
  memoryLeak: boolean;
}) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item} memoryLeak={memoryLeak}>
          {item}
        </ListItem>
      ))}
    </ul>
  );
}
