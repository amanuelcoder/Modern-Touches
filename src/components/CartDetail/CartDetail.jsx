import './CartDetail.css';
import LineItem from '../LineItem/LineItem';
import { useNavigate } from 'react-router-dom';


export default function OrderDetail({ user, order, handleChangeQty }) {
    const navigate = useNavigate();

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
    <div className="CartDetail">
      <div className="section-heading">
        <h1>Cart</h1>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            <span className="smaller">ORDER {order.orderId}</span>
            {lineItems}
            <section className="total">
              <span className="smaller">{order.totalQty}</span>
              <span className="right">Total: ${order.orderTotal.toFixed(2)}</span>
              <br></br>
                <button
                  className="btn-check"
                  onClick={() => navigate('/cart/checkout')}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
            </section>
          </>
          :
          <>
            <span className='Greeting'>Welcome, {user.name}</span><br></br>
            <div className="hungry">Get yourself a little something </div>
          </>
        }
      </div>
     
    </div>
  );
}