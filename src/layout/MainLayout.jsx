import React from "react";

// import Navbar from "../components/Navbar";
import Footer from "../components/homeComponents/Footer";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
 


  return (
    <>
      <div>
        {/* Navbar always visible */}
        {/* <Navbar /> */}

        {/* Page content */}
        <main className="">
          <Outlet />
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
