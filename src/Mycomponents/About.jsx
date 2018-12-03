import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles={
    textcolour:{color: "#141212"},
}
class About extends Component{
   
    render(){
        const {classes}= this.props
        return(
            <div>
                <h1 className={classes.textcolour} >About</h1>
            </div>
        )

    }
 
}

export default withStyles(styles)(About);