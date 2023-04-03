import React from "react";
import './Member.css';

const Member = ({name, role, image, backgroundColor}) => {
    return(
        <div className="member">
            <div className="header-member" style={{backgroundColor: backgroundColor}}>
                <img src={image}  alt={name}/>
            </div>
            <div className="footer-member">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}

export default Member;