import { useEffect, useState, useRef } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([])
  const fetchedResource = useRef('');
  useEffect(() => {
    if (fetchedResource.current !== resourceType){
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(data => {
          setItems(data);
        });
        fetchedResource.current = resourceType;
    }
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1
        style={{
          textTransform: 'capitalize'
        }}
      >{resourceType}</h1>
      {items.map((item) => (
        <div key={`item${item.id}`}>{JSON.stringify(item)}</div>
      ))}
    </>
  )
}

// function App(){
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     }
//   }, [])

//   return (
//     <div 
//       className="App"
//       style={{
//         fontSize: "2rem"
//       }}
//     >
//       {windowWidth}
//     </div>
//   )
// }

export default App;