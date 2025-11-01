import React, { useContext } from "react";
import CardProduct from "../components/CardProduct";
import { ProductContext } from "../context/ProductContext";
import DetailProduct from "../components/DetailProduct";
const ProductPage = () => {
  const { showDetail,setShowDetail } = useContext(ProductContext);
  return (
    <React.Fragment>
      <section>
        <div
          className="container product"
          style={{ transform: "translateY(6rem)" }}
        >
          <h1 className="text-white fw-bold">Products</h1>
          <hr className="text-white" />
          <div className="row g-4 mt-3">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </section>
      <section>
        <div>
          {showDetail && <DetailProduct setShowDetail={setShowDetail} />}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductPage;
