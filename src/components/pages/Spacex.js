import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

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
}));

function SpaceX() {
  const classes = useStyles();
  
  useEffect(()=> {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/launches?order=desc')
    const items = await data.json()
    setItems(items);
  }

  return (
    <div>
      <Container fixed>
        <h1>launches</h1>
          <Grid container spacing={3}>
            {items.map(item => (
              <Grid item xs={6} sm={3} spacing={3} >
                <CardMedia
                  className={classes.media}
                  image={item.links.mission_patch}
                  title="Paella dish"
                />
                <Paper className={classes.paper} key={item.mission_name} borderColor="primary.main">
                <h3>{item.mission_name} <em>{item.launch_year}</em></h3>
                <p className={classes.date}>{item.launch_date_utc.substring(0,10)}</p>
               </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
  </div>
  )
}

export default SpaceX
