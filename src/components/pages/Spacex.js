import React, {useState, useEffect} from 'react';

function SpaceX() {
  
  useEffect(()=> {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/launches');
    const items = await data.json();
    setItems(items);
  }

  return (
    <div>
      <h1>launches</h1>
        <ul>
          {items.map(item => (
            <li key={item.mission_name}>
              <h1>{item.mission_name} <em>{item.launch_year}</em></h1>
                 {item.launch_date_utc.substring(0,10)}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SpaceX
