function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris"];
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
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(item, index)}
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
