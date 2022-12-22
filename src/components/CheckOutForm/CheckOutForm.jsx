import { useState } from "react";
import './CheckOutForm.css'

export default function CheckOutForm({handleCheckout}) {
    const [checkoutForm, setCheckoutForm] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });

    function handleChange (evt) {
        const checkOutData = {...checkoutForm, [evt.target.name]: evt.target.value};
        setCheckoutForm(checkOutData);
    }

    return (
        <form className="checkout-form" onSubmit={(evt) => handleCheckout(evt, checkoutForm)}>
            <div className="inputBox1">
            <label>Full Name</label>
            <input type="text"
                name="name"
                value={checkoutForm.name}
                onChange={handleChange} 
                required
            />
            </div>
            <div className="inputBox1">
            <label>Address</label>
            <input type="text"
                name="address"
                value={checkoutForm.address} 
                onChange={handleChange}
                required
            />
            </div>
            <div className="inputBox1">
            <label className="inputBox1">City</label>
            <input type="text"
                name="city"
                value={checkoutForm.city} 
                onChange={handleChange}
                required
            />
            </div>
            <div className="inputBox1">
            <label>State</label>
            <input type="text"
                name="state"
                value={checkoutForm.state} 
                onChange={handleChange}
                required
            />
            </div>
            <div className="inputBox1">
            <label>Zip</label>
            <input type="number"
                name="zip"
                value={checkoutForm.zip}
                onChange={handleChange} 
                required
            />
            </div>
            <button
                className="btn3"
                type="submit"
                >CHECKOUT
            </button>
    </form>
    );
}