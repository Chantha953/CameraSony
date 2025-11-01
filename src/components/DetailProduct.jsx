import { useState, useContext,useEffect} from "react";
import camera from "../assets/images/camerasony.png";
import camera1 from "../assets/images/aboutCamera.png";
import { ProductContext } from "../context/ProductContext";
const DetailProduct = () => {
  const { showDetail, setShowDetail } = useContext(ProductContext);
  const [baseImage, setBaseImage] = useState(camera);
  const childImage = [camera, camera1, camera, camera1];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="showdetail d-flex justify-content-center align-items-center"
      data-aos="zoom-in"
    >
      <div className="productDetail p-4">
        <div className="border rounded-4">
          <div className="row p-4">
            <button
              className="closeDetail btn border-0 text-white position-absolute"
              onClick={() => setShowDetail(false)}
            >
              <i class="fa-solid fa-circle-xmark fs-3"></i>
            </button>
            <div className="col-12 col-md-6 text-center mb-4">
              <div className="baseImgDetail">
                <img
                  src={baseImage}
                  alt="Image"
                  width={"400px"}
                  height={"400px"}
                  className="rounded-3 baseImage"
                />
              </div>
              <div className="childImgDetail mt-5 d-flex justify-content-between align-items-center text-center">
                {childImage.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Image"
                    width={"100px"}
                    height={"100px"}
                    className="p-2 border rounded-2 childImage"
                    onClick={() => setBaseImage(img)}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 text-white pb-4">
              <h1 className="fw-bold">Sony Alpha a7 IV</h1>

              <div className="mt-4 border-top pt-3 infoProduct" style={{fontSize : "18px"}}>
                <h4>Specification</h4>
                <div className="mt-3">
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Weight</span>
                    <span>658g (Body Only)</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Size</span>
                    <span>131.3 × 96.4 × 79.8 mm</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Image Resolution</span>
                    <span>33 Megapixels</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Aspect Ratio</span>
                    <span>3:2, 4:3, 16:9, 1:1</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Video Recording</span>
                    <span>4K UHD (up to 60fps)</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-3 infoProduct" style={{fontSize : "18px"}}>
                <p className="mb-3">
                  <strong>Current Price :</strong> $2,000
                  <del className="text-danger ms-2">$2,200</del>
                </p>
                <p className="mb-3">
                  <strong>Availability :</strong> In Stock <i class="fa-solid fa-circle-check text-success ms-1" style={{fontSize : "16px"}}></i>
                </p>
                <p className="mb-0">
                  <strong>Warranty :</strong> 2 Years 
                </p>
              </div>

              <div className="d-flex gap-3 mt-4 btnDetail">
                <button className="btn border text-white  rounded-5 flex-fill fw-medium">
                  Add to Cart
                </button>
                <button className="btn btn-primary  rounded-5 flex-fill fw-medium">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
