import { useDeferredValue, useMemo } from "react";

const List = ({input}) => {
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    let l = [];
    const LIST_SIZE = 10000;
    if (deferredInput !== ""){
      for (let i = 0; i < LIST_SIZE; i++){
        l.push(<div key={i}>{deferredInput}</div>)
      }
    }
  
    return l;
  }, [deferredInput]);

  return list;
}

export default List;