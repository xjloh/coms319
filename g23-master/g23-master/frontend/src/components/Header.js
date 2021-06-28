import React from 'react';
import Cyclone from "../assets/CycloneIndexLogo.png";
import CycloneReversed from "../assets/CycloneIndexLogoReversed.png";

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                    <img src={Cyclone} className="image_header"/>   SoCYety   <img src={CycloneReversed} className="image_header"/>
            </div>
        );
    }
}
export default Header;