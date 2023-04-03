import './Team.css';
import React from 'react';
import Member from '../Member';

const Team = (props) => {
    const css = {backgroundColor: props.secondaryColor}
    return(        
        (props.members.length > 0) ? <section className='team' style={css}> 
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='members'>
                {props.members.map(member => <Member key={member.name} backgroundColor={props.primaryColor} name={member.name} role={member.role} image={member.image} />)}               
            </div>      
        </section>
        : ''         
        
    );

}

export default Team