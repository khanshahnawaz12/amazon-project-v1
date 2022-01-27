import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)

    const handleSubmit = e => {

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (


        <div className='payment'>
            <div className='payment__container'>

                { /*Dilivery Address*/}

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Dilevery Address: </h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p> address yaha liko kripya karke</p>
                        <p> building no 45 A wing</p>
                        <p> Room No 690</p>
                    </div>
                </div>

                { /*cart review */}

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review your Item in cart:</h3>
                    </div>
                    <div className='payment__item'>
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />

                        ))}
                    </div>
                </div>

                { /*Payment Gateway*/}

                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Payment Method:</h3>
                    </div>
                    <div className="payment__detail">

                        {/* Stripe Secrete code*/}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>Subtotal ({cart.length} items):<strong>{value}</strong> </p>
                                            <small className="subtotal__gift">
                                                <input type="checkbox" /> This order contain a gift
                                            </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />

                                {/* <button disabled = {processing || succeeded || disabled}> this button is used for disable the buy now button */}
                                <button disabled = {processing || succeeded }>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
    ;
