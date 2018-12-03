import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import SwipeableTemporaryDrawer from './Drawer'
import AppBar from '@material-ui/core/AppBar';
import About from './Mycomponents/About'
import ImageAvatars from './Avtar'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import WorkIcon from '@material-ui/icons/Work'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Work from './Mycomponents/Work'
const styles={
  barstyles:{
    height: "50px",
    backgroundColor: "#2e3039",
  },list: {
    width: 250,
},
fullList: {
    width: 'auto',
},
btnleft:{
    float: 'left',},
btnright:{
float: 'right',},
iconColor:{
    color: "#fff",
   
}
};
class App extends Component {
  state={
    page:"About",
  }
  clicked=(text)=>{
    console.log(text,"check")
    this.setState({
      page:text,
    })
  
    
    }
  render() {
    const {classes} = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>

          <ImageAvatars/>
        </List>
        <Divider />
        <List>
          {['About', 'Work', 'Spam'].map((text, index) => (
            <ListItem button key={text}  onClick={this.clicked.bind(this,text)}>
              <ListItemIcon> {index === 0 ?<AccountBoxIcon />:index === 1? <WorkIcon />:null}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className="App">
      <AppBar className={classes.barstyles} position="static" >
       <SwipeableTemporaryDrawer sideList={sideList}/>
      {this.state.page === "About"?
      <About>

      </About>:
      this.state.page === "Work"?
      <Work>

      </Work>:null
      }
         
    
      </AppBar>
        
      </div>
    );
  }
}

export default withStyles(styles)(App);
