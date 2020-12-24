import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';


function AllRockets() {
  
  useEffect(()=> {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/rockets?order=desc');
    const items = await data.json();
    setItems(items);
  }

  return (
    <div>
      <Container fixed>
      <h1>launches</h1>
        {items.map(item => (
          <h3>{item.rocket_name} <p>{item.diameter.meters}{item.first_flight}</p></h3>
        ))}
      </Container>
    </div>
  )
}

export default AllRockets
