import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'

const Cart = ({ initialItems }) => {

    const initialState = JSON.parse(window.localStorage.getItem('items'))
    const [items, setItems] = useState(initialState || initialItems)

    useEffect(_ => {
        if (items) window.localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const total = items.reduce((t, item) => t + item.price * item.qty, 0)
        .toFixed(2)
    
    const updateQty = (id, qty) => {
        if (qty < 0) return
        const newItems = items.map(item => {
            if (id === item.id) {
                return {...item, qty}
            }
            return item
        })
        setItems(newItems)
    }

    return (
        <div style={cartStyle}>
            <h3 style={cartTitleStyle}>Shopping Cart</h3>
            <div>
                {items.map(item => (
                    <CartItem
                        key={item.id}
                        {...item}
                        updateQty={updateQty}
                    />
                ))}
            </div>
            <h4 style={cartTotalStyle}>total: ${total}</h4>
        </div>
    )

}

const cartStyle = {
    width: '900px',
    margin: '80px auto',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '7px',
    boxShadow: '1px 2px 3px 0 rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    textAlign: 'right'
}

const cartTitleStyle = {
    borderBottom: 'solid 1px grey',
    paddingBottom: '10px',
    color: 'grey',
    fontSize: '20px',
    fontWeight: '400'
}

const cartTotalStyle = {

}

export default Cart
