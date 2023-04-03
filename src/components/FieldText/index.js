import React from 'react';
import './FieldText.css'

const FieldText = (props) => {

    const placeholderModificada = `${props.placeholder}...`;    
    
    const whenTyped = (e) => {
        props.whenChanged(e.target.value)

    }


    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder= {placeholderModificada}/>
        </div>


    );


}

export default FieldText;