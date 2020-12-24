import React from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none'
  }
}));
const navStyle = {
  color: 'white',
  
};
const classes = useStyles();
  return (

    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Link style={navStyle} className={classes.menuButton} to='/contact'>
          Contact
        </Link>
        <Link style={navStyle} className={classes.menuButton} to='/about' >  
          About   
        </Link>
        <Link style={navStyle} className={classes.menuButton} to='/spacex'>  
          SpaceX  
        </Link>
        <Link style={navStyle} className={classes.menuButton} to='/upcoming'>  
          news lunches
        </Link>
        <Link style={navStyle} className={classes.menuButton} to='/allrockets'>  
          all rockets
        </Link>
      </Toolbar>
    </AppBar>
    
  )
}

export default Nav