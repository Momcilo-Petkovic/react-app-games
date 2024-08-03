import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*items = [];
  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
  }*/

  return (
    <>
      {/*items.length === 0 && <p>No item found</p>*/}
      {/*Same if from above just nested*/}
      <h1>{heading}</h1>
      <ul className={"list-group"}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
