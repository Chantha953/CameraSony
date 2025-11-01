import React, { useContext } from "react";
import camera from "../assets/images/camerasony.png";
import { ProductContext } from "../context/ProductContext";

const CardProduct = () => {
  const { setShowDetail } = useContext(ProductContext);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-white">
      <div className="border p-4 rounded-5 cardProduct position-relative">
        <img src={camera} className="w-100 img-fluid" alt="" />
        <button
          className="btn text-white border rounded-5 py-1 px-2 position-absolute btnDetail"
          onClick={() => setShowDetail(true)}
        >
          <i className="fa-solid fa-eye"></i>
        </button>
        <h2>Sony Alpha a7 IV</h2>
        <p className="fs-5 fw-bolder">
          2000$ <del className="fs-6 text-danger fw-bold">2200$</del>
        </p>
        <button className="w-100 fw-bold rounded-5 mb-3 text-white border-0 bg-transparent py-2 btnAddToCart">
          Add to Cart
        </button>
        <button className="w-100 fw-bold rounded-5 text-white bg-transparent border btnBuy py-2">
          Buy
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
