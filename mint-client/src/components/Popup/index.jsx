import React from 'react';

const PopupMint = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            {/* x close window */}
            <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
            <div className="pu-content-container">
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

export default PopupMint;
