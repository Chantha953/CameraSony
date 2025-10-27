import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { Commet } from "react-loading-indicators"; 
import Footer from "./Footer";
import Scroll from "./Scroll";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); 
    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <>
    <Scroll/>
      <Header />
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center bg-transparent text-white"
          style={{ height: "100vh", backdropFilter : "blur(50px)", overflowY : "hidden"}}
        >
         <div className="scaleAnimation">
          <Commet color="#32cd32" size="medium"  text="" textColor="" />
         </div>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer/>
    </>
  );
};

export default MainLayout;
