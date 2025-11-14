import React from "react";
import camera from "../assets/images/camerasony.png";
const OrderItem = () => {
  return (
    <div className="border bg-blur rounded-4 py-3 mb-4">
      <div className="d-flex justify-content-between align-items-center text-white">
        <p className="ms-4 fw-bold px-2 py-1 rounded-5 border text-success" style={{width : "130px"}}><i class="fa-solid fa-circle-notch"></i> In progress</p>
        <p className="me-4">10 May 2025</p>
      </div>
      <div className="d-flex">
        <div className="imgItem ms-3">
          <img
            src={camera}
            alt=""
            //   className="img-fluid"
            width={"120px"}
            height={"120px"}
          />
        </div>
        <div className="text-white ms-4">
          <p className="fw-bold fs-5">Camera Sony</p>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <p className="me-4">Weight : 658g</p>
            <p className="me-4">Size : 12 x 23 x 77.8mm</p>
            <p className="me-4">ImageResolution : 33MP</p>
            <p className="me-4">Aspect Ratio : 3:2,4:3</p>
            <p className="me-4">Video Recording : 4K UHD</p>
          </div>
          <p className="fw-bold">$2000</p>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
