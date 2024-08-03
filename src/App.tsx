//import Message from './Message';
//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Weather from "./components/Weather";
function App() {
  //let items = ["New York", "San Francisco", "London", "Paris"];

  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  //};

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
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

      <Weather></Weather>
    </>
  );
}

export default App;
