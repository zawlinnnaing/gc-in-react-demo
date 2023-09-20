import { FixedSizeList } from "react-window";
import ListItem from "./ListItem";
import { Item } from "./types";

export default function VirtualList(props: {
  items: Item[];
  memoryLeak: boolean;
}) {
  const { items, memoryLeak } = props;
  return (
    <>
      <FixedSizeList
        style={{
          padding: "5px",
          boxSizing: "border-box",
        }}
        height={window.innerHeight}
        itemCount={items.length}
        itemSize={35}
        width={window.innerWidth}
      >
        {({ style, index }) => (
          <ListItem
            memoryLeak={memoryLeak}
            style={{
              ...style,
              boxSizing: "border-box",
            }}
          >
            {items[index].text}
          </ListItem>
        )}
      </FixedSizeList>
    </>
  );
}
