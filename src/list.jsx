import { useEffect, useState } from "react"

const List = ({getItems}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log('Item change called');
    setItems(getItems());
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <div key={`item-${item}`}>{item}</div>
      ))}
    </>
  )
}

export default List;