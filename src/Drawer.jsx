import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ImageAvatars from './Avtar'
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import WorkIcon from '@material-ui/icons/Work'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'
import About from './Mycomponents/About'
const styles = {
    list: {
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
        marginTop:"15px",
       
    },
    grow: {
      flexGrow: 1,
      marginTop:"20px",
      textAlign:"center",
  },
    
};


class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false,
    right: false,
  };
 
 

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render() {
    const { classes } = this.props;
    

    const sideList=this.props.sideList

    const fullList = (
      <div className={classes.fullList}>
        <List>
          
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button className={classes.btnleft} onMouseEnter={this.toggleDrawer('left', true)} onClick={this.toggleDrawer('left', true)}><ViewHeadlineIcon fontSize={"large"} className={classes.iconColor}/></Button>
        <Button className={classes.btnright} onMouseEnter={this.toggleDrawer('right', true)} onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Typography variant="h4" color="inherit" className={classes.grow}>
           <code>Portfolio</code>
        </Typography>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);