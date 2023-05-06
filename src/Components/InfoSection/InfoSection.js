import { Avatar } from '@material-ui/core';
import React, {Component} from 'react';
import './InfoSection.css';
import imageSrc from '../../images/pp1.png';

class InfoSection extends Component{
    constructor(props){
        super(props);
        this.state= { }
    }
    render(){
        return( 
            <div>
                <div className='info_container'>
                    <Avatar src={imageSrc} className='info_image'/>
                    <div className='info_content'>
                        <div className='info_username'>
                            Depressedboi_213
                        </div>
                       
                    </div>
                </div>

               </div>
        );
    }
}
export default InfoSection;