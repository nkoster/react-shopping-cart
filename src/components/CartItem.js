import React from 'react'

const CartItem = ({ id, name, price, qty, updateQty }) => {
    return (
        <div style={itemStyle}>
            <div style={divStyle}>{name}</div>
            <div style={divStyle}>${price.toFixed(2)}</div>
            <div style={{...divStyle, display: 'flex', flexDirection: 'row'}}>
                <button
                    disabled={qty > 0 ? false : true}
                    onClick={_ => updateQty(id, qty - 1)}
                >-</button>
                <div>{qty}</div>
                <button onClick={_ => updateQty(id, qty + 1)}>+</button>
            </div>
            <div style={divStyle}>${(qty * price).toFixed(2)}</div>
        </div>
    )
}

const itemStyle = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    fontSize: '22px'
}

const divStyle = {
    width: '25%',
    padding: '10px'
}

export default CartItem
