import React from "react";
import CartItem from "../components/CartItem";
import { Outlet, useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div className="container shoppingCart">
          <div
            className="row text-white g-2 border px-2 bg-blur rounded"
            style={{ paddingBottom : "0.5rem", padding : "0,0.8rem"}}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <div className="col-12 col-md-8 h-100 hide-scrollbar">
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <h2>Shopping Cart</h2>
                <p className="text-white fs-5">
                  <span className="fw-medium">1</span> Item
                </p>
              </div>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div
              className="col-12 col-md-4"
            >
              <div className="cart border h-100 px-3 py-1 rounded" style={{maxHeight: "80vh"}}>
                <h2>Order Summary</h2>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <p>Subtotal</p>
                  <p>479.49$</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p>Discount</p>
                  <p style={{ color: "#00ff15ff" }}>-20$</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p>Shipping</p>
                  <p>479.49$</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold">1000$</p>
                </div>
                <div className="mt-4">
                  <button className="btn text-white border w-100 fw-medium rounded-5 btnCheckout" onClick={()=>navigate("/checkout")}>
                    Proceed to Checkout
                  </button>
                  <div className="text-center mt-3">
                    <i class="fa-solid fa-circle-check text-success me-2"></i>{" "}
                    Secure checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
