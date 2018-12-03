import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CodeIcon from '@material-ui/icons/Code';
import { black } from 'material-ui/styles/colors';


const styles = {
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    color: '#fff',
    backgroundColor: black,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container direction="column" justify="space-evenly" alignItems="center">
        <Grid item xs={12}>
            <h3 >Piyush Bhangale</h3>
        </Grid>
        <Grid item xs={12}>
            <Avatar  className={classes.bigAvatar} >
            <CodeIcon />
            </Avatar>
        </Grid>
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);