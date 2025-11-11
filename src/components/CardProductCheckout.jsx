import React from "react";
import camera from "../assets/images/camerasony.png";
const CardProductCheckout =()=>{
    return (
        <div>
            <div className="imgProduct d-flex mt-3">
                <img src={camera} alt="Image" width={"85px"} height={"70px"} className="img-fluid border p-1 rounded"/>
                <div className="ms-4">
                    <span className="fw-bold">Sony Alpha a7 IV</span><br />
                    <span>1x</span>
                    <p style={{transform: "translateY(20px)"}} className="fw-bold">2000$</p>
                </div>
            </div>
        </div>
    )
}

export default CardProductCheckout;