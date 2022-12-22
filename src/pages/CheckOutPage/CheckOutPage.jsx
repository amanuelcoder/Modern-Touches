import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
import LineItem from "../../components/LineItem/LineItem";
import './CheckOutPage.css'

export default function CheckOutPage ({order, handleChangeQty, handleCheckout}) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );

    return (
        <>
        <h6>Cart Checkout</h6>
        <div className="checkout-page">
        <CheckOutForm handleCheckout={handleCheckout}/>
            <section className="checkout-items">
                <span className="Order">ORDER <span className="smaller">{order.orderId}</span></span>
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
                    {lineItems}
                <span>{order.totalQty}</span>
                <span className="right1">Total: ${order.orderTotal.toFixed(2)}</span>
                <br></br>
            </section>
      </div>
      </>
    );
}