import { useEffect, useRef } from "react";
import { memoryLeaks } from "./constants";

export default function ListItem(
  props: React.PropsWithChildren<{
    memoryLeak: boolean;
    style?: React.CSSProperties;
  }>
) {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (props.memoryLeak && itemRef.current) {
      memoryLeaks.push(itemRef.current);
    }
  }, [props.memoryLeak]);

  return (
    <li className="list-item" ref={itemRef} style={props.style}>
      {props.children}
    </li>
  );
}
