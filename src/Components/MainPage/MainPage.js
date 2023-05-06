import React, {Component} from 'react';
import './MainPage.css';
import Post from '../Post/Post';
import uploadImage from '../../images/Download.png';

import {storage} from "../firebase";
import {auth} from "../firebase";


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
            postArray:[]   
         }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{ //API
        const thisContext=this;
       

        fetch('http://localhost:8080/post')
            .then(response => response.json())
            .then(data => {
                thisContext.setState({postArray: data});
        });
    }

    upload=(event)=>{
        let image=event.target.files[0];
        const thisContext=this;
        if(image == null || image == undefined)
            return;

        var uploadTask = storage.ref("images").child(image.name).put(image);
        uploadTask.on(
          "state_changed",
          function (snapshot) {
           
          },
          function (error) {
          },
          function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log(downloadURL);
                alert("chup saale");

                let payload = {
                    "postId": Math.floor(Math.random()*100000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postPath": downloadURL,
                    "timeStamp": new Date().getTime(),
                    "likeCount": 0
                }
    
                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                }
    
                 fetch("http://localhost:8080/post",requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    thisContext.getPost();
                })
                .catch(error =>{
    
                })
                
            })
            }
        );
    }

    render() { 
        return ( 
            <div>
                <div className="mainpage__container">  
                  
                    <div className="fileupload">
                        <label for="file-upload" >
                            <img className="mainpage__uploadicon" src={uploadImage} />
                        </label>
                         <input onChange={this.upload} id="file-upload" type="file" />
                     </div>
                
                </div>
              
                {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postPath} likes={item.likeCount} />
                    ))
                }
            </div>
         );
    }
}
 
export default MainPage;




