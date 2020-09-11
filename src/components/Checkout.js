import React, {useState} from 'react';

// styling
import './Checkout.css';

// components
import PopUp from './PopUp';

const Checkout = () => {
    const [popUp, setPopUp] = useState(false)

    const handleCheckout = () => {
        setPopUp(true)
    }

    const duringPopUp = popUp ? " during-popup" : ""
    
    return (
        <div className={"Checkout" + duringPopUp}>
            <div className="nav"> 
                <h1>Cart</h1> 
            </div>
        <div className={"cart" + duringPopUp}>            
            <table >
                <tr className={duringPopUp}>
                    <th className={duringPopUp}>Item</th>
                    <th className={duringPopUp}>Quantity</th>
                    <th className={duringPopUp}>Price</th>
                </tr>
                <tr>
                    <td>Cabbage</td>
                    <td>x1</td>
                    <td>$1.00</td>
                </tr>
                <tr>
                    <td>Tofu</td>
                    <td>x1</td>
                    <td>$3.00</td>
                </tr>
                <tr>
                    <td>Bones</td>
                    <td>x4</td>
                    <td>$20.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="total"> $24.00</td>
                </tr>
            </table>
            <button onClick={handleCheckout} className={duringPopUp}>Checkout!</button>
        </div>
            {popUp && <PopUp setPopUp={setPopUp}/>}
        </div>
    );
}

export default Checkout;
