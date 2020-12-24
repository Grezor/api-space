import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'block',
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 250,
    height: 100,
    borderColor: 'primary',
    color: theme.palette.text.secondary,
    
  },
  date: {
    color: 'red'
  },
  media: {
    width: 'auto',
    paddingTop: '100%', // 16:9
  },
  box: {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  }
}));

const defaultProps = {
  bgcolor: 'primary',
  m: 1,
  border: 2,
};

function SpaceX() {
  const classes = useStyles();
  
  useEffect(()=> {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v4/launches/upcoming?order=desc');
    const items = await data.json();
    setItems(items);
  }

  return (
    <div>
      <Container fixed>
      <h1>launches</h1>
          <Grid container spacing={3}>
            {items.map(item => (
              <Box borderColor="primary.main"  {...defaultProps} >
              {/* <Grid item xs={6} sm={3} spacing={3}> */}
                <Paper className={classes.paper} >
                <h3 key={item} >{item.name}</h3>
                <p>{item.date_local.substring(0,10)}</p>
               </Paper>
              {/* </Grid> */}
              </Box>
            ))}
        </Grid>
      </Container>
    </div>
  )
}

export default SpaceX
