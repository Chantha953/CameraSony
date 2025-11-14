import React from "react";
import OrderItem from "../components/OrderItem";
const OrderPage =()=>{
    return (
        <div className="container" style={{transform : "translateY(6rem)"}}>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
        </div>
    )
}

export default OrderPage;