import React from 'react';
// styling
import './Checkout.css';
// images
import bone from './bone.png'

const PopUp = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            {/* x close window */}
            <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
            <div className="pu-content-container">
                <img className="pu-img" src={bone} alt="bone" />
                <h1>Add more bones?</h1>
            </div>
            {/* button controls */}
            <div className="pu-button-container">
                <button onClick={()=> setPopUp(false)}> MORE BONES! </button>
                <button onClick={()=> setPopUp(false)}> No, thank you. </button>
            </div>
        </div>
    );
}

export default PopUp;
