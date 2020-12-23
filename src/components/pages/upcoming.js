import React, {useState, useEffect} from 'react';

function SpaceX() {
  
  useEffect(()=> {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
    const items = await data.json();
    setItems(items);
  }

  return (
    <div>
      <h1>launches</h1>
        <ul>
          {items.map(item => (
            <li key={item.name}>
            <h1>{item.name} <em>{item.date_local.substring(0,10)}</em></h1>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default SpaceX
