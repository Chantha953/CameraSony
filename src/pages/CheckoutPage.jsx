import React, { useState } from "react";
import aba from "../assets/images/aba.png";
import acleda from "../assets/images/acleda.png";
import sathapana from "../assets/images/sathapana.png";
import wing from "../assets/images/wing.png";
import CardProductCheckout from "../components/CardProductCheckout";
const CheckoutPage = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const bank = [
    { id: 1, img: aba },
    { id: 2, img: wing },
    { id: 3, img: acleda },
    { id: 4, img: sathapana },
  ];
  return (
    <div
      className="container text-white d-flex justify-content-center align-items-center px-5"
      style={{
        transform: "translateY(5.6rem)",
      }}
    >
      <div className="row border bg-blur rounded">
        <div className="col-12 col-md-6 px-5 py-4">
          <p className="fs-5 fw-bold">Shipping Information</p>
          <form className="Checkout">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <div>
                <input
                  type="text"
                  className="form-control bg-transparent text-white"
                  placeholder="Enter full name"
                  id="name"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white-50 border-end-0">
                  855+
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border-start-0"
                  placeholder="Enter your number"
                  id="phone"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control bg-transparent text-white"
                placeholder="Enter your address"
                id="address"
                autoComplete="off"
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="" className="form-label">
                Country
              </label>
              <p className="border p-2 rounded">Cambodia only</p>
            </div>
            <div className="mt-4">
              <p className="fw-medium">Select bank for payment</p>
              <div className="row">
                {bank.map((bank) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                    <img
                      src={bank.img}
                      alt="image"
                      className="img-fluid border"
                      style={{
                        backgroundColor: `${
                          selectedBank === bank.id ? "white" : "transparent"
                        }`,
                        cursor: "pointer",
                        padding: "3px ",
                      }}
                      onClick={() => setSelectedBank(bank.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 px-5 py-4 ">
          <p className="fs-5 fw-bold">Review your cart</p>
          <div
            style={{ maxHeight: "220px", overflow: "scroll" }}
            className="hide-scrollbar"
          >
            <CardProductCheckout />
            <CardProductCheckout />
            <CardProductCheckout />
          </div>{" "}
          <hr />
          <div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p>Subtotal</p>
              <p>479.49$</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p>Discount</p>
              <p style={{ color: "#00ff15ff" }}>-20$</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p>Shipping</p>
              <p>479.49$</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <p className="fw-bold">Total</p>
              <p className="fw-bold">1000$</p>
            </div>
            <div className="mt-3">
              <button
                className="btn text-white border w-100 fw-medium rounded-5 btnCheckout"
                type="submit"
                onClick={() => navigate("/checkout")}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
