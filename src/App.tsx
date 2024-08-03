//import Message from './Message';
//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  //let items = ["New York", "San Francisco", "London", "Paris"];

  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  //};

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color={"warning"}>
        Ayo
      </Button>
    </div>
  );
}

export default App;
