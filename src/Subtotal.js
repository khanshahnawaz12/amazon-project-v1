import React from 'react';
import "./Subtotal.css";


function Subtotal() {
    return (
        <div className="subtotal">
            <p>Subtotal (0 item):<strong>0</strong> </p> 
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contain a gift 
            </small>
            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal