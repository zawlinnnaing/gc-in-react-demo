import "./App.css";
import ListItem from "./ListItem";
import { Item } from "./types";

export default function List({
  items,
  memoryLeak,
}: {
  items: Item[];
  memoryLeak: boolean;
}) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.id} memoryLeak={memoryLeak}>
          {item.text}
        </ListItem>
      ))}
    </ul>
  );
}
