import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import SwipeableTemporaryDrawer from './Drawer'
import AppBar from '@material-ui/core/AppBar';
import About from './Mycomponents/About'
import styled from 'styled-components';
import Skills from './Mycomponents/Skills'
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
    height: "90px",
    backgroundColor: "#000",
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
const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1em;
  
`;
const ContainerDiv = styled.div`
  margin: 6% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  `
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
          {['About', 'Work', 'Skills'].map((text, index) => (
            <ListItem button key={text}  onClick={this.clicked.bind(this,text)}>
              <ListItemIcon> {index === 0 ?<AccountBoxIcon />:index === 1? <WorkIcon />:null}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <AppDiv className="AppDiv ">
      <div className="overlay">
      <AppBar className={classes.barstyles} position="static" >
      
       <SwipeableTemporaryDrawer sideList={sideList}/>
       <ContainerDiv>
      {this.state.page === "About"?
      
      <About>
    
      </About>:
      this.state.page === "Work"?
      <Work>

      </Work>:
      this.state.page === "Skills"?
      <Skills>

      </Skills>:null
      
      }
         
      </ContainerDiv>
      </AppBar>
      </div>
      </AppDiv>
    );
  }
}

export default withStyles(styles)(App);
