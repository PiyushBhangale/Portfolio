import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import '../App.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles= theme=>({
    textcolour:{color: "#fff",
    marginLeft: "1px",
    
    marginRight: "1px",
    position: "static",},
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 140,
       
      },
})
 const CenteredHeader = styled.h4`
  text-align: center;
  font-weight:100;
  margin-bottom: 3.25em;
  font-size: 1.30em;
  `
  
class Skills extends Component{
   
    render(){
        const {classes}= this.props
        return(
            <div className={classes.textcolour}>
               
                <div>
                    <CenteredHeader><code>Hi! I'm Piyush. I'm a software developer based in Pune.</code></CenteredHeader>
                 
                    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
        
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                  head
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
        
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        
      </Grid>
</div>
                   
                </div>
            </div>
        )

    }
 
}

export default withStyles(styles)(Skills);