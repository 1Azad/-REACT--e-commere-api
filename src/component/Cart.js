import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            {state}
        </div>
    )
}

export default Cart
