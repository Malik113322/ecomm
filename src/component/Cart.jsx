import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

    const { cartItems, subtotal, shipping, tax, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const increment = (id) => {
        dispatch({
            type: 'addToCart',
            payload: { id }
        })

        dispatch({type: 'calculateItems'})
    }

    const decrement = (id) => {
        dispatch({
            type: 'decrement',
            payload: id
        })

        dispatch({type: 'calculateItems'})
    }

    const deleteHandler = (id) => {
        dispatch({
            type: 'deleteItem',
            payload: id
        })

        dispatch({type: 'calculateItems'})
    };

    return (
        <div className="cart">
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map(i => (
                            <CartItem

                                key={i.id}
                                id={i.id}
                                imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                decrement={decrement}
                                increment={increment}
                                deleteHandler={deleteHandler}

                            />
                        ))
                    ) : <h1 style={{color: 'white'}}>No Items</h1>
                }
            </main>

            <aside>
                <h2>Subtotal: ${subtotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({ name, price, imgSrc, id, qty, details, decrement, increment, deleteHandler }) => (
    <div className="cartitem">
        <img src={imgSrc} alt="" />
        <article>
            <h4>{name}</h4>
            <p>${price}</p>

        </article>

        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>
            <AiFillDelete onClick={() => deleteHandler(id)} />
        </div>

        

    </div>
)

export default Cart;
