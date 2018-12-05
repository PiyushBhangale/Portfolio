import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import '../App.css'
const styles={
    textcolour:{color: "#fff",
    marginLeft: "1px",
    
    marginRight: "1px",
    position: "static",},
}
 const CenteredHeader = styled.h4`
  text-align: center;
  font-weight:100;
  margin-bottom: 3.25em;
  font-size: 1.30em;
  `
  
class About extends Component{
   
    render(){
        const {classes}= this.props
        return(
            <div className={classes.textcolour}>
               
                <div>
                    <CenteredHeader><code>Hi! I'm Piyush. I'm a software developer based in Pune.</code></CenteredHeader>
                 
                    <p>
                    I am a Software Engineer specializing in backend/infrastructure and web development.The one who loves Mac/Linux and enjoys to customize all of the development environment. 
                    </p>
                    <p>Interested in devising a better problem-solving method for challenging tasks, and learning new technologies and tools if the need arises.</p>
                    <p>I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of code and design.</p>
                    <p>Outside of code, I like to create in other ways. From <a className="link" href="https://medium.com/@sophiaciocca/latest" target="_blank">blogging</a> to <a className="link" href="https://www.youtube.com/channel/UChfrVcFHC-mfoqrJHuOYt-Q" target="_blank">music-making</a>  to <a  className="link" href="https://www.instagram.com/sidewalk_poetry/" target="_blank">helping people out on Quora</a>. I'm always trying new ways of expressing myself. I also like to workout, talk to strangers, and run lifestyle experiments.</p>
                    <p>I also hold a degree in Information Techonology from Savitribai Phule University (Pune University) and completed the same from Pune Institute Of Computer Techonology (PICT) in 2017.</p> 
                   
                </div>
            </div>
        )

    }
 
}

export default withStyles(styles)(About);