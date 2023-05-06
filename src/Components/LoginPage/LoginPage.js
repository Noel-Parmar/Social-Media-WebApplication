import React, {Component} from 'react';
import './LoginPage.css'
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/Instant.jpg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SIgnUp';


class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            isLogin : true
         }
    }
    changeLogin=()=>{
        if(this.state.isLogin)
        this.setState({isLogin : false});
        else
        this.setState({isLogin : true});
        
    }
    render(){
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main"> 
                            <div>
                                <img src={inst_image} width="400px" height="600px"   />
                            </div>
                            <div>
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage_logo"src={insta_logo}/>
                                    <div className="loginpage_signin">
                                        {
                                            this.state.isLogin ? <SignIn/> : <SignUp/>
                                     
                                        }
                                     
                                        <div className="login_ordiv">
                                            <div className="login_dividor"></div>
                                            <div className="login_or">OR</div>
                                            <div className="login_dividor"></div>
                                        </div>

                                        <div className="login_fb">
                                            <img src={fb} width="15pxs" style={{"marginRight":"5px"}}  />Log in with Facebook</div>
                                        <div className="login_forgt">Forgot password</div>
                                    </div>
                                </div>

                                <div className="loginpage_signupoption">
                                    {
                                        this.state.isLogin ? 
                                    <div className="loginpage_signin">
                                        Don't have an account?<span onClick={this.changeLogin} style={{"fontweight": "bold", "color":"#0395F6"}}> Sign up </span>
                                    </div> :
                                    <div className="loginpage_signup">
                                    Have an account? <span onClick={this.changeLogin} style={{"fontweight": "bold", "color":"#0395F6"}}> Sign in </span>
                                     </div>

                                    }
                                    
                                    
                                </div>
                                <div className="loginpage_downloadsection">
                                    <div >
                                        Get the App 
                                    </div>
                                    <div className="loginpage_option">
                                        <img className="loginpage_dwing"src={appstore} width = "136px"/>
                                        <img className="loginpage_dwing"src={playstore} width = "136px"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default LoginPage;