import React, {Component} from 'react';
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import insta_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import find from '../../images/find.svg';
import message from '../../images/message.svg';
import react from '../../images/love.svg';
import Avatar from '@material-ui/core/Avatar';
import pp from '../../images/pp1.png'

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state= { }
    }
    render(){
        return( 
            <div>
            <div className = "navbar_barContent" >
                <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={3} >
                        <img className="navbar_logo" src={insta_logo} width="105px"/>
                    </Grid>
                    <Grid item xs={4}  >
                        <input text= "text" className='navbar_searchbar' placeholder = "Search" />
                    </Grid>
                    <Grid item xs={2} style = {{"display": "flex"}}>
                        
                        <img className='navbar_image' src={message}width='25px'/>
                        
                        <img className='navbar_image'src={react}width='25px'/>
                        <Avatar src={pp} className='navbar_image' style={{ 'maxWidth':'25px', 'maxHeight':'25px'}}/>
                     
                    </Grid>
                    <Grid item xs={1} >
                    </Grid>
                    
                </Grid>
            </div>
            </div>
        );
    }
}
export default NavBar;